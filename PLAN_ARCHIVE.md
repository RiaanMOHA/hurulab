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
