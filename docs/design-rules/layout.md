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

| Token | Value | Used on |
|---|---|---|
| Card | `1.75rem` | Every card |
| Inner panel | `1rem` | Panels nested inside a dark card |
| Pill | `999px` | Buttons, tags, badges, avatars, the arrow circle |

Everything is either heavily rounded or fully round. **There are no square corners and no
small radii.** A `4px` corner anywhere will look like a mistake against this.

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

Pill shaped, with the label first and the accent circle carrying the arrow set into the right
end. The asymmetric padding is what makes it: `1.5rem` left, `0.5rem` right.

**Icons trail, never lead.** Owner decision, 4 August 2026. On any action, a button, a link or
a tag, the icon sits after the label. A leading icon on an action fails review.

Fills, borders and every state are owned by [color.md](color.md) section 5. This file owns only
the shape: pill, label first, circle at the right end, asymmetric padding.

**One primary per view.** The primary names its action. "Book a 20 min call" and "Book a design
sprint" are correct. "Learn more" is not.

---

## 6. Tags and badges

Pill outlines, `1px` border, `0.875rem` horizontal padding, small text. On a dark card the
border is base-white at an alpha, per [color.md](color.md) section 7. On hover they take the
accent fill.

The hero badge is the one filled pill on the page: `--color-surface-brand` fill,
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
