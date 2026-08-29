export const CONFIG = {
  // Player movement - tactical FPS values (m/s)
  movement: {
    walkSpeed: 3.2,
    sprintSpeed: 5.4,
    crouchSpeed: 1.7,
    adsSpeedMult: 0.55,
    sprintFovBonus: 4,
    baseFov: 85,
    adsFov: 62,
    jumpForce: 4.8,
    gravity: 18.5,
    airControlFactor: 0.58,
    acceleration: 68,
    deceleration: 64,
    groundFriction: 14.0,
    wasdWorldRelative: false, // FIX: W = waar je kijkt (camera-relative) zoals normale FPS
    stepHeight: 0.35,
    slopeLimit: 46, // degrees
    crouchHeight: 1.05,
    standHeight: 1.75,
    crouchTransitionSpeed: 8.5,
    collisionRadius: 0.32,
    noclipThreshold: 0.04,
  },
  camera: {
    sensitivity: 1.0, // multiplier
    mouseSensitivity: 0.0022,
    leanAngle: 14, // degrees
    leanOffset: 0.42, // meters
    leanSpeed: 9.5,
    bobAmplitudeWalk: 0.025,
    bobFrequencyWalk: 9.0,
    bobAmplitudeSprint: 0.045,
    swayAmount: 0.012,
    inertiaSpeed: 6.5,
    recoilRecovery: 8.0,
    landingKick: 0.09,
  },
  weapons: {
    // will be defined in weapons/definitions.js but defaults here
    adsTransitionSpeed: 11,
    recoilRecoveryBase: 7.5,
    switchTime: 0.32,
  },
  enemies: {
    detectionRange: 28,
    fov: 110, // deg
    hearingRange: 12,
    attackRange: 24,
    reactionTime: 0.35,
    searchDuration: 6,
    patrolSpeed: 1.6,
    chaseSpeed: 3.1,
  },
  ballistics: {
    headMult: 2.6,
    bodyMult: 1.0,
    limbMult: 0.72,
    falloffStart: 22,
    falloffEnd: 55,
    penetrationEnabled: false,
  },
  health: {
    playerMax: 100,
    enemyMax: 80,
  },
  input: {
    // defaults, remappable via Input.js
    moveForward: 'KeyW',
    moveBack: 'KeyS',
    moveLeft: 'KeyA',
    moveRight: 'KeyD',
    sprint: 'ShiftLeft',
    crouch: 'ControlLeft',
    crouchAlt: 'KeyC',
    jump: 'Space',
    leanLeft: 'KeyQ',
    leanRight: 'KeyE',
    fire: 0, // left mouse
    ads: 2, // right mouse
    reload: 'KeyR',
    interact: 'KeyF',
    weap1: 'Digit1',
    weap2: 'Digit2',
    pause: 'Escape',
  }
};
