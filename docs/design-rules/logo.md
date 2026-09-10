# The logo

This file owns the logo and nothing else.

---

> **Replaced, 10 September 2026.** Owner instruction: the logo is the asset the owner placed in
> `logo/` at the project root. Three files: `logo.svg` is the lockup, `mark.svg` is the mark
> alone, `hexagon.svg` is the mark's counter shape. They are Adobe Illustrator exports and
> they are the source; everything below is read from them. The 7 September ruling that the
> logo was the six-arm mark drawn in the concept pages is superseded, and so is the rule that
> the logotype was set in the title face. **Both parts are now drawn.**

## 1. What it is

**A drawn six-arm mark, then a drawn wordmark, in one file.** `logo/logo.svg`, on a
1309.3 by 235.2 box. The mark's arms have rounded outer corners and a notched inner end, so
their negative space is the hexagon in `logo/hexagon.svg`. The wordmark is a set of paths, not
text: it is not set in Cascadia Mono or any other face, and it is never retyped.

| Part | File | Color |
|---|---|---|
| The mark | `logo/mark.svg`, 249.9 by 235.2 | `--color-text-brand` |
| The wordmark | the last seven paths of `logo/logo.svg` | `--color-text-primary` |
| The counter | `logo/hexagon.svg`, 247.2 by 216.8 | no use ruled |

Nothing else is part of the logo. No container, no box, no rounded tile behind it, no second
color, no tagline locked to it.

## 2. How it is placed on a page

**Inline, as two paths in one `svg`.** The Illustrator export draws the mark as six paths and
adds six white slivers where arms meet; the slivers are export artifacts and are dropped. The
six arm paths are joined into one, and the wordmark's seven paths into one, so the lockup is
exactly two fills:

```html
<svg class="lockup" viewBox="0 0 1309.3 235.2" role="img" aria-label="hurulab">
  <path fill="var(--color-text-brand)"   d="…the mark…"/>
  <path fill="var(--color-text-primary)" d="…the wordmark…"/>
</svg>
```

The mark alone uses `mark.svg`'s box, `0 0 249.9 235.2`, and `fill="currentColor"`.

**It is sized by height, in `em`**, so the relationship to the text beside it holds at every
size without a second rule:

```css
.lockup { height: 1em; width: auto; }
```

`concepts/hurulab-identity.html`, `concepts/landing-page-hero.html` and
`concepts/hurulab-coming-soon-short.html` carry it this way and are the reference.

**Withdrawn.** The six-spoke path on a 100 by 100 box, the `1.18em` mark beside a typed
logotype at weight 700 and `-0.04em`, and the 5 August asterisk values before those, are all
history and are in `docs/decisions.md`. Do not reapply any of them.

## 3. Casing

**The spelling of the name is owned by [copy.md](copy.md) section 4.** The wordmark is drawn
in that spelling, lowercase, and the mark never becomes a capital letter substitute.

## 4. Motion

**Dropped, 7 September 2026.** Owner ruling: no motion is being designed for the logo. **The
logo is static.** The 10 September asset does not reopen this.

## 5. The favicon

**The mark alone.** `logo/mark.svg`'s path, filled with the brand default. The file of record is
[favicon.svg](favicon.svg) beside this file; because an icon file cannot read tokens, it
carries the hex equivalent of the identity page's `--p-default`, `oklch(0.500 0.150 318)`,
which is `#854299`. The self-contained pages embed it as a data URI rather than linking it, so
they keep working offline and alone.

Never the full lockup at favicon size, and never any other symbol.

## 6. What the logo is not

- **Not the paperclip.** `logo-old.png` is retired. See section 15 of [brand.md](../brand.md).
- **Not the 10 July type-set logotype**, and not the six-spoke mark the concept pages carried
  until 10 September 2026.
- **Never on a colored field.** It sits on `--color-surface-page` or on
  `--color-surface-inverse`, and on the dark tile the mark becomes the hover purple so it
  lifts off the dark. See [color.md](color.md) section 7.
