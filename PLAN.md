# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Restructured 4 August 2026.

---

## Now: the 4 August action items, at the top of the plan

From the second team meeting, 4 August 2026. Notes in `todo/hurulab-meeting-2-20260804.md`.
The two coming-soon source docs (Henry's structure, the bilingual copy draft) were applied to
the page and deleted on 4 August, recoverable from git. The design system work continues
underneath these.

**The four design deliverables, in the meeting's priority order:**

| # | Deliverable | Status |
|---|---|---|
| 1 | Brand, design system and storybook | color, type and icons done; spacing next, then imagery and the drawn asterisk |
| 2 | Coming-soon message: pain points and solution in one short scroll | page built with the approved copy; send the section order to the group so Cal writes the final wording |
| 3 | Tests, three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice | open, after 2 |
| 4 | Demo website: design, messaging, and the process flow instead of fixed pricing | open, after 3 |

**Thursday's team session needs 1 and 2 as work in progress.** Both are.

The scroll order agreed in the meeting, one section per screen:

1. Pain 1: no technical partner who thinks in your shoes
2. Pain 2: AI spend goes to waste with no measurable outcome
3. How we solve it: understand the business first, then build
4. What you get: report, mockup, prototype or training; everything from discovery is yours
5. The differentiator: build it, train your people, then leave; no lock-in
6. Book a Call, free, 15 to 30 minutes, no commitment

**Constraints on this work, so nothing drifts:**

- **English only.** Reconfirmed by the owner on 4 August. The deleted bilingual draft wrote
  the name as "HuruLab 胡了"; the rule stays `hurulab`, lowercase, per
  `docs/design-rules/mark.md`.
- **The page in progress is `concepts/hurulab-coming-soon.html`.** Updated 4 August with the
  approved copy, the mark, the typefaces, the system colors and the system button. The Book a
  Call button still needs a destination. The pre-system original is recoverable from git.
- **Built from the design system.** Color, type, layout, motion and copy rules all apply. The
  storybook is the picture of what is allowed.

**What the meeting changed elsewhere in this plan.** The agreed sales process (a free 15 to 30
minute call as step zero, a live demo session with the decision maker in the room, a report
that day and a proposal the next, then a paid discovery scoped by the week, with everything
produced belonging to the client) is the first recorded structure that answers the parked
free-trial question. See "The hard one" below.

---

## Then: the design system, in order

The system is finished before the site is built. Steps 1 to 4 (color, mark, typefaces, type)
are done and recorded in `PLAN_ARCHIVE.md`.

| # | Step | Status |
|---|---|---|
| 5 | Spacing: vertical rhythm, insets, gaps, one owning file, shown in the storybook | open, next in the system |
| 7 | Imagery: no file owns it, and no rule says what a photograph on this site may be | open |
| 8 | The drawn asterisk, per `mark.md` section 4 | open |
| 9 | Only then, build the site through `/rb-design start`, one session at a time | blocked |

**Housekeeping.** The 31 July list was cleared on 4 August: the dead tokens in `layout.md`,
the stale typeface line in `brand.md`, and `with-without.html` are fixed. One item remains:

- Embed the fonts in `storybook.html` so it works offline. Until then its header says it
  needs the network.
- Swap the storybook's hand-drawn status glyphs (the check and error marks) for their
  Phosphor equivalents, per `icons.md`.

**The measure decision is closed.** Owner decision, 4 August 2026: no max-width on text, ever.
Text runs to the full margins, every role. `type.md` section 10 owns it. No open design
decisions remain.

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

## The hard one, parked 30 July, moved by the 4 August meeting

**How does "use it before you buy it" avoid reading as the thing Taiwan buyers distrust?**

The market research is blunt about this and it is in `docs/evidence.md` part 4. Buyers here have
learned that "free first" means scam, 免費的最貴 is a standing warning in local buyer guides, and
direct search on 先試用再付款 surfaces only free trials and scam warnings. The research's own
instruction is that the demo must be framed as invitation-only work on the prospect's real
brand, never as a free website offer.

**Where it stands after 4 August.** The meeting agreed a sales process that is, in substance,
route 1 of the three considered: money changes hands at the discovery stage, the free call is
step zero of a qualification process rather than a free-work offer, and the live demo happens
with the decision maker in the room. What remains open is only the wording on the page: how
the offer is written so that "use" never reads as the free trial this market distrusts. That
is settled when the coming-soon copy is settled, not before.

Note what it is not. This is not a choice between "use it" and "see it". The owner settled that
on 30 July: use is the stronger promise and see is dropped.

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
