import React from 'react';
import { servicesData } from '../data/servicesData';
import { TrendingUp, Award, Building, ArrowUpRight } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="casos-de-exito" className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (Blue Accent) */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>07 / RESULTADOS EMPRESARIALES</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">Casos de Estudio con Métricas Reales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Impacto Tangible en Operaciones de Misión Crítica
          </h2>

          <p className="text-base sm:text-lg text-[#8A93A6] leading-relaxed">
            Nuestras arquitecturas no son ejercicios teóricos. Han procesado cientos de millones
            en transacciones financieras, conectado historiales de salud y eliminado tiempos muertos en cadenas de suministro.
          </p>
        </div>

        {/* Case Studies Grid (Curated from the 6 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B8FF]/60 hover:shadow-[0_0_20px_rgba(0,184,255,0.15)] transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-code">
                    <span className="text-[#00B8FF] font-semibold uppercase">
                      {service.caseStudy.clientSector}
                    </span>
                    <span className="text-[#8A93A6]">ESTUDIO // 0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#F2F5FA]">
                    {service.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="text-xs font-code text-[#8A93A6]">Desafío:</div>
                    <p className="text-xs text-[#8A93A6] leading-relaxed bg-[#05060A] p-3 rounded border border-[#1A1F2C]">
                      {service.caseStudy.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-code text-[#8A93A6]">Solución Implementada:</div>
                    <p className="text-xs text-[#F2F5FA] leading-relaxed bg-[#05060A] p-3 rounded border border-[#1A1F2C]">
                      {service.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-[#1A1F2C] grid grid-cols-2 gap-3">
                  {service.caseStudy.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#05060A] p-2.5 rounded border border-[#1A1F2C]">
                      <div className="text-lg font-display font-bold text-[#00B8FF]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#8A93A6] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
