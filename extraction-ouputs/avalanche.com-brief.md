# avalanche.com brief

Rebuild hurulab's landing page in plain HTML, CSS and JavaScript in avalanche.com's design language, with hurulab's colors, typefaces, logo and copy. Values: `avalanche.com-tokens.md`. Detail: `avalanche.com-spec.md`.

## Rules

1. Design at a 1920 canvas. Above 1024px sizes are `clamp()`s scaling down to a 1025 floor; at 1024 and below use the fixed phone values.
2. Frame sections with the five-column hairline grid (two on phone). Hero `4fr 1fr`, side items one column wide, 8px seams between cards.
3. Map the color roles onto hurulab's palette and keep the page light. Accent only as an 8px leading bar and 4px rules.
4. Headings: heaviest weight, line height 0.85, tracking -0.03em, two-tone when a heading has two phrases.
5. Square corners, 1px hairlines, no shadows, no blur. Radius only on large feature panels.
6. One IntersectionObserver toggles `.visible` per section, removed when the section drops below the viewport. All motion is CSS transitions from that class, entering from the edge of the element's own box inside an `overflow: clip` parent. Split lines drop from -100%, delay 0.2s, duration 1s + 0.4s per line, `cubic-bezier(0.2, 0.6, 0.35, 1)`. Cards rise from +100%, 1s + 0.2s per card. Hero: text 200ms, actions 400ms, proof 600ms.
7. Text visible in the first paint. No loader.
8. Buttons: height 4.5x font size, label left, arrow right, 8px leading bar wiping to full width in 500ms, `cubic-bezier(0.165, 0.84, 0.44, 1)`. Visible focus ring. No buttons inside links.
9. `@view-transition { navigation: auto; }`: old page to scale 0.9 and 50% opacity, new page up from 100%, 1s, nav excluded.
10. Add `prefers-reduced-motion` removing all travel.
11. No logo marquees, frosted panels, pills, chat buttons, banners, gated forms, scrambles or counters.

## Mapping

- Navigation: fixed bar, phone drawer with sliding rows.
- Hero: full screen, text top, actions bottom, a fact in column five.
- The problem: clip-path tile carousel, one tile per belief.
- What we do: 3 x 3 card grid, title top, action bottom.
- The discovery phase: 33:9 panel, text left, image right, accent bar.
- The worked example: scroller, one card per stage, heading top right.
- How we work: scroller of seven numbered cards with leading bars.
- What it costs: centered statement, one button.
- The ending: near full-screen rounded panel, one big line.
- Contact Us: heading left, one `mailto:` button right, on its own ground.
