# hurulab plan

Rewritten 30 July 2026.

The previous version of this file was built from the previous brand foundation, which was
built from story passages in the case studies. Both have been rewritten from the interviews.
Sections A, B and C of the old plan are deleted, not parked. What they asked for did not
exist.

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

## Now: the visual identity, from scratch

Owner decision, 30 July. Palette, typefaces, spacing and mark were all reopened, and nothing was
inherited. Released: three palettes, three locked typefaces, the serif ban, the 24px spacing
rule, and the paperclip mark. The full named list of what was released, and what still
stands, is section 15 of `docs/design-rules/brand.md`.

Most of that was closed on 30 and 31 July. Settled: the design language and its three
references, the scale, the layout, the motion, the copy rules, the accent color as a ten-step
purple ramp, graphite neutrals, the semantic token names, the two-face rule, and the mark.

**The design system is being finished first. The site is built after it, not alongside it.**

| # | Step | Status |
|---|---|---|
| 1 | Color: ramps, semantic tokens, every component state, contrast, color blindness | **done, 31 July** |
| 2 | The mark: `*hurulab`, owned by `docs/design-rules/mark.md` | **done, except the drawn asterisk** |
| 3 | Typefaces: Geist for headings, IBM Plex Sans for body | **done, 31 July** |
| 4 | Type: sizes, weights, tracking, leading, semantic role tokens, in the storybook | **done, 31 July** |
| 5 | Icons: one set, at the rem sizes in `breakpoints.md` section 5 | open |
| 6 | Imagery: no file owns it, and no rule says what a photograph on this site may be | open |
| 7 | The drawn asterisk, per `mark.md` section 4 | open |
| 8 | Only then, build the site through `/rb-design start`, one session at a time | blocked |

**Built:** `docs/design-rules/storybook.html`. Color and type are complete: ramps, tokens, every
component state, the contrast matrix, the type ladder, weights and the two-tone heading.

**One open decision, in `docs/design-rules/type.md` section 10.** Full-bleed body prose runs about
150 characters per line at 1560, against a readable range of 45 to 75. Either body caps near
75ch while headings stay full bleed, or the rule stands. It stands until decided.

**A separate question, not part of the design system.** The site is itself the first demo, an
owner decision on 30 July, so at some point what the visitor actually uses on the page has to be
decided. Section 7 of `docs/design-rules/brand.md` sets the test it has to pass. It does not
block anything above it.

---

## The one thing worth doing before the design is finished

**Call jadegia and ask why they chose the direction they chose.** Record the answer in their
words, and get written permission to publish it.

Why this and nothing else. Four of five people, asked what most needs testing before betting
everything on hurulab, said the same thing: *that clients will pay for this* (Q25). No client
has said anything on record. jadegia made a real decision at the two-directions demo on
9 June, taking the flagship branding with the luxury layout, and nobody wrote down why. That
one sentence is the only client evidence obtainable this week, and it closes a gap that sits
in every case study.

Owner: Riaan. Effort: one call and one email.

---

## Genuinely open, and only the owner or a named person can close it

Taken from section 13 of `docs/design-rules/brand.md`. Each is open because the interviews
disagree or because nobody answered.

| Question | Where it stands | Who closes it |
|---|---|---|
| When did hurulab become a company | Henry is the founder and left Q7 blank. He is the only person who can answer | Henry |
| Growth engine | Riaan, Cal and Pedro say referral. Henry says a mix of large and small clients. BY says every channel. Q28 | Henry |
| The 2.5 year platform figure | A midpoint between two numbers given in one session. Ed ran the project | Ed |
| Seven service buckets, or a shorter ladder | Both appear only in the deleted draft pages, recorded now in `docs/decisions.md`, and the two pages disagree with each other. No source settles it | Ed |

---

## The hard one, parked 30 July

**How does "use it before you buy it" avoid reading as the thing Taiwan buyers distrust?**

The market research is blunt about this and it is in `docs/evidence.md` part 4. Buyers here have
learned that "free first" means scam, 免費的最貴 is a standing warning in local buyer guides, and
direct search on 先試用再付款 surfaces only free trials and scam warnings. The research's own
instruction is that the demo must be framed as invitation-only work on the prospect's real
brand, never as a free website offer.

This is unresolved and the owner has parked it. It does not block the visual direction, but it
must be answered before any page carries the promise as a call to action.

Note what it is not. This is not a choice between "use it" and "see it". The owner settled that
on 30 July: use is the stronger promise and see is dropped. What is open is how the offer is
worded and structured so that "use" does not read as the free trial this market distrusts.

The three routes considered, kept so the thinking is not repeated:

1. **A paid day.** The buyer pays for a day of discovery and what gets built is theirs to use
   before committing to the full build. Money changes hands, so the scam signal never fires.
   Needs a price from Henry and a decision from Ed on whether the day is the front door.
2. **Invitation only.** Free, but never advertised. Costs the strongest asset its place in the
   hero.
3. **Say it openly.** Name the scam pattern in the copy and explain why this is not that.

---

## Known limits, to be respected rather than solved

These are the owner's own words, from the Miro board, in `docs/evidence.md` part 2. They are
not tasks. They are things that cannot be claimed yet.

- **No cold win.** All four clients, jadegia, Inkslap, Dada and Jiuyang, came through existing
  relationships, not through this positioning.
- **Build-depth proof is thin.** jadegia is design heavy with some custom development.
  Complex-system work has been internal only, with no outcomes.
- **No outcome has been measured.** No revenue and no audience figures. jadegia would have to
  disclose their business results and analytics.
- **No client has run alone after a handover.** So "we make ourselves useless" stays an
  intention, stated as an intention.

The first of these can be tested. Put analytics on one client site and agree at the next
kickoff which two numbers get captured at launch and at 90 days. That is the only route from
"no outcome measured" to a publishable result, and it takes months, so starting it early costs
nothing.
