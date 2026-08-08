# CLAUDE.md - hurulabs

## Code Standards
- ""Professional"": No emojis, memes, or casual language. Write in a clear, concise, and professional tone.
- **Well-structured**: Organize code into clear, logical modules with single responsibilities. Group related functionality together.
- **No redundancy**: Do not repeat logic. Extract shared behavior into reusable functions or modules.
- **No duplication**: Never copy-paste code. If similar code appears in multiple places, refactor it into a shared abstraction.
- **Consistent**: Follow the existing patterns, naming conventions, and style of the codebase. Keep formatting and structure uniform across files.
- **Minimal, correct comments**: Default to no comments. Only add a comment when the *why* is non-obvious. Comments must accurately reflect the current code — never leave stale or misleading comments.
- **File size limit**: Main files should be **800 lines or fewer**. If a file grows beyond this, split it into smaller, focused modules. One exemption, granted 8 August 2026 and reasoned in `docs/design-rules/README.md`: `storybook.html` stays whole, because splitting it would stop it opening offline from disk, and it is expected to keep growing.

---

## Project Overview

`hurulabs` is the design project for **hurulab**, a Taiwan-based team selling business, design
and technology in one team. The job here is to build hurulab's brand and its website.

The brand foundation is `docs/design-rules/brand.md`. It is the single source of truth for what
hurulab is, and every claim in it carries a source. Read it before writing anything
client-facing. Start at `docs/design-rules/README.md` for the map of which file owns what.

hurulab's two earlier draft pages and the old paperclip mark were deleted on 30 July 2026,
once their decision history had been extracted to `docs/decisions.md`. They are recoverable
from git commit `3005e5f` and are not a source of truth for anything.

---

## The evidence rule

This is the most important rule in this file. It exists because it was broken once and cost a
full rewrite of the brand foundation.

**Every factual claim about hurulab must trace to `docs/evidence.md`.** That one file holds the
primary sources, in strength order:

1. **Part 1, the interviews.** Five people, thirty questions, verbatim. The strongest source in
   the project. Cite as `(Q7, Riaan)`.
2. **Part 2, knowns and bets.** The owner's own split between proven and still-a-bet, from a
   raw Miro board export. Respect that split.
3. **Part 3, project facts.** Condensed from thirteen case studies, keeping only claims that
   cite a file, a commit count or a date.
4. **Part 4, two market facts**, reproduced with their caveats because recorded decisions rest
   on them directly.
5. **Part 5, the 4 August 2026 team meeting record**, preserved when `todo/` was deleted.

**What is not evidence:**

- **Story passages.** The source case studies each contain a "Pixar seven-step" section with
  beats like "Until one day" and "Because of that". They are writing exercises about a
  composite, invented client, not records of events. A pitch deck dying in a room came from one
  and spent a day inside the brand foundation as the company's origin before it was caught.
  Every one of them was stripped out when `docs/evidence.md` was built. If you go back to the
  Desktop originals, they are still there. Do not use them.
- **Market and competitor research.** Five documents on the Desktop (competitor analysis, market
  research, go-to-market, launch roadmap, international benchmarks) never cite an interview.
  They are research about the Taiwan market, not about hurulab, and they were deliberately left
  out of `docs/evidence.md`. Do not lift claims about hurulab from them.
- **Anything derived from a derived file.** `brand.md` cites `docs/evidence.md`. Everything else
  cites `brand.md`. Never build a third layer.

**If a fact has no source, it does not go in. Write "not known" instead.** A blank is a
finding. An invented filler is a defect that compounds every time it is copied forward.

The full original corpus stays at `/Users/riaan/Desktop/hurulab/`, untouched. It is the archive
of record. It is deliberately not copied into this project, because a second copy drifts.

---

## Design system

The entire design system, the philosophy, brand, color, typography, tokens, components,
layout, spacing, motion, and the visual and build rules, lives in `docs/design-rules/`. Start
at `docs/design-rules/README.md` for the map of which file owns what. Do not restate any
design rule in this file; edit the owning file in `docs/design-rules/` instead.

Settled and owned, one file each: the design language, the breakpoints and scale, color, type,
the logo, icons, layout, motion, copy, sound and the build rules, pictured in `storybook.html`.
Still to be built: the logo motion and interaction. As each is decided, write the owning file
and add its row to the README table. Each file is the single owner of its topic: changing a
decision means editing or deleting the rule in its owning file, never adding a second note
beside it.

**Three levels, not six: foundations, components, patterns.** Owner decision, 8 August 2026,
replacing atomic design. Foundations are built. The approved component list is
`docs/research/proposal.md`, seven components against Carbon's forty and Coinbase's hundred and
forty, because every one had to earn its place. **Build one at a time, drawn and reviewed before
the next**: a set built quickly on 8 August was deleted the same day for having no research
behind it.

**`storybook.html` is the single source, and the stories read from it.** A story holds no markup
and clones its section by id, so one drawing serves both views. `build.md` owns the rest of the
engineering rules.

---

## Strict Rules

### Process Rules

**Language, Claude response style, and project naming:** English only, sentence case, no
emojis, no uppercase for emphasis, no em dashes or en dashes in Claude's writing. Refer to the
folder as `hurulabs` and the company as `hurulab`, one word, lowercase.

**Move at the owner's pace.** The owner is not a developer. Explain in plain language, one
thing at a time, and stop when told to stop. Do not stack up questions, and do not run ahead
of a decision that has not been made.

**Build nothing until the owner says to build, learned 8 August 2026.** Approving a plan is not
approving the work. "Do step 1" means do step 1's first action, then stop and show what it
changed, because the first action usually changes the rest. This was broken twice in one day:
a page written during a planning turn, and a build started the moment a stress-test finished.
Both were deleted. Writing to `PLAN.md`, `docs/` and the rules files is not building; pages,
components and code are.

**Answer at the length of the question.** Long replies do not survive being read. Short, plain
sentences, and a bulleted list when the owner asks what something is. Every restatement of a
plan is a chance to leave something out, so when asked what the plan says, read the file rather
than summarizing from memory.

**How to ask the owner anything, learned 4 August 2026.** Every question goes through the
AskUserQuestion tool, one issue at a time, with short option descriptions and no previews.
Before asking about anything visual, put it on the owner's screen first: open the page at the
right section, or build a small page that shows the thing, then ask. Never question them
about something they cannot currently see. Never open or act on files the owner drops into
the project without asking what they are for. Sentence case applies to every string a person
reads, including demo captions and sample labels.

**Copy rules, learned 5 August 2026.** Client-facing copy is complete human sentences, never
telegraphic fragments; when a source document exists, quote it rather than compressing it.
Never quote a fragment of an evidence claim: cutting the qualifying context can turn a true
claim false. A line break may follow a sentence, never sit inside one. Keep replies to the
owner short.

**Do not decide open questions.** Section 13 of `docs/design-rules/brand.md` lists the questions the
interviews genuinely disagree on, including when the company was founded and what drives its
growth.
Leave them open. Recording a guess as a decision is how the last set of errors started.

**Branch model, and how work is saved:** local git only, there is no remote. `main` holds the
approved state and is never edited directly. Work happens on `design/<slug>` branches, and
throwaway exploration on `experiment/<slug>`, both cut from `main`. The `rb-design` skill
(`/rb-design start` and `/rb-design stop`) runs a design session and handles git, the preview,
and the code silently. With no remote there are no Pull Requests, so finished work merges into
`main` locally. When a remote is added, the Pull Request becomes the handoff and this rule
changes.

---

## File Structure

```
docs/
  design-rules/             The design system. README.md is the ownership map.
    README.md               Which file owns which topic. Read first.
    brand.md                The brand foundation. Single source of truth for what hurulab is.
                            Every claim carries a question number or a pointer into evidence.md.
    ...                     One file per topic: language, breakpoints, color, type, logo,
                            icons, layout, motion, copy, sound, build.
    build.md                The engineering rules: tokens only, the three levels, how a story
                            finds its markup, the accessibility floor.
    storybook.html          The picture of every rule, and the single source every Storybook
                            story clones from. Exempt from the 800-line limit, reasoned in
                            README.md. Run it with `pnpm storybook`.
    stories/                One story file per level. A story holds no markup of its own.
  decisions.md              Dated history of what was decided and what reversed it, recovered
                            from the retired pages. History, not truth.
  evidence.md               The primary sources, in one file. Parts 1 to 3: the interviews
                            verbatim, the proven-versus-bet split, the project facts. Part 4,
                            two market facts. Part 5, the 4 August meeting record. brand.md
                            cites this and nothing else needs to.
  research/                 Studies run in the browser by the owner, and their synthesis.
                            ajsmart, vellum and ladders for the proposal pages; carbon,
                            atlassian, coinbase and behaviour for the design system.
                            findings.md is what they settled, proposal.md the component list.

css/tokens.css              The tokens, lifted from the rule files that own them. Decides
                            nothing: where it and a rule disagree, the rule wins.
.storybook/                 Storybook's own config: where stories live, and the four
                            breakpoints in the viewport toolbar.
package.json                pnpm and Vite. node_modules/ and storybook-static/ are gitignored.

PLAN.md                     Current and future work only, and what is genuinely unresolved.
PLAN_ARCHIVE.md             Finished and historical plan items, moved out of PLAN.md when they
                            close. History, not truth: brand.md wins on any disagreement.
CLAUDE.md                   This file. Agent and process orientation.
.gitignore

concepts/                   Exploration. Not rules, not decided. Delete freely.

.handoffs/                  One handoff, CURRENT.md, rewritten each session; older ones in
                            archive/. Shape and rules: .claude/rules/handoffs.md, which
                            overrides the global handoff and pickup skills here. Gitignored.
                            build/check_handoff.py fails the pile if it returns.
.thoughts/                  Gitignored scratch notes.
graphify-out/               Generated map, gitignored. Rebuilt 4 August 2026 from the current
                            project, 21 files. Refresh incrementally after big changes, then
                            run build/strip_graph_hulls.py: graphify's hyperedge shading is
                            broken (self-crossing triangles) and is stripped from graph.html.
build/                      Project tooling. strip_graph_hulls.py, the map-viewer fix.
```

**Outside the project.** `/Users/riaan/Desktop/hurulab/` holds the full original corpus, 74
files. It is the archive of record and is not copied in here. A `research/` folder that
duplicated it was removed on 30 July 2026 after `docs/evidence.md` was built from it, because
two copies of a source drift apart and the stale one gets cited.

---

*The durable design rules belong in `docs/design-rules/`; this file holds the agent and process orientation and points there.*
