# Typography

The single owner of the two faces, every size, weight, tracking and leading, and every rule about
how text is set. Sizes derive from the scale in [breakpoints.md](breakpoints.md).

---

## 1. The four hard rules

1. **Two faces, no more.** One for headings, labels, navigation and buttons. One for everything
   else. No third family, no mono.
2. **Components name semantic role tokens, never a raw step.** `--text-h2-size`, never
   `--step-10`.
3. **Casing is owned by [copy.md](copy.md)**, including the ban on uppercase. There is no
   `text-transform` anywhere in this system.
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
| **Body** | **Fustat** | Body, tables, form fields, everything else |

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
two-face system is intact. **Numbers are set in Cascadia Mono**, owner instruction, 10 September
2026, everywhere a number appears: prices, ratios, dates, counts, table cells. The number mono
researched on 3 September, DM Mono, is not adopted, and the identity page's DM Mono declaration
was withdrawn the same day. A number takes the size and leading of the text it sits with.

**Rejected and not to be reopened:** Geist, IBM Plex Sans, Inter, Schibsted Grotesk, Instrument
Sans, Sometype Mono, General Sans, Clash Display, Cabinet Grotesk, Bricolage Grotesque, Public
Sans, Switzer, Noto Sans, Source Sans 3, Satoshi, and every serif.

---

## 3. The scale

**Owned by [breakpoints.md](breakpoints.md) section 3. Body is 16px on mobile and that is the
floor**, owner instruction 7 September 2026, growing to 20px at 1560 and never below 16.
**Body and everything under it step by 1.125.** **Headings keep two ratios**, 1.2 at the 360
floor rising to 1.3 at the 1560 ceiling, the owner's 4 August 2026 choice, which the
7 September instruction did not reopen.

**Headings interpolate on `vw`. Body and below are pure `rem` at 1.125.**

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

Pure `rem` at 1.125, so they scale only with the root.

| Token | Value | Step | 360 | 1560 |
|---|---|---|---|---|
| `--text-body-lg-size` | `1.125rem` | +1 | 18.0px | 22.5px |
| `--text-body-size` | `1rem` | 0 | 16.0px | 20.0px |
| `--text-body-sm-size` | `0.8889rem` | -1 | 14.2px | 17.8px |

**There is no caption role.** Owner instruction, 7 September 2026: body large, body, body
small, and nothing else in this group.

### Interface

Three label sizes, continuing the same 1.125 ratio, owner instruction 7 September 2026.

| Token | Value | Step | 360 | 1560 |
|---|---|---|---|---|
| `--text-label-lg-size` | `0.8889rem` | -1 | 14.2px | 17.8px |
| `--text-label-size` | `0.7901rem` | -2 | 12.6px | 15.8px |
| `--text-label-sm-size` | `0.7023rem` | -3 | 11.2px | 14.0px |

`--text-label-sm-size` is the floor at 11.2px. **Nothing is ever set smaller**, including legal
text.

**Mono has no size of its own.** It takes the size and leading of whatever text it sits with: a
number beside body copy is body size, a number beside body small is body small size.

---

## 5. Weights

Four, and no more.

| Token | Value | Used for |
|---|---|---|
| `--weight-regular` | 400 | Body, table cells |
| `--weight-medium` | 500 | Labels, navigation |
| `--weight-semibold` | 600 | Buttons, h4, h5, table headers |
| `--weight-bold` | 700 | Display, h1, h2, h3, the logotype |

**Why four and not three.** A letterspaced label at 600 reads heavy and closes up the tracking
that makes it a label. 500 is the correct weight for small letterspaced text, and it is the only
reason the fourth weight exists.

**No exceptions below 400.** The 300 weight for the gray half of a two-tone display heading is
withdrawn, owner ruling 7 September 2026: both halves of a two-tone heading are weight 700 and
the difference between them is tone alone, per section 9.

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
| Label | 500 | `0` | `1.2` |
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
--text-body-lg: var(--weight-regular) var(--text-body-lg-size)/1.45 var(--font-body);
--text-body:    var(--weight-regular) var(--text-body-size)/1.5 var(--font-body);
--text-body-sm: var(--weight-regular) var(--text-body-sm-size)/1.5 var(--font-body);
--text-label-lg:var(--weight-medium) var(--text-label-lg-size)/1.2 var(--font-title);
--text-label:   var(--weight-medium) var(--text-label-size)/1.2 var(--font-title);
--text-label-sm:var(--weight-medium) var(--text-label-sm-size)/1.2 var(--font-title);
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

## 9. The dual-tone heading

**Headings are dual-tone.** Owner instruction, 10 September 2026: a heading is set in two
tones as its normal form, at every level, not as a treatment applied to some headings. Earlier
rulings call this the two-tone heading; it is the same thing.

**The two tones are `--neutral-950` for the dark half and `--neutral-600` for the lighter half.
Both at weight 700.** Owner ruling, 7 September 2026, reversing the 4 September pairing of 950
and 800, which put the halves so close together that the difference stopped reading. **Both
halves are the same weight**: the difference is tone alone. [color.md](color.md) section 4
owns the values, where the lighter half is the token `--color-text-soft`.

> **The software** *Taiwan's best companies* **should already have.**

**The gray half is the setup. The ink half is the claim, and it must survive on its own.** If a
reader saw only the black words, the sentence should still mean something.

**The brand color appears once.** Owner ruling, 4 September 2026: on a page using this
treatment, the brand color goes on the single most important word or call to action, and
nowhere else. A brand color spent as a general accent stops marking anything.

**The old limit of one per viewport is withdrawn**, as a consequence of every heading carrying
it: two headings in one viewport are both dual-tone.

---

## 10. Measure

**No max-width on text, ever. Text runs to the full margins.** Owner decision, made absolute
4 August 2026. No reading column, no `ch` cap on any role. The two earlier exceptions
(display at `18ch`, and a 62ch cap on the smallest body role) are withdrawn.

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
- **The 16px floor for form inputs.** `--text-body-size` resolves to exactly 16px at 360, which
  is the threshold that stops iOS Safari zooming on focus. It sits on the line rather than
  above it, so **a form field is never set below step 0.**

---

## 12. What fails review

A third family. A `px` font size. `text-transform` in any form. A heading level chosen for its
size. Negative tracking on body text. A label at 600. A weight outside 400, 500, 600 and 700,
and nothing outside them. Text below `--text-label-sm-size`. A form field below step
0. A fixed height on a text container. Two two-tone headings in one viewport. A `vw` term whose
ends are not both legal steps. **A `max-width` or `ch` cap on any text.**
