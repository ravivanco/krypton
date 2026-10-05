---
name: Krypton Atomic Software Factory
description: One technical descent through depth-graded water, from the agent at the surface to the engineered bedrock.
colors:
  surface: "#0f4c66"
  midnight: "#0b2a44"
  cold: "#0a2038"
  mesophotic: "#071a30"
  abyss: "#040c1a"
  instrument-glass: "#04101f"
  ink-on-thermo: "#04121f"
  snow: "#eef4f5"
  silt: "#a9bfcb"
  murk: "#7f98a8"
  rule: "#1b3a55"
  rule-hover: "#2c5677"
  thermo: "#3fd8e8"
  thermo-bright: "#7ae6f0"
  thermo-deep: "#1fa9bb"
  lamp: "#ffb45e"
  alarm: "#ff8a7a"
  coral: "#06111c"
  coral-tip: "#8fa6b4"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.3rem, 6.6vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.005em"
  subtitle:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  data:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum, zero"
rounded:
  none: "0px"
  field: "2px"
  marker: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "56px"
  section: "112px"
  section-lg: "160px"
  rail: "272px"
  container: "1248px"
components:
  button-primary:
    backgroundColor: "{colors.thermo}"
    textColor: "{colors.ink-on-thermo}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.thermo-bright}"
    textColor: "{colors.ink-on-thermo}"
  button-primary-disabled:
    backgroundColor: "{colors.thermo-deep}"
    textColor: "{colors.ink-on-thermo}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.snow}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-secondary-hover:
    textColor: "{colors.thermo}"
  field:
    backgroundColor: "rgba(4, 12, 26, 0.55)"
    textColor: "{colors.snow}"
    rounded: "{rounded.field}"
    padding: "12.8px 14.4px"
  instrument-panel:
    backgroundColor: "{colors.instrument-glass}"
    textColor: "{colors.snow}"
    rounded: "{rounded.none}"
    padding: "24px 36px"
  dive-rail:
    backgroundColor: "{colors.instrument-glass}"
    textColor: "{colors.snow}"
    width: "272px"
  tab-active:
    textColor: "{colors.thermo}"
  tab:
    textColor: "{colors.silt}"
---

# Design System: Krypton Atomic Software Factory

## Overview

**Creative North Star: "The Deep Dive"**

The whole site is one descent through water that darkens with depth. Every section is a dive stop with a depth in meters; scroll is the only gesture, and it moves a WebGL camera down a water column whose colour, fog and light follow continuously. The ground is never a flat page colour: it is water graded from a lit turquoise surface (0 m) to near-black abyss (60 m), with marine-snow particles and a dark neural coral whose branches carry amber agent signals.

The interface on top of that water is an instrument, not a brochure. Panels read like dive computers and logbooks: hairline 1px rules, square corners, translucent dark glass, condensed uppercase headlines, and monospaced readouts for every number that is actually a measurement. Density is moderate and editorial: long rows divided by rules rather than grids of cards.

Two inks are reserved and never decorative. Thermocline cyan marks what you can act on and where you are; lamp amber marks an agent doing work. Everything else is water, snow, silt and murk.

**Key Characteristics:**
- Depth-graded water ground driven by scroll; the page is a dive profile from 0 m to 60 m and back.
- A fixed dive-profile rail is the navigation; the active stop is lit cyan, finished stops stay marked.
- Two reserved inks: cyan for action and active depth, amber for agent signal.
- Condensed uppercase display over a neutral grotesk; mono strictly for data.
- 1px hairline rules, square corners, translucent instrument glass; no cards-in-cards.
- Motion has mass: ballistic springs for depth, lamp reveals for content, blur swaps for panels.

## Colors

A cold, depth-graded water palette with exactly two warm-or-bright inks held in reserve.

### Primary
- **Thermocline Cyan** (thermo): the action ink. Primary buttons, the active rail stop, the depth gauge, active tab indicators, focus outlines, caret, select chevrons, and the single thermocline light line at 10 m. Hover lifts to **Surface Glint** (thermo-bright); disabled or pressed settles to **Deep Thermocline** (thermo-deep).

### Secondary
- **Diver's Lamp Amber** (lamp): agent signal only. Live and completed steps in an agent trace, the agent node marker in lists, the "agent" side of a rule-versus-agent comparison, and the travelling pulses in the WebGL coral.

### Tertiary
- **Alarm Coral** (alarm): validation errors on form fields and their messages. Nothing else.

### Neutral
- **Surface Water** (surface), **Midnight** (midnight), **Cold Water** (cold), **Mesophotic** (mesophotic), **Abyss** (abyss): the water column at 0, 10, 20, 40 and 60 m. They are graded continuously by depth in the scene and as a vertical gradient fallback behind it. The body ground is Midnight; the html ground and scrollbar track are Abyss.
- **Instrument Glass** (instrument-glass): the base of every translucent panel, the rail and the mobile bar, used at 55 to 96% opacity with backdrop blur so the water stays visible behind the instrument.
- **Ink on Thermo** (ink-on-thermo): text and icons placed on a cyan fill.
- **Marine Snow** (snow): primary text, headlines, marker outlines, scene particles.
- **Silt** (silt): secondary text, leads, labels, units.
- **Murk** (murk): tertiary text, placeholders, unreached rail stops, waiting steps.
- **Hairline** (rule): every divider, panel border, field border and the rail spine. Field hover raises it to **Lit Hairline** (rule-hover).
- **Coral Body** (coral) and **Coral Tip** (coral-tip): the neural coral in the scene, dark in the body and pale only at the outermost tips (cubic falloff).

### Named Rules
**The Palette Law.** Thermocline cyan appears only on actions and on the active depth; lamp amber appears only on agent signal. If an element is neither clickable, current, nor an agent at work, it gets neither ink.

**The Graded Water Rule.** Backgrounds come from the water column for their depth, never from an arbitrary flat colour. A new section takes the water of its stop.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif)
**Body Font:** Geist (with ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular), for data only

**Character:** A tall, condensed, uppercase display set heavy and tight like stencilled hull markings, against a calm neutral grotesk for reading and a tabular mono for instrument readouts.

### Hierarchy
- **Display** (800, clamp(3.3rem, 6.6vw, 5.6rem), 0.9, uppercase): the hero headline at 0 m only.
- **Headline** (800, clamp(2.75rem, 6.4vw, 5.6rem), 0.9, uppercase): one per dive stop, paired with its depth readout.
- **Title** (800, clamp(2.2rem, 4vw, 3.2rem) or fixed 2.4 to 2.7rem, uppercase): sub-blocks within a stop and step verbs.
- **Subtitle** (Geist 600, 1.2 to 1.35rem): names of agents and comparison columns.
- **Body** (Geist 400, 1rem, 1.6): running text, kept to 30 to 40rem measures. Leads run at 1.08 to 1.18rem in Silt.
- **Label** (Geist 500, 0.72rem, 0.12em tracking, uppercase): definition terms, table row heads, panel captions, column heads, footer group names. Scaled down to 0.6 to 0.64rem inside dense instrument panels.
- **Data** (Geist Mono, tabular and slashed-zero numerals): depths, timestamps, metrics, versions, ticket numbers, step counters. Units sit beside the value in a smaller Silt size.

### Named Rules
**The Instrument Mono Rule.** Geist Mono is for measurements only: depths, times, metrics, versions, specs. Names, labels, and prose never use it.

**The Depth Beside the Headline Rule.** A stop headline carries its depth reading and zone name to its side (right-aligned on desktop, under a hairline on mobile), never above it.

## Layout

A fixed 17rem (272px) dive-profile rail occupies the left edge on desktop (lg and up); content flows in a centred container of max 78rem with 20 / 32 / 56px side gutters at mobile / sm / lg. Below lg the rail collapses into a 64px top bar carrying the wordmark, the live depth and a menu button that opens the full profile as a sheet.

Stops are tall: 112px vertical padding on mobile and 160px on desktop, so the camera has room to travel between them. Inside a stop, content is organised as ruled rows and asymmetric two-column grids (for example 15rem / 1fr / 0.85fr for agent rows, 1.25fr / 1fr for paired blocks), not as card grids. Large gaps between blocks (80 to 112px) mark a change of subject; hairlines mark a change of row.

The hero fills the first viewport: headline, lead, two CTAs and a three-up readout strip at bottom left; a live agent-trace panel at right; the coral in the water behind.

## Elevation & Depth

Depth is literal, not shadowed. The system has no drop shadows. Separation comes from three things: the water column itself (fog, colour and light changing with scroll), translucent instrument glass with backdrop blur sitting over the water, and 1px hairlines. The only glows are light emitted by the world: the thermocline line's cyan bloom and the 4px cyan halo around the active rail stop.

### Shadow Vocabulary
- **Thermocline bloom** (`box-shadow: 0 0 18px 2px rgba(63, 216, 232, 0.35)`): the single horizontal light line at the 10 m stop.
- **Active stop halo** (`box-shadow: 0 0 0 4px rgba(63, 216, 232, 0.18)`): the lit marker of the current depth on the rail.

### Named Rules
**The Glass Over Water Rule.** Panels are dark translucent glass (Instrument Glass at 55 to 96% with backdrop blur) over moving water. They never become opaque slabs and never cast shadows.

**The One Light Line Rule.** The thermocline is the only horizontal light line the world allows. Every other divider is a plain hairline.

## Shapes

Square corners everywhere: buttons, panels, tabs, menu buttons, the rail. Form fields soften by a barely visible 2px. The world's native round form is the marker: depth stops on the rail, agent nodes, step points and trace dots are small circles (8 to 12px), either outlined in Snow or Murk, filled in Silt for passed, Cyan for current, or Amber for agent activity. Lines are 1px; active indicators are 2px cyan bars that slide between tabs.

## Components

### Buttons
Blunt, filled, and few.
- **Shape:** square (0px).
- **Primary:** Thermocline Cyan fill, Ink on Thermo text, Geist 600 at 0.9 to 1rem, 16px by 24px padding, trailing arrow icon that nudges 4px on hover.
- **Hover / Focus:** fill lifts to Surface Glint over 300ms; focus is a 2px cyan outline at 3px offset. Pressed translates 1px down. Busy state drops to Deep Thermocline with a spinner.
- **Secondary:** transparent with a Snow border at 40%, Snow text; on hover border and text turn cyan.

### Cards / Containers
There are no cards. Containers are **instrument panels**.
- **Corner Style:** square (0px).
- **Background:** Instrument Glass at 55 to 78% with backdrop blur.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Hairline; header and footer strips are divided by hairlines.
- **Internal Padding:** 24px mobile, 36 to 40px desktop; caption strips 20px by 12px.

### Inputs / Fields
- **Style:** Abyss glass at 55%, 1px Hairline border, 2px radius, Geist 0.95rem, Murk placeholder. Labels sit above in Geist 500 Snow, sentence case. Selects use a drawn cyan chevron.
- **Focus:** border turns cyan and the glass deepens to 80%; hover raises the border to Lit Hairline.
- **Error:** border and message in Alarm Coral.

### Navigation
- **Dive rail (desktop):** fixed left, Instrument Glass at 72% with blur, right hairline. Wordmark, then the "Perfil de inmersión" label, then an ordered list of stops along a 1px spine: marker, two-digit depth in mono, stop name in Geist 500 and zone in Murk. Active stop: cyan marker with halo and cyan name; passed stops: filled Silt markers; unreached: Murk outline. Footer: direction (descent/ascent), the sprung depth gauge in large cyan mono, and the primary CTA.
- **Mobile:** 64px top bar with wordmark, cyan sprung depth readout, and a 44px square menu button. The sheet wipes down from the top (clip-path, 450ms expo-out) and lists the same stops on hairline rows with the primary CTA at the foot.
- **Tabs:** text-only, Silt at rest, Snow on hover, cyan when selected, with a 2px cyan bar that springs between tabs.

### Agent Trace (signature)
A logbook panel that replays an agent run: timestamp in mono, an amber dot that pulses when live and dims to 55% once done, the step name in Snow and its detail in mono Silt; waiting rows sit in Murk. The footer reports human intervention, turning amber when resolved. Under reduced motion it renders complete.

### Depth Readout (signature)
Any number that represents depth springs to its target (stiffness 90, damping 16, mass 0.9) and is formatted to one decimal with leading zeros (000.0). Section headlines carry a static depth readout and zone label beside them.

### Motion
- **Ballistic depth:** the camera and depth gauge have mass; they overshoot slightly and settle.
- **Lamp reveal:** content resolves out of the murk on entering view (opacity 0.2 to 1, blur 10px to 0, y 28px to 0, 1.1s expo-out, once).
- **Spatial panel swap:** tab panels blur in (26px rise, 0.7s expo-out) and blur out upward (0.28s ease-in).
- **Reduced motion:** honoured globally; the scene freezes and the camera jumps rather than travels.

## Do's and Don'ts

### Do:
- **Do** give every new section a dive stop: a depth in meters, a zone name, an entry on the rail, and the water colour of that depth.
- **Do** keep cyan for actions, current position and focus, and amber for agents at work (The Palette Law).
- **Do** set every measurement in Geist Mono with tabular numerals and its unit in smaller Silt beside it.
- **Do** divide content with 1px Hairline rules and asymmetric ruled rows.
- **Do** put panels on translucent Instrument Glass with backdrop blur so the water stays visible.
- **Do** give moving values mass (springs) and let content arrive with the lamp reveal; respect reduced motion.

### Don't:
- **Don't** put cyan or amber on decoration, illustration, or inactive text.
- **Don't** place a label, kicker or number above a headline; the depth reading goes beside it.
- **Don't** number sections; depth is the only sequence.
- **Don't** round buttons, panels or tabs; circles are reserved for markers and nodes.
- **Don't** use drop shadows or opaque cards, and never nest a panel inside a panel.
- **Don't** use Geist Mono for names, labels or prose.
- **Don't** add a second horizontal glowing line; the thermocline is the only one.
