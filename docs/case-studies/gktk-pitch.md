# hurulab story: GKTK

*Extracted July 3, 2026. Evidence from project files and interview. Design perspective. Audience: prospective clients evaluating hurulab through the positioning one-pager and website.*

## Part 1: evidence

### What does design do here

Design directed this project rather than decorating it.

- Design defined the structure: a 20-step, tap-driven, no-scroll phone experience, each step one idea, maximum two taps, alternating transitions and content beats. Source: gktk-step-naming-convention.md, April 14 meeting notes (moreharvest-gktk-html-meeting-20260414.md).
- Design wrote and locked the visual language: visionOS materiality, depth, and restraint, with amber as an event rather than a texture, specified down to surface levels, type tokens, and easing curves. Source: gktk-visual-identity.md.
- Design set the content rules: no invented copy, every string traced to an approved source, sentence case, no dark mode, no decorative shapes without meaning. Source: session 25 and session 40 handoffs.
- Design made the hard calls under pressure. Step 10 went through ten rejected versions (v10 to v19) before the research data dump became an interactive transform where five X marks turn to amber dots one at a time. The lesson entered the record: the animation is the content. Source: gktk-20260415-session-40-handoff.md.
- Design also produced the system around the work: the naming convention, the prototype-to-production workflow, CLAUDE.md for the build environment, and 40 written session handoffs. Sources: docs-prototype-workflow.md, gktk-migration-phases.md, gktk-CLAUDE-merged.md.

### How we do these projects

- The project started with no wireframes. Text, ideas, and discussion went straight into working screens. Source: interview.
- Two connected tracks. Design prototypes in Claude.ai as tappable JSX artifacts inside a realistic iPhone frame with variant chips. Approved prototypes move to Claude Code, where the prototype is the spec: every color value, spacing, duration, and easing curve preserved as written, no rounding, no substitutions. Sources: docs-prototype-workflow.md, gktk-migration-phases.md.
- Each design round presents several variants at once. The product owner gives kill or keep verdicts. Dead variants go into the record and never come back. Source: session 25 handoff, dead variants table.
- Every session ends with a written handoff file, and the next session opens by reading it, so continuity lives in documents rather than memory. Source: session 40 handoff.
- Rules become written rules the moment a mistake teaches them, so each mistake happens once. Source: the formatting and process rules sections repeated across handoffs.
- Cost of the whole thing so far: roughly two to three weeks to a month of one designer's time to reach 17 locked steps of 20, with no developer involved. Source: interview.

### Our value proposition

- The brief, in the team's own framing: something investors would remember, better than a normal deck. Source: interview.
- What the team got: a pitch investors experience rather than read. A cinematic phone journey through why Kumamoto, why now, using maps and story beats to show the boom, plus a data-dense PDF memo for the cold facts. Sources: gktk-project-knowledge.md, interview.
- The MoreHarvest team gave strong approval and wants it finished and in front of investors. Source: interview.
- Shown informally to a couple of investors, including a major Taiwanese real estate firm that still uses parts of it today. Source: interview.
- The alternative was more decks, which is what the team had produced before, or another go-to-market web page. Source: interview.

### How we do it differently

- The usual route puts a designer between a client and a dev team: briefs, tickets, waiting, and a deck or website at the end. Here one senior designer directed AI as the builder and shipped working, production-bound prototypes alone. Sources: interview, docs-prototype-workflow.md.
- The speed comes with engineering-grade discipline, which agencies rarely apply to design work: locked specs, a content contract, exact-value handoff from prototype to production code, and a written record of every decision and every dead idea. Sources: gktk-visual-identity.md, session handoffs.
- The output sits in a category the deck-bound Taiwan market does not produce: a story you tap through on a phone, built to the fidelity of a shipped product. Source: interview, gktk-project-knowledge.md.

### Open gaps

- No recorded quote from the real estate firm or the second investor. The reuse of the material is confirmed, the words are not.
- No cost comparison in money terms. The only quantified saving is the time figure of two to three weeks to a month of one designer.
- The experience is unfinished. Steps 6, 8, and 12 are blocked, step 20 is in progress, so the after state is partial.
- The project files call one content document a wireframe (gktk-wireframe-8.html). Per the interview, it functions as a copy contract, and no design wireframes existed.


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
