import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'web',
    slug: 'sitios-web-landing',
    name: 'Sitios Web & Plataformas Digitales',
    tagline: 'Arquitectura Jamstack & SSR con Core Web Vitals al 100% y SEO Técnico Ultra-Optimizado',
    accent: 'blue',
    hexAccent: '#00B8FF',
    iconName: 'Globe',
    problem: {
      title: 'Plataformas Web Lentas, Monolitos Opacos y Abandono por Carga Deficiente',
      summary: 'El 53% de los usuarios abandona experiencias web que tardan más de 3 segundos en interactuar. La deuda técnica de CMS tradicionales genera vulnerabilidades y penalizaciones de ranking orgánico.',
      painPoints: [
        'Largest Contentful Paint (LCP) superior a 3.8s y saltos visuales (CLS > 0.25).',
        'Acoplamiento excesivo entre frontend y backend que ralentiza los deploys de marketing.',
        'Indexación ineficiente en motores de búsqueda por renderizado deficiente en cliente (CSR).',
        'Falta de accesibilidad WCAG 2.2 que expone a sanciones y excluye usuarios.'
      ]
    },
    deliverables: [
      {
        title: 'Arquitectura Next.js 15 / React con Server Components',
        description: 'Streaming SSR con hidratación selectiva y generación estática incremental (ISR).',
        specs: ['Bundle inicial < 70KB gzip', 'LCP < 1.2s en conexiones móviles 4G', 'Zero Layout Shift garantizado']
      },
      {
        title: 'Ecosistema Headless CMS & Edge CDN',
        description: 'Desacoplamiento total de contenidos con Contentful o Sanity y distribución perimetral.',
        specs: ['Purga instantánea de caché vía Webhooks', 'Bancos de assets optimizados AVIF/WebP automáticos']
      },
      {
        title: 'Auditoría SEO Técnico & Schema.org Semántico',
        description: 'Microdatos estructurados, Canonical URLs automáticas y sitemaps dinámicos multilingües.',
        specs: ['Validación Google Rich Snippets', 'OpenGraph y Twitter Cards generadas on-demand']
      },
      {
        title: 'Suite de Accesibilidad WCAG 2.2 Nivel AA',
        description: 'Navegación completa por teclado, contraste verificado y compatibilidad con lectores de pantalla.',
        specs: ['100% en Lighthouse Accessibility', 'Visible focus rings con tokens monocromáticos']
      }
    ],
    stack: [
      { category: 'Frontend Core', tools: ['Next.js 15 (App Router)', 'React 19', 'TypeScript 5.7', 'Tailwind CSS'] },
      { category: 'Rendimiento & State', tools: ['Turbopack', 'TanStack Query', 'Zustand', 'Motion'] },
      { category: 'Content & Edge', tools: ['Sanity Headless CMS', 'Vercel Edge / Cloudflare Workers', 'Cloudinary'] },
      { category: 'Monitoreo & Analítica', tools: ['Datadog RUM', 'SpeedCurve', 'Sentry Performance', 'Google Search Console'] }
    ],
    architecture: {
      patternName: 'Edge-Rendered Headless Web Architecture',
      summary: 'Flujo distribuido donde los requests son resueltos en el nodo Edge más cercano al usuario mediante caché ISR y microservicios de contenido.',
      nodes: [
        { id: 'n1', name: 'Global Edge Anycast', role: 'DNS & CDN WAF', type: 'gateway', description: 'Terminación TLS 1.3 y enrutamiento inteligente' },
        { id: 'n2', name: 'Next.js Edge Runtime', role: 'Streaming SSR / ISR', type: 'service', description: 'Renderizado en el borde y streaming HTML con React Server Components' },
        { id: 'n3', name: 'Headless Content Lake', role: 'CMS & Assets Graph', type: 'external', description: 'Distribución de esquemas de contenido estructurado' },
        { id: 'n4', name: 'Enterprise Backend API', role: 'Servicios de Negocio', type: 'service', description: 'Endpoints autenticados con JWT en microservicios' },
        { id: 'n5', name: 'Redis Edge Cache', role: 'KeyValue Layer', type: 'cache', description: 'Invalidación atómica por tags de caché' }
      ],
      connections: [
        { from: 'n1', to: 'n2', label: 'HTTP/3 Quic', protocol: 'REST' },
        { from: 'n2', to: 'n5', label: 'Tag Check', protocol: 'REST' },
        { from: 'n2', to: 'n3', label: 'GraphQL Fetch', protocol: 'REST' },
        { from: 'n2', to: 'n4', label: 'gRPC Internal', protocol: 'gRPC' }
      ],
      keyHighlights: [
        'Time To First Byte (TTFB) global < 85ms.',
        'Cero render blocking JavaScript mediante code splitting granular.',
        'Resiliencia estática: fallback a versión cached si el backend externo experimenta latencia.'
      ]
    },
    compliance: [
      { framework: 'WCAG 2.2 Nivel AA', description: 'Pautas de accesibilidad para contenidos web, garantizando ratio de contraste 4.5:1 y navegabilidad completa sin ratón.', auditPoint: 'Auditoría automatizada con Axe-Core en pipelines de CI/CD.' },
      { framework: 'Google Core Web Vitals', description: 'Estándar oficial de métricas de experiencia de página (LCP, INP, CLS) verificado en percentil 75 real de usuarios.', auditPoint: 'CrUX API score verificado en ambiente productivo.' },
      { framework: 'GDPR / Cookie Consent', description: 'Gestión estricta de consentimiento para analítica sin carga de scripts antes de la autorización explícita.', auditPoint: 'Consent Mode v2 implementado sin fugas de IP.' }
    ],
    caseStudy: {
      clientSector: 'Fintech de Crédito Corporativo',
      challenge: 'Un sitio heredado en WordPress con 6.2s de tiempo de carga, tasa de rebote del 68% y constantes fallos de seguridad.',
      solution: 'Reingeniería completa en Next.js App Router con arquitectura Jamstack, headless CMS Sanity y despliegue global en Edge CDN.',
      metrics: [
        { label: 'Tiempo de Carga (LCP)', value: '0.94 s' },
        { label: 'Aumento en Conversión', value: '+142%' },
        { label: 'Puntuación Lighthouse', value: '100 / 100' },
        { label: 'Ahorro de Infraestructura', value: '-65%' }
      ]
    }
  },
  {
    id: 'mobile',
    slug: 'apps-moviles',
    name: 'Aplicaciones Móviles de Alto Rendimiento',
    tagline: 'Ingeniería Nativa y Multiplataforma con Arquitectura Offline-First y Pipelines Automatizados',
    accent: 'green',
    hexAccent: '#39FF14',
    iconName: 'Smartphone',
    problem: {
      title: 'Apps Inestables, Fugas de Memoria y Mala Experiencia Sin Conexión',
      summary: 'El 80% de las apps instaladas son eliminadas en las primeras 48 horas debido a cuelgues (crashes), consumo excesivo de batería o interfaces que se bloquean cuando la red móvil fluctúa.',
      painPoints: [
        'Falta de sincronización local que deja al usuario inoperativo ante caídas de señal.',
        'Procesos manuales de build y firma de certificados que retrasan releases en App Store y Play Store.',
        'Descoordinación entre las versiones de iOS y Android generando inconsistencia funcional.',
        'Fugas de memoria en listas infinitas y rendering a menos de 60 cuadros por segundo.'
      ]
    },
    deliverables: [
      {
        title: 'Aplicaciones React Native / Flutter & Módulos Nativos',
        description: 'Rendimiento 60/120 FPS con New Architecture (Fabric Renderer & TurboModules en C++).',
        specs: ['Crash-free rate > 99.9%', 'Arranque en frío (Cold start) < 800ms', 'Soporte Dark Mode nativo']
      },
      {
        title: 'Motor de Sincronización Offline-First (WatermelonDB / SQLite)',
        description: 'Persistencia local indexada con resolución determinística de conflictos mediante CRDT.',
        specs: ['Lecturas instantáneas a 0ms de latencia', 'Cola asíncrona de mutaciones resiliente']
      },
      {
        title: 'Pipeline CI/CD Automatizado con Fastlane & EAS',
        description: 'Compilación en la nube, firma criptográfica automática y distribución a TestFlight y Play Console.',
        specs: ['Deploys a staging con un git push', 'Actualizaciones en caliente OTA (Over-The-Air)']
      },
      {
        title: 'Push Notifications Geosegmentadas y Deep Linking Universal',
        description: 'Integración con APNs y FCM para enrutamiento directo a pantallas internas con estado.',
        specs: ['Tasa de entrega > 98.7%', 'Soporte iOS Universal Links & Android App Links']
      }
    ],
    stack: [
      { category: 'Desarrollo Móvil', tools: ['React Native 0.77', 'Flutter 3.27', 'Swift / SwiftUI', 'Kotlin / Jetpack Compose'] },
      { category: 'Base de Datos Local', tools: ['WatermelonDB', 'SQLite / Realm', 'MMKV Storage', 'CRDT Sync Engine'] },
      { category: 'DevOps Móvil & CI/CD', tools: ['Fastlane', 'GitHub Actions iOS Runners', 'Expo EAS', 'App Center'] },
      { category: 'Monitoreo & Telemetría', tools: ['Sentry Mobile SDK', 'Firebase Crashlytics', 'PostHog Analytics', 'DataDog Mobile'] }
    ],
    architecture: {
      patternName: 'Offline-First Reactive Mobile Architecture',
      summary: 'La UI solo interactúa con la base de datos local embebida; un motor de fondo bidireccional gestiona la sincronización con el backend mediante cola idempotente.',
      nodes: [
        { id: 'm1', name: 'UI Layer (Fabric/Flutter)', role: 'Presentation 60fps', type: 'client', description: 'Vistas reactivas conectadas a cursores locales' },
        { id: 'm2', name: 'Local Store (SQLite/MMKV)', role: 'Single Source of Truth', type: 'db', description: 'Tablas relacionales indexadas en sandbox del dispositivo' },
        { id: 'm3', name: 'Background Sync Engine', role: 'CRDT / Diffing Worker', type: 'service', description: 'Procesa colas de mutaciones y reconexiones' },
        { id: 'm4', name: 'API Gateway / WebSockets', role: 'Ingreso Seguro', type: 'gateway', description: 'Autenticación mTLS y balanceo de carga' },
        { id: 'm5', name: 'Cloud Event Bus', role: 'Mensajería PubSub', type: 'queue', description: 'Distribución en tiempo real de cambios de estado' }
      ],
      connections: [
        { from: 'm1', to: 'm2', label: 'Local Reactive Query', protocol: 'SQL' },
        { from: 'm2', to: 'm3', label: 'Mutation Observer', protocol: 'REST' },
        { from: 'm3', to: 'm4', label: 'Bidirectional Sync', protocol: 'WebSocket' },
        { from: 'm4', to: 'm5', label: 'Event Broadcast', protocol: 'Kafka' }
      ],
      keyHighlights: [
        'Cero spinners bloqueantes en pantallas críticas.',
        'Consumo de batería optimizado mediante coalescencia de conexiones de red.',
        'Manejo estricto del ciclo de vida en segundo plano (Background Tasks).'
      ]
    },
    compliance: [
      { framework: 'Apple App Store Review Guidelines', description: 'Cumplimiento exhaustivo de pautas de privacidad, App Tracking Transparency (ATT) y directrices de UI.', auditPoint: 'Checklist pre-flight automatizado para evitar rechazos en revisión.' },
      { framework: 'Google Play Target SDK Policy', description: 'Alineación estricta con los últimos niveles de API y permisos granulares de almacenamiento y ubicación.', auditPoint: 'Verificación estricta en el pipeline de release.' },
      { framework: 'OWASP Mobile Top 10 (MASVS)', description: 'Estándar de verificación de seguridad móvil: ofuscación ProGuard/DexGuard, cert pinning y almacenamiento seguro en Keychain/Keystore.', auditPoint: 'Auditoría estática con MobSF integrada en CI.' }
    ],
    caseStudy: {
      clientSector: 'Logística de Última Milla',
      challenge: 'App de conductores que perdía pedidos en sótanos y zonas rurales por falta de conectividad y consumía la batería en 4 horas.',
      solution: 'Desarrollo de app offline-first con SQLite embebido, sincronización delta basada en timestamps y optimización del GPS con geofencing.',
      metrics: [
        { label: 'Tiempo de Batería Útil', value: '+320%' },
        { label: 'Pérdida de Transacciones', value: '0.00%' },
        { label: 'Índice Libre de Crashes', value: '99.96%' },
        { label: 'Conductores Activos', value: '25,000+' }
      ]
    }
  },
  {
    id: 'enterprise',
    slug: 'software-empresarial',
    name: 'Software Empresarial & Ecosistemas ERP / CRM',
    tagline: 'Sistemas Modulares de Alta Disponibilidad con RBAC Granular, Alta Concurrencia y Resiliencia Transaccional',
    accent: 'pink',
    hexAccent: '#FF2BD6',
    iconName: 'Server',
    problem: {
      title: 'Monolitos Ingobernables, Inconsistencia de Datos y Silos Operativos',
      summary: 'Las empresas medianas y grandes sufren de hojas de cálculo desconectadas, ERPs rígidos que no se adaptan al modelo de negocio y bases de datos bloqueadas por bloqueos transaccionales (deadlocks).',
      painPoints: [
        'Procesos manuales de conciliación entre ventas, inventario y contabilidad.',
        'Sistemas lentos incapaces de escalar cuando ocurren picos de fin de mes o campañas masivas.',
        'Falta de control de acceso basado en roles (RBAC) que compromete la confidencialidad corporativa.',
        'Pérdida de trazabilidad: incapacidad de saber quién alteró un registro contable crítico.'
      ]
    },
    deliverables: [
      {
        title: 'Arquitectura Modular / Microservicios con NestJS, Java Spring o .NET',
        description: 'Separación estricta de dominios (Domain-Driven Design) para escalabilidad independiente.',
        specs: ['Throughput sostenido > 15,000 req/sec', 'Aislamiento de fallos por circuito cerrado (Circuit Breaker)']
      },
      {
        title: 'Control de Acceso RBAC / ABAC con Auditoría Inmutable',
        description: 'Políticas granulares de permisos por rol, sucursal y atributos con registro criptográfico.',
        specs: ['Log de auditoría append-only', 'Integración con Active Directory / Azure AD via OIDC']
      },
      {
        title: 'Ecosistema de Datos Transaccional (PostgreSQL + Redis Cluster)',
        description: 'Particionado horizontal de tablas, réplicas de lectura y caché distribuida de consultas complejas.',
        specs: ['P99 Latency < 45ms en consultas pesadas', 'Pool de conexiones gestionado con PgBouncer']
      },
      {
        title: 'Integraciones ERP & APIs B2B con Contratos OpenAPI',
        description: 'Conexión bidireccional con SAP, Salesforce, Oracle y sistemas legados mediante adaptadores seguros.',
        specs: ['Idempotencia en APIs financieras', 'Webhooks garantizados con reintentos exponenciales']
      }
    ],
    stack: [
      { category: 'Backend Enterprise', tools: ['Node.js / NestJS', 'Java 21 Spring Boot', '.NET 9 Core', 'Go (Golang)'] },
      { category: 'Bases de Datos & Cache', tools: ['PostgreSQL 17', 'Redis Enterprise Cluster', 'Prisma / TypeORM', 'Hibernate'] },
      { category: 'Mensajería & Colas', tools: ['Apache Kafka', 'RabbitMQ', 'Redis Streams', 'BullMQ'] },
      { category: 'Observabilidad & Infra', tools: ['Kubernetes (EKS/GKE)', 'OpenTelemetry', 'Prometheus & Grafana', 'Vault'] }
    ],
    architecture: {
      patternName: 'Event-Driven Modular Enterprise Architecture',
      summary: 'Microservicios desacoplados organizados por bounded-contexts, comunicados mediante brokers de eventos de baja latencia con consistencia eventual garantizada.',
      nodes: [
        { id: 'e1', name: 'Enterprise API Gateway', role: 'Kong / Envoy', type: 'gateway', description: 'Rate limiting, encriptación mTLS y validación de tokens JWT' },
        { id: 'e2', name: 'Order & Inventory Service', role: 'Core Business Microservice', type: 'service', description: 'Gestión de stock en tiempo real con bloqueo optimista' },
        { id: 'e3', name: 'Finance & Ledger Service', role: 'Double-Entry Accounting', type: 'service', description: 'Libro mayor inmutable y balances contables' },
        { id: 'e4', name: 'Event Bus (Apache Kafka)', role: 'Distributed Log', type: 'queue', description: 'Secuencia ordenada de eventos de negocio' },
        { id: 'e5', name: 'Distributed Primary DB', role: 'PostgreSQL HA Cluster', type: 'db', description: 'Replicación multi-AZ con failover automático < 30s' }
      ],
      connections: [
        { from: 'e1', to: 'e2', label: 'gRPC Call', protocol: 'gRPC' },
        { from: 'e1', to: 'e3', label: 'gRPC Call', protocol: 'gRPC' },
        { from: 'e2', to: 'e4', label: 'StockUpdated Event', protocol: 'Kafka' },
        { from: 'e4', to: 'e3', label: 'Consume Ledger', protocol: 'Kafka' },
        { from: 'e2', to: 'e5', label: 'ACID Transaction', protocol: 'SQL' }
      ],
      keyHighlights: [
        'Cero pérdida de transacciones con semántica de entrega exactly-once.',
        'Despliegues Zero-Downtime mediante estrategias Canary y Blue/Green en Kubernetes.',
        'SLA de disponibilidad garantizado del 99.98% con failover multi-región.'
      ]
    },
    compliance: [
      { framework: 'SOC 2 Tipo II', description: 'Aseguramiento de controles de seguridad, disponibilidad, integridad de procesamiento y confidencialidad.', auditPoint: 'Evidencias de control de cambios y revisión de código obligatoria en CI.' },
      { framework: 'ISO 27001:2022', description: 'Sistema de Gestión de Seguridad de la Información (SGSI) implementado en todas las capas de infraestructura y código.', auditPoint: 'Matriz de riesgos y análisis de impacto anual documentado.' },
      { framework: 'Principio de Menor Privilegio (PoLP)', description: 'Asignación estricta de permisos mínimos indispensables a cada usuario y servicio de microservicio.', auditPoint: 'Revisión trimestral de accesos y revocación automática.' }
    ],
    caseStudy: {
      clientSector: 'Distribuidora Multilatina de Alimentos',
      challenge: 'Procesamiento de 60,000 pedidos diarios colapsaba su software anterior, con discrepancias de inventario de hasta $400k mensuales.',
      solution: 'Plataforma ERP a medida basada en microservicios NestJS, Kafka para sincronización de inventario en tiempo real y frontend modular en React.',
      metrics: [
        { label: 'Tiempo de Conciliación', value: 'De 6 hrs a 3 min' },
        { label: 'Precisión de Stock', value: '99.99%' },
        { label: 'Throughput Pico', value: '18,500 req/s' },
        { label: 'Disponibilidad Anual', value: '99.995%' }
      ]
    }
  },
  {
    id: 'invoicing',
    slug: 'facturacion-electronica',
    name: 'Facturación Electrónica & Integración Fiscal',
    tagline: 'Motores de Emisión Criptográfica XML Masiva, Idempotencia Absoluta y Conexión Tributaria en Tiempo Real',
    accent: 'pink',
    hexAccent: '#FF2BD6',
    iconName: 'Receipt',
    problem: {
      title: 'Multas Tributarias, Facturas Rechazadas y Colapsos en Días de Cierre',
      summary: 'Los cambios regulatorios continuos y la inestabilidad de los servidores gubernamentales (DIAN, SUNAT, SAT, SII, etc.) detienen las ventas de las empresas si el motor de facturación no es asíncrono y tolerante a fallos.',
      painPoints: [
        'Caídas de ventas porque la plataforma tributaria estatal está lenta o fuera de servicio.',
        'Facturas duplicadas o con numeración rota debido a fallos de red en el proceso de timbrado.',
        'Firma digital XML lenta que consume 100% de CPU y ralentiza los puntos de venta.',
        'Riesgo de sanciones impositivas por discrepancias en cálculo de impuestos y retenciones.'
      ]
    },
    deliverables: [
      {
        title: 'Motor de Generación y Firma Digital XML XAdES-BES / Enveloped',
        description: 'Compilación y firma criptográfica de comprobantes en < 35 milisegundos con certificados HSM.',
        specs: ['Algoritmos SHA-256 / RSA-4096 bits', 'Validación previa de esquemas XSD oficial']
      },
      {
        title: 'Cola Asíncrona de Emisión con Garantía de Idempotencia',
        description: 'Buffer de emisión desacoplado: el cliente recibe su comprobante de inmediato mientras se procesa la transmisión oficial.',
        specs: ['Cero facturas duplicadas garantizado con UUID idempotency keys', 'Mecanismo de fallback offline']
      },
      {
        title: 'Conector Directo con Entes Tributarios (SUNAT, SAT, DIAN, SII, FacturaE)',
        description: 'Consumo de Web Services SOAP/REST oficiales con gestión inteligente de reintentos exponenciales.',
        specs: ['Recepción y parseo automático de CDRs y acuses de recibo', 'Alerta en tiempo real ante caídas del servidor fiscal']
      },
      {
        title: 'Generador de Representación Impresa (PDF) con QR Dinámico',
        description: 'Renderizado vectorial ultrarrápido con códigos de barras bidimensionales y envío automático por correo / WhatsApp.',
        specs: ['Generación en < 80ms', 'Almacenamiento en caliente S3 con ciclo de vida de 5 años']
      }
    ],
    stack: [
      { category: 'Motor de Timbrado', tools: ['Go (Golang High-Concurrency)', 'Node.js Fiscal Engine', 'libxml2 nativo', 'OpenSSL'] },
      { category: 'Colas & Procesamiento', tools: ['RabbitMQ Dead-Letter Queues', 'Redis Streams', 'BullMQ Cluster'] },
      { category: 'Seguridad Criptográfica', tools: ['Cloud HSM (FIPS 140-2)', 'HashiCorp Vault', 'Certificados Digitales PKCS#12'] },
      { category: 'Almacenamiento Fiscal', tools: ['PostgreSQL Partitioning', 'AWS S3 Glacier Instant Retrieval', 'MinIO'] }
    ],
    architecture: {
      patternName: 'Decoupled Asynchronous Fiscal Invoicing Pipeline',
      summary: 'El Punto de Venta (POS) emite el comprobante en milisegundos; un pipeline con workers asíncronos firma, almacena y transmite al ente tributario sin detener la facturación comercial.',
      nodes: [
        { id: 'f1', name: 'POS / Checkout API', role: 'Transacción Comercial', type: 'client', description: 'Recibe payload de compra y genera Idempotency-Key' },
        { id: 'f2', name: 'Invoicing Dispatcher', role: 'Validador de Esquema', type: 'service', description: 'Valida reglas de cálculo de impuestos y correlativos' },
        { id: 'f3', name: 'Crypto Signing Worker', role: 'HSM Cryptographic Sign', type: 'service', description: 'Inserta firma digital XML y calcula hash resumen' },
        { id: 'f4', name: 'Fiscal Government Queue', role: 'Resilient Buffer', type: 'queue', description: 'Cola con reintentos exponenciales y backoff' },
        { id: 'f5', name: 'Tax Authority Gateway (DIAN/SUNAT)', role: 'Ente Tributario Oficial', type: 'external', description: 'Servidor gubernamental que expide el CDR / Timbre' }
      ],
      connections: [
        { from: 'f1', to: 'f2', label: 'POST /v1/invoices', protocol: 'REST' },
        { from: 'f2', to: 'f3', label: 'XML Stream', protocol: 'gRPC' },
        { from: 'f3', to: 'f4', label: 'Enqueue Signed XML', protocol: 'AMQP' },
        { from: 'f4', to: 'f5', label: 'SOAP / REST Official', protocol: 'REST' }
      ],
      keyHighlights: [
        'Capacidad de emitir facturas en contingencia cuando el servidor tributario esté fuera de línea.',
        'Tasa de procesamiento sostenida: hasta 1,200 facturas firmadas por segundo.',
        'Auditoría y trazabilidad completa de cada comunicación con sello de tiempo (Timestamping RFC 3161).'
      ]
    },
    compliance: [
      { framework: 'Estándar UBL 2.1 (Universal Business Language)', description: 'Estructuración semántica obligatoria del XML para comprobantes fiscales electrónicos.', auditPoint: 'Validación estricta contra esquemas OASIS UBL y esquemas locales.' },
      { framework: 'Normativa de Almacenamiento Legal (5 a 10 años)', description: 'Custodia inalterable de los archivos XML, CDRs y representaciones impresas según el código tributario.', auditPoint: 'Políticas de WORM (Write Once, Read Many) en almacenamiento cloud.' },
      { framework: 'FIPS 140-2 Nivel 3 para Llaves Criptográficas', description: 'Protección física y lógica del certificado digital tributario para impedir la extracción de la clave privada.', auditPoint: 'Custodia en Cloud HSM con auditoría de accesos.' }
    ],
    caseStudy: {
      clientSector: 'Cadena de Supermercados con 180 Puntos de Venta',
      challenge: 'Colapso total de cajas los días 15 y 30 de cada mes debido a caídas del servidor tributario que bloqueaban las colas de clientes.',
      solution: 'Implementación de nuestro motor asíncrono con contingencia local, buffer RabbitMQ y firma digital en microservicios Go.',
      metrics: [
        { label: 'Tiempo en Caja por Factura', value: '< 180 ms' },
        { label: 'Facturas Emitidas / Día', value: '450,000+' },
        { label: 'Tolerancia a Caídas de Red', value: '100% Offline' },
        { label: 'Multas Fiscales', value: '$0 USD' }
      ]
    }
  },
  {
    id: 'security',
    slug: 'ciberseguridad-compliance',
    name: 'Ciberseguridad Ofensiva & Arquitectura Zero Trust',
    tagline: 'DevSecOps Integrado, Análisis SAST/DAST Continuo, Pentesting Profesional y Certificación ISO 27001',
    accent: 'green',
    hexAccent: '#39FF14',
    iconName: 'ShieldCheck',
    problem: {
      title: 'Ataques de Ransomware, Fuga de Credenciales y Vulnerabilidades en Producción',
      summary: 'El costo promedio de una brecha de seguridad empresarial supera los $4.4 millones de dólares. El 82% de las brechas involucran datos almacenados en la nube con configuraciones débiles o credenciales filtradas.',
      painPoints: [
        'Vulnerabilidades del OWASP Top 10 que llegan inadvertidas a los servidores productivos.',
        'Falta de rotación de secretos y credenciales quemadas en el código fuente (Hardcoded secrets).',
        'Ausencia de postura Zero Trust: si un hacker compromete un servidor perimetral, accede a toda la red.',
        'Incumplimiento de marcos regulatorios que arriesga la operación comercial de la empresa.'
      ]
    },
    deliverables: [
      {
        title: 'Arquitectura Zero Trust & Microsegmentación de Redes',
        description: 'Autenticación y autorización estricta en cada petición (mTLS) sin confiar jamás en la red interna.',
        specs: ['Validación continua de identidad', 'Acceso granular just-in-time a infraestructuras']
      },
      {
        title: 'Pipeline DevSecOps con Escaneo SAST, DAST y SCA Continuo',
        description: 'Bloqueo automático de pull requests que introduzcan dependencias vulnerables o malas prácticas.',
        specs: ['Integración con SonarQube, Snyk y Trivy', 'Generación automática de SBOM (Software Bill of Materials)']
      },
      {
        title: 'Pruebas de Penetración (Pentesting) & Simulación de Adversarios',
        description: 'Evaluación exhaustiva de vectores de ataque web, API, móvil y nube según metodología PTES.',
        specs: ['Reporte ejecutivo para directorio', 'Planes de remediación técnica paso a paso con código']
      },
      {
        title: 'Gestión Criptográfica de Secretos y Cifrado de Punta a Punta',
        description: 'Cifrado AES-256 en reposo, TLS 1.3 en tránsito y rotación automática de credenciales con Vault.',
        specs: ['Zero credenciales en texto plano', 'Claves de encriptación gestionadas por el cliente (CMEK)']
      }
    ],
    stack: [
      { category: 'DevSecOps & SAST/DAST', tools: ['SonarQube Enterprise', 'Snyk Developer Security', 'OWASP ZAP', 'Trivy'] },
      { category: 'Identidad & Zero Trust', tools: ['HashiCorp Vault', 'Keycloak / Auth0', 'Tailscale / Cloudflare Zero Trust', 'Ory Kratos'] },
      { category: 'Monitoreo de Amenazas & SIEM', tools: ['Wazuh SIEM', 'Falco Runtime Security', 'AWS GuardDuty', 'Elastic Security'] },
      { category: 'Protección Perimetral', tools: ['Cloudflare Enterprise WAF', 'AWS WAF', 'ModSecurity', 'mTLS Istio Service Mesh'] }
    ],
    architecture: {
      patternName: 'Defense-in-Depth Zero Trust Cloud Mesh',
      summary: 'Estructura multicapa donde cada microservicio valida criptográficamente la identidad de su interlocutor antes de procesar cualquier llamada.',
      nodes: [
        { id: 's1', name: 'Cloudflare Enterprise WAF', role: 'Anti-DDoS & Bot Shield', type: 'gateway', description: 'Inspección de tráfico L7 y mitigación de ataques volumetricos' },
        { id: 's2', name: 'Istio Service Mesh', role: 'mTLS & Network Policy', type: 'gateway', description: 'Cifrado estricto entre pods con certificados efímeros SPIFFE/SPIRE' },
        { id: 's3', name: 'HashiCorp Vault', role: 'Dynamic Secrets Engine', type: 'service', description: 'Credenciales dinámicas con tiempo de vida (TTL) de 15 minutos' },
        { id: 's4', name: 'Wazuh & Falco SIEM', role: 'Runtime Threat Detection', type: 'service', description: 'Monitoreo de llamadas al kernel de Linux en contenedores' },
        { id: 's5', name: 'Encrypted Storage Tier', role: 'Envelope Encryption', type: 'db', description: 'Datos cifrados con llaves rotadas automáticamente' }
      ],
      connections: [
        { from: 's1', to: 's2', label: 'Filtered Traffic', protocol: 'REST' },
        { from: 's2', to: 's3', label: 'Fetch Ephemeral Token', protocol: 'gRPC' },
        { from: 's2', to: 's5', label: 'mTLS Encrypted', protocol: 'SQL' },
        { from: 's2', to: 's4', label: 'eBPF Kernel Audit', protocol: 'gRPC' }
      ],
      keyHighlights: [
        'Aislamiento completo de contenedores con perfiles AppArmor y Seccomp.',
        'Detección y expulsión automática de direcciones IP anómalas en < 500ms.',
        'Cumplimiento verificable con trazabilidad forense de cada acceso a datos sensibles.'
      ]
    },
    compliance: [
      { framework: 'ISO/IEC 27001:2022', description: 'Estándar internacional para la gestión de la seguridad de la información con 93 controles de seguridad.', auditPoint: 'Plan de tratamiento de riesgos y auditoría de controles del Anexo A.' },
      { framework: 'OWASP Top 10 (Web & API Security)', description: 'Mitigación comprobada contra inyecciones SQL, autenticación rota, SSRF y exposición de datos.', auditPoint: 'Pentesting semestral con matriz de mitigación.' },
      { framework: 'CIS Benchmarks Nivel 2', description: 'Guías de endurecimiento (hardening) para servidores Linux, Kubernetes y configuraciones de nube.', auditPoint: 'Escaneos diarios de drift en Terraform y Kubernetes.' }
    ],
    caseStudy: {
      clientSector: 'Fintech de Pagos Internacionales',
      challenge: 'Un pentest previo detectó vulnerabilidades críticas de inyección y exposición de llaves de API que impedían su certificación bancaria.',
      solution: 'Remediación del 100% de hallazgos, implementación de HashiCorp Vault para secretos dinámicos y pipeline DevSecOps con bloqueo automático en CI.',
      metrics: [
        { label: 'Vulnerabilidades Críticas', value: '0 detectadas' },
        { label: 'Tiempo de Rotación de Secretos', value: '100% Automático' },
        { label: 'Aprobación de Auditoría', value: '100% Sin Hallazgos' },
        { label: 'Tiempo de Detección de Amenazas', value: '< 2 segundos' }
      ]
    }
  },
  {
    id: 'health',
    slug: 'soluciones-salud-healthtech',
    name: 'Soluciones de Salud Digital (HealthTech)',
    tagline: 'Historias Clínicas Electrónicas con Estándar HL7 FHIR, Interoperabilidad Médica y Rigor HIPAA',
    accent: 'blue',
    hexAccent: '#00B8FF',
    iconName: 'Activity',
    problem: {
      title: 'Datos Médicos Fragmentados, Falta de Interoperabilidad y Riesgos de Privacidad',
      summary: 'El 86% de los errores médicos evitables provienen de registros clínicos incompletos entre laboratorios, clínicas y aseguradoras. Los datos de salud requieren los niveles más altos de cifrado y disociación de identidad.',
      painPoints: [
        'Sistemas hospitalarios legados incapaces de compartir información clínica de forma segura.',
        'Incumplimiento de normativas de protección de datos de salud (HIPAA / GDPR Health).',
        'Pérdida de tiempo de los profesionales médicos reescribiendo historiales clínicos en múltiples plataformas.',
        'Riesgo de alteración o filtración de diagnósticos e imágenes médicas confidenciales.'
      ]
    },
    deliverables: [
      {
        title: 'Servidor FHIR R4 / R5 Nativo con Interoperabilidad HL7',
        description: 'Modelado semántico de recursos clínicos (Patient, Encounter, Observation, DiagnosticReport).',
        specs: ['Endpoints RESTful FHIR conformes con US Core / IPS', 'Validación estricta de perfiles JSON']
      },
      {
        title: 'Historia Clínica Electrónica (EHR / EMR) en Tiempo Real',
        description: 'Módulos para médicos y enfermería con registro rápido, prescripciones electrónicas y alertas farmacológicas.',
        specs: ['Interfaz táctil optimizada para tablets de hospital', 'Firma médica digital biométrica / PKI']
      },
      {
        title: 'Visor y Servidor PACS / DICOM Web Integrado',
        description: 'Visualización médica de alta fidelidad para tomografías, radiografías y resonancias en el navegador.',
        specs: ['Soporte CornerStone.js y streaming por cortes', 'Cero almacenamiento permanente en el cliente local']
      },
      {
        title: 'Anonimización y Disociación Criptográfica de Pacientes (De-identification)',
        description: 'Mecanismos automatizados para investigación médica y analítica sin exponer datos personales (PII).',
        specs: ['Tokenización irreversible de identidad', 'Cumplimiento Safe Harbor HIPAA']
      }
    ],
    stack: [
      { category: 'Health Standards', tools: ['HL7 FHIR R4 / R5', 'DICOM Web (WADO-RS)', 'SNOMED CT', 'LOINC Coding'] },
      { category: 'Servidores Clínicos', tools: ['HAPI FHIR Server', 'Google Cloud Healthcare API', 'Cornerstone3D', 'Orthanc PACS'] },
      { category: 'Backend & Seguridad', tools: ['Node.js / TypeScript', 'PostgreSQL con HStore / JSONB', 'Keycloak Health RBAC', 'Vault'] },
      { category: 'Cumplimiento & Auditoría', tools: ['AuditEvent FHIR Resource', 'AWS HealthLake', 'HIPAA Log Vault', 'Datadog HIPAA'] }
    ],
    architecture: {
      patternName: 'FHIR-Compliant Federated Health Data Grid',
      summary: 'Ecosistema federado donde todos los registros clínicos se transcriben al estándar universal HL7 FHIR con control estricto de consentimiento del paciente.',
      nodes: [
        { id: 'h1', name: 'Clinical Portal / App', role: 'Portal Médico & Paciente', type: 'client', description: 'Visor de ficha clínica con autenticación MFA obligatoria' },
        { id: 'h2', name: 'SMART on FHIR Gateway', role: 'OAuth2 / OIDC Health Auth', type: 'gateway', description: 'Validación de scopes específicos por recurso clínico' },
        { id: 'h3', name: 'FHIR Core Server (HAPI)', role: 'Motor HL7 Interoperable', type: 'service', description: 'Validación de perfiles clínicos y orquestación' },
        { id: 'h4', name: 'DICOM Imaging Microservice', role: 'Servidor PACS Web', type: 'service', description: 'Compresión y streaming seguro de imágenes diagnósticas' },
        { id: 'h5', name: 'Encrypted Health Vault', role: 'Audit & Health Records', type: 'db', description: 'Almacenamiento auditado con log append-only no repudiable' }
      ],
      connections: [
        { from: 'h1', to: 'h2', label: 'SMART on FHIR', protocol: 'REST' },
        { from: 'h2', to: 'h3', label: 'FHIR REST API', protocol: 'REST' },
        { from: 'h2', to: 'h4', label: 'WADO-RS Stream', protocol: 'REST' },
        { from: 'h3', to: 'h5', label: 'Encrypted SQL Store', protocol: 'SQL' }
      ],
      keyHighlights: [
        'Interoperabilidad inmediata con redes hospitalarias y sistemas de laboratorio externos.',
        'Registro inalterable de cada visualización de ficha médica (AuditEvent) para auditoría legal.',
        'Cifrado de grado médico en reposo (AES-256) y en tránsito con TLS 1.3.'
      ]
    },
    compliance: [
      { framework: 'HIPAA (Health Insurance Portability and Accountability Act)', description: 'Regulación de privacidad y seguridad de información médica protegida (PHI).', auditPoint: 'Business Associate Agreement (BAA) y auditoría de accesos.' },
      { framework: 'HL7 FHIR Release 4 & 5', description: 'Estándar global de interoperabilidad para el intercambio electrónico de información en salud.', auditPoint: 'Pruebas de conformidad con FHIR Validator oficial.' },
      { framework: 'Ley de Protección de Datos Personales de Salud', description: 'Normativa nacional sobre secreto médico, consentimiento informado y custodia de la historia clínica.', auditPoint: 'Consent tracking explícito implementado en cada transacción.' }
    ],
    caseStudy: {
      clientSector: 'Red Hospitalaria Privada (14 Clínicas)',
      challenge: 'Historiales clínicos fragmentados en 5 sistemas diferentes; los médicos tardaban hasta 20 minutos en acceder a resultados de laboratorio previos.',
      solution: 'Desarrollo de un bus clínico interoperable basado en FHIR R4 con visor unificado de ficha médica y visor DICOM web integrado.',
      metrics: [
        { label: 'Tiempo de Consulta Clínica', value: 'De 20 min a 35 seg' },
        { label: 'Registros Interoperados', value: '2.4 Millones' },
        { label: 'Cumplimiento Regulatorio', value: '100% HIPAA Audit' },
        { label: 'Satisfacción Médica', value: '98.4%' }
      ]
    }
  }
];
