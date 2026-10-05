import React from 'react';
import { ActiveModuleId, NavigationMode } from '../types';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Network, 
  GitBranch, 
  Award, 
  Send, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal
} from 'lucide-react';

interface ModuleControlBarProps {
  activeModule: ActiveModuleId;
  onSelectModule: (mod: ActiveModuleId) => void;
  navigationMode: NavigationMode;
  onToggleNavigationMode: () => void;
}

export const modulesList: Array<{
  id: ActiveModuleId;
  index: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  accent: 'blue' | 'green' | 'pink' | 'cyber';
}> = [
  { id: 'hero', index: '01', name: 'Inicio & Núcleo 3D', shortName: 'Inicio 3D', icon: <Sparkles className="w-3.5 h-3.5" />, accent: 'cyber' },
  { id: 'servicios', index: '02', name: 'Servicios & Nodos', shortName: 'Servicios', icon: <Layers className="w-3.5 h-3.5" />, accent: 'blue' },
  { id: 'stack', index: '03', name: 'Stack 7D & Iconos', shortName: 'Stack 7D', icon: <Cpu className="w-3.5 h-3.5" />, accent: 'blue' },
  { id: 'arquitecturas', index: '04', name: 'Topologías & Patrones', shortName: 'Arquitecturas', icon: <Network className="w-3.5 h-3.5" />, accent: 'blue' },
  { id: 'sdlc', index: '05', name: 'Metodología & CI/CD', shortName: 'SDLC', icon: <GitBranch className="w-3.5 h-3.5" />, accent: 'blue' },
  { id: 'casos', index: '06', name: 'Casos de Éxito', shortName: 'Métricas', icon: <Award className="w-3.5 h-3.5" />, accent: 'green' },
  { id: 'contacto', index: '07', name: 'Contacto & Cotizador', shortName: 'Contacto', icon: <Send className="w-3.5 h-3.5" />, accent: 'green' },
];

export const ModuleControlBar: React.FC<ModuleControlBarProps> = ({
  activeModule,
  onSelectModule,
  navigationMode,
  onToggleNavigationMode,
}) => {
  const currentIndex = modulesList.findIndex((m) => m.id === activeModule);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectModule(modulesList[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < modulesList.length - 1) {
      onSelectModule(modulesList[currentIndex + 1].id);
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full bg-[#050B1A]/95 backdrop-blur-xl border-b-2 border-[#12244A] px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Module Switcher Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none w-full lg:w-auto">
          <span className="text-[11px] font-code text-[#39FF14] font-bold mr-2 uppercase tracking-widest hidden xl:inline flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            Módulos:
          </span>

          {modulesList.map((mod) => {
            const isSelected = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-code font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#00B8FF] text-[#040814] border-[#00B8FF] shadow-[0_0_18px_rgba(0,184,255,0.45)]'
                    : 'bg-[#081226] text-[#8A93A6] border-[#16274E] hover:text-[#F2F5FA] hover:border-[#00B8FF]/50'
                }`}
              >
                <span>{mod.icon}</span>
                <span className="hidden sm:inline font-mono text-[11px] opacity-80">{mod.index}.</span>
                <span>{mod.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Modular Stepper Controls & Mode Switcher */}
        <div className="flex items-center gap-2 ml-auto text-xs font-code">
          {/* Mode Switcher: Modular vs Continuous */}
          <button
            onClick={onToggleNavigationMode}
            title={navigationMode === 'modular' ? 'Cambiar a Vista Continua' : 'Cambiar a Modo Modular'}
            className="px-3 py-1.5 rounded-lg bg-[#081226] border border-[#16274E] text-[#8A93A6] hover:text-[#00B8FF] hover:border-[#00B8FF] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#39FF14]" />
            <span className="hidden md:inline">
              {navigationMode === 'modular' ? 'Modo: Pantalla Modular' : 'Modo: Vista Continua'}
            </span>
          </button>

          {/* Stepper buttons (Active in modular mode) */}
          {navigationMode === 'modular' && (
            <div className="flex items-center bg-[#081226] border border-[#16274E] rounded-lg p-0.5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-1.5 rounded text-[#8A93A6] hover:text-[#F2F5FA] disabled:opacity-30 disabled:hover:text-[#8A93A6] cursor-pointer"
                title="Módulo Anterior (← Flecha Izquierda)"
                aria-label="Módulo Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-[11px] font-mono text-[#F2F5FA] font-bold">
                {currentIndex + 1} / {modulesList.length}
              </span>
              <button
                onClick={handleNext}
                disabled={currentIndex === modulesList.length - 1}
                className="p-1.5 rounded text-[#8A93A6] hover:text-[#00B8FF] disabled:opacity-30 disabled:hover:text-[#8A93A6] cursor-pointer"
                title="Módulo Siguiente (→ Flecha Derecha)"
                aria-label="Módulo Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
