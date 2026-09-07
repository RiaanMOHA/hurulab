# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Rewritten 7 September 2026, when the positioning was settled and most of what this file
had been carrying was either answered or dropped.

---

## Blocked on the owner, and nothing starts before it arrives

**Four things are coming from the owner in the next session.** Three of the items below cannot
move without them.

1. **The discovery process itself.** The single idea names its shape, one to two weeks sitting
   with the client, but not its stages or what happens in each. `docs/pricing.md` still carries
   the CEO's version, whose first stage is dead.
2. **The fuller definition of the category.** The owner's words: it is a consultancy, "but
   more". Until then no page stretches the word further.
3. **Confirmation of two provisional pricing answers.** Priced by the hour, and one to two
   weeks. Both marked provisional in the table at the top of `docs/pricing.md`.
4. **The landing page.** It exists, with a headline above the settled subtitle, and it is not in
   this repository.

---

## Item 1. The landing page

**The positioning under it was settled on 7 September 2026** and is in `docs/brand.md`
section 7. The subtitle is the single idea, in the owner's own words:

> At hurulab, we know AI. Let us sit with you for 1-2 weeks to see how you work. We'll help you
> understand how AI can relieve your biggest headaches. If you like what we find, we'll build
> it. And if you don't need AI, we'll tell you that, too.

**What that settles, and what any page has to honour:**

- **Nothing is given before payment.** No free live demo, and the site is not a demo either.
  Both were killed on 7 September.
- **The honest stop is part of the offer**, said out loud on the page: if they do not need AI,
  they are told so.
- **The client keeps everything from day one**, whether or not they continue.
- **"We know AI" may open a page**, and AI still does not lead as the promise. `brand.md`
  section 6.
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

## Item 2. The design system

**Settled apart from sound.** Every rule is written and owned, one file per topic, in
`docs/design-rules/`. Start at its README.

**The one thing genuinely open is sound**: which moments carry it, what the sounds are, and
their volumes. It was decided on 5 August that the site will use sound and that it gets designed
against real screens by listening, so it waits on a page existing.

**Nothing draws the rules, and that is the known gap.** The storybook, its stories, the
Storybook tool, `package.json` and `css/tokens.css` were all deleted on 7 September: nothing
loaded the tokens file and there was no storybook. The rules specify every component in words
and nothing renders them. When something does, it becomes the single source and `build.md`
section 4 is rewritten around it.

**The eight components, and where they stand.** The list and the reasoning are
`docs/design-rules/components.md`; the shape and the states are `layout.md` and `color.md`.

| Component | State |
|---|---|
| **Button** | Specified in full, `layout.md` 5 |
| **Button icon** | Specified, `layout.md` 5.1 |
| **Link** | Specified, `layout.md` 5.2 |
| Text input | Specified in `color.md` 5, not drawn |
| Checkbox | The same |
| Message | Four kinds, tokens exist |
| Tag | Read-only only |
| Tile | Three fills. **The card is a separate thing**, owner ruling 7 September |

**Then the two patterns**, the bento and the section, composed from those.

**Build one at a time, drawn and reviewed before the next.** A set built quickly on 8 August was
deleted the same day for having no research behind it.

**A known duplication with an end.** Each concept page carries its own copy of the values,
because a page opened by double-click cannot load a stylesheet beside it. They will drift. The
fix is not to edit the pages: it is that when something serves them, they move onto the served
copy or are retired.

---

## Item 3. The tests

Three types: qualitative, quantitative, and AI persona testing of tone, warmth and word choice.
After there is a page to test.

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
