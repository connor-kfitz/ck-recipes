---
name: recipes
description: A personal recipe collection, set like a cook's own working notebook — paper white, plainly ruled, gold used only where something is vouched for.
colors:
  paper: "#ffffff"
  wash: "#faf8f5"
  ink: "#131110"
  muted: "#6f6862"
  rule: "#e8e3db"
  gold: "#f0b429"
  gold-deep: "#8a5310"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.24em"
rounded:
  sm: "8px"
  md: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  xxl: "64px"
components:
  chip-meta:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  chip-meta-sm:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
  input-search:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "40px"
    width: "220px"
  input-search-focus:
    backgroundColor: "{colors.paper}"
  card-surface:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px"
  card-surface-compact:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px"
  link-accent:
    textColor: "{colors.gold-deep}"
    typography: "{typography.body}"
  link-accent-hover:
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
---

# Design System: recipes

## Overview

**Creative North Star: "The Kitchen Notebook"**

This is one cook's working record, published. The page behaves like a well-kept
notebook left open on a counter: white paper, a warm off-white for anything set
aside from the page, hairline rules where a notebook would have printed lines,
and a single gold accent that functions the way a pencil underline does — it
marks the thing the author is vouching for, and it means nothing if it is
everywhere.

Nothing here is styled to look expensive. The surface is deliberately quiet so
that photography and the recipe titles carry all of the visual weight. Depth is
achieved by ruling and tonal steps, never by shadow: a card is separated from the
page because it sits on `wash` (#faf8f5) inside a 1px `rule` (#e8e3db) border, not
because it floats above it. Type does the shouting — Archivo at 800 weight with
tight negative tracking gives titles a compressed, editorial compaction, while
Inter handles every piece of running text and every label at sizes that survive a
glance from an arm's length away.

The reading scene is a constraint, not a flourish. A cook is standing up, hands
busy, phone or laptop propped at a distance, looking for their place between
steps. That is why meta information (time, calories, brand picks) is set in pill
chips with tabular numerals rather than in a paragraph, why hit targets stay
generous, and why the accent color is reserved rather than decorative.

**Key Characteristics:**
- Paper-white ground (#ffffff) with `wash` (#faf8f5) as the only recessed surface.
- Zero shadows anywhere; 1px hairline rules and tonal steps carry all separation.
- One accent hue in two roles: `gold` (#f0b429) for marks and states, `gold-deep`
  (#8a5310) for anything text-sized that must stay legible.
- Archivo 800 with -0.035em tracking for titles; Inter for everything else.
- Uppercase, wide-tracked (0.14em–0.24em) Inter for nav and eyebrow labels.
- Motion is limited to a 1.03 image scale and 200ms color transitions, always with
  a `motion-reduce` escape.

## Colors

A near-monochrome warm neutral palette with exactly one chromatic voice, split
into a bright mark and a legible text-safe deep.

### Primary
- **Marking Gold** (#f0b429): the underline of endorsement. Used for the wordmark's
  terminal period, the active nav link's 2px underline, the search field's
  focus-within border, hover borders on interactive cards, and `::selection`
  background. It is a *mark*, not a fill — it never carries body text.
- **Roasted Gold** (#8a5310): the text-safe form of the same voice. Every place the
  accent must be read rather than seen: eyebrow labels, chip icons, "see all"
  links, focus-visible outlines, and the caret. Passes normal-text contrast on both
  `paper` and `wash`.

### Neutral
- **Paper** (#ffffff): the page ground and the raised card surface. The default.
- **Wash** (#faf8f5): the only recessed tone. Image placeholders, chips, compact
  cards, the search field at rest, and the footer band.
- **Ink** (#131110): a warm near-black. All primary text and every heading. Never
  pure #000.
- **Muted Stone** (#6f6862): secondary text — subheads, inactive nav, placeholder
  text, and the "see all" link at rest.
- **Rule** (#e8e3db): every border and divider in the system, always exactly 1px.

### Named Rules
**The Underline Rule.** Gold marks endorsement and state, nothing else. If an
element is gold and is neither the active thing, the focused thing, nor the thing
the author is standing behind, remove the gold.

**The Two Golds Rule.** `gold` (#f0b429) is for marks, borders, and fills seen at a
glance; `gold-deep` (#8a5310) is for anything read as text or drawn as an icon.
Never set text in #f0b429 on a light ground.

**The Two Surfaces Rule.** The system has exactly two grounds — `paper` and `wash`.
A third tone is not a new token, it is a mistake.

## Typography

**Display Font:** Archivo (fallback system-ui, sans-serif), via `next/font/google`
**Body Font:** Inter (fallback system-ui, sans-serif), via `next/font/google`
**Label Font:** Inter, uppercase with wide tracking — no separate face

**Character:** A grotesque pair with a deliberate density gap. Archivo at 800 with
-0.035em tracking reads compressed and editorial, closer to a masthead than a
headline; Inter at normal tracking reads neutral and administrative underneath it.
The contrast is weight and tracking, not style — there is no serif in the system.

### Hierarchy
- **Display** (Archivo 800, 40px→56px at `sm`, 0.98 line-height, -0.035em): the
  pinned recipe title only. Capped at `max-w-[15ch]` with `text-balance`.
- **Headline** (Archivo 800, 28px, -0.035em): section headings above a ruled
  divider ("Recent recipes").
- **Title** (Archivo 800, 24px, -0.03em / Archivo 700, 17px, -0.02em): card
  headings. The 17px card title takes a gold-deep underline on group hover.
- **Body** (Inter 400, 13–14px, 1.5): subheads, ingredient names, placeholder text.
- **Label** (Inter 600, 11px, 0.24em, uppercase): the pinned eyebrow.
- **Nav Label** (Inter 500, 13px, 0.14em, uppercase): header and footer nav links.

### Named Rules
**The Tight-Title Rule.** Every Archivo setting carries negative tracking scaled to
its size (-0.02em at 17px, -0.035em at 28px and above). Archivo at default tracking
looks unset in this system.

**The Tabular Rule.** Any numeral a cook compares across cards — times, calories,
counts — is set `tabular-nums`.

## Layout

A single centered column capped at 1440px with a constant 24px gutter (`px-6`) at
every breakpoint; the max-width, not the padding, does the responsive work.

The home page is a two-zone composition: an asymmetric `1.6fr / 1fr` two-column
band from `lg` up (pinned recipe beside the ingredient library, stretched to equal
height) that stacks to one column below it, followed by a recipe grid — 2 columns
by default, 4 from `lg`. Grid rhythm is `gap-x-6 / gap-y-9`: rows breathe more than
columns so titles that wrap to two lines never collide with the row beneath.

Vertical rhythm runs on a coarse scale — 16px between a title and its meta row,
24px between a heading and its content, 36px section internals, 64px between major
sections (`mt-16`). The header is sticky from `md` up only, at 80px tall; below
`md` it becomes a 64px wordmark row above a horizontally scrollable nav strip,
because a two-row sticky header costs too much of a phone viewport.
`scroll-padding-top: 6rem` on `html` clears the sticky header for anchor targets.

Aspect ratios are fixed per role: 19:10 for the pinned image (chosen over 16:9 so
the eyebrow above costs the column no extra height), 4:3 for recipe cards, and a
flexible `min-h-[104px]` cell for ingredient thumbnails.

### Named Rules
**The Equal-Height Rule.** In the `lg` two-column band both cards stretch to a
shared height; the ingredient card's list uses `auto-rows-fr` and `flex-1` so the
extra height is absorbed by the thumbnails, never by trailing whitespace.

## Elevation & Depth

This system is flat by construction. There are no shadows — not on cards, not on
the sticky header, not on hover. Depth is expressed two ways only: a 1px `rule`
(#e8e3db) border, and the tonal step from `paper` (#ffffff) to `wash` (#faf8f5). A
card that must read as raised sits on `paper` inside a rule; a surface that must
read as recessed sits on `wash`. Nothing in the system is permitted to float.

The only motion-based depth cue is a 1.03 scale on images inside `overflow-hidden`
containers over 500ms `ease-out`, which reads as the image moving *within* its
frame rather than the frame lifting off the page.

### Named Rules
**The No-Shadow Rule.** `box-shadow` is not part of this system, at rest or in any
state. If an element needs separation, it gets a rule or a tonal step.

**The Hairline Rule.** Every border in the system is exactly 1px `#e8e3db`. The only
exceptions are the 2px gold underline on the active nav link and the 2px
`focus-visible` outline.

## Shapes

Three radii and nothing between them. Large surfaces — the pinned image, cards, the
ingredient panel — take 12px (`rounded-xl`). Smaller framed content — recipe-card
images, ingredient thumbnails — takes 8px (`rounded-lg`). Anything that carries a
short label — meta chips, the search field — is a full pill (`rounded-full`).
Nothing in the system is square-cornered, and nothing uses a radius that isn't one
of those three.

Images are always clipped by their container rather than sized to it: a fixed
aspect-ratio box with `overflow-hidden` and `object-cover` inside. That frame is
the recurring silhouette of the whole site.

## Components

### Cards / Containers
- **Corner Style:** 12px (`rounded-xl`).
- **Background:** `paper` for the full ingredient panel, `wash` for the compact
  mobile row.
- **Border:** 1px `rule`; shifts to `gold` on hover when the card is a link.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Internal Padding:** 20px on the full card, 16px on the compact row.

### Inputs / Fields
- **Style:** 40px tall pill, 1px `rule` border, `wash` background, 16px horizontal
  padding, 14px Inter, `muted` placeholder, 16px search icon in `muted`.
- **Focus:** `focus-within` shifts the border to `gold`, the background to `paper`,
  and the icon to `gold-deep`, over 200ms. The inner input suppresses its own
  outline; the field wrapper carries the state.

### Navigation
- **Style:** 13px Inter 500, uppercase, 0.14em tracking, with a 2px bottom border
  and 4px of padding beneath.
- **States:** active — `gold` border, `ink` text, `aria-current="page"`; rest —
  transparent border, `muted` text; hover — `rule` border, `ink` text, 200ms.
- **Mobile:** below `md` the nav becomes a full-bleed horizontally scrollable strip
  with hidden scrollbars, sitting under the wordmark. No disclosure control.
- **Footer:** the same label typography, no borders, `muted` → `ink` on hover.

### Links (accent)
- **Style:** 14px Inter 600 in `gold-deep`, with a 16px arrow icon.
- **Hover:** text shifts to `ink`; the arrow translates 4px right over 200ms
  `ease-out`, with `motion-reduce` neutralizing both.

### Wordmark
Lowercase Archivo 800 at -0.035em, followed by a period set in `gold-deep`. The
period is the logo. It appears at 20px in the header, 18px in the footer and on
mobile.

### Focus treatment (system-wide)
Every interactive element carries `focus-visible:outline-2
focus-visible:outline-gold-deep` with a 4px offset (2px on tightly-fitted
surfaces). This is the one visual treatment that is identical everywhere.

## Do's and Don'ts

### Do:
- **Do** separate surfaces with a 1px `#e8e3db` rule or the `#ffffff` → `#faf8f5`
  tonal step — the two mechanisms this system has.
- **Do** set every Archivo heading with negative tracking (-0.02em at 17px,
  -0.035em at 28px+).
- **Do** use `gold-deep` (#8a5310) for any accent that will be read as text or drawn
  as an icon, and `gold` (#f0b429) only for marks, borders, and fills.
- **Do** put time and calories on every surface where a recipe is shown, in
  `tabular-nums` meta chips.
- **Do** pair every transform or transition with a `motion-reduce` variant.
- **Do** give every interactive element a `focus-visible` gold-deep outline.
- **Do** clip images with a fixed-aspect `overflow-hidden` container and
  `object-cover`.

### Don't:
- **Don't** add `box-shadow` to anything, in any state.
- **Don't** introduce a third surface tone, a fourth radius, or a second accent hue.
- **Don't** set body text or small text in `#f0b429` — it fails contrast on light
  grounds.
- **Don't** use pure black (#000) or pure gray; `ink` is warm (#131110) and `muted`
  is warm (#6f6862).
- **Don't** introduce a serif or a third typeface; the pairing is Archivo + Inter.
- **Don't** let the accent spread — if more than a few percent of a screen is gold,
  the Underline Rule is being broken.
- **Don't** invent testimonials, ratings, counts, or badges; the site has no social
  proof and must not imply any.
