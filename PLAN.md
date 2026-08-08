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

**Its source of truth is `docs/funnel-pricing.md`** (HL-SOP-2026-001 v1.1), the CEO's statement
of how the pricing model works. It stands on its own. It is not evidence and not a decision
record, and it is not filed as either. Where it disagrees with anything else in the project
about pricing or process, **it wins**, and the older statement gets corrected rather than
argued with. `copy.md` section 2 was corrected this way: the site shows pricing.

**Prices are shown.** The five stages, fixed price and fixed weeks, the discovery fee at 5 to
15% of build value credited in full against the setup fee inside 90 days, the three options (A
subscription, B buyout, C subscribe-then-buy), and the three principles.

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

**The order of work:**

1. ~~The research.~~ **Done**, three files in `docs/research/`: `ajsmart.md`, `vellum.md` and
   `ladders.md`, the last from fifteen companies selling staged paid engagements. The prompts
   that produced them are deleted. **What it decided is in the rules for the pages below.**
2. ~~Run `/grill-me`.~~ **Done. It changed the two pages**, and what it settled is below.
3. **Build two proposal pages, in `concepts/`.** Two separate pages, not one page with two
   sections. The owner's split, made during the grill:

   **Page A is the money.** All five steps, S0 to S4, with the pricing: the three buying
   options, the credit rule, what each phase costs. For a reader working out what this costs.

   **Page B is the one real moment.** Everything builds toward paid discovery, then makes the
   walk-away offer big and unmissable: pay for one to two weeks, keep everything made in it,
   then decide freely. For a reader deciding whether to start at all.

   This replaced the earlier split, accumulating-pile against exit-fork, which the grill broke.
   The exit fork only works after money has changed hands: S0 and S1 are free, so there is
   nothing to walk away with, and by S4 the contract is signed. **There is exactly one real
   fork in the funnel, after paid discovery,** which is why it became a whole page rather than
   a device repeated five times.
4. The owner picks one, by eye.

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
- **The three buying options sit at step 4**, where they belong in the sequence, with that step
  opening wider than the others because it holds the only choice in the ladder.

**The rules both pages follow, all settled by the research:**

- **The ownership promise sits on the first paid step, inside its deliverable list**, not at the
  bottom of the page. hurulab's edge is ownership at the start.
- **Every paid rung says it stands alone**, meaning discovery and the build. The two free steps
  carry no walk-away line because there is nothing yet to walk away with, and claiming one there
  would be noise.
- **The ladder is drawn twice**: a compact numbered arc of all five steps, then a detail block
  per step on one repeated scaffold.
- **Proof sits high, price sits last**, so a number arrives after the argument has earned it.
- **Motion is a staggered reveal**, siblings arriving one after another rather than together,
  and it honours reduced motion. vellum does not; `motion.md` requires it.
- **The discovery fee reads as buying an answer, not as a deposit**, even though it is credited.
- **Never**: instalments disguised as a ladder, a flat table as the only view, or the walk-away
  permission in fine print.

### 2. Then the design system, restructured

**Run `/cto` and `/optimize-design-docs` first, before any building.** The rules folder has
grown through eleven days of decisions and has never been audited as a whole: `/cto` for the
structure and what it would cost to change, `/optimize-design-docs` for contradictions,
duplication, stale content and unclear ownership between files. A restructure built on top of
drift only preserves the drift.

**Model it on `/Users/riaan/Documents/Design Files/Code Projects/map-prototype`,** named by the
owner. What that project does, and what hurulabs adopts:

- The written rules stay in `docs/design-rules/`, one file per topic, exactly as here now.
- **A real Storybook** (`@storybook/html-vite`), stories living beside the rules in
  `docs/design-rules/stories/`, replacing the single hand-written `storybook.html`.
- The project's own breakpoints in the viewport toolbar, not Storybook's device list.
- **An audit script that reads the rules and the rendered code independently** and reports any
  class the code renders that no rule and no story describes. It works precisely because it
  knows nothing about what the code intends. In map-prototype it runs against a baseline of
  known findings; hurulabs starts from zero, having no built components yet, so it can be
  strict from the first day and never needs a baseline at all.

Underneath that sits the work already queued and unchanged:

1. **Rebuild the components from the approved foundations.** The owner's verdict stands: the
   current buttons, inputs and checkbox are wrong and are rebuilt from scratch, on the
   5 August radius scale and motion system. The approved coming-soon button (purple-300
   fill, near-black text, hover purple-400, capsule on the C2 curve, color-only response)
   is the settled reference for the button.
2. **Then make it a working system.** One tokens file (a new `build.md` owns it), each
   component built once as real code, patterns composed from them, the storybook showing the
   living pieces.

**Three levels, not six. Owner decision, 8 August 2026**, replacing the atomic design decision
of 4 August: foundations, components, patterns, exactly as
`/Users/riaan/Documents/Design Files/Code Projects/map-prototype` does it. `atomic.md` is
deleted and its six-level taxonomy with it.
3. Once the demo website's real screens exist, **the sound design** (`sound.md`).

**The foundations this builds on, approved 4 August:** breakpoints (mobile, tablet, desktop,
desktop large), spacing on the new scale, color (warning added as burnt orange, the two-tone
grey lightened), type on the new two-ratio scale (1.2 to 1.3, body 17 to 20, lede abolished),
icons (Phosphor regular), the 44px tap minimum, and Apple's continuous corner curve with
circular fallback.

### On hold

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

### 3. Then the tests

Three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice.
After the design system.

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
