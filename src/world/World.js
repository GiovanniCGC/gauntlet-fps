import * as THREE from 'three';
import { createBoxMesh } from '../core/Utils.js';
import { Weapon } from '../weapons/Weapon.js';
import { WEAPONS } from '../weapons/definitions.js';

export class World {
  constructor(game) {
    this.game = game;
    this.colliders = []; // Box3
    this.meshes = new THREE.Group();
    this.interactables = [];
    this.impactPool = [];
    this.tracerPool = [];
    this._raycaster = new THREE.Raycaster();
  }

  _addCollider(box) { this.colliders.push(box); }

  build() {
    const scene = this.game.scene;

    // lights
    const hemi = new THREE.HemisphereLight(0xdfe8f5, 0x0f1419, 1.15);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xfff8e6, 1.25);
    dir.position.set(22, 28, 14);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 0.5; dir.shadow.camera.far = 80;
    dir.shadow.camera.left = -40; dir.shadow.camera.right = 40; dir.shadow.camera.top = 40; dir.shadow.camera.bottom = -40;
    scene.add(dir);
    const fill = new THREE.DirectionalLight(0xa9c6ff, 0.35);
    fill.position.set(-18, 14, -22);
    scene.add(fill);

    // fog
    scene.fog = new THREE.Fog(0x0b1118, 38, 72);

    // floor
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x1a222b, roughness: 0.92 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(110, 110), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    // collider floor
    this._addCollider(new THREE.Box3(new THREE.Vector3(-55, -1, -55), new THREE.Vector3(55, 0, 55)));

    // Helpers
    const addBox = (w, h, d, x, y, z, color = 0x2b3642) => {
      const mesh = createBoxMesh(w, h, d, color, new THREE.Vector3(x, y, z));
      this.meshes.add(mesh);
      scene.add(mesh);
      const box = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(x, y, z), new THREE.Vector3(w, h, d));
      this.colliders.push(box);
      mesh.userData.aabb = box;
      return mesh;
    };
    const addWall = (x, z, w, h, d, rotY = 0, color = 0x2b3642) => {
      const mesh = createBoxMesh(w, h, d, color, new THREE.Vector3(x, h/2, z));
      mesh.rotation.y = rotY;
      // recompute box after rotation? simple ignore rotation for collider approximated as axis aligned - for straight walls it's fine
      // For rotated walls we add OBB approximated - but we'll keep walls axis aligned for reliable collision
      this.meshes.add(mesh);
      scene.add(mesh);
      const box = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(x, h/2, z), new THREE.Vector3(w, h, d));
      // if rotated, inflate
      if (Math.abs(rotY) > 0.01) { box.expandByScalar(Math.max(w,d)*0.2); }
      this.colliders.push(box);
      mesh.userData.aabb = box;
      return mesh;
    };

    // Perimeter walls
    addWall(0, -55, 110, 8, 1, 0, 0x1f2a36);
    addWall(0, 55, 110, 8, 1, 0, 0x1f2a36);
    addWall(-55, 0, 1, 8, 110, 0, 0x1f2a36);
    addWall(55, 0, 1, 8, 110, 0, 0x1f2a36);

    // Test area: designed for cover, corners, leaning, stairs, doors
    // Building 1 - close quarters corridor with doors
    addWall(-6, -8, 18, 3.2, 0.6, 0, 0x2f3d4e);
    addWall(-6, -16, 18, 3.2, 0.6, 0, 0x2f3d4e);
    addWall(-14.5, -12, 0.6, 3.2, 8.6, 0, 0x2f3d4e);
    addWall(2.5, -12, 0.6, 3.2, 8.6, 0, 0x2f3d4e);
    // doorway gaps - we don't add collider there, but add door frame
    addBox(1.2, 2.6, 0.32, -6, 1.3, -7.7, 0x3a4a5c);
    addBox(1.2, 2.6, 0.32, -6, 1.3, -16.3, 0x3a4a5c);

    // Building 2 - medium range courtyard with cover
    addWall(14, -10, 14, 3, 0.6, 0, 0x2a3848);
    addWall(14, -20, 14, 3, 0.6, 0, 0x2a3848);
    addWall(7.5, -15, 0.6, 3, 10.6, 0, 0x2a3848);
    addWall(20.5, -15, 0.6, 3, 10.6, 0, 0x2a3848);
    // cover blocks
    addBox(1.8, 1.1, 1.8, 10, 0.55, -15, 0x3b4b5e);
    addBox(1.2, 1.4, 2.2, 16, 0.7, -13.5, 0x3b4b5e);
    addBox(2.0, 1.0, 1.0, 13, 0.5, -18.2, 0x3b4b5e);
    // wall with corner for peeking
    addWall(18, -26, 0.6, 3, 7, 0, 0x2a3848);
    addWall(14, -29.5, 8, 3, 0.6, 0, 0x2a3848);

    // Building 3 - far range with elevated platform and stairs
    addBox(10, 1.9, 10, 6, 0.95, -38, 0x232f3c);
    addWall(1, -38, 0.6, 3.2, 10, 0, 0x2b3a4a);
    addWall(11, -38, 0.6, 3.2, 10, 0, 0x2b3a4a);
    addWall(6, -42.8, 10, 3.2, 0.6, 0, 0x2b3a4a);
    // stairs
    for (let i = 0; i < 6; i++) {
      addBox(2.2, 0.28, 0.6, 6, 0.14 + i * 0.3, -31.2 - i * 0.68, 0x384757);
    }
    // railings
    addBox(0.12, 1.0, 4.2, 5, 1.45, -38, 0x4a5a6e);
    addBox(0.12, 1.0, 4.2, 7, 1.45, -38, 0x4a5a6e);

    // Additional cover scattered for combat
    addBox(2.5, 1.55, 0.7, -10, 0.78, -24, 0x334252);
    addBox(0.7, 1.55, 2.5, 0, 0.78, -22, 0x334252);
    addBox(3, 1.2, 1, -2, 0.6, -10, 0x334252);
    addBox(1.5, 2.4, 1.5, -16, 1.2, -28, 0x2e3d4e);
    addBox(4, 0.45, 4, -22, 0.225, -6, 0x252f3a); // low cover crouch test

    // Second floor platforms for slope/stair test
    addBox(6, 0.4, 6, -20, 1.05, -14, 0x232f3c);
    for (let i = 0; i < 4; i++) {
      addBox(1.6, 0.2, 0.5, -17, 0.2 + i * 0.26, -11 - i * 0.55, 0x384757);
    }

    // Trees/props for atmosphere (non-colliding)
    const propGeo = new THREE.CapsuleGeometry(0.22, 1.2, 4, 8);
    const propMat = new THREE.MeshStandardMaterial({ color: 0x2a3a2d });
    for (let i = 0; i < 6; i++) {
      const t = new THREE.Mesh(propGeo, propMat);
      t.position.set(-26 + i * 3.5, 0.7, 12 + Math.sin(i) * 4);
      scene.add(t);
    }

    // Doors (interactable)
    this._createDoor(new THREE.Vector3(-6, 0, -12), 0, 'door_1');
    this._createDoor(new THREE.Vector3(14, 0, -15), Math.PI / 2, 'door_2');
    this._createDoor(new THREE.Vector3(6, 0, -33.1), 0, 'door_3');

    // Weapon pickups
    this._createPickup(new THREE.Vector3(8, 0.45, -6), 'shotgun');
    this._createPickup(new THREE.Vector3(-9, 0.45, -12), 'ammo_m4');

    // Ammo crates
    for (let i = 0; i < 3; i++) {
      const c = createBoxMesh(0.9, 0.6, 0.9, 0x8a6a3a, new THREE.Vector3(-4 + i * 6, 0.3, 2));
      scene.add(c);
    }

    scene.add(this.meshes);
  }

  _createDoor(pos, rotY, id) {
    const geo = new THREE.BoxGeometry(1.9, 2.35, 0.08);
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a3525, roughness: 0.9 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos.x, 1.18, pos.z);
    mesh.rotation.y = rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.id = id;
    mesh.userData.isDoor = true;
    mesh.userData.open = false;
    mesh.userData.basePos = pos.clone();
    mesh.userData.baseRot = rotY;
    this.game.scene.add(mesh);
    // collider closed
    const box = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(pos.x, 1.18, pos.z), new THREE.Vector3(1.9, 2.35, 0.25));
    if (Math.abs(rotY) > 0.01) { const s = 1.9; box.expandByScalar(s * 0.1); }
    this.colliders.push(box);
    mesh.userData.collider = box;
    mesh.userData.colliderIndex = this.colliders.length - 1;
    this.interactables.push(mesh);
  }

  _createPickup(pos, type) {
    const colors = { shotgun: 0x8a3a3a, ammo_m4: 0x3a8a4a };
    const geo = new THREE.BoxGeometry(0.45, 0.25, 0.7);
    const mat = new THREE.MeshStandardMaterial({ color: colors[type] || 0xaaaaaa, emissive: colors[type] || 0x000000, emissiveIntensity: 0.22 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.position.y += 0.18;
    mesh.castShadow = true;
    mesh.userData.isPickup = true;
    mesh.userData.pickupType = type;
    mesh.userData.baseY = pos.y + 0.18;
    this.game.scene.add(mesh);
    this.interactables.push(mesh);
  }

  getColliders() { return this.colliders; }

  update(dt) {
    // animate pickups
    const t = this.game.time;
    for (const m of this.interactables) {
      if (m.userData.isPickup) {
        m.rotation.y += dt * 1.1;
        m.position.y = m.userData.baseY + Math.sin(t * 2.1 + m.position.x) * 0.07;
      }
      if (m.userData.isDoor) {
        const targetRot = m.userData.open ? m.userData.baseRot + Math.PI / 2 : m.userData.baseRot;
        m.rotation.y = THREE.MathUtils.damp(m.rotation.y, targetRot, 7, dt);
        // update collider: when open, move collider far away / disable
        const idx = m.userData.colliderIndex;
        if (idx !== undefined) {
          if (m.userData.open) {
            // move collider far below floor so no collision
            this.colliders[idx].min.set(999, 999, 999);
            this.colliders[idx].max.set(1000, 1000, 1000);
          } else {
            const pos = m.userData.basePos;
            this.colliders[idx].min.set(pos.x - 0.95, 0, pos.z - 0.13);
            this.colliders[idx].max.set(pos.x + 0.95, 2.35, pos.z + 0.13);
            if (Math.abs(m.userData.baseRot) > 0.01) {
              // rotate approximated
              this.colliders[idx].expandByScalar(0.2);
            }
          }
        }
      }
    }
    // update impact pool fade
    for (let i = this.impactPool.length - 1; i >= 0; i--) {
      const p = this.impactPool[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.game.scene.remove(p.mesh);
        this.impactPool.splice(i, 1);
      } else {
        const alpha = p.life / p.maxLife;
        p.mesh.traverse(obj => { if (obj.material) obj.material.opacity = obj === p.mesh.children[0] ? alpha : alpha * 0.9; });
        p.mesh.scale.setScalar(1 + (1 - alpha) * 0.35);
      }
    }
    for (let i = this.tracerPool.length - 1; i >= 0; i--) {
      const tr = this.tracerPool[i];
      tr.life -= dt;
      if (tr.life <= 0) { this.game.scene.remove(tr.mesh); this.tracerPool.splice(i, 1); }
      else tr.mesh.material.opacity = tr.life / tr.maxLife * 0.7;
    }
  }

  raycast(origin, dir, maxDist) {
    // iterate colliders Box3 ray
    const ray = new THREE.Ray(origin.clone(), dir.clone().normalize());
    let bestDist = Infinity; let bestPoint = null; let bestNormal = null; let bestMat = 'concrete';
    const hitPos = new THREE.Vector3();
    for (let i = 0; i < this.colliders.length; i++) {
      const box = this.colliders[i];
      const hit = ray.intersectBox(box, hitPos);
      if (hit) {
        const d = hit.distanceTo(origin);
        if (d < bestDist && d <= maxDist && d > 0.01) {
          bestDist = d; bestPoint = hit.clone();
          // approximate normal by finding closest face
          const center = new THREE.Vector3(); box.getCenter(center);
          const size = new THREE.Vector3(); box.getSize(size);
          const local = hit.clone().sub(center);
          const half = size.clone().multiplyScalar(0.5);
          // find dominant axis
          const ax = Math.abs(local.x) / half.x;
          const az = Math.abs(local.z) / half.z;
          const ay = Math.abs(local.y) / half.y;
          if (ax > ay && ax > az) bestNormal = new THREE.Vector3(Math.sign(local.x), 0, 0);
          else if (az > ax && az > ay) bestNormal = new THREE.Vector3(0, 0, Math.sign(local.z));
          else bestNormal = new THREE.Vector3(0, Math.sign(local.y), 0);
        }
      }
    }
    // also check door meshes via raycaster for accurate
    // use THREE raycaster against meshes group
    this._raycaster.set(origin, dir);
    this._raycaster.far = Math.min(maxDist, bestDist);
    const hits = this._raycaster.intersectObjects(this.game.scene.children, true);
    for (const h of hits) {
      if (h.distance < bestDist && h.distance > 0.01) {
        // ignore enemy and player meshes, only world
        if (h.object.userData.isPickup || h.object.geometry?.type === 'CapsuleGeometry') continue;
        if (h.object.parent?.userData?.isDoor) continue; // door already handled
        // check if point is within a collider-like object? Accept
        bestDist = h.distance; bestPoint = h.point.clone(); bestNormal = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize() : new THREE.Vector3(0, 1, 0);
        bestMat = 'concrete';
      }
    }
    if (bestPoint) return { point: bestPoint, normal: bestNormal, distance: bestDist, material: bestMat };
    return null;
  }

  spawnImpact(point, normal, material) {
    const geo = new THREE.CircleGeometry(0.07, 6);
    const colors = { concrete: 0xaaaaaa, flesh: 0x7a1a1a, metal: 0x8a8a9a };
    const mat = new THREE.MeshBasicMaterial({ color: colors[material] || 0xcccccc, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(point).addScaledVector(normal, 0.02);
    // orient to normal
    const up = new THREE.Vector3(0, 0, 1);
    mesh.quaternion.setFromUnitVectors(up, normal);
    // add tiny box for 3d
    const sparkGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.9 });
    const spark = new THREE.Mesh(sparkGeo, sparkMat);
    spark.position.copy(point).addScaledVector(normal, 0.05);
    // group
    const group = new THREE.Group();
    group.add(mesh); group.add(spark);
    // store combined life in mesh
    const entry = { mesh: group, life: 3.2, maxLife: 3.2 };
    this.impactPool.push(entry);
    this.game.scene.add(group);
    // cap pool
    if (this.impactPool.length > 40) { const old = this.impactPool.shift(); this.game.scene.remove(old.mesh); }
  }

  spawnTracer(from, to) {
    const dir = to.clone().sub(from);
    const len = dir.length();
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array([from.x, from.y, from.z, to.x, to.y, to.z]);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({ color: 0xffe9a8, transparent: true, opacity: 0.65 });
    const line = new THREE.Line(geo, mat);
    const entry = { mesh: line, life: 0.06, maxLife: 0.06 };
    this.tracerPool.push(entry);
    this.game.scene.add(line);
    if (this.tracerPool.length > 24) { const old = this.tracerPool.shift(); this.game.scene.remove(old.mesh); }
  }

  // interaction helpers
  findInteractable(eye, dir, maxDist = 2.2) {
    let best = null; let bestDist = Infinity;
    for (const m of this.interactables) {
      const to = m.position.clone().sub(eye);
      const d = to.length();
      if (d > maxDist || d < 0.2) continue;
      const nd = to.normalize();
      if (nd.dot(dir) < 0.86) continue; // ~30 deg cone
      // LOS check: if world blocks, skip
      const hit = this.raycast(eye, dir, d - 0.15);
      if (hit) continue;
      if (d < bestDist) { bestDist = d; best = m; }
    }
    return best;
  }

  interact(mesh) {
    if (!mesh) return false;
    if (mesh.userData.isDoor) {
      mesh.userData.open = !mesh.userData.open;
      this.game.audio?.play(mesh.userData.open ? 'door_open' : 'door_close', mesh.position);
      return true;
    }
    if (mesh.userData.isPickup) {
      const type = mesh.userData.pickupType;
      if (type === 'shotgun') {
        const hasShotgun = this.game.weapons.weapons.some(w => w.id === 'shotgun');
        if (!hasShotgun) {
          const shot = new Weapon(WEAPONS.shotgun);
          this.game.weapons.weapons.push(shot);
          this.game.weapons.updateHUD();
        } else {
          const w = this.game.weapons.weapons.find(w => w.id === 'shotgun');
          if (w) w.reserve += 12;
        }
        this.game.audio?.play('pickup', mesh.position);
      } else if (type === 'ammo_m4') {
        const w = this.game.weapons.weapons.find(w => w.id === 'm4a1');
        if (w) w.reserve += 60;
        this.game.audio?.play('pickup', mesh.position);
      }
      // respawn after delay
      mesh.visible = false;
      setTimeout(() => { mesh.visible = true; }, 18000);
      this.game.weapons.updateHUD();
      return true;
    }
    return false;
  }
}
