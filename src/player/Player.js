import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { Utils } from '../core/Utils.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.position = new THREE.Vector3(0, 2, 8);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0; // rotation around Y
    this.pitch = 0; // rotation around X
    this.pitchLimits = { min: Utils.toRad(-88), max: Utils.toRad(88) };

    this.isGrounded = false;
    this.isCrouching = false;
    this.isSprinting = false;
    this.isADSing = false;
    this.isDead = false;
    this.isJumping = false;
    this.health = CONFIG.health.playerMax;
    this.maxHealth = CONFIG.health.playerMax;

    // crouch lerp
    this._targetHeight = CONFIG.movement.standHeight;
    this._currentHeight = CONFIG.movement.standHeight;
    this._cameraHeightOffset = this._currentHeight - 0.15;

    // leaning in degrees and meters, current lean value -1..1
    this.lean = 0;
    this.targetLean = 0;
    this.leanCollisionScale = 1;

    // sprint FOV tracking
    this._baseFov = CONFIG.movement.baseFov;

    // movement state tracking
    this.moveInput = new THREE.Vector2(0, 0);
    this.wasGrounded = true;
    this.fallStartY = 0;

    // collision helpers
    this.radius = CONFIG.movement.collisionRadius;
    this._tempBox = new THREE.Box3();
    this._tempVec = new THREE.Vector3();

    // camera rig group positions
    this.cameraRig = new THREE.Group();
    this.cameraRig.position.copy(this.position);

    this.sprintBlockAds = true; // if sprinting, block ADS until sprint ends

    this.kills = 0;
    this.timeAlive = 0;
  }

  reset() {
    this.position.set(0, 2, 8);
    this.velocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.isDead = false;
    this.isCrouching = false;
    this.isSprinting = false;
    this.isADSing = false;
    this.lean = 0; this.targetLean = 0;
    this._targetHeight = CONFIG.movement.standHeight;
    this._currentHeight = CONFIG.movement.standHeight;
    this.timeAlive = 0;
    this.kills = 0;
    this.updateCameraRig(0.016, true);
    this.game.hud?.updateHealth(this.health, this.maxHealth);
  }

  // Called from main loop
  update(dt) {
    if (this.isDead) return;
    this.timeAlive += dt;
    const input = this.game.input;
    if (!input) return;

    // Mouse look
    if (input.pointerLocked && this.game.state === 'playing') {
      const md = input.consumeMouseDelta();
      const sens = CONFIG.camera.mouseSensitivity * (input.sensitivity ?? 1);
      this.yaw -= md.x * sens;
      this.pitch -= md.y * sens;
      this.pitch = Utils.clamp(this.pitch, this.pitchLimits.min, this.pitchLimits.max);
    }

    // Read movement input
    const fwd = input.isMoveForward() ? 1 : 0;
    const back = input.isMoveBack() ? 1 : 0;
    const left = input.isMoveLeft() ? 1 : 0;
    const right = input.isMoveRight() ? 1 : 0;
    this.moveInput.set(right - left, fwd - back);
    if (this.moveInput.lengthSq() > 1) this.moveInput.normalize();

    // Crouch toggle (hold)
    const wantCrouch = input.isCrouch();
    this.isCrouching = wantCrouch;
    this._targetHeight = this.isCrouching ? CONFIG.movement.crouchHeight : CONFIG.movement.standHeight;

    // Sprint logic - can only sprint if moving forward, not crouched, not ADS, not lean, not in air too much, has input
    const moving = this.moveInput.lengthSq() > 0.01;
    const forwardOnly = fwd > 0 && Math.abs(this.moveInput.x) < 0.6;
    const canSprint = moving && forwardOnly && !this.isCrouching && !this.isADSing && this.isGrounded && !this.game.weapons?.isReloading;
    this.isSprinting = canSprint && input.isSprint();
    if (this.isSprinting) { this.targetLean = 0; } // sprint cancels lean

    // Jump
    if (input.isJump() && this.isGrounded && !this.isCrouching) {
      this.velocity.y = CONFIG.movement.jumpForce;
      this.isGrounded = false;
      this.isJumping = true;
      this.game.audio?.play('jump', this.position);
    }

    // Lean - Q/E, blocked while sprinting/jumping fast
    if (!this.isSprinting && this.isGrounded && !this.isJumping) {
      if (input.isLeanLeft() && !input.isLeanRight()) this.targetLean = -1;
      else if (input.isLeanRight() && !input.isLeanLeft()) this.targetLean = 1;
      else this.targetLean = 0;
      // while ADS, reduce lean slightly for tactical feel
      if (this.isADSing) this.targetLean *= 0.85;
      // while crouched, allow lean but slightly reduced
      if (this.isCrouching) this.targetLean *= 0.92;
    } else {
      this.targetLean = 0;
    }

    // Smooth lean interpolation
    const leanSpeed = CONFIG.camera.leanSpeed;
    this.lean = Utils.damp(this.lean, this.targetLean, leanSpeed, dt);
    if (Math.abs(this.lean) < 0.01 && this.targetLean === 0) this.lean = 0;

    // Crouch height interpolation
    this._currentHeight = Utils.damp(this._currentHeight, this._targetHeight, CONFIG.movement.crouchTransitionSpeed, dt);

    // ADS speed penalty applied later in movement calc
    // Do physics update
    this._updatePhysics(dt);

    // Update camera rig position/rotation
    this.updateCameraRig(dt, false);

    // Landing check for audio / kick
    if (!this.wasGrounded && this.isGrounded) {
      const fallDist = this.fallStartY - this.position.y;
      if (fallDist > 0.5) this.game.audio?.play('land', this.position);
    }
    if (!this.isGrounded && this.wasGrounded) this.fallStartY = this.position.y;
    this.wasGrounded = this.isGrounded;
  }

  _updatePhysics(dt) {
    const cfg = CONFIG.movement;
    // gravity
    if (!this.isGrounded) {
      this.velocity.y -= cfg.gravity * dt;
    } else {
      if (this.velocity.y < 0) this.velocity.y = -0.5; // stick to ground
    }

    // Compute wish direction relative to yaw
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw) * -1); // careful: yaw 0 looks toward -Z
    // Actually standard: forward = (sin(yaw),0, -cos(yaw))
    forward.y = 0; forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).multiplyScalar(-1); // right = forward x up
    // Simpler: right = (cos(yaw),0, sin(yaw)) ??? let's compute correctly
    // Let's recompute cleanly:
    // yaw rotates around Y, so basis: forward = (Math.sin(yaw),0, -Math.cos(yaw)), right = (Math.cos(yaw),0, Math.sin(yaw))
    const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const rgt = new THREE.Vector3(Math.cos(this.yaw), 0, Math.sin(this.yaw));

    const wishDir = new THREE.Vector3();
    wishDir.addScaledVector(rgt, this.moveInput.x);
    wishDir.addScaledVector(fwd, this.moveInput.y);
    if (wishDir.lengthSq() > 0.001) wishDir.normalize();

    // Determine speed
    let targetSpeed = cfg.walkSpeed;
    if (this.isSprinting) targetSpeed = cfg.sprintSpeed;
    else if (this.isCrouching) targetSpeed = cfg.crouchSpeed;
    if (this.isADSing) targetSpeed *= cfg.adsSpeedMult;
    // also weapon movement penalty
    const weaponPen = this.game.weapons?.current?.movementPenalty ?? 1.0;
    targetSpeed *= weaponPen;

    // Acceleration vs deceleration
    let accel = cfg.acceleration;
    let decel = cfg.deceleration;
    if (!this.isGrounded) { accel *= cfg.airControlFactor; decel *= cfg.airControlFactor; }
    if (this.isCrouching) { accel *= 0.85; }

    // Apply horizontal velocity with acceleration
    const currentHoriz = new THREE.Vector2(this.velocity.x, this.velocity.z);
    const wishSpeed2D = wishDir.lengthSq() > 0 ? targetSpeed : 0;
    const wishVel = new THREE.Vector2(wishDir.x * wishSpeed2D, wishDir.z * wishSpeed2D);

    // Accelerate towards wishVel
    const velDiff = wishVel.clone().sub(currentHoriz);
    const isAccelerating = wishVel.lengthSq() > 0.001;
    const a = isAccelerating ? accel : decel;
    const maxDelta = a * dt;
    const diffLen = velDiff.length();
    if (diffLen > 0.001) {
      const add = velDiff.normalize().multiplyScalar(Math.min(diffLen, maxDelta));
      currentHoriz.add(add);
    } else if (!isAccelerating) {
      // apply friction
      const friction = cfg.groundFriction * dt;
      const len = currentHoriz.length();
      if (len > 0) currentHoriz.multiplyScalar(Math.max(0, 1 - friction / (len + 0.001)));
    }

    // clamp to target speed + small tolerance
    if (currentHoriz.length() > targetSpeed + 0.2) {
      currentHoriz.normalize().multiplyScalar(targetSpeed);
    }

    this.velocity.x = currentHoriz.x;
    this.velocity.z = currentHoriz.y;

    // Step handling & slope handling prep
    const world = this.game.world;
    const colliders = world ? world.getColliders() : [];

    // Horizontal move with collision
    const moveDelta = new THREE.Vector3(this.velocity.x * dt, 0, this.velocity.z * dt);
    this.position.add(this._collideAndSlide(moveDelta, colliders, cfg.collisionRadius, cfg.stepHeight));

    // Vertical move
    const vertDelta = new THREE.Vector3(0, this.velocity.y * dt, 0);
    const vertResult = this._moveVertical(vertDelta, colliders);
    this.position.add(vertResult.delta);
    this.isGrounded = vertResult.grounded;
    if (vertResult.hitCeiling && this.velocity.y > 0) this.velocity.y = 0;
    if (this.isGrounded) { this.velocity.y = Math.max(this.velocity.y, -0.5); this.isJumping = false; }

    // keep within world bounds
    this.position.x = Utils.clamp(this.position.x, -48, 48);
    this.position.z = Utils.clamp(this.position.z, -48, 48);
    if (this.position.y < -20) { this.takeDamage(999, null); }
  }

  _collideAndSlide(delta, colliders, radius, stepHeight) {
    if (delta.lengthSq() < 1e-8) return delta.clone();
    // Try full delta, if blocked try step up
    const tryMove = (d) => {
      const pos = this.position.clone().add(d);
      // check collision at current height capsule approximated as cylinder + sphere
      if (this._isColliding(pos, colliders, radius)) return null;
      return d;
    };

    // first try simple
    const direct = tryMove(delta);
    if (direct) return direct;

    // try axis separated
    const xOnly = new THREE.Vector3(delta.x, 0, 0);
    const zOnly = new THREE.Vector3(0, 0, delta.z);
    let result = new THREE.Vector3(0, 0, 0);
    const xTry = tryMove(xOnly);
    if (xTry) result.add(xTry);
    else {
      // try step up for X
      const stepped = this._tryStep(new THREE.Vector3(xOnly.x, 0, 0), colliders, radius, stepHeight);
      if (stepped) result.add(stepped);
    }
    const zTry = tryMove(zOnly);
    if (zTry) result.add(zTry);
    else {
      const stepped = this._tryStep(new THREE.Vector3(0, 0, zOnly.z), colliders, radius, stepHeight);
      if (stepped) result.add(stepped);
    }
    // also try full delta with step
    if (result.lengthSq() < 1e-6) {
      const steppedFull = this._tryStep(delta, colliders, radius, stepHeight);
      if (steppedFull) return steppedFull;
    }
    return result;
  }

  _tryStep(delta, colliders, radius, stepHeight) {
    if (delta.lengthSq() < 1e-8) return null;
    // lift up by stepHeight, move, then drop down
    const start = this.position.clone();
    const lifted = start.clone(); lifted.y += stepHeight + 0.02;
    if (this._isColliding(lifted, colliders, radius)) return null;
    const moved = lifted.clone().add(delta);
    if (this._isColliding(moved, colliders, radius)) return null;
    // now find ground below moved
    const downCheck = this._findGround(moved, colliders, stepHeight + 0.4);
    if (downCheck) {
      const finalY = downCheck.y;
      const fullDelta = new THREE.Vector3(delta.x, finalY - start.y, delta.z);
      return fullDelta;
    }
    // if no ground, just return horizontal delta at lifted height (allow air step)
    return delta.clone();
  }

  _findGround(pos, colliders, maxDrop) {
    // ray down
    const origin = pos.clone(); origin.y += 0.1;
    const down = new THREE.Vector3(0, -1, 0);
    let bestY = null;
    for (const box of colliders) {
      // quick x/z overlap
      if (pos.x + 0.3 < box.min.x || pos.x - 0.3 > box.max.x) continue;
      if (pos.z + 0.3 < box.min.z || pos.z - 0.3 > box.max.z) continue;
      if (box.max.y > pos.y + 0.5) continue;
      if (box.max.y < pos.y - maxDrop) continue;
      if (pos.y >= box.max.y) {
        if (bestY === null || box.max.y > bestY) bestY = box.max.y;
      }
    }
    if (bestY !== null) return new THREE.Vector3(pos.x, bestY, pos.z);
    return null;
  }

  _moveVertical(delta, colliders) {
    const start = this.position.clone();
    const end = start.clone().add(delta);
    let grounded = false;
    let hitCeiling = false;
    let resultDelta = delta.clone();

    if (delta.y < 0) {
      // falling, check ground
      let highestGround = -Infinity;
      for (const box of colliders) {
        if (end.x + this.radius < box.min.x || end.x - this.radius > box.max.x) continue;
        if (end.z + this.radius < box.min.z || end.z - this.radius > box.max.z) continue;
        // only collide if feet would go below top
        const playerBottom = end.y; // position is feet? Actually position is camera base? For simplicity position = feet + height offset
        // Our position is eye? Let's treat position as feet proxy at bottom; but camera height is offset
        // So bottom = position.y - 0.1 ??? Instead we track position as center at ~half height. Simpler: check if sphere at pos collides.
        // We'll approximate: if end.y <= box.max.y + 0.05 and start.y >= box.max.y, then snap to top
        if (start.y >= box.max.y && end.y <= box.max.y + 0.12) {
          if (box.max.y > highestGround) highestGround = box.max.y;
        }
      }
      if (highestGround > -Infinity) {
        resultDelta.y = highestGround - start.y + 0.02; // small offset
        grounded = true;
      } else {
        // check if currently standing on ground (within small epsilon)
        const epsilon = 0.15;
        for (const box of colliders) {
          if (start.x + this.radius < box.min.x || start.x - this.radius > box.max.x) continue;
          if (start.z + this.radius < box.min.z || start.z - this.radius > box.max.z) continue;
          if (Math.abs(start.y - box.max.y) < epsilon && delta.y <= 0.01) {
            grounded = true;
            resultDelta.y = 0;
            break;
          }
        }
      }
    } else if (delta.y > 0) {
      // jumping, check ceiling
      for (const box of colliders) {
        if (end.x + this.radius < box.min.x || end.x - this.radius > box.max.x) continue;
        if (end.z + this.radius < box.min.z || end.z - this.radius > box.max.z) continue;
        const headY = end.y + this._currentHeight;
        if (headY > box.min.y && start.y + this._currentHeight < box.min.y) {
          resultDelta.y = box.min.y - (start.y + this._currentHeight) - 0.02;
          hitCeiling = true;
          break;
        }
      }
    }
    // also ground if not moving vertically but standing
    if (!grounded && Math.abs(delta.y) < 0.001) {
      const epsilon = 0.18;
      for (const box of colliders) {
        if (start.x + this.radius < box.min.x || start.x - this.radius > box.max.x) continue;
        if (start.z + this.radius < box.min.z || start.z - this.radius > box.max.z) continue;
        if (Math.abs(start.y - box.max.y) < epsilon) { grounded = true; break; }
      }
    }

    return { delta: resultDelta, grounded, hitCeiling };
  }

  _isColliding(pos, colliders, radius) {
    // approximate player as vertical capsule: check at feet, mid, head heights
    const heights = [0.15, this._currentHeight * 0.5, this._currentHeight - 0.15];
    for (const box of colliders) {
      for (const h of heights) {
        const py = pos.y + h;
        if (py < box.min.y || py > box.max.y) continue;
        // check horizontal distance to box
        const closestX = Utils.clamp(pos.x, box.min.x, box.max.x);
        const closestZ = Utils.clamp(pos.z, box.min.z, box.max.z);
        const dx = pos.x - closestX;
        const dz = pos.z - closestZ;
        const distSq = dx * dx + dz * dz;
        // also check if inside box (distance 0) but y overlapping = collision
        if (distSq < radius * radius - 1e-6) return true;
      }
    }
    return false;
  }

  updateCameraRig(dt, force) {
    // position lerp for smoothness
    const targetPos = this.position.clone();
    targetPos.y += this._currentHeight - 0.05; // eye height
    if (force) this.cameraRig.position.copy(targetPos);
    else this.cameraRig.position.lerp(targetPos, Utils.clamp(dt * 20, 0, 1));

    // lean collision: raycast to side to limit lean
    let leanOffset = CONFIG.camera.leanOffset * this.lean;
    let leanAngle = Utils.toRad(CONFIG.camera.leanAngle * this.lean);
    if (Math.abs(this.lean) > 0.05 && this.game.world) {
      const side = Math.sign(this.lean);
      const origin = this.cameraRig.position.clone();
      const dir = new THREE.Vector3(Math.cos(this.yaw) * side, 0, Math.sin(this.yaw) * side).normalize();
      const colliders = this.game.world.getColliders();
      let closest = Infinity;
      for (const box of colliders) {
        const ray = new THREE.Ray(origin, dir);
        const hit = new THREE.Vector3();
        if (ray.intersectBox(box, hit)) {
          const d = hit.distanceTo(origin);
          if (d < closest) closest = d;
        }
      }
      // if wall close, scale lean down
      const minClear = 0.38;
      if (closest < 0.7) {
        const scale = Utils.clamp((closest - minClear) / 0.32, 0, 1);
        this.leanCollisionScale = Utils.damp(this.leanCollisionScale, scale, 12, dt);
        leanOffset *= this.leanCollisionScale;
        leanAngle *= this.leanCollisionScale;
      } else {
        this.leanCollisionScale = Utils.damp(this.leanCollisionScale, 1, 12, dt);
      }
    }

    // Apply rotations: yaw (Y), pitch (X), lean (Z) + lean offset (X)
    this.cameraRig.rotation.order = 'YZX';
    this.cameraRig.rotation.y = this.yaw;
    this.cameraRig.rotation.x = this.pitch;
    this.cameraRig.rotation.z = leanAngle;

    // lean translation in local space
    const leanX = leanOffset;
    // we need to offset camera rig position sideways by leanX in local right direction
    // Do via sub-object? For simplicity offset world position
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, Math.sin(this.yaw));
    this.cameraRig.position.addScaledVector(right, leanX * 0.55);
    // small vertical dip when leaning
    this.cameraRig.position.y -= Math.abs(this.lean) * 0.03;

    // update actual THREE camera to follow rig
    if (this.game.camera) {
      this.game.camera.position.copy(this.cameraRig.position);
      this.game.camera.rotation.copy(this.cameraRig.rotation);
      this.game.camera.rotation.order = 'YZX';
      // FOV handling
      let targetFov = CONFIG.movement.baseFov;
      if (this.isSprinting) targetFov += CONFIG.movement.sprintFovBonus;
      if (this.isADSing) {
        const weapAdsFov = this.game.weapons?.current?.adsFov ?? CONFIG.movement.adsFov;
        targetFov = weapAdsFov;
      }
      this.game.camera.fov = Utils.damp(this.game.camera.fov, targetFov, 9, dt);
      this.game.camera.updateProjectionMatrix();
    }
  }

  takeDamage(amount, from) {
    if (this.isDead) return;
    this.health -= amount;
    this.health = Math.max(0, this.health);
    this.game.hud?.updateHealth(this.health, this.maxHealth);
    this.game.audio?.play('hit', this.position);
    // hit reaction - small camera kick handled by CameraEffects
    this.game.hud?.flashDamage(from);
    if (this.health <= 0) {
      this.isDead = true;
      this.game.die({ time: this.timeAlive, kills: this.kills });
    }
  }

  heal(amount) {
    this.health = Utils.clamp(this.health + amount, 0, this.maxHealth);
    this.game.hud?.updateHealth(this.health, this.maxHealth);
  }

  getEyePosition() { return this.cameraRig.position.clone(); }
  getForward() {
    const dir = new THREE.Vector3(0, 0, -1);
    dir.applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    return dir.normalize();
  }

  // For enemy hitbox
  getHitBoxes() {
    const pos = this.position.clone();
    const h = this._currentHeight;
    return [
      { part: 'head', center: pos.clone().add(new THREE.Vector3(0, h - 0.22, 0)), radius: 0.22, mult: CONFIG.ballistics.headMult },
      { part: 'body', center: pos.clone().add(new THREE.Vector3(0, h * 0.55, 0)), radius: 0.32, mult: CONFIG.ballistics.bodyMult },
      { part: 'limb', center: pos.clone().add(new THREE.Vector3(0, 0.35, 0)), radius: 0.28, mult: CONFIG.ballistics.limbMult },
    ];
  }
}
