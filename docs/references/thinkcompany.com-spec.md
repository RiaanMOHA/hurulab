# thinkcompany.com-spec.md

Design language capture of https://www.thinkcompany.com/, taken 2026-09-29, for transplanting onto hurulab's landing page. Values carry a method tag: `[read]` from the DOM, a computed style, a CSS rule, a module's source or an element box; `[watched]` seen happen; `[inferred]` reasoned, with the reason given. Token names refer to `thinkcompany.com-tokens.md`.

## Method and urls walked

Measurement method. The browser window available had a 752 x 686 viewport, so the site was also loaded into same-origin iframes of exactly 1440 x 900, 1024 x 768 and 390 x 844. All boxes at those widths are `[read]` from `getBoundingClientRect` inside those frames. The site detects when it runs inside a frame and skips most entrance reveals there, so boxes are at rest positions. Motion values are `[read]` from the shipped GSAP modules, not estimated from video. The stylesheet was read in full as text.

| Url | Purpose |
| --- | --- |
| https://www.thinkcompany.com/ | Home, first screen, full scroll, menu open and close, performance |
| /_astro/Default.CAYa2-dS.css | Every rule, font face, keyframe, media query |
| /_astro/Root.astro_…js and 30 lazy modules | Motion values, page transition, smooth scroll, reveals |
| /work | List page |
| /work/global-media-and-tech-company | Detail page of that list |
| /how-we-help | Services page, carousel, pricing rows, logo marquee |
| /why-think | Floating cards, text CTA variant, ask panel |
| /who-we-are | The "people you want in the room" section, values rows, story expand, people grid |
| /mixtape | Editorial list with filters |
| /careers | Video carousel, themed image CTAs |
| /contact | Form page, offices |
| /this-page-does-not-exist-xyz | 404 state |

Not reached: nothing behind a login exists. The chat agent in the menu and the ask fields send prompts to a server; I did not submit one, so its response states were not observed.

## Loader note

There is no loader, progress count or splash `[read]`: no element covers the page on load. What stands in for one: the hero headline, intro and button start at `opacity: 0` `[read]` and only appear after `document.fonts.load('600 1em Bagoss')` and the Diatype regular load resolve, then the entrance timeline runs. First contentful paint was 236ms `[read]` and it shows only the navy background and header. The copy arrives with the entrance: photo cards over 1.7s, copy reveal starting 350ms in. For hurulab: paint the headline and intro visible in the HTML, with `font-display: swap`, and apply the entrance only as enhancement.

## Performance note

| Measure | Value |
| --- | --- |
| Time to first byte | 59ms `[read]` |
| First contentful paint | 236ms `[read]` |
| DOM content loaded | 338ms `[read]` |
| Load event | 1,653ms `[read]` |
| Requests | 116 `[read]` |
| Total encoded transfer | 1,352 KB, of which 1,263 KB first party and video `[read]` |
| Render blocking | Only the stylesheet `[read]` (300,758 characters uncompressed) |
| Fonts | 7 files, 360 KB: Bagoss 600 61 KB, 500 60 KB, 700 58 KB; Diatype 400 50 KB, 700 55 KB; Family 41 KB; Space Mono 35 KB `[read]`. All `font-display: swap` `[read]`. Bagoss 600 is fetched first at 85ms, the rest at 198ms. |
| Largest files | Footer texture webp 284 KB, menu texture webp 186 KB (both fetched at 198ms though neither is on screen), chat agent JS 87 KB, analytics 62 KB, client JS 56 KB, WebGL runtime 51 KB, ScrollTrigger chunk 45 KB, plus a Vimeo player iframe in the hero `[read]` |
| LCP | The browser reported a hero photo card as the LCP element; the timing value was polluted by my menu test and is not usable `[read]` |

What costs time: two offscreen texture images, the WebGL runtime and scene, the Vimeo iframe, seven font files and third-party analytics. What is free: the layout itself, which is plain CSS with no framework runtime; all motion is GSAP driven from small per-section modules loaded only when their section exists.

## Banned-pattern flags (do not copy)

| Pattern | Where | Detail |
| --- | --- | --- |
| Gradient text | Every "frosted" pill button label (hero ask button, work list button, ask prompts, services buttons) | `background-clip: text` with a moving highlight, `text_shimmer` 1.5s linear infinite on hover `[read]`. Do not copy. |
| Glass or frosted panels | Ask card on home (`backdrop-filter: blur(12px)`, `#ffffff05` fill), sticky ask panel in how we help (`blur(8px)`), menu CTA box, frosted pill buttons (`blur(4px)` on hover) `[read]` | Do not copy. |
| Chat bubbles | The full-screen menu contains a chat agent with user and assistant bubbles and preset prompts `[watched]` | Do not copy. |
| Aurora or gradient-mesh background | Home hero and footer: Unicorn Studio WebGL canvas with a navy base and a light leak color that scroll-ramps from `#DDD3FF` to `#FF2C17` `[read]`; menu and footer also use a navy-to-red texture image `[watched]` | Do not copy. |
| Node-graph background | Home: `lines-connection`, 25 points joined by curved red lines drawn toward a center gap, redrawing on a loop `[read]` | Do not copy. |
| Particle background | `dots-grid`: 20 x 20 dots that scale in with row and column stagger and attract to the mouse within 224px `[read]`; `lines-grid`: 35 wobbling vertical lines that attract to the mouse within 286px `[read]`. Used in the red CTA band, image CTAs and the contact page. | Do not copy. |
| Trusted-by logo marquee | How we help page, "trusted by" row: logos scroll left forever at 4s per logo `[read]` | Do not copy. |
| Small labels above headings | Every section has a mono uppercase eyebrow above its heading `[read]`. These are plain text, not pills, so they are not the banned pill label, but they are uppercase, which hurulab never uses. | If kept, set them in sentence case. |
| Sticky bottom notice | A dismissible cookie notice fixed 20px to 50px from the bottom `[read]`. Not a top announcement banner, but the same family. | Do not copy. |
| Rotating circular text | Why Think: a 160px circle of mono text that rotates 360 degrees across the section scroll, in `mix-blend-mode: difference` `[read]` | Not on the list; treat as decoration, leave out. |

Not present `[read]`: typewriter or rotating words, animated stat counters, custom cursors, text scramble, magnetic buttons, sparkle icons, ASCII heroes, waitlist forms.

## Libraries found

| Library | Version | What it does here | Needed for hurulab? |
| --- | --- | --- | --- |
| Astro | 7.1.3 `[read]` generator meta | Static pages | No |
| GSAP core | 3.15 `[read]` via SplitText's version string | All scripted motion | Small script can replace most of it |
| ScrollTrigger | bundled with 3.15 `[read]` | Scroll-triggered and scrubbed tweens, pinning | IntersectionObserver for triggers; a small scroll handler for scrubs |
| SplitText | 3.15.0 `[read]` | Splits headings into masked lines | Small script: wrap lines once, or author lines by hand |
| Lenis | `lerp: .15`, `autoRaf: false`, `anchors: true` `[read]` | Smooth wheel scroll; native on touch; disabled under reduced motion | Leave out |
| Taxi.js | `[read]` class names and `data-taxi` | Client-side page transitions with prefetch on hover | Not needed on a one-page site |
| Embla Carousel | `[read]` | Testimonial, video and mobile card carousels | CSS scroll-snap covers it |
| Unicorn Studio | `unicornStudio.umd.js` `[read]` | WebGL background | Banned, leave out |
| Vimeo player API | `[read]` | Hero and case videos | Leave out |
| HubSpot forms, Hotjar, Crazy Egg, GTM, LinkedIn, ZoomInfo | `[read]` | Forms and analytics | Leave out |

---

# Tier one

## Motion

### Load choreography, home, desktop, element by element `[read]` from `home-feature` module

| Order | Element | From | To | Duration | Ease | Start |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Header | Static, no entrance | | | | 0 |
| 1 | Photo card 1 of 4 | Offset x -0.6, y -1.2 of 45% viewport, opacity 0, blur 20px | Rest, opacity 1, blur 0 | 1.7s | power3.out | 0 |
| 2 to 4 | Cards 2, 3, 4 | Offsets (-1.4, -0.7), (1.4, -1.1), (1.4, 1.1) of 45% viewport | Rest | 1.7s each | power3.out | +160ms each |
| 5 | Headline line 1 | Masked, yPercent 115, blur 14px, opacity 0 | 0 | 1.1s | expo.out | 350ms |
| 6 | Headline line 2 | Same | | 1.1s | expo.out | 350 + 120ms |
| 7 | Intro | y 28px, opacity 0 | 0 | 935ms | expo.out | then 1.6 stagger steps later (192ms gap) |
| 8 | Ask button | y 28px, opacity 0 | 0 | 935ms | expo.out | next step |
| 9 | Video card | Visible at rest, scaled to 0.306, lifted 7% | | | | 0 |

On phone the headline and intro are visible immediately; only the button reveals `[read]`.

### Scroll-driven motion, home hero `[read]`

- Pinned stage: the hero stage is `position: sticky; top: 0; height: 100vh` over a spacer of 140vh `[read]`. Over scroll distance 140% of viewport height, scrubbed linearly: cards move outward to 40% of the viewport and re-blur to 20px; cards fade out between 35% and 95% of that distance; the copy fades and lifts 40px over the first half; the video scales 0.306 to 1 from its bottom center and recenters vertically.
- Then a 100lvh runway: a giant display heading, pinned at 50lvh, fades in as the video's bottom edge rises from 50% to 20% of the viewport height, mapped linearly.
- Background color ramp over the first 60% of viewport height of scroll, ease `cubic-bezier(.16,1,.3,1)`, stepped at 24 fps in 48 steps. Banned, context only.

### Reveals, all pages

| Reveal | Trigger | Start state | Motion | Runs |
| --- | --- | --- | --- | --- |
| Heading and copy groups (`text-reveal`) | ScrollTrigger `start: top 85%`, `once: true` `[read]` | Split into lines, each inside a `overflow: clip` mask with .15em bottom padding; yPercent 115, blur 14px, opacity 0 | Lines 1.1s expo.out, 120ms stagger; non-heading items rise 28px over 935ms; each new group waits 1.6 stagger steps | Once |
| Result cards (work detail) | `start: top 90%`, end +35% viewport height, `scrub: true` | x 120px, opacity 0 | Card slides in linked to scroll; when card progress passes 50%, problem then solution rise 20px over 600ms, 250ms apart; reversing below 50% fades them out in 300ms | Every time, scrubbed |
| Floating cards and images (parallax) | `start: top bottom`, `end: bottom top`, `scrub: true` | Rest | Each card moves on y by its slot offset: 240, -420, 240, -520, 420, -340px (images: 240, -420, 240, -600, 300px) across the whole section, linear | Continuous |
| Ask display heading | `start: top 40%` | autoAlpha 0 | Fade in 2s power1.out; on scroll back fade out 500ms | Toggles |
| Sticky ask panel (how we help) | Section in view | opacity 0 | Fades in 1.5s when the second list row passes under it; scrubs out over the last 150px when scrolling up | Toggles |
| Work listing grid | After hero reveal | opacity 0, y 24px | 800ms power2.out, starts at 500ms of the hero timeline | Once |
| Story image crossfade | Text column scroll progress | First image visible | Next image crossfades 450ms power2.out at each 1/n of progress | Continuous |
| Mobile horizontal scrollers (floating images at 979px and below) | Pinned; scroll distance equals track overflow | | Track moves left linked to scroll; each card entering gets xPercent skew of scroll velocity x 3, settling in 700ms power3.out | Continuous |

Text splitting: headings and quotes marked `data-reveal-effect="blur"` are split into lines only, each line masked `[read]`. Words and characters are never split. Other items animate as whole blocks.

### Page transition `[read]` from the root module, `[watched]` twice

1. Click: scroll locks. A full-viewport red panel (z 1000) starts below the viewport (yPercent 100) and slides up to cover it in 330ms, ease `cubic-bezier(.65,0,.35,1)`.
2. At 330ms the old page, now fixed in place, drops 100px and darkens to `brightness(.5)` over 330ms, under the wipe.
3. New page is swapped in behind the wipe, scrolled to top.
4. Wipe continues upward, yPercent 0 to -100, over 500ms, same ease, revealing the new page, whose own entrance reveals then run.
Total: 1.16s from click to fully revealed. Links prefetch on hover and focus. Under reduced motion there is no wipe.

### Menu `[read]`, `[watched]`

Open: the navy panel slides from yPercent 100 to 0 in 600ms power2.out. At 420ms the menu group fades in over 600ms, and the seven nav links rise from yPercent 100 inside `overflow: hidden` items, 600ms power3.out, 70ms apart. The close button fades up 25px at 540ms. Close: the panel fades to 0 in 200ms, then resets below. Focus is trapped; Escape closes.

### Hover and focus micro motion `[read]`

| Element | Change | Duration and ease |
| --- | --- | --- |
| Primary button | Fill wipes up from the bottom (`scaleY` 0 to 1, origin bottom); label color flips; arrow slides out right by 100% + 6px while a twin slides in from the left | Fill 325ms `cubic-bezier(.83,0,.17,1)`; label color 250ms; arrows 250ms after a 125ms delay |
| Text link | 1px accent underline fades in and rises 3px into place | 300ms, default ease |
| Card (editorial) | Title lifts 8px to 12px, a 0fr to 1fr grid row opens, blurb fades up 12px after 200ms, link after 325ms; bottom scrim grows | 500ms |
| Work item | Title color darkens; round accent arrow badge fades in and rises 3px to 5px | 250ms |
| List row | Top hairline goes from 20% to 100% white; square arrow tile fills with accent | 250ms |
| Round icon buttons | Background and icon color swap | 250ms; menu button 325ms |
| Carousel arrows | Fade in on carousel hover | 250ms |

### Motion principles

Movement is reserved for entrances and for scroll. Text never slides sideways; it rises out of a mask, sharpening from a blur, line by line, 120ms apart, and it runs once. Images and cards carry the kinetic energy: they arrive from outside the frame, drift at different speeds on scroll, and leave outward. Everything that responds to scroll is scrubbed linearly so the visitor's hand is the easing. Hover changes are short (250ms to 500ms) and structural (a fill, a row opening), never bouncy. Timing is long at the top of the page (1.1s to 1.7s) and short in interaction (250ms to 325ms).

## Layout and spacing

Base unit 4px `[read]`, working step 8px. Raw spacing values collected (px): 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 28, 30, 32, 36, 40, 42, 48, 50, 56, 60, 70, 80, 90, 100, 106, 120, 130, 174. Proposed scale: 4, 8, 12, 16, 24, 32, 48, 80, 120, 174, ratios 2, 1.5, 1.33, 1.5, 1.33, 1.5, 1.67, 1.5, 1.45. Left out as one-offs: 3 (underline travel), 6 (icon gap), 10, 14, 22, 25, 42, 50, 56, 70, 100, 106, 130, which are clamp end points or single-component values.

Grid `[read]`: 12 columns, fixed 24px gap, fluid gutter 20px to 48px. At 1440 a column is 91.3px `[inferred]` from (1344 - 11 x 24) / 12. Container cap 2128px, so at 1440 content runs gutter to gutter; certain blocks cap at 1440px or 950px. Spans in use: 3 (sticky label column), 5 (card width, value title column), 8 to 10 (testimonial, intro measure), 9 (result list), 12.

Breakpoints `[read]` and what reflows:

| Width | Change |
| --- | --- |
| 500 | Buttons stop being full width; people grid gap grows |
| 740 | Two-column lists, related work in 2, carousel arrows appear, value rows become 5 + 7 column grid, results get a sticky 3-column label |
| 980 | Desktop: pinned hero, floating card layout, sticky backboards, parallax, list rows become 2 columns plus a 48px icon column, related work in 3 |
| 1200 | People grid 4 across, locations sticky header, testimonial 8 columns |
| 1440 | Card spans computed from column math; narrow containers cap at 1440 |
| Height 800, 900, 950 | Hero headline steps to 70px or 80px, hero cards move, hero copy centers at 48% |

Section rhythm at 1440, home `[read]`:

| Section | Height | Viewport heights | Background |
| --- | --- | --- | --- |
| Header | 129px, absolute over hero | 0.14 | Transparent |
| Hero, pinned | 2160px | 2.40 | Navy |
| Display heading runway | 900px | 1.00 | Navy |
| Ask card | 450px | 0.50 | Navy |
| Featured work | 3192px | 3.55 | Paper |
| How we help | 1481px | 1.65 | Navy |
| Editorial cards | 4864px | 5.40 | White |
| Red CTA band | 578px | 0.64 | Red |
| Footer | 771px | 0.86 | Navy |

Sections are separated only by background color change, never by rules or overlaps. Padding is generous at the start of heavy sections (174px above featured work, 120px above how we help) and tight in the CTA band (106px). The rhythm is broken on purpose twice: the pinned hero (2.4 viewports for one message) and the sticky editorial backboard (5.4 viewports where one heading stays centered while cards pass over it).

Text arrangement: headings and intros sit left-aligned at the gutter with a measure cap (950px for section headings at 1440, which is 0.66 of the container). Sticky "backboard" sections center their text with 16ch and 44ch caps. Two-column rows split 5:7. Images run to the container edge, never to the viewport edge, except the hero video at full expansion.

## The argument, home page

1. Header: who this is and a single way to go anywhere.
2. Hero: a claim about the team, not the service: the people you want in the room. Then one sentence that says what they are (three disciplines), who they serve (people with real complexity), and three verbs of what they do.
3. Ask: an invitation to start a conversation now.
4. Featured work: proof, framed as problems worth solving, three cases with a client type and an outcome sentence.
5. How we help: the visitor's own words as quoted problems, each answered by one plain sentence and a link to the service.
6. Editorial cards: they think in public, recent writing, events, video.
7. Red band: you have a hard problem, we are listening, one button.
8. Footer: every door again, plus an ask field.

The page moves from identity, to proof, to recognition ("that quote is me"), to culture, to a single call. The recognition step is the persuasive center: problems are written as a client would say them, in quotation marks, and the answer is one sentence without jargon.

## Section by section

For each section: purpose, skeleton, boxes at 1440 and 390, content shape, motion, which hurulab part it can carry, and what to take and leave.

### 1. Header

Purpose: identity and menu access. Skeleton:
- header
  - div inner
    - a skip link (hidden until focus)
    - a logo
    - div group (empty on desktop)
    - div controls
      - button menu, round

| Element | 1440 | 390 |
| --- | --- | --- |
| Header | 1440 x 129, padding 36 top, 28 bottom `[read]` | 390 x 97, 20 / 12 `[read]` |
| Logo | 158 x 65 at x 48, y 36 `[read]` | 158 x 65 at x 20, y 20 `[read]` |
| Menu button | 54 x 54 at x 1338, y 42 `[read]` | 54 x 54 at x 316, y 26 `[read]` |

Content: no links in the bar. The header is `position: absolute`, it scrolls away; the menu button's wrapper is `position: fixed`, so only the round button stays on screen `[read]`. Carries hurulab's navigation. Take: logo left, one round control right, the bar scrolling away while the control stays. Leave: the full-screen chat menu.

### 2. Hero, "we're the people you want in the room"

Purpose: the thesis. Skeleton:
- section hero
  - div stage (sticky, 100vh)
    - div cards: 4 x div card > img
    - div content (centered)
      - h1: text, br, span (accent line)
      - p intro
      - button ask
    - div video > player
  - div scroll spacer (140vh)

| Element | 1440 x 900 | 1024 x 768 | 390 x 844 |
| --- | --- | --- | --- |
| Content block | 1100 x 349, centered, top at 52% `[read]` | 834 x 321 | 390 x 607, padding-top 25vh |
| Headline | 760 x 160, 80px on a 900 tall viewport, lh 1 `[read]` | 659 x 140, 70px | 350 x 120, 40px |
| Intro | 700 x 79, 19px `[read]` | 700 x 75, 18px | 350 x 174, 21px |
| Button | 197 x 68 `[read]` | 197 x 68 | 197 x 68 |
| Video at rest | 411 x 231, 16:9, bottom center `[read]` | 292 x 164 | 350 x 197, in flow below |
| Portrait card | 253 x 337, 3:4 | scales with 100vw / 1440 | hidden |
| Landscape card | 322 x 242, 4:3 | | hidden |

Content shape: headline 8 words in 2 lines (4 + 4), line 2 in accent; intro 31 words; one button; 4 photos (2 portrait 3:4, 2 landscape 4:3); 1 video 16:9.
Card placement uses a unit of 100vw / 1440 `[read]`: card 1 top -110 units, left of center by 45 units; card 2 top 28%, left -140 units; card 3 top 24% minus 40 units, right -150 units; card 4 bottom 14%, right -102 units. Cards bleed off the edges.
Carries: hurulab hero. Take: two-line headline with the second line in accent, the one-sentence intro formula (what we are, who for, three verbs), photos arriving from outside the frame and sharpening, the centered composition. Leave: WebGL texture, video expansion, the frosted ask button (use a plain primary button to Contact Us).

### 3. Ask display heading and ask card

Purpose: turn the thesis into a conversation. Giant two-word heading 184px at 1440, weight 800, lh 0.84, accent color, pinned and centered; then a 500px wide glass card with 4 prompt pills (434 x 62 each) and an input field (434 x 66) `[read]`. Carries: none. Leave entirely: it is a chat entry and glass panel.

### 4. Featured work

Purpose: proof. Skeleton:
- div section
  - div inner
    - div header: p eyebrow, h2, p description
    - div list > ul > 3 x li > div item
      - div media > figure > img
      - div group: p client name > a; div content: p industry tag, h3 title > span end > span icon; div video thumb
    - div footer: button, a link

| Element | 1440 | 390 |
| --- | --- | --- |
| Section | 1440 x 3192, padding 174 / 174 `[read]` | 390 x 2563, 72 / 72 |
| Heading | 950 x 160, 80px, 6 words `[read]` | 350 x 144, 48px |
| Description | 950 x 72, 26px, 24 words, 70% opacity `[read]` | |
| Header to list | 90px `[read]` | 70px |
| Work item | 1344 x 756 (16:9), radius 16, gap 32 `[read]` | 350 x 558: image 350 x 233 (3:2) over a panel |
| Client name | 64px weight 650, box 675 x 291 at top left `[read]` | 36px |
| Title | 540 x 260, serif 48px lh 1.083, at x 60 from card, bottom anchored `[read]` | 32px |
| Video thumb | 160 x 284 (9:16), bottom right, inset 20 `[read]` | hidden |

Image treatment: the photo fills the card; a left-to-right scrim of the panel color (100% to 30%, 70% at 50%, 0 at 80%) keeps the left 30% readable `[read]`. On phones the scrim turns vertical (90px fade at the image bottom) and text moves into a solid panel below.
Carries: the worked example (espresso bar) as one large card, or none. Take: one full-width 16:9 card with text anchored bottom left on a scrim. Leave: the frosted button, video thumbnails.

### 5. How we help

Purpose: recognition, then answer. Skeleton:
- div section (navy)
  - div inner
    - div header: p eyebrow, h2 (accent), span intro
    - div body
      - div list: 5 x div row
        - div group: div problem (serif, quoted), div solution (sans)
        - a icon link (label visually hidden)
      - div sticky ask panel

| Element | 1440 | 390 |
| --- | --- | --- |
| Section | 1440 x 1481, padding 120 / 80 `[read]` | 390 x 2125, 60 / 60 |
| Header | 900 wide (85%, max 900) `[read]` | 350 |
| Title | 80px, 4 words, accent on navy `[read]` | 48px |
| Intro | 26px, 11 words `[read]` | |
| Header to list | 76px `[read]` | 50px |
| Row | 1344 x 131 to 162, padding 34 / 34, top hairline 1px at 20% white `[read]` | 350 x 311, stacked |
| Problem column | 466 wide, serif 26px lh 1.19 `[read]` | 315, 22px |
| Solution column | 466 wide at x 714 from gutter, sans 24px weight 600 `[read]` | 315, 22px |
| Column gap | 200px (clamp max) `[read]` | 18px |
| Icon link | 48 x 48 square, radius 4, 15% white fill `[read]` | 48 x 48 |

Content shape: 5 rows; problem 13 to 19 words in quotes; solution 9 to 16 words; one link per row. Grid: row is `1fr 48px`, the group inside is `1fr 1fr` with right padding 100px, so the two text columns are equal `[read]`.
Carries: the problem (three things people believe about AI), and also how we work (seven steps). Take: the whole anatomy, hairline rows, quote on the left in the serif, plain answer on the right in the heavy sans, a square arrow at the far right, the top hairline brightening on hover. Leave: the sticky glass ask panel.

### 6. Editorial cards, sticky backboard

Purpose: culture and thinking. Skeleton:
- div section (white)
  - div inner > div body
    - div backboard (sticky, 100lvh, centered): p eyebrow, h2, a button
    - div viewport > div rows: 6 x div row > article card
      - div tags; div media; div body: ul authors, h3 title > a, div reveal > p blurb, a link

| Element | 1440 | 390 |
| --- | --- | --- |
| Section | 1440 x 4864 `[read]` | 390 x 748 |
| Backboard | 1344 x 900, sticky top 0 `[read]` | in flow, 40px top padding |
| Title | 700 x 160, 80px, 5 words, max 700 `[read]` | 350 x 96, 48px |
| Card | 546 x 728 (3:4), 5 column span, radius 24, padding 30 / 40 / 32 `[read]` | 320 x 400 (4:5), horizontal snap carousel, 82vw max 340 |
| Card indents by slot (columns) | 0, 7, 1, 6, 0, 7 `[read]` | none |
| Card vertical pace by slot | 0, -20lvh, 30lvh, -30lvh, -16lvh, -20lvh `[read]` | none |
| Parallax by slot | 240, -420, 240, -520, 420, -340px `[read]` | none |

Cards scroll over a heading that never moves. Cards alternate left and right and at different speeds, so they appear to pass each other. Carries: what we do (nine services) as nine cards passing over a fixed "what we do" heading, or the discovery phase. Take: the sticky centered backboard with cards at 5 of 12 columns, the indent and pace pattern, the scrubbed parallax. Leave: tag chips and author lists unless hurulab needs them.

### 7. Red CTA band

Purpose: the single ask. Skeleton:
- div section (accent)
  - div dots canvas (top right); div lines canvas (bottom left)
  - div inner (radial fill mask): h2 serif, span lead, a button

| Element | 1440 | 390 |
| --- | --- | --- |
| Section | 1440 x 578, padding 106 / 106 `[read]` | 390 x 462, 40 / 40 |
| Inner | 1196 x 366 (10 columns), padding 80 / 200 `[read]` | 390 x 382, 50 / 60 |
| Title | 772 x 52, serif 48px, 7 words `[read]` | 270 x 104, 32px |
| Lead | 606 x 36, 26px, 10 words, navy on red `[read]` | |
| Button | 164 x 66 `[read]` | 160 x 54 |
| Title to lead to button gap | 26px `[read]` | 16px |

Carries: the ending and Contact Us (button opens email). Take: centered serif question, one line of lead, one button, compact band. Leave: the animated dots and lines canvases and the radial mask.

### 8. Footer

Skeleton:
- footer (navy, texture image, top fade 200px)
  - div main > div inner: a logo; div group: nav (title, 2-column list), form ask
  - div utility: p copyright, nav social icons, nav legal links

| Element | 1440 | 390 |
| --- | --- | --- |
| Footer | 1440 x 771 `[read]` | 390 x 619 |
| Logo | 454 x 185, 2.9 times the header logo `[read]` | 191 x 78 |
| Nav | 350 x 188, 2 columns, 7 links, 18px bold `[read]` | 350 x 156 |
| Ask field | 672 x 188 `[read]` | 350 x 64 |
| Utility row | 3 columns: copyright left, social center, legal right; 14px `[read]` | stacked, 12px |

Carries: Contact Us repeat and closing brand. Take: the oversized logo as the footer's main graphic, two-column link list, three-part utility row. Leave: the ask field and texture.

### Inner page sections worth carrying

**Who we are: floating images, the "people you want in the room" section.** The closest thing on the site to a consultancy explaining itself in plain words. Anatomy `[read]` at 1440: a sticky backboard (sticky at 30lvh, min height 50lvh, margins 10lvh above and 45lvh below) holds an 8-word heading (799 x 160, 80px) and a 31-word intro (705 x 144, 26px), centered. Five photos pass over it: spans 5, 4, 4, 3, 5 columns; indents 0, 8, 1, 7, 7; paces 0, -20lvh, 30lvh, -20lvh, -10lvh; ratios 4:3, 1:1, 4:3, 4:3, 4:3; parallax 240, -420, 240, -600, 300px. Section 2484px, 2.76 viewports. At 979px and below it becomes a pinned horizontal strip of photos 58vh tall. How it explains the business: the heading is a claim about people in the room, the intro names three disciplines, the client situation and three verbs, and the photos show real people at work rather than product. Carries: hurulab's discovery phase, or a second hero-like statement of who hurulab is.

**Why think: floating cards.** Same backboard, 6 navy cards of 3:4 at 546 x 728 passing over a centered heading of 5 words and a 17-word intro `[read]`. Each card: headline 46px weight 600 in aqua on navy, 7 to 10 words written as two short sentences; body 18px to 21px, 45 to 60 words; content anchored to the bottom, top padding 200px `[read]`. Carries: nine services, or discovery deliverables. This is the best template for "what we do" if each service gets a card.

**How we help and contact: offer rows, "let's get started".** Topic rows: header max 1100px with a mono eyebrow, a 2-line title (last two words kept together with `nowrap`) and a serif subline 60px; then rows separated by a 1px hairline at 20% black, 40px top padding, grid 5 columns title + rest content `[read]`. Three offers: name, 30 to 40 words, a price written plainly ("~$50K", or "No charge"), and one link each. Carries: what it costs, directly. Take: the plain price inside the sentence, one link per offer.

**Who we are: values rows.** Same topic rows, 6 rows, title 2 to 4 words in serif 48px, text 20 to 25 words in sans 24px weight 600 `[read]`. Carries: how we work, seven steps.

**Work detail: results.** Sticky 3-column label on the left (sticky top 40px to 60px), a 9-column list on the right; each result is a colored card (radius 16, padding 64 / 54 / 72) with a mono "problem" label, a serif problem of about 25 words, a mono "solution" label and a sans 32px solution `[read]`. Card fills cycle rose, aqua, white, red, pink. Cards slide in 120px from the right, scrubbed. Carries: the worked example (espresso bar) as problem and solution pairs.

**Work detail: text highlight.** Navy band, mono label, serif 48px statement with manual line breaks, button; decorative rings SVG on the left third `[read]`. Carries: a single pull statement in the example.

## Interaction and components

### Buttons

| Button | Size at 1440 | Padding | Padding to font ratio | Radius | States |
| --- | --- | --- | --- | --- | --- |
| Primary (navy fill, arrow) | 164 x 66 `[read]` | 24 / 24 at 16px text; 18 / 22 at 390 | 1.5 block, 1.5 inline at 1440; 1.13 and 1.38 at 390 | 8px | Hover: fill wipes up from bottom in accent (or white on red), label to navy, arrow swap. Focus-visible: same as hover. Active: no change `[read]` |
| Pill frosted | 197 x 68 | 22 / 40 | 1.38 / 2.5 | 999px | Banned treatment; the shape is a pill with the same height class as primary |
| Round icon | 54 x 54 menu, 48 x 48 submit, 50 x 50 play, 46 x 46 carousel | | | 50% | Background and icon swap |
| Square icon tile | 48 x 48 | icon centered | | 4px | Fill to accent |
| Form submit | auto x (14 to 18 + 24) | 14 to 18 / 22 to 24 | | 4px | Accent to white |

Arrow icon: 18 x 15, gap 12px from label `[read]`.

### Links

Text links: navy, no underline at rest; a 1px accent underline 3px below fades and rises in on hover over 300ms `[read]`. Inline prose links: bold, accent underline always visible, offset 2px `[read]`. Breadcrumb links: 2px underline variant.

### Cards

Editorial card: 3:4 on desktop and tablet, 4:5 on phone; radius 24; padding 30 top, 32 bottom, 22 to 40 sides; tags at top, body pushed to bottom with `margin-top: auto`; title 26px to 38px; hover opens a hidden row via `grid-template-rows: 0fr` to `1fr` over 500ms `[read]`. On touch devices the revealed state is shown by default `[read]`.
Work card: see featured work. Related work card: white, radius 12, 1:1 image with a 150px white fade at the bottom, 3 across at 980 and up `[read]`.
Result card: see results.

### Lists

Hairline list (how we help, topic rows): 1px top border only, no bottom border on the last item, padding 22px to 40px, hover brightens the hairline `[read]`.

### Carousels

Testimonial: one slide per view, loop, dots are 32 x 4 pills (50 x 5 at 980 and up) at 30% opacity, selected 100%; arrows 46px round appear on hover only; optional autoplay pauses on hover, focus and when less than 40% visible `[read]`. Mobile card rails: horizontal, snap to start, slides 82vw max 340px, scrollbar hidden, off-screen slides made inert `[read]`.

### Accordion

Story expand: "read more" toggle, plus icon rotates 45 degrees over 250ms; panel height animates 0 to auto 1s expo.out; collapse 450ms `[read]`. Aria expanded and hidden managed.

### Forms

Contact form on navy panel, radius 16, padding 32 to 65 / 24 to 35: labels 12px mono uppercase in aqua; inputs navy with a 1px 30% white border, radius 4, padding 11 to 16 / 16 to 24, font 16px to 18px; focus turns the border to 90% white with no outline; two-column rows at 740 to 979 and 1200 and up, gap 14px; errors in pink 14px, absolutely positioned 3px below the field `[read]`. While HubSpot loads, a skeleton of the same field sizes shows (labels as 12px bars, inputs as outlined boxes) `[read]`.

### Tags

14px, padding 4 / 8 / 3, radius 4, fill 8% black or solid grey, tracking -0.25px `[read]`.

### Navigation and menu

Full-screen dialog, navy with a texture, 100dvh. Desktop: a 340px sidebar with logo, "explore" list of 7 links (21px bold, 9px vertical padding) and a small CTA box, divided from the right side by a 1px 20% line; right side is the chat. Phone: logo, then links in a 2 x 4 grid (18px bold), then the chat `[watched]` `[read]`. Following a link closes the menu and runs the page wipe.

### Footer

See section 8.

### Tooltips, modals, tables

No tooltips or tables found `[read]`. The only modal is the menu, plus a fixed video player that opens from the small 9:16 thumbnails with a white 80% blurred scrim `[read]`.

### Focus ring

2px solid accent, offset 0 on buttons and pills; 2px navy, offset 2px on selects; inputs use a border change instead of an outline; skip link slides from -250% to 40px below the top when focused `[read]`. The ring is not shown on hover; hover and focus-visible otherwise share the same visual change.

## Color

Context only; replaced by hurulab's.

Neutral ramp, ordered light to dark, relative luminance in brackets `[read]` values, luminance computed:

| Step | Hex | Luminance | Role |
| --- | --- | --- | --- |
| 1 | #ffffff | 100 | Raised cards, white sections |
| 2 | #fdffee | 98.6 | Page background, text on navy |
| 3 | #f2f5f2 | 90.6 | Work card panel |
| 4 | #e2e2e2 | 76.1 | Solid tag fill |
| 5 | #c9c9c9 | 58.4 | Card outline |
| 6 | #2d2d2d | 2.6 | Body text |
| 7 | #0b2c52 | 2.5 | Headings on light, hover target for dark controls |
| 8 | #031b36 | 1.1 | Navy surface, strong text |
| 9 | #020f21 | 0.5 | Deep navy |

The ramp has a gap: nothing between 58 and 3, so all mid tones come from navy at 60% and 70% opacity rather than grey steps.

Accent: #ff2c17 (luminance 23.1), used as fill, title color on navy and paper, focus ring, underline, and page wipe. No hover or pressed variants: on hover, accent elements switch to navy or white instead.
Secondary themes (section fills): rose #ffe8f8, aqua #b6ffff, prism pink #ffaaf6, navy, red, paper, white. Each theme block sets background, title, text, button and button hover colors `[read]`.
Semantic: only an error color, pink #ffaaf6 on navy. No success, warning or info colors found `[read]`.

Gradients `[read]`: image scrims (to top, background 0%, transparent 100%, 32px tall); left scrim on work cards (90deg, panel color 0 to 30%, 70% at 50%, transparent at 80%); video scrim (to bottom, transparent to 90% black); section top fade on text highlight (0deg, background to transparent, 200px); CTA radial (closest-side, red 0 to 75%, transparent 100%); footer top fade (navy 0 to 33%, transparent 100%, 200px).

Contrast, computed from read values:

| Pair | Ratio |
| --- | --- |
| Body #2d2d2d on paper | 13.59 |
| Navy on paper | 17.06 |
| Heading #0b2c52 on paper | 13.84 |
| Paper on navy | 17.06 |
| Accent title on navy | 4.63 |
| White title on accent | 3.73 (passes only as large text) |
| Navy on accent | 4.63 |
| Accent on paper | 3.68 (large text only) |
| Navy on rose, aqua, pink | 14.95, 15.44, 10.16 |

## Typography

Families and files `[read]`:

| Family | Weights loaded | Use |
| --- | --- | --- |
| Bagoss Standard | 400, 500, 600, 700 (800 requested for the display size, rendered synthesized) | Headings, card titles, strong list text |
| Family | 400 (300 requested on quotes, rendered as 400) | Editorial serif: intros, quotes, problem statements, card titles for articles |
| ABC Diatype | 400, 700 | Body, UI, nav |
| Space Mono | 400 | Eyebrows, labels, breadcrumbs |

Renders as: heading `Bagoss`, paragraph `ABC Diatype` `[read]` computed stacks.

Type scale at 1440, px, with ratio to the step below:

| Step | Size | Ratio | Weight | Line height | Tracking | Role |
| --- | --- | --- | --- | --- | --- | --- |
| Display | 184 | 1.77 | 800 | 0.84 | -0.02em | Two-word pinned heading |
| Hero | 104 (80 on short viewports) | 1.30 | 600 | 1 | -2px | Page and hero titles |
| Section | 80 | 1.25 | 500 | 1 | 0 | Section headings |
| Client, CTA | 64 | 1.07 | 650, 500 | 1 | -1.25px | Work client names, image CTA titles |
| Serif XL | 60 | 1.25 | 400 | 1 | -1.2px | Page subtitles |
| Serif L | 48 | 1.04 | 400 | 1.083 | -1px | Quotes, CTA band title, value names |
| Card headline | 46 | 1.21 | 600 | 1 | -1px | Floating card headline |
| Card title | 38 | 1.46 | 600 | 1 | -0.4px | Editorial card title |
| Lead | 26 | 1.08 | 400 | 1.385 | 0 | Intros and descriptions |
| List strong | 24 | 1.14 | 600 | 1.167 | 0 | Solution statements |
| Intro fixed | 21 | 1.17 | 400 | 1.381 | 0 | Short intros |
| Body | 18 | 1.13 | 400 | 1.5 | 0 | Body |
| UI | 16 | 1.14 | 400 to 500 | 1.5 | -0.02em on pills | Buttons, inputs |
| Eyebrow, tag | 14 | 1.17 | 400 | normal | +1.6px mono, uppercase | Labels |
| Small | 12 | | 400 | | | Legal |

There is no single modular ratio; steps cluster between 1.14 and 1.30 with two large jumps (display to hero, card title to lead). All fluid sizes interpolate between 500px and 1440px; the tokens file gives each size at 1440, 1024 and 390.
Weights: 400 body and serif; 500 section headings, pills; 600 hero, card titles, strong list text; 650 client names; 700 nav links; 800 display.
Measure: prose 700px `[read]`, which at 18px Diatype is 80 characters `[inferred]` from an average advance of 0.49em; intros 700px at 26px, 55 characters `[inferred]`; section headings 950px at 80px, 22 characters `[inferred]`.
Case: headings sentence case; eyebrows, labels and form labels uppercase through `text-transform` `[read]`. hurulab keeps sentence case everywhere.

---

# Tier two

## Look and feel

Warm, confident, editorial. Big heavy sans headings against a quiet serif voice for anything human (quotes, intros, problem statements). Navy and paper alternate as the two grounds, with one hot red doing all the pointing. It leans on type scale and motion first, photography second. At a glance most sections are readable without interaction; exploration is reserved for cards (hover reveals a blurb) and the ask features.

## Shape and surface

Radius scale: 2, 4, 8, 12, 16, 20, 24, 48, 999, 50% `[read]`. Small radii (4, 8) on controls, large (16 to 24) on cards and media. Hairlines are 1px, always as a top border on list rows, at 20% of the text color. No drop shadows except 0 18px 40px at 18% black on gallery images inside cards. Scrims are gradients from the section color, not black, so images dissolve into their panel. Z stack: canvases 0, content 1, card layers 2 to 3, header 10, notice 50, skip links 100, menu 400, open video 500, page wipe 1000.

Image treatment: crops 16:9 (work, video), 3:2 (work on phone), 4:3, 3:4, 1:1, 9:16 (vertical video), 5:4 (CTA image), 2:3 (people). Images enter with their card (parallax or slide), never with a separate zoom.

## Graphics and motifs

Dot grids and line grids in navy on red, connection lines in red, concentric rings SVG, a texture image on navy. All generative motifs are flagged banned above. The motif that survives: a hairline top rule on list rows, and mono labels.

## Iconography

A custom SVG sprite `[read]`: arrow right 18 x 15, arrow left 20 x 20, chevron down 20, close 15, expand 20, plus 20, menu 18 x 14, play 17 x 20, pause 11 x 18, social icons 17 to 22. Filled, not stroked, `fill: currentColor`. Sizes pair with 16px to 18px text. One consistent small set; not a known library. hurulab should substitute a real library (Lucide or Phosphor) at the same sizes.

## Illustration

None. Photography of people and offices, plus decorative generative graphics. No characters.

---

# Tier three

## Brand behavior

Logo 158 x 65 in the header at the gutter, 36px from the top at 1440 `[read]`; white on navy pages, navy on paper pages. It does not stick; it scrolls away with the header. In the footer it is the largest element, 454 x 185 at 1440. Favicon and theme color present `[read]` in head. Clear space around the header logo: 36px above, the gutter to the side.

## UX patterns

Every page ends in the same red CTA band. Hover prefetches pages. Forms validate on submit (HubSpot), error text appears below the field. Loading state: listings dim to 40% and block input during filter changes; a skeleton replaces the form while it loads. Empty state: "no results" centered text with a red reset button. 404: hero with a stream of photos rotated -4 degrees, title and a button home. Accessibility: skip link, aria-expanded on toggles, focus trap in menu, inert off-screen slides, visually hidden labels, and a full `prefers-reduced-motion` branch that removes pins, parallax, reveals, the wipe and smooth scroll `[read]`.

## Information architecture

Primary: Our work, How we help, Why Think, Who we are, Mixtape, Careers, Contact us. Secondary: privacy policy, accessibility, three social links. Page types: landing (hero plus stacked components), listing (hero, filter, grid), detail (hero, media, overview, results, testimonial, CTA), contact, 404. Every page is a stack of reusable blocks with a color theme per block.

Sitemap observed:
- /
- /work, /work/[case]
- /how-we-help
- /why-think
- /who-we-are
- /mixtape, /mixtape/[post]
- /careers
- /contact
- /privacy-policy, /accessibility

## Voice

Plain, direct, second person. Problems are written in the client's own voice, in quotation marks. Answers are one sentence, starting with "we", with a verb and an outcome. Headings are short claims (4 to 8 words). Buttons say exactly what happens. Prices are written as numbers in the sentence. Punctuation: sentences end with periods even in headings. Capitalization: title case in nav and buttons on the live site; hurulab uses sentence case.

---

# Effects inventory

| Effect | Where | Trigger | Duration | Easing | Travel | Build |
| --- | --- | --- | --- | --- | --- | --- |
| Line mask reveal | Headings, quotes | Enters at 85% | 1.1s, 120ms stagger | expo out | 115% of line height, blur 14px | Small script (split lines, IntersectionObserver, CSS transitions) |
| Block fade up | Intros, buttons | Same | 935ms | expo out | 28px | CSS alone plus IntersectionObserver |
| Hero cards fly in | Hero | Load | 1.7s, 160ms stagger | power3 out | 45% viewport, blur 20px | CSS keyframes |
| Hero expand on scroll | Hero | Scroll, 140vh | scrubbed | linear | video 0.306 to 1 | Small script, or CSS `animation-timeline: view()` |
| Pinned display heading fade | Home | Scroll position | 2s in, 0.5s out | power1 out | opacity | Small script |
| Sticky backboard with passing cards | Editorial, why, who | Scroll | continuous | linear | 240 to 600px per card | CSS sticky plus small scroll script, or CSS scroll timeline |
| Results slide in | Work detail | Scroll 90% to +35vh | scrubbed; content 600ms | cubic-bezier(0,.55,.45,1) | 120px x, 20px y | Small script |
| Page wipe | All links | Click | 330 + 330 + 500ms | cubic-bezier(.65,0,.35,1) | 100vh wipe, page -100px | Not needed (single page); CSS if wanted |
| Menu slide | Menu | Click | 600ms, links 70ms stagger | power2 and power3 out | 100% | Small script |
| Button fill wipe | Buttons | Hover, focus | 325ms | cubic-bezier(.83,0,.17,1) | scaleY 0 to 1 | CSS alone |
| Arrow swap | Buttons | Hover, focus | 250ms after 125ms | ease | 100% + 6px | CSS alone |
| Underline rise | Links | Hover, focus | 300ms | ease | 3px | CSS alone |
| Card reveal | Editorial cards | Hover, focus-within | 500ms, 200 and 325ms delays | ease | title -8 to -12px, blurb 12px | CSS alone |
| Hairline brighten | List rows | Hover | 250ms | ease | none | CSS alone |
| Story expand | Who we are | Click | 1s open, 0.45s close | expo out, power2 in-out | height | Small script |
| Image crossfade | Story | Scroll | 450ms | power2 out | opacity | Small script |
| Testimonial slide | Testimonials | Click, autoplay | Embla | | 100% | CSS scroll-snap |
| Mobile card rail | Phones | Swipe | native | | | CSS scroll-snap |
| Drag skew | Phone horizontal strip | Scroll velocity | 700ms | power3 out | xPercent velocity x 3 | Small script |
| Smooth scroll | Whole site | Wheel | lerp 0.15 | | | Library, leave out |
| WebGL texture | Hero, footer | Always | | | | Library, banned |
| Dots, lines, connections | CTA, hero | Loop, mouse | | | | Script, banned |
| Frosted shimmer pills | Buttons | Always, hover | 7.5s sweep, 1.5s shimmer | linear | | Banned |
| Logo marquee | How we help | Always | 4s per logo | linear | -50% | Banned |
| Rotating circle text | Why Think | Scroll | scrubbed | linear | 360 degrees | Leave out |

---

# Rebuild note

**Swap freely.**
- hurulab's colors, fonts and logo, by definition.
- The theme color names and the number of section themes.
- Photography and every image asset.
- Icon set (use Lucide or Phosphor at 18 x 15 and 20 x 20 equivalents).
- The chat, ask fields, WebGL, dot, line and connection canvases, frosted pills, marquee, notice, rotating text. All are removed, not replaced.
- Eyebrow casing (sentence case) and whether eyebrows exist at all.
- Exact copy lengths within a 20% margin of the content shapes above.

**Do not touch.**
- The 500px to 1440px fluid interpolation for every size and space.
- 12 columns, 24px gap, 20px to 48px gutter, content edge to edge up to the cap.
- Section padding pairs: 174 heavy, 120 / 80 for navy blocks, 106 for the CTA band, all scaling to 72, 60 and 40 on phones.
- Heading to lead to body ratios: 80 / 26 / 18 at 1440 (3.08 and 1.44), 48 / 22 / 16 on phones.
- Line mask text reveal: 1.1s, expo out, 120ms per line, 115% rise from a clip mask, once, at 85% of the viewport.
- Hero composition: centered two-line headline, second line in accent, 31-word intro, one button, photos entering from beyond the frame over 1.7s with 160ms stagger.
- Sticky centered backboard with 3:4 cards at 5 of 12 columns, indents 0, 7, 1, 6, 0, 7, paces 0, -20, 30, -30, -16, -20 lvh, parallax 240, -420, 240, -520, 420, -340px, scrubbed linearly.
- Hairline list rows: quote left in serif, answer right in heavy sans, equal columns, square arrow tile, hairline brightening on hover.
- Offer rows with the price in the sentence and one link each.
- Result cards sliding 120px from the right, scrubbed, with the problem and solution rising 250ms apart after the card is halfway in.
- Button anatomy: 8px radius, padding equal to 1.5 times the label size, fill wiping up in 325ms on `cubic-bezier(.83,0,.17,1)`, arrow swap 250ms after 125ms.
- Hover timing at 250ms and card reveals at 500ms; nothing bounces.
- Color alternation between a dark and a light ground, with one accent doing all the pointing.
- Reduced motion: every pin, parallax and reveal removed, content fully visible.
