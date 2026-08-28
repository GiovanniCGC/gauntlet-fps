import { CONFIG } from '../config.js';

export class Input {
  constructor(game) {
    this.game = game;
    this.keys = new Set();
    this.mouseDown = [false, false, false];
    this.mouseDelta = { x: 0, y: 0 };
    this.wheelDelta = 0;
    this.pointerLocked = false;
    this._sensitivity = CONFIG.camera.sensitivity;

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this._onPointerLockChange = this._onPointerLockChange.bind(this);
    this._onContextMenu = (e) => e.preventDefault();

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('mousedown', this._onMouseDown);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('wheel', this._onWheel, { passive: true });
    document.addEventListener('pointerlockchange', this._onPointerLockChange);
    document.addEventListener('contextmenu', this._onContextMenu);
  }

  get sensitivity() { return this._sensitivity; }
  set sensitivity(v) { this._sensitivity = v; }

  isDown(code) { return this.keys.has(code); }

  isMoveForward() { return this.isDown(CONFIG.input.moveForward); }
  isMoveBack() { return this.isDown(CONFIG.input.moveBack); }
  isMoveLeft() { return this.isDown(CONFIG.input.moveLeft); }
  isMoveRight() { return this.isDown(CONFIG.input.moveRight); }
  isSprint() { return this.isDown(CONFIG.input.sprint); }
  isCrouch() { return this.isDown(CONFIG.input.crouch) || this.isDown(CONFIG.input.crouchAlt); }
  isJump() { return this.isDown(CONFIG.input.jump); }
  isLeanLeft() { return this.isDown(CONFIG.input.leanLeft); }
  isLeanRight() { return this.isDown(CONFIG.input.leanRight); }
  isReload() { return this.isDown(CONFIG.input.reload); }
  isInteract() { return this.isDown(CONFIG.input.interact); }

  consumeMouseDelta() {
    const d = { x: this.mouseDelta.x, y: this.mouseDelta.y };
    this.mouseDelta.x = 0; this.mouseDelta.y = 0;
    return d;
  }

  requestPointerLock() {
    const canvas = this.game.renderer.domElement;
    if (canvas.requestPointerLock) canvas.requestPointerLock();
  }
  exitPointerLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  _onKeyDown(e) {
    if (e.code === CONFIG.input.pause && this.game.state !== 'dead') {
      e.preventDefault();
      this.game.togglePause();
      return;
    }
    // prevent stuck keys when paused
    if (this.game.state === 'paused' && e.code !== CONFIG.input.pause) return;
    this.keys.add(e.code);
    // weapon switching via game handler
    if (e.code === CONFIG.input.weap1) this.game.weapons?.switchTo(0);
    if (e.code === CONFIG.input.weap2) this.game.weapons?.switchTo(1);
    // R reload handled via polling to avoid repeat, but let game know
    if (e.repeat) return;
    if (e.code === CONFIG.input.reload) this.game.weapons?.tryReload();
    if (e.code === CONFIG.input.interact) this.game.interactions?.tryInteract();
    // quick sens debug
    if (e.code === 'F5') e.preventDefault();
  }
  _onKeyUp(e) { this.keys.delete(e.code); }
  _onMouseDown(e) {
    this.mouseDown[e.button] = true;
    if (this.game.state === 'playing' && !this.pointerLocked) {
      // clicking while unlocked should lock if overlay hidden
      if (document.getElementById('overlay')?.classList.contains('hidden')) this.requestPointerLock();
    }
    // fire handled via polling / events in WeaponManager
  }
  _onMouseUp(e) { this.mouseDown[e.button] = false; }
  _onMouseMove(e) {
    if (!this.pointerLocked) return;
    this.mouseDelta.x += e.movementX || 0;
    this.mouseDelta.y += e.movementY || 0;
  }
  _onWheel(e) { this.wheelDelta += e.deltaY; }
  _onPointerLockChange() {
    this.pointerLocked = !!document.pointerLockElement;
    this.game.onPointerLockChange(this.pointerLocked);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('mousedown', this._onMouseDown);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('wheel', this._onWheel);
    document.removeEventListener('pointerlockchange', this._onPointerLockChange);
    document.removeEventListener('contextmenu', this._onContextMenu);
  }
}
