export class HUD {
  constructor(game) {
    this.game = game;
    this.elMag = document.getElementById('ammo-mag');
    this.elRes = document.getElementById('ammo-reserve');
    this.elAmmo = document.getElementById('ammo-display');
    this.elWeapon = document.getElementById('weapon-name');
    this.elMode = document.getElementById('weapon-mode');
    this.elCal = document.getElementById('weapon-cal');
    this.elHealth = document.getElementById('health-text');
    this.elHealthFill = document.getElementById('health-fill');
    this.elCrosshair = document.getElementById('crosshair');
    this.elAmmoType = document.getElementById('ammo-type');
    this.elAmmoTotal = document.getElementById('ammo-total');
    this.elReloadBar = document.getElementById('reload-bar');
    this.elReloadFill = document.getElementById('reload-fill');
    this.elCompassDeg = document.getElementById('compass-deg');
    this.elVignette = document.getElementById('damage-vignette');
    this.elHit = document.getElementById('hit-indicator');
    this.elPauseKills = document.getElementById('pause-kills');
    this.elPauseTime = document.getElementById('pause-time');
    this.elPauseHp = document.getElementById('pause-hp');
    this.elMinimap = document.getElementById('minimap');
    this.elKillfeed = document.getElementById('killfeed');
    this.elObjHostiles = document.getElementById('obj-hostiles');
    this.elObjSector = document.getElementById('obj-sector');
    this.minimapCtx = this.elMinimap?.getContext('2d') || null;
    this.indicators = {
      crouch: document.getElementById('indicator-crouch'),
      sprint: document.getElementById('indicator-sprint'),
      ads: document.getElementById('indicator-ads'),
      lean: document.getElementById('indicator-lean'),
    };
    this._hitmarkerTimer = 0;
    this._damageFlash = 0;
    this._killQueue = [];
  }

  show() {}

  updateAmmo(mag, reserve, magSize) {
    if (this.elMag) this.elMag.textContent = String(mag);
    if (this.elRes) this.elRes.textContent = String(reserve);
    if (this.elAmmo) this.elAmmo.classList.toggle('empty', mag === 0);
    if (this.elAmmoType) this.elAmmoType.textContent = `${magSize} RD MAG`;
    if (this.elAmmoTotal) this.elAmmoTotal.textContent = `${reserve} RES`;
  }

  updateWeapon(name, mode) {
    if (this.elWeapon) this.elWeapon.textContent = name;
    if (this.elMode) this.elMode.textContent = mode;
    const calMap = { M4A1: '5.56×45', G19: '9×19', M1014: '12GA', G19: '9×19' };
    if (this.elCal) this.elCal.textContent = calMap[name] || '';
  }

  updateReload(isReloading) {
    if (this.elAmmo) this.elAmmo.classList.toggle('reload', isReloading);
    if (this.elReloadBar) this.elReloadBar.classList.toggle('hidden', !isReloading);
    if (isReloading && this.game.weapons?.current) {
      const w = this.game.weapons.current;
      const pct = Math.min(100, (w.reloadProgress / w.reloadTotal) * 100);
      if (this.elReloadFill) this.elReloadFill.style.width = `${pct}%`;
    } else if (this.elReloadFill) this.elReloadFill.style.width = '0%';
  }

  updateHealth(hp, max) {
    if (this.elHealth) this.elHealth.textContent = String(Math.ceil(hp));
    if (this.elHealthFill) this.elHealthFill.style.setProperty('--hp', `${(hp / max) * 100}%`);
    if (this.elHealth) this.elHealth.style.color = hp < 30 ? '#e63946' : hp < 60 ? '#ffcc33' : '#fff';
    if (this.elPauseHp) this.elPauseHp.textContent = String(Math.ceil(hp));
  }

  showHitmarker(isKill) {
    this._hitmarkerTimer = isKill ? 0.45 : 0.20;
    if (this.elCrosshair) {
      this.elCrosshair.classList.add('hit');
      setTimeout(()=> this.elCrosshair?.classList.remove('hit'), this._hitmarkerTimer * 1000);
    }
    if (this.elHit) {
      this.elHit.classList.remove('hidden');
      this.elHit.classList.add('active');
      setTimeout(()=> { this.elHit?.classList.remove('active'); this.elHit?.classList.add('hidden'); }, 180);
    }
  }

  flashDamage(fromPos) {
    this._damageFlash = 0.55;
    if (this.elVignette) {
      this.elVignette.classList.add('active');
      setTimeout(()=> this.elVignette?.classList.remove('active'), 420);
    }
    // directional hit arrow
    if (fromPos && this.game.player) {
      const p = this.game.player.position;
      const dir = fromPos.clone().sub(p); dir.y=0;
      const angle = Math.atan2(dir.x, -dir.z) - this.game.player.yaw;
      this._showHitDir(angle);
    }
  }
  _showHitDir(angle){
    const wrap=document.getElementById('hud');
    if(!wrap) return;
    const el=document.createElement('div'); el.className='hit-dir';
    const arrow=document.createElement('div'); arrow.className='hit-arrow';
    el.appendChild(arrow);
    el.style.left='50%'; el.style.top='50%';
    // place on circle radius 92px
    const r=92;
    el.style.transform=`translate(-50%,-50%) rotate(${angle}rad) translateY(-${r}px)`;
    wrap.appendChild(el);
    setTimeout(()=> el.remove(), 900);
  }
  addKill(text){
    if(!this.elKillfeed) return;
    const item=document.createElement('div'); item.className='kill-item';
    item.innerHTML=text;
    this.elKillfeed.appendChild(item);
    setTimeout(()=> { item.style.opacity='0'; item.style.transform='translateX(8px)'; setTimeout(()=>item.remove(),300); }, 3400);
    // also update objective
    this.updateObjective();
  }
  updateObjective(){
    if(this.elObjHostiles){
      const alive=(this.game.enemies?.list||[]).filter(e=>!e.isDead).length;
      const total=(this.game.enemies?.list||[]).length || 5;
      this.elObjHostiles.textContent=`${total-alive}/${total}`;
      this.elObjHostiles.style.color = alive===0 ? 'var(--ok)' : 'var(--text)';
    }
    if(this.elObjSector && this.game.player){
      const x=this.game.player.position.x, z=this.game.player.position.z;
      let sector='A-01';
      if(z < -12) sector = z < -26 ? 'C-03' : 'B-02';
      this.elObjSector.textContent=sector;
    }
  }

  _drawMinimap(){
    if(!this.minimapCtx || !this.game.player || !this.game.world) return;
    const ctx=this.minimapCtx; const s=132; const range=36;
    ctx.clearRect(0,0,s,s);
    // bg
    ctx.fillStyle='#080d12'; ctx.fillRect(0,0,s,s);
    // grid
    ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1;
    for(let i=0;i<s;i+=16){ ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,s); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(s,i); ctx.stroke(); }
    const px=this.game.player.position.x, pz=this.game.player.position.z;
    const yaw=this.game.player.yaw;
    const toMinimap=(x,z)=> ({ x: s/2 + (x - px)/range * s*0.45, y: s/2 + (z - pz)/range * s*0.45 });
    // world boxes as minimap
    ctx.fillStyle='rgba(90,108,128,0.55)';
    for(const b of this.game.world.getColliders()){
      if(b.max.y < 0.5) continue;
      if(b.max.x - b.min.x > 50) continue; // skip perimeter huge
      const a=toMinimap(b.min.x, b.min.z), c=toMinimap(b.max.x, b.max.z);
      const w=c.x - a.x, h=c.y - a.y;
      if(w<1||h<1) continue;
      if(Math.abs(a.x - s/2) > s*0.7 || Math.abs(a.y - s/2) > s*0.7) continue;
      ctx.fillRect(a.x, a.y, w, h);
    }
    // enemies
    for(const e of this.game.enemies?.list||[]){
      const p=toMinimap(e.position.x, e.position.z);
      ctx.fillStyle= e.isDead ? 'rgba(120,120,120,0.7)' : (e.state==='pursuit'?'#e63946':'#e6a23c');
      ctx.beginPath(); ctx.arc(p.x, p.y, e.isDead?2.2:3.2,0,Math.PI*2); ctx.fill();
      if(!e.isDead){ ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.beginPath(); ctx.arc(p.x + Math.sin(e.yaw)*4, p.y + Math.cos(e.yaw)*4, 1.2,0,Math.PI*2); ctx.fill(); }
    }
    // player
    ctx.fillStyle='#2dd4a8'; ctx.beginPath(); ctx.arc(s/2, s/2, 3.8,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(45,212,168,0.9)'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(s/2, s/2); ctx.lineTo(s/2 + Math.sin(yaw)*10, s/2 + Math.cos(yaw)*-10); ctx.stroke();
    // north
    ctx.fillStyle='rgba(255,204,51,0.95)'; ctx.font='8px JetBrains Mono'; ctx.fillText('N', s/2-4, 10);
  }

  update(dt) {
    const player = this.game.player;
    const weapons = this.game.weapons;
    if (player && this.elCrosshair) {
      const isADS = weapons?.isADS || player.isADSing;
      const isSprint = player.isSprinting;
      this.elCrosshair.classList.toggle('aiming', isADS);
      this.elCrosshair.classList.toggle('sprinting', isSprint);
      // spread-driven gap: expand crosshair lines slightly when moving / high spread
      const spread = weapons?.current?.spread;
      let expand = 0;
      if (spread && !isADS) {
        let base = spread.hip;
        if (player.isSprinting) base *= 1.6;
        else if (player.moveInput.lengthSq() > 0.05) base *= spread.movePenalty;
        if (player.isCrouching) base *= spread.crouchBonus;
        expand = Math.min(6, (base - spread.ads) * 1.2);
      }
      this.elCrosshair.style.setProperty('--expand', `${expand}px`);
      // apply to lines via transform would require CSS var; we do simple opacity
      if (!isADS) this.elCrosshair.style.opacity = player.moveInput.lengthSq() > 0.05 ? '0.86' : '0.96';
    }
    // compass
    if (player && this.elCompassDeg) {
      const deg = Math.round((player.yaw * 180/Math.PI + 360) % 360);
      this.elCompassDeg.textContent = `${deg}°`;
    }
    // indicators
    if (player) {
      this.indicators.crouch?.classList.toggle('active', player.isCrouching);
      this.indicators.sprint?.classList.toggle('active', player.isSprinting);
      this.indicators.ads?.classList.toggle('active', !!weapons?.isADS);
      const leaning = Math.abs(player.lean) > 0.12;
      this.indicators.lean?.classList.toggle('active', leaning);
      if (this.indicators.lean) {
        this.indicators.lean.innerHTML = leaning ? `<i></i>${player.lean < -0.12 ? 'LEAN ←' : 'LEAN →'}` : '<i></i>LEAN';
      }
    }
    // reload bar progress
    if (weapons?.current?.isReloading) this.updateReload(true);
    // minimap - tactical 100x
    this._drawMinimap();
    this.updateObjective();
    // pause stats
    if (this.game.state === 'paused' && player) {
      if (this.elPauseKills) this.elPauseKills.textContent = String(player.kills);
      if (this.elPauseTime) this.elPauseTime.textContent = `${player.timeAlive.toFixed(1)}s`;
    }
    if (this._hitmarkerTimer > 0) {
      this._hitmarkerTimer -= dt;
      if (this._hitmarkerTimer <= 0 && this.elCrosshair) this.elCrosshair.classList.remove('hit');
    }
    if (this._damageFlash > 0) this._damageFlash -= dt;
  }
}
