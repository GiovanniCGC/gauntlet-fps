export class InteractionSystem {
  constructor(game) {
    this.game = game;
    this.currentTarget = null;
    this.promptEl = document.getElementById('interaction-prompt');
  }

  update(dt) {
    if (!this.game.player || this.game.state !== 'playing') {
      this.setPrompt(null);
      return;
    }
    const eye = this.game.player.getEyePosition();
    const dir = this.game.player.getForward();
    const target = this.game.world?.findInteractable(eye, dir, 2.4);
    this.currentTarget = target || null;
    if (target) {
      let text = 'Press [F] to interact';
      if (target.userData.isDoor) text = target.userData.open ? 'Press [F] to close door' : 'Press [F] to open door';
      if (target.userData.isPickup) {
        const map = { shotgun: 'Pick up M1014 Shotgun (60)', ammo_m4: 'Pick up 5.56 Ammo' };
        text = `Press [F] to ${map[target.userData.pickupType] || 'interact'}`;
      }
      this.setPrompt(text);
    } else {
      this.setPrompt(null);
    }
  }

  setPrompt(text) {
    if (!this.promptEl) return;
    if (text) {
      this.promptEl.textContent = text;
      this.promptEl.classList.remove('hidden');
    } else {
      this.promptEl.classList.add('hidden');
    }
  }

  tryInteract() {
    if (this.currentTarget) {
      this.game.world?.interact(this.currentTarget);
    }
  }
}
