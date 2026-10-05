import { ArchitecturePattern } from '../types';

export const architecturesData: ArchitecturePattern[] = [
  {
    id: 'modular-monolith',
    title: 'Monolito Modular (Modular Monolith)',
    subtitle: 'Simplicidad Operativa con Separación Estricta de Dominios (DDD)',
    whenToUse: 'Ideal para productos en fase de crecimiento acelerado o sistemas medianos donde la sobrecarga de red y la complejidad operativa de microservicios no está justificada económicamente.',
    tradeoffs: {
      pros: [
        'Transacciones ACID nativas sin necesidad de patrones complejos como Sagas de 2 fases.',
        'Despliegue unificado y depuración local instantánea sin lidiar con latencias de red.',
        'Refactorizaciones seguras soportadas por el compilador de TypeScript o Java.',
        'Costos de infraestructura y orquestación reducidos en hasta un 70%.'
      ],
      cons: [
        'El escalado de recursos es a nivel de toda la aplicación, no por módulo individual.',
        'Un bug de memoria severo en un módulo puede comprometer la instancia completa.'
      ]
    },
    sampleStack: ['NestJS / Spring Boot', 'PostgreSQL 17 (Schemas separados)', 'Redis Cache', 'BullMQ Workers'],
    slaTarget: '99.9% Uptime'
  },
  {
    id: 'microservices',
    title: 'Microservicios Desacoplados (Microservices)',
    subtitle: 'Autonomía de Equipos y Escalado Elástico Horizontal por Dominio',
    whenToUse: 'Empresas con múltiples equipos de ingeniería trabajando en paralelo sobre dominios complejos (pagos, inventario, logística, facturación) con ciclos de release independientes.',
    tradeoffs: {
      pros: [
        'Escalado independiente de los componentes que reciben mayor carga puntual.',
        'Poliglotismo tecnológico controlado: cada servicio usa el lenguaje óptimo (Go para IO, Java para transaccional).',
        'Aislamiento de fallos: la caída de un servicio secundario no detiene el núcleo del sistema.'
      ],
      cons: [
        'Consistencia eventual: requiere gestión cuidadosa de transacciones distribuidas.',
        'Mayor complejidad de red y necesidad obligatoria de observabilidad distribuida (OpenTelemetry).'
      ]
    },
    sampleStack: ['Go / NestJS / Spring', 'Kubernetes (EKS/GKE)', 'gRPC + Envoy', 'PostgreSQL per service', 'Istio Mesh'],
    slaTarget: '99.98% Uptime'
  },
  {
    id: 'event-driven',
    title: 'Arquitectura Guiada por Eventos (Event-Driven)',
    subtitle: 'Flujo Asíncrono de Ultra-Baja Latencia con Apache Kafka & RabbitMQ',
    whenToUse: 'Sistemas con procesamiento de streams continuos, IoT, facturación masiva, conciliación financiera o pipelines analíticos en tiempo real.',
    tradeoffs: {
      pros: [
        'Desacoplamiento temporal absoluto: emisores y consumidores no necesitan estar activos a la vez.',
        'Capacidad natural de absorción de picos de carga (buffer elástico en colas).',
        'Auditoría y reproducibilidad histórica gracias al registro inmutable de eventos (Event Sourcing).'
      ],
      cons: [
        'Mayor dificultad para razonar sobre el flujo global de la aplicación.',
        'Monitoreo estricto del retraso del consumidor (Consumer Lag) obligatorio.'
      ]
    },
    sampleStack: ['Apache Kafka', 'Schema Registry (Avro)', 'RabbitMQ DLQ', 'PostgreSQL', 'Prometheus'],
    slaTarget: '99.99% Uptime'
  },
  {
    id: 'serverless',
    title: 'Arquitectura Serverless & Edge Compute',
    subtitle: 'Escala a Cero y Costos 100% Proporcionales al Uso Real',
    whenToUse: 'APIs con tráfico esporádico o impredecible, webhooks de terceros, procesamiento por lotes o plataformas web globales con renderizado en el borde (Edge).',
    tradeoffs: {
      pros: [
        'Cero mantenimiento de servidores, parches de sistema operativo o escalado manual.',
        'Costo cero mientras no hay tráfico (scale-to-zero).',
        'Despliegue perimetral global instantáneo con latencias menores a 30ms en todo el planeta.'
      ],
      cons: [
        'Arranques en frío (cold starts) en funciones pesadas sin aprovisionamiento previo.',
        'Tiempo límite de ejecución por petición (usualmente 15 minutos máximo).'
      ]
    },
    sampleStack: ['AWS Lambda / Cloudflare Workers', 'DynamoDB / Neon Postgres', 'EventBridge', 'Vercel Edge'],
    slaTarget: '99.95% Uptime'
  },
  {
    id: 'multi-tenant',
    title: 'Arquitectura Multi-Tenant SaaS Resiliente',
    subtitle: 'Aislamiento Estricto de Datos y Recursos para Plataformas B2B',
    whenToUse: 'Plataformas SaaS donde miles de clientes corporativos comparten la misma infraestructura con estricta garantía de confidencialidad y aislamiento de datos.',
    tradeoffs: {
      pros: [
        'Eficiencia máxima de costos operativos al consolidar recursos en un único clúster.',
        'Actualizaciones simultáneas para todos los inquilinos con feature flags progresivos.',
        'Soporte para aislamiento híbrido (base compartida con schemas independientes o bases segregadas para clientes enterprise).'
      ],
      cons: [
        'Riesgo del vecino ruidoso (noisy neighbor) mitigado mediante rate-limiting por tenant.',
        'Rigor criptográfico obligatorio en cada consulta a base de datos (Row-Level Security).'
      ]
    },
    sampleStack: ['PostgreSQL RLS (Row-Level Security)', 'Redis Keyspace Isolation', 'Kong API Gateway', 'K8s Tenants'],
    slaTarget: '99.99% Uptime'
  }
];
