import React, { useState } from 'react';
import { wireframesData } from '../data/wireframesData';
import { Layers, Grid, Eye, CheckCircle2, Shield } from 'lucide-react';

export const WireframesView: React.FC = () => {
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [activeWireframeId, setActiveWireframeId] = useState(wireframesData[0].sectionId);

  const activeWireframe =
    wireframesData.find((w) => w.sectionId === activeWireframeId) || wireframesData[0];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>ENTREGABLE 02 // WIREFRAMES DE BAJA FIDELIDAD</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA]">
          Planos Arquitectónicos & Grid de 12 Columnas
        </h1>

        <p className="text-base text-[#8A93A6] leading-relaxed">
          Estructura de maquetación, distribución espacial y flujos de información en baja fidelidad
          para validar jerarquías de contenido antes del renderizado de alta fidelidad.
        </p>

        {/* Grid overlay toggle */}
        <div className="pt-2">
          <button
            onClick={() => setShowGridOverlay(!showGridOverlay)}
            className={`px-4 py-2 rounded text-xs font-code flex items-center gap-2 border cursor-pointer transition-colors ${
              showGridOverlay
                ? 'bg-[#00B8FF] text-[#05060A] font-bold border-[#00B8FF]'
                : 'bg-[#0B0D14] text-[#8A93A6] border-[#1A1F2C] hover:text-[#F2F5FA]'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>{showGridOverlay ? 'Ocultar Grid de 12 Columnas' : 'Superponer Grid de 12 Columnas'}</span>
          </button>
        </div>
      </div>

      {/* Wireframe Section Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {wireframesData.map((wireframe) => {
          const isSelected = wireframe.sectionId === activeWireframeId;
          return (
            <button
              key={wireframe.sectionId}
              onClick={() => setActiveWireframeId(wireframe.sectionId)}
              className={`p-3 rounded text-left text-xs font-code border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#00B8FF]/15 border-[#00B8FF] text-[#00B8FF] font-semibold'
                  : 'bg-[#0B0D14] border-[#1A1F2C] text-[#8A93A6] hover:text-[#F2F5FA]'
              }`}
            >
              <div className="text-[10px] text-[#8A93A6] mb-1">PLANO</div>
              <div className="truncate">{wireframe.title.split('.')[1] || wireframe.title}</div>
            </button>
          );
        })}
      </div>

      {/* Wireframe Canvas Simulation */}
      <div className="relative bg-[#05060A] border-2 border-dashed border-[#1A1F2C] rounded-xl p-8 sm:p-12 overflow-hidden space-y-8">
        {/* Optional 12-Column Grid Overlay */}
        {showGridOverlay && (
          <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-6 px-8 sm:px-12 z-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full bg-[#00B8FF]/5 border-x border-[#00B8FF]/15 flex items-start justify-center pt-2 text-[10px] font-code text-[#00B8FF]/50"
              >
                C{i + 1}
              </div>
            ))}
          </div>
        )}

        {/* Blueprint Details */}
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1A1F2C]">
            <div>
              <span className="text-xs font-code text-[#00B8FF] uppercase">
                PLANO TÉCNICO // {activeWireframe.sectionId}
              </span>
              <h2 className="text-2xl font-heading font-bold text-[#F2F5FA] mt-1">
                {activeWireframe.title}
              </h2>
            </div>
            <div className="px-3 py-1.5 bg-[#0B0D14] border border-[#1A1F2C] rounded text-xs font-code text-[#8A93A6]">
              Sistema: <span className="text-[#F2F5FA] font-bold">12 Columnas Grid</span> · Gutter: 24px
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-code text-[#8A93A6] uppercase">
              Descripción de Maquetación & Distribución Espacial:
            </div>
            <p className="text-xs text-[#F2F5FA] leading-relaxed bg-[#0B0D14] p-4 rounded border border-[#1A1F2C]">
              {activeWireframe.layoutDescription}
            </p>
          </div>

          {/* Schematic Wireframe Layout Block */}
          <div className="p-6 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg space-y-4">
            <div className="text-xs font-code text-[#00B8FF] uppercase tracking-wider">
              Componentes Estructurales Requeridos en este Bloque
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeWireframe.components.map((comp, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 bg-[#05060A] border border-dashed border-[#1A1F2C] rounded text-xs text-[#8A93A6] flex items-start gap-2"
                >
                  <span className="text-[#00B8FF] font-mono text-[11px] font-bold">
                    0{cIdx + 1}
                  </span>
                  <span className="text-[#F2F5FA]">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contrast & Accessibility Verification */}
          <div className="p-4 bg-[#0B0D14] border border-[#00B8FF]/30 rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF]">
              <Shield className="w-4 h-4" />
              <span className="font-bold">Consideraciones de Accesibilidad & Contraste WCAG 2.2 AA</span>
            </div>
            <p className="text-xs text-[#8A93A6] leading-relaxed">
              {activeWireframe.contrastConsiderations}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
