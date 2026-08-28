// Audio architecture with hooks - spatial when Web Audio available, silent fallback if assets missing
export class AudioManager {
  constructor(game) {
    this.game = game;
    this.ctx = null;
    this.master = 0.7;
    this.hooks = new Map();
    this.lastPlay = new Map();
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    } catch (e) { this.ctx = null; }
    // No real assets bundled; architecture ready for drop-in ogg/wav via /public/audio/
    // We synthesize tiny placeholder beeps so testing verifies hooks fire without pretending to have real sounds.
  }

  play(id, pos) {
    // throttling to avoid spam
    const now = this.game.time ?? performance.now() / 1000;
    const last = this.lastPlay.get(id) || -999;
    const throttle = { fire_m4a1: 0.05, fire_glock: 0.08, fire_shotgun: 0.25, enemy_fire: 0.12 }[id] ?? 0.04;
    if (now - last < throttle) return;
    this.lastPlay.set(id, now);

    // hook registry allows future asset binding
    if (this.hooks.has(id)) {
      try { this.hooks.get(id)(pos); } catch {}
    }

    // If WebAudio available, synthesize placeholder tone for verification (not claiming as final mix)
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(()=>{});

    const map = {
      fire_m4a1: { f: 180, dur: 0.06, type: 'square', gain: 0.22 },
      fire_glock: { f: 260, dur: 0.05, type: 'square', gain: 0.18 },
      fire_shotgun: { f: 120, dur: 0.09, type: 'sawtooth', gain: 0.32 },
      dryfire: { f: 700, dur: 0.04, type: 'sine', gain: 0.12 },
      reload: { f: 420, dur: 0.10, type: 'triangle', gain: 0.14 },
      reload_empty: { f: 380, dur: 0.14, type: 'triangle', gain: 0.14 },
      reload_end: { f: 520, dur: 0.08, type: 'sine', gain: 0.10 },
      equip: { f: 300, dur: 0.07, type: 'sine', gain: 0.11 },
      enemy_fire: { f: 150, dur: 0.05, type: 'square', gain: 0.16 },
      enemy_death: { f: 90, dur: 0.28, type: 'sawtooth', gain: 0.14 },
      hit: { f: 95, dur: 0.22, type: 'sawtooth', gain: 0.18 },
      land: { f: 80, dur: 0.12, type: 'sine', gain: 0.18 },
      jump: { f: 220, dur: 0.06, type: 'sine', gain: 0.09 },
      door_open: { f: 320, dur: 0.18, type: 'sine', gain: 0.12 },
      door_close: { f: 220, dur: 0.16, type: 'sine', gain: 0.12 },
      pickup: { f: 660, dur: 0.10, type: 'sine', gain: 0.15 },
      alert: { f: 440, dur: 0.12, type: 'square', gain: 0.10 },
      shell: { f: 900, dur: 0.02, type: 'sine', gain: 0.06 },
    };
    const cfg = map[id];
    if (!cfg) return; // silent for unknown hooks, but architecture exists

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = cfg.type;
    osc.frequency.value = cfg.f + (Math.random() * 18 - 9);
    gain.gain.value = cfg.gain * this.master;
    // spatial pan based on pos if available
    let panner = null;
    if (pos && this.ctx.createPanner) {
      panner = this.ctx.createPanner();
      panner.panningModel = 'equalpower';
      panner.setPosition(pos.x, pos.y, pos.z);
      const listener = this.ctx.listener;
      const cam = this.game.camera?.position;
      if (cam && listener.positionX) {
        listener.positionX.value = cam.x; listener.positionY.value = cam.y; listener.positionZ.value = cam.z;
        const fwd = this.game.player?.getForward();
        if (fwd && listener.forwardX) {
          listener.forwardX.value = fwd.x; listener.forwardY.value = fwd.y; listener.forwardZ.value = fwd.z;
        }
      }
      osc.connect(panner).connect(gain).connect(this.ctx.destination);
    } else {
      osc.connect(gain).connect(this.ctx.destination);
    }
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + cfg.dur);
    osc.start();
    osc.stop(this.ctx.currentTime + cfg.dur + 0.02);
  }

  registerHook(id, fn) { this.hooks.set(id, fn); }
  setMaster(v) { this.master = v; }
}
