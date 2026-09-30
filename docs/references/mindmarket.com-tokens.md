# mindmarket.com tokens

Paste-ready custom properties. Every value was read from the live stylesheet or scripts on 2026-09-29 unless the comment says otherwise. Names describe the role, never the value. Groups marked "context only" will be replaced by hurulab's own values.

```css
:root {
  /* Motion durations: how long each class of movement takes */
  --motion-duration-flash: 100ms;          /* opacity companion to a 200ms move (menu panels, dropdown) */
  --motion-duration-press: 160ms;          /* button press scale on strategy pages */
  --motion-duration-fast: 200ms;           /* burger lines, panel slide, dialog fade, card lift */
  --motion-duration-base: 400ms;           /* hover grows, menu item rise, reveals, chevrons */
  --motion-duration-slow: 600ms;           /* tile background pop, image hover zoom, heavy reveal */
  --motion-duration-slower: 800ms;         /* first-load text rise in hero */
  --motion-duration-slowest: 1000ms;       /* preloader curtain wipe */
  --motion-duration-page: 750ms;           /* page transition, both pages move together */
  --motion-duration-accordion-open: 400ms; /* menu accordion height, GSAP power4.inOut */
  --motion-duration-accordion-close: 300ms;
  --motion-duration-details: 300ms;        /* native details accordion block-size */
  --motion-duration-character-pop: 1750ms; /* illustrated character reveal, elastic */
  --motion-duration-character-peek: 300ms; /* callout character rises on button hover */
  --motion-duration-wave-loop: 3s;         /* wavy underline scroll loop, linear infinite */
  --motion-duration-pulse-loop: 2.4s;      /* live trace loop on strategy page */
  --motion-duration-blink-loop: 1.2s;      /* live dot and skeleton pulse */

  /* Easing curves: the character of each movement */
  --ease-primary: cubic-bezier(.5, 0, 0, 1);            /* default in-out, strong middle */
  --ease-overshoot: cubic-bezier(.17, .67, .3, 1.33);   /* bouncy pop, used on anything that grows */
  --ease-smooth: cubic-bezier(.38, .005, .215, 1);      /* soft decelerate for surfaces and images */
  --ease-soft-in-out: cubic-bezier(.455, .03, .515, .955); /* tile text, image scale-down */
  --ease-reveal: cubic-bezier(.23, 1, .32, 1);          /* quick settle, reveals and dialogs */
  --ease-ios: cubic-bezier(.32, .72, 0, 1);             /* touch press, heavy reveal, loops */
  --ease-utility: cubic-bezier(.4, 0, .2, 1);           /* loading spinner fade */
  --ease-path-draw: cubic-bezier(.952, .017, .744, .69);/* scroll-drawn path, slow start */
  /* elastic.out(1, 0.3) from GSAP is used for character pops and the preloader dot; no CSS equivalent, use a linear() approximation or a small script */

  /* Delays and staggers: order within a group */
  --stagger-menu-item: 50ms;       /* mobile menu rows: delay = index * 50ms + 50ms */
  --stagger-menu-item-offset: 50ms;
  --stagger-reveal: 50ms;          /* grid cards: delay = (index mod 5) * 50ms */
  --stagger-dropdown-item: 25ms;   /* desktop dropdown links */
  --stagger-table-row: 70ms;       /* comparison table rows; accent bar follows +200ms */
  --delay-first-hit-step: 100ms;   /* hero lines: tagline 100ms, title 200ms */
  --delay-menu-enter: 200ms;       /* desktop bar slides in after first load */
  --delay-dropdown-hide: 200ms;    /* visibility waits for the fade out */
  --delay-tile-surface: 200ms;     /* white tile surface after colored layer */
  --delay-tile-title: 300ms;
  --delay-tile-text: 350ms;
  --delay-tile-action: 450ms;
  --delay-character-reveal: 150ms;
  --delay-preloader-hold: 1500ms;  /* store value added to hero character delay */

  /* Travel distances: how far things move */
  --travel-first-hit: 80px;        /* hero lines rise, no fade, no mask */
  --travel-reveal: 28px;           /* card reveal from below with fade */
  --travel-reveal-heavy: 40px;     /* heavy reveal, with 6px blur */
  --travel-panel: 1rem;            /* mobile menu panel and contact row rise */
  --travel-menu-item: 1rem;        /* mobile menu row rise */
  --travel-dropdown-panel: 1rem;
  --travel-dropdown-item: 1.25rem;
  --travel-tile-text: 10px;        /* tile copy drops in from above */
  --travel-card-lift: -4px;        /* card hover */
  --travel-table-row: -12px;       /* comparison rows slide in from the left */
  --travel-case-clip: 12px;        /* sticky visual crossfade offset */
  --travel-page-enter: 110svh;     /* next page starts below the fold */
  --travel-page-exit: 10svh;       /* previous page sinks */
  --travel-character-rise: 100px;  /* illustrated character pop */

  /* Scale steps: how much surfaces grow or shrink */
  --scale-hover-surface: 1.05;     /* button and link backgrounds */
  --scale-hover-icon: 1.1;
  --scale-press: .97;              /* button press, dialog panel entry */
  --scale-press-card-touch: .985;
  --scale-panel-enter: .9;         /* mobile menu panel backgrounds grow from 90% */
  --scale-dropdown-enter: .97;
  --scale-chip-enter: .8;          /* pill hover backgrounds grow from 80% */
  --scale-page-exit: .9;
  --opacity-page-exit: .5;
  --scale-hero-scroll-min: .8;     /* home hero shrinks to 80% while pinned */
  --scale-hero-illustrated-min: .75;
  --scale-character-start: .75;
  --scale-image-hover: 1.05;       /* plus 2deg rotation */
  --rotate-image-hover: 2deg;
  --rotate-stack-card-start: 10deg;/* alternating sign */
  --rotate-listing-visual-start: 10deg;
  --rotate-listing-image-start: 4deg;
  --scale-listing-image-start: 1.2;

  /* Scroll behavior: smoothing and parallax */
  --scroll-lerp: .1;               /* Lenis 1.3.17 defaults via Locomotive Scroll 5.0.0 */
  --scroll-wheel-multiplier: 1;
  --scroll-touch-multiplier: 1;
  --scroll-sync-touch: false;      /* touch stays native */
  --scroll-inview-root-margin: -1px;
  --parallax-speed-subtle: .02;
  --parallax-speed-light: .05;
  --parallax-speed-card: .1;
  --parallax-speed-strong: .15;
  --parallax-speed-image: -.1;     /* image inside a clipped frame, image is 4em taller */
  --rail-speed-idle: .35;          /* px per frame at 60fps */
  --rail-speed-fast: .6;

  /* Spacing scale: base unit and steps */
  --space-unit: .25rem;            /* every fixed gap is a multiple of this */
  --space-gutter: 20px;
  --space-margin: 20px;
  --space-fluid-xs: clamp(.5rem, .4565rem + .2174vw, .625rem);
  --space-fluid-sm: clamp(1rem, .8261rem + .8696vw, 1.5rem);
  --space-fluid-md: clamp(1.5rem, 1.3261rem + .8696vw, 2rem);
  --space-fluid-lg: clamp(2rem, 1.8261rem + .8696vw, 2.5rem);
  --space-fluid-xl: clamp(2.5rem, 2.1522rem + 1.7391vw, 3.5rem);
  --space-fluid-2xl: clamp(3.5rem, 2.9783rem + 2.6087vw, 5rem);
  --space-fluid-3xl: clamp(5rem, 3.9565rem + 5.2174vw, 8rem);      /* default section padding */
  --space-fluid-4xl: clamp(8rem, 7.3043rem + 3.4783vw, 10rem);     /* feature section padding */
  --space-safe-header: calc(var(--menu-bar-height) + 1rem);

  /* Grid: columns and container */
  --grid-columns-narrow: 6;        /* below 1000px */
  --grid-columns-wide: 16;         /* 1000px and up */
  --grid-content-start: 2;         /* content spans columns 2 to 15 (14 columns) */
  --grid-content-span: 14;
  --container-max: none;           /* full width, 20px side padding */
  --container-padding: 20px;
  --menu-bar-height-narrow: 3.75rem;
  --menu-bar-height-wide: 4rem;
  --menu-inset: 1rem;              /* floating bar sits 1rem from each edge */

  /* Breakpoints: min-width steps */
  --bp-2xs: 400px;
  --bp-xs: 500px;
  --bp-sm: 700px;
  --bp-md: 1000px;                 /* the main switch: 6 to 16 columns, mobile to desktop menu */
  --bp-lg: 1200px;
  --bp-xl: 1400px;
  --bp-2xl: 1600px;
  --bp-3xl: 1800px;
  --bp-4xl: 2000px;
  --bp-5xl: 2400px;
  /* root font-size: fluid 16 to 17px, fixed 15px between 1000 and 1199, 19px from 2000, 21.5px from 2400 */

  /* Radii: corner rounding by role */
  --radius-control: 10px;          /* buttons, bars, cards, inputs */
  --radius-panel: 20px;            /* image frames, dialogs, option tiles; 15px below 1000px */
  --radius-section: 50px;          /* every page block; 35px below 1000px */
  --radius-chip: 1.5rem;           /* tag pills */
  --radius-pill: 50px;             /* nav link hover background */
  --radius-capsule: 3.75rem;       /* brand rail items */
  --radius-small-tag: 5px;         /* mobile quote link */
  --radius-round: 100%;

  /* Borders: lines and rules */
  --border-hairline: 1px;          /* list separators, dialog head, table rows */
  --border-rule-accent: 4px;       /* left accent bar on highlighted table cell */
  --border-rule-accent-thick: .5rem; /* left accent bar on aside panels */
  --border-answer-bar: .375rem;    /* dialog answer bar */
  --border-progress-line: 2px;     /* step connector line, charcoal at 8% */
  --focus-ring-width: 2px;
  --focus-ring-offset-control: 3px;
  --focus-ring-offset-card: 2px;

  /* Shadows: the site is flat */
  --shadow-none: none;             /* no elevation shadows in the page system; layering is by color and radius only */
  --overlay-hero-dim-max: .4;      /* charcoal overlay grows 0 to 40% as the hero scrolls away */
  --scrim-dialog-opacity: .92;     /* page-ground color at 92% behind dialogs */

  /* Z-index: stacking order */
  --z-below: -1;
  --z-base: 0;
  --z-above: 1;
  --z-timeline-cards: 3;
  --z-stack-section: 10;
  --z-anchor-nav: 80;
  --z-header: 100;
  --z-modal: 200;
  --z-preloader: 300;

  /* Component sizing */
  --button-height: 3.75rem;        /* 60px at 16px root */
  --button-padding: .625rem;
  --button-gap: .5rem;
  --button-icon: 2.5rem;           /* round arrow chip inside the button */
  --button-small-height: 1.25rem;
  --button-small-icon: .625rem;
  --input-height: 3.75rem;
  --input-padding-x: 15px;
  --textarea-height: 250px;
  --icon-arrow: 1.25rem;
  --icon-menu: 22px;
  --icon-chevron: 10px;
  --icon-card: 3.75rem;
  --stack-card-min-height: 400px;  /* 550px on tall desktop screens */
  --decision-card-min-height: 2.75rem;

  /* Color roles: context only, replaced by hurulab's */
  --color-page-ground: #f5f1e4;    /* main background behind rounded blocks on index-type pages */
  --color-page-ground-alt: #e0dbce;/* main background on detail and listing pages */
  --color-surface: #ffffff;
  --color-surface-warm: #f5f1e4;
  --color-surface-sunken: #e0dbce;
  --color-transition-paper: #fbfbf0;
  --color-text-primary: #2c2e2a;
  --color-text-secondary: rgb(44 46 42 / .72);
  --color-text-muted: rgb(44 46 42 / .6);
  --color-hairline: #e0dbce;
  --color-border-strong: #c2bcad;
  --color-accent-home: #8ed462;
  --color-accent-services: #ff5c46;
  --color-accent-methodology: #f9d314;
  --color-accent-sectors: #2093ff;
  --color-accent-network: #f4acff;
  --color-accent-footer: #f5e211;
  --color-focus-ring: #2c2e2a;
  --color-selection-bg: #8ed462;
  --color-selection-text: #000000;
  --color-error: red;

  /* Type: context only, replaced by hurulab's two typefaces */
  --font-family: Inter, sans-serif;  /* 400, 500, 700, woff2, font-display swap */
  --font-weight-body: 500;
  --font-weight-strong: 700;
  --font-weight-stat: 400;
  --type-caption: clamp(.75rem, .7065rem + .2174vw, .875rem);
  --type-body: clamp(1rem, .9783rem + .1087vw, 1.0625rem);
  --type-body-large: clamp(1.1563rem, 1.1454rem + .0543vw, 1.1875rem);
  --type-heading-xxs: 1.5rem;
  --type-heading-xs: clamp(1.5rem, 1.413rem + .4348vw, 1.75rem);
  --type-heading-sm: clamp(1.625rem, 1.3641rem + 1.3043vw, 2.375rem);
  --type-heading-md: clamp(2.125rem, 1.7772rem + 1.7391vw, 3.125rem);
  --type-heading-lg: clamp(2.75rem, 2.0543rem + 3.4783vw, 4.75rem);
  --type-heading-xl: clamp(3.4375rem, 2.0245rem + 7.0652vw, 7.5rem);
  --type-display: clamp(3.625rem, 1.1033rem + 12.6087vw, 10.875rem); /* 9.7vw from 1000px */
  --leading-display: .95;
  --leading-heading-md: 1.15;
  --leading-heading-sm: 1.2;
  --leading-body: 1.25;
  --tracking-heading: -.06em;
  --tracking-body: -.04em;
  --tracking-kicker: .12em;
}

@media (max-width: 999px) {
  :root {
    --radius-panel: 15px;
    --radius-section: 35px;
  }
}
```
