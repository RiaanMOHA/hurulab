# hurulab story: value-add prototype

*Extracted 2026-07-03. Evidence from project files and interview. Design perspective. Audience: a Taiwan-based company decision-maker who needs AI training, or design and engineering consulting, and is deciding whether hurulab can help.*

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


---

*The "Pixar seven-step" story passage that followed here has been removed. It was a writing
exercise about a composite client, not a record of events, and one such passage was once
mistaken for company history. The evidence above, including its open gaps, is what this
project stands behind.*
