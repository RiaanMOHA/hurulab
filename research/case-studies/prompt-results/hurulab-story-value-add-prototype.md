# Hurulab story: value-add prototype

*Extracted 2026-07-03. Evidence from project files and interview. Design perspective. Audience: a Taiwan-based company decision-maker who needs AI training, or design and engineering consulting, and is deciding whether Hurulab can help.*

## Part 1: evidence

### What does design do here

Design leads this project, it does not decorate it. The record shows design making the calls in four areas.

- Narrative structure. The pitch is built on a researched persuasion arc, with the Hsinchu-to-Kumamoto parallel as the spine and a repeating problem, solution, proof, benefit cycle applied only to the four sections that can carry it: engineer persona, IRR breakdown, four risks and hedges, exit strategy (deep research session, June 2026). Section 3 has written hard rules: under 10 seconds of scroll, exactly one outcome number per side, and a list of forbidden content (value-add-prototype-flow-feedback.md).
- Content governance. Design defined a three-source model where Miro, meeting notes, and project code merge into one canonical file, value-add-source-of-truth.md, covering roughly 360 strings across 28 steps, with all 8 source conflicts decided by Riaan personally, then locked so no AI can edit it without him (handoff 2026-05-21).
- Motion strategy. A live reference site, facilpay.io, was audited down to inspected CSS values, and that evidence became rules: motion on sections 3, 7, and 10 only, three deliberate pause points, apex mid-journey (value-add-20260505-facilpay-audit_copy.md, claude-code-prompt-motion-guidance.md).
- The experience itself. An iPad-first, landscape, tap-driven journey merging a live map, a 3D property walkthrough, and financials into one scroll (meetings 2 and 3). From the interview: the two elements that land hardest in demos are the offer-versus-market comparison and the map interaction.

### How we do these projects

A designer who is not a developer directs the build.

1. Work runs in two lanes: claude.ai drafts the reference documents, Claude Code does the file work, and Riaan carries files between them by hand (handoffs, May to June 2026).
2. Every build instruction is a structured markdown prompt with three mandatory layers: an ask-first block that halts everything until Riaan confirms scope, an explicit what-this-is and what-this-is-not section, and directive blocks with exact paths and verbatim wording (handoffs 2026-05-15 and 2026-05-22).
3. Conflicts between sources are never auto-resolved. They come to Riaan one question at a time, and he decides each one (handoff 2026-05-21).
4. Sessions end with timestamped handoff files and restart with pickup, so nothing depends on memory (handoff files in the project).
5. Henry, the CEO, reviews in recurring meetings and gives feedback keyed to step numbers, which gets sorted into design, motion, and copy workstreams (Notes-from-Henry-20260601.md, handoff 2026-06-01).
6. By handles deployment on Vercel. Interview correction: the Cloudflare move discussed in meetings 4 and 5 did not happen. Cal and Pedro test.

### Our value proposition

From the interview: Henry's previous static decks were landing, but they were boring, and they did not tell the real story of Kumamoto and why now is the moment to invest. The prototype exists to tell that story: 28 steps, 13 sections, a live map, a 3D walkthrough, animated financials, and a parallel PDF. The core value claim, in Riaan's words: without this way of working, it would not have been built at all. Important correction from the interview: no investors have seen it yet, so all reactions so far are internal.

### How we do it differently

From the interview: a typical agency or freelancer given this brief would have returned either a polished but static deck, or a generic template website with no real narrative. What happened here instead: a designer directed AI to build a bespoke interactive product in-house, and set up content governance most agencies never offer, one locked source of truth for every word, with the client's own feedback loop wired into it.

### Open gaps

- No investor exposure yet, so no external outcome, quote, or commitment exists.
- No recorded reaction quote from Henry. His notes file is improvement requests, not reactions.
- No cost or timeline comparison in numbers. The honest claim stays "it would not have been built at all".
- Unfinished work: PDF copy, final yen figures, motion implementation, the installable app step, and the Zhubei versus Hsinchu naming decision.

## Part 2: the story

### Headline

One designer, directing AI, built the interactive investor pitch that no agency would have delivered and no static deck could tell.

### Hero

Henry, a CEO with a real story to tell. He had the Kumamoto opportunity, the numbers, and the timing. What he did not have was a way to make investors feel it. He is the hero. Hurulab is the guide who showed him a new way to build.

### Story structure (Pixar seven-step)

1. Once there was a CEO named Henry who had found a rare property opportunity in Kumamoto, Japan, and needed investors in Taiwan and Singapore to see what he saw.
2. Every day he pitched with static decks. They landed, but they were boring, and they never told the real story of Kumamoto and why the moment to act was now.
3. Until one day his product designer proposed something different: do not describe the story, build it. An interactive journey investors hold in their hands, built by one designer directing AI, with no development team.
4. Because of that, things a designer could never build alone became buildable: a live map of the semiconductor cluster, a 3D walkthrough of the actual homes, financials that move as you scroll, all in one 28-step journey.
5. Because of that, the words needed the same discipline as the build. Every line of copy, roughly 360 strings across 28 steps, was pulled into one locked source of truth. When sources disagreed, a human decided, all 8 times. Henry's feedback flowed into it step by step.
6. Until finally the prototype went live. In demos, two moments land hardest: the map you can touch, and the section where our homes sit next to what the market actually offers. You do not read the gap. You see it.
7. Ever since then, MoreHarvest has a pitch no agency quoted and no template could produce, and something bigger: proof that one designer plus AI, with the right method, can build what used to need a team.

### Three key points

1. AI does not replace the designer, it multiplies them. Proof: a designer who cannot write code shipped a live map, a 3D walkthrough, and animated financials by writing precise, confirmed instructions for AI (handoffs, May to June 2026).
2. The method is control, not magic. Proof: every AI instruction uses a three-layer pattern that must ask first, define scope, then direct exactly. One locked file governs every word, and only a human resolves conflicts (handoffs 2026-05-15, 2026-05-21, 2026-05-22).
3. The result is something traditional suppliers would not have offered. Proof: interview answers. An agency would have returned a static deck or a template site, and the honest comparison is that this would not have been built at all the traditional way.

### Language notes

- Short-word flags: "canonical" replaced with "locked source of truth" in the story, "governance" kept only in part 1, "bespoke" avoided in the story in favour of "built for this pitch alone" where needed.
- Analogy or metaphor: directing AI is like being a film director. The director never touches the camera, but every shot is theirs.
- Readability check: pass. The story runs on short sentences and common words. The only technical terms kept are "AI", "prototype", and "source of truth", each carried by context. The audience is business decision-makers, not engineers, so specialist depth stays in part 1.

### Visual notes

- AI multiplies the designer → a short screen recording of the map interaction on an iPad, held in someone's hands.
- The method is control → a simple diagram: Miro plus meetings plus code, flowing into one locked file, flowing out to the prototype and the PDF.
- Different from traditional suppliers → a side-by-side: one page of the old static deck next to the interactive gap section.

### Delivery notes

- Surprise or reversal: it lands in step 2 and pays off in step 7. The old decks were not failing, they were landing. The problem was boredom, and the payoff reverses the usual value pitch: not cheaper or faster, but possible versus impossible.
- Specific detail added: "every line of copy" replaced with "roughly 360 strings across 28 steps, with all 8 conflicts decided by a human".
- Ratio: the seven steps and hero carry the narrative, the three key points and part 1 carry the data, roughly two-thirds to one-third.
