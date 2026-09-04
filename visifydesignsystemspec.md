# Visify design system and brand spec

A reverse-engineered, reskinnable specification of the site at visify.au, captured for rebuild in a separate project.

Capture method is labeled on every value. "Computed" means read from the live page through CSS custom properties or `getComputedStyle`, at devtools accuracy. "Screenshot" means estimated from a rendered capture. The site is a WordPress build on the Bricks builder with the Automatic.css (ACSS) utility framework, so the entire token layer is exposed as CSS variables on `:root` and was read directly, not estimated.

One capture caveat: the inspecting viewport was locked to 847px wide. Type and spacing are defined as fluid `clamp()` tokens, so the numbers below give the min and max endpoints of each token (both computed from the variable definitions), which is the reskinnable source of truth. Where a single rendered value is quoted, its 847px context is noted.

The font family is deliberately not named. Two typefaces are in use and are described by role and behavior only: a geometric sans (all headings, body, ui) and a casual handwritten marker face (accent words and section labels).

---

## Token block (paste-ready core)

```css
:root {
  /* ---- Color: brand ramps (each ramp shares one hue + saturation,
     stepped only by lightness on a fixed ladder:
     ultra-light 95%, light 85%, semi-light 65%, base, semi-dark 35%, dark 25%, ultra-dark 10%) ---- */

  /* Primary (electric blue) — hue 232, sat 100%. Base sits at L61%, not 50%. */
  --primary-ultra-light: #e6e9ff;  /* L95 */
  --primary-light:       #b3bdff;  /* L85 */
  --primary-semi-light:  #4d64ff;  /* L65 */
  --primary:             #3853ff;  /* L61  hsl(232 100% 61%)  role: page/hero field, links, text-on-accent */
  --primary-semi-dark:   #425bff;  /* L63 */
  --primary-dark:        #001180;  /* L25 */
  --primary-ultra-dark:  #000733;  /* L10 */
  --primary-hover:       #667aff;  /* L70  link + interactive hover */

  /* Accent (acid lime) — hue 79, sat 74% */
  --accent-ultra-light:  #f6fce9;  /* L95 */
  --accent-light:        #e3f5bc;  /* L85 */
  --accent-semi-light:   #bee864;  /* L65 */
  --accent:              #a3de23;  /* L50  hsl(79 74% 50%)  role: primary CTA fill, marker doodles, checks, footer labels */
  --accent-semi-dark:    #719b17;  /* L35 */
  --accent-dark:         #516f11;  /* L25 */
  --accent-ultra-dark:   #202c07;  /* L10 */
  --accent-hover:        #afe240;  /* L57  CTA hover fill */

  /* Neutral (true gray) — hue 0, sat 0% */
  --neutral:             #000000;  /* base text */
  --neutral-ultra-light: #f2f2f2;  /* L95 */
  --neutral-light:       #d9d9d9;  /* L85 */
  --neutral-dark:        #404040;  /* L25 */
  --neutral-ultra-dark:  #1a1a1a;  /* L10 */

  /* Base (cool blue-gray) — hue 200, sat 18%. Light-section surfaces. */
  --base:                #e1e7ea;  /* L90 */
  --base-ultra-light:    #f0f3f5;  /* L95  raised light surface */
  --base-light:          #d2dbe0;  /* L85 */
  --base-dark:           #34444b;  /* L25 */

  --white: #ffffff;
  --black: #000000;

  /* ---- Color: roles ---- */
  --page-bg-dark:      var(--primary);          /* full-bleed blue field */
  --page-bg-light:     #f0f3f5;                 /* cardboard-textured light sections (near base-ultra-light) */
  --surface-raised:    var(--white);
  --surface-accent:    var(--accent);           /* highlighted package card */
  --text-primary:      #000000;                 /* on light */
  --text-on-dark:      #ffffff;                 /* on blue/black */
  --text-secondary:    rgba(0,0,0,0.8);         /* --text-dark-muted */
  --text-secondary-on-dark: rgba(255,255,255,0.8);
  --hairline-dark:     rgba(0,0,0,0.2);         /* border on light */
  --hairline-light:    rgba(255,255,255,0.2);   /* border on dark */
  --link-color:        #3853ff;
  --link-color-hover:  #667aff;
  --focus-color:       #3853ff;

  /* ---- Color: semantic (framework defaults; used for form feedback) ---- */
  --success-text: #11b76b;  --success-bg: #e6f6ed;
  --warning-text: #ffa100;  --warning-bg: #fff2d7;
  --error-text:   #fa4362;  --error-bg:   #ffe6ec;   /* --ss-error-color #dc3545 in select widget */
  --info-text:    #00b0f4;  --info-bg:    #e5f3ff;

  /* ---- Type scale (fluid). Ratio between adjacent steps ≈ 1.333 (perfect fourth)
     for text-m up through the display sizes, until h2/h1 jump for impact.
     Comments give min → max px at 16px root. ---- */
  --text-xs:  clamp(0.5628rem, -0.298vw + 0.817rem, 0.75rem);   /* 12 small-screen → 9 large-screen (inverts) */
  --text-s:   clamp(0.7502rem, -0.099vw + 0.835rem, 0.8125rem); /* 12 → 13 */
  --text-m:   1rem;                                              /* 16 (base, fixed) */
  --text-l:   clamp(1.2rem, 0.212vw + 1.152rem, 1.333rem);      /* 19.2 → 21.3 */
  --text-xl:  clamp(1.32rem, 0.536vw + 1.319rem, 1.7769rem);    /* 21.1 → 28.4 */
  --text-xxl: clamp(1.728rem, 1.019vw + 1.499rem, 2.3686rem);   /* 27.6 → 37.9 */

  --h6: clamp(0.75rem, -0.074vw + 0.767rem, 0.7035rem);         /* 12 → 11.3 (inverts) */
  --h5: clamp(0.8125rem, 0.199vw + 0.768rem, 0.9377rem);        /* 13 → 15 */
  --h4: clamp(1.125rem, 0.199vw + 1.08rem, 1.25rem);            /* 18 → 20 */
  --h3: clamp(1.35rem, 0.503vw + 1.237rem, 1.66625rem);         /* 21.6 → 26.7 */
  --h2: clamp(1.875rem, 2.386vw + 1.338rem, 3.375rem);          /* 30 → 54 */
  --h1: 5rem;                                                    /* 80 (fixed token) */

  --heading-weight: 600;
  --heading-letter-spacing: -0.05rem;       /* ≈ -0.8px at these sizes */
  --heading-line-height: calc(4px + 2ex);   /* trim-style leading, survives font swap */
  --text-line-height: calc(6px + 2ex);      /* body ≈ 1.38 at 16px */
  --eyebrow-weight: 900;
  --eyebrow-letter-spacing: 2px;            /* uppercase labels */

  /* ---- Spacing scale. Ratio between steps = 1.5 exactly. Comments = max px. ---- */
  --space-xs:  clamp(0.844rem, -0.017vw + 0.848rem, 0.8333rem);  /* 13.3 */
  --space-s:   clamp(1.125rem, 0.198vw + 1.081rem, 1.25rem);     /* 20 */
  --space-m:   clamp(1.5rem, 0.596vw + 1.366rem, 1.875rem);      /* 30 */
  --space-l:   clamp(1.9995rem, 1.293vw + 1.709rem, 2.8125rem);  /* 45 */
  --space-xl:  clamp(2.665rem, 2.471vw + 2.109rem, 4.21875rem);  /* 67.5 */
  --space-xxl: clamp(3.553rem, 4.414vw + 2.56rem, 6.328rem);     /* 101.25 */

  /* ---- Section rhythm (vertical). Ratio = 1.5. Comments = max px. ---- */
  --section-space-xs:  clamp(1.688rem, 1.291vw + 1.398rem, 2.5rem);     /* 40 */
  --section-space-s:   clamp(2.251rem, 2.385vw + 1.714rem, 3.75rem);    /* 60 */
  --section-space-m:   clamp(3rem, 4.175vw + 2.061rem, 5.625rem);       /* 90 */
  --section-space-l:   clamp(3.999rem, 7.059vw + 2.411rem, 8.4375rem);  /* 135 */
  --section-space-xl:  clamp(5.331rem, 11.651vw + 2.709rem, 12.656rem); /* 202.5 */
  --section-space-xxl: clamp(7.106rem, 18.892vw + 2.855rem, 18.984rem); /* 303.75 */

  /* ---- Layout ---- */
  --content-width: 85.375rem;   /* 1366px max content */
  --gutter: clamp(1.25rem, 3.976vw + 0.355rem, 3.75rem);   /* 20 → 60 page inset */
  --grid-gap: clamp(1.5rem, 0.596vw + 1.366rem, 1.875rem); /* 24 → 30 */
  --container-gap: clamp(2.665rem, 2.471vw + 2.109rem, 4.21875rem); /* 42.6 → 67.5 */

  /* ---- Radius: zero everywhere. Sharp corners are a defining trait. ---- */
  --radius: 0;
  --radius-circle: 50vw;   /* only for pills/dots when needed */
  --radius-50: 50%;

  /* ---- Border / hairline ---- */
  --border-width: 1px;
  --border-dark:  1px solid rgba(0,0,0,0.2);
  --border-light: 1px solid rgba(255,255,255,0.2);
  --btn-border-width: 2px;

  /* ---- Elevation. Two systems coexist. ---- */
  /* Ambient, no offset, blur+opacity grow together (used sparingly on light UI) */
  --shadow-m:  0 0 40px rgba(0,0,0,0.1);
  --shadow-l:  0 0 60px rgba(0,0,0,0.2);
  --shadow-xl: 0 0 80px rgba(0,0,0,0.3);
  /* Hard offset (the analog/print look; used on card hover) */
  --shadow-crisp:    6px 6px 0 rgb(0,0,0);
  --shadow-sharp:    6px 6px 0 rgba(0,0,0,0.2);
  --shadow-outlined: 6px 6px 0 -3px #fff, 6px 6px #000;

  /* ---- Motion ---- */
  --transition-duration: 0.3s;
  --transition-timing: ease-in-out;
  --transition-delay: 0s;
  --transition: background .3s ease-in-out, color .3s ease-in-out, border .3s ease-in-out, translate .3s ease-in-out;
  --transition-fast: all 0.2s;   /* framework ui default */
  --link-transition: background .3s ease-in-out, color .3s ease-in-out, border .3s ease-in-out, translate .3s ease-in-out;

  /* ---- Buttons ---- */
  --btn-radius: 0;
  --btn-pad-y: 0.5em;
  --btn-pad-x: 1.25em;
  --btn-min-width: 8.75rem;   /* 140px */
  --btn-weight: 400;          /* framework default; brand overrides to 800 primary / 600 secondary */
  --btn-line-height: 1;

  /* ---- Form fields ---- */
  --input-height: 3.125rem;   /* 50px */
  --input-radius: 0;
  --input-border: 1px solid #dddedf;
  --input-pad-y: 0.5em;
  --input-pad-x: 1em;
  --input-size: clamp(0.875rem, 0.398vw + 0.786rem, 1.125rem); /* 14 → 18 */
  --label-size: clamp(0.875rem, 0.199vw + 0.83rem, 1rem);      /* 14 → 16 */
  --field-gap: 1.5em;
}
```

---

## 1. Look and feel and art direction

Capture: screenshot plus computed.

The overall impression is confident, playful, and editorial, with a blueprint-meets-collage attitude sitting on top of very disciplined type and spacing. It reads as a fintech brand that has decided not to look like a fintech brand.

The design language pairs two loud, high-energy brand colors (an electric blue field and an acid lime accent) with hand-made analog textures: fine graph-paper grid, cardboard grain, torn paper edges, and marker-pen doodles. Oversized type and a giant repeated wordmark do the heavy lifting; sharp zero-radius corners keep it crisp rather than soft.

What makes it distinctive is the tension between precision and hand-drawn looseness. The layout grid, the tight negative letter spacing, and the flat sharp rectangles are swiss and controlled; the acid-green marker scribbles, the handwritten section labels, the collaged grayscale cut-outs, and the ripped-paper joins are analog and human. That contrast is the personality: clear and rigorous, but approachable and unstuffy.

Reference points, stated as observed traits: swiss/international editorial (oversized headline type, tight tracking, strict grid, flat color fields), zine/collage (grayscale photographic cut-outs combined with drawn marks), and blueprint or graph paper (the repeating grid overlay on blue fields, the corner-bracket framing device around buttons and images).

Restraint and density: high restraint on the palette (essentially blue, lime, black, white, and a cool gray) applied with very low restraint on scale. Whole sections are flooded edge to edge with the blue. Whitespace is generous, type is large, ornament is limited to the recurring marker doodles and textures rather than decorative UI chrome. The design leans on contrast (color field against neutral cut-outs, huge type against small labels) far more than on shadow or gradient.

---

## 2. Brand and identity

Capture: screenshot plus computed.

Logo. The mark is a wordmark, "Visify", set in the geometric sans at heading weight (600), with the same tight negative tracking as the headings. There is no separate symbol; the only recurring graphic device attached to the wordmark is a small cluster of acid-green marker scribbles overlapping the last letters ("fy"), which acts as an informal signature rather than a logomark. The wordmark appears in white on blue and dark fields, and in blue (`--primary`) on light fields, always keeping the green scribble accent.

Lockups and variants. Header lockup is the wordmark alone at roughly 61px cap height in the bar (screenshot). A hugely enlarged version of the same wordmark is used as a background/hero device: in the hero it fills the top of the blue field, and in the footer it spans full width and is intentionally cropped by a torn-paper edge, overlaid with green doodles. So the same asset works at two extremes: small nav lockup and oversized graphic field.

Clear space and minimum size were not declared in tokens; from the rendered header the wordmark keeps roughly its own cap-height of padding on each side (screenshot estimate). As it scales up it is treated as art, not a logo, so it is allowed to bleed and be cropped.

Favicon and app icons were not captured from tokens; the browser tab title is "Home - Visify" (computed). Treat the favicon as the "V" or the wordmark on brand blue when rebuilding.

Wordmark treatment and signature. No formal tagline is locked to the mark. The recurring verbal signatures in the product are "Book your clarity call" (primary CTA) and the "Today / Yesterday / Tomorrow" product ladder. The green marker scribble is the consistent visual signature.

Brand personality on the page. The personality shows up as: oversized confident type, the two-color high-contrast system, handwritten labels for warmth, and collage doodles that make an accounting product feel human and non-corporate.

---

## 3. Iconography

Capture: computed (`getComputedStyle` on SVG children) plus screenshot.

Two icon registers coexist.

Functional UI icons are line/stroke based: `fill: none`, `stroke-width: 1.5px` (computed), on a small square viewBox (`0 0 12 12` observed). Metaphors are simple and conventional (chevron for submenu, plus for accordion, close X, social glyphs, arrow/target reticle). Corner treatment reads as lightly rounded joins (screenshot). They inherit color from context: white on dark, black on light, and `--accent` where highlighted.

Checklist and decorative marks use the accent green: the "why partner" list uses circular check icons in `--accent` (rgb(163,222,35), computed), line style to match the 1.5px UI set.

Sizing. UI icons render around 26px in list and toggle contexts (computed rect). They align optically to the cap height of the text they sit beside and pair to the left of list items or right of accordion rows.

Consistency. The functional set reads as one coherent stroke set (uniform 1.5px weight, `fill:none`). It is clearly separate from the hand-drawn doodle layer (see section 4), which is intentionally inconsistent and rough.

---

## 4. Illustration

Capture: screenshot plus computed.

Technique is collage. Grayscale photographic cut-outs (construction workers, a lightbulb, a human brain, a calculator, a hand holding a pen) are combined with hand-drawn acid-green marker graphics. The grayscale is baked into the assets, not a CSS filter (computed `filter: none` on the images), so the duotone effect is achieved by placing neutral cut-outs on the saturated blue field.

Line quality of the drawn layer is deliberately loose: rough marker strokes with visible texture and pressure variation, drawn at heavy weights (computed decorative SVG `stroke-width` of 4px and 8px, `stroke: rgb(162,222,33)`, `fill:none`, on large viewBoxes like `0 0 310 40` and `0 0 400 300`). Motifs include arrows, loops, crosses, upward chart squiggles, and underlines.

Perspective is flat; there is no rendered depth or realistic lighting beyond the photographic cut-outs themselves. Color use inside illustration is strictly grayscale (photos) plus single-color accent green (marks); no other illustration colors appear.

Repeated illustrated device: the green marker scribble, used as an underline under key headline words (for example "clarity"), as connective doodles between the Today/Yesterday/Tomorrow blocks, and scattered over the oversized wordmark. There is no character or mascot.

Mood: energetic, analog, human. Illustration and drawn marks carry the warmth; photography is used only as neutral collage material, never full-bleed or glossy.

---

## 5. Graphics and motifs

Capture: computed (background-image and background-size) plus screenshot.

Recurring backgrounds and textures:

- Fine grid overlay. A repeating graph-paper grid image (`grid-120px.png`, `background-repeat: repeat`, computed) is laid over blue fields (hero and footer), giving a blueprint feel. Cell size roughly 120px.
- Cardboard grain. Light sections carry a paper/cardboard texture (`...grey-cardboard-texture-1200px.webp`, `background-size: 900px 900px`, `repeat`, computed) over a near-white base (`#f0f3f5`), so "light" sections feel like paper, not screen white.
- Torn paper edges. Sections join with a ripped-paper white edge (screenshot), most visible above the footer. This is the primary section divider device, in place of rules or gradients.
- Marker doodles. Acid-green hand-drawn marks (section 4) recur as an overlay motif.
- Oversized wordmark as texture. The brand wordmark is used at graphic scale as a background element (hero top and footer).
- Corner-bracket framing. Buttons like "Help me start" and some images are framed with four L-shaped corner brackets (screenshot), a viewfinder/blueprint device echoed by a small target-reticle icon in the hero.

Decorative lines and containers: hairlines are 1px at 20% opacity (`rgba(0,0,0,0.2)` on light, `rgba(255,255,255,0.2)` on dark, computed). Containers are flat rectangles with zero radius.

Image and photo treatment: cut-outs are `object-fit: cover`, radius 0 (computed), grayscale baked in. No CSS duotone or filter, no rounded framing. Gradients exist in the framework token set (WordPress presets) but are not used in the brand surfaces; brand fields are flat color.

---

## 6. Color

Capture: computed (CSS custom properties, exact).

The system is built from four ramps that each hold a single hue and saturation and step only by lightness, on a fixed ladder: ultra-light 95%, light 85%, semi-light 65%, base, semi-dark 35%, dark 25%, ultra-dark 10%. This is the key structural fact: to reskin, change hue and saturation per ramp and keep the lightness ladder, and every tint/shade regenerates in the same relationship. Each ramp also has 10 through 90 percent alpha variants of several steps.

Primary ramp (electric blue). Hue 232, sat 100%. Base is intentionally light at L61%.

| Role step | Hex | HSL |
| --- | --- | --- |
| ultra-light (95) | #e6e9ff | 232 100% 95% |
| light (85) | #b3bdff | 232 100% 85% |
| semi-light (65) | #4d64ff | 232 100% 65% |
| base | #3853ff | 232 100% 61% |
| semi-dark (63) | #425bff | 232 100% 63% |
| dark (25) | #001180 | 232 100% 25% |
| ultra-dark (10) | #000733 | 232 100% 10% |
| hover | #667aff | 232 100% 70% |

Accent ramp (acid lime). Hue 79, sat 74%, base at L50%.

| Role step | Hex | HSL |
| --- | --- | --- |
| ultra-light (95) | #f6fce9 | 79 74% 95% |
| light (85) | #e3f5bc | 79 74% 85% |
| semi-light (65) | #bee864 | 79 74% 65% |
| base | #a3de23 | 79 74% 50% |
| semi-dark (35) | #719b17 | 79 74% 35% |
| dark (25) | #516f11 | 79 74% 25% |
| ultra-dark (10) | #202c07 | 79 74% 10% |
| hover | #afe240 | 79 74% 57% |

Neutral ramp (true gray). Hue 0, sat 0%. base #000000, ultra-light #f2f2f2 (95), light #d9d9d9 (85), dark #404040 (25), ultra-dark #1a1a1a (10).

Base ramp (cool blue-gray). Hue 200, sat 18%. base #e1e7ea (90), ultra-light #f0f3f5 (95), light #d2dbe0 (85), semi-dark #495f69 (35), dark #34444b (25). This ramp supplies the "paper" light surfaces.

Palette expressed as roles:

- Page background, dark field: `--primary` #3853ff.
- Page background, light field: base-ultra-light #f0f3f5 (with cardboard texture).
- Raised surface: white #ffffff; highlighted surface: `--accent` #a3de23.
- Text primary (on light): #000000. Text on dark: #ffffff. Muted text: `rgba(0,0,0,0.8)` / `rgba(255,255,255,0.8)`.
- Hairline and border: `rgba(0,0,0,0.2)` on light, `rgba(255,255,255,0.2)` on dark.
- Accent (CTA, marks, labels): `--accent`.
- Link: #3853ff, hover #667aff.
- Focus ring: #3853ff, 2px, 2px offset (computed `--focus-color`, `--focus-width`, `--focus-offset`).

Interaction states are color-driven, not shadow-driven: accent fill goes #a3de23 to #afe240 on hover; blue interactive goes #3853ff to #667aff.

Semantic ramps (framework defaults, surface in form feedback): success text #11b76b on #e6f6ed; warning text #ffa100 on #fff2d7; error text #fa4362 (select-widget error #dc3545) on #ffe6ec; info text #00b0f4 on #e5f3ff.

Gradients: a full set of WordPress preset gradients exists in tokens (for example midnight `linear-gradient(135deg, rgb(2,3,129) 0%, rgb(40,116,252) 100%)`) but the brand surfaces use flat fields, not gradients. Treat gradients as available but off-brand.

Contrast and light/dark handling: the design alternates full blue fields (white text) with paper-light fields (black text). White on `--primary` and black on `#f0f3f5` both clear AA for body text (computed colors). Accent green is used as a fill behind blue or black text (CTA), not as text on white, because lime on white is low contrast; keep that rule on reskin.

---

## 7. Typography (font family excluded)

Capture: computed (`getComputedStyle`, and clamp endpoints from tokens).

Two typefaces, by role:

- Geometric sans. All headings, body, buttons, nav, labels. Weights present: 400, 500, 600, 700, 800, 900 (computed across elements). Humanist-geometric, even, low-contrast strokes.
- Handwritten marker face. Accent words and section labels only ("Today", "Yesterday", "Visify?", and similar). Casual, single-weight, informal. Always uppercase with positive tracking when used as a label.

Type scale as ordered steps. The body scale (`--text-*`) uses a perfect-fourth ratio, about 1.333 between adjacent steps at the desktop endpoint. The heading scale (`--h6` through `--h3`) also steps by 1.333, then `--h2` and `--h1` jump larger for display impact.

| Step | Min px | Max px | Ratio to next |
| --- | --- | --- | --- |
| text-xs | 9.0 | 12.0 | — |
| text-s | 12.0 | 13.0 | — |
| text-m (base) | 16.0 | 16.0 | 1.333 |
| text-l | 19.2 | 21.3 | 1.333 |
| text-xl | 21.1 | 28.4 | 1.333 |
| text-xxl | 27.6 | 37.9 | — |
| h6 | 12.0 | 11.3 | 1.333 |
| h5 | 13.0 | 15.0 | 1.333 |
| h4 | 18.0 | 20.0 | 1.333 |
| h3 | 21.6 | 26.7 | 2.02 (jump) |
| h2 | 30.0 | 54.0 | 1.48 (jump) |
| h1 | 80.0 | 80.0 (fixed) | — |

Note text-xs and h6 invert (slightly smaller on large screens), a deliberate small-label behavior.

Weights and what each is reserved for (computed):

- 900: eyebrow/section labels (uppercase, tracking 2px) and footer column headers.
- 800: primary button label (uppercase, tracking 1px).
- 700: nav-bar links (uppercase, tracking 1px, 14px).
- 600: all headings h1 through h3, wordmark, secondary button label.
- 500: inline text-link buttons ("Explore our packages", "Let's talk").
- 400: body copy, form inputs, labels.

Line height, letter spacing, case (computed):

- Headings: line-height `calc(4px + 2ex)` (renders about 1.10 to 1.13), letter-spacing -0.05rem (about -0.8px), case sentence case.
- Body: line-height `calc(6px + 2ex)` (about 1.38 at 16px), letter-spacing normal, sentence case.
- Eyebrow labels: 16px, weight 900, uppercase, letter-spacing 2px, color `--primary` (blue) on light or `--accent` (green) in footer.
- Nav-bar links: 14px, 700, uppercase, letter-spacing 1px.
- Handwritten labels: uppercase, letter-spacing 1.6px, color white or accent.

The `calc(Npx + 2ex)` line-height formula is a font-swap-safe behavior: leading is tied to x-height plus a fixed pixel pad, so a new typeface keeps comfortable rhythm without re-tuning.

Hierarchy beyond size. Levels are separated by weight, case, tracking, and typeface switch, not size alone: display headings are the geometric sans at 600 with negative tracking; eyebrows above them are tiny, heavy, wide-tracked, uppercase, and colored; accent words inside headings switch to the handwritten face. So even at similar sizes, role is legible by treatment.

Measure and breakpoints. Body copy columns render around 40 to 60 characters in the two-column blocks (screenshot). All type is fluid via `clamp()`, so it scales continuously between the min and max endpoints above rather than snapping at breakpoints. Max content width is 85.375rem (1366px).

Catalog of distinct text styles observed: display h1 (hero), section h2, card/sub heading h3, eyebrow label, handwritten accent label, body paragraph (text-m), lead paragraph (text-l/xl), inline text link, primary button label, secondary button label, nav-bar link, nav-overlay link (large heading scale), form label, form input text, footer link (13px), footer column header, legal/fine print (text-s/xs).

---

## 8. Spacing and layout

Capture: computed (tokens) plus screenshot.

Base spacing unit and scale. The spacing scale steps by 1.5 exactly at every step. Max endpoints: xs 13.3px, s 20px, m 30px, l 45px, xl 67.5px, xxl 101.25px. Treat 20px (space-s) as the practical base rhythm and 1.5 as the multiplier. Section vertical rhythm uses a parallel 1.5-stepped scale: xs 40, s 60, m 90, l 135, xl 202.5, xxl 303.75 px (max).

Grid. Content max width 85.375rem (1366px). Page gutter is fluid 20 to 60px (`--gutter`). A 12-column system is available (`--grid-*` tokens hold 1 through 12 and common asymmetric splits like 1-2, 2-3, 3-1). Standard grid gap is fluid 24 to 30px; container gap (between major blocks) is 42.6 to 67.5px. An auto-fit grid helper packs cards at roughly 70% of an ideal column before wrapping (`--auto-grid-aggressiveness: 0.7`).

Breakpoints and reflow (screenshot plus behavior). Layout is largely fluid rather than hard-broken. Observed reflow: the primary navigation collapses to a hamburger and a full-screen overlay at the captured width (847px); two-column hero and content blocks stack to single column as width drops; the three package cards move from a row to a stack. Fluid type and spacing absorb most of the range without layout jumps.

Density, alignment, rhythm. Generous whitespace, left-aligned text as the default, large vertical section padding (section-space scale). Sections alternate blue field and paper-light field, each full-bleed, with the torn-paper edge between them, giving a strong top-to-bottom rhythm of color blocks rather than subtle spacing shifts.

---

## 9. Shape and surface

Capture: computed.

Corner radius. Zero. `--radius` and every alias (xs through xxl, s/m/l) resolve to 0 (computed). Sharp rectangles are a defining trait. The only rounded tokens are `--radius-50: 50%` and `--radius-circle: 50vw`, reserved for dots or pills, not applied to cards or buttons.

Border and hairline. Width 1px. Color 20% black on light (`rgba(0,0,0,0.2)`), 20% white on dark (`rgba(255,255,255,0.2)`). Buttons use a heavier 2px border (`--btn-border-width`). Form inputs use a 1px solid `#dddedf` box.

Dividers and section separation. Sections are separated by the torn-paper edge and by color-field changes, not by rules. Where a hairline divider is used it is the 1px 20%-opacity line above.

Elevation. Two shadow systems (both in tokens):

- Ambient glow, no offset, blur and opacity increase together: m `0 0 40px rgba(0,0,0,0.1)`, l `0 0 60px rgba(0,0,0,0.2)`, xl `0 0 80px rgba(0,0,0,0.3)`. Used sparingly on light UI.
- Hard offset print shadow: crisp `6px 6px 0 #000`, sharp `6px 6px 0 rgba(0,0,0,0.2)`, outlined `6px 6px 0 -3px #fff, 6px 6px #000`. This is the analog look and is what package cards move toward on hover (class `hover-card-shadow`, computed).

Blur, opacity, glass. No glassmorphism. Overlays are flat: the nav menu is a solid black full-screen field; image scrims use flat `rgba(0,0,0,0.25)` where needed (computed). Transparency is used for hairlines and muted text only.

---

## 10. Motion and animation

Capture: computed (transition and transform properties, transition tokens) plus screenshot.

Base transition. Duration 0.3s, timing `ease-in-out`, delay 0 (`--transition-*`). The standard transition animates background, color, border, and translate together: `background .3s ease-in-out, color .3s ease-in-out, border .3s ease-in-out, translate .3s ease-in-out`. A faster `all 0.2s` is the framework default for smaller UI, and select-widget animation is 0.2s.

Interactive states:

- Buttons. Base transition includes `translate`, so buttons shift position on hover (a lift/nudge) in addition to a color change. Accent CTA: fill #a3de23 to #afe240; text stays `--primary` blue. Focus uses the 2px `#3853ff` ring at 2px offset. Active/pressed reads as the translate settling (screenshot).
- Links. Color 0.3s ease-in-out to `--link-color-hover` (#667aff); heading links can also draw the hand-drawn underline motif.
- Cards. Package cards carry `hover-card-shadow`: they gain a hard offset shadow on hover; the element's own transition is `opacity 0.3s`, with the shadow/transform applied on the hover rule.

Entrance and scroll reveals (screenshot). Headings and blocks animate in on scroll: words appear to arrive slightly staggered (for example "Why partner with" fades and settles word by word), and the giant footer wordmark and its doodles reveal on approach. The reveal reads as a short fade plus small upward translate, choreographed left-to-right and top-to-bottom.

Page and menu transitions (screenshot). Opening the nav plays a full-screen black overlay wipe, then the large link list settles in. Closing reverses it.

Micro-interactions and other: the hero carries a small target-reticle graphic and marker doodles as static accents; a Lottie/animated widget is present in the footer region (computed `dotlottie-wc` element). No skeleton loaders were observed; the newsletter select and form use the 0.2s framework timing.

Underlying motion principles: short (0.2 to 0.3s), soft (ease-in-out), and consistent. What moves is color, position (translate), and opacity; distances are small; nothing bounces or overshoots. The staggering between related elements is the main choreography.

---

## 11. Components

Capture: computed plus screenshot.

Primary button (accent CTA). Fill `--accent` #a3de23, label `--primary` blue #3853ff, weight 800, uppercase, letter-spacing 1px, size 16px, padding 8px 16px (`0.5em 1.25em`), radius 0, min-width 8.75rem (140px). Border token is 2px but the filled variant renders borderless. Transition 0.3s on background/color/border/translate. Hover: fill to #afe240 plus translate nudge. Example rendered size 261x38px (computed rect).

Secondary button (outline/inverted). Radius 0, 2px border, padding 8px 16px, weight 600, letter-spacing 0.5px, size 16px. Two contexts: on the blue hero it is transparent with a white 2px border and white label; elsewhere it renders as white fill with blue label ("Get in touch", computed). Same transition set.

Text-link button. No fill, no border, weight 500, size 16px, padding-bottom 2px to seat an underline; used for tertiary actions ("Explore our packages", "Let's talk"). Hover draws the underline / hand-drawn stroke.

Corner-bracket button. Certain CTAs ("Help me start", "Help me level up", "Help me grow") are wrapped in four L-shaped corner brackets as a framing device; the inner label is a text/secondary button. Decorative, not a separate control type.

Button sizing and padding ratio. Padding is proportional (`0.5em` vertical, `1.25em` horizontal), so the horizontal-to-vertical padding ratio is 2.5:1 and scales with font size. Min-width floor 140px.

Inputs and form fields. Height 3.125rem (50px), radius 0, border 1px solid #dddedf, padding `0.5em 1em`, transparent background, input text fluid 14 to 18px, weight 400. Label above field, size 14 to 16px, weight 400, color `#9e9e9e` gray, margin-bottom 0.5em. Field-to-field gap 1.5em. Focus: `#3853ff` ring, 2px, 2px offset. Required marked with `*` in the label ("Name *", "Email *", "Phone *", computed text). A select/segmented control ("What are you most interested in?") offers Today / Yesterday / Tomorrow / Not sure yet.

Cards (package/pricing). Flat rectangles, radius 0, roughly 250px wide by 364px tall (computed rect). Three color variants map to the product ladder: accent-green, blue, and white surfaces. Content: handwritten label (Today/Yesterday/Tomorrow), a bold one-line promise, a bracketed description, and a corner-bracket CTA. Hover adds the hard offset shadow (`hover-card-shadow`).

Navigation and header. Header is `position: fixed`, transparent background, about 89px tall (computed), no border or shadow. It adapts to the section beneath it: white wordmark and white hamburger on dark fields, blue wordmark and dark hamburger on light fields (screenshot). The persistent accent CTA ("Book your clarity call") stays in the bar. The menu is a hamburger toggle at all captured widths; opening it plays a full-screen solid-black overlay with large white links at heading scale (Services, About Us, Resources with an accent chevron for a submenu, Contact Us) and a close X. Nav-bar (inline) link style where shown: 14px, weight 700, uppercase, letter-spacing 1px.

Eyebrow / section label. Small heavy uppercase kicker above section headings: 16px, weight 900, uppercase, letter-spacing 2px, colored `--primary` blue (or `--accent` green in the footer). Examples: "Ready to level up your business?", "Your trusted finance team", "Testimonials", "FAQs".

Accordion (FAQ). Full-width rows on the paper-light field, each a question at body-to-h4 scale with a `+` toggle icon at the right, separated by hairlines; expanding a row reveals a body paragraph (computed paragraph style 16px/400). Sentence-case questions.

Testimonial. Single-quote block with the quote in body copy, attributed name in heading weight, and a role/company line beneath ("Warren Hitzke", "Ray White Bundaberg, Selling Principal + Director", computed).

Footer. Blue field with the 120px grid overlay and a torn-paper top edge; the oversized "Visify" wordmark with green doodles spans the top. Three link columns under accent-green uppercase headers (Services, Resources, Pages); links white at 13px, no underline. A newsletter block: email input plus an accent Subscribe button and a consent checkbox. A row of line-style social icons (LinkedIn, Facebook, Instagram, YouTube) in white. Legal row: "© 2026 Visify" left, "Brand + website by Envoke Digital" right.

Badges/tags. No pill badges observed; the corner-bracket frame and the eyebrow label do the labeling work.

---

## 12. UX and interaction patterns

Capture: screenshot plus computed.

Navigation. The site is a single long landing page with in-page anchored sections; primary wayfinding is scroll plus the persistent CTA and the overlay menu. The overlay menu is full-screen and modal (solid black), with one nested submenu (Resources, accent chevron). Moving through the site is vertical: alternating blue and paper sections, each with an eyebrow label to orient the reader.

Form behavior. The contact form uses labeled fields with `*` for required (Name, Email, Phone), a segmented interest selector, and a newsletter consent checkbox with a link to the privacy policy. Validation and success feedback map to the semantic ramp (success green, error red) from the token set; the select widget carries its own error color `#dc3545` and focus `#5897fb` (computed framework tokens). Buttons expose hover (color plus translate) and a 2px blue focus ring for keyboard users.

States. Interface progress is communicated through color and motion rather than spinners: scroll reveals stagger content in, hover lifts cards and buttons, and the menu overlay wipes. A Lottie animation is present in the footer for a small moment of life. No skeleton screens were observed.

Disclosure and affordances. Disclosure is handled by the FAQ accordion (`+` affordance) and the nav submenu chevron. Affordances lean on the corner-bracket frame and underline-on-hover to signal interactivity. Conventions are conventional and low-friction: one clear primary action repeated (book a call), secondary text links for exploration.

Responsive and accessibility signals. A "Skip to main content" link exists (computed, color `#e6e9ff`). Focus styling is a real 2px offset ring in brand blue. Layout and type are fluid, so interactions reflow smoothly rather than snapping. Icons are stroke-based and inherit color for contrast in both fields.

---

## 13. Information architecture

Capture: screenshot plus page text (computed).

Structure. Primary navigation: Services, About Us, Resources (submenu), Contact Us, plus the persistent "Book your clarity call" CTA. The home page is the main artifact; secondary destinations referenced are About us, Contact us, Privacy policy, and Resources children (Guides, Calculators, Blog). Services children map to the product ladder (Financial Operations, Reporting and Insights, Strategic Finance Advice, per the footer).

Content hierarchy within the page, in order: hero (brand promise plus primary CTA), the "Today / Yesterday / Tomorrow" concept intro, the three-tier package chooser, "Why partner with Visify" benefits list, "Is Visify right for you" qualifier list, platform/logos strip ("Powered by leading accounting and automation platforms"), testimonials, FAQs, and a final contact/CTA section with the form, followed by the footer.

Each section is introduced by a heavy uppercase eyebrow label, then a large heading (often mixing the sans and the handwritten face), then supporting copy and an action. Sections are grouped as alternating color fields.

Labeling and wayfinding. The signature naming device is the Today / Yesterday / Tomorrow ladder ("Keep it accurate." / "Know where you stand." / "See what's next."), reused across the concept intro and the package chooser. Eyebrow labels act as in-page wayfinding.

Footer structure. Three link columns (Services, Resources, Pages), a newsletter subscribe block with consent, social icons, copyright, and a credit line.

Sitemap sketch (observed):

```
Home (single-page)
├─ Hero
├─ Today / Yesterday / Tomorrow (concept)
├─ Packages (3 tiers)
├─ Why partner with Visify
├─ Is Visify right for you
├─ Platforms strip
├─ Testimonials
├─ FAQs
└─ Contact + form
Nav / footer destinations
├─ Services → Financial Operations, Reporting & Insights, Strategic Finance Advice
├─ About us
├─ Resources → Guides, Calculators, Blog
├─ Contact us
└─ Privacy policy
```

---

## 14. Voice and content cues

Capture: computed (page text) plus screenshot.

Tone. Plain-spoken, encouraging, and confident, with light metaphor. Headlines address the reader directly and name a pain then a payoff: "Visify brings financial clarity to growing businesses", "Stop flying blind", "Choose the level of clarity you need." Microcopy is warm and human ("Sound like you?", "Got questions?").

Button and label voice. CTAs are first-person or imperative and benefit-led: "Book your clarity call", "Get in touch", "Help me start", "Help me level up", "Help me grow", "Let's talk", "Explore our packages", "Subscribe". Eyebrows are short and punchy ("Ready to level up?", "Your trusted finance team").

Capitalization and punctuation conventions in the product. Headings and body use sentence case. Eyebrow labels, nav-bar links, and the primary CTA are uppercase (styled via CSS text-transform, not typed capitals). Sentences take full stops, including short promise lines ("Keep it accurate."). Hyphen used for ranges and asides ("day-to-day", "month-by-month"). The ampersand appears in tool names ("Xero & ..."). Numerals used for lists of benefits.

---

## Rebuild note: what to change vs what to keep

To reskin (swap these tokens, structure untouched):

- Recolor the four ramps by editing hue and saturation per ramp and keeping the lightness ladder (95 / 85 / 65 / base / 35 / 25 / 10). Change `--primary` (blue field), `--accent` (lime CTA/marks), and the `--base` gray; the tints, shades, and alpha variants regenerate in the same relationships. Keep the same role assignments (primary as full-bleed field, accent as CTA fill and mark color, neutral as text).
- Swap the two typefaces into their roles: one geometric sans for headings/body/ui, one casual handwritten face for accent words and section labels. Keep the weight ladder (900 eyebrow, 800 primary button, 700 nav, 600 heading, 500 text-link, 400 body).
- Replace the texture and doodle assets: the 120px grid, the cardboard grain, the torn-paper edges, and the marker doodles are image assets, not code. New brand, new marks, same slots.
- Change hex/HSL values only; leave the clamp formulas, ratios, and scales in place.

To keep (these preserve the character):

- Zero radius everywhere. Sharp rectangles are core.
- The type scale ratio (about 1.333 through the mid range, with h2 and h1 jumping up for display), and the tight negative heading tracking with the `calc(Npx + 2ex)` line-height so it survives a font swap.
- The spacing and section scales stepped by 1.5, and the fluid `clamp()` approach for type and space.
- The two-color, high-contrast, flat-field system: full-bleed color sections alternating with paper-light sections, accent used as fill behind text (never lime text on white).
- The analog-over-precise art direction: grid/blueprint on color fields, cardboard on light fields, torn-paper section joins, grayscale collage cut-outs plus green marker doodles, the oversized wordmark as graphic, and the corner-bracket framing device.
- Motion: 0.2 to 0.3s, ease-in-out, animating color plus translate plus opacity; hover lifts (translate) and hard offset card shadows; staggered scroll reveals; full-screen overlay menu.
- The 1.5px stroke line-icon set, kept separate from the rough hand-drawn doodle layer.
- Component proportions: 2.5:1 button padding ratio, 50px input height, 140px button min-width, 1366px content max width, fluid 20 to 60px gutters.
- Voice: sentence-case content, uppercase eyebrows/nav/primary-CTA via text-transform, benefit-led first-person CTAs, and the Today / Yesterday / Tomorrow naming ladder.
```
