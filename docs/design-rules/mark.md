# The mark

Owner decision, 31 July 2026. This file owns the logo and nothing else.

---

## 1. What it is

**`*hurulab`.** An asterisk, then the wordmark, with no space between them.

| Part | Rule |
|---|---|
| The asterisk | `--color-base-brand`, which is `--purple-600` |
| The wordmark | The heading face from [type.md](type.md), weight 700, `--color-base-black` |

Nothing else is part of the mark. No container, no box, no rounded tile behind it, no second
color, no tagline locked to it.

## 2. How the asterisk sits

**Raised and larger than the wordmark.** It sits at the top, level with the cap height rather
than on the baseline, and it is set larger than the letters beside it. This is what makes it
read as a mark rather than as punctuation.

The values that produce it, at any size:

```css
.mark i {
  font-size: 1.55em;      /* larger than the wordmark */
  line-height: 0;
  vertical-align: 0.24em; /* raised to the top */
  margin-right: -0.02em;  /* closed up against the h */
}
```

Both numbers are `em`, so the relationship holds at every size without a second rule.

## 3. Casing

`hurulab`, one word, lowercase, always. This is the single exception to the sentence-case rule in
[copy.md](copy.md), because it is how the name is spelled rather than a styling choice. Never
`Hurulab`, never `HuruLab`, never `Huru Lab`. The asterisk never becomes a capital letter
substitute.

## 4. What still has to be made

**The asterisk is currently the typeface's own, as a placeholder.** A real one has to be drawn,
and it is the only outstanding piece of the mark.

What it has to do:

1. **Be a real vector**, not a glyph, so it does not change when the typeface changes.
2. **Hold at a favicon size**, 16px, without the arms filling in.
3. **Work in one color only.** No gradient, no second tone.
4. **Sit correctly beside the wordmark at every size** using the em relationship in section 2.

Until it exists, the typeface's asterisk is used and this is recorded as a placeholder rather
than a decision.

## 5. What the mark is not

- **Not the paperclip.** `logo-old.png` is retired. See section 15 of [brand.md](brand.md).
- **Not the 10 July type-set wordmark.**
- **Never on a colored field.** It sits on `--color-surface-page` or on
  `--color-surface-inverse`, and on the dark tile the asterisk becomes `--purple-400` so it
  lifts off the dark. See [color.md](color.md) section 5.
