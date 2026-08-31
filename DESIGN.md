---
name: Obsidian & Silver
description: A monochrome editorial portfolio system led by evidence, strict geometry, and quiet interaction.
colors:
  background: "#f9f9f9"
  foreground: "#050505"
  muted: "#52525b"
  line: "#dedede"
  surface: "#ffffff"
  surface-muted: "#f0f0f0"
  accent-strong: "#262626"
  accent-soft: "#d4d4d4"
  accent-surface: "#ededed"
  on-dark: "#ffffff"
  linkedin: "#0a66c2"
  github: "#111827"
typography:
  display:
    fontFamily: "Manrope, Avenir Next, Helvetica Neue, Segoe UI, sans-serif"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "0"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  label:
    fontFamily: "JetBrains Mono, SFMono-Regular, Cascadia Code, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    letterSpacing: "0"
rounded:
  none: "0"
  control: "6px"
  pill: "9999px"
spacing:
  control: "44px"
  mobile-gutter: "20px"
  tablet-gutter: "40px"
  desktop-gutter: "64px"
  section-mobile: "64px"
  section-desktop: "96px"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
---

# Design System: Obsidian & Silver

## Overview

**Creative North Star: "The Evidence Ledger"**

This Stitch-authored system is a monochrome editorial frame for Madhur Jain's product work. High-contrast type, measured labels, thin rules, real product captures, and restrained interaction keep attention on decisions and outcomes rather than decoration.

Professional evidence leads; Coach remains clearly identified as a personal build. The interface should feel precise, compact, and authored for each viewport, not like a SaaS landing page or a resume compressed into cards.

## Colors

Use the CSS variables in `src/app/globals.css`; do not introduce page-local neutrals when a token fits. `foreground` and `surface` form the primary black/white contrast, `background` and `surface-muted` separate sections, `line` structures the grid, and `muted` carries secondary copy. Silver (`accent-soft` and `accent-surface`) is supportive, never decorative. Brand colors are reserved for LinkedIn and GitHub controls.

Dark bands use `foreground` with `on-dark`; secondary text may use white at 55-75% opacity and rules at 15-25% opacity. Do not use gradients, ornamental color, or color alone to communicate state.

## Typography

Manrope is the display family, Hanken Grotesk is the body family, and JetBrains Mono is reserved for dates, metrics, phases, platform stacks, and compact technical labels. All three are loaded through `next/font/google` in `src/app/layout.tsx`, exposed as CSS variables, and emitted with `display: swap`; keep these variables on `<html>` so Next.js bundles and serves the font assets.

- **Display:** Manrope 500-600, tight 1.0-1.02 line height. Home display type scales from 2.7rem to 4.75rem; internal page titles scale from 3rem to 4.5rem.
- **Section heading:** Manrope 500, generally 2.25rem mobile and 3.75rem desktop, with `text-balance` where wrapping is prominent.
- **Body:** Hanken Grotesk 400, normally 1rem/1.75rem; supporting copy may use 0.875rem/1.5rem. Keep prose near 2xl-3xl max widths rather than spanning the container.
- **Label:** JetBrains Mono around 0.65-0.7rem, uppercase, with no added letter spacing. Mono is metadata, not paragraph text.

## Layout

The shared shell uses a centered `max-width: 90rem` container with 20px mobile, 40px medium, and 64px extra-large gutters. Layouts use content-specific CSS grids: one column on small screens, two or three columns when the content benefits from comparison. Do not assume a literal 12-column grid.

Use 64px vertical section padding on mobile and 96-112px on larger screens. Repeated evidence collections form continuous bordered grids or divided lists, not nested floating cards. The home hero stays compact (`min-height: 32rem` mobile, `34rem` medium) so the three proof metrics remain part of the opening composition.

The header is sticky and 80px high. At `lg` and above, show the horizontal primary navigation with an underline active state. Below `lg`, replace it with the fixed five-item bottom dock, including icons, short labels, `aria-current`, and safe-area padding; reserve footer bottom space for the dock. At the smallest breakpoint, secondary home actions become two equal control-sized actions, while the call and resume actions remain 44px icon controls in the header.

## Elevation & Depth

The system is flat by default. Create hierarchy with black/white section changes, 1px borders, dividers, and tonal surfaces. Do not add ornamental card shadows. Shadows are structural exceptions for the fixed mobile dock, overlays, and framed document/media surfaces; backdrop blur belongs only to transient or fixed navigation layers.

## Shapes

Content containers and evidence grids are square. Use a 6px radius for compact utility and icon controls, circles for timeline nodes and circular icon affordances, and full pills for primary calls to action or segmented choices. Borders are thin and neutral; do not round every section or place cards inside cards.

## Components

- **Primary actions:** 48px minimum height, semibold 14px text, high-contrast fill, and 24px horizontal padding. Pill buttons are reserved for prominent narrative CTAs; utility actions may use the 6px control radius.
- **Secondary actions:** bordered or text-led, never visually heavier than the primary action. On phones they remain at least 44px high; familiar icon-only actions require an accessible name. Resume view uses the Lucide `FileText` document icon; download actions use `Download`.
- **Evidence grids:** use semantic `dl` for metrics and bordered grid cells for capability or outcome groups. Pair every number with a source context and a plain-language label.
- **Timeline:** use an accessible controlled accordion with `aria-expanded`, `aria-controls`, and inert closed panels; reveal content with a short vertical fade and rotate the chevron. Mobile includes a visible "View details" label.
- **Navigation:** active state combines contrast with border or filled treatment, never color alone. Desktop links are uppercase and compact; dock items use stable five-column tracks and 68px minimum height.
- **Media:** show real, inspectable product captures with accurate alt text and captions. Preserve phone-video aspect ratios and use native playback controls.

Motion communicates state, not atmosphere. Most hover/press transitions run 160-180ms ease-out; disclosure and panel entrances run 220-340ms with `cubic-bezier(0.22, 1, 0.36, 1)`. Keep movement to color changes, subtle translation, scale feedback, disclosure, and media hover. Under `prefers-reduced-motion: reduce`, disable animation and transitions and change smooth scrolling to auto.

## Do's and Don'ts

### Do

- Use semantic landmarks, one visible-on-focus skip link per page, native controls where possible, and the global 2px `:focus-visible` outline with a 3px offset.
- Keep interactive targets at least 44x44px, preserve dock safe-area padding, and verify text and controls at mobile and desktop widths.
- Mark decorative icons and grid/orbit treatments `aria-hidden`; give icon-only links an `aria-label` and, where useful, a title.
- Use only resume-backed claims from `src/data/portfolio.ts`. Explain each metric with company, product, and outcome context.
- Describe Coach as active builder proof across web, iOS, and Android; show real captures and distinguish implementation evidence from market traction.

### Don't

- Don't invent tenure, growth, traction, infrastructure outcomes, or other claims from Stitch placeholders.
- Don't mix professional experience with Coach as if both were employment, or present skills without evidence from PRISM, SplashLearn, Honasa, or Coach.
- Don't add decorative gradients, soft floating cards, nested cards, broad shadows, arbitrary radii, or motion without a state change.
- Don't rely on hover, color, icons, or animation alone to convey meaning.
