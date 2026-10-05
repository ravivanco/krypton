import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AtomicCanvas3DProps {
  particleDensity?: 'low' | 'medium' | 'high';
  reducedMotion?: boolean;
  activeColor?: string; // Hex color for the nucleus & glowing orbits
  interactive?: boolean;
}

export const AtomicCanvas3D: React.FC<AtomicCanvas3DProps> = ({
  particleDensity = 'medium',
  reducedMotion = false,
  activeColor = '#00B8FF',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for the entire atomic system
    const atomicGroup = new THREE.Group();
    scene.add(atomicGroup);

    // Particle density calculation
    const particleCount =
      particleDensity === 'low' ? 350 : particleDensity === 'high' ? 1400 : 750;

    // 1. Cosmic particle cloud (Background field in Neon Blue & Neon Green)
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const blueColor = new THREE.Color('#00B8FF');
    const greenColor = new THREE.Color('#39FF14');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 3.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi);

      // Alternating cosmic cyan and neon green particles
      const chosenColor = i % 3 === 0 ? greenColor : blueColor;
      const factor = 0.6 + Math.random() * 0.4;
      particleColors[i3] = chosenColor.r * factor;
      particleColors[i3 + 1] = chosenColor.g * factor;
      particleColors[i3 + 2] = chosenColor.b * factor;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    atomicGroup.add(particleCloud);

    // 2. Central Atomic Nucleus (Surreal fractured sphere with wireframe & core)
    const nucleusInnerGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const nucleusInnerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00B8FF'),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const nucleusInner = new THREE.Mesh(nucleusInnerGeo, nucleusInnerMat);
    atomicGroup.add(nucleusInner);

    // Dense glowing center core
    const coreGeo = new THREE.SphereGeometry(0.45, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x39FF14,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    atomicGroup.add(coreMesh);

    // 3. Floating Surreal Geometries: Torus rings (Orbital Electron Tracks in Blue & Green)
    const orbitCount = 4;
    const orbitRings: THREE.LineLoop[] = [];
    const electrons: THREE.Mesh[] = [];

    const orbitAngles = [
      { x: 0.35, y: 0.8, z: 0.2 },
      { x: -0.4, y: 0.2, z: 0.9 },
      { x: 0.6, y: -0.7, z: 0.3 },
      { x: 0.1, y: 0.4, z: -0.85 },
    ];

    for (let o = 0; o < orbitCount; o++) {
      const radius = 1.6 + o * 0.45;
      const ringPoints: THREE.Vector3[] = [];
      const segments = 64;

      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        ringPoints.push(
          new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0)
        );
      }

      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ringColor = o % 2 === 0 ? blueColor : greenColor;
      const ringMat = new THREE.LineBasicMaterial({
        color: ringColor,
        transparent: true,
        opacity: 0.45 + o * 0.08,
      });

      const ring = new THREE.LineLoop(ringGeo, ringMat);
      ring.rotation.set(
        orbitAngles[o].x * Math.PI,
        orbitAngles[o].y * Math.PI,
        orbitAngles[o].z * Math.PI
      );
      atomicGroup.add(ring);
      orbitRings.push(ring);

      // Orbiting electron particle with glowing color
      const electronGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const electronMat = new THREE.MeshBasicMaterial({
        color: o % 2 === 0 ? 0x39FF14 : 0x00B8FF,
      });
      const electronMesh = new THREE.Mesh(electronGeo, electronMat);
      atomicGroup.add(electronMesh);
      electrons.push(electronMesh);
    }

    // 4. Floating surreal outer wireframe torus in Neon Green
    const surrealTorusGeo = new THREE.TorusGeometry(3.2, 0.025, 16, 80);
    const surrealTorusMat = new THREE.MeshBasicMaterial({
      color: greenColor,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const surrealTorus = new THREE.Mesh(surrealTorusGeo, surrealTorusMat);
    surrealTorus.rotation.x = Math.PI / 3;
    atomicGroup.add(surrealTorus);

    // Mouse movement interaction tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.45;
      targetMouseY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!reducedMotion) {
        // Continuous smooth rotation of the atomic group
        atomicGroup.rotation.y = elapsedTime * 0.18;
        atomicGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15;

        // Animate nucleus core pulse
        const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
        nucleusInner.scale.set(pulse, pulse, pulse);
        nucleusInner.rotation.z += 0.005;

        // Animate outer surreal torus
        surrealTorus.rotation.z = -elapsedTime * 0.08;

        // Animate electrons along orbital paths
        for (let i = 0; i < electrons.length; i++) {
          const speed = 0.9 + i * 0.3;
          const angle = elapsedTime * speed;
          const radius = 1.6 + i * 0.45;

          // Local position in circle
          const localPos = new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0
          );

          // Apply orbital plane rotation to match the ring
          localPos.applyEuler(orbitRings[i].rotation);
          electrons[i].position.copy(localPos);
        }

        // Mouse Parallax Lerp Dampening
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        camera.position.x = currentMouseX;
        camera.position.y = currentMouseY;
        camera.lookAt(0, 0, 0);
      } else {
        // Reduced motion: static positions, zero continuous camera movement
        for (let i = 0; i < electrons.length; i++) {
          const angle = i * 1.5;
          const radius = 1.6 + i * 0.45;
          const localPos = new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0
          );
          localPos.applyEuler(orbitRings[i].rotation);
          electrons[i].position.copy(localPos);
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      nucleusInnerGeo.dispose();
      nucleusInnerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      surrealTorusGeo.dispose();
      surrealTorusMat.dispose();
    };
  }, [particleDensity, reducedMotion, activeColor, interactive]);

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0B0D14] border border-[#00B8FF]/20 rounded-xl">
        <div className="w-16 h-16 rounded-full border-2 border-[#00B8FF] flex items-center justify-center mb-4">
          <div className="w-6 h-6 rounded-full bg-[#00B8FF]/40 animate-ping" />
        </div>
        <p className="text-sm font-code text-[#F2F5FA] uppercase tracking-wider">
          Fallback Vectorial Atómico
        </p>
        <p className="text-xs text-[#8A93A6] mt-1 max-w-xs">
          WebGL no disponible en este dispositivo. Modo accesible activado automáticamente.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] md:min-h-[520px] cursor-grab active:cursor-grabbing select-none"
      role="img"
      aria-label="Representación 3D interactiva de un núcleo atómico con electrones orbitando"
    />
  );
};
