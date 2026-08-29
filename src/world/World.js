import * as THREE from 'three';
import { createBoxMesh } from '../core/Utils.js';
import { Weapon } from '../weapons/Weapon.js';
import { WEAPONS } from '../weapons/definitions.js';

function makeConcretePro() {
  const c=document.createElement('canvas'); c.width=512; c.height=512;
  const g=c.getContext('2d');
  // base concrete with subtle gradient
  const grad=g.createLinearGradient(0,0,512,512);
  grad.addColorStop(0,'#1e2a36'); grad.addColorStop(0.5,'#1a242f'); grad.addColorStop(1,'#1d2b39');
  g.fillStyle=grad; g.fillRect(0,0,512,512);
  // large stains / oil
  for(let i=0;i<22;i++){
    const x=Math.random()*512, y=Math.random()*512, rx=30+Math.random()*90, ry=18+Math.random()*45;
    g.fillStyle=`rgba(${12+Math.random()*10},${18+Math.random()*10},${24+Math.random()*10},${0.09+Math.random()*0.12})`;
    g.beginPath(); g.ellipse(x,y,rx,ry,Math.random()*Math.PI,0,Math.PI*2); g.fill();
  }
  // pebbles / aggregate
  for(let i=0;i<9000;i++){
    const x=Math.random()*512, y=Math.random()*512, s=Math.random()*2.2+0.6;
    const v=18+Math.random()*28;
    g.fillStyle=`rgba(${v+14},${v+20},${v+26},${0.18+Math.random()*0.22})`;
    g.beginPath(); g.arc(x,y,s,0,Math.PI*2); g.fill();
  }
  // cracks - thin lines
  g.strokeStyle='rgba(0,0,0,0.18)'; g.lineWidth=1;
  for(let i=0;i<18;i++){
    let x=Math.random()*512, y=Math.random()*512;
    g.beginPath(); g.moveTo(x,y);
    for(let s=0;s<6+Math.random()*8;s++){
      x+= (Math.random()-0.5)*42; y+= (Math.random()-0.5)*42;
      g.lineTo(x,y);
    }
    g.stroke();
  }
  // tile grid with wear
  g.strokeStyle='rgba(255,255,255,0.035)'; g.lineWidth=1;
  for(let i=0;i<512;i+=64){ g.beginPath(); g.moveTo(i,0); g.lineTo(i,512); g.stroke(); }
  for(let i=0;i<512;i+=64){ g.beginPath(); g.moveTo(0,i); g.lineTo(512,i); g.stroke(); }
  // edge wear
  g.strokeStyle='rgba(0,0,0,0.14)'; g.lineWidth=2; g.strokeRect(1,1,510,510);
  const tex=new THREE.CanvasTexture(c);
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(9,9); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace;
  return tex;
}
function makePlasterPro() {
  const c=document.createElement('canvas'); c.width=512; c.height=512;
  const g=c.getContext('2d');
  g.fillStyle='#2c3d4f'; g.fillRect(0,0,512,512);
  // plaster layers
  for(let i=0;i<1400;i++){
    const x=Math.random()*512, y=Math.random()*512, w= Math.random()*120+18, h=Math.random()*3+0.8;
    g.fillStyle=`rgba(255,255,255,${0.035+Math.random()*0.05})`;
    g.fillRect(x,y,w,h);
  }
  // subtle plaster bumps
  for(let i=0;i<6000;i++){
    const x=Math.random()*512, y=Math.random()*512, r=Math.random()*1.4;
    g.fillStyle=`rgba(${200+Math.random()*30},${210+Math.random()*30},${220+Math.random()*20},0.08)`;
    g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill();
  }
  // vertical seams every 3m
  g.strokeStyle='rgba(0,0,0,0.07)'; g.lineWidth=1;
  for(let i=64;i<512;i+=128){ g.beginPath(); g.moveTo(i,0); g.lineTo(i,512); g.stroke(); }
  // top highlight / bottom shadow for panels
  const grad=g.createLinearGradient(0,0,0,32);
  grad.addColorStop(0,'rgba(255,255,255,0.06)'); grad.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle=grad; g.fillRect(0,0,512,32);
  const tex=new THREE.CanvasTexture(c);
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(1.2,1); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace;
  return tex;
}
function makeBrickPro(){
  const c=document.createElement('canvas'); c.width=512; c.height=512;
  const g=c.getContext('2d');
  g.fillStyle='#3b2a22'; g.fillRect(0,0,512,512);
  const brickH=32, brickW=64;
  for(let y=0;y<512;y+=brickH){
    const offset = ((y/brickH)%2)* (brickW/2);
    for(let x=-brickW; x<512; x+=brickW){
      const bx=x+offset, by=y;
      const v= (Math.random()*0.15+0.85);
      const r=Math.floor(58*v), gr=Math.floor(36*v), b=Math.floor(30*v);
      g.fillStyle=`rgb(${r+10},${gr+6},${b+4})`;
      g.fillRect(bx+2, by+2, brickW-3, brickH-3);
      // mortar highlight
      g.fillStyle='rgba(255,255,255,0.06)'; g.fillRect(bx+2, by+2, brickW-3, 2);
    }
  }
  // mortar lines darker
  g.strokeStyle='rgba(0,0,0,0.32)'; g.lineWidth=2;
  for(let y=0;y<512;y+=brickH){ g.beginPath(); g.moveTo(0,y); g.lineTo(512,y); g.stroke(); }
  for(let x=0;x<512;x+=brickW){ g.beginPath(); g.moveTo(x,0); g.lineTo(x,512); g.stroke(); }
  const tex=new THREE.CanvasTexture(c);
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(1.8,1); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace;
  return tex;
}
function makeMetalPro(){
  const c=document.createElement('canvas'); c.width=256; c.height=256;
  const g=c.getContext('2d');
  g.fillStyle='#1e242c'; g.fillRect(0,0,256,256);
  // brushed lines
  for(let i=0;i<256;i+=2){
    const v=Math.random()*0.06+0.02;
    g.fillStyle=`rgba(255,255,255,${v})`;
    g.fillRect(0,i,256,1);
  }
  // rivets
  g.fillStyle='#0c0f12';
  for(let y=16;y<256;y+=64) for(let x=16;x<256;x+=64){ g.beginPath(); g.arc(x,y,3,0,Math.PI*2); g.fill(); g.fillStyle='rgba(255,255,255,0.08)'; g.beginPath(); g.arc(x-1,y-1,1,0,Math.PI*2); g.fill(); g.fillStyle='#0c0f12'; }
  const tex=new THREE.CanvasTexture(c);
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(2,1); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace;
  return tex;
}
function makeWoodPro(){
  const c=document.createElement('canvas'); c.width=512; c.height=256;
  const g=c.getContext('2d');
  g.fillStyle='#5a3d1f'; g.fillRect(0,0,512,256);
  for(let i=0;i<80;i++){
    const y=Math.random()*256; const wobble=Math.random()*18;
    g.strokeStyle=`rgba(${30+Math.random()*20},${20+Math.random()*10},${10+Math.random()*10},${0.18+Math.random()*0.14})`;
    g.lineWidth=1.5+Math.random()*1.2;
    g.beginPath(); g.moveTo(0,y+wobble);
    for(let x=0;x<512;x+=24){ g.lineTo(x, y + Math.sin(x*0.02+i)*6 + wobble); }
    g.stroke();
  }
  const tex=new THREE.CanvasTexture(c);
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping; tex.repeat.set(1,1); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace;
  return tex;
}

export class World {
  constructor(game) {
    this.game = game;
    this.colliders = [];
    this.meshes = new THREE.Group();
    this.interactables = [];
    this.impactPool = [];
    this.tracerPool = [];
    this.shellPool = [];
    this._raycaster = new THREE.Raycaster();
    this._pointLights = [];
  }

  _addCollider(box) { this.colliders.push(box); }

  build() {
    const scene = this.game.scene;

    // ---Atmosphere & lights 100x---
    scene.background = new THREE.Color(0x060a0f);
    // Hemisphere for sky vs ground
    const hemi = new THREE.HemisphereLight(0xd8e6f8, 0x0a1218, 1.08);
    hemi.position.set(0, 40, 0);
    scene.add(hemi);
    // Main sun with soft shadows, high res
    const sun = new THREE.DirectionalLight(0xfff2d6, 1.55);
    sun.position.set(24, 32, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 95;
    sun.shadow.camera.left = -50; sun.shadow.camera.right = 50; sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
    sun.shadow.bias = -0.0006;
    scene.add(sun);
    // Fill & bounce
    const fill = new THREE.DirectionalLight(0x8fb4e0, 0.42);
    fill.position.set(-20, 16, -24);
    scene.add(fill);
    const bounce = new THREE.DirectionalLight(0xff9a40, 0.18);
    bounce.position.set(10, 4, 22);
    scene.add(bounce);
    // Volumetric fog - height + distance
    scene.fog = new THREE.FogExp2(0x0b141f, 0.017);
    // Small point lights for interest (no shadow for perf)
    const addPoint = (x,y,z,c,int) => {
      const l=new THREE.PointLight(c,int,18,1.8); l.position.set(x,y,z); scene.add(l); this._pointLights.push(l);
    };
    addPoint(-6, 2.4, -12, 0xffaa55, 1.8);
    addPoint(14, 2.2, -15, 0x66aaff, 1.2);
    addPoint(6, 3.1, -38, 0xff6644, 1.6);

    // ---Sky dome subtle---
    const skyGeo=new THREE.SphereGeometry(85, 32, 16);
    const skyMat=new THREE.MeshBasicMaterial({ color:0x070c14, side:THREE.BackSide, fog:false });
    const sky=new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);

    // ---Floor PBR 100x realistic---
    const concretePro=makeConcretePro();
    const plasterPro=makePlasterPro();
    const brickPro=makeBrickPro();
    const metalPro=makeMetalPro();
    const woodPro=makeWoodPro();
    const floorMat=new THREE.MeshStandardMaterial({ map: concretePro, roughness:0.82, metalness:0.03, color:0xffffff });
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(128,128), floorMat);
    floor.rotation.x=-Math.PI/2;
    floor.receiveShadow=true;
    scene.add(floor);
    this._addCollider(new THREE.Box3(new THREE.Vector3(-60,-1,-60), new THREE.Vector3(60,0,60)));
    // helpers with PBR - texture per surface
    const makePBR = (c, tex, rough=0.82, metal=0.04)=> new THREE.MeshStandardMaterial({ color:c, map: tex, roughness: rough, metalness: metal });

    const addBox = (w,h,d,x,y,z,color=0x2b3642, rough=0.84, tex=null) => {
      const t = tex || plasterPro;
      const mat=makePBR(color, t, rough, 0.04);
      const mesh=createBoxMesh(w,h,d,color, new THREE.Vector3(x,y,z));
      mesh.material = mat;
      mesh.material.needsUpdate=true;
      this.meshes.add(mesh);
      scene.add(mesh);
      const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(x,y,z), new THREE.Vector3(w,h,d));
      this.colliders.push(box);
      mesh.userData.aabb=box;
      return mesh;
    };
    const addWall = (x,z,w,h,d, rotY=0, color=0x2b3642, rough=0.85, tex=null) => {
      const t = tex || plasterPro;
      const mat=makePBR(color, t, rough, 0.03);
      const mesh=createBoxMesh(w,h,d,color, new THREE.Vector3(x,h/2,z));
      mesh.material=mat;
      mesh.rotation.y=rotY;
      // add top cap trim
      this.meshes.add(mesh);
      scene.add(mesh);
      const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(x,h/2,z), new THREE.Vector3(w,h,d));
      if(Math.abs(rotY)>0.01) box.expandByScalar(Math.max(w,d)*0.2);
      this.colliders.push(box);
      mesh.userData.aabb=box;
      // add wall trim visually (no collision)
      const trimGeo=new THREE.BoxGeometry(w+0.04, 0.06, d+0.04);
      const trimMat=new THREE.MeshStandardMaterial({ color:0x0c141c, roughness:0.95 });
      const trim=new THREE.Mesh(trimGeo, trimMat);
      trim.position.set(x, h-0.03, z);
      trim.rotation.y=rotY;
      scene.add(trim);
      return mesh;
    };

    // Perimeter - mixed brick & concrete for realisme
    addWall(0, -58, 120, 9, 1, 0, 0x3b2a22, 0.88, brickPro);
    addWall(0, 58, 120, 9, 1, 0, 0x1a2736, 0.9, plasterPro);
    addWall(-58, 0, 1, 9, 120, 0, 0x2a333e, 0.88, brickPro);
    addWall(58, 0, 1, 9, 120, 0, 0x1a2736, 0.9, plasterPro);

    // Sector A - close quarters, dark, neon hint
    addWall(-6, -8, 18, 3.35, 0.6, 0, 0x2e3e50, 0.82);
    addWall(-6, -16, 18, 3.35, 0.6, 0, 0x2e3e50, 0.82);
    addWall(-14.5, -12, 0.6, 3.35, 8.6, 0, 0x2e3e50, 0.82);
    addWall(2.5, -12, 0.6, 3.35, 8.6, 0, 0x2e3e50, 0.82);
    addBox(1.2, 2.6, 0.32, -6, 1.3, -7.7, 0x3a4a5c, 0.7);
    addBox(1.2, 2.6, 0.32, -6, 1.3, -16.3, 0x3a4a5c, 0.7);
    // overhead light fixture
    const lightA=new THREE.Mesh(new THREE.BoxGeometry(4,0.08,0.4), new THREE.MeshStandardMaterial({ color:0x182635, emissive:0xffaa55, emissiveIntensity:0.6 }));
    lightA.position.set(-6, 3.15, -12); scene.add(lightA);

    // Sector B - courtyard met brick accentmuur voor realisme
    addWall(14, -10, 14, 3.15, 0.6, 0, 0x3b2a22, 0.88, brickPro);
    addWall(14, -20, 14, 3.15, 0.6, 0, 0x2a3848, 0.8, plasterPro);
    addWall(7.5, -15, 0.6, 3.15, 10.6, 0, 0x2a3848, 0.8, plasterPro);
    addWall(20.5, -15, 0.6, 3.15, 10.6, 0, 0x2e3e50, 0.82, plasterPro);
    addBox(1.85, 1.12, 1.85, 10, 0.56, -15, 0x3b4b5e, 0.78);
    addBox(1.2, 1.45, 2.25, 16, 0.73, -13.5, 0x3b4b5e, 0.78);
    addBox(2.05, 1.04, 1.04, 13, 0.52, -18.2, 0x3b4b5e, 0.78);
    // tire stacks as cover
    for(let i=0;i<3;i++){
      const tire=new THREE.Mesh(new THREE.TorusGeometry(0.42,0.14,10,18), new THREE.MeshStandardMaterial({ color:0x0e1318, roughness:0.92 }));
      tire.rotation.x=Math.PI/2; tire.position.set(9.2, 0.22+i*0.32, -14.2); tire.castShadow=true; scene.add(tire);
    }
    addWall(18, -26, 0.6, 3.15, 7, 0, 0x2a3848,0.8);
    addWall(14, -29.5, 8, 3.15, 0.6, 0, 0x2a3848,0.8);

    // Sector C - elevated with stairs, long sightline, watchtower vibe
    addBox(10, 1.92, 10, 6, 0.96, -38, 0x232f3c, 0.86);
    // add edge concrete wear
    addWall(1, -38, 0.6, 3.35, 10, 0, 0x2b3a4a,0.83);
    addWall(11, -38, 0.6, 3.35, 10, 0, 0x2b3a4a,0.83);
    addWall(6, -42.8, 10, 3.35, 0.6, 0, 0x2b3a4a,0.83);
    for(let i=0;i<6;i++){ addBox(2.2, 0.28, 0.6, 6, 0.14+i*0.3, -31.2-i*0.68, 0x384757,0.8); }
    addBox(0.12, 1.02, 4.2, 5, 1.46, -38, 0x4a5a6e,0.75);
    addBox(0.12, 1.02, 4.2, 7, 1.46, -38, 0x4a5a6e,0.75);
    // searchlight
    const spot=new THREE.SpotLight(0xfff4d0, 12, 30, Math.PI/7, 0.5, 1);
    spot.position.set(6, 5.2, -38); spot.target.position.set(6,0,-22); scene.add(spot); scene.add(spot.target);
    addPoint(6, 4.8, -38, 0xfff2a0, 2.5);

    // ---Detailed windows & frames (geen collision, wel realisme)---
    const addWindow = (x,y,z,w,h,rotY=0)=>{
      const frameMat=new THREE.MeshStandardMaterial({ color:0x0e141c, roughness:0.88, metalness:0.12 });
      const glassMat=new THREE.MeshStandardMaterial({ color:0x6ba3d6, roughness:0.08, metalness:0.85, transparent:true, opacity:0.22 });
      const frame=new THREE.Mesh(new THREE.BoxGeometry(w+0.14, h+0.14, 0.06), frameMat);
      frame.position.set(x,y,z); frame.rotation.y=rotY; scene.add(frame);
      const glass=new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
      glass.position.set(x,y,z); glass.rotation.y=rotY;
      // offset slightly forward to avoid z-fighting
      if(rotY===0) glass.position.z+=0.04; else glass.position.x+= (rotY>0?0.04:-0.04);
      scene.add(glass);
      // cross bars
      const barV=new THREE.Mesh(new THREE.BoxGeometry(0.02, h, 0.02), frameMat);
      barV.position.copy(glass.position); barV.rotation.y=rotY; scene.add(barV);
      const barH=new THREE.Mesh(new THREE.BoxGeometry(w, 0.02, 0.02), frameMat);
      barH.position.copy(glass.position); barH.rotation.y=rotY; scene.add(barH);
    };
    addWindow(-14.5, 1.6, -12, 1.4, 1.1, 0);
    addWindow(2.5, 1.6, -12, 1.4, 1.1, 0);
    addWindow(7.5, 1.7, -15, 1.2, 1.0, Math.PI/2);
    addWindow(20.5, 1.7, -15, 1.2, 1.0, Math.PI/2);
    // pipes along walls
    const pipeMat=new THREE.MeshStandardMaterial({ color:0x2b3a4a, roughness:0.65, metalness:0.42 });
    for(let i=0;i<3;i++){
      const pipe=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04, 7.8, 10), pipeMat);
      pipe.rotation.z=Math.PI/2; pipe.position.set(-6, 0.32+i*0.55, -12.28); scene.add(pipe);
    }
    const vertPipe=new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035, 3.0, 10), pipeMat);
    vertPipe.position.set(20.2, 1.55, -15); scene.add(vertPipe);

    // Cover scattered - meer variatie met juiste textures
    addBox(2.55, 1.58, 0.72, -10, 0.79, -24, 0x334252,0.82);
    addBox(0.72, 1.58, 2.55, 0, 0.79, -22, 0x334252,0.82);
    addBox(3.05, 1.22, 1.04, -2, 0.61, -10, 0x334252,0.82);
    addBox(1.55, 2.45, 1.55, -16, 1.23, -28, 0x2e3d4e,0.85);
    addBox(4.05, 0.46, 4.05, -22, 0.23, -6, 0x252f3a,0.88);
    // elevated platforms
    addBox(6.2, 0.42, 6.2, -20, 1.06, -14, 0x232f3c,0.86);
    for(let i=0;i<4;i++){ addBox(1.6, 0.2, 0.52, -17, 0.21+i*0.26, -11-i*0.55, 0x384757,0.8); }

    // Props - barrels, crates with PBR, emissive hints
    for(let i=0;i<3;i++){
      const barrel=new THREE.Mesh(new THREE.CylinderGeometry(0.38,0.38,0.9,14), new THREE.MeshStandardMaterial({ color:0x8a3a2a, roughness:0.72, metalness:0.15 }));
      barrel.position.set(-8+i*1.9, 0.45, -9.5); barrel.castShadow=true; scene.add(barrel);
    }
    // vegetation - better, with wind hint
    const propGeo=new THREE.CapsuleGeometry(0.22, 1.2, 4, 8);
    const propMat=new THREE.MeshStandardMaterial({ color:0x1e2e22, roughness:0.92 });
    for(let i=0;i<7;i++){ const t=new THREE.Mesh(propGeo, propMat); t.position.set(-27+i*3.8, 0.72, 13+Math.sin(i*1.3)*3); t.castShadow=true; scene.add(t); }

    // Doors with better materials, emissive strip
    this._createDoor(new THREE.Vector3(-6,0,-12), 0, 'door_1');
    this._createDoor(new THREE.Vector3(14,0,-15), Math.PI/2, 'door_2');
    this._createDoor(new THREE.Vector3(6,0,-33.1), 0, 'door_3');

    // Pickups with glow
    this._createPickup(new THREE.Vector3(8,0.45,-6), 'shotgun');
    this._createPickup(new THREE.Vector3(-9,0.45,-12), 'ammo_m4');
    // Crates with wood texture + decals
    for(let i=0;i<3;i++){
      const c=createBoxMesh(0.96,0.66,0.96,0x7a5a2e, new THREE.Vector3(-4+i*6,0.33,2));
      c.material=new THREE.MeshStandardMaterial({ map: woodPro, color:0x9c7a52, roughness:0.82, metalness:0.02 });
      c.castShadow=true; scene.add(c);
      // metal straps
      const strap=new THREE.Mesh(new THREE.BoxGeometry(1.0,0.04,0.04), new THREE.MeshStandardMaterial({ color:0x1e242c, roughness:0.6, metalness:0.55 }));
      strap.position.set(-4+i*6, 0.52, 2); scene.add(strap);
    }
    // Shipping container - metal
    const contMat=new THREE.MeshStandardMaterial({ map: metalPro, color:0x6a7a8a, roughness:0.58, metalness:0.62 });
    const cont=new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.45, 2.45), contMat);
    cont.position.set(26, 1.23, -18); cont.castShadow=true; cont.receiveShadow=true; scene.add(cont);
    const contBox=new THREE.Box3().setFromCenterAndSize(cont.position.clone(), new THREE.Vector3(6.2,2.45,2.45));
    this.colliders.push(contBox);
    // corrugation details (visual only)
    for(let i=0;i<5;i++){
      const rib=new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.45, 2.46), new THREE.MeshStandardMaterial({ color:0x4a5a6e, roughness:0.7, metalness:0.5 }));
      rib.position.set(26 -2.8 + i*1.4, 1.23, -18); scene.add(rib);
    }

    scene.add(this.meshes);
  }

  _createDoor(pos, rotY, id) {
    const geo=new THREE.BoxGeometry(1.9, 2.35, 0.08);
    const mat=new THREE.MeshStandardMaterial({ color:0x3a2a1c, roughness:0.78, metalness:0.05 });
    const mesh=new THREE.Mesh(geo, mat);
    mesh.position.set(pos.x,1.18,pos.z); mesh.rotation.y=rotY; mesh.castShadow=true; mesh.receiveShadow=true;
    mesh.userData.id=id; mesh.userData.isDoor=true; mesh.userData.open=false; mesh.userData.basePos=pos.clone(); mesh.userData.baseRot=rotY;
    // emissive strip
    const strip=new THREE.Mesh(new THREE.BoxGeometry(0.04,1.8,0.02), new THREE.MeshStandardMaterial({ color:0x00ff88, emissive:0x00ff88, emissiveIntensity:0.7 }));
    strip.position.set(0.85,0,0.05); mesh.add(strip);
    this.game.scene.add(mesh);
    const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(pos.x,1.18,pos.z), new THREE.Vector3(1.9,2.35,0.25));
    if(Math.abs(rotY)>0.01) box.expandByScalar(0.2);
    this.colliders.push(box); mesh.userData.collider=box; mesh.userData.colliderIndex=this.colliders.length-1; this.interactables.push(mesh);
  }

  _createPickup(pos, type) {
    const colors={ shotgun:0x8a3a3a, ammo_m4:0x3a8a4a };
    const geo=new THREE.BoxGeometry(0.46,0.26,0.72);
    const mat=new THREE.MeshStandardMaterial({ color:colors[type]||0xaaaaaa, emissive:colors[type]||0x000000, emissiveIntensity:0.24, roughness:0.6 });
    const mesh=new THREE.Mesh(geo, mat);
    mesh.position.copy(pos); mesh.position.y+=0.18; mesh.castShadow=true;
    mesh.userData.isPickup=true; mesh.userData.pickupType=type; mesh.userData.baseY=pos.y+0.18;
    // hologram ring
    const ring=new THREE.Mesh(new THREE.RingGeometry(0.42,0.5,18), new THREE.MeshBasicMaterial({ color:colors[type]||0xffffff, transparent:true, opacity:0.22, side:THREE.DoubleSide }));
    ring.rotation.x=Math.PI/2; ring.position.y=-0.1; mesh.add(ring);
    this.game.scene.add(mesh); this.interactables.push(mesh);
  }

  getColliders(){ return this.colliders; }

  update(dt){
    const t=this.game.time;
    for(const m of this.interactables){
      if(m.userData.isPickup){
        m.rotation.y+=dt*1.05;
        m.position.y=m.userData.baseY+Math.sin(t*1.9+m.position.x)*0.08;
        // pulse emissive
        if(m.material) m.material.emissiveIntensity=0.22+Math.sin(t*3.2)*0.08;
      }
      if(m.userData.isDoor){
        const targetRot=m.userData.open? m.userData.baseRot+Math.PI/2 : m.userData.baseRot;
        m.rotation.y=THREE.MathUtils.damp(m.rotation.y,targetRot,7,dt);
        const idx=m.userData.colliderIndex;
        if(idx!==undefined){
          if(m.userData.open){ this.colliders[idx].min.set(999,999,999); this.colliders[idx].max.set(1000,1000,1000); }
          else { const pos=m.userData.basePos; this.colliders[idx].min.set(pos.x-0.95,0,pos.z-0.13); this.colliders[idx].max.set(pos.x+0.95,2.35,pos.z+0.13); if(Math.abs(m.userData.baseRot)>0.01) this.colliders[idx].expandByScalar(0.2); }
        }
      }
    }
    // animate point light flicker
    this._pointLights.forEach((l,i)=>{
      l.intensity=1.4+Math.sin(t* (2.1+i*0.7))*0.18;
    });
    // impacts
    for(let i=this.impactPool.length-1;i>=0;i--){
      const p=this.impactPool[i]; p.life-=dt;
      if(p.life<=0){ this.game.scene.remove(p.mesh); this.impactPool.splice(i,1); }
      else { const a=p.life/p.maxLife; p.mesh.traverse(o=>{ if(o.material) o.material.opacity = o===p.mesh.children[0]? a : a*0.92; }); p.mesh.scale.setScalar(1+(1-a)*0.32); }
    }
    for(let i=this.tracerPool.length-1;i>=0;i--){
      const tr=this.tracerPool[i]; tr.life-=dt;
      if(tr.life<=0){ this.game.scene.remove(tr.mesh); this.tracerPool.splice(i,1); }
      else tr.mesh.material.opacity=tr.life/tr.maxLife*0.72;
    }
    for(let i=this.shellPool.length-1;i>=0;i--){
      const s=this.shellPool[i]; s.life-=dt; s.mesh.position.addScaledVector(s.vel, dt); s.vel.y-=9.8*dt; s.mesh.rotation.x+=dt*14; s.mesh.rotation.z+=dt*9;
      if(s.life<=0){ this.game.scene.remove(s.mesh); this.shellPool.splice(i,1); }
      else s.mesh.material.opacity = s.life/ s.maxLife;
    }
  }

  raycast(origin, dir, maxDist){
    const ray=new THREE.Ray(origin.clone(), dir.clone().normalize());
    let bestDist=Infinity; let bestPoint=null; let bestNormal=null; let bestMat='concrete';
    const hitPos=new THREE.Vector3();
    for(let i=0;i<this.colliders.length;i++){
      const box=this.colliders[i];
      const hit=ray.intersectBox(box, hitPos);
      if(hit){ const d=hit.distanceTo(origin); if(d<bestDist && d<=maxDist && d>0.01){ bestDist=d; bestPoint=hit.clone(); const c=new THREE.Vector3(); box.getCenter(c); const s=new THREE.Vector3(); box.getSize(s); const local=hit.clone().sub(c); const half=s.clone().multiplyScalar(0.5); const ax=Math.abs(local.x)/half.x, az=Math.abs(local.z)/half.z, ay=Math.abs(local.y)/half.y; if(ax>ay && ax>az) bestNormal=new THREE.Vector3(Math.sign(local.x),0,0); else if(az>ax && az>ay) bestNormal=new THREE.Vector3(0,0,Math.sign(local.z)); else bestNormal=new THREE.Vector3(0,Math.sign(local.y),0); } }
    }
    this._raycaster.set(origin, dir); this._raycaster.far=Math.min(maxDist,bestDist);
    const hits=this._raycaster.intersectObjects(this.game.scene.children,true);
    for(const h of hits){ if(h.distance<bestDist && h.distance>0.01){ if(h.object.userData.isPickup||h.object.geometry?.type==='CapsuleGeometry') continue; if(h.object.parent?.userData?.isDoor) continue; bestDist=h.distance; bestPoint=h.point.clone(); bestNormal=h.face? h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize() : new THREE.Vector3(0,1,0); } }
    if(bestPoint) return { point:bestPoint, normal:bestNormal, distance:bestDist, material:bestMat };
    return null;
  }

  spawnImpact(point, normal, material){
    const geo=new THREE.CircleGeometry(0.075, 8);
    const colors={ concrete:0x9aa3ad, flesh:0x6b1010, metal:0x8f9aaa };
    const mat=new THREE.MeshStandardMaterial({ color:colors[material]||0xcccccc, roughness:0.9, metalness:0.02, transparent:true, opacity:0.96, side:THREE.DoubleSide });
    const mesh=new THREE.Mesh(geo, mat);
    mesh.position.copy(point).addScaledVector(normal,0.018);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1), normal);
    mesh.receiveShadow=false;
    // spark + smoke
    const spark=new THREE.Mesh(new THREE.SphereGeometry(0.035,6,6), new THREE.MeshBasicMaterial({ color:0xffd666, transparent:true, opacity:0.92 }));
    spark.position.copy(point).addScaledVector(normal,0.06);
    const smoke=new THREE.Mesh(new THREE.SphereGeometry(0.055,6,6), new THREE.MeshBasicMaterial({ color:0x4a4a4a, transparent:true, opacity:0.28 }));
    smoke.position.copy(point).addScaledVector(normal,0.1);
    const group=new THREE.Group(); group.add(mesh); group.add(spark); group.add(smoke);
    const entry={ mesh:group, life:3.8, maxLife:3.8 };
    this.impactPool.push(entry); this.game.scene.add(group);
    if(this.impactPool.length>46) { const o=this.impactPool.shift(); this.game.scene.remove(o.mesh); }
    // bullet hole decal stays a bit: also add tiny dark center
    setTimeout(()=>{ if(spark.parent) smoke.material.opacity=0; }, 220);
  }

  spawnTracer(from,to){
    const geo=new THREE.BufferGeometry(); const pos=new Float32Array([from.x,from.y,from.z,to.x,to.y,to.z]); geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
    const mat=new THREE.LineBasicMaterial({ color:0xffe9a0, transparent:true, opacity:0.68 });
    const line=new THREE.Line(geo, mat);
    const entry={ mesh:line, life:0.065, maxLife:0.065 };
    this.tracerPool.push(entry); this.game.scene.add(line);
    if(this.tracerPool.length>28){ const o=this.tracerPool.shift(); this.game.scene.remove(o.mesh); }
  }

  spawnShell(pos, dir){
    const geo=new THREE.CylinderGeometry(0.015,0.015,0.04,8); geo.rotateZ(Math.PI/2);
    const mat=new THREE.MeshStandardMaterial({ color:0xc9a44a, roughness:0.45, metalness:0.62, transparent:true, opacity:1 });
    const mesh=new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.castShadow=false;
    const vel=new THREE.Vector3((Math.random()-0.5)*1.8, 2.2+Math.random()*1.1, (Math.random()-0.5)*1.8);
    // eject to right relative to player
    const right=new THREE.Vector3(Math.cos(this.game.player.yaw),0,Math.sin(this.game.player.yaw));
    vel.addScaledVector(right, 1.1);
    const entry={ mesh, vel, life:1.6, maxLife:1.6 };
    this.shellPool.push(entry); this.game.scene.add(mesh);
    if(this.shellPool.length>18){ const o=this.shellPool.shift(); this.game.scene.remove(o.mesh); }
  }

  findInteractable(eye, dir, maxDist=2.3){
    let best=null; let bestDist=Infinity;
    for(const m of this.interactables){
      const to=m.position.clone().sub(eye); const d=to.length(); if(d>maxDist||d<0.2) continue; const nd=to.normalize(); if(nd.dot(dir)<0.85) continue;
      const hit=this.raycast(eye, dir, d-0.15); if(hit) continue; if(d<bestDist){ bestDist=d; best=m; }
    }
    return best;
  }

  interact(mesh){
    if(!mesh) return false;
    if(mesh.userData.isDoor){ mesh.userData.open=!mesh.userData.open; this.game.audio?.play(mesh.userData.open?'door_open':'door_close', mesh.position); return true; }
    if(mesh.userData.isPickup){
      const type=mesh.userData.pickupType;
      if(type==='shotgun'){
        const res=this.game.weapons.inventory.addWeapon(WEAPONS.shotgun);
        if(res === -1){ // full, just give ammo to existing shotgun if any
          const w=this.game.weapons.inventory.slots.find(s=>s?.id==='shotgun');
          if(w) w.reserve+=12;
        }
        this.game.audio?.play('pickup', mesh.position);
      }
      else if(type==='ammo_m4'){
        // add to M4 if exists, else to current
        const w=this.game.weapons.inventory.slots.find(s=>s?.id==='m4a1') || this.game.weapons.inventory.getCurrent();
        if(w) w.reserve+=60;
        this.game.audio?.play('pickup', mesh.position);
        this.game.weapons.inventory.render();
        this.game.weapons.updateHUD();
      }
      mesh.visible=false; setTimeout(()=>{ mesh.visible=true; },17000); this.game.weapons.updateHUD(); return true;
    }
    return false;
  }
}
