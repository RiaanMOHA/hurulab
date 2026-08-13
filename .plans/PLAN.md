# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Restructured 4 August 2026.

---

## Next, in order

The owner's todo list comes first, adopted 13 August 2026 from `todo.md` at the project root.
The design system moves down to second, the tests to third. The logo mark stays on hold. The
process and pricing pages closed the same day, their record in `PLAN_ARCHIVE.md`: the scoring
loop and the CEO demo were removed by the owner, and the four concept pages stay in
`concepts/` as built.

### 1. The todo list, adopted 13 August 2026

The items as the owner wrote them, in the todo's own order. The order of work within this
section is the owner's to set as it starts.

1. **The website: hero, process, CTA.** Three parts named. The todo's headline 1 was struck
   by the owner on 13 August and is not used. **The website grows out of proposal-f**, owner
   ruling the same day: f's logo-as-hero is the hero, and the process and the CTA get built
   onto it. It is built as the real site page, not another concept, at `site/index.html`.
   **Both lower sections need rework, owner verdicts, 13 August, parked to keep moving.** The
   process section, three numbered steps with the ownership chips and the walk-away line, was
   judged not good. The CTA section, the deep purple closing band with the free-call button,
   scored 2 out of 10. No failure was named on either, so the rework starts by asking what is
   wrong with them. The
   research rules the proposal pages settled are kept in `PLAN_ARCHIVE.md` under the 13 August
   closure and are what future page work returns to; the ban on invented pricing (`copy.md`
   section 4) binds here as everywhere.

2. **The logomark needs meaning. Started by the owner, 13 August:** go through `docs/` to
   find an identity that can be made visual in a logomark, and present five proposals, each
   carrying its meaning and the source it traces to. The mark's history stays in the on-hold
   section below; the asterisk stands until the owner chooses.

3. **Issue 1, done 13 August:** "Buying technology you cannot judge is a gamble." becomes
   "Buying solutions you cannot judge is a gamble." The line came from
   `Hurulab-positioning-recommendations.md` and fed proposal-e; the correction applies
   wherever the line is used.

4. **Issue 2, the document sweep.** Read five documents: `hurulab-meeting-20260812-v1.md`,
   `hurulab-meeting-20260812-v2.md` and `Hurulab-positioning-recommendations.md` at the
   project root, and `docs/funnel-pricing.md` and `docs/gtos.md`. Find the agreements and the
   inconsistencies, then find the actual positioning and value proposition. Two standing facts
   feed this sweep:
   - The five known contradictions between `docs/funnel-pricing.md` and `docs/evidence.md`
     part 6 (discovery pricing, discovery length, negotiability, what the client keeps, and
     whether the live build demo exists) stand unresolved, and neither document is corrected.
     The CEO adjudication step was removed from the plan on 13 August without them being
     ruled on.
   - The todo licenses reading the two meeting notes and the positioning document, which were
     until now unopened owner files at the project root. The evidence rule still gates them:
     nothing from them becomes a claim about hurulab until the owner has it absorbed into
     `docs/evidence.md`. Finding what they say is this task; deciding what they prove is not.

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
| **Button** | Actions | **Done, 8 August.** Three variants: primary, border, ghost |
| Icon button | Actions | Next. Its own component, not a button variant |
| Link | Actions | Missing entirely, which is how "buttons act, links navigate" went unenforced |
| Text input | Forms and input | Specified in `color.md` 5, drawn once, needs rebuilding to the approved names |
| Checkbox | Forms and input | The same |
| Message | Messaging | Four kinds. Warning's tokens were added to the code on 8 August |
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

**The foundations this builds on, approved 4 August:** breakpoints (mobile, tablet, desktop,
desktop large), spacing on the new scale, color (warning added as burnt orange, the two-tone
grey lightened), type on the new two-ratio scale (1.2 to 1.3, body 17 to 20, lede abolished),
icons (Phosphor regular), the 44px tap minimum, and Apple's continuous corner curve with
circular fallback.

### 3. Then the tests

Three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice.
After the design system.

### On hold, and not part of the three above

**The logo mark, parked by the owner as not important now.** The todo list's "logomark needs
meaning" (section 1, item 2) is the reason it reopens, when the owner starts it. It was
reopened once before, on 6 August, when the owner asked for alternatives to the typeface
asterisk: four rounds, 71 marks, all in `concepts/logo-all.html` with the rejected ones faded.
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
