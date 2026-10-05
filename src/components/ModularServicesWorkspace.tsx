import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServicesIndexSection } from './ServicesIndexSection';
import { ServiceDetailSection } from './ServiceDetailSection';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Receipt, 
  ShieldCheck, 
  Activity, 
  Grid, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ModularServicesWorkspaceProps {
  initialServiceId?: string;
  onServiceChange?: (accent: 'blue' | 'green' | 'pink') => void;
}

export const ModularServicesWorkspace: React.FC<ModularServicesWorkspaceProps> = ({
  initialServiceId = 'overview',
  onServiceChange,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialServiceId);

  const currentServiceIndex = servicesData.findIndex((s) => s.id === activeSubTab);
  const currentService = currentServiceIndex !== -1 ? servicesData[currentServiceIndex] : null;

  const handleSelectService = (id: string) => {
    setActiveSubTab(id);
    const service = servicesData.find((s) => s.id === id);
    if (service && onServiceChange) {
      onServiceChange(service.accent);
    }
  };

  const handlePrevService = () => {
    if (currentServiceIndex > 0) {
      handleSelectService(servicesData[currentServiceIndex - 1].id);
    } else {
      setActiveSubTab('overview');
    }
  };

  const handleNextService = () => {
    if (activeSubTab === 'overview') {
      handleSelectService(servicesData[0].id);
    } else if (currentServiceIndex < servicesData.length - 1) {
      handleSelectService(servicesData[currentServiceIndex + 1].id);
    }
  };

  return (
    <div className="w-full space-y-8 py-6">
      {/* Sub-navigation bar for services (Zero endless scroll) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#09152F]/90 border-2 border-[#162E58] p-2.5 rounded-2xl shadow-[0_0_30px_rgba(0,184,255,0.15)] flex flex-wrap items-center justify-between gap-3">
          {/* Service Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none w-full lg:w-auto">
            <button
              onClick={() => setActiveSubTab('overview')}
              className={`px-3 py-2 rounded-xl text-xs font-code font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeSubTab === 'overview'
                  ? 'bg-[#00B8FF] text-[#05060A] shadow-[0_0_18px_rgba(0,184,255,0.4)]'
                  : 'text-[#8A93A6] hover:text-[#F2F5FA] hover:bg-[#0E1E42]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Catálogo General (6)</span>
            </button>

            {servicesData.map((service) => {
              const isSelected = activeSubTab === service.id;
              const isBlue = service.accent === 'blue';
              const isGreen = service.accent === 'green';
              const isPink = service.accent === 'pink';

              const activeClass = isBlue
                ? 'bg-[#00B8FF]/20 border-[#00B8FF] text-[#00B8FF] shadow-[0_0_15px_rgba(0,184,255,0.3)]'
                : isGreen
                ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                : 'bg-[#FF2BD6]/20 border-[#FF2BD6] text-[#FF2BD6] shadow-[0_0_15px_rgba(255,43,214,0.3)]';

              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-code font-semibold flex items-center gap-1.5 border transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? activeClass
                      : 'border-transparent text-[#8A93A6] hover:text-[#F2F5FA] hover:bg-[#0E1E42]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.hexAccent }} />
                  <span>{service.name.split('&')[0].split('(')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Quick previous/next stepper */}
          <div className="flex items-center gap-2 ml-auto text-xs font-code">
            <button
              onClick={handlePrevService}
              disabled={activeSubTab === 'overview'}
              className="px-3 py-1.5 rounded-lg bg-[#060D1E] border border-[#1A2E5A] text-[#8A93A6] hover:text-[#F2F5FA] hover:border-[#00B8FF] disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <button
              onClick={handleNextService}
              disabled={currentServiceIndex === servicesData.length - 1}
              className="px-3 py-1.5 rounded-lg bg-[#060D1E] border border-[#1A2E5A] text-[#8A93A6] hover:text-[#00B8FF] hover:border-[#00B8FF] disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modular Content Display: Zero infinite scroll */}
      {activeSubTab === 'overview' ? (
        <ServicesIndexSection />
      ) : currentService ? (
        <div className="transition-all duration-500">
          <ServiceDetailSection
            service={currentService}
            index={currentServiceIndex}
          />
        </div>
      ) : null}
    </div>
  );
};
