import React, { useState } from 'react';
import { 
  AppViewTab, 
  ViewportMode,
  ActiveModuleId
} from '../types';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Maximize2, 
  Layers, 
  Palette, 
  Sliders, 
  Compass, 
  Zap, 
  Menu, 
  X,
  Shield,
  Activity
} from 'lucide-react';

interface NavigationProps {
  currentTab: AppViewTab;
  onTabChange: (tab: AppViewTab) => void;
  viewportMode: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  particleDensity: 'low' | 'medium' | 'high';
  onChangeParticleDensity: (density: 'low' | 'medium' | 'high') => void;
  activeModule?: ActiveModuleId;
  onSelectModule?: (mod: ActiveModuleId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onTabChange,
  viewportMode,
  onViewportChange,
  reducedMotion,
  onToggleReducedMotion,
  particleDensity,
  onChangeParticleDensity,
  activeModule,
  onSelectModule,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navLinks: Array<{ label: string; href: string; moduleId: ActiveModuleId }> = [
    { label: 'Servicios', href: '#servicios', moduleId: 'servicios' },
    { label: 'Stack', href: '#stack-tecnologico', moduleId: 'stack' },
    { label: 'Arquitecturas', href: '#arquitecturas', moduleId: 'arquitecturas' },
    { label: 'SDLC', href: '#metodologias', moduleId: 'sdlc' },
    { label: 'Casos', href: '#casos-de-exito', moduleId: 'casos' },
    { label: 'Contacto', href: '#contacto', moduleId: 'contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#05060A]/90 backdrop-blur-md border-b border-[#0B0D14]">
      {/* Top Deliverables & Viewport Selector Bar (Engineering Studio Bar) */}
      <div className="bg-[#0B0D14] border-b border-[#1A1F2C] px-4 py-2 flex flex-wrap items-center justify-between text-xs font-code gap-3">
        {/* Deliverables tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          <span className="text-[#8A93A6] hidden sm:inline mr-2 uppercase tracking-widest text-[11px]">
            Entregables:
          </span>
          <button
            onClick={() => onTabChange('prototype')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              currentTab === 'prototype'
                ? 'bg-[#00B8FF]/15 text-[#00B8FF] border border-[#00B8FF]/40 font-semibold'
                : 'text-[#8A93A6] hover:text-[#F2F5FA]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Prototipo & Mockups</span>
          </button>

          <button
            onClick={() => onTabChange('styleguide')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              currentTab === 'styleguide'
                ? 'bg-[#00B8FF]/15 text-[#00B8FF] border border-[#00B8FF]/40 font-semibold'
                : 'text-[#8A93A6] hover:text-[#F2F5FA]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Guía de Estilo & Tokens</span>
          </button>

          <button
            onClick={() => onTabChange('wireframes')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              currentTab === 'wireframes'
                ? 'bg-[#00B8FF]/15 text-[#00B8FF] border border-[#00B8FF]/40 font-semibold'
                : 'text-[#8A93A6] hover:text-[#F2F5FA]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Wireframes Lo-Fi</span>
          </button>

          <button
            onClick={() => onTabChange('animations')}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              currentTab === 'animations'
                ? 'bg-[#00B8FF]/15 text-[#00B8FF] border border-[#00B8FF]/40 font-semibold'
                : 'text-[#8A93A6] hover:text-[#F2F5FA]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Spec de Animaciones</span>
          </button>
        </div>

        {/* Viewport switcher & Accessibility controls */}
        <div className="flex items-center gap-2 ml-auto">
          {currentTab === 'prototype' && (
            <div className="flex items-center bg-[#05060A] border border-[#1A1F2C] rounded p-0.5">
              <button
                onClick={() => onViewportChange('full')}
                title="Viewport Completo Fluido"
                className={`p-1.5 rounded ${
                  viewportMode === 'full'
                    ? 'bg-[#00B8FF] text-[#05060A]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA]'
                }`}
                aria-label="Viewport Fluido"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onViewportChange('desktop')}
                title="Desktop 1440px"
                className={`p-1.5 rounded ${
                  viewportMode === 'desktop'
                    ? 'bg-[#00B8FF] text-[#05060A]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA]'
                }`}
                aria-label="Desktop 1440px"
              >
                <Laptop className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onViewportChange('tablet')}
                title="Tablet 834px (iPad Pro)"
                className={`p-1.5 rounded ${
                  viewportMode === 'tablet'
                    ? 'bg-[#00B8FF] text-[#05060A]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA]'
                }`}
                aria-label="Tablet 834px"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onViewportChange('mobile')}
                title="Mobile 390px (iPhone)"
                className={`p-1.5 rounded ${
                  viewportMode === 'mobile'
                    ? 'bg-[#00B8FF] text-[#05060A]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA]'
                }`}
                aria-label="Mobile 390px"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Quick Engine Settings Toggle */}
          <div className="relative">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="p-1.5 bg-[#05060A] border border-[#1A1F2C] text-[#8A93A6] hover:text-[#00B8FF] rounded flex items-center gap-1.5"
              title="Ajustes de Rendimiento y Accesibilidad"
              aria-label="Ajustes de Motor 3D y Accesibilidad"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Rendimiento</span>
            </button>

            {settingsOpen && (
              <div className="absolute right-0 mt-2 w-64 p-3 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg shadow-2xl z-50 text-xs">
                <div className="font-semibold text-[#F2F5FA] mb-2 flex items-center justify-between">
                  <span>Control de Rendimiento 3D</span>
                  <span className="text-[10px] text-[#00B8FF] font-code">WCAG 2.2</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[#8A93A6] block mb-1">
                      Densidad de Partículas
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      {(['low', 'medium', 'high'] as const).map((d) => (
                        <button
                          key={d}
                          onClick={() => onChangeParticleDensity(d)}
                          className={`py-1 capitalize rounded text-[11px] font-code border ${
                            particleDensity === d
                              ? 'bg-[#00B8FF]/20 border-[#00B8FF] text-[#00B8FF]'
                              : 'bg-[#05060A] border-[#1A1F2C] text-[#8A93A6]'
                          }`}
                        >
                          {d === 'low' ? 'Baja' : d === 'medium' ? 'Media' : 'Alta'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1A1F2C] flex items-center justify-between">
                    <div>
                      <span className="text-[#F2F5FA] block font-medium">Reduced Motion</span>
                      <span className="text-[10px] text-[#8A93A6]">Desactiva rotación 3D continua</span>
                    </div>
                    <button
                      onClick={onToggleReducedMotion}
                      className={`w-9 h-5 rounded-full transition-colors relative ${
                        reducedMotion ? 'bg-[#00B8FF]' : 'bg-[#1A1F2C]'
                      }`}
                      aria-label="Alternar modo de movimiento reducido"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          reducedMotion ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Brand Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onSelectModule && onSelectModule('hero')}
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#00B8FF] text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#07132B] border border-[#00B8FF]/50 flex items-center justify-center relative overflow-hidden group-hover:border-[#39FF14] transition-colors shadow-[0_0_12px_rgba(0,184,255,0.3)]">
            <div className="w-3 h-3 rounded-full bg-[#00B8FF] animate-pulse" />
            <div className="absolute inset-0 border border-[#39FF14]/30 rounded-lg animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-wider text-[#F2F5FA] group-hover:text-[#00B8FF] transition-colors">
              KRYPTON
            </span>
            <span className="text-[10px] font-code tracking-widest text-[#39FF14]">
              ATOMIC SOFTWARE FACTORY
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isCurrentModule = activeModule === link.moduleId;
            return (
              <button
                key={link.href}
                onClick={() => onSelectModule && onSelectModule(link.moduleId)}
                className={`transition-colors font-medium relative cursor-pointer ${
                  isCurrentModule
                    ? 'text-[#00B8FF] font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#00B8FF]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Primary Contact Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onSelectModule && onSelectModule('contacto')}
            className="px-4 py-2 bg-[#00B8FF] text-[#05060A] font-bold text-sm rounded-lg hover:bg-[#00B8FF]/90 transition-all shadow-[0_0_18px_rgba(0,184,255,0.4)] hover:shadow-[0_0_24px_rgba(0,184,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            Iniciar Proyecto
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8A93A6] hover:text-[#F2F5FA] focus-visible:ring-2 focus-visible:ring-[#00B8FF] rounded"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0D14] border-b border-[#1A1F2C] px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded text-[#8A93A6] hover:text-[#00B8FF] hover:bg-[#05060A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1A1F2C]">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 bg-[#00B8FF] text-[#05060A] font-semibold rounded"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
