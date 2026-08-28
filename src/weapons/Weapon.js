import { CONFIG } from '../config.js';

export class Weapon {
  constructor(def) {
    Object.assign(this, def);
    this.ammo = def.magSize;
    this.reserve = def.reserve;
    this.isReloading = false;
    this.reloadProgress = 0;
    this.reloadTotal = 0;
    this.chambered = true;
    this.fireCooldown = 0;
    this.shotsFired = 0;
    this.recoilAccum = 0;
  }

  canFire() {
    if (this.isReloading && !this.allowFireDuringReload) return false;
    if (this.ammo <= 0) return false;
    if (this.fireCooldown > 0) return false;
    return true;
  }

  getFireInterval() { return 60 / this.fireRate; }

  consumeAmmo() {
    if (this.ammo > 0) {
      this.ammo--;
      if (this.ammo === 0) this.chambered = false;
      return true;
    }
    return false;
  }

  startReload(isEmpty) {
    if (this.isReloading) return false;
    if (this.reserve <= 0) return false;
    if (this.ammo === this.magSize) return false;
    this.isReloading = true;
    this.reloadProgress = 0;
    // tactical vs empty
    const need = this.magSize - this.ammo;
    const has = Math.min(need, this.reserve);
    if (has <= 0) { this.isReloading = false; return false; }
    this.reloadTotal = (isEmpty || !this.chambered) ? this.emptyReloadTime : this.reloadTime;
    // shotgun per-shell logic handled externally
    if (this.type === 'shotgun') {
      // per shell reload, but we treat as single shell incremental
      this.reloadTotal = this.reloadTime;
      this._shotgunShellsToLoad = has;
      this._shotgunLoaded = 0;
    }
    return true;
  }

  updateReload(dt) {
    if (!this.isReloading) return false;
    this.reloadProgress += dt;
    if (this.reloadProgress >= this.reloadTotal) {
      if (this.type === 'shotgun') {
        // load one shell
        this.ammo = Math.min(this.magSize, this.ammo + 1);
        this.reserve = Math.max(0, this.reserve - 1);
        this._shotgunLoaded++;
        this.chambered = true;
        if (this._shotgunLoaded >= this._shotgunShellsToLoad || this.ammo >= this.magSize || this.reserve <= 0) {
          this.isReloading = false;
          return true; // completed all shells
        } else {
          // continue next shell
          this.reloadProgress = 0;
          return false;
        }
      } else {
        const need = this.magSize - this.ammo;
        const load = Math.min(need, this.reserve);
        this.ammo += load;
        this.reserve -= load;
        this.chambered = true;
        this.isReloading = false;
        return true;
      }
    }
    return false;
  }

  cancelReload() {
    if (!this.isReloading) return;
    // if shotgun, keep what was loaded
    this.isReloading = false;
    this.reloadProgress = 0;
  }

  addReserve(amount) {
    this.reserve += amount;
  }
}
