import React, { useState } from 'react';
import { methodologySteps, MethodologyStep } from '../data/methodologyData';
import { 
  GitBranch, 
  Terminal, 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  ArrowRight,
  GitPullRequest
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<MethodologyStep>(methodologySteps[0]);

  return (
    <section id="metodologias" className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (Blue Accent) */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>06 / CICLO DE VIDA DEL SOFTWARE (SDLC)</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">Metodologías de Alto Rendimiento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Ingeniería Predecible: De la Hipótesis a Producción sin Fricción
          </h2>

          <p className="text-base sm:text-lg text-[#8A93A6] leading-relaxed">
            Combinamos Trunk-Based Development, pruebas TDD rigurosas, escaneo DevSecOps continuo
            y observabilidad SRE en cada iteración para garantizar releases sin incidentes.
          </p>
        </div>

        {/* 5-Step Process Pipeline Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {methodologySteps.map((step) => {
            const isSelected = activeStep.phase === step.phase;
            return (
              <button
                key={step.phase}
                onClick={() => setActiveStep(step)}
                className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#00B8FF]/10 border-[#00B8FF] shadow-[0_0_20px_rgba(0,184,255,0.2)]'
                    : 'bg-[#0B0D14] border-[#1A1F2C] hover:border-[#8A93A6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-lg text-[#00B8FF]">
                    {step.phase}
                  </span>
                  <span className="text-[10px] font-code text-[#8A93A6]">
                    {step.cadence}
                  </span>
                </div>
                <div className={`text-xs font-semibold font-heading line-clamp-2 ${isSelected ? 'text-[#F2F5FA]' : 'text-[#8A93A6]'}`}>
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Detail Card */}
        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1A1F2C]">
            <div>
              <span className="text-xs font-code text-[#00B8FF] uppercase tracking-wider">
                FASE {activeStep.phase} // CICLO DE EJECUCIÓN
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F2F5FA] mt-1">
                {activeStep.name}
              </h3>
            </div>
            <div className="px-3 py-1.5 bg-[#05060A] border border-[#1A1F2C] rounded text-xs font-code text-[#8A93A6]">
              Cadencia: <span className="text-[#00B8FF] font-semibold">{activeStep.cadence}</span>
            </div>
          </div>

          <p className="text-sm text-[#F2F5FA] leading-relaxed max-w-3xl">
            {activeStep.description}
          </p>

          {/* Activities vs Deliverable Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Engineering Activities */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-code text-[#8A93A6] uppercase tracking-wider">
                Actividades de Ingeniería Obligatorias en esta Fase:
              </div>
              <div className="space-y-3">
                {activeStep.activities.map((act, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 bg-[#05060A] border border-[#1A1F2C] rounded flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#F2F5FA] leading-relaxed">
                      {act}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Artifact & Quality Gate */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-[#05060A] border border-[#1A1F2C] rounded-lg space-y-2">
                <div className="text-xs font-code text-[#8A93A6] uppercase">
                  Artefacto Entregable Verificable:
                </div>
                <div className="text-xs font-code text-[#F2F5FA] leading-relaxed bg-[#0B0D14] p-3 rounded border border-[#1A1F2C]">
                  {activeStep.deliverableArtifact}
                </div>
              </div>

              <div className="p-5 bg-[#05060A] border border-[#00B8FF]/40 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#00B8FF]" />
                  <span>Quality Gate Innegociable</span>
                </div>
                <p className="text-xs text-[#F2F5FA] leading-relaxed">
                  {activeStep.qualityGate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
