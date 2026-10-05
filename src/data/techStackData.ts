import { TechItem } from '../types';

export const techStackData: TechItem[] = [
  // Frontend
  { name: 'Next.js 15 (App Router)', category: 'Frontend', version: 'v15.2', level: 'Core Enterprise', description: 'Framework full-stack con React Server Components, Streaming SSR y generación estática incremental.', keyUse: 'Plataformas web corporativas de alto tráfico y SEO crítico.' },
  { name: 'React 19', category: 'Frontend', version: 'v19.1', level: 'High Performance', description: 'Librería base con compilador automático, Server Actions y transiciones concurrentes.', keyUse: 'Interfaces interactivas y paneles de gestión complejos.' },
  { name: 'TypeScript', category: 'Frontend', version: 'v5.7', level: 'Core Enterprise', description: 'Tipado estático riguroso con chequeo estricto para garantizar cero fallos de tipo en producción.', keyUse: 'Todo el ecosistema de código fuente.' },
  { name: 'Tailwind CSS v4', category: 'Frontend', version: 'v4.0', level: 'High Performance', description: 'Motor de utilidades CSS compilado en Rust con tokens de diseño centralizados.', keyUse: 'Design systems consistentes y carga CSS < 15KB.' },
  { name: 'Three.js & WebGL', category: 'Frontend', version: 'r174', level: 'High Performance', description: 'Renderizado 3D acelerado por hardware para visualizaciones espaciales y modelos interactivos.', keyUse: 'Experiencias inmersivas, geometrías atómicas y gemelos digitales.' },

  // Backend
  { name: 'Node.js / NestJS', category: 'Backend', version: 'v10.4', level: 'Core Enterprise', description: 'Framework empresarial TypeScript con inyección de dependencias y arquitectura modular sólida.', keyUse: 'APIs REST y gRPC de misión crítica con contratos estrictos.' },
  { name: 'Java 21 Spring Boot 3', category: 'Backend', version: 'v3.4', level: 'Core Enterprise', description: 'Ecosistema robusto para alta concurrencia empresarial con Virtual Threads (Project Loom).', keyUse: 'Motores financieros, transacciones bancarias y procesamiento masivo.' },
  { name: 'Go (Golang)', category: 'Backend', version: 'v1.24', level: 'High Performance', description: 'Lenguaje compilado ultra-eficiente con rutinas ligeras y consumo mínimo de memoria.', keyUse: 'Microservicios de alto throughput y timbrado de facturación fiscal.' },
  { name: '.NET 9 Core', category: 'Backend', version: 'v9.0', level: 'Core Enterprise', description: 'Plataforma multi-plataforma de alto rendimiento con optimizaciones de bajo nivel en memoria.', keyUse: 'Integraciones con ecosistemas corporativos Microsoft y ERPs.' },

  // Móvil
  { name: 'React Native', category: 'Móvil', version: 'v0.77', level: 'Core Enterprise', description: 'Desarrollo multiplataforma con New Architecture (Fabric Renderer + TurboModules en C++).', keyUse: 'Aplicaciones móviles corporativas con experiencia nativa fluida a 60/120 FPS.' },
  { name: 'Flutter', category: 'Móvil', version: 'v3.27', level: 'High Performance', description: 'Framework de Google con motor Impeller para renderizado pixel-perfect en iOS y Android.', keyUse: 'Apps con interfaces altamente personalizadas y consumo ultra-optimizado.' },
  { name: 'Swift & SwiftUI', category: 'Móvil', version: 'v6.0', level: 'High Performance', description: 'Desarrollo nativo puro para iOS con integración profunda a hardware y biometría Face ID.', keyUse: 'Módulos de seguridad y apps de alto rendimiento para el ecosistema Apple.' },
  { name: 'Kotlin & Jetpack Compose', category: 'Móvil', version: 'v2.1', level: 'High Performance', description: 'Desarrollo nativo declarativo para Android con corrutinas y arquitectura limpia.', keyUse: 'Apps empresariales Android y dispositivos POS dedicados.' },

  // Datos
  { name: 'PostgreSQL', category: 'Datos', version: 'v17.2', level: 'Core Enterprise', description: 'Base de datos relacional open-source más avanzada del mundo con soporte JSONB, particionado y RLS.', keyUse: 'Fuente de la verdad transaccional para ERPs y facturación.' },
  { name: 'Redis Enterprise Cluster', category: 'Datos', version: 'v7.4', level: 'High Performance', description: 'Almacenamiento en memoria ultrarrápido con estructuras de datos avanzadas y persistencia.', keyUse: 'Caché distribuida, control de sesiones y colas de baja latencia.' },
  { name: 'Apache Kafka', category: 'Datos', version: 'v3.8', level: 'Cloud Native', description: 'Plataforma de streaming distribuido de eventos con alta tolerancia a fallos y retención ordenada.', keyUse: 'Bus de eventos principal para arquitecturas event-driven.' },
  { name: 'RabbitMQ', category: 'Datos', version: 'v3.13', level: 'Core Enterprise', description: 'Broker de mensajería AMQP confiable con soporte para colas dead-letter y enrutamiento granular.', keyUse: 'Buffers de emisión fiscal y tareas en background desacopladas.' },

  // Cloud/DevOps
  { name: 'Kubernetes (K8s)', category: 'Cloud/DevOps', version: 'v1.31', level: 'Cloud Native', description: 'Orquestación de contenedores elástica con autoescalado horizontal (HPA) y mTLS.', keyUse: 'Clústeres productivos en AWS (EKS), GCP (GKE) y Azure (AKS).' },
  { name: 'Docker', category: 'Cloud/DevOps', version: 'v27.3', level: 'Core Enterprise', description: 'Contenedores estandarizados con imágenes multi-stage mínimas basadas en Alpine o Distroless.', keyUse: 'Empaquetado inmutable y entornos de desarrollo idénticos a producción.' },
  { name: 'Terraform & OpenTofu', category: 'Cloud/DevOps', version: 'v1.9', level: 'Cloud Native', description: 'Infraestructura como Código (IaC) declarativa para provisión replicable y versionada.', keyUse: 'Gestión automatizada de redes, VPCs, bases de datos gestionadas y WAFs.' },
  { name: 'GitHub Actions & GitLab CI', category: 'Cloud/DevOps', version: 'Enterprise', level: 'Core Enterprise', description: 'Pipelines automatizados de compilación, análisis estático, pruebas y despliegues continuos.', keyUse: 'CI/CD con despliegues Canary y rollback instantáneo.' },
  { name: 'Prometheus & Grafana', category: 'Cloud/DevOps', version: 'v2.54', level: 'Cloud Native', description: 'Recolección de métricas en tiempo real y cuadros de mando visuales con alertas críticas.', keyUse: 'Observabilidad completa de infraestructura, pods y latencias P95/P99.' },

  // Seguridad
  { name: 'HashiCorp Vault', category: 'Seguridad', version: 'v1.17', level: 'Core Enterprise', description: 'Gestión centralizada y cifrada de secretos, certificados PKI y llaves de acceso dinámicas.', keyUse: 'Eliminación absoluta de credenciales en código y variables de entorno fijas.' },
  { name: 'SonarQube Enterprise', category: 'Seguridad', version: 'v10.6', level: 'Core Enterprise', description: 'Análisis estático de seguridad de código (SAST) y detección de deuda técnica y bugs.', keyUse: 'Quality Gates obligatorios que impiden mezclar código vulnerable.' },
  { name: 'Snyk & Trivy', category: 'Seguridad', version: 'Latest', level: 'High Performance', description: 'Escaneo continuo de dependencias (SCA) y vulnerabilidades en imágenes de contenedores.', keyUse: 'Protección contra ataques a la cadena de suministro de software.' },
  { name: 'Istio Service Mesh', category: 'Seguridad', version: 'v1.23', level: 'Cloud Native', description: 'Malla de servicios perimetral que proporciona cifrado mTLS automático y autenticación Zero Trust.', keyUse: 'Comunicación cifrada pod-a-pod y control de acceso RBAC a nivel de red.' },

  // QA
  { name: 'Playwright', category: 'QA', version: 'v1.48', level: 'High Performance', description: 'Automatización de pruebas end-to-end (E2E) multiplataforma y multi-navegador en paralelo.', keyUse: 'Validación de flujos críticos de compra, login y transacciones.' },
  { name: 'Vitest & Jest', category: 'QA', version: 'v2.1', level: 'High Performance', description: 'Ejecutor de pruebas unitarias ultrarrápido con soporte nativo de TypeScript y ESM.', keyUse: 'Cobertura de pruebas unitarias > 85% en lógica de negocio.' },
  { name: 'k6 by Grafana', category: 'QA', version: 'v0.54', level: 'Core Enterprise', description: 'Herramienta de pruebas de carga y estrés para validar capacidad de concurrencia y latencias.', keyUse: 'Simulación de picos de 50,000 usuarios concurrentes antes de salir a producción.' },
  { name: 'Pact Contract Testing', category: 'QA', version: 'v13.1', level: 'Cloud Native', description: 'Pruebas de contratos para microservicios para evitar roturas entre APIs consumidoras y proveedoras.', keyUse: 'Validación asíncrona de contratos de API sin necesidad de desplegar el clúster entero.' }
];
