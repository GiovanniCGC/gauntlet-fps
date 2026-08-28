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

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c141d);

const camera = new THREE.PerspectiveCamera(CONFIG.movement.baseFov, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 1.7, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('app').prepend(renderer.domElement);

// Game core
const game = new Game({ scene, camera, renderer });
renderer.domElement.tabIndex = 0;

// Systems
const world = new World(game);
const player = new Player(game);
const weapons = new WeaponManager(game);
const enemies = new EnemyManager(game);
const interactions = new InteractionSystem(game);
const hud = new HUD(game);
const audio = new AudioManager(game);
const input = new Input(game);

game.setRefs({ player, weapons, world, interactions, enemies, hud, audio, input });
game.input = input; // alias

// Build level
world.build();
enemies.reset();
player.reset();
weapons.reset();
hud.updateHealth(player.health, player.maxHealth);
hud.updateAmmo(weapons.current.ammo, weapons.current.reserve);
hud.updateWeapon(weapons.current.name, weapons.current.fireMode.toUpperCase());

// Overlay handlers
const btnStart = document.getElementById('btn-start');
const btnResume = document.getElementById('btn-resume');
const btnRestart = document.getElementById('btn-restart');
const btnRetry = document.getElementById('btn-retry');
const sensSlider = document.getElementById('sens-slider');
const fovSlider = document.getElementById('fov-slider');

btnStart?.addEventListener('click', () => game.start());
btnResume?.addEventListener('click', () => game.resume());
btnRestart?.addEventListener('click', () => game.restart());
btnRetry?.addEventListener('click', () => game.restart());
sensSlider?.addEventListener('input', (e) => { input.sensitivity = parseFloat(e.target.value); });
fovSlider?.addEventListener('input', (e) => { CONFIG.movement.baseFov = parseFloat(e.target.value); });

renderer.domElement.addEventListener('click', () => {
  if (game.state === 'playing' && !input.pointerLocked) input.requestPointerLock();
  if (game.state === 'menu') game.start();
});

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Head bob / camera effects integrated via player + weapon manager
let lastTime = performance.now() / 1000;
let frameCount = 0;

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now() / 1000;
  let dt = now - lastTime;
  dt = Math.min(dt, 0.05); // clamp for stability
  lastTime = now;

  // always update even if paused to keep UI responsive
  if (game.state === 'playing') {
    player.update(dt);
    weapons.update(dt);
    enemies.update(dt);
    world.update(dt);
    interactions.update(dt);
    hud.update(dt);
    game.update(dt);

    // additional camera bob logic (sprint bob, landing)
    // Applied via player camera rig; add subtle floating to camera for idle breathing
    const bobTime = game.time * (player.isSprinting ? CONFIG.camera.bobFrequencyWalk * 1.25 : CONFIG.camera.bobFrequencyWalk);
    const bobAmp = player.isSprinting ? CONFIG.camera.bobAmplitudeSprint : CONFIG.camera.bobAmplitudeWalk;
    let bobY = 0, bobX = 0;
    if (player.isGrounded && player.moveInput.lengthSq() > 0.01 && !player.isADSing) {
      const speedFactor = player.velocity.length() / CONFIG.movement.walkSpeed;
      bobY = Math.sin(bobTime) * bobAmp * speedFactor;
      bobX = Math.cos(bobTime * 0.5) * bobAmp * 0.5 * speedFactor;
      if (player.isCrouching) { bobY *= 0.55; bobX *= 0.55; }
    } else if (!player.isADSing) {
      // idle breathing
      bobY = Math.sin(game.time * 1.05) * 0.006;
      bobX = Math.cos(game.time * 0.7) * 0.004;
    }
    camera.position.y += bobY * 0.35;
    camera.position.x += bobX;

    // landing kick handled via player velocity? add small impulse on fall
  } else {
    // still update HUD indicators
    hud.update(dt);
  }

  // debug
  frameCount++;
  renderer.render(scene, camera);
}
animate();

// Expose for tests / console
window.__GAME__ = game;
window.__CONFIG__ = CONFIG;

// Build verification log
console.log('%cGAUNTLET FPS%c Foundation loaded — press Click to Play', 'background:#e63946;color:white;padding:4px 8px;border-radius:4px', 'color:#8ea6bf;padding:4px');
console.log('Systems:', { player, weapons, world, enemies, hud, audio, input });
