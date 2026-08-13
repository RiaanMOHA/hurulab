# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Restructured 4 August 2026.

---

## Next, in order

The process and pricing pages come first, the design system second. The logo is on hold.

### 1. The process and pricing pages

Show a potential client how hurulab works with them: the opening move, then the ladder of
phases, then what each phase costs and what they keep. **Two proposal pages**, both concept
pieces in `concepts/`, not the website. Pieces of them get carried into the real site later.

**Since 12 August 2026 there are two sources of truth, and the CEO adjudicates.**
`docs/funnel-pricing.md` (HL-SOP-2026-001 v1.1) was the single source, and where it disagreed
with anything older it won; `copy.md` section 2 was corrected that way, and the site shows
pricing. Then the record of a 10 August meeting with the CEO arrived, now `docs/evidence.md`
part 6, and the 12 August audit found the two disagree in five places: how discovery is
priced (about $3,000 per hour quoted by estimated team hours, against a fixed fee of 5 to 15%
of build value), how long it runs (typically two to four weeks, against a fixed one to two),
whether price is negotiable (about 20%, against scope down never price down), what the client
keeps (the deliverable "for the interim" with the full build held back, against everything
made in discovery being theirs from day one), and whether the live build demo still exists
(the meeting describes two calls, vetting then scoping, and never mentions building live).
**Neither document is corrected until the CEO rules.** The owner's rulings on how the pages
handle this are dated 12 August in `docs/decisions.md`: meeting version first, the document
version in an asterisk footnote on that screen for the CEO demo, and the marking never
influencing the visual design.

**Prices are shown, meeting version first with the document footnoted**, per the two-sources
rule above. What `docs/funnel-pricing.md` defines: the five stages, fixed price and fixed
weeks, the discovery fee at 5 to 15% of build value credited in full against the setup fee
inside 90 days, the three options (A subscription, B buyout, C subscribe-then-buy), and the
three principles.

Two lines in it are sales mechanics rather than client-facing copy, and reproducing them
verbatim on a page would work against the sale they describe: "B is priced to make A look good"
and "scope down, never price down". Their **effect** is shown, three real options and a scope
that flexes. Their internal wording is not quoted.

The ban on **invented** pricing (`copy.md` section 4) still holds absolutely. Every figure on
these pages comes from `docs/funnel-pricing.md` or `docs/evidence.md` part 6. A number in
neither does not go on a page. **`docs/gtos.md`, added 13 August, contains no figure at all**,
so it changes nothing here.

**The owner's seven notes, 7 August 2026**, since absorbed here and into
`docs/research/ajsmart.md`, their reference. Their heart: discovery is paid, fixed price and
fixed weeks, and **everything made in it is the client's to keep from day one.** The process is
a ladder starting at discovery, the keyword is *efficient*, and the claim is that hurulab
understands the whole picture rather than parts of it, selling services rather than tools.

**The order of work.** The research, the grill and the first proposal pair are closed and their
records are in `PLAN_ARCHIVE.md`. What the research and the grill settled is not history, and it
is the rules further down this section. Two steps remain.

1. **Both journey pages, rebuilt 13 August and awaiting the owner's score.**
   `proposal-c-the-money.html` and `proposal-d-the-moment.html`, in `concepts/`, alongside the
   old pair. The 12 August versions scored **4 and 5 out of 10**, and the owner's verdict named
   four failures: the argument is thin, the story does not build, it looks flat, and the design
   does not follow `docs/design-rules/`. The rebuild history is in `PLAN_ARCHIVE.md`; the rules
   both pages follow are below and further down this section.

   **The scores are still to be given.** Nothing else in step 1 proceeds until they are.

   **The rules in force, and what each rests on:**

   - **The design rules are not negotiable. Owner instruction, 13 August**, given when the
     agent offered a type scale as a choice: *"follow docs/design-rules ALWAYS."* Type,
     spacing, color, radius and motion come from the owning file, never from the page.
   - **The audience is the future client.** The CEO watches a client-shaped story.
   - **The reader is the hero, hurulab the guide. Owner ruling, 13 August**, chosen over
     making the system the hero, which would leave the reader watching.
   - **The second source appears as asterisk footnotes**, not inline brackets: the main line
     stays pure, the funnel-pricing version sits in a footnote on that screen.
   - **The pages never scroll. Owner ruling, 12 August, after a scroll version was rejected
     on sight.** Every beat is its own screen, advanced by a button, with progress dashes at
     the top and a back arrow from the second screen. Page c's whole-path screen is the one
     screen allowed to scroll inside itself, so the comparing reader gets everything at once.
     On the two shortest phones the three-tile screens take the same exemption, because
     shrinking type further would leave the scale.
   - **The bands are white and deep purple, as exploration.** Colored full-bleed screens exist
     nowhere in the system's rules, so the concepts try them, with the owner choosing the dark
     brand purple with white text. The mark, dashes and back arrow live in a white top bar and
     the concept note in a white bottom bar, because the logo may never sit on a colored field.
     No personality device: the asterisk is the logo and it stays static until its motion is
     designed.
   - **Motion follows `motion.md` exactly**: 250ms reveals, 60ms staggers, exits at 160ms, one
     450ms statement wipe per page, no ambient motion at all, reduced motion removes
     everything. Each page spends its one wipe on its opening question.
   - **One beat on each page does not move.** The reversal, where the reader's expectation is
     turned over, is still after five screens that move.
   - **Both pages carry a quiet "concept, internal demo" line.** Live lead names and the
     negotiation mechanics from the meeting notes never appear on a page.

   **What each page now argues.**

   - **Page c is the money**, ten screens, unchanged in spine: the entry hook asks which
     problem costs the most, then the three free gates, the second call, the paid sprint, what
     the client keeps, the walk-away, the fork, the whole path with its three options, and the
     close. Every figure comes from `docs/funnel-pricing.md` or `docs/evidence.md` part 6, and
     the unset discovery fee is a dashed placeholder that cannot read as a real number.
   - **Page d is the moment**, twelve screens, rebuilt 13 August on `docs/gtos.md`. Its spine
     is **the three fears**, chosen by the owner over the one law and the infrastructure
     thesis: the tools do not know the business, the budget could go with nothing to audit, and
     tokens keep getting cheaper so waiting looks free. Each is answered by a step of the
     cycle. Three screens demonstrate rather than assert: a claim tracing to its source, the
     gate between a projection and a fact, and the router ladder. The reversal is that cheaper
     tokens make the wiring more valuable, not less.
   - **The two are not symmetrical, and that is deliberate.** c is the money, d is the moment.

   **What `docs/gtos.md` licenses, and what it does not.** The owner confirmed on 13 August
   that the system it describes runs today, so the pages state **how it works** as plain fact.
   It contains **no measured outcome**, so none may be claimed: `copy.md` section 4 and section
   11 of `brand.md` are untouched by it. The full record, including the limit of its evidence,
   is `docs/evidence.md` part 7.

2. The owner demos the pages to the CEO, who rules on the five contradictions. Then the
   documents get corrected and the pages lose their footnotes.

**What the grill settled, and it is not all in `docs/funnel-pricing.md`:**

- **Everything made in paid discovery goes to the client. Confirmed by the owner.** The
  document does not say this outright, and two of its lines pull the other way: "the artefact
  never leaves" (the free demo, S1) and "methodology and templates stay ours" (option B). Both
  still hold. The client keeps the work made about their business, not hurulab's methods, and
  the free demo is still not theirs to take.
- **The 5 to 15% discovery fee cannot go on a client page.** It is an instruction to whoever
  writes the quote, not a price a reader can act on: they do not know their build value, and a
  fee that scales with it reads as pricing the customer rather than the work. Every company in
  `docs/research/ladders.md` that published well showed a real number or a real floor, never a
  percentage. **Until the CEO gives a real figure, the pages carry a clearly marked placeholder**
  so the layout is right and the number is obviously not.
- **The three buying options come after the walk-away**, on the fork screen, because that is
  where the only real choice in the sequence sits.

**The rules both pages follow, all settled by the research:**

- **The ownership promise sits on the first paid step, inside its deliverable list**, not at the
  bottom of the page. hurulab's edge is ownership at the start.
- **Every paid rung says it stands alone**, meaning discovery and the build. The free calls
  carry no walk-away line because there is nothing yet to walk away with, and claiming one there
  would be noise.
- **Proof sits high, price sits last**, so a number arrives after the argument has earned it.
- **Motion is a staggered reveal**, siblings arriving one after another rather than together,
  and it honours reduced motion. vellum does not; `motion.md` requires it.
- **The discovery fee reads as buying an answer, not as a deposit**, even though it is credited.
- **Never**: instalments disguised as a ladder, a flat table as the only view, or the walk-away
  permission in fine print.

**Partly superseded by the click-through form, 12 August, and corrected 13 August.** One rule
here was written for the scrolling ladder pages a and b: that the ladder is drawn twice, as a
compact numbered arc and then as a detail block per step. A click-through page walks one beat
per screen, so the detail block is the walk itself and the second drawing has nothing to add.
**Page c does draw the five-step ladder once**, on its whole-path screen, with the paid rung
dark, which is where the buying options sit as well. The twice-drawn rule is recorded rather
than deleted because if the CEO demo sends the work back toward a single scrolling page, it is
the rule it returns to.

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

**A known duplication, found 13 August, to be resolved when the components are built.** The two
concept pages each carry their own copy of the button, the tile and the tokens, because a
concept page has to open offline from a double-click and cannot load a shared stylesheet.
`layout.md` section 5 says a page never defines a button of its own, and today three files
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

**The logo mark, parked by the owner as not important now.** It was reopened on 6 August when
the owner asked for alternatives to the typeface asterisk: four rounds, 71 marks,
all in `concepts/logo-all.html` with the rejected ones faded. Nothing was chosen and `logo.md`
is unchanged, so **the asterisk still stands**. Only round one was ever judged, where five
marks were kept: three into one, three overlapping, three arms, the asterisk, and the bento
lead tile. The 44 marks in rounds two to four are tagged live only because nobody ruled on
them, which is not the same as surviving. Two findings worth keeping: the asterisk's position
is now a measured value rather than a guess (ink runs 0.3438em to 0.9219em above the baseline,
so an inline mark is `0.5781em` square at `vertical-align: 0.3438em`), and the later rounds
drifted lighter than the asterisk they would replace, which is why the densest set was the one
never judged fairly.

**The logo's motion** (`logo.md` section 4) waits on the mark question and is on hold with it.

---

## Where this order came from

Set by the owner on 4 August 2026 and since revised. The second team meeting's record is in
`docs/evidence.md` part 5.

Deliverables 1 and 2 swapped places: `docs/funnel-pricing.md` arrived and made the front of the
demo website buildable before the design system was finished. That document also replaced the
original wording, "the process flow instead of fixed pricing", with the process **and** its
pricing.

The three deliverables themselves are unchanged: the demo website, then the brand and design
system, then the tests. They are the three numbered sections above.

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
