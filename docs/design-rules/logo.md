# The logo

This file owns the logo and nothing else.

---

> **Replaced, 29 September 2026.** Owner instruction: the logo is the asset the owner placed in
> `logo/` on 22 September 2026, three files. `logo.svg` is the lockup, `logo-mark.svg` is the
> mark alone, `logo-text.svg` is the wordmark alone. They are Adobe Illustrator exports and
> they are the source; everything below is read from them. The 10 September asset, a six-arm
> mark with a hexagon counter, is retired and its files `mark.svg` and `hexagon.svg` are
> deleted; both are recoverable from git and are not a source of truth for anything.

## 1. What it is

**A drawn mark, then a drawn wordmark, in one file.** `logo/logo.svg` is exported on an
888.18 by 305.31 box with padding on every side; the ink runs from 16.34, 80.45 and is 855.49
wide by 144.41 tall. The mark is one closed path. The wordmark is one path, not text: it is not
set in Cascadia Mono or any other face, and it is never retyped. What the mark depicts is not
recorded; the owner drew it and has not said.

| Part | File | Export box | Ink bounds | Color |
|---|---|---|---|---|
| The lockup | `logo/logo.svg` | 888.18 by 305.31 | `16.34 80.45 855.49 144.41` | mark in `--color-text-brand`, wordmark in `--color-text-primary` |
| The mark | `logo/logo-mark.svg` | 213.95 by 305.31 | `22.35 80.55 169.25 144.2` | `--color-text-brand` |
| The wordmark | `logo/logo-text.svg` | 698.31 by 305.31 | `26.33 80.45 645.66 144.41` | `--color-text-primary` |

The ink bounds were measured by rendering each file and reading its bounding box, not by eye.
The files carry Illustrator's own fills, `#7c4693` on the mark and `#13141f` on the wordmark;
those are the export's values and are never copied into a page. A page names the tokens.

Nothing else is part of the logo. No container, no box, no rounded tile behind it, no second
color, no tagline locked to it.

## 2. How it is placed on a page

**Inline, as two paths in one `svg`, on the ink bounds.** The export box is padded, so a page
that used it would draw the logo at less than half its intended height. The `viewBox` is the
ink bounds instead, and the paths are copied unchanged:

```html
<svg viewBox="16.34 80.45 855.49 144.41" role="img" aria-label="hurulab">
  <path fill="var(--color-text-brand)"   d="…the mark…"/>
  <path fill="var(--color-text-primary)" d="…the wordmark…"/>
</svg>
```

The mark alone uses `viewBox="22.35 80.55 169.25 144.2"` and `fill="currentColor"`. The
wordmark alone uses `viewBox="26.33 80.45 645.66 144.41"`.

**It is sized by height, in `em`**, so the relationship to the text beside it holds at every
size without a second rule:

```css
.lockup { height: 1em; width: auto; }
```

`concepts/hurulab-identity.html`, `concepts/landing-page-hero.html` and
`concepts/hurulab-coming-soon-short.html` carry it this way and are the reference.

**Withdrawn.** The six-arm mark on a 249.9 by 235.2 box and its 1309.3 by 235.2 lockup, the
six-spoke path on a 100 by 100 box, the `1.18em` mark beside a typed logotype, and the
5 August asterisk values are all history and are in `docs/decisions.md`. Do not reapply any of
them.

## 3. Casing

**The spelling of the name is owned by [copy.md](copy.md) section 4.** The wordmark is drawn
in that spelling, lowercase, and the mark never becomes a capital letter substitute.

## 4. Motion

**The mark will carry motion.** Owner ruling, 14 September 2026, reversing the 7 September
ruling that the logo was static. The shape now exists, so the motion can be designed; nothing
is designed yet, and until it is, the logo is placed static. [motion.md](motion.md) owns the
motion once it is decided.

## 5. The favicon

**The mark alone.** `logo/logo-mark.svg`'s path on its ink bounds, filled with the brand
default. The file of record is [favicon.svg](favicon.svg) beside this file; because an icon
file cannot read tokens, it carries the hex equivalent of `--purple-600`,
`oklch(0.500 0.150 318)`, which is `#854299`. The self-contained pages embed it as a data URI
rather than linking it, so they keep working offline and alone.

Never the full lockup at favicon size, and never any other symbol.

## 6. What the logo is not

- **Not the paperclip.** `logo-old.png` is retired. See section 15 of [brand.md](../brand.md).
- **Not the 10 July type-set logotype**, not the six-spoke mark the concept pages carried until
  10 September 2026, and not the six-arm mark they carried until 29 September 2026.
- **On two grounds only.** On `--color-surface-page` in its own colors, or on `--purple-600`
  all in `--color-base-white`, as on the business card. Owner ruling, 2 October 2026.
