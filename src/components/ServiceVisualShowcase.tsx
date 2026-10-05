import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Receipt, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Database, 
  Zap, 
  Lock, 
  Radio, 
  CheckCircle2, 
  Wifi, 
  WifiOff 
} from 'lucide-react';

interface VisualProps {
  serviceId: string;
}

export const ServiceVisualShowcase: React.FC<VisualProps> = ({ serviceId }) => {
  // Web Showcase State
  const [ssrStreamProgress, setSsrStreamProgress] = useState(88);

  // Mobile Showcase State
  const [isOnline, setIsOnline] = useState(true);
  const [offlineQueueCount, setOfflineQueueCount] = useState(0);

  // Security Showcase State
  const [blockedThreats, setBlockedThreats] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlockedThreats((prev) => prev + Math.floor(Math.random() * 3));
      setSsrStreamProgress((prev) => (prev >= 100 ? 75 : prev + 5));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  /* ---------------- 1. WEB & PLATAFORMAS DIGITALES ---------------- */
  if (serviceId === 'web') {
    return (
      <div className="w-full bg-[#081126] border-2 border-[#00B8FF]/40 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,184,255,0.2)] font-code text-xs">
        {/* Browser Chrome Header */}
        <div className="bg-[#0B1838] border-b border-[#00B8FF]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-[#39FF14]" />
            <span className="text-[#00B8FF] text-[11px] ml-2 font-bold">NEXT.JS 15 EDGE RUNTIME</span>
          </div>
          <div className="bg-[#040915] px-4 py-1 rounded text-[#00B8FF] border border-[#00B8FF]/30 text-[11px] flex items-center gap-2">
            <Lock className="w-3 h-3 text-[#39FF14]" />
            <span>https://app.krypton-client.com</span>
          </div>
          <div className="text-[11px] text-[#39FF14] flex items-center gap-1 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
            <span>HTTP/3 QUIC</span>
          </div>
        </div>

        {/* Live Visual Canvas */}
        <div className="p-6 bg-gradient-to-b from-[#081126] via-[#0A1633] to-[#050C1C] space-y-6">
          {/* Top Metric Strip: Core Web Vitals in Full Color */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#0B1A3F] border border-[#00B8FF]/40 p-3 rounded-lg text-center shadow-lg">
              <span className="text-[10px] text-[#8A93A6] block uppercase">LCP (Render)</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">0.84 s</span>
              <span className="text-[9px] text-[#00B8FF] block mt-0.5 font-bold">100% ÓPTIMO</span>
            </div>
            <div className="bg-[#0B1A3F] border border-[#00B8FF]/40 p-3 rounded-lg text-center shadow-lg">
              <span className="text-[10px] text-[#8A93A6] block uppercase">CLS (Estabilidad)</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">0.00</span>
              <span className="text-[9px] text-[#00B8FF] block mt-0.5 font-bold">ZERO SHIFT</span>
            </div>
            <div className="bg-[#0B1A3F] border border-[#00B8FF]/40 p-3 rounded-lg text-center shadow-lg">
              <span className="text-[10px] text-[#8A93A6] block uppercase">INP (Interactividad)</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">14 ms</span>
              <span className="text-[9px] text-[#00B8FF] block mt-0.5 font-bold">INSTANTÁNEO</span>
            </div>
          </div>

          {/* Holographic Wireframe Viewport Preview */}
          <div className="bg-[#050A17] border border-[#00B8FF]/30 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between text-[#8A93A6] text-[11px]">
              <span className="text-[#00B8FF] font-bold">STREAMING SSR (REACT SERVER COMPONENTS)</span>
              <span className="text-[#39FF14]">{ssrStreamProgress}% Hidratado en Edge</span>
            </div>

            {/* Simulated Live Streaming Waterfall */}
            <div className="w-full bg-[#0E1E42] h-2.5 rounded-full overflow-hidden border border-[#00B8FF]/20">
              <div 
                className="bg-gradient-to-r from-[#00B8FF] to-[#39FF14] h-full transition-all duration-500"
                style={{ width: `${ssrStreamProgress}%` }}
              />
            </div>

            {/* Mock Layout Grid Blocks */}
            <div className="grid grid-cols-12 gap-2 pt-2">
              <div className="col-span-8 bg-[#0D204A]/60 border border-[#00B8FF]/30 p-3 rounded h-20 flex flex-col justify-between">
                <div className="w-3/4 h-2 bg-[#00B8FF]/50 rounded" />
                <div className="w-1/2 h-2 bg-[#8A93A6]/40 rounded" />
                <div className="flex gap-2">
                  <div className="w-16 h-4 bg-[#39FF14]/20 border border-[#39FF14] rounded" />
                  <div className="w-16 h-4 bg-[#00B8FF]/20 border border-[#00B8FF] rounded" />
                </div>
              </div>
              <div className="col-span-4 bg-[#0A183A]/60 border border-[#00B8FF]/30 p-2 rounded h-20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#00B8FF] flex items-center justify-center text-[#39FF14] animate-spin" style={{ animationDuration: '10s' }}>
                  <Globe className="w-6 h-6 text-[#00B8FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 2. APPS MÓVILES DE ALTO RENDIMIENTO ---------------- */
  if (serviceId === 'mobile') {
    return (
      <div className="w-full bg-[#051810] border-2 border-[#39FF14]/50 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.2)] font-code text-xs">
        {/* Device HUD Header */}
        <div className="bg-[#092B1C] border-b border-[#39FF14]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#39FF14]" />
            <span className="text-[#39FF14] font-bold">NATIVE ARCHITECTURE · FABRIC C++</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsOnline(!isOnline);
                if (isOnline) setOfflineQueueCount((c) => c + 3);
                else setOfflineQueueCount(0);
              }}
              className="px-2.5 py-1 bg-[#051810] border border-[#39FF14]/40 text-[#39FF14] hover:bg-[#39FF14]/20 rounded text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-[#39FF14]" />
                  <span>Simular Modo Offline</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-red-400" />
                  <span>Restaurar Conexión</span>
                </>
              )}
            </button>
          </div>
          <span className="text-[11px] text-[#00B8FF] font-bold">120 FPS FLUIDO</span>
        </div>

        {/* Dual Phone Showcase Canvas */}
        <div className="p-6 bg-gradient-to-b from-[#051810] via-[#092418] to-[#04120C] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Screen 1: App UI with WatermelonDB CRDT Sync */}
            <div className="bg-[#06150E] border border-[#39FF14]/40 rounded-2xl p-4 space-y-3 shadow-inner">
              <div className="flex justify-between items-center text-[10px] text-[#8A93A6] border-b border-[#39FF14]/20 pb-2">
                <span>09:41 · 5G</span>
                <span className={isOnline ? 'text-[#39FF14] font-bold' : 'text-amber-400 font-bold'}>
                  {isOnline ? 'EN LÍNEA (SYNC)' : 'OFFLINE-FIRST ACTIVO'}
                </span>
                <span>100% BAT</span>
              </div>

              {/* In-app Card */}
              <div className="bg-[#0B2E1E] p-3 rounded-lg border border-[#39FF14]/30 space-y-2">
                <div className="text-[11px] font-bold text-[#F2F5FA]">Orden de Despacho #7729</div>
                <div className="text-[10px] text-[#8A93A6]">Base Local: SQLite 0ms latency</div>
                <div className="flex justify-between items-center pt-1 border-t border-[#39FF14]/20">
                  <span className="text-[#39FF14] text-[10px]">Almacenamiento Criptográfico</span>
                  <span className="text-[#00B8FF] text-[10px] font-bold">IDEMPOTENTE</span>
                </div>
              </div>

              {/* Status Alert */}
              <div className="p-2.5 bg-[#030C07] rounded border border-[#39FF14]/30 flex items-center justify-between text-[10px]">
                <span className="text-[#8A93A6]">Cola de Mutaciones Locales:</span>
                <span className="text-[#39FF14] font-bold font-mono">{offlineQueueCount} pendientes</span>
              </div>
            </div>

            {/* Phone Screen 2: Real-time Telemetry & Crash-free rate */}
            <div className="bg-[#06150E] border border-[#39FF14]/40 rounded-2xl p-4 space-y-3 flex flex-col justify-between">
              <div className="text-[11px] font-bold text-[#39FF14] uppercase border-b border-[#39FF14]/20 pb-2">
                Telemetría Sentry & Crashlytics
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#8A93A6]">Crash-Free Users:</span>
                  <span className="text-[#39FF14] font-bold font-display">99.98%</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#8A93A6]">Cold Start Time:</span>
                  <span className="text-[#00B8FF] font-bold font-display">620 ms</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#8A93A6]">Pipeline CI/CD:</span>
                  <span className="text-[#39FF14] font-bold">Fastlane + EAS OK</span>
                </div>
              </div>

              <div className="p-2 bg-[#0C3020] rounded text-center text-[10px] text-[#39FF14] font-bold border border-[#39FF14]/30">
                Over-The-Air (OTA) Updates Activo
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 3. SOFTWARE EMPRESARIAL ERP/CRM ---------------- */
  if (serviceId === 'enterprise') {
    return (
      <div className="w-full bg-[#180A22] border-2 border-[#FF2BD6]/40 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,43,214,0.2)] font-code text-xs">
        {/* Enterprise Command Header */}
        <div className="bg-[#290E3B] border-b border-[#FF2BD6]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#FF2BD6]" />
            <span className="text-[#FF2BD6] font-bold">ENTERPRISE CLUSTER · KAFKA & POSTGRESQL HA</span>
          </div>
          <div className="text-[11px] text-[#00B8FF] font-bold">SLA: 99.995% UPTIME</div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 bg-gradient-to-b from-[#180A22] via-[#240C33] to-[#12051A] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#2C0E40] border border-[#FF2BD6]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Throughput Pico</span>
              <span className="text-xl font-bold font-display text-[#FF2BD6]">18,500 req/s</span>
              <span className="text-[9px] text-[#00B8FF] block mt-0.5">ACID COMPLIANT</span>
            </div>
            <div className="bg-[#2C0E40] border border-[#FF2BD6]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Ledger Inmutable</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">Audit 100%</span>
              <span className="text-[9px] text-[#39FF14] block mt-0.5">ZERO DISCREPANCIAS</span>
            </div>
            <div className="bg-[#2C0E40] border border-[#FF2BD6]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Latencia P99</span>
              <span className="text-xl font-bold font-display text-[#00B8FF]">28 ms</span>
              <span className="text-[9px] text-[#FF2BD6] block mt-0.5">REDIS CACHE CLUSTER</span>
            </div>
          </div>

          {/* Live Node Dataflow Graphic */}
          <div className="bg-[#12051C] border border-[#FF2BD6]/30 rounded-lg p-4 space-y-3">
            <div className="flex justify-between text-[#8A93A6] text-[11px]">
              <span className="text-[#FF2BD6] font-bold">TOPOLOGÍA EVENT-DRIVEN EN PRODUCCIÓN</span>
              <span className="text-[#39FF14]">Estado: Verde / Salud Óptima</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
              <div className="p-2.5 bg-[#2A0D3D] rounded border border-[#FF2BD6]/40 text-[#F2F5FA]">
                <div className="font-bold text-[#FF2BD6]">Kong Gateway</div>
                <div className="text-[9px] text-[#8A93A6]">mTLS Term</div>
              </div>
              <div className="p-2.5 bg-[#2A0D3D] rounded border border-[#FF2BD6]/40 text-[#F2F5FA]">
                <div className="font-bold text-[#00B8FF]">Orders Pods</div>
                <div className="text-[9px] text-[#8A93A6]">NestJS HPA</div>
              </div>
              <div className="p-2.5 bg-[#2A0D3D] rounded border border-[#39FF14]/40 text-[#F2F5FA]">
                <div className="font-bold text-[#39FF14]">Kafka Broker</div>
                <div className="text-[9px] text-[#8A93A6]">Zero-Loss Log</div>
              </div>
              <div className="p-2.5 bg-[#2A0D3D] rounded border border-[#FF2BD6]/40 text-[#F2F5FA]">
                <div className="font-bold text-[#FF2BD6]">Postgres HA</div>
                <div className="text-[9px] text-[#8A93A6]">Multi-AZ Sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 4. FACTURACIÓN ELECTRÓNICA Y FISCAL ---------------- */
  if (serviceId === 'invoicing') {
    return (
      <div className="w-full bg-[#180A22] border-2 border-[#FF2BD6]/40 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,43,214,0.2)] font-code text-xs">
        {/* Fiscal Engine Header */}
        <div className="bg-[#290E3B] border-b border-[#FF2BD6]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-[#FF2BD6]" />
            <span className="text-[#FF2BD6] font-bold">MOTOR CRIPTOGRÁFICO XML XAdES-BES & TIMBRADO</span>
          </div>
          <span className="text-[11px] text-[#39FF14] font-bold">HSM FIPS 140-2</span>
        </div>

        {/* Visual Fiscal Certificate Canvas */}
        <div className="p-6 bg-gradient-to-b from-[#180A22] via-[#240C33] to-[#12051A] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Live XML Signature Terminal */}
            <div className="bg-[#12051C] border border-[#FF2BD6]/30 rounded-lg p-4 space-y-2">
              <div className="text-[#FF2BD6] font-bold text-[11px] flex justify-between">
                <span>ESTRUCTURA XML FIRMADA</span>
                <span className="text-[#39FF14]">SHA-256 VALID</span>
              </div>
              <div className="p-2 bg-[#050208] rounded text-[#8A93A6] text-[10px] leading-relaxed overflow-x-auto font-mono">
                <code>&lt;Invoice xmlns="urn:oasis:names:specification:ubl..."&gt;</code><br />
                <code className="text-[#00B8FF]">  &lt;cbc:ID&gt;F001-00084920&lt;/cbc:ID&gt;</code><br />
                <code className="text-[#39FF14]">  &lt;ds:DigestValue&gt;8f9A...4B2e==&lt;/ds:DigestValue&gt;</code><br />
                <code className="text-[#FF2BD6]">  &lt;ds:SignatureValue&gt;k9L0...vX8P==&lt;/ds:SignatureValue&gt;</code><br />
                <code>&lt;/Invoice&gt;</code>
              </div>
            </div>

            {/* Invoicing Metrics */}
            <div className="bg-[#12051C] border border-[#FF2BD6]/30 rounded-lg p-4 space-y-3 flex flex-col justify-between">
              <div className="text-[#00B8FF] font-bold text-[11px]">
                CONECTORES FISCALES ACTIVOS
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#8A93A6]">SUNAT / SAT / DIAN:</span>
                  <span className="text-[#39FF14] font-bold">Respuesta &lt; 180ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A93A6]">Firma Criptográfica:</span>
                  <span className="text-[#FF2BD6] font-bold">28 ms / comprobante</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A93A6]">Modo Contingencia:</span>
                  <span className="text-[#39FF14] font-bold">100% Buffer RabbitMQ</span>
                </div>
              </div>

              <div className="p-2 bg-[#2D0F3F] text-center text-[#F2F5FA] rounded text-[10px] border border-[#FF2BD6]/30 font-bold">
                Cero Facturas Duplicadas Garantizado (UUID Idempotency)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 5. CIBERSEGURIDAD & ZERO TRUST ---------------- */
  if (serviceId === 'security') {
    return (
      <div className="w-full bg-[#051810] border-2 border-[#39FF14]/50 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.2)] font-code text-xs">
        {/* Cyber Threat Radar Header */}
        <div className="bg-[#092B1C] border-b border-[#39FF14]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
            <span className="text-[#39FF14] font-bold">ZERO TRUST MESH · mTLS & LIVE SIEM RADAR</span>
          </div>
          <span className="text-[11px] text-[#00B8FF] font-bold">ISO 27001 AUDITADO</span>
        </div>

        {/* Visual Threat Canvas */}
        <div className="p-6 bg-gradient-to-b from-[#051810] via-[#092418] to-[#04120C] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#0A2619] border border-[#39FF14]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Ataques Mitigados</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">
                {blockedThreats.toLocaleString()}
              </span>
              <span className="text-[9px] text-[#00B8FF] block mt-0.5">WAF & DDoS L7</span>
            </div>
            <div className="bg-[#0A2619] border border-[#39FF14]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Rotación Secretos</span>
              <span className="text-xl font-bold font-display text-[#00B8FF]">15 min TTL</span>
              <span className="text-[9px] text-[#39FF14] block mt-0.5">HASHICORP VAULT</span>
            </div>
            <div className="bg-[#0A2619] border border-[#39FF14]/30 p-3 rounded-lg text-center">
              <span className="text-[10px] text-[#8A93A6] block uppercase">Pipeline SAST/DAST</span>
              <span className="text-xl font-bold font-display text-[#39FF14]">0 CVEs</span>
              <span className="text-[9px] text-[#39FF14] block mt-0.5">SONARQUBE PASS</span>
            </div>
          </div>

          {/* Interactive Security Radar Grid */}
          <div className="bg-[#040E0A] border border-[#39FF14]/30 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-[#39FF14] font-bold">RADAR DE AMENAZAS EN TIEMPO REAL (WAZUH & FALCO)</span>
              <span className="text-[#00B8FF]">Escaneo de Kernel eBPF: OK</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 bg-[#081F14] rounded border border-[#39FF14]/30 text-[#F2F5FA]">
                <div className="text-[#39FF14] font-bold">SQL Injection Shield</div>
                <div className="text-[#8A93A6]">100% Consultas Parametrizadas</div>
              </div>
              <div className="p-2.5 bg-[#081F14] rounded border border-[#39FF14]/30 text-[#F2F5FA]">
                <div className="text-[#00B8FF] font-bold">Identity & RBAC</div>
                <div className="text-[#8A93A6]">OIDC / PKCE con MFA Forzado</div>
              </div>
              <div className="p-2.5 bg-[#081F14] rounded border border-[#39FF14]/30 text-[#F2F5FA]">
                <div className="text-[#39FF14] font-bold">Cifrado de Extremo a Extremo</div>
                <div className="text-[#8A93A6]">AES-256 en Reposo + TLS 1.3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 6. SALUD DIGITAL (HEALTHTECH) ---------------- */
  return (
    <div className="w-full bg-[#081126] border-2 border-[#00B8FF]/40 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,184,255,0.2)] font-code text-xs">
      {/* Health Tech HUD Header */}
      <div className="bg-[#0B1838] border-b border-[#00B8FF]/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#00B8FF]" />
          <span className="text-[#00B8FF] font-bold">HL7 FHIR R4 SERVER · DICOM WEB PACS · HIPAA CERT</span>
        </div>
        <span className="text-[11px] text-[#39FF14] font-bold">2.4M REGISTROS FEDERADOS</span>
      </div>

      {/* Visual Clinical Canvas */}
      <div className="p-6 bg-gradient-to-b from-[#081126] via-[#0A1633] to-[#050C1C] space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* EHR Clinical Record Telemetry */}
          <div className="bg-[#050A17] border border-[#00B8FF]/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center text-[#00B8FF] text-[11px] font-bold">
              <span>FICHA CLÍNICA ELECTRÓNICA (FHIR)</span>
              <span className="text-[#39FF14]">DISOCIACIÓN PII OK</span>
            </div>
            <div className="space-y-1.5 text-[10px] text-[#8A93A6]">
              <div className="flex justify-between p-1.5 bg-[#0B1A3F] rounded border border-[#00B8FF]/20">
                <span>Recurso FHIR:</span>
                <span className="text-[#F2F5FA] font-bold">Patient / Encounter / Observation</span>
              </div>
              <div className="flex justify-between p-1.5 bg-[#0B1A3F] rounded border border-[#00B8FF]/20">
                <span>Firma Médica Digital:</span>
                <span className="text-[#39FF14] font-bold">PKI Token Verificado</span>
              </div>
              <div className="flex justify-between p-1.5 bg-[#0B1A3F] rounded border border-[#00B8FF]/20">
                <span>Historial de Auditoría:</span>
                <span className="text-[#00B8FF] font-bold">AuditEvent Inmutable</span>
              </div>
            </div>
          </div>

          {/* DICOM Web Radiological Viewer Preview */}
          <div className="bg-[#050A17] border border-[#00B8FF]/30 rounded-lg p-4 space-y-2 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[#39FF14] text-[11px] font-bold">
              <span>VISOR DICOM WEB (WADO-RS)</span>
              <span className="text-[#00B8FF]">60 FPS CORNERSTONE3D</span>
            </div>

            {/* Simulated Medical Scan Graphic */}
            <div className="h-20 bg-[#091530] border border-[#00B8FF]/20 rounded flex items-center justify-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full border border-[#00B8FF] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-dashed border-[#39FF14] animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="absolute bottom-1 right-2 text-[9px] text-[#39FF14]">
                Resonancia 3D: 512x512
              </div>
            </div>

            <div className="text-[10px] text-[#8A93A6] text-center">
              Cero almacenamiento de datos de salud en cliente (Zero Client PHI Leak)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
