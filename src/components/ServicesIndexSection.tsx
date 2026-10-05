import React from 'react';
import { servicesData } from '../data/servicesData';
import { getTechIcon } from './TechBrandIcons';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Receipt, 
  ShieldCheck, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

// Key showcase tools per service
const serviceToolPreview: Record<string, string[]> = {
  web: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  mobile: ['React Native', 'Flutter', 'Swift & SwiftUI', 'Kotlin & Jetpack Compose'],
  enterprise: ['Node.js / NestJS', 'Java 21 Spring Boot 3', 'PostgreSQL', 'Apache Kafka'],
  invoicing: ['Go (Golang)', 'RabbitMQ', 'HashiCorp Vault', 'PostgreSQL'],
  security: ['HashiCorp Vault', 'SonarQube Enterprise', 'Snyk & Trivy', 'Istio Service Mesh'],
  health: ['PostgreSQL', 'Node.js / NestJS', 'HashiCorp Vault', 'Docker'],
};

export const ServicesIndexSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-gradient-to-b from-[#060B17] via-[#09152F] to-[#060B17] border-b border-[#142347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>02 / CATÁLOGO DE INGENIERÍA</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#39FF14] font-bold">Variación Azul & Verde Neón</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Seis Disciplinas de Alto Rendimiento. Cero Solapamientos.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Cada área opera como una unidad de ingeniería especializada con arquitectura comprobada,
            iconos y stacks específicos, y protocolos de cumplimiento normativo auditables.
          </p>
        </div>

        {/* 6 Independent Cards Grid (12-column system, 3 cols x 2 rows on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isBlue = service.accent === 'blue';
            const isGreen = service.accent === 'green';
            const isPink = service.accent === 'pink';

            const borderHoverClass = isBlue
              ? 'hover:border-[#00B8FF] hover:shadow-[0_0_28px_rgba(0,184,255,0.3)]'
              : isGreen
              ? 'hover:border-[#39FF14] hover:shadow-[0_0_28px_rgba(57,255,20,0.3)]'
              : 'hover:border-[#FF2BD6] hover:shadow-[0_0_28px_rgba(255,43,214,0.3)]';

            const accentTextClass = isBlue
              ? 'text-[#00B8FF]'
              : isGreen
              ? 'text-[#39FF14]'
              : 'text-[#FF2BD6]';

            const accentBgClass = isBlue
              ? 'bg-[#00B8FF]/15 border-[#00B8FF]/40'
              : isGreen
              ? 'bg-[#39FF14]/15 border-[#39FF14]/40'
              : 'bg-[#FF2BD6]/15 border-[#FF2BD6]/40';

            const toolsForThisService = serviceToolPreview[service.id] || [];

            return (
              <article
                key={service.id}
                className={`bg-[#0A1633] border-2 border-[#16274E] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${borderHoverClass} group shadow-lg`}
              >
                <div>
                  {/* Top Row: Icon + Section index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg border ${accentBgClass} ${accentTextClass}`}>
                      {iconMap[service.iconName]}
                    </div>
                    <span className="font-code text-xs text-[#8A93A6] tracking-widest font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-heading font-bold text-[#F2F5FA] mb-2 group-hover:text-[#F2F5FA]">
                    {service.name}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Tool Brand Icons Row */}
                  <div className="pt-3 pb-4 border-t border-[#16274E] space-y-2">
                    <div className="text-[11px] font-code text-[#00B8FF] flex items-center justify-between">
                      <span>Herramientas Principales:</span>
                      <span className="text-[#39FF14] text-[10px]">Stack Validado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {toolsForThisService.map((toolName, tIdx) => (
                        <div
                          key={tIdx}
                          title={toolName}
                          className="w-8 h-8 rounded bg-[#060D1E] border border-[#1A2E5A] flex items-center justify-center p-1.5 hover:border-[#00B8FF] hover:scale-110 transition-all"
                        >
                          {getTechIcon(toolName, 'w-4 h-4')}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Architecture Highlight */}
                  <div className="pt-2 space-y-1 mb-6">
                    <div className="text-xs font-code text-[#8A93A6]">
                      Patrón de Arquitectura:
                    </div>
                    <div className="text-xs font-code text-[#F2F5FA] bg-[#060D1E] p-2.5 rounded border border-[#16274E]">
                      {service.architecture.patternName}
                    </div>
                  </div>
                </div>

                {/* Bottom Action: Anchor to deep dive */}
                <div className="pt-4 border-t border-[#16274E]">
                  <a
                    href={`#${service.slug}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-code font-bold tracking-wider uppercase ${accentTextClass} hover:underline rounded`}
                  >
                    <span>Ver Mockups & Arquitectura 3D</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

