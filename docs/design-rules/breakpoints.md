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
| mobile | **360px** | Small phone. The floor. Nothing may break below it, nothing is designed for narrower. |
| tablet | **768px** | Tablet portrait. |
| desktop | **1440px** | The design target: this is the width work is composed at. |
| desktop large | **1560px and up** | The ceiling. Above 1560 the scale stops growing. |

**The plain names are the names.** Owner decision, 4 August 2026: no sm, md, lg, xl codes
anywhere a person reads. Code may keep short tokens internally, but
anything shown to a human says mobile, tablet, desktop, desktop large.

**1440 is where you design. 360 is where you prove it.** A layout that only holds at 1440 is not
finished.

---

## 2. The root clamp

The root font size is the body size. **Owner instruction, 7 September 2026: body is 16px on
mobile and that is the floor.** It scales up through the breakpoints to **20px at 1560** and it
never scales below 16px. Fluid between those two points and flat outside them.

**This reverses the 4 August 2026 decision**, which set the floor at 17px on the grounds that it
is Apple's own body default. The 17px figure is recorded in section 3 as history.

```css
:root {
  /* 16px at 360, 20px at 1560, fluid between, clamped at both ends */
  font-size: clamp(1rem, 0.925rem + 0.3333vw, 1.25rem);
}
```

What it resolves to:

| Viewport | Root |
|---|---|
| 360px and below | 16.00px |
| 768px | 17.36px |
| 1440px | 19.60px |
| 1560px and above | 20.00px |

**Everything else is expressed in `rem`.** That is the whole mechanism. Because every token is
relative to the root, spacing, icons, radii and reading text all breathe by the same 16-to-20
proportion across the range, together, with no second system to keep in sync.

**The rule this sets: no `px` values in component CSS.** The only permitted exceptions are
hairline borders (`1px`) and anything that must not scale, such as a 1px rule that would blur.

---

## 3. The type scale

**Owner instruction, 7 September 2026: body and everything below it step by 1.125 from a 16px
mobile base.** Body large is 1.125rem, body is 1rem, body small is 0.8889rem, and the three
label sizes continue down the same ratio.

**Headings keep the two-ratio treatment**, 1.2 at the 360 floor rising to 1.3 at the 1560
ceiling, chosen by the owner by eye from three researched candidates on 4 August 2026. A single
ratio cannot give both a hero that fits a phone and a hero above 100px on desktop, because with
a fluid root every step grows by the same proportion. Two ratios resolve it: headings grow
harder as the screen grows.

**The history, kept so it is not re-argued.** The 4 August decision applied 1.2 to 1.3 to the
whole scale, replacing an earlier single 1.125, and set the floor at 17px to match Apple's iOS
body default of 17pt. The 7 September instruction returns the body range to 1.125 and drops the
floor to 16px. **Headings were not reopened.**

**Where the two-ratio method comes from.** It is Utopia's, and their own published pairing
example is 1.2 to 1.333. Recorded here on 7 September 2026 with the rest of the research,
because the archive it lived in was never backed up.

**One measured caveat, kept rather than hidden:** spacing scales as linear multipliers of the
base, not on the type ratio. Utopia's space palette, Material's 8dp and Tailwind all do it
this way; Every Layout is the outlier. [spacing.md](spacing.md) follows the majority.

**Apple publishes no spacing scale and no 8pt grid.** The 8pt grid is community lore. What
Apple does publish, and what section 5 takes: a 44 by 44pt minimum touch target, 60 on
visionOS. Sources: the HIG Layout, Accessibility and Buttons pages, WWDC23 session 10076 and
WWDC25 session 356.

The mechanics, and the rule each part sets:

- **Body and below are pure rem at the mobile ratio.** They ride the root clamp only, staying
  locked to spacing and icons.
- **Steps above body interpolate per step on `vw`, from 1.2 at 360 to 1.3 at 1560.** Both ends
  of every interpolation are a legal step of a legal ratio; the `vw` term never invents a
  size. The computed tokens live in [type.md](type.md) section 4. This file does not restate
  them.
- **Only steps with a job exist**, the same rule as the color ramps.
- **Steps -3 to 1 are the 1.125 body range**, owner instruction 7 September 2026. Steps 2 to 7
  are headings and keep the two-ratio interpolation. Step 1 returned with body large; it had
  been dropped on 4 August 2026 when the lede role went.

| Step | Role | at 360 | at 1560 |
|---|---|---|---|
| `-3` | Label small | 11.2px | 14.0px |
| `-2` | Label | 12.6px | 15.8px |
| `-1` | Body small, label large, nav, button, data | 14.2px | 17.8px |
| `0` | Body. The anchor | 16.0px | 20.0px |
| `1` | Body large | 18.0px | 22.5px |
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
| `--icon-sm` | 1.00rem | 16px | 20px | Small text, step -1 |
| `--icon-md` | 1.25rem | 20px | 25px | Body, step 0 |
| `--icon-lg` | 1.50rem | 24px | 30px | h4 and h5 |
| `--icon-xl` | 2.00rem | 32px | 40px | Headings, standalone |

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
