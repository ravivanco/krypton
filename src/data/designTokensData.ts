export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  role: string;
  usageRule: string;
  contrastAgainstBgBase: string;
  wcagStatus: 'AAA' | 'AA' | 'Exempt (Accent/UI)';
}

export const colorTokens: ColorToken[] = [
  {
    name: 'Background Base',
    variable: '--bg-base',
    hex: '#05060A',
    role: 'Fondo global continuo del viewport',
    usageRule: 'Aplica a todo el body y contenedor raíz. Base oscura para absorción de luz cósmica.',
    contrastAgainstBgBase: '1.0:1 (Base)',
    wcagStatus: 'Exempt (Accent/UI)'
  },
  {
    name: 'Background Surface',
    variable: '--bg-surface',
    hex: '#0B0D14',
    role: 'Superficie de tarjetas, paneles y módulos',
    usageRule: 'Superficie opaca elevada para garantizar legibilidad de textos sobre el canvas 3D.',
    contrastAgainstBgBase: '1.1:1',
    wcagStatus: 'Exempt (Accent/UI)'
  },
  {
    name: 'Text Primary',
    variable: '--text-primary',
    hex: '#F2F5FA',
    role: 'Texto principal, títulos y datos numéricos',
    usageRule: 'Utilizado para toda la lectura principal. Prohibido usar colores neón en párrafos.',
    contrastAgainstBgBase: '16.8:1 (Extremo)',
    wcagStatus: 'AAA'
  },
  {
    name: 'Text Muted',
    variable: '--text-muted',
    hex: '#8A93A6',
    role: 'Texto secundario, descripciones y metadatos',
    usageRule: 'Legibilidad óptima para descripciones técnicas y etiquetas secundarias.',
    contrastAgainstBgBase: '6.4:1 (Supera umbral 4.5:1)',
    wcagStatus: 'AA'
  },
  {
    name: 'Neon Blue (Web, Salud, Stack)',
    variable: '--neon-blue',
    hex: '#00B8FF',
    role: 'Acento exclusivo para Web, Salud y Stack/Metodologías',
    usageRule: 'Solo bordes, halos glow, iconos y títulos destacados en sus secciones correspondientes.',
    contrastAgainstBgBase: '8.9:1',
    wcagStatus: 'AA'
  },
  {
    name: 'Neon Green (Móvil, Ciberseguridad)',
    variable: '--neon-green',
    hex: '#39FF14',
    role: 'Acento exclusivo para Apps Móviles y Ciberseguridad',
    usageRule: 'Reservado estrictamente para los módulos de desarrollo móvil y seguridad ofensiva.',
    contrastAgainstBgBase: '13.1:1',
    wcagStatus: 'AAA'
  },
  {
    name: 'Neon Pink (ERP/CRM, Facturación)',
    variable: '--neon-pink',
    hex: '#FF2BD6',
    role: 'Acento exclusivo para Software Empresarial y Facturación',
    usageRule: 'Utilizado en transaccionalidad, motores fiscales, ERP y módulos contables.',
    contrastAgainstBgBase: '6.2:1',
    wcagStatus: 'AA'
  }
];

export const typographyScale = [
  { level: 'Display H1 (Hero)', font: 'Orbitron / Space Grotesk', size: '56px / 3.5rem', weight: '800 Bold', lineHeight: '1.15', sample: 'Ingeniería a Escala Atómica' },
  { level: 'Heading H2 (Secciones)', font: 'Space Grotesk', size: '40px / 2.5rem', weight: '700 Bold', lineHeight: '1.2', sample: 'Arquitectura de Sistemas Críticos' },
  { level: 'Heading H3 (Módulos)', font: 'Space Grotesk', size: '28px / 1.75rem', weight: '600 SemiBold', lineHeight: '1.3', sample: 'Pipeline de Facturación Asíncrona' },
  { level: 'Subhead / Large', font: 'Inter', size: '20px / 1.25rem', weight: '400 Regular', lineHeight: '1.6', sample: 'Desacoplamiento total con resiliencia de datos distribuida.' },
  { level: 'Body (Cuerpo base)', font: 'Inter', size: '16px / 1.0rem', weight: '400 Regular', lineHeight: '1.6', sample: 'Cada microservicio opera con su propia base de datos optimizada y validación estricta de esquemas.' },
  { level: 'Caption / Meta', font: 'Inter', size: '13px / 0.81rem', weight: '500 Medium', lineHeight: '1.5', sample: 'Latencia P99 < 45ms · SLO 99.98% verificado' },
  { level: 'Code / Technical Spec', font: 'JetBrains Mono', size: '14px / 0.875rem', weight: '500 Medium', lineHeight: '1.5', sample: 'POST /v1/invoices/sign -> XAdES-BES valid' }
];

export const spacingRules = {
  gridColumns: 12,
  gutter: '24px',
  baseUnit: '8px',
  sectionPaddingDesktop: '128px',
  sectionPaddingMobile: '72px',
  containerMaxWidth: '1280px',
  strictRuleCardSeparation: 'Un solo concepto por bloque. Prohibido agrupar servicios distintos en una misma tarjeta.',
  strictRuleColorIsolation: 'Cada sección usa UN solo acento neón. Prohibido combinar dos acentos en el mismo bloque.'
};
