import { AnimationSpec } from '../types';

export const animationSpecsData: AnimationSpec[] = [
  {
    element: 'Núcleo Atómico 3D & Órbitas',
    trigger: 'Page Load',
    property: 'Rotation Y/X, Scale, Shader Glow Bloom',
    duration: 'Continuo / Loop (20s período) + Entrada en 800ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Establece de inmediato el posicionamiento técnico y espacial de la software factory sin bloquear el renderizado principal.',
    reducedMotionFallback: 'Renderizado de modelo atómico estático sin rotación continua ni oscilaciones de cámara.'
  },
  {
    element: 'Cámara 3D Parallax en Hero',
    trigger: 'Pointer Move',
    property: 'Camera position (x, y) con dampening lerp',
    duration: '180ms lag de amortiguación (dampening factor 0.05)',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    rationale: 'Genera profundidad espacial sutil y responsiva que reacciona a la navegación del cursor.',
    reducedMotionFallback: 'Cámara fija en punto focal central (0, 0, 8).'
  },
  {
    element: 'Títulos H1 y Headings de Sección',
    trigger: 'Scroll Viewport',
    property: 'Opacity (0 -> 1), TranslateY (28px -> 0px)',
    duration: '650ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Entrada editorial progresiva con jerarquía visual sólida, evitando saltos de página (CLS).',
    reducedMotionFallback: 'Opacity instantánea (0 -> 1) en 150ms sin desplazamiento en eje Y.'
  },
  {
    element: 'Tarjetas de Servicios (Índice)',
    trigger: 'Scroll Viewport',
    property: 'Staggered Opacity (0 -> 1), Scale (0.97 -> 1.0)',
    duration: '500ms (stagger 80ms entre tarjetas)',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Revelación secuencial rítmica que guía el escaneo del ojo en el grid de 6 tarjetas.',
    reducedMotionFallback: 'Aparición directa sin retraso secuencial (stagger).'
  },
  {
    element: 'Borde & Glow Monocromático de Tarjeta',
    trigger: 'Hover',
    property: 'Box-shadow (0 -> 0 0 24px var(--neon-accent)/0.25), Border-color',
    duration: '200ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Feedback táctil inmediato con el color monocromático exclusivo de cada sección.',
    reducedMotionFallback: 'Cambio sutil de color de borde sin halo de glow difuso.'
  },
  {
    element: 'Botones CTA Primarios y Secundarios',
    trigger: 'Hover',
    property: 'Transform translateY(-2px), Box-shadow bloom',
    duration: '180ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Elevación háptica para indicar interactividad sin perturbar el flujo de la página.',
    reducedMotionFallback: 'Solo cambio de color de fondo/borde sin elevación translateY.'
  },
  {
    element: 'Diagrama de Arquitectura (Nodos y Flujos)',
    trigger: 'Scroll Viewport',
    property: 'Stroke-dashoffset (dibujo de línea SVG), Pulse de nodos',
    duration: '900ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Simula el flujo de datos transaccionales en tiempo real entre los microservicios.',
    reducedMotionFallback: 'Líneas y nodos de arquitectura renderizados completamente sólidos desde el inicio.'
  },
  {
    element: 'Tabs de Filtro de Stack Tecnológico',
    trigger: 'Hover',
    property: 'Background color, Text color, Indicator underline',
    duration: '150ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Micro-interacción ágil para la exploración rápida de tecnologías.',
    reducedMotionFallback: 'Cambio de estado inmediato.'
  },
  {
    element: 'Transición entre Secciones de Servicio',
    trigger: 'Scroll Viewport',
    property: 'Backdrop gradient opacity, Warp espacial sutil',
    duration: '750ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Cambio de atmósfera inmersiva al pasar del acento azul al verde o rosa.',
    reducedMotionFallback: 'Cambio estático de color sin interpolación de degradado.'
  },
  {
    element: 'Inputs del Formulario de Contacto',
    trigger: 'Focus',
    property: 'Border-color, Outline glow, Placeholder translateY(-2px)',
    duration: '200ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Foco visible según WCAG 2.2 AA para navegación accesible por teclado.',
    reducedMotionFallback: 'Outline sólido estándar de 2px sin animación de glow.'
  },
  {
    element: 'Drawer / Modal de Especificación Técnica',
    trigger: 'Page Load',
    property: 'Scale (0.95 -> 1.0), Backdrop Blur (0 -> 12px)',
    duration: '250ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    rationale: 'Apertura fluida de detalles sin causar desorientación espacial.',
    reducedMotionFallback: 'Aparición instantánea sin escala ni desenfoque progresivo.'
  },
  {
    element: 'Contador de Métricas de Caso de Éxito',
    trigger: 'Scroll Viewport',
    property: 'Number interpolation (0 -> valor final)',
    duration: '800ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    rationale: 'Destaca visualmente el impacto de negocio logrado para el cliente.',
    reducedMotionFallback: 'El número final se presenta estático inmediatamente.'
  }
];
