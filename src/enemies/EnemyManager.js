import { Enemy } from './Enemy.js';
import * as THREE from 'three';

export class EnemyManager {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.spawnPoints = [];
  }

  reset() {
    // remove old meshes
    for (const e of this.list) {
      if (e.mesh.parent) e.mesh.parent.remove(e.mesh);
    }
    this.list = [];
    // spawn 4-5 enemies in level
    const points = [
      new THREE.Vector3(12, 0, -8),
      new THREE.Vector3(-14, 0, -18),
      new THREE.Vector3(6, 0, -28),
      new THREE.Vector3(18, 0, -22),
      new THREE.Vector3(-8, 0, 4),
    ];
    const patrols = [
      [new THREE.Vector3(12,0,-8), new THREE.Vector3(14,0,-14), new THREE.Vector3(8,0,-12)],
      [new THREE.Vector3(-14,0,-18), new THREE.Vector3(-10,0,-24)],
      [new THREE.Vector3(6,0,-28), new THREE.Vector3(10,0,-32), new THREE.Vector3(2,0,-30)],
      [new THREE.Vector3(18,0,-22), new THREE.Vector3(22,0,-18)],
      [new THREE.Vector3(-8,0,4), new THREE.Vector3(-12,0,8)],
    ];
    points.forEach((p, i) => {
      const e = new Enemy(this.game, p, patrols[i]);
      this.list.push(e);
      this.game.scene.add(e.mesh);
    });
  }

  update(dt) {
    for (const e of this.list) e.update(dt);
  }

  onEnemyHit(enemy, dmg) {
    this.game.hud?.showHitmarker(enemy.isDead);
    if(enemy.isDead){
      this.game.hud?.addKill(`<b>YOU</b> → HOSTILE <b>+1</b> [${enemy.position.x.toFixed(0)},${enemy.position.z.toFixed(0)}]`);
    }
  }

  raycast(origin, dir, maxDist) {
    // not used here, world handles
    return null;
  }
}
