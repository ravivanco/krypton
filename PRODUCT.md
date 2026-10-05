# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Operations, IT and digital-transformation directors at established mid-size and large companies in Latin America. They arrive with a concrete operational pain (manual back-office processes, fragile ERP/CRM, electronic-invoicing compliance with SUNAT/SAT/DIAN/SII, security audits, health-data interoperability) and are evaluating whether an external software studio can be trusted with a mission-critical system and with putting AI into production safely.

## Product Purpose

Public marketing website for Krypton Atomic Software Factory, a software development company. Its job is to convince that buyer that Krypton can design, build and operate AI agents and process automation on top of robust enterprise software, and to get them to start a conversation with an architect (contact / quote form).

## Positioning

AI-first engineering studio: AI agents and process automation lead the offer, and the six engineering disciplines (web platforms, mobile apps, ERP/CRM, electronic invoicing & fiscal integration, offensive cybersecurity & compliance, HealthTech HL7 FHIR/HIPAA) are presented as the systems those agents plug into, act on and run inside. The claim a generic "AI agency" cannot copy: the agents are built by the same team that engineers the regulated, mission-critical systems underneath them.

## Operating Context

Visitors evaluate on desktop during work hours and revisit on mobile. They compare the studio against other LatAm software factories and AI consultancies, look for proof (metrics, case studies, stack, architecture, methodology) and then request a technical conversation or quote.

## Capabilities and Constraints

- Stack: React 19 + Vite + Tailwind v4 + Three.js + Motion (motion/react), TypeScript. Express/Gemini dependencies exist from the AI Studio scaffold.
- Site language: Spanish.
- Services: AI agents and process automation (leading), plus web platforms, mobile apps, ERP/CRM, electronic invoicing & fiscal integration, cybersecurity & compliance, HealthTech.
- Content sections to preserve: services detail, tech stack, architectures, SDLC/methodology, case studies, contact & quote form.
- It is a public company site: design-deliverable tabs (style guide, wireframes, animation specs) and dev toggles (modular/continuous mode, viewport simulator) are not part of the public experience.
- The AI-agents and automation services do not yet have their own case study; content for them must not invent client results.

## Brand Commitments

- Name: Krypton Atomic Software Factory ("Krypton").
- Desired technical expression (from the owner): 3D, realistic animation, spatial transitions, neural-network imagery.

## Evidence on Hand

- Metrics confirmed real by the owner: 99.995% SLA availability, < 45 ms global P99 latency, "Zero technical debt" positioning, and the per-service case studies and metrics in `src/data/servicesData.ts`.
- Tech stack, architecture patterns and methodology content in `src/data/`.
- No client logos, testimonials, team photos or AI-agent case studies exist; do not fabricate them.

## Product Principles

1. AI is shown working, not promised: demonstrate agents acting on real business systems.
2. Engineering rigor is the trust signal; every claim traces to a real metric or practice.
3. Speak to an operations leader's problem first, the technology second.
4. One clear path to a conversation with an architect.

## Accessibility & Inclusion

WCAG 2.2 AA (the company sells this standard to clients). Respect prefers-reduced-motion for all 3D and motion.
