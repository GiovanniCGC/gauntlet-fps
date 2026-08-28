import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { Utils } from '../core/Utils.js';

export class Enemy {
  constructor(game, pos, patrolPoints) {
    this.game = game;
    this.position = pos.clone();
    this.startPos = pos.clone();
    this.patrolPoints = patrolPoints || [];
    this.patrolIndex = 0;
    this.velocity = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.health = CONFIG.health.enemyMax;
    this.maxHealth = CONFIG.health.enemyMax;
    this.isDead = false;
    this.state = 'patrol'; // patrol | alert | pursuit | search | attack
    this.stateTime = 0;
    this.lastSeenPos = null;
    this.lastSeenTime = -999;
    this.shootCooldown = 0;
    this.reloadTime = 0;
    this.ammo = 12;
    this.target = null;

    // mesh
    const geo = new THREE.CapsuleGeometry(0.32, 0.95, 4, 12);
    const mat = new THREE.MeshStandardMaterial({ color: 0x6b2d2d, roughness: 0.8 });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.copy(this.position);
    this.mesh.position.y += 0.85;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    // head
    const headGeo = new THREE.SphereGeometry(0.22, 12, 10);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x9e4a4a });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 0.68, 0);
    this.mesh.add(this.head);

    // simple gun
    const gunGeo = new THREE.BoxGeometry(0.06, 0.05, 0.32);
    const gunMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    this.gun = new THREE.Mesh(gunGeo, gunMat);
    this.gun.position.set(0, 0.18, 0.28);
    this.mesh.add(this.gun);

    this._hitFlash = 0;
  }

  getHitBoxes() {
    const base = this.mesh.position.clone();
    // mesh is at position + offset, but we track position as feet; mesh at y+0.85, head at +0.68 local
    const bodyCenter = base.clone(); // center approx
    const headCenter = base.clone().add(new THREE.Vector3(0, 0.68, 0));
    return [
      { part: 'head', center: headCenter, radius: 0.24, mult: 1 },
      { part: 'body', center: bodyCenter, radius: 0.36, mult: 1 },
      { part: 'limb', center: base.clone().add(new THREE.Vector3(0, -0.3, 0)), radius: 0.28, mult: 1 },
    ];
  }

  update(dt) {
    if (this.isDead) {
      // sink
      this.mesh.position.y = Utils.damp(this.mesh.position.y, this.position.y + 0.15, 2, dt);
      this.mesh.rotation.z += dt * 0.2;
      this.mesh.rotation.x = Utils.damp(this.mesh.rotation.x, Math.PI / 2.2, 2, dt);
      if (this._hitFlash > 0) this._hitFlash -= dt;
      return;
    }
    this.stateTime += dt;
    if (this.shootCooldown > 0) this.shootCooldown -= dt;
    if (this._hitFlash > 0) {
      this._hitFlash -= dt;
      const t = this._hitFlash;
      this.mesh.material.color.setHSL(0, 0.7, 0.5 + Math.sin(t * 18) * 0.15);
      if (t <= 0) this.mesh.material.color.set(0x6b2d2d);
    }

    const player = this.game.player;
    const eye = this._getEye();
    const playerEye = player.getEyePosition();
    const toPlayer = playerEye.clone().sub(eye);
    const dist = toPlayer.length();
    const canSee = this._canSeePlayer();

    // state transitions
    switch (this.state) {
      case 'patrol':
        if (canSee && dist < CONFIG.enemies.detectionRange) {
          this.state = 'alert';
          this.stateTime = 0;
          this.lastSeenPos = playerEye.clone();
          this.lastSeenTime = this.game.time;
          this.game.audio?.play('alert', this.position);
        } else {
          this._patrol(dt);
        }
        break;
      case 'alert':
        // small pause then pursuit
        this._facePoint(playerEye, dt, 3.5);
        if (this.stateTime > CONFIG.enemies.reactionTime) {
          this.state = 'pursuit';
          this.stateTime = 0;
        }
        if (!canSee) {
          this.state = 'search';
          this.stateTime = 0;
        }
        break;
      case 'pursuit':
        if (canSee) {
          this.lastSeenPos = playerEye.clone();
          this.lastSeenTime = this.game.time;
          this._facePoint(playerEye, dt, 4.5);
          // attack if in range and line of sight
          if (dist < CONFIG.enemies.attackRange && this.stateTime > 0.25) {
            if (this.shootCooldown <= 0) this._shootAt(playerEye);
          }
          // move towards player if far
          if (dist > 9) this._moveToward(this.lastSeenPos, dt, CONFIG.enemies.chaseSpeed);
          else if (dist < 5) this._moveAway(playerEye, dt);
          else this._strafe(dt);
        } else {
          if (this.game.time - this.lastSeenTime > 1.0) {
            this.state = 'search';
            this.stateTime = 0;
          } else {
            this._moveToward(this.lastSeenPos, dt, CONFIG.enemies.chaseSpeed);
          }
        }
        break;
      case 'search':
        if (canSee) {
          this.state = 'alert';
          this.stateTime = 0;
        } else {
          if (this.lastSeenPos) this._moveToward(this.lastSeenPos, dt, CONFIG.enemies.patrolSpeed * 1.1);
          if (this.stateTime > CONFIG.enemies.searchDuration) {
            this.state = 'patrol';
            this.stateTime = 0;
          }
        }
        break;
    }

    // apply gravity/ground
    this.velocity.y -= 18 * dt;
    this.position.addScaledVector(this.velocity, dt);
    // simple ground clamp to world floor at y=0? World floor colliders at y=0 top
    if (this.position.y < 0) { this.position.y = 0; this.velocity.y = 0; }
    // naive world collision: check against colliders
    const colliders = this.game.world?.getColliders() || [];
    for (const box of colliders) {
      // if inside wall, push out
      const closestX = Utils.clamp(this.position.x, box.min.x, box.max.x);
      const closestZ = Utils.clamp(this.position.z, box.min.z, box.max.z);
      const dx = this.position.x - closestX;
      const dz = this.position.z - closestZ;
      const distSq = dx * dx + dz * dz;
      const rad = 0.32;
      if (distSq < rad * rad && this.position.y + 0.5 > box.min.y && this.position.y < box.max.y) {
        const len = Math.sqrt(distSq) || 0.001;
        const push = (rad - len) * 1.05;
        this.position.x += (dx / len) * push;
        this.position.z += (dz / len) * push;
      }
    }

    // update mesh
    this.mesh.position.lerp(new THREE.Vector3(this.position.x, this.position.y + 0.85, this.position.z), Utils.clamp(dt * 12, 0, 1));
    // face direction
    this.mesh.rotation.y = Utils.damp(this.mesh.rotation.y, this.yaw, 6, dt);
  }

  _getEye() { return new THREE.Vector3(this.position.x, this.position.y + 1.55, this.position.z); }

  _canSeePlayer() {
    const player = this.game.player;
    if (player.isDead) return false;
    const eye = this._getEye();
    const pEye = player.getEyePosition();
    const dist = eye.distanceTo(pEye);
    if (dist > CONFIG.enemies.detectionRange) return false;
    const dir = pEye.clone().sub(eye).normalize();
    // FOV check
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const dot = forward.dot(dir);
    const angle = Math.acos(Utils.clamp(dot, -1, 1));
    if (Utils.toDeg(angle) > CONFIG.enemies.fov * 0.5) return false;
    // LOS raycast against world
    const hit = this.game.world?.raycast(eye, dir, dist - 0.2);
    if (hit) return false; // blocked
    return true;
  }

  _patrol(dt) {
    if (this.patrolPoints.length === 0) {
      // wander around start
      if (this.stateTime % 4 < 0.05) this.yaw += (Math.random() - 0.5) * 1.2;
      this._moveToward(this.startPos, dt, CONFIG.enemies.patrolSpeed * 0.4);
      return;
    }
    const target = this.patrolPoints[this.patrolIndex];
    const to = target.clone().sub(this.position);
    to.y = 0;
    if (to.length() < 0.6) {
      this.patrolIndex = (this.patrolIndex + 1) % this.patrolPoints.length;
    } else {
      this._moveToward(target, dt, CONFIG.enemies.patrolSpeed);
      this._facePoint(target, dt, 3);
    }
  }

  _moveToward(target, dt, speed) {
    const dir = target.clone().sub(this.position);
    dir.y = 0;
    const len = dir.length();
    if (len < 0.05) return;
    dir.normalize().multiplyScalar(speed * dt);
    const next = this.position.clone().add(dir);
    // collision already handled in main update, just move
    this.position.x = next.x; this.position.z = next.z;
    this.yaw = Math.atan2(dir.x, -dir.z);
  }
  _moveAway(from, dt) {
    const dir = this.position.clone().sub(from); dir.y = 0; dir.normalize().multiplyScalar(CONFIG.enemies.chaseSpeed * 0.5 * dt);
    this.position.add(dir);
  }
  _strafe(dt) {
    const t = this.game.time * 0.9 + this.startPos.x;
    const strafe = Math.sin(t) * 0.8 * dt;
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, Math.sin(this.yaw));
    this.position.addScaledVector(right, strafe);
  }
  _facePoint(point, dt, speed) {
    const dir = point.clone().sub(this.position); dir.y = 0;
    if (dir.lengthSq() < 0.001) return;
    const targetYaw = Math.atan2(dir.x, -dir.z);
    let diff = targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * Utils.clamp(dt * speed, 0, 1);
  }

  _shootAt(targetPos) {
    if (this.ammo <= 0) {
      if (this.reloadTime <= 0) this.reloadTime = 1.6;
      this.reloadTime -= 0.016;
      if (this.reloadTime <= 0) { this.ammo = 12; this.reloadTime = 0; }
      return;
    }
    const eye = this._getEye();
    const dir = targetPos.clone().sub(eye).normalize();
    // accuracy: range dependent
    const dist = eye.distanceTo(targetPos);
    let acc = 0.018; // base cone rad
    acc += dist * 0.0009;
    if (this.state === 'pursuit' && dist > 12) acc *= 1.3;
    // add spread
    const ang = Math.random() * Math.PI * 2;
    const rad = Math.random() * acc;
    const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, dir).normalize();
    const finalDir = dir.clone().addScaledVector(right, Math.cos(ang) * rad).addScaledVector(up, Math.sin(ang) * rad).normalize();

    // raycast to player
    const player = this.game.player;
    let hitPlayer = false;
    const boxes = player.getHitBoxes();
    let closestT = Infinity;
    for (const b of boxes) {
      const oc = eye.clone().sub(b.center);
      const bdot = finalDir.dot(oc);
      const c = oc.lengthSq() - b.radius * b.radius;
      const disc = bdot * bdot - c;
      if (disc < 0) continue;
      const t = -bdot - Math.sqrt(disc);
      if (t > 0 && t < closestT && t < dist + 1) { closestT = t; hitPlayer = b; }
    }
    // check world block before player
    const worldHit = this.game.world?.raycast(eye, finalDir, closestT);
    if (worldHit) {
      this.game.world.spawnImpact(worldHit.point, worldHit.normal, 'concrete');
      this.game.world.spawnTracer(eye, worldHit.point);
    } else if (hitPlayer) {
      const hitPoint = eye.clone().addScaledVector(finalDir, closestT);
      const part = hitPlayer.part;
      let dmg = 14;
      if (part === 'head') dmg *= 2.1;
      if (part === 'limb') dmg *= 0.7;
      // falloff
      if (dist > CONFIG.ballistics.falloffStart) {
        const tt = Utils.clamp((dist - CONFIG.ballistics.falloffStart) / (CONFIG.ballistics.falloffEnd - CONFIG.ballistics.falloffStart), 0, 1);
        dmg *= Utils.lerp(1, 0.65, tt);
      }
      player.takeDamage(dmg, this.position);
      this.game.world.spawnImpact(hitPoint, finalDir.clone().multiplyScalar(-1), 'flesh');
      this.game.world.spawnTracer(eye, hitPoint);
    } else {
      const far = eye.clone().addScaledVector(finalDir, 40);
      this.game.world.spawnTracer(eye, far);
    }

    this.game.audio?.play('enemy_fire', eye);
    // muzzle flash on enemy gun
    this.ammo--;
    this.shootCooldown = 0.42 + Math.random() * 0.35;
    // recoil visual
    this.gun.position.z = 0.24;
    setTimeout(() => { if (this.gun) this.gun.position.z = 0.28; }, 60);
  }

  takeDamage(amount, point, dir, part) {
    if (this.isDead) return;
    this.health -= amount;
    this._hitFlash = 0.18;
    // knockback tiny
    if (dir) this.velocity.addScaledVector(dir, 0.12);
    // alert others nearby
    this.lastSeenPos = this.game.player.getEyePosition().clone();
    this.state = 'pursuit';
    this.stateTime = 0;

    if (this.health <= 0) {
      this.isDead = true;
      this.state = 'dead';
      this.game.player.kills++;
      this.game.audio?.play('enemy_death', this.position);
      this.mesh.material.color.set(0x3a1515);
      // disable collision via y
    }
  }
}
