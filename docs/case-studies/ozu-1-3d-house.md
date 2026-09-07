# hurulab story: 3d-vertical-test

*Extracted 2026-07-03. Evidence from project files and interview. Design perspective. Audience: a family office or fund principal evaluating MoreHarvest, and a business owner considering hiring hurulab. Both are asking the same question: can this small team really deliver that?*

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


---

*The "Pixar seven-step" story passage that followed here has been removed. It was a writing
exercise about a composite client, not a record of events, and one such passage was once
mistaken for company history. The evidence above, including its open gaps, is what this
project stands behind.*

---

**A note on the sources, added 7 September 2026.** Every file cited above, the handoffs,
meeting notes and project documents, lived in the Desktop corpus the owner deleted on
4 September 2026, or in the `knowledge/` folder deleted on 7 September. **None of them can be
opened today.** The claims are reproduced as they were extracted on the date in the header and
have not been re-verified since. They are recoverable from git.
