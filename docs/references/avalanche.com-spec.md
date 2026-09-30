# avalanche.com spec

Captured in Chrome on 2026-09-29. Tags: `[read]` from the DOM, a computed style, a CSS rule, a script or an element box. `[watched]` seen happen. `[inferred]` reasoned, with the reason in one clause.

## Method and limits

- Viewport. The browser sat beside a side panel, so the widest reachable viewport was 1126 x 686 (desktop branch, above 1024) and the narrowest 976 x 686 (phone branch, 1024 and below). Boxes are `[read]` at those two widths. Values at 1440, 1024 and 390 are computed from the `clamp()` functions and the class strings that set layout, and are tagged `[inferred]` where they are boxes rather than token values. Phone layout at 390 is read from the non-`lg:` classes; it is the same layout I measured at 976 with smaller fluid values.
- The tab reported `document.visibilityState: hidden` while the side panel had focus, so the browser throttled animation frames. Transitions only advanced when a screenshot forced a frame. Motion values therefore come mostly from CSS rules and scripts `[read]`, confirmed with frame captures where noted `[watched]`.
- Raw CSS and HTML could not be pulled into a shell (the proxy refused the domain), so everything was read inside the page with DevTools-style scripts.

## URLs walked

| url | what it was for |
| --- | --- |
| https://www.avalanche.com/ | home, full walk at 1126 and 976, tokens, scripts, motion, states, performance |
| /institutions | industry page, watched the page transition into it, stat cards, testimonials scroller |
| /ticketing | industry detail variant, intro story section |
| /use-cases | linked from the Industries menu, returns the 404 page: the error state |
| /build/developer-hub | build section page |
| /build/resource-hub | list page with search, tabs, sticky filter bar, video modal |
| /build/validators | stat and get-started page |
| /about/blog | list page: featured article, filterable article list |
| /about/blog/uaes-identity-system-serving-12-million-people-upgrades-to-avalanche | detail page paired with the list |
| /about/contact-us | the dedicated form page |
| /about/foundation | about page with alternating line headline |
| /about/press | press list and press kit |
| /ecosystem | community hub, event gallery marquee |
| /ecosystem/events | events list and past events scroller |

Inner pages were read by fetching their HTML inside the page and parsing the section tree `[read]`; /institutions was also rendered and captured.

## Loader note

There is no loading screen and no progress count on any page walked `[read]`: no `#loading` element exists in the DOM, although the stylesheet keeps a rule that hides `#loading` during a view transition (`visibility 2s linear 2s`), a leftover from an older build.

What the first screen hides instead: every split heading and paragraph starts at `opacity: 0` and is only revealed after `document.fonts.ready` resolves, the text is split into lines, and the section gets its `visible` class `[read]`. A device check in `utils.js` adds a 600ms wait before that on some devices `[read]`, which device was not readable. So the first frame is the fixed nav, a black ground with grain, the dimmed poster frame of the background film, and no words. Readable time for the hero title: fonts ready + 0.2s delay + 1.0s for the first line to land `[inferred]` from the transition values. The film itself is `preload="none"`, starts on `window.load`, and swaps from its poster image when the `playing` event fires `[read]`.

For hurulab: render the headline and intro as plain visible text in the first paint and animate only transform, never opacity from zero, so nothing depends on a font or script arriving.

## Performance note

| measure | value |
| --- | --- |
| TTFB | 39ms `[read]` (warm reload) |
| DOMContentLoaded | 214ms `[read]` (warm reload) |
| load event | 418ms `[read]` (warm reload) |
| first readable hero line | fonts ready + 1.2s `[inferred]` from the reveal delay and duration |
| HTML | 220 kB uncompressed `[read]` |
| render-blocking | one stylesheet, `Section.CNLbqeg7.css`, 49 kB transfer `[read]` |
| fonts | 4 files preloaded, Aeonik 400, 500, 700, 900, 38 to 39 kB each, 154 kB total `[read]`. Inter 400 and 600 are declared with 7 subsets each but never downloaded on home `[read]` |
| background film | `Avalanche_Hero_Video_V2.mp4`, 18,251 kB, 1920 x 1080, 15s loop, muted, no autoplay attribute, started by script on load `[read]` |
| statement film | `white-transparent_.mp4/.webm`, 3,622 kB, fetched once as a blob when the section is within one viewport height, shared by two video elements `[read]` |
| largest images | `statement-bg` 290 kB, `statement-snow` 239 kB, both eager, above the fold is not them `[read]` |
| scripts | Swiper bundle 44 kB transfer (153 kB raw), anime.js core `scroll.js` 17 kB, htmx `page.js` 16 kB, Lenis, third parties through Partytown (Intercom, Google Tag Manager), Termly consent, HubSpot, Vercel analytics `[read]` |
| images on home | 72, of which 13 lazy and 59 eager `[read]`; 56 of them are the logo marquee |
| requests on warm reload | 66 `[read]` |

What costs time: the 18 MB film, the 56 marquee logos loaded eagerly, four font weights, and the Swiper bundle for three small scrollers. What is free: all the motion, which is CSS transitions toggled by one class per section; the page transition, which is native `@view-transition`; and the video embeds, which are click-to-load facades.

## Banned-pattern flags

| pattern | where | status |
| --- | --- | --- |
| "trusted by" logo wall and logo marquee | home hero label "Global businesses trust Avalanche" followed by `#companies`, 28 logos doubled, 49s linear loop, pauses on hover on desktop; repeated on /institutions | do not copy |
| logo marquee, own wordmark | footer `#footer-marquee`, the full-width wordmark scrolling | do not copy |
| glass or frosted panels | hero feature card `backdrop-blur-lg` (16px) at 50% fill; industry cards `backdrop-blur-sm` (8px); stat cards on /institutions `backdrop-blur-2xl` (40px); sticky tab bar on /build/resource-hub | do not copy; use a solid raised surface |
| small pill labels above headings | category pill ("Enterprises", "Consumer apps", "Developers") above every news card title, `rounded-full`, 30px tall at 1920 | do not copy |
| text scramble or decode | `@keyframes flash` cycles `data-char-*` glyphs on `.split-heading .heading-char`; present in CSS, zero instances on home `[read]`, older pages may use it | do not copy |
| chat bubble or floating chat button | Intercom widget loaded site-wide through Partytown | do not copy |
| sticky announcement banner | announcement bar script present with `display = false` `[read]`, currently off | do not copy |
| waitlist-style gated email form | home `#playbook`, email plus consent to "download" a guidebook | do not copy |
| animated stat counters | none: the /institutions stats are static text `[read]` | clear |
| typewriter or rotating words, particles, orbs, aurora, mesh, gradient text, sparkles, ASCII, custom cursor, magnetic buttons | none found `[read]` | clear |

## Libraries

| library | version | what it does here | needed for hurulab |
| --- | --- | --- | --- |
| Astro | build hashes `_astro/*` | static pages, per-component scripts | no |
| Tailwind CSS | v4 (`@layer properties, theme, base, components, utilities`) | all layout and state styling | no, write plain CSS |
| anime.js | v4 core, bundled as `scroll.js` | only its `onScroll` observer, used to add and remove `.visible` on each section | no, IntersectionObserver does the same |
| Lenis | version string not present | smooth wheel scrolling above 1024px on non-touch, `duration: 0.8`, `smoothWheel: true`, `autoRaf: true`; anchor links scroll 2s with expo-out | optional, small script |
| custom text splitter | in-house, `Layout` script | splits `[data-split-line]` into lines wrapped in `overflow: clip` spans and sets `--index` per line | small script |
| Swiper | bundled, `slidesPerView: 'auto'`, no loop, touch on, wheel off, default speed 300ms | news and story scrollers | no, CSS scroll snap |
| htmx | bundled in `page.js` | filtering on list pages | no |
| View Transitions API | native `@view-transition { navigation: auto; }` | cross-page transition | CSS alone |
| Intercom, GTM, HubSpot, Termly, Vercel analytics, Fubi | third party | chat, tags, forms, consent, analytics, feedback toolbar | no |

---

# Tier one

## Motion

### Principles

Movement here is architectural, not decorative. Things arrive from the edge of their own box and stop in place, masked by a parent, so text reads as if it slides out from behind a line rather than floating in. Almost nothing fades; opacity is used for menus only. Durations are long for arrivals (1s to 2s) and short for responses (0.2s to 0.5s), and every curve is an ease-out that decelerates hard, so the last 30% of every move is slow and calm. Cascades come from lengthening duration per item rather than delaying the start, so a group starts together and settles one by one. Each section replays its entrance when it is scrolled back into view from above.

### Named motion tokens `[read]`

| token | value | used for |
| --- | --- | --- |
| duration-hover | 200ms | link and label color, mega menu fade in |
| duration-mode | 300ms | background, fill and border color |
| duration-quick-move | 500ms | button fill wipe, menu link slide, plus icon rotation |
| duration-reveal | 1000ms | section entrances, accordion rows, carousel tile clip |
| duration-reveal-step | +400ms per line | split heading lines |
| duration-card-step | +200ms per card | card groups |
| duration-slide-in | 1500ms | scroller rows entering from the right |
| duration-page | 1000ms | view transition |
| ease-settle | cubic-bezier(0.2, 0.6, 0.35, 1) | the default |
| ease-settle-strong | cubic-bezier(0.165, 0.84, 0.44, 1) | wipes and tiles |
| ease-glide | cubic-bezier(0.6, 0, 0.35, 1) | form labels |
| ease-glide-strong | cubic-bezier(0.8, 0, 0.2, 1) | long drifts |
| ease-leave | cubic-bezier(0.5, 0, 0.6, 0.2) | mega menu closing |
| delay-line | 200ms | all split text |
| stagger-link | 25ms per item | menu and footer links |

### Section reveal mechanism `[read]`

- Trigger: anime.js `onScroll({ target: section, enter: 'top top+=' + (innerHeight - 1), leave: 'top', onEnter: add 'visible', onLeaveBackward: remove 'visible' })`. In plain terms: the class is added the moment the section's top edge is 1px inside the bottom of the viewport, and removed when the section scrolls back below the viewport. IntersectionObserver equivalent: `threshold: 0`, `rootMargin: '0px 0px -1px 0px'`, add on intersect, remove only when the entry is below the viewport.
- Runs every time the section re-enters from below, once per entry.
- Everything else is plain CSS: children carry a hidden starting transform and a transition, and `.visible` on the section resets the transform to zero.
- The hero gets `visible` on init because its top is already in view.

### Split text `[read]`

- Headings and intro paragraphs with `data-split-line` are split into lines, each line wrapped in a span with `overflow: clip`, and each gets `--index`.
- Hidden state: the line is translated `-100%` on Y (it sits above its own mask) and the whole element is `opacity: 0` until the split runs, then `opacity: 1`.
- Visible state: translate 0, `transition-duration: calc(1s + index * 0.4s)`, `transition-delay: var(--line-delay)` = 0.2s, easing ease-settle.
- Result: all lines start together at 200ms; line 1 lands at 1.2s, line 2 at 1.6s, line 3 at 2.0s, line 4 at 2.4s. Lines move down into place, not up.
- Words and characters are not split on the current theme.
- /about/foundation variant: alternate lines start offset sideways by 50% of their width (odd lines from the left, even from the right) and slide to center.

### Hero load choreography `[read]`, confirmed by frame capture `[watched]`

From the moment the hero gets `visible`:

| element | start state | end | delay | duration | easing |
| --- | --- | --- | --- | --- | --- |
| nav | already in place, no entrance on home | | | | |
| background film | poster image under a 60% black scrim and 40% grain | film replaces poster on `playing` | on load | snap | none |
| title line 1 | Y -100% in its mask | 0 | 200ms | 1000ms | ease-settle |
| title line 2 | Y -100% | 0 | 200ms | 1400ms | ease-settle |
| intro lines 1 to 3 | Y -100% | 0 | 200ms | 1000, 1400, 1800ms | ease-settle |
| feature card (right column) | X -100% - 2px, clipped | 0 | 200ms | 1000ms | ease-settle |
| button row | Y -100% - 2px, clipped by `overflow: hidden` | 0 | 400ms | 1000ms | ease-settle |
| trust line with red bar | Y -100% - 2px on desktop, Y +100% on phone | 0 | 600ms | 1000ms | ease-settle |

The page is settled 2.0s after reveal starts.

### Scroll reveals by section `[read]`

| section | what moves | from | duration and delay | stagger |
| --- | --- | --- | --- | --- |
| carousel | heading lines per tile | Y -100% | 1s + 0.4s per line, 0.2s delay | per line |
| pillars (industry cards) | 3 cards | Y +100% | 1.0s, 1.2s, 1.4s | +200ms per card via duration |
| playbook panel | whole panel | Y +50% | 1s | none |
| resources scroller | the whole row | X +100% (phone) | 1.5s | cards inside rise Y +100%, +200ms each, desktop only |
| statement | foreground snow image | Y +space-3xl | 1s | CTA drops from Y -100% at 400ms |
| blog scroller | row and cards | as resources | 1.5s | +200ms per card |
| power | the fill loop restarts, films play from their saved offset | | 6s loop | none |

### Scroll-driven behavior

Nothing is scrubbed or pinned `[read]`: there is no sticky section, no scroll-linked progress. The only scroll-position effect is the fixed background film, which stays put while transparent sections pass over it, so the film shows through at the top (hero), is covered by black scrims through the middle, and returns under the contact section at the end.

### Page transition `[read]` + `[watched]`

- Native cross-document view transition, `@view-transition { navigation: auto }`.
- Old page (`::view-transition-old(root)`): scale 1 to 0.9, opacity 1 to 0.5, 1s, ease-settle, fill both.
- New page (`::view-transition-new(root)`): translateY 100% to 0, 1s, ease-settle, runs at the same time.
- The nav has `view-transition-name: navigation` and sits in its own group at z-index 100, so it stays fixed and untouched while the page beneath shrinks back and the new page slides up over it.
- Seen twice going to /institutions: nav steady, black grain ground, then the new poster frame, then the hero lines drop in.
- In-page anchors on desktop scroll with Lenis for 2s, expo-out, offset by the nav height minus 1px (no offset for `#contact`).

### Smooth scroll `[read]`

Lenis `duration 0.8`, `smoothWheel true`, `autoRaf true`, only when `innerWidth > 1024` and not touch. Off on phones and tablets. Wheel and touch multipliers left at Lenis defaults (1). Menus carry `data-lenis-prevent`.

### Keyframes paired with elements `[read]`

| keyframes | element | duration | timing | iterations | fill |
| --- | --- | --- | --- | --- | --- |
| marquee (to translateX -100%) | logo and footer marquees | 49s (`--duration`) | linear | infinite | none |
| power-fill (neutral 900, red from 10% to 92%, back) | the fill behind the statement type mask | 6s | ease | infinite | none |
| stroke-draw (dashoffset to 1000px) | decorative SVG strokes, inner pages | 30s | linear | infinite, some reverse | none |
| beat (scale to 1.1 at 50%) | decorative pulse, inner pages | 4s | ease-glide-strong | infinite | none |
| pulse (opacity 0.5 at 50%) | form loading state | 2s | cubic-bezier(0.4, 0, 0.6, 1) | infinite | none |
| spin | submit spinner | 1s | linear | infinite | none |
| scale-out, scale-in | page transition | 1s | ease-settle | 1 | both |
| clip-to (var start to var end) | defined, no user found on home | | | | |
| flash | character scramble, unused on home | | steps(1, start) | | forwards |

### Reduced motion `[read]`

The site has no `prefers-reduced-motion` rule of its own. The only such block in the page belongs to a browser extension. Everything runs at full length for everyone. For hurulab, add a reduced-motion block that sets travel to 0 and durations to 0.01ms.

### Resize behavior `[read]`

Fluid values recompute continuously with the viewport and do not animate. Crossing 1024 swaps the whole layout, enables or disables Lenis, and changes the menu from hover mega menu to a drawer; nothing animates across the switch. The split text re-splits 150ms after a width change (ResizeObserver).

## Layout and spacing

### Spacing scale

Raw values collected from the token layer at 1920 (the design canvas): 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 200 `[read]`.

| step | 1920 | 1440 | 1025 | phone | ratio to previous |
| --- | --- | --- | --- | --- | --- |
| xs | 8 | 5.9 | 4 | 8 | |
| sm | 12 | 8.8 | 6 | 12 | 1.5 |
| base | 16 | 11.7 | 8 | 16 | 1.33 |
| md | 24 | 17.6 | 12 | 24 | 1.5 |
| lg | 32 | 23.4 | 16 | 32 | 1.33 |
| xl | 48 | 36.2 | 26 | 48 | 1.5 |
| 2xl | 64 | 47.9 | 34 | 64 | 1.33 |
| 3xl | 96 | 72.4 | 52 | 96 | 1.5 |
| 4xl | 128 | 95.8 | 68 | 128 | 1.33 |
| 5xl | 160 | 120.3 | 86 | 160 | 1.25 |
| 6xl | 200 | 149.6 | 106 | 200 | 1.25 |

Base unit 8 at 1920, doubling every two steps (x1.5 then x1.33). On desktop the scale shrinks with the viewport (1440 is 0.73 of 1920); on phones it is fixed at the 1920 values, so phones get more generous spacing than a 1025px laptop. Left out: an older `--padding-*`, `--gap-*`, `--margin-*` family with a 1792px fluid top end, still used in the footer; it repeats the same steps.

### Grid

- Container: `width: 100%`, `max-width: 1920px`, centered, side padding `space-lg` on desktop and `space-base` (16) on phone `[read]`.
- Five-column frame: an absolutely positioned 5-column grid of 1px vertical lines sits behind every section (2 columns on phone, lines hidden) `[read]`. At 1126 each column is 218px `[read]`; at 1440 it is 278.6px `[inferred]` from `(1440 - 2 x 23.4) / 5`.
- Content snaps to that frame loosely: the hero is a `4fr 1fr` split so the side card fills exactly the fifth column; the industry cards are a 3-up grid; the intro block of pillars is `2fr 4fr`; the mega menu is a 12-column grid (4 title, 5 links, 3 feature).
- `--max-width-col` equals one frame column and is the width of side cards `[read]`.
- Gaps between cards are `space-xs` (8 at 1920), which reads as a 1-column-line seam rather than a gutter.

### Breakpoints `[read]`

| width | what changes |
| --- | --- |
| 1024 and below | stacked layout, drawer menu, fixed tokens, Lenis off, column lines hidden, swipers active |
| 640 | forms go two columns |
| 768 | a few stagger offsets |
| 1025 and above | desktop layout, hover mega menu, fluid tokens, Lenis on |
| 1366, 1440, 1920, 2560 | container max-width steps only; the 1920 cap on `.container` wins |

### Section rhythm

Heights at 1126 x 686 desktop `[read]`, as viewport heights:

| section | height | vh | vertical padding |
| --- | --- | --- | --- |
| hero | 686 | 1.00 (`h-svh`) | space-2xl |
| logos | 160 | 0.23 | 0 |
| carousel | 747 | 1.09 | space-md; tile height `clamp(720px, 100svh - nav - 2 x space-2xl, 900px)` |
| statement film | 607 | 0.88 | panel is `100svh - nav - 2 x space-md` |
| industries | 612 | 0.89 | space-6xl top and bottom |
| playbook | 380 | 0.55 | space-3xl |
| stories | 647 | 0.94 | space-4xl |
| builder statement | 674 | 0.98 | space-6xl x 1.5 inside a panel |
| news | 691 | 1.01 | space-4xl |
| contact | 460 | 0.67 | space-4xl inside a light panel |
| footer | 755 | 1.10 (`min-h: 100svh - nav + 1px`) | space-3xl top, space-xl bottom |

Sections are not separated by rules or gaps. They sit edge to edge over a continuous background, and are told apart by what fills them: a scrim gradient on each section's `::before` (transparent to black, black to black, black to transparent) and occasional inset panels with a large radius. Whitespace is generous next to headlines (space-6xl above the industries intro) and tight inside groups (space-xs between cards). The rhythm is broken on purpose twice: the statement film is a single rounded red panel filling almost a full screen, and the contact section switches to a light ground.

### Text and image arrangement

- Headlines sit left or right, never centered, except the builder statement (centered on a light image). Scrollers put their heading top right (`flex-row-reverse`, `text-right`) with the cards starting from the left.
- Intro text has a measure cap: 60ch in the hero, 96ch in the industries intro, right-aligned against the heading (`justify-self-end`).
- Images are boxed: 16:9 thumbnails at the top of cards with a hairline border, full-bleed only for the background film and the builder statement.
- Text runs inside a single container with a 16 to 32px gutter; nothing runs to the physical screen edge except the footer marquee.

## The argument of the home page

1. Hero: one claim ("technology built for business") plus a one-sentence scope, then two doors (talk to us, start building) and one piece of fresh proof beside it (a news card).
2. Logos: borrowed credibility.
3. Carousel: four reasons, each a headline plus a paragraph, explored by choosing a tile.
4. Statement film: the emotional beat, a big type statement filled with moving film.
5. Industries: self-sorting, "which of these are you", three doors.
6. Playbook: a lead magnet for those not ready to talk.
7. Stories: proof in customers' voices, video.
8. Builder statement: a light-ground pause that sends builders elsewhere.
9. News: recency.
10. Contact: the ask, a full form, on a light ground so it reads as the destination.
11. Footer: the whole map.

The page moves claim, proof, reasons, feeling, sorting, low-commitment offer, proof again, and only then the ask. The same two doors from the hero reappear on every industry card and at the end, so the visitor is always one click from contact.

## Section by section (home)

Boxes are width x height at x, y from the section's top left. Desktop boxes `[read]` at 1126, phone boxes `[read]` at 976 (phone branch). 1440 and 390 boxes `[inferred]` by scaling the fluid tokens.

### Navigation

- Purpose: brand, four menus, phone drawer.
- Skeleton:
  - nav (fixed, full width, `h: --navbar-height`, z 101)
    - div (grid: 5 columns desktop, `1fr auto` phone)
      - a (logo)
      - div (menu area, spans 3 columns)
        - ul
          - li x4 (accordion)
            - button (label + plus icon on phone)
            - div (menu panel: grid rows 0fr to 1fr)
              - div > div (12-col grid)
                - div (title h2, 4 cols)
                - ul (links, 5 cols)
                - div (featured news card, 3 cols)
      - div > button (hamburger, phone only)
- Boxes: nav 1126 x 53 at 1126 `[read]`; 1440 x 66.6 `[inferred]`; phone 976 x 88 `[read]`, 390 x 80 `[inferred]` from the phone clamp. Logo 91 x 13 at 1126, left edge at the gutter `[read]`. Four labels centered in columns 2 to 4, 12.2px semibold at 1126 `[read]`.
- Content: 4 labels, 13, 13, 6 and 5 links, one featured card per menu.
- Moves: desktop menu opens on hover, 200ms fade in with ease-settle, 200ms fade out with ease-leave; menu title slides up from Y -100% in 500ms; links slide up in 500ms each with 25ms stagger. Labels turn accent on hover in 200ms.
- Phone drawer: see components.
- Carries: navigation. Take the fixed bar, the column-aligned labels and the drawer's slide-in rows. Leave the mega menu; hurulab needs a few anchors and Contact Us.

### Hero

- Purpose: the claim, two doors, fresh proof.
- Skeleton:
  - section (min 100svh, padding-top nav height)
    - div (5 decorative column lines, gradient 70% to 20%)
    - div.container (grid `4fr 1fr`)
      - div (column: text top, actions bottom, `justify-between`)
        - div
          - h1 (split lines)
          - p (split lines)
        - div (grid `2fr 1fr`, overflow hidden, max 3/4 width)
          - div (two buttons)
          - div (4px red bar + trust line)
      - div (bottom-aligned)
        - a (feature card: 16:9 image, tag, date, title, excerpt, text button)
- Boxes at 1126 `[read]`: title 644 x 223 at 31, 90, set at 96.6px, line-height 0.77; intro 513 x 54 at 36, 342, 14.5px; action row 654 x 42 at 18, 607; each button 200 x 42; feature card 218 x 352 at 890, 296. At 1440 `[inferred]`: title 123px, intro 15.9px, buttons 53.8 tall, card 278.6 wide. Phone at 976 `[read]`: section 976 x 1266, title 59.4px, intro 18px at 638 wide, buttons 72 tall stacked full width. At 390 `[inferred]`: title 44px (fixed `text-[44px]` below 640), buttons 72 tall.
- Content shape: title 4 words in 2 to 3 lines, intro 24 words, 2 buttons (3 and 2 words), trust line 4 words, 1 card with a 10-word title and 15-word excerpt.
- Moves: see hero load choreography.
- Carries: hero. Take the full-height split, the text-top actions-bottom column, the drop-in lines, the button row that drops from above. Leave the frosted card and the trust line. Swap the card slot for something hurulab has, such as a one-line "one to two weeks of discovery" fact, or leave the fifth column empty.

### Logos (`#companies`)

- Marquee of 28 logos, 300 x 160 cells at 1920 (3:2), 49s loop.
- Carries: none. Flagged, do not copy.

### Carousel (`#carousel_`)

- Purpose: four reasons, chosen by the visitor.
- Skeleton:
  - section
    - div.container (relative, fixed height on desktop)
      - div.card x4 (absolute, full size, rounded panel, `clip-path: inset(...)`)
        - button (number "01")
        - div (grid rows 0fr to 1fr)
          - div (content, translated by active index)
            - div (grid 2 cols)
              - h2 (muted line + `b` accent line)
              - p
            - div > img (wide graphic, 2.7:1)
        - div (round arrow button, bottom right)
- Desktop mechanics `[read]`: all four tiles stack in the same box. The active tile is 75% of the width (`--tile-width`), the three others are clipped strips each a third of the remaining 25%. Switching changes each tile's `clip-path: inset(0 right 0 left round radius)` over 1000ms ease-settle-strong, while the content inside slides by 12.5% of the tile width per step over 1000ms, and the number buttons slide to the strips' left edges. Click a strip or swipe horizontally on a trackpad (horizontal wheel delta accumulates to 50px, 120ms debounce, only while 60% of the carousel is in view) to change tile.
- Phone `[read]`: a vertical accordion, 4 stacked rounded cards, 4px gap; tapping a number opens its card by animating `grid-template-rows` 0fr to 1fr over 1000ms ease-settle.
- Boxes: tile 1090 x 720 at 18, 13 at 1126 `[read]`; heading 37.4px; image 695 x 258 `[read]`; number 20px bold. At 1440 `[inferred]`: tile height 720 (the clamp floor), heading 47.9px.
- Content shape: 4 tiles, headings 3 to 6 words split across two lines (muted then accent), paragraphs 27 to 31 words, 1 wide image each.
- Carries: the problem (three beliefs about AI) fits three tiles well; or the discovery phase broken into its stages. Take the clip-path tile switcher and the two-tone heading. Leave the trackpad hijack.

### Statement film (`#power`)

- Purpose: the emotional beat.
- Skeleton:
  - section
    - div.container (rounded panel, accent fill, overflow hidden, near full screen)
      - div > video (white film, cover)
      - div (type mask: SVG of the statement, `mask-image`)
        - span (sr-only statement)
        - div.power-fill (color loop)
        - video (same film, `mix-blend-mode: multiply`)
- Boxes: panel 1090 x 607 at 1126 `[read]` (`100svh - nav - 2 x space-md`); type block 886 x 373, aspect 760:320 (2.375:1) desktop `[read]`, square on phone; phone panel 4:5 `[read]`.
- Content: 5 words, set as an image mask.
- Moves: the fill behind the type loops neutral to accent and back every 6s; film plays only while in view, pauses when the tab hides.
- Carries: the ending, as one big statement panel. Take the near-full-screen rounded panel with one statement. Replace film-in-type with plain large type; the film is 3.6 MB.

### Industries (`#pillars`)

- Purpose: sorting the visitor.
- Skeleton:
  - section
    - div.container (column, gap space-2xl)
      - div (grid `2fr 4fr`)
        - h2 (split lines)
        - p (split lines, 96ch, right-aligned block)
      - div (grid 3 cols, equal rows, gap space-xs)
        - a x3 (card: title top, button bottom, accent bar on the left of the first)
- Boxes at 1126 `[read]`: heading 339 x 127 at 36, 117; intro 677 x 127 at 413, 117; cards 349 x 214; card title 24px; button 136 x 42. At 1440 `[inferred]`: cards 452 wide.
- Phone `[read]`: cards become full-width rows with title left and a round accent arrow right.
- Content: heading 7 words, intro 68 words, 3 cards with 1 to 2-word titles.
- Moves: cards rise from Y +100% with 1.0, 1.2, 1.4s durations.
- Carries: what we do (nine services as three rows of three). Take the 2fr/4fr intro, the equal-height card grid with 8px seams, title-top action-bottom anatomy. Leave the blur.

### Playbook (`#playbook`)

- Purpose: low-commitment offer.
- Skeleton:
  - section
    - div.container
      - div (panel, raised fill, grid 2 cols, aspect 33:9 on desktop, accent bar left)
        - div (text: h3, form)
        - div > img (16:9)
- Boxes at 1126 `[read]`: panel 976 x 266 at 75, 190; heading 28.5px, 8 words; image 484 x 272.
- Moves: panel rises from Y +50% in 1s.
- Carries: the discovery phase, with a mailto button in place of the form. Take the 33:9 panel with the leading accent bar and text left, image right. Leave the gated form.

### Stories (`#resources`)

- Purpose: proof in customers' voices.
- Skeleton:
  - section
    - div.container (column, items end)
      - div > h2 (right-aligned)
      - div (row wrapper, enters from right)
        - div.swiper > div.swiper-wrapper > div.swiper-slide x5
          - div (card: button with 16:9 thumbnail and round play button, text block, 4px accent rule at the bottom)
        - div (prev and next round buttons)
- Boxes at 1126 `[read]`: heading 242 x 64 top right; slides 327 x 359 (30% of the row), first slide inset by space-3xl; thumbnails 325 x 192; nav buttons 28 x 28 round.
- Content: heading 4 words, 5 cards, titles 5 to 9 words, excerpts 14 to 34 words.
- Carries: the worked example (espresso bar), one card per stage. Take the right-aligned heading and the left-starting row that bleeds off the right edge, the 4px accent rule at card bottoms, and the round prev and next buttons.

### Builder statement (`#statement`)

- Purpose: a light pause and a side door.
- Skeleton:
  - section
    - div.container (image background)
      - img (background)
      - img (foreground, rises)
      - h2 (centered, dark text)
      - div > a > button
- Boxes at 1126 `[read]`: container 1090 x 524; heading 458 x 95 centered, 37.4px, 9 words; button 190 x 42.
- Carries: what it costs, as a centered statement with one CTA. Take the centered heading plus single button over a calm image. Leave the snow graphic.

### News (`#blog`)

- Purpose: recency.
- Skeleton: as stories, but a 3-column grid on desktop and a scroller on phone; cards with 16:9 image, tag, date, 8 to 14-word title, 20 to 33-word excerpt, text button; "View all" button below.
- Boxes at 1126 `[read]`: cards 325 x 379; heading top right.
- Carries: how we work (seven steps) as a scroller of numbered cards, or none.

### Contact (`#contact`)

- Purpose: the ask.
- Skeleton:
  - section
    - div.container (light panel, full bleed)
      - div.container (grid 2 cols)
        - div (h2, 1px rule, short prose)
        - form (2 name fields, email, chip select, message, 2 checkboxes, submit)
- Boxes at 1126 `[read]`: section 1126 x 460; heading 167 x 64, 3 words; form 487 x 311; fields 42 tall; submit 139 x 42.
- Moves: labels float up (see forms). Select opens by growing height over 750ms ease-glide-strong.
- Carries: Contact Us. Take the switch to the light ground for the ask, the two-column heading-left action-right layout, the 1px rule under the heading. Replace the form with one mailto button.

### Footer

- Skeleton:
  - footer (min height one screen)
    - div (column, `justify-between`)
      - div (grid `2fr 5fr`: small logo, 4 link columns)
      - div (wordmark marquee)
      - p (credit)
- Boxes at 1126 `[read]`: 1126 x 755; link column heads 23.7px black uppercase, links bold muted, turn accent on hover.
- Carries: the footer. Take the full-screen footer with column heads. Leave the marquee.

## Inner pages (IA and pattern reuse) `[read]`

Every inner page reuses the same sections: hero, a content block, a scroller, news, contact, footer. Industry pages (/institutions, /ticketing) add a stats block (3 frosted cards with a big figure, a label and a date) and a testimonial scroller (slides with an 8px accent bar on the left). /about/blog is the list: hero, one featured article, a filterable list with accordion filters and search. The detail page is a single `#article-detail` section followed by contact. /about/contact-us is only a hero holding the form. /build/resource-hub adds a search hero, a sticky tab bar and a video modal (`dialog`).

Error state: /use-cases, linked from the Industries menu, returns the 404 page: a hero reading "404" with one link, then the footer.

## Interaction and components

### Primary button `[read]` + `[watched]`

- Anatomy: text left, arrow glyph right (10 x 10 mask of `/arrow.svg` at 1920), and a leading accent bar (`::before`, 8px wide) that grows to fill the button on hover.
- Size: height 72 at 1920, 53.8 at 1440, 38 at 1025 floor, 72 on phone. Left padding space-xl (48 at 1920), right padding clamp(2.5rem, 0.066rem + 3.799vw, 4.625rem) = 74 at 1920. Font 16px at 1920, weight 500, capitalized.
- Ratio: height to font size 4.5:1; left padding to font size 3:1; right padding 4.6:1 (room for the arrow).
- States:
  - rest: raised dark fill, accent bar 8px, accent arrow.
  - hover: bar widens to 100% over 500ms ease-settle-strong, fill color changes over 200ms; arrow turns dark. Red variant: bar wipes in light grey (#c6cccd) and text turns black `[watched]`.
  - press: bar color to pressed accent.
  - focus: browser default outline, 1px auto, no custom ring `[read]`.
  - disabled: fill neutral 300, no pointer events.
- Buttons are nested inside links, so keyboard users hit two tab stops per button `[read]`. Do not copy that.

### Text button `[read]`

Label plus the same arrow, no fill; hover turns the label accent over 200ms.

### Round icon button `[read]`

Circle of space-xl (48 at 1920), neutral 700 fill, white chevron; hover neutral 600.

### Cards `[read]`

- News card: 1px hairline border, 16:9 image on top, body padding space-lg with top padding space-base, gap space-lg between text group and button, 4px accent rule on top (`horizontal-line`) on some variants.
- Industry card: raised fill, padding space-2xl, title top, button bottom, gap space-3xl.
- Story card: as news card with a round play button centered on the image; clicking swaps in the video iframe (facade).
- Testimonial card: 8px accent bar left, dark body.

### Mega menu (desktop) `[read]`

Hovering a label shows a full-width panel under the nav with a 1px top hairline: panel title 40px, links in 2 columns in large bold uppercase (20px), featured news card on the right. Fade in 200ms, links cascade 25ms apart, 500ms each.

### Drawer menu (phone) `[read]`

- Hamburger: 3 bars 2px tall, 2/3 width, 6px apart, inside a square black button with a 4px accent bar on the left that widens to full width when open (500ms ease-settle).
- Open: top and bottom bars rotate to +45 and -45 and move 8px toward center over 300ms; middle bar fades in 150ms.
- The panel under the nav fills `100svh - nav - space-xs`; rows slide in from the left, each starting `100% + space-xs + index x 50%` away, with duration 500ms + index x 100ms, ease-settle.
- Each row is an accordion: plus icon turns to minus by rotating the vertical stroke 90 degrees in 500ms; the sub-list opens by `grid-template-rows` 0fr to 1fr over 1000ms; sub-links drop in with a (index + 10) x 25ms delay.
- The page behind gets `overflow: hidden` and a dim overlay.

### Accordion tile carousel

See carousel section.

### Scroller `[read]`

Swiper with `slidesPerView: auto`, 300ms slide speed, no loop, touch drag; slides are 30% wide on desktop with a 1px negative overlap so borders merge; round prev and next buttons; phone slides are full width.

### Forms `[read]`

- Field: 72 tall at 1920, white fill, 1px neutral 300 border, left padding space-lg, no radius.
- Floating label: sits centered in the field at full size; on focus or once filled, moves up 120% and scales to 75%, opacity 60%, over 500ms ease-glide.
- Validation: a green check fades in 300ms after 250ms once the field is valid; invalid borders turn red after a 300ms delay, never while the field is empty.
- Select: a chip select, the field grows to show 8 option chips (height space-xl, 1px border) over 750ms ease-glide-strong; chosen chips collect in a row under it.
- Checkbox: square, 24px, 1px border, fills accent when checked.
- Submit: shows a spinner while loading, then "Done"; errors appear under the button, fading in over 200ms.

### Tags

Pill, 30px tall at 1920, accent fill or 1px outline. Flagged, do not copy.

### Focus ring `[read]`

No custom focus style: links show the browser's `auto 1px` outline with 1px offset, buttons the same with 0 offset; no difference between hover and focus beyond that.

## Color (context only, replaced by hurulab's)

### Ramps `[read]`, with OKLab lightness

Neutral (cool, slightly blue-green grey):

| step | hex | L | change from previous |
| --- | --- | --- | --- |
| 100 | #e1dfe9 | 0.908 | |
| 200 | #d8dedf | 0.896 | -0.012 |
| 300 | #c6cccd | 0.841 | -0.055 |
| 400 | #a2afb2 | 0.745 | -0.096 |
| 500 | #888c8d | 0.637 | -0.108 |
| 600 | #6d7071 | 0.543 | -0.094 |
| 700 | #383838 | 0.341 | -0.202 |
| 800 | #212020 | 0.245 | -0.096 |
| 900 | #1d1d1d | 0.231 | -0.014 |
| 950 | #131314 | 0.187 | -0.044 |
| page | #0a0a0a | 0.145 | -0.042 |

The big drop between 600 and 700 splits the ramp into a text group (100 to 600) and a surface group (700 to page).

Accent:

| step | hex | L |
| --- | --- | --- |
| light | #fbdbdb | 0.918 |
| base | #e22b35 | 0.593 |
| deep | #b72129 | 0.506 |

Semantic: success #4ade80, error #dc2626. A legacy ramp (`--color-red-*`, `--color-neutral-*`) with #ff394a and pure greys is still defined, used by old components.

### Roles `[read]`

| role | value |
| --- | --- |
| page background | #0a0a0a, under a fixed film at 60% black scrim |
| section scrims | gradients of #000 at 0% or 100% on each section |
| raised surface | #212020 (buttons, cards) |
| sunken surface | #131314 (news cards) |
| nav surface | #1d1d1d |
| light surface | #e1dfe9 (contact) |
| text primary | #ffffff |
| text body | #c6cccd |
| heading muted | #a2afb2 (first line of two-tone headings) |
| text muted | #888c8d (footer links, dates) |
| hairline | #383838 |
| grid lines | #383838 at 20% (70% to 20% gradient in the hero) |
| field border | #c6cccd |
| accent | #e22b35 |
| accent hover | red buttons wipe to #c6cccd; dark buttons wipe to #e22b35 |
| accent pressed | #b72129 |
| focus ring | browser default |
| selection | browser default |

Frequency of text colors on home at 1126 `[read]`: #c6cccd 69, #ffffff 55, #888c8d 46, #a2afb2 45, #000 29, #e22b35 21. Fills: #e22b35 23, #212020 14, #1d1d1d 8, #131314 6.

### Contrast `[read]` values, computed

| text on fill | ratio |
| --- | --- |
| #c6cccd on #0a0a0a | 12.18 |
| #a2afb2 on #1d1d1d | 7.47 |
| #888c8d on #000 | 6.18 |
| #e22b35 on #000 (hero title) | 4.63 |
| #fff on #e22b35 (red button) | 4.53 |
| #fff on #212020 | 16.25 |
| #000 on #e1dfe9 | 15.93 |

### Gradients `[read]`

Only scrims: `linear-gradient(to bottom in oklab, from, to)` per section; grid lines fade 70% to 20% top to bottom. No decorative gradients.

## Typography (context only, replaced by hurulab's)

- Family that renders: Aeonik (`aeonik`), woff2, weights 400, 500, 700, 900, `font-display: swap`, all four preloaded `[read]`. Inter is declared but not downloaded.
- Weights: 900 for every heading and the big footer heads; 700 for link lists and numbers; 500 for buttons; 400 for body.

### Type scale

Raw sizes seen on home at 1126 `[read]`: 12, 12.2, 12.4, 12.9, 14.5, 14.7, 15.1, 16, 16.9, 19.6, 24, 28, 28.5, 37.4, 96.6. Proposed scale at 1920 from the token layer:

| step | 1920 | 1440 | 1025 | phone 1024 / 390 | ratio to previous |
| --- | --- | --- | --- | --- | --- |
| xs | 12 | 12 | 12 | 12 | |
| sm | 14 | 12.9 | 12 | 14 | 1.17 |
| base | 16 | 13.9 | 12 | 16 | 1.14 |
| lg | 18 | 15.9 | 14 | 18 | 1.13 |
| xl | 20 | 16.8 | 14 | 20 | 1.11 |
| 2xl | 24 | 19.7 | 16 | 22 | 1.2 |
| 3xl | 32 | 24.5 | 18 | 36 / 32.1 | 1.33 |
| 4xl | 40 | 30.4 | 22 | 26 / 24 | 1.25 |
| 5xl | 48 | 36.2 | 26 | 30 / 28 | 1.2 |
| 6xl | 64 | 47.9 | 34 | 50 / 46.1 | 1.33 |
| 7xl | 96 | 72.4 | 52 | 52 / 48.1 | 1.5 |
| 8xl | 164 | 123.2 | 88 | 60 / 52.2 | 1.71 |
| 9xl | 200 | 149.6 | 106 | 64 / 56.2 | 1.22 |

Small steps close together (1.1 to 1.2) for reading, then big jumps (1.33 to 1.71) for display. Left out: 28px (a one-off legacy `--text-3xl`). On phones 4xl and 5xl come out smaller than 3xl; that is how the site defines them.

### Text styles by role `[read]`

| role | size | weight | line height | tracking | case |
| --- | --- | --- | --- | --- | --- |
| hero title | 8xl (44px fixed below 640) | 900 | 0.77 | normal | uppercase |
| section heading (`.h4`) | 6xl | 900 | 0.85 | -0.03em | uppercase |
| panel heading (`.h5`) | 5xl | 900 | 0.85 | -0.03em | uppercase |
| card group heading (`.h6`) | 4xl | 900 | 0.85 | normal | uppercase |
| tile heading | 3xl phone, 6xl desktop | 900 | 0.85 | normal | uppercase, two tones |
| card title | xl | 900 | 1 | -0.03em on stories | uppercase |
| intro | lg | 400 | 1.25 | normal | sentence |
| long intro | base | 400 | 1.5 | normal | sentence |
| body small | sm | 400 | 1.15 | normal | sentence |
| meta (date, author) | xs | 400 | 1.15 | normal | sentence |
| button | base desktop, sm phone | 500 | 1.15 | normal | capitalized |
| nav label | sm | 600 | 1.5 | normal | capitalized |
| menu link | xl | 700 | 1 | normal | uppercase |
| footer column head | 2xl | 900 | 0.85 | normal | uppercase |
| trust line | xl | 900 | 1 | normal | uppercase |

Measure: hero intro 60ch (513px at 1126, 675px at 976); industries intro 96ch (677px at 1126).

Two-tone headings: the heading's first phrase is muted (#a2afb2) and a `b` element holds the second phrase in the accent, forced onto its own line on desktop.

---

# Tier two

## Look and feel

Dark, cinematic, industrial. A black ground with film grain, heavy condensed-feeling uppercase in black weight, one saturated red used as a leading edge (bars, rules, arrows) rather than as a fill. Square corners everywhere except a few large rounded panels. Leans on motion and photography of real places (stadium, trading floor, column capital) far more than on illustration. Two thirds of each screen is readable at a glance `[inferred]` from the hero and section boxes (headline, intro, a button); the rest (tiles, scrollers, menus) has to be explored.

## Shape and surface

- Radius: 0 for buttons, fields, cards and images; space-lg (32 at 1920, 17.8 at 1126 `[read]`) for feature panels and carousel tiles; full for tags and round buttons. Raw radii on home at 1126: 17.8 x5, 9999 x16 `[read]`.
- Borders: always 1px. Hairline color #383838 on dark, #c6cccd on light. Raw: 1px #c6cccd x15, 1px #383838 x27, 1px #fff x2, 1px #6d7071 x2 `[read]`.
- Accent edge: an 8px vertical bar (space-xs) on the leading edge of buttons, panels, testimonials and the hero trust line; a 4px horizontal rule on card bottoms or tops.
- Shadows: none on any element `[read]`.
- Blur: 8, 16, 40px backdrop blurs on floating cards. Flagged.
- Overlays: 60% black over the fixed film; per-section black gradients; a dim overlay behind the open drawer.
- Z stack `[read]`: film -2, grid lines and scrims -1, content 1, hero 2, view-transition nav group 100, nav 101.
- Images: 16:9 in cards, 2.7:1 for the carousel graphic, 3:2 logo cells, cover-cropped films. Images do not animate on their own; they move with their card.

## Graphics and motifs

- The five-column hairline frame behind every section.
- The 8px red leading bar.
- Film grain: an SVG `feTurbulence` filter (`baseFrequency 0.8`, grayscale) at 40% over the background.
- Large type used as a window (statement mask).

## Iconography

A tiny custom set: one arrow (used as a CSS mask, recolorable), a chevron made by rotating one stroke (45 and -135 degrees), a play triangle, a check, a spinner. Stroke-based, 1.5px strokes at 10px size, square ends `[inferred]` from the rendered glyph. Arrow size 10px at 1920, always to the right of the label. Not a known library `[inferred]` from the file names and one-off shapes.

## Illustration

Almost none. The carousel uses one wide product graphic repeated on all four tiles. Everything else is photography and film.

---

# Tier three

## Brand behavior

The wordmark sits at the left gutter, vertically centered in the nav, 24px tall at 1920 (13px at 1126, 20px on phone) `[read]`, with clear space equal to the gutter on the left and a full column before the menu. It never changes size; the nav never hides or shrinks on scroll `[read]`. A small symbol opens the footer; the wordmark scrolls across the footer. Favicons in light and dark SVG, theme color #0a0a0a `[read]`.

## UX patterns

- Every section repeats the two doors (talk, build).
- Forms validate on input with delayed error color; success changes the button label.
- Loading: only the submit spinner. Empty state: none seen. Error: the plain 404 page.
- Accessibility: `lang="en"`, visually hidden copies of split text for screen readers, aria-hidden on split pieces, sr-only labels on icon buttons `[read]`. Missing: skip link, custom focus ring, reduced-motion support; buttons nested in links `[read]`.

## Information architecture

- Primary: Industries (12 pages), Build (3 internal, 10 external), Ecosystem (6), About (5).
- Page types: home, industry landing, hub, list, detail, contact, legal.
- Footer: 4 columns (Industries plus Use cases, Build, Ecosystem, About), then legal, social, credit.
- Sitemap observed: / · /institutions · /enterprises · /consumer-apps · /ticketing · /private-credit · /payments · /real-world-assets · /public-sector · /fan-engagement · /settlement · /capital-markets · /build/developer-hub · /build/validators · /build/resource-hub · /ecosystem · /ecosystem/events · /ecosystem/newsletter · /about/foundation · /about/blog · /about/blog/{slug} · /about/contact-us · /about/press · /legal/*.

## Voice

Short declaratives with a benefit after a colon or a period ("Predictable performance at scale", "Infrastructure you control. Standards you know."). Headings and labels are set in title case in the source and rendered uppercase; buttons are capitalized ("Get In Touch", "Start Building"). Body copy is plain, second person, no exclamation marks.

---

# Effects inventory

| effect | where | trigger | duration | easing | travel | build |
| --- | --- | --- | --- | --- | --- | --- |
| split line drop | every heading and intro | section visible | 1s + 0.4s per line, 0.2s delay | ease-settle | Y -100% in a clip | small script |
| button row drop | hero, statement | section visible | 1s, 0.4s delay | ease-settle | Y -100% - 2px in a clip | CSS alone |
| trust line drop | hero | section visible | 1s, 0.6s delay | ease-settle | Y -100% - 2px | CSS alone |
| side card slide | hero | section visible | 1s, 0.2s delay | ease-settle | X -100% - 2px | CSS alone |
| card rise cascade | industries, stories, news | section visible | 1s + 0.2s per card | ease-settle | Y +100% | CSS alone |
| row slide in | stories, news, testimonials | section visible | 1.5s | ease-settle | X +100% | CSS alone |
| panel rise | playbook | section visible | 1s | ease-settle | Y +50% | CSS alone |
| image lift | builder statement | section visible | 1s | ease-settle | Y + space-3xl | CSS alone |
| section visible toggle | all sections | top edge enters viewport | instant | | | small script |
| button fill wipe | all primary buttons | hover | 500ms | ease-settle-strong | bar 8px to 100% | CSS alone |
| color swaps | links, arrows, fills | hover | 200 to 300ms | ease-settle | | CSS alone |
| tile clip switch | carousel desktop | click, horizontal wheel | 1s | ease-settle-strong | clip-path inset | small script |
| accordion rows | carousel phone, drawer | tap | 1s | ease-settle | grid rows 0fr to 1fr | CSS plus toggle |
| mega menu | nav desktop | hover | 200ms in, 200ms out | ease-settle in, ease-leave out | opacity | CSS alone |
| menu link cascade | nav | hover or open | 500ms, 25ms stagger | ease-settle | Y -100% | CSS alone |
| drawer rows | nav phone | open | 0.5s + 0.1s per row | ease-settle | X -(100% + 8px + index x 50%) | CSS plus toggle |
| hamburger to cross | nav phone | open | 300ms, middle 150ms | ease-settle | rotate 45, Y 8px | CSS alone |
| floating label | forms | focus, filled | 500ms | ease-glide | Y -120%, scale 0.75 | CSS alone |
| valid check | forms | valid | 300ms after 250ms | ease-glide | opacity | CSS alone |
| select grow | contact | open | 750ms | ease-glide-strong | height | small script |
| page transition | all pages | navigation | 1s | ease-settle | old scale 0.9 and 50% opacity, new Y +100% | CSS alone |
| smooth wheel | desktop | wheel | 0.8s | Lenis default | | library |
| anchor scroll | desktop | anchor click | 2s | expo-out | | small script or library |
| statement fill loop | statement film | section visible | 6s loop | ease | color | CSS alone |
| film in type | statement film | in view | 15s loop | | | CSS plus video |
| background film | whole page | load | 15s loop | | | video |
| logo marquee | logos, footer | always | 49s loop | linear | X -100% | CSS alone, do not copy |
| scramble text | old headings | visible | per char | steps | | do not copy |
| video facade | stories | click | instant | | | small script |

---

# Rebuild note

**Swap freely**

- hurulab's colors, both typefaces and the logo.
- The dark ground; map the roles (page, raised, sunken, hairline, accent, text levels) onto hurulab's palette.
- Photography and film, the grain, the red.
- The mega menu, marquees, frosted cards, pills, chat widget and gated form.
- Copy length inside the ranges given in each section.
- Swiper, htmx, anime.js and Lenis: replace with plain CSS and small scripts.

**Do not touch**

- The 1920 design canvas scaling down to a 1025 floor, and the fixed, larger values at 1024 and below.
- The 8-based spacing scale with alternating x1.5 and x1.33 steps, and its use for padding, gap and margin alike.
- The five-column hairline frame and content that snaps to it (4fr/1fr hero, one-column side cards, 8px seams between cards).
- One section, one `visible` class, replayed on re-entry; all motion is CSS transitions from that class.
- Entrances from the edge of the element's own box inside a clip, not fades.
- Cascades by lengthening duration (+0.4s per line, +0.2s per card) from a shared start, not by delaying.
- ease-out-cubic (0.2, 0.6, 0.35, 1) for arrivals and hovers, ease-out-quart for wipes and tiles; 1s arrivals, 0.2 to 0.5s responses.
- The 200, 400, 600ms hero order: text, then actions, then proof.
- The button: 4.5:1 height to font size, text left, arrow right, an 8px leading bar that wipes to full width in 500ms.
- Square corners, 1px hairlines, no shadows; radius only on big feature panels.
- Headings in the heaviest weight with 0.85 line height and -0.03em tracking, two-tone split where it helps.
- Page transition: old page to 0.9 scale and 50% opacity while the new one slides up a full screen over 1s, nav untouched.
- Hero at one full screen, text top and actions bottom.
