# Hurulab story: GKTK Investor Experience

*Extracted 2026-07-05. Evidence from project files, a live codebase inspection, and an interview with Riaan. Design perspective. Audience: owners and decision-makers of established Taiwanese companies who are tired of agencies that just take the order and hand back an Excel sheet, or who do not yet know a partner could diagnose the problem and build the whole system.*

*Confidentiality note: MoreHarvest is an internal client and the fund is real. Investor names, the exact commitment figure, and the venue are not recorded and are not invented here. Replace or confirm any sensitive detail before sharing outside the team.*

---

## Part 1: evidence

### What does design do here

Design ran the project. It did not style it.

- **Design wrote the constitution.** `CLAUDE.md` is named the "highest authority" for the whole build. It sets process, copy rules, design principles, and banned behaviours, and it overrides both `docs/visual-identity.md` and `docs/architecture.md` when they disagree. Source: `CLAUDE.md`, opening section and authority chain.
- **Design made the system deliberately narrow.** One background (`#F9F9F9`), one accent colour (amber `#FBB931`, never used as text, never as a fill), three easing curves, six duration tokens, a ten-stop type scale, a 4px spacing scale, five radii. Source: `CLAUDE.md` visual identity quick reference; `showcase/design-decisions.md`. Verified in code: tokens live in `src/app/globals.css`, and a search of the source confirms amber is never used as a text colour.
- **Design led by deciding what is forbidden.** Banned everywhere: frosted glass, `backdrop-filter`, mesh-gradient tints, noise overlays, scroll libraries, centred text, em dashes, contractions. Source: `CLAUDE.md`. Verified in code: no `backdrop-filter` anywhere in `src`, and no GSAP, Lenis, or ScrollTrigger present.
- **Design made the single biggest structural call in the project.** The experience started in a visionOS frosted-glass aesthetic. Design then killed it, running a flat-design audit across all 20 steps and rebuilding depth from a 1px border and a drop shadow alone. This was a reversal of the original direction, not a tweak. Source: `showcase/case-study-full.md` (chronology, phase 5); git commits `d90c509` and `b626123` (PR #17, PR #19).
- **Design defined product behaviour, not just looks.** The decision that the map must stay alive across step boundaries so the investor never sees a reload flash is a user-experience call that shaped the engineering. Source: `showcase/case-study-full.md` (features 2 and 3). Verified in code: `src/components/shared/MapHost.tsx` and `PropertyMapHost.tsx` exist and are real.
- **Design set the interaction model.** No scroll anywhere, one full viewport per step, advance by tap or swipe or CTA, strict transition-then-content alternation, 44px minimum touch targets per Apple HIG. Source: `CLAUDE.md`, `docs/architecture.md`.

Where design led rather than decorated: killing the frosted glass, calling the persistent-map behaviour, and enforcing a narrow system at every pull request.

### How we do these projects

The process, as it actually happened, told as a MoreHarvest team effort that design directed.

1. **Design the screen as a raw prototype first.** Each step is designed as an `.html` or `.jsx` file inside an iPhone 17 Pro frame with variant chips, before any production code. Source: `docs/prototype-workflow.md`; `CLAUDE.md` playground section.
2. **Approve one variant, park it in a sealed room.** Approved prototypes live in `src/playground/prototypes/`, a playground that never touches production code. Old versions are never deleted, so v3, v8, and v19 of a screen sit side by side. Source: `CLAUDE.md` playground rules. Verified: the playground drawers exist for most steps.
3. **Promote the prototype to production by a documented 9-step workflow.** Read the whole file, strip the phone frame, extract every value with no rounding, translate the animation, load fonts locally, build responsive, then run `pnpm build` with zero errors. Source: `docs/prototype-workflow.md`.
4. **One deliberate change per pull request.** Feature branches, 29 merged pull requests across roughly three weeks of active work. Source: git log; `showcase/process-timeline.md`.
5. **Nothing is committed until the designer says so.** "Never commit before I tell you" is the highest rule. Every commit is a decision the designer triggers. Source: `CLAUDE.md`; the `.handoffs/handoff-2026-05-05` note shows the team pausing to confirm before committing.
6. **Context is handed off between sessions.** `.handoffs/` notes and a per-user memory of feedback rules keep the work consistent across sessions. Source: `.handoffs/`.

Tools, verified in the codebase: Next.js 14 with TypeScript, Tailwind driven by CSS variables, the browser's own Web Animations API for all motion (there is no animation library at all, not even Framer Motion), `@react-pdf/renderer` for the print memo, Three.js loaded only when a step needs it, and a map consumed by iframe from a separate repo. Total production dependencies: five. Source: `package.json`; live inspection.

The collaboration model: the designer directs, Claude builds. The narrow design system is the control surface that keeps 20 machine-built screens looking like one calm product.

### Our value proposition

What MoreHarvest got, and why it mattered.

- **The output:** a bespoke, 20-step, tap-driven investor experience for the Kumamoto fund, plus a matching 11-page print memo built from the same brand tokens. Source: `showcase/case-study-full.md`; PDF page components verified in `src/components/pdf/pages/`.
- **The outcome:** it was shown to real investors, and money moved. This was a MoreHarvest team result, design-led. Source: interview with Riaan, 2026-07-05.
- **Why it mattered:** the investors who count are introduced privately and then decide alone, on a phone, in a few quiet minutes. The format either earns credibility in that moment or leaks it. A calm, finance-grade, tap-driven briefing signals the same rigour as the deal underneath it. Source: `showcase/case-study-full.md` (the brief); `CLAUDE.md` design context.
- **What they would have paid for:** not "a website" and not "a deck," but a private briefing instrument that carries the fund's credibility on the exact device where the decision is made.

### How we do it differently

In Riaan's words, a typical agency "gives you an Excel sheet and does exactly what you say." They would have taken the deck brief and delivered a nicer deck or a cleaner PDF. Here the team refused the format itself, diagnosed how investors actually decide, and built a new instrument for that moment.

Concrete, traceable differences:

- **We author and enforce a system, we do not just draw screens.** Banned-lists are checked at every pull request, so 20 screens stay coherent. Source: `CLAUDE.md`. A typical vendor ships screens with no enforced system, and they drift.
- **A designer directed AI to ship real production software.** 11,200 lines of TypeScript, five dependencies, no animation library. Source: live inspection. A traditional split hands a static mockup to a separate dev team and loses fidelity in the gap.
- **We build product behaviour that was never in the brief.** The persistent map host, so the investor sees one continuous camera move instead of a reload flash, is something an order-taking vendor would not think to do. Source: features doc; verified in code.
- **We ship the same story twice from one system.** Interactive experience and print memo, one brand source. Source: PDF pages verified.

### Open gaps

Listed honestly. None of these are filled with invented material.

- **No citable investor moment.** The "shown to investors, money moved" outcome rests only on the interview. There is no recorded quote, named investor, date, venue, or figure. Source: interview, 2026-07-05.
- **No clean attribution.** How much the experience drove the commitment versus the deal fundamentals is not separated. Riaan declined to split it and framed it as a team outcome. Do not overclaim the experience as decisive.
- **The live site is stale.** `gktk.vercel.app` is roughly 51 days behind master, so it is unclear which exact version investors saw. Source: `showcase/case-study-full.md` (outcome).
- **Market research and staff-training are not evidenced on this project.** They are practice-level claims for Hurulab, kept out of this project's proof on purpose.
- **The project is unfinished.** 6 of 20 steps are not fully promoted. Step 20, the exit strategy, is still an 18-line shell. Source: live inspection.
- **Doc drift, now corrected.** The existing showcase lists Framer Motion as a dependency (it is not used) and calls step 10 the largest file (step 18, at 1,000 lines, is larger). Corrected by inspection.
- **Hero is an assumption.** The hero below (MoreHarvest the company) is my flagged choice, because Riaan redirected the question rather than confirming it.

---

## Part 2: the story

### Headline

MoreHarvest had a strong Kumamoto fund and only two dull ways to pitch it, a slideshow or a PDF. So the team built a third, and investors moved.

### Hero

MoreHarvest, the company. A firm with a genuinely good opportunity in Kumamoto, Japan, whose one goal was to get the right investors to take it seriously. (Flagged assumption, see open gaps.) The struggle is not a rival or a market crash. It is the format. The best deal in the world still has to survive the few quiet minutes when one investor decides, alone, on a phone. Hurulab is the guide, not the hero.

### Story structure (Pixar seven-step)

1. **Once there was a** company, MoreHarvest, with a genuinely strong real-estate opportunity in Kumamoto, Japan, and one goal: get the right investors to take it seriously.
2. **Every day** those investors were introduced privately, then made up their minds alone, on a phone, in a few quiet minutes.
3. **Until one day** MoreHarvest hit the format problem every company hits: the only accepted ways to pitch were a generic web slideshow or a flat PDF, and both leak attention and trust in the exact moment that decides everything.
4. **Because of that,** the team refused the choice and diagnosed the real problem. Not "make a nicer deck," but "how does a busy, skeptical investor actually decide on a phone." They set one rule: this is a private briefing, not a sales deck.
5. **Because of that,** they built a new instrument to fit that moment: 20 full-viewport steps you move through by tap, a deliberately narrow design system so 20 screens feel like one calm product, a map that never re-loads between steps, and the same story shipped again as a print memo, all from one brand source.
6. **Until finally** the experience went in front of real investors, and money moved.
7. **Ever since then** the lesson holds: when the format is the bottleneck, the answer is not a better deck, it is refusing the deck. A partner who diagnoses and builds the instrument beats one who just does what the brief says.

### Peter Guber check

- Opening challenge: **present.** Two bad options, one phone screen to win on.
- Struggle: **present.** The team refuses the format and rebuilds, including killing its own first aesthetic.
- Call to action: **present, implied.** The lesson points the Taiwanese reader straight at "hire a partner who diagnoses and builds, not one who takes the order." Make it explicit if this becomes a live pitch.

### Trigger structure check

- Trigger event: **named.** The format problem. Reframed as a constraint rather than a failure, since there was no prior disaster, only a limiting choice.
- Transformation: **named.** Building the new instrument, and investors moving.
- Life lesson: **named.** When format is the bottleneck, refuse the deck.

### Three key points

1. **Design led the project, it did not decorate it.** Proof: design authored `CLAUDE.md` as the highest authority, then made the biggest call in the whole build, killing the visionOS frosted-glass look across all 20 steps and rebuilding depth from a border and a shadow alone (PR #17, PR #19).
2. **A narrow system is what let one team ship 20 machine-built screens that feel like one product.** Proof: one background, one accent colour, three easings, a ten-stop type scale, banned-lists checked at every pull request, all verified in the live code (no frosted glass, amber never used as text, no scroll libraries).
3. **We build the instrument the moment needs, not the deliverable the brief names.** Proof: a designer directed AI to ship 11,200 lines of production code with five dependencies and no animation library, including a map that stays alive across steps so the investor sees one continuous move, plus a matching print memo, and it was shown to investors who committed.

### Language notes

- Short-word flags: "instrument" could be "tool," kept for weight but flagged. "Diagnose" is kept on purpose, it is the differentiator word.
- Analogy: a bespoke investor experience is like the difference between handing someone a spec sheet and walking them through your flagship store. The flagship store is the concrete thing a Taiwanese company owner already knows.
- Metaphor: the design system is the factory line that keeps every screen identical.
- Anaphora opportunity: the differentiator section. Drafted example: "They take the order. We diagnose the problem. They hand back an Excel sheet. We build the system. They do what you say. We build what the moment needs."
- Readability check: pass overall. Two long sentences (Pixar steps 3 and 5) run three clauses. Fine for a written document, split them for a spoken pitch.

### Story-to-data ratio

Roughly two-thirds narrative, one-third proof. Within target. The data (11,200 lines, five dependencies, PR numbers) is used as proof under the three key points, not as the spine.

### Visual notes

- Key point 1 → a before-and-after pair: one frosted-glass screen beside its flat rebuild, so the reversal is visible in one glance.
- Key point 2 → the token sheet as a single image: the one background, the one amber, the type scale, on a page.
- Key point 3 → a short screen recording of the map staying alive across a step change (one continuous camera move), or the phone-in-hand shot of the experience next to the printed memo.

### Delivery notes

- Surprise or reversal: the reveal that there is no animation library at all, and that the premium feel came from removing the visionOS glass, not adding effects. The audience expects premium to mean more. The truth here is premium meant less. That reverses the expected trajectory, it is not just a new fact.
- Specific details added: "11,200 lines," "five dependencies," "step 20 is still an 18-line shell," "51 days behind master," used to replace vague claims of "a large, finished, live build."
- Culture story (repeatable): "the day we refused the deck," the moment the team killed the frosted glass across all 20 steps and rebuilt from a border and a shadow. Repeat it internally as shorthand for how Hurulab works.

### Proof point gaps

- The investor commitment under key point 3 has no citable quote, figure, or named investor. Strongest single upgrade to this story would be one sentence an investor actually said, or one number, on the record. Until then, state it as "shown to investors, and money moved," not as "the experience closed the round."

---

*Revision loop: which section do you want to push further, the headline, the seven-step spine, the three key points, or the differentiator language? And two things only you can close: the hero (I assumed MoreHarvest the company), and one real, citable investor detail to replace the gap under key point 3.*
