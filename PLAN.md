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
these pages comes from this document. A number that is not in it does not go on a page.

**The owner's seven notes, 7 August 2026**, since absorbed here and into
`docs/research/ajsmart.md`, their reference. Their heart: discovery is paid, fixed price and
fixed weeks, and **everything made in it is the client's to keep from day one.** The process is
a ladder starting at discovery, the keyword is *efficient*, and the claim is that hurulab
understands the whole picture rather than parts of it, selling services rather than tools.

**The order of work.** The research, the grill and the first proposal pair are closed and their
records are in `PLAN_ARCHIVE.md`. What the research and the grill settled is not history, and it
is the rules further down this section. Two steps remain.

1. **Two new journey pages, in `concepts/`, alongside the old pair. Built and awaiting the
   owner's score.** `proposal-c-the-money.html` and `proposal-d-the-moment.html`. The owner's
   direction, 12 August: each page opens with an entry hook, then walks one beat per screen
   as a guided journey, modelled on vellum's onboarding flow, recorded in
   `docs/research/vellum-journey.md`, but drawn entirely in hurulab's own design system and
   brand. The sixteen reference screenshots it was drawn from were deleted on 12 August once
   the work was built; they are recoverable from git. The split survives from the grill: **page A is the money, page B
   is the one real moment.** The copy follows the two-sources rule above: meeting version
   first, the document version in asterisk footnotes, and the marking never influencing the
   visual design.
   **Settled 12 August, after the critique, story, copy and motion passes:**

   - **The audience is the future client.** The CEO watches a client-shaped story.
   - **The second source appears as asterisk footnotes**, not inline brackets: the main line
     stays pure, the funnel-pricing version sits in a footnote on that screen. This refines
     the earlier brackets wording; `docs/decisions.md` 12 August is corrected to match.
   - **The hook is the one-problem question**: "What is the one problem costing you the
     most?" On page A the reader answers by picking a problem area, and the journey echoes
     the pick. On page B the question is asked and left hanging.
   - **The pages never scroll. Owner ruling, 12 August, after a scroll version was rejected
     on sight.** The reference is a click-through flow: every beat is its own screen,
     advanced by a button, with progress dashes at the top and a back arrow from the second
     screen. Page A's path-and-pricing screen is the one screen allowed to scroll inside
     itself, so the comparing reader still gets everything at once.
   - **The reference's full treatment applies. Owner ruling, 12 August**, after vellum.ai
     was read directly, then re-observed live through the browser extension; that record is
     `docs/research/vellum-journey.md`. The pages speak in the first person as hurulab,
     screens are full-bleed color bands, and the strongest beat demonstrates rather than
     describes. Fonts, tokens and components stay hurulab's own throughout.
   - **The bands are white and deep purple, as exploration.** Three rulings from the
     12 August `/cto` inspection, all in `docs/decisions.md`: colored full-bleed screens
     exist nowhere in the system's rules, so the concepts try them as exploration, with the
     owner choosing the dark brand purple with white text as the band color; the reference's
     black close stays rejected under the 8 August light-only rule. The mark, dashes and
     back arrow live in a white top bar and the concept note in a white bottom bar, because
     the logo may never sit on a colored field. There is no personality device: the
     reference's peeking creatures translate to nothing, because the asterisk is the logo,
     the logo stays static until its motion is designed, and the owner chose restraint over
     amending that rule.
   - **The story spine is the Pixar seven-step**, reader as hero, hurulab as guide. The
     reversal beat is "Sometimes the answer is do not build it. We say so, and the fee
     stands." It sits after the discovery beat and breaks the motion rhythm by being still.
   - **The copy passed the slop check at 43/50.** Key lines: "It costs you money every day,
     and no one can say what to build." "You keep the report. You keep the specification.
     Your operation, mapped, leaves with you." "Sign the big contract only after a small
     sprint has proven it."
   - **Motion follows `motion.md` exactly**: 250ms reveals, 60ms staggers, exits at 160ms,
     one 450ms statement wipe per page (page A spends it on the hook, page B on the fork
     line), no ambient motion at all, reduced motion removes everything.
   - **Both pages carry a quiet "concept, internal demo" line.** Live lead names and the
     negotiation mechanics from the meeting notes never appear on a page.

   - **The first full-treatment build scored 2 out of 10, owner verdict, 12 August.** What
     failed: centered slideware screens, floating white rectangles for the fork, a path
     screen that was only text, and sentences running too long. The redesign directive:
     real composition inside the system. Left-aligned editorial layouts, the three S0 gates
     drawn on the vetting screen, the artifacts and the fork doors as system tiles with the
     dark tile carrying the lead, the ladder drawn as a designed object with the paid step
     highlighted, and every sentence cut shorter. Target 6 or better. **Delivered the same
     session**: both pages rebuilt to that directive, two further corrections applied on
     sight (no line break inside a sentence, every heading two-tone), and the session-end
     sweep snapped the dark tile to the system's own base black. **The owner's score on the
     redesign is still to be given**, and the work sits on `design/discovery-process-page`,
     unmerged.

   - **Page d gained the moat check and the cost reveal, 12 August**, from a brief the owner
     supplied; the rulings are in `docs/decisions.md` and the brief itself is deleted. Four
     screens: the reader is asked what a competitor could not copy, the answer is echoed back
     and carried to a closing summary they keep, then the honest cost of building it
     themselves, then two paths drawn as ranges rather than figures. No answer reads as a
     rejection, no score is shown, and the brief's own pricing was refused because it traces
     to a strategy document the evidence rule excludes. **Page d is now ten screens and page c
     is unchanged in shape**, so the two are no longer symmetrical, which is deliberate: c is
     the money, d is the moment.

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

**Superseded by the click-through form, 12 August.** Two rules here were written for the
scrolling ladder pages a and b: that the ladder is drawn twice, as a compact numbered arc and
then as a detail block per step, and that the buying options sit at a numbered step 4. Pages c
and d walk one beat per screen and draw no five-step ladder, so neither rule survives the change
of form. They are recorded here rather than deleted because if the CEO demo sends the work back
toward a single scrolling page, they are the rules it returns to.

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
