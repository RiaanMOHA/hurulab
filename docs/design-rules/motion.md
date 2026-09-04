# Motion

Rebuilt 5 August 2026 on the archived research (`.thoughts/motion-research-2026-08-05.md`,
sixteen primary sources), after the owner picked the researched system against the 30 July
rules by eye. The 30 July rules came from `hurulab-codebase`; where the two disagreed, the
research and the owner's 5 August rulings win.

---

## 1. Two easing curves, by role

```css
--ease:      cubic-bezier(0.2, 0, 0, 1);
--ease-exit: cubic-bezier(0.6, 0, 0.8, 0.6);
```

The enter curve is `--ease` rather than `--ease-enter`, because it is the default and reads
better unqualified at every use. Corrected here on 8 August 2026: this file was the only place
naming it `--ease-enter`, and `css/tokens.css`, the storybook and both concept pages had all
been using `--ease` since the system was built.

- **Enter** is a strong ease-out: fast departure, long settle, no overshoot. It is the
  default for anything appearing, any state change, and any hover response.
- **Exit** is an ease-in: it accelerates away. Anything leaving uses it, and leaves faster
  than it arrived, so the interface never blocks the way out.

A third role, on-screen movement (ease-in-out), gets added when something actually moves
across the screen. Do not add it before then.

**Never use `ease`, `ease-in-out` as a default, or a bounce.** `ease` is the browser default
and reads as nothing was chosen. Bounce reads as dated; the research's own ceiling for
perceptible bounce is where our taste starts saying no. And never ease-in on an arrival: it
delays the exact moment being watched.

---

## 2. Durations

| Length | Use |
|---|---|
| `150ms` | State change on a control: fill, border, checkbox, tag. Hover responses |
| `250ms` | Anything appearing: a panel, a dropdown, a content reveal |
| `160ms` | Anything leaving. Exits run about two thirds of the entry |
| `450ms` | The one slow tier: a rare, large brand moment such as the masked heading wipe. One per view |

**Nothing exceeds 450ms.** The research ceiling is 500ms everywhere; frequent interactions
stay under 300ms. Below about 200ms motion stops being readable, which is correct for state
changes: they should feel instant.

Stagger steps are `60ms`.

---

## 3. Entrances

Scroll-driven, not triggered by JavaScript. Unchanged in mechanism, retimed by the research.

```css
animation-timeline: view();
animation-range: entry 0% cover 30%;
```

Two entrances only:

- **`reveal`.** Fade up from `translateY(12px) scale(0.98)` over `250ms`. The default for
  anything arriving. Motion needs an origin: nothing scales from zero.
- **`reveal-mask`.** The wipe using `clip-path: inset(0 100% 0 0)` to `inset(0 0 0 0)` over
  `450ms`, the one slow tier. Reserved for statement headings.

Stagger with `animation-delay` in `60ms` steps, so a hero of five pieces completes inside
half a second.

A `@supports not (animation-timeline: view())` fallback sets `opacity: 1` and removes the
animation. **Any new scroll animation must ship with that fallback.**

---

## 4. Hover

| Element | Response |
|---|---|
| Button | Fill and border, `150ms`, and the label rolls. See below. **Owner ruling, 3 September 2026** |
| Card | `translateY(-6px)` plus a soft shadow, `250ms` on the enter curve |
| Arrow in a card | `translateX(4px)` and `rotate(-45deg)`, `150ms` |
| Link | Underline sweeps in from the left, `250ms`, having exited to the right |
| Tag | Fills with the accent, `150ms` |

The underline detail stays: `transform-origin` is `right center` at rest and `left center`
on hover, so the line grows in and retreats out rather than reversing.

**The button label rolls. Owner decision, 3 September 2026**, replacing the 5 August ruling
that a button moved in color alone. The label sits in a window one line tall holding two
identical copies. On hover or keyboard focus the stack shifts by exactly one line, so the
second copy takes the slot and the button appears to refresh its own label. The box never
changes size.

Only `translateY` animates, one full line of travel, over `250ms` on `--ease`. The source
spec's own fallback is `cubic-bezier(0.22, 1, 0.36, 1)`, a third curve this system does not
carry; both are strong ease-outs with no overshoot, so `--ease` does the same job and section 1
keeps its two curves. `250ms` is the standard tier below, and a button hover is a frequent
interaction, which section 3 holds under `300ms`. The two
copies are `aria-hidden` and the accessible name moves to the button itself, so a screen
reader hears the label once. Under reduced motion the transition collapses and the label
holds still.

The source is `rollingtextbutton.md`, an extraction of Motion UI's rolling text button, on the
owner's Desktop rather than in this project.

**Shadows appear only on hover.** Nothing carries a resting shadow.

**Frequency decides existence.** Anything used constantly gets little or no animation. The
fewer things move, the better the remaining movement reads.

---

## 5. Ambient motion

Three loops, all slow, all optional:

- Marquee, `32s` linear, infinite, paused on hover.
- Float, `5s`, `translateY(-6px)` at the midpoint.
- Pulse dot, `2s`, scale to `1.5` at half opacity.

Nothing else loops. An interface that is always moving has nowhere left to go when something
actually happens.

The magnetic button is retired. Owner ruling, 5 August 2026: the primary call to action does
not follow the cursor. the one signature element allowed motion is the logo, still to be
designed, per [logo.md](logo.md) section 4.

---

## 6. What may be animated

**`transform` and `opacity` only.** Plus `clip-path` for the mask reveal, and
`background-color` and `border-color` on state changes.

**Never animate `width`, `height`, `padding`, `margin` or `top`.** They force layout on
every frame.

For a section that expands, animate `grid-template-rows` from `0fr` to `1fr` on a grid whose
child has `overflow: hidden; min-height: 0`. That is the one correct way to animate an
unknown height.

---

## 7. Reduced motion

Mandatory. When `prefers-reduced-motion` is active, motion is removed, not slowed, and every
state change must also read statically.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

Nothing ships without it. The one exemption is a demo whose purpose is demonstrating motion
itself: the storybook's motion examples and a concepts demo page. The storybook's duration
chips are ordinary hover transitions and obey the guard like everything else.
