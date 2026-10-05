import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TechBrandIcons: Record<string, React.FC<IconProps>> = {
  'Next.js 15 (App Router)': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <circle cx="90" cy="90" r="88" stroke="#00B8FF" strokeWidth="3" />
      <path
        d="M149.508 157.08L69.142 54H54V125.97H66.6236V69.9678L139.957 164.444C143.327 162.203 146.527 159.736 149.508 157.08Z"
        fill="url(#paint0_linear_next)"
      />
      <rect x="115" y="54" width="13" height="72" fill="url(#paint1_linear_next)" />
      <defs>
        <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2F5FA" />
          <stop offset="1" stopColor="#00B8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_next" x1="121.5" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2F5FA" />
          <stop offset="1" stopColor="#00B8FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  'React 19': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#00B8FF" />
      <g stroke="#00B8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  'TypeScript': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="16" fill="#007ACC" />
      <path d="M70.5 73.5H84.2C85.4 73.5 86.4 73.8 87.2 74.4C88 75 88.6 75.9 88.9 77C89.3 78.1 89.4 79.4 89.4 80.8C89.4 82.8 89.1 84.4 88.4 85.7C87.7 87 86.7 88 85.3 88.6C83.9 89.3 82.2 89.6 80.2 89.6C77.4 89.6 75 89 73 87.8V79.8C74.6 81.4 76.7 82.2 79.1 82.2C80.3 82.2 81.2 82 81.7 81.6C82.3 81.2 82.6 80.6 82.6 79.9C82.6 79.3 82.3 78.8 81.8 78.5C81.3 78.2 80.3 78 78.9 77.8C75.8 77.5 73.7 76.8 72.4 75.8C71.1 74.7 70.5 73.2 70.5 71.2C70.5 69.3 71.1 67.8 72.3 66.7C73.5 65.5 75.1 64.7 77.2 64.3C79.3 63.8 81.6 63.6 84.1 63.6C86.7 63.6 88.9 64.1 90.9 65.1L88.2 71.9C86.6 70.8 85 70.3 83.3 70.3C82.1 70.3 81.3 70.5 80.7 70.9C80.2 71.2 79.9 71.7 79.9 72.3C79.9 72.9 80.2 73.4 80.8 73.7C81.4 74 82.5 74.3 84.1 74.5L70.5 73.5ZM38.4 64.4H63.6V71.8H54.4V102H47.6V71.8H38.4V64.4Z" fill="#F2F5FA" />
    </svg>
  ),

  'Tailwind CSS v4': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 54 33" className={className} fill="#00B8FF">
      <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
  ),

  'Three.js & WebGL': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className} fill="#39FF14">
      <path d="M64 8L16 112L112 112L64 8ZM64 36L92 96L36 96L64 36Z" />
    </svg>
  ),

  'Node.js / NestJS': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="64,8 116,38 116,90 64,120 12,90 12,38" fill="#39FF14" fillOpacity="0.2" stroke="#39FF14" strokeWidth="6" />
      <text x="64" y="74" fill="#39FF14" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NODE</text>
    </svg>
  ),

  'Java 21 Spring Boot 3': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="56" fill="#0B1528" stroke="#39FF14" strokeWidth="4" />
      <path d="M40 85C42 55 60 40 88 38C88 65 72 85 40 85Z" fill="#39FF14" />
      <path d="M40 85L88 38" stroke="#05060A" strokeWidth="4" />
    </svg>
  ),

  'Go (Golang)': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="56" fill="#00B8FF" fillOpacity="0.2" stroke="#00B8FF" strokeWidth="4" />
      <text x="64" y="76" fill="#00B8FF" fontSize="40" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">GO</text>
    </svg>
  ),

  '.NET 9 Core': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect x="16" y="16" width="96" height="96" rx="20" fill="#0B1528" stroke="#00B8FF" strokeWidth="4" />
      <text x="64" y="74" fill="#00B8FF" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">.NET</text>
    </svg>
  ),

  'React Native': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect x="28" y="12" width="72" height="104" rx="16" fill="#070B16" stroke="#39FF14" strokeWidth="4" />
      <ellipse cx="64" cy="64" rx="24" ry="10" stroke="#39FF14" strokeWidth="2.5" fill="none" transform="rotate(30 64 64)" />
      <ellipse cx="64" cy="64" rx="24" ry="10" stroke="#39FF14" strokeWidth="2.5" fill="none" transform="rotate(-30 64 64)" />
      <circle cx="64" cy="64" r="4" fill="#39FF14" />
    </svg>
  ),

  'Flutter': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <path d="M78 8L20 66L42 88L112 18L78 8Z" fill="#00B8FF" />
      <path d="M74 74L46 102L68 124L118 74H74Z" fill="#39FF14" />
    </svg>
  ),

  'Swift & SwiftUI': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="56" fill="#0B132B" stroke="#00B8FF" strokeWidth="4" />
      <path d="M96 88C78 94 48 84 32 52C48 66 68 70 82 66C52 50 62 26 62 26C62 26 78 46 96 46C102 46 106 44 106 44C106 44 100 58 84 66C98 68 106 64 106 64C106 64 102 78 96 88Z" fill="#00B8FF" />
    </svg>
  ),

  'Kotlin & Jetpack Compose': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="120,8 64,8 8,64 64,120 120,120 64,64" fill="#39FF14" />
      <polygon points="8,8 64,8 8,64" fill="#00B8FF" />
    </svg>
  ),

  'PostgreSQL': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0E1B38" stroke="#00B8FF" strokeWidth="4" />
      <path d="M44 48C44 38 52 30 64 30C76 30 84 38 84 48V80C84 88 78 94 70 94C64 94 60 90 60 84H56C56 92 50 96 44 96" stroke="#00B8FF" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="56" cy="46" r="3" fill="#39FF14" />
      <circle cx="72" cy="46" r="3" fill="#39FF14" />
    </svg>
  ),

  'Redis Enterprise Cluster': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="64,20 108,42 64,64 20,42" fill="#FF2BD6" />
      <polygon points="20,46 64,68 64,86 20,64" fill="#00B8FF" fillOpacity="0.8" />
      <polygon points="64,68 108,46 108,64 64,86" fill="#39FF14" fillOpacity="0.8" />
      <polygon points="20,70 64,92 64,110 20,88" fill="#00B8FF" />
      <polygon points="64,92 108,70 108,88 64,110" fill="#39FF14" />
    </svg>
  ),

  'Apache Kafka': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="40" cy="64" r="14" fill="#00B8FF" />
      <circle cx="88" cy="38" r="12" fill="#39FF14" />
      <circle cx="88" cy="90" r="12" fill="#39FF14" />
      <line x1="40" y1="64" x2="88" y2="38" stroke="#F2F5FA" strokeWidth="4" />
      <line x1="40" y1="64" x2="88" y2="90" stroke="#F2F5FA" strokeWidth="4" />
    </svg>
  ),

  'RabbitMQ': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect x="24" y="44" width="80" height="60" rx="14" fill="#0A1830" stroke="#39FF14" strokeWidth="4" />
      <path d="M42 44V20C42 16 52 16 52 24V44M76 44V16C76 12 86 12 86 22V44" stroke="#39FF14" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="68" r="4" fill="#00B8FF" />
      <circle cx="80" cy="68" r="4" fill="#00B8FF" />
    </svg>
  ),

  'Kubernetes (K8s)': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0C152B" stroke="#00B8FF" strokeWidth="4" />
      <polygon points="64,24 96,44 96,84 64,104 32,84 32,44" fill="none" stroke="#00B8FF" strokeWidth="4" />
      <circle cx="64" cy="64" r="10" fill="#39FF14" />
      <line x1="64" y1="24" x2="64" y2="54" stroke="#39FF14" strokeWidth="3" />
      <line x1="96" y1="44" x2="72" y2="58" stroke="#39FF14" strokeWidth="3" />
      <line x1="96" y1="84" x2="72" y2="70" stroke="#39FF14" strokeWidth="3" />
      <line x1="64" y1="104" x2="64" y2="74" stroke="#39FF14" strokeWidth="3" />
      <line x1="32" y1="84" x2="56" y2="70" stroke="#39FF14" strokeWidth="3" />
      <line x1="32" y1="44" x2="56" y2="58" stroke="#39FF14" strokeWidth="3" />
    </svg>
  ),

  'Docker': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect x="36" y="44" width="12" height="10" fill="#00B8FF" rx="2" />
      <rect x="52" y="44" width="12" height="10" fill="#00B8FF" rx="2" />
      <rect x="68" y="44" width="12" height="10" fill="#00B8FF" rx="2" />
      <rect x="52" y="30" width="12" height="10" fill="#39FF14" rx="2" />
      <rect x="68" y="30" width="12" height="10" fill="#39FF14" rx="2" />
      <path d="M116 66C112 62 104 62 100 64C94 56 80 56 72 58H16C12 76 26 96 56 96C92 96 112 78 116 66Z" fill="#00B8FF" fillOpacity="0.8" />
    </svg>
  ),

  'Terraform & OpenTofu': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="46,18 20,34 20,66 46,50" fill="#00B8FF" />
      <polygon points="52,54 78,38 78,70 52,86" fill="#39FF14" />
      <polygon points="84,18 110,34 110,66 84,50" fill="#00B8FF" />
      <polygon points="52,92 78,76 78,108 52,124" fill="#39FF14" />
    </svg>
  ),

  'GitHub Actions & GitLab CI': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0A1224" stroke="#39FF14" strokeWidth="4" />
      <circle cx="44" cy="48" r="10" fill="#00B8FF" />
      <circle cx="44" cy="88" r="10" fill="#00B8FF" />
      <circle cx="84" cy="68" r="10" fill="#39FF14" />
      <path d="M44 48V88M44 48C44 68 84 48 84 68" stroke="#F2F5FA" strokeWidth="4" fill="none" />
    </svg>
  ),

  'Prometheus & Grafana': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0E1B38" stroke="#00B8FF" strokeWidth="4" />
      <path d="M64 24C64 24 50 48 50 62C50 72 58 78 64 78C70 78 78 72 78 62C78 48 64 24 64 24Z" fill="#39FF14" />
      <path d="M42 96L54 74M86 96L74 74M64 78V98" stroke="#00B8FF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),

  'HashiCorp Vault': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <rect x="24" y="24" width="80" height="80" rx="16" fill="#0A1224" stroke="#39FF14" strokeWidth="4" />
      <circle cx="64" cy="56" r="12" stroke="#39FF14" strokeWidth="4" fill="none" />
      <path d="M64 68V84M58 84H70" stroke="#00B8FF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),

  'SonarQube Enterprise': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0B132B" stroke="#00B8FF" strokeWidth="4" />
      <circle cx="64" cy="64" r="8" fill="#39FF14" />
      <path d="M48 64A16 16 0 0 1 64 48M36 64A28 28 0 0 1 64 36M24 64A40 40 0 0 1 64 24" stroke="#00B8FF" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  ),

  'Snyk & Trivy': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <path d="M64 16L104 36V68C104 94 64 112 64 112C64 112 24 94 24 68V36L64 16Z" fill="#0B1528" stroke="#39FF14" strokeWidth="4" />
      <path d="M48 64L58 74L80 50" stroke="#39FF14" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),

  'Istio Service Mesh': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="64,16 96,104 64,88 32,104" fill="#00B8FF" />
      <line x1="64" y1="16" x2="64" y2="88" stroke="#39FF14" strokeWidth="3" />
    </svg>
  ),

  'Playwright': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="50" cy="56" r="32" fill="#39FF14" fillOpacity="0.4" stroke="#39FF14" strokeWidth="4" />
      <circle cx="78" cy="72" r="32" fill="#00B8FF" fillOpacity="0.4" stroke="#00B8FF" strokeWidth="4" />
      <text x="64" y="72" fill="#F2F5FA" fontSize="28" fontWeight="bold" textAnchor="middle">PW</text>
    </svg>
  ),

  'Vitest & Jest': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="64,16 112,96 16,96" fill="#0E1B38" stroke="#39FF14" strokeWidth="4" />
      <path d="M64 42L50 72H68L60 92L78 64H60L64 42Z" fill="#39FF14" />
    </svg>
  ),

  'k6 by Grafana': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon points="64,16 108,40 108,88 64,112 20,88 20,40" fill="#0A1224" stroke="#00B8FF" strokeWidth="4" />
      <text x="64" y="74" fill="#00B8FF" fontSize="36" fontWeight="bold" textAnchor="middle">k6</text>
    </svg>
  ),

  'Pact Contract Testing': ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="54" fill="#0B1528" stroke="#39FF14" strokeWidth="4" />
      <path d="M40 40H88V88H40Z" fill="none" stroke="#00B8FF" strokeWidth="4" />
      <path d="M52 64H76M52 52H76M52 76H68" stroke="#39FF14" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
};

export const getTechIcon = (techName: string, className = 'w-5 h-5') => {
  const IconComponent = TechBrandIcons[techName];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  // Default high-tech atomic node fallback
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" fill="#00B8FF" />
      <circle cx="12" cy="12" r="8" stroke="#39FF14" strokeDasharray="3 3" />
    </svg>
  );
};
