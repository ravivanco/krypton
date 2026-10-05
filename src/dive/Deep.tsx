import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { architecturesData } from '../data/architecturesData';
import { techStackData } from '../data/techStackData';
import { methodologySteps } from '../data/methodologyData';
import { Reveal, SectionHead } from './Chrome';
import { Container } from './Upper';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Spatial swap: the outgoing panel sinks into the murk, the next one surfaces. */
const panelMotion = {
  initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: easeOutExpo } },
  exit: { opacity: 0, y: -18, filter: 'blur(8px)', transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const } },
};

/** Roving-focus keyboard support for a tablist. */
function useTablist(count: number, onSelect: (i: number) => void, vertical: boolean) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const next = vertical ? 'ArrowDown' : 'ArrowRight';
    const prev = vertical ? 'ArrowUp' : 'ArrowLeft';
    let target = -1;
    if (e.key === next) target = (i + 1) % count;
    if (e.key === prev) target = (i - 1 + count) % count;
    if (e.key === 'Home') target = 0;
    if (e.key === 'End') target = count - 1;
    if (target >= 0) {
      e.preventDefault();
      onSelect(target);
      refs.current[target]?.focus();
    }
  };
  return { refs, onKeyDown };
}

const serviceShort: Record<string, string> = {
  web: 'Plataformas web',
  mobile: 'Apps móviles',
  enterprise: 'ERP y CRM',
  invoicing: 'Facturación electrónica',
  security: 'Ciberseguridad',
  health: 'Salud digital',
};

/* ----------------------------------------------------------------------- */
/* 40 m — Mesophotic wall: the systems agents operate on                  */
/* ----------------------------------------------------------------------- */

export const SystemsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const { refs, onKeyDown } = useTablist(servicesData.length, setActive, true);
  const service = servicesData[active];

  return (
    <section id="sistemas" aria-labelledby="titulo-sistemas" className="relative py-28 lg:py-40">
      <Container>
        <SectionHead
          stopId="sistemas"
          titleId="titulo-sistemas"
          title="Los sistemas donde trabajan tus agentes"
          lead="Un agente es tan confiable como el sistema que toca. Por eso también los ingeniamos: seis disciplinas de software crítico, con cumplimiento normativo desde el diseño."
        />

        <Reveal className="mt-20 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
          <div role="tablist" aria-orientation="vertical" aria-label="Disciplinas" className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {servicesData.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="panel-servicio"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative shrink-0 border px-4 py-3.5 text-left transition-colors duration-300 lg:border-x-0 lg:border-t-0 lg:px-0 lg:py-4 ${
                    selected ? 'border-thermo lg:border-rule' : 'border-rule hover:border-snow/40 lg:hover:border-rule'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="servicio-activo"
                      className="absolute -left-4 top-1/2 hidden h-8 w-[2px] -translate-y-1/2 bg-thermo lg:block"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                                    <span className={`whitespace-nowrap text-[1.02rem] font-medium transition-colors ${selected ? 'text-thermo' : 'text-snow group-hover:text-thermo'}`}>
                    {serviceShort[s.id]}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="panel-servicio"
            aria-labelledby={`tab-${service.id}`}
            tabIndex={0}
            className="min-h-[34rem] border border-rule bg-[#04101f]/55 p-6 backdrop-blur-sm sm:p-9"
          >
            <AnimatePresence mode="wait">
              <motion.div key={service.id} {...panelMotion}>
                <h3 className="text-[clamp(1.6rem,2.6vw,2.15rem)] font-semibold leading-tight text-snow">{service.name}</h3>
                <p className="mt-3 max-w-[44rem] text-[1rem] leading-relaxed text-silt">{service.tagline}</p>

                <div className="mt-9 grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
                  <div>
                    <h4 className="text-[1.08rem] font-semibold leading-snug text-snow">{service.problem.title}</h4>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-silt">{service.problem.summary}</p>

                    <h4 className="mt-9 text-[1.08rem] font-semibold text-snow">Qué entregamos</h4>
                    <ul className="mt-2">
                      {service.deliverables.map((d) => (
                        <li key={d.title} className="border-t border-rule py-4">
                          <p className="text-[0.98rem] font-medium leading-snug text-snow">{d.title}</p>
                          <p className="mt-1 text-[0.92rem] leading-relaxed text-silt">{d.description}</p>
                          <p className="data mt-2 text-[0.76rem] leading-relaxed text-snow/75">{d.specs.join('  ·  ')}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[1.08rem] font-semibold text-snow">Stack</h4>
                    <dl className="mt-2">
                      {service.stack.map((s) => (
                        <div key={s.category} className="border-t border-rule py-4">
                          <dt className="text-[0.88rem] text-silt">{s.category}</dt>
                          <dd className="mt-1 text-[0.95rem] leading-relaxed text-snow">{s.tools.join(', ')}</dd>
                        </div>
                      ))}
                    </dl>

                    <h4 className="mt-9 text-[1.08rem] font-semibold text-snow">Cumplimiento</h4>
                    <ul className="mt-2">
                      {service.compliance.map((c) => (
                        <li key={c.framework} className="border-t border-rule py-4">
                          <p className="text-[0.95rem] font-medium text-snow">{c.framework}</p>
                          <p className="mt-1 text-[0.88rem] leading-relaxed text-silt">{c.auditPoint}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

/* ----------------------------------------------------------------------- */
/* 52 m — Bed: architecture and stack                                     */
/* ----------------------------------------------------------------------- */

const stackCategories = ['Frontend', 'Backend', 'Móvil', 'Datos', 'Cloud/DevOps', 'Seguridad', 'QA'] as const;

export const ArchitectureSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const { refs, onKeyDown } = useTablist(architecturesData.length, setActive, false);
  const pattern = architecturesData[active];

  return (
    <section id="arquitectura" aria-labelledby="titulo-arquitectura" className="relative py-28 lg:py-40">
      <Container>
        <SectionHead
          stopId="arquitectura"
          titleId="titulo-arquitectura"
          title="Arquitectura elegida por el problema"
          lead="No hay una topología correcta para todo. Cada decisión queda escrita con sus costos, para que tu equipo sepa por qué el sistema es como es."
        />

        <Reveal className="mt-20">
          <div role="tablist" aria-label="Patrones de arquitectura" className="flex gap-x-8 overflow-x-auto border-b border-rule">
            {architecturesData.map((p, i) => {
              const selected = i === active;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={selected}
                  aria-controls="panel-arquitectura"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative shrink-0 whitespace-nowrap pb-4 pt-1 text-[1rem] font-medium transition-colors ${
                    selected ? 'text-thermo' : 'text-silt hover:text-snow'
                  }`}
                >
                  {p.title.replace(/\s*\(.*\)/, '')}
                  {selected && (
                    <motion.span
                      layoutId="patron-activo"
                      className="absolute inset-x-0 -bottom-px h-[2px] bg-thermo"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id="panel-arquitectura" aria-labelledby={`tab-${pattern.id}`} tabIndex={0} className="min-h-[24rem] pt-10">
            <AnimatePresence mode="wait">
              <motion.div key={pattern.id} {...panelMotion} className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                <div>
                  <p className="text-[1.3rem] font-medium leading-snug text-snow">{pattern.subtitle}</p>
                  <p className="mt-4 text-[1rem] leading-relaxed text-silt">{pattern.whenToUse}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-5">
                    <div>
                      <dt className="label text-silt">Objetivo SLA</dt>
                      <dd className="data mt-1.5 text-[1.6rem] text-snow">{pattern.slaTarget.replace(' Uptime', '')}</dd>
                    </div>
                    <div>
                      <dt className="label text-silt">Stack de referencia</dt>
                      <dd className="mt-1.5 text-[0.92rem] leading-relaxed text-snow">{pattern.sampleStack.join(', ')}</dd>
                    </div>
                  </dl>
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                  {(
                    [
                      ['A favor', pattern.tradeoffs.pros, '+'],
                      ['En contra', pattern.tradeoffs.cons, '−'],
                    ] as const
                  ).map(([label, items, mark]) => (
                    <div key={label}>
                      <h3 className="label text-silt">{label}</h3>
                      <ul className="mt-2">
                        {items.map((item) => (
                          <li key={item} className="grid grid-cols-[1.3rem_minmax(0,1fr)] border-t border-rule py-3.5 text-[0.95rem] leading-relaxed text-snow/90">
                            <span className="data text-silt" aria-hidden="true">{mark}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal className="mt-28">
          <h3 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-snow">Stack de ingeniería</h3>
          <table className="mt-8 w-full border-collapse text-left">
            <caption className="sr-only">Tecnologías por categoría</caption>
            <tbody>
              {stackCategories.map((cat) => (
                <tr key={cat} className="border-t border-rule">
                  <th scope="row" className="label w-[8rem] py-5 pr-6 align-top font-normal text-silt sm:w-[11rem]">
                    {cat}
                  </th>
                  <td className="py-4">
                    <ul className="flex flex-wrap gap-x-7 gap-y-2.5">
                      {techStackData
                        .filter((t) => t.category === cat)
                        .map((t) => (
                          <li key={t.name} className="text-[0.98rem] text-snow" title={t.keyUse}>
                            {t.name}
                            <span className="data ml-2 text-[0.74rem] text-silt">{t.version}</span>
                          </li>
                        ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
};

/* ----------------------------------------------------------------------- */
/* 60 m — Turnaround: method                                              */
/* ----------------------------------------------------------------------- */

export const MethodSection: React.FC = () => (
  <section id="metodo" aria-labelledby="titulo-metodo" className="relative py-28 lg:py-40">
    <Container>
      <SectionHead
        stopId="metodo"
        titleId="titulo-metodo"
        title="Cómo trabajamos a esta profundidad"
        lead="Cinco fases con una puerta de calidad cada una. Nada avanza a la siguiente sin cumplirla."
      />

      <ol className="relative mt-20">
        <span aria-hidden="true" className="absolute bottom-0 left-[0.3rem] top-0 hidden w-px bg-rule md:block" />
        {methodologySteps.map((step, i) => (
          <li key={step.phase}>
            <Reveal className="relative grid gap-6 border-t border-rule py-10 md:grid-cols-[13rem_minmax(0,1fr)_minmax(0,0.75fr)] md:gap-10 md:pl-10" delay={i * 0.04}>
              <span aria-hidden="true" className="absolute left-0 top-[2.85rem] hidden h-[0.65rem] w-[0.65rem] rounded-full border border-snow bg-[#040c1a] md:block" />
              <p className="data text-[0.85rem] leading-relaxed text-silt">{step.cadence}</p>
              <div>
                <h3 className="text-[1.35rem] font-semibold leading-snug text-snow">{step.name}</h3>
                <p className="mt-3 max-w-[38rem] text-[0.98rem] leading-relaxed text-silt">{step.description}</p>
                <details className="group mt-4">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-[0.92rem] font-medium text-snow underline decoration-rule underline-offset-4 transition-colors hover:text-thermo hover:decoration-thermo">
                    Actividades de la fase
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <ul className="mt-4 space-y-2.5">
                    {step.activities.map((a) => (
                      <li key={a} className="grid grid-cols-[1.2rem_minmax(0,1fr)] text-[0.93rem] leading-relaxed text-silt">
                        <span className="data" aria-hidden="true">—</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
              <dl className="space-y-5 text-[0.92rem] leading-relaxed">
                <div>
                  <dt className="label text-silt">Entregable</dt>
                  <dd className="mt-1.5 text-snow/90">{step.deliverableArtifact}</dd>
                </div>
                <div>
                  <dt className="label text-silt">Puerta de calidad</dt>
                  <dd className="mt-1.5 text-snow">{step.qualityGate}</dd>
                </div>
              </dl>
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/* ----------------------------------------------------------------------- */
/* 24 m — Ascent stop: results                                            */
/* ----------------------------------------------------------------------- */

export const ResultsSection: React.FC = () => (
  <section id="resultados" aria-labelledby="titulo-resultados" className="relative py-28 lg:py-40">
    <Container>
      <SectionHead
        stopId="resultados"
        titleId="titulo-resultados"
        title="Resultados medidos en producción"
        lead="Seis sistemas que operan hoy en empresas de la región. Cada cifra viene de su monitoreo en producción, no de una proyección."
      />

      <ul className="mt-20">
        {servicesData.map((s, i) => (
          <li key={s.id}>
            <Reveal className="grid gap-8 border-t border-rule py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14" delay={i * 0.03}>
              <div>
                <h3 className="text-[1.55rem] font-semibold leading-tight text-snow">{s.caseStudy.clientSector}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-silt">
                  <span className="text-snow">Antes: </span>
                  {s.caseStudy.challenge}
                </p>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-silt">
                  <span className="text-snow">Qué construimos: </span>
                  {s.caseStudy.solution}
                </p>
              </div>
              <dl className="grid grid-cols-2 content-start gap-x-8 gap-y-7 self-center sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {s.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="border-l border-rule pl-4">
                    <dt className="text-[0.82rem] leading-snug text-silt">{m.label}</dt>
                    <dd className="data mt-2 text-[1.25rem] leading-tight text-snow [overflow-wrap:anywhere]">{m.value.replace(' / ', '/')}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
