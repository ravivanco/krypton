import { WireframeBlock } from '../types';

export const wireframesData: WireframeBlock[] = [
  {
    sectionId: 'wireframe-hero',
    title: '01. Hero & Núcleo Atómico 3D',
    columns: 12,
    layoutDescription: 'Split layout asimétrico 7:5. Columna izquierda (7 cols) contiene el bloque tipográfico de alto contraste (Kicker, H1, Subhead, botones de acción primario y secundario, y fila de 3 métricas técnicas). Columna derecha (5 cols) reserva el espacio 3D para el núcleo atómico interactivo con órbitas y efecto de profundidad.',
    components: [
      'Top Navigation Bar fija (12 cols) con logo técnico, selector de vista y botón de contacto.',
      'Badge Kicker con tipografía limpia unboxed (sin pastilla cerrada).',
      'H1 Display Space Grotesk / Orbitron de 56px con acento atómico.',
      'Párrafo descriptivo con contraste WCAG AAA (16.8:1).',
      'Fila de CTAs: Botón Primario con glow monocromático + Botón Secundario outline.',
      'Canvas WebGL Three.js con núcleo atómico, partículas y órbita de electrones.'
    ],
    contrastConsiderations: 'Capa opaca de respaldo detrás del texto (backdrop-blur con fondo #05060A/90) para asegurar que ninguna partícula 3D brillante reduzca el ratio de contraste por debajo de 4.5:1.'
  },
  {
    sectionId: 'wireframe-services-index',
    title: '02. Índice de Servicios (Grid 6 Tarjetas Independientes)',
    columns: 12,
    layoutDescription: 'Grid regular de 3 columnas x 2 filas en Desktop (1440px), 2 columnas en Tablet (834px) y 1 columna en Mobile (390px). Cada tarjeta representa estrictamente un único servicio con su color monocromático asignado.',
    components: [
      'Encabezado de sección centrado o alineado a la izquierda con métrica global.',
      'Tarjeta 1: Sitios Web (Borde azul #00B8FF).',
      'Tarjeta 2: Apps Móviles (Borde verde #39FF14).',
      'Tarjeta 3: Software Empresarial (Borde rosa #FF2BD6).',
      'Tarjeta 4: Facturación Electrónica (Borde rosa #FF2BD6).',
      'Tarjeta 5: Ciberseguridad (Borde verde #39FF14).',
      'Tarjeta 6: Salud Digital (Borde azul #00B8FF).',
      'Enlace ancla directo "Ver arquitectura técnica ->" con micro-interacción.'
    ],
    contrastConsiderations: 'Fondo de tarjeta #0B0D14. Texto en #F2F5FA y #8A93A6. El acento neón solo se utiliza en el icono superior y en el borde hover, jamás en el cuerpo de texto.'
  },
  {
    sectionId: 'wireframe-service-detail',
    title: '03. Sección de Detalle por Servicio (Plantilla Individual)',
    columns: 12,
    layoutDescription: 'Estructura vertical modular con 5 sub-bloques: 1) Header de servicio con tagline. 2) Problema & Dolor de negocio (4 cols) vs Solución técnica (8 cols). 3) Diagrama interactivo de arquitectura (12 cols). 4) Entregables técnicos (3 cols x 4 tarjetas). 5) Cumplimiento normativo y Caso de éxito cuantificado.',
    components: [
      'Sub-header con numeración editorial (ej. "01 / DESARROLLO WEB").',
      'Caja de dolor de negocio con lista de bullets estructurados.',
      'Visor interactivo de topología de arquitectura con nodos y protocolos.',
      'Matriz de entregables técnicos con especificaciones comprobables.',
      'Panel de cumplimiento normativo (ISO, HIPAA, UBL, etc.).',
      'Card de caso de éxito con 4 métricas numéricas destacadas.'
    ],
    contrastConsiderations: 'Prohibición absoluta de mezclar acentos neón. Toda la sección comparte un único acento asignado.'
  },
  {
    sectionId: 'wireframe-tech-stack',
    title: '04. Stack Tecnológico Enterprise',
    columns: 12,
    layoutDescription: 'Barra superior de filtros por disciplina (Frontend, Backend, Móvil, Datos, Cloud/DevOps, Seguridad, QA) de ancho completo, seguida de un grid flexible de tecnologías con versión, nivel enterprise y descripción de caso de uso.',
    components: [
      'Segmented control para filtrar categorías técnicas sin recarga.',
      'Buscador instantáneo por nombre o tecnología.',
      'Grid de tarjetas técnicas con etiqueta de nivel y versión del stack.',
      'Detalle expandible con especificación de implementación.'
    ],
    contrastConsiderations: 'Acento azul (#00B8FF) uniforme para toda la sección de stack.'
  },
  {
    sectionId: 'wireframe-architectures',
    title: '05. Arquitecturas de Software & Topologías',
    columns: 12,
    layoutDescription: 'Selector de patrones arquitectónicos a la izquierda (Monolito Modular, Microservicios, Event-Driven, Serverless, Multi-Tenant) y canvas de evaluación técnica a la derecha con diagrama topológico, pros, contras, SLA y stack recomendado.',
    components: [
      'Panel de selección con indicador activo de patrón.',
      'Visualizador topológico de componentes y flujo de datos.',
      'Columnas de Tradeoffs (Pros vs Contras).',
      'Garantía de SLA y stack arquitectónico sugerido.'
    ],
    contrastConsiderations: 'Fondos oscuros sólidos con líneas de diagrama en contraste 5:1 o superior.'
  },
  {
    sectionId: 'wireframe-methodology',
    title: '06. Metodologías & Ciclo de Vida (SDLC)',
    columns: 12,
    layoutDescription: 'Timeline horizontal / vertical con las 5 fases de ingeniería: Discovery DDD, Sprints Trunk-Based, TDD Shift-Left, CI/CD Zero-Downtime y Observabilidad SRE.',
    components: [
      'Marcadores de fase con numeración de cadencia.',
      'Listado de actividades de ingeniería por fase.',
      'Artifact entregable por fase.',
      'Quality Gate estricto requerido para avanzar.'
    ],
    contrastConsiderations: 'Acento azul (#00B8FF) uniforme sin mezclas de color.'
  },
  {
    sectionId: 'wireframe-contact',
    title: '07. Formulario de Contacto & Cotizador Técnico',
    columns: 12,
    layoutDescription: 'Layout 5:7. Columna izquierda (5 cols): Información de contacto, SLA de respuesta (< 4 horas laborables), credenciales de seguridad (ISO 27001, NDA inmediato). Columna derecha (7 cols): Formulario estructurado con validación en tiempo real.',
    components: [
      'Inputs con etiquetas semánticas y foco visible accesible.',
      'Select de tipo de proyecto (Web, Móvil, ERP, Facturación, Seguridad, Salud).',
      'Selector de SLA requerido (99.9% a 99.999%).',
      'Área de especificación técnica de requerimientos.',
      'Botón de envío con estado de carga y confirmación.'
    ],
    contrastConsiderations: 'Foco visible obligatorio de 2px en campos activos, contraste de texto de inputs > 7:1.'
  }
];
