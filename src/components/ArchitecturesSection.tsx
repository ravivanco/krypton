import React, { useState } from 'react';
import { architecturesData } from '../data/architecturesData';
import { Network, Check, X, Shield, Cpu, ArrowRight } from 'lucide-react';

export const ArchitecturesSection: React.FC = () => {
  const [selectedArchId, setSelectedArchId] = useState<string>(architecturesData[0].id);

  const currentArch =
    architecturesData.find((a) => a.id === selectedArchId) || architecturesData[0];

  return (
    <section id="arquitecturas" className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (Blue Accent) */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>05 / PATRONES ARQUITECTÓNICOS</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">Diseño de Sistemas Distribuidos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Cinco Paradigmas de Arquitectura. La Herramienta Justa para el Problema Correcto.
          </h2>

          <p className="text-base sm:text-lg text-[#8A93A6] leading-relaxed">
            No imponemos microservicios por moda ni forzamos monolitos por inercia. Analizamos
            la concurrencia, el modelo de negocio y los costos para seleccionar la topología óptima.
          </p>
        </div>

        {/* Interactive Architecture Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {architecturesData.map((arch) => {
            const isSelected = arch.id === selectedArchId;
            return (
              <button
                key={arch.id}
                onClick={() => setSelectedArchId(arch.id)}
                className={`p-4 rounded-xl text-left transition-all border-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E2042] border-[#00B8FF] shadow-[0_0_24px_rgba(0,184,255,0.3)]'
                    : 'bg-[#081226] border-[#16274E] hover:border-[#39FF14]'
                }`}
              >
                <div className="text-[10px] font-code text-[#39FF14] uppercase mb-1 font-bold">
                  PATRÓN // 0{architecturesData.indexOf(arch) + 1}
                </div>
                <div className={`text-sm font-semibold font-heading ${isSelected ? 'text-[#00B8FF]' : 'text-[#F2F5FA]'}`}>
                  {arch.title.split('(')[0].trim()}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Showcase Canvas */}
        <div className="bg-[#0A1633] border-2 border-[#16274E] rounded-xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#16274E]">
            <div>
              <span className="text-xs font-code text-[#00B8FF] uppercase tracking-wider font-bold">
                ESPECIFICACIÓN ARQUITECTÓNICA
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F2F5FA] mt-1">
                {currentArch.title}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                {currentArch.subtitle}
              </p>
            </div>

            <div className="px-4 py-2.5 bg-[#060D1E] border-2 border-[#39FF14]/50 rounded-lg text-right shadow-lg">
              <span className="text-[10px] font-code text-[#94A3B8] uppercase block">
                Objetivo SLA Contractual
              </span>
              <span className="text-base font-display font-bold text-[#39FF14]">
                {currentArch.slaTarget}
              </span>
            </div>
          </div>

          {/* When to use block */}
          <div className="space-y-2">
            <div className="text-xs font-code text-[#00B8FF] uppercase font-bold">
              ¿Cuándo es la Elección Correcta?
            </div>
            <p className="text-sm text-[#F2F5FA] leading-relaxed bg-[#060D1E] p-4 rounded-lg border border-[#16274E]">
              {currentArch.whenToUse}
            </p>
          </div>

          {/* Tradeoffs: Pros vs Cons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-6 bg-[#060D1E] border border-[#16274E] rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-code text-[#39FF14] uppercase tracking-wider font-bold">
                <Check className="w-4 h-4 text-[#39FF14]" />
                <span>Ventajas Técnicas & Operativas</span>
              </div>
              <ul className="space-y-2.5">
                {currentArch.tradeoffs.pros.map((pro, pIdx) => (
                  <li key={pIdx} className="text-xs text-[#F2F5FA] flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#39FF14] font-bold">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-6 bg-[#060D1E] border border-[#16274E] rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider font-bold">
                <X className="w-4 h-4 text-[#00B8FF]" />
                <span>Compromisos & Desafíos a Mitigar</span>
              </div>
              <ul className="space-y-2.5">
                {currentArch.tradeoffs.cons.map((con, cIdx) => (
                  <li key={cIdx} className="text-xs text-[#94A3B8] flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#00B8FF] font-bold">✕</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Stack Pipeline */}
          <div className="pt-4 border-t border-[#16274E] space-y-3">
            <div className="text-xs font-code text-[#00B8FF] uppercase font-bold">
              Stack de Referencia para este Patrón:
            </div>
            <div className="flex flex-wrap gap-2">
              {currentArch.sampleStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 bg-[#060D1E] border border-[#16274E] text-xs font-code text-[#F2F5FA] rounded-lg hover:border-[#39FF14] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
