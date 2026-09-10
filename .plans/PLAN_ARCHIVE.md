# hurulab plan archive

Finished and historical work, moved out of `PLAN.md` on 4 August 2026 so the plan holds only
current and future work. This file is history, not truth: where it disagrees with
`docs/brand.md`, brand.md wins.

---

## The 30 July 2026 rewrite of the plan

The plan was rewritten on 30 July 2026. The previous version was built from the previous brand
foundation, which was built from story passages in the case studies. Both were rewritten from
the interviews. Sections A, B and C of the old plan were deleted, not parked. What they asked
for did not exist.

**Deleted, and why:**

- Six tasks chasing a pitch deck that died in a room in Singapore. The room, the meeting and
  the deck came from a Pixar seven-step story template in one of the case studies. No interview
  mentions it.
- A claim that no founding date exists "anywhere in 94 files". There were 74. The number 94
  appears in the sources once, as jadegia's age.
- A competitor list naming Cloud Interactive and Appar. Neither appears in any source. Both
  came from a retired HTML page.
- A section restating the gap list a third time.

Nothing was lost. The originals are at `/Users/riaan/Desktop/hurulab/` and what survived the
evidence rule is in `docs/evidence.md`.

---

## The visual identity restart, 30 July 2026

Owner decision, 30 July. Palette, typefaces, spacing and mark were all reopened, and nothing was
inherited. Released: three palettes, three locked typefaces, the serif ban, the 24px spacing
rule, and the paperclip mark. The full named list of what was released, and what still stands,
is section 15 of `docs/brand.md`.

Most of that was closed on 30 and 31 July. Settled: the design language and its three
references, the scale, the layout, the motion, the copy rules, the accent color as a ten-step
purple ramp, graphite neutrals, the semantic token names, the two-face rule, and the mark.

---

## Design system steps completed

| Step | Done |
|---|---|
| Color: ramps, semantic tokens, every component state, contrast, color blindness | 31 July 2026 |
| The mark: `*hurulab`, owned by `docs/design-rules/logo.md`. The drawn-asterisk idea was dropped 4 August; its motion is the open piece | 31 July 2026 |
| Typefaces: Geist for headings, IBM Plex Sans for body | 31 July 2026 |
| Type: sizes, weights, tracking, leading, semantic role tokens, in the storybook | 31 July 2026 |
| Icons: Phosphor, regular weight, inline SVG in the text color, owned by `docs/design-rules/icons.md` | 4 August 2026 |
| Measure: no max-width on text, ever, closing the 30 July open question | 4 August 2026 |
| Spacing: the ten-step scale with a job per step, insets, gaps and section rhythm, owned by `docs/design-rules/spacing.md`, shown in the storybook | 4 August 2026 |

**Built:** `docs/design-rules/storybook.html`. Color and type are complete: ramps, tokens, every
component state, the contrast matrix, the type ladder, weights and the two-tone heading.

---

## The coming-soon deliverable, completed 4 August 2026

Deliverable 2 of the 4 August meeting's work order.

- The page is `concepts/hurulab-coming-soon.html`, built in the design system: the mark, Geist
  and IBM Plex Sans, the system colors, the pill button with the trailing Phosphor arrow.
- The copy was approved by the owner part by part on 4 August, adapted into English from
  Henry's structure and the bilingual draft. Both source docs were deleted the same day and
  are recoverable from git.
- The scroll order: pain 1 (no technical partner who thinks in your shoes), pain 2 (AI spend
  with no number), how we solve it, what you get, the differentiator, the four steps, then
  "Coming soon" with Book a Call.
- English only, reconfirmed. The name stays `hurulab`, lowercase.
- The Book a Call button never got its destination. The owner removed it from the plan on
  4 August; `docs/decisions.md` keeps the record.

**Addendum, 5 August 2026: the short variant.** `concepts/hurulab-coming-soon-short.html`,
built in one session of owner line-editing: headline sentences only from the team's copy
documents, one dark emphasis per screen, one sentence per line, hard scroll stops with a
240ms snap between screens, a brand-fill Book a Call on the continuous corner curve, and a
closing question in place of "Coming soon". The session's rulings ("useless" retired, the
live-demo step disputed) are in `docs/decisions.md`, 5 August. Cal owns the final wording.

---

## Saved into history, 4 August 2026

The 30 and 31 July work sat uncommitted for four days, flagged in the 31 July handoff as the
single biggest risk in the project. Committed in five grouped save points on 4 August 2026 on
the `design/plan-restructure` branch.

---

## The foundations approval, 4 August 2026

Moved here from `PLAN.md` on 17 August 2026; the rule files in `docs/design-rules/` own the
values. Approved: breakpoints (mobile, tablet, desktop, desktop large), spacing on the new
scale, color (warning added as burnt orange, the two-tone gray lightened), type on the new
two-ratio scale (1.2 to 1.3, body 17 to 20, lede abolished), icons (Phosphor regular), the
44px tap minimum, and Apple's continuous corner curve with circular fallback.

---

## Closed 5 August 2026, the radius scale

The radius contract set 4 August was delivered: three candidate scales from the archived
Apple research built as a comparison page, the owner picked one by eye, `layout.md` section 3
was rewritten with the new scale, the storybook radius section was rebuilt on the new tokens,
and the word pill was purged from the live rules. The record is `docs/decisions.md`,
5 August.

---

## Also closed 5 August 2026, the logo, the favicon and the handoffs

Same-day work outside the radius contract. The logo's proportions were corrected by eye: the
asterisk to 1.3em, lifted 0.1em, tucked against the h, applied to both coming-soon pages, the
storybook and `logo.md`. The favicon was created from the typeface's Geist 700 asterisk in
purple-600 (`docs/design-rules/favicon.svg`), a mark section was added to the storybook, and
both coming-soon pages carry the tab icon; `logo.md` section 5 owns the favicon and
`docs/decisions.md` 5 August keeps the record. Separately, the dated handoff pile was
replaced by one rolling `.handoffs/CURRENT.md` with the rule at `.claude/rules/handoffs.md`
and the check `build/check_handoff.py`.

---

## Closed 5 August 2026, evening: the foundations walkthrough and the pages

The foundations walkthrough completed. Motion was rebuilt on three research runs (archived in
`.thoughts/motion-research-2026-08-05.md`): enter and exit curves, four durations, a 450ms
ceiling, live examples in the storybook. The token names were approved. Sound was decided:
the site will use it, designed later against real screens (`sound.md` created). The two-tone
heading values were confirmed and the storybook sample corrected. The system's words were
corrected twice: radius, never corner; logo, never mark (`mark.md` renamed `logo.md`). The
storybook lost its statement headings and verbose notes at the owner's direction.

Both concept pages were brought onto the approved type scale, and
`concepts/with-without.html` was rebuilt as a story through the owner's fourteen reference
screenshots and the storyteller framework: gloomy neutrals without, the purple ramp with,
scenes instead of paragraphs, a dead button anyone understands, verdicts in the headings,
explanatory icons leading, and the approved finale in a pop-up on the one real button. Two
new rules came out of it: explanatory icons lead, and brand color never marks a negative.
The record is `docs/decisions.md`, 5 August.

---

## Closed 6 August 2026, the borrowed logomarks

The owner supplied nineteen reference marks in a `huru-logomarks/` folder and asked to see
each one set against the logotype. Built as `concepts/logo-proposals.html`: attribution text
stripped, every mark cropped to its own ink and recolored to purple-600, the four raster ones
masked rather than redrawn. That page and its three successors were later deleted, superseded
by `concepts/logo-all.html`, which shows every mark at the corrected position.

**Closed, and it cannot be reopened from here.** Every file was a Noun Project download
carrying that licensing, so nothing borrowed from the set can ship. The owner deleted the
folder at session end; it was never in git and does not exist anywhere in the project. The
page survives only as a record of what was looked at.

The original marks drawn in response are not archived here, because that work is open. See
`PLAN.md`.

---

## Closed 8 August 2026, the reference research

Three studies, in `docs/research/`, made to answer how a five-step paid engagement should be
drawn and priced on a page. The prompts that produced them were run in the browser by the owner
and deleted afterwards.

- **`vellum.md`**, named by the owner as the target form. Read for craft and pacing: it
  demonstrates rather than describes, and its motion is a staggered reveal with roughly 150ms
  between siblings. It sells flat monthly tiers and shows no process anywhere, so it answered
  nothing about sequence.
- **`ajsmart.md`**, from the owner's 7 August notes. Read for how an expensive engagement is
  argued: proof high, price last, each price anchored against a larger stated return. Its three
  offers are parallel choices with no path between them.
- **`ladders.md`**, fifteen companies selling staged paid engagements, run because neither of
  the first two drew a ladder. This is the one that answered the question: where the ownership
  promise goes, that every paid rung must stand alone, and that the sequence is drawn twice, as
  a compact arc and then as detail.

**A method note worth keeping.** The first two prompts asked these sites for fonts, hex values,
type sizes and spacing, all of which `docs/design-rules/` already settles. Vellum sets
Instrument Serif on cream with a forest green accent, none of it usable here, so the answers
would have been read and discarded, and a borrowed value on screen is how drift starts. The
rewritten prompts said explicitly not to report them and asked how the sites argue instead.

---

## Closed 8 August 2026, the Storybook and the audits

**The design system got a build.** `@storybook/html-vite` with Vite and pnpm, modelled on
map-prototype at the owner's direction. Nine foundations stories, the four breakpoints in the
viewport toolbar, `pnpm storybook` to run it.

**The arrangement is the part worth keeping.** Storybook does not replace `storybook.html`, it
reads from it: a story holds no markup and clones its section out of that page by id. One
drawing, two views, nothing to keep in sync. That page is exempt from the 800-line limit as a
result, reasoned in `docs/design-rules/README.md`, because its embedded fonts are what let it
open offline from disk and splitting it would end that.

**One bug in that arrangement cost most of an afternoon and is worth not repeating.** The page
fills its tables by id and assumes every section is present. A story shows one, so the first id
belonging to another section threw and took the rest of the script with it. The colors drew
because they run first; the spacing table, the type ladder and the motion demo's click listener
all sat after the throw. The symptom was correct headings above empty boxes rather than an
error, which is why it survived three attempts to fix it by reasoning instead of by measuring.

**Both audits ran.** `/cto` found that the reference did not fit yet, since the audit scripts
read rendered code and there was none. `/optimize-design-docs` found two real faults: `layout.md`
described a button rejected three times, and `motion.md` named an easing token that existed
nowhere in the code.

**Also closed:** `css/tokens.css` created and `build.md` written to own it, atomic design
reversed to three levels, the eyebrow ban recorded as a rule after surviving eight rebuilds in a
handoff, and `feedback-20260807.md` deleted with its notes absorbed into `PLAN.md`.

---

## Closed 8 August 2026, the design system research

**Four studies, in `docs/research/`**, on IBM Carbon, Atlassian and Coinbase, plus one on motion,
breakpoints, composition and writing across all three. Run in the browser by the owner. Polaris
was dropped. `findings.md` is the synthesis and `proposal.md` the component list it produced.

They exist because a first set of components was built and deleted the same day, at the owner's
direction: built without research and named from nothing. "Controls" and "Composed" were
invented categories that appear in no published system.

**What the research settled, and it changed the build:**

- **No card.** None of the three publishes one. Carbon says so outright and ships a Tile
  instead, calling tiles foundational and cards complex. Atlassian has no Card component at all.
  Coinbase has eleven and no generic one.
- **Atlassian's own rebuild is the warning.** Theirs *"was trying to do too much"*, so they split
  it into purpose-built components and removed the customization. The button went from seven
  variants to three on that evidence.
- **The rules were already right more often than not.** hurulab's motion system matches
  Atlassian's independently, and sentence case, verb-led calls to action, one primary per view,
  never color alone and parent-owns-the-gap were all already written here.

**A method note, the second one.** These prompts also had to be told not to report colors,
typefaces and spacing, for the same reason as the first round. What they were asked for instead
was structure, naming, states and stated rules, and that is what made them usable.

---

## Closed 8 August 2026, the button, the first component built

Built with the three variants the research settled: `primary`, `border` and `ghost`. The
message component's warning tokens were added to the code the same day. Moved here from the
component table in `PLAN.md` on 17 August 2026; the table keeps only each component's current
state.

---

## Closed 12 August 2026, the first proposal pair

The two pages built 8 August, `concepts/proposal-a-the-ladder.html` (a scroll-snap ladder,
one beat per screen height) and `concepts/proposal-b-the-fork.html` (three sections, each
with a toggle that swaps its scene), the last survivors of roughly eight same-day rebuilds.
The owner's verdict on the pair was "still not good enough". On 12 August they were
superseded as work items by the journey redesign in `PLAN.md`, driven by the 10 August CEO
meeting record and the vellum onboarding reference. The files stay in `concepts/` untouched:
they are the only surviving versions, and the copy baseline the 12 August consistency audit
ran against.

---

## Closed 12 August 2026, the steps the plan was still carrying

Moved out of `PLAN.md` on 12 August, in the line-by-line audit that also fixed a component
count and put this file back into date order. All of it was struck through in the plan and
already described above; the plan was repeating what this file owns.

- **The reference research and the grill**, the first two steps of the proposal pages. The
  research is above, 8 August. The grill ran after it and changed both pages; what it settled
  is not history, so it stays in `PLAN.md` as the rules the pages follow.
- **Both audits**, `/cto` and `/optimize-design-docs`, 8 August. Above.
- **The Storybook and `css/tokens.css`**, 8 August. Above.
- **The first component set, built and deleted the same day**, 8 August. Above.

**One correction made in the same audit.** `docs/research/proposal.md` said "Seven components"
above a list of eight, and `PLAN.md` had copied the seven forward. The list is eight: button,
icon button, link, text input, checkbox, message, tag, tile. Five groups, and the two patterns
are counted separately. Corrected in both files. `CLAUDE.md` had also copied the seven forward
and was missed; found and corrected 17 August 2026.

---

## Closed 12 August 2026, the journey redesign and its two failed builds

The work that produced `proposal-c-the-money.html` and `proposal-d-the-moment.html` in their
12 August form. Both were superseded by the 13 August rebuild, below, and moved here on
13 August because a plan holds current and future work only.

**The model was vellum's onboarding flow**, recorded in `docs/research/vellum-journey.md`,
read directly and then re-observed live through the browser extension. The sixteen reference
screenshots it was drawn from were deleted on 12 August once the work was built and are
recoverable from git. The pages were drawn entirely in hurulab's own system: the reference
supplied the form, never a value.

**The first full-treatment build scored 2 out of 10, owner verdict, 12 August.** What failed:
centered slideware screens, floating white rectangles for the fork, a path screen that was only
text, and sentences running too long. The redesign directive was real composition inside the
system: left-aligned editorial layouts, the three S0 gates drawn on the vetting screen, the
artifacts and the fork doors as system tiles with the dark tile carrying the lead, the ladder
drawn as a designed object with the paid step highlighted, and every sentence cut shorter.
Target 6 or better. Delivered the same session, with two corrections applied on sight (no line
break inside a sentence, every heading two-tone) and a session-end sweep that snapped the dark
tile to the system's own base black.

**That redesign scored 4 out of 10 for page c and 5 for page d, owner verdict, 13 August.**
Which is what sent both pages into the rebuild below.

**Page d's moat check and cost reveal, added 12 August, did not survive the rebuild.** Four
screens from a brief the owner supplied: the reader was asked what a competitor could not copy,
the answer was echoed back and carried to a closing summary, then the honest cost of building
it themselves, then two paths as ranges. The rulings that came out of it are kept in
`docs/decisions.md` because they are about how hurulab treats a reader, not about that screen:
no answer may read as a rejection, no score is shown, the risk screen uses warning tokens
rather than error ones, never a single figure where a range is honest, and the close hands the
reader a summary carrying their own answer. The brief's own pricing was refused, because it
traces to a strategy document `CLAUDE.md` excludes from evidence.

**The story spine was the Pixar seven-step**, reader as hero, hurulab as guide, with the
reversal at "Sometimes the answer is do not build it. We say so, and the fee stands." That beat
survives on page c. **The copy passed the slop check at 43 out of 50.**

**A rule that came out of it and is still in force**, recorded in `docs/decisions.md`: keyboard
focus stays on the visible screen. Both pages had kept every hidden screen's buttons reachable
by tab, so half of all tab presses landed on controls the reader could not see, and a screen
reader read all ten screens as one page.

---

## Closed 13 August 2026, the rebuild of both journey pages

Driven by the owner's 4-out-of-10 and 5-out-of-10 scores and their four named failures: the
argument is thin, the story does not build, it looks flat, and the design does not follow
`docs/design-rules/`.

**Four design failures were measured against the rules, not judged by eye.**

- **Statement type ran at roughly half the legal size, at weight 500.** The pages topped out at
  3.2rem where `type.md` sets h2 at 42.3px on a phone rising to 74.3px, and every heading role
  in the system is weight 700. `language.md`'s first word is "big" and its test is whether the
  section reads from across the room. Corrected: h2 and h3 tokens at 700, 43px to 71px.
- **There was no bento anywhere.** Three equal tiles, two equal doors, four equal picks: the
  card grid `layout.md` names as the failure mode, whose own test is whether the section could
  have been generated by mapping over an array. Corrected: unequal spans, a lead tile taking
  two rows, and the three fills alternating.
- **Tiles carried a 0.75rem radius**, a value the scale does not contain. Corrected to the tile
  and card radii.
- **The argument was assertion.** Corrected by drawing the mechanism: on page d the provenance
  chain, the gate between a projection and a fact, and the router ladder; on page c the three
  gates and the five-step path as one designed object.

**Page d was rebuilt on `docs/gtos.md`**, the CEO's addition to discovery, on the three-fears
spine the owner chose. Twelve screens. Its standing as evidence is `docs/evidence.md` part 7.

**Page c kept its money spine** and took the same design corrections. Ten screens.

**Both were verified rather than asserted**: every rendered font size lands on a legal step of
the scale at five breakpoints, and both pages hold every screen without scrolling at ten
viewports from the 360 floor to 1920. One dead color token was found in the audit and removed.

**A process failure worth keeping.** The agent offered the owner a choice of type scale, and
was told the rules are not a choice: *"follow docs/design-rules ALWAYS."* A rule file is the
answer, not an option to put to the owner.

---

## Closed 13 August 2026, the reply-length hook

`CLAUDE.md`'s "answer at the length of the question" rule was broken repeatedly, including in
the same session it was sharpened, and the owner said so directly. The rule was given a hard
limit of four sentences and a named failure mode: work finishes and the reply becomes a report
of the work, every line true and the whole thing unread.

Because a written rule had already failed, it was also given a check that does not depend on
the agent remembering it. `build/check_reply_length.py` runs on a Stop hook, counts the prose
sentences in the reply, and hands the number back when it runs long. Lists, code blocks and
inline code are not prose and are not counted. It was tested against the session's own
16-sentence reply, which it caught.

---

## Closed 13 August 2026, the process and pricing pages

Owner instruction, 13 August 2026, recorded in `docs/decisions.md`: the scoring loop and the
CEO demo were removed from the plan, closing this section. Page d was never scored, pages e
and f were never scored, and page c last stood at 4 to 5. The five contradictions between
`docs/funnel-pricing.md` and `docs/evidence.md` part 6 stand unresolved, neither document is
corrected, and the two-sources footnotes remain on the pages as built. The four pages stay in
`concepts/`: `proposal-c-the-money.html`, `proposal-d-the-moment.html`, `proposal-e.html` and
`proposal-f.html`, alongside the retired a and b pair.

**The scoring history.** The 12 August versions of c and d scored 4 and 5 out of 10, with four
failures named: thin argument, a story that does not build, flatness, and drift from
`docs/design-rules/`. Both were rebuilt on 13 August. Page c then scored 1 to 3 (an
accessibility failure and a capped text width, both found on both pages and fixed on both the
same day), was rescored 4 to 5 (boring and generic, nothing like vellum.ai), was recomposed in
the vellum manner within the design rules, scored 3 to 4, and received a punch list the same
day. Page d kept the older gray-and-black statement style and was awaiting its first score of
the day when the loop was removed.

**What the pages argue, as built.** Page c is the money, twelve screens, no figure anywhere on
it per the 13 August no-price ruling; the path asserts steps 1 to 3 and presents the rest as
the client's decisions, and it carries the cost-reveal calculator. Page d is the moment,
fourteen screens on the three fears, built on `docs/gtos.md`, with the moat check after the
fear echo. Page e is the single landing page built from the storyteller run seeded by "You are
about to spend serious money on technology you cannot judge"; its narrative record is
`.thoughts/proposal-e-story.md`. Page f is the logo-as-hero with eight value phrases cycling,
a deliberate exploration against the ambient-motion ban on the owner's instruction.

**The rules the research settled**, kept because future page work returns to them. Proof sits
high and price sits last. The ownership promise sits on the first paid step, inside its
deliverable list. Every paid rung says it stands alone; the free calls carry no walk-away
line. Motion is a staggered reveal honouring reduced motion. The discovery fee reads as buying
an answer, not a deposit. Never instalments disguised as a ladder, a flat table as the only
view, or the walk-away permission in fine print. The 5 to 15% discovery fee cannot go on a
client page: every company in `docs/research/ladders.md` that published well showed a real
number or floor, never a percentage. Everything made in paid discovery goes to the client,
confirmed by the owner, though the free demo's artefact never leaves and hurulab's methods
stay hurulab's. The three buying options come after the walk-away, on the fork screen. The
click-through form walks one beat per screen, so the old twice-drawn ladder rule for scrolling
pages is recorded rather than deleted: if the work returns to a single scrolling page, that is
the rule it returns to. The internal sales lines ("B is priced to make A look good", "scope
down, never price down") show their effect and are never quoted.

**The two lines still binding elsewhere:** the ban on invented pricing is `copy.md` section 4,
and the per-page rulings (no price on c, the path stopping at step 3, footnote form, the
never-scrolls form, the one still beat, the AI casing exception) are dated in
`docs/decisions.md`.

---

## Closed 13 August 2026, the owner's todo list

Adopted into the plan and run to completion the same day, in one session. The two open
verdicts it produced (the website rework and the logomark choice) and the two open owner
decisions (the evidence.md exemption and the single-idea question) stay in `PLAN.md`; this is
the record of what closed.

- **Headline 1 was struck** by the owner before any work used it. The site carries no set
  headline; the record is in `docs/decisions.md`.
- **The website was built** at `site/index.html`, grown out of proposal-f by owner ruling:
  the rolodex logo hero (with the corrected gamble line), a process section of three numbered
  steps with the ownership chips and the walk-away line, and a deep purple CTA band. All
  three parts passed the measured layout check at 375, 768 and 1440 with no overflow, no
  overlap and no tap target under 44px. The owner parked the process section ("not good") and
  the CTA (2 out of 10) for rework without naming failures; the hero stands.
- **The logomark meaning work ran**: five proposals drawn in `concepts/logo-meaning.html`,
  each an identity from the brand foundation made visual, each citing its interview source:
  three lines one point, the footnote, use it first, the handover, and the business at the
  center. No ruling yet; the asterisk stands.
- **The gamble line was corrected** from "technology" to "solutions" in proposal-f; the site
  page was written with the corrected line. The owner's own `todo.md` was left untouched.
- **The document sweep ran** across the two 12 August meeting notes, the positioning
  recommendations, `docs/funnel-pricing.md` and `docs/gtos.md`. Findings in
  `docs/research/document-sweep.md`: seven agreements, six inconsistencies, and the
  converged positioning ("no business should have to take a technical decision on trust
  alone", discovery as the product, evidence over trust).
- **The absorption followed, owner instruction:** `docs/evidence.md` became the one central
  source of truth, gaining parts 8 to 11 (the funnel document condensed, the 12 August
  meeting in both records, the positioning document, and the inconsistencies as their own
  part). The owner then chose to delete the three originals from the project root. **They
  were untracked, so they are not in git: evidence.md parts 8 to 10 are the only copy.**
  `docs/funnel-pricing.md` and `docs/gtos.md` remain their own files of record.

---

## Closed 4 September 2026, the four root files and the CEO's concepts

The four untracked files at the project root, carried over from the previous session as "go
through them, then create tickets", were gone through. They turned out to be four concepts from
the CEO, and the owner ruled that they are the source material for four pages to be rebuilt in
hurulab's own brand system.

**What they were.** Three claude.ai artifacts and one PDF deck:

- **Hurulab Espresso Bar**, a one-day AI co-building session for Taiwan enterprises with two
  weeks of preparation behind it. Unique content, no overlap with the others.
- **AI × Software × Network**, the flywheel argument in five sections. **One document in two
  palettes:** proposal A "Purple Light" and proposal B "Harmattan" are word-for-word identical
  and differ only in color.
- **The presentation deck**, 8 slides, stating a positioning `brand.md` does not carry:
  "verified capability, rented out as an asset", the GT-OS two-layer architecture, and a
  seven-step engagement. Unruled.

**What was lost, and the lesson.** Espresso Bar and Purple Light were saved with the browser's
save-page command, which produced ~290KB files that looked complete and opened blank: an artifact
renders in a sandboxed iframe, and the save captured the claude.ai page around it rather than the
page itself. Their layout, animation and interaction are gone. Harmattan survived as a real HTML
file, 1,985 lines. **To save an artifact in future, ask the assistant that made it to write the
file to disk or print its full source; never use the browser's save command.**

**What was kept.** `knowledge/ceo-concepts/`, markdown only, owner instruction: no PDF, no HTML,
no README. Four files, one per idea the CEO gave: `espresso-bar.md`, `flywheel-purple-light.md`,
`flywheel-harmattan.md` and `presentation-deck.md`. The two flywheel files hold word-for-word
identical content because that is the point of them: one argument, two design systems, so only
the design is being judged. `flywheel-harmattan.md` carries a record of how the Harmattan build
behaved, read out of the HTML before it was deleted, because the animation is the argument on
that page.

**One finding worth carrying forward.** Harmattan was already built on hurulab's system: the
hue-318 purple ramp of `color.md` in oklch, Cascadia Mono and Fustat per `type.md`. What made it
"Harmattan" was two additions, a warm ochre second accent and warm-tinted neutrals. Its motion was
one easing curve, `cubic-bezier(.22,1,.36,1)`, durations under 250ms, and exactly one interaction
per board.

`visifydesignsystemspec.md` at the project root was not one of the four. It is a
reverse-engineered specification of visify.au and it stays open as its own work item in
`PLAN.md`.


---

## Closed 4 September 2026, the CEO's four concepts built and audited

Item 0 of `PLAN.md` delivered in full. Four pages in `concepts/ceo/`, content from
`knowledge/ceo-concepts/`, design from the two color proposals, two pages in each system.

| Page | System |
|---|---|
| `concepts/ceo/espresso-bar-harmattan.html` | Harmattan |
| `concepts/ceo/flywheel-harmattan.html` | Harmattan |
| `concepts/ceo/flywheel-purple-light.html` | Purple Light |
| `concepts/ceo/presentation-deck-purple-light.html` | Purple Light |

**The two flywheels are the comparison.** Identical content, identical structure, identical
interactions: only the token block and the type stacks differ. That is the like-for-like test the
color question has been waiting for since 3 September.

**Every page takes its whole design from its proposal file.** The `:root` and dark-mode token
blocks are lifted verbatim, so no page defines a color of its own, and the type comes from each
system's own stacks: Cascadia Mono with Fustat for Harmattan, Geist with IBM Plex Sans and DM Mono
for Purple Light. Motion follows the Harmattan build's own rules throughout: one easing curve,
`cubic-bezier(.22,1,.36,1)`, durations at or under 250ms, and exactly one interaction per board.

**The audit that followed, and what it caught.** Three classes of defect, all fixed:

- **Paraphrase.** The build had reworded the CEO where he was specific. Restored verbatim: RBAC,
  RFQ, ROI, NDA, SOW, MVP, QBR, SAP, MES, Excel, "multi-million-NTD"; the deck's "GTL FROZEN ·
  GRADED EX-POST", LLMs and RAG as named, "semis", and the 23.5% / 85.1% SME figures; the
  flywheel's "blast everything at the flagship" / "cache first, then route", "SaaS", "vice versa",
  and 95% of tier-1 support. **This is `copy.md`'s rule doing its job:** when a source document
  exists, quote it rather than compressing it.
- **A design deviation.** Label tracking was built at 0.14em against the proposals' own 0.12em.
  Corrected on all four.
- **Three contrast failures.** The deck's hub cells were translucent over a dark ground, its gap
  panel and privacy deal forced near-black ink onto a dark-mode wash, and Espresso Bar's loyalty
  stamps and the flywheel's disabled stepper fell under the floor. All fixed.

**Verified rather than asserted.** Every token value matches its system exactly, no page invents a
token, no raw color appears outside the token block, no font outside the system's stacks. All
four pages meet the 4.5:1 and 3:1 contrast floors in both light and dark mode, run with no
JavaScript errors, and overflow at none of 360, 768, 1440 or 1560.

**A limit of the copy check, recorded so it is not mistaken for a clean bill.** The audit compares
word lists, so it catches a missing term but not a sentence reworded using the same words. The
owner's reading is the check for that.


---

## The brand identity, locked 7 September 2026

`concepts/hurulab-identity.html`. It closed the item the meeting that morning had made the
blocker: "identity must be locked before design work continues".

**What it settles.** Henry's vibrant direction from `proposal-1-purple-light.html`, reduced.
Purple in three states, Nightfall as the default with Jacaranda for hover and Last violet for
pressed. Marigold in three, with Low sun and Ember. Eleven neutrals named neutral-50 to
neutral-950, pulled bluer than proposal 1 and lightened so the top step is the page itself.
Typography from `proposal-2-harmattan.html`, Cascadia Mono and Fustat, with DM Mono for numbers
taken from proposal 1. The logo is single-color, mark and type together.

**Body is 16px on mobile and that is the floor**, owner instruction. It scales up to 20px
through the breakpoints and never below 16. Every other size steps from it by 1.125.

**Caution was dropped.** Three attempts were rejected in turn, and the research found only two
families clear of marigold, laterite, sapling and the brand purple: green-yellow, rejected as
olive, and blue, which reads as information rather than warning. The owner dropped the role.
Success and danger remain.

**All fifteen contrast checks pass**, computed rather than eyeballed. Four failed on the first
run and were fixed by moving values, not by lowering a floor.

**What was removed on the owner's instruction**: a components section, a hero section, the
favicon size row and the logo motion trigger, none of which had been asked for, and every note
the owner judged to be filler.


---

## The landing page hero, built 7 September 2026

`concepts/landing-page-hero.html`, renamed from `proposal-f.html`.

**The copy is `20260907/landing-page.md`'s**, unchanged: the rotating "Your ___, handled." over
the sixteen phrases in that file's order, and the subtitle verbatim. hurulab is lowercase and
set in the brand color.

**It carries the locked identity**, the neutrals and the purple in three states, Cascadia Mono
headings, Fustat body, DM Mono declared for numbers, on the 16px mobile base.

**The rolodex flip was dropped, and this is the one thing worth knowing.** Cascadia Mono is
monospaced, so at the h1 clamp the longest phrase, "product translations,", needs more width
than the column has at every size from 360 to 1560. That was measured across the range rather
than estimated. The cards therefore stay in flow at every width and the phrases swap. Setting
the hero in Fustat would have kept the flip above 1024px and was rejected: mono is for numbers,
Cascadia Mono is the heading face, and the identity file settles it.

**A spacing fault was recorded against it on 7 September and dropped on 10 September**, because the owner's words were never written down and they did not recognize the item.

---

## The discovery concept, dropped 10 September 2026

Eight versions were built and every one was rejected. The last two, a 3D coverflow and a
pinned scroll stack, were judged on 8 September as on the right track with four named faults,
and deleted on 10 September on the owner's ruling. Recoverable from git at `7178e78`. The
card copy, `20260907/discovery-steps-shorter.md`, and the seven approved words, Call, Pack,
Session, Quote, Scope, Sprint, Closing, still stand. Everything learned on the way is in the
conditions under the landing page item in `PLAN.md`.

---

## The two color proposals, archived 10 September 2026

`concepts/proposal-1-purple-light.html` and `concepts/proposal-2-harmattan.html`, deleted on
the owner's instruction and recoverable from git at `7178e78`. They were the two candidates
the identity was chosen from on 7 September, and `concepts/hurulab-identity.html` now carries
everything that was taken from them.

**What each settled.** Purple light, Henry's vibrant direction: hue 318 at full chroma, the
sunset neutrals, marigold as the accent, the ramp names (Nightfall, Jacaranda, Last violet,
Marigold, Low sun, Ember) and DM Mono for numbers. Harmattan, the dust-drained version of the
same sky: the typefaces Cascadia Mono and Fustat, which the identity took, and a warm neutral
ramp, which it did not. Both pages computed their own contrast checks rather than typing
them, and that method carried into the identity page.

**They were also the design source for the CEO's four concept pages**, built 4 September and
deleted 7 September, so nothing depends on them now.

---

## The owner's list of 10 September 2026, done the same day

Five issues from the owner's `todo.md`, plus the archiving above, run in one session and
waiting on the owner's review.

- **The dual-tone heading rule** is `type.md` section 9: headings are dual-tone at every
  level, and the old one-per-viewport limit went with it.
- **The logo** is the owner's asset in `logo/`, three Illustrator exports. `logo.md` was
  rewritten around them, `favicon.svg` carries the new mark, and the identity, hero and
  coming-soon pages carry the lockup as two paths sized by height. The wordmark is drawn, not
  typed, which ends the rule that the logotype was set in Cascadia Mono.
- **"Book a Call" became "Contact Us"** on the hero and the coming-soon page, and in
  `copy.md`'s examples. The label the owner meant was identified from the image they supplied,
  which showed the button.
- **Brand-secondary** is Low sun, `oklch(0.858 0.140 66)`, the value the owner sampled and
  supplied as `secondary-base.jpg`. It is a token, a chip, a semantic row and a contrast check
  on the identity page, and it passes.
- **Numbers are Cascadia Mono.** DM Mono was removed from the identity, hero and coming-soon
  pages and the rule is in `type.md` section 2. The coming-soon page keeps Geist and IBM Plex
  Sans for titles and body, the owner's 4 September request, and only its numbers changed.
