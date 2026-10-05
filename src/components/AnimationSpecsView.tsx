import React, { useState } from 'react';
import { animationSpecsData } from '../data/animationSpecsData';
import { AnimationSpec } from '../types';
import { Zap, Play, RotateCcw, Clock, ShieldCheck, Activity } from 'lucide-react';

export const AnimationSpecsView: React.FC = () => {
  const [testingAnimation, setTestingAnimation] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'table' | 'playground'>('table');

  const triggerTest = (name: string) => {
    setTestingAnimation(name);
    setTimeout(() => {
      setTestingAnimation(null);
    }, 1500);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>ENTREGABLE 05 // ESPECIFICACIÓN DE MOTION DESIGN</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA]">
          Especificación de Animaciones & Curvas de Aceleración
        </h1>

        <p className="text-base text-[#8A93A6] leading-relaxed">
          Catálogo riguroso de micro-interacciones (150–250 ms) y transiciones espaciales (600–900 ms)
          con curvas Bézier <code className="text-[#00B8FF]">cubic-bezier(0.22, 1, 0.36, 1)</code> y degradación estática bajo <code className="text-[#F2F5FA]">prefers-reduced-motion</code>.
        </p>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab('table')}
            className={`px-3 py-1.5 rounded text-xs font-code border cursor-pointer transition-colors ${
              activeTab === 'table'
                ? 'bg-[#00B8FF] text-[#05060A] font-bold border-[#00B8FF]'
                : 'bg-[#0B0D14] text-[#8A93A6] border-[#1A1F2C]'
            }`}
          >
            Tabla de Especificación Completa
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`px-3 py-1.5 rounded text-xs font-code border cursor-pointer transition-colors ${
              activeTab === 'playground'
                ? 'bg-[#00B8FF] text-[#05060A] font-bold border-[#00B8FF]'
                : 'bg-[#0B0D14] text-[#8A93A6] border-[#1A1F2C]'
            }`}
          >
            Playground Interactivo de Curvas
          </button>
        </div>
      </div>

      {activeTab === 'table' ? (
        /* Full Technical Specification Table */
        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#05060A] text-[#8A93A6] font-code uppercase tracking-wider border-b border-[#1A1F2C]">
                <tr>
                  <th className="py-3.5 px-4">Elemento UI</th>
                  <th className="py-3.5 px-4">Trigger</th>
                  <th className="py-3.5 px-4">Propiedad CSS / GLSL</th>
                  <th className="py-3.5 px-4">Duración</th>
                  <th className="py-3.5 px-4">Curva Easing</th>
                  <th className="py-3.5 px-4">Reduced Motion Fallback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1F2C] text-[#F2F5FA]">
                {animationSpecsData.map((spec, sIdx) => (
                  <tr key={sIdx} className="hover:bg-[#05060A]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#F2F5FA] font-heading">
                      {spec.element}
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-code text-[#00B8FF] bg-[#00B8FF]/10 px-2 py-0.5 rounded border border-[#00B8FF]/30">
                        {spec.trigger}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-code text-[#8A93A6]">
                      {spec.property}
                    </td>
                    <td className="py-4 px-4 font-code text-[#F2F5FA] font-bold">
                      {spec.duration}
                    </td>
                    <td className="py-4 px-4 font-code text-[#00B8FF]">
                      {spec.easing}
                    </td>
                    <td className="py-4 px-4 text-[#8A93A6]">
                      {spec.reducedMotionFallback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Interactive Animation Playground */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Hover Micro-interaction */}
          <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-code text-[#00B8FF]">MICRO-INTERACCIÓN (200ms)</span>
              <button
                onClick={() => triggerTest('hover')}
                className="p-1.5 rounded bg-[#05060A] border border-[#1A1F2C] text-[#8A93A6] hover:text-[#00B8FF]"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
            <h3 className="text-base font-bold font-heading text-[#F2F5FA]">
              Glow Monocromático en Hover
            </h3>
            <p className="text-xs text-[#8A93A6]">
              cubic-bezier(0.22, 1, 0.36, 1) · 200 ms
            </p>

            <div
              className={`p-6 bg-[#05060A] rounded border transition-all duration-200 text-center ${
                testingAnimation === 'hover'
                  ? 'border-[#00B8FF] shadow-[0_0_24px_rgba(0,184,255,0.4)] scale-[1.02]'
                  : 'border-[#1A1F2C]'
              }`}
            >
              <span className="text-xs font-code text-[#F2F5FA]">
                {testingAnimation === 'hover' ? 'GLOW ACTIVO' : 'Pasa el cursor o pulsa Play'}
              </span>
            </div>
          </div>

          {/* Section Transition */}
          <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-code text-[#00B8FF]">TRANSICIÓN ESPACIAL (750ms)</span>
              <button
                onClick={() => triggerTest('section')}
                className="p-1.5 rounded bg-[#05060A] border border-[#1A1F2C] text-[#8A93A6] hover:text-[#00B8FF]"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
            <h3 className="text-base font-bold font-heading text-[#F2F5FA]">
              Warp de Sección / Entrada Editorial
            </h3>
            <p className="text-xs text-[#8A93A6]">
              cubic-bezier(0.22, 1, 0.36, 1) · 750 ms
            </p>

            <div className="h-24 bg-[#05060A] rounded border border-[#1A1F2C] overflow-hidden flex items-center justify-center relative">
              <div
                className={`transition-all duration-750 text-xs font-code font-bold ${
                  testingAnimation === 'section'
                    ? 'opacity-100 translate-y-0 text-[#00B8FF]'
                    : 'opacity-30 translate-y-4 text-[#8A93A6]'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                ENTRADA EDITORIAL REVELADA
              </div>
            </div>
          </div>

          {/* Staggered Grid */}
          <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-code text-[#00B8FF]">STAGGER RÍTMICO (500ms)</span>
              <button
                onClick={() => triggerTest('stagger')}
                className="p-1.5 rounded bg-[#05060A] border border-[#1A1F2C] text-[#8A93A6] hover:text-[#00B8FF]"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
            <h3 className="text-base font-bold font-heading text-[#F2F5FA]">
              Aparición en Cascada de Tarjetas
            </h3>
            <p className="text-xs text-[#8A93A6]">
              Stagger secuencial de 80ms entre ítems
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-16 rounded bg-[#05060A] border flex items-center justify-center font-code text-xs transition-all duration-500 ${
                    testingAnimation === 'stagger'
                      ? 'border-[#00B8FF] text-[#00B8FF] scale-100 opacity-100'
                      : 'border-[#1A1F2C] text-[#8A93A6] scale-95 opacity-50'
                  }`}
                  style={{
                    transitionDelay: `${i * 120}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  CARD {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
