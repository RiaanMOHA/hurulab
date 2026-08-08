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

`docs/feedback-20260807.md` carries the owner's seven notes and the reference,
`https://ajsmart.com/partners`. Its heart: discovery is paid, fixed price and fixed weeks, and
**everything made in it is the client's to keep from day one.** The keyword is *efficient*, and
the claim is that hurulab understands the whole picture rather than parts of it.

**The order of work:**

1. **The research comes first, and it is the owner's to run.** Two prompts, one per site. Both
   ask the same nine things: business model, value proposition, differentiation, messaging
   structure with all copy verbatim, tone, sequence, layout, motion, and judgment.

   - `.thoughts/prompt-1-vellum.md` for vellum.ai, leaning on motion and pacing.
   - `.thoughts/prompt-2-ajsmart.md` for ajsmart.com/partners, leaning on how an expensive
     staged engagement is priced in the open, and on how commitment is staged across offers.

   **Neither asks for fonts, color values, type sizes or spacing, and both say so.** That is all
   settled in `docs/design-rules/` and a borrowed value could only cause drift. What is wanted
   is how these sites argue and move, never what they look like.

   The owner runs each in the Claude browser and pastes the replies back, in markdown.
   **Nothing is designed until both replies are in hand.**
2. **Then two proposal pages, in `concepts/`.** Two separate pages, not one page with two
   sections. Each covers the full five-step journey, S0 to S4, with the discovery opening as
   the focus and the phase ladder as the visual centre: at each rung, what you get and what you
   keep. Same brand, colors and design system in both. **Two genuinely different looks and
   feels, not one design drawn twice.**
3. The owner picks one, by eye.

### 2. Then the design system, restructured

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

1. **Rebuild the atoms from the approved foundations.** The owner's verdict stands: the
   current buttons, inputs and checkbox are wrong and are rebuilt from scratch, on the
   5 August radius scale and motion system. The approved coming-soon button (purple-300
   fill, near-black text, hover purple-400, capsule on the C2 curve, color-only response)
   is the settled reference for the button atom.
2. **Then make it a working system.** One tokens file (a new `build.md` owns it), each atom
   built once as real code, molecules and organisms composed upward, the storybook showing
   the living pieces.
3. Once the demo website's real screens exist, **the sound design** (`sound.md`).

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

**Approved in the 4 August evening session, through the walkthrough:** breakpoints (plain
names: mobile, tablet, desktop, desktop large), spacing on the new scale, color (warning
added as burnt orange, the two-tone grey lightened), type on the new two-ratio scale (1.2 to
1.3, body 17 to 20, lede abolished), icons (Phosphor regular, 24 shown in the storybook),
the 44px tap minimum, and Apple's continuous corner curve with circular fallback.

---

## The work, in the owner's order

Set 4 August 2026. The second team meeting's record is preserved in `docs/evidence.md` part 5;
the `todo/` folder and the coming-soon source docs were applied and deleted the same day,
recoverable from git.

**The order, set by the owner on 4 August and since revised.** Deliverables 1 and 2 swapped
places: the process and pricing pages are now the live work and the design system follows. The
revision is not a change of mind about the deliverables, it is a change of order:
`docs/funnel-pricing.md` arrived and made the front of deliverable 2 buildable
before deliverable 1 was finished. The same document also replaced that deliverable's original
wording, "the process flow instead of fixed pricing", with the process **and** its pricing.

| # | Deliverable | Status |
|---|---|---|
| 1 | Demo website: design, messaging, and the process and pricing model per `docs/funnel-pricing.md`. Built through `/rb-design`, one session at a time | live, starting with the process and pricing pages |
| 2 | Brand, design system and storybook, restructured on the map-prototype model | after 1. The logo mark and its motion are on hold |
| 3 | Tests, three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice | after 2 |

**The concept pages that exist.** `concepts/hurulab-coming-soon.html` and its short variant
`concepts/hurulab-coming-soon-short.html`, both on the approved type scale; Cal owns the final
wording and the live-demo sales step is disputed (see `docs/decisions.md`, 5 August).
`concepts/with-without.html` is the story version with the pop-up finale, owner-approved line
by line.

**Removed from the plan by the owner, 4 August:** the imagery rules (not important now, the
documentary-photography rule in `layout.md` section 9 still stands), the drawn asterisk (the
typeface's asterisk is the logo; motion and interaction for it are wanted instead, see
`logo.md` section 4), the Book a Call destination, the jadegia call, and the open people
questions. `docs/decisions.md` and section 13 of `brand.md` keep the record.

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
