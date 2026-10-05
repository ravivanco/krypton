import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { agentRoles, agentGuardrails, agentStack, automationSteps, heroTrace } from '../data/agentsData';
import { Reveal, SectionHead } from './Chrome';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[78rem] px-5 sm:px-8 lg:px-14 ${className}`}>{children}</div>
);

/* ----------------------------------------------------------------------- */
/* 0 m — Surface                                                          */
/* ----------------------------------------------------------------------- */

const AgentTrace: React.FC = () => {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? heroTrace.length : 0);

  useEffect(() => {
    if (reduce) {
      setStep(heroTrace.length);
      return;
    }
    const delay = step >= heroTrace.length ? 3200 : step === 0 ? 1100 : 820;
    const id = window.setTimeout(() => setStep((s) => (s >= heroTrace.length ? 0 : s + 1)), delay);
    return () => window.clearTimeout(id);
  }, [step, reduce]);

  const done = step >= heroTrace.length;

  return (
    <figure
      className="w-full border border-rule/90 bg-[#04101f]/78 backdrop-blur-md"
      aria-label="Simulación ilustrativa de un agente de cuentas por pagar"
    >
      <figcaption className="flex items-center justify-between gap-4 border-b border-rule/90 px-5 py-3">
        <span className="text-[0.88rem] font-medium text-snow">Agente · cuentas por pagar</span>
        <span className="label shrink-0 text-[0.6rem] text-silt">Simulación</span>
      </figcaption>
      <ol className="px-5 py-3">
        {heroTrace.map((row, i) => {
          const state = i < step ? 'done' : i === step ? 'live' : 'wait';
          return (
            <li key={row.step} className="grid grid-cols-[3rem_1rem_minmax(0,1fr)] items-start gap-x-2 py-[0.38rem]">
              <span className={`data pt-[0.1rem] text-[0.76rem] ${state === 'wait' ? 'text-murk' : 'text-silt'}`}>{row.t}s</span>
              <span className="relative mt-[0.45rem] flex h-2 w-2 items-center justify-center">
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    state === 'live' ? 'bg-lamp' : state === 'done' ? 'bg-lamp/55' : 'border border-murk'
                  }`}
                />
                {state === 'live' && (
                  <motion.span
                    className="absolute h-2 w-2 rounded-full bg-lamp"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{ scale: 3.2, opacity: 0 }}
                    transition={{ duration: 0.8, ease: easeOutExpo }}
                  />
                )}
              </span>
              <span className="min-w-0">
                <span className={`block text-[0.9rem] leading-snug transition-colors duration-300 ${state === 'wait' ? 'text-murk' : 'text-snow'}`}>
                  {row.step}
                </span>
                <span className={`data block text-[0.74rem] leading-snug ${state === 'wait' ? 'text-murk/80' : 'text-silt'}`}>{row.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>
      <div className="flex items-center justify-between border-t border-rule/90 px-5 py-3">
        <span className="label text-[0.64rem] text-silt">Intervención humana</span>
        <span className={`data text-[0.8rem] ${done ? 'text-lamp' : 'text-silt'}`}>{done ? 'no requerida' : 'evaluando…'}</span>
      </div>
    </figure>
  );
};

const heroReadings = [
  ['SLA', '99.995', '%'],
  ['Latencia P99', '<45', 'ms'],
  ['Deuda técnica', 'Cero', ''],
];

export const HeroSection: React.FC = () => (
  <section id="inicio" aria-labelledby="titulo-inicio" className="relative flex min-h-[100svh] flex-col pt-16 lg:pt-0">
    <Container className="grid flex-1 content-end gap-12 pb-10 pt-16 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end lg:gap-10 lg:pb-12 lg:pt-20">
      <div className="max-w-[44rem]">
        <motion.h1
          id="titulo-inicio"
          className="font-display text-[clamp(3.3rem,6.6vw,5.6rem)] text-snow"
          initial={{ opacity: 0, filter: 'blur(14px)', y: 40 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.4, ease: easeOutExpo }}
        >
          IA que llega al fondo de tus sistemas
        </motion.h1>
        <motion.p
          className="mt-7 max-w-[35rem] text-[1.12rem] leading-relaxed text-silt sm:text-[1.18rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: easeOutExpo }}
        >
          Diseñamos agentes de IA y automatización que leen, deciden y registran sobre tu ERP, tu
          facturación electrónica y tus sistemas críticos. Los construye el mismo equipo que ingenia esos sistemas.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 bg-thermo px-6 py-4 text-[1rem] font-semibold text-[#04121f] transition-colors duration-300 hover:bg-[#7ae6f0]"
          >
            Hablar con un arquitecto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#agentes"
            className="group inline-flex items-center gap-3 border border-snow/40 px-6 py-4 text-[1rem] font-medium text-snow transition-colors duration-300 hover:border-thermo hover:text-thermo"
          >
            Ver cómo opera un agente
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </motion.div>
        <motion.dl
          className="mt-14 grid max-w-[33rem] grid-cols-3 gap-x-4 border-t border-snow/20 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: easeOutExpo }}
        >
          {heroReadings.map(([label, value, unit]) => (
            <div key={label}>
              <dt className="label text-[0.62rem] text-silt">{label}</dt>
              <dd className="data mt-1.5 text-[1.4rem] leading-none text-snow sm:text-[1.6rem]">
                {value}
                {unit && <span className="ml-1 text-sm text-silt">{unit}</span>}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.3, delay: 0.7, ease: easeOutExpo }}
      >
        <AgentTrace />
      </motion.div>
    </Container>
  </section>
);

/* ----------------------------------------------------------------------- */
/* 10 m — Thermocline: agents                                             */
/* ----------------------------------------------------------------------- */

export const AgentsSection: React.FC = () => (
  <section id="agentes" aria-labelledby="titulo-agentes" className="relative py-28 lg:py-40">
    <div className="thermocline absolute inset-x-0 top-0" aria-hidden="true" />
    <Container>
      <SectionHead
        stopId="agentes"
        titleId="titulo-agentes"
        title="Agentes que actúan, no que conversan"
        lead="Un agente de Krypton tiene un trabajo concreto, acceso a las herramientas exactas para hacerlo y un límite claro de cuándo detenerse y llamar a una persona."
      />

      <Reveal className="mt-20">
        <div className="hidden grid-cols-[15rem_minmax(0,1fr)_minmax(0,0.85fr)] gap-10 border-b border-snow/25 pb-3 lg:grid">
          <span className="label text-silt">Agente</span>
          <span className="label text-silt">Qué hace</span>
          <span className="label text-silt">Cuándo entrega a una persona</span>
        </div>
        <ul>
          {agentRoles.map((agent) => (
            <li
              key={agent.id}
              className="group grid gap-4 border-b border-rule py-8 transition-colors duration-500 hover:bg-[#04101f]/35 lg:grid-cols-[15rem_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10"
            >
              <div>
                <h3 className="flex items-start gap-3 text-[1.2rem] font-semibold leading-snug text-snow">
                  <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full border border-lamp transition-colors duration-500 group-hover:bg-lamp" aria-hidden="true" />
                  {agent.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 pl-5 text-[0.85rem] leading-relaxed text-silt">
                  {agent.operatesOn.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <p className="max-w-[34rem] pl-5 text-[1rem] leading-relaxed text-snow/90 lg:pl-0">{agent.does}</p>
              <p className="max-w-[30rem] pl-5 text-[0.95rem] leading-relaxed text-silt lg:pl-0">{agent.handsOff}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-24 grid gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <h3 className="font-display text-[2.4rem] text-snow">Límites antes que demos</h3>
          <dl className="mt-8">
            {agentGuardrails.map((g) => (
              <div key={g.title} className="grid gap-1 border-t border-rule py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8">
                <dt className="font-medium text-snow">{g.title}</dt>
                <dd className="text-[0.98rem] leading-relaxed text-silt">{g.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-display text-[2.4rem] text-snow">Con qué los construimos</h3>
          <table className="mt-8 w-full border-collapse text-left">
            <caption className="sr-only">Stack de agentes de IA</caption>
            <tbody>
              {agentStack.map((row) => (
                <tr key={row.layer} className="border-t border-rule">
                  <th scope="row" className="label w-[9.5rem] py-5 align-top font-normal text-silt">
                    {row.layer}
                  </th>
                  <td className="py-5 text-[0.98rem] leading-relaxed text-snow">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </Container>
  </section>
);

/* ----------------------------------------------------------------------- */
/* 18 m — Reef: process automation                                        */
/* ----------------------------------------------------------------------- */

const ruleOrAgent = [
  {
    title: 'Flujo orquestado',
    when: [
      'La regla se puede escribir sin excepciones ambiguas.',
      'Los datos llegan estructurados: XML, API, base de datos.',
      'El costo de un error de interpretación es inaceptable.',
    ],
    examples: 'Envío de comprobantes al ente tributario, sincronización de inventario, conciliación bancaria por referencia.',
  },
  {
    title: 'Agente de IA',
    when: [
      'La entrada es un PDF, un correo, una foto o una conversación.',
      'Hace falta criterio, pero dentro de límites que se pueden auditar.',
      'La respuesta debe redactarse en lenguaje natural.',
    ],
    examples: 'Facturas de proveedores nuevos, reclamos de clientes, preparación de evidencia para auditoría.',
  },
];

export const AutomationSection: React.FC = () => (
  <section id="automatizacion" aria-labelledby="titulo-automatizacion" className="relative py-28 lg:py-40">
    <Container>
      <SectionHead
        stopId="automatizacion"
        titleId="titulo-automatizacion"
        title="Primero quitamos pasos. Después automatizamos."
        lead="Automatizar un proceso roto solo lo rompe más rápido. Empezamos por cómo trabaja hoy tu operación, con datos, y decidimos qué hace una regla, qué hace un agente y qué hace una persona."
      />

      <Reveal className="relative mt-20">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-rule lg:block" />
        <ol className="grid gap-12 lg:grid-cols-4 lg:gap-10">
          {automationSteps.map((s, i) => (
            <li key={s.verb} className="relative">
              <span className="relative z-10 flex h-[2.3rem] items-center">
                <span className="h-3 w-3 rounded-full border border-snow bg-[#0a2440]" aria-hidden="true" />
                <span className="data ml-3 text-[0.8rem] text-silt">paso {i + 1} de 4</span>
              </span>
              <h3 className="font-display mt-5 text-[2.7rem] text-snow">{s.verb}</h3>
              <p className="mt-4 max-w-[22rem] text-[0.98rem] leading-relaxed text-silt">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-28">
        <h3 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-snow">¿Regla o agente?</h3>
        <div className="mt-10 grid border-y border-rule lg:grid-cols-2">
          {ruleOrAgent.map((col, i) => (
            <div key={col.title} className={`py-10 ${i === 0 ? 'lg:pr-14' : 'border-t border-rule lg:border-l lg:border-t-0 lg:pl-14'}`}>
              <h4 className="flex items-center gap-3 text-[1.35rem] font-semibold text-snow">
                <span className={`h-2.5 w-2.5 rounded-full ${i === 0 ? 'border border-snow' : 'bg-lamp'}`} aria-hidden="true" />
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {col.when.map((w) => (
                  <li key={w} className="grid grid-cols-[1.2rem_minmax(0,1fr)] text-[1rem] leading-relaxed text-snow/90">
                    <span className="data text-silt" aria-hidden="true">—</span>
                    {w}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.95rem] leading-relaxed text-silt">
                <span className="text-snow">Por ejemplo: </span>
                {col.examples}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  </section>
);
