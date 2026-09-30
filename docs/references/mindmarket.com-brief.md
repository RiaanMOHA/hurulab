# mindmarket.com brief

Rebuild hurulab's landing page in plain HTML, CSS and JavaScript with the design language in `mindmarket.com-tokens.md` (values) and `mindmarket.com-spec.md` (detail). Use hurulab's colors, two typefaces, logo and copy. Never use Mindmarket's logo, art or copy.

## Rules

1. Every section is a rounded slab (50px, 35px below 1000px) on a page-ground color. No dividers, shadows or gradients.
2. 16-column grid from 1000px, 6 below, 20px gutters and margins, content in columns 2 to 15.
3. Color order: saturated hero, neutral reading ground, saturated ending, neutral proof, a different saturated color for Contact Us.
4. Display type at 9.7vw, line-height .95, tight tracking; medium weight; sentence case. Keep the spec's step ratios.
5. Growth uses `--ease-overshoot`, travel uses `--ease-primary`. Surfaces first, text 100 to 250ms later. UI moves 100 to 400ms.
6. No loader. Paint the hero at rest, then: second line rises 80px at 100ms, first line at 200ms, over 800ms; menu bar drops in after 200ms.
7. No uppercase labels, pill badges, frosted blur, logo marquee or cursor tracking.
8. Under `prefers-reduced-motion`, keep only short opacity fades.

## Section map

- Navigation: floating bar and mobile panel menu. Copy the burger tumble, panels growing from 90%, 50ms row stagger, no scrim.
- Hero: flat color, centered two lines, no button; recedes to .8 and dims while the next slab slides over.
- The problem: numbers stack, sticky heading left, three cards rotating flat as they stick. Keep text contrast at 4.5:1.
- What we do: the decision section. Nine near-square white cards (3 by 3 at desktop, rows on phones), 28px reveal with 50ms stagger, 4px hover lift, each opening an in-page dialog with a tray panel.
- The discovery phase and how we work: decision case, sticky visual at 5fr, numbered steps on a 2px connector at 7fr.
- Worked example: journey tiles alternating sides along a scroll-drawn path.
- What it costs: programme cards or three stacked cards.
- The ending: closing callout, display line, one sentence, one button.
- Contact Us: footer slab, two-word display invitation with a wavy underline, `mailto:` button.

## Components

- Buttons: 60px tall, 10px radius, round icon chip; on hover the surface grows 1.05, the label steps right, the arrow hops to the start.
- Replace characters with hurulab's own art or leave the space empty. Load nothing heavy before the first screen.
