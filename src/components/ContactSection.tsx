import React, { useState } from 'react';
import { 
  Terminal, 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileCode,
  Lock
} from 'lucide-react';

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

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  requirements?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    serviceId: 'web',
    slaTarget: '99.98%',
    architecturePreference: 'microservices',
    requirements: '',
    ndaRequired: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico corporativo es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo electrónico corporativo válido.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa u organización es requerido.';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Describe brevemente el alcance técnico o arquitectura prevista.';
    } else if (formData.requirements.trim().length < 15) {
      newErrors.requirements = 'Por favor proporciona al menos 15 caracteres de contexto técnico.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceId: 'web',
      slaTarget: '99.98%',
      architecturePreference: 'microservices',
      requirements: '',
      ndaRequired: true,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#05060A] border-b border-[#0B0D14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (Blue Accent) */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-code text-[#00B8FF] tracking-wider uppercase">
            <span>08 / CONSULTORÍA TÉCNICA DIRECTA</span>
            <span aria-hidden="true" className="text-[#8A93A6]">·</span>
            <span className="text-[#8A93A6]">Sin Intermediarios Comerciales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F2F5FA] tracking-tight">
            Consulta Directa con un Lead Software Architect
          </h2>

          <p className="text-base sm:text-lg text-[#8A93A6] leading-relaxed">
            Evaluamos la viabilidad técnica, stack recomendado, contratos de SLA y presupuesto preliminar
            en un plazo máximo de 4 horas laborables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Guarantees & Technical Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-heading font-bold text-[#F2F5FA] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00B8FF]" />
                <span>Garantías de Trabajo Inmediatas</span>
              </h3>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F2F5FA] block mb-0.5">
                      Acuerdo de Confidencialidad (NDA) Previo
                    </span>
                    <span className="text-[#8A93A6]">
                      Firmamos NDA bilateral de mutua protección antes de revisar cualquier diagrama o código propietario.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F2F5FA] block mb-0.5">
                      Respuesta en &lt; 4 Horas Laborables
                    </span>
                    <span className="text-[#8A93A6]">
                      Tu solicitud es asignada directamente a un Arquitecto de Software Senior, no a un representante de ventas genérico.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCode className="w-4 h-4 text-[#00B8FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F2F5FA] block mb-0.5">
                      Propiedad Intelectual 100% del Cliente
                    </span>
                    <span className="text-[#8A93A6]">
                      Todo el código fuente, infraestructura IaC, artefactos Docker y documentación son propiedad exclusiva de tu empresa.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Technical Contacts */}
              <div className="pt-4 border-t border-[#1A1F2C] space-y-2 text-xs font-code">
                <div className="text-[#8A93A6]">Canales Directos de Ingeniería:</div>
                <div className="text-[#F2F5FA] flex items-center justify-between">
                  <span>Email de Arquitectura:</span>
                  <span className="text-[#00B8FF]">engineering@krypton.dev</span>
                </div>
                <div className="text-[#F2F5FA] flex items-center justify-between">
                  <span>Clave PGP Pública:</span>
                  <span className="text-[#8A93A6]">4A8F 9C21 ... 7E33</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Validated Form */}
          <div className="lg:col-span-7 bg-[#0B0D14] border border-[#1A1F2C] rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#00B8FF]/15 border border-[#00B8FF] rounded-full flex items-center justify-center mx-auto text-[#00B8FF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#F2F5FA]">
                  Solicitud Técnica Registrada
                </h3>
                <p className="text-sm text-[#8A93A6] max-w-md mx-auto leading-relaxed">
                  Hemos generado el ticket de arquitectura <span className="text-[#00B8FF] font-mono">#KRP-{(Math.random() * 89999 + 10000).toFixed(0)}</span>. Un Arquitecto de Sistemas revisará tus requerimientos y te contactará en menos de 4 horas laborables.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 px-6 py-2.5 bg-[#05060A] border border-[#1A1F2C] text-xs font-code text-[#F2F5FA] rounded hover:border-[#00B8FF] transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="block text-xs font-code text-[#F2F5FA]">
                      Nombre Completo *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className={`w-full px-3 py-2 bg-[#05060A] border rounded text-xs font-sans text-[#F2F5FA] placeholder-[#8A93A6] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#1A1F2C] focus:border-[#00B8FF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 font-sans">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-code text-[#F2F5FA]">
                      Correo Corporativo *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className={`w-full px-3 py-2 bg-[#05060A] border rounded text-xs font-sans text-[#F2F5FA] placeholder-[#8A93A6] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#1A1F2C] focus:border-[#00B8FF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 font-sans">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1">
                    <label htmlFor="company" className="block text-xs font-code text-[#F2F5FA]">
                      Empresa u Organización *
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Banco del Norte / Health Corp"
                      className={`w-full px-3 py-2 bg-[#05060A] border rounded text-xs font-sans text-[#F2F5FA] placeholder-[#8A93A6] focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500' : 'border-[#1A1F2C] focus:border-[#00B8FF]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-400 font-sans">{errors.company}</p>
                    )}
                  </div>

                  {/* Primary Service Discipline */}
                  <div className="space-y-1">
                    <label htmlFor="serviceId" className="block text-xs font-code text-[#F2F5FA]">
                      Disciplina Principal *
                    </label>
                    <select
                      id="serviceId"
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-3 py-2 bg-[#05060A] border border-[#1A1F2C] focus:border-[#00B8FF] rounded text-xs font-code text-[#F2F5FA] focus:outline-none transition-colors"
                    >
                      <option value="web">Sitios Web & Plataformas Digitales</option>
                      <option value="mobile">Aplicaciones Móviles React Native / Flutter</option>
                      <option value="enterprise">Software Empresarial & ERP/CRM</option>
                      <option value="invoicing">Facturación Electrónica & Integración Fiscal</option>
                      <option value="security">Ciberseguridad Ofensiva & Zero Trust</option>
                      <option value="health">Soluciones de Salud Digital (HL7 FHIR / HIPAA)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Architecture Preference */}
                  <div className="space-y-1">
                    <label htmlFor="architecturePreference" className="block text-xs font-code text-[#F2F5FA]">
                      Topología Preliminar Deseada
                    </label>
                    <select
                      id="architecturePreference"
                      value={formData.architecturePreference}
                      onChange={(e) => setFormData({ ...formData, architecturePreference: e.target.value })}
                      className="w-full px-3 py-2 bg-[#05060A] border border-[#1A1F2C] focus:border-[#00B8FF] rounded text-xs font-code text-[#F2F5FA] focus:outline-none transition-colors"
                    >
                      <option value="microservices">Microservicios Desacoplados</option>
                      <option value="modular-monolith">Monolito Modular (DDD)</option>
                      <option value="event-driven">Event-Driven (Kafka / RabbitMQ)</option>
                      <option value="serverless">Serverless & Edge Compute</option>
                      <option value="multi-tenant">Multi-Tenant SaaS Resiliente</option>
                      <option value="consult">A definir por el Arquitecto de Krypton</option>
                    </select>
                  </div>

                  {/* Target SLA */}
                  <div className="space-y-1">
                    <label htmlFor="slaTarget" className="block text-xs font-code text-[#F2F5FA]">
                      Objetivo de Disponibilidad (SLA)
                    </label>
                    <select
                      id="slaTarget"
                      value={formData.slaTarget}
                      onChange={(e) => setFormData({ ...formData, slaTarget: e.target.value })}
                      className="w-full px-3 py-2 bg-[#05060A] border border-[#1A1F2C] focus:border-[#00B8FF] rounded text-xs font-code text-[#F2F5FA] focus:outline-none transition-colors"
                    >
                      <option value="99.9%">99.9% (Estándar Web)</option>
                      <option value="99.98%">99.98% (Enterprise Core)</option>
                      <option value="99.995%">99.995% (Misión Crítica / Financiero)</option>
                    </select>
                  </div>
                </div>

                {/* Technical Requirements */}
                <div className="space-y-1">
                  <label htmlFor="requirements" className="block text-xs font-code text-[#F2F5FA]">
                    Descripción de Requerimientos Técnicos o Arquitectura Prevista *
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Describe los volúmenes de usuarios concurrentes esperados, integraciones de bases de datos, APIs de terceros o regulaciones específicas a cumplir..."
                    className={`w-full px-3 py-2 bg-[#05060A] border rounded text-xs font-sans text-[#F2F5FA] placeholder-[#8A93A6] focus:outline-none transition-colors ${
                      errors.requirements ? 'border-red-500' : 'border-[#1A1F2C] focus:border-[#00B8FF]'
                    }`}
                  />
                  {errors.requirements && (
                    <p className="text-[11px] text-red-400 font-sans">{errors.requirements}</p>
                  )}
                </div>

                {/* NDA Checkbox */}
                <div className="flex items-center gap-2.5">
                  <input
                    id="ndaRequired"
                    type="checkbox"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="w-4 h-4 rounded bg-[#05060A] border-[#1A1F2C] text-[#00B8FF] focus:ring-[#00B8FF]"
                  />
                  <label htmlFor="ndaRequired" className="text-xs text-[#8A93A6] cursor-pointer">
                    Requiero firma de Acuerdo de No Divulgación (NDA) antes de profundizar detalles técnicos.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#00B8FF] text-[#05060A] font-semibold text-sm rounded hover:bg-[#00B8FF]/90 transition-all shadow-[0_0_20px_rgba(0,184,255,0.3)] hover:shadow-[0_0_28px_rgba(0,184,255,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-[#05060A] border-t-transparent animate-spin" />
                      <span>Verificando y canalizando requerimientos...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Solicitar Diagnóstico de Arquitectura</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
