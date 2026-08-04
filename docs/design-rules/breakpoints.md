# Breakpoints and the scale

Owner decision, 30 July 2026. The first written design rule in this project.

This file owns the four breakpoints, the 1.125 clamp, and the rule that every size in the
system derives from it. It does not own which typeface or which color. Those are undecided.

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

## 2. The 1.125 clamp

One number governs the whole system. The root font size grows from **16px at 360** to **18px at
1560**, and 18 ÷ 16 is exactly **1.125**. It is fluid between those two points and flat outside
them.

```css
:root {
  /* 16px at 360, 18px at 1560, fluid between, clamped at both ends */
  font-size: clamp(1rem, 0.9625rem + 0.1667vw, 1.125rem);
}
```

What it resolves to:

| Viewport | Root |
|---|---|
| 360px and below | 16.00px |
| 768px | 16.68px |
| 1440px | 17.80px |
| 1560px and above | 18.00px |

**Everything else is expressed in `rem`.** That is the whole mechanism. Because every token is
relative to the root, type, spacing, icons, radii and line lengths all grow by the same 1.125
across the range, together, with no breakpoint-specific overrides and no second system to keep
in sync.

**The rule this sets: no `px` values in component CSS.** The only permitted exceptions are
hairline borders (`1px`) and anything that must not scale, such as a 1px rule that would blur.

---

## 3. The type scale

Ratio **1.125**, the same number, applied as a stepped scale from the root.

| Step | rem | at 360 | at 1560 | Use |
|---|---|---|---|---|
| `-2` | 0.790 | 12.6px | 14.2px | Legal, footnote |
| `-1` | 0.889 | 14.2px | 16.0px | Small, captions, labels |
| `0` | 1.000 | 16.0px | 18.0px | Body. The anchor |
| `1` | 1.125 | 18.0px | 20.3px | Lede |
| `2` | 1.266 | 20.3px | 22.8px | h4 |
| `3` | 1.424 | 22.8px | 25.6px | h3 |
| `4` | 1.602 | 25.6px | 28.8px | h2 |
| `5` | 1.802 | 28.8px | 32.4px | h1 small |
| `6` | 2.027 | 32.4px | 36.5px | h1 |
| `7` | 2.281 | 36.5px | 41.1px | Display small |
| `8` | 2.566 | 41.1px | 46.2px | Display |

```css
:root {
  --t--2: 0.790rem;  --t--1: 0.889rem;  --t-0: 1rem;      --t-1: 1.125rem;
  --t-2:  1.266rem;  --t-3:  1.424rem;  --t-4: 1.602rem;  --t-5: 1.802rem;
  --t-6:  2.027rem;  --t-7:  2.281rem;  --t-8: 2.566rem;
}
```

**1.125 is a tight ratio and that is deliberate.** It reads as considered rather than loud,
which matches a consultancy. **If a bigger headline is wanted, take more steps up the same
scale. Never change the ratio for one element.** Changing the ratio anywhere breaks the
single-number promise this file exists to make.

### 3.1 Display sizes

Steps 0 to 8 cover everything from legal text to a small hero. Editorial display type needs
more, so the scale simply continues.

| Step | rem | at 360 | at 1560 |
|---|---|---|---|
| `9` | 2.887 | 46.2px | 52.0px |
| `10` | 3.247 | 52.0px | 58.4px |
| `11` | 3.653 | 58.4px | 65.8px |
| `12` | 4.110 | 65.8px | 74.0px |
| `13` | 4.624 | 74.0px | 83.2px |
| `14` | 5.202 | 83.2px | 93.6px |
| `15` | 5.852 | 93.6px | 105.3px |
| `16` | 6.584 | 105.3px | 118.5px |

**Display type is the one exception to rem-only sizing, and it is a narrow one.** A headline at
step 14 is 83px, which is correct at 1440 and absurd at 360. The root clamp cannot fix this,
because it only moves 16px to 18px: it scales for reading comfort, not for line fitting.

So display and heading type interpolates on viewport width, **between two steps that are both
on the scale**. The actual tokens live in [type.md](type.md) section 4, computed so both ends
of every interpolation land on a legal step with the fluid root accounted for. This file does
not restate them.

The rule is intact: **every value at every breakpoint is a step on the 1.125 scale.** The `vw`
term only interpolates between two legal steps. It never invents a size outside the scale.

Only heading roles interpolate on `vw` ([type.md](type.md) section 3). Body, lede, small,
label, spacing and icons stay pure rem, so they scale only with the root clamp and stay locked
to each other.

Display type also takes tighter settings, because large type needs less: **line-height 0.95 and
letter-spacing -0.04em** at step 12 and above.

---

## 4. Spacing

Same root, same `rem`, so spacing grows with everything else. The steps sit on a 4px grid at the
360 floor, which is what keeps the layout honest at the smallest size.

| Token | rem | at 360 | at 1560 |
|---|---|---|---|
| `--s-1` | 0.25rem | 4px | 4.5px |
| `--s-2` | 0.50rem | 8px | 9px |
| `--s-3` | 0.75rem | 12px | 13.5px |
| `--s-4` | 1.00rem | 16px | 18px |
| `--s-5` | 1.50rem | 24px | 27px |
| `--s-6` | 2.00rem | 32px | 36px |
| `--s-7` | 3.00rem | 48px | 54px |
| `--s-8` | 4.00rem | 64px | 72px |
| `--s-9` | 6.00rem | 96px | 108px |

Note that the released 24px maximum gap rule from the retired brand files does **not** carry
over. It was a fixed-pixel rule and this system has no fixed pixels. See section 15 of
[brand.md](brand.md).

---

## 5. Icons and everything else that has a size

**Icons follow the scale like everything else.** They are sized in `rem` so they stay locked to
the text they sit beside, at every width, with no separate icon breakpoint logic.

| Token | rem | at 360 | at 1560 | Pairs with |
|---|---|---|---|---|
| `--icon-sm` | 1.00rem | 16px | 18px | Small text, step -1 |
| `--icon-md` | 1.25rem | 20px | 22.5px | Body, step 0 |
| `--icon-lg` | 1.50rem | 24px | 27px | Lede and h4 |
| `--icon-xl` | 2.00rem | 32px | 36px | Headings, standalone |

The same applies to every other measured thing: border radii, control heights, avatar sizes,
line lengths, container widths, and the height of anything that has to sit level with text. If
it has a size, it is in `rem` and it follows the clamp.

**One exception, stated once.** Hairlines stay at `1px`. A scaling hairline renders soft.

---

## 6. How to check work

At each of the four widths, in this order:

1. **360.** Does anything overflow horizontally. Does any text drop below step -2. Do tap
   targets stay at least `--s-9` tall enough to hit.
2. **768.** Does the layout change shape here, or does it just get wider. Either is fine, but
   it should be a decision.
3. **1440.** This is the composed view. It should look designed, not stretched.
4. **1560+.** Does anything keep growing past the ceiling. It should not: the clamp is flat
   above 1560 and the container should stop too.

A layout that needs a fifth breakpoint to work is a layout problem, not a breakpoint problem.
Fix the layout.
