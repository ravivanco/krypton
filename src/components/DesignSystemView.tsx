import React from 'react';
import { colorTokens, typographyScale, spacingRules } from '../data/designTokensData';
import { Palette, CheckCircle2, Shield, AlertTriangle, Layers, Ruler } from 'lucide-react';

export const DesignSystemView: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* View Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider">
          <Palette className="w-4 h-4" />
          <span>ENTREGABLE 01 // SISTEMA DE DISEÑO & MOODBOARD</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA]">
          Guía de Estilo & Tokens Estrictos
        </h1>

        <p className="text-base text-[#8A93A6] leading-relaxed">
          Especificación exhaustiva de tokens, restricciones cromáticas obligatorias, escala tipográfica modular
          y matriz de contraste verificada bajo WCAG 2.2 Nivel AA.
        </p>
      </div>

      {/* 5 Mandatory Color Rules Banner */}
      <div className="bg-[#0B0D14] border border-[#00B8FF]/40 rounded-lg p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider font-bold">
          <Shield className="w-4 h-4" />
          <span>Reglas de Color de la Constitución de Diseño (Obligatorias)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">01. Un Solo Acento Neón</span>
            <p className="text-[#8A93A6]">
              Cada sección usa UN solo acento neón. Prohibido combinar dos acentos en el mismo bloque.
            </p>
          </div>

          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">02. Cero Gradientes Multicolor</span>
            <p className="text-[#8A93A6]">
              Prohibidos los gradientes multicolores (púrpura a azul, arcoíris). Solo degradados monocromáticos (acento → transparente).
            </p>
          </div>

          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">03. Asignación Estricta</span>
            <p className="text-[#8A93A6]">
              Web & Salud: Azul (<code className="text-[#00B8FF]">#00B8FF</code>) · Móvil & Ciberseguridad: Verde (<code className="text-[#39FF14]">#39FF14</code>) · ERP & Facturación: Rosa (<code className="text-[#FF2BD6]">#FF2BD6</code>).
            </p>
          </div>

          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">04. Jerarquía de Texto</span>
            <p className="text-[#8A93A6]">
              El texto de lectura siempre es <code className="text-[#F2F5FA]">--text-primary</code> o <code className="text-[#8A93A6]">--text-muted</code>. El neón se reserva exclusivamente para títulos clave, bordes, glow, iconografía y CTAs.
            </p>
          </div>

          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">05. Contraste Mínimo 4.5:1</span>
            <p className="text-[#8A93A6]">
              Todo texto debe contrastar al menos 4.5:1 sobre fondos oscuros o sobre el canvas 3D mediante capas de contraste.
            </p>
          </div>

          <div className="p-4 bg-[#05060A] border border-[#1A1F2C] rounded space-y-1.5">
            <span className="text-[#00B8FF] font-code font-bold block">06. Un Concepto por Bloque</span>
            <p className="text-[#8A93A6]">
              Prohibido agrupar servicios o conceptos distintos en una misma tarjeta. Cada módulo tiene su identidad pura.
            </p>
          </div>
        </div>
      </div>

      {/* Color Tokens Matrix */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-code text-[#F2F5FA] uppercase tracking-wider">
          <Palette className="w-4 h-4 text-[#00B8FF]" />
          <span>Matriz de Tokens de Color & Contraste WCAG</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {colorTokens.map((token, tIdx) => (
            <div
              key={tIdx}
              className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-5 space-y-4 hover:border-[#8A93A6] transition-colors"
            >
              {/* Swatch */}
              <div
                className="w-full h-16 rounded border border-white/10 flex items-center justify-center font-code text-xs font-bold shadow-inner"
                style={{
                  backgroundColor: token.hex,
                  color: token.hex === '#05060A' || token.hex === '#0B0D14' ? '#F2F5FA' : '#05060A',
                }}
              >
                {token.hex}
              </div>

              <div>
                <div className="text-sm font-bold text-[#F2F5FA] font-heading">
                  {token.name}
                </div>
                <div className="text-xs font-code text-[#00B8FF]">
                  {token.variable}
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#8A93A6]">
                <div>
                  <span className="text-[#F2F5FA] font-medium block">Rol:</span>
                  {token.role}
                </div>
                <div>
                  <span className="text-[#F2F5FA] font-medium block">Regla de Uso:</span>
                  {token.usageRule}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1A1F2C] flex items-center justify-between text-xs font-code">
                <span className="text-[#8A93A6]">Ratio: {token.contrastAgainstBgBase}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    token.wcagStatus === 'AAA'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : token.wcagStatus === 'AA'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  WCAG {token.wcagStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Scale Specimen */}
      <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-code text-[#F2F5FA] uppercase tracking-wider">
          <Ruler className="w-4 h-4 text-[#00B8FF]" />
          <span>Escala Tipográfica Modular (Ratio 1.25 / Interlineado 1.6)</span>
        </div>

        <div className="space-y-6 divide-y divide-[#1A1F2C]">
          {typographyScale.map((item, idx) => (
            <div key={idx} className="pt-6 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
              <div className="lg:col-span-4 space-y-1">
                <div className="text-sm font-semibold text-[#00B8FF] font-code">
                  {item.level}
                </div>
                <div className="text-xs text-[#8A93A6] font-code">
                  Fuente: {item.font} · Tamaño: {item.size} · Peso: {item.weight} · Line-Height: {item.lineHeight}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div
                  className="text-[#F2F5FA]"
                  style={{
                    fontSize: item.size.split('/')[0].trim(),
                    lineHeight: item.lineHeight,
                    fontFamily: item.font.includes('Orbitron')
                      ? 'Orbitron, sans-serif'
                      : item.font.includes('Space Grotesk')
                      ? 'Space Grotesk, sans-serif'
                      : item.font.includes('JetBrains')
                      ? 'JetBrains Mono, monospace'
                      : 'Inter, sans-serif',
                  }}
                >
                  {item.sample}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing & Grid Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Sistema de Grid & Espaciado</span>
          </div>

          <div className="space-y-3 text-xs font-code">
            <div className="flex justify-between p-2.5 bg-[#05060A] rounded border border-[#1A1F2C]">
              <span className="text-[#8A93A6]">Columnas del Grid:</span>
              <span className="text-[#F2F5FA] font-bold">{spacingRules.gridColumns} Columnas</span>
            </div>
            <div className="flex justify-between p-2.5 bg-[#05060A] rounded border border-[#1A1F2C]">
              <span className="text-[#8A93A6]">Gutter de Separación:</span>
              <span className="text-[#F2F5FA] font-bold">{spacingRules.gutter}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-[#05060A] rounded border border-[#1A1F2C]">
              <span className="text-[#8A93A6]">Unidad Base de Espaciado:</span>
              <span className="text-[#F2F5FA] font-bold">{spacingRules.baseUnit}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-[#05060A] rounded border border-[#1A1F2C]">
              <span className="text-[#8A93A6]">Padding Vertical Desktop:</span>
              <span className="text-[#00B8FF] font-bold">{spacingRules.sectionPaddingDesktop}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-[#05060A] rounded border border-[#1A1F2C]">
              <span className="text-[#8A93A6]">Padding Vertical Mobile:</span>
              <span className="text-[#00B8FF] font-bold">{spacingRules.sectionPaddingMobile}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Dirección de Arte Espacial & Atómica</span>
          </div>

          <div className="space-y-2.5 text-xs text-[#8A93A6] leading-relaxed">
            <p>
              • <strong className="text-[#F2F5FA]">Motivos Geométricos:</strong> Núcleos atómicos con órbitas de partículas en 3D, campos estelares de baja intensidad, toroides flotantes y wireframes de icosaedros con sutil bloom monocromático.
            </p>
            <p>
              • <strong className="text-[#F2F5FA]">Contraste de Fondo:</strong> Absorción total de luz con fondo <code className="text-[#F2F5FA]">#05060A</code>. Las tarjetas sobre fondo <code className="text-[#F2F5FA]">#0B0D14</code> garantizan aislamiento visual contra las partículas animadas.
            </p>
            <p>
              • <strong className="text-[#F2F5FA]">Anti-AI Slop:</strong> Prohibidos los gradientes multicolores genéricos de IA, prohibidas las pastillas badges que encierran texto estático y prohibidos los prefijos de código artificiales en títulos de presentación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
