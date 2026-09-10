# CLAUDE.md - hurulabs

## Code Standards
- ""Professional"": No emojis, memes, or casual language. Write in a clear, concise, and professional tone.
- **Well-structured**: Organize code into clear, logical modules with single responsibilities. Group related functionality together.
- **No redundancy**: Do not repeat logic. Extract shared behavior into reusable functions or modules.
- **No duplication**: Never copy-paste code. If similar code appears in multiple places, refactor it into a shared abstraction.
- **Consistent**: Follow the existing patterns, naming conventions, and style of the codebase. Keep formatting and structure uniform across files.
- **Minimal, correct comments**: Default to no comments. Only add a comment when the *why* is non-obvious. Comments must accurately reflect the current code — never leave stale or misleading comments.
- **File size limit**: Main files should be **800 lines or fewer**. If a file grows beyond this, split it into smaller, focused modules. Two exemptions: `docs/evidence.md`, because the evidence rule calls it "the primary sources, in one file" and splitting it would cost what it is for, and `docs/ceo-concepts.md`, five text captures kept whole because they are the last trace of pages whose HTML is unrecoverable.

---

## Project Overview

`hurulabs` is the design project for **hurulab**, a Taiwan-based team selling business, design
and technology in one team. The job here is to build hurulab's brand and its website.

The brand foundation is `docs/brand.md`. It is the single source of truth for what
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
  Every one of them was stripped out when `docs/evidence.md` was built, and again from
  the project write-ups on 4 September 2026. The Desktop originals were deleted the same day,
  so they no longer survive anywhere. Do not use them.
- **Market and competitor research.** Five documents (competitor analysis, market research,
  go-to-market, launch roadmap, international benchmarks) never cite an interview. They are
  research about the Taiwan market, not about hurulab, and they were deliberately left out of
  `docs/evidence.md`, and were deleted on 7 September 2026. Do not lift claims about hurulab
  from them.
- **Anything derived from a derived file.** `brand.md` cites `docs/evidence.md`. Everything else
  cites `brand.md`. Never build a third layer.

**If a fact has no source, it does not go in. Write "not known" instead.** A blank is a
finding. An invented filler is a defect that compounds every time it is copied forward.

**There is no archive of record outside this repository.** The full original corpus was at
`/Users/riaan/Desktop/hurulab/` and the owner deleted it on 4 September 2026. **The GitHub
remote is the only backup.** Anything deleted from here is recoverable from git and from
nowhere else.

**Everything lives in `docs/`, owner instruction, 7 September 2026.** The `knowledge/` folder
that held the research corpus was deleted and what was worth keeping was moved into `docs/` and
combined. There is now one place to look and no second copy to drift. **Evidence still comes
from `docs/evidence.md` and nothing else**, and the rest of `docs/` is history rather than
truth: where any of it disagrees with `evidence.md` or with a rule file, the rule wins.

---

## Design system

The entire design system, the philosophy, brand, color, typography, tokens, components,
layout, spacing, motion, and the visual and build rules, lives in `docs/design-rules/`. Start
at `docs/design-rules/README.md` for the map of which file owns what. Do not restate any
design rule in this file; edit the owning file in `docs/design-rules/` instead.

Settled and owned, one file each: the design language, the breakpoints and scale, color, type,
the logo, icons, layout, motion, copy, sound, the components and the build rules.
Still to be built: sound, once real screens exist. As each is decided, write the owning file
and add its row to the README table. Each file is the single owner of its topic: changing a
decision means editing or deleting the rule in its owning file, never adding a second note
beside it.

**Three levels, not six: foundations, components, patterns.** Owner decision, 8 August 2026,
replacing atomic design. Foundations are built. The approved component list is
`docs/design-rules/components.md`, eight components against Carbon's forty and Coinbase's hundred and
forty, because every one had to earn its place. **Build one at a time, drawn and reviewed before
the next**: a set built quickly on 8 August was deleted the same day for having no research
behind it.

**There is no storybook**, removed 7 September 2026 on the owner's instruction along with the
Storybook tool and `package.json`. Nothing draws the rules today; they are specified in words
only. `build.md` owns the engineering rules and records the gap.

---

## Strict Rules

### Process Rules

**Language, Claude response style, and project naming:** English only, **American spelling
always** (color, not colour; gray, not grey; behavior, not behaviour), sentence case, no
emojis, no uppercase for emphasis, no em dashes or en dashes in Claude's writing. Refer to the
folder as `hurulabs` and the company as `hurulab`, one word, lowercase.

**American spelling applies to every reply in chat, not only to files.** The owner has
corrected this repeatedly, and the last time was a reply that said "colour" while reporting
that the spelling had been fixed everywhere else. Check the word before sending it, not after.

**Move at the owner's pace.** The owner is not a developer. Explain in plain language, one
thing at a time, and stop when told to stop. Do not stack up questions, and do not run ahead
of a decision that has not been made.

**The plan is updated before the work starts, learned 12 August 2026.** When new information
arrives or the direction changes, PLAN.md, PLAN_ARCHIVE.md and docs/decisions.md are brought
up to date first, then the audit, the questions or the build happens. On 12 August an audit
and a round of owner questions ran before any file recorded the new situation, and the owner
had to stop the session to demand the record. Nothing runs ahead of the plan.

**Build nothing until the owner says to build, learned 8 August 2026.** Approving a plan is not
approving the work. "Do step 1" means do step 1's first action, then stop and show what it
changed, because the first action usually changes the rest. This was broken twice in one day:
a page written during a planning turn, and a build started the moment a stress-test finished.
Both were deleted. Writing to `PLAN.md`, `docs/` and the rules files is not building; pages,
components and code are.

**Answer at the length of the question. The most broken rule in this file, and the owner has
had to say so repeatedly, most recently 13 August 2026.** Long replies do not survive being
read. Short, plain sentences, and a bulleted list when the owner asks what something is. Every
restatement of a plan is a chance to leave something out, so when asked what the plan says,
read the file rather than summarizing from memory.

**The hard limit: four sentences.** That is the default reply. A reply goes past it only when
the owner asks for a list of things, or asks a question that genuinely has several parts, and
even then it is a short bulleted list rather than prose.

**What keeps happening, so it can be recognized and stopped.** Work finishes and the reply
turns into a report of it: what changed, why it changed, what it was before, what was decided,
what is still open, each under its own bold heading. Every line is true and the whole thing is
unreadable. **The work being large is not a reason for the reply to be large.** A rebuilt page
is one sentence saying it is rebuilt, and the file path.

**Three things never go in a reply unless asked for.** A summary of changes already visible on
the page the owner is about to open. The reasoning behind a decision they did not question. A
restatement of what was decided earlier in the same session.

**Say the finding, not the search.** No narration of files read, rules checked, or steps taken
to reach an answer. The owner wants the answer.

**Never close a reply with what was not done, what to decide next, or what the owner should
consider.** If something genuinely needs deciding, that is an `AskUserQuestion`, on its own,
when the moment comes. Otherwise it belongs in `PLAN.md`, which owns the work order, and
nothing else needs to carry it.

**Four lessons that already cost sessions, recovered 7 September 2026** from the session notes
before they were deleted. Each names a real failure on this project.

- **Ask the hard constraints before generating, not after.** Four rounds of logo marks, 71 of
  them, were drawn before the owner said the mark had to sit exactly where the asterisk sits
  and had to carry motion. Both constraints invalidated nearly everything already drawn. One
  question first would have saved three rounds. When work will be judged in a specific place,
  establish that place before making anything.
- **Measure, never eyeball.** Matching the mark's position by eye failed twice. Rendering the
  glyph and reading its ink bounds gave the exact value in one step. For any "match this" task,
  measure first.
- **Watch for drift across rounds.** Each round optimised for the newest instruction and quietly
  lost what was good in the last one, until the owner said "they are all getting worse". They
  were right. Re-check new work against the original baseline, not only against the latest
  instruction.
- **Verify by rendering before reporting.** Two wrong guesses about a layout bug preceded the
  screenshot that found it. Never claim a visual fix that has not been seen. Screenshots are for
  the agent's own checking only, per the rule below.

**How to ask the owner anything, learned 4 August 2026.** Every question goes through the
AskUserQuestion tool, one issue at a time, with short option descriptions and no previews.
Before asking about anything visual, put it on the owner's screen first: open the page at the
right section, or build a small page that shows the thing, then ask. Never question them
about something they cannot currently see. **Never show the owner a screenshot, learned
12 August 2026.** They look at the real page, never a picture of it: give the file path or
open it in their browser. Screenshots are for the agent's own verification only, they are
written outside the project and deleted after use, and one is never saved into the project or
pasted into a reply. Reference images the owner supplies are theirs and this does not touch
them. Never open or act on files the owner drops into the project without asking what they
are for. Sentence case applies to every string a person
reads, including demo captions and sample labels.

**Copy rules, learned 5 August 2026.** Client-facing copy is complete human sentences, never
telegraphic fragments; when a source document exists, quote it rather than compressing it.
Never quote a fragment of an evidence claim: cutting the qualifying context can turn a true
claim false. A line break may follow a sentence, never sit inside one. Keep replies to the
owner short.

**Do not decide open questions.** Section 13 of `docs/brand.md` lists the questions the
interviews genuinely disagree on, including when the company was founded and what drives its
growth.
Leave them open. Recording a guess as a decision is how the last set of errors started.

**Branch model, and how work is saved:** `main` holds the approved state and is never edited
directly. **The remote is `RiaanMOHA/hurulab` on GitHub, public, added 4 September 2026** so
the research could be shared with the team. `main` is its default branch. **All work happens on one branch, `design`.
Owner decision, 12 August 2026**, replacing the per-task `design/<slug>` branches: the owner
is not a developer and a new branch name each session was noise they had to read and could
not act on. Throwaway exploration still gets `experiment/<slug>`, cut from `main`. Do not
create a new `design/<slug>`; check out `design` and work there. The `rb-design` skill
(`/rb-design start` and `/rb-design stop`) runs a design session and handles git, the preview,
and the code silently. **Finished work merges into `main` and both branches are pushed. There
are no Pull Requests.** Owner ruling, 4 September 2026, when the remote was added: this file
had anticipated that a remote would make the Pull Request the handoff, and it does not. The
owner works alone on `design`, so a review step would be them approving their own work. Push
is the save; GitHub is the backup and how the team reads it.

---

## File Structure

```
docs/
  brand.md                  The brand foundation. Single source of truth for what hurulab is.
                            Every claim carries a question number or a pointer into evidence.md.
                            Moved out of design-rules 7 September 2026: it is not design.
  visitor.md                Who arrives at a page and the one job the page has to do.
  design-rules/             Design and nothing else. README.md is the ownership map.
    README.md               Which file owns which topic. Read first.
    ...                     One file per topic: language, breakpoints, spacing, color, type,
                            logo, icons, layout, motion, copy, components, sound, build.
    build.md                The engineering rules: tokens only, the three levels, how a story
                            finds its markup, the accessibility floor.

    components.md           The eight components and two patterns, why each earned its place,
                            the build order, what was cut. Card and tile are different.
    visitor.md              Who arrives at a page and the one job the page has to do.
  evidence.md               The primary sources, in one file, twelve parts: the interviews
                            verbatim, the proven-versus-bet split, the project facts, two
                            market facts, and the meeting records. brand.md cites this and
                            nothing else needs to. THE ONE FILE THAT CANNOT BE REBUILT.
  decisions.md              Dated history of what was decided and what reversed it.
                            History, not truth.
  who-and-what.md           Who the people are, which company is which, what the shorthand
                            means. Identifies; settles nothing.
  pricing.md                Everything about money, three parts: the CEO's funnel and pricing
                            document in full, his ground truth operating system document, and
                            how eight other firms sell a staged engagement. Nothing settled.
  copy-archive.md           Client-facing copy that was written and judged, dated. The only
                            place the funnel exists as sentences a reader would see.
  case-studies/             Five write-ups of work actually delivered. Four are MoreHarvest's
                            internal work and whether they can be claimed is unanswered.
  ceo-concepts.md           The CEO's five ideas, as text. The HTML is unrecoverable. Four
                            were drawn and dropped; the fifth was never drawn and is unruled.
  outreach.md               Named Taiwanese businesses ranked by digital weakness, with two
                            government subsidies. Nobody has been approached; nothing verified.
  trust-badges.md           Eight certifications, what each costs and whether hurulab
                            qualifies. None applied for.
  visify.md                 An Australian firm's site, read as a reference. Standing guidance
                            before drawing a page. Structure only, never a value or a color.
  research.md               Findings from the design-system and reference reads that had no
                            other owner.



.plans/PLAN.md              Current and future work only, and what is genuinely unresolved.
.plans/PLAN_ARCHIVE.md      Finished and historical plan items, moved out of PLAN.md when they
                            close. History, not truth: brand.md wins on any disagreement.
                            Both moved into .plans/ by the owner, 13 August 2026.
CLAUDE.md                   This file. Agent and process orientation.
.gitignore

concepts/                   Exploration. Not rules, not decided. Delete freely.

.handoffs/                  One handoff, CURRENT.md, rewritten each session; older ones in
                            archive/. Shape and rules: .claude/rules/handoffs.md, which
                            overrides the global handoff and pickup skills here. Gitignored.
                            build/check_handoff.py fails the pile if it returns.
graphify-out/               Generated map, gitignored. Rebuilt 4 August 2026 from the current
                            project, 21 files. Refresh incrementally after big changes, then
                            run build/strip_graph_hulls.py: graphify's hyperedge shading is
                            broken (self-crossing triangles) and is stripped from graph.html.
build/                      Project tooling. strip_graph_hulls.py, the map-viewer fix.
                            deploy-to-office.sh copies concepts/ and logo/ to the office dev
                            box, served at https://hurulab.apps.hurulab.com on the team VPN.
                            Set up 10 September 2026; it shows the working tree, unreviewed.
```

**Nothing outside the project, and no second copy inside it.** The Desktop corpus was deleted
on 4 September 2026 and `knowledge/` on 7 September. **The GitHub remote is the only backup**,
so anything deleted is recoverable from git and from nowhere else. What was read and kept from
that corpus is listed in the tree above; the rest was read line by line before it went.

---

*The durable design rules belong in `docs/design-rules/`; this file holds the agent and process orientation and points there.*
