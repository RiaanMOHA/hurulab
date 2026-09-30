# thinkcompany.com-brief.md

Build hurulab's landing page in plain HTML, CSS and JavaScript, in the design language of thinkcompany.com, with hurulab's own colors, two typefaces, logo and copy. Take values from `thinkcompany.com-tokens.md` and anatomy and behavior from `thinkcompany.com-spec.md`.

Rules:

1. Light page. Alternate one dark and one light ground by section. One accent color does all the pointing.
2. 12 columns, 24px gap, 20px to 48px gutter. Every fluid value uses `clamp()` between 500px and 1440px.
3. Sentence case everywhere, labels included. No uppercase transforms. No em dashes.
4. The first screen is readable in the HTML. No loader. Fonts use `font-display: swap`. Motion only enhances.
5. Section map:
   - Navigation: logo left, one round menu button right; the bar scrolls away, the button stays fixed.
   - Hero: centered two-line headline, second line in accent, one intro sentence, one button to Contact Us, four photos entering from beyond the frame.
   - The problem: three hairline rows, the belief quoted on the left, the plain answer on the right, equal columns.
   - What we do: sticky centered heading with nine 3:4 cards at 5 of 12 columns passing over it, using the indent, pace and parallax pattern.
   - Discovery phase: sticky statement with photos passing, the who we are floating images pattern.
   - Worked example: result cards, sticky label left, problem and solution cards sliding in from the right.
   - How we work: seven numbered hairline rows.
   - What it costs: offer rows, price inside the sentence, one link each.
   - Ending and Contact Us: compact accent band, centered question, one lead line, one button opening a `mailto:` link, then the footer with the oversized logo.
6. Motion: line mask text reveal, 1.1s, expo out curve, 120ms per line, 115% rise from a clipped mask, once, at 85% of viewport, via IntersectionObserver. Scrubbed effects are linear. Hover 250ms, card reveals 500ms, button fill 325ms on `cubic-bezier(.83,0,.17,1)` with the 125ms delayed arrow swap.
7. Under `prefers-reduced-motion`, remove pins, parallax and reveals; show all content.
8. Below 980px, pinned and parallax layouts become stacked sections and scroll-snap rails.
9. Icons from Lucide or Phosphor. Never draw a logo or icon.
10. Do not build: chat, ask fields, glass panels, gradient or shimmer text, WebGL or gradient backgrounds, dot, line or node animations, logo marquees, sticky notices, smooth scrolling, page transitions.
11. No libraries. Keep each scroll script under 60 lines.
