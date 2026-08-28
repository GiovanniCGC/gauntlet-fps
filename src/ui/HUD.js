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
    this.indicators = {
      crouch: document.getElementById('indicator-crouch'),
      sprint: document.getElementById('indicator-sprint'),
      ads: document.getElementById('indicator-ads'),
      lean: document.getElementById('indicator-lean'),
    };
    this._hitmarkerTimer = 0;
    this._damageFlash = 0;
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
    // subtle screen shake via HUD could be added
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
