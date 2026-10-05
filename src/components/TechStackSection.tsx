import React, { useState, useMemo } from 'react';
import { techStackData } from '../data/techStackData';
import { TechItem } from '../types';
import { getTechIcon } from './TechBrandIcons';
import { Search, Cpu, CheckCircle2, Filter } from 'lucide-react';

const categories: Array<TechItem['category'] | 'Todos'> = [
  'Todos',
  'Frontend',
  'Backend',
  'Móvil',
  'Datos',
  'Cloud/DevOps',
  'Seguridad',
  'QA',
];

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechItem['category'] | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return techStackData.filter((item) => {
      const matchesCat =
        selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyUse.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="stack-tecnologico" className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (Blue Accent) */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>04 / CAPACIDADES TECNOLÓGICAS</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">Stack Enterprise Certificado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Stack Tecnológico Seleccionado para Producción Continua
          </h2>

          <p className="text-base sm:text-lg text-[#8A93A6] leading-relaxed">
            Eliminamos experimentos no testeados. Nuestro stack está estandarizado en 7 dimensiones
            técnicas con versiones estables, tipado estricto y soporte enterprise a largo plazo (LTS).
          </p>
        </div>

        {/* Filter Bar & Search Input (Functional Interactive Controls) */}
        <div className="bg-[#0B0D14] border border-[#1A1F2C] p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs (Clickable buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#00B8FF] shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-code rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00B8FF] text-[#05060A] font-bold shadow-[0_0_12px_rgba(0,184,255,0.3)]'
                    : 'text-[#8A93A6] hover:text-[#F2F5FA] hover:bg-[#05060A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8A93A6] absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#05060A] border border-[#1A1F2C] rounded text-xs font-code text-[#F2F5FA] placeholder-[#8A93A6] focus:border-[#00B8FF] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Stack Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0A1428] border border-[#162A4A] rounded-xl p-6 flex flex-col justify-between hover:border-[#00B8FF] hover:shadow-[0_0_24px_rgba(0,184,255,0.25)] transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Tool Brand Icon + Category */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#070D1E] border border-[#00B8FF]/30 flex items-center justify-center p-2 group-hover:border-[#39FF14] group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">
                      {getTechIcon(item.name, 'w-6 h-6')}
                    </div>
                    <div>
                      <span className="text-[#00B8FF] font-semibold text-xs font-code block">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-[#8A93A6] font-code">
                        {item.version}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-code uppercase text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 px-2 py-0.5 rounded font-bold">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-[#F2F5FA] group-hover:text-[#00B8FF] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[#8A93A6] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#162A4A] text-xs font-code text-[#F2F5FA] bg-[#060D1D] -mx-6 -mb-6 p-4 rounded-b-xl border-t border-[#162A4A]">
                <span className="text-[#00B8FF] block text-[11px] font-semibold mb-0.5">Uso de Producción:</span>
                <span className="text-[#E2E8F0]">{item.keyUse}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg">
            <p className="text-sm font-code text-[#8A93A6]">
              No se encontraron tecnologías que coincidan con la búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
