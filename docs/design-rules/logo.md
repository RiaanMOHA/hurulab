# The logo

Owner decision, 31 July 2026. This file owns the logo and nothing else.

---

## 1. What it is

**A drawn six-arm mark, then the logotype.** Owner decision, 3 September 2026, replacing the
31 July rule that the mark was the heading typeface's own asterisk glyph. The running site at
`brandexperiments.apps.hurulab.com` has carried the drawn mark for some time; this file had not
caught up, and reading it produced the wrong mark on two concept pages.

| Part | Rule |
|---|---|
| The mark | One SVG path in `--color-text-brand`, which is `--purple-600` |
| The logotype | The title face from [type.md](type.md), weight 700, `--color-base-black` |

Nothing else is part of the logo. No container, no box, no rounded tile behind it, no second
color, no tagline locked to it.

## 2. The mark, and how it sits

**One path on a 100 by 100 box.** Six arms: one horizontal pair and two diagonal pairs, cut as
a single path so the whole mark takes one fill. It is not a font glyph and not six separate
shapes.

```html
<svg viewBox="0 0 100 100" role="img" aria-label="hurulab">
  <path fill="currentColor" d="M66.0 58.0L96.0 58.0L96.0 42.0L66.0 42.0ZM34.0 58.0L4.0 58.0L4.0 42.0L34.0 42.0ZM51.1 67.9L66.1 93.8L79.9 85.8L64.9 59.9ZM35.1 40.1L20.1 14.2L33.9 6.2L48.9 32.1ZM35.1 59.9L20.1 85.8L33.9 93.8L48.9 67.9ZM51.1 32.1L66.1 6.2L79.9 14.2L64.9 40.1Z"/>
</svg>
```

Beside the logotype it is set slightly larger than the letters and vertically centred by the
lockup rather than by a baseline offset, because it is a drawn shape rather than punctuation:

```css
.lockup svg { width: 1.18em; height: 1.18em; flex: none; color: var(--color-text-brand); }
```

The size is in `em`, so the relationship holds at every size without a second rule.

**The superseded asterisk values are withdrawn.** The typeface asterisk at `font-size: 1.3em`
and `vertical-align: 0.1em`, and the owner's 5 August correction that produced them, are
history now and are recorded in `docs/decisions.md`. Do not reapply them.

## 3. Casing

`hurulab`, one word, lowercase, always. This is the single exception to the sentence-case rule in
[copy.md](copy.md), because it is how the name is spelled rather than a styling choice. Never
`Hurulab`, never `HuruLab`, never `Huru Lab`. The mark never becomes a capital letter
substitute.

## 4. Motion and interaction, the one open piece

**Superseded by section 1.** The 4 August decision that the typeface's asterisk was the logo,
and its dropping of the custom vector, no longer stand: a drawn mark is deployed and is the
identity of record.

What is wanted instead, and is still to be designed: **the logo should carry some interaction
and motion.** How the mark behaves, on arrival, on hover, or both, is open. Whatever is
designed obeys [motion.md](motion.md): the one easing curve, a duration from the ladder,
`transform` and `opacity` only, and the reduced-motion guard. The logo stays the one magnetic
or animated element allowed to be a signature, and it never loops forever.

Until that is designed, the logo is static.

## 5. The favicon

**The mark alone.** The same single path as section 2, filled with `--purple-600`. The file of record is [favicon.svg](favicon.svg) beside this file; because an
icon file cannot read tokens, it carries the hex equivalent `#814f90`. The self-contained
pages, the storybook and both coming-soon concepts, embed it as a data URI rather than
linking it, so they keep working offline and alone.

Never the full logotype at favicon size, and never any other symbol.

## 6. What the logo is not

- **Not the paperclip.** `logo-old.png` is retired. See section 15 of [brand.md](brand.md).
- **Not the 10 July type-set logotype.**
- **Never on a colored field.** It sits on `--color-surface-page` or on
  `--color-surface-inverse`, and on the dark tile the mark becomes `--purple-400` so it
  lifts off the dark. See [color.md](color.md) section 7.
