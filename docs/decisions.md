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

## Decided on 8 August 2026

- **Atomic design is reversed. Three levels, not six.** The 4 August decision adopted Brad
  Frost's taxonomy, foundations, atoms, molecules, organisms, templates and pages, and
  `atomic.md` owned it. The owner replaced it with the three levels used by
  `/Users/riaan/Documents/Design Files/Code Projects/map-prototype`: **foundations, components,
  patterns**. `atomic.md` is deleted, `README.md` and `PLAN.md` are corrected, and the
  storybook's atoms, molecules, organisms, templates and pages sections become components and
  patterns. Recoverable from git.
- **No eyebrows and no kickers, anywhere.** A heading is never introduced by a small label
  above it. Rejected repeatedly by the owner but recorded only in a handoff, so it survived
  eight rebuilds of `concepts/proposal-b-the-fork.html` and six of them were still on the page.
  Now a hard rule in `copy.md` section 1, system-wide.
- **Dark mode stays in the design system.** The concepts are light only, which is a rule for
  those pages and not for the system. The dark tile in `layout.md` 4,
  `--color-surface-inverse`, and the dark-tile contrast table in `color.md` all stand.
- **One button, seven variants**, adopting the variant model from `map-prototype`:
  `button-primary`, `button-primary-icon`, `button-border`, `button-border-icon`,
  `button-ghost`, `button-icon` and `button-ghost-icon`. The two `-icon` variants are the
  owner's addition and carry a trailing icon after the label. A page never defines a button of
  its own. `layout.md` 5 owns the shape and the list, `color.md` 5 owns every state.
- **The primary button is the brand fill, not a dark fill.** purple-300 with near-black text,
  hover to purple-400, a response in color only. This is the button approved on the short
  coming-soon page, and it replaces the near-black primary the system had carried since
  31 July. `color.md` 5 is corrected.
- **The button's arrow circle is withdrawn.** The capsule with an accent circle carrying an
  arrow at its right end, and the asymmetric padding that held it, are both gone: it failed
  review three times. The bento tile footer's circular arrow is a different component and is
  untouched.
- **The enter easing token is `--ease`, not `--ease-enter`.** `motion.md` was the only file
  naming it `--ease-enter`; the tokens file, the storybook and both concept pages had all been
  using `--ease` since the system was built. The rule now matches what is in use.
- **The components and patterns built on 8 August were deleted the same day.** The owner's
  verdict: built without research, and named from nothing. "Controls" and "Composed" were
  invented categories that appear in no published system. Foundations were kept. Four research
  answers replaced them, in `docs/research/`, on IBM Carbon, Atlassian and Coinbase, plus one on
  motion, breakpoints, composition and writing. Polaris was dropped by the owner.
- **Three decisions the research could not make, ruled by the owner 8 August 2026:**
  - **States are documented per variant**, as Carbon does, not once per component. Every variant
    draws its own rest, hover, pressed, focus and disabled.
  - **The three levels stay**: foundations, components, patterns. Carbon's definition of a
    pattern governs, being the only published one of the three: a combination of components that
    cannot ship as a single piece of code.
  - **A label wraps, never truncates.** Carbon's rule over Atlassian's. The copy here is
    controlled and the layouts are bespoke, so truncation would only ever read as broken.

---

## Decided on 12 August 2026

- **The discovery process has two sources of truth until the CEO rules.** The 10 August
  meeting record, `docs/evidence.md` part 6, disagrees with `docs/funnel-pricing.md`
  (HL-SOP-2026-001 v1.1) in five places: the pricing model (about $3,000 per hour quoted by
  estimated team hours, against a fixed fee of 5 to 15% of build value), the duration
  (typically two to four weeks, against a fixed one to two), price flexibility (about 20%
  negotiable, against scope down never price down), what the client keeps (the deliverable
  "for the interim" with the full build held back, against everything from day one), and the
  live build demo (the meeting describes two calls, vetting then scoping, and never mentions
  building live). The owner's ruling: neither document is corrected until the CEO decides.
  This suspends, for the discovery pages, the rule that `funnel-pricing.md` always wins.
- **The proposal pages show both sources, meeting version first.** The newer meeting version
  is the main line, and the funnel-pricing version sits in an asterisk footnote on that
  screen, because the owner will demo the pages to the CEO and the two sources must both be
  visible. Refined later the same day from an earlier brackets wording, so the main line
  stays pure. **The marking never influences the visual design.**
- **The live build demo is flagged, not decided.** The pages show the two-call structure as
  the journey and mark the one-hour build-while-you-watch beat as the open contradiction.
- **The 90 day credit stays on the pages**, footnoted as not reconfirmed by the meeting.
- **The first proposal pair is superseded by a journey redesign.** Two new pages, built
  alongside the old pair, each with an entry hook and one beat per screen, modelled on the
  vellum onboarding flow, recorded in `docs/research/vellum-journey.md`, but drawn in
  hurulab's design system. The old files stay untouched in `concepts/`. The sixteen reference
  screenshots were deleted on 12 August once the pages were built, recoverable from git.
- **The journeys are click-through, never scroll.** The first rebuild walked the beats by
  scrolling and the owner rejected it on sight the same day. The reference's mechanism is
  the point: one screen at a time, advanced by a button, progress dashes at the top, a back
  arrow from the second screen. Only page A's path-and-pricing screen may scroll inside
  itself.
- **The reference's full treatment, ruled the same day** after vellum.ai was read directly
  and then re-observed live through the browser extension (`docs/research/vellum-journey.md`):
  first-person voice, full-bleed color bands, demonstration over description. The pages stay
  light: the reference's black closing band was rejected, keeping the 8 August light-only
  rule.
- **Three rulings from the same day's `/cto` inspection, before the band build:**
  - **The bands are white and deep brand purple with white text**, the owner's pick, and they
    are exploration: colored full-bleed screens exist nowhere in the system's rules, and the
    color rules gain a band role only if the result is approved.
  - **The mark, dashes and back arrow live in a white top bar**, the concept note in a white
    bottom bar, because `logo.md` forbids the logo on any colored field.
  - **No personality device.** The reference's peeking creatures translate to nothing: the
    asterisk is the logo, `logo.md` keeps the logo static until its motion is designed, and
    the owner chose restraint over amending that rule.
- **Page d gains the moat check and the cost reveal**, from a brief the owner supplied the
  same day. The brief was written for a different project and is now deleted, recoverable
  from git; what it decided is here. Four screens were added: the reader is asked what a
  competitor could not copy, their answer is echoed back on the next screen and again at the
  close, then the honest cost of building it themselves, then the two paths as ranges rather
  than figures.
  - **No answer may read as a rejection.** A consultancy exists partly to build the advantage
    a client does not have yet, so screening those clients out rejects the ones it helps
    most. The fourth answer, competing on price today, routes to finding the edge, never to
    a decline. No score is ever shown.
  - **The risk screen uses the warning tokens, never the error ones.** The tone is calm, not
    alarmist: a hard comparison reads as a sponsored message and costs a premium brand more
    than it wins.
  - **Never a single figure, always a visible range**, and the do-it-yourself path is
    respected, including that a simple idea may not need hurulab at all.
  - **The close hands the reader a summary carrying their own answer**, with the call under
    it rather than as the point of the screen. Without it the flow reads as lead capture.
    Missed in the first build and added the same day.
  - **The brief's own pricing never reaches a page.** Its tiers in New Taiwan dollars trace to
    `/Users/riaan/Desktop/hurulab/strategy/hurulab-brand-strategy.md`, one of the strategy
    documents `CLAUDE.md` excludes from evidence, and it cites no interview. Page figures come
    from `docs/funnel-pricing.md` or `docs/evidence.md` part 6. Its typefaces, colors, React
    and Traditional Chinese were all refused for the same reason: hurulab's own rules win.
- **Keyboard focus stays on the visible screen.** Both journey pages kept every hidden
  screen's buttons reachable by tab, so half of all tab presses landed on controls the reader
  could not see, and a screen reader read all ten screens as one page. Fixed on both.
- **One design branch, called `design`.** The per-task `design/<slug>` model is retired: the
  owner is not a developer, and a branch name that changed every session was something they
  had to read, could not act on, and twice mistook for being on the wrong branch. Everything
  merged into `main` the same day, ending a six-session drift where `main` sat forty commits
  behind. `experiment/<slug>` is unchanged for throwaway work.

---

## Decided on 13 August 2026

- **Page c shows no price.** Owner ruling, reversing the 12 August position that prices are
  shown with the meeting version first and the document version footnoted, for this page
  only. No figure, no price slot and no fee mechanic appears: the dashed placeholder, the
  US$3,000-per-hour and 5 to 15% footnotes, the Free markers and the 90 day credit line all
  leave the page. The sprint being fixed in price and fixed in length stays, as a property
  of the process rather than a price.
- **The path stops asserting after step 3.** Owner ruling, same day: the vetting call, the
  scoping session and the discovery sprint are shown as the path, and everything after them
  is presented as decisions the client makes, not as further rungs hurulab prescribes.
- **The two-tone heading's grey half is `--neutral-600`.** Owner ruling, same day, reversing
  the 4 August lightening to `--neutral-500`, which read too faint beside the base-black
  half. `type.md` section 9 and `color.md` section 4 are updated, and `--color-text-soft`
  now points at `--neutral-600` everywhere it is copied.
- **The scoring loop and the CEO demo leave the plan.** Owner instruction, 13 August: page d's
  score is not given and is no longer waited on, and the demo-to-the-CEO step is removed. The
  five contradictions between `docs/funnel-pricing.md` and `docs/evidence.md` part 6 stand
  unresolved, and neither document is corrected. The four concept pages stay in `concepts/`;
  the closed record is in `PLAN_ARCHIVE.md`.
- **The todo's headline 1 is struck.** Owner instruction, 13 August, given when work on the
  todo began: the line "You are about to spend serious money on technology and you dont want
  your money to go to waste" is ignored and leaves the plan. The website's hero has no set
  headline.
- **The website grows out of proposal-f.** Owner ruling, 13 August, asked where the website's
  hero, process and CTA get built: proposal-f, the logo-as-hero with the cycling value
  phrases, chosen over growing proposal-e and over a fresh page.
- **The plan reorders around the owner's todo list.** Same instruction: the items in `todo.md`
  at the project root come first, the design system and the tests move down, and the logo mark
  stays on hold. The todo's document sweep licenses reading the two meeting notes and the
  positioning document at the project root; the evidence rule still gates what any of them may
  claim about hurulab.
- **`docs/evidence.md` becomes the one central source of truth.** Owner instruction, 13 August,
  after the document sweep: the three root documents and the funnel document are combined into
  it, chosen over a new standalone file. Parts 8 to 11 were added: the funnel document
  condensed, the 12 August meeting in both records, the positioning recommendations, and the
  inconsistencies recorded as their own part rather than smoothed over.
- **The three absorbed originals are deleted.** Owner ruling, same day, following the
  10 August precedent: a second copy of a source drifts. They were untracked, so they are not
  recoverable from git; evidence.md parts 8 to 10 are the copy of record, and the 12 August
  transcript link is preserved in part 9.

## Decided on 17 August 2026

- **The logomark meaning round moved off the asterisk.** Owner ruling: the five meaning
  proposals drawn 13 August were rejected for all wearing the asterisk silhouette, and the
  follow-up round of five distinct shapes was rejected three to two (three into one, the gate
  and the full stop cut; three overlapping and the lead tile kept). The owner asked for at
  least ten proposals, grounded in the design rules, the vellum references and the evidence.
- **Twelve marks were drawn, then cut to seven by critique, owner ruling "fix and retest".**
  The five cut read as app icons rather than logos: numbers forward, the handover arrow, the
  three steps, the receipt, the center holds. The seven kept were redrawn to survive one ink
  with no opacity tints, and `concepts/logo-meaning.html` now tests every mark on dark, at
  button size and at favicon size. The storyteller and stop-slop passes behind the meanings
  are recorded in `.thoughts/logo-story.md`. No mark is chosen; the typeface asterisk stands
  per `logo.md`.
- **The logomark's meaning is ruled on.** Owner verdicts on the four meanings in
  `docs/research/logo-meaning.md`, in their words: "one team that understands your business
  before it builds" is okay; "use it before you pay for it" is completely wrong for the
  mark; "evidence over trust" is not really correct; "the honest stop" is fine. The ruling
  is about the logo only and changes nothing in `brand.md`.
- **The website process section was reworked twice, owner verdicts.** The 13 August three-step
  list was rejected (layout and look, with the vellum screenshots supplied as the manner
  wanted); a one-step-per-screen staging was rejected the same day as bad design; the section
  now stands as one connected path on the dark ground, unjudged. The hero's flipping line was
  fixed to yield size on narrow screens, closing the phone overflow found by the layout check.

## Decided on 4 September 2026

- **Every logo mark in this project is wrong, and the logo is blocked.** Owner statement:
  "Currently this entire project has the wrong logo, okay? The developer has the correct logo."
  Found while auditing: `logo.md` section 2 draws a six-arm mark, `favicon.svg` draws a
  different eight-point mark, and `logo.md` section 5 claims they are the same path. The
  owner's ruling settles it by rejecting both. `site/index.html` still sets the typeface
  asterisk with the `1.3em` and `0.1em` values section 2 withdrew, and it was left untouched
  rather than corrected to a mark that is also wrong. **No page is corrected and no mark is
  drawn until the developer's file is in the repository**, at which point `logo.md`,
  `favicon.svg` and the pages are rebuilt from it together.
- **The project has a remote, and there are no Pull Requests.** `RiaanMOHA/hurulab` on
  GitHub, private, `main` the default branch, pushed 4 September 2026 with the whole history.
  `CLAUDE.md` had anticipated that adding a remote would make the Pull Request the handoff;
  the owner ruled against it, because they work alone on `design` and a review step would be
  them approving their own work. Push is the save.
- **The Desktop corpus is deleted, and this repository is the only copy.** The owner deleted
  `/Users/riaan/Desktop/hurulab` on 4 September 2026 once the push was verified, 162 files on
  both sides. Everything came across except the 96 vellum reference screenshots, left out by
  owner ruling as reference material for a page that no longer exists. **There is no longer an
  archive of record**, which every earlier rule in `CLAUDE.md` assumed there was.
- **Client confidential material is in the repository, marked, at
  `knowledge/clients-confidential/`.** Owner instruction, reversing the earlier ruling to keep
  it out, because deleting the Desktop folder would have destroyed it: "copy it in but make it
  clear that this is confidential information." Every file carries a banner and the folder has
  its own README. The control is who is invited to the repository, and there is none inside it.
- **The website is deleted.** Owner ruling: "we're not making, I'm not at the stage of making
  website already, we're testing concepts, why the fuck do I have this". `site/index.html` is
  removed. It was grown out of proposal-f by the 13 August ruling and carried the 17 August
  hero and process verdicts; all of that history stays here and in `PLAN_ARCHIVE.md`, and the
  file is recoverable from git. **No website work is on the plan.** When one is built again it
  starts from an approved concept, not from that page.
- **The banned word list stays as `copy.md` has it.** Owner ruling. The 5 July strategy
  document banned three terms `copy.md` does not carry: "weeks not months", "ship as a flex"
  and "world-class". Asked whether to reinstate the first two, the owner ruled leave them out,
  so `copy.md`'s nine terms are the whole list and "weeks not months" is permitted.
- **The gap between the settled promise and the live site is recorded, not closed.** Owner
  ruling: "not now, just record it". `brand.md` section 7 settles "use it before you pay for
  it", the only claim `docs/evidence.md` part 4 confirms unoccupied in Taiwan, and
  `site/index.html` never says it, leading on "buying solutions you cannot judge is a gamble"
  instead. Both stand as they are. The disagreement is item 9 of
  `knowledge/contradictions.md`.
- **hurulab is not part of MoreHarvest.** Owner ruling, given while consolidating the Desktop
  corpus into `knowledge/`. They are separate companies and MoreHarvest is a client. The
  corpus says otherwise in several places: the 6 July meeting is titled "building the
  MoreHarvest agency brand from scratch", the 10 August discovery record says Moreharvest
  throughout and never says hurulab, and a MoreHarvest profile deck lists "HuruLab Inc." as
  its in-house software team. The consequence is recorded in `knowledge/contradictions.md`:
  four of the five project write-ups are MoreHarvest's own internal work, and whether any of
  it can be presented as hurulab's client work is a separate question, still unanswered.
- **A class names its component first, then its variant.** Owner ruling: "it always
  button-icon + button-primary, like that, component-state". `icon-button` and
  `icon-button-ghost` become `button-icon` and `button-icon-ghost`, ending a disagreement
  where `color.md` and `layout.md` gave two different names for the same control.
- **The whole Desktop corpus is copied into the project at `knowledge/`.** Owner instruction,
  reversing the standing rule in `CLAUDE.md` that no copy is kept because a second copy
  drifts. The reason is that the research has to be shareable with the team in one repository.
  The controls: `knowledge/` is history and never truth, `docs/` wins every disagreement, and
  nothing on a page may cite it. Client confidential material stays out; the cold-outreach
  list goes in, owner ruling.

---

## Decided on 3 September 2026

- **The two concept pages were rebuilt on the live site's own identity.** Owner instruction to
  update both "following" the two color proposals, restated verbatim when asked what following
  meant. The fonts and mark were found to be wrong in both: Geist and IBM Plex Sans replaced by
  **Fustat (body) and Cascadia Mono (titles)**, and the six-path asterisk replaced by the
  **single-path mark**, both taken from the brand experiments bundle at
  `brandexperiments.apps.hurulab.com`. Backgrounds are one flat `--n-50` per page, owner
  ruling: "both light both the lowest neutral as bg-color". The scroll-driven color cycling
  was removed on owner instruction.
- **Buttons are Title Case with the article capitalized.** Owner instruction, "make it Book A
  Call", giving `Book A Call` and `Book A 30 Min Call`. This is against `copy.md` section 2,
  which keeps articles lowercase in Title Case. Recorded as the owner's ruling; `copy.md` is
  not yet edited.
- **The hero flip was kept and sped up.** The FLIP slide from the tab-select recipe was built
  and rejected the same session ("I want a flipping text animation"), so the rolodex rotation
  stands, retimed to 150ms with a 1.6s hold.
- **Beat 5 of the coming-soon page was replaced.** The owner ruled "we make ourselves useless"
  **forbidden** per `brand.md` section 11. It now carries the haramizu fact from `brand.md`
  section 10: a landing page live in about twenty days that the client maintains in-house.
  Beat 3 was flipped to the client's side per `copy.md` section 5.
- **Two invented rotating roles were removed from proposal-f.** "Edge" and "direct channel" had
  no source. All six roles now trace to `docs/evidence.md` part 10.
- **Invented pricing is permitted on the cost concept, owner instruction.** Asked twice and
  confirmed: "make up numbers (the rules are stale now)", in TWD. This overrides the absolute
  ban in `copy.md` section 4 and `brand.md` section 11 **for that page only**; neither file is
  edited and the ban stands everywhere else. Every figure on the page is labelled a placeholder
  and the page states it is not a quote.
- **The cost demo is not rigged.** The owner asked that hurulab "always ends up being more cost
  efficient"; the built page instead runs honest math on the slider inputs, and 4 of its 16
  settings tell the visitor to skip discovery. Recorded as a disagreement, not a ruling: the
  owner has not yet said whether to force the outcome.
- **A mono for numbers was researched and not chosen.** 51 Google monospace families filtered to
  32, measured in-browser against Fustat and Cascadia Mono. DM Mono recommended on metrics
  (cap height identical to Fustat, x-height within 0.8 per cent). Adopting any of them breaks
  `type.md` section 1, "two faces, no more, no mono", so it needs an owner ruling and an edit
  to that file. Nothing applied.
- **The typography and logo rules were corrected to match the deployed site.** The rule files
  named Geist and IBM Plex Sans and a typeface-asterisk mark; the running site at
  `brandexperiments.apps.hurulab.com` uses **Fustat and Cascadia Mono** and a **drawn six-arm
  mark cut as one path**. Reading the stale files had already produced the wrong fonts and the
  wrong mark on two concept pages. `type.md` section 2, `logo.md` sections 1, 2, 4 and 5,
  `css/tokens.css`, `README.md` and `brand.md` now carry the deployed values, and
  `--font-heading` is renamed `--font-title`. The superseded asterisk geometry is withdrawn.
  No new choice was made here: the deployed identity was recorded as the identity of record.
- **Both interactive concepts were cut back for length, owner verdict.** "Too much copy and too
  much AI slop", with `proposal-f.html` and `hurulab-coming-soon-short.html` named as the
  standard: as little text as possible. Removed from `proposal-g-the-cost.html` and
  `proposal-h-the-box.html`: both hero subtitles, both closing explanatory notes, and the six
  card bullets on the cost page, which became one line each. Slider labels, the verdict and the
  week's four day-lines were cut to single clauses. **The disclaimer note was removed on owner
  instruction**, so the cost page no longer states on its face that the figures are
  placeholders; the pricing permission of 3 September is unchanged and still covers the page.
- **Every call to action reads "Book a Call".** Owner instruction, repeated: it applies to all
  buttons everywhere, not only to the page being discussed. It replaces "Book A Call", "Book A
  30 Min Call" and the "Book a 20 Min Call" that `copy.md` and `layout.md` had been teaching as
  the Title Case example. `copy.md` section 2 is unchanged in substance, since the article stays
  lowercase either way. Applied to `proposal-f.html`, `hurulab-coming-soon-short.html`, both
  interactive concepts, `copy.md` and `layout.md`. **No minute count appears on a button.**
- **The cost figures now animate.** The owner's "the animation is too jagged" was ruled against a
  page whose numbers snapped between values. They now ease over 250ms on the project's curve,
  with tabular figures so the width does not jitter, and hold still under reduced motion.
- **The button label rolls on hover, and the no-movement rule is withdrawn.** Owner instruction,
  applied to all four concept pages. Two stacked copies of the label shift by one line on hover
  or focus, from the Motion UI extraction in `new-motions/rollingtextbutton.md`. This reverses
  the 5 August ruling in `motion.md` section 4 that a button moves in color alone, which is
  edited rather than annotated. The spec's motion is a spring; CSS uses the fallback the spec
  itself gives, `300ms` on `cubic-bezier(0.22, 1, 0.36, 1)`, inside the `450ms` ceiling.
- **Each page took a different motion, owner decisions one page at a time.**
  - **The cost page: an odometer.** Each digit is a column of 0 to 9 that rolls to its value,
    replacing the plain count-up, from `motionstatssections.md` A6.
  - **The coming-soon page: the spotlight.** A beat's opacity is now a continuous function of
    its distance from the middle of the screen, brightening as it arrives and dimming as it
    leaves, replacing the hard on-off swap, from `scrollspotlight.md` 5.1. Because the beats
    are stacked at one point, only the nearest paints.
  - **The roles page: an arrival.** The lockup, heading, sentence and button come up in 60ms
    steps when the page opens. The rolodex flip is untouched.
  - **The box page: the existing reveal retimed.** The day lines travel 2rem rather than 12px
    on the spec's curve, and the echoed sentence now arrives with them.
- **Coverflow and the border beam were not built.** Coverflow needs a set of cards that does not
  exist on these pages yet. The border beam would mark the hurulab card, and it loops forever,
  which `motion.md` section 6 permits only for three named slow loops; it stays unruled.
- **The stagger step stays 60ms, against the source.** `motionstatssections.md` uses 120ms
  between children. `motion.md` section 3 owns the stagger for this project and says 60ms, so
  the project's own value wins wherever the two disagree.
- **The box page now answers what, how and why.** Owner finding: the page showed a week of
  activity without saying what hurulab sells or why to choose it. Added a subtitle carrying the
  claim all five interviews make ("business, design and technology in one team", `brand.md`
  section 3) and the mechanism, and a closing block of three delivery records from `brand.md`
  section 10: twelve days to two brand directions for jadegia, about twenty days to the
  haramizu landing page the client now maintains, nine days for the kozue site. **Each is a
  delivery record, and the page says so**, because section 11 forbids claiming a measured
  client outcome and no analytics exist on any client site. No client is named on the page.
- **The design audit method was run across all five pages.** Owner instruction, using
  `new-20260828/design-audit-copy-and-flows`. Its principle 6, a hand-written user story then an
  enumerated edge-case pass, is the part this project lacked; the result is
  `docs/research/user-story-and-edges.md`, with 25 cases checked in a browser rather than
  asserted. Its principle 3, that looks come second, was not adopted: `docs/design-rules/` already
  owns craft and the method's own cited counterpoint says aesthetics carry perceived trust.
- **Two invented roles were still live on the site and are now removed.** `site/index.html`
  carried "edge" and "direct channel" in both the rotating list and the screen-reader line, three
  weeks after the same two were struck from `proposal-f.html` on 3 September. The site now
  carries the same six sourced roles. Its two buttons also still read "Book a 30 minute call" and
  now read "Book a Call".
- **The audit's three questions were all ruled on the same day.**
  - **The call buttons stay `href="#"`.** These are concepts, not a live site. The question
    returns when the site is real.
  - **The box page can now say no.** Owner ruling. When a sentence names something hurulab does
    not do and matches none of the eight topics, the page declines and offers the call anyway,
    per `brand.md` section 11. Both conditions are required, so a dog food company with a broken
    checkout still gets the week.
  - **The box page is English only.** Owner ruling, in their words. It now detects Chinese
    characters and says the demo reads English, adding that the call itself can be in Chinese.
    Previously it answered a Taiwan visitor with a generic week and no sign it had not
    understood.

---

## Withdrawn on 30 July 2026

- **Three invented case studies** carried by the 29 July page, written to be plausible rather
  than drawn from real work.
- **The founding story** in which a pitch deck died in a room in Singapore. It came from a
  storytelling template, not from an event. See section 2 of `docs/design-rules/brand.md`.
- **A competitor list** naming Cloud Interactive and Appar. Neither appears in any source.
