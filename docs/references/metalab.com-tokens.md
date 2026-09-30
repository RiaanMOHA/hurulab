# metalab.com tokens

Source: live DOM, computed styles, the production stylesheet (`/_next/static/css/15230c8daab2ecff.css`) and the GSAP calls in the production bundle (`_app-f1f4fa5f5e8d611f.js`), read on 2026-09-29. Values are [read] unless marked. Root font size is 10px, so 1rem = 10px. Cubic-bezier values are the standard equivalents of the named GSAP eases the site calls; the names are [read], the bezier numbers are [inferred] from those names.

```css
:root {
  /* Motion: durations. Every timed movement on the site uses one of these. */
  --duration-instant: 0.001s;            /* reduced-motion replacement for every tween */
  --duration-hover: 0.2s;                /* button border and fill swap, list item opacity */
  --duration-exit: 0.3s;                 /* anything leaving: case preview out, cursor, section fade, nav fade */
  --duration-theme: 0.4s;                /* color and border changes on theme or hover rows */
  --duration-quick: 0.6s;                /* hero title fade, menu button label swap, underline draw, video fade */
  --duration-wipe: 0.7s;                 /* page-transition frame closing and opening */
  --duration-enter: 0.8s;                /* case preview in, text blocks in, info drawers */
  --duration-hop: 1s;                    /* preloader word hop, first content-mask step, title+text blocks */
  --duration-panel: 1.2s;                /* menu open and close, case study hero settle, stat rows */
  --duration-page: 1.4s;                 /* generic page enter delay (framer variant) */
  --duration-expand: 1.5s;               /* home thumbnail expanding to full screen on click */
  --duration-reveal: 1.8s;               /* content mask to full viewport, big stat columns, list cells */
  --duration-preloader-hold: 3s;         /* first-visit loader holds before the full reveal */

  /* Motion: easing. Named GSAP ease in the comment. */
  --ease-out: cubic-bezier(0.165, 0.84, 0.44, 1);        /* Power3.easeOut, the default for entrances */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);        /* Power3.easeInOut, closing panels and masks */
  --ease-in-out-strong: cubic-bezier(0.86, 0, 0.07, 1);  /* Power4.easeInOut, menu open, wipe close, thumbnail expand */
  --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);     /* Power4.easeOut, menu button label swap */
  --ease-out-soft: cubic-bezier(0.215, 0.61, 0.355, 1);  /* Power2.easeOut, scrubbed card parallax */
  --ease-in-out-soft: cubic-bezier(0.645, 0.045, 0.355, 1); /* Power2.easeInOut, scrubbed review frame */
  --ease-linear: linear;                                 /* tickers, parallax scrubs */
  --ease-scroll: "t => min(1, 1.001 - 2^(-10t))";        /* Lenis smooth scroll curve, expo out */

  /* Motion: delays */
  --delay-short: 0.1s;                   /* section fade-in after mount, big-image transition start */
  --delay-mask: 0.2s;                    /* content mask first step */
  --delay-menu-content: 0.5s;            /* menu lists wait for the frame before sliding in */
  --delay-hero-text: 1.4s;               /* hero title and paragraph after the reveal starts */
  --delay-hover-intent: 100ms;           /* home pill hover to preview, debounced */
  --delay-scroll-hold: 500ms;            /* page wipe holds closed while scroll resets */

  /* Motion: stagger */
  --stagger-tight: 0.07s;                /* clock lines leaving */
  --stagger-base: 0.1s;                  /* text lines, list items, title then paragraph */
  --stagger-stat: 0.125s;                /* stat columns */
  --stagger-loose: 0.25s;                /* image cards, job rows */
  --stagger-wide: 0.3s;                  /* number then suffix, drawer rows */

  /* Motion: travel distances */
  --travel-nudge: 40px;                  /* case preview text, list columns rise */
  --travel-rise: 90px;                   /* description rows rise */
  --travel-list: 150px;                  /* menu lists slide from the left */
  --travel-panel: 300px;                 /* menu news cards slide from the right */
  --travel-line: 105%;                   /* masked text lines and labels, full line height */
  --travel-cursor-label: 110%;
  --travel-page: 101%;                   /* home layer drops out after a case study opens */

  /* Motion: scroll mapping */
  --scroll-duration: 1.2s;               /* Lenis, wheel only; touch is native */
  --scroll-wheel-multiplier: 1;
  --scroll-touch-multiplier: 1;
  --nav-morph-start: 50px;               /* scroll before the header starts to morph */
  --nav-morph-distance: 350px;           /* scroll over which the header morph completes */
  --nav-pill-width: 645px;               /* header width once morphed, desktop */
  --nav-pill-offset-y: 12px;

  /* Spacing: base 10px root, 8px step with 4px half steps. Raw values in the spec. */
  --space-2: 0.2rem;
  --space-4: 0.4rem;
  --space-8: 0.8rem;
  --space-12: 1.2rem;
  --space-16: 1.6rem;
  --space-24: 2.4rem;
  --space-32: 3.2rem;
  --space-40: 4rem;
  --space-48: 4.8rem;
  --space-56: 5.6rem;
  --space-64: 6.4rem;
  --space-80: 8rem;
  --space-120: 12rem;
  --section-gap: 18rem;                  /* between sections, desktop */
  --section-gap-mobile: 14rem;           /* between sections, below 967px */
  --section-gap-steps: 5.6rem 6.4rem 8rem 10rem 12rem 14rem 16rem; /* per-section overrides, desktop */
  --section-gap-steps-mobile: 4rem 4.8rem 5.6rem 6.4rem 8rem 10rem 12rem;
  --page-top: var(--section-gap);        /* first section padding-top on content pages */

  /* Grid: what governs columns and margins */
  --grid-columns: 12;                    /* at 967px and up */
  --grid-columns-mobile: 6;              /* below 967px */
  --gutter: 2.4rem;                      /* column gap and page margin, desktop */
  --gutter-mobile: 1.6rem;               /* column gap and page margin, mobile */
  --gutter-xs: 0.8rem;                   /* gap between header controls */
  --container-max: none;                 /* full bleed, no max width at any size */
  --header-height: 5.4rem;
  --header-height-mobile: 4.8rem;

  /* Breakpoints: where things reflow */
  --bp-mobile: 768px;
  --bp-desktop: 967px;                   /* the only structural switch: 6 to 12 columns, stacked to layered */
  --bp-laptop: 1200px;
  --bp-wide: 1512px;
  --bp-xl: 1800px;
  --bp-height-small: 590px;              /* menu hides its case study list below this height */
  --bp-height-medium: 690px;

  /* Radius */
  --radius-none: 0;
  --radius-hairline: 0.2rem;
  --radius-base: 0.8rem;                 /* cards, thumbnails, menu window corners */
  --radius-mask: 15px;                   /* opening reveal window */
  --radius-large: 1.6rem;
  --radius-pill: 5rem;                   /* every button */
  --radius-round: 50%;                   /* icon buttons, cursor */

  /* Borders */
  --hairline: 0.1rem;                    /* dividers, list rows, underlines */
  --hairline-opacity-footer: 0.3;        /* footer link rows at rest, full on hover */
  --frame-border-start: 40px;            /* review card frame before scroll */
  --frame-border-end: 16px;

  /* Shadow: the site uses none. */
  --shadow: none;

  /* Z-index, ordered */
  --z-page: 102;
  --z-hero-media: 1;
  --z-case-studies: 104;
  --z-active-pill: 105;
  --z-page-wipe: 107;
  --z-menu-preview: 108;
  --z-menu: 109;
  --z-header: 110;
  --z-preview-button: 112;
  --z-cursor: 113;
  --z-loader: 101;

  /* Controls */
  --button-padding-x: 1.6rem;
  --button-height-sm: 2.4rem;            /* header controls, desktop */
  --button-height-md: 3.2rem;            /* list pills, all mobile buttons */
  --button-height-lg: 3.6rem;

  /* Color roles. Context only, replaced by hurulab's. Default theme is dark. */
  --page-bg: #000;
  --surface-raised: #171717;
  --surface-inverse: #fff;
  --surface-sunken: #edf1f5;             /* light theme raised surface */
  --text-primary: #fff;
  --text-secondary: #cac5ca;
  --text-muted: #79767a;
  --text-primary-inverse: #000;
  --text-secondary-inverse: #313033;
  --text-muted-inverse: #605d62;
  --hairline-color: #313033;
  --hairline-color-inverse: #c7c7c7;
  --border-strong: #fff;
  --accent-base: #584dff;
  --accent-deep: #100037;
  --focus-ring: none;                    /* no focus style is defined */
  --control-fill: hsla(0, 0%, 73%, 0.2); /* translucent button fill */
  --nav-fill: rgba(186, 186, 186, 0.6);  /* morphed header fill, 0.4 on light theme */
  --error: #ff6060;
  --error-inverse: #b60000;
  --scrim-light: 0.2;                    /* black overlay on case preview backgrounds */
  --scrim-medium: 0.4;
  --scrim-dark: 0.6;

  /* Type. Context only, replaced by hurulab's two typefaces. */
  --font-display: "PP Eiko";             /* renders 300 for the 240 weight asked */
  --font-body: "Basis Grotesque Pro";
  --type-caption: 1.2rem;                /* nav labels, clock, small UI, desktop */
  --type-small: 1.4rem;                  /* mobile body, desktop meta */
  --type-body: 1.6rem;                   /* body and pill labels, desktop */
  --type-lead: 2rem;                     /* menu links, intro paragraphs */
  --type-subhead: 2.4rem;                /* mobile quotes, mobile row titles */
  --type-h3: 4rem;                       /* row titles, quotes, card titles, desktop */
  --type-h2: 6.4rem;                     /* section titles, desktop */
  --type-h1: 8.8rem;                     /* page and hero titles, desktop */
  --type-stat: 8.4rem;                   /* numbers, 14rem from 1512px */
  --type-display: 14rem;                 /* case study title, footer call to action */
  --type-ticker: 22rem;                  /* running text band */
  --type-h1-mobile: 4.4rem;
  --type-h2-mobile: 3.6rem;
  --type-display-mobile: 6.4rem;
  --leading-display: 1.182;
  --leading-heading: 1.2;
  --leading-body: 1.4;
  --leading-tight: 1;
  --tracking-display: -0.02em;
  --tracking-body: -0.01em;
  --tracking-large-sans: -0.03em;
}
```
