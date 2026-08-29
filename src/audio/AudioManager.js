// AudioManager v5 - Realistic procedural synthesis (no external assets yet, but 100x more realistic than simple beeps)
// Uses WebAudio: noise buffer + bandpass + low thump + reverb tail for gunshots, recorded-like envelopes
export class AudioManager {
  constructor(game) {
    this.game = game;
    this.ctx = null;
    this.master = 0.52;
    this.hooks = new Map();
    this.lastPlay = new Map();
    this._noiseBuffer = null;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        this.ctx = new AC();
        this._noiseBuffer = this._makeNoiseBuffer(1.2);
      }
    } catch(e){ this.ctx=null; }
  }

  _makeNoiseBuffer(sec){
    if(!this.ctx) return null;
    const len = Math.floor(this.ctx.sampleRate * sec);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const ch = buf.getChannelData(0);
    for(let i=0;i<len;i++) ch[i] = (Math.random()*2-1) * (1 - i/len*0.35);
    return buf;
  }

  _getListenerPos(){
    const cam=this.game.camera?.position;
    return cam ? {x:cam.x, y:cam.y, z:cam.z} : {x:0,y:0,z:0};
  }

  play(id, pos){
    const now=this.game.time ?? performance.now()/1000;
    const last=this.lastPlay.get(id) || -999;
    const throttle={ fire_m4a1:0.055, fire_glock:0.09, fire_shotgun:0.24, enemy_fire:0.11 }[id] ?? 0.045;
    if(now-last < throttle) return;
    this.lastPlay.set(id, now);
    if(this.hooks.has(id)){ try{ this.hooks.get(id)(pos); }catch{} }
    if(!this.ctx) return;
    if(this.ctx.state==='suspended') this.ctx.resume().catch(()=>{});

    const t0=this.ctx.currentTime;
    const masterGain=this.ctx.createGain(); masterGain.gain.value=this.master;
    // panner for spatial if pos given
    let panner=null;
    if(pos && this.ctx.createPanner){
      panner=this.ctx.createPanner();
      panner.panningModel='HRTF';
      panner.distanceModel='inverse';
      panner.refDistance=6; panner.maxDistance=48; panner.rolloffFactor=1.1;
      panner.positionX.value=pos.x; panner.positionY.value=pos.y; panner.positionZ.value=pos.z;
      const lp=this._getListenerPos();
      const li=this.ctx.listener;
      if(li.positionX){ li.positionX.value=lp.x; li.positionY.value=lp.y; li.positionZ.value=lp.z; }
      panner.connect(masterGain);
      masterGain.connect(this.ctx.destination);
    } else {
      masterGain.connect(this.ctx.destination);
    }
    const out = panner || masterGain;

    const playNoiseBurst = (dur, bandFreq, q, gain, hpFreq=0) => {
      const src=this.ctx.createBufferSource(); src.buffer=this._noiseBuffer;
      const bp=this.ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=bandFreq; bp.Q.value=q;
      const hp=this.ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=hpFreq||80;
      const g=this.ctx.createGain(); g.gain.value=gain;
      const env=this.ctx.createGain(); env.gain.setValueAtTime(gain, t0);
      env.gain.exponentialRampToValueAtTime(0.0008, t0+dur);
      src.connect(bp).connect(hp).connect(env).connect(out);
      src.start(t0); src.stop(t0+dur+0.02);
    };
    const playThump = (freq, dur, gain, type='sine')=>{
      const o=this.ctx.createOscillator(); o.type=type; o.frequency.setValueAtTime(freq, t0);
      o.frequency.exponentialRampToValueAtTime(freq*0.72, t0+dur*0.6);
      const g=this.ctx.createGain(); g.gain.setValueAtTime(gain, t0);
      g.gain.exponentialRampToValueAtTime(0.0006, t0+dur);
      const lp=this.ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=420;
      o.connect(lp).connect(g).connect(out);
      o.start(t0); o.stop(t0+dur+0.02);
    };
    const playClick = (freq,gain,dur)=>{
      const o=this.ctx.createOscillator(); o.type='square'; o.frequency.value=freq;
      const g=this.ctx.createGain(); g.gain.setValueAtTime(gain, t0); g.gain.exponentialRampToValueAtTime(0.001, t0+dur);
      o.connect(g).connect(out); o.start(t0); o.stop(t0+dur);
    };

    // Realistic mappings
    switch(id){
      case 'fire_m4a1': {
        // sharp crack + body + tail
        playNoiseBurst(0.11, 1850, 0.9, 0.42, 90);
        playNoiseBurst(0.07, 4200, 1.6, 0.18, 1200);
        playThump(78, 0.14, 0.32, 'sine');
        playThump(145, 0.06, 0.18, 'square');
        // subtle echo tail
        setTimeout(()=>{
          if(!this.ctx) return;
          const o2=this.ctx.createOscillator(); o2.type='sine'; o2.frequency.value=38;
          const g2=this.ctx.createGain(); g2.gain.setValueAtTime(0.06, this.ctx.currentTime); g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime+0.22);
          o2.connect(g2).connect(out); o2.start(); o2.stop(this.ctx.currentTime+0.24);
        }, 38);
        break;
      }
      case 'fire_glock': {
        playNoiseBurst(0.09, 2200, 1.1, 0.34, 110);
        playNoiseBurst(0.05, 5200, 1.3, 0.14, 1500);
        playThump(92, 0.11, 0.26, 'sine');
        playThump(170, 0.04, 0.13, 'triangle');
        break;
      }
      case 'fire_shotgun': {
        // deep boom
        playNoiseBurst(0.16, 950, 0.7, 0.58, 45);
        playNoiseBurst(0.11, 2800, 0.9, 0.22, 180);
        playThump(52, 0.22, 0.52, 'sine');
        playThump(110, 0.12, 0.24, 'square');
        playThump(190, 0.05, 0.14, 'sawtooth');
        break;
      }
      case 'enemy_fire': {
        // distant, muffled
        playNoiseBurst(0.09, 1400, 0.8, 0.28, 220);
        playThump(85, 0.12, 0.22, 'sine');
        break;
      }
      case 'dryfire': {
        playClick(2100, 0.18, 0.04);
        setTimeout(()=> playClick(1600, 0.08, 0.03), 22);
        break;
      }
      case 'reload':
      case 'reload_empty': {
        // metallic slide + mag click
        playClick(4800, 0.09, 0.05);
        setTimeout(()=> playNoiseBurst(0.08, 900, 0.6, 0.11, 300), 70);
        setTimeout(()=> playClick(3200, 0.11, 0.04), 160);
        setTimeout(()=> playThump(120, 0.07, 0.09, 'square'), 210);
        break;
      }
      case 'reload_end': {
        playClick(2600, 0.12, 0.05);
        playNoiseBurst(0.06, 1100, 1.0, 0.07, 400);
        break;
      }
      case 'equip': {
        playNoiseBurst(0.07, 700, 0.8, 0.09, 250);
        playThump(90, 0.09, 0.07, 'sine');
        break;
      }
      case 'shell': {
        // brass tink
        const o=this.ctx.createOscillator(); o.type='sine'; o.frequency.value=3200+Math.random()*900;
        const g=this.ctx.createGain(); g.gain.setValueAtTime(0.08, t0); g.gain.exponentialRampToValueAtTime(0.001, t0+0.18);
        const bp=this.ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=3400; bp.Q.value=3.2;
        o.connect(bp).connect(g).connect(out); o.start(t0); o.stop(t0+0.2);
        setTimeout(()=>{
          const o2=this.ctx.createOscillator(); o2.type='sine'; o2.frequency.value=1900;
          const g2=this.ctx.createGain(); g2.gain.setValueAtTime(0.04, this.ctx.currentTime); g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime+0.12);
          o2.connect(g2).connect(out); o2.start(); o2.stop(this.ctx.currentTime+0.14);
        }, 48);
        break;
      }
      case 'hit': {
        playThump(72, 0.16, 0.22, 'sawtooth');
        playNoiseBurst(0.08, 1800, 1.2, 0.12, 600);
        break;
      }
      case 'land': {
        playThump(58, 0.13, 0.2, 'sine');
        playNoiseBurst(0.09, 320, 0.7, 0.14, 90);
        break;
      }
      case 'jump': {
        playNoiseBurst(0.06, 420, 0.9, 0.07, 200);
        playThump(110, 0.06, 0.06, 'sine');
        break;
      }
      case 'door_open':
      case 'door_close': {
        playNoiseBurst(0.14, 420, 0.6, 0.11, 100);
        playThump(68, 0.16, 0.09, 'sine');
        break;
      }
      case 'pickup': {
        const o=this.ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(660, t0); o.frequency.linearRampToValueAtTime(980, t0+0.12);
        const g=this.ctx.createGain(); g.gain.setValueAtTime(0.14, t0); g.gain.exponentialRampToValueAtTime(0.001, t0+0.22);
        o.connect(g).connect(out); o.start(t0); o.stop(t0+0.24);
        setTimeout(()=>{
          const o2=this.ctx.createOscillator(); o2.type='sine'; o2.frequency.value=1320;
          const g2=this.ctx.createGain(); g2.gain.setValueAtTime(0.08, this.ctx.currentTime); g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime+0.16);
          o2.connect(g2).connect(out); o2.start(); o2.stop(this.ctx.currentTime+0.18);
        }, 70);
        break;
      }
      default: {
        // generic UI blip
        playClick(900, 0.09, 0.06);
      }
    }
  }

  registerHook(id, fn){ this.hooks.set(id, fn); }
  setMaster(v){ this.master=Math.max(0,Math.min(1,v)); }
}
