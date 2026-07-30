# Hurulab story: Haramizu landing demo

*Extracted 2026-07-05. Evidence from project files and interview. Design perspective. Audience: companies in Taiwan.*

## Part 1: evidence

### What does design do here

Design led this project, it did not decorate it.

- The team extracted the whole visual system from Figma as the single source of truth: 53 colour tokens, the full type scale, and a 4px spacing grid. Every value in the code maps to a named Figma token, so nothing is eyeballed. Sources: design-decisions.md, case-study-full.md, verified in color.md, typography.md, spacing.md.
- Design set hard rules that removed guesswork: sentence case by default, headings neutral-950, body neutral-900, CTAs base-black, icons neutral-800 shifting to brand-amber, outline icons only. Sources: CLAUDE.md, case-study-full.md.
- Design made the editorial calls, not only the visual ones. It cut about a third of the page (removed the investor-role section, all tag chips, and redundant cards), killed the splash screen once it stopped earning its place, and held a 14px minimum text size for readability. Sources: process-timeline.md phases 5 and 8, case-study-full.md.
- Concrete artifacts design produced: the hero narrative sequence, the four-step invest, build, rent, sell timeline with its amber connector, the two-row scroll gallery, the card interaction system, and 35 curated SVG icons. Sources: features.md, case-study-full.md.

### How we do these projects

- Figma is wired to code through the Figma MCP server, so the design system flows straight into the build with no drift. Source: case-study-full.md, Figma file aYnMrRTSM1qvoWjHRk81kG.
- Design directs the build through Claude Code rather than handing off to a separate development shop. The team ships the actual production code. Source: case-study-full.md, collaboration mode.
- The work moved in disciplined slices: 121 commits across 25 pull requests, one feature per pull request, over about 20 days with concentrated work on 23 and 24 March. One pull request per feature is what let the hard parts, the timeline connector and the card overhaul, be unwound cleanly when they went wrong. Sources: case-study-full.md, process-timeline.md.
- Knowledge persists across sessions through handoff notes, a CLAUDE.md rulebook, and an auto-memory store, so the team's standards survive from one session to the next. Sources: .handoffs directory, CLAUDE.md.
- Static HTML, no build step, Tailwind via CDN, GSAP for the hero timeline and Anime.js for scroll entrances, chosen for speed of iteration on a single page. Source: project-copy.md.

### Our value proposition

- MoreHarvest got a live production investor page (confirmed in interview) that makes a complex, unfamiliar offer, semiconductor demand to housing shortage to a four-step co-investment model, easy to follow in one scroll. Source: project-copy.md, the problem.
- It is production grade from day one: WCAG AA contrast, keyboard access, prefers-reduced-motion support, full mobile, tablet, and desktop responsiveness, WebP images, and no splash delay. Source: case-study-full.md accessibility and performance sections.
- It is pixel-accurate to MoreHarvest's own design system and consistent with the existing bamboo site, so it reads as one product family, not a one-off. Source: case-study-full.md, the brief.
- It is owned in-house: modular section files and static HTML the team can edit and evolve without an outside vendor or a framework only a contractor understands. Source: case-study-full.md.

### How we do it differently

Interview answer: a combination of three things.

- Design directs the build end to end. Design is not diluted through a separate development team, so what ships is exactly what design intended.
- A small team produces agency-scale output. What a traditional agency needs designers plus developers plus weeks of coordination to do, the team ships with far fewer people and faster, because AI does the build under design direction.
- We own it in-house. No vendor lock-in. MoreHarvest keeps and maintains the page itself.

### Open gaps

- Audience is broad. Companies in Taiwan is the target. The story aims at a decision-maker at a Taiwanese company weighing a design partner, but it is not narrowed to a sector or role.
- No cited outcome numbers. The page is live, but there are no enquiry counts, conversion figures, or a named quote from anyone at MoreHarvest reacting to it. The value story rests on what was delivered, not measured results.
- Haramizu is unexplained. It is the repository working title, but no file says what Haramizu refers to, likely a place in Kumamoto.
- Hero not confirmed by Riaan. MoreHarvest the company is a flagged assumption; the investor was the alternative.
- Doc slip noted: case-study-full.md line 69 mislabels the heading font as Noto Sans JP. The source confirms headings use REM (index.html lines 356 to 358).

## Part 2: the story

### Headline

A strong investment nobody could follow, made clear in one scroll: what happens when design directs the build instead of handing it off.

### Hero

A company with a genuinely strong offer that nobody outside the building could follow. Here that company is MoreHarvest, a property firm with more than 20 years of track record and a real opportunity: build homes near a 20 billion dollar semiconductor plant in Kumamoto and let investors share the housing demand it creates. Its goal was simple and stuck: get cautious investors to understand and trust the deal. Any Taiwanese owner sitting on a strong thing they cannot explain is the same hero in a different industry.

### Story structure (Pixar seven-step)

1. Once there was a property company, MoreHarvest, with a real opportunity: build homes near TSMC and Sony's JASM semiconductor facility in Kumamoto, and let investors share in the housing demand it creates.
2. Every day that opportunity sat scattered across internal documents and a plain pre-launch microsite with no narrative and no polish, so prospective investors could not follow how invest, build, rent, and sell actually fit together.
3. Until one day the design team changed the method, not just the visuals: design became the director of the build, instead of a set of mockups thrown over a wall to developers.
4. Because of that, every design value was pulled straight from Figma into the code through the Figma MCP, 53 colour tokens, the full type scale, a 4px grid, so the page matched the design system exactly, with no drift and no eyeballing.
5. Because of that, the team could move in small, safe slices, 121 commits across 25 single-feature pull requests, cutting a third of the page, removing the splash screen, and rebuilding the timeline connector eight times until it landed cleanly, all without ever losing control of the whole.
6. Until finally MoreHarvest had a live production page that walks an investor from the semiconductor boom to a booked call in one scroll: accessible, mobile-ready, pixel-accurate, and owned in-house.
7. Ever since then the opportunity explains itself. A small team directing AI shipped what an agency would need designers, developers, and weeks of coordination to produce, and MoreHarvest can maintain and grow the page without an outside vendor.

### Three key points

1. Design led, it did not decorate. Proof: the biggest improvements were removals. The team cut about a third of the page and deleted the splash screen once scroll-gated animations made it a pure delay. Those are editorial calls, not styling.
2. Figma wired to code means zero drift. Proof: 53 colour tokens and the full type scale pulled through the Figma MCP, with every value in the build traceable to a named token. No Slack thread asking is that the right amber.
3. A small team directing AI ships agency-scale work you own. Proof: a live production page delivered in 121 commits across 25 pull requests, as static HTML MoreHarvest maintains in-house with no vendor lock-in.

### Language notes

- Short-word flags: prefer offer or deal over proposition; easy to follow over legible; understanding over comprehension; build over construct.
- Analogy or metaphor: design directing the build is like the architect staying on the site instead of mailing the blueprints and hoping the crew reads them right.
- Anaphora, now placed as the closing call to action: "No drift. No hand-off. No vendor you can't fire." The repeated no lands the three differentiators as one beat.
- Readability check: pass, aimed at fifth to sixth grade. One flag: step 5 of the Pixar arc runs long; split it in two if read aloud.

### Call to action

The story used to stop at the lesson. It now turns to the reader. Closing line for a page or pitch aimed at companies in Taiwan: "If you have a strong offer your customers can't follow, that is a design problem before it is a marketing problem. It is the problem this team solves." Then the anaphora beat: no drift, no hand-off, no vendor you can't fire.

### Visual notes

- Design led, it did not decorate → a before and after: the plain pre-launch bamboo site beside the one-scroll page.
- Figma wired to code, zero drift → a split image, a Figma colour token swatch next to the same hex value in the code.
- Small team, agency-scale output → the git graph itself, 25 pull requests and 121 commits over 20 days, as evidence of controlled pace.

### Delivery notes

- Surprise or reversal: the reader expects a design story to be about adding more. The reversal is that the biggest wins came from removing, a third of the page and the whole splash screen. That contradicts the expected trajectory that more design means more stuff.
- Specific detail added: the 20 billion dollar JASM facility, the amber connector rebuilt eight times, 121 commits across 25 pull requests, and the 26 March go-live, in place of vague phrases like a lot of iteration.
- Culture story worth repeating: the timeline connector that was rebuilt eight times until it landed inside the last circle on every screen size. It is the team's proof that they rebuild until it is right, not until it is done.
