# mindmarket.com spec

Captured 2026-09-29 from the live site in Chrome. Method tags: `[read]` DOM, computed style, CSS rule, script source or element box; `[watched]` seen at runtime (live Animation objects created by a real state change, or the rendered page); `[inferred]` reasoned, with the reason given.

Measurement method: boxes at 1440 and 390 were read with `getBoundingClientRect` inside same-origin iframes sized exactly 1440x900 and 390x844. The live tab ran at 1126, 752 and 680 wide. Root font-size is fluid, so at 1440 `1rem = 17px`, at 1000 to 1199 `1rem = 15px`, at 390 `1rem = 16.08px` `[read]`.

## Urls walked

| Url | Purpose |
|---|---|
| https://mindmarket.com/ | home, first screen, full scroll, menus, performance |
| https://mindmarket.com/customer-led-strategy | the "Which decision is in front of you?" section, dialogs, reveal system |
| https://mindmarket.com/customer-led-strategy/growth | detail page the decision dialogs pull from |
| https://mindmarket.com/services | inner page, red hero, tilted listing |
| https://mindmarket.com/methodology | index page, yellow hero, card grid |
| https://mindmarket.com/methodology/focus-groups | detail page of the methodology index (list and detail pair) |
| https://mindmarket.com/sectors | index page, blue hero |
| https://mindmarket.com/pricing | interactive study builder, pricing sections |
| https://mindmarket.com/network | pink "deluxe" hero |
| https://mindmarket.com/about-us | about page |
| https://mindmarket.com/articles | listing with filters (index) |
| https://mindmarket.com/articles/international-focus-groups-guide | article detail |
| https://mindmarket.com/contact-us | form page |
| https://mindmarket.com/404-probe-xyz | error state |
| https://unpkg.com/@rive-app/canvas-lite@2.31.5/rive.wasm | size check of the animation runtime the site loads |

## Loader note

- What it covers: a full-viewport panel in page-ground beige `#f5f1e4` (`#e0dbce` on about, 404, page, article, articles and contact templates) at z-index 300, height `100% + 50px` so its bottom corners can be rounded `[read]`.
- Where it runs: only at 700px and wider and only on hover-capable devices. On phones and touch it is `display: none` and the script jumps straight to the loaded state `[read]`.
- Timeline (GSAP 3.13 with DrawSVGPlugin) `[read]`: logo svg rises from `y: 15%` and fades in over 1s `power2.inOut`; the logo path draws 0 to 100% over 1s `power1.inOut` at the same time; two shadow paths fade in at 0.39s and 0.58s over 0.25s; a dot scales `scaleY 0 to 1` over 1s `elastic.out(1, 0.3)` starting 0.25s before the draw ends; the svg lifts to `y: -15%` over 1s starting 0.45s before the end. At 1.25s the `is-first-loaded` class lands.
- The lift: on `is-first-loaded` the panel's `clip-path` goes from `inset(0 0 0 0 round 0 0 50px 50px)` to `inset(0 0 100%)` over 1s `--ease-primary`, a curtain wiping upward with rounded bottom corners `[read]`.
- Total time covered: 1.25s hold plus 1s wipe, 2.25s after the script executes on desktop `[read]`. A store sets `--preloader-delay: 1.5s` that the hero character waits on `[read]`.
- What it hides: nothing that needs loading. The hero text is already server-rendered behind it. The loader exists to stage the entrance: the desktop menu bar is parked `translateY(-100% - 1rem)`, the hero lines are parked 80px low, and the hero Rive character waits 1.65s `[read]`.
- The moment it lifts: green hero, headline and tagline rising 80px (tagline first, title 100ms later), menu bar dropping in after 200ms, illustrated character popping in with an elastic bounce `[read]`.
- For hurulab: show the green-equivalent hero immediately with text at rest, and run the same rise, drop and pop sequence on first paint without a curtain.

## Performance note

- First screen readable: on desktop the text is in the HTML (62KB gzip, 317KB decoded) and paints when the Inter woff2 arrives, but the preloader covers it until about 2.25s after scripts execute `[read]`. On phones there is no curtain, so the first screen is readable at first paint `[read]`. DOMContentLoaded was 383 to 389ms and load 1426ms on a warm connection in the live tab `[read]`; first contentful paint could not be timed because the tab was backgrounded during capture.
- Downloaded before DOMContentLoaded in a warm iframe load: 98 requests `[read]`.
- Total: 113 to 144 requests per home load; 931KB encoded across resources in the iframe load `[read]`, plus the Rive wasm runtime (660KB decoded, gzip on unpkg) `[read]`.
- Largest files `[read]`: `rive.wasm` 660KB decoded; menu dropdown photos 77KB, 66KB, 46KB, 28KB, 24KB webp (loaded eagerly though they sit in hidden dropdowns); home HTML 62KB; 14 `.riv` character files totaling 312KB (hero_animation 44KB, soccer 34KB, unicycle 28KB, basketball 27KB, binoculars 24KB, climber 23KB, gamer 23KB, scientist 23KB, shrug 21KB, composer 17KB, trumpeter 16KB and 12KB, pop_up_girl 15KB, cursor 4KB); JS: rive runtime 114KB decoded, swup app 82KB decoded, GSAP 68KB decoded.
- Fonts: 3 files, Inter 400, 500, 700, 23.7KB, 24.3KB, 24.4KB, self-hosted, `font-display: swap` `[read]`. The home page requested 400 and 500 only `[read]`.
- Render blocking: none flagged. CSS is inlined in a single `<style>` (166KB decoded on home, 192KB on the strategy page) `[read]`, which inflates every HTML response.
- What costs time: the wasm runtime, 14 Rive files, eager dropdown photos, 166KB of inline CSS repeated on every page. What is free: all motion that is CSS transitions and custom properties.

## Banned patterns found

| Pattern | Where | Verdict |
|---|---|---|
| "Trusted by" logo marquee | home, "Brands that choose MindMarket": three `c-rail` rows of brand capsules scrolling sideways (directions 1, -1, 1; speeds .35, .35, .6 px per frame) `[read]` | do not copy |
| Frosted panel | decision dialog backdrop: page-ground color at 92% with `backdrop-filter: blur(6px)` `[read]` | do not copy the blur; a solid scrim is fine |
| Small label above headings | strategy and pricing pages: `.p-kicker` uppercase 12 to 15px, weight 700, tracking .12em, 70% opacity above every heading ("WHERE THIS GETS USED") `[read]`. Not a pill, but the same role, and it is all caps | do not copy |
| Pill badge | pricing study builder option "Most chosen" `[read]` | do not copy |
| Cursor-following element | the desktop "Get a quote" button holds a Rive face whose eyes track the mouse anywhere on the page (lerp .1) and smiles on hover `[read]`. Not a replacement cursor and not magnetic, but cursor-driven | do not copy the tracking; the idea of a character living in the CTA is transferable |
| Emoji in UI copy | contact page "📅 Book" link `[read]` | do not copy |

Not present: typewriter or rotating headline, particles or node graphs, gradient orbs or mesh, gradient text, sparkle icons, animated stat counters (the numbers are static text; the cards move, the digits do not) `[read]`, chat bubbles, waitlist forms, sticky announcement banner (a cookie consent box sits bottom right), ASCII hero, custom cursor, text scramble, magnetic buttons.

## Libraries

| Library | Version | What it does here | Rebuild with |
|---|---|---|---|
| Astro | 5.17.1 | static pages, per-component scripts `[read]` | plain HTML |
| Tailwind CSS | 4.1.13 | utilities and token layer in `@layer theme` `[read]` | plain CSS tokens |
| Swup | 4 with Parallel, Head, Preload, Scripts, Fragment plugins | page transitions: next page slides over the old one `[read]` | small script (fetch and swap) or View Transitions API |
| Locomotive Scroll | 5.0.0 | `data-scroll` in-view classes, scroll-linked `--progress`, parallax speeds `[read]` | small script (IntersectionObserver plus a scroll loop) |
| Lenis | 1.3.17 (inside Locomotive) | smooth wheel scrolling, lerp .1, native on touch `[read]` | optional; native scroll loses little |
| GSAP | 3.13.0 with DrawSVGPlugin, CustomEase | preloader, scroll-drawn path, accordion height, character pops `[read]` | CSS for most; path drawing with `stroke-dashoffset` and a small script |
| Rive | @rive-app/canvas-lite 2.31.5 | 15 animated characters, the quote button face `[read]` | library only, or replace with static art |
| nanostores | inline | shared state (scroll, screen, preloader) `[read]` | not needed |
| CookieConsent | 3.1.0 | consent box `[read]` | not needed |

## Tier one: motion

### What this site believes about movement

Everything that appears grows or rises, and almost everything that grows overshoots slightly (`--ease-overshoot`, y2 = 1.33). Surfaces move before their content: a background scales in, then text follows 100 to 250ms later. Scroll is a timeline, not a trigger: the hero shrinks, cards rotate flat, clouds drift and a path draws itself in direct proportion to scroll position. Motion is short (200 to 400ms for UI) and physical, and the only long moves (750ms page slide, 1s curtain, 1.75s character pop) mark big moments. Nothing fades in place without also traveling.

### Load choreography, home, desktop `[read]`

| Order | Element | From | To | Duration | Delay | Easing |
|---|---|---|---|---|---|---|
| 0 | preloader logo | y 15%, opacity 0 | y 0, opacity 1 | 1000ms | 0 | power2.inOut |
| 1 | preloader curtain | full | clipped to top | 1000ms | at 1250ms | `--ease-primary` |
| 2 | hero tagline | translateY 80px | 0 | 800ms | 100ms after 1250ms | `--ease-primary` |
| 3 | hero title | translateY 80px | 0 | 800ms | 200ms after 1250ms | `--ease-primary` |
| 4 | desktop menu bar | translateY(-100% - 1rem) | 0 | 400ms | 200ms after 1250ms | `--ease-primary` |
| 5 | hero illustration (Rive) | scale .75, y 100px, opacity 0 | scale 1, y 0, opacity 1 | 1750ms (opacity 150ms) | 150ms plus 1500ms | elastic.out(1, 0.3) |

Note the order: tagline (the second line) starts first, the title follows. Text is not masked and not faded; it rises 80px while fully opaque, hidden only because the curtain is still lifting. On phones the same classes run immediately `[read]`.

### Scroll reveals `[read]`

| Reveal | Trigger | Hidden state | Motion | Stagger | Runs |
|---|---|---|---|---|---|
| Timeline tile (home) | Locomotive `data-scroll`, `data-scroll-offset="20%"`, IntersectionObserver rootMargin -1px | surface `scale(0)`, text opacity 0 and `translateY(-10px)` | colored surface scales 0 to 1 in 600ms `--ease-overshoot`, white surface same with 200ms delay; title, text, button fade and settle 400ms `--ease-soft-in-out` at 300, 350, 450ms | fixed delays per layer | once |
| Decision cards `.p-reveal` | `data-scroll`, in view | opacity 0, `translateY(28px)`, no transition while hidden | opacity and transform 400ms `--ease-reveal` | `--stagger` 0 to 4 per row times 50ms | once |
| Heavy reveal `.p-reveal.-heavy` | same | opacity 0, `translateY(40px)`, blur 6px | 600ms `--ease-ios` | same | once |
| Comparison table rows | same | opacity 0, `translate(-12px)` | 400ms `--ease-reveal`; green bar on highlighted cell `scaleY 0 to 1` 200ms later | 70ms per row | once |
| Article card tags | `html.is-ready` | `translateY(-100%)` | 400ms `--ease-primary`, 300ms delay (100ms and 150ms for 2nd and 3rd column) | per column | once per load |
| Wavy underline | `data-scroll-repeat`, in view | animation paused | mask scrolls 64px (144px on large) every 3s linear | none | every time in view |
| Manifesto words (strategy) | scroll position | words at 55% charcoal, weight 400 | each word swaps to charcoal 500 when its share of progress passes; progress = element top moving from 85% to 25% of viewport | per word, scroll-mapped | reversible |
| Illustrated characters | IntersectionObserver default | scale .75, y 100px, opacity 0 | 1750ms elastic.out(1, 0.3), 150ms delay | none | once |

No text is split into lines or characters anywhere. The one word-level effect is the manifesto swap above `[read]`.

### Scroll-driven motion `[read]`

| Effect | Scroll consumed | What is pinned | What moves | Mapping |
|---|---|---|---|---|
| Home hero recede | 100svh (sticky inner is 200svh tall inside a 100svh block) | hero content | content scales 1 to .8; charcoal overlay 0 to 40% | `--progress` 0 to 1 across the hero; the next section (rounded top, z 1) slides over it |
| Illustrated hero recede (inner pages) | 100vh (header 200vh, sticky) | header text | scales 1 to .75 from top center, opacity 1 to 0 | `--progress` linear |
| Scroll-drawn path (home) | the whole journey block, offset -27% to 100% | nothing | desktop: main path drawSVG 5% to 100% over the first 90% with `--ease-path-draw`, secondary path 0 to 100% linear, shadow fades in at 95% | GSAP timeline progress set from scroll progress |
| Journey tiles | none | nothing | parallax speed .1 | Locomotive speed |
| Scattered illustrations | none | nothing | parallax speeds .02 to .15; two images rotate and translate with `--progress` (for example x -10 to 10px, y -10 to 60px) | linear |
| Cloud drift (journey end) | the end block | nothing | five clouds translate from `--start` to `--end`: 200 to -200px, 300 to -300px, 300 to -100px, 100 to -300px, 200 to -200px | linear, desktop only |
| Green hills | none | nothing | back layer speed -.15, middle -.075 | parallax, off below 1000px |
| Numbers stack (cards) | each card's own scroll, offset 0% to 40%, position start | each card sticks at `menu-bar + 10vh - fluid-lg`, pushed down `index * fluid-xl` | card `translateY 20% to 0`, rotate -10deg or 10deg (alternating) to 0 | `--progress` per card |
| Numbers stack (text column) | card list length | heading and paragraph sticky at `menu-bar + 10vh`, min-height 50vh | nothing | sticky |
| Inner parallax image | none | clipped frame | image 4em taller than frame, speed -.1 | parallax, off on touch |
| Tilted listing (services) | each row | nothing | visual `ty 80% to 0`, rotate plus or minus 10deg to 0; image inside scale 1.2 to 1, rotate plus or minus 4deg to 0 | `--progress` |
| Decision case (strategy) | the steps column | visual column sticky at `safe-header + fluid-md` | active clip crossfades: opacity 0 to 1, blur 2px to 0, `translateY 12px scale .97` to rest, 250ms `--ease-reveal` | IntersectionObserver rootMargin -20% 0 -50%, highest ratio wins |
| Anchor nav (strategy) | whole page | bottom-centered bar, sticky | slides up from `100% + gutter` once the hero is 85% scrolled away; active link 100%, others 40% | position |
| Mobile strategy hero | 70% of hero height | nothing | header content `translateY 0 to -20px`, scale 1 to .92, opacity 1 to -.15 | `--hero-out` from scroll |

### Smooth scroll `[read]`

Locomotive Scroll 5.0.0 wrapping Lenis 1.3.17 with defaults: lerp .1, wheelMultiplier 1, touchMultiplier 1, smoothWheel true, syncTouch false (touch devices scroll natively), anchors false. Scroll stops while a dialog is open. Anchor links on the strategy page scroll with duration 1.2s and an offset equal to `--spacing-safe-header`. Step markers scroll with duration 1s.

### Page transition `[read]` and `[watched]`

Swup 4 with the Parallel plugin. Watched twice as live Animation objects (home to pricing, pricing to home):

1. Click: the burger or menu button fades a loading spinner in over 300ms `cubic-bezier(.4,0,.2,1)`; any open menu closes; focus blurs.
2. The page background behind both pages turns `#fbfbf0` over 200ms `--ease-smooth`.
3. Old page: clipped to exactly the viewport slice the visitor was looking at, then scales to .9 and sinks `translateY(10svh)` with opacity 1 to .5, over 750ms `--ease-primary`, transform origin at the viewport center of the old scroll position.
4. New page: starts at `translateY(110svh)` (fully below) and slides to 0 over 750ms `--ease-primary`, on top of the old page.
5. Both move at the same time; nothing stays still except the floating menu bar.
6. Scroll resets to top; smooth scroll re-initializes 850ms after content swap. Back and forward restore the saved scroll position.

What the visitor sees in between: the old page shrinking into a dimmed card while a new card rises over it.

### Menu motion (mobile, the priority) `[read]` and `[watched]`

Open, all confirmed as runtime transitions on a real click:

| Element | Property | From | To | Duration | Delay | Easing |
|---|---|---|---|---|---|---|
| burger lines group | transform | none | rotate(-45deg) scale(.8) | 400ms | 0 | `--ease-overshoot` |
| burger top line | transform | scale(1) | scale(0) translate(1px, 20px) rotate(180deg) | 200ms | 0 | `--ease-primary` |
| burger bottom line | transform | scale(1) | scaleX(0) | 200ms | 0 | `--ease-primary` |
| close cross group | transform | rotate(0) | rotate(45deg) | 400ms | 0 | `--ease-overshoot` |
| cross vertical and horizontal strokes | transform | scaleY(0), scaleX(0) | scale(1) | 200ms | 0 | `--ease-primary` |
| nav wrapper | visibility | hidden | visible | 0 | 0 | none |
| link panel | opacity, transform | 0, translateY(1rem) | 1, 0 | 100ms, 200ms | 0 | `--ease-primary` |
| link panel white surface | transform | scale(.9) | scale(1) | 200ms | 0 | `--ease-smooth` |
| rows 1 to 8 | opacity, transform | 0, translateY(1rem) | 1, 0 | 200ms, 400ms | 50, 100, 150 ... 400ms | opacity `--ease-primary`, transform `--ease-overshoot` |
| contact row | opacity, transform | 0, translateY(1rem) | 1, 0 | 100ms, 200ms | 0 | `--ease-primary` |
| contact row surface | transform | scale(.9) | scale(1) | 200ms | 0 | `--ease-smooth` |
| contact label | opacity, transform | 0, translateY(1rem) | 1, 0 | 100ms, 200ms | 0 | `--ease-primary` |
| yellow character badge | transform | scale(0) | scale(1) | 200ms | 0 | `--ease-smooth` |

Close: every element returns with the same durations and zero delay, all at once; the nav wrapper's visibility waits 200ms so the fade finishes `[watched]`. Accordions inside the menu open with GSAP height 0 to auto and autoAlpha 0 to 1 over 400ms `power4.inOut`, close over 300ms; opening one closes the others; chevron rotates 180deg in 200ms `--ease-overshoot` `[read]`.

What makes it fun: the burger does not just cross, it tumbles (the group rotates -45deg with overshoot while the lines collapse, and a second cross spins in 45deg); rows rise one after another 50ms apart on a bouncy curve, so the list lands like a stack of cards; the panel surfaces grow from 90% behind their content; and the contact row ends with a yellow circle holding an illustrated face that pops from nothing. The whole open sequence completes in 800ms.

### Desktop menu motion `[read]`

- Link hover: a page-ground pill grows behind the label, scale .8 to 1 over 400ms `--ease-overshoot`, opacity over 100ms. Press shrinks it to .9 over 200ms.
- Dropdown (hover opens, mouseleave closes, Enter or Space toggles, Escape closes all, focus opens): panel translateY 1rem to 0 over 200ms, opacity over 100ms; white surface scale .97 to 1 over 400ms `--ease-overshoot`; 12 links rise 1.25rem with 25ms stagger over 400ms `--ease-primary`; the feature photo scales 1.05 to 1 over 600ms `--ease-soft-in-out`; chevron rotates 180deg over 400ms with overshoot.
- Burger button (desktop "more" menu): a green circle shrinks to 0 while a beige circle grows to 1.05; the dots icon spins out (scale 0, rotate 90deg) and a cross spins in (scale 1, rotate -180deg) over 200ms with overshoot.
- Quote button: a yellow layer grows from the bottom center, `scale(.5, 0)` with a 50% top radius to `scale(1)` with a 10px radius over 250ms `--ease-primary`.

### Motion tokens

See `mindmarket.com-tokens.md`, groups "Motion durations", "Easing curves", "Delays and staggers", "Travel distances", "Scale steps" and "Scroll behavior".

### Reduced motion `[read]`

- A store tracks `(prefers-reduced-motion: reduce)` and looping videos pause under it.
- Strategy pages: reveals keep only a 200ms opacity fade with no delay and no travel; stack cards and tilted visuals lose their transforms; pulse loops and skeleton loops stop; button and card transitions are removed; the case crossfade becomes a 200ms opacity fade.
- Cookie box transitions go to 0s.
- Not covered: the home preloader, hero rise, smooth scroll, path drawing and page transition have no reduced-motion override in the CSS or scripts read.

## Tier one: layout and spacing

### Raw spacing values encountered, sorted `[read]`

Fixed multiples of the 0.25rem unit (4px at 16px root): 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1, 1.25, 1.5625, 1.875, 2, 2.5, 2.75, 3, 3.125, 3.75, 4, 5, 6, 7.75, 8, 20, 30, 35, 43.75 rem.
Pixel values outside the unit: 5px, 10px, 14px, 15px, 20px, 60px, 250px, 320px, 400px, 480px, 550px, 720px, 800px, 900px.

Proposed scale from those, in unit multiples: 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 11, 12, 15, 16, 20 (4px to 80px). Left out as one-offs: 3.5 and 3.75 (padding on two row components), 6.25 and 7.5 and 12.5 (tile and accordion padding), 31 and 120 to 175 (illustration and max-width values).

Fluid scale for section-level space (resolved) `[read]`:

| Token | Expression | 1440 | 1024 | 390 | Ratio to previous at 1440 |
|---|---|---|---|---|---|
| fluid-xs | clamp(.5rem, .4565rem + .2174vw, .625rem) | 10.6 | 9.1 | 8.2 | |
| fluid-sm | clamp(1rem, .8261rem + .8696vw, 1.5rem) | 25.5 | 21.3 | 16.7 | 2.40 |
| fluid-md | clamp(1.5rem, 1.3261rem + .8696vw, 2rem) | 34.0 | 28.8 | 24.7 | 1.33 |
| fluid-lg | clamp(2rem, 1.8261rem + .8696vw, 2.5rem) | 42.5 | 36.3 | 32.7 | 1.25 |
| fluid-xl | clamp(2.5rem, 2.1522rem + 1.7391vw, 3.5rem) | 59.5 | 50.1 | 41.4 | 1.40 |
| fluid-2xl | clamp(3.5rem, 2.9783rem + 2.6087vw, 5rem) | 85.0 | 71.4 | 58.1 | 1.43 |
| fluid-3xl | clamp(5rem, 3.9565rem + 5.2174vw, 8rem) | 136.0 | 112.8 | 84.0 | 1.60 |
| fluid-4xl | clamp(8rem, 7.3043rem + 3.4783vw, 10rem) | 170.0 | 145.2 | 131.0 | 1.25 |

All fluid values move between 320px and 1240px viewports (computed from min and max over slope at 16px rem) `[read]`. Measured section padding at 1440 is 136px and at 390 is 84px, matching fluid-3xl `[read]`.

### Grid `[read]`

- Columns: 6 below 1000px, 16 from 1000px.
- Gutter and outer margin: both 20px at every width.
- Container: full width, `padding-inline: 20px`, no max width in practice.
- Column width at 1440: 68.75px; at 390 (6 columns): 41.67px `[inferred]` from (width - 40 - gutters) / columns.
- Content lane: most sections span columns 2 to 15 (14 of 16). At 1440 this puts content at x = 109px and width 1223px, a 7.6% inset each side (109/1440) `[read]`.
- Asymmetric splits: 7fr : 5fr (heading block vs intro), 5fr : 7fr (sticky visual vs steps), 4fr : 8fr (programme card), 1 : 1 with a one-column gap `[read]`.

### Breakpoints and what reflows `[read]`

| Width | Change |
|---|---|
| below 400 | "Get a quote" hidden in mobile bar; logo width 26.5 units instead of 32 |
| 500 | mobile bar gaps widen from 2.5 to 3 and 4 units |
| 700 | preloader appears (with hover); decision cards go 2 columns; wave underline switches to large size; tilted listing goes 2 columns |
| 1000 | 6 to 16 columns; mobile menu to desktop menu; hero becomes a sticky 200svh scroller; radius-lg 35 to 50px and radius-md 15 to 20px; decision cards 5 columns with equal row heights; cards switch from horizontal rows to tall tiles; tables become real tables; parallax and scroll transforms turn on |
| 1000 to 1199 | root font-size fixed at 15px |
| 1200 | desktop menu starts at the one-column inset instead of 1rem |
| 1400 | tile padding grows to 12.5 units; menu link padding grows |
| 1600 | menu inset moves to two columns |
| 2000, 2400 | root font-size 19px, 21.5px |

At 768 (inside 700 to 999) the site is the phone layout with 2-column card grids and tablet illustration offsets `[read]`. Bounding boxes at 1024 and 768 were not measured; values at those widths above come from the CSS rules.

### Section rhythm, home `[read]`

| Section | Ground | 1440 height | vh at 900 | 390 height | vh at 844 | Corners |
|---|---|---|---|---|---|---|
| Hero | green | 900 | 1.00 | 879 | 1.04 | none (pinned, sits under next) |
| Journey | page-ground beige | 5296 | 5.88 | 4857 | 5.75 | top 50 (35) |
| Closing callout | green | 1202 | 1.34 | 744 | 0.88 | bottom 50 (35) |
| Audience image | photo | 857 | 0.95 | 232 | 0.28 | all 50 (35) |
| Numbers | page-ground beige | 2466 | 2.74 | 1856 | 2.20 | all 50 (35), z 10 |
| Articles and brands | sunken beige | 2109 | 2.34 | 1212 | 1.44 | all 50 (35) |
| Footer | yellow | 901 | 1.00 | 1275 | 1.51 | all 50 (35) |

Separation: never a line. Every section is a rounded slab; slabs butt against each other and the rounded corners reveal the main background (`#f5f1e4` on the home template) behind them. The hero and journey overlap: the journey slides over the pinned hero. The journey ends with green hill illustrations whose color equals the callout green, so the journey visually melts into the callout; the callout then rounds off its bottom.

Whitespace is generous at section edges (136 to 170px) and tight inside components (10 to 34px). The rhythm breaks on purpose in the journey (5.9 viewports of mostly empty beige with scattered drawings and a winding path) and in the display-size closing lines.

Text alignment: centered column for hero, callout and brands title; everywhere else text starts at column 2 and runs in a left-aligned lane with a measured max width (480, 560, 600, 720px) `[read]`.

## Tier one: the argument (home)

1. Hero: the claim in six words, human and global, nothing else on screen.
2. Journey intro: one 35-word paragraph saying what they do, one button.
3. Journey tile 1, "No more chaos.": the visitor's problem, with a link to services.
4. Journey tile 2, "One brief. One team.": how they work, link to methodology.
5. Journey tile 3, "Speak their language.": expertise by sector.
6. Journey tile 4, "Global, for real.": reach.
7. Closing callout, "Ready when you are!": the ask, one button, three short proof lines.
8. Audience image: the people behind the claim.
9. Numbers: three proofs (60+, 400, 50+).
10. Articles: evidence of thinking.
11. Brands: social proof (banned for hurulab).
12. Footer, "Let's Connect": second ask with addresses.

The page moves from claim, to the visitor's pain, to method, to proof, to ask, and asks twice: once at the emotional peak right after the journey, once at the end. The path drawing through the four tiles makes the argument literal: the visitor is walked from problem to reach.

## Tier one: section by section

Boxes are `x, y, width x height` from the section's top left. Carry column: which hurulab part the section could hold.

### Navigation, mobile (below 1000px)

Purpose: a floating white bar, and a menu that opens as floating white panels over the page with no scrim.

DOM skeleton `[read]`:
- c-menu-mobile (fixed, full viewport, 1rem padding, pointer-events none)
  - div bar (white, radius 10)
    - a logo (sr-only text, icon, wordmark)
    - div cta
      - a "Get a quote" (hidden below 400px)
      - div
        - button burger (green circle)
          - span default icon (2 lines)
          - span close icon (2 strokes)
        - div loading spinner (fades in during page transitions)
  - div nav (absolute, top = bar + 1.25rem, clip-path rounds the top corners, visibility hidden)
    - div nav inner (scrollable)
      - ul list (white panel surface as ::before)
        - li x8 (hairline between rows): a link, or div accordion (button with label and chevron, div content with ul of links and a "See all")
      - a contact row (white panel surface, label "Contact", yellow round badge with illustrated face)

Boxes at 390 `[read]`: bar 16, 16, 358 x 60 (padding 8, 8, 8, 12); logo 149 x 27 (mark 32 x 27); burger 40 x 40 at x 326; nav starts at y 80 and fills to the bottom; list panel 358 x 499 with 16px padding; row 326 x 57 (padding 14 top and bottom, 12 right); label 24.4px, line-height 1.2, tracking -.06em; chevron 14px; contact row 358 x 64 at y 603 (padding 8, 8, 8, 16), badge 48 x 48. Gap between list panel and contact row: 8px `[read]`. Screen check at 680 wide showed the same stack with "Get a quote" as a beige chip beside the green burger `[watched]`.

Content shape: 8 top-level items (3 with sub-lists of 12, 12 and 10 links), 1 contact row.

Carry: navigation. Take all of it. Leave the character art (use hurulab's own mark or a simple arrow in the badge).

### Navigation, desktop (1000px and up)

DOM skeleton `[read]`:
- c-menu-desktop (fixed, top 1rem, left and right one column inset from 1200px)
  - nav bar (white, radius 10, height 4rem)
    - a logo
    - div inner
      - ul list
        - li item x6 (link pill with label and chevron, dropdown)
        - li item "more" (round button, dropdown)
  - c-button-quote (separate white block, same height, radius 10)

Boxes at 1440 `[read]`: container 109 to 1332; bar 1010 x 68 (padding 0 10.6 0 17); gap to quote block 20; quote block 193 x 68 with a 40 x 40 face; links 47px tall, 17px side padding, label 18px; round button 43 x 43. Dropdown: full bar width, 8.5px below the bar; three-column grid, 17px padding; column 1 a charcoal photo card 314 x 365 (photo ratio 284:330, label bottom left, white 32px arrow circle bottom right); columns 2 and 3 a two-column link list, 12 links at 18px, 31px rows.

Behavior: hidden above the viewport until first load; stays fixed while scrolling (no hide on scroll) `[read]`. Current page link keeps the beige pill.

Carry: navigation at desktop. Leave the photo card if there is no image to put there.

### Hero (home)

Purpose: the claim, full screen, flat green.

DOM skeleton `[read]`:
- div hero (scroll progress)
  - div inner sticky (200svh, desktop only)
    - div container
      - div content (centered, gap 3rem)
        - div rise-delay-2 > h1 title
        - div rise-delay-1 > h2 tagline
  - div inner static (mobile, and the desktop duplicate hidden)

Boxes `[read]`: 1440: section 1440 x 900; content 1400 x 352 at y 204, side padding 15vw (20vw on very tall or very wide screens); title 968 x 265 at 139.7px (9.7vw), 3 words on 2 lines; tagline 968 x 36 at 29.8px, 48px below. 390: section 390 x 879; title 350 x 152 at 66.9px; tagline 29px tall, 48px below; content starts at y 260.

Content shape: title 3 words, tagline 3 words, no button, no image in the text block (the illustrated scene sits in the next section and peeks up).

Motion: first-load rise, then scroll recede (see motion).

Carry: hero. Take the flat color field, centered two-line display type, no button, and the recede-under-next-section effect.

### Journey intro and path (home)

Purpose: what they do in one paragraph, then a winding scroll-drawn path connecting four statement tiles, scattered with small drawings.

DOM skeleton `[read]`:
- div journey (beige, top corners 50)
  - div intro (scroll progress)
    - div illustration wrap (pinned, starts 100svh above)
      - div sticky > div illustration > c-rive canvas, img background shape, 2 svg
    - div container > grid > p (35 words), div > a button
    - div ghost spacer
  - div path block
    - div tile holder x4 (absolute, parallax .1) > div tile > div inner > h3, p, div > a button
    - img x24 (scattered drawings, parallax)
    - c-homepage-timeline > svg path (desktop and mobile variants)
    - div end > img cloud x5, img hills x3

Boxes at 1440 `[read]`: paragraph 611 x 214 at x 109, 29.8px; button below at y 361. Illustration 737 x 540 centered. Tiles 513 wide (6 of 16 columns, max 800), heights 425 to 450: tile 1 right-aligned at x 819, y 1207; tile 2 left at x 109, y 1851; tile 3 center-left at x 464, y 2770; tile 4 right at x 819, y 3918. Tile padding 53px; title 40.4px; text 20.2px, 35 to 47 words; button 66 tall. Path svg 1498 wide (bleeds 2vw each side). End block 60vw tall with hills at the bottom.

Boxes at 390 `[read]`: tiles full lane (350 wide, 366 tall), title 35.4px, text 18.6px; paragraph 27px.

Content shape: 1 paragraph of 35 words; 4 tiles each 3 to 4 word title, 35 to 47 word text, 1 to 2 word button.

Carry: the worked example (four stages of the espresso bar as tiles along the path) or how we work (seven steps is too many for this pattern; four to five fits). Leave the scattered character drawings unless hurulab has its own.

### Closing callout (home)

Purpose: the ask.

DOM skeleton `[read]`:
- c-deluxe-callout (green, bottom corners 50, padding fluid-4xl)
  - div container > grid > div (columns 2 to 15)
    - p display "Ready when / you are!" (centered)
    - div (centered column, gap 1.5rem): p heading-xs (27 words), a button
    - div three-column row of proof lines (hidden below 1000px)
  - div character lane (left 56%, pinned, desktop only) > c-rive (starts translateY 100%)

Boxes at 1440 `[read]`: section 1440 x 1202; display 1223 x 265 at 139.7px; paragraph 595 x 143 at 29.8px; button 195 x 66; proof row at y 1009, three 394px columns at 18px.

Behavior: hovering the button slides a character up from below the section edge to 12% over 300ms `--ease-smooth`; leaving slides it back `[read]`.

Carry: the ending, and Contact Us (button opens email). Take the hover-reveals-a-friend idea with hurulab's own illustration, or drop the character.

### Audience image (home)

Purpose: a breather showing people.

DOM skeleton `[read]`:
- div frame (ratio 2268:1350, radius 50, overflow hidden)
  - c-inner-parallax > picture > img (front people cut-out)
  - c-inner-parallax > picture > img (background)
  - svg x2 (decorative, parallax -.05)

Boxes `[read]`: 1440 x 857; 390 x 232. Two images layered, each parallax -.1.

Carry: none required; a hurulab photo or illustration band could sit between the ending and contact, or be dropped.

### Numbers stack (home, also strategy page)

Purpose: three proofs that stack as you scroll.

DOM skeleton `[read]`:
- div stack section (beige, radius 50, padding fluid-3xl top, fluid-4xl bottom)
  - div container > grid > div > div grid (14 columns)
    - div content (columns 1 to 8) > div sticky > h2 (p with one wavy-underlined word), div > p (28 words)
    - div list (columns 10 to 14) > div item x3 (sticky, progress) > div card > div icon wrap > span icon, p stat, p description

Boxes at 1440 `[read]`: heading 690 x 230 at 80.8px (7 words); text 355 x 113 at 18px; cards 424 x 550, radius 50, padding 34; stat 144px (10vw on screens 860px tall or more); description 20.2px, 13 to 14 words; icon 60px circle top right. Cards alternate white with blue text, green with white text, red with white text.
At 390 `[read]`: heading 46.6px, 350 wide; cards 350 x 400, padding 24.7; stat 105px (27vw).

Carry: the problem (three things people already believe about AI as three stacked cards) or what it costs (three price tiers). Take the sticky left heading with right-side stacking cards. Fix the contrast (see color).

### Featured articles (home)

Purpose: editorial proof.

DOM skeleton `[read]`:
- div (sunken beige, radius 50) > div featured (16-column grid)
  - ul list (columns 2 to 15, 4 columns) > li x4 > div card > div image frame (radius 20) > div tags (white pills), c-dato-image; div content > h3; a overlay link

Boxes at 1440 `[read]`: item 1 spans 2 columns and 3 rows, image ratio 638:916, title 29.8px; item 2 spans 2 by 2, image 601 x 515; items 3 and 4 291 x 249 images, titles 20.2px clamped to 3 lines. Captions sit in an 80px band under each image. At 390: a sideways snap scroller, items 324 wide (14 of 16 columns).

Carry: none directly. The asymmetric bento (one tall, one wide, two small) could hold the nine services if images exist.

### Brands (home)

Logo marquee. Banned. Leave it.

### Footer (all pages)

Purpose: the second ask, addresses, links.

DOM skeleton `[read]`:
- footer (yellow, radius 50, min-height 100svh, space-between column)
  - div container > grid: div (p 36 words, a button), nav (2 columns of links)
  - div container > grid: p display "Let's / Connect" (second word with animated wavy underline), div contact (offices, email); bottom row: copyright, cookie settings, LinkedIn

Boxes at 1440 `[read]`: 1440 x 901; intro 335 wide at 20.2px; display 139.7px; contact column 335 wide at x 908, 18px text at 60% charcoal with names at 100%. At 390: 1275 tall.

Carry: Contact Us. Take the full-height color slab, the display-size two-word invitation with the moving underline under the second word, and the email link. Leave the office list if hurulab has one location.

### Decision section, "Which decision is in front of you?" (strategy page, the priority)

Purpose: let a visitor find their own situation among ten, then read the answer without leaving the page.

Placement: a beige-400 rounded section (radius 50, padding 136 top and bottom at 1440, 84 at 390) inside a white rounded page panel, preceded by a white section and followed by a white section `[read]`.

DOM skeleton `[read]`:
- section (beige, radius 50)
  - c-cls-decisions
    - div container > grid (6 or 16) > div (columns 2 to 15)
      - div head grid (7fr 5fr, items aligned to bottom, column gap one grid column, row gap fluid-md)
        - div: p kicker, h2
        - div (max 480px): p intro
      - ul cards (1 column, 2 from 700px, 5 from 1000px with equal row heights; gap 20px; margin-top fluid-lg)
        - li reveal x10 (style `--stagger: 0..4` repeating per row)
          - a card (opens dialog; plain link to the detail page when modifier keys are held)
            - span label
            - span question
            - div small button: hover icon, label "Read", default icon
      - p follow-up (max 720px, margin-top fluid-lg)
      - div > a primary button "Tell us the decision"
    - dialog x10 (one per card)
      - div close (fixed top right) > button round
      - div scroll (fixed full screen, overflow auto)
        - div panel (beige tray, 1.5-unit padding, radius 20, max 900)
          - div core (white, inner radius 20 minus tray)
            - header: p kicker, h3, p answer (green 6px bar on the left)
            - div body (filled by fetch from the detail page)
            - footer (beige, radius 10): primary button, secondary button "Read the full page"

Boxes at 1440 `[read]`:

| Element | x | y | w | h | Notes |
|---|---|---|---|---|---|
| component | 0 | 0 | 1440 | 864 | inside 1136 tall section |
| kicker | 109 | 0 | 673 | 21 | 14.9px, 700, tracking .12em, 70% |
| heading | 109 | 34 | 673 | 153 | 80.8px, line-height .95, 7 words on 2 lines |
| intro | 851 | 45 | 480 | 143 | 29.8px, 27 words, bottom aligned with heading |
| card grid | 109 | 230 | 1223 | 450 | 5 columns of 228.5, 2 rows of 214.8, gap 20 |
| card | 109 | 230 | 229 | 215 | white, radius 10, padding 21 21 17 |
| card label | +21 | +21 | 186 | 21 | kicker style |
| card question | +21 | +55 | 186 | 97 | 20.2px, 4 lines max, grows to fill |
| card button | +21 | +173 | 186 | 24 | 14.9px label, 11px arrow, 72% charcoal |
| follow-up | 109 | 722 | 720 | 50 | 20.2px |
| primary button | 109 | 798 | 261 | 66 | green icon on white |

Ratios at 1440: card 229:215 (1.07:1, nearly square); heading to intro columns 7:5; card padding to question size 21:20.2; heading to card question 4:1 in size.

Boxes at 390 `[read]`:

| Element | x | y | w | h | Notes |
|---|---|---|---|---|---|
| component | 0 | 0 | 390 | 1692 | in 1860 tall section, padding 84 |
| kicker | 20 | 0 | 350 | 17 | 12.2px |
| heading | 20 | 29 | 350 | 89 | 46.6px |
| intro | 20 | 143 | 350 | 146 | 24.4px, stacked under heading |
| card grid | 20 | 322 | 350 | 1158 | 1 column, gap 20 |
| card | 20 | 322 | 350 | 100 | row layout: text left (286 wide), arrow right (12 wide), padding 16 16 16 20; "Read" label hidden |
| card question | 40 | +37 | 286 | 47 | 18.6px, 2 lines |
| follow-up | 20 | 1513 | 350 | 93 | 18.6px |
| primary button | 20 | 1630 | 238 | 62 | |

Content shape `[read]`: kicker 3 words; heading 7 words; intro 27 words; 10 cards each with a 1 to 3 word label and a 5 to 10 word question; follow-up 25 words; button 4 words. Each dialog: kicker, 5 to 10 word title, one 40 to 60 word answer paragraph, a body fetched from the detail page (4 subheadings, 451 words in the growth example), two buttons.

What moves `[read]`, dialog open `[watched]`:
- Cards reveal on entry: 28px rise and fade, 400ms `--ease-reveal`, staggered 0, 50, 100, 150, 200ms across each row of five, both rows starting together.
- Card hover (fine pointer): lifts 4px over 200ms `--ease-reveal`; the small "Read" button's label slides right while its arrow jumps from right to left (see buttons). Touch press: scale .985 over 120ms `--ease-ios`.
- Card focus: 2px charcoal outline, offset 2px.
- Click: smooth scroll stops; the dialog opens with `showModal`; dialog fades 0 to 1 over 200ms `--ease-reveal` while its panel grows from .97 to 1 (seen at 60ms: panel scale .97, dialog opacity 0) `[watched]`; the backdrop fades in (frosted, banned).
- Body loading: three skeleton bars (92%, 78%, 60% wide, 14px tall, radius 8) pulse opacity 1 to .45 over 1.2s, staggered 120ms, until the fetched sections arrive; on failure a one-line fallback.
- Close: close button, Escape, or a click outside the panel; focus returns to the card that opened it; smooth scroll resumes.
- Dialog boxes at 1440 `[read]`: panel 873 wide (max 900) centered, 51px from the top, tray 6.4px beige; core padding 59.5 85 42.5; title 53.1px; answer 20.2px with 21px left padding for the bar; body 18px; footer 105 tall, beige, radius 10. Close button 51px circle 17px from the top right.

Carry: what we do (nine services). Nine fits as a 3 by 3 grid on desktop (or 5 plus 4), a one-column list of rows on phones, each opening a panel with the fuller description, and a closing button that opens email. Take the whole anatomy, the row-to-tile switch at 1000px, the stagger, the lift, and the in-page dialog. Leave the uppercase kicker and the frosted backdrop.

### Other strategy page sections (reference)

| Section | Anatomy | Ground | Carry |
|---|---|---|---|
| In one paragraph | kicker, manifesto paragraph with word-by-word scroll highlight | white | the problem intro |
| The problem | kicker, heading, two-column text and image rows (7fr 5fr, image 5:4) | white | the problem |
| Who this is for | tiles with a small character or 96px round photo and 20px text | white | none |
| How it works, "The Decision Case" | 5fr 7fr: sticky square visual (max 400) with step dots below; steps column with 44px numbered circles on a 2px connector line, each step at least 30svh | white | how we work (seven steps), the discovery phase |
| Programmes, "Three ways to listen" | three white cards (radius 20, 4fr 8fr, looping clip left, text right) | beige | what it costs |
| Keep listening | live trace graphic in a beige tray | white | none |
| How is this different | sticky intro 5fr, comparison table 7fr with a green highlighted column | beige | what it costs or the problem |
| Our scope | two lists with round markers, green filled "we do", red outlined "we don't" | white | the discovery phase |
| The deliverable | stacked paper cover graphic (two rotated sheets behind a white page) and numbered parts list | white | the discovery phase output |
| Questions | details accordions on sunken beige, 5px apart, plus icon rotating 90deg | white | none, or the ending |
| Full-screen image | 100vh, max 1200, radius 50 | photo | none |
| Callout | beige slab, display heading, button, character | beige | the ending |

### Inner page heroes (reference)

Each top-level page owns one saturated color for its hero: services red `#ff5c46`, methodology yellow `#f9d314`, sectors blue `#2093ff`, network pink `#f4acff`, home and strategy green `#8ed462` `[read]`. Hero anatomy: small title (heading-xs) over a 9.7vw two-line tagline, a paragraph at column 9, a character illustration bottom right (54% wide, max 820), sticky header that shrinks to .75 and fades with scroll `[read]`.

### Error state

404: same header and footer, a short sentence ("Sorry, this page doesn't exist. but plenty of others do."), a "Go back home" button, and a large illustration anchored bottom right at 60% width, ratio 1187:789 `[read]`.

## Tier one: interaction and components

### Buttons `[read]`

Anatomy: a transparent box with a `::before` surface, a label, and two round icon chips (one at the right, one hidden at the left).

| Part | Value | Ratio |
|---|---|---|
| min height | 3.75rem (63.75px at 1440, 66px with border) | |
| padding | .625rem (10.6px) all sides | padding to font size .59 |
| label | font 18px, side padding .625rem | |
| icon chip | 2.5rem circle (42.5px), arrow 20px, stroke 1.5 | chip to height .67 |
| gap | .5rem | |
| radius | 10px | radius to height .16 |

Variants: primary (surface = the page's color, chip white), secondary (surface white, chip = the page's color), small (no surface, 20px tall, 10px chip, caption size), transparent, rounded (icon only), back (arrow left), icon-left. Color comes from a parent class that sets `--color-primary` to green, yellow, pink, red or blue.

States:
- Hover (hover-capable only): surface scales to 1.05 over 400ms `--ease-overshoot`; label slides right by chip width plus gap; the right chip scales to 0; the left chip scales from 0 to 1 at the left edge. The arrow appears to hop from the end to the start while the words step aside. A parent with `button-hover` triggers the same when the whole card is hovered.
- Press (strategy pages): scale .97 over 160ms `--ease-reveal`.
- Focus (strategy pages): 2px charcoal outline, offset 3px. Elsewhere the browser default ring shows `[read]`.
- Disabled: 50% opacity, no pointer events.
- Touch: hover effects are wrapped in `(hover: hover)`, so on phones the button is static until pressed `[read]`.

### Cards

- Decision card: described above.
- Journey tile: two stacked surfaces (colored at 1px inset, white on top) popping in with overshoot; radius 10; padding 53px at 1440 (12.5 units from 1400px, 10 units otherwise, 6.25 by 5 on phones).
- Stack card: radius 50 (35 on phones), 400 to 550px tall, stat top, description bottom, icon chip top right.
- Article card: image frame radius 20 with white tag pills (caption size, radius 1.5rem) overlaid top left; hover zooms the image to 1.05 and rotates 2deg over 600ms `--ease-smooth`.
- Programme card: white, radius 20, looping clip left at 70% width (max 320).
- Option tile (pricing builder): white or beige when selected, radius 20, 104 to 138px tall.

### Dialog

See the decision section. Panel pattern: a beige tray 1.5 units wide enclosing a white core, both rounded (core radius = outer minus tray). The same tray pattern is used for the live graphic and the paper cover `[read]`.

### Accordions `[read]`

- Menu accordion: GSAP height, 400ms open and 300ms close, one open at a time.
- FAQ accordion: native `details` on sunken beige, radius 10, 5px apart; summary padding 15 10 15 20, title 20.2px (24px from 1400px); 40px white circle with a 12px plus that rotates 90deg on hover and when open (the horizontal stroke collapses to make a minus); content height animates with `::details-content` over 300ms `--ease-primary`.

### Anchor nav (strategy) `[read]`

White bar, radius 10, 60px tall, 24px gaps, bottom centered, sticky. Hidden while the hero is visible; slides up from below. Active section at full opacity, others 40%; the bar scrolls sideways to keep the active link in view.

### Rail (marquee)

Present only in the banned brands section. Mechanism: pattern cloned to fill the width, translated per frame at .35 or .6 px, direction flips with scroll direction and speed rises with scroll velocity `[read]`.

### Forms `[read]`

Contact form: 690px wide at 1440 (columns 7 to 11 of 16, centered). Fields: name, work email (full width), company and a select side by side (335 each), a 250px textarea, a submit button. Inputs 60px tall (64 with border), radius 10, white fill with a white 1px border on beige ground, 16px text, 15px side padding. Labels above, 16px, weight 500, with an asterisk. Placeholders at 50% charcoal and written as examples ("e.g. Jane Doe"). Hover: border turns charcoal. Focus: border and outline charcoal. Errors: red border and red outline, shown only after interaction (`:user-invalid`) or when `aria-invalid` is set, with no transition. Select has a 40px beige circle holding the chevron. Checkboxes and radios are custom: 14 to 16px squares or circles; a beige capsule grows behind the label from .8 to 1 on hover and when checked, 200ms `--ease-overshoot`; the tick scales in over 200ms `--ease-smooth`. The form was not submitted.

### Study builder (pricing) `[read]`

Four numbered questions, each a row of large option tiles (buttons): 4 service options (345 x 104 to 138), 4 market counts (100 x 59), 3 audience options (226 x 104), 2 timing options (345 x 104). Selected tile turns beige. Output is an indicative range. Relevant to what it costs if hurulab wants an estimator.

### Footer

See section walk.

### Tooltips, modals, tables

No tooltips. The only modals are the decision dialogs and the cookie box. One table (comparison) with a highlighted column that collapses to stacked rows below 1000px, the highlighted cell gaining a 4px green left border and right-rounded corners `[read]`.

## Tier one: color (context only)

### Ramps `[read]`, lightness from computed L*

| Ramp | Step | Hex | L* | Neighbor relationship |
|---|---|---|---|---|
| neutral | white | #ffffff | 100.0 | |
| neutral | transition paper | #fbfbf0 | 98.4 | -1.6 |
| neutral | beige-400 (page ground) | #f5f1e4 | 95.1 | -3.3 |
| neutral | beige-500 (sunken) | #e0dbce | 87.5 | -7.6 |
| neutral | beige-600 (strong rule) | #c2bcad | 76.3 | -11.2 |
| neutral | charcoal (text) | #2c2e2a | 18.6 | -57.7 |
| neutral | black | #000000 | 0.0 | -18.6 |
| green | 500 | #8ed462 | 78.3 | single step |
| yellow | 500 | #f5e211 | 88.8 | |
| yellow | 600 | #f9d314 | 85.4 | -3.4 |
| red | 500 | #ff705d | 64.7 | |
| red | 600 | #ff5c46 | 61.1 | -3.6 |
| blue | 500 | #2ba0ff | 64.1 | |
| blue | 600 | #2093ff | 60.2 | -3.9 |
| pink | 500 | #ebc1ff | 83.5 | |
| pink | 600 | #f4acff | 79.6 | -3.9 |

Every accent has at most two steps 3 to 4 L* apart: 500 for fills inside the page, 600 for the hero field. There is no dark step for any accent; charcoal does all dark work. Neutrals are warm (yellow-leaning) beiges. No gradients anywhere in the page system `[read]`.

### Roles `[read]`

| Role | Value |
|---|---|
| page ground (behind slabs) | beige-400 on index, network, page, contact templates; beige-500 on inner and detail templates |
| raised surface | white |
| warm surface | beige-400 |
| sunken surface | beige-500 |
| text primary | charcoal |
| text secondary | charcoal at 72% (small buttons), 70% (kicker) |
| text muted | charcoal at 60% (footer contact), 55% (manifesto words not yet reached), 50% (placeholder) |
| hairline | beige-500, 1px |
| strong rule | beige-600, 1px |
| accent | the page's color (green on home) |
| accent hover | same color, surface grows 1.05 (no color shift) |
| accent pressed | same color, scale .97 |
| focus ring | charcoal 2px |
| selection | green background, black text; on green grounds, white background with green text |
| error | pure red |
| overlays | charcoal 0 to 40% on the receding hero; page ground at 92% behind dialogs |

### Block sequencing

Home: green, beige (journey), green (callout, joined by green hills), photo, beige, sunken beige, yellow. Rule: one saturated block opens, neutral blocks carry the long reading, the saturated color returns at the ask, a second saturated color (yellow) closes. Two saturated blocks never touch except through an illustration bridge.

Strategy page: green hero, then a single white rounded panel inside which sections alternate white and beige-400 (white, white, white, beige, white, beige, white, beige, white, beige, white, white), then a photo, a beige callout, the yellow footer. Rule: white is the reading ground; beige-400 marks every second or third section as a band; the accent is used only for small marks (bars, dots, highlighted column, button chips).

Inner index pages: saturated hero in the page's own color, white panel, beige band, sunken beige listing, beige callout, yellow footer.

Neutral to primary to secondary ratio on the home page, by height at 1440: saturated 23% (hero 900, callout 1202, footer 901 of 13731), neutral 71%, photo 6% `[read]`.

### Contrast `[read]`

| Text on fill | Ratio |
|---|---|
| charcoal on white | 13.71 |
| charcoal on beige-400 | 12.14 |
| charcoal on beige-500 | 9.92 |
| charcoal on green | 7.67 |
| charcoal on yellow-500 | 10.30 |
| charcoal on pink-500 | 8.88 |
| charcoal at 72% on white | 5.06 |
| white on green (stack card) | 1.79, fails |
| white on red-500 (stack card) | 2.72, fails |
| blue-500 on white (stack card) | 2.77, fails |

## Tier one: typography (context only)

Family: Inter, self-hosted woff2 at weights 400, 500, 700, normal style, `font-display: swap`. Renders as Inter on headings and paragraphs `[read]`. The body default weight is 500, not 400 `[read]`.

### Raw sizes encountered at 1440, sorted `[read]`

14.9, 16, 17, 18.1, 20.2, 29.8, 40.4, 53.1, 80.8, 127.5, 139.7, 144 px.

### Scale

| Step | Expression | 1440 | 1024 | 390 | Ratio to step below at 1440 | Line height | Tracking |
|---|---|---|---|---|---|---|---|
| caption | clamp(.75rem, .7065rem + .2174vw, .875rem) | 14.9 | 12.8 | 12.2 | | 1.43 | -.04em |
| body | clamp(1rem, .9783rem + .1087vw, 1.0625rem) | 18.1 | 15.8 | 16.2 | 1.21 | 1.25 | -.04em |
| body large | clamp(1.1563rem, 1.1454rem + .0543vw, 1.1875rem) | 20.2 | 17.7 | 18.6 | 1.12 | 1.25 | -.04em |
| heading-xxs | 1.5rem | 25.5 | 22.5 | 24.1 | 1.26 | 1.2 | -.06em |
| heading-xs | clamp(1.5rem, 1.413rem + .4348vw, 1.75rem) | 29.8 | 25.6 | 24.4 | 1.17 | 1.2 | -.06em |
| heading-sm | clamp(1.625rem, 1.3641rem + 1.3043vw, 2.375rem) | 40.4 | 33.8 | 27.0 | 1.36 | 1.2 | -.06em |
| heading-md | clamp(2.125rem, 1.7772rem + 1.7391vw, 3.125rem) | 53.1 | 44.5 | 35.4 | 1.31 | 1.15 | -.06em |
| heading-lg | clamp(2.75rem, 2.0543rem + 3.4783vw, 4.75rem) | 80.8 | 66.4 | 46.6 | 1.52 | .95 | -.06em |
| heading-xl | clamp(3.4375rem, 2.0245rem + 7.0652vw, 7.5rem) | 127.5 | 102.7 | 60.1 | 1.58 | .95 | -.06em |
| display | clamp(3.625rem, 1.1033rem + 12.6087vw, 10.875rem), 9.7vw from 1000px | 139.7 | 99.3 | 66.9 | 1.10 | .95 | -.06em |
| stat | heading-xl, 10vw on tall desktop, 27vw on phones | 144 | | 105.3 | | .95 | -.06em |

All clamps move between 320 and 1240px `[read]`. The display step is set in vw on desktop so it always fills the same share of the screen: 9.7vw puts a two-word line at 67% of the viewport width `[read]`.

Weights: 500 for everything readable (headings and body), 700 for the kicker, strong words, table highlights and step numbers, 400 for the big stat and for the dimmed manifesto words `[read]`.

Case: sentence case in headings and body; uppercase only on the kicker (banned for hurulab) `[read]`. Title case appears in some navigation labels ("About Us", "Industry Sectors") `[read]`.

Measure `[read]`: section intro 480px at 29.8px (32 characters per line `[inferred]` at .5em average glyph width); body paragraphs 355 to 720px at 18 to 20px (39 to 71 characters `[inferred]`); dialog body 696px at 18px (77 characters `[inferred]`).

Text style catalog by role `[read]`: display (hero, callout, footer), heading-lg (section headings on strategy pages, stack heading), heading-md (dialog title, brands title, FAQ on tablet), heading-sm (tile titles on desktop), heading-xs (section intros, hero small title, menu labels on phones), body large (card questions, tile text, card titles), body (buttons, menu links, footer contact), caption (tags, kicker), stat.

## Tier two: look and feel

Warm, flat, friendly, slightly goofy. Big medium-weight type set tight (-.06em), paper-beige grounds, one loud flat color per page, and hand-drawn characters that pop in with a wobble. It leans on color blocking and motion far more than on photography. Almost nothing has a shadow or a gradient; depth comes from rounded slabs sliding over each other. A visitor can read the whole argument at a glance (six words, four tile titles, three numbers, one ask); the exploring is optional (dialogs, dropdowns, detail pages).

## Tier two: shape and surface

- Radius scale `[read]`: 5, 10, 16, 20, 24, 50, 60 px and 100%. Used: 10 for controls and cards, 20 for image frames and dialogs, 50 for page slabs, 100% for chips and dots. Phones: 15 and 35 instead of 20 and 50. Ratio slab:panel:control = 5:2:1.
- Nested radius rule: inner radius = outer radius minus the tray (dialog, cover, live graphic) `[read]`.
- Hairlines: 1px beige-500 between list rows and under dialog headers; 1px beige-600 between tilted listing rows; 2px connector line at charcoal 8% `[read]`.
- Dividers between sections: none; separation is color change plus rounded corners.
- Shadows `[read]`: none in the page system. The only box-shadow in the CSS belongs to the cookie box (`0 .625em 1.875em` at 30% black). A `--p-shadow: 70 66 54` token exists on strategy pages with no visible use found `[inferred]` from no matching `box-shadow` rule in the rules read.
- Overlays and scrims: hero dim (charcoal 0 to 40%), dialog scrim (page ground 92%, frosted, banned).
- Z-index stack `[read]`: -1 below, 0 base, 1 above, 3 journey tiles, 10 numbers slab, 80 anchor nav, 100 menus, 200 modal, 300 preloader.
- Image treatment `[read]`: frames with radius 20 or 50, `overflow: hidden`; images fade in over 300ms `--ease-primary` once loaded, over a tiny inline blurred placeholder; hover zoom 1.05 with 2deg rotation; inner parallax with the image 4em taller than its frame. Crop ratios: 7:6 (article card), 638:916 (tall feature), 5:4 (row images), 284:330 (menu photo), 2268:1350 (full-width band), 600:430 (full-screen image on phones).

## Tier two: graphics and motifs

- The winding path: a thick stroked line drawn by scroll that links sections `[read]`.
- Scattered small drawings (clocks, folders, planes, sheets) placed beside the path at different parallax speeds `[read]`.
- Colored confetti dots: three 12px circles (yellow, red, pink) at fixed positions in the strategy hero, static `[read]`.
- Wavy underline: an SVG wave mask under one word in a heading, in an accent color, scrolling sideways in a 3s loop while in view `[read]`.
- Trays: a colored band of 1.5 units enclosing a white core.
- Round markers: filled green dots for yes, outlined red rings for no, a 6px green bar for the key answer, a 8px green bar down the left of asides `[read]`.
- No grain, noise or textures.

## Tier two: iconography

- Style `[read]`: simple line icons at 1.5px stroke for arrows and chevrons (20px and 10px boxes), 2px for menu icons (22px); three filled pictograms at 66 unit viewbox inside 60px circles (globe, check, heart). Rounded caps. One custom set drawn for the site, not a known library `[inferred]` from inline SVG with custom viewboxes and names.
- Pairing: arrows always sit in a round chip next to a label; chevrons follow labels at 10 to 14px.

## Tier two: illustration

- Technique `[read]`: flat colored characters with black outlines, animated with Rive (people climbing, shrugging, playing trumpets, soccer, basketball, a unicycle, binoculars, a scientist, a gamer). Each enters with an elastic pop. The hero scene is a character group on a blob-shaped background.
- Use: illustration carries every hero and the home journey; photography appears only in the menu cards, article cards, row images and one full-width band.
- For hurulab: keep the role (a character in each hero and a friendly face in the contact CTA) only if hurulab has its own illustrations.

## Tier three: brand behavior

- The logo sits at the left of the floating bar: mark 36 x 30 plus wordmark 136 x 20 at 1440, a 17px gap, 17px from the bar's left edge; on phones mark 32 x 27, wordmark total width 149 `[read]`. The bar never shrinks or hides on scroll.
- The preloader draws the mark. Favicon: one svg at 16, 32, 96, 192 sizes. No `theme-color` meta found `[read]`.
- Personality beyond the mark: characters, the loud per-page color, wobbly easing, the face in the quote button.

## Tier three: UX patterns

- Moving through the site: floating menu with dropdowns on desktop and accordions on phones; page transitions keep a sense of place; hub page (strategy) opens detail content in dialogs and links to full pages; "next method" and "next article" cards at the end of details.
- Forms: validation shown only after interaction, red border with no animation, required fields marked with an asterisk, reCAPTCHA hidden.
- Empty and loading: skeleton bars in dialogs; spinner in the menu button during page loads; image placeholders are tiny blurred inline images.
- Error: friendly 404 with an illustration and a home button.
- Keyboard and accessibility `[read]`: dialogs use native `dialog` with labelled titles and focus return; menu buttons carry `aria-expanded`; accordions set `aria-hidden`; desktop dropdowns open on focus and close on Escape; decision cards honor modifier-click to open the full page; sr-only text on icon buttons; `aria-live` on dialog bodies. No skip link found. Focus rings are designed only on strategy pages.

## Tier three: information architecture

Primary nav: Services, Methodology (12 methods), Sectors (12), Strategy (10 decisions), Pricing, plus a "more" menu (Network, About Us, Insights, Contact). Footer repeats the full list plus Privacy Policy and Cookie Preferences.

Sitemap observed: home; services; methodology index and 12 details; sectors index and 12 details; customer-led strategy hub and 10 details; pricing; network; about; articles listing (23 items, filters by region and type, paginated) and article details; contact; privacy; 404.

Page types: hub with dialogs, index with card grid, detail with long prose and a next card, listing with filters, form page.

## Tier three: voice

Short, plain, confident. Headings are statements or questions in sentence case ("No more chaos.", "Which decision is in front of you?"). Buttons are 1 to 4 words, verb first ("Get a quote", "Tell us the decision", "Read the full page"). Periods end many headings. Microcopy speaks to "you" and admits limits ("It is not a quote: it is a head start.").

## Effects inventory

| Effect | Where | Trigger | Duration | Easing | Travel | Build |
|---|---|---|---|---|---|---|
| Preloader draw and curtain | desktop first load | load | 1250ms plus 1000ms | power2, power1, elastic, `--ease-primary` | logo 15% up and out, curtain 100% | library (or skip) |
| Hero line rise | hero | first load | 800ms, 100ms step | `--ease-primary` | 80px | CSS |
| Menu bar drop | desktop | first load | 400ms, 200ms delay | `--ease-primary` | bar height plus 1rem | CSS |
| Character pop | heroes, journey | in view | 1750ms | elastic.out(1, 0.3) | 100px, scale .75 | small script or library |
| Hero recede | hero | scroll | scroll-mapped | linear | scale 1 to .8, dim 0 to 40% | small script (or `animation-timeline`) |
| Next section slides over hero | hero | scroll | scroll | native | sticky | CSS |
| Path draw | journey | scroll | scroll-mapped | `--ease-path-draw` then linear | 5% to 100% | small script |
| Parallax drawings and tiles | journey | scroll | scroll-mapped | linear | speeds .02 to .15 | small script |
| Cloud drift | journey end | scroll | scroll-mapped | linear | up to 600px | small script |
| Tile pop | journey tiles | in view | 600ms surface, 400ms text | overshoot, soft in-out | scale 0 to 1, text 10px | CSS plus IntersectionObserver |
| Stack cards | numbers | scroll | scroll-mapped | linear | 20% up, 10deg to 0 | CSS sticky plus small script |
| Wavy underline | headings, footer | in view | 3s loop | linear | 64 or 144px | CSS |
| Callout character peek | closing callout | button hover | 300ms | `--ease-smooth` | 100% to 12% | CSS |
| Button hover | all buttons | hover | 400ms | overshoot | surface 1.05, label by chip width | CSS |
| Button press | strategy | press | 160ms | `--ease-reveal` | scale .97 | CSS |
| Nav pill hover | desktop menu | hover | 400ms | overshoot | scale .8 to 1 | CSS |
| Dropdown | desktop menu | hover, focus | 200 to 600ms | primary, overshoot | 1rem, items 1.25rem, 25ms stagger | CSS plus small script |
| Quote button fill | desktop menu | hover | 250ms | `--ease-primary` | scale from bottom | CSS |
| Quote button face | desktop menu | mouse move | continuous | lerp .1 | eyes follow | library (banned tracking) |
| Mobile menu open | phones | tap | 100 to 400ms, 50ms stagger | primary, overshoot, smooth | 1rem | CSS plus small script |
| Burger morph | phones | tap | 200ms lines, 400ms group | primary, overshoot | rotate 45deg | CSS |
| Menu accordion | phones | tap | 400ms open, 300ms close | power4.inOut | height | small script |
| Page transition | all links | click | 750ms | `--ease-primary` | 110svh in, 10svh down and .9 out | small script or View Transitions |
| Card reveal | strategy cards | in view | 400ms, 50ms stagger | `--ease-reveal` | 28px | CSS plus IntersectionObserver |
| Card lift | strategy cards | hover | 200ms | `--ease-reveal` | -4px | CSS |
| Dialog open | strategy | click | 200ms | `--ease-reveal` | scale .97 to 1, fade | CSS (`@starting-style`) plus small script |
| Skeleton pulse | dialogs | loading | 1.2s loop, 120ms stagger | `--ease-ios` | opacity .45 | CSS |
| Manifesto word swap | strategy | scroll | 220ms per word | `--ease-reveal` | color and weight | small script |
| Case crossfade | strategy | scroll position | 250ms | `--ease-reveal` | 12px, blur 2px | CSS plus IntersectionObserver |
| Anchor nav | strategy | scroll | 400ms | `--ease-primary` | 100% plus gutter | CSS plus small script |
| Table row reveal | strategy | in view | 400ms, 70ms stagger | `--ease-reveal` | -12px | CSS plus IntersectionObserver |
| Details accordion | FAQ | toggle | 300ms | `--ease-primary` | height | CSS (`::details-content`) |
| Image hover zoom | article and menu cards | hover | 600ms | `--ease-smooth` | 1.05, 2deg | CSS |
| Image fade-in | all images | load | 300ms | `--ease-primary` | none | CSS plus tiny script |
| Inner parallax | image bands | scroll | scroll-mapped | linear | speed -.1 | small script |
| Tilted listing | services | scroll | scroll-mapped | linear | 80% up, 10deg | small script |
| Checkbox and radio | forms | hover, check | 200ms | overshoot, smooth | .8 to 1 | CSS |
| Smooth wheel scroll | whole site | wheel | lerp .1 | exponential | none | library (optional) |
| Brand marquee | home | always | per frame | none | .35 to .6 px per frame | banned |

## Rebuild note

### Swap freely

- hurulab's colors, both typefaces and logo (by definition).
- Which saturated color opens and closes the page, as long as there is one per page plus a different closing color.
- The illustrations, photos and the characters (or drop them).
- Copy, counts of cards and tiles within the ranges given, icon set (keep line style and round chips).
- Office addresses, footer link lists, article content.
- Exact font sizes, as long as the ratios between steps are kept.

### Do not touch

- Rounded slabs as the only section separator: radius ratio 50:20:10 (35:15:10 on phones), slabs butting against a page-ground color, no lines or shadows.
- Order of ground colors: saturated hero, long neutral reading ground, saturated ask, neutral proof, contrasting saturated footer; white as reading ground with a beige band every second or third section on long pages.
- The 16-column grid with content in columns 2 to 15 and 20px gutters and margins; 7:5 and 5:7 splits.
- The hero that recedes (scale to .8, dim to 40%) while the next slab slides over it.
- Surfaces before content: backgrounds grow first, text follows 100 to 250ms later.
- The overshoot curve `cubic-bezier(.17,.67,.3,1.33)` on anything that grows, and `cubic-bezier(.5,0,0,1)` on anything that travels.
- UI timings in the 100 to 400ms band; long moves only for the page slide (750ms) and character pops.
- Mobile menu: floating white bar with 1rem inset, panels that grow from 90% with no scrim, rows rising 1rem with 50ms stagger and overshoot, burger that rotates as it crosses, close with everything at once and visibility held 200ms.
- Decision grid: near-square white cards, label then question then small read button, 5 across at desktop and full-width rows on phones, 28px reveal with 50ms stagger per row, 4px hover lift, in-page dialog with a tray panel.
- Button anatomy: round icon chip inside a 10px-radius button, and the hover where the label steps right and the arrow hops to the start.
- Page transition: the new page rises from 110svh over the old one, which shrinks to .9 and dims to .5, 750ms.
- Scroll-linked moves are mapped to position, not triggered: stack cards rotate flat as they stick, the path draws as you move.
- Display type at 9.7vw with line-height .95 and tight tracking; body at medium weight.

## Outstanding

- Bounding boxes at 1024 and 768 were not measured; reflow at those widths is taken from the CSS rules.
- Frame-by-frame timing of the load sequence could not be sampled because the browser tab was in the background (animation frames paused). Durations come from the CSS and scripts, and the menu, dialog and page transition were confirmed as live Animation objects.
- First contentful paint and total transfer on a cold cache were not measurable for the same reason; sizes above are encoded and decoded body sizes.
- The contact form was not submitted.
