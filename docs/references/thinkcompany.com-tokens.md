# thinkcompany.com-tokens.md

Design tokens harvested from https://www.thinkcompany.com/ on 2026-09-29. Source: the single stylesheet `/_astro/Default.CAYa2-dS.css` (2,148 rules, 300,758 characters, read in full) and the page's ES modules (GSAP 3.15, ScrollTrigger, SplitText, Lenis, Embla, Taxi). The site ships almost no token layer: `:root` defines only the 12-column grid. Every other value below was collected from the rules that use it, sorted, and named by role. Every value is `[read]` unless tagged otherwise.

Fluid system note: every `clamp()` on the site interpolates over the same viewport range, 500px to 1440px. Below 500 the minimum holds, above 1440 the maximum holds. Resolved values are given as 1440 / 1024 / 390.

```css
:root {
  /* Viewport interpolation range shared by every fluid value on the site. */
  --fluid-min-viewport: 500px;
  --fluid-max-viewport: 1440px;

  /* Motion: durations. Micro interactions, reveals, page and menu choreography. */
  --duration-ui: 250ms;                 /* color, opacity, fill, border on hover and focus */
  --duration-underline: 300ms;          /* link underline slide-in */
  --duration-button-fill: 325ms;        /* button background wipe from bottom */
  --duration-card-reveal: 500ms;        /* card hover: blurb row opens, title lifts, overlay grows */
  --duration-results-content: 600ms;    /* problem and solution text inside a result card */
  --duration-menu-slide: 600ms;         /* menu panel slides up */
  --duration-menu-links: 600ms;         /* each menu link rises out of its mask */
  --duration-menu-close: 200ms;         /* menu fades out */
  --duration-page-wipe-out: 330ms;      /* color wipe covers the page */
  --duration-page-shift-out: 330ms;     /* old page drops 100px and darkens, starts when wipe finishes */
  --duration-page-wipe-in: 500ms;       /* color wipe leaves upward */
  --duration-list-fade: 800ms;          /* work listing grid fade in */
  --duration-fade-item: 935ms;          /* non-split reveal item: 1.1s x 0.85 */
  --duration-text-line: 1100ms;         /* split-line text reveal, per line */
  --duration-hero-cards: 1700ms;        /* hero photo cards fly in from the edges */
  --duration-heading-fade-in: 2000ms;   /* pinned display heading fades in */
  --duration-heading-fade-out: 500ms;   /* pinned display heading fades out on scroll back */
  --duration-story-expand: 1000ms;      /* read more panel opens */
  --duration-story-collapse: 450ms;     /* read more panel closes */
  --duration-image-crossfade: 450ms;    /* sticky image swaps as text scrolls */
  --duration-drag-settle: 700ms;        /* mobile horizontal scroller card skew settles */

  /* Motion: easing. GSAP names on the site, with the CSS curve that matches each. */
  --ease-button-fill: cubic-bezier(.83, 0, .17, 1);      /* [read] button wipe, in-out, steep middle */
  --ease-page-wipe: cubic-bezier(.65, 0, .35, 1);        /* [read] page transition, cubic in-out */
  --ease-results: cubic-bezier(0, .55, .45, 1);          /* [read] result cards and their content */
  --ease-spring-out: cubic-bezier(.16, 1, .3, 1);        /* [read] frosted button fill, texture ramp; equals expo out */
  --ease-text-reveal: cubic-bezier(.16, 1, .3, 1);       /* [inferred] GSAP expo.out, expressed as its CSS match */
  --ease-hero-cards: cubic-bezier(.25, 1, .5, 1);        /* [inferred] GSAP power3.out is a quartic out */
  --ease-menu-slide: cubic-bezier(.33, 1, .68, 1);       /* [inferred] GSAP power2.out is a cubic out */
  --ease-menu-links: cubic-bezier(.25, 1, .5, 1);        /* [inferred] GSAP power3.out */
  --ease-soft-fade: cubic-bezier(.5, 1, .89, 1);         /* [inferred] GSAP power1.out, heading fades */
  --ease-collapse: cubic-bezier(.65, 0, .35, 1);         /* [inferred] GSAP power2.inOut */
  --ease-scrub: linear;                                  /* [read] every scroll-scrubbed tween uses ease none */
  --ease-css-default: ease;                              /* [read] all 250ms CSS transitions use the default curve */

  /* Motion: delays and stagger intervals. */
  --delay-icon-swap: 125ms;             /* arrow swap starts after the fill has begun */
  --delay-card-blurb: 200ms;            /* card blurb fades in after the row opens */
  --delay-card-link: 325ms;             /* card secondary line after the blurb */
  --delay-hero-copy: 350ms;             /* hero copy reveal starts after the first photo card */
  --delay-menu-content: 420ms;          /* menu links start at 0.6s x 0.7 */
  --delay-menu-close-button: 540ms;
  --delay-work-list-fade: 500ms;        /* listing grid starts halfway through the hero reveal */
  --stagger-text-line: 120ms;           /* between split lines and between reveal items */
  --stagger-text-group-gap: 1.6;        /* extra stagger steps between groups: 1.6 x 120ms = 192ms */
  --stagger-hero-cards: 160ms;
  --stagger-menu-links: 70ms;
  --stagger-results-content: 250ms;     /* problem then solution inside one result card */

  /* Motion: travel distances. What moves, how far. */
  --travel-text-line: 115%;             /* each line rises 115% of its own height from under a mask */
  --travel-text-blur: 14px;             /* each line starts blurred */
  --travel-fade-item: 28px;             /* buttons and non-split items rise 28px */
  --travel-hero-intro: 28px;            /* 1.75rem */
  --travel-hero-cards: 45%;             /* cards start 45% of the viewport beyond their rest spot */
  --travel-hero-cards-blur: 20px;
  --travel-hero-cards-exit: 40%;        /* scroll pushes cards 40% of the viewport outward */
  --travel-hero-copy-exit: -40px;       /* hero copy lifts 40px while fading on scroll */
  --travel-card-title: clamp(-.75rem, -.36702rem - .425532vw, -.5rem); /* card title lifts 8px to 12px on hover */
  --travel-card-blurb: 12px;            /* .75rem */
  --travel-card-meta: 8px;              /* .5rem, event meta */
  --travel-underline: 3px;              /* .1875rem, underline slides up into place */
  --travel-icon-swap: calc(100% + 6px); /* arrow exits right, twin enters from left, gap .375rem */
  --travel-results-card: 120px;         /* result cards slide in from the right */
  --travel-results-content: 20px;
  --travel-menu-close: 25px;
  --travel-menu-cta: 25px;
  --travel-menu-agent: 40px;
  --travel-page-exit: -100px;           /* old page drops by 100px under the wipe */
  --travel-list-fade: 24px;
  --travel-parallax-a: 240px;           /* scrubbed y offsets per card slot, cycle of six */
  --travel-parallax-b: -420px;
  --travel-parallax-c: 240px;
  --travel-parallax-d: -520px;          /* -600px in the five-slot image variant */
  --travel-parallax-e: 420px;           /* 300px in the five-slot image variant */
  --travel-parallax-f: -340px;

  /* Motion: scroll distances consumed by pinned or scrubbed sections. */
  --scroll-hero-expand: 140%;           /* hero video grows to full width over 140% of viewport height */
  --scroll-hero-runway: 100lvh;         /* extra runway after the hero before the pinned heading clears */
  --scroll-results-card: 35vh;          /* each result card finishes sliding within 35% of viewport height */
  --scroll-texture-ramp: 60%;           /* background color ramp completes over 60% of viewport height */
  --scroll-card-pace-rest: 30lvh;       /* default vertical spacing between floating cards */
  --smooth-scroll-lerp: .15;            /* Lenis, wheel only, off under reduced motion */

  /* Spacing: raw values collected, then the scale they form. Base unit 4px, working step 8px. */
  --space-2xs: 4px;     /* .25rem  tag padding, label gaps */
  --space-xs: 8px;      /* .5rem   tag gap, icon gap, dot gap */
  --space-sm: 12px;     /* .75rem  button icon gap, card list gap */
  --space-md: 16px;     /* 1rem    field gap, card stack gap */
  --space-lg: 24px;     /* 1.5rem  column gap, grid gap, eyebrow to heading */
  --space-xl: 32px;     /* 2rem    list gap, stacked card gap */
  --space-2xl: 48px;    /* 3rem    page gutter at 1440 */
  --space-3xl: 80px;    /* 5rem    standard section padding at 1440 */
  --space-4xl: 120px;   /* 7.5rem  large section padding at 1440 */
  --space-5xl: 174px;   /* 10.875rem hero-scale section padding at 1440 */

  /* Spacing: fluid section rhythm. Min, preferred, max. */
  --gutter: clamp(1.25rem, .31915rem + 2.97872vw, 3rem);                   /* 48 / 35.6 / 20 */
  --section-pad-sm: clamp(3.75rem, 3.08511rem + 2.12766vw, 5rem);          /* 80 / 71.1 / 60 */
  --section-pad-md: clamp(2.5rem, 1.17021rem + 4.25532vw, 5rem);           /* 80 / 62.3 / 40 */
  --section-pad-lg: clamp(3.75rem, 1.75532rem + 6.38298vw, 7.5rem);        /* 120 / 93.4 / 60 */
  --section-pad-xl: clamp(4.5rem, 1.10904rem + 10.8511vw, 10.875rem);      /* 174 / 128.9 / 72 */
  --section-pad-cta: clamp(2.5rem, .30585rem + 7.02128vw, 6.625rem);       /* 106 / 76.8 / 40 */
  --header-pad-top: clamp(1.25rem, .71809rem + 1.70213vw, 2.25rem);        /* 36 / 28.9 / 20 */
  --header-pad-bottom: clamp(.75rem, .21809rem + 1.70213vw, 1.75rem);      /* 28 / 20.9 / 12 */
  --eyebrow-to-title: clamp(1.125rem, .79255rem + 1.06383vw, 1.75rem);     /* 28 / 23.6 / 18 */
  --title-to-lead: clamp(1.5rem, 1.36702rem + .425532vw, 1.75rem);         /* 28 / 26.3 / 24 */
  --header-to-body: clamp(4.375rem, 3.71011rem + 2.12766vw, 5.625rem);     /* 90 / 81.1 / 70 */
  --list-row-pad: clamp(1.375rem, .97606rem + 1.2766vw, 2.125rem);        /* 34 / 28.7 / 22 */
  --card-pad-inline: clamp(1.375rem, .7766rem + 1.91489vw, 2.5rem);        /* 40 / 32 / 22 */
  --card-pad-block: 1.875rem 2rem;                                         /* 30 top, 32 bottom */

  /* Grid: 12 columns, fixed 24px gap, fluid gutter, very wide cap. */
  --column-count: 12;
  --column-gap: 1.5rem;                                                     /* 24px */
  --column-width: calc((100% - (var(--column-count) - 1) * var(--column-gap)) / var(--column-count));
  --container-max: 133rem;                                                  /* 2128px, content runs edge to edge up to here */
  --container-narrow: 90rem;                                                /* 1440px, results, topics, solutions at 1440 and up */
  --measure-prose: 43.75rem;                                                /* 700px, rich text column */
  --measure-prose-wide: clamp(43.75rem, 55.5556vw - 6.25rem, 56.25rem);     /* 700 to 900 above 1440 */
  --measure-heading: 59.375rem;                                             /* 950px, section heading cap */
  --measure-heading-ch: 16ch;                                               /* centered sticky headings */
  --measure-lead-ch: 44ch;                                                  /* centered lead under them */

  /* Breakpoints: min-width steps where layout reflows. */
  --bp-sm: 500px;       /* buttons stop being full width, footer utility reflows */
  --bp-md: 740px;       /* two columns appear, carousel arrows appear */
  --bp-lg: 980px;       /* desktop layout, pinned and scrubbed motion turns on */
  --bp-xl: 1200px;      /* four-column grids, wider type caps */
  --bp-2xl: 1440px;     /* card spans switch from indents to column math, narrow containers cap at 90rem */
  --bp-short-desktop: 950px; /* max-height guard: hero type steps down when the viewport is short */

  /* Radius: raw values 2, 4, 8, 12, 16, 20, 24, 48, 999px and 50%. */
  --radius-hairline: 2px;    /* skeleton labels */
  --radius-tag: 4px;         /* tags, inputs, square icon button */
  --radius-button: 8px;      /* primary button, notice, video thumb, image tiles */
  --radius-card-sm: 12px;    /* related work card, narrative video */
  --radius-card: 16px;       /* work item, results card, contact form panel */
  --radius-card-lg: 20px;    /* floating cards, 9:16 video cards */
  --radius-card-xl: 24px;    /* editorial cards, glass panel */
  --radius-field: 48px;      /* pill input field */
  --radius-pill: 999px;      /* pill buttons, carousel dots */
  --radius-round: 50%;       /* round icon buttons, avatars */

  /* Borders and hairlines. */
  --hairline: 1px;                                /* .0625rem, list separators, card outline, controls */
  --rule-accent: 3px;                             /* .1875rem, blockquote top rule */
  --underline-hover: 1px;                         /* nav underline; 2px in breadcrumbs */
  --focus-ring-width: 2px;                        /* .125rem */
  --focus-ring-offset: 0;                         /* 2px on selects */

  /* Shadows: the site is nearly flat. Two recorded levels. */
  --shadow-none: none;
  --shadow-raised: 0 1.125rem 2.5rem rgb(0 0 0 / .18);  /* gallery images inside cards only */

  /* Z-index: ordered stack. */
  --z-base: 0;           /* textures, dot and line canvases */
  --z-content: 1;        /* section inner content above canvases */
  --z-card-layer: 2;     /* card overlays, card media */
  --z-card-text: 3;      /* card text above media */
  --z-header: 10;
  --z-notice: 50;        /* bottom notice */
  --z-sub-nav-skip: 100; /* skip links */
  --z-menu: 400;         /* full-screen menu */
  --z-video-open: 500;   /* expanded case video */
  --z-page-wipe: 1000;   /* page transition color wipe */
}

/* Color: context only, replaced by hurulab's. */
:root {
  --page-background: #fdffee;        /* warm paper, most page backgrounds */
  --surface-raised: #ffffff;         /* white cards, white sections */
  --surface-sunken: #f2f5f2;         /* work item panel */
  --surface-inverse: #031b36;        /* navy sections, footer, menu */
  --surface-inverse-deep: #020f21;   /* navy end of the texture ramp */
  --text-primary: #2d2d2d;           /* body text on light */
  --text-heading: #0b2c52;           /* section headings on light */
  --text-strong: #031b36;            /* labels, links, tags on light */
  --text-secondary: rgb(3 27 54 / .7);
  --text-muted: rgb(3 27 54 / .6);
  --text-on-inverse: #fdffee;
  --text-on-inverse-muted: rgb(255 255 255 / .7);
  --hairline-on-light: rgb(0 0 0 / .2);
  --hairline-on-inverse: rgb(255 255 255 / .2);
  --border-card: #c9c9c9;
  --tag-fill: rgb(0 0 0 / .08);
  --tag-fill-solid: #e2e2e2;
  --accent: #ff2c17;                 /* the single brand accent */
  --accent-hover-fill: #ff2c17;      /* buttons fill to accent on hover */
  --accent-on-accent-hover: #031b36; /* on red surfaces, buttons fill to navy or white */
  --focus-ring: #ff2c17;
  --selection: default;              /* no ::selection rule */
  --theme-rose: #ffe8f8;
  --theme-aqua: #b6ffff;
  --theme-prism: #ffaaf6;
  --theme-light-leak: #ddd3ff;       /* WebGL texture highlight start color */
  --error-text: #ffaaf6;             /* form errors on navy */
  --scrim-video: linear-gradient(#0000 0%, #000000e6 100%);
  --scrim-image-left: linear-gradient(90deg, #f2f5f2 0% 30%, #f2f5f2b3 50%, #f2f5f200 80%);
  --overlay-modal: rgb(255 255 255 / .8);
}

/* Typography: context only, replaced by hurulab's two typefaces. */
:root {
  --font-display-sans: "Bagoss", sans-serif;      /* BagossStandard 400, 500, 600, 700 files; 800 requested and synthesized */
  --font-display-serif: "Family", serif;          /* one regular file; 300 requested on quotes is synthesized */
  --font-body: "ABC Diatype", sans-serif;         /* 400 and 700 */
  --font-mono: "Space Mono", monospace;           /* 400, eyebrows and labels */

  --text-display: clamp(4.5rem, .7766rem + 11.9149vw, 11.5rem);      /* 184 / 134.4 / 72, weight 800, lh .84 */
  --text-hero: clamp(2.5rem, .37234rem + 6.80851vw, 6.5rem);         /* 104 / 75.7 / 40, weight 600, lh 1, ls -2px; 80px when viewport height is 900 or less */
  --text-page-title: clamp(3rem, 1.1383rem + 5.95745vw, 6.5rem);     /* 104 / 79.2 / 48, weight 600, lh 1, ls -2px */
  --text-section-title: clamp(3rem, 1.93617rem + 3.40426vw, 5rem);   /* 80 / 65.8 / 48, weight 500, lh 1 */
  --text-cta-title: clamp(2.625rem, 1.89362rem + 2.34043vw, 4rem);   /* 64 / 54.3 / 42, weight 500, lh 1 */
  --text-client-name: clamp(2.25rem, 1.31915rem + 2.97872vw, 4rem);  /* 64 / 51.6 / 36, weight 650, lh 1, ls -1.25px */
  --text-serif-xl: clamp(2rem, 1.06915rem + 2.97872vw, 3.75rem);     /* 60 / 47.6 / 32, lh 1, ls -1.2px */
  --text-serif-lg: clamp(2rem, 1.46809rem + 1.70213vw, 3rem);        /* 48 / 40.9 / 32, lh 1.083, ls -1px */
  --text-card-headline: clamp(2rem, 1.53457rem + 1.48936vw, 2.875rem); /* 46 / 39.8 / 32, weight 600, lh 1 */
  --text-card-title: clamp(1.625rem, 1.22606rem + 1.2766vw, 2.375rem); /* 38 / 32.7 / 26, weight 600, lh 1 */
  --text-serif-md: clamp(1.375rem, 1.24202rem + .425532vw, 1.625rem);  /* 26 / 24.2 / 22, lh 1.19 */
  --text-lead: clamp(1.375rem, 1.24202rem + .425532vw, 1.625rem);      /* 26 / 24.2 / 22, lh 1.385 */
  --text-list-strong: clamp(1.375rem, 1.30851rem + .212766vw, 1.5rem); /* 24 / 23.1 / 22, weight 600, lh 1.167 */
  --text-intro-fixed: 1.3125rem;                                        /* 21px, lh 1.381 */
  --text-body: clamp(1rem, .93351rem + .212766vw, 1.125rem);            /* 18 / 17.1 / 16, lh 1.5 */
  --text-ui: 1rem;                                                      /* 16px buttons and inputs */
  --text-eyebrow: .875rem;                                              /* 14px mono, tracking .1rem */
  --text-tag: .875rem;                                                  /* 14px, tracking -.25px */
  --text-small: .75rem;                                                 /* 12px legal */
}
```
