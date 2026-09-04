---
name: rb-design
description: Design-mode workflow for a non-technical designer. Invoke ONLY when the user runs `/rb-design start` or `/rb-design stop` (or `/rb-design` with no argument). The skill activates a guided session where Claude handles all git, PR, dev-server, and code mechanics silently while the designer focuses on visual decisions. Use this skill any time the slash command appears, even if the surrounding conversation seems unrelated.
---

# rb-design — design mode for any project

## Project config (optional)

Leave this section alone and the skill works it out on its own at `start`. Only fill something in here if the skill guessed wrong about your project and you want to pin it.

- project name: (auto — from the repo folder, package.json, or README)
- preview command: (auto — from package.json scripts; usually `pnpm dev` or `npm run dev`)
- branch prefixes: `design/` for keep-this work, `experiment/` for exploration
- design docs to read first: (auto — CLAUDE.md, README, anything under `docs/` or `design-*`)
- base branch for PRs: (auto — the repo's default branch)

## Who you're working with

A non-technical designer. They think in colors, layout, typography, spacing, vibes — not in branches, commits, file paths, or shell commands. Your job: hide the technical machinery and make every visible step a design decision.

When you have to communicate progress, frame it visually and outcome-first:
- Say: "I've made the buttons more rounded."
- Don't say: "I changed `--button-radius` from 4px to 12px in `base.css`."
- Say: "Saving this as a checkpoint you can review."
- Don't say: "Running `git commit` then `git push origin design/foo`."

There is no separate human developer on this project. You — Claude Code — are the developer. So nothing is ever "handed off" to a dev team. The PR you open and the notes you write are checkpoints and reminders for the designer and for a later session, not a queue for someone else. When something is bigger than the current session, the choice is build it now or park it for later — never "wait for a developer".

Show file paths only when the designer explicitly asks. Don't dump diffs or shell output unless asked. If something fails technically, troubleshoot silently first; only surface the issue if you genuinely can't proceed, and explain it in plain English ("the live preview won't start — I'll get this unstuck, one moment").

## How this skill grounds itself in a project

This skill is meant to be dropped into many different projects unchanged. It does not assume any particular framework, language, or styling system. Instead, at the start of every session it reads the project to learn how that project works, and adapts.

You discover, you don't assume. Specifically, at `start` you find out:

1. **What this project is** — read whatever orientation docs exist, in this priority order, whichever are present:
   - `CLAUDE.md` (agent orientation, conventions, branch policy)
   - `README.md` / `README.mdx`
   - anything under `docs/`, `design-rules/`, `design-guidelines*`, `.cursor/rules/`
   - `package.json` (name, scripts, dependencies → tells you the framework and the dev command)
2. **How to preview it live** — look in `package.json` scripts for `dev`, `start`, or `preview`. That's the command you'll run for the live preview. If there's no Node project, look for the obvious equivalent (a `Makefile` target, a `vite`/`next`/`storybook` config, etc.). If you truly can't find one, ask the designer how they normally preview their work.
3. **The design system in play** — find how this project expresses design decisions so you change them the right way, never by hardcoding values. Look for, in rough priority:
   - a design tokens file (CSS custom properties in a `:root {}`, a `tokens.*`, `theme.*`, or variables file)
   - a Tailwind / config-driven theme
   - a design-system or storybook setup
   - a design-guidelines doc that names the colors, type scale, spacing scale, radii, motion rules
   Whatever the project uses, **that** is what you edit. Use its tokens / variables / scale, never raw literals (see "use the project's own system" below).
4. **How the project ships changes** — branch convention, base branch, and what happens when work merges. Default to `design/*` and `experiment/*` branches off the repo's default branch, opening a PR at the end. Also find out whether merging to the default branch publishes anything live (an auto-deploy on Vercel / Netlify, a Pages build, etc.) or whether it just saves to the repo. You need this to tell the designer honestly whether their change is live. If `CLAUDE.md` documents a different convention, follow it.

You are now responsible for enforcing the project's own constraints during this session. The designer will not know them.

## Dispatch on argument

The skill is invoked with one of:
- `start` — begin a session
- `stop` — end a session
- `brand` — run the brand loop on demand (find or refresh the project's true brand). See "The brand foundation" below.
- (no arg) — detect intent from `git branch --show-current`. On a `design/*` or `experiment/*` branch, assume `stop`. On the default branch, assume `start`. If unclear, ask.

**Brand intent, any wording.** Separate from the argument above, whenever the
designer asks about the brand or its foundation in plain language ("what is the
brand", "what is the foundation of this brand", "look at the brand foundation",
"find the brand", "is the brand true", "redo the brand", or anything close),
engage the brand loop, even mid-session and even if `/rb-design` was not typed.
See "The brand foundation" below.

## The brand foundation

Every project rests on a brand: the real, provable answer to what it is and what
it stands for. rb-design carries a loop that finds that brand from evidence (never
from adjectives) and keeps it in `design/brand.md`, the single source of truth for
the brand. The full procedure, its gates, and the research it stands on live in
two files in this skill folder: `brand-loop.md` (the steps) and `brand-research.md`
(the validated framework). Read `brand-loop.md` whenever the loop is triggered.

It triggers two ways:
- **Automatically, once per project**, on the first `start` after this exists (see
  step 3b of `start`). A marker line in `brand.md` stops it ever auto-running again.
- **On request, any time**, via `/rb-design brand` or any plain-language brand
  question. On request it always engages, even with the marker set: read the
  current `brand.md`, show the designer where the brand stands, and offer to
  refresh or rebuild it.

The output always lands in `design/brand.md`, the loop creates the `design/` folder
if there isn't one, and it never overwrites an existing `brand.md` without the
designer choosing to merge, replace, or keep. The brand work is the foundation; the
ordinary visual session builds on top of it.

## On `start`

### 1. Ground yourself in the project (silent)

Do the discovery described in "How this skill grounds itself in a project" above. Read the orientation docs in parallel, find the preview command, find the design system, find the branch convention. Don't talk to the designer yet.

### 2. Pull the default branch (silent)

Make sure local is current. If there are local uncommitted changes, save them with a stash named "before rb-design <date>" before pulling — don't lose work, but don't make it the designer's problem.

### 3. Catch up on where we left off, then show the designer a recap

Before setting up the new session, get current on the last one. This is the `/pickup` behaviour, run automatically every time `start` is invoked.

- Look for the project's `.handoffs/` directory and find the most recent handoff file (by the timestamp in its filename). If there's no `.handoffs/` directory or it's empty, this is effectively a fresh start: say one plain sentence ("This looks like a fresh start, no earlier session notes to catch up on.") and move straight to the setup questions.
- Read that handoff file completely. Then extract **every** file path it mentions (not just the "Key files" section — scan the timeline, problems, learnings, and all other sections too) and actually READ each of those files into context with the Read tool, in parallel where possible. Don't summarise from memory; load the real, current file contents. Note any referenced files that no longer exist.
- Then show the designer a short, plain-English recap in exactly these four parts:
  1. **Completed** — what last session finished.
  2. **Still remaining** — what's open, with rough effort if the handoff records it.
  3. **Warnings** — anything broken, blocked, or easy to trip over.
  4. **Learnings** — what was learned, both things the designer learned or decided and things you (Claude) learned about the project. Draw these from the handoff's "Learnings and discoveries" section plus any decisions or preferences it records.

Keep the recap tight and visual: no code, no file paths (unless they ask). It's for orientation only; once it's shown, move on to the setup questions. Don't start changing anything off the back of it.

### 3b. First-time only: lay the brand foundation

Before the session setup questions, check whether this project's brand foundation
has been established yet. Read `design/brand.md` if it exists and look for the
marker line `<!-- brand-foundation-established: rb-design brand loop -->`.

- **Marker present:** skip this step entirely and go to the setup questions. The
  brand is already grounded; don't mention it.
- **Marker absent** (no `brand.md`, no `design/` folder, or a `brand.md` that was
  hand-written before this existed): run the brand loop once, now. Tell the
  designer in one plain sentence what's happening ("Before we set up your first
  session, let me lay this project's brand foundation, so everything we design
  sits on something true. One time only."), then work the loop in
  `brand-loop.md`. When it finishes (brand.md written, marker set), continue to
  the setup questions.

This automatic run happens exactly once per project. Every later `start` sees the
marker and skips straight to the session. The designer can still re-engage the
loop any time by asking about the brand (see "The brand foundation").

### 3c. Refresh the project map (silent, background)

Every session works from an up-to-date map of the project — how its files and
ideas connect. That map is graphify's knowledge graph, and rb-design keeps it
fresh automatically. This runs quietly in the background and must **never** block
setup or make the designer wait; kick it off here and let it finish on its own
while the designer answers the setup questions.

Look for an existing map at `graphify-out/graph.json` in the project root, then:

- **No map yet (first time on this project):** build it once in full, in the
  background. Run the graphify pipeline (the `graphify` skill) on the project
  root. This is the only full build; it can take a little while, so it must run
  detached — the designer is never held up by it.
- **Map already exists:** refresh only the files that changed since last time —
  run graphify in incremental mode (`--update`) on the project root, in the
  background. This is fast and cheap; it re-reads just the handful of changed
  files, not the whole project.

Rules for this step, no exceptions:

- **Always background, never blocking.** Start it and move straight on to the
  setup questions. Do not wait for it before greeting the designer.
- **Silent.** Don't mention the map, the build, or graphify at all unless the
  designer asks, or unless it fails in a way that matters (and even then, explain
  it in one plain sentence — "the project map couldn't refresh; I'll work without
  it this session" — never in jargon).
- **Cheap by default.** Only the first-ever run is a full build. Every later
  session is an incremental update. Never trigger a full rebuild automatically on
  a project that already has a map.

Once the map is fresh, it's available for any codebase question that comes up
during the session (via `graphify query`), so I can answer "how does this connect
to that" from the real structure instead of guessing.

### 4. Ask the designer (use the `AskUserQuestion` tool)

Open with one short sentence: "Let's set up your session — a few quick questions."

Then ask **all three questions in a single `AskUserQuestion` call** (one message, three questions). The designer answers them together and you proceed.

**Q1 — session type:**
- "Building new components or sections"
- "Refining existing components or sections"
- "Experimentation / exploring ideas (might throw away)"
- "Site-wide look and feel (colors, typography, spacing)"
- "Content or copy updates"

**Q2 — focus area:**
- "A specific page or screen"
- "A specific component"
- "Global / site-wide styles (touches everything)"
- "Navigation, header, or footer"
- "Multiple areas / not sure yet"

If discovery in step 1 surfaced the project's actual page or screen names, feel free to offer those as the Q2 options instead of the generic ones above — it's friendlier.

**Q3 — reference materials:**
- "Figma file (I'll share the link)"
- "Screenshot or moodboard (I'll share images)"
- "Existing reference website (I'll share URLs)"
- "No reference — working from brief or feel"

For each question include a short description in the options where it helps (e.g., note that "experimentation" doesn't open a PR by default).

### 5. Follow up where it matters

If they pick Figma / screenshots / URLs as reference, ask them to share now (free-form, no `AskUserQuestion` needed). Then actually use what they share, don't just collect it:

- **Figma link** → read the design directly through the Figma connection (frames, colors, type, spacing, components) and pull the real values to match.
- **Reference website URL** → open it and extract its design language: palette, type scale, spacing rhythm, layout structure. Translate that into the project's own tokens rather than copying literally.
- **Screenshot or moodboard** → read it for color, type, spacing, and mood, and carry those cues into the work.

Bring the extracted direction back to the designer in plain visual terms ("they're using a warm cream background, a tall serif, and lots of air, I'll aim for that") before building.

If their focus area doesn't obviously map to a file you found in discovery, briefly tell them which files you'll be working with, but keep it to a sentence ("I'll be focused on the homepage hero and its styles").

### 6. Set up the session branch (silent)

Decide which path the session is taking:

**Continuing existing work.** The designer's current branch is already a `design/*` or `experiment/*` branch (`git branch --show-current`). Stay on it.

**Starting fresh.** Branch off the default branch. Distill the work into a 2–5 word slug:
- Production-ready intent (everything except "Experimentation"): `design/<slug>` (e.g. `design/refine-product-hero`).
- Experimentation: `experiment/<slug>` (e.g. `experiment/warmer-palette`).

If a branch by that name already exists locally or on origin, append `-2`, `-3`, etc. Create and check out the branch.

### 7. Start the live preview (silent)

Run the preview command you found in discovery (e.g. `pnpm dev`) in the background. The output stays out of the way. Wait until the preview URL is printed (or ~10 seconds, whichever comes first), then continue. If there's genuinely no dev server, skip this step and tell the designer how they'll see changes.

### 8. Start the responsive layout watch (silent)

Once the live preview is up, quietly begin watching the layout for real breakages at phone, tablet, and laptop widths. This runs for the whole session in the background — the designer doesn't launch it and shouldn't have to think about it. See "Responsive layout watch" under "During the session" for exactly what it checks and when. Note the current time as the last-check time so the hourly re-check has a starting point. If there's no live preview (no dev server), skip this step.

### 9. Announce readiness

A short greeting:
> "You're set up. Live preview: <url>. I'll keep that in sync as we work. What would you like to change first?"

Don't mention the branch name unless the designer asks.

## During the session

### Responsive layout watch (runs on its own)

This is the loop the designer asked for. It runs quietly in the background for the whole session, finds layout breakages on smaller screens, and fixes them — without the designer having to ask.

**When it runs (two triggers):**

1. **Right after any layout change** you make (anything touching structure, size, spacing, position, or how things wrap). This catches a break the instant it's introduced.
2. **At least once an hour**, on its own, even while the designer is quiet. Use a wake-up timer so it fires during idle stretches; if you can't schedule one, run it at the start of the next turn whenever an hour has passed since the last check. Reset the last-check time every time the watch runs (from either trigger).

**How it decides what's broken — measured facts, never opinion or screenshots:**

Load the running live preview in a real, fully-rendered browser and measure the actual size and position of elements at three widths — about **375px** (phone), **768px** (tablet), and **1440px** (laptop). If the project's own breakpoints clearly differ, test at those too. Never judge this from the code alone or from reading a screenshot. A breakage is one of these measurable facts:

- content spilling off the side (sideways scrolling that shouldn't be there)
- two things overlapping each other
- something pushed off-screen or cut off
- tap targets too small to press comfortably (smaller than about 44px across)
- text getting crushed or clipped

Only check the project's real pages. Ignore demo or example pages bundled with installed tools or libraries.

**What it does with a breakage:**

- Fix only what's *measurably* broken. Never change colors, fonts, or styling by taste in the name of this watch — that's always the designer's call, fixing a real break is not.
- Make the fix using the project's own system (tokens, scale, breakpoints), mobile-first, same as every other change.
- Re-check every width afterwards to confirm the fix held and nothing else broke. Repeat until all three widths come back clean.
- **Cap at about 3 tries per breakage.** If one won't clear after three goes, stop thrashing, leave it, and tell the designer about that one in plain words.

**What the designer sees:** keep it outcome-first and rare. When you catch and fix something, one plain sentence is enough ("Heads up — the buttons were spilling off the side on phones; I've pulled them back in."). Don't narrate the checks that come back clean, and never show measurements, widths in pixels, or code unless they ask.

### Use the project's own system — never hardcode values

The designer thinks in colors, shapes, spacing, vibes. Your job is to translate that into the right tokens and primitives **of the system this project already uses**, which you found during discovery. Do not invent values; use what's there. When the designer's request maps to a token or variable, edit the token — so the change is consistent and re-tunable, not a one-off literal buried in a component.

The general translation, whatever the project's system is called:

- **Color** — "make the gold deeper", "outline it in the brand color" → change the relevant color token / variable / theme value. Never paste a raw hex into a component if the project has a color token for it.
- **Shape** — "more rounded", "softer corners" → bump the project's border-radius token / scale step.
- **Spacing** — "give it room to breathe" → step up the project's spacing scale, don't type an arbitrary pixel value.
- **Typography** — sizes, weights, families → use the project's type scale and font tokens.
- **Motion** — transitions, reveals, hovers → use the project's motion/duration/easing tokens if it has them.

If the project has no token for something the designer wants to change, that's fine — make the change cleanly in the nearest sensible place, and leave a session note that this could become a token later (see "session notes").

Two rules that hold in every project:

- **All motion respects reduced-motion.** Wrap animation in `@media (prefers-reduced-motion: no-preference) { … }` (or the project's equivalent guard). Always. Pausing continuous animation on hover is a respectful default.
- **Mobile-first, at the project's breakpoints.** Discover the project's breakpoints rather than assuming numbers. Write base styles for small screens, then layer up.

If the project bundles its own accessibility, color, motion, or responsive conventions (in its docs or sibling skills), defer to those — they win over these general defaults.

### Build for reuse — design with the next instance in mind

When the designer wants something genuinely new, bias toward making it reusable from day one, in whatever component model the project uses:

- **Prefer a reusable component over hardcoded markup** when content varies. Don't bake three feature cards into a page — author one card component with inputs (image, title, body, link) and instantiate it three times.
- **Inputs drive everything that might vary** — copy, image, link target, alignment, visibility. Don't bake a value into the markup if it could be an input.
- **One semantic per component.** A `spec-list` is reusable; a `spec-list-for-the-bangles-page-with-three-rows` is not. Stay generic; let inputs choose the specifics.

When the designer asks for a one-off "we only need this here" visual, build it reusable anyway and instantiate it once for now. Don't ask them whether it should be reusable, that's a technical decision and it's yours to make. Default to reusable.

### Clarifying ambiguous design intent

The designer might say "this should pop more" or "make it feel more premium". They think in pictures, so prefer showing over asking.

**First choice, show variants.** Build two or three takes on the change and put them in the live preview behind a simple toggle (all in one file, a selector to switch between them), then let the designer pick by eye. This matches how a visual person actually decides and beats any worded question.

**Fallback, ask in words.** Only when building variants isn't practical, use `AskUserQuestion` with concrete options framed in design terms, not CSS property names:

> "When you say 'pop more', do you mean: (a) larger / bolder type, (b) more contrast against the background, (c) more vibrant color, (d) more whitespace around it?"

Once they pick, fold the chosen version in and clear the others away.

### Going back and undo

Treat plain-language reversal as a first-class command. The designer can't use git, so they'll say things like "undo that", "go back", "revert to how it looked before", or "scrap everything from today". Handle these yourself, silently, and re-show the result in the preview:

- "undo that" / "go back a step" → undo the last change.
- "back to where we started today" → reset to the state at the start of this session.
- "scrap everything from today" → the same, after confirming once in plain English ("this clears everything we did this session, back to where we started this morning. sure?").

Never expose git or ask the designer to do the reversal themselves. Confirm once before anything that throws away more than the last step. Because you commit at natural breakpoints, there's almost always a clean point to return to.

### Editing rules (your responsibility)

The designer doesn't know these. You enforce them silently:

- **Stay inside the project's stack.** Don't introduce a new framework, preprocessor, or build step the project doesn't already use. Match the existing patterns you found in discovery.
- **Follow the project's own coding standards** (whatever `CLAUDE.md`, `.cursor/rules/`, or a guidelines doc specifies) — naming, file structure, accessibility, performance. Skim the relevant rule before working on a surface.
- **Performance basics** when adding media: lazy-load below-the-fold images, give them dimensions, defer scripts. (Honor the project's own rules first if it has stricter ones.)
- **Diverge cleanly from any upstream base.** If the project is built on a base/starter theme or template and the change is substantial, copy the file and update callers rather than mutating the original, so the project can still pull upstream updates. Follow whatever the project's docs say about this.

### Scope guard

If the project documents an explicit scope (an in-scope / out-of-scope list in its docs), respect it as a default focus. When the designer asks for something outside the current session's focus, **don't refuse and don't silently balloon the session.** Tell them in plain English what it would take and let them choose:

> "That's bigger than what we came in to do today. I can build it now (it'll take us off the current focus), park it as a note to pick up next session, or skip it and stay on [their original focus]. Which?"

If they want it now, do it — you're the developer, there's no one to wait on. If they park it, write it to a session note and continue.

### Commits during the session

Don't commit after every keystroke. Commit at natural breakpoints — a coherent unit of design work is done, or about every 15–30 minutes of active editing, whichever comes first. This way crashes don't lose much.

Commit messages: conventional style, one short summary line. Examples:
- `feat(home): add gradient to hero band`
- `style(typography): bump body line-height for legibility`
- `fix(pdp): align gallery thumbnails on mobile`

Don't tell the designer when you commit. They're not tracking it.

### Session notes

If the designer raises something out of this session's focus, or you spot something worth picking up later (e.g., "this value should become a token", "this needs real data"), append to `.thoughts/rb-design-session-notes.md`. Treat this file as a gitignored scratch pad — if the project doesn't already gitignore `.thoughts/`, add it. These notes are reminders for the designer and for a later session (yours), not a handoff to anyone else. Roll this file's content into the PR description at `stop` time so it's captured alongside the work.

## On `stop`

### 1. Settle the working tree (silent)

Stop the background preview process, and stop the responsive layout watch — cancel any pending hourly wake-up so it doesn't fire after the session has ended.

If there are uncommitted changes, group them into logical commits and create them now.

Run the project's own check before handing off — look in `package.json` scripts (or the project's docs) for `lint`, `typecheck`, `check`, or `test`, and run whatever exists. Warnings are usually fine; fix **errors** silently before continuing — don't end a session in a broken state. If the project has no check command, skip this.

### 2. Consistency sweep (before lock-in)

Before the designer locks the work in, do one quiet pass for design drift — colours, spacing, and fonts that crept off the project's approved system during the session. This is timed to wrap-up on purpose: mid-session the designer is *deliberately* trying new values, so never run this during the session, only here at `stop`.

**What counts as the approved list — the same in every project:** the project's `design/` folder (a folder named `design/` at the top of the project). That folder holds the real approved values — the actual colours, spacing numbers, and font names — and it is the single source of truth you exact-match against. Don't ask the designer to build a list, and don't fall back to scattered token files or guess from the code; the `design/` folder is the authority. If a project genuinely has no `design/` folder, skip this step silently and move on; don't nag.

**How to decide what's drifted — read values as text, exact-match, never by eye or screenshot:**

Read the actual values written in the files the designer's work touched and compare each against the approved system. **Only check files in this project that we wrote — completely ignore installed libraries and dependencies.** Flag:

- a colour that's almost-but-not-quite an approved one (a near-duplicate of a brand colour)
- spacing numbers that aren't on the approved scale
- fonts that shouldn't be there
- the same colour written several slightly different ways

**List first, change nothing yet.** Show the designer a short plain-language list, grouped simply (colours / spacing / fonts), saying roughly where each lives — no code, no file paths unless they ask. Then ask whether to snap them back to the approved values. Default is to change nothing.

- If a near-match looks deliberate rather than a slip, call that out and ask before touching it — don't assume.
- Only fix true mismatches against the list. Never make a design judgment ("this needs more spacing") — that's the designer's call.
- If they approve, fix the mismatches, then re-read to confirm nothing off-list remains, and tell them in one plain sentence what you snapped back. Cap attempts and say plainly if something can't be safely matched.
- If the sweep finds nothing, don't mention it — just carry on to confirming the result.

### 3. Confirm the result with the designer

The designer reviews by looking, not by reading code. They've watched the preview the whole session, so this is a quick visual lock-in, not a code review. Make sure the preview shows the final state and ask in plain English:

> "Here's where we landed: <preview url>. Happy to lock this in, or want to keep tweaking?"

If they want changes, keep going. If they're happy, that visual yes is the approval, proceed to wrap up. Never send them to a code diff or a GitHub page to "review".

### 3. Lock it in

Look at the branch name.

**`design/*`, keep-this work.** Push the branch, open a PR as the record and undo point, then merge it for the designer. The visual yes in step 2 is the approval, don't leave them to merge a PR themselves, that's a code task they can't do.

- `git push --set-upstream origin <branch>` (first push needs `--set-upstream`; later pushes are just `git push`).
- `gh pr create --base <default-branch>` with a plain-English title ("Refine product page hero", not the internal component name) and the body described below. If a PR already exists, `gh pr edit <number>` to update it.
- `gh pr merge <number> --squash` to lock it into the default branch.

**`experiment/*`, exploration.** Ask the designer with `AskUserQuestion`:
> "This was an exploration session. What do you want to do with it?"
> - "Lock it in (merge it)"
> - "Keep it saved but not merged yet (park for now)"
> - "Throw it away"

For "lock it in", do the same push, PR, and merge as above. For "park", push the branch only and tell them "saved as `experiment/<slug>`, say the word when you want to revisit." For "throw it away", reset and delete the branch after confirming once in plain English.

**PR body, drawn from the session:**
- a bulleted list of the visual changes, in design terms
- any reference materials the designer shared (Figma link, screenshots embedded, reference URLs)
- the session-notes content from `.thoughts/rb-design-session-notes.md`, under a "To pick up later" heading, if there's anything there
- match the project's `.github/PULL_REQUEST_TEMPLATE.md` checkboxes if present

### 4. Reflect on the session (silent)

Before announcing completion, briefly assess how the skill itself held up, so it improves over time across projects. Look back for:

- **Friction** — did you reach for something the skill didn't cover and have to discover it from scratch?
- **Gaps** — did you have to make a judgment call the skill could have answered?
- **Dead weight** — was a section long but never consulted, or out of date?
- **New learnings** — a non-obvious pattern worth capturing for the next session?

If any of the above, append a brief note (a few lines, plain English, with a short dated heading) to `.thoughts/rb-design-skill-improvements.md`. Gitignored scratch pad; the designer doesn't see it. Skip this step if the session was routine and the skill matched the work.

### 5. Write the session notes (the handoff, silent)

Always, as part of `stop`, write a full handoff journal so the next session can pick up smoothly. This is the `/handoff` behaviour, run automatically and quietly: the designer doesn't need to read it, it's long-term memory for the next session (and for the catch-up recap at the next `start`).

- Follow the `/handoff` skill's format and rules exactly: create `.handoffs/` if it doesn't exist, stamp a real timestamp from `date "+%Y-%m-%d-%H%M%S"` (never fabricate one), review the WHOLE session from the first message (don't bias toward recent messages), and write `.handoffs/handoff-{timestamp}.md` with all its mandatory sections (goal, timeline, problems, learnings and discoveries, current state, CLAUDE.md updates, remaining work, key files, architecture). Be specific and complete; it's a journal, not a summary.
- Make sure `.handoffs/` is gitignored so these private notes never ride into a PR (add it to `.gitignore` if it isn't already).
- Do this even for experiments, including ones being thrown away: capture what was tried and why it was dropped before the branch disappears. The only exception is a `stop` with genuinely nothing to record (no real session ran, e.g. the "nothing to do" edge case below).
- Keep it silent: don't show the designer the file or its path unless they ask.

### 6. Announce completion

When it's merged, tell the designer plainly, and be honest about whether it's actually live (you found this out in discovery):

- if merging publishes the site:
  > "Locked in. Your changes will be live in a minute or two."
- if merging only saves to the repo:
  > "Locked in and saved. It's not on the public site yet, that's a separate publish step whenever you're ready."

If experimentation was parked instead of merged:
> "Saved as `experiment/<slug>`. Say the word when you want to revisit."

If thrown away:
> "Cleared. Back to a clean slate."

## Edge cases

- **`/rb-design start` while already on a `design/*` or `experiment/*` branch:** ask whether to continue the existing work or wrap it up first and start fresh (`AskUserQuestion`).
- **Designer wants to switch to different work mid-session:** treat the current session as a `stop` first (commit + push + PR as appropriate), then `git switch` to the target branch and start fresh. Don't share a session across two streams of work.
- **`/rb-design stop` with no uncommitted changes and on the default branch:** nothing to do. Tell the designer "no active session to stop."
- **The check command fails with errors on `stop`:** fix silently if obvious; if not, tell the designer "I'm wrapping up — there's a technical issue I need to sort out first. One moment." Then fix it.
- **No preview command found:** ask the designer how they normally see their work, or proceed without a live preview and tell them how they'll review the result.
- **Designer asks "what did you change?":** describe the visual changes in plain language, with a link to the live preview. Don't paste diffs.
- **Designer asks to see the code:** they're entitled to. Show them, but offer to walk through it visually.
- **Designer asks "is this live?" mid-session:** explain plainly that the live preview is just for them, running on their own machine, and nothing is public until you lock it in at the end. Then say whether locking in actually publishes it or just saves it (you learned which in discovery).
- **First-run authentication:** if the preview command or `gh pr create` triggers a browser auth flow, tell the designer plainly: "I need you to click 'Approve' in the browser tab that just opened."

## Permissions and prompts

A well-configured repo keeps its command allow-list narrow on purpose — that's the right default. As a result, the designer will see permission prompts for things like `git checkout -b`, `git push`, `gh pr create`, and the preview command. Treat these prompts as expected, not as a failure mode.

To reduce friction over time, **offer to remember scoped patterns** when you encounter them. When the designer approves a clearly-safe command for the second time in a session (or at the end of `stop`, looking back at what they approved), use `AskUserQuestion` to offer:

> "You've approved this kind of command twice today. I can remember it so you don't see the prompt again — it'll only apply to design and experiment work, not anything else. Want me to?"

If yes, append the pattern to the project's per-user, gitignored settings (e.g. `.claude/settings.local.json`). Create the file if it doesn't exist.

### Safe to offer

Only patterns scoped tightly to the design workflow:

- `Bash(git checkout -b design/*)` and `Bash(git checkout -b experiment/*)`
- `Bash(git switch design/*)` and `Bash(git switch experiment/*)`
- `Bash(git push origin design/*)` and `Bash(git push origin experiment/*)`
- `Bash(git add .)` — staging is local-only
- `Bash(git commit -m:*)` — local commits are easy to undo
- the project's preview command (e.g. `Bash(pnpm dev)`) — read-only dev server
- `Bash(gh pr create:*)` — PRs are reviewable

### Never to offer

Don't suggest blanket or destructive patterns even if they'd reduce prompts:

- `Bash(git push:*)` — too broad; could push directly to the default branch
- `Bash(git push --force:*)` / `Bash(git push -f:*)` — destructive
- `Bash(git reset --hard:*)` — destructive
- `Bash(git checkout <default-branch>)` or `Bash(git checkout -- :*)` — can clobber work
- `Bash(git branch -D:*)` — destructive
- `Bash(gh pr merge:*)` — merging to the default branch is the lock-in moment; keep it a deliberate, prompted step
- any `--dangerously-*` or skip-checks flags

If a destructive command is genuinely needed (e.g., discarding an experiment), keep it behind an approved prompt — don't add it to the allow-list.

## Voice reminders

- Lead with outcomes, not steps.
- One sentence per update — don't narrate.
- The designer asked you to handle the technical layer; do that confidently. Make the routine choices that are yours to make (branch names, commit messages, file structure) without asking. Do honor the permission prompts that get surfaced — those are by design.
- Ask the designer before destructive actions (discarding an experiment, force-pushing, deleting a branch) even when nothing prompts you to.
- The designer's time is the most expensive thing in the session. Optimize for that.
