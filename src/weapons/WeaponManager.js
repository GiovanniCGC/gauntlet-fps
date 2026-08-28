import * as THREE from 'three';
import { Weapon } from './Weapon.js';
import { WEAPONS } from './definitions.js';
import { CONFIG } from '../config.js';
import { Utils } from '../core/Utils.js';

export class WeaponManager {
  constructor(game) {
    this.game = game;
    this.weapons = [
      new Weapon(WEAPONS.m4a1),
      new Weapon(WEAPONS.glock),
    ];
    this.currentIndex = 0;
    this.current = this.weapons[this.currentIndex];
    this.adsProgress = 0;
    this.targetADS = 0;
    this.isADS = false;
    this.isReloading = false;
    this.isSwitching = false;
    this.switchProgress = 0;
    this.switchTarget = 0;
    this.fireHeld = false;
    this.lastFireTime = -999;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.recoilRecovery = 0;
    this.shotCount = 0;
    this.weaponModelOffset = new THREE.Vector3();
    this.weaponSway = new THREE.Vector2(0, 0);

    // visual weapon mesh (simple)
    this.weaponGroup = new THREE.Group();
    this.weaponMesh = null;
    this.muzzleFlashUntil = 0;
    this.tracerMeshes = [];

    this._createWeaponMesh();
  }

  _createWeaponMesh() {
    // Detailed viewmodel - 100x: mag, stock, bolt, sight with proper alignment for ADS
    const mesh = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1b2127, roughness: 0.58, metalness: 0.28 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0d1216, roughness: 0.62, metalness: 0.22 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x1a1e23, roughness: 0.42, metalness: 0.58 });
    // receiver
    const recGeo = new THREE.BoxGeometry(0.072, 0.058, 0.30);
    const rec = new THREE.Mesh(recGeo, bodyMat);
    rec.position.set(0, -0.078, -0.20); rec.castShadow = true; mesh.add(rec);
    // handguard
    const hgGeo = new THREE.BoxGeometry(0.056, 0.038, 0.18);
    const hg = new THREE.Mesh(hgGeo, darkMat);
    hg.position.set(0, -0.072, -0.36); mesh.add(hg);
    // barrel
    const barrelGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.30, 10);
    barrelGeo.rotateX(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, metalMat);
    barrel.position.set(0, -0.068, -0.44); mesh.add(barrel);
    // flash hider
    const fhGeo = new THREE.CylinderGeometry(0.016, 0.013, 0.045, 8);
    fhGeo.rotateX(Math.PI / 2);
    const fh = new THREE.Mesh(fhGeo, metalMat);
    fh.position.set(0, -0.068, -0.60); mesh.add(fh);
    // stock
    const stockGeo = new THREE.BoxGeometry(0.052, 0.08, 0.16);
    const stock = new THREE.Mesh(stockGeo, darkMat);
    stock.position.set(0, -0.065, -0.02); mesh.add(stock);
    // mag (removable visual)
    const magGeo = new THREE.BoxGeometry(0.038, 0.11, 0.068);
    const magMat = new THREE.MeshStandardMaterial({ color: 0x0f1419, roughness: 0.85 });
    this.magMesh = new THREE.Mesh(magGeo, magMat);
    this.magMesh.position.set(0, -0.14, -0.18); mesh.add(this.magMesh);
    // charging handle
    const chGeo = new THREE.BoxGeometry(0.025, 0.012, 0.04);
    const ch = new THREE.Mesh(chGeo, metalMat);
    ch.position.set(0.02, -0.048, -0.12); mesh.add(ch);
    // micro sight - proper ADS alignment (centered to eye)
    const sightBase = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.015, 0.09), darkMat);
    sightBase.position.set(0, -0.042, -0.21); mesh.add(sightBase);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.035, 12), new THREE.MeshStandardMaterial({ color: 0x2a5a7a, roughness:0.2, metalness:0.6, transparent:true, opacity:0.85 }));
    lens.rotation.x=Math.PI/2; lens.position.set(0, -0.032, -0.21); mesh.add(lens);
    // laser/flash unit
    const flashGeo = new THREE.ConeGeometry(0.042, 0.095, 8);
    flashGeo.rotateX(Math.PI / 2);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xffe07a, transparent: true, opacity: 0 });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.position.set(0, -0.068, -0.62);
    flash.name = 'muzzleFlash';
    mesh.add(flash);
    // point light for muzzle (no shadow)
    this.muzzleLight = new THREE.PointLight(0xffcc66, 0, 3.2, 2);
    this.muzzleLight.position.set(0, -0.068, -0.62);
    mesh.add(this.muzzleLight);

    mesh.position.set(0.28, -0.22, -0.38);
    this.weaponGroup.add(mesh);
    this.weaponMesh = mesh;
    this.muzzleFlash = flash;
  }

  reset() {
    this.weapons.forEach(w => {
      const def = WEAPONS[w.id];
      w.ammo = def.magSize;
      w.reserve = def.reserve;
      w.isReloading = false;
      w.fireCooldown = 0;
    });
    this.currentIndex = 0;
    this.current = this.weapons[0];
    this.isADS = false;
    this.targetADS = 0;
    this.adsProgress = 0;
    this.isReloading = false;
    this.isSwitching = false;
    this.recoilPitch = 0; this.recoilYaw = 0;
    this.shotCount = 0;
    this.updateHUD();
  }

  update(dt) {
    const input = this.game.input;
    if (!input) return;

    // handle ADS input
    const wantADS = input.mouseDown[2] && this.game.canADS() && this.current?.canADS !== false;
    // sprint blocks ADS
    if (this.game.player?.isSprinting) {
      this.targetADS = 0;
      this.isADS = false;
    } else {
      this.targetADS = wantADS ? 1 : 0;
    }
    const adsSpeed = (1 / (this.current?.adsTime ?? CONFIG.weapons.adsTransitionSpeed)) * 1.2;
    // Actually use lerp speed based on adsTime
    const adsLerp = this.current ? (dt / this.current.adsTime) * 2.2 : dt * 8;
    this.adsProgress = Utils.damp(this.adsProgress, this.targetADS, 11, dt);
    if (Math.abs(this.adsProgress - this.targetADS) < 0.01) this.adsProgress = this.targetADS;
    this.isADS = this.adsProgress > 0.5;
    this.game.player.isADSing = this.isADS;

    // fire cooldown
    if (this.current.fireCooldown > 0) this.current.fireCooldown -= dt;

    // reloading update
    if (this.current.isReloading) {
      const done = this.current.updateReload(dt);
      this.isReloading = this.current.isReloading;
      this.updateHUD();
      if (done) {
        this.isReloading = false;
        this.game.audio?.play('reload_end', this.game.player.position);
      }
      // allow sprint to cancel shotgun reload
      if (this.current.type === 'shotgun' && this.game.player.isSprinting) {
        this.current.cancelReload();
        this.isReloading = false;
      }
    } else {
      this.isReloading = false;
    }

    // switching
    if (this.isSwitching) {
      this.switchProgress += dt;
      const dur = CONFIG.weapons.switchTime;
      if (this.switchProgress >= dur) {
        this.isSwitching = false;
        this.currentIndex = this.switchTarget;
        this.current = this.weapons[this.currentIndex];
        this.updateHUD();
      }
    }

    // firing
    const wantFire = input.mouseDown[0];
    const canFire = this.game.canFire() && this.current.canFire();
    // handle fire modes
    if (wantFire && canFire && this.game.state === 'playing' && !this.game.player.isDead) {
      if (this.current.fireMode === 'semi') {
        if (!this.fireHeld) { this._fire(); this.fireHeld = true; }
      } else if (this.current.fireMode === 'auto') {
        this._fire();
      }
    }
    if (!wantFire) this.fireHeld = false;

    // dry fire check: click with empty mag
    if (wantFire && !this.isReloading && !this.isSwitching && this.current.ammo <= 0 && this.current.fireCooldown <= 0) {
      if (!this.fireHeld || this.current.fireMode === 'auto') {
        // throttle dry fire sound
        if (this.game.time - this.lastFireTime > 0.22) {
          this.game.audio?.play('dryfire', this.game.player.position);
          this.lastFireTime = this.game.time;
        }
        this.current.fireCooldown = 0.22;
        this.fireHeld = true;
      }
    }
    if (!wantFire) this.fireHeld = false;

    // recoil recovery
    const recSpeed = this.current.recoil.recovery ?? CONFIG.weapons.recoilRecoveryBase;
    // crouched/ADS modifies recovery
    let recoveryMult = 1;
    if (this.isADS) recoveryMult *= 1.25;
    if (this.game.player.isCrouching) recoveryMult *= 1.15;
    if (this.game.player.isSprinting) recoveryMult *= 0.7;
    this.recoilPitch = Utils.damp(this.recoilPitch, 0, recSpeed * recoveryMult, dt);
    this.recoilYaw = Utils.damp(this.recoilYaw, 0, recSpeed * recoveryMult * 0.9, dt);
    // apply small recovery to player pitch/yaw via player? We'll do via weapon manager exposing to player
    if (Math.abs(this.recoilPitch) > 0.001) {
      // apply to player pitch slowly? Actually recoil was applied instantly to pitch; now recovery pulls back slightly
      // Instead we track and apply to camera in player update? For now just damp.
    }

    // update weapon model position (ADS, sway, bob, recoil)
    this._updateWeaponVisuals(dt);

    // handle weapon switching input handled via Input.js switchTo
  }

  _fire() {
    if (!this.current.consumeAmmo()) {
      this.game.audio?.play('dryfire', this.game.player.position);
      this.current.fireCooldown = 0.3;
      return;
    }
    const now = this.game.time;
    this.lastFireTime = now;
    this.shotCount++;
    this.current.fireCooldown = this.current.getFireInterval();
    this.current.shotsFired++;
    this.game.audio?.play('fire_' + this.current.id, this.game.player.position);

    // muzzle flash
    this.muzzleFlashUntil = now + 0.05;
    if (this.muzzleFlash) {
      this.muzzleFlash.material.opacity = 0.95;
      this.muzzleFlash.visible = true;
    }

    // recoil
    this._applyRecoil();

    // ballistics
    this._doBallistics();

    // ejection - physical brass with world pool
    try {
      const muzzlePos = this.getMuzzlePos();
      const ejectPos = this.game.player.getEyePosition().clone().addScaledVector(this.game.player.getForward(), 0.12);
      ejectPos.y -= 0.12;
      this.game.world?.spawnShell(ejectPos, this.game.player.getForward());
      // also spawn a few spark particles via impact? handled in world
    } catch(e) {}
    this.game.audio?.play('shell', this.game.player.position);

    // muzzle light flash
    if (this.muzzleLight) {
      this.muzzleLight.intensity = 2.8;
      setTimeout(()=>{ if(this.muzzleLight) this.muzzleLight.intensity=0; }, 45);
    }

    this.updateHUD();

    // auto reload check? no

    // if ammo zero, could auto? not auto
  }

  _applyRecoil() {
    const r = this.current.recoil;
    const idx = (this.shotCount - 1) % (r.pattern?.length || 1);
    const patternScale = r.pattern ? r.pattern[idx] : 1;
    const isADS = this.isADS;
    const isCrouch = this.game.player.isCrouching;
    const isMoving = this.game.player.moveInput.lengthSq() > 0.1;

    let vert = r.vertical * patternScale * (0.85 + Math.random() * r.verticalVar);
    let horiz = (Math.random() - 0.5) * 2 * r.horizontal * (0.7 + Math.random() * r.horizVar);

    // modifiers
    if (isADS) { vert *= 0.72; horiz *= 0.62; }
    if (isCrouch) { vert *= 0.88; horiz *= 0.85; }
    if (isMoving) { vert *= 1.12; horiz *= 1.18; }
    if (this.game.player.isSprinting) { vert *= 1.3; horiz *= 1.4; }

    // diminishing control for sustained fire: add slightly
    const sustained = Math.min(this.shotCount * 0.03, 0.35);
    vert *= (1 + sustained);

    this.recoilPitch += Utils.toRad(vert * 0.42);
    this.recoilYaw += Utils.toRad(horiz * 0.38);

    // apply to player pitch/yaw for camera kick
    this.game.player.pitch += Utils.toRad(vert * 0.28);
    this.game.player.pitch = Utils.clamp(this.game.player.pitch, this.game.player.pitchLimits.min, this.game.player.pitchLimits.max);
    this.game.player.yaw += Utils.toRad(horiz * 0.12);
  }

  _doBallistics() {
    const pellets = this.current.pellets || 1;
    const player = this.game.player;
    const eye = player.getEyePosition();
    const baseDir = player.getForward();

    // spread calculation
    const spreadCfg = this.current.spread;
    let baseSpread = this.isADS ? spreadCfg.ads : spreadCfg.hip;
    if (player.isSprinting) baseSpread *= 1.8;
    else if (player.moveInput.lengthSq() > 0.01) baseSpread *= spreadCfg.movePenalty;
    if (player.isCrouching) baseSpread *= spreadCfg.crouchBonus;
    if (!player.isGrounded) baseSpread *= 1.45;

    for (let i = 0; i < pellets; i++) {
      // random spread in cone
      const spreadRad = Utils.toRad(baseSpread);
      const ang = Math.random() * Math.PI * 2;
      const rad = Math.random() * spreadRad;
      // create spread offset
      const right = new THREE.Vector3().crossVectors(baseDir, new THREE.Vector3(0, 1, 0)).normalize();
      const up = new THREE.Vector3().crossVectors(right, baseDir).normalize();
      let dir = baseDir.clone();
      dir.addScaledVector(right, Math.cos(ang) * rad);
      dir.addScaledVector(up, Math.sin(ang) * rad);
      dir.normalize();

      // raycast against enemies and world
      const hit = this._raycastHit(eye, dir, 100);
      if (hit) {
        if (hit.type === 'enemy') {
          const dist = eye.distanceTo(hit.point);
          let dmg = this.current.damage;
          // falloff
          const falloffStart = CONFIG.ballistics.falloffStart;
          const falloffEnd = CONFIG.ballistics.falloffEnd;
          if (dist > falloffStart) {
            const t = Utils.clamp((dist - falloffStart) / (falloffEnd - falloffStart), 0, 1);
            dmg *= Utils.lerp(1, 0.62, t);
          }
          // hit part multiplier
          const partMult = hit.part === 'head' ? CONFIG.ballistics.headMult : hit.part === 'body' ? CONFIG.ballistics.bodyMult : CONFIG.ballistics.limbMult;
          dmg *= partMult;
          dmg *= (this.current.headMult ?? 1);
          hit.enemy.takeDamage(dmg, hit.point, dir, hit.part);
          this.game.enemies?.onEnemyHit(hit.enemy, dmg);
          // impact
          this.game.world?.spawnImpact(hit.point, hit.normal, 'flesh');
        } else if (hit.type === 'world') {
          this.game.world?.spawnImpact(hit.point, hit.normal, hit.material || 'concrete');
        }
        // tracer to hit point
        this._spawnTracer(eye, hit.point);
      } else {
        // no hit, tracer to far
        const far = eye.clone().addScaledVector(dir, 60);
        this._spawnTracer(eye, far);
      }
    }
  }

  _raycastHit(origin, dir, maxDist) {
    // world first
    const worldHit = this.game.world?.raycast(origin, dir, maxDist);
    let worldDist = worldHit ? worldHit.distance : Infinity;

    // enemies
    let bestEnemy = null; let bestDist = worldDist; let bestPoint = null; let bestNormal = null; let bestPart = null;
    for (const e of this.game.enemies?.list || []) {
      if (e.isDead) continue;
      const boxes = e.getHitBoxes();
      for (const b of boxes) {
        // ray sphere intersection
        const oc = origin.clone().sub(b.center);
        const bdot = dir.dot(oc);
        const c = oc.lengthSq() - b.radius * b.radius;
        const disc = bdot * bdot - c;
        if (disc < 0) continue;
        const t = -bdot - Math.sqrt(disc);
        if (t < 0 || t > bestDist || t > maxDist) continue;
        bestDist = t;
        bestEnemy = e;
        bestPoint = origin.clone().addScaledVector(dir, t);
        bestNormal = bestPoint.clone().sub(b.center).normalize();
        bestPart = b.part;
      }
    }
    if (bestEnemy) {
      return { type: 'enemy', enemy: bestEnemy, point: bestPoint, normal: bestNormal, part: bestPart, distance: bestDist };
    }
    if (worldHit) return { type: 'world', point: worldHit.point, normal: worldHit.normal, distance: worldHit.distance, material: worldHit.material };
    return null;
  }

  _spawnTracer(from, to) {
    // lightweight tracer: use world effects
    this.game.world?.spawnTracer(from, to);
  }

  _updateWeaponVisuals(dt) {
    if (!this.weaponMesh) return;
    const player = this.game.player;
    const isADS = this.adsProgress;
    const lean = player.lean;

    // ADS position lerp
    const hipPos = new THREE.Vector3(0.28, -0.22, -0.38);
    const adsPos = new THREE.Vector3(0, -0.14, -0.28);
    // adjust for weapon type
    if (this.current.id === 'glock') { hipPos.set(0.22, -0.24, -0.32); adsPos.set(0, -0.16, -0.24); }
    const targetPos = new THREE.Vector3().lerpVectors(hipPos, adsPos, isADS);
    // sprint pulls weapon down/back
    if (player.isSprinting) { targetPos.y -= 0.1; targetPos.z += 0.08; targetPos.x += 0.06; }
    // crouch small offset
    if (player.isCrouching) targetPos.y -= 0.015;

    // recoil offset
    const recoilOffsetZ = this.recoilPitch * 4.0;
    const recoilOffsetY = this.recoilPitch * 0.6;
    targetPos.z += recoilOffsetZ;
    targetPos.y += recoilOffsetY;
    targetPos.x += this.recoilYaw * 1.2;

    // lean follow: weapon follows lean slightly
    targetPos.x += lean * 0.05;

    // sway based on movement
    const t = this.game.time * 10;
    let swayX = 0, swayY = 0;
    if (!this.isADS || isADS < 0.6) {
      const moveInt = player.velocity.length() / 5;
      const amp = player.isSprinting ? 0.025 : 0.012;
      swayX = Math.sin(t * 0.7) * amp * (moveInt + 0.3);
      swayY = Math.cos(t * 0.9) * amp * 0.6 * (moveInt + 0.3);
      if (!player.isGrounded) { swayX *= 1.3; swayY *= 1.3; }
      // mouse inertia
      const md = player.moveInput; // not ideal but okay
      // breathing
      const breath = Math.sin(this.game.time * 1.2) * 0.004 * (1 - isADS * 0.7);
      swayY += breath;
    }

    // smooth weapon pos
    this.weaponModelOffset.lerp(targetPos, Utils.clamp(dt * 14, 0, 1));
    this.weaponMesh.position.copy(this.weaponModelOffset);
    this.weaponMesh.position.x += swayX;
    this.weaponMesh.position.y += swayY;

    // rotation: slight sway + recoil pitch
    const targetRotX = swayY * 2 + this.recoilPitch * 0.7;
    const targetRotY = swayX * 1.5 + this.recoilYaw * 0.5;
    const targetRotZ = lean * Utils.toRad(4) + swayX * 0.8;
    this.weaponMesh.rotation.x = Utils.damp(this.weaponMesh.rotation.x, targetRotX, 10, dt);
    this.weaponMesh.rotation.y = Utils.damp(this.weaponMesh.rotation.y, targetRotY, 10, dt);
    this.weaponMesh.rotation.z = Utils.damp(this.weaponMesh.rotation.z, targetRotZ, 10, dt);

    // handle muzzle flash fade
    if (this.muzzleFlashUntil && this.game.time > this.muzzleFlashUntil) {
      if (this.muzzleFlash) this.muzzleFlash.material.opacity = Utils.damp(this.muzzleFlash.material.opacity, 0, 18, dt);
      if (this.muzzleFlash.material.opacity < 0.01) this.muzzleFlash.visible = false;
    }

    // update FOV via player already, but weapon visibility
    this.weaponGroup.visible = !player.isDead;

    // attach to camera rig
    if (this.weaponGroup.parent !== this.game.camera) {
      this.game.camera.add(this.weaponGroup);
    }
  }

  tryReload() {
    if (this.isReloading || this.isSwitching) return;
    if (this.current.ammo === this.current.magSize) return;
    if (this.current.reserve <= 0) return;
    const isEmpty = this.current.ammo === 0;
    if (this.current.startReload(isEmpty)) {
      this.isReloading = true;
      this.game.audio?.play(isEmpty ? 'reload_empty' : 'reload', this.game.player.position);
      // ADS cancel
      this.targetADS = 0;
    }
  }

  switchTo(idx) {
    if (idx < 0 || idx >= this.weapons.length) return;
    if (idx === this.currentIndex) return;
    if (this.isSwitching) return;
    if (this.current.isReloading) this.current.cancelReload();
    this.isSwitching = true;
    this.switchProgress = 0;
    this.switchTarget = idx;
    this.isReloading = false;
    this.targetADS = 0;
    this.game.audio?.play('equip', this.game.player.position);
  }

  updateHUD() {
    if (!this.game.hud) return;
    this.game.hud.updateAmmo(this.current.ammo, this.current.reserve, this.current.magSize);
    this.game.hud.updateWeapon(this.current.name, this.current.fireMode.toUpperCase());
    this.game.hud.updateReload(this.isReloading || this.current.isReloading);
  }

  getMuzzlePos() {
    if (!this.weaponMesh) return this.game.player.getEyePosition();
    const flash = this.muzzleFlash;
    if (!flash) return this.game.player.getEyePosition();
    const worldPos = new THREE.Vector3();
    flash.getWorldPosition(worldPos);
    return worldPos;
  }
}
