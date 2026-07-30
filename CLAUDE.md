# CLAUDE.md - Huru Lab positioning site

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

The positioning site for Huru Lab, an AI consultancy in Taipei. One page that makes a single argument: give us a day of discovery, and you will see the evidence before you buy anything. It is an internal review draft, not a live site. The page is marked `noindex, nofollow`, carries a review banner, and its footer reads "Draft prototype, 29 July 2026. Not for circulation".

Eight views live in the one file and are switched by the URL hash, one visible at a time: home, start, outcomes, cases, why, value, who, and services. A "Review notes" button in the masthead reveals open questions written in brass alongside the copy.

**Technology stack:** a single self-contained HTML file. No framework, no build step, no dependencies, no external assets, no webfonts. The CSS is inline and driven by custom properties, the JavaScript is inline and vanilla. Light and dark are both shipped, through `prefers-color-scheme` and a `data-theme` override.

The page was saved from `https://positioning.apps.hurulab.com/`, which is where it is published.

---

## Design system

The entire design system, the philosophy, brand, colour, typography, tokens, components, layout, spacing, motion, and the visual and build rules, lives in `docs/design-rules/`. Start at `docs/design-rules/README.md` for the map of which file owns what. Do not restate any design rule in this file; edit the owning file in `docs/design-rules/` instead. This `CLAUDE.md` holds only the agent and process orientation.

The folder exists and is deliberately empty. No rule has been written yet, so the only expression of the design system today is the `:root` custom property block at the top of the page's inline `<style>`. When the first rule is written, create `docs/design-rules/README.md` first, give it the ownership table, then write the owning file. Each file is the single owner of its topic: changing a decision means editing or deleting the rule in its owning file, never adding a second note beside it. That one principle is what keeps a rules folder from drifting.

---

## Strict Rules

Mandatory constraints. All of them are defined in full here for now, because `docs/design-rules/` is still empty. Each one names the file that will own it. Once an owning file exists, the definition moves there and only a summary stays here; when a moved rule changes, edit the owning file, not the summary.

### Process Rules

**Language, Claude response style, and project naming:** English only, sentence case, no emojis, no uppercase for emphasis, no em dashes or en dashes in Claude's writing. Refer to the project by its literal folder name, `hurulabs`, never shorthand like "the site" or "the deck". Future owner: `docs/design-rules/copy.md`.

**The page is a draft, not a live site:** do not remove the `noindex, nofollow` meta, the review banner, or the "Not for circulation" footer without an explicit instruction. It is a draft for Ed, then Henry, BY and Riaan.

**Review mode is a feature, not debris:** the "Review notes" button toggles `review-on` on the root element and reveals the `.rv` open-question notes. Keep it working through any change.

**Tokens, never hardcoded values:** every colour, type size, spacing step and layout width comes from the `:root` custom properties. Change the token, not the rule that uses it, and never write a raw hex or pixel value where a token already exists. Future owner: `docs/design-rules/brand.md`.

**Both themes, always:** any new colour has to be defined in all three theme blocks, the `prefers-color-scheme: dark` block and the two `data-theme` blocks, or dark mode breaks. Future owner: `docs/design-rules/brand.md`.

**Motion respects reduced motion:** guard animation behind the reduced-motion query, as the page already does. Future owner: `docs/design-rules/motion.md`.

**Mobile-first, at the page's own breakpoints:** base styles are written for the smallest screen and layered up with `min-width` queries in rem. Use the widths already in the file rather than inventing new ones. Future owner: `docs/design-rules/responsiveness.md`.

**File size is a known, recorded exception:** the page is 1,105 lines against the 800-line standard above. Splitting it into `index.html`, `css/`, and `js/` is the agreed target and has not been done. Do not begin that split inside a design session; it is a code task with its own commit. Future owner: `docs/design-rules/build.md`.

**Branch model, and how work is saved:** local git only, there is no remote. `main` holds the approved state and is never edited directly. Design work happens on `design/<slug>` branches and throwaway exploration on `experiment/<slug>`, both cut from `main`. The `rb-design` skill (`/rb-design start` and `/rb-design stop`) runs the session and handles git, the preview, and the code silently. With no remote there are no Pull Requests, so a finished session merges into `main` locally. When a remote is added, the Pull Request becomes the handoff and this rule changes.

**Previewing:** there is no build step and no dev server. Serve the folder statically and open the page. Note that the nav links in the saved page point at the absolute production URL (`https://positioning.apps.hurulab.com/#...`), so clicking them locally leaves the local copy. Changing them to plain `#` anchors is outstanding work.

---

## File Structure

There is no separate canonical map yet; this section is it, until `docs/design-rules/build.md` exists and takes ownership. Consult it before reading files so you open only what the task needs. The line ranges are an orientation aid and will drift as the page is edited; treat them as approximate and refresh them when the file is next split.

```
Huru Lab _ See it before you buy it.html
                            The whole site, in one self-contained file. 1,105 lines,
                            in this order:
                              12 to 397     Inline <style>. First the :root design tokens
                                            (colour, type scale, gutter, measure, shell
                                            width), then the dark and data-theme blocks,
                                            then the component blocks in this order:
                                            shared, masthead, buttons and links, bento,
                                            method strip, trio and pull, outcomes,
                                            use cases, services, comparison, closing,
                                            review layer.
                              399 to 406    Masthead (wordmark, Review notes button) and
                                            the review-mode banner.
                              408 to 1039   <main>. Eight hash-routed views, one visible
                                            at a time: view-home, view-start,
                                            view-outcomes, view-cases, view-why,
                                            view-value, view-who, view-services.
                              1041 to 1047  Footer.
                              1049 to 1083  Inline <script>. Two things only: the
                                            review-notes toggle, and the hash router
                                            that shows one view and hides the rest.
                              1086 onward   Grammarly markup left behind by the browser
                                            that saved the page. Not ours, safe to delete.

CLAUDE.md                   This file. Agent and process orientation only, no design rules.
.gitignore

docs/
  design-rules/             The design system source of truth. Empty today. README.md is
                            the first file to write, and it carries the map of which file
                            owns what.

.handoffs/                  Session handoff notes, written at the end of each design
                            session. Gitignored, so they live on this machine only;
                            /pickup reads the newest one.
.thoughts/                  Gitignored scratch notes for session and skill follow-ups.
graphify-out/               Generated project map. Gitignored, and not built: graphify reads
                            this project as documents rather than code, and document
                            extraction needs an LLM API key that is not set here. Only a
                            file-listing cache exists.
```

---

*The durable design rules belong in `docs/design-rules/`; this file holds the agent and process orientation and points there.*
