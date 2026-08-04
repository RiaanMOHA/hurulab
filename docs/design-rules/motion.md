# Motion

Extracted 30 July 2026 from `hurulab-codebase`.

---

## 1. One easing curve

```css
--ease: cubic-bezier(0.2, 0.7, 0.15, 1);
```

Everything uses it. It is a strong ease-out: fast departure, long settle, no overshoot.

**Never use `ease`, `ease-in-out`, or a bounce.** `ease` is the browser default and reads as
nothing was chosen. Bounce and elastic read as dated. Real objects decelerate smoothly.

---

## 2. Durations

| Length | Use |
|---|---|
| `240ms` | State change on a control: fill, border, checkbox |
| `300ms` | Hover on a button or arrow |
| `350ms` | Card lift, accordion open |
| `400ms` | Link underline sweep |
| `620ms` | A section of content expanding |
| `900ms` | Entrance reveal |
| `1100ms` | Masked wipe reveal |

Small things move fast. Large things take their time. A card lifting in `900ms` feels broken,
and a headline wiping in `240ms` is not noticed.

---

## 3. Entrances

Scroll-driven, not triggered by JavaScript.

```css
animation-timeline: view();
animation-range: entry 0% cover 30%;
```

Two entrances only:

- **`reveal`.** Fade up from `translateY(24px)` over `900ms`. The default for anything arriving.
- **`reveal-mask`.** A wipe using `clip-path: inset(0 100% 0 0)` to `inset(0 0 0 0)` over
  `1100ms`. Reserved for statement headings, because it reads as type being set rather than as a
  box arriving.

Stagger with `animation-delay` in steps of `80ms` to `120ms`. The hero runs `0`, `120ms`,
`240ms`, `420ms`, `520ms`, so the badge, the two headline halves, the button and the checklist
arrive in reading order.

A `@supports not (animation-timeline: view())` fallback sets `opacity: 1` and removes the
animation, so nothing is invisible in a browser without scroll-driven animation. **Any new
scroll animation must ship with that fallback.**

---

## 4. Hover

| Element | Response |
|---|---|
| Card | `translateY(-6px)` plus a soft shadow, `350ms` |
| Primary button | `translateY(-2px)` plus a deeper shadow, `300ms` |
| Arrow in a card | `translateX(4px)` and `rotate(-45deg)` |
| Arrow in a button | `translateX(4px)` |
| Link | Underline sweeps in from the left, `400ms`, having exited to the right |
| Tag | Fills with the accent |
| Heading inside a card | `translateX(4px)` |

The underline detail is worth keeping: `transform-origin` is `right center` at rest and
`left center` on hover, so the line grows in and retreats out rather than reversing. That
asymmetry is what makes it feel considered.

**Shadows appear only on hover.** Nothing carries a resting shadow.

---

## 5. The magnetic button

The primary call to action follows the cursor at `0.2` of the offset from its center, and
returns to zero on leave.

Use it on **one element per page**. It is a signature, and two of them is a gimmick.

---

## 6. Ambient motion

Three loops, all slow, all optional:

- Marquee, `32s` linear, infinite, paused on hover.
- Float, `5s`, `translateY(-6px)` at the midpoint.
- Pulse dot, `2s`, scale to `1.5` at half opacity.

Nothing else loops. An interface that is always moving has nowhere left to go when something
actually happens.

---

## 7. What may be animated

**`transform` and `opacity` only.** Plus `clip-path` for the mask reveal, and `background-color`
and `border-color` on state changes.

**Never animate `width`, `height`, `padding`, `margin` or `top`.** They force layout on every
frame.

For a section that expands, animate `grid-template-rows` from `0fr` to `1fr` on a grid whose
child has `overflow: hidden; min-height: 0`. That is the one correct way to animate an unknown
height, and it is already used in the accordion.

---

## 8. Reduced motion

Mandatory, and already in the reference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

Nothing ships without it.
