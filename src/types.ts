export type NeonAccent = 'blue' | 'green' | 'pink';

export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'db' | 'cache' | 'external';
  description: string;
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
  protocol: 'gRPC' | 'REST' | 'WebSocket' | 'AMQP' | 'Kafka' | 'SQL';
}

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  accent: NeonAccent;
  hexAccent: string;
  iconName: string;
  problem: {
    title: string;
    summary: string;
    painPoints: string[];
  };
  deliverables: {
    title: string;
    description: string;
    specs: string[];
  }[];
  stack: {
    category: string;
    tools: string[];
  }[];
  architecture: {
    patternName: string;
    summary: string;
    nodes: ArchitectureNode[];
    connections: ArchitectureConnection[];
    keyHighlights: string[];
  };
  compliance: {
    framework: string;
    description: string;
    auditPoint: string;
  }[];
  caseStudy: {
    clientSector: string;
    challenge: string;
    solution: string;
    metrics: {
      label: string;
      value: string;
    }[];
  };
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Móvil' | 'Datos' | 'Cloud/DevOps' | 'Seguridad' | 'QA';
  version: string;
  level: 'Core Enterprise' | 'High Performance' | 'Cloud Native' | 'Standard';
  description: string;
  keyUse: string;
}

export interface ArchitecturePattern {
  id: string;
  title: string;
  subtitle: string;
  whenToUse: string;
  tradeoffs: {
    pros: string[];
    cons: string[];
  };
  sampleStack: string[];
  slaTarget: string;
}

export interface AnimationSpec {
  element: string;
  trigger: 'Page Load' | 'Scroll Viewport' | 'Pointer Move' | 'Hover' | 'Focus' | 'Form Submit';
  property: string;
  duration: string;
  easing: string;
  rationale: string;
  reducedMotionFallback: string;
}

export interface WireframeBlock {
  sectionId: string;
  title: string;
  columns: number;
  layoutDescription: string;
  components: string[];
  contrastConsiderations: string;
}

export type ViewportMode = 'full' | 'desktop' | 'tablet' | 'mobile';
export type AppViewTab = 'prototype' | 'styleguide' | 'wireframes' | 'animations';

export type ActiveModuleId =
  | 'hero'
  | 'servicios'
  | 'stack'
  | 'arquitecturas'
  | 'sdlc'
  | 'casos'
  | 'contacto';

export type NavigationMode = 'modular' | 'continuous';
