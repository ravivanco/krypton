import React from 'react';
import { AtomicCanvas3D } from './AtomicCanvas3D';
import { ArrowRight, Code2, Cpu, ShieldCheck, Terminal } from 'lucide-react';

interface HeroSectionProps {
  reducedMotion: boolean;
  particleDensity: 'low' | 'medium' | 'high';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  reducedMotion,
  particleDensity,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-[#0B0D14]"
    >
      {/* 3D Atomic WebGL Background & Interactive Scene */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <AtomicCanvas3D
          particleDensity={particleDensity}
          reducedMotion={reducedMotion}
          activeColor="#00B8FF"
          interactive={true}
        />
      </div>

      {/* Cosmic Gradient Vignette with rich deep midnight blue and neon atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060B17] via-[#09152F]/90 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060B17] via-transparent to-[#09152F]/70 pointer-events-none z-10" />

      {/* 12-Column Grid Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Typography, CTAs & Core Metrics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with neon green pulse and cyan badge */}
            <div className="flex items-center gap-2 text-xs font-code tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping" />
              <span className="text-[#39FF14] font-bold">NODO OPERACIONAL ACTIVO</span>
              <span aria-hidden="true" className="text-[#8A93A6]">·</span>
              <span className="text-[#00B8FF] font-semibold">Arquitectura Atómica 3D</span>
            </div>

            {/* H1 Display Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F2F5FA] leading-[1.12]">
              Ingeniería a Escala{' '}
              <span className="text-[#00B8FF] inline-block drop-shadow-[0_0_20px_rgba(0,184,255,0.4)]">
                Atómica
              </span>{' '}
              para Sistemas de{' '}
              <span className="text-[#39FF14] inline-block drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                Misión Crítica
              </span>
            </h1>

            {/* Subhead / Lead */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-sans">
              Diseñamos y desplegamos plataformas web ultrarrápidas, apps móviles
              reactivas, software empresarial ERP/CRM, facturación electrónica tributaria,
              ciberseguridad ofensiva y sistemas de salud interoperables bajo estándar HL7 FHIR.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="px-6 py-3.5 bg-[#00B8FF] text-[#05060A] font-bold text-sm rounded-lg hover:bg-[#00B8FF]/90 transition-all shadow-[0_0_24px_rgba(0,184,255,0.4)] hover:shadow-[0_0_32px_rgba(0,184,255,0.65)] flex items-center gap-2 group"
              >
                <span>Explorar Servicios & Arquitecturas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="px-6 py-3.5 bg-[#0C1A38] border-2 border-[#39FF14]/50 text-[#F2F5FA] font-bold text-sm rounded-lg hover:border-[#39FF14] hover:bg-[#39FF14]/15 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#39FF14]" />
                <span>Hablar con un Arquitecto</span>
              </a>
            </div>

            {/* Engineering Metrics Row with Blue & Green indicators */}
            <div className="pt-8 border-t border-[#192A4E] grid grid-cols-3 gap-6 text-left">
              <div className="bg-[#0A1633]/60 p-3 rounded-lg border border-[#00B8FF]/20">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#F2F5FA]">
                  99.995%
                </div>
                <div className="text-xs text-[#39FF14] mt-1 font-mono font-bold">
                  SLA Disponibilidad
                </div>
              </div>

              <div className="bg-[#0A1633]/60 p-3 rounded-lg border border-[#00B8FF]/20">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#00B8FF]">
                  &lt; 45 ms
                </div>
                <div className="text-xs text-[#00B8FF] mt-1 font-mono font-bold">
                  Latencia P99 Global
                </div>
              </div>

              <div className="bg-[#0A1633]/60 p-3 rounded-lg border border-[#00B8FF]/20">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#39FF14]">
                  Zero
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-mono font-bold">
                  Deuda Técnica
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Spatial Interactive Canvas HUD */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end">
            <div className="w-full max-w-sm p-5 bg-[#0A1633]/90 border-2 border-[#00B8FF]/40 backdrop-blur-md rounded-xl shadow-[0_0_35px_rgba(0,184,255,0.25)] space-y-4 font-code text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#1A2E5A]">
                <div className="flex items-center gap-2 text-[#00B8FF]">
                  <Cpu className="w-4 h-4 text-[#39FF14]" />
                  <span className="font-bold">ATOM MATRIX v4.8</span>
                </div>
                <span className="text-[10px] text-[#39FF14] bg-[#39FF14]/15 px-2 py-0.5 rounded border border-[#39FF14]/30 font-bold">
                  ONLINE 100%
                </span>
              </div>

              <div className="space-y-2 text-[#94A3B8]">
                <div className="flex justify-between p-1.5 bg-[#060D1E] rounded border border-[#16274E]">
                  <span>Render Shader:</span>
                  <span className="text-[#00B8FF] font-bold">GLSL Orbitals & Bloom</span>
                </div>
                <div className="flex justify-between p-1.5 bg-[#060D1E] rounded border border-[#16274E]">
                  <span>Malla Topológica:</span>
                  <span className="text-[#F2F5FA]">Icosahedron + Toroides</span>
                </div>
                <div className="flex justify-between p-1.5 bg-[#060D1E] rounded border border-[#16274E]">
                  <span>Interactividad:</span>
                  <span className="text-[#39FF14] font-bold">Pointer Raycasting</span>
                </div>
                <div className="flex justify-between p-1.5 bg-[#060D1E] rounded border border-[#16274E]">
                  <span>Motor Gráfico:</span>
                  <span className="text-[#00B8FF]">Three.js WebGL2</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1A2E5A] text-[11px] text-[#94A3B8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B8FF]" />
                  <span>Arrastra para rotar cámara 3D</span>
                </div>
                <span className="text-[#39FF14] font-bold">60 FPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
