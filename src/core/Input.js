import { CONFIG } from '../config.js';

export class Input {
  constructor(game) {
    this.game = game;
    this.keys = new Set();
    this.mouseDown = [false, false, false];
    this.mouseDelta = { x: 0, y: 0 };
    this.wheelDelta = 0;
    this.pointerLocked = false;
    this._sensitivity = parseFloat(localStorage.getItem('gauntlet_sens') || CONFIG.camera.sensitivity);
    this._fov = parseFloat(localStorage.getItem('gauntlet_fov') || CONFIG.movement.baseFov);
    this._invertY = localStorage.getItem('gauntlet_invertY') === '1';
    this._azerty = localStorage.getItem('gauntlet_azerty') === '1';
    // FORCE FIX: W moet waar je kijkt lopen (camera-relative) - was per ongeluk world-relative
    localStorage.setItem('gauntlet_wasdWorld','0');
    this._wasdWorld = false;
    CONFIG.movement.wasdWorldRelative = false;
    CONFIG.movement.baseFov = this._fov;
    this._lastMouseTime = performance.now();

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this._onPointerLockChange = this._onPointerLockChange.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onVisibility = this._onVisibility.bind(this);
    this._onContextMenu = (e) => e.preventDefault();

    window.addEventListener('keydown', this._onKeyDown, { passive: false });
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('mousedown', this._onMouseDown);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('wheel', this._onWheel, { passive: true });
    window.addEventListener('blur', this._onBlur);
    window.addEventListener('focus', this._onFocus);
    document.addEventListener('visibilitychange', this._onVisibility);
    document.addEventListener('pointerlockchange', this._onPointerLockChange);
    document.addEventListener('contextmenu', this._onContextMenu);
  }

  get sensitivity() { return this._sensitivity; }
  set sensitivity(v) {
    this._sensitivity = Math.max(0.1, Math.min(3, v));
    localStorage.setItem('gauntlet_sens', String(this._sensitivity));
  }
  get fov() { return this._fov; }
  set fov(v) {
    this._fov = Math.max(70, Math.min(100, v));
    CONFIG.movement.baseFov = this._fov;
    localStorage.setItem('gauntlet_fov', String(this._fov));
  }
  get invertY() { return this._invertY; }
  set invertY(v) {
    this._invertY = !!v;
    localStorage.setItem('gauntlet_invertY', this._invertY ? '1' : '0');
  }
  get azerty() { return this._azerty; }
  set azerty(v) {
    this._azerty = !!v;
    localStorage.setItem('gauntlet_azerty', this._azerty ? '1' : '0');
  }
  get wasdWorld() { return this._wasdWorld; }
  set wasdWorld(v) {
    this._wasdWorld = !!v;
    CONFIG.movement.wasdWorldRelative = this._wasdWorld;
    localStorage.setItem('gauntlet_wasdWorld', this._wasdWorld ? '1' : '0');
  }

  isDown(code) { return this.keys.has(code); }

  isMoveForward() {
    if (this._azerty) return this.isDown('KeyZ') || this.isDown('ArrowUp');
    return this.isDown(CONFIG.input.moveForward) || this.isDown('ArrowUp');
  }
  isMoveBack() { return this.isDown(CONFIG.input.moveBack) || this.isDown('ArrowDown'); }
  isMoveLeft() {
    if (this._azerty) return this.isDown('KeyQ') || this.isDown('ArrowLeft');
    return this.isDown(CONFIG.input.moveLeft) || this.isDown('ArrowLeft');
  }
  isMoveRight() { return this.isDown(CONFIG.input.moveRight) || this.isDown('ArrowRight'); }
  isLeanLeft() {
    if (this._azerty) return this.isDown('KeyA');
    return this.isDown(CONFIG.input.leanLeft);
  }
  isLeanRight() { return this.isDown(CONFIG.input.leanRight); }
  isSprint() { return this.isDown(CONFIG.input.sprint); }
  isCrouch() { return this.isDown(CONFIG.input.crouch) || this.isDown(CONFIG.input.crouchAlt); }
  isJump() { return this.isDown(CONFIG.input.jump); }

  consumeMouseDelta() {
    // clamp to prevent huge jumps after lag/tab switch (max 80px per frame equiv)
    const clamp = (v, m) => Math.max(-m, Math.min(m, v));
    const dx = clamp(this.mouseDelta.x, 90);
    const dy = clamp(this.mouseDelta.y, 90);
    this.mouseDelta.x = 0; this.mouseDelta.y = 0;
    // also clear if too much time passed since last move (tab switch)
    const now = performance.now();
    if (now - this._lastMouseTime > 250) return { x: 0, y: 0 };
    return { x: dx, y: dy };
  }

  clearAllKeys() {
    this.keys.clear();
    this.mouseDown = [false, false, false];
    this.mouseDelta.x = 0; this.mouseDelta.y = 0;
  }

  requestPointerLock() {
    if (this.game.state !== 'playing') return;
    const canvas = this.game.renderer.domElement;
    if (canvas.requestPointerLock && !this.pointerLocked) {
      canvas.requestPointerLock().catch(()=>{});
    }
  }
  exitPointerLock() { if (document.pointerLockElement) document.exitPointerLock().catch(()=>{}); }

  _onKeyDown(e) {
    // Inventory toggle - always allow (even paused, but not dead)
    if (e.code === 'KeyI' || e.code === 'Tab') {
      if (this.game.state === 'playing' || this.game.state === 'paused') {
        e.preventDefault();
        this.game.weapons?.inventory?.toggle();
        // if inventory opened, pause pointer lock sensitivity? keep game but unlock cursor
        if (this.game.weapons.inventory.isOpen) this.exitPointerLock();
        else if (this.game.state === 'playing') this.requestPointerLock();
        return;
      }
    }
    // Weapon slots 1-4
    if (e.code === 'Digit3') {
      e.preventDefault();
      if (this.game.state === 'playing') this.game.weapons?.switchTo(2);
      return;
    }
    if (e.code === 'Digit4') {
      e.preventDefault();
      if (this.game.state === 'playing') this.game.weapons?.switchTo(3);
      return;
    }
    // Always allow pause even when paused/dead
    if (e.code === CONFIG.input.pause) {
      e.preventDefault();
      // close inventory first
      if (this.game.weapons?.inventory?.isOpen) { this.game.weapons.inventory.close(); return; }
      if (this.game.state !== 'dead') this.game.togglePause();
      return;
    }
    // Block game keys when not playing (prevent ghost input)
    if (this.game.state !== 'playing') {
      // still allow weapon switch in pause? No - block
      return;
    }
    // Prevent browser shortcuts that cause control loss
    if (['F5','F12'].includes(e.code)) return;
    if (e.repeat) {
      // For hold keys (movement/sprint/crouch/lean) we don't need repeat handling
      // For actions (reload/interact/weapon switch) block repeat to avoid spam
      if ([CONFIG.input.reload, CONFIG.input.interact, CONFIG.input.weap1, CONFIG.input.weap2, 'Digit3','Digit4'].includes(e.code)) return;
    }
    this.keys.add(e.code);

    // Discrete actions on keydown (not polling)
    if (e.code === CONFIG.input.weap1) this.game.weapons?.switchTo(0);
    if (e.code === CONFIG.input.weap2) this.game.weapons?.switchTo(1);
    if (e.code === CONFIG.input.reload) this.game.weapons?.tryReload();
    if (e.code === CONFIG.input.interact) this.game.interactions?.tryInteract();
  }
  _onKeyUp(e) { this.keys.delete(e.code); }
  _onBlur() {
    // Critical: clear all pressed keys when window loses focus - prevents stuck WASD/sprint
    this.clearAllKeys();
    if (this.game.state === 'playing') this.game.pause();
  }
  _onFocus() {
    this.clearAllKeys();
  }
  _onVisibility() {
    if (document.hidden) {
      this.clearAllKeys();
      if (this.game.state === 'playing') this.game.pause();
    }
  }
  _onMouseDown(e) {
    if (this.game.state === 'menu' && e.button === 0) {
      // Start handled by click handler in main, not here
      return;
    }
    this.mouseDown[e.button] = true;
    if (this.game.state === 'playing' && !this.pointerLocked) {
      if (document.getElementById('overlay')?.classList.contains('hidden')) this.requestPointerLock();
    }
  }
  _onMouseUp(e) { this.mouseDown[e.button] = false; }
  _onMouseMove(e) {
    if (!this.pointerLocked) return;
    // Use movementX/Y only when pointer locked; e.movement is already delta
    const mx = e.movementX || 0;
    const my = e.movementY || 0;
    // Deadzone for tiny jitter (<0.2 px ignore)
    if (Math.abs(mx) < 0.2 && Math.abs(my) < 0.2) return;
    this.mouseDelta.x += mx;
    this.mouseDelta.y += my;
    this._lastMouseTime = performance.now();
  }
  _onWheel(e) { this.wheelDelta += e.deltaY; }
  _onPointerLockChange() {
    const locked = !!document.pointerLockElement;
    // If we lost lock while playing, don't instantly re-lock (avoid loop), just update state
    this.pointerLocked = locked;
    if (!locked) {
      // Clear deltas to avoid jump on re-lock
      this.mouseDelta.x = 0; this.mouseDelta.y = 0;
    }
    this.game.onPointerLockChange(locked);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('mousedown', this._onMouseDown);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('wheel', this._onWheel);
    window.removeEventListener('blur', this._onBlur);
    window.removeEventListener('focus', this._onFocus);
    document.removeEventListener('visibilitychange', this._onVisibility);
    document.removeEventListener('pointerlockchange', this._onPointerLockChange);
    document.removeEventListener('contextmenu', this._onContextMenu);
  }
}
