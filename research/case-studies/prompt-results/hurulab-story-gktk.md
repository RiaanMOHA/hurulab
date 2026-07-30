# Hurulab story: GKTK

*Extracted July 3, 2026. Evidence from project files and interview. Design perspective. Audience: prospective clients evaluating Hurulab through the positioning one-pager and website.*

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

## Part 2: the story

### Headline

One designer, no dev team, about three weeks: a pitch investors tap through instead of a deck they forget.

### Hero

The MoreHarvest team. They have a 2 billion yen serviced apartment project in Kumamoto, built for Taiwanese chip engineers, and they need investors to remember it after the meeting ends.

### Story structure (Pixar seven-step)

1. Once there was a team with a 2 billion yen project in Kumamoto and a story investors needed to hear.
2. Every day they pitched the way everyone in Taiwan pitches: with decks. Deck after deck, each one read once and forgotten by the same afternoon.
3. Until one day they decided the next pitch had to be something investors would remember, better than a normal deck.
4. Because of that, their designer skipped the agency route and built the pitch himself, directing AI as the builder. No wireframes, no dev team. Text, ideas, and discussion turned straight into working screens on a phone.
5. Because of that, the work needed rules instead of meetings. A locked visual language. A ban on invented copy. Variants built in rounds and killed or kept on sight. A written handoff after every session so no decision got lost. One step went through ten rejected versions before the team wrote down the rule that stuck: the animation is the content.
6. Until finally, after roughly three weeks of one designer's time, 17 of 20 steps were locked: a cinematic phone experience that walks an investor through why Kumamoto, why now, beat by beat, with maps that show the boom and a data-dense PDF for the cold facts.
7. Ever since then, the team has pushed to finish it and put it in front of investors, a major Taiwanese real estate firm keeps using pieces of it, and the way it was built became the method Hurulab now offers to clients.

### Three key points

1. Design directs, AI builds. Proof: GKTK reached 17 locked steps of a 20-step production-grade experience with one designer, no developer, in about three weeks.
2. Process makes the speed repeatable. Proof: 40 written session handoffs, a locked visual identity spec, kill or keep variant rounds, and a pipeline rule that the prototype is the spec, preserved down to single color values when it becomes production code.
3. People remember what they experience. Proof: step 10 went through ten rejected versions until a slow interactive transform, five X marks turning to amber dots one at a time, replaced paragraphs of research. A major Taiwanese real estate firm still uses parts of the pitch today.

### Language notes

- Short-word flags: "differentiation" and "iteration" removed from the draft in favour of "what makes it different" and "rounds". "Cinematic" kept, it carries meaning no short word does.
- Analogy or metaphor: a deck is a brochure; this pitch is a test drive.
- Readability check: pass at roughly grade five to six for the narrative. Terms like "serviced apartment" and "investor" stay because the named audience knows them.

### Visual notes

- Design directs, AI builds → two diagrams side by side: the traditional chain (client, account manager, designer, dev team, weeks) versus the Hurulab chain (designer directing AI, days).
- Process makes the speed repeatable → a filmstrip of the 40 session handoff files, or a kill and keep board of variant chips with the dead ones crossed out.
- People remember what they experience → three phone frames from step 10: the five X marks, the mid-transform moment, and the final amber dots under "MoreHarvest solves all five."

### Delivery notes

- Surprise or reversal: lands in step 7. The big real estate firm valued the work enough to keep using it, then flattened it back into a traditional deck, because that is how Taiwan still pitches. The same moment proves the work and names the gap Hurulab exists to close.
- Specific detail added: "a complex project" became "a 2 billion yen serviced apartment project in Kumamoto", and "many iterations" became "ten rejected versions".
- Ratio: the story runs about two-thirds narrative, one-third proof and numbers.
