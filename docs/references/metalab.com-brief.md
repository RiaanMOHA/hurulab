# metalab.com brief

Build hurulab's landing page in plain HTML, CSS and JavaScript using the design language in `metalab.com-tokens.md` (values) and `metalab.com-spec.md` (detail). Use hurulab's own colors, typefaces, logo and copy. Never use MetaLab's copy, imagery, logo or colors.

## Rules

1. Grid: 12 columns, 24px gutter and margin, no max width. Below 967px: 6 columns, 16px. Paragraphs sit in 2 to 4 columns starting mid-grid; titles span columns 1 to 8.
2. Rhythm: 180px above the first section and between sections, 140px on phones. Separate sections with space only.
3. Type: display face at 40px and up, thin weight, -0.02em. Body 16px, line height 1.4, -0.01em. Steps 16, 20, 40, 64, 88, 140. Phones halve the display sizes.
4. Motion: enter with `--ease-out` over 0.8s, leave in 0.3s. Travel 40px for text, 90px for rows, or one line height inside a mask. Reveal once when a block enters the viewport. Collapse durations under reduced motion.
5. The rounded rectangle (8px radius) is the one big move: first-paint clip reveal over readable content, the menu window, the in-page expand.
6. No loader, custom cursor, backdrop blur, glow backgrounds, rotating text or logo walls. Keep a visible focus ring.

## Section mapping

- Navigation: menu left, logo centered at -40%, Contact Us right. Morphs into a floating pill after 50px of scroll over 350px. Menu opens as the framed 30vw window with the page scaled inside; links slide in from 150px left after 0.5s.
- Hero: two-line headline in columns 5 to 12, second line indented 200px, centered two thirds down; short paragraph at 25% down in columns 8 to 10.
- The problem: three hoverable numbered columns.
- What we do: the home case study pattern. Nine service pills at the left margin, vertically centered, 38px pitch. Hover opens a full-screen panel using the three preview layouts, thumbnail growing from one edge. Phones get the centered vertical scroller.
- Discovery phase: the scrubbed framed card.
- Worked example: case study hero reached by the thumbnail expand (1.5s `--ease-in-out-strong`), then title-and-text chapters.
- How we work: description rows, seven rows.
- What it costs: vertical stats, numbers sliding up in masks.
- Ending: footer block, 88px question in columns 1 to 3, link rows in columns 4 to 5.
- Contact Us: `mailto:` from the header button and footer rows.
