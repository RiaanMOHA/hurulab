# hurulab story: Moha Hub

*Extracted 3 July 2026. Evidence from project files and interview. Design perspective. Audience: traditional Taiwanese business owners who need software, want to work with AI, but do not understand it and are hesitant about it.*

## Part 1: evidence

### What does design do here

- Design originated the project. There was no brief. The hub was the designer's own initiative to put all of MoreHarvest's products in one place. Source: interview.
- Design defined the content architecture: a fixed skeleton for every section (heading, subheading, body, visual), a two-sentence body limit, and section names and order locked once set. Source: GKTK and Value Add conversations.
- Design set the system constraints: two fonts only (REM for headings, Noto Sans JP for body), brand color #fbb931, warm dark surface, mobile first. Source: project plan conversation.
- Design directed the AI at every step: extracting and translating the CEO's Miro board, auditing five reference sites through browser sessions, and writing minimal prompts for Claude Code to build. Sources: project plan, audit, and implementation conversations.
- Design did quality control on the AI: all five reference site audits came back missing the same two things (internal vertical spacing rhythm and confirmed mobile behavior), and the designer caught both and forced corrective re-audits. Source: audit QC conversation.

### How we do these projects

- Gather: pull Granola meeting notes and the CEO's Miro board, translate the Chinese content to English, and compile everything into a NotebookLM as the single content source. Source: project plan conversation.
- Reuse: extract design system and documentation prompts from prior projects instead of starting from zero. Source: project plan conversation.
- Set up: repo on company GitHub, deployment on Vercel, Claude Code in VS Code loaded with the stack and constraints. Source: project plan conversation.
- Learn: audit five reference websites (radiance.family, byooooob.com, aim.obys.agency, gte.xyz, bjornflow.com) for layout, spacing, animation, and mobile behavior, then quality check the audits and re-audit until every claim is observed, not guessed. Source: audit conversations.
- Build: the designer writes minimal prompts, Claude Code writes all the code, and the result ships to a live URL for iteration. Sources: implementation conversations and interview.

### Our value proposition

- Before: MoreHarvest had many products, presented to investors through ad hoc slide decks and PDFs, with source content scattered across Miro boards and meeting notes, partly in Chinese. Sources: interview and project plan conversation.
- After: one live hub at kozue-five.vercel.app plus dedicated product pages, with consistent structure, copy, and design system. Sources: interview and build conversations.
- Speed: roughly three days of the designer's time from idea to live hub. Source: interview.
- Reaction: leadership liked it a lot and said they definitely want to do it, essentially a done deal, pending design refinement. Source: interview.

### How we do it differently

- The traditional route: the designer produces many Figma screens, hands them to developers, and waits months for the build. Source: interview.
- This route: one designer directs AI through research, content, translation, and build, with no handoff, live in three days. Sources: interview and all conversations.
- The differentiator is not the AI itself. It is the design judgment applied to the AI: the fixed content skeleton, the locked constraints, the quality control that caught the same gap in five separate AI audits. Sources: audit QC conversation and content conversations.

### Open gaps

- No verbatim stakeholder quotes exist, only the designer's paraphrase of the reaction.
- The hub has not yet been used with actual investors; refinement is on hold behind other projects.
- No cost figure exists for the traditional alternative, only the time estimate of months.
- Exact calendar dates were not recorded.
- The exact number of products on the hub is not confirmed; the designer describes it as a lot.


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
