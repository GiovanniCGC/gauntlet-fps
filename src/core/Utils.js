import * as THREE from 'three';

export const Utils = {
  clamp(v, a, b) { return Math.max(a, Math.min(b, v)); },
  lerp(a, b, t) { return a + (b - a) * t; },
  damp(current, target, lambda, dt) { return THREE.MathUtils.damp(current, target, lambda, dt); },
  toRad(d) { return d * Math.PI / 180; },
  toDeg(r) { return r * 180 / Math.PI; },
  // Smoothstep
  smoothstep(t) { return t * t * (3 - 2 * t); },
  // Simple seeded random for deterministic patterns
  seededRandom(s) {
    const x = Math.sin(s * 127.1) * 43758.5453;
    return x - Math.floor(x);
  },
  // Ray vs Box quick check
  intersectsRayBox(origin, dir, box) {
    const ray = new THREE.Ray(origin, dir.clone().normalize());
    const target = new THREE.Vector3();
    return ray.intersectBox(box, target) !== null;
  }
};

export function createBoxMesh(w, h, d, color, pos) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.05 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  // store AABB
  mesh.userData.aabb = new THREE.Box3().setFromCenterAndSize(pos, new THREE.Vector3(w, h, d));
  return mesh;
}
