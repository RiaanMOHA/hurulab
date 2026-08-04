# Spacing

The single owner of the spacing scale and of which step applies where. Every value is `rem` on
the root clamp in [breakpoints.md](breakpoints.md), so spacing grows with type by the same
1.125 across the range. The scale moved here from breakpoints.md on 4 August 2026 so it has
one owner.

---

## 1. The scale

Ten steps. The steps sit on a 4px grid at the 360 floor. **Only steps with a job exist**, the
same rule as the color ramps: a spare step gets used decoratively.

| Token | rem | at 360 | at 1560 | Job |
|---|---|---|---|---|
| `--s-1` | 0.25rem | 4px | 4.5px | Micro separation inside a component: a dot to its label |
| `--s-2` | 0.50rem | 8px | 9px | Inside a control: a label to its field, the button's vertical inset |
| `--s-3` | 0.75rem | 12px | 13.5px | An icon to its label, items in a dense row |
| `--s-4` | 1.00rem | 16px | 18px | Paragraph to paragraph, the inset of a panel or an input |
| `--s-5` | 1.50rem | 24px | 27px | The inset of a card, the bento gap, page padding at 360 |
| `--s-6` | 2.00rem | 32px | 36px | Block to block inside a section |
| `--s-7` | 3.00rem | 48px | 54px | Page padding at 768 and up, a heading to the block above it |
| `--s-8` | 4.00rem | 64px | 72px | A major break inside a long section, document section padding |
| `--s-9` | 6.00rem | 96px | 108px | Section vertical padding at 360 |
| `--s-10` | 8.00rem | 128px | 144px | Section vertical padding at 768 and up |

```css
:root {
  --s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;  --s-5: 1.5rem;
  --s-6: 2rem;    --s-7: 3rem;   --s-8: 4rem;    --s-9: 6rem;  --s-10: 8rem;
}
```

`--s-10` is new on 4 August 2026. Its job existed before it did: [layout.md](layout.md)
section 2 sets section padding at `8rem` from 768 up, and that value had no step.

---

## 2. The three kinds of space

Every space on a page is one of these, and each has its home on the scale.

**Inset, the space inside a surface.** A card takes `--s-5`. A panel inside a dark tile and a
form input take `--s-4`. A control's own inset is `--s-2` vertical, and the button's
asymmetric `--s-5` and `--s-2` horizontal pair is owned by [layout.md](layout.md) section 5.

**Gap, the space between siblings.** The bento and card grids take `--s-5`. Fields in a form
take `--s-4` between them and `--s-2` inside them. An icon sits `--s-3` from its label.
Paragraphs take `--s-4`.

**Rhythm, the space between sections.** `--s-9` of vertical padding at 360, `--s-10` from 768
up, per [layout.md](layout.md) section 2. The rhythm comes from this padding and the single
hairline, never from decoration. A heading gets more space above it (`--s-7`) than below it
(`--s-5`), so it belongs to what follows.

---

## 3. The rules

1. **Only steps.** Every margin, padding and gap is a step on the scale. An off-scale value is
   the spacing equivalent of a hex color.
2. **Closer means related.** Proximity is hierarchy: the space between two things states their
   relationship, and a reader should be able to parse the page's structure from spacing alone.
3. **The parent owns the gap.** A reusable component carries no outer margin. Whatever lays
   components out sets the space between them, which is what lets one component sit in
   different contexts without exceptions.
4. **Space separates, decoration does not.** Before reaching for a second hairline, a box or a
   background, take one more step of space. [layout.md](layout.md) allows one divider style.
5. **No `px`.** The one exception is the hairline, owned by [breakpoints.md](breakpoints.md).

---

## 4. Provenance

Extracted from the values already in use: the page and section padding and bento gap in
[layout.md](layout.md), the control insets in [color.md](color.md)'s state tables and the
storybook, and the scale itself from breakpoints.md. The retired 24px maximum-gap rule from
the pre-restart brand files does not carry over: it was a fixed-pixel rule and this system has
no fixed pixels.

---

## 5. What fails review

An off-scale value. A `px` space that is not a hairline. A component with an outer margin. A
second divider style doing what space should do. A section whose vertical padding is not
`--s-9` or `--s-10`.
