# Decision log

What was decided, when, by whom, and what reversed it.

Extracted 30 July 2026 from the review notes written into the two earlier draft pages, which
were the only place this history existed. Those pages were deleted the same day, once this
file existed, and are recoverable from git commit `3005e5f`.

This file records **history**. It is not a source of truth for what hurulab is: that is
`docs/design-rules/brand.md`. Where the two disagree, brand.md wins, because it is later and it
is sourced. Read this to find out why something was decided, not whether it still holds.

---

## Terms and ideas worth keeping

### Forward deployed engineer

BY brought the term back from Liang Lian on 29 July 2026.

> "It is Palantir's, now standard at OpenAI and Anthropic, and it names what we already do:
> someone senior goes to the client's floor and builds against their real data instead of
> shipping something generic. Borrowed credibility, no AI claim, and it came from the market
> rather than from a positioning document."

This is the strongest thing in the retired pages. It describes the working method without
making an AI claim, which matches the 30 July decision that AI does not lead. Unused so far.

### The hammer principle

Ed's, reaffirmed 21 July 2026. Referenced repeatedly in the review notes but never written down
in full anywhere. **Ed is the only person who can state it.** Worth asking him for the sentence
before it is lost entirely.

### Independence as the payoff

Cal's steer, 29 July: lead on teaching clients to use AI the way hurulab uses it, and frame the
payoff as independence, meaning the team keeps the system and the knowledge to change it. This
is the same idea as Riaan's "we make ourselves useless" reached from a different direction, and
it remains unproven for the same reason: no client has run alone.

---

## The seven service buckets

Ed's, endorsed 22 July 2026, taken from the internal board "How we approach the client". The
titles are Ed's, unchanged.

1. **Discovery and strategy.** Market and competitor research, positioning, modelling how the
   business would actually run.
2. **Brand and design.** Brand and identity, interface and experience design.
3. **Build.** Architecture, development, integrations with what the client already runs,
   testing, accessibility.
4. **Configuration.** Data and catalogue setup, localisation, multiple languages.
5. **Discoverability and analytics.** Search visibility in Google and in AI answers, analytics
   and tracking, product feeds.
6. **Launch and handover.** Hosting and the domain set up in the client's name, training and
   documentation.
7. **Ops and support.** Maintenance and fixes, small improvements, a response agreement.

Note recorded at the time: a published page was once showing **nine invented areas** with
sub-lists written for the site, which did not match Ed's seven. The site was describing a
different service model to the internal one. Two of the seven triggers were also internal notes
rather than client situations and needed rewriting, and both still need Ed's eye.

The four outcome cards, after Cal's 29 July pass: **You finish it yourselves. We finish it in
the room. We strengthen what you built. We build it in partnership with you.** These replaced
Ed's original three, Handover, Build and Finish. Ed has not confirmed the rename loses nothing
he meant, particularly on three and four, where the offer itself moved rather than the label.

---

## Decision #3, AI in the headline

The most reversed decision in the record.

| Date | Position |
|---|---|
| 8 July 2026 | AI does not lead. Decision #3 set. |
| 21 July 2026 | Ed reaffirms the hammer principle. Decision #3 holds. |
| 27 July 2026 | Argument against an AI-led claim recorded: the label is contested in Taiwan at SME volume and saturated in the West, so an AI-shaped claim expires fast. |
| 28 July 2026 | Position stated as: AI is the tool, we are expert in it, and it appears in one paragraph only, conceding the claim rather than making it. Decision #3 held. |
| 29 July 2026 | Cal's steer reverses it. The homepage leads on teaching clients to use AI. Recorded at the time as "a reversal of Decision #3, not a copy edit". Ed was to be told rather than shown. |
| 30 July 2026 | **Reversed back and settled.** AI does not lead, it explains. See section 6 of `docs/design-rules/brand.md`. |

The 29 July reversal was never taken to Ed. If the current decision is ever revisited, that is
the conversation that never happened.

---

## The platform rebuild claim

The strongest number in the record, and still soft. As it was written:

> "It took us two and a half years to build a complex financial technology platform before AI
> coding tools. Using the new tools we rebuilt and tested a simpler, more capable replacement
> in three months. We moved away from separate codebases supported by separate teams and
> platformed it onto a single codebase, so we need fewer developers to build it and to support
> it."

The caveat recorded beside it at the time, and still true: **two and a half years is a midpoint
between two figures given in the same session.** Ed ran the project, so the real number should
come from release history before this is said out loud.

---

## The paid day of discovery

A failure worth remembering, recorded in the review notes:

> "The previous draft sold a paid day and offered no way to buy one. No form, no email, no
> phone number, and 'Talk to us about a day' was a button that navigated to another article. A
> convinced reader had nowhere to go."

The 4 August 2026 meeting answered this in substance: the agreed sales process opens with a
free call, then a paid discovery scoped by the week. The record is `docs/evidence.md` part 5.

---

## Decided on 4 August 2026

- **The second team meeting**: the missing-layer positioning, the target audience, the sales
  process, and the coming-soon structure. The record is `docs/evidence.md` part 5.
- **Icons trail actions, never lead.** Owner. `layout.md` section 5.
- **Phosphor, regular weight, is the one icon set.** Owner. `icons.md`.
- **No max-width on text, ever.** Owner. Closes the 30 July measure question. `type.md`
  section 10.
- **English only reconfirmed** for the coming-soon page.
- **The coming-soon deliverable completed.** `PLAN_ARCHIVE.md`.
- **The type scale rebuilt on two ratios**, evening session: 1.2 at 360 rising to 1.3 at 1560,
  body 17px rising to 20px. Owner picked the middle of three researched candidates by eye,
  after ruling the 1.125 scale too timid for big headings. `breakpoints.md` sections 2 and 3,
  `type.md` sections 3 and 4.
- **Body text never below 17px at mobile.** Owner rule, matching Apple's body default.
- **The lede type role dropped.** Owner. There is no step 1 in the scale.
- **The 44px tap minimum adopted**, Apple's standard: anything interactive is at least 44px
  tall and wide at every width. `breakpoints.md` section 5.
- **Apple's continuous corner curve adopted** for every rounded corner, `corner-shape:
  squircle` with the circular corner as automatic fallback, pills exempt. `layout.md`
  section 3.
- **Warning color added**, reversing the 30 July rule that no amber existed until something
  could be destroyed. Three steps, same shape as success and error. `color.md` section 3.
- **The two-tone grey lightened** to `--neutral-500`, named `--color-text-soft`, large text
  only. `color.md` section 4, `type.md` section 9.
- **Foundations approved in the evening walkthrough**: breakpoints with plain names (mobile,
  tablet, desktop, desktop large, no sm/md/lg/xl in anything a person reads), spacing, color
  with the warning trio, type on the new scale, and icons with the real set shown.
- **The pill concept abolished.** Owner: "we won't have pills, we'll have buttons." The
  radius set was rejected as far too small; a full Apple-grade corner scale on the continuous
  curve is next session's first task. Until it lands, `layout.md` section 3 is known-stale on
  the pill wording.
- **Apple is the standard.** The owner directed that macOS, iOS, iPadOS and visionOS
  guidelines are the reference for spacing, motion, sound and the rest, with each conflict
  against existing rules brought to them one at a time.

---

## Decided on 5 August 2026

- **Kickers and eyebrows are banned.** The owner ruled during the mock-up session: the small
  letterspaced label sitting above a heading never appears again, on any surface. Labels
  inside a component (a step number beside its title, a table header) are unaffected.
- **"We make ourselves useless" is retired.** The owner ruled their own line outdated and
  wrong; it does not appear in copy again. Older records keep it as history only.
- **The live-demo sales step is disputed.** The owner rejected "we build a live demo of your
  problem" as not what hurulab does. The sales-process record in `docs/evidence.md` part 5
  says a demo session with a live demo built in parallel; the owner's ruling and that record
  now disagree, to be resolved with the team. Until then the claim stays off every page.
- **The mark's proportions corrected.** The owner ruled the asterisk too big and too far from
  the h as rendered on the coming-soon pages. New values, picked by eye from a comparison
  page: 1.3em, lifted 0.1em, closed up -0.04em, replacing 1.55em raised 0.24em. `logo.md`
  section 2 owns it; both coming-soon pages and the storybook updated.
- **The favicon is the asterisk alone.** The Geist 700 glyph extracted as a vector in
  purple-600, file of record `docs/design-rules/favicon.svg`, embedded as a data URI in the
  self-contained pages. The storybook gained a mark section showing the mark, casing and
  favicon. `logo.md` section 5 owns it.
- **The radius scale adopted.** Picked by eye from three candidate scales built from the
  archived Apple research. Tiles 2rem easing to 1.5rem at desktop, cards 1.5rem, panels
  concentric at the parent's radius minus the gap with a 0.75rem fallback, buttons, tags and
  single-line inputs capsules, checkboxes 0.35rem. Replaces the three-radius set rejected
  4 August; the pill wording is purged from the live rules. `layout.md` section 3 owns it.
- **The system says radius, never corner.** Owner ruling on the storybook wording: the
  section and the concept are named radius. Research nicknames like "the strictly Apple
  ladder" never appear in the rules or the storybook.
- **Explanatory icons lead; action icons trail.** Owner ruling while reworking the
  with-without page: an icon that explains content sits before the words; the 4 August
  trailing rule now applies to actions only. `icons.md`.
- **Brand color never marks a negative message.** Owner ruling, same session: the purple ramp
  is for hurulab's positive side; the without world renders in neutrals. `color.md` context,
  recorded here.
- **The site will use sound.** The owner, pointing to their own pro-360 sound research and
  its reference (Designing with Sound, Case and Day, O'Reilly 2018): sound hooks people and
  gives a better experience. Designed only against real screens once the demo website
  exists, verified by listening at real volume; doing nothing stays a real outcome per
  moment. New `sound.md` owns it. This supersedes the archived Apple research's
  ship-silent lean.
- **The token names approved.** Named by job, never by value: the semantic color tokens, the
  numbered spacing steps, the radius tokens named by the piece they round, the enter and exit
  curves. This naming becomes the tokens file when `build.md` is written.
- **The two-tone heading values confirmed by the owner:** the dark half is
  `--color-text-primary`, the lighter half is `--color-text-soft`, which stays `--neutral-500`.
  Neutral-400 was considered and rejected because it measures 2.36:1, under the 3:1
  large-text floor. The storybook sample had drifted to `--color-text-tertiary` and was
  corrected; the 4 August lightening ruling stands.
- **The system says logo, never mark.** Owner ruling: it is the logo, and the word part is
  the logotype. `mark.md` renamed to `logo.md`; the storybook section renamed; older records
  keep the old word as history.
- **Capsules take the C2 curve too.** The owner overruled the 4 August exemption for fully
  round shapes: every radius takes the continuous curve, no exceptions. `layout.md`
  section 3.
- **The motion system rebuilt on research.** Three research runs (Apple and Material's
  spring systems, the practitioner craft consensus, five design systems' motion tokens,
  archived in `.thoughts/motion-research-2026-08-05.md`) converged on fast arrivals, faster
  sharper exits and near-instant state changes; the owner picked the researched system
  against the old rules by eye on a looping side-by-side demo. New rules: enter
  `cubic-bezier(0.2, 0, 0, 1)`, exit `cubic-bezier(0.6, 0, 0.8, 0.6)`, durations 150, 250,
  160 and one 450ms brand tier, nothing above 450ms, stagger 60ms. The 620, 900 and 1100ms
  rungs are gone. `motion.md` owns it.
- **Buttons respond in color only, system-wide.** The owner's 5 August page ruling (no
  movement, no shadow on the button) is now the rule for every button. `motion.md`
  section 4.
- **The magnetic button retired.** The mark remains the one signature element allowed
  motion, still to be designed. `motion.md` section 5, `logo.md` section 4.
- **The short coming-soon page built** (`concepts/hurulab-coming-soon-short.html`): copy drawn
  from the team's own coming-soon documents with the owner line-editing by eye, one dark
  emphasis per screen, one sentence per line, hard scroll stops between screens, a brand-fill
  Book a Call on the continuous corner curve, and a closing question ("What does success look
  like for your business?") in place of "Coming soon". Cal still owns the final coming-soon
  wording per the meeting record.

---

## Decided on 6 August 2026

- **The logo mark was reopened, and nothing replaced it.** The owner asked to see alternatives
  to the typeface asterisk. Four rounds and 71 marks later, none was chosen and the owner
  called a halt to generating. `logo.md` is unchanged: the typeface's asterisk is still the
  logo. The exploration is in `concepts/logo-all.html` and `PLAN.md` carries the open thread.
- **The borrowed marks cannot be used.** All nineteen reference files the owner supplied were
  Noun Project downloads carrying that licensing, so none can ship whatever its merit. Closed
  in `PLAN_ARCHIVE.md`.
- **Two constraints on any future mark, set by the owner mid-session.** It must sit exactly
  where the asterisk sits, inline and raised against the h, and it must be able to carry
  motion, which means it needs separate parts. `logo.md` sections 2 and 4 already own both;
  this only records the day they were applied to candidate marks.
- **The asterisk's position is a measured value, not a judgment.** Read from the rendered glyph:
  at logotype size the ink runs 0.3438em to 0.9219em above the baseline. An inline replacement
  is therefore 0.5781em square at `vertical-align: 0.3438em`. Matching it by eye failed twice.

---

## Withdrawn on 30 July 2026

- **Three invented case studies** carried by the 29 July page, written to be plausible rather
  than drawn from real work.
- **The founding story** in which a pitch deck died in a room in Singapore. It came from a
  storytelling template, not from an event. See section 2 of `docs/design-rules/brand.md`.
- **A competitor list** naming Cloud Interactive and Appar. Neither appears in any source.
