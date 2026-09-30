# avalanche.com tokens

Source: live `:root` custom properties and stylesheet rules on https://www.avalanche.com/ (Astro + Tailwind v4, `Section.CNLbqeg7.css`), read in Chrome on 2026-09-29. Every value below is `[read]` from a CSS rule unless tagged otherwise. Fluid values keep their full `clamp()`; resolved pixels are given at 1920, 1440 and 1025 for the desktop branch, and at 1024 and 390 for the phone branch, computed from the clamp.

How the system scales: above 1024px almost every size is a `clamp()` whose preferred term is tuned so the value equals its 1920px design value times `vw / 1920`, with a floor reached at 1025px. At 1024px and below a second set of mostly fixed values takes over, and several of those are larger than the desktop floor. Treat 1920 as the design canvas and 1024 as the switch.

```css
:root {
  /* Motion: durations. Governs every transition and animation length. */
  --duration-state: 0.15s;          /* tailwind default transition */
  --duration-hover: 0.2s;           /* link and text color on hover, menu fade */
  --duration-mode: 0.3s;            /* background, fill and border color swaps */
  --duration-quick-move: 0.5s;      /* button fill wipe, nav link slide, accordion icon turn */
  --duration-drawer: 0.75s;         /* select field height */
  --duration-reveal: 1s;            /* base reveal travel, accordion rows, clip-path tiles, page transition */
  --duration-reveal-step: 0.4s;     /* added per split line: line n runs 1s + n * 0.4s */
  --duration-card-step: 0.2s;       /* added per card: card n runs 1s + n * 0.2s */
  --duration-slide-in: 1.5s;        /* scroller rows entering from the right */
  --duration-drift: 2s;             /* long drifts: hero-era split lines, deferred panels */
  --duration-page: 1s;              /* cross-document view transition, both layers */
  --duration-anchor-scroll: 2s;     /* in-page anchor jump on desktop */
  --duration-loop-fill: 6s;         /* statement fill color loop */
  --duration-marquee: 49s;          /* logo marquee lap, context only, do not copy */

  /* Motion: easings. The house curve is ease-out-cubic; everything settles, nothing bounces. */
  --ease-settle: cubic-bezier(0.2, 0.6, 0.35, 1);      /* ease-out-cubic, default for reveals and hovers */
  --ease-settle-strong: cubic-bezier(0.165, 0.84, 0.44, 1); /* ease-out-quart, button wipes, tiles */
  --ease-glide: cubic-bezier(0.6, 0, 0.35, 1);         /* ease-in-out-cubic, form labels, color modes */
  --ease-glide-strong: cubic-bezier(0.8, 0, 0.2, 1);   /* ease-in-out-quart, long 2s drifts, filters */
  --ease-leave: cubic-bezier(0.5, 0, 0.6, 0.2);        /* ease-in-cubic, menus closing */
  --ease-framework-default: cubic-bezier(0.4, 0, 0.2, 1);       /* tailwind default, rarely used */
  --ease-anchor: expo-out;                              /* JS: t => min(1, 1.001 - 2^(-10t)) */

  /* Motion: delays and stagger. */
  --delay-line: 0.2s;               /* every split heading and paragraph waits this long after its section turns visible */
  --delay-card: 0.2s;               /* first side element (hero feature card) */
  --delay-actions: 0.4s;            /* primary button row */
  --delay-proof: 0.6s;              /* trust line under the buttons */
  --stagger-link: 25ms;             /* mega menu and footer link cascade, per item */
  --stagger-link-offset: 10;        /* mobile accordion links wait (index + 10) * 25ms */
  --stagger-menu-row: 0.1s;         /* mobile menu rows: duration 0.5s + index * 0.1s */

  /* Motion: travel. Things enter by the full length of their own box, clipped by a parent. */
  --travel-line: -100%;             /* split lines drop in from above inside an overflow clip */
  --travel-actions: calc(-100% - 2px); /* buttons drop in from above, clipped */
  --travel-card-up: 100%;           /* cards rise from their own full height below */
  --travel-row-in: 100%;            /* scroller rows enter from the right, translateX */
  --travel-side-card: calc(-100% - 2px); /* hero feature card enters from the left */
  --travel-panel: 50%;              /* wide panel rises half its height */
  --travel-image-lift: var(--space-3xl); /* foreground image rises one 3xl space */
  --page-exit-scale: 0.9;           /* old page shrinks to this */
  --page-exit-opacity: 0.5;         /* and fades to this */
  --page-enter-from: translateY(100%); /* new page slides up a full viewport */

  /* Motion: triggers. */
  --reveal-trigger: "section top reaches viewport bottom minus 1px";  /* anime.js onScroll enter: top top+=innerHeight-1 */
  --reveal-reset: "section top drops back below viewport bottom";     /* class removed, replays on next entry */
  --smooth-scroll-duration: 0.8s;   /* Lenis, only above 1024px on non-touch */

  /* Spacing: one fluid scale, used for padding, margin and gap alike. Values at 1920 / 1440 / 1025. */
  --space-xs:  clamp(0.25rem, calc(-0.036rem + 0.447vw), 0.5rem);   /* 8 / 5.9 / 4 */
  --space-sm:  clamp(0.375rem, calc(-0.054rem + 0.67vw), 0.75rem);  /* 12 / 8.8 / 6 */
  --space-base: clamp(0.5rem, calc(-0.073rem + 0.894vw), 1rem);     /* 16 / 11.7 / 8 */
  --space-md:  clamp(0.75rem, calc(-0.109rem + 1.341vw), 1.5rem);   /* 24 / 17.6 / 12 */
  --space-lg:  clamp(1rem, calc(-0.145rem + 1.788vw), 2rem);        /* 32 / 23.4 / 16 */
  --space-xl:  clamp(1.625rem, calc(0.05rem + 2.458vw), 3rem);      /* 48 / 36.2 / 26 */
  --space-2xl: clamp(2.125rem, calc(-0.022rem + 3.352vw), 4rem);    /* 64 / 47.9 / 34 */
  --space-3xl: clamp(3.25rem, calc(0.101rem + 4.916vw), 6rem);      /* 96 / 72.4 / 52 */
  --space-4xl: clamp(4.25rem, calc(-0.045rem + 6.704vw), 8rem);     /* 128 / 95.8 / 68 */
  --space-5xl: clamp(5.375rem, calc(0.078rem + 8.268vw), 10rem);    /* 160 / 120.3 / 86 */
  --space-6xl: clamp(6.625rem, calc(-0.103rem + 10.503vw), 12.5rem); /* 200 / 149.6 / 106 */

  /* Grid: governs the page frame and the decorative column lines. */
  --page-max: 1920px;               /* container max width */
  --page-frame-max: calc(1920px + var(--space-lg) * 2);
  --page-gutter: var(--space-lg);   /* side margin above 1024px */
  --page-gutter-phone: var(--space-base); /* 16px at 1024 and below */
  --grid-columns: 5;                /* decorative column lines and the hero split, 2 on phone */
  --grid-column-width: calc((100vw - var(--space-lg) * 2 + 8px) / 5); /* one column, also the width of side cards */
  --grid-column-width-phone: calc((100vw - var(--space-base) * 2) / 2);
  --grid-line-width: 1px;
  --menu-columns: 12;               /* mega menu inner grid: 4 title, 5 links, 3 feature */
  --navbar-height: clamp(3rem, calc(0.143rem + 4.464vw), 5.5rem); /* 88 / 66.6 / 48 */

  /* Breakpoints: 1025 is the only one that changes the design; the rest cap the container. */
  --bp-sm: 640px;                   /* two-column forms */
  --bp-md: 768px;                   /* a few delay tweaks */
  --bp-desktop: 1025px;             /* desktop layout, Lenis on, hover menus, fluid tokens */
  --bp-container-steps: 380px 640px 768px 1025px 1366px 1440px 1920px 2560px;

  /* Controls. */
  --control-height: clamp(2.375rem, calc(-0.059rem + 3.799vw), 4.5rem); /* 72 / 53.8 / 38 */
  --control-height-phone: 4.5rem;   /* 72 */
  --control-accent-bar: var(--space-xs); /* 8px at 1920, 8px (w-2) on phone */
  --control-arrow-size: clamp(0.375rem, calc(0.089rem + 0.447vw), 0.625rem); /* 10 at 1920 */
  --icon-button-size: var(--space-xl);    /* round prev and next buttons */
  --tag-height: clamp(1.375rem, calc(0.802rem + 0.894vw), 1.875rem); /* 30 / 23.4 / 22, phone 30 */

  /* Radii: almost everything is square; only large feature panels and tags round. */
  --radius-none: 0;
  --radius-panel: var(--space-lg);  /* feature panels and carousel tiles, 32 at 1920 */
  --radius-panel-phone: var(--space-base); /* 16 */
  --radius-tile-alt: clamp(1rem, calc(-0.143rem + 1.786vw), 2rem); /* statement panel, 32 at 1920 */
  --radius-full: 9999px;            /* tags and round icon buttons */

  /* Borders: hairlines only, always 1px. */
  --border-hairline: 1px;
  --border-accent-bar: var(--space-xs); /* the red vertical bar used as a leading edge */
  --border-accent-rule: 0.25rem;    /* 4px red rule on card bottoms and tops (h-1) */

  /* Shadows: none. Depth comes from fills and the scrim, never from shadow. */
  --shadow-none: none;

  /* Z-index: ordered stack, lowest first. */
  --z-background-media: -2;         /* fixed video layer */
  --z-grid-lines: -1;               /* decorative column lines, section scrims */
  --z-content: 1;
  --z-hero: 2;
  --z-view-transition-nav: 100;
  --z-navigation: 101;

  /* Scrims. */
  --scrim-media: rgb(0 0 0 / 0.6);  /* over the fixed background video */
  --noise-opacity: 0.4;             /* feTurbulence grain, baseFrequency 0.8, grayscale */

  /* ---------- context only, replaced by hurulab's ---------- */

  /* Color roles, context only, replaced by hurulab's. */
  --color-page: #0a0a0a;
  --color-ground: #000000;
  --color-surface-raised: #212020;  /* buttons, cards */
  --color-surface-card: #131314;    /* news cards */
  --color-surface-nav: #1d1d1d;
  --color-surface-light: #e1dfe9;   /* contact panel, the one light section */
  --color-text-primary: #ffffff;
  --color-text-body: #c6cccd;
  --color-text-heading-muted: #a2afb2;
  --color-text-muted: #888c8d;
  --color-text-on-light: #000000;
  --color-hairline: #383838;
  --color-hairline-grid: rgb(56 56 56 / 0.2);
  --color-border-field: #c6cccd;
  --color-accent: #e22b35;
  --color-accent-hover-fill: #c6cccd;   /* red button wipes to light grey */
  --color-accent-pressed: #b72129;
  --color-accent-tint: #fbdbdb;
  --color-success: #4ade80;
  --color-error: #dc2626;
  --color-focus: auto;                  /* browser default outline, no custom ring */

  /* Type, context only, replaced by hurulab's. Values at 1920 / 1440 / 1025, phone at 1024 / 390. */
  --font-display: "aeonik", system-ui, sans-serif; /* weights 400, 500, 700, 900 */
  --font-body: "aeonik", system-ui, sans-serif;
  --text-xs:  0.75rem;                                          /* 12 */
  --text-sm:  clamp(0.75rem, calc(0.607rem + 0.223vw), 0.875rem); /* 14 / 12.9 / 12, phone 14 */
  --text-base: clamp(0.75rem, calc(0.464rem + 0.447vw), 1rem);  /* 16 / 13.9 / 12, phone 16 */
  --text-lg:  clamp(0.875rem, calc(0.589rem + 0.447vw), 1.125rem); /* 18 / 15.9 / 14, phone 18 */
  --text-xl:  clamp(0.875rem, calc(0.446rem + 0.67vw), 1.25rem); /* 20 / 16.8 / 14, phone 20 */
  --text-2xl: clamp(1rem, calc(0.427rem + 0.894vw), 1.5rem);    /* 24 / 19.7 / 16, phone 22 */
  --text-3xl: clamp(1.125rem, calc(0.123rem + 1.564vw), 2rem);  /* 32 / 24.5 / 18, phone 36 / 32.1 */
  --text-4xl: clamp(1.375rem, calc(0.087rem + 2.011vw), 2.5rem); /* 40 / 30.4 / 22, phone 26 / 24 */
  --text-5xl: clamp(1.625rem, calc(0.05rem + 2.458vw), 3rem);   /* 48 / 36.2 / 26, phone 30 / 28 */
  --text-6xl: clamp(2.125rem, calc(-0.022rem + 3.352vw), 4rem); /* 64 / 47.9 / 34, phone 50 / 46.1 */
  --text-7xl: clamp(3.25rem, calc(0.101rem + 4.916vw), 6rem);   /* 96 / 72.4 / 52, phone 52 / 48.1 */
  --text-8xl: clamp(5.5rem, calc(0.06rem + 8.492vw), 10.25rem); /* 164 / 123.2 / 88, phone 60 / 52.2 */
  --text-9xl: clamp(6.625rem, calc(-0.103rem + 10.503vw), 12.5rem); /* 200 / 149.6 / 106, phone 64 / 56.2 */
  --leading-display: 0.85;          /* all headings */
  --leading-hero: 0.77;             /* hero title only */
  --leading-body: 1.25;
  --leading-long-read: 1.5;
  --leading-label: 1;
  --tracking-display: -0.03em;      /* h1 to h5 */
  --weight-display: 900;
  --weight-strong: 700;
  --weight-control: 500;
  --weight-body: 400;
  --case-display: uppercase;
  --case-control: capitalize;
  --measure-body: 60ch;
  --measure-intro: 96ch;
}
```
