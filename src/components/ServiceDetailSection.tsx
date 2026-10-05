import React, { useState } from 'react';
import { ServiceDetail, ArchitectureNode } from '../types';
import { ServiceVisualShowcase } from './ServiceVisualShowcase';
import { getTechIcon } from './TechBrandIcons';
import { 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  TrendingUp, 
  ArrowRight,
  Database,
  Network,
  Share2
} from 'lucide-react';

interface ServiceDetailSectionProps {
  service: ServiceDetail;
  index: number;
}

export const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  service,
  index,
}) => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(
    service.architecture.nodes[0] || null
  );

  // Strict monochromatic styling constants
  const isBlue = service.accent === 'blue';
  const isGreen = service.accent === 'green';
  const isPink = service.accent === 'pink';

  const accentHex = service.hexAccent;
  const accentText = isBlue
    ? 'text-[#00B8FF]'
    : isGreen
    ? 'text-[#39FF14]'
    : 'text-[#FF2BD6]';

  const accentBorder = isBlue
    ? 'border-[#00B8FF]'
    : isGreen
    ? 'border-[#39FF14]'
    : 'border-[#FF2BD6]';

  const accentBorderDim = isBlue
    ? 'border-[#00B8FF]/30'
    : isGreen
    ? 'border-[#39FF14]/30'
    : 'border-[#FF2BD6]/30';

  const accentBgDim = isBlue
    ? 'bg-[#00B8FF]/10'
    : isGreen
    ? 'bg-[#39FF14]/10'
    : 'bg-[#FF2BD6]/10';

  const accentBgSubtle = isBlue
    ? 'bg-[#00B8FF]/5'
    : isGreen
    ? 'bg-[#39FF14]/5'
    : 'bg-[#FF2BD6]/5';

  const accentGlow = isBlue
    ? 'shadow-[0_0_24px_rgba(0,184,255,0.25)]'
    : isGreen
    ? 'shadow-[0_0_24px_rgba(57,255,20,0.25)]'
    : 'shadow-[0_0_24px_rgba(255,43,214,0.25)]';

  return (
    <section
      id={service.slug}
      className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14] relative overflow-hidden"
    >
      {/* Monochromatic background glow gradient (strictly single accent -> transparent) */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-[140px] opacity-10"
        style={{ backgroundColor: accentHex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header: Kicker + H2 Title + Tagline */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-code tracking-wider uppercase">
            <span className={accentText}>03.{index + 1} / ESPECIFICACIÓN DETALLADA</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">{service.name}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            {service.name}
          </h2>

          <p className={`text-base sm:text-lg font-medium ${accentText}`}>
            {service.tagline}
          </p>
        </div>

        {/* Visual High-Fidelity Interactive Showcase & Mockup */}
        <div className="w-full">
          <ServiceVisualShowcase serviceId={service.id} />
        </div>

        {/* 1. Problema que Resuelve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-code text-[#F2F5FA] uppercase tracking-wider">
              <AlertCircle className={`w-4 h-4 ${accentText}`} />
              <span>Diagnóstico del Problema de la Industria</span>
            </div>

            <h3 className="text-xl font-heading font-semibold text-[#F2F5FA]">
              {service.problem.title}
            </h3>

            <p className="text-sm text-[#8A93A6] leading-relaxed">
              {service.problem.summary}
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="text-xs font-code text-[#8A93A6] uppercase tracking-wider">
              Puntos Críticos de Fricción Resueltos por Nuestra Ingeniería
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.problem.painPoints.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="p-3.5 bg-[#05060A] border border-[#1A1F2C] rounded flex items-start gap-3"
                >
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accentText}`} />
                  <p className="text-xs text-[#F2F5FA] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Diagrama de Arquitectura Interactivo */}
        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1A1F2C]">
            <div>
              <div className="flex items-center gap-2 text-xs font-code uppercase tracking-wider text-[#8A93A6]">
                <Network className={`w-4 h-4 ${accentText}`} />
                <span>Topología de Arquitectura & Nodos del Sistema</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#F2F5FA] mt-1">
                {service.architecture.patternName}
              </h3>
            </div>
            <div className="text-xs font-code text-[#8A93A6] flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isBlue ? 'bg-[#00B8FF]' : isGreen ? 'bg-[#39FF14]' : 'bg-[#FF2BD6]'} animate-pulse`} />
              <span>Haz clic en un nodo para inspeccionar especificaciones</span>
            </div>
          </div>

          <p className="text-sm text-[#8A93A6] max-w-3xl">
            {service.architecture.summary}
          </p>

          {/* Interactive Topology Graph Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
            {/* Visual Node Grid */}
            <div className="lg:col-span-8 bg-[#05060A] border border-[#1A1F2C] rounded-lg p-6">
              <div className="text-xs font-code text-[#8A93A6] mb-4 flex items-center justify-between">
                <span>COMPONENTES ACTIVOS ({service.architecture.nodes.length})</span>
                <span>FLUJO DE RED: BIDIRECCIONAL</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {service.architecture.nodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-4 rounded border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? `${accentBgDim} ${accentBorder} ${accentGlow}`
                          : 'bg-[#0B0D14] border-[#1A1F2C] hover:border-[#8A93A6]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-code uppercase px-1.5 py-0.5 rounded border ${accentBorderDim} ${accentText}`}>
                          {node.type}
                        </span>
                        {isSelected && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isBlue ? 'bg-[#00B8FF]' : isGreen ? 'bg-[#39FF14]' : 'bg-[#FF2BD6]'}`} />
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#F2F5FA] mb-1">
                        {node.name}
                      </div>
                      <div className="text-xs text-[#8A93A6] line-clamp-2">
                        {node.role}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Connections / Flow Protocol Map */}
              <div className="mt-6 pt-4 border-t border-[#1A1F2C]">
                <div className="text-xs font-code text-[#8A93A6] mb-3">
                  CONTRATOS DE COMUNICACIÓN & PROTOCOLOS
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.architecture.connections.map((conn, cIdx) => (
                    <div
                      key={cIdx}
                      className="px-2.5 py-1.5 rounded bg-[#0B0D14] border border-[#1A1F2C] text-xs font-code text-[#8A93A6] flex items-center gap-2"
                    >
                      <span className="text-[#F2F5FA]">{conn.from}</span>
                      <ArrowRight className={`w-3 h-3 ${accentText}`} />
                      <span className="text-[#F2F5FA]">{conn.to}</span>
                      <span className={`text-[11px] font-semibold ${accentText}`}>
                        [{conn.protocol} {conn.label ? `· ${conn.label}` : ''}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Node Spec Inspector Drawer */}
            <div className="lg:col-span-4 bg-[#05060A] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
              <div className="text-xs font-code text-[#8A93A6] uppercase tracking-wider">
                Inspector del Componente
              </div>

              {selectedNode ? (
                <div className="space-y-3">
                  <div className="p-3 rounded border bg-[#0B0D14] border-[#1A1F2C]">
                    <div className="text-xs text-[#8A93A6]">Nodo Seleccionado</div>
                    <div className={`text-base font-bold font-heading ${accentText}`}>
                      {selectedNode.name}
                    </div>
                    <div className="text-xs text-[#8A93A6] mt-0.5">
                      Rol: {selectedNode.role}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-code text-[#8A93A6] mb-1">
                      Descripción de Implementación:
                    </div>
                    <p className="text-xs text-[#F2F5FA] leading-relaxed bg-[#0B0D14] p-3 rounded border border-[#1A1F2C]">
                      {selectedNode.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-code text-[#8A93A6] mb-1">
                      Garantías del Patrón:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#8A93A6]">
                      {service.architecture.keyHighlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2">
                          <span className={`font-bold ${accentText}`}>›</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[#8A93A6]">
                  Selecciona un nodo para ver sus detalles.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3. Entregables Técnicos */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-code text-[#8A93A6] uppercase tracking-wider">
            <Layers className={`w-4 h-4 ${accentText}`} />
            <span>Entregables Técnicos & Criterios de Aceptación</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((del, dIdx) => (
              <div
                key={dIdx}
                className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4 hover:border-[#8A93A6] transition-colors"
              >
                <div className={`text-xs font-code font-bold ${accentText}`}>
                  0{dIdx + 1} // ESPECIFICACIÓN
                </div>
                <h4 className="text-base font-semibold text-[#F2F5FA]">
                  {del.title}
                </h4>
                <p className="text-xs text-[#8A93A6] leading-relaxed">
                  {del.description}
                </p>

                <div className="pt-3 border-t border-[#1A1F2C] space-y-1.5">
                  <div className="text-[11px] font-code text-[#8A93A6]">Métricas Verificables:</div>
                  {del.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="text-xs font-code text-[#F2F5FA] flex items-center gap-1.5"
                    >
                      <span className={`w-1 h-1 rounded-full ${isBlue ? 'bg-[#00B8FF]' : isGreen ? 'bg-[#39FF14]' : 'bg-[#FF2BD6]'}`} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Stack Tecnológico del Servicio */}
        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-code text-[#8A93A6] uppercase tracking-wider">
            <Cpu className={`w-4 h-4 ${accentText}`} />
            <span>Stack Tecnológico de Producción Validado</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.stack.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-3">
                <div className="text-xs font-code text-[#8A93A6] uppercase tracking-wider">
                  {cat.category}
                </div>
                <div className="space-y-1.5">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="text-xs font-code text-[#F2F5FA] bg-[#070F22] px-3 py-2.5 rounded border border-[#1A2A4A] flex items-center justify-between hover:border-[#00B8FF]/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {getTechIcon(tool, 'w-4 h-4 shrink-0')}
                        <span>{tool}</span>
                      </div>
                      <span className={`text-[10px] font-bold ${accentText}`}>OK</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Cumplimiento Normativo & Caso de Éxito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cumplimiento Normativo (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-code text-[#8A93A6] uppercase tracking-wider">
              <ShieldCheck className={`w-4 h-4 ${accentText}`} />
              <span>Cumplimiento Normativo & Auditorías</span>
            </div>

            <div className="space-y-4">
              {service.compliance.map((comp, compIdx) => (
                <div
                  key={compIdx}
                  className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#F2F5FA] font-heading">
                      {comp.framework}
                    </span>
                    <span className={`text-[11px] font-code ${accentText}`}>
                      AUDITADO
                    </span>
                  </div>
                  <p className="text-xs text-[#8A93A6] leading-relaxed">
                    {comp.description}
                  </p>
                  <div className="text-[11px] font-code text-[#F2F5FA] pt-1 border-t border-[#1A1F2C]">
                    <span className="text-[#8A93A6]">Punto de Verificación:</span> {comp.auditPoint}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caso de Uso Real (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-code text-[#8A93A6] uppercase tracking-wider">
                <TrendingUp className={`w-4 h-4 ${accentText}`} />
                <span>Caso de Éxito Empresarial</span>
              </div>
              <span className={`text-xs font-code uppercase font-semibold ${accentText}`}>
                {service.caseStudy.clientSector}
              </span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-code text-[#8A93A6]">Desafío del Cliente:</div>
              <p className="text-xs text-[#F2F5FA] leading-relaxed bg-[#05060A] p-3 rounded border border-[#1A1F2C]">
                {service.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-code text-[#8A93A6]">Solución Implementada:</div>
              <p className="text-xs text-[#F2F5FA] leading-relaxed bg-[#05060A] p-3 rounded border border-[#1A1F2C]">
                {service.caseStudy.solution}
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="pt-2">
              <div className="text-xs font-code text-[#8A93A6] mb-3">
                MÉTRICAS DE IMPACTO VERIFICADAS
              </div>
              <div className="grid grid-cols-2 gap-3">
                {service.caseStudy.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 bg-[#05060A] border border-[#1A1F2C] rounded text-left"
                  >
                    <div className={`text-xl font-display font-bold ${accentText}`}>
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-[#8A93A6] mt-1 font-mono">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
