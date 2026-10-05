export interface MethodologyStep {
  phase: string;
  name: string;
  cadence: string;
  description: string;
  activities: string[];
  deliverableArtifact: string;
  qualityGate: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    phase: '01',
    name: 'Discovery & Arquitectura de Dominio (DDD)',
    cadence: 'Semanas 1 - 2',
    description: 'Modelado colaborativo mediante Event Storming y delimitación de contextos acotados (Bounded Contexts) antes de escribir código.',
    activities: [
      'Entrevistas con stakeholders de negocio y auditores de cumplimiento.',
      'Definición de contratos de API (OpenAPI 3.1 / Protobuf schemas).',
      'Matriz de riesgos técnicos, estimación de volumen de datos y dimensionamiento de SLAs.',
      'Selección justificada de patrones arquitectónicos y topología de nube.'
    ],
    deliverableArtifact: 'Documento de Decisión Arquitectónica (ADR) + Diagramas C4 Nivel 1 y 2.',
    qualityGate: 'Aprobación formal del Tech Lead y Architect antes de inicio de sprints.'
  },
  {
    phase: '02',
    name: 'Sprints Ágiles & Trunk-Based Development',
    cadence: 'Ciclos de 2 semanas',
    description: 'Desarrollo iterativo con integración continua sobre la rama principal mediante Feature Flags, evitando ramas de larga duración.',
    activities: [
      'Sprint Planning con User Stories que incluyen Criterios de Aceptación técnicos y funcionales.',
      'Daily Standups síncronos de 15 minutos enfocados en remover bloqueos de arquitectura.',
      'Pair Programming en módulos de alta criticidad (criptografía, ledger financiero, FHIR).',
      'Despliegues continuos diarios a ambientes efímeros de Staging (Preview Environments).'
    ],
    deliverableArtifact: 'Incremento de producto desplegable y verificado en ambiente Staging.',
    qualityGate: 'Branch protection activa: mínimo 2 aprobaciones de Senior Peers y suites de tests verdes.'
  },
  {
    phase: '03',
    name: 'TDD & Shift-Left DevSecOps Testing',
    cadence: 'Continuo en cada Commit',
    description: 'La calidad y la seguridad se evalúan en la máquina del desarrollador y en el pipeline de CI antes de que el código toque producción.',
    activities: [
      'Desarrollo guiado por pruebas (TDD) para toda la lógica de negocio nuclear.',
      'Pruebas de integración con contenedores reales usando Testcontainers.',
      'Escaneo automático SAST y SCA con SonarQube y Snyk bloqueando vulnerabilidades críticas.',
      'Pruebas de regresión visual y E2E automatizadas con Playwright en navegadores headless.'
    ],
    deliverableArtifact: 'Reporte unificado de cobertura de pruebas (> 85%) y reporte SBOM criptográfico.',
    qualityGate: 'Cero vulnerabilidades críticas o altas (CVEs) y cobertura mínima del 85% obligatoria.'
  },
  {
    phase: '04',
    name: 'Entrega Continua (CI/CD) & Despliegues Zero-Downtime',
    cadence: 'Bajo demanda / Múltiples veces al día',
    description: 'Automatización total del ciclo de despliegue mediante Kubernetes con estrategias Canary o Blue/Green y rollback automático instantáneo.',
    activities: [
      'Compilación de imágenes de contenedor inmutables y firmadas con Cosign.',
      'Provisión de infraestructura verificada con Terraform en estado inmutable.',
      'Canary release: 5% del tráfico inicial evaluando tasa de errores 5xx y latencias durante 10 min.',
      'Rollback automático en < 15 segundos si las métricas superan los umbrales de alerta.'
    ],
    deliverableArtifact: 'Release Notes automatizados y contenedores desplegados en producción con Zero Downtime.',
    qualityGate: 'Verificación automática de Healthchecks y métricas de error rate < 0.01%.'
  },
  {
    phase: '05',
    name: 'Observabilidad SRE & Mejora Continua',
    cadence: '24/7 en Tiempo Real',
    description: 'Monitoreo proactivo de los cuatro Golden Signals (Latencia, Tráfico, Errores y Saturación) con OpenTelemetry, Prometheus y Grafana.',
    activities: [
      'Distribución de trazas distribuidas (Distributed Tracing) con correlación de logs y métricas.',
      'Alertas inteligentes sobre presupuestos de error (Error Budgets) y Service Level Objectives (SLOs).',
      'Post-mortems sin culpa (Blameless Post-Mortems) documentados tras cualquier incidente operacional.',
      'Auditorías continuas de rendimiento y optimización de costos en la nube (FinOps).'
    ],
    deliverableArtifact: 'Cuadros de mando Grafana en tiempo real y reporte mensual de cumplimiento de SLA.',
    qualityGate: 'SLA contractual del 99.98% verificado y tiempo medio de resolución (MTTR) < 20 minutos.'
  }
];
