# trionn.com-tokens.md

Tokens extracted from https://trionn.com/ on 2026-09-29. Values are tagged in comments: [read] from CSS, DOM or shipped JS source, [watched] seen happen, [inferred] reasoned. Pixel values in comments are at a 1440 wide viewport, where 1rem = 14.4px.

```css
:root {
  /* Fluid root. The whole site scales from this one line: html { font-size: calc(1000vw / var(--root-divisor)) }. Every rem below grows with the viewport. [read] */
  --root-divisor: 320;                 /* < 440px  → 1rem = vw/32     (390 → 12.19px) [read] */
  /* @media (min-width: 440px)  { --root-divisor: 360; }   [read] */
  /* @media (min-width: 640px)  { --root-divisor: 480; }   [read] */
  /* @media (min-width: 768px)  { --root-divisor: 750; }   (768 → 10.24px) [read] */
  /* @media (min-width: 1024px) { --root-divisor: 850; }   (1024 → 12.05px) [read] */
  /* @media (min-width: 1280px) { --root-divisor: 1000; }  (1440 → 14.4px) [read] */
  /* @media (min-width: 1441px) { --root-divisor: 1180; }  [read] */
  /* @media (min-width: 1536px) { --root-divisor: 1280; }  (1920 → 15px) [read] */

  /* Motion: durations. How long things take. */
  --motion-instant: 150ms;             /* default css transition, hover fills [read] */
  --motion-fast: 300ms;                /* header pills, nav char exit, menu icon, fade-out of hero stats [read] */
  --motion-quick: 420ms;               /* page-transition belts closing [read] */
  --motion-base: 500ms;                /* page-transition belts opening, accordion close, container unblur, css colour swaps [read] */
  --motion-accordion-open: 600ms;      /* accordion expand [read] */
  --motion-reveal: 800ms;              /* text piece unblur, fade-up, menu items, mobile menu slide [read] */
  --motion-label: 840ms;               /* page-transition label rise, flying plus marks [read] */
  --motion-expand: 900ms;              /* loader panel grows to full screen; loader plus marks fly in [read] */
  --motion-line-draw: 1200ms;          /* card rule lines draw; image crossfade; desktop menu clip reveal [read] */
  --motion-loader-count: 2000ms;       /* loader 00 to 100 count and frame stroke draw [read] */
  --motion-word-cycle: 3000ms;         /* rotating-word interval (banned pattern, context only) [read] */

  /* Motion: delays. When things start relative to the page becoming ready. */
  --delay-hero-text: 1200ms;           /* hero headline, CTAs, stats wait this long after the transition-ready signal [read] */
  --delay-hero-sub: 1500ms;            /* hero sub paragraph [read] */
  --delay-follow: 300ms;               /* a paragraph revealing after its heading [read] */
  --delay-menu-items: 600ms;           /* desktop menu items start 0.6s into the panel reveal [read] */
  --delay-loader-pause: 150ms;         /* gap between loader logo build and count [read] */

  /* Motion: stagger intervals. Gap between siblings in a group. */
  --stagger-char: 50ms;                /* chars in headings, order random [read] */
  --stagger-char-hero: 80ms;           /* chars in hero h1, order random [read] */
  --stagger-word: 50ms;                /* words in labels and captions, order random [read] */
  --stagger-scrub-char: 30ms;          /* scroll-scrubbed colour fill on about h2, in timeline units [read] */
  --stagger-menu-item: 100ms;          /* menu links [read] */
  --stagger-menu-meta: 80ms;           /* menu footer items, 50ms on mobile [read] */
  --stagger-belt: 38ms;                /* page-transition belts, top to bottom in, bottom to top out [read] */
  --stagger-button-char: 30ms;         /* button label chars shifting on hover [read] */
  --stagger-nav-char-out: 25ms;        /* nav link chars leaving on hover [read] */
  --stagger-nav-char-in: 40ms;         /* nav link clone chars arriving [read] */
  --stagger-card-line: 100ms;          /* work card rules drawing, per card index [read] */

  /* Motion: easing. GSAP names mapped to cubic-bezier. */
  --ease-reveal: cubic-bezier(0.25, 0.46, 0.45, 0.94);   /* gsap power2.out, all text and fade reveals [inferred: Penner equivalent of power2.out] */
  --ease-exit: cubic-bezier(0.55, 0.085, 0.68, 0.53);    /* gsap power2.in, chars leaving [inferred: Penner equivalent] */
  --ease-panel: cubic-bezier(0.645, 0.045, 0.355, 1);    /* gsap power3.inOut, accordion [inferred: Penner equivalent] */
  --ease-dim: cubic-bezier(0.215, 0.61, 0.355, 1);       /* gsap power3.out, menu sibling dimming; also easeOutCubic used by Lenis and belts [inferred: Penner equivalent] */
  --ease-sweep: cubic-bezier(0.87, 0, 0.13, 1);          /* gsap expo.inOut, menu open and mobile menu slide [inferred: Penner equivalent] */
  --ease-settle: cubic-bezier(0.16, 1, 0.3, 1);          /* expo.out, loader tagline words and mobile menu rule [read in CSS for tagline] */
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);           /* project card fade on /work [read] */
  --ease-button: ease;                                    /* button char shift and arrow swap, Web Animations API [read] */
  --ease-crossfade: cubic-bezier(0.445, 0.05, 0.55, 0.95);/* gsap power1.inOut, image crossfades [inferred: Penner equivalent] */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);          /* tailwind default, pills and links [read] */

  /* Motion: travel distances. How far things move. */
  --travel-fade-up: 20px;              /* fade-in blocks and menu items rise this far, fixed px [read] */
  --travel-blur: 12px;                 /* text starts at blur(12px), ends at 0 [read] */
  --travel-nav-char: 10px;             /* nav chars leave up or down alternately [read] */
  --travel-button-arrow: 28px;         /* button arrow exits right by this [read] */
  --travel-menu-arrow: 8px;            /* menu row arrow slides in [read] */
  --travel-tagline: 6px;               /* loader tagline words rise [read] */
  --travel-transition-label: 100px;    /* page-transition label enters from +100px, exits to -100px [read] */
  --travel-work-card-rise: 550px;      /* work cards rise from 550px below as they cross the viewport [read] */
  --travel-plus-spin: 720deg;          /* plus marks spin while travelling [read] */

  /* Motion: scroll distances consumed by pinned sections, as % of viewport height. */
  --pin-hero-canvas: 400%;             /* hero canvas, pinSpacing false, 300% on touch [read] */
  --pin-vision: 200%;                  /* marquee + stripe wipe section, 150% on touch [read] */
  --pin-work-services: 1350%;          /* project track + services sequence, 1060% under 768px [read] */
  --pin-process: 300%;                 /* how-we-work steps + stripe wipe, 250% without stripes [read] */
  --pin-orbit: 650%;                   /* image orbit section, 450% under 768px [read] */
  --scrub-lag: 0.6s;                   /* scrub smoothing on pinned timelines [read] */
  --scrub-lag-cards: 2s;               /* scrub smoothing on key fact cards [read] */

  /* Smooth scroll (Lenis). */
  --scroll-duration: 1.05s;            /* easeOutCubic [read] */
  --scroll-wheel-multiplier: 0.85;     /* 0.6 on Mac [read] */
  --scroll-touch-multiplier: 1.1;      /* 1.2 on touch devices, syncTouch on [read] */

  /* Spacing. Tailwind 0.25rem unit, so every step scales with the fluid root. */
  --space-unit: 0.25rem;               /* 3.6px [read] */
  --space-2xs: 0.375rem;               /* 5.4px pill top padding [read] */
  --space-xs: 0.5rem;                  /* 7.2px header cluster gap, pill bottom padding [read] */
  --space-s: 1rem;                     /* 14.4px field padding, pill side padding, menu inset [read] */
  --space-m: 1.5rem;                   /* 21.6px grid gutter [read] */
  --space-l: 2rem;                     /* 28.8px card padding (mobile), accordion row padding [read] */
  --space-xl: 2.5rem;                  /* 36px page margin, card padding, stack gap [read] */
  --space-2xl: 5rem;                   /* 72px block gap, section bottom padding [read] */
  --space-3xl: 6.25rem;                /* 90px section top padding (small), 90px gap above buttons [read] */
  --space-4xl: 7.5rem;                 /* 108px hero top padding [read] */
  --space-5xl: 9.375rem;               /* 135px section top and bottom padding at 1024+ [read] */
  --space-6xl: 10rem;                  /* 144px key facts bottom padding [read] */
  --space-7xl: 12.5rem;                /* 180px vision section vertical padding on mobile [read] */

  /* Grid. */
  --grid-columns: 12;                  /* [read] */
  --grid-gutter: 1.5rem;               /* 21.6px [read] */
  --page-margin: 2.5rem;               /* 36px at 768+, 1.5rem below [read] */
  --container-max: none;               /* container is full bleed, no max width on the main grid [read] */
  --measure-body: 16.25rem;            /* 234px hero sub column (max-w-65) [read] */
  --measure-card-copy: 22rem;          /* 317px service card copy (max-w-88) [read] */
  --measure-accordion: 33rem;          /* 475px answer text (max-w-132) [read] */

  /* Breakpoints. Media queries use 16px rem, not the fluid root. */
  --bp-sm: 640px;                      /* [read] */
  --bp-md: 768px;                      /* main layout switch: stacked to columns, mobile menu to panel [read] */
  --bp-lg: 1024px;                     /* 4 of 12 column splits appear, hero stats appear [read] */
  --bp-xl: 1280px;                     /* [read] */
  --bp-2xl: 1536px;                    /* [read] */
  --bp-4xl: 2000px;                    /* type steps down one size [read] */

  /* Radii. */
  --radius-hairline: 0.125rem;         /* 1.8px thumbnails [read] */
  --radius-small: 0.25rem;             /* 3.6px info boxes, video frames [read] */
  --radius-card: 0.5rem;               /* 7.2px cards, fields, menu panel [read] */
  --radius-pill: 9999px;               /* header pills, sound toggle [read] */

  /* Borders. */
  --border-hairline: 1px;              /* every rule and outline on the site [read] */
  --border-underline: 0.063rem;        /* button underline, min 1px [read] */
  --border-loader-frame: 1.5px;        /* loader box [read] */

  /* Shadows. The site uses none; depth comes from colour blocks and z order. */
  --shadow-none: none;                 /* [read] */

  /* Blur. */
  --blur-reveal: 12px;                 /* text reveal start state [read] */
  --blur-nav-exit: 5px;                /* nav link chars leaving [read] */
  --blur-panel: 12px;                  /* service cards backdrop (frosted, do not copy) [read] */

  /* Z-index, low to high. */
  --z-content: 1;                      /* main [read] */
  --z-hero-copy: 3;                    /* hero sections over the canvas [read] */
  --z-section-raised: 20;              /* key facts, testimonials sliding over pinned content [read] */
  --z-stripes: 30;                     /* stripe wipes [read] */
  --z-menu: 40;                        /* menu panel and mobile sheet [read] */
  --z-header: 99;                      /* fixed header [read] */
  --z-loader-backdrop: 9050;           /* [read] */
  --z-loader: 9100;                    /* [read] */
  --z-transition: 9200;                /* page transition belts [read] */
  --z-transition-label: 9250;          /* [read] */
  --z-loader-center: 9350;             /* [read] */
  --z-loader-counter: 9400;            /* [read] */
  --z-flying-marks: 9500;              /* plus marks, top of everything [read] */

  /* Colour roles. Context only, replaced by hurulab's. */
  --color-page-dark: #040508;          /* html and body background, footer, dark sections [read] */
  --color-hero: #0c0c0c;               /* hero background [read] */
  --color-field: #131415;              /* form field rest fill [read] */
  --color-surface-ink: #272727;        /* dark cards, key fact card 1 [read] */
  --color-surface-ink-2: #2f3135;      /* team card [read] */
  --color-hairline-on-dark: #2f323b;   /* rules and box borders on dark [read] */
  --color-text-on-light: #434343;      /* body and headings on light [read] */
  --color-text-muted: #9c9c9c;         /* [read] */
  --color-surface-grey-3: #c3c3c3;     /* orbit section, testimonial gradient end [read] */
  --color-panel: #c8c8c8;              /* loader and transition belts [read] */
  --color-surface-grey-2: #d2d2d2;     /* stripe wipe colour, key facts gradient top, field focus fill [read] */
  --color-text-on-dark: #d8d8d8;       /* body and headings on dark [read] */
  --color-surface-cream: #e6e4e2;      /* key fact card 2, menu border [read] */
  --color-page-light: #ffffff;         /* light sections, pills, menu panel [read] */
  --color-hairline-on-light: rgb(67 67 67 / 0.15);  /* rules on light [read] */
  --color-scrub-rest: rgb(216 216 216 / 0.1);       /* about h2 before scroll fill [read] */
  --color-error: #d9432b;              /* form errors [read] */
  --color-accent: none;                /* no chromatic accent on the page [read] */
  --color-selection: transparent;      /* text selection is invisible site wide [read] */
  --gradient-light-rise: linear-gradient(0deg, #ffffff 0%, #d2d2d2 100%);   /* key facts: grey at top, white at bottom [read] */
  --gradient-light-fall: linear-gradient(180deg, #ffffff 0%, #c3c3c3 100%); /* testimonials [read] */
  --gradient-dark-fade: linear-gradient(180deg, #040508 0%, rgb(4 5 8 / 0) 100%); /* 10rem fade at top of contact form [read] */

  /* Type scale. Context only, replaced by hurulab's two typefaces. px at 1440. */
  --font-display: "Familjen Grotesk";  /* headings, labels, numbers, menu [read] */
  --font-body: "Neue Haas Display";    /* paragraphs, Roman 400 [read] */
  --font-mono: "Martian Mono";         /* buttons only, Light [read] */
  --font-serif: "PP Editorial New";    /* inner-page big numbers only, Ultralight [read] */
  --text-marquee: clamp(5rem, 9.164vw, 10rem);   /* 131.96px, lh 0.672 to 1, ls -0.08em [read] */
  --text-h1: clamp(3.75rem, 6.614vw, 6.25rem);   /* 90px, lh 81px, ls -0.06em [read] */
  --text-h2-big: clamp(3.5rem, 6.349vw, 6rem);   /* 86.4px, lh 79.2px, ls -0.06em [read] */
  --text-h2: clamp(2.5rem, 6.283vw, 5.938rem);   /* 85.5px, lh 81px, ls -0.06em [read] */
  --text-number: 3.5rem;               /* 50.4px, lh 45px, ls -0.06em [read] */
  --text-h3: 2.25rem;                  /* 32.4px at 1280+, 1.75rem below, lh 1, ls -0.04em [read] */
  --text-h4: 1.125rem;                 /* 16.2px, lh 18px, ls -0.02em [read] */
  --text-body: 1.125rem;               /* 16.2px at 1024 to 1535, 1.25rem outside, lh normal [read] */
  --text-label: 1.063rem;              /* 15.3px uppercase, lh 1, ls -0.02em [read] */
  --text-base: 1rem;                   /* 14.4px [read] */
  --text-button: 0.875rem;             /* 12.6px mono uppercase, ls -0.06em [read] */
}
```
