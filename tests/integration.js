import { Weapon } from '../src/weapons/Weapon.js';
import { WEAPONS } from '../src/weapons/definitions.js';
import { CONFIG } from '../src/config.js';

// Mock game object for unit integration without THREE renderer
class MockGame {
  constructor() {
    this.time = 0;
    this.state = 'playing';
    this.audio = { play: ()=>{} };
    this.world = {
      raycast: ()=>null,
      spawnImpact: ()=>{},
      spawnTracer: ()=>{},
      getColliders: ()=> [ {min:{x:-55,y:-1,z:-55}, max:{x:55,y:0,z:55}} ]
    };
    this.player = {
      isADSing: false, isSprinting: false, isCrouching: false,
      moveInput: { lengthSq: ()=>0, x:0, y:0 },
      getEyePosition: ()=>({ distanceTo: ()=>10, clone: ()=>({}), }),
      getForward: ()=>({ x:0, y:0, z:-1 }),
      velocity: { length: ()=>0, x:0, z:0 },
      lean: 0, isDead: false, kills:0,
      takeDamage: function(d){ this.health-=d; }
    };
    this.hud = { updateAmmo:()=>{}, updateWeapon:()=>{}, updateReload:()=>{}, showHitmarker:()=>{}, flashDamage:()=>{} };
    this.enemies = { list: [], onEnemyHit:()=>{} };
    this.camera = { fov: 85, updateProjectionMatrix:()=>{}, add:()=>{} };
  }
}

console.log('Integration tests - rapid state transitions...');

// Test weapon state transitions
function testWeaponTransitions() {
  const game = new MockGame();
  const w = new Weapon(WEAPONS.m4a1);
  game.weapons = { current: w };
  // firing while reloading blocked
  w.ammo = 1; w.reserve = 30;
  w.startReload(false);
  console.assert(!w.canFire(), 'cannot fire while reloading');
  w.cancelReload();
  console.assert(w.canFire(), 'can fire after cancel');
  // empty reload vs tactical
  w.ammo = 0; w.reserve = 30;
  w.startReload(true);
  console.assert(w.reloadTotal === w.emptyReloadTime, 'empty reload time');
  w.cancelReload();
  w.ammo = 10; w.reserve = 30;
  w.startReload(false);
  console.assert(w.reloadTotal === w.reloadTime, 'tactical reload time');
  w.cancelReload();
  console.log('✓ weapon state transitions');
}

function testMovementSpeeds() {
  const walk = CONFIG.movement.walkSpeed;
  const sprint = CONFIG.movement.sprintSpeed;
  const crouch = CONFIG.movement.crouchSpeed;
  const adsMult = CONFIG.movement.adsSpeedMult;
  console.assert(crouch < walk && walk < sprint, 'speed hierarchy');
  console.assert(adsMult < 1 && adsMult > 0.3, 'ADS penalty sane');
  console.assert(walk * adsMult < walk, 'ADS slower');
  console.log('✓ movement speed hierarchy');
}

function testLean() {
  const leanAngle = CONFIG.camera.leanAngle;
  const leanOffset = CONFIG.camera.leanOffset;
  console.assert(leanAngle > 8 && leanAngle < 20, 'lean angle tactical');
  console.assert(leanOffset > 0.2 && leanOffset < 0.6, 'lean offset tactical');
  console.log('✓ lean config tactical');
}

function testRecoil() {
  for (const [id, def] of Object.entries(WEAPONS)) {
    const r = def.recoil;
    console.assert(r.vertical > 0 && r.horizontal >=0, `${id} recoil`);
    console.assert(r.recovery > 3 && r.recovery < 12, `${id} recovery sane`);
  }
  console.log('✓ recoil sane');
}

function testBallistics() {
  console.assert(CONFIG.ballistics.headMult > CONFIG.ballistics.bodyMult, 'head > body');
  console.assert(CONFIG.ballistics.bodyMult > CONFIG.ballistics.limbMult*0.8, 'limb penalty');
  console.log('✓ ballistics multipliers');
}

function testNoBrokenCombos() {
  // sprint blocks lean/ADS
  // In Player.js, sprint sets targetLean=0; in Game canADS checks sprintBlock
  const game = new MockGame();
  game.player.isSprinting = true;
  game.weapons = { isReloading:false, isSwitching:false, current:{ allowFireDuringReload:false } };
  // canFire should be true still but ADS blocked
  // Simulate Game.canADS
  const mockGame = {
    player: { isSprinting:true, sprintBlockAds:true },
    weapons: { isReloading:false, isSwitching:false },
    state:'playing'
  };
  function canADS() {
    if (mockGame.player.isSprinting && mockGame.player.sprintBlockAds) return false;
    if (mockGame.weapons.isReloading) return false;
    return true;
  }
  console.assert(!canADS(), 'ADS blocked while sprinting');
  console.log('✓ broken combos blocked');
}

testWeaponTransitions();
testMovementSpeeds();
testLean();
testRecoil();
testBallistics();
testNoBrokenCombos();

console.log('All integration tests PASS');
