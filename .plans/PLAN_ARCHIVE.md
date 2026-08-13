# hurulab plan archive

Finished and historical work, moved out of `PLAN.md` on 4 August 2026 so the plan holds only
current and future work. This file is history, not truth: where it disagrees with
`docs/design-rules/brand.md`, brand.md wins.

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
is section 15 of `docs/design-rules/brand.md`.

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
  never colour alone and parent-owns-the-gap were all already written here.

**A method note, the second one.** These prompts also had to be told not to report colors,
typefaces and spacing, for the same reason as the first round. What they were asked for instead
was structure, naming, states and stated rules, and that is what made them usable.

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
are counted separately. Corrected in both files.

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
day. Page d kept the older grey-and-black statement style and was awaiting its first score of
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
