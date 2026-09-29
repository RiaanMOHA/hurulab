# Extraction prompt: Think Company

Open https://www.thinkcompany.com/ in Chrome. Copy this whole file and paste it into Claude in Chrome. Nothing to fill in. When it answers, copy the answer and paste it to Claude Code, which saves it.

---

## The site and what to take from it

The site in this tab is Think Company, https://www.thinkcompany.com/. If the site in the tab is not the one named above, say so and stop.

Take the whole site. The aim is that Claude Code can rebuild this entire site, page by page and section by section, with hurulab's own colors, fonts, logo and content in place of theirs, and have it still feel like this site. Nothing on the page is out of scope. Capture the system and every place the system is applied.

Give extra weight to the "we are the people you want in the room" section and the way the site explains a consultancy in plain words: how they work, who they are, and why a client should call. This is the closest business to hurulab on the list.

## What this is

You are inspecting the live website in this tab. I am not cloning it. I am transplanting its design language onto hurulab, a small Taiwan-based team that sells business, design and technology in one team. hurulab helps companies find where AI can relieve their biggest headaches, in one to two weeks of discovery, and then builds what is found if the client wants it. I am building hurulab's landing page. Its structure and layout are still being decided, so do not assume an order. The parts it will hold, in some order, are: navigation; a hero; the problem, three things people already believe about AI; what we do, nine services; the discovery phase; a worked example, a fictional espresso bar; how we work, seven steps; what it costs; the ending; and Contact Us, which opens an email.

Three things are fixed and not up for change: hurulab's colors, its two typefaces, and its logo. Everything else can be taken and adapted. So capture the colors and the type in full, because I need to see what the motion, layout and components were designed against, but know that in the rebuild they will be replaced by hurulab's own.

The test for every value you write down: if I swapped in my own words, my own colors, my own type and my own sections, would this value still do its job? Motion timings, travel distances, stagger intervals, layout proportions, grid, section rhythm, component anatomy and interaction behavior pass that test. Record color and type values fully anyway, as context.

Do not reproduce anything that is theirs and not transferable: the logo artwork, the wordmark, the illustrations, the photography, the copy. Describe how those elements behave in the layout, at what size, in what position, with what clear space, so I can drop my own equivalents into the same roles. Never recreate the mark itself.

## Two things to flag, never to copy

**Loading screens.** My page will never show a loader or a progress count. If this site has one, record exactly what it covers, how long it runs, what loads behind it, and what the page looks like the moment it lifts. I need to know what the loader was hiding so I can load that behind a readable first screen instead.

**Banned patterns.** If you see any of these, name it, say where it is, and mark it "do not copy": a typewriter or rotating-word headline; a "trusted by" logo wall or logo marquee; particle, node-graph, constellation or wireframe-globe backgrounds; blurred gradient orbs, aurora or gradient-mesh backgrounds; gradient text; glass or frosted panels; sparkle icons; small pill labels above headings; animated stat counters; chat bubbles or floating chat buttons; waitlist forms; sticky announcement banners; ASCII-art heroes; custom cursors or cursor trails; text scramble or decode effects; magnetic buttons.

## Environment and method

You are in a real browser on a live page. Use it.

Read values, do not estimate them. Every number you report gets one of three tags:

- `[read]` taken from the DOM, a computed style, a CSS rule or an element box
- `[watched]` seen happen, for motion and state changes
- `[inferred]` reasoned from the pattern, because the value could not be read

Never write standard, typical, roughly or around. If you cannot read a value, write your best number, tag it `[inferred]`, and say in one clause what you inferred it from. Never leave a field blank and never skip a section. A site that resists inspection gets more work, not less.

Name the libraries you find in the page source, with versions where readable: GSAP, ScrollTrigger, SplitText, Lenis, Locomotive, Barba, Swup, Three.js, Lottie, Rive, Spline, Webflow, Framer, Next.js and any other. Say what each one is doing on the page. My build is plain HTML, CSS and JavaScript, so for every effect say whether it can be done with CSS alone, with a small script, or only with a library.

**Performance.** Record how long the page takes until its first screen is readable, what is downloaded before that moment, the total transfer size, the largest files by size, the number of fonts loaded, and whether anything blocks rendering. hurulab's page must load fast, so I need to know what on this site costs time and what is free.

## Harvest protocol, run this before you inspect anything by hand

Work from the system outward, not from elements inward. In this order:

1. Dump the custom properties defined on `:root` and on `html`, with their resolved values. This is usually the design system handed to you directly.
2. Dump the stylesheet rules for anything that looks like a token layer, a theme block, a reset or a utility scale. Include `@media`, `@supports`, `@keyframes`, `@font-face` and any `@layer` blocks.
3. Read `@font-face` rules for the real family names, the file urls, weights, styles and `font-display`. Cross check against the computed `font-family` stack on a heading and a paragraph. Report the family that actually renders.
4. Check for `prefers-color-scheme` and `prefers-reduced-motion` blocks. If a dark theme exists, capture it as a second set of role values, not as a separate system.
5. Read the grid: container max widths, column count, gutters, margins, breakpoints and what reflows at each.
6. Only then inspect individual elements, to confirm how the tokens are applied and to catch anything that lives outside them.

Before you name a scale, list the raw values behind it. For type size, spacing, radius, shadow and color, collect every distinct value you actually encountered, sort it, and show that sorted list. Then present the scale you are proposing from it, and say which values you left out as one-offs and why. Do not claim how many times a value appears unless you genuinely counted it.

Where a value is a function, report the function, not just the resolved output. Give full `clamp()` expressions with min, preferred, max and the viewport range they move over, plus the resolved value at 1440, 1024 and 390.

If the site is built on utility classes with no token layer, derive the scales from frequency instead: collect the distinct values in use, sort them, and report the resulting scale with its ratios. Say that you derived it.

## Walk protocol

Walk before you write. Record every url you visit in a list at the top of the spec, and note what each one was for.

Cover at minimum:

- the page as it first appears, before anything is scrolled or clicked, and how long until it is readable
- the home page, top to bottom, scrolled slowly all the way, and in full before any inner page is opened, so that if you run out of room the home page is still complete
- every inner page the navigation links to, top to bottom, so the whole site is covered
- the site at 390 wide, walked again: the phone navigation, what hover states become on touch, what is hidden, what is stacked, what is cut
- one page with a form or an interactive view
- one list or index page and one detail page it links to, so you see the pair
- the navigation itself: closed, opened, hovered, and in its scrolled, hidden or sticky state
- the transition between pages, watched at least twice
- the footer
- one error or empty state if you can reach one without an account

Trigger lazy loading before you measure. Scroll every section into view, wait for it to settle, then read. If content sits behind a login, a cookie wall or a region gate, do what you can from the public surface, then say exactly what you could not reach.

## Interaction protocol, for motion and states

Motion cannot be read from a page at rest. Make it happen, then read it.

For every interactive element type: hover it, focus it with the keyboard, press it, and where relevant activate it. For each one record what changed, the `transition-property`, `transition-duration`, `transition-timing-function` and `transition-delay`, and the before and after values of whatever moved.

Then:

- Record the load choreography first: from the moment the page is readable, what enters, in what order, with what delay between each, over what duration, from what starting state (opacity, offset, scale, clip, blur). Element by element for the navigation and the hero.
- Scroll slowly through every page and note every reveal: what triggers it, at what scroll position or intersection threshold, how far each element travels, and how elements in a group stagger. Give the stagger interval in milliseconds. For each reveal also give the mechanism: the IntersectionObserver threshold and rootMargin, or the ScrollTrigger start, end, scrub and toggleActions values, or the `animation-timeline` range; whether it runs once or every time; and the hidden starting state it animates from.
- For every animated heading or paragraph, say whether the text is split into lines, words or characters, whether each piece sits inside an overflow mask, and the stagger between pieces.
- If the site smooths the scroll, read the library settings: lerp or duration, wheel multiplier, touch multiplier, and whether it is off on touch devices.
- For every video, Lottie, Rive or canvas element: what it shows, its size and aspect ratio, whether it autoplays, loops, has a poster, plays on hover or on scroll, and what it costs to load.
- Say whether the site uses sound anywhere, and when.
- For anything driven by scroll position rather than triggered by it (a pinned section, a scrubbed sequence, a sideways scroller, a sticky heading), record the scroll distance it consumes, what is pinned, what moves, and the mapping from scroll to motion.
- Pair each `@keyframes` block with the element that uses it, plus its duration, timing function, iteration count and fill mode.
- Record the page transition in full: what leaves, what enters, what stays, in what order, over what time, and what the visitor sees in between.
- Resize the viewport to 1440, 1024, 768 and 390 and note what animates versus what snaps, and what each section becomes on a phone.
- Capture the focus ring treatment: color, width, offset, radius, and whether it differs from hover.
- Check `prefers-reduced-motion` and report what the site disables under it.

Express motion as relationships, not just numbers: what moves, how far, how fast, in what order, and what stays still. The distance traveled matters as much as the duration.

## No screenshots

Do not save or download screenshots. Look at the page as much as you need, but every value in your answer comes from the DOM, a computed style, a CSS rule or something you watched happen, and is tagged as such. Your written description is the record.

## Capture list

Ordered by how much it matters. Cover all of it, and spend the effort in this order.

### Tier one, this is the transplant

**Motion.** Everything from the interaction protocol, written as named motion tokens: durations, easing curves as cubic-bezier values, delays, stagger intervals, travel distances, scroll distances consumed by pinned sections, page transition timings. Then the principles underneath: what this site believes about movement, in a few sentences.

**Layout and spacing.** The base unit and spacing scale with its ratios. Grid: column count, gutter, margin, container max widths. Breakpoints and what reflows at each. Section rhythm: how tall each section is in viewport heights, how sections are separated, where whitespace is generous and where it is tight, and where the rhythm is broken on purpose. How text and images are arranged: columns, offsets, overlaps, boxes. Whether text runs to the margins or sits in a centered column.

**Section by section.** Walk every page top to bottom. For each section: what it is for, its anatomy, its proportions, what moves in it and how, and which of hurulab's parts it could carry (navigation, hero, the problem, what we do, the discovery phase, the example, how we work, what it costs, the ending, Contact Us, or none). Say what I should take from it and what I should leave. For each section also give:

- its DOM skeleton: the elements and their nesting in order, as a short indented list, so it can be rebuilt without guessing the structure. Class names are not needed, the tags and the nesting are.
- the bounding box of the section and of each major element in it, at 1440 and at 390: width, height, and offset from the section edge.
- the content shape: how many words in the heading, how many in the paragraph, how many items in any list or grid, how many images and at what aspect ratio, so I can judge whether hurulab's copy fits the shape or the shape has to change.

**The argument.** Before the section walk, state the order of the home page as an argument: what each section is doing for the visitor in one line, and how the page moves from the first claim to the call to action. I care about how the page tells its story, not only how each section looks.

**Interaction and components.** For every distinct component: anatomy, proportions, the full set of states and behavior. Navigation and menu, buttons, links, cards, panels, sliders and scrollers, accordions, tabs, forms and fields, tags, modals, tables, tooltips, footer, and anything else that exists. Give button and control sizing and the padding to font size ratio. Give the navigation in full: what it holds, how it hides and returns, how the menu opens, and how the page changes when a link is followed.

**Color.** Every ramp as ordered steps: neutral, primary or accent, secondary, and semantic ramps. For each step give hex and the lightness relationship to its neighbors. Then the palette as roles: page background, raised surface, sunken surface, text primary, text secondary, text muted, hairline, border, accent, accent hover, accent pressed, focus ring, selection, and every interaction state. Every gradient with its stops and angle. Contrast ratios where text sits on a fill. These will be replaced by hurulab's own; I need them to understand what the rest was designed against.

**Typography.** Real font family names with the `@font-face` sources, weights and styles loaded. The type scale as ordered steps with the ratio between them, in pixels and as ratios, with full clamp expressions where type is fluid. Weights in use and what each is reserved for. Line height, letter spacing and case per level. Measure for body text in characters and pixels. A catalog of every distinct text style, named by role. These will be replaced by hurulab's two typefaces; I need the scale, the ratios and the hierarchy.

### Tier two, this is the character

**Look and feel.** The impression in a few precise words. What makes it distinctive. Whether it leans on whitespace, contrast, illustration, photography or motion. How information and experience are balanced: how much of the page is readable at a glance, how much has to be explored.

**Shape and surface.** Radius scale. Border and hairline widths, with the hairline treatment called out. Dividers and section separation. Shadows as ordered elevation levels with full values. Blur, opacity layers, overlays and scrims. Z-index layers as an ordered stack with what lives at each. Image treatment: crop ratios, framing, masking, how images sit against the page and how they enter.

**Graphics and motifs.** Recurring shapes, patterns, textures, background treatments. Decorative devices: thin lines, geometry, dividers, containers, grain, noise.

**Iconography.** Stroke versus fill, stroke width, corner treatment, grid and size, level of detail. Sizing scale and how icons pair with text. Whether they read as one custom set or a mixed library, and if you recognize the library, name it.

**Illustration.** Technique, line quality, fill, perspective and color use. Any repeated device or character. Where illustration is used versus photography.

### Tier three, note it, do not dwell

**Brand behavior.** Not the mark itself. Where the mark appears, at what size, in what position, with what clear space, and how it behaves as the nav sticks. Favicon and theme color present. How the brand personality shows up visually beyond the mark.

**UX patterns.** How a visitor moves through the site. Form behavior: validation timing, feedback, error and success handling. Empty, loading and error states. Keyboard and accessibility signals: focus order, skip links, aria usage, reduced motion support.

**Information architecture.** Primary and secondary navigation, page types and how they relate, content hierarchy within a page, labeling conventions, footer structure, and a short sitemap of what you observed.

**Voice.** Tone of headings, button labels and microcopy, in a few lines. Capitalization and punctuation conventions.

## Output

Everything comes back in the chat, as three clearly separated blocks in this order, each in its own fenced markdown block. Start each block with the filename it should be saved as, so that when the whole answer is pasted to Claude Code it can save the three files without asking.

**1. `thinkcompany.com-tokens.md`**

A CSS custom property block, ready to paste: motion durations, easings, delays, stagger intervals, travel distances; spacing scale; grid values; breakpoints; radii; borders; shadows; z-index; then the color roles and the type scale in their own groups, marked "context only, replaced by hurulab's". Name every token by its role, never by its value. No `--blue-500`, use `--accent-base`. Comment each group with one line saying what it governs.

**2. `thinkcompany.com-spec.md`**

Open with the urls walked. Then the loader note, the performance note and the banned-pattern flags. Then one section per capture area above, in tier order. Every value tagged with its capture method. Ratios alongside pixels. Every value tied to the role it plays.

Then an effects inventory as one table: every motion or interaction effect on the site, one row each, with where it is, what triggers it, duration, easing, travel, and whether it is CSS alone, a small script, or a library.

Close with a rebuild note in two lists:

- **Swap freely.** What carries no character and can change without losing the feel. hurulab's colors, fonts and logo go here by definition.
- **Do not touch.** The ratios, behaviors, motion timings, scroll mappings and structural relationships that are the character. If I change these, I no longer have this feel.

**3. `thinkcompany.com-brief.md`**

A short paste-ready brief written to Claude Code, in second person, telling it how to rebuild this site as hurulab's landing page in plain HTML, CSS and JavaScript, with hurulab's own colors, fonts, logo and content. Name which of hurulab's parts each of this site's sections could carry. No analysis, no hedging, no history. Just the rules it must follow, pointing at the tokens file for values and the spec for detail. Under 400 words.

## Pacing

Work in tier order and finish each tier before starting the next. Do not thin out as you go. The last section should be as specific as the first.

If you are running low on room, stop cleanly at the end of a section and tell me exactly which sections are still outstanding, so I can ask you to continue. Never pad a late section with generalities. An honest gap is useful. A vague paragraph is not.

## Formatting

Sentence case throughout. No em dashes. No emojis. American spelling. Kebab-case filenames. Tables where a table is clearer than prose, especially for scales, ramps, state matrices and the section walk.
