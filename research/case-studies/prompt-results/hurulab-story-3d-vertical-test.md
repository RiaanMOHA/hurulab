# Hurulab story: 3d-vertical-test

*Extracted 2026-07-03. Evidence from project files and interview. Design perspective. Audience: a family office or fund principal evaluating MoreHarvest, and a business owner considering hiring Hurulab. Both are asking the same question: can this small team really deliver that?*

## Part 1: evidence

### What does design do here

- Design initiated the project. No brief came down; Riaan pitched it and the team adopted it. The problem he named: investors could only see photos and floor plans, hard to sell remotely. (interview)
- Design directed every build decision to Claude Code. No developer wrote or edited a line of code at any point. (interview, confirmed)
- Design decisions on record:
  - walls named by their dominant feature (window-wall, ac-wall) instead of compass directions, so anyone can read the model. (handoff-prompt.md)
  - panoramas beat blueprints when they disagree on installed reality. The blueprint put one window sill at 2.0m; the photos showed 0.85m. The photos won. (handoff-session-3-20260422.md)
  - the "feel roomier" pass: field of view 50 to 70, thinner walls, higher ceiling, because the correct dimensions still felt cramped in walk mode. (handoff-2026-04-22-113728.md)
  - Apple HIG compliance for the iPad target: 44px tap targets, reduced-motion support, dark mode color tokens, safe-area handling for the M5 iPad Pro. (room-1-product-hotspots-prompt.md, handoff-2026-05-13-060401.md)
  - exact product specs over guessed furniture: a fridge modeled perfectly from spec sheets, and a plan to source real Muji and Nitori product links. (3d-test-project-progress-meeting-8.md)
- Design quality-controlled the output. Manual QA against real photos caught a mirrored room, a floating bed, a desk built inside the bed, and a sink hole in a kitchen corner. (handoff-2026-04-22-113728.md, meeting 7)
- Deliverables: room 1 in four locked variants, rooms 2 to 4, a unified two-floor building with stairs, an exterior with barbecue patio, a product hotspot system, an iPad-ready presentation target, and a photoreal living-dining workstream grounded in six Gemini reference renders. (handoffs and meetings 3 to 9)

### How we do these projects

- Three tools, one director. Claude chat plans and writes prompts, Claude Code executes in VS Code, Gemini Nano Banana generates photoreal reference images. The designer routes between them. (handoff-2026-05-12-062003.md)
- The prompt workflow: draft, self-audit into a severity-sorted table, full rewrite, then Claude Code's own pre-execution review before anything runs. On 2026-05-20 that review caught three real blockers, a wrong file extension, a source document in the wrong directory, and a missing project skeleton, before a single file was touched. (handoff-2026-05-20-080952.md)
- Hard stops between phases: Claude Code must report and wait for approval before destructive changes. (multiple handoffs)
- Variant folders instead of git branches: v1 to v4 kept side by side behind a chip switcher, so every stage stays comparable and nothing gets overwritten. (handoff-2026-04-22-113728.md)
- Session continuity through handoff files and a pickup routine, so a project spanning more than 14 sessions never loses state. (all handoff files)
- Daily 1 pm progress reviews with By Lin and Henry. (3d-test-project-progress-meeting-3.md)

### Our value proposition

- Before: remote investors judged a Kumamoto house from photos and floor plans. (interview)
- After four weeks (2026-04-22 to 2026-05-20): a navigable 3D walkthrough of the whole property, presentable on an iPad, plus a documented, repeatable pipeline the team can point at the next house. (handoffs, meetings)
- Cost: one designer, main focus most days for four weeks, zero new spend. Existing subscriptions and the company GPU covered everything. (interview)
- Priced alternatives from the team's own evaluation: Spretica at $3,300 a month, Luma AI at roughly 15 hours of processing per model, Matterport-class hardware at roughly 30 times the cost of the chosen route. (meetings 6 and 7, sinyi-style-3d-tour-build-guide.md)
- The counterfactual: without this project the team would have kept selling with photos and floor plans, no 3D at all. (interview)

### How we do it differently

- A typical agency sells a deliverable; this produced a capability. The pipeline, conventions, and prompt playbook stay in-house and transfer to the next property. (meetings 4 and 5, handoffs)
- A typical studio staffs a developer; here a designer directed AI and shipped dev-grade output, WebGPU rendering, PBR texture pipelines, HIG-compliant UI, with no developer involved. (interview, handoffs)
- A vendor's tool starts from scratch each project. The team noted that commercial solutions require starting over each time, while the skills Claude learned here transfer between houses. (3d-test-project-progress-meeting-4.md)
- The QA standard is reality itself: every render checked against panoramas of the actual rooms, and when sources disagreed the photos won. (handoffs)

### Open gaps

- No recorded reaction yet from any investor, principal, or stakeholder to seeing the 3D work. (interview, confirmed)
- The value-add investor deck (By Lin) and the investor presentations were planned but their outcome is not recorded.
- The living-dining photoreal workstream is unfinished. (handoff-2026-05-20-080952.md)
- No quantified business result yet: no deal, viewing, or sale attributable to the work.

## Part 2: the story

### Headline

One designer, four weeks, zero new spend: a Kumamoto house became a 3D walkthrough investors can hold in their hands.

### Hero

The hero is the team selling renovated Japanese houses to investors who live an ocean away. What they wanted: a way for someone in Taipei or Singapore to stand inside a house in Kumamoto without boarding a plane. Hurulab is not the hero. Hurulab is the guide who showed them how.

### Story structure (Pixar seven-step)

1. Once there was a team selling renovated Japanese houses to investors an ocean away.
2. Every day they sent photos and floor plans, and the investors had to imagine the rest.
3. Until one day a designer on the team proposed something no one had asked for: build a full 3D walkthrough of the Kumamoto house, without hiring a single developer.
4. Because of that, he directed an AI coding tool room by room, checking every render against photographs of the real house. When the blueprint said a window sill sat 2 meters up and the photos showed 0.85, the photos won.
5. Because of that, mistakes surfaced fast and got fixed fast, a mirrored room, a bed floating off the floor, and the fixes hardened into a repeatable playbook: draft, audit, review, build, verify.
6. Until finally, four weeks after the first session, the whole house could be walked through on an iPad. Built by one designer. And here is the part people do not believe: he cannot write code.
7. Ever since then, the team owns the skill, not just the file. The playbook points at the next house, and the next, at no new cost.

### Three key points

1. Design led, it did not decorate. Proof: the project started as the designer's own pitch, and every decision on record is a design decision, from naming walls by what is on them to holding the iPad build to Apple's own interface guidelines.
2. The process is the product. Proof: every build prompt went through draft, audit, rewrite, and a pre-execution review. On 2026-05-20 that review caught three real blockers before a single file was touched.
3. A skill beats a deliverable. Proof: the vendor option cost $3,300 a month and starts over each project. This cost one designer's four weeks and nothing new, and the pipeline transfers to the next property.

### Language notes

- Short-word flags: "capability" swapped for "skill" in the story; "photorealistic" swapped for "true to the photos" where it appears in narrative; "counterfactual" kept out of part 2 entirely.
- Analogy or metaphor: directing AI is like directing a film. The director never holds the camera, but every frame is their decision.
- Readability check: pass. Part 2 sits at roughly fifth to sixth grade. The audience holds capital, not 3D expertise, so plain language is correct here.

### Visual notes

- Design led, it did not decorate → a side-by-side: the real panorama photo of a room-1 wall next to the finished 3D render of the same wall.
- The process is the product → a simple five-step loop diagram: draft, audit, review, build, verify.
- A skill beats a deliverable → a one-line cost comparison: vendor at $3,300 a month versus zero new spend, one designer, four weeks.

### Delivery notes

- Surprise or reversal: it lands at step 6, after the dev-grade result is established: the person who built it cannot write code.
- Specific detail added: the vague line "every render was checked against reality" is replaced with "the blueprint said the window sill sat 2 meters up; the photos showed 0.85 meters; the photos won."
- Ratio held at roughly two-thirds narrative (the seven steps and hero) to one-third data and argument (the three points and their proofs). Because there is no client reaction yet, the story ends on ownership of the skill, not on applause. When the first investor reaction lands, it becomes the new step 7.
