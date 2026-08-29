import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Game } from './core/Game.js';
import { Input } from './core/Input.js';
import { Player } from './player/Player.js';
import { WeaponManager } from './weapons/WeaponManager.js';
import { World } from './world/World.js';
import { InteractionSystem } from './world/InteractionSystem.js';
import { EnemyManager } from './enemies/EnemyManager.js';
import { HUD } from './ui/HUD.js';
import { AudioManager } from './audio/AudioManager.js';

// Scene setup - cinematic
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080d12);
scene.fog = new THREE.Fog(0x0b1118, 38, 72);

const camera = new THREE.PerspectiveCamera(CONFIG.movement.baseFov, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 1.7, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.getElementById('app').prepend(renderer.domElement);

// Game core
const game = new Game({ scene, camera, renderer });
renderer.domElement.tabIndex = 0;

// Systems - fixed order, no reordering between sessions
const world = new World(game);
const player = new Player(game);
const weapons = new WeaponManager(game);
const enemies = new EnemyManager(game);
const interactions = new InteractionSystem(game);
const hud = new HUD(game);
const audio = new AudioManager(game);
const input = new Input(game);

game.setRefs({ player, weapons, world, interactions, enemies, hud, audio, input });
game.input = input;

// Build level - deterministic
world.build();
enemies.reset();
player.reset();
weapons.reset();
hud.updateHealth(player.health, player.maxHealth);
hud.updateAmmo(weapons.current.ammo, weapons.current.reserve, weapons.current.magSize);
hud.updateWeapon(weapons.current.name, weapons.current.fireMode.toUpperCase());

// --- UI wiring - WASD fix, AZERTY toggle ---
function syncUI() {
  const sens = input.sensitivity;
  const fov = input.fov;
  const inv = input.invertY;
  const az = input.azerty;
  ['sens-slider','sens-slider-p'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value = sens;
  });
  ['fov-slider','fov-slider-p'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value = fov;
  });
  ['invert-y','invert-y-p'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.checked = inv;
  });
  ['azerty','azerty-p'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.checked = az;
  });
  const sv=document.getElementById('sens-val'); if(sv) sv.textContent = sens.toFixed(2);
  const svp=document.getElementById('sens-val-p'); if(svp) svp.textContent = sens.toFixed(2);
  const fv=document.getElementById('fov-val'); if(fv) fv.textContent = fov + '°';
  const fvp=document.getElementById('fov-val-p'); if(fvp) fvp.textContent = fov + '°';
}
syncUI();

function bindSlider(id, handler){
  const el=document.getElementById(id);
  if(!el) return;
  el.addEventListener('input', e=>{
    handler(e.target.value);
    syncUI();
  });
}
bindSlider('sens-slider', v=> input.sensitivity = parseFloat(v));
bindSlider('sens-slider-p', v=> input.sensitivity = parseFloat(v));
bindSlider('fov-slider', v=> input.fov = parseFloat(v));
bindSlider('fov-slider-p', v=> input.fov = parseFloat(v));
['invert-y','invert-y-p'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.addEventListener('change', e=>{
    input.invertY = e.target.checked;
    syncUI();
  });
});
['azerty','azerty-p'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.addEventListener('change', e=>{
    input.azerty = e.target.checked;
    syncUI();
  });
});

const btnStart = document.getElementById('btn-start');
const btnResume = document.getElementById('btn-resume');
const btnRestart = document.getElementById('btn-restart');
const btnRetry = document.getElementById('btn-retry');

btnStart?.addEventListener('click', () => game.start());
btnResume?.addEventListener('click', () => game.resume());
btnRestart?.addEventListener('click', () => game.restart());
btnRetry?.addEventListener('click', () => game.restart());

renderer.domElement.addEventListener('click', () => {
  if (game.state === 'playing' && !input.pointerLocked) {
    // Only lock if overlay hidden (not paused)
    if (document.getElementById('overlay')?.classList.contains('hidden')) input.requestPointerLock();
  }
  if (game.state === 'menu') game.start();
});

// Resize - stable
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Main loop - fixed dt, no drift
let lastTime = performance.now() / 1000;
function animate() {
  requestAnimationFrame(animate);
  const now = performance.now() / 1000;
  let dt = now - lastTime;
  dt = Math.min(dt, 0.033); // cap 30fps min, prevents huge jumps that feel like control lag
  lastTime = now;

  if (game.state === 'playing') {
    // Fixed update order - always same, no reordering
    player.update(dt);
    weapons.update(dt);
    enemies.update(dt);
    world.update(dt);
    interactions.update(dt);
    hud.update(dt);
    game.update(dt);

    // Camera bob - subtle, frame-rate independent, not affecting controls
    const bobTime = game.time * (player.isSprinting ? CONFIG.camera.bobFrequencyWalk * 1.18 : CONFIG.camera.bobFrequencyWalk);
    const bobAmp = player.isSprinting ? CONFIG.camera.bobAmplitudeSprint : CONFIG.camera.bobAmplitudeWalk;
    let bobY = 0, bobX = 0;
    if (player.isGrounded && player.moveInput.lengthSq() > 0.01 && !player.isADSing) {
      const speedFactor = Math.min(1.6, player.velocity.length() / CONFIG.movement.walkSpeed);
      bobY = Math.sin(bobTime) * bobAmp * speedFactor;
      bobX = Math.cos(bobTime * 0.5) * bobAmp * 0.45 * speedFactor;
      if (player.isCrouching) { bobY *= 0.5; bobX *= 0.5; }
    } else if (!player.isADSing) {
      bobY = Math.sin(game.time * 1.02) * 0.0055;
      bobX = Math.cos(game.time * 0.68) * 0.0035;
    }
    // Apply as offset, but keep within camera rig - slight, not jarring
    camera.position.y += bobY * 0.28;
    camera.position.x += bobX * 0.28;
  } else {
    hud.update(dt);
  }
  renderer.render(scene, camera);
}
animate();

// Expose
window.__GAME__ = game;
window.__CONFIG__ = CONFIG;

console.log('%cGAUNTLET%c v2 — locked controls, elaborate HUD', 'background:#e63946;color:white;padding:4px 8px', 'color:#8ea6bf;padding:4px');
console.log('Input locked:', { sens: input.sensitivity, fov: input.fov, invert: input.invertY });
