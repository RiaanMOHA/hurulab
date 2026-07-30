# CLAUDE.md - hurulabs

## Code Standards
- ""Professional"": No emojis, memes, or casual language. Write in a clear, concise, and professional tone.
- **Well-structured**: Organize code into clear, logical modules with single responsibilities. Group related functionality together.
- **No redundancy**: Do not repeat logic. Extract shared behavior into reusable functions or modules.
- **No duplication**: Never copy-paste code. If similar code appears in multiple places, refactor it into a shared abstraction.
- **Consistent**: Follow the existing patterns, naming conventions, and style of the codebase. Keep formatting and structure uniform across files.
- **Minimal, correct comments**: Default to no comments. Only add a comment when the *why* is non-obvious. Comments must accurately reflect the current code — never leave stale or misleading comments.
- **File size limit**: Main files should be **800 lines or fewer**. If a file grows beyond this, split it into smaller, focused modules. 

---

## Project Overview

**What this project is has not been decided yet.** Do not assume it, and do not infer it from the files currently in the folder.

What is settled today is one job: the folder holds a page written by a coworker, and the owner wants it reviewed. Read it, critique it, report back. It is someone else's work brought here to be looked at, not this project's own site and not a starting point to build on.

**The single most important consequence:** nothing inside that page is a source of truth for this project. Not its colours, not its type, not its structure, not the review notes written into it, and not the decisions those notes record. It is material under review. Treat any rule that appears to come from it as belonging to whoever wrote it, not to this project.

An earlier version of this file got that wrong and described the page as this project's own site, with strict rules derived from how it is built. Those rules have been removed. If a rule below cannot be traced to something the owner decided, it does not belong here.

---

## Design system

The entire design system, the philosophy, brand, colour, typography, tokens, components, layout, spacing, motion, and the visual and build rules, lives in `docs/design-rules/`. Start at `docs/design-rules/README.md` for the map of which file owns what. Do not restate any design rule in this file; edit the owning file in `docs/design-rules/` instead. This `CLAUDE.md` holds only the agent and process orientation.

The folder exists and is deliberately empty. No rule has been written yet, and none should be invented, least of all by reading them off the page under review. When the first real rule is decided, create `docs/design-rules/README.md` first, give it the ownership table, then write the owning file. Each file is the single owner of its topic: changing a decision means editing or deleting the rule in its owning file, never adding a second note beside it. That one principle is what keeps a rules folder from drifting.

---

## Strict Rules

Mandatory constraints. All of them are defined in full here for now, because `docs/design-rules/` is still empty. Each one names the file that will own it. Once an owning file exists, the definition moves there and only a summary stays here; when a moved rule changes, edit the owning file, not the summary.

### Process Rules

**Language, Claude response style, and project naming:** English only, sentence case, no emojis, no uppercase for emphasis, no em dashes or en dashes in Claude's writing. Refer to the project by its literal folder name, `hurulabs`, never shorthand. Future owner: `docs/design-rules/copy.md`.

**Do not edit the page under review.** It is a coworker's file. Reviewing it means reading it and reporting; it does not mean changing it, tidying it, or fixing what looks wrong. If a change is genuinely needed, say so and wait to be asked.

**Do not infer the project from its folder contents.** Until the owner says what `hurulabs` is, do not name it, scope it, or start building it. Ask, or wait.

**Move at the owner's pace.** The owner is not a developer. Explain in plain language, one thing at a time, and stop when told to stop. Do not stack up questions, and do not run ahead of a decision that has not been made.

**Branch model, and how work is saved:** local git only, there is no remote. `main` holds the approved state and is never edited directly. Work happens on `design/<slug>` branches, and throwaway exploration on `experiment/<slug>`, both cut from `main`. The `rb-design` skill (`/rb-design start` and `/rb-design stop`) runs a design session and handles git, the preview, and the code silently. With no remote there are no Pull Requests, so finished work merges into `main` locally. When a remote is added, the Pull Request becomes the handoff and this rule changes.

---

## File Structure

There is no separate canonical map yet; this section is it, until `docs/design-rules/build.md` exists and takes ownership.

```
Huru Lab _ See it before you buy it.html
                            NOT OURS. A coworker's page, here to be reviewed. A single
                            self-contained file, 1,105 lines, saved from
                            https://positioning.apps.hurulab.com/ with the browser's
                            "save page as", so it carries some leftover extension markup
                            at the end. Inline CSS and inline JavaScript, no build step,
                            no external assets. Eight views switched by the URL hash, and
                            a "Review notes" button that reveals the author's own
                            open questions written through the copy.
                            Read it. Do not edit it.

CLAUDE.md                   This file. Agent and process orientation only, no design rules.
.gitignore

docs/
  design-rules/             The design system source of truth. Empty, deliberately. README.md
                            is the first file to write, once there is a real rule to write
                            down. Nothing in here may be derived from the page under review.

.handoffs/                  Session handoff notes, written at the end of each session.
                            Gitignored, so they live on this machine only; /pickup reads
                            the newest one.
.thoughts/                  Gitignored scratch notes for session and skill follow-ups.
graphify-out/               Generated map: graph.json, graph.html, GRAPH_REPORT.md.
                            Gitignored. Built 30 July 2026 from the page under review, so
                            it is a map of the coworker's page and not of this project.
                            Useful for the review, misleading for anything else.
```

---

*The durable design rules belong in `docs/design-rules/`; this file holds the agent and process orientation and points there.*
