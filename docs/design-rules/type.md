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

**Owner decision, 3 September 2026**, replacing the 31 July pair of Geist and IBM Plex Sans.
Those two were never deployed. The running site at `brandexperiments.apps.hurulab.com` uses the
pair below, and it is the identity of record: reading the superseded rule produced the wrong
fonts on two concept pages before this file was corrected.

| Role | Face | Used for |
|---|---|---|
| **Title** | **Cascadia Mono** | Display, h1 to h5, labels, navigation, buttons, table headers, the logotype |
| **Body** | **Fustat** | Body, captions, tables, form fields, everything else |

```css
--font-title: "Cascadia Mono", ui-monospace, "SF Mono", Menlo, monospace;
--font-body:  "Fustat", system-ui, "Segoe UI", Roboto, sans-serif;
```

Both are loaded from Google Fonts as variable faces, Fustat at 200 to 800 and Cascadia Mono at
200 to 700.

**The token names changed with the faces.** `--font-heading` is now `--font-title`. Any file
still naming `--font-heading` is stale.

**The mono in the title face is not a third family.** Rule 1 of section 1 bans a third family
and a mono used as a third face. Cascadia Mono is one of the two, not an addition, so the
two-face system is intact and the separately researched number mono is still unadopted.

**Rejected and not to be reopened:** Geist, IBM Plex Sans, Inter, Schibsted Grotesk, Instrument
Sans, Sometype Mono, General Sans, Clash Display, Cabinet Grotesk, Bricolage Grotesque, Public
Sans, Switzer, Noto Sans, Source Sans 3, Satoshi, and every serif.

---

## 3. The scale

**Two ratios, owned by [breakpoints.md](breakpoints.md) section 3: 1.2 at the 360 floor rising
to 1.3 at the 1560 ceiling, on a body of 17px growing to 20px.** Owner decision, 4 August
2026, replacing the single 1.125 ratio, chosen by eye from three researched candidates.

**Headings interpolate on `vw`. Body and below are pure `rem` at the mobile ratio.**

A heading has to grow harder than reading text as the screen grows, which the root clamp alone
cannot do. Body text stays locked to spacing and icons, which are also `rem`. **Both ends of
every heading interpolation are a legal step of a legal ratio**, so a `vw` term never invents
a size outside the scale. There is no step 1: the lede role was dropped by the owner on
4 August 2026, and a step without a job does not exist.

---

## 4. Size tokens

### Headings

| Token | Value | 360 | 768 | 1440 | 1560 | Step |
|---|---|---|---|---|---|---|
| `--text-display-size` | `clamp(3.5832rem, 2.580rem + 4.737vw, 6.2749rem)` | 60.9 | 82.9 | 119.0 | 125.5 | 7 |
| `--text-h1-size` | `clamp(2.9860rem, 2.300rem + 3.240vw, 4.8268rem)` | 50.8 | 66.3 | 92.0 | 96.5 | 6 |
| `--text-h2-size` | `clamp(2.4883rem, 2.032rem + 2.155vw, 3.7129rem)` | 42.3 | 53.2 | 71.1 | 74.3 | 5 |
| `--text-h3-size` | `clamp(2.0736rem, 1.782rem + 1.377vw, 2.8561rem)` | 35.3 | 42.7 | 54.9 | 57.1 | 4 |
| `--text-h4-size` | `clamp(1.7280rem, 1.553rem + 0.825vw, 2.1970rem)` | 29.4 | 34.3 | 42.5 | 43.9 | 3 |
| `--text-h5-size` | `clamp(1.4400rem, 1.347rem + 0.440vw, 1.6900rem)` | 24.5 | 27.7 | 32.9 | 33.8 | 2 |

The ladder stays in order at every one of the four breakpoints. That was checked, not assumed.

**Display is not h1.** Display is the one statement per page, usually the hero. h1 is the page
title in the document outline. On most pages they are the same element and it carries both.

### Body and small

Pure `rem`, so they scale only with the root.

| Token | Value | Step | 360 | 1560 |
|---|---|---|---|---|
| `--text-body-size` | `1rem` | 0 | 17.0px | 20.0px |
| `--text-body-sm-size` | `0.8333rem` | -1 | 14.2px | 16.7px |
| `--text-caption-size` | `0.6944rem` | -2 | 11.8px | 13.9px |

`--text-caption-size` is the floor. **Nothing is ever set smaller**, including legal text.

### Interface

| Token | Size | Step |
|---|---|---|
| `--text-label-size` | `0.6944rem` | -2 |
| `--text-nav-size` | `0.8333rem` | -1 |
| `--text-button-size` | `0.8333rem` | -1 |
| `--text-data-size` | `0.8333rem` | -1 |

---

## 5. Weights

Four, and no more.

| Token | Value | Used for |
|---|---|---|
| `--weight-regular` | 400 | Body, captions, table cells |
| `--weight-medium` | 500 | Labels, navigation |
| `--weight-semibold` | 600 | Buttons, h4, h5, table headers |
| `--weight-bold` | 700 | Display, h1, h2, h3, the logotype |

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
--text-display: var(--weight-bold) var(--text-display-size)/0.95 var(--font-title);
--text-h1:      var(--weight-bold) var(--text-h1-size)/0.95 var(--font-title);
--text-h2:      var(--weight-bold) var(--text-h2-size)/1.0 var(--font-title);
--text-h3:      var(--weight-bold) var(--text-h3-size)/1.05 var(--font-title);
--text-h4:      var(--weight-semibold) var(--text-h4-size)/1.1 var(--font-title);
--text-h5:      var(--weight-semibold) var(--text-h5-size)/1.2 var(--font-title);
--text-body:    var(--weight-regular) var(--text-body-size)/1.5 var(--font-body);
--text-body-sm: var(--weight-regular) var(--text-body-sm-size)/1.5 var(--font-body);
--text-caption: var(--weight-regular) var(--text-caption-size)/1.4 var(--font-body);
--text-label:   var(--weight-medium) var(--text-label-size)/1.2 var(--font-title);
--text-nav:     var(--weight-medium) var(--text-nav-size)/1 var(--font-title);
--text-button:  var(--weight-semibold) var(--text-button-size)/1 var(--font-title);
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

A heading split across two lines. One line `--color-text-primary` at 700, the base-black
half, the other `--color-text-soft`, either lighter in weight or simply grey. **Owner
decision, 13 August 2026: the grey half is `--neutral-600`**, replacing the 4 August
`--neutral-500`, which read too faint beside the base-black half. It passes the large-text
contrast floor with room. See [color.md](color.md) section 4.

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
  text is 24px, or 18.66px at 700.** In this system that means h5 and above qualify at every
  breakpoint.
- **2.4.6 Headings and labels.** A heading describes what follows it. A label names its field.
- **The 16px floor for form inputs.** `--text-body-size` resolves to 17px at 360, above the
  16px threshold that stops iOS Safari zooming on focus. **Never set a form field below
  step 0.**

---

## 12. What fails review

A third family. A `px` font size. `text-transform` in any form. A heading level chosen for its
size. Negative tracking on body text. A label at 600. A weight outside 400, 500, 600 and 700,
with the single 300 display exception. Text below `--text-caption-size`. A form field below step
0. A fixed height on a text container. Two two-tone headings in one viewport. A `vw` term whose
ends are not both legal steps. **A `max-width` or `ch` cap on any text.**
