import { Weapon } from './Weapon.js';

export class Inventory {
  constructor(game, maxSlots = 4) {
    this.game = game;
    this.maxSlots = maxSlots;
    this.slots = new Array(maxSlots).fill(null);
    this.activeIndex = 0;
    this.isOpen = false;
  }

  // Add weapon definition, returns index or -1 if full
  addWeapon(def) {
    // if already have same id, just add reserve ammo
    const existing = this.slots.findIndex(s => s && s.id === def.id);
    if (existing !== -1) {
      this.slots[existing].reserve += def.reserve || 30;
      this.game.hud?.addKill(`<b>AMMO</b> + ${def.reserve || 30} voor ${def.name}`);
      return existing;
    }
    const empty = this.slots.findIndex(s => s === null);
    if (empty === -1) {
      this.game.hud?.addKill(`<b>INVENTORY VOL</b> — druk [I] om te beheren`);
      return -1;
    }
    const w = new Weapon(def);
    this.slots[empty] = w;
    // auto equip if current slot empty
    if (!this.getCurrent()) this.activeIndex = empty;
    this.game.hud?.addKill(`<b>PICKUP</b> ${def.name} → SLOT ${empty+1}`);
    this.updateHUD();
    this.render();
    return empty;
  }

  removeWeapon(index) {
    if (index < 0 || index >= this.maxSlots) return null;
    const w = this.slots[index];
    this.slots[index] = null;
    if (this.activeIndex === index) {
      // find next occupied
      const next = this.slots.findIndex(s => s !== null);
      this.activeIndex = next !== -1 ? next : 0;
    }
    this.updateHUD();
    this.render();
    return w;
  }

  switchTo(index) {
    if (index < 0 || index >= this.maxSlots) return false;
    if (!this.slots[index]) {
      this.game.audio?.play('dryfire', this.game.player?.position);
      return false;
    }
    if (index === this.activeIndex) return false;
    // if reloading, cancel
    const cur = this.getCurrent();
    if (cur?.isReloading) cur.cancelReload();
    this.activeIndex = index;
    this.game.weapons?.onSwitch(index);
    this.updateHUD();
    this.render();
    this.game.audio?.play('equip', this.game.player?.position);
    return true;
  }

  getCurrent() { return this.slots[this.activeIndex] || null; }
  getAll() { return this.slots; }

  toggle() {
    this.isOpen = !this.isOpen;
    const el = document.getElementById('inventory');
    if (el) el.classList.toggle('hidden', !this.isOpen);
    if (this.isOpen) {
      this.render();
      // pause is separate; inventory does not pause but unlocks cursor partially?
      // We keep game playing but show overlay without pausing, so controls still? For now pause game logic lightly
      document.getElementById('inventory')?.classList.remove('hidden');
    }
    return this.isOpen;
  }
  close() {
    this.isOpen = false;
    document.getElementById('inventory')?.classList.add('hidden');
  }

  updateHUD() {
    // update weapon manager ref if needed
    if (this.game.weapons) {
      this.game.weapons.current = this.getCurrent() || this.game.weapons.weapons[0] || null;
      this.game.weapons.currentIndex = this.activeIndex;
    }
  }

  render() {
    const grid = document.getElementById('inv-grid');
    if (!grid) return;
    grid.innerHTML = '';
    this.slots.forEach((w, i) => {
      const slot = document.createElement('div');
      slot.className = `inv-slot ${i === this.activeIndex ? 'active' : ''} ${w ? 'filled' : 'empty'}`;
      slot.dataset.index = i;
      if (w) {
        const pct = Math.round((w.ammo / w.magSize) * 100);
        slot.innerHTML = `
          <div class="inv-num">${i+1}</div>
          <div class="inv-name">${w.name}</div>
          <div class="inv-ammo">${w.ammo}/${w.reserve}</div>
          <div class="inv-bar"><div style="width:${pct}%"></div></div>
          <div class="inv-type">${w.type}</div>
        `;
      } else {
        slot.innerHTML = `<div class="inv-num">${i+1}</div><div class="inv-empty">— EMPTY —</div><div class="inv-hint">press F on pickup</div>`;
      }
      slot.addEventListener('click', () => this.switchTo(i));
      grid.appendChild(slot);
    });
    const cur = this.getCurrent();
    const detail = document.getElementById('inv-detail');
    if (detail) {
      if (cur) detail.innerHTML = `<b>${cur.name}</b> — ${cur.fireMode.toUpperCase()} • ${cur.damage} DMG • ${cur.fireRate} RPM<br><span>${cur.magSize} mag / ${cur.reserve} reserve</span>`;
      else detail.textContent = 'No weapon equipped';
    }
  }
}
