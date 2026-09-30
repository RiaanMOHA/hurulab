# metalab.com spec

Captured 2026-09-29 from the live site in Chrome. Method tags: [read] from the DOM, a computed style, a CSS rule, an element box or the production JavaScript; [watched] seen happen and sampled frame by frame; [inferred] reasoned, with the reason given.

How it was measured. The browser tab was 752px wide, so every desktop value was read from a same-origin iframe of the site set to exactly 1440x900, 1024 wide values are derived from the CSS rules at that width, and phone values from the same iframe at 390x844. The tab went to the background part way through, which stops `requestAnimationFrame`, so most motion values are read directly from the GSAP calls in the production bundle rather than sampled. Those are exact. Frame samples that were taken before the tab went to the background are marked [watched].

## Urls walked

| Url | Why |
|---|---|
| https://www.metalab.com/ | Home, first-visit loader, repeat-visit reveal, case study hover and click, menu open state, 1440 and 390 |
| https://www.metalab.com/what-we-do | Services page, the closest match to hurulab's content, 1440 and 390 |
| https://www.metalab.com/about | About page, cities scroller, stats, drawers, jobs, full footer |
| https://www.metalab.com/work | Index page (list of all projects) |
| https://www.metalab.com/work/robinhood | Detail page the index and the home pills link to |
| https://www.metalab.com/blog | Index of articles |
| https://www.metalab.com/contact | Form page |
| https://www.metalab.com/this-page-does-not-exist | Error state |
| `/_next/static/css/15230c8daab2ecff.css` | Whole stylesheet, 1,863 rules |
| `/_next/static/chunks/pages/_app-f1f4fa5f5e8d611f.js` | Every component's motion code |

Not reached: nothing is behind a login. The blog article page was loaded but its scan was overwritten by a race in my harness, so its structure is described from the stylesheet only. Image and video byte sizes live on `cdn.sanity.io`, which does not send a timing header, so their transfer sizes could not be read.

## Loader note (do not copy)

There are two loaders, both driven by a `localStorage` key named `preloader` holding a timestamp [read].

**Slow loader.** Runs on the first visit to the home page, and again when the key is more than 24 hours old (86,400,000 ms) [read]. It covers the whole viewport with a white layer (`--bg-invert`, z-index 101) [read].
- On it: the three serif words of the headline (88px, weight 240, line height 0.8) and four small labels (16px sans: a region code, "0 -> 1", "EST. 2006", the local time) [read]. Each word is placed on a hidden grid of 24 boxes, 2 columns by 6 rows in each of the two side thirds [read]. Each word hops to a new box corner every 1s with Power3.easeInOut, looping, and wraps through the edges using 9 copies of itself [read].
- After 0.2s a rounded window opens in the middle third, 0 to 30vw wide, 700px tall, 15px radius, in 1s [read]. The dark hero video plays inside it [watched]. The CSS variable says 33.33vw at 967px and up, but the window I watched was 432px wide at 1440 (30vw) [watched].
- At 3s the window grows to the full viewport, radius 15px to 0, over 1.8s with Power3.easeInOut [read]. I watched the loader node exist from 753ms to 5,563ms after the request, 4.8s in all [watched].
- What it hides: the 10 case study hero images marked `data-preloader="true"` (1920px wide WebP, `fetchpriority="high"`), which the loader clones into a hidden container and waits for [read]; the hero video; the fonts.

**Fast loader.** Runs on every other home visit and on inner pages. The page sits behind a clip path that starts as a 0-wide, 700px-tall rectangle in the center and grows to the full viewport over 1.8s with Power3.easeInOut, no delay [read]. Watched from 138ms to 1,763ms [watched]. The loader node is removed at 1,904ms [watched].

**The moment it lifts.** A full-bleed black screen showing a looping video (a slow 3D purple form), a 40% black overlay, the header, and the column of 10 client pills on the left [watched]. The headline and paragraph fade in over 0.6s, 1.4s after the reveal starts [read]. Before the video can play, a blurred still of its first frame fills the screen and cross-fades out over 0.6s after a 0.4s delay [read].

**For hurulab.** Show the hero type and navigation as plain HTML from the first paint. Load the hero media behind them and fade it in with the 0.6s fade. Never wait on case study images before showing the first screen.

## Performance note

| Measure | Value | Tag |
|---|---|---|
| Time to first byte | 220ms | [read] Navigation Timing, warm cache |
| First contentful paint | 684ms | [read] Paint Timing, warm cache |
| DOMContentLoaded | 775ms | [read] |
| Load event | 1,258ms | [read] |
| First readable screen, fast loader | about 1.9s (reveal ends 1,763ms, loader removed 1,904ms) | [watched] |
| First readable screen, slow loader | about 4.8s, headline readable only after about 5.5s | [watched] loader, [read] 1.4s text delay |
| Render-blocking files | 1 stylesheet, 40KB compressed | [read] `renderBlockingStatus` |
| JavaScript before interactive | `_app` 471KB, framework 46KB, main 38KB, webpack 3KB, page chunk 1KB, all compressed | [read] `encodedBodySize` |
| Fonts | 5 WOFF2 files, 387KB in total: PP Eiko Light 116KB, PP Eiko Regular 116KB, Basis Grotesque Regular 52KB, Medium 52KB, Off White (300) 51KB. All `font-display: swap` | [read] |
| Data | `/api/fetchMenuPages` 55KB (every page's first section, for menu previews), `/api/getPageSections` 1KB | [read] |
| Media | Home hero loop capped at 3MB on desktop and 1MB on phones in code. 10 case study images at 1920px WebP q75 load before reveal. Byte sizes unreadable (cross-origin) | [read] caps, [inferred] the rest |
| Third parties | Google Tag Manager, Facebook pixel, Swan analytics, Sentry session replay | [read] |
| Total resources on home | 151 requests after a few minutes on the page | [read] |

What costs time: the 471KB app bundle (every component on the site ships on every page), 232KB of display font for one family, 10 full-width images the loader waits for, a video, and the 55KB menu preview payload. What is free: the layout is plain CSS grid, all type sizes are static rem values (no `clamp()` anywhere) [read], and hover states are CSS transitions.

## Banned-pattern flags

| Pattern | Where | Verdict |
|---|---|---|
| Custom cursor | Every page on devices with a fine pointer. A 96px span follows the mouse. A ring grows to radius 17 on anything clickable and 48 with a "Hover" or "Drag" label on carousels, and becomes a round play/pause/replay disc over videos. 0.3s Power3.easeOut [read] | Do not copy |
| Frosted glass panels | Every button has `backdrop-filter: blur(1.4rem)` over a 20% grey fill. The header gets `backdrop-filter: blur(20px)` with a 60% grey fill once you scroll [read] | Do not copy |
| Blurred glow background | The home hero is a dark video whose first frame is shown blurred while loading, which reads as a soft purple glow on black [watched] | Do not copy |
| Loader with count-like grid | Home first visit, see loader note. The 24 grid numbers exist in the DOM but stay hidden (opacity 0) [read] | Do not copy |
| Rotating text | Header clock cycles 4 cities, each line sliding up out of a mask, every 5s [read]. Not a headline, but the same device | Do not copy |
| Logo use | The work index shows each client's logo in a 80x80 box at the start of its row [read]. It is a list, not a wall or a marquee, but copied loosely it becomes a logo wall | Do not copy the logo column |
| Text marquee | What We Do has a 220px running text band, linear, looping [read]. Not a logo marquee | Allowed, use with care |
| Stat numbers | Big numbers slide up 100% into place over 1.8s [read]. They do not count up | Allowed |
| Typewriter, particles, node graphs, gradient text, sparkle icons, pill labels above headings, chat bubbles, waitlist forms, sticky announcement banners, ASCII heroes, text scramble, magnetic buttons | Not found in the stylesheet, the bundle or on the pages walked [read] | None present |

The pills on the home page are navigation buttons (one per case study), not labels above headings, so they are not the banned pill pattern.

## Libraries

| Library | Version | What it does here | Needed for hurulab? |
|---|---|---|---|
| Next.js (pages router) | build `MZVkF988L11j8uPMrYo3i` | Routing, data from Sanity | No |
| React | in framework chunk | Components | No |
| GSAP core | 3.14.2 [read] | Every tween on the site | Small script can replace almost all of it |
| GSAP ScrollTrigger | bundled [read] | Scrubbed parallax, in-view triggers, nav morph | IntersectionObserver plus a scroll listener covers it |
| GSAP Draggable | bundled [read] | Review carousel drag | Only if a drag carousel is used |
| Lenis | 1.0.19 [read] | Smooth wheel scroll, `duration: 1.2`, `smoothTouch: false`, `wheelMultiplier: 1`, `touchMultiplier: 1`, driven by the GSAP ticker with `lagSmoothing(0)` [read] | Optional, 4KB script |
| Framer Motion | bundled [read] | `AnimatePresence` holding the old page during a transition | No |
| Swiper | bundled [read] | Media slider in case studies | No |
| Lottie | bundled [read] | Footer animated icon, one case study | No |
| Sentry | bundled [read] | Error and session replay | No |

Not present: SplitText, Three.js, Barba, Swup, Locomotive, Rive runtime, Spline, Webflow, Framer sites [read].

---

# Tier one

## The argument of the home page

The home page is one fixed screen, 900px tall at 1440x900, with no scroll [read `scrollHeight`]. It argues by showing.

1. Claim. A four-word headline and a 25-word paragraph say what they do and since when.
2. Proof, straight away. Ten client names sit as a column of buttons on the left. Each one, when pointed at, turns the whole screen into that project's poster: a full-bleed image, the project name in large serif, a one-line description, the service type, and a thumbnail that grows out of one edge.
3. Depth on demand. Clicking a name expands the thumbnail to fill the screen and becomes the case study's hero, so the visitor never sees a page load.
4. The last button is "All work", which does the same into the full list.
5. Call to action is always present: "Get in touch" with a mail icon in the header's top right. The menu and every page footer repeat it.

The inner pages carry the long argument. What We Do runs: statement with a video that grows as you scroll, a title with a drifting row of images, the services as four expandable rows, four short columns, a running text band, client quotes, four numbered principles, a framed quote, three big numbers, then the footer asking "How can we help?" with three routes.

## Motion

### Principles

- Movement means arrival or departure, never decoration. Almost nothing moves at rest except videos, the clock and the text band.
- Entrances are slow and decelerate hard (Power3.easeOut at 0.8 to 1.8s). Exits are fast (0.3s). The ratio of enter to exit duration is 2.7:1 on case previews [read].
- Travel is short. Text moves 40px, rows 90px, or exactly one line height out of a mask. Whole surfaces move by opening a window, never by sliding the page.
- Everything that changes the whole screen is a rounded rectangle changing size: the loader window, the menu window, the page wipe, the thumbnail expanding into a case study. The rectangle is the site's one big idea.
- Scroll-linked effects are scrubbed and linear. Time-based effects use quart curves.
- Reduced motion sets every duration to 0.001s and skips the loader, not a separate design [read].

### Named motion values

See `metalab.com-tokens.md` for tokens. Where each is used:

| Token | Value | Used by | Tag |
|---|---|---|---|
| duration-exit | 0.3s | case preview out, section fade, cursor, nav fade during a wipe, menu item underline reset | [read] |
| duration-quick | 0.6s | hero fade, menu button label, menu item underline in, video cross-fade | [read] |
| duration-wipe | 0.7s | page-transition frame | [read] |
| duration-enter | 0.8s | case preview in, masked text, clock lines, drawers, description rows | [read] |
| duration-panel | 1.2s | menu in and out, case study hero settle, stat rows | [read] |
| duration-expand | 1.5s | home thumbnail to full screen | [read] |
| duration-reveal | 1.8s | content mask, vertical stats, hoverable columns | [read] |
| ease-out (Power3.easeOut) | quart out | 22 calls, the default | [read] count of `ease:` strings |
| ease-in-out-strong (Power4.easeInOut) | quint in-out | 11 calls, all panel openings | [read] |
| ease-in-out (Power3.easeInOut) | quart in-out | 6 calls plus the shared "close" ease constant | [read] |

### Load choreography, element by element (fast loader, desktop)

Times from the moment the reveal starts [read from code, confirmed by [watched] samples].

| Element | Starts at | Duration | From | To | Ease |
|---|---|---|---|---|---|
| Page clip window | 0 | 1.8s | 0x700 at center, radius 15 | 1440x900, radius 0 | Power3.easeInOut |
| Header | at mount | GSAP default 0.5s | opacity 0 | 1 | GSAP default (power1.out) [inferred: no ease passed] |
| Header clock | at mount | 0.8s | line at y 105% | 0 | Power3.easeOut |
| Client pills | at mount | 0.3s | opacity 0 | 1 | GSAP default |
| Blurred still | 0 | 0.6s | opacity 0 | 1 | CSS |
| Video | when playable | 0.6s after 0.1s | opacity 0 | 1 | CSS |
| Blurred still out | when video plays | 0.6s after 0.4s | 1 | 0 | CSS |
| Headline | 1.4s | 0.6s | opacity 0 | 1, no travel | GSAP default |
| Paragraph | 1.4s | 0.6s | opacity 0 | 1, no travel | GSAP default |

Watched on a warm load: headline container opacity 0 at 95ms, 0.40 at 283ms, 0.72 at 429ms, 0.94 at 596ms, 1.00 at 713ms; video opacity 0.01 at 379ms, 0.47 at 538ms, 0.85 at 704ms, 1.00 at 921ms; clock line x 0 to 30px from 721ms to 1,137ms [watched]. The headline is not split into lines, words or characters [read].

### Reveals on scroll

Mechanism: a shared hook creates a GSAP ScrollTrigger with `start: "top bottom"`, `end: "bottom top"`, fire once by default [read]. So a block starts animating the moment its top edge enters the bottom of the viewport. Some override: title-and-text blocks use `start: "top+=100px bottom"`; media blocks use `top-=1000px bottom` to start loading early [read].

| Block | Hidden state | Motion | Stagger | Once |
|---|---|---|---|---|
| Section wrapper | opacity 0 | to 1 over 0.3s, 0.1s delay | none | yes |
| Title and paragraph pairs | opacity 0 | to 1 over 1s | 0.1s | yes |
| Description rows | y 90px, opacity 0 | to 0 and 1, Power3.easeOut | per row | no, replays |
| List columns | y 40px; column rule scaleX 0 | rise over 2x base, rule draws over base, Power3 | 0.1s | yes |
| Masked text lines | y 105% inside `overflow: hidden` | to 0, 0.8s Power3.easeOut | 0.1s | yes |
| Vertical stats | numbers y 100% inside mask | to 0, 1.8s Power3.easeOut, 0.4s after title | 0.125s | yes |
| Stat rows | number y, then suffix | 1.2s Power3.easeOut, rule scaleX 0 to 1 | 0.3s | yes |
| Info drawers | rows y offset | 0.8s Power3.easeOut | 0.3s | yes |
| Mask reveal (images) | CSS vars `--left-y` `--right-y` at 0, inner scale up | to 100% and scale 1, 0.8s Power3.easeInOut | per instance delay | yes |
| Hoverable columns | cells scaleX and scaleY 0 | to 1 over 1.8s | columns 0.25s, text 0.3s delay | yes |

### Scroll-driven effects

| Effect | Page | Pinned | Scroll consumed | Mapping |
|---|---|---|---|---|
| Header morph | all | header is fixed | 350px, starting after 50px | full width to 645px pill (desktop) or viewport minus 32px (phone), y 0 to 12px, frosted fill 0 to 1, buttons lose their own fill; linear in scroll, eased back with a 0.08 lerp when released [read] |
| Video scroller hero | What We Do | no | the section, 1231px at 1440 | video container rises by its own height, `scrub: true`, top top to bottom bottom [read] |
| Parallax grid | What We Do | no | section enters to leaves | image row translates left by its overflow plus 15% of viewport width (50% on phone), linear scrub [read] |
| Review card | What We Do | no | from 20% into view to its full height | a 40px frame border around a full-bleed photo shrinks to a 16px-bordered 696x680 card; photo scales 1.1 to 1 and moves -20% to 0; quote rises from 405% [read] |
| Cities scroller | About | yes, 1800px section (2vh) | 2 viewport heights | background images fade 0 to 0.7 over 1.5vh, city list moves up linearly [read] |
| Home pills on phone | Home | fixed | the list's own scroll | the pill nearest 50% viewport height becomes active; headline fades 1 to 0 between 50% and 25% scroll of the list [read] |

### Page transitions

Three kinds, all [read] from code.

1. **Home pill to case study.** On click the preview's clip rectangle, already the size of the thumbnail with an 8px radius, grows to the full viewport with radius 0, and the image inside scales from the thumbnail's scale to 1, both 1.5s Power4.easeInOut. Then the router navigates. The case study opens with that same image as its hero, which settles into its hero box (height from 100vh to 58.2vw) over 1.2s Power3.easeInOut after 0.2s. What the visitor sees in between: nothing changes, the picture just keeps moving. Watched twice from the home page earlier in the session.
2. **Menu link to page.** The target page's first section is already rendered inside the menu window from hover. Clicking closes the frame outward (1.2s Power3.easeInOut) and the page scales back from 0.905 to 1. No blank frame.
3. **Any other link (the wipe).** Four panels, one per edge, slide in from off-screen to meet in the middle, with four 8px rounded corner pieces scaling from 0 to 1 at the inside corners, 0.7s Power4.easeInOut. The screen is fully covered in the theme background color. It holds 500ms while scroll resets to 0, then the panels slide back out over 0.7s Power3.easeInOut. The header fades out over 0.3s at the start and back in 0.84s later.

### Keyframes

Only two exist: `spin` (1turn, used by the blog loading icon, 2s linear infinite) and `swiper-preloader-spin` (library) [read]. Everything else is GSAP.

### Reduced motion

Under `prefers-reduced-motion: reduce` every GSAP duration becomes 0.001s or a `set`, the loader skips to the end, the content mask takes 0.01s, the header stays static, and five CSS blocks force opacity 1 [read]. Nothing is designed differently, it just stops moving.

### Viewport resize

Grid, type and positions snap at 967px and 1512px; nothing animates on resize [read, all static rem values]. The preview thumbnails and content mask recalculate after a 300ms resize debounce [read].

### Sound

None on the home page. The What We Do video scroller has an opt-in sound button that the visitor must press [read].

## Layout and spacing

### Raw spacing values, sorted

Distinct `gap`, `padding` and `margin` values in the stylesheet, in rem (10px): 0.2, 0.3, 0.4, 0.5, 0.55, 0.6, 0.8, 1, 1.2, 1.6, 2, 2.3, 2.4, 2.5, 2.8, 2.9, 3, 3.2, 3.6, 4, 4.3, 4.4, 4.8, 5, 5.2, 5.6, 6, 6.4, 7.2, 8, 8.4, 8.8, 9.6, 10, 12, 14, 18 [read].

Proposed scale (8px step, 4px half steps): 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 120, 140, 180. Ratios to the 24px gutter: 0.33, 0.5, 0.67, 1, 1.33, 1.67, 2, 2.33, 2.67, 3.33, 5, 5.83, 7.5.

Left out as one-offs: 0.55 (menu link padding), 2.3, 2.5, 2.9, 4.3 (single component tweaks), 8.4 and 8.8 (type sized margins), 9.6.

### Grid

| Width | Columns | Gutter | Margin | Column width | Column pitch | Tag |
|---|---|---|---|---|---|---|
| 1440 | 12 | 24px | 24px | 94px | 118px | [read] rule, arithmetic |
| 1024 | 12 | 24px | 24px | 59.3px | 83.3px | [read] rule, arithmetic |
| 390 | 6 | 16px | 16px | 46.3px | 62.3px | [read] rule, arithmetic |

There is no max width; everything is full bleed with a 24px margin [read]. The homepage hero's title grid uses the same 12 columns with gap 0, so its column is 116px at 1440 [read].

### Breakpoints

| Breakpoint | What reflows |
|---|---|
| 768px | a few phone-only paddings |
| 967px | the big switch: 6 to 12 columns, gutter 16 to 24px, section gap 140 to 180px, display type doubles (44 to 88px, 36 to 64px, 64 to 140px), header 48 to 54px tall, case study previews appear (hidden below), menu window switches from a top strip to a centered portrait window |
| 1200px | minor |
| 1512px | stat numbers 84 to 140px, some wide titles span columns 2 to 11 |
| 1800px | minor |
| height 590px and 690px | the menu hides or shows its case study list and heading |

### Section rhythm

- Content pages start with `padding-top: 180px` (the vertical gutter), and each section is separated by `margin-bottom: 180px` on desktop, 140px on phones [read]. At 1440x900 that is 0.2 of a viewport. The last section gets half.
- Sections are not boxed or colored; they sit on one continuous black page and are separated only by space [read]. Backgrounds change only inside full-bleed media.
- Rhythm is broken on purpose by full-bleed sections with no side margin (video scroller, review card, cities scroller) and by the 220px text band.
- Text never runs to the margins as a paragraph. Paragraphs sit in 2 to 4 columns of the 12, often starting mid-grid (column 6, 7, 8 or 10), while titles take columns 1 to 8.

Section heights on What We Do [read]:

| Section | 1440 height | vh at 900 | 390 height | vh at 844 |
|---|---|---|---|---|
| Video scroller hero | 1231 | 1.37 | 1140 | 1.35 |
| Parallax grid | 859 | 0.95 | 581 | 0.69 |
| Description rows | 1168 | 1.30 | 2249 | 2.66 |
| List columns | 215 | 0.24 | 394 | 0.47 |
| Large ticker | 242 | 0.27 | 121 | 0.14 |
| Review grid | 627 | 0.70 | 1338 | 1.58 |
| Hoverable columns | 599 | 0.67 | 1911 | 2.26 |
| Review card | 900 | 1.00 | 880 | 1.04 |
| Vertical stats | 664 | 0.74 | 1028 | 1.22 |
| Page total | 8810 | 9.79 | 11623 | 13.77 |

## Section by section

### Home page (the whole page is one screen)

The home page has four layers, all `position: fixed`, 1440x900 [read]:

- `div` hero media layer (z 1 to 5 inside the page layer, z 102)
- `div` case study layer (z 104) holding the pill list and 10 preview sections
- `header` (z 110)
- menu, cursor, wipe portal (z 107 to 113)

#### 1. Header

Purpose: navigation, brand, time, contact. Carries hurulab's navigation and Contact Us.

DOM skeleton [read]:
- header
  - div (fill layer)
  - div (blur layer)
  - div (inner row)
    - button (menu toggle)
      - span (label "Menu")
      - span (label "Close" plus x icon)
    - button (logo)
      - a
      - svg (logo)
    - div (right cluster)
      - div (clock, 4 stacked lines)
      - button (theme toggle, hidden on home)
      - a (contact, text label plus mail icon)

| Element | 1440 box | 390 box |
|---|---|---|
| header | 0,0 1440x54 | 0,0 390x48 |
| menu button | 24,15 64x24 (77 wide when open) | 16,8 69x32 |
| logo | centered, 80x18, top 18 | centered, 88x20, top 14 |
| right cluster | 1273,15 143x24 | 302,8 72x32 |
| clock | 1303,20 78x14 | hidden |
| contact | 1392,15 24x24 circle, label 67px wide to its left | 342,8 32x32 circle, no label |

Logo sits dead center at `left: 50%; top: 50%; transform: translate(-50%, -40%)` [read], so it reads 10% low, optically centered against cap height. Clear space: at least 24px (one gutter) from the header top when unscrolled [read, 18px top plus 18px height in a 54px bar, so 18px clear above and below].

Take: three-part bar (menu left, logo center, contact right), the morph into a floating pill on scroll, the label swap in the menu button. Leave: the clock, the theme toggle, the frosted fills.

#### 2. Hero (layer under the pills)

Purpose: the claim. Carries hurulab's hero.

DOM skeleton [read]:
- div (hero, fixed, black)
  - div (overlay, black at 40%)
  - img (blurred first frame)
  - div (video wrapper)
    - video
  - div (title container, 12-column grid, gap 0)
    - h1
      - span (line 1)
      - span (line 2, indented)
  - div (paragraph container, 12-column grid)
    - p

| Element | 1440 box | 390 box |
|---|---|---|
| video | 0,0 1440x900 | 0,0 390x844 |
| h1 | 488,536 928x176, columns 5 to 12 | 16,167 184x88 |
| line 1 | 488,536 354x88 | 16,167 184x44 |
| line 2 | 688,624 728x88, indented 200px | 16,211 184x44, no indent |
| paragraph | 864,225 250x90, columns 8 to 11, fixed 250px | 16,750 229x78, bottom of screen |

Title container top is `calc(66.667% + 24px)` then `translateY(-50%)`, so the headline's center sits at two thirds down plus one gutter [read]. The paragraph sits at 25% down. Result: paragraph upper right, headline lower right, pills center left: a Z reading order.

At 1024: h1 starts at column 5, x 357px; paragraph at column 8, x 607px, still 250px wide [inferred from the CSS rules at that width].

Content shape: headline 4 words in 2 lines (2 plus 1 word, "We make / interfaces"), paragraph 25 words, 1 video, 16:9 cropped to cover [read].

Motion: see load choreography. When any pill is hovered, headline, paragraph and video fade to 0 over 0.6s, and return when the pointer leaves [read].

Take: offset two-line headline with the second line indented 200px, the small paragraph floating high on the right, the Z order. Leave: the video glow.

#### 3. Case study list and previews (the priority)

Purpose: proof. This is the pattern to transplant for hurulab's nine services.

DOM skeleton [read]:
- div (case study layer, fixed)
  - div (active pill marker, phone only)
  - div (list container)
    - ul
      - li x 11 (10 projects plus "All work")
        - a (hidden link for crawlers and keyboard)
        - button (pill)
          - span (label)
  - div (preview stack)
    - section x 11
      - div (title row, 12-col grid)
        - h1
      - div (description row, 12-col grid)
        - p
      - div (type row, 12-col grid)
        - p
      - svg > defs > clipPath > rect (the thumbnail window)
      - div (clipped by that rect, full screen)
        - div (image holder, transformed to thumbnail size)
          - picture > img (hero image)
      - div (background)
        - div (black scrim at 20, 40 or 60%)
        - picture > img (background image)
      - div (thumbnail position marker, invisible)

Pills at 1440 [read]: list at 24,260, 118x380, vertically centered (`top: 50%; translateY(-50%)`). Each li is 38px tall: a 32px pill plus 3px above and below. Widths follow the label: 68 to 113px. Label 16px, padding 0 16px, radius 50px. Padding to font size 1:1, height to font size 2:1.

Preview layouts. Each project is assigned one of three layouts [read]:

| Layout | Used by | Title | Description | Service type | Thumbnail | Thumbnail grows from |
|---|---|---|---|---|---|---|
| 1 | 5 of 11 | columns 3 to 12, center at 50% + 24px | columns 6 to 7, top 16.67% + 24px | columns 8 to 9, top 66.67% + 24px | bottom right, 25% wide, 55vh tall, 24px from edges | bottom edge |
| 2 | 3 of 11 | columns 5 to 9, top 66.67% + 24px | columns 10 to 11, 46px from bottom | columns 4 to 6, 40px indent, top 16.67% + 24px | upper right, 40% by 40%, top 5% + 72px, 8% from right | right edge |
| 3 | 2 of 11 | columns 9 to 12, top 50% + 24px | columns 5 to 6, top 16.67% + 24px | columns 8 to 9, 10px indent, top 83.33% + 24px | lower left, 31% wide, 50% tall, 17% from left, 8% from bottom | left edge |

The rows sit on a sixths grid of the screen height: 16.67%, 50%, 66.67%, 83.33%, each plus one gutter [read].

Settled boxes at 1440x900 [read, from DOM minus the 40px entry offset]:

| Layout | Title | Description | Type | Thumbnail |
|---|---|---|---|---|
| 1 | x 260, y 474, 88px type | x 614, y 174, 212 wide | x 850, y 624, 212 wide | 1056,381 360x495 (ratio 0.73) |
| 2 | x 496, y 624 | x 1086, y 787, 212 wide | x 378 plus 40, y 174 | 749,117 576x360 (ratio 1.6) |
| 3 | x 968, y 474 | x 496, y 174 | x 860, y 774 | 245,378 446x450 (ratio 0.99) |

Content shape per project [read]: title 1 or 2 words; description 7 to 20 words; service type 1 to 4 comma-separated words; 1 hero image 5:3 (2500x1500 source), 1 background image 5:3.

Behavior [read]:
- Hover a pill. After 100ms of hover intent, that project's preview becomes active. Hero headline, paragraph and video fade out (0.6s).
- Background image with its scrim fades in: 0.8s Power3.easeOut.
- Title, description and type each slide 40px from a set side (layout 1: title from the right, description from the left, type from above) and fade in: 0.8s Power3.easeOut, no stagger between them.
- The thumbnail's clip rectangle grows from 1px at one edge to the thumbnail box, with an 8px radius: 0.8s Power3.easeOut. The image inside is already full size, scaled down and positioned so only the thumbnail area shows, so the thumbnail is a window onto the same picture that will fill the screen later.
- Pill: gets a 1px white border and loses its fill while hovered (0.2s CSS).
- Leave. Everything reverses in 0.3s with the same ease. Moving from one pill to the next crossfades the two.
- Click. Pointer events lock. Clip rectangle to full viewport, radius 0; image holder to scale 1 at 0,0: 1.5s Power4.easeInOut. Then navigate. The case study's hero uses the same image.
- Each pill also gets a random z translate between 1 and 100px under a 1000px perspective whenever the layer fades in, over 0.75s [read]. It gives the list a slight uneven depth. Subtle; optional.

Phone (below 967px): previews are `display: none` [read]. The list becomes a full-screen vertical scroller starting at 50% of the viewport height, with a mask fading the top and bottom 10 to 20% [read]. The pill nearest the middle is filled white with black text; the rest sit at 40% opacity [read]. The headline sits at 25% down and fades out as the list scrolls [read]. Tapping a pill goes straight to the case study.

For hurulab: this is "What we do". Nine service names as pills; hovering each turns the screen into that service's panel with title, one line, deliverables, and a thumbnail that grows from an edge. On phone, the centered-scroller version.

#### 4. Menu (the second priority)

Purpose: site navigation, secondary proof. Carries hurulab's navigation.

DOM skeleton [read]:
- div (menu, fixed, full screen, pointer events off when closed)
  - div (window position, invisible, defines the hole)
  - nav
    - ul
      - li x 5
        - a (hidden)
        - button (serif link)
        - span (underline mask)
          - span (underline)
    - div (case study list)
      - p (small heading)
      - ul
        - li x 10
          - a
            - span (pill, inverted)
  - p (year)
  - div (news scroller)
    - div (list)
      - div x 5 (card wrappers)
        - article (card)
          - button (dismiss x)
          - div or a (content: title, then video or 48px image and 3 lines)
  - div (frame)
    - div x 4 (top, right, bottom, left panels)
    - div x 4 (rounded corner pieces, 8px)

Open state at 1440x900 [read]:

| Element | Box |
|---|---|
| Window (the hole) | 504,80 432x740 (30vw by viewport minus 160px, top 80px) ratio 0.58 |
| Top panel | 0,0 1440x80 |
| Bottom panel | 0,820 1440x80 |
| Side panels | 504 wide each |
| Corner pieces | 8x8 at each inside corner |
| Serif links | x 24, from y 168, each 35px tall, 20px type |
| Case study pills | x 24, from y 372, 36px pitch |
| Year | 24 from left and bottom |
| News cards | right edge minus 24, 225 wide, stacked, vertically centered |

What happens on open [read]:
1. Lenis scroll stops.
2. The four panels slide in from off-screen (top from -101%, bottom from +101%, sides from +/-101%) and the corner pieces scale from 0 to 1: 1.2s Power4.easeInOut. Panels are the inverse of the page color (white on the dark theme).
3. At the same time the page underneath scales to 1.1 times window height divided by viewport height (0.905 at 900px tall) and shifts vertically in proportion to scroll position, so the part you were reading stays inside the window: 1.2s Power3.easeInOut.
4. After 0.5s, the link list and case study list slide from x -150px and fade in: 1.2s Power3.easeOut. The year fades in with them.
5. News cards slide from x +300px and fade in, staggered.
6. The menu button's "Menu" label slides up out of its mask (-105%) while "Close" slides up in from 105% and the button widens to fit: 0.6s Power4.easeOut; the x icon follows 75ms later.

Hover a link [read]: all other links drop to 30% opacity; the hovered link's 1px underline slides in from -102% to 0 over 0.6s Power3.easeOut; the target page's first section fades into the window (0.1s) so you preview the page before you go.

Click a link: see page transition 2. Close without choosing: panels slide back out 1.2s Power3.easeInOut, lists slide to -150px over 0.9s, page scales back to 1. Clicking inside the window also closes [read].

Phone: window becomes a strip at the top, full width minus 32px, 30vh tall, 80px from the top; links sit below it at 22px; news cards scroll sideways along the bottom [read].

Take: the framed window, the page scaling into it, preview on hover, the label swap. Leave: news cards (hurulab has no news), the case study list inside the menu.

#### 5. Opening, what the visitor sees first

See loader note. Without the loader the rebuild should open on the header, headline, paragraph and pills already painted, with the background media fading in behind at 0.6s. The clip-window reveal (a rounded 0-wide column growing to full screen over 1.8s) can be kept as the first-paint effect if the content under it is already readable, because it hides nothing: it only masks.

### Inner page sections worth taking

Each gives: purpose, skeleton, boxes at 1440 [read], phone [read], shape, motion, and which hurulab part it could carry.

#### Video scroller hero (What We Do)

Purpose: statement plus showreel. Could carry hurulab's hero on a long page.
Skeleton: section > div > h1 (centered serif) ; div (100vh container) > div (video frame) > video, overlay, play label.
1440: title 1440x208 centered, 88px, ends 90px above the video; video frame 24,448 1392x783 (16:9), black overlay 15%. Section 1231 tall. 390: title max 400px wide, 44px; section 1140 tall.
Shape: title 8 words over 2 lines, 1 video.
Motion: title rises and fades on enter; video frame moves up by its own height as the section scrolls (scrubbed). A giant "Play" label (163px, 272px from 1512) follows the pointer over the video.
Take: the centered title stacked over a full-width 16:9 frame. Leave: the pointer label.

#### Parallax grid

Purpose: a claim with a row of images drifting sideways. Could carry the problem statement.
Skeleton: section > div > div (12-col) > div (title, columns 2 to 8) > h1 ; div > ul > li x 6 > div > picture.
1440: title 142,0 802x307, 64px; image row starts 507 below, 351 tall, items 236 wide, row 2024px wide.
Shape: title 12 words, 6 images at 1.25, 1.52 and 1.0.
Motion: row translates left by its overflow as the section passes, linear scrub.

#### Description rows (the services list)

Purpose: services, one row each. Carries "What we do" if the pill pattern is not used, and "How we work".
Skeleton: section > div > div (title row) > h1 ; ul > li x 4 > div (12-col) > p (row title, columns 1 to 4) ; div (columns 6 to 12, 2 sub-columns) > div (media) ; div (description).
1440: title 40px sans (-0.03em); each row 270px tall with a 1px `#313033` top rule; row title 448 wide, 40px serif; media 315x205 (1.54 ratio); description 444 wide at x 972.
390: rows stack, section 2249 tall.
Shape: title 3 words, 4 rows, each a 1 to 3 word title and a 28-word description, 1 video each.
Motion: rows rise 90px and fade in, staggered; the active row's media reveals via two clip edges (`--left-y`, `--right-y`) from 100% to 0 over 0.6s Power3.easeOut, inactive rows close in 0.3s. Row height transitions with a CSS variable.

#### List columns

Purpose: short lists side by side. Could carry "what it costs" line items or the discovery deliverables.
Skeleton: ul (3 or 4 columns) > li > p (title), div (rule), ul > li x n > p.
1440: 3 columns of 448, title 22px tall, 1px rule, items 22px pitch.
Motion: column rises 40px, rule draws scaleX 0 to 1, items fade in 0.1s apart.

#### Large ticker

Purpose: a running phrase at 220px. Could carry the ending.
1440: band 242px tall, sans 220px, -0.03em, a bullet with 100px padding between repeats. 390: 121px tall, 110px type.
Motion: linear loop, 0.8s per character of the phrase (0.45s on phones).

#### Hoverable columns

Purpose: four numbered principles. Carries the problem (three beliefs) or how we work.
Skeleton: div > div (12-col: h1 columns 2 to 8, link columns 11 to 12) ; div (columns) > article x 4 > span (rule), span (number), div > p (title), div > p (description).
1440: title 142,0 802x156, 40px serif; columns start 286 below, each 232 wide, 313 tall, 1px vertical rule; number 20px serif top left; title 20px at the bottom; description 208 wide appears on hover.
Shape: title 20 words, 4 columns, descriptions 23 to 34 words.
Motion: columns scale in from 0 over 1.8s, 0.25s apart; hovering one widens it (grid fractions change) and reveals its description.

#### Review card with background

Purpose: one quote, framed. Could carry the discovery phase or the worked example's result.
1440: full-bleed photo; a frame shrinks to a 696x680 card at columns 4 to 9 while scrolling; quote 40px sans, 562 wide.
Motion: frame border 40px to 16px, frame from viewport plus 48px to card size, Power2.easeInOut, scrubbed from 20% into view over the section's height.

#### Vertical stats

Purpose: three big numbers. Carries "what it costs" or "one to two weeks".
Skeleton: div > div (12-col) > h1 (columns 2 to 7) ; ul (3 columns) > li x 3 > div (vertical 1px rule) ; h1 (label) ; div > span (number), span (suffix).
1440: title 696 wide, 64px serif; list 274 below, each column 440 wide by 390 tall; label 20px at top; number 84px serif line height 0.85 at the bottom (140px from 1512).
Motion: rules and numbers slide up from 100% inside masks, 1.8s Power3.easeOut, 0.125s apart.

#### Info drawers (About)

Purpose: accordion. Carries how we work (seven steps).
1440: section 729 tall; title 64px; rows with 23, 10, 15, 14-word descriptions.
Motion: rows rise with 0.3s stagger; opening a drawer animates height with a CSS transition.

#### Case study hero (Robinhood)

Purpose: detail page opener. Carries the worked example (the espresso bar).
Skeleton: div > div (title block 450px tall) > h1 ; div (image block 58.2vw tall) > div > img ; video ; div (6-col text row pinned to the bottom) > div x 3 (label and text).
1440: title 140px serif weight 300 in a 450px block; image 1440x838 (58.2vw); three text columns at the bottom over the image. 390: title 64px in 420px, image 173vw tall.
Motion: arrives from the home expansion, settles 1.2s; a video then fades over the still.

#### Title and text

Purpose: chapter heading inside a long page. Carries section intros.
1440: 150 to 528 tall; description 56px sans (-0.02em) or 40px in position 2.
Motion: title and text fade in 0.1s apart over 1s.

#### Next case study

Purpose: continue. Carries the ending link from the example back to Contact.
1440: image card 31.2vw by 47vw (449x677), 8px radius, image at scale 1.15; ticker behind.
Motion: hover scales image to 1 and dims the ticker to 0.2 over 1.2s; click scales to 1.6 over 0.96s Power3.easeInOut.

#### Work list (index)

Purpose: all projects as rows. Index of the index/detail pair.
1440: title 88px; each row a 13-column grid (100px logo column plus 12), 40px top and 80px bottom padding, min 200px, 1px rule; description columns 3 to 6; image columns 7 to 9 grows from 0 to 160px tall on hover (0.4s CSS); row fill turns `#171717` on hover.
Shape: 184 images across the page; page 19,701px tall.

#### Contact form

Purpose: the form page. hurulab's Contact Us opens email instead, so take only the layout.
1440: title 88px serif top left, 684 wide; 41-word paragraph below; form in the right half (columns 7 to 12). Fields: name, email, referral, a stage select, message, newsletter checkbox, plus hidden UTM fields [read].
Behavior: the submit button's label slides up out and "Sending" slides in (0.3s), then "Message received"; field underlines retract with 0.2s total stagger; the form gap eases from its value to 15px over 1.8s Power4.easeInOut after 0.6s [read]. Validation timing: on submit, via a schema library [read, zod-style errors in the bundle].

#### Footer

Purpose: the ending and routes out. Carries the ending and Contact Us.
Standard footer (About, Work, case studies) at 1440: 776 tall. Top part 600px, full-bleed video with a scrim, big serif question 88px in columns 1 to 3, three link rows in columns 4 to 5 (16px, line height 2, 24px top and bottom padding, 1px white rules at 30% that turn solid on hover, and the row above a hovered row lights too). Bottom part 176px: three link columns 212 wide (social, company, legal) and an animated icon 24x64 bottom right. A 140px serif call-to-action label with a 4px underline that wipes out and back in over 0.7s on hover.
Links-only footer (Contact, Blog, 404): the 176px bottom row only.

#### 404

One screen: 88px serif title of 5 words, a 22px label and a video. Same header.

## Interaction and components

### Buttons

| Variant | Height | Font | Padding x | Ratio pad:font | Radius | Fill | Text |
|---|---|---|---|---|---|---|---|
| Header control, desktop | 24px | 12px, weight 350 | 16px | 1.33 | 50px | 20% grey plus blur | white |
| Header control, phone | 32px | 14px | 16px | 1.14 | 50px | same | white |
| List pill | 32px | 16px | 16px | 1.0 | 50px | same | white |
| Large | 36px | 26px | 16px | 0.62 | 50px | same | white |
| Filled | as above | as above | | | | page color | |
| Filled inverted | | | | | | white | black |
| Highlight | | | | | | accent | white |

States [read]: rest has a 1px transparent border. Hover: border turns white (black when inverted), fill turns transparent, 0.2s. Active filter: fill accent, padding-right grows to 1.75x to fit an x. Focus: `outline: none` with no replacement on buttons and links; the only visible focus is whatever the browser does on inputs. Press: no distinct style.

### Links

Text links in body copy use an underline that is a background image, drawn from left and removed to the right, 0.7s [read]. Menu links use the masked 1px line described above. Footer rows use border color.

### Cards

News card (menu): 225px wide, 12px padding, 8px radius, light grey fill with a matching 1px border that darkens on hover, dismiss x top right.

### Carousels

Review grid: a GSAP Draggable horizontal loop, alternate items dropped by 22.4vw, portrait items 31.2vw wide, landscape 40.2vw; cursor shows "Drag". Media slider: Swiper, centered, looping, auto width.

### Accordions

Info drawers: one open at a time [inferred from the single `activeIndex` pattern in the component], height transition.

### Forms and fields

Underlined fields on the page background, autofill forced to the page color with an inset 1000px shadow [read].

### Navigation behavior summary

- Never hides on scroll. Morphs into a 645px floating pill after 50px, completing at 400px [read].
- Menu opens as a framed window; the page shrinks into it.
- Following a link: wipe, menu-to-page, or expand, as above.

## Color (context only)

### Neutral ramp [read]

| Step | Hex | Relative luminance | Change from previous |
|---|---|---|---|
| 100 | #ffffff | 1.000 | |
| 99 | #fffbff | 0.972 | -0.028 |
| 95 | #f4eff4 | 0.878 | -0.094 |
| 90 | #e6e1e6 | 0.761 | -0.117 |
| 80 | #cac5ca | 0.568 | -0.193 |
| 70 | #aeaaae | 0.406 | -0.162 |
| 60 | #938f94 | 0.279 | -0.127 |
| 50 | #79767a | 0.184 | -0.095 |
| 40 | #605d62 | 0.112 | -0.072 |
| 35 | #545156 | 0.084 | -0.028 |
| 30 | #48464a | 0.062 | -0.022 |
| 25 | #3d3b3e | 0.045 | -0.017 |
| 20 | #313033 | 0.030 | -0.015 |
| 10 | #1c1b1e | 0.011 | -0.019 |
| 0 | #000000 | 0.000 | -0.011 |

Luminance values [inferred] by the WCAG formula from the hex values. The ramp is a tonal scale with a faint violet tint in the greys.

### Accent and other [read]

Accent #584dff; accent deep #100037; cool grey #edf1f5; mid grey #c7c7c7; error #ff6060 on dark, #b60000 on light. There is no accent hover or pressed step: highlight buttons do not change fill on hover, only border [read].

### Roles [read]

| Role | Dark theme (default) | Light theme |
|---|---|---|
| Page background | #000 | #fff |
| Raised surface | #171717 | #edf1f5 |
| Inverse surface (menu frame, footer) | #fff | #000 |
| Text primary | #fff | #000 |
| Text secondary | #cac5ca | #313033 |
| Text muted | #79767a | #605d62 |
| Hairline | #313033 | #c7c7c7 |
| Strong border | #fff | #000 |
| Accent | #584dff | #584dff |
| Control fill | hsla(0,0%,73%,0.2) | same |
| Header fill (scrolled) | rgba(186,186,186,0.6) | rgba(186,186,186,0.4) |
| Focus ring | none | none |
| Selection | browser default | browser default |
| Image scrims | black at 20, 40, 60% | same |

Theme changes animate every element tagged `data-themed` over 0.4s [read].

Gradients: one, the mask on the phone pill list, `linear-gradient(transparent 10%, #000 20%, #000 80%, transparent 90%)` [read].

Contrast [inferred, WCAG formula]: white on black 21:1; #cac5ca on black 12.4:1; #79767a on black 4.7:1; white on #584dff 5.4:1; #584dff on black 3.9:1 (fails for body text); #313033 on white 13.1:1; #605d62 on white 6.5:1.

## Typography (context only)

### Families [read]

| Family | Files | Weights loaded | Renders |
|---|---|---|---|
| PP Eiko (serif display) | ppeiko-light, ppeiko-regular | 300, 400 | Headings ask for 240, which falls to the 300 Light file [inferred from font matching rules] |
| Basis Grotesque Pro (sans) | off-white (300), regular (400), medium (500) | 300, 400, 500 | UI asks for 350, which falls to the 300 file [inferred from font matching rules] |

All `font-display: swap`. Stack confirmed on a heading and a paragraph with `getComputedStyle` [read].

### Raw sizes found, sorted (rem, 10px)

1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3.2, 3.6, 4, 4.4, 5.6, 6.4, 6.8, 8.4, 8.8, 10.9, 11, 12, 14, 16.32, 22, 27.2 [read]. No `clamp()` and no viewport-unit type; every size is fixed per breakpoint [read].

### Scale (desktop, from 967px)

| Step | Size | Ratio to previous | Family | Weight | Line height | Tracking | Role |
|---|---|---|---|---|---|---|---|
| caption | 12px | | sans | 350 | 1.2 | -0.01em | header labels, clock, menu headings |
| small | 14px | 1.17 | sans | 400 | 1.4 | -0.01em | mobile body |
| body | 16px | 1.14 | sans | 400 | 1.4 | -0.01em | paragraphs, pills |
| lead | 20px | 1.25 | sans or serif | 400 | 1.3 / 1.2 | -0.01em | intro paragraphs, menu links, numbered labels |
| subhead | 24px | 1.2 | sans | 400 | 1.16 to 1.2 | -0.01em | mobile quotes and row titles |
| h3 | 40px | 1.67 | sans -0.03em or serif | 400 | 1.2 / 1.3 | -0.03em sans | row titles, quotes, card titles |
| h2-sans | 56px | 1.4 | sans | 400 | 1.21 | -0.02em | case study chapter text |
| h2 | 64px | 1.14 | serif | 240 | 1.2 | -0.02em | section titles |
| stat | 84px | 1.31 | serif | 240 | 0.85 | -0.015em | numbers |
| h1 | 88px | 1.05 | serif | 240 | 1.182 (1.0 in the hero) | -0.02em | page titles, hero, case preview titles |
| display | 140px | 1.59 | serif | 300 | 1.2 | -0.015em | case study title, footer call to action, stats from 1512px |
| ticker | 220px | 1.57 | sans | 400 | 1.0 | -0.03em | running band |

The working steps are 16, 40, 64, 88, 140, 220: roughly x1.6 each step above body, with 88 as an extra step between 64 and 140.

Phone (below 967px): h1 44px (0.5 of desktop), h2 36px (0.56), display 64px (0.46), h3 24px (0.6), body 14px (0.875) [read].

Weights: 240/300 serif for all large display; 400 serif for small serif labels (menu links, numbers in lists); 400 sans for body; 350 sans for UI labels; 500 sans only for small column titles in case study heroes [read]. Case: sentence case everywhere, no uppercase styles in use [read].

Measure: body paragraphs are fixed at 212 to 250px on the home page (22.9 to 25rem, about 30 to 34 characters at 16px) and 444 to 451px in rows and forms (about 55 to 60 characters) [read box widths, characters inferred at 0.45em average].

---

# Tier two

## Look and feel

Cinematic, dark, quiet, and very sure of itself. It leans on photography and motion, with type used large and thin. Most of the screen at any moment is image or black; the text is small and placed on a strict grid with large gaps. At a glance you get one claim and ten names; everything else must be explored by pointing. The distinctive thing is the rounded rectangle that opens, frames and expands, used for loading, the menu, page changes and the case study entrance.

## Shape and surface

- Radius values found: 0, 2px, 8px, 10px, 15px, 30px, 50px, 50% [read]. In use: 8px on every card, thumbnail, window corner; 15px only for the loader window; 50px for all buttons.
- Borders: 1px hairlines (`0.1rem`) for list rows, rules and underlines; 1px transparent border on buttons that becomes visible on hover [read].
- Shadows: none. The only `box-shadow` is the autofill fix [read].
- Blur: 14px on buttons, 20px on the scrolled header [read]. Flagged.
- Overlays: black scrims at 15%, 20%, 40%, 60% over imagery [read].
- Z stack, low to high [read]: page 102, case study layer 104, active pill 105, page wipe 107, menu preview 108, menu 109, header 110, preview button 112, cursor 113; loader 101 sits below the page but the page is clipped while it runs.
- Images are always `object-fit: cover`, full bleed or in 8px-radius frames. They enter through clip windows or masks, never by fading alone.

## Graphics and motifs

The rounded-corner window, built from four panels and four 8px corner pieces. Thin 1px vertical and horizontal rules that draw in. A bullet as the separator in the running band. No textures, grain or patterns [read].

## Iconography

Few icons: mail, close x, arrow, sun, moon, play, pause, replay [read]. Stroke icons, 1px strokes at 10 to 16px, square caps [inferred from the SVG paths]. Custom set, not a library. Mail icon 10px wide inside the 24px contact button.

## Illustration

None. All imagery is product photography, device renders and video [read].

---

# Tier three

## Brand behavior

The logo is a wordmark, centered in the header at 80px wide (88px on phones), and stays centered as the header morphs into the pill [read]. It is also the home link. Favicon and `theme-color` meta are present [inferred: standard Next head, not inspected]. Personality shows in the serif headlines, the clock of offices, and the confidence of a one-screen home page.

## UX patterns

- Movement through the site: home pills to case studies, menu to pages, footer to contact.
- Form: validation on submit, inline error text in #ff6060, success replaces the button label with a thank-you line [read].
- Loading: the blog shows a spinning icon when loading more articles, and a progress rule of seen articles [read].
- Empty: blog filters show a "no results, clear" message [read].
- Error: the 404 page keeps the header and offers a label and a video.
- Keyboard: every pill has a hidden real link with an `aria-label` [read]. Buttons have `aria-label`s ("Open the main navigation menu"). No skip link found [inferred from walking the header DOM]. Focus rings are removed.
- Reduced motion: supported by collapsing durations.

## Information architecture

Primary: Menu with What We Do, About Us, Latest News, Get in Touch; Case Studies list (10 plus All work) [read]. Secondary: footer socials (4), company (Careers, Contact), legal (Privacy, Accessibility).

Sitemap observed: `/`, `/what-we-do`, `/about`, `/blog` and `/blog/<slug>`, `/work` and `/work/<slug>`, `/contact`, 404.

## Voice

Short, plain and confident. Headings are fragments ("We make interfaces", "Say hey.", "How can we help?"). Buttons are two words ("All work", "Get in touch", "View case study"). Sentence case throughout, periods on some headings, no exclamation marks [read].

---

# Effects inventory

| Effect | Where | Trigger | Duration | Easing | Travel | Build |
|---|---|---|---|---|---|---|
| Loader word hops | home, first visit | load | 1s per hop, looping | Power3.easeInOut | grid box to grid box | Do not copy |
| Clip-window reveal | every page load | load | 1.8s | Power3.easeInOut | 0 wide center column to full screen | Small script (SVG clipPath or `clip-path: inset()` with round) |
| Hero text fade | home | reveal +1.4s | 0.6s | GSAP default | none | CSS alone |
| Video cross-fade over blurred still | home, footer | video ready | 0.6s after 0.1s / 0.4s | CSS | none | CSS alone |
| Pill hover preview | home | pointer enter, 100ms intent | 0.8s in, 0.3s out | Power3.easeOut | text 40px, thumbnail from one edge | Small script |
| Thumbnail expand to case study | home | click | 1.5s | Power4.easeInOut | thumbnail to full screen | Small script |
| Case study hero settle | case study | arrival | 1.2s after 0.2s | Power3.easeInOut | 100vh to 58.2vw | Small script |
| Pill random depth | home | layer shown | 0.75s | GSAP default | z 1 to 100px | Small script, optional |
| Header morph | all | scroll 50 to 400px | scrubbed | linear, 0.08 lerp on release | width to 645px, y 12px | Small script |
| Menu frame | all | menu button | 1.2s in, 1.2s out | Power4.easeInOut in, Power3.easeInOut out | panels from off-screen | Small script (CSS transitions on four divs) |
| Page shrink into menu | all | menu open | 1.2s | Power3.easeInOut | scale 1 to 0.905 | CSS alone with a class |
| Menu lists slide | all | menu open +0.5s | 1.2s in, 0.9s out | Power3.easeOut | x -150px | CSS alone |
| Menu link underline | menu | hover | 0.6s in, 0.3s out | Power3.easeOut | -102% to 0 | CSS alone |
| Menu page preview | menu | hover link | 0.1s | GSAP default | none | Needs pre-rendered previews; skip |
| Menu button label swap | header | menu toggle | 0.6s | Power4.easeOut | one line up | CSS alone |
| Page wipe | all | internal link | 0.7s close, 0.5s hold, 0.7s open | Power4.easeInOut / Power3.easeInOut | four panels to center | Small script |
| Clock rotation | header | every 5s | 0.8s | Power3.easeOut | 105% | Do not copy |
| Section fade | all | enter viewport | 0.3s after 0.1s | GSAP default | none | CSS plus IntersectionObserver |
| Title then text fade | many | enter + 100px | 1s | GSAP default | none, 0.1s stagger | CSS plus IntersectionObserver |
| Description rows rise | What We Do | enter | row duration | Power3.easeOut | 90px | CSS plus IntersectionObserver |
| Row media reveal | What We Do | row active | 0.6s in, 0.3s out | Power3.easeOut | clip edges 100% to 0 | CSS alone |
| List columns rise | What We Do | enter | 2x base | Power3 | 40px, rule scaleX | CSS plus IntersectionObserver |
| Mask reveal | images | enter | 0.8s | Power3.easeInOut | clip edges 100% | CSS plus IntersectionObserver |
| Stat numbers | stats | enter | 1.8s | Power3.easeOut | 100% inside mask, 0.125s stagger | CSS plus IntersectionObserver |
| Hoverable columns | What We Do | enter, hover | 1.8s | Power3 | scale 0 to 1 | CSS plus IntersectionObserver |
| Video frame rise | What We Do | scroll | scrubbed | linear | its own height | Small script |
| Parallax image row | What We Do | scroll | scrubbed | linear | row overflow plus 15vw | Small script |
| Review card frame | What We Do | scroll | scrubbed | Power2.easeInOut | full bleed to 696x680 card | Small script |
| Cities scroller | About | scroll | scrubbed, 2vh | linear | list up, images fade to 0.7 | Small script |
| Running text band | What We Do | always | 0.8s per character | linear | one copy width | CSS alone |
| Review carousel drag | What We Do, About | drag | inertia | none | free | Library (Draggable) or native scroll-snap |
| Work row hover | Work | hover | 0.4s | CSS | image 0 to 160px tall, fill | CSS alone |
| Footer CTA underline | footer | hover | 0.7s | CSS | underline wipe | CSS alone |
| Footer row rules | footer | hover | 0.4s | CSS | color | CSS alone |
| Form submit label | Contact | submit | 0.3s | GSAP default | one line up | CSS alone |
| Theme switch | inner pages | toggle | 0.4s | CSS | color | CSS alone |
| Custom cursor | all | pointer | 0.3s | Power3.easeOut | follows pointer | Do not copy |
| Smooth scroll | all | wheel | 1.2s | expo out | | Library (Lenis) or skip |

---

# Rebuild note

## Swap freely

- hurulab's colors, fonts and logo, by definition.
- The dark default. The system works on any page color as long as the frame, wipe panels and footer use the inverse.
- Photography and video: any imagery that fills a 5:3 frame and survives `object-fit: cover`.
- The copy, the number of pills (the pattern holds from 5 to 12), the city clock, the news cards, the theme toggle.
- The custom cursor, the frosted fills, the blurred still, the loader: remove them.
- Lenis: optional; native scroll loses little.
- The review carousel, the ticker, the cities scroller: optional sections.

## Do not touch

- The rounded rectangle as the only way whole-screen changes happen: clip-window reveal on load, framed menu window, four-panel wipe between pages, thumbnail expanding into the next page. All with an 8px inner radius (15px for the load window).
- Enter slow, leave fast: 0.8s Power3.easeOut in against 0.3s out; 1.2s for panels; 1.5s for the expand; 1.8s for the reveal.
- Short travel: 40px for text, 90px for rows, one line height inside a mask. Never slide a whole page.
- The home pattern: a vertical column of pills at the left margin, vertically centered, 38px pitch, and a full-screen preview per item with text on a sixths grid (16.67%, 50%, 66.67%, 83.33% plus one gutter) and a thumbnail that grows from one edge, in one of three layouts.
- The thumbnail as a window onto the full image, so expanding it reveals the same picture, not a new one.
- The menu geometry: 30vw window, 80px top and bottom, page scaled to 1.1 times window height over viewport height, lists arriving 0.5s after the frame from 150px left.
- The header: three parts, logo optically centered at -40%, morph to a 645px floating pill over 350px of scroll after 50px.
- The grid: 12 columns, 24px gutter and margin, no max width; 6 columns and 16px below 967px. Paragraphs in 2 to 4 columns starting mid-grid; titles in columns 1 to 8 or 2 to 8.
- Section rhythm: 180px between sections on desktop, 140px on phones, 180px above the first; sections separated only by space.
- Type ratios: display steps 16, 40, 64, 88, 140 (about x1.6), phone display at half size, thin weight for all large type, tight tracking (-0.02em display, -0.01em body), serif display with a grotesk body.
- Reduced motion collapses durations instead of changing layouts.
