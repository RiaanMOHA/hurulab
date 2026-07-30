# Hurulab story: value-add prototype

*Extracted 2026-07-05. Evidence from project files and interview with Riaan. Design perspective. Audience: Taiwan companies, and business owners like them across the region, who need premium product and experience work built and are deciding who to hire.*

---

## Part 1: evidence

### What does design do here

Design led this project. It did not decorate it.

- **Design set the platform standard, then made it a research discipline.** The move to iPad Pro 13 as the primary device was a design decision. It was then backed by a real Apple HIG and iPadOS research sprint, stored as four project docs in `docs/ipad-research/`. Design produced the numeric spec the whole build obeys: safe areas, status bar 24pt, canvas 1366 by 1024, native easing curves, and iPad type floors (body 17pt, caption 13pt). (handoffs 2026-05-15; `docs/ipad-research/`; CLAUDE.md)
- **Design authored a locked design system and defended it against Apple itself.** Where Apple's guidance clashed with the house system, design overruled Apple on three points and recorded the reason: no frosted glass, REM and Noto Sans JP instead of San Francisco, and `#F9F9F9` instead of true black. The system is flat, neutral, and amber (`#FBB931`) is the only saturated color. "Amber is an event." (CLAUDE.md; `docs/visual-identity.md`; handoff 2026-05-15-101048)
- **Design owned the narrative, not just the surface.** The deck grew from 20 to 28 steps as design added story architecture: a Hsinchu to Kumamoto "parallel hook" and its later payoff, split on purpose so "the hook plants the seed, the timeline waters it later." Design also wrote hard content rules for the highest-stakes beats. (handoffs 2026-05-15-170424 and -174901; `docs/value-add-prototype-flow-feedback.md`)
- **Design governed the language.** Copy rules, canonical naming (Ozu-1, "Moha Intel"), no em dashes, sentence case, and a single locked source of truth for every word, enforced in code review by CODEOWNERS. (`value-add-source-of-truth.md`; `value-add-content-migration-plan.md`; CLAUDE.md)

Concrete artifacts design produced: 28 production step components; a playground of prototype variants (often 3 divergent designs per new section as a research method); a locked pain-points content and motion spec; a custom financials table built from scratch rather than a screenshot of a spreadsheet; and one governed copy source feeding both the iPad deck and the downloadable PDF.

### How we do these projects

- **A designer who does not read or write code directs the build.** Riaan gives intent in plain language. Claude does all the code, git, research, deployment, and debugging. This is written into the project's own memory rules. (memory files; all 11 handoffs; `hurulab-story-extraction-prompt.md`)
- **The prototype is treated as law, not a reference.** The documented workflow is: read the file fully, strip the device frame, extract every value exactly, translate animations, build, verify pixel for pixel. The rule is blunt: "Do not round `rgba(255,255,255,0.72)` to `0.7`. The prototype is the spec." (`docs/prototype-workflow.md`)
- **The real loop is react, not choose.** For new sections, Claude builds three variants in a playground, Riaan reacts to the built results, picks one, and it is promoted to production. Decisions are made by looking at real work, not by picking from a menu of technical options. (handoffs 2026-05-15-155432, -170424)
- **AI as a production engine.** Fleets of sub-agents did the heavy lifting: at one point 17 production components were rebuilt in a single dispatch. Claude also ran forensic debugging across two repositories to trace a map regression to one specific commit, the kind of work a dev shop bills by the hour. (handoffs 2026-05-15-155432 and 2026-06-01-180853)
- **Governance holds it together.** A documented authority chain, a locked copy source with CODEOWNERS, persistent memory rules, and 11 detailed handoffs act as institutional memory across sessions. (CLAUDE.md; migration plan; `.handoffs/`)

### Our value proposition

- MoreHarvest gets a bespoke, native-feeling iPad instrument the CEO holds and drives in person while pitching a Kumamoto real-estate thesis to Singapore family offices and Taiwan capital. It is deliberately not a slide deck, not a scrollable site, not a marketing page. (CLAUDE.md)
- It is a dual artifact that never drifts: the live iPad deck and a matching downloadable PDF memo both read from one locked copy source, so the pitch and the leave-behind always agree. (`value-add-content-migration-plan.md`)
- It ships into the CEO's hands: installable as a home-screen app with a custom icon and no browser bar, deployed to Vercel and Cloudflare, privately gated. (claude-code-prompt-installable-prototype.md; handoff 2026-06-01-180853)
- Real underwriting is baked in, not faked: real per-unit numbers for the focus property, Ozu-1 (¥35,000,000 acquisition to ¥45,600,000 sale), and sourced macro data (Ozu land up 33.3% in a year). (`value-add-content-migration-plan.md`; `docs/value-add-prototype-flow-feedback.md`)
- The contrast a Taiwan reader feels: the traditional path, a design agency plus a dev shop, would have taken months and six figures in US dollars. This was one designer directing AI. (interview, 2026-07-05)

### How we do it differently

- **The prototype is binding, not a starting point.** Most shops treat a mockup as approximate and "improve" it. Here the opposite is the rule: exact color, exact blur, exact motion, no rounding. (`docs/prototype-workflow.md`)
- **A non-developer directs AI to ship production code and deployment.** This is not a designer handing Figma to engineers. Riaan owns every design decision and cannot read a line of code, yet the work reaches a live, deployed, installable app. (memory files; handoffs)
- **Platform-native rigor from first principles.** HIG research, `100dvh` over `100vh`, browser chrome killed, an app and not a page. (handoffs 2026-05-15-101048, -114729)
- **Governance a freelancer would never bother to build.** Authority chain, CODEOWNERS, memory, handoffs. (CLAUDE.md; migration plan)
- **Design leads content strategy.** It authored the parallel narrative device and the pain-point taxonomy, strategic conviction-building, not styling. (handoffs; `docs/value-add-prototype-flow-feedback.md`)

### Open gaps

Kept honest. Not filled with invention.

- **No external investor has seen the finished deck.** It has been shown internally only. This story does not claim a funding win, because there is not one to claim. (interview, 2026-07-05)
- **No hard figure on the actual cost or exact build hours.** The counterfactual (months and six figures the old way) is Riaan's honest estimate, not an invoice. (interview, 2026-07-05)
- **The before-state is confirmed as a conventional slide deck that did not survive the room, but no primary copy of that old deck is in the project files.** (interview, 2026-07-05; secondhand line in handoff 2026-05-18-104901)

---

## Part 2: the story

### Headline

The premium iPad experience you think needs a full agency and six figures: one designer who cannot code directed AI and built it in weeks.

### Hero

The hero is you: a Taiwan company with a serious story and a demanding, wealthy audience to win. Your goal is to be taken seriously by people with money and taste, and to do it without a big team or a big budget you do not want to spend. Hurulab is the guide, not the hero. MoreHarvest is the mirror: a company just like you, whose journey you get to watch before you take your own.

### Story structure (Pixar seven-step)

1. **Once there was a** company with a real story to tell and a room full of skeptical, wealthy people to tell it to. You know this company. It might be yours.
2. **Every day** it carried that story the only way it knew how, in a slide deck. Handsome enough. The same shape every rival used. Easy to sit through and easy to forget.
3. **Until one day** the deck died in the room. The audience had seen a hundred like it, and a hundred and one did not move them. (This is MoreHarvest, pitching a Kumamoto property thesis to Singapore and Taiwan money. The generic deck did not survive the room.)
4. **Because of that** MoreHarvest did not do the expected thing. It did not hire a design agency and a development shop, the path that costs months and six figures. Instead, one product designer who cannot read or write a line of code sat down with Claude and treated the design itself as law: exact color, exact motion, nothing rounded, nothing "close enough."
5. **Because of that** the pitch stopped being slides and became a real iPad app. Twenty-eight full-screen steps. A live map of Kumamoto. A 3D walk through the actual property. Amber used once, like a struck match, never wasted. Built, deployed, and installable on the CEO's own iPad.
6. **Until finally** MoreHarvest had something no rival could hand across a table: not a document, but an experience the CEO holds and drives, ready for the next room. The instrument itself is the proof.
7. **Ever since then** the lesson is hard to un-see. The barrier to world-class work is no longer budget or headcount. It is taste and direction. A company with a clear eye and the right AI can now build what used to need a team.

### Three key points

1. **Design led the whole thing, it did not decorate it.** Proof: the iPad-first pivot was backed by a real Apple HIG research sprint; the design system overrules Apple on three points and holds; and the story grew from 20 to 28 steps as design added the parallel narrative, not as an afterthought but as the spine of the pitch.
2. **One person plus AI replaced a whole team.** Proof: a designer who cannot code directed Claude and fleets of sub-agents, once rebuilding 17 production components in a single dispatch, and reached a live app deployed to Vercel and Cloudflare, installable with its own icon.
3. **Obsessive fidelity, not "close enough."** Proof: the prototype is treated as binding law, down to exact `rgba` and blur values with no rounding, and every word on screen flows from one locked source of truth that code review protects.

### Language notes

- **Short-word flags:** prefer "build" over "implement", "clash" over "conflict", "run" over "execute", "start" over "initiate" throughout any expansion of this story. Current draft holds mostly to short words already.
- **Analogy / metaphor:** directing the build is like directing a film. The director never touches the camera, yet every frame is theirs. (Familiar to any business owner. It reframes "cannot code" from a weakness into the point.)
- **Anaphora opportunity:** in the key-points or closing section, a rallying beat: "No dev team. No agency. No months of waiting. One clear eye, and the right tool." Use once, near the end, not throughout.
- **Readability check:** pass. Sentences are short and mostly one or two clauses. One to watch on expansion: keep the financial and sourcing detail in Part 1, not in the narrative, so the story stays plain.

### Story-to-data ratio

Part 2 runs roughly two-thirds narrative to one-third proof, which is the target. The dense data (financials, sourced land figures, stack versions) is deliberately quarantined in Part 1 so the story does not turn into a spec sheet.

### Visual notes

- **Key point 1 (design led)** → a side-by-side: one flat, forgettable old-style slide next to one full-screen amber-accented step from the deck. The contrast carries the point without a sentence.
- **Key point 2 (one person plus AI)** → a simple flow: one designer, to Claude, to a spreading fan of sub-agents, to a deployed app on an iPad. One image of a lone operator commanding many hands.
- **Key point 3 (fidelity)** → a zoomed detail showing a prototype value and the shipped value matching exactly, the same hex, the same blur, laid one on top of the other.

### Delivery notes

- **Surprise / reversal:** it sits at step 4 and in key point 3. The reader expects AI-built work to mean cheap, generic, and cut corners. The reversal is that the AI path here produced more rigor than a typical agency, not less: exact values, a locked system, governance a freelancer would never build. That contradicts the trajectory the reader assumed, which is what makes it land rather than just inform.
- **Specific detail added:** the vague "a lot cheaper and faster" is replaced with the concrete contrast, months and six figures the old way against one designer in weeks; the vague "real numbers" is replaced with Ozu-1 at ¥35,000,000 to ¥45,600,000 and Ozu land up 33.3% in a year; the vague "a pretty app" is replaced with 28 steps, a live map, and a 3D property walk.
- **Video / live delivery:** if this story is ever told on camera or in a room, three things matter more than the script: real passion for the work, a genuine smile from actual interest, and a conversational, un-memorized delivery. A text file cannot supply these; the presenter must.
- **Culture story worth repeating:** "the designer who cannot read a single line of code, and shipped a deployed iPad app anyway." Short, true, and it says what Hurulab is in one sentence. Use it as the opener when introducing the practice.

### Proof point gaps

- The climax (key point implied at step 6) rests on the instrument existing and being demonstrably premium, not on an investor's reaction, because no external investor has seen it yet. If and when a real pitch happens, a single true line about the room would upgrade step 6 from "ready for the room" to "won the room." Do not write that line until it is true.
