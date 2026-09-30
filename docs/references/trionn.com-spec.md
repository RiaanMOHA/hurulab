# trionn.com-spec.md

Design language extraction of https://trionn.com/ for transplant onto hurulab. Captured 2026-09-29.

Tags: `[read]` from the DOM, a computed style, a CSS rule, an element box or the shipped JS source. `[watched]` seen happen. `[inferred]` reasoned, with the basis given. Pixel values are at 1440 wide unless stated; 1rem = 14.4px at 1440, 12.05px at 1024, 12.19px at 390.

## Method note, read first

The Chrome tab went to `document.visibilityState = hidden` a few seconds into the session, which freezes `requestAnimationFrame`, GSAP and Lenis. Live watching was therefore not possible for most of the walk. Instead, every motion value below was read from the site's own shipped JavaScript (GSAP timelines, ScrollTrigger configs, the hand-written loader) and CSS, which gives exact durations, eases, distances and triggers rather than eyeballed ones. Layout was measured in a same-origin frame at exactly 1440x900, 1024x768 and 390x844. Because the frame never finished the loader, pin spacers were not all created there, so section heights for pinned sections are given from the code (scroll distance as % of viewport) rather than from a live box. Nothing is tagged `[watched]` except where noted. No screenshots were saved.

## Urls walked

| Url | Purpose |
|---|---|
| https://trionn.com/ | Home, full source and layout harvest at 752, 1440, 1024, 390 |
| https://trionn.com/about | Inner page; source of the "how we work" process component, values, team, awards |
| https://trionn.com/services | Inner page; services orbit, capability blocks, tech stack, process |
| https://trionn.com/work | Index page (single long projects list, 25,619px at 1440) |
| https://trionn.com/contact | Form and FAQ accordion (the interactive view) |
| https://trionn.com/trionn-story | Name and mascot story page |
| Nav targets found | `/`, `/work`, `/services`, `/about`, `/contact`, `/trionn-story` `[read]` |

Not reached: a project detail page. The /work index rendered no `/work/…` links in the frame (project items are canvas and script driven), so the list-and-detail pair could not be walked. A 404 state exists (`body.is-404` hides the footer and locks the page to 100dvh `[read]`) but was not visited. The page transition could not be watched twice; its full timeline is given from source instead.

## Loader note (flag, never copy)

- Covers the whole viewport on every full page load (`pl-overlay` at z 9100, backdrop `#c8c8c8`) `[read]`.
- It is purely time based. Nothing in its code waits for fonts, images or data `[read]`. It hides React hydration, GSAP setup and the hero WebGL scene initialising behind it `[inferred: those all start at the same time and the loader's callbacks release the "transition ready" flag that every reveal waits for]`.
- Sequence and timings `[read]`:
  1. Four plus marks start 60px in from each viewport corner and fly to the centre, spinning 720deg, over 900ms, ease out quint.
  2. 600ms: the logo box scales in (ease out cubic) while the plus marks overshoot back out to the box corners, spinning 1080deg down to 0. The three logo pieces build in 3D (rotateX or Y from 50 to 60deg, scale 0.15 to 1) over 700ms each, starting at 0, 200 and 400ms, with a back-out ease.
  3. 150ms pause.
  4. 2000ms linear: a 00 to 100 slot-reel counter rolls at the bottom (5rem from the bottom edge), the box outline draws itself (stroke-dashoffset 1 to 0), each corner plus starts spinning 360deg per second as the stroke passes it, and the tagline "INSPIRE · INNOVATE · IMPACT" words rise 6px and fade in at 0%, 5% and 10% progress (500ms, expo out).
  5. 200ms: counter frame fades.
  6. The logo pieces fly apart (translate 80 to 120px, rotate 50 to 60deg, scale to 1.5, fade) over 500ms, cubic in, staggered 0, 100, 200ms.
  7. 900ms, ease in-out cubic: the box grows from its centred size to full viewport while its fill darkens from rgb(210) to black. The pale backdrop fades out over the last 20%.
  8. 700ms linear: the black overlay fades to reveal the hero.
- Total: about 6.15s `[inferred: sum of the read durations]`.
- The moment it lifts, the visitor sees an empty black hero (`#0c0c0c`) with the header already in place. The hero headline begins its blur-in 1.2s later, so the first readable words appear at 7.5 to 8s after navigation `[inferred: 6.15s loader + 1.2s delay + first chars at 0.8s]`.
- What hurulab should load behind a readable first screen instead: the two webfonts and the hero copy (render immediately), then defer any canvas or video.
- The counter is also a progress count, which hurulab's page never shows.

## Performance note

| Measure | Value |
|---|---|
| Time to first byte | 257ms `[read, repeat visit]` |
| DOMContentLoaded | 385ms `[read, repeat visit]` |
| Load event | 1400ms `[read, repeat visit]` |
| First readable screen | about 7.5s, set by the loader, not the network `[inferred]` |
| Home transfer, encoded | 2,712 kB across 49 requests at 1440 `[read]` |
| Scripts | 858 kB, 25 files `[read]`; largest: three.js chunk 124 kB encoded (515 kB source), reCAPTCHA 346 kB |
| Video | 1,583 kB loaded on home before scrolling far `[read]`. Both desktop and mobile variants of each video preload, because the unused one is hidden with CSS, not removed `[read]` |
| Largest files | awards-card-video.mp4 846 kB, homepage-services-video.mp4 857 kB, awards-card-video_m.mp4 427 kB, services video mobile 442 kB, reCAPTCHA 346 kB, rushi.mp4 168 kB, thunder.mp3 137 kB, orbit images 9 x about 117 kB `[read]` |
| Fonts | 4 woff2 files, 98 kB total, all `font-display: swap`, preloaded `[read]` |
| Render blocking | 2 CSS files `[read]` |
| Audio | thunder.mp3 (137 kB) fetched on home even with sound off `[read]` |

What costs time: the loader (6s, self-imposed), reCAPTCHA on every page, duplicate video variants, three WebGL scenes (hero, orbit, footer). What is free: the type system (4 small fonts), the colour system (flat fills, no images), the layout (pure CSS grid), and nearly all the text motion (GSAP transforms and filters).

## Banned-pattern flags (do not copy)

| Pattern | Where | Detail |
|---|---|---|
| Rotating-word headline | Home hero h1 | "Designed to mean [something. / depth. / impact. / purpose. / intention.]", swaps every 3s, chars blur out in random order and the next word blurs in `[read]`. Do not copy. |
| Logo wall and logo marquee | Home key facts, "Our business partners" | A row of partner logos divided by hairlines on desktop, an auto-scrolling marquee under 1024 `[read]`. Also the awards card crossfades six award logos, and /about has a "Brands we've partnered with" showcase `[read]`. Do not copy. |
| Animated stat counters | Home key facts cards (50+, 1.5K+, 20+) and the loader 00 to 100 | Slot-reel digits roll up when 50% in view, 1.55 to 1.85s, power3.inOut, 0.1s between digits `[read]`. Do not copy. |
| Glass or frosted panels | Home services cards | `backdrop-filter: blur(12px)` over `rgb(0 0 0 / 0.2)` `[read]`. Do not copy; use a solid fill. |
| Sparkle icons | Captions across the site | The "✦" glyph prefixes "From idea to outcome.", "Design with intent. Built to work.", "The TRIONN name story", "What we do best" `[read]`. Do not copy. |
| Particle, node-graph or wireframe backgrounds | Home hero | A full-viewport WebGL "symbol" of lines with lightning bolts you trigger ("hold to blast", "Dare to touch the lines") `[read]`. Do not copy. |
| Aurora or gradient-mesh backgrounds | Footer | A WebGL fbm smoke shader that swells on hover and to audio `[read]`. Do not copy. |
| Small pill labels above headings | Not present | Section labels exist ("about", "Our process", "Key facts" captions) but are plain uppercase text beside or above the heading, never in a pill `[read]`. The label device itself is fine. |
| Typewriter, gradient text, chat bubbles, waitlist, sticky banners, ASCII hero, text scramble, magnetic buttons | Not found `[read: searched source and DOM]` | |
| Custom cursor or trail | Not found `[read: no cursor element among body children, no cursor:none rule]` | |

Also note: the site plays sound (header toggle, off by default `[read]`; hero bolt "woosh" and thunder, footer smoke reacts to an audio analyser, /about asks you to drag strips "with sound on").

---

# Tier one

## Motion

### Libraries on the page

| Library | Version | What it does here | Needed for hurulab? |
|---|---|---|---|
| Next.js (App Router, Turbopack build) | 15 or later `[inferred: Turbopack chunk format and `self.__next_f` RSC payloads]` | Routing, the page transition hook | No |
| GSAP core | 3.15.0 `[read]` | Every reveal, pin and scrub | Small script can replace most; pins need ScrollTrigger or `animation-timeline` |
| ScrollTrigger | 3.15.0 `[read]` | Pinned sections, scrubbed timelines, reveal triggers | Yes for pins, or CSS scroll-driven animations |
| SplitText | 3.15.0 `[read]` | Splits headings into lines, words, chars for staggered blur reveals | Small script (wrap words or chars in spans) |
| DrawSVGPlugin | `[read]` registered | Service card line icons drawing in | CSS `stroke-dashoffset` |
| ScrollSmoother | `[read]` registered in the orbit chunk, not the main scroller | Unused or residual | No |
| Lenis (ReactLenis) | `[read]` | Smooth scroll, run from the GSAP ticker | Optional small library |
| Three.js | `[read]` | Hero symbol, image orbit | No |
| OGL | `[read]` | Footer smoke | No |
| Swiper | `[read]` | Testimonial fade slider | Small script |
| react-intersection-observer | `[read]` | Counter trigger | No |
| Web Audio API | `[read]` | Site sounds | No |
| Google reCAPTCHA v3, GA4 | `[read]` | Forms, analytics | No |

### Motion tokens (see tokens file for the full list)

| Token | Value | Role |
|---|---|---|
| Reveal duration | 800ms `[read]` | Every text piece and fade-up block |
| Reveal container duration | 500ms `[read]` | The element holding split text unblurs first |
| Reveal ease | power2.out `[read]`, cubic-bezier(0.25, 0.46, 0.45, 0.94) `[inferred]` | All reveals |
| Reveal start state | opacity 0, `filter: blur(12px)` for text; opacity 0, translateY(20px) for blocks `[read]` | |
| Reveal trigger | element top reaches 90% of viewport height (`start: "top 90%"`) `[read]` | |
| Char stagger | 50ms, random order `[read]`; hero 80ms | |
| Word stagger | 50ms, random order `[read]` | |
| Hero delay | 1200ms after the ready signal `[read]` | |
| Pinned scrub smoothing | 0.6s `[read]` | Vision, orbit, process pins |
| Card flip scrub smoothing | 2s `[read]` | Key facts |
| Page transition | 10 belts, 500ms in, 38ms stagger, 420ms out `[read]` | |
| Smooth scroll | Lenis, 1.05s, ease out cubic `[read]` | |

### Principles

Movement here is about focus, not travel. Text never slides in from far away: it arrives in place, out of a 12px blur, piece by piece in random order, so a heading resolves like a photo coming into focus. Blocks move 20px at most. Large movement is reserved for scroll-driven set pieces, where the page stops (pins) and the scroll wheel becomes a scrubber: stripes wipe the screen in the colour of the next section, cards rise 550px as they cross, a track moves sideways. Each pinned set piece ends by handing over to the next section with a full-screen wipe, so sections never simply butt together. Hover motion is small, fast and typographic (letters shift, underlines redraw), never bouncy.

### Load choreography (after the loader)

All hero elements wait for the loader's "transition ready" flag, then `[read]`:

| Order | Element | Delay | Duration | From | Stagger |
|---|---|---|---|---|---|
| 0 | Header | 0 | none, already visible under the loader `[read: no entrance tween on the header]` | | |
| 1 | h1 line 1 "Designed to" | 1.2s | 0.5s container + 0.8s per char | opacity 0, blur 12px | 80ms, random |
| 1 | h1 line 2 prefix "mean" + rotating word | 1.2s | same | same | 80ms, random |
| 1 | CTA pair wrapper | 1.2s | 0.8s | opacity 0, blur 12px, and y 20px | none |
| 1 | Scroll cue (bottom left) | 1.2s | 0.8s | opacity 0 | none |
| 1 | Stats words (bottom centre) | 1.2s | 0.8s | blur 12px | 50ms per word, random |
| 1 | Info box (bottom right) | 1.2s | 0.8s | y 20px, opacity 0 | none |
| 2 | Sub paragraph (bottom right) | 1.5s | 0.8s | y 20px, opacity 0 | none |

The bottom-centre stats fade out in 0.3s once the hero reaches the viewport centre (`start: "top center"`) and return on scroll back `[read]`.

### Scroll reveals

| Reveal | Mechanism | Start | End | Once | Hidden state | Travel |
|---|---|---|---|---|---|---|
| Blur text reveal (all headings, labels) | ScrollTrigger timeline | top 90% | bottom 10% | Plays once forward; `once` true on some; toggleActions default (play none none none) `[read]` | opacity 0, blur 12px | 0 |
| Fade in block | IntersectionObserver, threshold 0, rootMargin `0px 0px -10% 0px` `[read]` | element enters bottom 90% | | Yes | opacity 0, y 20px | 20px |
| Scrubbed colour fill (about statement h2) | ScrollTrigger scrub true, chars colour from `rgb(216 216 216 / 0.1)` to `#d8d8d8`, stagger 0.03 `[read]` | top 80% | last char reaches centre | No, scrubs both ways | 10% opacity text | 0 |
| Divider line with plus | ScrollTrigger scrub true: line width 0 to 100%, plus rotates 360deg `[read]` | top bottom | top center | No | width 0 | full row |
| Key fact cards | Scrub 2, rotateX -92deg to 0, origin centre top, perspective 1400px, stagger 0.6 of 2.65 per card `[read]` | section top at centre | section top at top | No | folded flat away from viewer | 92deg |
| Work card rise | Driven by the pinned progress; card y = 550px while its centre is beyond 1.2 viewport widths, eases to 0 between 1.2 and 0.5 (cubic) `[read]` | | | No | y 550px | 550px |
| Work card rules | scaleY 0 to 1 from top, 1.2s power2.out, delay 0.1s x card index, fired once when the card centre passes 1.0 `[read]` | | | Yes | scaleY 0 | line length |

### Split text detail

- Headings and labels: SplitText into `lines, words, chars` with `smartWrap` `[read]`. Animated unit is chars for headings and words for labels and captions `[read]`.
- No overflow masks. Pieces do not slide up out of a mask; they unblur in place `[read]`.
- Order is random (`stagger.from: "random"`) `[read]`.
- Nav links: each char is a span; a clone layer sits on top `[read]`.

### Smooth scroll

Lenis, root, driven by the GSAP ticker (autoRaf false). Duration 1.05s, easing `1 - (1 - t)^3`, wheel multiplier 0.85 (0.6 on Mac), touch multiplier 1.1 (1.2 on touch devices), `syncTouch: true` so touch is smoothed too, lerp 0.105 set but overridden by duration `[read]`. GSAP ticker: `lagSmoothing(0)`, fps capped at 60 `[read]`. Lenis is stopped until the loader finishes `[read]`.

### Pinned and scrubbed sections (home)

| Section | Pinned element | Scroll consumed | What moves | Mapping |
|---|---|---|---|---|
| Hero canvas | The WebGL canvas wrapper | 400% (300% touch), `pinSpacing: false` so content scrolls over it `[read]` | The banner, about and vision copy scroll up over a fixed canvas | Canvas suspends at 80% progress `[read]` |
| Vision (marquee + wipe) | Whole section | 200% (150% touch) `[read]` | A text marquee runs at speed 0.8 and pauses past 50%. Five horizontal stripes in `#d2d2d2` grow from the bottom (scaleY 0 to 1) `[read]` | Timeline: stripe n starts at 0.3 x (4 - n) / 4, lasts 0.3, so the bottom stripe starts first and the top stripe last; wipe fills 0 to 0.6 of the pin, then 0.1 hold `[read]`. The next section is pulled up by the vision section's height, so the finished wipe is exactly the top colour of key facts and the handoff is seamless `[read]` |
| Work + services | Whole 100vh stage | 1350% desktop, 1060% under 768 `[read: 200 + 150 + 800 + 200]` | 0 to 200: project track moves left by its overflow (four 50vw cards). 200 to 350: the work layer slides left by one viewport width, uncovering the services layer, which is faded in once progress passes 15%. 350 to 1150: services sequence (six cards fly into two columns flanking four stacked giant words). Last 200: five white stripes wipe up `[read]` | Linear to scroll (no scrub lag) `[read]` |
| Orbit | Whole 100vh section | 650% (450% under 768) `[read]` | Nine images orbit in Three.js; two giant words slide in opposite directions across the full width (x to +100vw and -100vw), scrub 0.6 `[read]` | The footer is pulled up by 100dvh underneath, so the footer is uncovered at the end `[read]` |

Mobile key facts become a pinned horizontal scroller: pin for the section height, scrub 2, the card row moves left until the last card is centred (plus 4% of viewport width), and each card fades in (0.15 of the timeline) at its evenly spaced point `[read]`.

### Page transition

Clicking any internal link runs this before and after the route change `[read]`:

1. Ten full-width horizontal belts (`#c8c8c8`) appear at `scaleY(0.008)` and grow to `scaleY(1.1)` (slight overshoot) over 500ms each, ease out cubic, starting 38ms apart from top to bottom. Total cover about 842ms.
2. At the same time the destination page name (for example "About") rises from +100px to centre and fades in over 840ms, ease out cubic, in the uppercase label style; four plus marks fly from 40px inside each screen corner to the corners of a centred frame, spinning 720deg to 0 over 840ms.
3. Route swaps under full cover.
4. Belts close in reverse order (bottom first), `scaleY(1 - t³ x 1.092)` over 420ms each, 38ms apart. The label exits upward to -100px while fading over 760ms, cubic in. The plus marks return to the screen corners and fade over the last 40% of 760ms.
5. 50ms later the new page gets its ready flag and its hero reveals start.
- What stays: the header (z 99 sits under the belts at 9200, so it is covered too). Nothing persists visually except the fixed header returning.

### Resize behaviour

Type, spacing and radii all follow the fluid root, so resizing scales the whole page smoothly with no snaps between the root steps except the jumps at 440, 640, 768, 1024, 1280, 1441, 1536 where the divisor changes `[read]`. Layout snaps at 768 (stacked to columns, mobile sheet to panel menu) and 1024 (4-column splits, hero stats appear) `[read]`. All pinned triggers refresh on resize via ResizeObserver `[read]`. The desktop menu closes on resize `[read]`.

### Reduced motion

No `prefers-reduced-motion` block exists in the CSS `[read]`. Only the hero WebGL scripts read the media query `[read]`. Every GSAP reveal, pin and scrub runs regardless. hurulab should do better here.

## Layout and spacing

### Base unit and scale

Tailwind v4 with a 0.25rem unit (`--spacing: .25rem`) on a fluid root, so spacing is proportional to viewport width `[read]`.

Distinct spacing values collected from the home and inner pages, sorted (rem, px at 1440) `[read]`:
0.25 (3.6), 0.375 (5.4), 0.5 (7.2), 1 (14.4), 1.5 (21.6), 2 (28.8), 2.5 (36), 3.5 (50.4), 4 (57.6), 5 (72), 6.25 (90), 7.5 (108), 9.375 (135), 10 (144), 12.5 (180).

Proposed scale: 0.5, 1, 1.5, 2.5, 5, 6.25, 9.375 rem. Ratios between steps: 2, 1.5, 1.67, 2, 1.25, 1.5. Left out as one-offs: 0.375 and 0.25 (pill padding only), 3.5 (hero bottom padding only), 4 (single mt), 7.5 (hero top only), 10 and 12.5 (one section each).

### Grid

| Property | Value |
|---|---|
| Columns | 12 `[read]` |
| Gutter | 1.5rem, 21.6px `[read]` |
| Page margin | 2.5rem (36px) at 768+, 1.5rem below (18.3px at 390) `[read]` |
| Container max width | none. The grid runs edge to edge minus the margin at every width `[read]` |
| Column width at 1440 | (1368 - 11 x 21.6) / 12 = 94.2px `[inferred: arithmetic on read values]` |
| Common text offsets | Headings start at column 2 (left inset 152px, one column plus gutter), leaving column 1 for a small label `[read]` |
| Common splits | 5 + 5 from column 2 (testimonials), 4 + 4 + 4 (hero bottom row), 3 at column 2 and 3 at column 9 (about sub row), 9 starting column 3 split into three 4s (process steps) `[read]` |

### Breakpoints

| Width | What reflows `[read]` |
|---|---|
| < 440 | Root divisor 320. Everything stacks to 12 columns. |
| 640 | Root divisor 480. Some 6 + 6 splits appear. |
| 768 | Root divisor 750. Two-column layouts, desktop panel menu replaces mobile sheet, key facts leave the horizontal pinned scroller, work track goes horizontal. |
| 1024 | Root divisor 850. 4-column splits, hero stats and box appear, partner logos become a static row. |
| 1280 | Root divisor 1000. h3 grows to 2.25rem. |
| 1441 / 1536 | Root divisor 1180 / 1280 (type grows more slowly past 1440). |
| 2000 | Body, label and small text step down one size. |

### Section rhythm (home, 1440x900)

| # | Section | Height | Separation | Background |
|---|---|---|---|---|
| 1 | Hero banner | 100vh (900) `[read]` | none, continuous with 2 | `#0c0c0c` with fixed canvas |
| 2 | About statement | 100vh (900) `[read]` | none | same, canvas behind |
| 3 | Vision marquee | 100vh + 200vh pin `[read]` | Stripe wipe into 4 | transparent over canvas |
| 4 | Key facts | 1090 (1.21vh) `[read]` | Line with plus at the bottom edge, half overlapping the next section | Grey to white gradient |
| 5 | Work + services | 100vh + 1350vh pin `[read]` | White stripe wipe at end | White, then dark video |
| 6 | Testimonials | 983 (1.09vh) `[read]` | Line with plus below | White to grey gradient |
| 7 | Orbit | 100vh + 650vh pin `[read]` | Footer rises from under it | `#c3c3c3` |
| 8 | Footer | 100dvh minimum `[read]` | | `#040508` |

Total home scroll at 1440x900 is about 27,000px, 30 viewports `[inferred: section heights plus pin distances]`. At 752x742 the live document measured 18,650px `[read]`.

Whitespace is generous everywhere a statement sits (the about h2 has a full viewport to itself; section padding is 135px top and bottom). It is tight inside components (cards 36px padding, 21.6px gaps). The rhythm is broken on purpose three times: the long pins (work + services, orbit) freeze the page for many viewports, and the vision pin turns the whole screen into a stripe wipe.

### Text and image arrangement

Text sits on the 12-column grid, left aligned, and runs wide (headings span 8 to 11 columns). Small labels hang in column 1 beside a heading that starts in column 2. Short paragraphs are narrow (234 to 326px) and parked at the right or bottom of a section, often justified in the hero. Centered text is kept for section intros (key facts, services, orbit captions). Images live inside cards or canvases; there are no free-floating photos in the page flow. Overlaps come from pinning (copy scrolls over a fixed canvas; one section is pulled up underneath another), not from offset image collages.

## The argument (home page order)

1. Hero: "Designed to mean something." States intent and gives two ways to act (discuss a project, book a 30-minute call) before any proof.
2. About statement: one long sentence of who they are, filled in by scrolling, so the reader's scroll is the reading pace.
3. Vision: a slogan and a marquee of three verbs; a breath, then the stripe wipe clears the stage.
4. Key facts: three cards of proof (recognition, volume, team) plus partners.
5. Work: four recent projects slide past, then the same stage becomes services: what they do, as six cards flanking four giant words.
6. Testimonials: named clients vouch, one at a time.
7. Orbit: a playful gallery of explorations, the lightest moment, ending with a link out.
8. Footer: full-screen close with contact details and a final call.

The page moves claim, identity, pause, proof, work and offer, social proof, personality, contact. The call to action appears at the very top and again at the very end; the middle earns it.

## Section by section (home)

Each section lists: purpose, DOM skeleton, boxes at 1440 and 390, content shape, motion, the hurulab part it could carry, take and leave.

### 1. Header (navigation)

- Purpose: brand, sound toggle, primary contact action, menu.
- Skeleton:
  - header (fixed, `mix-blend-mode: difference`)
    - div container
      - a (logo image)
      - div (right cluster)
        - button (sound toggle, circle)
        - button (let's talk, white pill)
        - div (Menu pill: span label, span icon with two 1px lines) at 768+
        - div (mobile toggle with a 4-path svg) under 768
- Boxes at 1440: header 1440x102; padding 36px top and bottom; logo 108x29 at x36 y37; sound toggle 29x29 circle; let's talk pill 30 high; Menu pill 89x30 at x1315 `[read]`. Cluster gap 7.2px `[read]`.
- Boxes at 390: header padding 1.5rem (18.3px) `[inferred: py-6 class]`; logo 91x24 at x18; let's talk pill 103x30 at x225; mobile toggle 39x26 at x333 `[read]`.
- Pill anatomy: padding 5.4 / 14.4 / 7.2px (top, sides, bottom), label 15.3px uppercase, so padding-x to font-size is 0.94 and height to font-size is 1.96 `[read]`.
- Behaviour: always visible, never hides on scroll `[read: no hide logic]`. It inverts over light sections through `mix-blend-mode: difference`, which is how one white nav reads on both black and white sections `[read]`.
- Carries: navigation. Take: the difference blend (works with any light and dark pairing), the right-aligned pill cluster, the two-line icon. Leave: the sound toggle.

### 2. Hero

- Purpose: headline claim, two actions, three support notes.
- Skeleton:
  - section (min-h 100dvh, padding-top 7.5rem, padding-bottom 3.5rem)
    - div container (flex column, space-between)
      - div top block
        - div 12-col grid, headline in cols 1 to 8
          - h1 "Designed to"
          - h1 "mean" + rotating word
        - div CTA row (two text buttons, gap 1.5rem)
      - div bottom block, 12-col grid, gap 2.5rem
        - div cols 1 to 4: scroll cue (18px circle with an arrow)
        - div cols 5 to 8 (1024+): two short stat lines, centred
        - div cols 9 to 12: info box (two cells split by a hairline, 72px tall, radius 3.6px) above a justified paragraph (max 234px)
- Boxes at 1440: section 1440x900; h1 lines 390x81 and 573x81 at x31 y108 and y189 (a -5px optical left shift, `-ml-1.5`); CTA 227x36 at y326; stats block 432x151 at x504 y699; info box 234x72 at x1170 y719; paragraph 234x57 at x1170 y813 `[read]`.
- Boxes at 390: h1 lines 198x43 and 291x43 at x15; CTA 192x30 at y212; stats hidden; info box 198x61 at x174 y686; paragraph 198x56 at y766 `[read]`.
- Content shape: headline 5 words over two lines; two buttons of 3 and 5 words; stats 2 lines of 3 and 5 words; box: one icon + 2 words, one 5-word line; paragraph 13 words `[read]`.
- Motion: see load choreography. The canvas behind is pinned for 400%.
- Carries: hero. Take: the headline pinned top-left with actions under it, the three-part bottom row that fills the rest of the first screen, text in `mix-blend-mode: difference`. Leave: rotating word, WebGL symbol, "hold to blast".

### 3. About statement

- Purpose: one sentence of identity, read at scroll speed.
- Skeleton:
  - section (min-h 100dvh, padding-top 9.375rem, flex column centred)
    - div container
      - div 12-col: span label col 1; h2 cols 2 to 12, first line indented by one column (an empty `w-1/12` span)
      - div line with plus (margin 5.5rem above and below)
      - div 12-col: caption cols 2 to 4; paragraph + button cols 9 to 11
- Boxes at 1440: h2 1252x324 at x152 (4 lines of 81px); label 94x15 at x36; paragraph 326x57 at x962 `[read]`.
- Boxes at 390: h2 353x134; paragraph 261x74 at x111 `[read]`.
- Content shape: h2 19 words; caption 11 words; paragraph 21 words; one button `[read]`.
- Motion: h2 chars scrub from 10% to full opacity as you scroll (top 80% to last char at centre). Label and caption blur in by word. Paragraph fades up 20px with 0.3s delay.
- Carries: the problem (three beliefs about AI could be three consecutive statements in this format), or the ending. Take: the first-line indent, the scroll-filled statement, the label in column 1. Leave: nothing structural.

### 4. Vision marquee and stripe wipe

- Purpose: pause, slogan, then clear the screen.
- Skeleton:
  - section (100dvh, pinned)
    - div (z 20, flex column space-between, padding 9.375rem block)
      - div container: span two-line slogan cols 2 to 12
      - div marquee (uppercase words separated by 40px plus icons)
      - div container: span centred caption
    - div stripes (absolute, 5 flex rows, z 30)
- Boxes at 1440: marquee type 132px, lh 132px, letter-spacing -10.6px `[read]`. At 390: 61px `[read]`.
- Content shape: slogan 4 words over two lines; marquee 3 words; caption 4 words.
- Motion: pinned 200%; stripes as described; marquee pauses halfway.
- Carries: a divider between the problem and what we do, or the ending. Take: the stripe wipe in the next section's colour. Leave: the marquee (it reads as decoration).

### 5. Key facts

- Purpose: proof in three cards, then partners.
- Skeleton:
  - section (padding 6.25rem top, 10rem bottom, gradient)
    - div container
      - div title block (centred): h2, p
      - div card row (flex, gap 1.5rem, perspective 1400)
        - div card x3 (label top, number or media middle, caption bottom)
      - div partners block
    - div line with plus, centred on the section's bottom edge (translateY 50%)
- Boxes at 1440: h2 276x81 centred; intro 157x38; cards 356x439 each, radius 7.2px, padding 36px; row 1368x439 starting y303 `[read]`. Card proportion 0.81 (w/h) `[read]`.
- Boxes at 390: cards 302x335 (85vw, max 50svh), horizontal pinned scroller `[read]`.
- Content shape: h2 2 words; intro 7 words; each card: 2-to-3-word label, a number, a 6-to-9-word caption `[read]`.
- Motion: cards unfold from rotateX -92deg to 0 as the section rises from centre to top, 0.6 apart, scrub 2.
- Carries: what it costs (three price tiers as three cards), or the discovery phase (three outcomes). Take: three equal cards unfolding on scroll, one dark, one cream, one mid. Leave: counters, awards logos, partners row.

### 6. Work, then services (one pinned stage)

- Purpose: show recent work, then turn the same stage into the service offer.
- Skeleton:
  - div stage (100dvh, pinned 1350%)
    - div work layer (z 2)
      - div track (flex row): intro block (label with letter-spaced "VIEW ALL PROJECTS", 12-word paragraph), then 4 project cards, each 50vw x 100vh with an image 576x395 (ratio 1.46) and vertical rules
    - div services layer (z 1, margin-top -100vh)
      - video background
      - div card field: 3 cards left, 3 cards right (absolute, each 407x328, inner 364x284, padding 36px, radius 7.2px)
        - card: h3 title (max 180px) + 90px line icon top row; 13-to-17-word description
      - div container (padding 7.5rem top, 5rem bottom): centred label; four stacked 132px words; bottom row of caption (swaps between two) and button
      - div 5 white stripes
- Content shape: 4 projects; 6 services with 2-to-4-word titles and 13-to-17-word descriptions; 4 giant words `[read]`.
- Motion: track slides left; each card rises 550px into place and its rules draw; the work layer slides off left to uncover services; service cards fly into two columns flanking the words; stripes wipe up white.
- Carries: what we do (nine services is more than six; either 3 x 3 cards or two passes of the card field), the worked example (the horizontal track as the espresso bar story in four frames). Take: one pinned stage that changes role; the 50vw card track; cards rising as they cross. Leave: frosted cards, background video.

### 7. Testimonials

- Purpose: named client quotes.
- Skeleton:
  - section (min-h 100dvh, padding 9.375rem block)
    - div container
      - div 12-col: h2 cols 2 to 6; intro p cols 7 to 11 aligned to bottom
      - div line with plus (margin 5rem)
      - div 12-col (gap 1.5rem)
        - div cols 2 to 6: list of 5 company buttons (label style, 15px tall, 15px apart, active one shows an icon); prev and next square buttons 72x72 at the bottom
        - div cols 7 to 11: fade slider 557x338 (quote, name, role and country), then a text button 90px below
- Boxes at 1440: h2 557x81 at x152; slider 557x338 at x731 `[read]`. At 390: h2 353x27; company list hidden `[read]`.
- Content shape: h2 2 words (on /about "Client stories"); intro 8 words; 5 quotes of 30 to 50 words each `[read]`.
- Motion: Swiper fade effect; speed 300ms `[inferred: Swiper default, no override found]`; company label opacity and icon fade 500ms `[read]`.
- Carries: the worked example (espresso bar before and after as selectable tabs on the left, the story on the right), or how we work. Take: left index list plus right content panel, square arrow buttons, 5 + 5 columns. Leave: nothing.

### 8. Orbit gallery

- Purpose: personality and a link out.
- Skeleton:
  - div section (100dvh, pinned 650%, `#c3c3c3`)
    - canvas (Three.js orbit of 9 images)
    - div container: centred title stack (top word, 2-line caption, bottom word), bottom row (paragraph left, button right)
    - div 5 stripes
- Motion: top word travels to +100vw and bottom word to -100vw, scrub 0.6; footer revealed underneath.
- Carries: none directly; the giant opposing words could close the ending. Take: two words passing each other. Leave: the orbit.

### 9. Footer

- Purpose: final contact.
- Skeleton: footer (min-h 100dvh, `#040508`), WebGL layer, container (padding 9.375rem top, 5rem bottom) with a 12-col grid, gap 2.5rem; a live local time "IST → hh:mm" in the label style `[read]`.
- Carries: Contact Us. Take: a full-height closing screen that the previous section lifts off. Leave: the smoke shader.

## Inner pages (structure only)

| Page | Sections in order `[read]` |
|---|---|
| /about | Hero with canvas ("We are an independent digital studio…", "Drag the strips with sound on"); statement with info box; values (6 items, paper-fold section, 1183px); how we work (3 steps, pinned); founder (1585px); team (4742px, "drag a member to identify" scanner); who we're not for; awards (pinned 6300px); brand showcase; testimonials with 5 company tabs; closing gallery "Work hard. Play loud." |
| /services | Orbit hero "Area of expertise" (2700px, canvas); capability blocks per service (1095px); technology stack (1558px); how we work (light theme) |
| /work | One 25,619px dark list of projects with h2 titles, two canvases |
| /contact | Banner "Let's start something." (100vh, 2 videos); form section (1134px, dark, 10rem fade at top); location, join us, questions accordion (1422px) |
| /trionn-story | 9,180px black story page with 2 canvases |

### How we work (from /about and /services), the most transferable inner component

- Skeleton:
  - section (dark or light theme)
    - div (padding 9.375rem block at 1024+, h 100dvh under 1024)
      - div container, 12-col
        - label cols 1 to 2 ("Our process"); h2 + 7-word p cols 3 to 12
        - div cols 3 to 11: 3 steps, each 4 columns (340x261 at 1440, at x268, x608, x948)
          - span "Step - n" (label, 50% opacity, 36px below)
          - h3 title (32.4px, 28.8px below)
          - p 17 to 21 words (60% opacity)
          - div rule along the bottom with a start plus and a travelling plus
- Motion: scrubbed from section top at 25% of viewport to top at -25%. Each step starts 0.5 later: the travelling plus spins 720deg while riding to the end of the rule as the rule draws (scaleX 0 to 1, 0.4), then step number, title and text rise 20px and fade in at 0, +0.1, +0.15. Then pinned 300% with a five-stripe wipe that lifts the footer into place `[read]`.
- Carries: how we work. hurulab has seven steps, so use 7 cells (two rows, or a 4 + 3 split) with the same travelling-plus rule.

### FAQ accordion (contact)

- Rows: padding 2rem block (28.8px); question in h3 style 32.4px; answer in body style, max 33rem, 1rem above; rule with plus between rows; first row open by default `[read]`.
- Open: height 0 to measured, opacity 0 to 1, 600ms power3.inOut; close 500ms; opening one closes the other; chevron rotates 180deg over 300ms after a 200ms delay `[read]`.
- Carries: what it costs (pricing questions), or the discovery phase.

### Contact form

- Fields: 479x50 at 1440 (two per row), padding 1rem, radius 0.5rem, fill `#131415` at rest, fill `#d2d2d2` with dark text on focus or when filled, no outline `[read]`. Textarea full width 979x107. Two custom dropdowns (service, budget) whose options are 39px rows with 10.8 / 14.4px padding `[read]`. Submit is the same text button (227x36).
- Validation: on submit only; invalid fields get a red border (`#d9432b`), a message, and a shake (translateX -7, 7, -4, 4, 0) `[read]`. While sending the button reads "Sending..." at 60% opacity `[read]`. Success shows a pulsing ring (`successPulse`: scale 0.75 to 1.08, opacity 0 to 1 to 0) `[read]`.
- hurulab's Contact Us opens an email, so only the button style carries over.

## Interaction and components

### Text button (WordShiftButton), the site's primary control

| Property | Value `[read]` |
|---|---|
| Size | 200px wide default (227px in hero via min-width), min height 40px (36px measured) |
| Anatomy | uppercase mono label left, arrow icon right (10x9 glyph in a 2.5rem box), 1px underline full width. No fill, no border box |
| Label | 12.6px mono, letter-spacing -0.06em |
| Padding to font ratio | 0 horizontal padding; height to font size 2.86 |
| Hover in | Label chars slide right, as a group, until the last char meets the arrow's position; each char delayed 30ms (last char first), duration 300ms + 30ms per char, ease. The right arrow exits 28px right and fades over 200ms. The left arrow slides in from -120% after the chars (320ms). The underline collapses to the right over 1000ms while a new underline draws from the left over 500ms after the char delay |
| Hover out | The mirror: chars return, arrows swap back, underlines swap sides |
| Touch | touchstart plays the hover-in; a touch elsewhere plays hover-out |
| Focus | No custom focus style; browser default outline `[read: no :focus-visible rule for .btn]` |
| Press | No pressed state `[read]` |
| Wrapper hover | opacity to 0.95 over 300ms |

CSS alone can do most of this with per-char spans and `transition-delay`; the char offset needs a small script to measure.

### Nav link (HoverBlur)

On mouseenter of the closest `.group`: original chars move 10px (even chars up, odd chars down), fade and blur to 5px over 300ms, 25ms apart, power2.in. A clone layer fades its chars in over 400ms, 40ms apart, power2.out, starting 20ms before the exits end. Resets on complete `[read]`. Small script.

### Pills (header)

White fill pill: black label, hover to white at 80% over 300ms. Outline pill: 1px white border, hover to 60% border. Radius full, padding 5.4 / 14.4 / 7.2px `[read]`.

### Menu

- Desktop panel: right-aligned card inside a 1rem inset, max width 27.5rem (396px), full height, white fill, 1px cream border, radius 0.5rem, padding 5rem top, 2.5rem bottom, 2rem sides `[read]`. Holds 5 links in h3 size (32.4px) with a right arrow, a story pill link, "Business enquiry" (label + contacts), "Social" (2-column list).
- Open: panel clip-path from `circle(0% at 95% 5%)` to `circle(150% at 0% 5%)`, scale 0.9 to 1, rotate 2deg to 0, 1.2s expo.inOut; links rise 20px, 0.8s, 100ms apart, from 0.6s; meta items rise 20px, 0.5s, 80ms apart, from 0.6s after that `[read]`.
- Close: the same timeline reversed at 1.75x speed. Closes on scroll of more than 50px, click outside, resize, or page transition `[read]`.
- Link hover: siblings dim to 40% opacity over 450ms power3.out; the hovered row's arrow slides 8px right and fades in, 300ms, after a 300ms delay `[read]`.
- Menu pill icon: two 12px lines 4px apart swap places on hover; open turns them into an X (rotate 45 and -45deg, 500ms) `[read]`.
- Mobile: full-screen black sheet slides in from the right (x 100% to 0, 0.8s expo.inOut); the two-line svg icon undraws in 0.3s and an X draws in; links rise 20px, 100ms apart, from 0.4s; a centre rule grows 0 to 100% over 0.8s expo.out; body scroll locks `[read]`.

### Cards

Key fact card: 356x439, radius 0.5rem, padding 2.5rem, label top, content centre, caption bottom, three fills (ink, cream, mid grey) `[read]`. Service card: 364x284 inner, radius 0.5rem, padding 2.5rem, title and 90px line icon in a top row, description 2.5rem below `[read]`. Project card: 50vw x 100vh cell, image ratio 1.46, vertical rules drawing down `[read]`.

### Info box

Two cells side by side, 1px hairline border and divider, radius 3.6px, min height 72px; left cell 104px min width with a small icon over 2 words; right cell a 2-line uppercase note at 14.4px / 14.4px `[read]`.

### Line with plus (divider)

A 1px rule that draws from 0 to full width as it scrolls from viewport bottom to centre, with a 12px plus that rotates 360deg over the same scroll and sits at a chosen column `[read]`. Used between every block. Small script or CSS scroll-driven animation.

### Slider arrows

Two 72x72 squares side by side sharing a 1px border (the second overlaps by 1px); each holds a 13x5 arrow that swaps with a duplicate on hover `[inferred: two arrow-icon layers per button]`.

### Tabs (testimonial company list)

Uppercase label buttons stacked 15px apart; active one shows a 9px icon (opacity 0 to 1, 500ms) `[read]`.

### Accordion

See FAQ above.

### Forms and dropdowns

See contact form above.

### Tooltips, modals, tables

A contact popup opens from "let's talk" `[read: useContactPopup]`; its layout was not measured. No tooltips or tables found `[read]`.

### Focus ring

No custom focus ring anywhere except form fields, which swap fill on focus and remove the outline `[read]`. Keyboard focus relies on the browser default. Text selection is invisible (`::selection` transparent) `[read]`.

## Color (context only)

### Neutral ramp, dark to light `[read]`

| Step | Hex | Lightness vs neighbour below |
|---|---|---|
| 1 | #040508 | base, near black with a blue cast |
| 2 | #0c0c0c | +8 |
| 3 | #131415 | +7 |
| 4 | #272727 | +20 |
| 5 | #2f3135 | +8 (slightly cool) |
| 6 | #2f323b | +0 value, bluer (hairline on dark) |
| 7 | #434343 | +20 |
| 8 | #777777 | +52 |
| 9 | #9c9c9c | +37 |
| 10 | #c3c3c3 | +39 |
| 11 | #c8c8c8 | +5 |
| 12 | #d2d2d2 | +10 |
| 13 | #d8d8d8 | +6 |
| 14 | #e6e4e2 | +14, warm cream |
| 15 | #e8e8e8 | +2 |
| 16 | #f7f7f7 | +15 |
| 17 | #ffffff | +8 |

Accent ramp: none. The site has no brand hue on the page; contrast between black and pale grey does the work `[read]`. Semantic: error `#d9432b`, a lighter coral `#ff6b50` `[read]`. The loader border and hero bolts are the only other tints.

### Roles

| Role | Value `[read]` |
|---|---|
| Page background, dark | #040508 |
| Hero background | #0c0c0c |
| Page background, light | #ffffff, with #d2d2d2 and #c3c3c3 gradients |
| Raised surface, dark | #272727, #2f3135 |
| Raised surface, light | #e6e4e2 |
| Sunken surface | #131415 (fields) |
| Text primary on dark | #d8d8d8 |
| Text primary on light | #434343 |
| Text secondary | same colour at 60% |
| Text muted | same colour at 50%, or #9c9c9c |
| Hairline on dark | #2f323b |
| Hairline on light | #434343 at 15% |
| Border (pills) | #ffffff |
| Accent, accent hover, pressed | none |
| Focus | field fill to #d2d2d2 |
| Selection | transparent |
| Wipe colour | the next section's top colour (#d2d2d2 or #ffffff) |

### Gradients `[read]`

- Key facts: `linear-gradient(0deg, #ffffff 0%, #d2d2d2 100%)` (grey at top).
- Testimonials: top #ffffff to bottom #c3c3c3.
- Mobile work: `linear-gradient(0deg, #d2d2d2 0%, #ffffff 100%)`.
- Contact form top fade: #040508 to transparent over 10rem.
- Hero vignette in the about scanner: `radial-gradient(transparent 55%, rgb(0 0 0 / 0.65) 100%)`.

### Contrast `[inferred: WCAG formula on read values]`

| Text on fill | Ratio |
|---|---|
| #d8d8d8 on #040508 | 14.3 |
| #d8d8d8 on #0c0c0c | 13.7 |
| #434343 on #ffffff | 9.9 |
| #434343 on #d2d2d2 | 6.5 |
| #434343 on #e6e4e2 | 7.8 |
| #d8d8d8 at 50% on #040508 | 3.8 (fails AA for body) |
| #000000 on #ffffff pill | 21 |

## Typography (context only)

### Families `[read]`

| Role | Family that renders | Source | Weight, style |
|---|---|---|---|
| Display: headings, labels, numbers, menu | Familjen Grotesk Variable | `FamiljenGroteskVariable_Regular` woff2, 23 kB | 400 |
| Body: paragraphs | Neue Haas Display Roman | `NeueHaasDisplay_Roman` woff2, 25 kB | 400 |
| Buttons | Martian Mono Light | `MartianMono_Light` woff2, 20 kB | 400 as declared |
| Big serif numbers (inner pages) | PP Editorial New Ultralight | woff2, 30 kB | 400 as declared |
| Declared but not loaded | Bebas Neue, Space Mono (loader variables) | none, fall back | |

All `font-display: swap`, with Arial-based fallbacks. Weight 500 appears once (social list) `[read]`.

### Scale, raw values at 1440 `[read]`

12.6, 14.4, 15.3, 16.2, 18, 27, 32.4, 50.4, 85.5, 86.4, 90, 132 px.

Proposed scale (step, px at 1440, ratio to the step below):

| Step | Role | px | rem | Ratio | Line height | Letter spacing | Case |
|---|---|---|---|---|---|---|---|
| 1 | Button | 12.6 | 0.875 | | normal | -0.06em | upper |
| 2 | Label (title) | 15.3 | 1.063 | 1.21 | 1 | -0.02em | upper |
| 3 | Body | 16.2 | 1.125 | 1.06 | normal (18px at 390, 1.56 at 1440) | 0 | sentence |
| 4 | h3 | 32.4 | 2.25 | 2.0 | 1 | -0.04em | sentence |
| 5 | Number | 50.4 | 3.5 | 1.56 | 45px (0.89) | -0.06em | |
| 6 | h2 | 85.5 | clamp(2.5rem, 6.283vw, 5.938rem) | 1.70 | 81px (0.95) | -0.06em | sentence |
| 7 | h1 | 90 | clamp(3.75rem, 6.614vw, 6.25rem) | 1.05 | 81px (0.9) | -0.06em | sentence |
| 8 | Marquee | 132 | clamp(5rem, 9.164vw, 10rem) | 1.47 | 0.672 to 1 | -0.08em | upper |

Left out as one-offs: 14.4 (inherited base), 18 (menu at 768+), 27 (one caption), 86.4 (h2.big, once), 8.1 (reCAPTCHA).

Fluid values at 1440, 1024, 390 `[read]`:

| Style | Expression | 1440 | 1024 | 390 |
|---|---|---|---|---|
| h1 | clamp(3.75rem, 6.614vw, 6.25rem) | 90 (max) | 67.7 (vw) | 45.7 (min) |
| h1 line height | clamp(3.5rem, 5.952vw, 5.625rem) | 81 | 60.9 | 42.7 |
| h2 | clamp(2.5rem, 6.283vw, 5.938rem) | 85.5 (max) | 64.3 (vw) | 30.5 (min) |
| h2 line height | clamp(2.2rem, 5.952vw, 5.625rem) | 81 | 60.9 | 26.8 |
| Marquee | clamp(5rem, 9.164vw, 10rem) | 132 (vw) | 93.8 (vw) | 60.9 (min) |

Because rem itself scales with the viewport, the clamps work between two fluid bounds. The vw term wins only between about 1000 and 1440 for h1 and h2 `[inferred: arithmetic on the expressions]`.

Weights: one weight everywhere (400). Hierarchy comes from size, tight negative tracking on display type, and uppercase labels, not from bold `[read]`.

Measure: hero paragraph 234px, about paragraph 326px, card copy up to 317px, accordion answer up to 475px `[read]`; about 35 to 60 characters per line `[inferred: 16.2px Neue Haas at those widths]`.

### Text style catalog

| Name | Family | Size | Case | Used for |
|---|---|---|---|---|
| Display 1 | display | h1 | sentence | hero headline |
| Display 2 | display | h2 | sentence | section headings, statement |
| Display marquee | display | 132 | upper | giant words, marquee |
| Number | display | 50.4 | | card figures |
| Heading 3 | display | 32.4 | sentence | card titles, steps, menu links, FAQ questions |
| Label | display | 15.3 | upper | section labels, captions, pills, step numbers |
| Body | body | 16.2 | sentence | paragraphs |
| Small | body | 16.2 (1024+), 18 below | sentence | captions in cards |
| Button | mono | 12.6 | upper | text buttons |

---

# Tier two

## Look and feel

Monochrome, typographic and cinematic. Near-black and pale grey sections alternate, joined by full-screen wipes rather than borders. Enormous tight-tracked grotesk headlines sit against tiny uppercase labels and a mono button face, so hierarchy is carried by extreme size contrast in one weight. It leans on motion and whitespace first, then video and WebGL for spectacle; photography is contained in cards. About 30% of the page is readable at a glance (headings, labels); the rest is revealed by scrolling, and several sections need long scrolls to see in full.

## Shape and surface

- Radius scale `[read]`: 1.8, 3.6, 7.2px, pill. Cards and fields use 7.2; small boxes 3.6.
- Borders: always 1px. Hairline on dark `#2f323b`, on light `#434343` at 15% `[read]`.
- Dividers: the drawing line with a plus, not a static rule `[read]`.
- Shadows: none `[read]`.
- Blur: text reveal 12px; frosted service cards 12px (flagged) `[read]`.
- Overlays and scrims: black to transparent 10rem fade at the top of the contact form; radial vignette in the about scanner `[read]`.
- Z stack, low to high: content 1, hero copy 3, raised sections 20, stripes 30, menu 40, header 99, loader and transition 9050 to 9500 `[read]`.
- Images: cropped into fixed-ratio frames (1.46 for projects), radius 0 to 3.6px, entering by rising (projects) or by crossfade (awards) `[read]`.

## Graphics and motifs

- The plus mark (12 to 13px, 1px stroke) is the signature device: on every divider, at the corners of the loader frame, flying during page transitions, riding the process rules `[read]`.
- Thin 1px rules that draw themselves on scroll `[read]`.
- Horizontal stripe wipes (5 bands on the page, 10 belts in transitions) `[read]`.
- No grain, noise or texture in CSS `[read]`.

## Iconography

Custom line icons: 1px stroke, `vector-effect: non-scaling-stroke`, square caps, 60x60 grid, built from repeated concentric or parallel strokes (circles, squares, arcs, hatching) `[read]`. Small UI glyphs (arrows 10x9, chevrons 9x10, plus 12x12) are filled or 1px stroked. Sizes: 10, 12, 18, 24, 90px `[read]`. Reads as one custom set, no library `[read]`.

## Illustration

None in the illustrative sense. The mascot and logo appear in the loader and story page; spectacle is WebGL, not drawings `[read]`.

---

# Tier three

## Brand behaviour

Logo top-left at 108x29 (w 7.5rem), 36px from the left and top edges at 1440, 18px at 390; clear space equals the page margin `[read]`. It never shrinks or hides; it inverts with the header through the difference blend `[read]`. The loader shows the logo at `clamp(10rem, 22vw, 17.5rem)` wide in a grey frame with corner plus marks `[read]`. Favicon and theme colour: not read.

## UX patterns

Linear scroll story on home; menu for five destinations; "let's talk" opens a contact popup from anywhere; forms validate on submit with inline messages and shake; no empty or loading states besides the loader `[read]`. Accessibility: `aria-label` and `aria-pressed` on the sound toggle, `aria-label` removed from split headings after splitting (hurts screen readers), no skip link found, no reduced-motion support in CSS, invisible selection `[read]`.

## Information architecture

Primary nav: Home, About, Our work, Services, Trionn name story; plus Contact through the pill `[read]`. Footer: contacts, social, local time `[read]`. Sitemap observed: `/`, `/about`, `/work`, `/services`, `/contact`, `/trionn-story`.

## Voice

Short declaratives, often two sentences in parallel ("Focused vision. Measured execution.", "Different skills. One standard."). Buttons are verb phrases in uppercase mono ("Discuss your project", "Book a 30-minute call", "View services"). Headings in sentence case with a full stop. Labels lower or upper case, no punctuation.

---

## Effects inventory

| Effect | Where | Trigger | Duration | Easing | Travel | Build |
|---|---|---|---|---|---|---|
| Blur text reveal | All headings, labels | Scroll, top 90% | 0.5s container, 0.8s pieces | power2.out | blur 12px to 0 | Small script (split + IO + CSS transition) |
| Fade up block | Paragraphs, CTAs | IO, bottom 10% margin | 0.8s | power2.out | 20px | CSS + small script |
| Scroll-filled statement | About h2 | Scrub, top 80% to centre | scroll | linear | colour 10% to 100% | Small script or CSS `animation-timeline` |
| Line with plus | Every divider | Scrub, bottom to centre | scroll | linear | 0 to 100% width, 360deg | CSS scroll-driven or small script |
| Stripe wipe handoff | Vision, services end, orbit, process | Pinned scrub | 0.6 of pin | linear | full height | Library (ScrollTrigger) or CSS `position: sticky` + scroll timeline |
| Card unfold | Key facts | Scrub, centre to top | scroll, lag 2s | linear | rotateX 92deg | CSS scroll-driven or small script |
| Horizontal track | Work | Pinned scrub | 200 of 1350% | linear | track overflow | Library or sticky + scroll timeline |
| Card rise | Work cards | Track position | scroll | cubic out | 550px | Small script |
| Layer handoff | Work to services | Pinned scrub | 150 of 1350% | linear | 100vw | Library or sticky |
| Card fly-in | Services | Pinned scrub | 800 of 1350% | linear | off-screen to columns | Library |
| Opposing words | Orbit | Scrub 0.6 | pin | linear | ±100vw | CSS scroll-driven |
| Hero canvas pin | Hero | Scroll | 400% | | 0 | Sticky, CSS alone |
| Button char shift | Text buttons | Hover, touch | 300ms + 30ms per char | ease | to arrow | CSS + small script to measure |
| Button underline swap | Text buttons | Hover | 1000ms out, 500ms in | ease | full width | CSS alone |
| Nav char blur swap | Nav and menu links | Hover | 300ms out, 400ms in | power2.in / out | 10px, blur 5px | Small script |
| Menu reveal | Desktop menu | Click | 1.2s | expo.inOut | clip circle | CSS alone (clip-path transition) |
| Menu items | Menu | Menu open | 0.8s, 100ms stagger | power2.out | 20px | CSS alone |
| Sibling dim | Menu | Hover | 450ms | power3.out | opacity 0.4 | CSS alone (`:has`) |
| Mobile sheet | Mobile menu | Tap | 0.8s | expo.inOut | 100% x | CSS alone |
| Hamburger to X | Menu pill | Click | 500ms | ease | 45deg | CSS alone |
| Accordion | FAQ | Click | 600ms open, 500ms close | power3.inOut | height | Small script |
| Testimonial fade | Testimonials | Click | 300ms | Swiper default | opacity | Small script |
| Image crossfade | Awards card | Loop, every 2s | 1.2s | power1.inOut | opacity | CSS keyframes |
| Video on hover | Team card | Hover | | | | Small script |
| Page transition belts | Every internal link | Click | 500ms in, 420ms out, 38ms stagger | cubic out / in | full height | Small script |
| Transition label | Page transition | Click | 840ms in, 760ms out | cubic | 100px | Small script |
| Loader | Every full load | Load | 6.15s | various | | Flag, do not build |
| Rotating word | Hero | Timer 3s | chars 0.08 stagger | power2 | blur | Flag, do not build |
| Stat counters | Key facts | 50% in view | 1.55 to 1.85s | power3.inOut | digit height | Flag, do not build |
| Hero WebGL, orbit, footer smoke | Hero, orbit, footer | Scroll, hover | continuous | | | Library, do not build |
| Form shake | Contact | Invalid submit | keyframes | | ±7px | CSS alone |
| Scroll cue arrow | Hero | Loop | 1.8s | ease-in-out | scaleY 1 to 1.2 | CSS alone |

## Rebuild note

**Swap freely**

- hurulab's colours, both typefaces and logo (by definition).
- The WebGL scenes, videos, photography and orbit.
- Copy, section order and section count.
- The specific icon drawings (keep 1px stroke, non-scaling, one set).
- Marquee content, background videos, the sound layer.
- Which colour is dark and which is light, as long as sections alternate and wipes use the next section's colour.

**Do not touch**

- The fluid root: `font-size: calc(1000vw / divisor)` and rem everywhere, so the page scales as one piece.
- One weight, hierarchy by size: display step ratios of about 1.5 to 2 between h3, number and h2, and the huge gap between 15px labels and 85 to 90px headings.
- Tight display tracking (-0.06em headings, -0.08em giant words, -0.02em labels) and line heights under 1 on display type.
- 12 columns, 1.5rem gutter, 2.5rem margin, full bleed; headings from column 2 with labels in column 1.
- Section padding 9.375rem block; one statement per viewport.
- Text reveals: blur 12px to 0, 0.8s, power2.out, 50ms random stagger, start at 90% of viewport; blocks rise 20px only.
- Stripe wipes as handoffs: 5 bands, bottom band first, 0.3 overlap spacing, in the next section's colour, and the next section pulled up underneath.
- Pinned stages that change role instead of ending (work becoming services).
- Dividers that draw on scroll with a rotating plus.
- The text button: no box, mono uppercase label, arrow, 1px underline that redraws, per-char shift on hover.
- Menu reveal from a circle at the toggle, 1.2s expo.inOut, reversed 1.75x faster.
- Page transition belts: 10 bands, 38ms stagger, 500ms in, 420ms out.
- Lenis at 1.05s ease out cubic, if smooth scroll is used at all.
- `mix-blend-mode: difference` on the fixed header.
