/**
 * AI agents & process automation offer. These are capabilities Krypton builds,
 * not client results: no metrics here may be presented as achieved outcomes.
 */

export interface AgentRole {
  id: string;
  name: string;
  operatesOn: string[];
  does: string;
  handsOff: string;
}

export const agentRoles: AgentRole[] = [
  {
    id: 'cuentas-por-pagar',
    name: 'Agente de cuentas por pagar',
    operatesOn: ['Correo', 'SUNAT · SAT · DIAN · SII', 'ERP'],
    does: 'Lee facturas PDF y XML, valida su estado ante el ente tributario, concilia contra la orden de compra y la recepción, y registra el asiento en tu ERP.',
    handsOff: 'Diferencias fuera de tolerancia y proveedores nuevos pasan a tu equipo con el caso ya armado.',
  },
  {
    id: 'backoffice-comercial',
    name: 'Agente de atención y backoffice',
    operatesOn: ['WhatsApp · correo', 'CRM', 'Contratos y catálogo'],
    does: 'Responde a clientes con información de tus contratos, catálogo y estado de pedidos, crea tickets y actualiza el CRM sin copiar y pegar.',
    handsOff: 'Reclamos, descuentos y casos sensibles escalan a una persona con el historial completo.',
  },
  {
    id: 'cumplimiento',
    name: 'Agente de cumplimiento y seguridad',
    operatesOn: ['Logs y SIEM', 'Controles ISO 27001', 'Tickets'],
    does: 'Revisa eventos, cruza hallazgos con tus controles, prepara la evidencia para auditoría y abre las tareas de remediación.',
    handsOff: 'Ningún cambio de configuración se aplica sin aprobación del responsable de seguridad.',
  },
  {
    id: 'salud-administrativo',
    name: 'Agente clínico-administrativo',
    operatesOn: ['HL7 FHIR', 'Agenda', 'Aseguradoras'],
    does: 'Prepara autorizaciones, resúmenes de historia y gestiones de agenda a partir de recursos FHIR, dentro del perímetro HIPAA.',
    handsOff: 'No diagnostica ni prescribe: todo documento clínico queda para revisión del profesional.',
  },
];

export interface Guardrail {
  title: string;
  detail: string;
}

export const agentGuardrails: Guardrail[] = [
  { title: 'Permisos mínimos', detail: 'Cada agente accede solo a las herramientas y datos que su tarea necesita, con credenciales rotadas desde Vault.' },
  { title: 'Humano en el circuito', detail: 'Umbrales de monto, riesgo o confianza definidos contigo deciden qué se aprueba solo y qué espera a una persona.' },
  { title: 'Bitácora auditable', detail: 'Cada lectura, decisión y acción queda registrada con su contexto, lista para auditoría interna o regulatoria.' },
  { title: 'Evaluado antes de producción', detail: 'Suites de evaluación con tus casos reales miden precisión y errores antes de cada versión.' },
  { title: 'Tus datos en tu nube', detail: 'Despliegue en tu AWS, GCP o Azure, o con modelos abiertos on-premise cuando la regulación lo exige.' },
];

export const agentStack: Array<{ layer: string; tools: string }> = [
  { layer: 'Modelos', tools: 'Claude · GPT · Gemini · Llama on-premise' },
  { layer: 'Orquestación', tools: 'LangGraph · Temporal' },
  { layer: 'Herramientas', tools: 'MCP · APIs de tu ERP, CRM y entes tributarios' },
  { layer: 'Memoria', tools: 'PostgreSQL + pgvector' },
  { layer: 'Observabilidad', tools: 'OpenTelemetry · Langfuse' },
];

export interface AutomationStep {
  verb: string;
  detail: string;
}

export const automationSteps: AutomationStep[] = [
  { verb: 'Mapear', detail: 'Reconstruimos el proceso real desde los registros de tus sistemas, no desde el organigrama: dónde se espera, dónde se repite, dónde se equivoca.' },
  { verb: 'Rediseñar', detail: 'Eliminamos pasos antes de automatizarlos. Lo que queda se divide entre reglas deterministas y decisiones que requieren criterio.' },
  { verb: 'Automatizar', detail: 'Flujos orquestados para las reglas, agentes de IA para lo no estructurado, y personas para lo que de verdad lo merece.' },
  { verb: 'Medir', detail: 'Tiempo de ciclo, tasa de excepciones y costo por caso en un tablero en vivo, comparados contra la línea base.' },
];

/** Synthetic trace shown in the first viewport. Labelled as an illustration on the page. */
export const heroTrace: Array<{ t: string; step: string; detail: string }> = [
  { t: '00.0', step: 'Correo recibido', detail: 'factura F001-004812 · PDF + XML' },
  { t: '01.4', step: 'Lectura', detail: '23 campos · RUC, montos, IGV' },
  { t: '02.1', step: 'Validación SUNAT', detail: 'comprobante aceptado' },
  { t: '02.9', step: 'Conciliación', detail: 'OC-7731 · diferencia S/ 41.20' },
  { t: '03.3', step: 'Tolerancia', detail: 'dentro del 0.5 % aprobado' },
  { t: '03.8', step: 'Asiento en ERP', detail: 'diario de compras · registrado' },
];
