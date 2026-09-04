# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Restructured 4 August 2026.

---

## Next, in order

The website and the open questions the 13 August todo left behind come first, the design
system second, the tests third. The logo mark stays on hold. The todo list itself ran to
completion on 13 August and its record is in `PLAN_ARCHIVE.md`, as is the closure of the
process and pricing pages the same day.

### 0. The cost concept, next session

**`concepts/proposal-g-the-cost.html` is at 2 out of 10.** Owner verdict, 3 September, with two
named failures: **the animation is too jagged** and **there is too much text**. Both are the
whole of the brief; nothing else about the page was judged. It is the interactive concept the
owner asked for after ruling "FOR SURE INTERACTIVE", so the idea stands and the execution does
not.

The sibling concept, `concepts/proposal-h-the-box.html`, has not been judged at all.

**Also open on that page, unruled:** the owner asked that hurulab always come out cheaper and
the page instead runs honest math, where 4 of 16 slider settings tell the visitor to skip
discovery. That disagreement is recorded in `docs/decisions.md`, 3 September, and is the
owner's to settle.

### 1. The website, and what the todo left open

1. **The website rework.** The site is one page at `site/index.html`, grown out of
   proposal-f by owner ruling, 13 August. The hero stands, and its phone-width overflow was
   fixed 17 August. **The process section:** the owner named the failures on 17 August
   (layout and look) and supplied the vellum screenshots at
   `/Users/riaan/Desktop/hurulab/references/` as the manner wanted; after one rejected
   staging, it now stands as one connected path on the dark ground, awaiting a verdict. The
   rulings are dated in `docs/decisions.md`. **The CTA section** is still parked at 2 out of
   10 with no failure named, so its rework starts by asking what is wrong with it. The
   research rules the proposal pages settled are kept in `PLAN_ARCHIVE.md` under the
   13 August closure and are what this rework returns to; the ban on invented pricing
   (`copy.md` section 4) binds here as everywhere. The page carries no set headline: the
   todo's headline 1 was struck by the owner on 13 August.

2. **The logomark choice.** Three proposal rounds ran on 17 August (five asterisk meanings,
   then five distinct shapes, then twelve cut to seven by critique); the rulings are dated in
   `docs/decisions.md`, and seven tested marks stand in
   `.proposal-archive/logo-meaning.html`, moved there from `concepts/`. The
   deep research on what makes a mark good is `docs/research/logomark.md`, and the meaning
   brief it feeds is `docs/research/logo-meaning.md`. Proposed next step, awaiting the
   owner's go: refine the two most distinctive survivors (the fit, the lead tile) as black
   silhouettes and present them mounted in the live site with the written case. The asterisk
   stands per `logo.md` until a mark is chosen. The mark's earlier history stays in the
   on-hold section below.

3. **A third font, for numbers. Researched 3 September, not chosen.** DM Mono recommended on
   measured metrics; the comparison page was never written to disk and needs rebuilding if the
   question is reopened. Adopting any mono breaks `type.md` section 1, "two faces, no more, no
   mono", so it needs an owner ruling and an edit to that file.

4. **Two owner decisions left open by the absorption, 13 August:**
   - Whether `docs/evidence.md`, now past the 800-line limit at 919 lines, gets a
     storybook-style exemption. It is one file by design: the evidence rule calls it "the
     primary sources, in one file", so splitting it would cost what it is for.
   - Whether the converged positioning found by the document sweep ("judge it before you
     commit", `docs/research/document-sweep.md` section 3) amends the single idea in
     `brand.md` section 7 ("use it before you pay for it"). Until ruled on, brand.md stands.

### 2. Then the design system, restructured

**Modelled on `/Users/riaan/Documents/Design Files/Code Projects/map-prototype`,** named by the
owner. The build, both audits and the tokens file are closed, and their records are in
`PLAN_ARCHIVE.md`. What that arrangement requires from here on:

- The written rules stay in `docs/design-rules/`, one file per topic, exactly as here now.
- **Storybook does not replace `storybook.html`, it reads from it.** This is map-prototype's own
  arrangement and the reason the whole thing holds: a story carries no markup, it clones its
  section out of that page by id. One drawing, two views, and nothing to keep in sync. That
  page is therefore exempt from the 800-line limit, reasoned in `docs/design-rules/README.md`.
  Every component built from here adds its story the same way.
- **`css/tokens.css` is the one tokens file.** The storybook page keeps its own copy while it
  must open offline from disk; that collapses to one copy if it is ever served instead.
- **The audit script waits for something to audit.** In map-prototype it reads the app's
  rendered classes and reports any that no rule and no story describes, and it works precisely
  because it knows nothing about what the code intends. hurulabs has no app code, so today it
  would read nothing, compare it to fourteen documents and report zero findings. It gets
  written once components exist, starting from a baseline of zero.

**Three levels, not six. Owner decision, 8 August 2026**, replacing the atomic design decision
of 4 August: foundations, components, patterns, as map-prototype does it. `atomic.md` is deleted
and its six-level taxonomy with it.

#### The components, and where they stand

**The approved list is `docs/research/proposal.md`:** eight components in five groups, using
Atlassian's category names rather than invented ones, plus two patterns. Every one had to pass
Carbon's own contribution test read for one website: it appears in more than one place, and
nothing already in the system does its job. The research behind that list, and the first set
that was built and deleted before it existed, are in `PLAN_ARCHIVE.md`.

| Component | Group | State |
|---|---|---|
| **Button** | Actions | Built; the record is in `PLAN_ARCHIVE.md` |
| Icon button | Actions | Next. Its own component, not a button variant |
| Link | Actions | Missing entirely, which is how "buttons act, links navigate" went unenforced |
| Text input | Forms and input | Specified in `color.md` 5, drawn once, needs rebuilding to the approved names |
| Checkbox | Forms and input | The same |
| Message | Messaging | Four kinds. Warning's tokens are already in the code; the record is in `PLAN_ARCHIVE.md` |
| Tag | Labels | Read-only only |
| Tile | Containers | Carbon's name and Carbon's model. **There is no card:** none of the three systems publishes one |

**Then the two patterns**, the bento and the section, composed from those.

**Build one at a time, drawn and reviewed before the next.** Both systems that publish a
contribution process make adding a component deliberately hard, which is the opposite of how the
deleted set arrived.

**A known duplication, found 13 August, to be resolved when the components are built.** The
concept pages each carry their own copy of the button, the tile and the tokens, because a
concept page has to open offline from a double-click and cannot load a shared stylesheet.
`layout.md` section 5 says a page never defines a button of its own, and today several files
define one. The values were copied from the owning rule files rather than invented, and were
checked on 13 August against the type scale and the radius scale, so they agree. **They will
drift.** The fix is not to edit the pages now; it is that when the components are built and
something serves them, the concepts either move onto the served copy or are retired. Recorded
here so the duplication is a known cost with an end, not an accident.

#### After the components

**The sound design** (`sound.md`), once the demo website's real screens exist. It was decided on
5 August that the site will use sound and that it gets designed against real screens rather than
in the abstract, so it waits on them.

**The foundations this builds on are approved and owned by `docs/design-rules/`.** The
4 August approval record is in `PLAN_ARCHIVE.md`.

### 3. Then the tests

Three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice.
After the design system.

### On hold, and not part of the three above

**The logo mark, parked by the owner as not important now.** The todo list's "logomark needs
meaning" (section 1, item 2) is the reason it reopens, when the owner starts it. It was
reopened once before, on 6 August, when the owner asked for alternatives to the typeface
asterisk: four rounds, 71 marks. The page that held them, `concepts/logo-all.html`, was deleted in commit
`966f304` and is recoverable from there only.
Nothing was chosen and `logo.md` is unchanged, so **the asterisk still stands**. Only round one
was ever judged, where five marks were kept: three into one, three overlapping, three arms, the
asterisk, and the bento lead tile. The 44 marks in rounds two to four are tagged live only
because nobody ruled on them, which is not the same as surviving. Two findings worth keeping:
the asterisk's position is now a measured value rather than a guess (ink runs 0.3438em to
0.9219em above the baseline, so an inline mark is `0.5781em` square at
`vertical-align: 0.3438em`), and the later rounds drifted lighter than the asterisk they would
replace, which is why the densest set was the one never judged fairly.

**The logo's motion** (`logo.md` section 4) waits on the mark question and is on hold with it.

---

## Where this order came from

Set by the owner on 4 August 2026 and since revised. The second team meeting's record is in
`docs/evidence.md` part 5.

Revised by the owner on 13 August 2026: the scoring loop and the CEO demo were removed, the
todo list at the project root was adopted as section 1, and the design system and the tests
moved down behind it.

The three original deliverables are unchanged as ideas: the demo website, then the brand and
design system, then the tests. The website now enters through the todo list's hero, process
and CTA.

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
