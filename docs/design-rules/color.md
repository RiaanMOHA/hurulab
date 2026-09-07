# Color

The single owner of every color value, token name, and rule about when color may be used.

`oklch` only. Never hex, never rgb. The hex column is for handing values to other tools. Every
ratio here is computed.

---

## 1. The four hard rules

1. **Never pure black, never pure white.** No `#fff`, `#000`, `oklch(1 0 0)` or `oklch(0 0 0)`
   anywhere, including inside an `rgba()`. `--color-base-white` is the lightest value in the
   system, `--color-base-black` the darkest.
2. **Components name semantic tokens, never ramp steps.** `--color-text-secondary`, never
   `--neutral-700`.
3. **One accented element per view.** If two things are accented, neither is.
4. **Color is never the only carrier of meaning.** Section 8 has the measurement that forces it.

---

## 2. The brand: earthy soft purple, hue 318

Owner decision 30 July 2026, re-approved 31 July against indigo and Chinese red.

Six reasons it won, recorded so it is not argued again: better contrast (6.00:1 against indigo's
5.46:1); better under every form of color blindness (never below 5.60:1); 紫氣東來 and 紫禁城
give it meaning in Chinese culture that indigo has none of; hue 318 carries red so it advances
rather than recedes; at 0.06 chroma it is a dusty plum, not a startup violet; and red was
disqualified structurally, because red is the error color and a red brand breaks the status layer.

**The category risk, recorded 7 September 2026** when the logo research was extracted and
deleted. "Blanding" is a named formula in tech branding: a made-up name, a clean sans-serif,
generous white space, and vibrant color, of which purple and turquoise are the two most
common. A purple geometric identity therefore starts inside the category wallpaper, and
hurulab's does. The hue-318 reasoning above is why this purple is not a startup violet, and it
is not on its own an answer to the problem.

**The documented escape is specificity, not styling:** a genuinely distinctive characteristic
of the company, even an unflattering one, owned and built around. Changing the purple does not
solve it and neither does refining it. Sourcing caveat, kept because the original file kept
it: this rests mainly on Thierry Brunfaut's Fast Company piece, with Bloomberg and Base Design
echoing rather than independently establishing it.

---

## 3. The ramps

**Only steps with a job exist.** A step nobody can name a use for is deleted, because a spare
step gets used decoratively.

### Base, outside the ramps

| Token | oklch | hex | Notes |
|---|---|---|---|
| `--color-base-white` | `0.995 0.002 285` | `#FDFDFF` | The page. Lighter than `neutral-50` |
| `--color-base-black` | `0.160 0.006 285` | `#0D0D10` | Darker than `neutral-950`. 19.14:1 on white |

### Neutral, 50 to 950

Eleven steps, because neutrals do all the structural work: surfaces, hairlines, dividers, four
levels of text, control outlines, disabled, and the pressed and hover states of every dark fill.

| Token | oklch | hex | On page | Job |
|---|---|---|---|---|
| `--neutral-50` | `0.975 0.002 285` | `#F6F6F8` | 1.06:1 | Raised surface, the light tile |
| `--neutral-100` | `0.945 0.003 285` | `#ECECEF` | 1.16:1 | Sunken fill, hover on an outlined control |
| `--neutral-200` | `0.895 0.004 285` | `#DCDCDF` | 1.35:1 | Card hairline, pressed on an outlined control |
| `--neutral-300` | `0.830 0.005 285` | `#C7C7CA` | 1.67:1 | Divider that must be seen |
| `--neutral-400` | `0.730 0.006 285` | `#A7A7AB` | 2.36:1 | Disabled text and disabled borders |
| `--neutral-500` | `0.620 0.006 285` | `#86868A` | 3.59:1 | **Lightest outline allowed on a control.** Icons, large text, the two-tone gray |
| `--neutral-600` | `0.510 0.008 285` | `#65656B` | 5.67:1 | Labels, captions, placeholder text |
| `--neutral-700` | `0.420 0.008 285` | `#4C4C51` | 8.35:1 | Body text, hover border on a control |
| `--neutral-800` | `0.340 0.008 285` | `#37373C` | 11.60:1 | Hover fill on a dark control |
| `--neutral-900` | `0.260 0.006 285` | `#242427` | 15.33:1 | Deep field |
| `--neutral-950` | `0.200 0.006 285` | `#161619` | 17.85:1 | Rest fill on a dark control |

### Purple, six steps

| Token | oklch | hex | On page | On black | Job |
|---|---|---|---|---|---|
| `--purple-100` | `0.940 0.030 318` | `#F4E5F9` | 1.19:1 | 16.13:1 | Wash behind a panel or a quote |
| `--purple-200` | `0.890 0.045 318` | `#E8D2EF` | 1.39:1 | 13.75:1 | Text selection |
| `--purple-300` | `0.800 0.060 318` | `#CEB2D7` | 1.88:1 | 10.17:1 | **The fill.** Badge, the button circle |
| `--purple-400` | `0.700 0.080 318` | `#B48FBF` | 2.72:1 | 7.03:1 | **The accent on a dark tile.** Focus ring on dark |
| `--purple-600` | `0.510 0.115 318` | `#814F90` | 6.00:1 | 3.19:1 | **The logo mark, the asterisk.** Accent text, the focus ring |
| `--purple-700` | `0.420 0.110 318` | `#653773` | 8.82:1 | 2.17:1 | Pressed, and visited links |

**300 fills, 600 draws.** `--purple-300` as text is 1.88:1 and invisible. `--purple-600` as a
large field is too heavy. There is no `500`, `800` or `900`: nothing needed them.

### Success, error and warning, three steps each

| Token | oklch | hex | On page | Job |
|---|---|---|---|---|
| `--success-100` | `0.945 0.035 145` | `#DFF4DF` | 1.14:1 | Message surface |
| `--success-600` | `0.510 0.130 145` | `#2B7932` | 5.36:1 | Border and icon |
| `--success-700` | `0.420 0.110 145` | `#1C5C23` | 7.95:1 | Text |
| `--error-100` | `0.945 0.025 27` | `#FDE7E4` | 1.17:1 | Message surface, invalid field surface |
| `--error-600` | `0.510 0.155 27` | `#AD3731` | 6.13:1 | Border and icon |
| `--error-700` | `0.420 0.135 27` | `#882420` | 8.93:1 | Text |
| `--warning-100` | `0.955 0.045 60` | `#FFEAD3` | 1.15:1 | Message surface |
| `--warning-600` | `0.550 0.170 50` | `#BB4900` | 5.08:1 | Border and icon |
| `--warning-700` | `0.460 0.150 45` | `#973200` | 7.47:1 | Text |

**Warning exists by owner decision, 4 August 2026**, reversing the earlier rule that amber
stayed out until something could be destroyed. Same three-step shape as success and error,
and the same law: a warning carries an icon and a word, never color alone. **The hue is a
burnt orange, not amber: the owner rejected the first amber trio as brown.** Orange dark
enough to pass contrast always browns; these are the most orange values that still pass.

**There is no blue and no info role.** An informational notice is not a status. It is text on
`--color-surface-sunken`.

---

## 4. Semantic tokens

The only names a component may use.

### Surface

| Token | Points at |
|---|---|
| `--color-surface-page` | `--color-base-white` |
| `--color-surface-raised` | `--neutral-50` |
| `--color-surface-sunken` | `--neutral-100` |
| `--color-surface-inverse` | `--color-base-black` |
| `--color-surface-brand-wash` | `--purple-100` |
| `--color-surface-brand` | `--purple-300` |

### Text

| Token | Points at | On page |
|---|---|---|
| `--color-text-primary` | `--color-base-black` | 19.14:1 |
| `--color-text-secondary` | `--neutral-700` | 8.35:1 |
| `--color-text-tertiary` | `--neutral-600` | 5.67:1 |
| `--color-text-soft` | `--neutral-600` | 5.67:1 |
| `--color-text-placeholder` | `--neutral-600` | 5.67:1 |
| `--color-text-disabled` | `--neutral-400` | 2.36:1 |
| `--color-text-brand` | `--purple-600` | 6.00:1 |
| `--color-text-inverse` | `--color-base-white` | 19.14:1 |
| `--color-text-on-brand` | `--color-base-black` | 10.17:1 |

`--color-text-soft` is the gray half of a two-tone heading and nothing else. **Owner ruling,
7 September 2026: the two tones are `--neutral-950` (17.85:1) and `--neutral-600` (5.67:1), so
`--color-text-soft` is `--neutral-600`.** This reverses the 4 September pairing of 950 and 800,
which put the two halves so close together that the contrast between them stopped reading, and
reinstates the 13 August value. It clears the large-text floor with room and is still never
body text. [type.md](type.md) section 9 owns how the pair is used.

### Border

| Token | Points at | On page | Allowed on a control |
|---|---|---|---|
| `--color-border-subtle` | `--neutral-200` | 1.35:1 | **no** |
| `--color-border-default` | `--neutral-300` | 1.67:1 | **no** |
| `--color-border-interactive` | `--neutral-500` | 3.59:1 | yes, the lightest permitted |
| `--color-border-hover` | `--neutral-700` | 8.35:1 | yes |
| `--color-border-strong` | `--color-base-black` | 19.14:1 | yes |
| `--color-border-focus` | `--purple-600` | 6.00:1 | yes |

WCAG 1.4.11 requires 3:1 for the boundary of an interactive control. `subtle` and `default` do
not clear it and are for card edges and dividers only. **This is the easiest mistake in the
system: an outline that matches the card hairlines is inaccessible.**

### Status

| Token | Points at |
|---|---|
| `--color-success-surface` / `-border` / `-text` | `--success-100` / `-600` / `-700` |
| `--color-error-surface` / `-border` / `-text` | `--error-100` / `-600` / `-700` |
| `--color-warning-surface` / `-border` / `-text` | `--warning-100` / `-600` / `-700` |
| `--color-disabled-surface` / `-border` / `-text` | `--neutral-100` / `--neutral-200` / `--neutral-400` |

---

## 5. States

**Two rules generate every state below.**

1. **Hover lightens a dark fill by one step, and fills a transparent one.**
2. **Pressed goes one step past rest, in the direction away from hover.**

Focus never changes a fill. It is always the same ring, everywhere, so it is learnable.

### Primary button

**Owner ruling, 8 August 2026: the primary is the brand fill, not a dark fill.** This is the
button approved on the short coming-soon page, and it replaces the near-black primary the
system carried until now. Hover lightens rather than darkens, which is rule 1 read against a
light fill.

| State | Fill | Text | Border |
|---|---|---|---|
| Rest | `--color-surface-brand`, `--purple-300` | `--color-text-on-brand` 10.17:1 | none |
| Hover | `--purple-400` | `--color-text-on-brand` 7.03:1 | none |
| Pressed | `--purple-600` | `--color-text-inverse` 6.00:1 | none |
| Focus | rest | rest | ring, see section 6 |
| Disabled | `--color-disabled-surface` | `--color-disabled-text` | none |

**The box never moves and never takes a shadow at any state.** The label rolls on hover and
on focus, owned by [motion.md](motion.md) section 4; this file owns only the colors it moves
between.

**A trailing icon is never colored separately:** it inherits the label's text color at every
state, per [icons.md](icons.md) section 3. It is optional on any variant rather than a variant
of its own, per [layout.md](layout.md) section 5.

### Border button

`button-border`.

| State | Fill | Text | Border |
|---|---|---|---|
| Rest | transparent | `--color-text-primary` | `1px --color-border-interactive` |
| Hover | `--color-surface-sunken` | `--color-text-primary` 16.52:1 | `1px --color-border-hover` |
| Pressed | `--neutral-200` | `--color-text-primary` 14.17:1 | `1px --color-border-strong` |
| Focus | rest | rest | ring outside the border |
| Disabled | transparent | `--color-disabled-text` | `1px --color-disabled-border` |

### Ghost button, and links

`button-ghost`. Links take the same treatment, which is why they are one table.

| State | Treatment |
|---|---|
| Rest | `--color-text-primary` |
| Hover | `--color-text-brand` 6.00:1, plus the underline sweep in [motion.md](motion.md) |
| Pressed | `--purple-700` 8.82:1 |
| Visited | `--purple-700`. Prose only, never navigation |
| Focus | ring |
| Disabled | `--color-text-disabled`, no underline, `cursor: not-allowed` |

### Icon-only buttons

`button-icon` carries an edge, `button-icon-ghost` does not. The glyph is the whole control, so
it takes the text color at every state. Names owned by [layout.md](layout.md) section 5.1.

| State | `button-icon` | `button-icon-ghost` |
|---|---|---|
| Rest | transparent, `1px --color-border-interactive`, `--color-text-primary` | no fill, no border, `--color-text-secondary` 8.35:1 |
| Hover | `--color-surface-sunken`, `1px --color-border-hover` | `--color-surface-sunken`, `--color-text-primary` |
| Pressed | `--neutral-200`, `1px --color-border-strong` | `--neutral-200`, `--color-text-primary` |
| Focus | ring | ring |
| Disabled | `--color-disabled-surface`, `--color-disabled-text` | no fill, `--color-disabled-text` |

### Text input, textarea, select

| State | Fill | Border | Text |
|---|---|---|---|
| Rest | `--color-surface-page` | `1px --color-border-interactive` | `--color-text-primary` |
| Placeholder | rest | rest | `--color-text-placeholder` 5.67:1 |
| Hover | rest | `1px --color-border-hover` | rest |
| Focus | rest | `1px --color-border-focus` plus the ring | rest |
| Invalid | `--color-error-surface` | `1px --color-error-border` 6.13:1 | `--color-text-primary` |
| Valid | rest | `1px --color-success-border` 5.36:1 | rest |
| Disabled | `--color-disabled-surface` | `1px --color-disabled-border` | `--color-disabled-text` |

Helper text is `--color-text-tertiary`. Error text is `--color-error-text` at 8.93:1, and it
always carries an icon, never color alone.

**The focus ring stays purple on an invalid field.** Focus is one thing everywhere. The red
border already carries the error.

### Checkbox and radio

| State | Fill | Border | Glyph |
|---|---|---|---|
| Unchecked | `--color-surface-page` | `1px --color-border-interactive` | none |
| Unchecked hover | `--color-surface-sunken` | `1px --color-border-hover` | none |
| Checked | `--color-base-black` | none | `--color-text-inverse` 19.14:1 |
| Checked hover | `--neutral-800` | none | `--color-text-inverse` 11.60:1 |
| Focus | unchanged | unchanged | ring |
| Disabled unchecked | `--color-disabled-surface` | `1px --color-disabled-border` | none |
| Disabled checked | `--neutral-400` | none | `--color-text-inverse` |

**Checked is black, not purple.** Five checked boxes in purple is five accents, which breaks
hard rule 3.

### Card and tile

| State | Fill | Border | Other |
|---|---|---|---|
| Rest | `--color-surface-raised` | `1px --color-border-subtle` | no shadow |
| Hover | unchanged | unchanged | `translateY(-6px)` plus shadow, per [motion.md](motion.md) |
| Focus | unchanged | unchanged | ring |

Color does not change on card hover. Movement carries it.

### Navigation

| State | Treatment |
|---|---|
| Rest | `--color-text-primary` |
| Hover | `--color-text-brand` |
| Current | `--color-text-brand`, plus `aria-current="page"` |
| Focus | ring |

### Selection

`::selection` is `--purple-200` with `--color-text-primary` on it, 13.75:1.

---

## 6. Focus

**Never two lines at once. Owner ruling, 8 August 2026.** An outline sits outside the element,
so on anything that already has a border it draws a second edge around the first. That is
forbidden everywhere in this system, on every component, with no exception.

**So focus has two forms, and the component decides which, not taste.**

**If it has a border, the border thickens.** To `2px`, one step darker, and the padding loses
`1px` on each side so the control does not change size.

| Control | Rest | Focus |
|---|---|---|
| `button-primary` | no border, `--purple-300` fill | `2px --purple-400` |
| `button-border` | `1px --color-border-interactive` | `2px --color-border-focus` |
| `button-ghost` | no border | **none.** There is nothing to thicken |
| Input | `1px --color-border-interactive` | `2px --color-border-focus` |
| Checkbox | `1px --color-border-interactive` | `2px --color-border-focus` |

**If it has no border, it takes the ring.** A link, or any bare interactive element with no edge
of its own:

```css
:focus { outline: none; }
:focus-visible {
  outline: 0.125rem solid var(--color-border-focus);
  outline-offset: 0.1875rem;
}
```

**A component declaring its own focus must set `outline: none` alongside it**, or the fallback
above draws the second line this rule exists to prevent.

On a dark tile the focus color becomes `--purple-400`, since `--purple-600` is 3.19:1 there and
fails.

`:focus-visible`, never `:focus`. **Never remove the focus indicator without replacing it.**

---

## 7. Contrast

AA is 4.5:1 for body text, 3:1 for large text and control boundaries. Bold means forbidden.

| Text | page | raised | sunken | brand wash | brand fill | success | error |
|---|---|---|---|---|---|---|---|
| `text-primary` | 19.14 | 18.06 | 16.52 | 16.13 | 10.17 | 16.72 | 16.40 |
| `text-secondary` | 8.35 | 7.88 | 7.21 | 7.04 | **4.44** | 7.30 | 7.16 |
| `text-tertiary` | 5.67 | 5.36 | 4.90 | 4.78 | **3.01** | 4.96 | 4.86 |
| `text-brand` | 6.00 | 5.66 | 5.18 | 5.06 | **3.19** | 5.24 | 5.14 |
| `success-text` | 7.95 | 7.50 | 6.87 | 6.70 | **4.22** | 6.95 | 6.81 |
| `error-text` | 8.93 | 8.43 | 7.71 | 7.53 | **4.74** | 7.80 | 7.65 |
| `text-disabled` | **2.36** | **2.23** | **2.03** | **1.98** | **1.25** | **2.06** | **2.02** |

**What it decides.** The brand fill carries `--color-text-on-brand` and nothing else. Tertiary
text is safe everywhere except the brand fill. Every status text clears AA on every light
surface. Disabled fails everywhere by design: WCAG 1.4.3 exempts inactive controls, and a
disabled control as legible as a live one is the worse failure.

### On the dark tile

| Value | On `--color-surface-inverse` |
|---|---|
| `--color-text-inverse` | 19.14:1 |
| `--color-text-inverse` at 75%, secondary text | 10.82:1 |
| `--color-text-inverse` at 15%, borders | 1.50:1, non-text only |
| `--color-text-inverse` at 5%, inner panels | 1.11:1, non-text only |
| `--purple-400` | 7.03:1 |
| `--purple-600` | 3.19:1, **forbidden as text on dark** |

Overlays are `--color-base-white` at an alpha, never white at an alpha. Write
`oklch(0.995 0.002 285 / 0.75)`.

---

## 8. Color blindness

Simulated for protanopia, deuteranopia and tritanopia.

**The brand holds.** Purple never drops below 5.60:1. Its hue shifts toward blue-gray under
protanopia, so it stops looking purple, but it never stops being legible.

**Success and error do not.** Under deuteranopia, the most common form, `--success-700` renders
`#4E4D26` and `--error-700` renders `#565617`. Nearly the same olive. Warning's amber lives in
that same olive family under deuteranopia, which is why the rule below is absolute.

**So: every status carries an icon and a word.** A red border alone is not an error. A green dot
alone is not success. WCAG 1.4.1, and it is not optional.

---

## 9. Where color is not used

- Never to decorate. If removing it changes nothing the reader understands, remove it.
- Never as the only difference between two things.
- Never a gradient, in a fill or in text.
- Never gray text on the brand fill.
- Never a status hue outside its status. Green does not mean eco, red does not mean hot.
- Never a second accent.
- Never a color that needs a legend. That is a job for text.

---

## 10. What fails review

Pure black or white in any form. A raw ramp step named in a component. A hex or rgb value. A
second accent hue. A gradient. `--neutral-200` or `--neutral-300` as a control outline. Purple
300 as text, or purple 600 as text on dark. Gray text on the brand fill. A status carried by
color alone. **A focus ring drawn outside a border, making two edges at once.** A removed focus
indicator with nothing in its place. A blue reintroduced without a stated job.
`--color-text-soft` on anything smaller than a heading.
