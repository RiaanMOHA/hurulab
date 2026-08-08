# Layout and components

Extracted 30 July 2026 from `hurulab-codebase`. The spacing scale itself is owned by
[breakpoints.md](breakpoints.md).

---

## 1. What governs this file

**Owned by [language.md](language.md): big, bold, bento, very Apple.** Read it first. Every
value below is a consequence of it, and where the two disagree, `language.md` wins.

The stated visual reference of the source build is squareblack.com and nothing else.

---

## 2. Page structure

**Full bleed. There is no centered max-width container anywhere.** Content runs to the section
padding and stops.

| | Value |
|---|---|
| Page padding | `1.5rem`, rising to `3rem` at 768 and up |
| Section padding, vertical | `6rem`, rising to `8rem` at 768 and up |
| Section divider | A single `1px` hairline on the top edge. No other separator |

Sections are stacked, each announced by one statement heading, and separated only by that
hairline. The rhythm comes from the vertical padding, not from decoration.

The reference uses `scroll-snap-type: y proximity` with `snap-start` on each section, and
`scroll-padding-top: 5rem` to clear the fixed nav. Proximity rather than mandatory, so a reader
is nudged rather than trapped.

---

## 3. Radius

**Owner decision, 5 August 2026: the radius scale below**, picked by eye from three
candidates built from the archived Apple research, replacing the earlier three-radius set.

| Token | Value | Used on |
|---|---|---|
| Tile | `2rem`, easing to `1.5rem` at desktop 1440 and up | Bento page tiles |
| Card | `1.5rem` | Every card |
| Panel | Concentric: the parent's radius minus the gap, floor `0` | Anything nested inside a rounded parent |
| Capsule | `999px` | Buttons, tags, single-line inputs, badges, avatars, the tile footer's arrow |
| Checkbox | `0.35rem` | The checkbox alone |

**The concentric rule.** A nested radius is its parent's minus the gap between them, floored
at zero, so the two shapes share a center. A panel standing alone, with no rounded parent,
uses the fallback `0.75rem`.

The checkbox aside, there are no other small radii, and there are no square corners. Touch
controls stay at least `44px` per [breakpoints.md](breakpoints.md) section 5, so a capsule
control never collapses into a circle unless it is an icon-only button, the tile footer's arrow
or an avatar.

**The C2 curve. Owner decision, 4 August 2026, sharpened 5 August: every radius takes the
continuous curve, capsules included.** The curve blends into the straight edge with no
visible start point. In code it is one line beside the radius, `corner-shape: squircle`, and
it degrades cleanly: browsers that cannot draw it yet, Safari and Firefox as of August 2026,
show the plain `border-radius` and nothing breaks. The 4 August exemption for fully round
shapes is reversed: the owner ruled on 5 August that capsules take the curve too. Apple never
published the exact formula; `squircle` is the standardized CSS approximation of it.

---

## 4. The bento

This is the part that carries the design language, and it is the easiest thing to get wrong.

**A bento is not a card grid.** A card grid is a set of equal tiles holding equivalent things. A
bento is a composition of **unequal tiles**, where size, fill and span all signal importance, and
the arrangement is designed once rather than generated from a list.

The mechanics:

- Two columns, `1.5rem` gap, collapsing to one below 768.
- **Tiles span.** The lead tile takes both columns. Others take one. A section with five items
  is one wide plus four narrow, not five identical.
- **Tiles differ in height on purpose.** `20rem` minimum on the wide lead tile, `23.75rem` on the
  narrow ones, so the composition has a silhouette instead of a flat edge.
- **Tiles differ in fill.** Three variants, alternating:
  - **Dark.** `--color-surface-inverse` fill, `--color-text-inverse` text. The emphasis tile.
  - **Light.** `--color-surface-raised` fill, no border.
  - **Outlined.** Transparent fill, `1px --color-border-subtle` border.

**Alternate the dark tiles on a rhythm, not at random.** In the source they fall on positions
01, 03 and 05. Two dark tiles side by side kills the rhythm; four light tiles in a row is the
single fastest way to make this look generated.

Tile internals follow one pattern: a small letter-spaced label row at the top, the content in the
middle, and a footer separated by a hairline with a fact on the left and a circular arrow on the
right. The consistency of the internals is what lets the outer sizes vary without chaos.

**Do not nest a tile inside a tile.** Panels inside a dark tile are base-white at 5% at the
inner radius, per [color.md](color.md) section 7. They are panels, not cards.

---

## 5. Buttons

**There is one button, in seven variants.** Owner ruling, 8 August 2026, adopting the variant
model from `map-prototype`. Every button carries the base class plus exactly one variant. A page
never defines a button of its own: if it needs something no variant does, **the variant changes
here and every page gets it.**

**The shape, common to all seven.** A capsule on the C2 curve, symmetric padding of `0.5rem`
vertical and `1.5rem` horizontal, and at least 44px tall per
[breakpoints.md](breakpoints.md) section 5.

| Variant | Class | Fill | Border | Text |
|---|---|---|---|---|
| **Primary** | `button-primary` | `--color-surface-brand`, `--purple-300` | none | `--color-text-on-brand` |
| **Primary icon** | `button-primary-icon` | `--color-surface-brand` | none | `--color-text-on-brand` |
| **Border** | `button-border` | transparent | `1px --color-border-interactive` | `--color-text-primary` |
| **Border icon** | `button-border-icon` | transparent | `1px --color-border-interactive` | `--color-text-primary` |
| **Ghost** | `button-ghost` | none | none | `--color-text-primary` |
| **Icon** | `button-icon` | transparent | `1px --color-border-interactive` | `--color-text-primary` |
| **Ghost icon** | `button-ghost-icon` | none | none | `--color-text-secondary` |

**States belong to the variant, not to the list.** Every variant draws rest, hover, pressed,
focus and disabled, and every one of those is owned by [color.md](color.md) section 5. This file
owns the shape and the variant list only.

**Ghost and ghost icon do not take a fill on hover.** A ghost has no fill to change, so its
hover is the underline sweep in [motion.md](motion.md) section 4 for `button-ghost`, and a faint
`--color-surface-sunken` wash for `button-ghost-icon`. Every other variant changes fill on hover.

### The two icon variants

**Owner decision, 8 August 2026.** `button-primary-icon` and `button-border-icon` are the
primary and border variants **carrying a trailing icon after the label**. The icon sits
`--s-3` from the label, is sized `--icon-md` to pair with the label text, and takes the color of
that text, per [icons.md](icons.md).

**The icon trails, never leads.** Owner decision, 4 August 2026: on any action the icon sits
after the label. This is the rule the two variants exist to express, and a leading icon on a
button fails review.

**They are variants, not decoration.** A button takes one of them only when the icon says
something the label cannot: a direction, a destination, an external link. An icon added to make
a button look finished belongs to neither variant, and to no button.

### When to use each

| Variant | When |
|---|---|
| `button-primary` | The one real action on the view. Never twice |
| `button-primary-icon` | The one real action, when its icon carries meaning the label cannot |
| `button-border` | An action beside the primary, or an action inside a card, a form or a sheet |
| `button-border-icon` | The same, when its icon carries meaning |
| `button-ghost` | Revealing more of the current view in place. Never the view's one real action |
| `button-icon` | Navigation and paging, where the glyph is the whole control and there is no label |
| `button-ghost-icon` | A panel's own chrome, sitting on a surface that already has an edge |

**Icon-only buttons are one variant whatever they do.** The difference between a close, a pager
and a step arrow is the chrome around it, not the job it does. `button-icon` when it needs an
edge, `button-ghost-icon` when it sits on a surface that already has one.

**An icon-only button is square and carries a text label for screen readers**, per
[icons.md](icons.md) section 3. It still clears 44px.

**The arrow circle is gone.** Owner ruling, 8 August 2026: the capsule with an accent circle
carrying an arrow set into its right end, and the asymmetric `1.5rem` and `0.5rem` padding that
existed to hold it, are both withdrawn. It failed review three times. An icon on a button is now
a plain trailing icon on the two `-icon` variants above, never a circle and never a fill of its
own.

**The primary is the settled reference**, approved on the short coming-soon page: purple-300
fill, near-black text, hover to purple-400, capsule on the C2 curve, and a response in color
only, per [motion.md](motion.md) section 4.

**One primary per view.** The primary names its action. "Book a 20 Min Call" and "Book a Design
Sprint" are correct. "Learn More" is not. Casing is Title Case, owned by
[copy.md](copy.md) section 2.

**A button never carries a shadow, and never moves on hover.** It is a fill, a border and a
label. Owner ruling, 5 August 2026, recorded in [motion.md](motion.md) section 4.

---

## 6. Tags and badges

Capsule outlines, `1px` border, `0.875rem` horizontal padding, small text. On a dark card the
border is base-white at an alpha, per [color.md](color.md) section 7. On hover they take the
accent fill.

The hero badge is the one filled capsule on the page: `--color-surface-brand` fill,
`--color-text-on-brand` text, with a small pulsing dot.

---

## 7. The marquee band

A full-width band between the hero and the first section, bordered top and bottom by hairlines,
scrolling a list of capabilities with an accent asterisk between each. It pauses on hover.

It exists to make the page move before the reader scrolls. Use once, near the top, never twice.

---

## 8. Navigation

Fixed, with a scroll progress bar at the very top, `2px`, in the accent, scaled on the X axis.
The active section is tracked with an `IntersectionObserver` using
`rootMargin: "-40% 0px -55% 0px"`, so a section becomes active when it occupies the middle band
of the viewport rather than when it merely enters.

---

## 9. Photography

**Documentary only.** Real people doing the actual work, in the actual place. No stock, no
illustration, no 3D render, no icon tile, no abstract graphic.

**If no real photograph exists for a section, the section runs without one.** A placeholder image
advertises that the answer is empty, the same way a placeholder client logo does. See section 11
of [brand.md](brand.md).

No photograph of hurulab working exists yet, so today this rule reads as: no photography.

---

## 10. The client quote

**A quote takes its own full-width section. It is never a bento tile and never one of three.**

Three quotes in a row is the exact failure [language.md](language.md) names: it could have been
generated by mapping over an array. One quote at full width gets finished.

There is no client quote on record yet, so today this rule reads as: no quote section.

---

## 11. What not to do

Direct consequences of the above, worth stating because they are the usual failure modes.

- **Do not center content.** Everything is left aligned and full bleed.
- **Do not wrap everything in a card.** Statement headings sit on the page itself.
- **Do not add a drop shadow at rest.** Shadow appears only on hover, as lift. See
  [motion.md](motion.md).
- **Do not introduce a second divider style.** One hairline, one weight.
- **Do not put a rounded icon tile above every heading.** The reference has none, and it is one
  of the clearest tells of a generated page.
- **Do not build a uniform grid and call it a bento.** If every tile is the same size, it is a
  card grid, and the design language is gone.
- **Do not reach for glass, blur, glow or gradient** in the name of "Apple". Apple's restraint is
  the reference, not its materials.
