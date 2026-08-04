# Typography

The single owner of the two faces, every size, weight, tracking and leading, and every rule about
how text is set. Sizes derive from the scale in [breakpoints.md](breakpoints.md).

---

## 1. The four hard rules

1. **Two faces, no more.** One for headings, labels, navigation and buttons. One for everything
   else. No third family, no mono.
2. **Components name semantic role tokens, never a raw step.** `--text-h2-size`, never
   `--step-10`.
3. **Casing is owned by [copy.md](copy.md).** Never uppercase, and there is no `text-transform`
   in this system.
4. **No `px` in type.** Every size is `rem`, or `rem` interpolated on `vw` between two legal
   steps of the scale.

---

## 2. The two faces

**Owner decision, 31 July 2026.**

| Role | Face | Used for |
|---|---|---|
| **Heading** | **Geist** | Display, h1 to h5, labels, navigation, buttons, table headers, the wordmark |
| **Body** | **IBM Plex Sans** | Body, lede, captions, tables, form fields, everything else |

```css
--font-heading: "Geist", system-ui, sans-serif;
--font-body: "IBM Plex Sans", system-ui, sans-serif;
```

**Why this pair.**

- **They differ where it matters and match where it should.** Plex is a humanist-inflected
  neo-grotesque with drawn detail: angled terminals, the tail on the `l`, the flag on the `f`,
  the shaped `a` and `g`. Those read at 16px and vanish at 100px. Geist is a rationalized neutral
  grotesk that stays clean at display size. So the two separate in reading and unify in
  structure, because their proportions and x-heights are close.
- **Plex was drawn for data** and has true tabular lining figures. The argument on this site is
  numeric: 76 commits, 121 commits, NT$200,000, 20 percent.
- **Satoshi was rejected** because it is too close to Geist. Two neutral grotesks with the same
  skeleton is a two-face system doing the work of one.

**Rejected and not to be reopened:** Inter, Schibsted Grotesk, Instrument Sans, Sometype Mono,
General Sans, Clash Display, Cabinet Grotesk, Bricolage Grotesque, Public Sans, Switzer, Noto
Sans, Source Sans 3, Satoshi, and every serif.

---

## 3. The scale

Ratio **1.125**, from [breakpoints.md](breakpoints.md). The root clamps 16px at 360 to 18px at
1560, so every `rem` value grows by exactly 1.125 across the range.

| Step | rem | at 360 | at 1560 |
|---|---|---|---|
| `-2` | 0.790 | 12.6px | 14.2px |
| `-1` | 0.889 | 14.2px | 16.0px |
| `0` | 1.000 | 16.0px | 18.0px |
| `1` | 1.125 | 18.0px | 20.3px |
| `2` | 1.266 | 20.3px | 22.8px |
| `3` | 1.424 | 22.8px | 25.6px |
| `4` | 1.602 | 25.6px | 28.8px |
| `5` | 1.802 | 28.8px | 32.4px |
| `6` | 2.027 | 32.4px | 36.5px |
| `7` | 2.281 | 36.5px | 41.1px |
| `8` | 2.566 | 41.1px | 46.2px |
| `10` | 3.247 | 52.0px | 58.4px |
| `13` | 4.624 | 74.0px | 83.2px |
| `16` | 6.584 | 105.3px | 118.5px |

**Headings interpolate on `vw`. Body and below are pure `rem`.**

A heading has to shrink for line fitting, which the root clamp cannot do because it only moves
16px to 18px. Body text does not: it has to stay locked to spacing and icons, which are also
`rem`. **Both ends of every interpolation are legal steps on the scale**, so a `vw` term never
invents a size outside it.

---

## 4. Size tokens

### Headings

| Token | Value | 360 | 768 | 1440 | 1560 | Steps |
|---|---|---|---|---|---|---|
| `--text-display-size` | `clamp(2.566rem, 1.157rem + 6.260vw, 6.584rem)` | 41.1 | 67.4 | 110.7 | 118.5 | 8 → 16 |
| `--text-h1-size` | `clamp(2.027rem, 1.116rem + 4.047vw, 4.624rem)` | 32.4 | 49.7 | 78.1 | 83.2 | 6 → 13 |
| `--text-h2-size` | `clamp(1.802rem, 1.295rem + 2.252vw, 3.247rem)` | 28.8 | 38.9 | 55.5 | 58.4 | 5 → 10 |
| `--text-h3-size` | `clamp(1.602rem, 1.364rem + 1.058vw, 2.281rem)` | 25.6 | 30.9 | 39.5 | 41.1 | 4 → 7 |
| `--text-h4-size` | `clamp(1.424rem, 1.291rem + 0.589vw, 1.802rem)` | 22.8 | 26.1 | 31.5 | 32.4 | 3 → 5 |
| `--text-h5-size` | `clamp(1.266rem, 1.211rem + 0.246vw, 1.424rem)` | 20.3 | 22.1 | 25.1 | 25.6 | 2 → 3 |

The ladder stays in order at every one of the four breakpoints. That was checked, not assumed.

**Display is not h1.** Display is the one statement per page, usually the hero. h1 is the page
title in the document outline. On most pages they are the same element and it carries both.

### Body and small

Pure `rem`, so they scale only with the root.

| Token | Value | Step | 360 | 1560 |
|---|---|---|---|---|
| `--text-lede-size` | `1.125rem` | 1 | 18.0px | 20.3px |
| `--text-body-size` | `1rem` | 0 | 16.0px | 18.0px |
| `--text-body-sm-size` | `0.889rem` | -1 | 14.2px | 16.0px |
| `--text-caption-size` | `0.790rem` | -2 | 12.6px | 14.2px |

`--text-caption-size` is the floor. **Nothing is ever set smaller**, including legal text.

### Interface

| Token | Size | Step |
|---|---|---|
| `--text-label-size` | `0.790rem` | -2 |
| `--text-nav-size` | `0.889rem` | -1 |
| `--text-button-size` | `0.889rem` | -1 |
| `--text-data-size` | `0.889rem` | -1 |

---

## 5. Weights

Four, and no more.

| Token | Value | Used for |
|---|---|---|
| `--weight-regular` | 400 | Body, lede, captions, table cells |
| `--weight-medium` | 500 | Labels, navigation |
| `--weight-semibold` | 600 | Buttons, h4, h5, table headers |
| `--weight-bold` | 700 | Display, h1, h2, h3, the wordmark |

**Why four and not three.** A letterspaced label at 600 reads heavy and closes up the tracking
that makes it a label. 500 is the correct weight for small letterspaced text, and it is the only
reason the fourth weight exists.

**One permitted exception below 400.** The grey half of a two-tone display heading may be 300,
and only at display size, where the stroke can carry it. Nowhere else.

---

## 6. Tracking and leading

**Tracking tightens as size grows. Leading loosens as size shrinks.** That single rule generates
the table.

| Role | Weight | Tracking | Leading |
|---|---|---|---|
| Display | 700 | `-0.04em` | `0.95` |
| h1 | 700 | `-0.04em` | `0.95` |
| h2 | 700 | `-0.03em` | `1.0` |
| h3 | 700 | `-0.02em` | `1.05` |
| h4 | 600 | `-0.02em` | `1.1` |
| h5 | 600 | `-0.01em` | `1.2` |
| Lede | 400 | `0` | `1.4` |
| Body | 400 | `0` | `1.5` |
| Body small | 400 | `0` | `1.5` |
| Caption | 400 | `0` | `1.4` |
| Label | 500 | `0.14em` | `1.2` |
| Nav | 500 | `0` | `1` |
| Button | 600 | `0` | `1` |
| Data | 400 | `0` | `1.4` |

**Body and below never take negative tracking.** Tightening body text costs legibility and buys
nothing.

**Labels take positive tracking**, which is what makes them read as a record rather than as text.
This replaces capitals entirely: see section 8.

**Figures.** `--text-data-size` and anything in a table column takes
`font-variant-numeric: tabular-nums`. Prose takes proportional figures.

---

## 7. Composed role tokens

The only names a component may use. Each composes the primitives above.

```css
--text-display: var(--weight-bold) var(--text-display-size)/0.95 var(--font-heading);
--text-h1:      var(--weight-bold) var(--text-h1-size)/0.95 var(--font-heading);
--text-h2:      var(--weight-bold) var(--text-h2-size)/1.0 var(--font-heading);
--text-h3:      var(--weight-bold) var(--text-h3-size)/1.05 var(--font-heading);
--text-h4:      var(--weight-semibold) var(--text-h4-size)/1.1 var(--font-heading);
--text-h5:      var(--weight-semibold) var(--text-h5-size)/1.2 var(--font-heading);
--text-lede:    var(--weight-regular) var(--text-lede-size)/1.4 var(--font-body);
--text-body:    var(--weight-regular) var(--text-body-size)/1.5 var(--font-body);
--text-body-sm: var(--weight-regular) var(--text-body-sm-size)/1.5 var(--font-body);
--text-caption: var(--weight-regular) var(--text-caption-size)/1.4 var(--font-body);
--text-label:   var(--weight-medium) var(--text-label-size)/1.2 var(--font-heading);
--text-nav:     var(--weight-medium) var(--text-nav-size)/1 var(--font-heading);
--text-button:  var(--weight-semibold) var(--text-button-size)/1 var(--font-heading);
--text-data:    var(--weight-regular) var(--text-data-size)/1.4 var(--font-body);
```

Tracking is not part of the `font` shorthand, so it is set alongside from the table in section 6.

---

## 8. Casing

**Owned by [copy.md](copy.md) section 2.** Sentence case by default, Title Case on calls to
action, lowercase for the name. Never uppercase.

The one consequence that belongs here: **a label is made to read as a label by size and
letterspacing, never by `text-transform`.** There is no `uppercase` utility in this system.

---

## 9. The two-tone heading

A heading split across two lines. One line `--color-text-primary` at 700, the other
`--color-text-tertiary`, either lighter in weight or simply grey.

> **The software** *Taiwan's best companies* **should already have.**

**The grey half is the setup. The ink half is the claim, and it must survive on its own.** If a
reader saw only the black words, the sentence should still mean something.

Use it on section headings. **Never twice in one viewport.**

---

## 10. Measure

**No max-width on text, ever. Text runs to the full margins.** Owner decision, made absolute
4 August 2026. No reading column, no `ch` cap on any role, headings and captions included. The
two earlier exceptions (display at `18ch`, caption at `62ch`) are withdrawn.

**A measured consequence, recorded rather than hidden.** At 1560 with `3rem` padding, full-bleed
body text runs roughly 150 characters per line. The readable range is 45 to 75. WCAG 1.4.8 caps
it at 80, and that is a AAA criterion rather than AA, so this does not fail the target.

**The 30 July open question is closed.** Body prose does not cap. This file has no open
decisions.

---

## 11. Accessibility

- **1.4.4 Resize text.** Every size is `rem`, so 200 percent browser zoom works with no
  horizontal scroll and no clipping. No `px` font sizes anywhere.
- **1.4.12 Text spacing.** The layout must survive a user stylesheet forcing line-height 1.5,
  paragraph spacing 2em, letter-spacing 0.12em and word-spacing 0.16em. **Never set a fixed
  height on anything containing text**, and never use `overflow: hidden` on a text container.
- **1.3.1 Info and relationships.** Heading levels follow the document outline and are never
  chosen for size. If an h2 needs to look smaller, change its token, not its tag.
- **1.4.3 Contrast.** Owned by [color.md](color.md). Body clears 4.5:1, large text 3:1. **Large
  text is 24px, or 18.66px at 700.** In this system that means h4 and above qualify at every
  breakpoint, and lede does not.
- **2.4.6 Headings and labels.** A heading describes what follows it. A label names its field.
- **The 16px floor for form inputs.** `--text-body-size` resolves to 16px at 360, which is what
  stops iOS Safari zooming on focus. **Never set a form field below step 0.**

---

## 12. What fails review

A third family. A `px` font size. `text-transform` in any form. A heading level chosen for its
size. Negative tracking on body text. A label at 600. A weight outside 400, 500, 600 and 700,
with the single 300 display exception. Text below `--text-caption-size`. A form field below step
0. A fixed height on a text container. Two two-tone headings in one viewport. A `vw` term whose
ends are not both legal steps. **A `max-width` or `ch` cap on any text.**
