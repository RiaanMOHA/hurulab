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
| The mark: `*hurulab`, owned by `docs/design-rules/mark.md`. The drawn-asterisk idea was dropped 4 August; its motion is the open piece | 31 July 2026 |
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
- One remainder stays live in `PLAN.md`: the Book a Call button needs its destination.

**Addendum, 5 August 2026: the short variant.** `concepts/hurulab-coming-soon-short.html`,
built in one session of owner line-editing: headline sentences only from the team's copy
documents, one dark emphasis per screen, one sentence per line, hard scroll stops with a
240ms snap between screens, a brand-fill Book a Call on the continuous corner curve, and a
closing question in place of "Coming soon". The session's rulings ("useless" retired, the
live-demo step disputed) are in `docs/decisions.md`, 5 August. Thursday's team session
reviews it; Cal owns the final wording.

---

## Saved into history, 4 August 2026

The 30 and 31 July work sat uncommitted for four days, flagged in the 31 July handoff as the
single biggest risk in the project. Committed in five grouped save points on 4 August 2026 on
the `design/plan-restructure` branch.

---

## Closed 5 August 2026, the corner scale

The radius contract set 4 August was delivered: three candidate ladders from the archived
Apple research built as a comparison page, the owner picked the strictly Apple ladder by eye,
`layout.md` section 3 was rewritten as the corner scale, the storybook corner section was
rebuilt on the new tokens, and the word pill was purged from the live rules. The record is
`docs/decisions.md`, 5 August.
