import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUp, Check } from 'lucide-react';
import { Reveal, SectionHead } from './Chrome';
import { Container } from './Upper';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface FormData {
  fullName: string;
  email: string;
  company: string;
  serviceId: string;
  slaTarget: string;
  architecturePreference: string;
  requirements: string;
  ndaRequired: boolean;
}

type FormErrors = Partial<Record<'fullName' | 'email' | 'company' | 'requirements', string>>;

const emptyForm: FormData = {
  fullName: '',
  email: '',
  company: '',
  serviceId: 'agents',
  slaTarget: '99.98%',
  architecturePreference: 'consult',
  requirements: '',
  ndaRequired: true,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Escribe tu nombre completo.';
  else if (data.fullName.trim().length < 3) errors.fullName = 'El nombre debe tener al menos 3 caracteres.';

  if (!data.email.trim()) errors.email = 'Necesitamos un correo corporativo para responderte.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Revisa el formato del correo: nombre@empresa.com';

  if (!data.company.trim()) errors.company = 'Indica tu empresa u organización.';

  if (!data.requirements.trim()) errors.requirements = 'Cuéntanos brevemente qué proceso o sistema quieres abordar.';
  else if (data.requirements.trim().length < 15) errors.requirements = 'Agrega un poco más de contexto (mínimo 15 caracteres).';
  return errors;
}

const Field: React.FC<{
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, label, error, children, className = '' }) => (
  <div className={className}>
    <label htmlFor={id} className="mb-2 block text-[0.9rem] font-medium text-snow">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-[0.85rem] text-alarm"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeOutExpo }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const guarantees = [
  ['NDA antes de ver tu código', 'Firmamos un acuerdo de confidencialidad bilateral antes de revisar diagramas, datos o código propietario.'],
  ['Respuesta en menos de 4 horas laborables', 'Tu solicitud llega directo a un arquitecto de software senior, no a un representante de ventas.'],
  ['La propiedad intelectual es tuya', 'Código fuente, infraestructura como código y documentación quedan 100 % en tu empresa.'],
];

/* ----------------------------------------------------------------------- */
/* 0 m — Surface: contact                                                 */
/* ----------------------------------------------------------------------- */

export const ContactSection: React.FC = () => {
  const [data, setData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [ticket, setTicket] = useState<string | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key as keyof FormErrors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setTicket(`KRP-${Math.floor(Math.random() * 89999 + 10000)}`);
    }, 900);
  };

  const reset = () => {
    setData(emptyForm);
    setErrors({});
    setTicket(null);
  };

  const describedBy = (id: keyof FormErrors) => (errors[id] ? `${id}-error` : undefined);

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="relative py-28 lg:py-40">
      <div className="thermocline absolute inset-x-0 top-0" aria-hidden="true" />
      <Container>
        <SectionHead
          stopId="contacto"
          titleId="titulo-contacto"
          title="Planifica tu inmersión"
          lead="Cuéntanos qué proceso quieres que deje de depender de personas copiando datos entre sistemas. Un arquitecto evalúa viabilidad, stack, SLA y presupuesto preliminar."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal>
            <dl>
              {guarantees.map(([title, detail]) => (
                <div key={title} className="border-t border-rule py-6">
                  <dt className="flex items-center gap-3 text-[1.08rem] font-medium text-snow">
                    <Check className="h-4 w-4 shrink-0 text-silt" aria-hidden="true" />
                    {title}
                  </dt>
                  <dd className="mt-2 pl-7 text-[0.95rem] leading-relaxed text-silt">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-rule pt-6">
              <p className="text-[0.9rem] text-silt">O escribe directo al equipo de arquitectura</p>
              <a
                href="mailto:engineering@krypton.dev"
                className="data mt-1 inline-block text-[1.05rem] text-snow underline decoration-rule underline-offset-4 transition-colors hover:text-thermo hover:decoration-thermo"
              >
                engineering@krypton.dev
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-rule bg-[#04101f]/62 p-6 backdrop-blur-sm sm:p-10">
              <AnimatePresence mode="wait">
                {ticket ? (
                  <motion.div
                    key="ok"
                    className="py-10"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: easeOutExpo }}
                    role="status"
                  >
                    <p className="label text-silt">Solicitud registrada</p>
                    <p className="data mt-3 text-[2.4rem] leading-none text-thermo">{ticket}</p>
                    <p className="mt-6 max-w-[30rem] text-[1rem] leading-relaxed text-silt">
                      Un arquitecto de software revisará tu caso y te escribirá a <span className="text-snow">{data.email}</span> en menos de 4 horas laborables.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 border border-snow/40 px-5 py-3 text-[0.95rem] font-medium text-snow transition-colors hover:border-thermo hover:text-thermo"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-6 sm:grid-cols-2"
                    exit={{ opacity: 0, filter: 'blur(6px)', transition: { duration: 0.25 } }}
                  >
                    <Field id="fullName" label="Nombre completo" error={errors.fullName}>
                      <input
                        id="fullName"
                        className="field"
                        autoComplete="name"
                        value={data.fullName}
                        onChange={(e) => set('fullName', e.target.value)}
                        placeholder="Ej. Carla Mendoza"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={describedBy('fullName')}
                      />
                    </Field>
                    <Field id="email" label="Correo corporativo" error={errors.email}>
                      <input
                        id="email"
                        type="email"
                        className="field"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="nombre@empresa.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={describedBy('email')}
                      />
                    </Field>
                    <Field id="company" label="Empresa u organización" error={errors.company}>
                      <input
                        id="company"
                        className="field"
                        autoComplete="organization"
                        value={data.company}
                        onChange={(e) => set('company', e.target.value)}
                        placeholder="Ej. Distribuidora del Pacífico"
                        aria-invalid={!!errors.company}
                        aria-describedby={describedBy('company')}
                      />
                    </Field>
                    <Field id="serviceId" label="¿Qué quieres resolver?">
                      <select id="serviceId" className="field" value={data.serviceId} onChange={(e) => set('serviceId', e.target.value)}>
                        <option value="agents">Agentes de IA</option>
                        <option value="automation">Automatización de procesos</option>
                        <option value="web">Plataformas web</option>
                        <option value="mobile">Apps móviles</option>
                        <option value="enterprise">ERP y CRM</option>
                        <option value="invoicing">Facturación electrónica</option>
                        <option value="security">Ciberseguridad y cumplimiento</option>
                        <option value="health">Salud digital (HL7 FHIR / HIPAA)</option>
                      </select>
                    </Field>
                    <Field id="architecturePreference" label="Topología preliminar">
                      <select
                        id="architecturePreference"
                        className="field"
                        value={data.architecturePreference}
                        onChange={(e) => set('architecturePreference', e.target.value)}
                      >
                        <option value="consult">La define el arquitecto</option>
                        <option value="modular-monolith">Monolito modular</option>
                        <option value="microservices">Microservicios</option>
                        <option value="event-driven">Guiada por eventos</option>
                        <option value="serverless">Serverless y edge</option>
                        <option value="multi-tenant">Multi-tenant SaaS</option>
                      </select>
                    </Field>
                    <Field id="slaTarget" label="Disponibilidad objetivo">
                      <select id="slaTarget" className="field" value={data.slaTarget} onChange={(e) => set('slaTarget', e.target.value)}>
                        <option value="99.9%">99.9 % · web</option>
                        <option value="99.98%">99.98 % · empresarial</option>
                        <option value="99.995%">99.995 % · misión crítica</option>
                      </select>
                    </Field>
                    <Field id="requirements" label="El proceso o sistema" error={errors.requirements} className="sm:col-span-2">
                      <textarea
                        id="requirements"
                        rows={5}
                        className="field resize-y"
                        value={data.requirements}
                        onChange={(e) => set('requirements', e.target.value)}
                        placeholder="Ej. Recibimos 3.000 facturas de proveedores al mes por correo y tres personas las registran a mano en SAP…"
                        aria-invalid={!!errors.requirements}
                        aria-describedby={describedBy('requirements')}
                      />
                    </Field>
                    <label htmlFor="ndaRequired" className="flex cursor-pointer items-start gap-3 text-[0.93rem] leading-relaxed text-silt sm:col-span-2">
                      <input
                        id="ndaRequired"
                        type="checkbox"
                        checked={data.ndaRequired}
                        onChange={(e) => set('ndaRequired', e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#3fd8e8]"
                      />
                      Necesito firmar un NDA antes de compartir detalles técnicos.
                    </label>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex items-center justify-between gap-4 bg-thermo px-6 py-4 text-[1rem] font-semibold text-[#04121f] transition-colors duration-300 hover:bg-[#7ae6f0] disabled:cursor-wait disabled:bg-thermo-deep sm:col-span-2"
                    >
                      {submitting ? 'Enviando a un arquitecto…' : 'Solicitar diagnóstico'}
                      {submitting ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#04121f] border-t-transparent" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------------------------------------------------- */
/* Surface log: footer                                                    */
/* ----------------------------------------------------------------------- */

const footerLinks = [
  ['#agentes', 'Agentes IA'],
  ['#automatizacion', 'Automatización'],
  ['#sistemas', 'Sistemas'],
  ['#arquitectura', 'Arquitectura'],
  ['#metodo', 'Método'],
  ['#resultados', 'Resultados'],
];

export const SiteFooter: React.FC = () => (
  <footer className="relative border-t border-rule bg-[#04101f]/70 backdrop-blur-sm">
    <Container className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <p className="font-display text-[3.4rem] leading-none tracking-[0.03em] text-snow">Krypton</p>
        <p className="label mt-2 text-silt">Atomic Software Factory</p>
        <p className="mt-6 max-w-[24rem] text-[0.95rem] leading-relaxed text-silt">
          Agentes de IA y automatización sobre ingeniería de misión crítica. Santiago · Bogotá · Ciudad de México.
        </p>
      </div>
      <nav aria-label="Pie de página">
        <p className="label text-silt">Recorrido</p>
        <ul className="mt-4 space-y-2.5 text-[0.95rem]">
          {footerLinks.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-snow transition-colors hover:text-thermo">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="label text-silt">Acreditación</p>
        <ul className="mt-4 space-y-2.5 text-[0.95rem] text-snow">
          <li>ISO/IEC 27001:2022</li>
          <li>HIPAA · HL7 FHIR</li>
          <li>SOC 2 Type II Ready</li>
          <li>WCAG 2.2 AA</li>
        </ul>
      </div>
    </Container>
    <Container className="flex flex-col gap-4 border-t border-rule py-6 text-[0.85rem] text-silt sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Krypton Atomic Software Factory</p>
      <a href="#inicio" className="inline-flex items-center gap-2 text-snow transition-colors hover:text-thermo">
        Volver a la superficie
        <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </Container>
  </footer>
);
