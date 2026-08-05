# The mark

Owner decision, 31 July 2026. This file owns the logo and nothing else.

---

## 1. What it is

**`*hurulab`.** An asterisk, then the wordmark, with no space between them.

| Part | Rule |
|---|---|
| The asterisk | `--color-text-brand`, which is `--purple-600` |
| The wordmark | The heading face from [type.md](type.md), weight 700, `--color-base-black` |

Nothing else is part of the mark. No container, no box, no rounded tile behind it, no second
color, no tagline locked to it.

## 2. How the asterisk sits

**Slightly raised and larger than the wordmark, tucked against the h.** It is set about a
third larger than the letters and lifted just off the baseline, which makes it read as a mark
rather than as punctuation. It never floats above the word: the owner corrected the original
values (1.55em raised 0.24em) on 5 August 2026 because the asterisk sat too large and too far
from the h.

The values that produce it, at any size:

```css
.mark i {
  font-size: 1.3em;       /* larger than the wordmark */
  line-height: 0;
  vertical-align: 0.1em;  /* lifted just off the baseline */
  margin-right: -0.04em;  /* closed up against the h */
}
```

Both numbers are `em`, so the relationship holds at every size without a second rule.

## 3. Casing

`hurulab`, one word, lowercase, always. This is the single exception to the sentence-case rule in
[copy.md](copy.md), because it is how the name is spelled rather than a styling choice. Never
`Hurulab`, never `HuruLab`, never `Huru Lab`. The asterisk never becomes a capital letter
substitute.

## 4. Motion and interaction, the one open piece

**Owner decision, 4 August 2026: the typeface's asterisk is the mark.** The earlier requirement
to draw a custom vector is dropped. The owner likes it as it is.

What is wanted instead, and is still to be designed: **the mark should carry some interaction
and motion.** How the asterisk behaves, on arrival, on hover, or both, is open. Whatever is
designed obeys [motion.md](motion.md): the one easing curve, a duration from the ladder,
`transform` and `opacity` only, and the reduced-motion guard. The mark stays the one magnetic
or animated element allowed to be a signature, and it never loops forever.

Until that is designed, the mark is static.

## 5. The favicon

**The asterisk alone.** The Geist 700 asterisk glyph extracted as a vector, filled with
`--purple-600`. The file of record is [favicon.svg](favicon.svg) beside this file; because an
icon file cannot read tokens, it carries the hex equivalent `#814f90`. The self-contained
pages, the storybook and both coming-soon concepts, embed it as a data URI rather than
linking it, so they keep working offline and alone.

Never the full wordmark at favicon size, and never any other symbol.

## 6. What the mark is not

- **Not the paperclip.** `logo-old.png` is retired. See section 15 of [brand.md](brand.md).
- **Not the 10 July type-set wordmark.**
- **Never on a colored field.** It sits on `--color-surface-page` or on
  `--color-surface-inverse`, and on the dark tile the asterisk becomes `--purple-400` so it
  lifts off the dark. See [color.md](color.md) section 7.
