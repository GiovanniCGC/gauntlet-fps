export class HUD {
  constructor(game) {
    this.game = game;
    this.elMag = document.getElementById('ammo-mag');
    this.elRes = document.getElementById('ammo-reserve');
    this.elSep = document.getElementById('ammo-sep');
    this.elAmmo = document.getElementById('ammo-display');
    this.elWeapon = document.getElementById('weapon-name');
    this.elMode = document.getElementById('weapon-mode');
    this.elHealth = document.getElementById('health-text');
    this.elHealthFill = document.getElementById('health-fill');
    this.elCrosshair = document.getElementById('crosshair');
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
    if (this.elAmmo) {
      this.elAmmo.classList.toggle('empty', mag === 0);
    }
  }
  updateWeapon(name, mode) {
    if (this.elWeapon) this.elWeapon.textContent = name;
    if (this.elMode) this.elMode.textContent = mode;
  }
  updateReload(isReloading) {
    if (this.elAmmo) this.elAmmo.classList.toggle('reload', isReloading);
  }
  updateHealth(hp, max) {
    if (this.elHealth) this.elHealth.textContent = String(Math.ceil(hp));
    if (this.elHealthFill) this.elHealthFill.style.setProperty('--hp', `${(hp / max) * 100}%`);
    if (hp < 30 && this.elHealth) this.elHealth.style.color = '#e63946';
    else if (this.elHealth) this.elHealth.style.color = '#fff';
  }
  showHitmarker(isKill) {
    this._hitmarkerTimer = isKill ? 0.45 : 0.22;
    if (this.elCrosshair) {
      this.elCrosshair.style.background = isKill ? '#ff4444' : '#fff';
      this.elCrosshair.style.transform = 'translate(-50%,-50%) scale(1.35)';
    }
  }
  flashDamage(fromPos) {
    this._damageFlash = 0.55;
    // vignette via body
    document.body.style.boxShadow = 'inset 0 0 80px rgba(230,57,70,0.55)';
    setTimeout(() => { document.body.style.boxShadow = 'none'; }, 280);
  }

  update(dt) {
    // crosshair visibility
    const player = this.game.player;
    const weapons = this.game.weapons;
    if (player && this.elCrosshair) {
      const isADS = weapons?.isADS || player.isADSing;
      const isSprint = player.isSprinting;
      this.elCrosshair.classList.toggle('aiming', isADS);
      this.elCrosshair.classList.toggle('sprinting', isSprint);
      // spread: expand slightly if moving
      const moving = player.moveInput?.lengthSq() > 0.1;
      if (!isADS && moving) this.elCrosshair.style.opacity = '0.75';
      else if (!isADS) this.elCrosshair.style.opacity = '0.92';
    }
    // indicators
    if (player) {
      this.indicators.crouch?.classList.toggle('active', player.isCrouching);
      this.indicators.sprint?.classList.toggle('active', player.isSprinting);
      this.indicators.ads?.classList.toggle('active', !!weapons?.isADS);
      this.indicators.lean?.classList.toggle('active', Math.abs(player.lean) > 0.15);
      if (this.indicators.lean) this.indicators.lean.textContent = player.lean < -0.15 ? 'LEAN ←' : player.lean > 0.15 ? 'LEAN →' : 'LEAN';
    }
    // hitmarker timer
    if (this._hitmarkerTimer > 0) {
      this._hitmarkerTimer -= dt;
      if (this._hitmarkerTimer <= 0 && this.elCrosshair) {
        this.elCrosshair.style.background = '';
        this.elCrosshair.style.transform = '';
      }
    }
    if (this._damageFlash > 0) this._damageFlash -= dt;
  }
}
