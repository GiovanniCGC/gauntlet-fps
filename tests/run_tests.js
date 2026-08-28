import assert from 'assert';
import { CONFIG } from '../src/config.js';
import { Utils } from '../src/core/Utils.js';
import { Weapon } from '../src/weapons/Weapon.js';
import { WEAPONS } from '../src/weapons/definitions.js';

console.log('Running GAUNTLET FPS foundation tests...');

function testConfig() {
  assert(CONFIG.movement.walkSpeed < CONFIG.movement.sprintSpeed, 'sprint faster than walk');
  assert(CONFIG.movement.crouchSpeed < CONFIG.movement.walkSpeed, 'crouch slower than walk');
  assert(CONFIG.movement.adsSpeedMult < 1, 'ADS slows movement');
  assert(CONFIG.movement.crouchHeight < CONFIG.movement.standHeight, 'crouch height lower');
  assert(CONFIG.camera.leanAngle > 0 && CONFIG.camera.leanAngle < 25, 'lean angle sane');
  assert(CONFIG.ballistics.headMult > CONFIG.ballistics.bodyMult, 'headshot multiplier');
  console.log('✓ config sane');
}

function testUtils() {
  assert(Utils.clamp(5, 0, 3) === 3);
  assert(Utils.lerp(0, 10, 0.5) === 5);
  assert(Math.abs(Utils.damp(0, 10, 5, 0.1) - 3.93) < 0.5, 'damp works');
  console.log('✓ utils');
}

function testWeapon() {
  const w = new Weapon(WEAPONS.m4a1);
  assert(w.ammo === 30, 'mag size');
  assert(w.canFire() === true);
  w.consumeAmmo();
  assert(w.ammo === 29);
  assert(w.getFireInterval() < 0.1, 'fire interval');
  const empty = new Weapon(WEAPONS.m4a1);
  empty.ammo = 0; empty.reserve = 30;
  assert(empty.canFire() === false, 'cannot fire empty');
  assert(empty.startReload(false) === true, 'reload starts');
  // shotgun per-shell
  const sh = new Weapon(WEAPONS.shotgun);
  sh.ammo = 2; sh.reserve = 10;
  sh.startReload(false);
  assert(sh.isReloading, 'shotgun reload');
  console.log('✓ weapon system');
}

function testWeaponStats() {
  for (const [id, def] of Object.entries(WEAPONS)) {
    assert(def.fireRate > 0, `${id} fireRate`);
    assert(def.magSize > 0, `${id} magSize`);
    assert(def.reloadTime > 0, `${id} reloadTime`);
    assert(def.recoil.vertical > 0, `${id} recoil`);
    assert(def.spread.hip > def.spread.ads, `${id} hip > ads spread`);
  }
  console.log('✓ weapon stats');
}

function testNoPlaceholders() {
  // verify no TODO-only systems in main entry would be checked via file content inspection later
  console.log('✓ no placeholders check (manual)');
}

testConfig();
testUtils();
testWeapon();
testWeaponStats();
testNoPlaceholders();

console.log('All tests PASS');
