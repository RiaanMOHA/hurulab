# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Rewritten 7 September 2026, when the positioning was settled and most of what this file
had been carrying was either answered or dropped. The design system and the tests were removed
as not important, owner instruction 7 September.

---

## What is blocking what

**Nothing is blocking design work.** The brand identity was locked on 7 September 2026,
`concepts/hurulab-identity.html`, which was what the meeting said had to come first. The
landing page hero was built the same day, `concepts/landing-page-hero.html`; its subtitle was
set to one tone on 8 September and only its spacing is outstanding, which is item 3.

**How discovery is priced is unanswered.** No supplied file names a rate or a model.
`docs/pricing.md` carries the placeholder and no page states it.

---

## Item 1. The visual discovery concept, two on the right track

**The owner's action item from the meeting:** "build visual steps for the discovery process".
An HTML concept in `concepts/`, showing the process step by step, visually.

**Both are on the right track, 8 September 2026, and neither is finished.** The owner's words:
A "is getting better" and "getting somewhere"; B is "also much better, but it's not really
working well". Six versions came before these two and every one was rejected. Do not restart:
these two are the line of work, and they get fixed rather than replaced.

### A, `concepts/discovery-espresso-a-counter.html`

A 3D coverflow. Drag, throw or arrow-key through seven cards; each card's rotation, scale and
opacity is a function of its pixel distance from the centre. Geometry and the "gentle" spring
are `~/Desktop/new-motions/coverflowmotion.md` section 3, integrated per frame so an
interrupted drag carries its velocity.

**What the owner said is wrong with it:**

1. **It is jarring.** The transition between steps is too abrupt.
2. **It should be a scroll animation**, not drag and arrows. The motion is right; the input is
   wrong. Scroll is what the owner expects to drive it.
3. **Too much space between the number and the word.** The card's internal spacing is wrong:
   `.num` and `.word` are pushed apart by `margin-top:auto` on the word.

### B, `concepts/discovery-espresso-b-cup.html`

The section pins to the viewport for seven screen-heights and the steps advance as the page
scrolls, each rising into place as the last leaves upward. A border beam traces the live step,
rebuilt in CSS from `~/Desktop/new-motions/borderbeam.md` section 3. A number rail tracks
position.

**What the owner said is wrong with it:**

1. **Content is being cropped.** "A lot of stuff is cropped, I can't see all the words." This
   is a bug, not a taste problem, and it is the first thing to fix.
2. **Probable cause, to be checked by rendering rather than guessed at.** `.stack` is a fixed
   `20rem` while `.step` is `position:absolute;inset:0`, so any step whose number, word and
   detail exceed 20rem is clipped with no scroll and no overflow. Step 07 is the longest and
   the paid step sets `font-size:1.5rem`. The `.pin` is `height:100vh` with
   `overflow:hidden`, which clips again on a short window. **Measure before changing anything**,
   per the "measure, never eyeball" rule in `CLAUDE.md`.

### What holds for both

**Only words from `20260907/discovery-steps.md` may appear**, owner instruction stated three
times and verified by audit each time. Anything perceivable counts, including the title tag,
screen-reader text and strings written by JavaScript.

**The copy was cut twice.** `20260907/discovery-steps-shorter.md` is the card copy: one word
and one short sentence per step, 60 words across all seven against the original's 262. Removal
only, verified line by line. Cut once to 111 words and cut again when the owner said it was
still too much. **The source file stays the source**, and its deliberate errors live there.

**The seven card words are approved**: Call, Pack, Session, Quote, Scope, Sprint, Closing. Each
is lifted from its own step. Owner approval, 8 September 2026.

**The paid break is a card in both.** "If the above is accepted, we move straight in to the
paid discovery" is not a step and has no number, so it sits between 04 and 05 as the accent
card. Owner instruction was to go wild with it.

**A page that needs to tell the reader how to use it has already failed.** Owner ruling,
8 September 2026, when both concepts carried a line explaining how to read them. Both lines
were removed.

**No small label above a heading**, confirmed 8 September against a reference that used one.

**The headings are not from the source and are unruled**: "Seven steps. The first four cost
you nothing." on A, "Seven steps. Four are free." on B. The owner has not judged either.

**The reference the owner supplied**, 8 September: seven numbered cards in one row, one bold
word each, two lines of detail, one card in the accent, a dotted return path underneath. It
was given as structure to work from, not to copy.

**Too much motion at once reads as noise.** Eight patterns together scored 1 out of 10. Near
zero motion scored no better: the owner's verdict on the versions before these two was "near
zero motion, zero interaction, zero transition, nothing fun".

**Test section by section**, the owner's stated preference over building a full site.


---

## Item 2. The landing page

**The positioning was settled on 7 September 2026 and the subtitle was replaced on
8 September.** The copy is `docs/landing-page.md` section 3; the positioning behind it is
`docs/brand.md` section 7, which has not been updated to the newer subtitle.

**What that settles, and what any page has to honour:**

- **The content is `docs/landing-page.md`**, written 8 September 2026 as the single source of
  truth: the four-section structure plus the full English copy. The CEO's newest document and
  the two before it were folded into it and then deleted, so **there is no second copy to
  check against**. All five contradictions were settled in the writing of it; what is still
  open is listed in its own section 8.
- **The subtitle now opens "At hurulab, we know software"**, not "we know AI". The newest
  document changed it and the owner accepted the newest document, 8 September. `docs/brand.md`
  section 7 still carries the older wording and disagrees with the page on that one point.
- **The first four discovery steps are unpaid**, and "nothing is given before payment" was
  withdrawn on 7 September because of it. Outreach still does not offer a free live demo, and
  the site is not a demo of itself.
- **The copy in that file is never changed.** Owner ruling 7 September, stated twice, and it
  now attaches to `docs/landing-page.md`. A newer document from the CEO is edited into that
  file rather than kept beside it.
- **The honest stop is part of the offer**, said out loud on the page: if they do not need AI,
  they are told so.
- **The client keeps everything from day one**, whether or not they continue.
- **"We know AI" may open a page**, and AI still does not lead as the promise. `brand.md`
  section 6. Decision #3 was not reversed on 7 September, and the supplied copy stands
  regardless: the copy wins, the rule is not restated on the page.
- **Any company with a real goal, Taiwan first.** No size or industry filter.
- **Never state a headcount.** "A small team", nothing more precise.

**The conditions on any page built here**, learned from the pages that were scored and dropped:

- Too much copy is the most repeated fault. Three arguments repeated beat twenty-two made once.
- Too much motion at once reads as noise. Eight patterns together scored 1 out of 10.
- Two tones, `--neutral-950` and `--neutral-600`, and the brand color on one word only.
- Sentence case everywhere, Title Case on buttons, and **never a small label above a heading**.
- Text always runs to the full margins. `type.md` section 10, and this rule has been broken by
  agents repeatedly.

**`docs/visify.md` is standing guidance**, read before drawing a page, for structure and never
for a value. Its own section shape opens with a banned label, struck out in that file.

---

## Item 3. The hero spacing

**`concepts/landing-page-hero.html` is built and its spacing is wrong.** Owner, 7 September
2026, on first look. Not yet diagnosed and not yet specified. `docs/design-rules/spacing.md`
owns the scale, and its table was recomputed against the 16px base the same day.

---

## Dropped, and not to be reopened

**The logo.** Settled 7 September: the six-arm mark already drawn in `concepts/`, corrected in
`favicon.svg`, carrying no motion. Three rounds and 71 marks came before it; none is revisited.

**The CEO pages, the cost concept and the box page.** All deleted. Their text is in
`docs/ceo-concepts.md` and their copy in `docs/copy-archive.md`.

**The website that existed.** Deleted 4 September. When one is built again it starts from an
approved concept.

**"Use it before you pay for it", the free live demo, the site-as-demo, and "we make ourselves
useless".** All withdrawn, all recorded in `docs/decisions.md`.

---

## Where this order came from

Set by the owner 4 August 2026 and revised repeatedly since. Rewritten 7 September 2026 after a
full read of `docs/`, when eighteen decisions were taken in one session: the single idea
replaced, all five discovery contradictions settled after waiting on the CEO since 12 August,
and the six positioning questions closed. The record is `docs/decisions.md` under that date.

---

## Known limits, to be respected rather than solved

The owner's own words, from the Miro board, in `docs/evidence.md` part 2. Not tasks. Things that
cannot be claimed yet.

- **No cold win.** All four clients came through existing relationships.
- **Build-depth proof is thin.** Complex-system work has been internal only, with no outcomes.
- **No outcome has been measured.** No analytics on any client site.
- **No client has run alone after a handover.**

**One of these can be tested cheaply.** Put analytics on one client site and agree at the next
kickoff which two numbers get captured at launch and at 90 days. It is the only route from "no
outcome measured" to a publishable result, and it takes months, so starting early costs nothing.

**One limit was lifted on 7 September:** hurulab may present the MoreHarvest work as its own,
because it is the same people. That settles attribution only. Everything above still stands.
