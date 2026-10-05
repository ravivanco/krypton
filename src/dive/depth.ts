/**
 * The page is one dive. Every section is a stop with a depth in meters;
 * scroll position is translated into a continuous depth that drives the
 * WebGL water column, the rail readout and the active stop.
 */

export interface DiveStop {
  id: string;
  depth: number;
  zone: string;
  label: string;
}

export const diveStops: DiveStop[] = [
  { id: 'inicio', depth: 0, zone: 'Superficie', label: 'Inicio' },
  { id: 'agentes', depth: 10, zone: 'Termoclina', label: 'Agentes IA' },
  { id: 'automatizacion', depth: 18, zone: 'Arrecife', label: 'Automatización' },
  { id: 'sistemas', depth: 40, zone: 'Pared mesofótica', label: 'Sistemas' },
  { id: 'arquitectura', depth: 52, zone: 'Lecho', label: 'Arquitectura' },
  { id: 'metodo', depth: 60, zone: 'Profundidad de retorno', label: 'Método' },
  { id: 'resultados', depth: 24, zone: 'Parada de ascenso', label: 'Resultados' },
  { id: 'contacto', depth: 0, zone: 'Superficie', label: 'Contacto' },
];

export const MAX_DEPTH = 60;

/** Shared, mutable depth read by the render loop without React re-renders. */
export const depthState = {
  /** Target depth in meters, written on scroll. */
  target: 0,
  /** Pointer position normalised to -1..1. */
  pointerX: 0,
  pointerY: 0,
};

/**
 * Reads section positions and returns the interpolated depth at the
 * reading line (40% of the viewport height).
 */
export function measureDepth(): { depth: number; stopIndex: number } {
  const line = window.innerHeight * 0.4;
  const y = window.scrollY;
  const starts = diveStops.map((stop, i) => {
    const el = document.getElementById(stop.id);
    if (!el) return Infinity;
    return i === 0 ? 0 : Math.max(0, el.getBoundingClientRect().top + y - line);
  });
  // The last stop is reached when the page bottoms out
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  starts[starts.length - 1] = Math.min(starts[starts.length - 1], maxScroll);

  let stopIndex = 0;
  for (let i = 0; i < starts.length; i++) if (y >= starts[i] - 1) stopIndex = i;
  const next = stopIndex + 1;
  if (next >= diveStops.length) return { depth: diveStops[stopIndex].depth, stopIndex };
  const span = Math.max(1, starts[next] - starts[stopIndex]);
  const progress = Math.min(1, Math.max(0, (y - starts[stopIndex]) / span));
  const depth = diveStops[stopIndex].depth + (diveStops[next].depth - diveStops[stopIndex].depth) * progress;
  return { depth, stopIndex };
}

const waterStops: Array<[number, [number, number, number]]> = [
  [0, [0x0c, 0x3f, 0x57]],
  [10, [0x0a, 0x30, 0x49]],
  [20, [0x0a, 0x24, 0x40]],
  [40, [0x07, 0x1a, 0x30]],
  [60, [0x04, 0x0c, 0x1a]],
];

/** Water colour at a depth, as 0..1 RGB. */
export function waterColor(depth: number): [number, number, number] {
  const d = Math.min(MAX_DEPTH, Math.max(0, depth));
  for (let i = 0; i < waterStops.length - 1; i++) {
    const [d0, c0] = waterStops[i];
    const [d1, c1] = waterStops[i + 1];
    if (d <= d1) {
      const t = (d - d0) / (d1 - d0);
      return [0, 1, 2].map((k) => (c0[k] + (c1[k] - c0[k]) * t) / 255) as [number, number, number];
    }
  }
  const last = waterStops[waterStops.length - 1][1];
  return [last[0] / 255, last[1] / 255, last[2] / 255];
}

export function formatDepth(depth: number): string {
  return depth.toFixed(1).padStart(5, '0');
}
