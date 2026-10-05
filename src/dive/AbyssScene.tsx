import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { depthState, waterColor } from './depth';

/** World units per meter of depth. */
const UNIT = 1.25;

const LAMP = new THREE.Color('#ffb45e');
const DENDRITE = new THREE.Color('#06111c');
const DENDRITE_TIP = new THREE.Color('#8fa6b4');

interface AbyssSceneProps {
  reducedMotion: boolean;
}

/** Deterministic PRNG so the reef is the same on every visit. */
function prng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface CoralPath {
  points: THREE.Vector3[];
  segments: number[];
}

interface Coral {
  group: THREE.Group;
  baseX: number;
  baseZ: number;
  colors: Float32Array;
  glow: Float32Array;
  tipness: Float32Array;
  geometry: THREE.BufferGeometry;
  paths: CoralPath[];
  spin: number;
  pulseRate: number;
  pulseClock: number;
}

let dotTexture: THREE.Texture | null = null;
function softDot(): THREE.Texture {
  if (dotTexture) return dotTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  dotTexture = new THREE.CanvasTexture(c);
  return dotTexture;
}

function shaftTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 256;
  const g = c.getContext('2d')!;
  const v = g.createLinearGradient(0, 0, 0, 256);
  v.addColorStop(0, 'rgba(255,255,255,0.9)');
  v.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = v;
  g.fillRect(0, 0, 64, 256);
  g.globalCompositeOperation = 'destination-in';
  const h = g.createLinearGradient(0, 0, 64, 0);
  h.addColorStop(0, 'rgba(0,0,0,0)');
  h.addColorStop(0.5, 'rgba(0,0,0,1)');
  h.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = h;
  g.fillRect(0, 0, 64, 256);
  return new THREE.CanvasTexture(c);
}

/**
 * Grows a neural "black coral": a branching dendrite tree whose root-to-tip
 * paths are the routes agent signals travel along.
 */
function growCoral(seed: number, levels: number, scale: number) {
  const rand = prng(seed);
  const verts: number[] = [];
  const tip: number[] = [];
  const nodePositions: number[] = [];
  const paths: CoralPath[] = [];

  const jitter = (amount: number) =>
    new THREE.Vector3((rand() - 0.5) * amount, (rand() - 0.5) * amount, (rand() - 0.5) * amount);

  const grow = (start: THREE.Vector3, dir: THREE.Vector3, len: number, level: number, path: CoralPath) => {
    let p = start.clone();
    let d = dir.clone();
    const steps = 4;
    for (let s = 0; s < steps; s++) {
      const next = p.clone().add(d.clone().multiplyScalar(len / steps)).add(jitter(len * 0.08));
      const segIndex = verts.length / 6;
      verts.push(p.x, p.y, p.z, next.x, next.y, next.z);
      const tipValue = level / levels;
      tip.push(tipValue, tipValue);
      path.points.push(next.clone());
      path.segments.push(segIndex);
      p = next;
      d = d.add(jitter(0.35)).normalize();
    }
    nodePositions.push(p.x, p.y, p.z);

    if (level >= levels) {
      paths.push(path);
      return;
    }

    const branches = level < 2 ? 3 : rand() > 0.35 ? 2 : 3;
    for (let b = 0; b < branches; b++) {
      const axis = new THREE.Vector3(rand() - 0.5, rand() * 0.2, rand() - 0.5).normalize();
      const angle = 0.45 + rand() * 0.55;
      const nd = d.clone().applyAxisAngle(axis, angle * (rand() > 0.5 ? 1 : -1));
      nd.y += 0.35; // reach for the light
      nd.normalize();
      grow(p, nd, len * (0.7 + rand() * 0.12), level + 1, {
        points: path.points.slice(),
        segments: path.segments.slice(),
      });
    }
  };

  const trunks = 3;
  for (let i = 0; i < trunks; i++) {
    const a = (i / trunks) * Math.PI * 2 + rand();
    const start = new THREE.Vector3(Math.cos(a) * 0.4, 0, Math.sin(a) * 0.4);
    const dir = new THREE.Vector3(Math.cos(a) * 0.35, 1, Math.sin(a) * 0.35).normalize();
    grow(start, dir, 2.3 * scale, 0, { points: [start.clone()], segments: [] });
  }

  const colors = new Float32Array(verts.length);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));

  const lines = new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    }),
  );

  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodePositions), 3));
  const nodes = new THREE.Points(
    nodeGeometry,
    new THREE.PointsMaterial({
      color: DENDRITE_TIP,
      size: 0.08,
      map: softDot(),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    }),
  );

  return {
    lines,
    nodes,
    colors,
    glow: new Float32Array(verts.length / 6),
    tipness: new Float32Array(tip),
    geometry,
    paths,
  };
}

interface Pulse {
  coral: Coral;
  path: CoralPath;
  t: number;
  speed: number;
}

export const AbyssScene: React.FC<AbyssSceneProps> = ({ reducedMotion }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(reducedMotion);
  reducedRef.current = reducedMotion;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // the CSS water gradient on the host stays as the fallback
    }

    const small = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 1.75));
    renderer.setSize(host.clientWidth, host.clientHeight, false);
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const water = new THREE.Color();
    const fog = new THREE.FogExp2(water, 0.045);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(45, host.clientWidth / Math.max(1, host.clientHeight), 0.1, 140);
    camera.position.set(0, 0, 16);

    // Light that falls from the surface and fades with depth
    const hemi = new THREE.HemisphereLight('#7fdbe8', '#020810', 1.2);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#bfeff5', 1.4);
    sun.position.set(-4, 20, 6);
    scene.add(sun);

    // Backdrop: brighter toward the surface, in world space
    const backdropMat = new THREE.ShaderMaterial({
      depthWrite: false,
      uniforms: {
        uWater: { value: new THREE.Color() },
        uLight: { value: new THREE.Color('#2ec4d6') },
      },
      vertexShader: /* glsl */ `
        varying float vWorldY;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorldY = world.y;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uWater;
        uniform vec3 uLight;
        varying float vWorldY;
        void main() {
          float light = smoothstep(-34.0, 26.0, vWorldY);
          vec3 col = mix(uWater, uLight, light * light * 0.16);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `,
    });
    const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(400, 260), backdropMat);
    backdrop.position.z = -70;
    camera.add(backdrop);
    scene.add(camera);

    // Light shafts near the surface
    const shaftTex = shaftTexture();
    const shafts: THREE.Mesh[] = [];
    const shaftRand = prng(7);
    for (let i = 0; i < 7; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: shaftTex,
        color: '#bff4fa',
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        fog: false,
      });
      const shaft = new THREE.Mesh(new THREE.PlaneGeometry(2 + shaftRand() * 3, 40), mat);
      shaft.position.set(-14 + i * 4.6 + shaftRand() * 2, -8, -6 - shaftRand() * 10);
      shaft.rotation.z = -0.28 + shaftRand() * 0.12;
      shaft.userData.phase = shaftRand() * Math.PI * 2;
      scene.add(shaft);
      shafts.push(shaft);
    }

    // Marine snow
    const snowCount = small ? 900 : 2400;
    const snowPositions = new Float32Array(snowCount * 3);
    const snowSpeed = new Float32Array(snowCount);
    const snowRand = prng(11);
    const TOP = 14;
    const BOTTOM = -60 * UNIT - 14;
    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (snowRand() - 0.5) * 50;
      snowPositions[i * 3 + 1] = BOTTOM + snowRand() * (TOP - BOTTOM);
      snowPositions[i * 3 + 2] = -22 + snowRand() * 32;
      snowSpeed[i] = 0.08 + snowRand() * 0.22;
    }
    const snowGeo = new THREE.BufferGeometry();
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3).setUsage(THREE.DynamicDrawUsage));
    const snow = new THREE.Points(
      snowGeo,
      new THREE.PointsMaterial({
        color: '#eef4f5',
        size: 0.075,
        map: softDot(),
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    snow.frustumCulled = false;
    scene.add(snow);

    // The neural reef: one large coral at the surface, more along the wall
    const reefPlan = [
      { depth: 0, x: 7.6, z: -1, levels: small ? 5 : 6, scale: 1.05, seed: 21, spin: 0.06, rate: 0.45 },
      { depth: 13, x: -11, z: -6, levels: 5, scale: 1, seed: 34, spin: 0.035, rate: 1.4 },
      { depth: 27, x: 11.5, z: -6, levels: 5, scale: 1.1, seed: 55, spin: -0.03, rate: 1.2 },
      { depth: 44, x: -11, z: -5, levels: small ? 5 : 6, scale: 1.05, seed: 89, spin: 0.03, rate: 1.0 },
      { depth: 57, x: 11, z: -7, levels: 5, scale: 1.2, seed: 144, spin: -0.025, rate: 1.3 },
    ];

    const corals: Coral[] = reefPlan.map((plan) => {
      const grown = growCoral(plan.seed, plan.levels, plan.scale);
      const group = new THREE.Group();
      group.add(grown.lines, grown.nodes);
      if (plan.depth > 0) {
        // Wall corals are backdrop: they sit behind copy, so they stay quiet
        (grown.lines.material as THREE.LineBasicMaterial).opacity = 0.26;
        (grown.nodes.material as THREE.PointsMaterial).opacity = 0.18;
      }
      group.position.set(plan.x, -plan.depth * UNIT - (plan.depth === 0 ? 4.4 : 5.6), plan.z);
      scene.add(group);
      return {
        group,
        baseX: plan.x,
        baseZ: plan.z,
        colors: grown.colors,
        glow: grown.glow,
        tipness: grown.tipness,
        geometry: grown.geometry,
        paths: grown.paths,
        spin: plan.spin,
        pulseRate: plan.rate,
        pulseClock: plan.rate * 0.8,
      };
    });

    // Agent signals: amber, the only warm light in the water
    const MAX_PULSES = 40;
    const pulses: Pulse[] = [];
    const pulsePositions = new Float32Array(MAX_PULSES * 3);
    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3).setUsage(THREE.DynamicDrawUsage));
    const pulsePoints = new THREE.Points(
      pulseGeo,
      new THREE.PointsMaterial({
        color: LAMP,
        size: 0.42,
        map: softDot(),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        fog: false,
      }),
    );
    pulsePoints.frustumCulled = false;
    scene.add(pulsePoints);

    const pulseRand = prng(3);
    const spawnPulse = (coral: Coral) => {
      if (pulses.length >= MAX_PULSES) return;
      const path = coral.paths[Math.floor(pulseRand() * coral.paths.length)];
      pulses.push({ coral, path, t: 0, speed: 0.35 + pulseRand() * 0.25 });
    };

    const paintCoral = (coral: Coral) => {
      const { colors, glow, tipness } = coral;
      for (let s = 0; s < glow.length; s++) {
        const g = glow[s];
        for (let v = 0; v < 2; v++) {
          const i = (s * 2 + v) * 3;
          const tp = Math.pow(tipness[s * 2 + v], 3); // pale only at the outermost tips
          const dim = 1;
          const r = (DENDRITE.r + (DENDRITE_TIP.r - DENDRITE.r) * tp) * dim;
          const gg = (DENDRITE.g + (DENDRITE_TIP.g - DENDRITE.g) * tp) * dim;
          const b = (DENDRITE.b + (DENDRITE_TIP.b - DENDRITE.b) * tp) * dim;
          colors[i] = r + (LAMP.r - r) * g;
          colors[i + 1] = gg + (LAMP.g - gg) * g;
          colors[i + 2] = b + (LAMP.b - b) * g;
        }
      }
      (coral.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
    };

    const layout = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      const spread = Math.min(1, Math.max(0.35, camera.aspect / 1.6));
      const portrait = camera.aspect < 1;
      corals.forEach((c, i) => {
        // On narrow screens the reef steps back behind the copy
        c.group.position.x = c.baseX * spread + (i === 0 && portrait ? 2.4 : 0);
        c.group.position.z = portrait ? c.baseZ - 6 : c.baseZ;
      });
    };
    layout();
    window.addEventListener('resize', layout);

    corals.forEach(paintCoral);

    // Reduced motion: one frozen signal, lit along its whole path
    const lightStaticPath = () => {
      const coral = corals[0];
      const path = coral.paths[Math.floor(coral.paths.length * 0.62)];
      path.segments.forEach((s) => (coral.glow[s] = 1));
      paintCoral(coral);
    };
    let wasStill = false;

    let last = performance.now();
    let elapsed = 0;
    let camY = -depthState.target * UNIT;
    let camVel = 0;
    let camX = 0;
    let frame = 0;

    const tick = () => {
      frame = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += dt;
      const still = reducedRef.current;
      const time = elapsed;

      if (still && !wasStill) {
        pulses.length = 0;
        lightStaticPath();
      }
      wasStill = still;

      // Ballistic descent: the camera has mass, overshoots a little, settles
      const targetY = -depthState.target * UNIT;
      if (still) {
        camY = targetY;
        camVel = 0;
      } else {
        camVel += (targetY - camY) * 28 * dt;
        camVel -= camVel * 8.5 * dt;
        camY += camVel * dt;
      }
      const targetX = still ? 0 : depthState.pointerX * 0.7;
      camX += (targetX - camX) * Math.min(1, dt * 2.5);
      camera.position.set(camX, camY, 16);
      camera.lookAt(camX * 0.25, camY - 0.4 + (still ? 0 : depthState.pointerY * -0.3), 0);

      const depth = Math.max(0, -camY / UNIT);
      const [r, g, b] = waterColor(depth);
      water.setRGB(r, g, b, THREE.SRGBColorSpace);
      fog.color.copy(water);
      fog.density = 0.03 + Math.min(depth, 60) * 0.0006;
      backdropMat.uniforms.uWater.value.copy(water);
      const daylight = Math.max(0, 1 - depth / 30);
      hemi.intensity = 0.25 + daylight;
      sun.intensity = 0.15 + daylight * 1.3;

      // The surface coral is the hero's subject; on the way home it steps back behind the copy
      const heroLines = corals[0].group.children[0] as THREE.LineSegments;
      const heroTarget = window.scrollY < window.innerHeight && camera.aspect >= 1 ? 1 : 0.2;
      const heroMat = heroLines.material as THREE.LineBasicMaterial;
      heroMat.opacity += (heroTarget - heroMat.opacity) * Math.min(1, dt * 3);

      const shaftWave = still ? 0 : time;
      shafts.forEach((s) => {
        (s.material as THREE.MeshBasicMaterial).opacity =
          Math.max(0, 1 - depth / 22) * (0.06 + 0.035 * Math.sin(shaftWave * 0.4 + s.userData.phase));
      });

      if (!still) {
        for (let i = 0; i < snowCount; i++) {
          let y = snowPositions[i * 3 + 1] - snowSpeed[i] * dt;
          if (y < BOTTOM) y = TOP;
          snowPositions[i * 3 + 1] = y;
          snowPositions[i * 3] += Math.sin(time * 0.3 + i) * 0.0015;
        }
        (snowGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

        const decay = Math.exp(-dt * 1.6);
        corals.forEach((coral) => {
          coral.group.rotation.y += coral.spin * dt;
          if (Math.abs(coral.group.position.y - camY) < 22) {
            coral.pulseClock += dt;
            if (coral.pulseClock > coral.pulseRate) {
              coral.pulseClock = 0;
              spawnPulse(coral);
            }
          }
          for (let s = 0; s < coral.glow.length; s++) coral.glow[s] *= decay;
        });

        let n = 0;
        const local = new THREE.Vector3();
        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p];
          pulse.t += pulse.speed * dt;
          if (pulse.t >= 1) {
            pulses.splice(p, 1);
            continue;
          }
          const pts = pulse.path.points;
          const f = pulse.t * (pts.length - 1);
          const i0 = Math.floor(f);
          local.copy(pts[i0]).lerp(pts[Math.min(i0 + 1, pts.length - 1)], f - i0);
          local.applyMatrix4(pulse.coral.group.matrixWorld);
          pulsePositions[n * 3] = local.x;
          pulsePositions[n * 3 + 1] = local.y;
          pulsePositions[n * 3 + 2] = local.z;
          n++;
          const seg = pulse.path.segments[Math.min(pulse.path.segments.length - 1, i0)];
          if (seg !== undefined) pulse.coral.glow[seg] = 1;
        }
        for (let k = n; k < MAX_PULSES; k++) pulsePositions[k * 3 + 1] = 9999;
        (pulseGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

        corals.forEach((coral) => {
          if (Math.abs(coral.group.position.y - camY) < 24) paintCoral(coral);
        });
      } else {
        for (let k = 0; k < MAX_PULSES; k++) pulsePositions[k * 3 + 1] = 9999;
        (pulseGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', layout);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        mesh.geometry?.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, #0c3f57 0%, #0b2a44 35%, #071a30 70%, #040c1a 100%)' }}
    />
  );
};
