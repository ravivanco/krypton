import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUp, ArrowRight, Menu, X } from 'lucide-react';
import { diveStops, formatDepth } from './depth';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/* ----------------------------------------------------------------------- */
/* Depth readout: a number with mass. It springs toward the target depth.  */
/* ----------------------------------------------------------------------- */

const DepthNumber: React.FC<{ depth: number; className?: string }> = ({ depth, className }) => {
  const raw = useMotionValue(depth);
  const sprung = useSpring(raw, { stiffness: 90, damping: 16, mass: 0.9 });
  const text = useTransform(sprung, (v) => formatDepth(Math.max(0, v)));
  useEffect(() => raw.set(depth), [depth, raw]);
  return <motion.span className={className}>{text}</motion.span>;
};

const Wordmark: React.FC = () => (
  <a href="#inicio" className="group block focus-visible:outline-offset-4" aria-label="Krypton, volver a la superficie">
    <span className="font-display block text-[1.9rem] leading-none tracking-[0.04em] text-snow">Krypton</span>
    <span className="label mt-1.5 block text-[0.62rem] text-silt">Atomic Software Factory</span>
  </a>
);

interface RailProps {
  depth: number;
  stopIndex: number;
  descending: boolean;
}

/* ----------------------------------------------------------------------- */
/* Desktop: the dive profile is the navigation.                            */
/* ----------------------------------------------------------------------- */

export const DiveRail: React.FC<RailProps> = ({ depth, stopIndex, descending }) => (
  <aside
    className="fixed inset-y-0 left-0 z-40 hidden w-[17rem] flex-col border-r border-rule/80 bg-[#04101f]/72 backdrop-blur-md lg:flex"
    aria-label="Perfil de inmersión"
  >
    <div className="border-b border-rule/80 px-7 pb-6 pt-7">
      <Wordmark />
    </div>

    <div className="flex items-baseline justify-between px-7 pb-3 pt-6">
      <span className="label text-silt">Perfil de inmersión</span>
      <span className="label text-murk">m</span>
    </div>

    <nav className="relative flex-1 overflow-y-auto px-7">
      <span aria-hidden="true" className="absolute bottom-4 left-[2.06rem] top-3 w-px bg-rule" />
      <ol className="relative space-y-0.5">
        {diveStops.map((stop, i) => {
          const active = i === stopIndex;
          const passed = i < stopIndex;
          return (
            <li key={stop.id}>
              <a
                href={`#${stop.id}`}
                aria-current={active ? 'location' : undefined}
                className="group flex items-start gap-4 py-2.5 outline-offset-2"
              >
                <span className="relative mt-[0.38rem] flex h-3 w-3 shrink-0 items-center justify-center">
                  <span
                    className={`h-2.5 w-2.5 rounded-full border transition-all duration-500 ${
                      active
                        ? 'scale-125 border-thermo bg-thermo shadow-[0_0_0_4px_rgba(63,216,232,0.18)]'
                        : passed
                          ? 'border-silt bg-silt'
                          : 'border-murk bg-[#04101f] group-hover:border-snow'
                    }`}
                  />
                </span>
                <span className="data w-7 shrink-0 pt-px text-[0.8rem] text-murk transition-colors group-hover:text-silt">
                  {String(stop.depth).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-[0.92rem] font-medium leading-tight transition-colors ${
                      active ? 'text-thermo' : 'text-snow group-hover:text-thermo'
                    }`}
                  >
                    {stop.label}
                  </span>
                  <span className="mt-0.5 block text-[0.76rem] leading-tight text-murk">{stop.zone}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>

    <div className="border-t border-rule/80 px-7 pb-7 pt-5">
      <div className="flex items-center justify-between">
        <span className="label text-silt">Profundidad</span>
        <span className="label flex items-center gap-1.5 text-silt">
          {descending ? <ArrowDown className="h-3 w-3" aria-hidden="true" /> : <ArrowUp className="h-3 w-3" aria-hidden="true" />}
          {descending ? 'Descenso' : 'Ascenso'}
        </span>
      </div>
      <p className="mt-1 flex items-baseline gap-1.5 text-thermo">
        <DepthNumber depth={depth} className="data text-[2.6rem] font-medium leading-none tracking-tight" />
        <span className="data text-base">m</span>
      </p>
      <a
        href="#contacto"
        className="mt-5 flex items-center justify-between gap-3 bg-thermo px-4 py-3 text-[0.9rem] font-semibold text-[#04121f] transition-[background-color,transform] duration-300 hover:bg-[#7ae6f0] active:translate-y-px"
      >
        Agendar diagnóstico
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </aside>
);

/* ----------------------------------------------------------------------- */
/* Mobile: compact gauge bar + sheet with the same profile.                */
/* ----------------------------------------------------------------------- */

export const MobileBar: React.FC<RailProps> = ({ depth, stopIndex }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-rule/80 bg-[#04101f]/80 px-4 backdrop-blur-md lg:hidden">
        <a href="#inicio" className="font-display text-[1.6rem] tracking-[0.04em] text-snow" aria-label="Krypton, inicio">
          Krypton
        </a>
        <div className="flex items-center gap-3">
          <p className="flex items-baseline gap-1 text-thermo">
            <DepthNumber depth={depth} className="data text-lg font-medium" />
            <span className="data text-xs">m</span>
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="perfil-movil"
            className="flex h-11 w-11 items-center justify-center border border-rule text-snow"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Abrir perfil de inmersión</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="perfil-movil"
            role="dialog"
            aria-modal="true"
            aria-label="Perfil de inmersión"
            className="fixed inset-0 z-50 flex flex-col bg-[#04101f]/96 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
          >
            <div className="flex h-16 items-center justify-between border-b border-rule px-4">
              <span className="label text-silt">Perfil de inmersión</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-rule text-snow"
                autoFocus
              >
                <X className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Cerrar</span>
              </button>
            </div>
            <ol className="flex-1 overflow-y-auto px-5 py-4">
              {diveStops.map((stop, i) => (
                <li key={stop.id} className="border-b border-rule/70">
                  <a
                    href={`#${stop.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                    aria-current={i === stopIndex ? 'location' : undefined}
                  >
                    <span className="data w-8 text-sm text-murk">{String(stop.depth).padStart(2, '0')}</span>
                    <span className={`text-xl font-medium ${i === stopIndex ? 'text-thermo' : 'text-snow'}`}>{stop.label}</span>
                    <span className="ml-auto text-sm text-murk">{stop.zone}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="p-5">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between bg-thermo px-5 py-4 font-semibold text-[#04121f]"
              >
                Hablar con un arquitecto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ----------------------------------------------------------------------- */
/* Lamp reveal: content resolves out of the murk as it enters the light.   */
/* ----------------------------------------------------------------------- */

export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0.2, filter: 'blur(10px)', y: 28 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 1.1, delay, ease: easeOutExpo }}
  >
    {children}
  </motion.div>
);

/* ----------------------------------------------------------------------- */
/* Section heading: the headline with its depth reading beside it.        */
/* ----------------------------------------------------------------------- */

export const SectionHead: React.FC<{
  stopId: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  titleId: string;
}> = ({ stopId, title, lead, titleId }) => {
  const stop = diveStops.find((s) => s.id === stopId)!;
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <div className="max-w-[46rem]">
        <h2 id={titleId} className="font-display text-[clamp(2.75rem,6.4vw,5.6rem)] text-snow">
          {title}
        </h2>
        {lead && <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-relaxed text-silt">{lead}</p>}
      </div>
      <p className="flex items-baseline gap-3 border-t border-rule pt-3 lg:min-w-[12rem] lg:flex-col lg:items-end lg:gap-1 lg:border-t-0 lg:pt-0">
        <span className="data text-[1.6rem] leading-none text-snow">
          {formatDepth(stop.depth)}
          <span className="ml-1 text-sm text-silt">m</span>
        </span>
        <span className="label text-silt">{stop.zone}</span>
      </p>
    </Reveal>
  );
};
