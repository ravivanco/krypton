import React from 'react';

interface DynamicMeshBackgroundProps {
  activeTheme?: 'blue' | 'green' | 'pink' | 'cyber';
  reducedMotion?: boolean;
}

export const DynamicMeshBackground: React.FC<DynamicMeshBackgroundProps> = ({
  activeTheme = 'cyber',
  reducedMotion = false,
}) => {
  // Atmospheric theme styles with smooth transitions between blue, green, and pink
  const themeStyles = {
    cyber: {
      aura1: 'from-[#00B8FF]/25 via-[#08203E]/30 to-transparent',
      aura2: 'from-[#39FF14]/20 via-[#062B17]/25 to-transparent',
      aura3: 'from-[#00B8FF]/15 via-[#051C36]/20 to-transparent',
    },
    blue: {
      aura1: 'from-[#00B8FF]/30 via-[#0A2A54]/35 to-transparent',
      aura2: 'from-[#00E5FF]/20 via-[#082042]/30 to-transparent',
      aura3: 'from-[#39FF14]/15 via-[#052418]/20 to-transparent',
    },
    green: {
      aura1: 'from-[#39FF14]/30 via-[#06381D]/35 to-transparent',
      aura2: 'from-[#10B981]/25 via-[#052614]/30 to-transparent',
      aura3: 'from-[#00B8FF]/15 via-[#071D38]/20 to-transparent',
    },
    pink: {
      aura1: 'from-[#FF2BD6]/25 via-[#36092F]/30 to-transparent',
      aura2: 'from-[#00B8FF]/20 via-[#0E1A3C]/25 to-transparent',
      aura3: 'from-[#FF2BD6]/15 via-[#290524]/20 to-transparent',
    },
  }[activeTheme];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-bg-glow">
      {/* Base deep cosmic space layer */}
      <div className="absolute inset-0 bg-[#030611] transition-colors duration-1000" />

      {/* Floating Animated Aurora Orb 1 (Top-Left / Center) */}
      <div
        className={`absolute -top-32 -left-32 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] rounded-full bg-radial ${themeStyles.aura1} blur-[120px] mix-blend-screen opacity-70 transition-all duration-1000 ${
          reducedMotion ? '' : 'animate-aurora-1'
        }`}
      />

      {/* Floating Animated Aurora Orb 2 (Bottom-Right / East) */}
      <div
        className={`absolute -bottom-40 -right-40 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-radial ${themeStyles.aura2} blur-[130px] mix-blend-screen opacity-65 transition-all duration-1000 ${
          reducedMotion ? '' : 'animate-aurora-2'
        }`}
      />

      {/* Floating Center Subtle Ambient Pulse */}
      <div
        className={`absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-radial ${themeStyles.aura3} blur-[140px] mix-blend-screen opacity-50 transition-all duration-1000`}
      />

      {/* High-Tech Moving Cybernetic Grid Overlay */}
      <div
        className={`absolute inset-0 opacity-[0.14] transition-opacity duration-1000 bg-[linear-gradient(to_right,#00B8FF25_1px,transparent_1px),linear-gradient(to_bottom,#39FF1420_1px,transparent_1px)] bg-[size:48px_48px] ${
          reducedMotion ? '' : 'animate-grid-shift'
        }`}
      />

      {/* Subtle vignette layer to preserve perfect WCAG contrast */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030611]/30 to-[#030611]/85" />
    </div>
  );
};
