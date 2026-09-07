# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Restructured 4 August 2026. Renumbered as items and the CEO pages dropped,
7 September 2026.

---

## Next, in order

Three items. The website, then the design system, then the tests. The CEO pages, the cost
concept and the logo mark work are all dropped, owner ruling, 7 September 2026. The todo list
itself ran to completion on 13 August and its record is in `PLAN_ARCHIVE.md`, as is the closure
of the process and pricing pages the same day.

### Dropped, 7 September 2026: the CEO pages

**Owner ruling. The work is not continuing.** Four pages were built on 4 September from the
CEO's concepts, three were deleted the same day, and the one that stood,
`concepts/ceo/espresso-bar-harmattan.html`, is now deleted too. Their text sources stay in
`docs/ceo-concepts.md` and every page is recoverable from git.

**Two things it settled stay live**, because they bind any page built from here:

- **The faults named on that page.** Too much copy, too much motion at once, more than two
  tones, uppercase for emphasis. They are conditions on every page, not on that one.
  **Corrected 7 September 2026:** this list had also carried "no `max-width` or `ch` cap on
  text" as a fault, and claimed `type.md` required a cap. It requires the opposite. Owner
  ruling, 4 August and reconfirmed 7 September: **text always runs to the full margins, no cap,
  ever.** `type.md` section 10 owns it.
- **`docs/visify.md` is standing guidance**, owner instruction,
  4 September 2026. It is read before drawing a page and is not put to the owner each time. It
  is guidance, and the rule files win on every disagreement.

**Its central move:** name three things early, then reuse those three names down the whole
page. Twenty-two boards arguing twenty-two cases becomes three arguments repeated. **The three
come from `brand.md`, never from visify.** Which three a page uses is an owner decision.

**The section shape that carries them:** a small label, one large line, a short paragraph, one
action. Repeated down the page, with the field alternating light and dark on a rhythm, which is
what `layout.md` section 5 already sets for tiles. One primary action, repeated, with secondary
actions visibly lighter.

**The color question did not get settled.** Harmattan against Purple Light was to be judged
from two pages carrying the same argument. Those pages are gone, so it stays open.

**Never ruled on, and carried out of the sources:** "verified capability, rented out as an
asset", the GT-OS two-layer architecture and the seven-step engagement are not in `brand.md`.
Nothing from them may be presented as a hurulab claim. The ROI, margin and cost figures in those
sources are illustrative model outputs, and the market statistics are sourced to MIT and to
unnamed surveys. None are measured hurulab results.

### Item 1. The website, and what the todo left open

1. **The website is deleted, and there is no website work.** Owner ruling, 4 September 2026:
   the project is at the concept stage, not the build stage, and a site page sitting in the
   repository was out of step with that. `site/index.html` is gone, recoverable from git.
   Its whole history, the 13 August ruling that grew it out of proposal-f, the 17 August hero
   and process verdicts, is in `docs/decisions.md` and `PLAN_ARCHIVE.md`.

   **Nothing replaces it until the concepts settle.** When a site is built again it starts
   from whichever concept the owner approves, and the rules that bound the old one still
   bind: the research in `PLAN_ARCHIVE.md` under the 13 August closure, and the ban on
   invented pricing in `copy.md` section 4. The page carries no set headline: the todo's
   headline 1 was struck by the owner on 13 August.

2. **A third font, for numbers. Researched 3 September, not chosen.** DM Mono recommended on
   measured metrics; the comparison page was never written to disk and needs rebuilding if the
   question is reopened. Adopting any mono breaks `type.md` section 1, "two faces, no more, no
   mono", so it needs an owner ruling and an edit to that file.

3. **Two owner decisions left open by the absorption, 13 August:**
   - Whether `docs/evidence.md`, now past the 800-line limit at 919 lines, gets a
     storybook-style exemption. It is one file by design: the evidence rule calls it "the
     primary sources, in one file", so splitting it would cost what it is for.
   - Whether the converged positioning found by the document sweep ("judge it before you
     commit", now recorded in `docs/evidence.md` part 11) amends the single idea in
     `brand.md` section 7 ("use it before you pay for it"). Until ruled on, brand.md stands.
### Item 2. Then the design system, restructured

**Modelled on `/Users/riaan/Documents/Design Files/Code Projects/map-prototype`,** named by the
owner. The build, both audits and the tokens file are closed, and their records are in
`PLAN_ARCHIVE.md`. What that arrangement requires from here on:

- The written rules stay in `docs/design-rules/`, one file per topic, exactly as here now.
- **Storybook does not replace `storybook.html`, it reads from it.** This is map-prototype's own
  arrangement and the reason the whole thing holds: a story carries no markup, it clones its
  section out of that page by id. One drawing, two views, and nothing to keep in sync. That
  page is therefore exempt from the 800-line limit, reasoned in `docs/design-rules/README.md`.
  Every component built from here adds its story the same way.
- **There is no tokens file.** `css/tokens.css` was deleted 7 September 2026: nothing loaded
  it, because a page opened from disk cannot load a stylesheet beside it. One gets generated
  from the rule files if a page is ever served instead.
- **The audit script waits for something to audit.** In map-prototype it reads the app's
  rendered classes and reports any that no rule and no story describes, and it works precisely
  because it knows nothing about what the code intends. hurulabs has no app code, so today it
  would read nothing, compare it to fourteen documents and report zero findings. It gets
  written once components exist, starting from a baseline of zero.

**Three levels, not six. Owner decision, 8 August 2026**, replacing the atomic design decision
of 4 August: foundations, components, patterns, as map-prototype does it. `atomic.md` is deleted
and its six-level taxonomy with it.

#### The components, and where they stand

**The approved list is `docs/design-rules/components.md`:** eight components in five groups, using
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

### Item 3. Then the tests

Three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice.
After the design system.

### On hold, and not part of the order above

**The logo mark and its meaning work are dropped.** Owner ruling, 7 September 2026. The
asterisk stands per `logo.md` and the question is not reopened. The 71 marks of the August
rounds and the seven that survived them are all history, and none of it is a live question.
The pages and the meaning research were deleted 7 September 2026, recoverable from git.

One measured value survives, because it is in use: the asterisk's ink runs 0.3438em to
0.9219em above the baseline, so an inline mark is `0.5781em` square at
`vertical-align: 0.3438em`.

**The logo's motion is dropped**, 7 September 2026, with the mark question. The logo is static.

---

## Where this order came from

Set by the owner on 4 August 2026 and since revised. The second team meeting's record is in
`docs/evidence.md` part 5.

Revised by the owner on 13 August 2026: the scoring loop and the CEO demo were removed, the
todo list at the project root was adopted as the first item, and the design system and the
tests moved down behind it.

Revised by the owner on 7 September 2026: the CEO pages and the cost concept were dropped, the
visify read closed into what it taught, and the remaining work renumbered as items 1 to 3.

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
