/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { MotionConfig, useReducedMotion } from 'motion/react';
import { DiveRail, MobileBar } from './dive/Chrome';
import { HeroSection, AgentsSection, AutomationSection } from './dive/Upper';
import { SystemsSection, ArchitectureSection, MethodSection, ResultsSection } from './dive/Deep';
import { ContactSection, SiteFooter } from './dive/Surface';
import { depthState, measureDepth } from './dive/depth';

// three.js is the heaviest dependency: the copy paints first, the water fills in after
const AbyssScene = lazy(() => import('./dive/AbyssScene').then((m) => ({ default: m.AbyssScene })));

export default function App() {
  const reducedMotion = useReducedMotion() ?? false;
  const [depth, setDepth] = useState(0);
  const [stopIndex, setStopIndex] = useState(0);
  const [descending, setDescending] = useState(true);
  const lastDepth = useRef(0);

  // Scroll is the descent: translate position into depth for the scene and the gauges
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const { depth: d, stopIndex: s } = measureDepth();
      depthState.target = d;
      if (Math.abs(d - lastDepth.current) > 0.05) {
        setDescending(d > lastDepth.current);
        lastDepth.current = d;
      }
      setDepth(Math.round(d * 10) / 10);
      setStopIndex(s);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      depthState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      depthState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });
    return () => window.removeEventListener('pointermove', onPointer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#agentes"
        className="sr-only z-[60] bg-thermo px-4 py-3 font-semibold text-[#04121f] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>

      <div aria-hidden="true" className="fixed inset-0 z-0 bg-[linear-gradient(180deg,#0c3f57_0%,#0b2a44_35%,#071a30_70%,#040c1a_100%)]" />
      <Suspense fallback={null}>
        <AbyssScene reducedMotion={reducedMotion} />
      </Suspense>
      <DiveRail depth={depth} stopIndex={stopIndex} descending={descending} />
      <MobileBar depth={depth} stopIndex={stopIndex} descending={descending} />

      <main className="relative z-10 lg:pl-[17rem]">
        <HeroSection />
        <AgentsSection />
        <AutomationSection />
        <SystemsSection />
        <ArchitectureSection />
        <MethodSection />
        <ResultsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </MotionConfig>
  );
}
