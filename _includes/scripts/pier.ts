import noise from './simplex-noise.js';
let ns = new noise();
const TAU = Math.PI * 2;
const CYCLE_FRAMES = 8 * 60;
const RESOLUTION = 64;
const RADIUS = 0.5;
const WID_MULT = 0.1;
const sea = document.querySelector('#pr-sea');
let frameCount = 0;
function draw() {
  const pts: string[] = [];
  const periodAngle = ((frameCount % CYCLE_FRAMES) / CYCLE_FRAMES) * TAU;

  for (let x = 0; x <= RESOLUTION; x++) {
    const y = 85 + 3*Math.sin(ns.noise3D(
      Math.cos(periodAngle-x/8) * RADIUS,
      Math.sin(periodAngle-x/8) * RADIUS,
      x * WID_MULT
    ));
    pts.push(`${((x/RESOLUTION)*100).toFixed(3)} ${y.toFixed(3)}`)
  }
  sea.setAttribute('d', `M${pts.join('L')}L100 100L0 100Z`)
  frameCount++;
  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
