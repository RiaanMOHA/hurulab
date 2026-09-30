# trionn.com-brief.md

You are building hurulab's landing page in plain HTML, CSS and JavaScript, in the design language of trionn.com. Use hurulab's own colours, two typefaces, logo and copy. Take every value from `trionn.com-tokens.md`; take structure and behaviour from `trionn.com-spec.md`.

Rules:

1. Set `html { font-size: calc(1000vw / var(--root-divisor)) }` with the divisor steps from the tokens file. Size everything else in rem.
2. Use a full-bleed 12-column grid, 1.5rem gutter, 2.5rem side margin (1.5rem under 768). Start headings at column 2 and hang a small uppercase label in column 1.
3. Use one weight. Build hierarchy from size only: 15px uppercase labels, 16px body, 32px h3, 85 to 90px h1 and h2, 132px giant words. Track display type tight (-0.06em, giant words -0.08em) with line height under 1.
4. Give each statement a full viewport. Section padding is 9.375rem top and bottom.
5. Alternate section tones in hurulab's palette. Hand over with a five-band stripe wipe in the next section's colour, bottom band first, with the next section pulled up underneath. No borders or gaps between sections.
6. Reveal text by unblurring from 12px in place, 0.8s, power2.out, 50ms random stagger, at 90% of viewport height. Blocks rise 20px only.
7. Divide blocks with a 1px line that draws on scroll, carrying a rotating plus.
8. The primary control is the text button: no box, uppercase label in hurulab's second typeface, arrow, 1px underline that redraws, per-char shift on hover.
9. Keep the header fixed, never hidden, with `mix-blend-mode: difference`. Reveal the menu panel with a clip-path circle from the toggle, 1.2s, reversed 1.75x faster.
10. Show readable hero copy on first paint. No loader. Under `prefers-reduced-motion`, drop blur, pins and wipes.
11. Never use rotating words, logo walls, counters, frosted panels, sparkle glyphs, WebGL backgrounds, sound or custom cursors.

Map hurulab's parts onto these sections:

- Navigation: the header.
- Hero: headline top left, actions below, three-part bottom row.
- The problem: the about statement, one belief per viewport, scroll-filled.
- What we do: the pinned services stage, nine cards in three rows.
- The discovery phase: three unfolding key facts cards.
- The worked example: the pinned horizontal track, four 50vw frames.
- How we work: the process component, seven steps.
- What it costs: the accordion.
- The ending: the vision section, slogan plus stripe wipe.
- Contact Us: the full-height footer; the button opens `mailto:`.
