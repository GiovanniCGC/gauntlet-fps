# GAUNTLET — Tactical FPS Foundation

Modern realistic first-person tactical FPS built for the Gauntlet Loop. Web-based, no install required.

**Live:** `npm run dev` then open http://localhost:5173

## Features

- **Movement:** WASD, mouse look, sensitivity, sprint, crouch (smooth), jump, grounded checks, acceleration/deceleration, air control (0.35), slope/step handling, collision-safe, no clipping/jitter
- **Leaning:** Q/E smooth interpolation (9.5), 14° / 0.42m, weapon follows, ADS/crouch compatible, collision-aware (raycast limits lean near walls), sprint cancels lean
- **Camera:** Subtle sway, head bob (walk/sprint/crouch), landing/jump kick, ADS transition, recoil response, breathing idle, inertia, configurable FOV (85 base, 62 ADS, +4 sprint)
- **Weapons (modular):** M4A1 (auto 780rpm), G19 (semi), M1014 (shotgun via pickup) — mag/reserve, tactical/empty reload, shell-by-shell shotgun, dry-fire, recoil patterns, spread per stance, ADS speed per weapon, movement penalties, switch (0.32s), muzzle flash/tracer hooks
- **ADS:** RMB smooth, per-weapon speed, movement*0.55, reduced sway, lean-compatible, blocked during sprint/reload/switch
- **Recoil:** Vertical + horizontal, pattern tendencies, randomness, recovery, stance scaling (ADS/crouch/move), no laser, no absurd shake
- **Ballistics:** Raycast hit, falloff 22–55m, head 2.6× body 1× limb 0.72×, material impacts, tracers pooled, no through-wall hits
- **Health:** 100 player / 80 enemy, damage, hit reactions, directional flash, death/restart, no post-death firing
- **Enemies:** Patrol, FOV 110° / 28m, hearing hooks, LOS checks, alert→pursuit→search, cover/strafe, attack with range accuracy, reload, lose track + search 6s, death; no wall tracking, no perfect aim
- **Level:** Courtyard combat arena with close/mid/long lanes, corners for peeking, low cover for crouch, 6-step stairs, 3 doors, pickups, stairs/slope test — not an empty box
- **HUD:** Ammo mag/reserve, health bar, weapon name/mode, crosshair (ADS/sprint states), F prompt, reload pulse, indicators
- **Input:** WASD, Mouse, LMB/RMB, R, Shift, Ctrl/C, Q/E, Space, 1/2, F, Esc — not hard-coded, remappable via CONFIG
- **Audio hooks:** WebAudio synth placeholders + hook registry for footsteps/fire/reload/shell/impact/enemy/etc. — ready for real assets
- **States:** idle/walk/sprint/crouch/jump/fall/lean/ADS/fire/reload/equip/dead — impossible combos blocked (sprint+lean, ADS+reload, etc.)

## Controls

| Key | Action |
|-----|--------|
| WASD | Move |
| Mouse | Look (pointer lock) |
| Shift | Sprint (forward only, not while crouched/ADS) |
| Ctrl / C | Crouch (hold) |
| Space | Jump |
| Q / E | Lean (collision-aware) |
| LMB | Fire |
| RMB | ADS |
| R | Reload (tactical vs empty) |
| 1 / 2 | Primary / Secondary |
| F | Interact (doors, pickups) |
| Esc | Pause/Menu |

## Tech

- Three.js 0.160 + Vite 5 — ES modules, no monolith, pooled effects, no per-frame allocations, no global searches
- Architecture: `Player.js`, `WeaponManager.js`+`Weapon.js`, `Enemy.js`, `World.js`, `Input.js`, `Game.js`, `HUD.js`, `AudioManager.js`

## Performance

Pooled impacts/tracers (≤40/24), box-based raycasts, damp instead of allocations, stable 60fps.

## Run

```bash
npm install
npm run dev
npm run build
npm run test
```

## Gauntlet Loop

Autonomous development with per-stage verification until independent reviewer returns PASS. All commits pushed to GitHub.

