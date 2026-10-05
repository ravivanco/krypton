import React from 'react';
import { Shield, Cpu, Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] border-t border-[#1A1F2C] py-16 text-xs font-sans text-[#8A93A6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-[#0B0D14] border border-[#00B8FF]/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00B8FF]" />
              </div>
              <span className="font-display font-bold text-base text-[#F2F5FA] tracking-wider">
                KRYPTON // FACTORY
              </span>
            </div>

            <p className="text-xs text-[#8A93A6] leading-relaxed max-w-sm">
              Fábrica de software de ingeniería avanzada y arquitectura distribuida.
              Especialistas en plataformas críticas, rendimiento extremo y estética espacial 3D.
            </p>

            <div className="text-[11px] font-code text-[#8A93A6] space-y-1">
              <div>Nodo Central: Santiago / Bogotá / Ciudad de México</div>
              <div>Infraestructura: Multi-Cloud (AWS / GCP / Azure)</div>
              <div>Conformidad: WCAG 2.2 AA · ISO 27001 · HIPAA</div>
            </div>
          </div>

          {/* Links: Disciplinas */}
          <div className="space-y-3 font-code">
            <div className="text-xs font-bold text-[#F2F5FA] uppercase tracking-wider">
              Disciplinas
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sitios-web-landing" className="hover:text-[#00B8FF] transition-colors">
                  Web & SSR Next.js
                </a>
              </li>
              <li>
                <a href="#apps-moviles" className="hover:text-[#39FF14] transition-colors">
                  Móvil React Native / Flutter
                </a>
              </li>
              <li>
                <a href="#software-empresarial" className="hover:text-[#FF2BD6] transition-colors">
                  Software Empresarial & ERP
                </a>
              </li>
              <li>
                <a href="#facturacion-electronica" className="hover:text-[#FF2BD6] transition-colors">
                  Facturación Fiscal & XML
                </a>
              </li>
              <li>
                <a href="#ciberseguridad-compliance" className="hover:text-[#39FF14] transition-colors">
                  Ciberseguridad & Zero Trust
                </a>
              </li>
              <li>
                <a href="#soluciones-salud-healthtech" className="hover:text-[#00B8FF] transition-colors">
                  Salud Digital & HL7 FHIR
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Arquitecturas & Stack */}
          <div className="space-y-3 font-code">
            <div className="text-xs font-bold text-[#F2F5FA] uppercase tracking-wider">
              Ingeniería
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#stack-tecnologico" className="hover:text-[#00B8FF] transition-colors">
                  Stack Tecnológico 7-D
                </a>
              </li>
              <li>
                <a href="#arquitecturas" className="hover:text-[#00B8FF] transition-colors">
                  Topologías & Patrones
                </a>
              </li>
              <li>
                <a href="#metodologias" className="hover:text-[#00B8FF] transition-colors">
                  SDLC & Trunk-Based CI/CD
                </a>
              </li>
              <li>
                <a href="#casos-de-exito" className="hover:text-[#00B8FF] transition-colors">
                  Métricas de Producción
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00B8FF] transition-colors">
                  Diagnóstico de Arquitectura
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Badges */}
          <div className="space-y-3 font-code">
            <div className="text-xs font-bold text-[#F2F5FA] uppercase tracking-wider">
              Acreditación
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 bg-[#0B0D14] border border-[#1A1F2C] rounded">
                <span className="text-[#F2F5FA] font-bold block">ISO/IEC 27001:2022</span>
                <span className="text-[#8A93A6]">SGSI en Infraestructura y Código</span>
              </div>
              <div className="p-2 bg-[#0B0D14] border border-[#1A1F2C] rounded">
                <span className="text-[#F2F5FA] font-bold block">HIPAA / HL7 FHIR</span>
                <span className="text-[#8A93A6]">Auditoría de Datos Clínicos</span>
              </div>
              <div className="p-2 bg-[#0B0D14] border border-[#1A1F2C] rounded">
                <span className="text-[#F2F5FA] font-bold block">SOC 2 Type II Ready</span>
                <span className="text-[#8A93A6]">Controles de Disponibilidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1A1F2C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code">
          <div>
            © 2026 Krypton Atomic Software Factory. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#00B8FF]">Zero Deuda Técnica</span>
            <span aria-hidden="true" className="text-[#1A1F2C]">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F2F5FA] hover:text-[#00B8FF] transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
