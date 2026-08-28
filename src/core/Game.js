import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class Game {
  constructor({ scene, camera, renderer }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.state = 'menu'; // menu | playing | paused | dead
    this.time = 0;
    this.deltaTime = 0;

    // refs set by main.js
    this.player = null;
    this.weapons = null;
    this.enemies = null;
    this.world = null;
    this.interactions = null;
    this.hud = null;
    this.audio = null;
    this.input = null;

    this._pausedTimeScale = 0;
  }

  setRefs(refs) { Object.assign(this, refs); }

  start() {
    this.state = 'playing';
    this.hideOverlay();
    this.input?.requestPointerLock();
    this.player?.reset();
    this.enemies?.reset();
    this.weapons?.reset();
    this.hud?.show();
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    document.getElementById('overlay')?.classList.remove('hidden');
    document.getElementById('pause-screen')?.classList.remove('hidden');
    document.getElementById('start-screen')?.classList.add('hidden');
    document.getElementById('death-screen')?.classList.add('hidden');
    this.input?.exitPointerLock();
  }
  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.hideOverlay();
    this.input?.requestPointerLock();
  }
  togglePause() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused') this.resume();
    else if (this.state === 'menu') this.start();
  }
  hideOverlay() {
    document.getElementById('overlay')?.classList.add('hidden');
    document.getElementById('start-screen')?.classList.add('hidden');
    document.getElementById('pause-screen')?.classList.add('hidden');
    document.getElementById('death-screen')?.classList.add('hidden');
  }
  die(stats) {
    if (this.state === 'dead') return;
    this.state = 'dead';
    document.getElementById('overlay')?.classList.remove('hidden');
    document.getElementById('death-screen')?.classList.remove('hidden');
    document.getElementById('pause-screen')?.classList.add('hidden');
    document.getElementById('start-screen')?.classList.add('hidden');
    const el = document.getElementById('death-stats');
    if (el && stats) el.textContent = `Eliminated • Time survived: ${stats.time.toFixed(1)}s • Kills: ${stats.kills}`;
    this.input?.exitPointerLock();
  }
  restart() {
    this.hideOverlay();
    this.start();
  }

  onPointerLockChange(locked) {
    if (this.state === 'playing' && !locked) {
      // don't auto-pause if just died
      // but if unlocked via ESC, pause
      if (document.visibilityState === 'visible') this.pause();
    }
  }

  update(dt) {
    if (this.state !== 'playing') return;
    this.time += dt;
    this.deltaTime = dt;
  }

  // helper for weapon/UI to query state combinations
  canADS() {
    if (!this.player) return false;
    if (this.player.isSprinting && this.player.sprintBlockAds) return false;
    if (this.weapons?.isReloading) return false;
    if (this.weapons?.isSwitching) return false;
    if (this.state === 'dead') return false;
    return true;
  }
  canFire() {
    if (this.state !== 'playing') return false;
    if (this.weapons?.isReloading && !this.weapons?.current?.allowFireDuringReload) return false;
    if (this.weapons?.isSwitching) return false;
    if (this.player?.isDead) return false;
    return true;
  }
}
