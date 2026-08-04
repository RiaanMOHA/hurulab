# Breakpoints and the scale

Owner decision, 30 July 2026. The first written design rule in this project.

This file owns the four breakpoints, the root clamp, the two-ratio type scale, and the rule
that every size in the system derives from them. It does not own which typeface or which
color.

---

## 1. The four breakpoints

Four, and only four. Every layout is designed and checked at all four before it ships.

| Name | Width | What it is |
|---|---|---|
| `sm` | **360px** | Small phone. The floor. Nothing may break below it, nothing is designed for narrower. |
| `md` | **768px** | Tablet portrait. |
| `lg` | **1440px** | Desktop. The design target: this is the width work is composed at. |
| `xl` | **1560px and up** | Large desktop. The ceiling. Above 1560 the scale stops growing. |

**1440 is where you design. 360 is where you prove it.** A layout that only holds at 1440 is not
finished.

---

## 2. The root clamp

The root font size is the body size. **Owner decision, 4 August 2026: body is never below 17px
at mobile**, which is Apple's own body default, and it grows to **20px at 1560**. Fluid between
those two points and flat outside them. This replaces the earlier 16-to-18 clamp.

```css
:root {
  /* 17px at 360, 20px at 1560, fluid between, clamped at both ends */
  font-size: clamp(1.0625rem, 1.00625rem + 0.25vw, 1.25rem);
}
```

What it resolves to:

| Viewport | Root |
|---|---|
| 360px and below | 17.00px |
| 768px | 18.02px |
| 1440px | 19.70px |
| 1560px and above | 20.00px |

**Everything else is expressed in `rem`.** That is the whole mechanism. Because every token is
relative to the root, spacing, icons, radii and reading text all breathe by the same 17-to-20
proportion across the range, together, with no second system to keep in sync.

**The rule this sets: no `px` values in component CSS.** The only permitted exceptions are
hairline borders (`1px`) and anything that must not scale, such as a 1px rule that would blur.

---

## 3. The type scale

**Owner decision, 4 August 2026, replacing the single 1.125 ratio: the scale has two ratios.
1.2 at the 360 floor, rising to 1.3 at the 1560 ceiling.** The owner chose it by eye from
three researched candidates. A single ratio cannot give both a hero that fits a phone and a
hero above 100px on desktop, because with a fluid root every step grows by the same 17-to-20
proportion. Two ratios resolve it: headings grow harder as the screen grows.

The mechanics, and the rule each part sets:

- **Body and below are pure rem at the mobile ratio.** They ride the root clamp only, staying
  locked to spacing and icons.
- **Steps above body interpolate per step on `vw`, from 1.2 at 360 to 1.3 at 1560.** Both ends
  of every interpolation are a legal step of a legal ratio; the `vw` term never invents a
  size. The computed tokens live in [type.md](type.md) section 4. This file does not restate
  them.
- **Only steps with a job exist.** Step 1 was the lede and the owner dropped that role on
  4 August 2026, so there is no step 1, the same rule as the color ramps.

| Step | Role | at 360 | at 1560 |
|---|---|---|---|
| `-2` | Caption, label | 11.8px | 13.9px |
| `-1` | Small, nav, button, data | 14.2px | 16.7px |
| `0` | Body. The anchor | 17.0px | 20.0px |
| `2` | h5 | 24.5px | 33.8px |
| `3` | h4 | 29.4px | 43.9px |
| `4` | h3 | 35.3px | 57.1px |
| `5` | h2 | 42.3px | 74.3px |
| `6` | h1 | 50.8px | 96.5px |
| `7` | Display | 60.9px | 125.5px |

h1 at 1560 is 96.5px, the hero size Apple's own site uses. Display is the one statement per
page and tops out at 125.5px.

Display and h1 take tighter settings, because large type needs less: **line-height 0.95 and
letter-spacing -0.04em**, per [type.md](type.md) section 6.

---

## 4. Spacing

**Owned by [spacing.md](spacing.md)** since 4 August 2026: the ten steps, their jobs, and the
rules for insets, gaps and section rhythm. Spacing uses the same root and the same `rem`
mechanism, so it grows with everything else by the same 17-to-20 proportion.

---

## 5. Icons and everything else that has a size

**Icons follow the scale like everything else.** They are sized in `rem` so they stay locked to
the text they sit beside, at every width, with no separate icon breakpoint logic.

| Token | rem | at 360 | at 1560 | Pairs with |
|---|---|---|---|---|
| `--icon-sm` | 1.00rem | 17px | 20px | Small text, step -1 |
| `--icon-md` | 1.25rem | 21.3px | 25px | Body, step 0 |
| `--icon-lg` | 1.50rem | 25.5px | 30px | h4 and h5 |
| `--icon-xl` | 2.00rem | 34px | 40px | Headings, standalone |

The same applies to every other measured thing: border radii, control heights, avatar sizes,
line lengths, container widths, and the height of anything that has to sit level with text. If
it has a size, it is in `rem` and it follows the clamp.

**One exception, stated once.** Hairlines stay at `1px`. A scaling hairline renders soft.

**The tap minimum.** Owner decision, 4 August 2026, adopting Apple's standard: **anything
interactive is at least 44px tall and 44px wide, at every width.** Buttons, links that stand
alone, form fields, checkboxes with their labels. Like the hairline, this is a measured px
floor rather than a token: it exists to fit a fingertip, so it never shrinks with the scale.
A visually smaller control is allowed only if its hit area still clears 44px.

---

## 6. How to check work

At each of the four widths, in this order:

1. **360.** Does anything overflow horizontally. Does any text drop below step -2. Does every
   tap target clear the 44px minimum in section 5.
2. **768.** Does the layout change shape here, or does it just get wider. Either is fine, but
   it should be a decision.
3. **1440.** This is the composed view. It should look designed, not stretched.
4. **1560+.** Does anything keep growing past the ceiling. It should not: the clamp is flat
   above 1560 and the container should stop too.

A layout that needs a fifth breakpoint to work is a layout problem, not a breakpoint problem.
Fix the layout.
