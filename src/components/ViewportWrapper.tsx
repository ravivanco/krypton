import React from 'react';
import { ViewportMode } from '../types';
import { Laptop, Tablet, Smartphone, Maximize2 } from 'lucide-react';

interface ViewportWrapperProps {
  mode: ViewportMode;
  children: React.ReactNode;
}

export const ViewportWrapper: React.FC<ViewportWrapperProps> = ({ mode, children }) => {
  if (mode === 'full') {
    return <div className="w-full min-h-screen bg-[#05060A]">{children}</div>;
  }

  // Exact viewport widths from the prompt:
  // desktop 1440px, tablet 834px, mobile 390px
  const targetWidth = mode === 'desktop' ? '1440px' : mode === 'tablet' ? '834px' : '390px';
  const label =
    mode === 'desktop'
      ? 'Desktop Canvas (1440px baseline)'
      : mode === 'tablet'
      ? 'Tablet Canvas (834px iPad Pro)'
      : 'Mobile Canvas (390px iPhone)';

  return (
    <div className="min-h-screen bg-[#020305] py-8 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-auto">
      {/* Viewport Frame Header */}
      <div className="w-full flex items-center justify-between pb-3 px-4 text-xs font-code text-[#8A93A6]" style={{ maxWidth: targetWidth }}>
        <div className="flex items-center gap-2">
          {mode === 'desktop' && <Laptop className="w-4 h-4 text-[#00B8FF]" />}
          {mode === 'tablet' && <Tablet className="w-4 h-4 text-[#00B8FF]" />}
          {mode === 'mobile' && <Smartphone className="w-4 h-4 text-[#00B8FF]" />}
          <span className="font-semibold text-[#F2F5FA]">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-[#00B8FF]">WCAG 2.2 AA Verificado</span>
          <span className="border-l border-[#1A1F2C] pl-3">W: {targetWidth}</span>
        </div>
      </div>

      {/* Device Frame Window */}
      <div
        className="w-full bg-[#05060A] border-2 border-[#1A1F2C] rounded-xl shadow-2xl overflow-hidden transition-all duration-300"
        style={{ maxWidth: targetWidth }}
      >
        {/* Device faux chrome header */}
        <div className="bg-[#0B0D14] border-b border-[#1A1F2C] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] font-code text-[#8A93A6] bg-[#05060A] px-3 py-0.5 rounded border border-[#1A1F2C] max-w-xs truncate">
            https://krypton.dev/enterprise-atomic-factory
          </div>
          <div className="text-[10px] font-code text-[#8A93A6]">
            TLS 1.3
          </div>
        </div>

        {/* Framed Application Content */}
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
