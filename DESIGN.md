---
name: Retrofitting
description: One Mac desktop, two eras. Mac OS X Aqua and Mac OS 9 Platinum, switched by a single data-era attribute.
colors:
  ink: "#1b1b1d"
  ink-soft: "#4a4a52"
  link-blue: "#0a4fb8"
  aqua-blue: "#2468d4"
  aqua-blue-deep: "#1a55b8"
  aqua-blue-light: "#5b9bf0"
  aqua-selection: "#b9d6ff"
  aqua-pinstripe: "#f6f6f6"
  aqua-desk: "#ededed"
  aqua-chrome-line: "#7e7e84"
  platinum-ink: "#000000"
  platinum-gray: "#dddddd"
  platinum-lavender: "#9c9ccf"
  platinum-periwinkle: "#6a6ab8"
  platinum-desk-a: "#a0a9c3"
  platinum-desk-b: "#c1c8db"
  paper-white: "#ffffff"
  status-ok: "#1e7b34"
  status-wip: "#8a5a00"
typography:
  display:
    fontFamily: "Source Sans 3, Lucida Grande, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 7.4vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  display-classic:
    fontFamily: "Pixelify Sans, Geneva, monospace"
    fontSize: "clamp(2rem, 4.1vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: "var(--font-display)"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "var(--font-display)"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Source Sans 3, Lucida Grande, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Source Sans 3, Lucida Grande, Segoe UI, system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "var(--font-chrome)"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  window-aqua: "9px"
  window-classic: "0"
  button-aqua: "999px"
  button-classic: "7px"
  field: "3px"
  code: "4px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.4rem"
  lg: "1.9rem"
  menubar-aqua: "28px"
  menubar-classic: "24px"
components:
  button:
    backgroundColor: "#e7ecf4"
    textColor: "{colors.ink}"
    rounded: "{rounded.button-aqua}"
    padding: "0.5em 1.5em"
    height: "42px"
  button-primary:
    backgroundColor: "{colors.aqua-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.button-aqua}"
    padding: "0.5em 1.5em"
    height: "42px"
  button-classic:
    backgroundColor: "{colors.platinum-gray}"
    textColor: "{colors.platinum-ink}"
    rounded: "{rounded.button-classic}"
    padding: "0.5em 1.5em"
    height: "42px"
  window-aqua:
    backgroundColor: "{colors.aqua-pinstripe}"
    rounded: "{rounded.window-aqua}"
  window-classic:
    backgroundColor: "{colors.platinum-gray}"
    rounded: "{rounded.window-classic}"
  tag:
    textColor: "{colors.status-ok}"
    rounded: "{rounded.button-aqua}"
    padding: "0.05rem 0.55rem"
---

# Design System: Retrofitting

## Overview

**Creative North Star: "One Desktop, Two Eras"**

The page is a Mac desktop. A menu bar sticks to the top, content lives in windows with title bars, and a dock or control strip closes the page. The whole desktop re-skins between Mac OS X Aqua (10.3 to 10.5) and Mac OS 9 Platinum by flipping `data-era` on `<html>`. Every token is a CSS custom property: `:root` holds Aqua, `[data-era="classic"]` overrides it. Components never branch on color; they read variables, with a few per-era rules for things variables cannot carry (title-bar controls, tab shape, focus outlines on the default button).

Aqua is glossy and soft: pinstripe windows, gel pill buttons, traffic-light controls, blurred drop shadows. Platinum is flat and exact: one-pixel black outlines, square windows, two-tone bevels, a dithered desk, pixel type in the chrome. Both are drawn in CSS and inline SVG, with no Apple artwork.

**Key Characteristics:**
- One set of components, two complete skins, switched at the root.
- Chrome speaks in the era's voice; reading text stays in Source Sans 3 in both eras.
- Depth is era-authentic: soft shadow and gloss in Aqua, hard bevel and offset in Platinum.
- A single blue (Aqua) or lavender (Platinum) marks selection and the default action.
- Windows sit on a desk; on wide screens the two hero windows are absolutely placed and draggable.

## Colors

Neutral grays carry both eras; a single blue family (Aqua) or lavender family (Platinum) carries selection, default buttons and progress. Status colors are the only other hues.

### Primary
- **Gel Blue** (#2468d4, with #5b9bf0 highlight and #1a55b8 depth): Aqua default buttons, selected tabs, selected era option, selected list rows (gradient #6aa7f5 to #2f78e0), progress stripes. Always a four-stop gradient with a hard midline, never flat.
- **Platinum Lavender** (#9c9ccf): Classic selection fill, selected era option, scrollbar thumb, hovered dock items. Deeper #6a6ab8 for accent and progress stripes.

### Secondary
- **Link Blue** (#0a4fb8 Aqua, #1a1a8c Classic): inline links only, underlined at 1px, 2px on hover.
- **Selection Wash** (#b9d6ff Aqua, #b4b4e6 Classic): text selection.

### Neutral
- **Ink** (#1b1b1d Aqua, #000000 Classic): body text. **Ink Soft** (#4a4a52 / #2e2e2e): notes, captions, table row heads.
- **Pinstripe** (#f6f6f6 / #ececec, 2px repeating): Aqua window body. **Desk Gray** (#ededed / #e1e1e1 stripes): Aqua desk.
- **Platinum Gray** (#dddddd): Classic window body, tabs, title chip. **Dither Desk** (#a0a9c3 / #c1c8db, 2px checker): Classic desk.
- **Paper White** (#ffffff): list and table surfaces, fields, Classic menu bar.
- **Chrome Line** (#7e7e84 Aqua window border, #6f7686 button border, #000000 everywhere in Classic).
- **Status Green** (#1e7b34 / #0b5a1c) and **Status Amber** (#8a5a00 / #6b4400): the only status hues, used on tags with a matching 1px border. Both pass contrast on white.

### Named Rules
**The Era Variable Rule.** A color appears in components only through a custom property (`--btn-bg`, `--list-sel-bg`, `--win-bg`). A new surface adds no raw hex for chrome; it adds a variable with an Aqua value and a Classic override.

**The Black Line Rule.** In Classic every edge is 1px #000000 with a white top-left and gray bottom-right inner bevel. Aqua uses gray-blue borders and never pure black.

## Typography

**Display Font:** Source Sans 3 in Aqua; Pixelify Sans in Classic (fallback Geneva, monospace)
**Body Font:** Source Sans 3 in both eras (fallbacks Lucida Grande, Segoe UI, system-ui)
**Label/Mono Font:** Chrome uses `--font-chrome` (Source Sans 3 in Aqua, Pixelify Sans in Classic); inline code uses the system monospace stack at 600.

**Character:** Aqua is one clean humanist sans at heavy weights, tightly set. Classic swaps chrome and headings to a pixel face so the interface reads as bitmap system type while paragraphs stay readable. Fonts are self-hosted woff2 (Source Sans 3 400/600/700, Pixelify Sans 400/700). Ligatures are off in Classic and in the wordmark.

### Hierarchy
- **Display / wordmark** (700, clamp(3.2rem, 7.4vw, 5.4rem) Aqua, clamp(2rem, 4.1vw, 3.3rem) Classic, 0.95): the Retrofitting name in the About window. Aqua tracks at -0.025em with a 1px white text-shadow; Classic tracks at 0.
- **Headline** (700, 1.7rem, 1.1; 1.5rem in Classic): Finder-detail headings.
- **Title** (700, 1.25rem, 1.2): panel and document subheads.
- **Body** (400, 1.0625rem, 1.55): prose; measure capped at 46ch (notes), 60ch (detail), 62ch (fine print), 66ch (read-me).
- **Lede** (400, 1.22rem, 1.45, 34ch, balanced): the one-sentence intro.
- **Label** (600, 0.84 to 0.98rem): menu bar (0.92rem), title bars (0.9rem), buttons (1rem), tabs, sidebar, tags (700, 0.82rem), dock captions.

### Named Rules
**The Chrome Voice Rule.** Anything that is interface (menus, title bars, buttons, tabs, table column heads, tags) uses `--font-chrome`. Anything that is reading (paragraphs, notes, captions) uses `--font-body`. Do not set paragraphs in the pixel face.

## Layout

A vertical stack on a desk: sticky menu bar (28px Aqua, 24px Classic), a hero "desktop", then bands of one window each, then a centered dock. Below 640px everything is a single column of full-width windows, the comparison table collapses into labeled stacked rows, buttons go full width, the era switch stacks, and the menu status and extra menu items hide. From 640px the Finder window gains a 220px sidebar. From 960px the hero becomes a fixed-height canvas (clamp(720px, 88vh, 820px)) with the About window (left 5%, width min(540px, 44%)) and a drawn app window (left 47.5%, width min(660px, 49%)) absolutely placed, overlapping slightly, draggable by title bar, with desktop icons bottom-left. Bands pad 1.4rem 1rem (1.8rem 5% wide) and place windows asymmetrically: wide to 1120px, mid to 820px offset left 8%, document to 700px offset right 9%.

Spacing rhythm in rem: 0.4 / 0.6 / 0.75 / 1.4 / 1.9 inside windows (body padding 1.4rem 1.5rem, 1.7rem 1.9rem from tablet). Touch targets are at least 36px, buttons 42px.

## Elevation & Depth

Hybrid and era-specific. Aqua is lifted: windows carry a long soft shadow plus a tight contact shadow, buttons carry a white inset top highlight plus a 1px drop, the dock is a translucent glass slab. Classic is nearly flat: a 3px 4px 5px offset shadow under windows, and depth comes from two-tone inset bevels on every control.

### Shadow Vocabulary
- **Aqua window** (`0 16px 34px -8px rgba(0,0,0,.42), 0 3px 7px rgba(0,0,0,.25)`): windows. Dragging deepens it to `0 26px 46px -10px rgba(0,0,0,.5), 0 4px 9px rgba(0,0,0,.28)`.
- **Classic window** (`3px 4px 5px rgba(0,0,0,.4)`): windows; dragging `6px 8px 8px rgba(0,0,0,.4)`. This offset is the genuine Platinum drop shadow, not a decorative device.
- **Aqua button** (`inset 0 1px 0 rgba(255,255,255,.95), 0 1px 2px rgba(0,0,0,.35)`); primary swaps in a blue-tinted drop.
- **Classic bevel** (`inset 1px 1px 0 #fff, inset -1px -1px 0 #8a8a8a`): buttons, tabs, dock, panels. Pressed reverses to `inset 1px 1px 0 #555` on #9a9a9a.
- **Inset well** (`inset 0 1px 2px rgba(0,0,0,.25)`): fields, lists, progress bars.

### Named Rules
**The Era Depth Rule.** Gloss and soft blur belong to Aqua; bevel and offset belong to Platinum. Never put a blurred shadow on a Classic control or a hard bevel on an Aqua one.

## Shapes

Aqua is round: windows 9px, buttons, tabs, tags and scrollbar thumbs fully pill (999px), dock 18px, fields 3px, code 4px. Classic is square with small button exceptions: windows 0, buttons 7px, tabs 6px top corners only, tags and fields 0. Title-bar controls are 13px circles in Aqua (red, amber, green radial gradients at left 10, 30, 50px) and 13px bevelled squares in Classic (close left, zoom right, no minimize). Window title bars are 28px (Aqua gradient with a hard midline) and 22px (Classic 1px white/gray pinstripe behind a #ddd title chip). Pixel icons render with `image-rendering: pixelated`.

## Components

### Buttons
- **Shape:** pill in Aqua (999px), 7px rounded rectangle in Classic. Min height 42px, padding 0.5em 1.5em, 600 weight.
- **Default:** light gel gradient (#fff to #e7ecf4 to #cfd8e6) with 1px #6f7686 border (Aqua); white-to-#c9c9c9 with black border and bevel (Classic).
- **Primary:** Gel Blue gradient with white text and a dark -1px text-shadow (Aqua); in Classic it is identical to default plus a 2px black outer ring at 2px offset, the Platinum default-button convention.
- **Hover / Active:** hover brightens 1.06; active darkens .92 and drops 1px (Aqua), or fills #9a9a9a with an inset bevel (Classic). Disabled gets muted ink (#5b5b63), no shadow, not-allowed cursor, dotted border in Classic.
- **Focus:** 3px translucent blue outline (Aqua), 2px solid black (Classic), 2px offset.

### Windows
Bordered container with title bar, centered 600 title, and era controls. Body padding per Layout. The drawn app window mimics the product UI (field, list with selected row, default and secondary buttons, striped progress bar) and carries a right-aligned caption.

### Era Switch
Two large radio faces in a fieldset (min height 64px), each with a chrome title and a body-font subtitle. The checked face takes primary styling. Native input is stretched over the face and visually hidden; focus shows on the face.

### Tabs
Row of pill buttons in Aqua; selected takes primary gel. In Classic, folder tabs with 6px top corners that merge into a bevelled panel when selected.

### Comparison Table
White well with gradient header cells, 1px #d6d6dc row rules, faint even-row striping, 12rem row-head column. Status tags are 700 0.82rem outlined pills (square in Classic) in Status Green or Amber.

### Navigation
Menu bar items are plain text at 0.7rem horizontal padding; hover and focus fill with the selection gradient and inverse ink. Right side shows era name and a tabular-nums clock. Sidebar rows in the Finder window use the same selection treatment for the active item; dimmed items use muted ink.

### Dock
Inline-flex row of 92px items (78px on phones), each a 44px inline SVG glyph over a 0.84rem caption. Aqua dock is a rounded glass slab; Classic is a bevelled gray strip with lavender hover. Glyphs use the two-tone `--glyph-a`/`--glyph-b` fills with a dark `--glyph-line` stroke, so they re-color per era.

### Copy Command
Monospace code chip (white, 1px border) beside a small button of the same gel/bevel family.

### Motion
Era change uses a View Transition on root, 0.4s with `cubic-bezier(.16, 1, .3, 1)`. Press states are instant. Under `prefers-reduced-motion` view-transition animation and smooth scroll are disabled.

## Do's and Don'ts

### Do:
- **Do** route every chrome color, radius, shadow and font through the era custom properties, and add a Classic override with each new variable.
- **Do** build new controls from the gel (Aqua) and bevel (Classic) recipes above, with the primary state marking the single default action.
- **Do** keep paragraphs in Source Sans 3 at 1.0625rem/1.55 with a capped measure, in both eras.
- **Do** keep status in text plus color (tag label with matching border), at contrast that passes on white.
- **Do** keep a visible focus outline on every interactive element (3px blue Aqua, 2px black Classic).
- **Do** keep Classic's drop shadow offset and hard; it is true to the system.

### Don't:
- **Don't** use Apple logos, trademarked artwork or real OS screenshots; icons and glyphs are drawn in SVG or the project's own PNGs.
- **Don't** put gradients, blur or pill radii on Classic surfaces, or black 1px bevels on Aqua ones.
- **Don't** set body text in Pixelify Sans.
- **Don't** hardcode hex for chrome in a component rule. The few literals that exist (#fff list wells, #000 Classic edges, doc-icon strokes) are the exception, not a pattern.
- **Don't** add new decorative text devices such as small uppercase labels above headings; none exist in the build.
