# Decision log

What was decided, when, by whom, and what reversed it.

Extracted 30 July 2026 from the review notes written into the two earlier draft pages, which
were the only place this history existed. Those pages were deleted the same day, once this
file existed, and are recoverable from git commit `3005e5f`.

This file records **history**. It is not a source of truth for what hurulab is: that is
`docs/brand.md`. Where the two disagree, brand.md wins, because it is later and it
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
| 30 July 2026 | **Reversed back and settled.** AI does not lead, it explains. See section 6 of `docs/brand.md`. |

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
- **The coming-soon deliverable completed.** `.plans/PLAN_ARCHIVE.md`.
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
- **The two-tone gray lightened** to `--neutral-500`, named `--color-text-soft`, large text
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

- **The logo mark was reopened, and nothing replaced it.** The owner asked for alternatives to
  the typeface asterisk. Four rounds and 71 marks later, none was chosen and the owner called a
  halt. Two constraints came out of it, both now owned by `logo.md`: the mark sits where the
  asterisk sat, and it needs separate parts if it is ever to move. The nineteen reference marks
  the owner supplied could not be used at all, being Noun Project downloads.
- **All of this is superseded.** `logo.md` settled the drawn six-arm mark on 3 September, and
  the owner dropped logo work entirely on 7 September 2026. Kept only so the rounds are not
  re-run.

---

## Decided on 8 August 2026

- **Atomic design is reversed. Three levels, not six.** The 4 August decision adopted Brad
  Frost's taxonomy, foundations, atoms, molecules, organisms, templates and pages, and
  `atomic.md` owned it. The owner replaced it with the three levels used by
  `/Users/riaan/Documents/Design Files/Code Projects/map-prototype`: **foundations, components,
  patterns**. `atomic.md` is deleted, `README.md` and `.plans/PLAN.md` are corrected, and the
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
  meeting record, `docs/evidence.md` part 6, disagrees with `docs/pricing.md` part 1
  (HL-SOP-2026-001 v1.1) in five places: the pricing model (about $3,000 per hour quoted by
  estimated team hours, against a fixed fee of 5 to 15% of build value), the duration
  (typically two to four weeks, against a fixed one to two), price flexibility (about 20%
  negotiable, against scope down never price down), what the client keeps (the deliverable
  "for the interim" with the full build held back, against everything from day one), and the
  live build demo (the meeting describes two calls, vetting then scoping, and never mentions
  building live). The owner's ruling: neither document is corrected until the CEO decides.
  This suspends, for the discovery pages, the rule that the pricing document always wins.
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
    from `docs/pricing.md` part 1 or `docs/evidence.md` part 6. Its typefaces, colors, React
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
- **The two-tone heading's gray half is `--neutral-600`.** Owner ruling, same day, reversing
  the 4 August lightening to `--neutral-500`, which read too faint beside the base-black
  half. `type.md` section 9 and `color.md` section 4 are updated, and `--color-text-soft`
  now points at `--neutral-600` everywhere it is copied.
- **The scoring loop and the CEO demo leave the plan.** Owner instruction, 13 August: page d's
  score is not given and is no longer waited on, and the demo-to-the-CEO step is removed. The
  five contradictions between `docs/pricing.md` part 1 and `docs/evidence.md` part 6 stand
  unresolved, and neither document is corrected. The four concept pages stay in `concepts/`;
  the closed record is in `.plans/PLAN_ARCHIVE.md`.
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

- **Three rounds of logomark proposals, and no mark chosen.** The five meaning proposals of
  13 August were rejected for all wearing the asterisk silhouette; a round of five distinct
  shapes was cut three to two; twelve more were drawn and cut to seven by critique, the five
  removed reading as app icons rather than logos. **All of it is superseded**: `logo.md`
  settled the drawn six-arm mark on 3 September, and logo work was dropped on 7 September 2026.
- **The one part of that round that was not about the logo** is the finding that a mark takes
  its meaning from the quality of what it represents rather than the other way around. It is
  now `brand.md` section 15a.
- **The website process section was reworked twice, owner verdicts.** The 13 August three-step
  list was rejected on layout and look; a one-step-per-screen staging was rejected the same day
  as bad design; the section stood as one connected path on the dark ground, unjudged. The
  page was deleted on 4 September.

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
  Beat 3 was flipped to the client's side per `copy.md` section 5, which is section 6, Voice,
  since the 7 September renumber.
- **Two invented rotating roles were removed from proposal-f.** "Edge" and "direct channel" had
  no source. All six roles now trace to `docs/evidence.md` part 10.
- **Invented pricing was permitted on the cost concept, and that permission is closed.** Owner
  instruction, asked twice and confirmed: "make up numbers (the rules are stale now)", in TWD.
  It overrode the ban in `copy.md` section 4 and `brand.md` section 11 **for that one page**.
  **The page was dropped on 7 September 2026, so the exemption applies to nothing.** The ban on
  invented pricing is absolute again.
- **The cost demo is not rigged. Moot since 7 September 2026.** The owner asked that hurulab
  "always ends up being more cost efficient"; the built page instead ran honest math, and 4 of
  its 16 settings told the visitor to skip discovery. It was recorded as an open disagreement.
  **The page was dropped, so there is nothing to settle**, though the underlying question, what
  a page does when the honest answer favours the visitor, returns whenever one is built.
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
- **Client confidential material was copied into the repository, and has since been deleted.**
  Owner instruction on 4 September, reversing the earlier ruling to keep it out, because
  deleting the Desktop folder would have destroyed it: "copy it in but make it clear that this
  is confidential information." **Reversed 7 September 2026**: the owner ruled it no longer
  useful and it was deleted. It was gitignored and never committed, so **it is not recoverable
  from git and no copy exists.** There is no confidential client material in this repository.
- **The website is deleted.** Owner ruling: "we're not making, I'm not at the stage of making
  website already, we're testing concepts, why the fuck do I have this". `site/index.html` is
  removed. It was grown out of proposal-f by the 13 August ruling and carried the 17 August
  hero and process verdicts; all of that history stays here and in `.plans/PLAN_ARCHIVE.md`, and the
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
  instead. Both stand as they are. It was settled on 7 September 2026: the promise is withdrawn and `brand.md` section 7 carries the replacement.
- **hurulab is not part of MoreHarvest.** Owner ruling, given while consolidating the Desktop
  corpus into `knowledge/`. They are separate companies and MoreHarvest is a client. The
  corpus says otherwise in several places: the 6 July meeting is titled "building the
  MoreHarvest agency brand from scratch", the 10 August discovery record says Moreharvest
  throughout and never says hurulab, and a MoreHarvest profile deck lists "HuruLab Inc." as
  its in-house software team. The consequence, settled 7 September 2026:
  four of the five project write-ups are MoreHarvest's own internal work, and whether any of
  it can be presented as hurulab's client work is a separate question, still unanswered.
- **A class names its component first, then its variant.** Owner ruling: "it always
  button-icon + button-primary, like that, component-state". `icon-button` and
  `icon-button-ghost` become `button-icon` and `button-icon-ghost`, ending a disagreement
  where `color.md` and `layout.md` gave two different names for the same control.
- **The whole Desktop corpus was copied into the project at `knowledge/`, and that folder has
  since been deleted.** Owner instruction on 4 September, reversing the standing rule that no
  copy is kept because a second copy drifts, so the research could be shared with the team.
  **Reversed 7 September 2026**: every file in it was read, what was worth keeping was moved
  into `docs/` and the folder was deleted. Recoverable from git.
- **Three of the four CEO pages are deleted.** Owner ruling, in their words: "These are dog
  shit. Delete them." Recoverable from git; their text sources are in `docs/ceo-concepts.md`.
  **This cost the color ruling its instrument**: the two flywheels were the same argument in
  Harmattan and Purple Light, and comparing them side by side was how the color question was to
  be settled. That comparison has to be rebuilt on something else.
- **A page carries two tones, and the brand color appears once.** Owner ruling:
  `--neutral-950` and `--neutral-800` are the two tones, and the brand color goes on the single
  most important word or call to action, nowhere else. Recorded here because it was given as a
  correction to a page that used the brand color as a general accent.
- **The CEO pages were scored and then dropped entirely.** The flywheel rebuild was ruled
  1 out of 10 across three attempts, the second having added eight motion patterns at once:
  "too much in too much motion". The espresso bar page was redrawn from its text source and
  scored 4 out of 10, carrying the whole document as an experience in 428 words. **All of it
  was dropped on 7 September 2026.** The faults named on the way are conditions on any future
  page and are in `.plans/PLAN.md`.
- **A fifth CEO source is recorded**, "verified capability, rented out as an asset", pasted by
  the owner and never drawn. It carries positioning `brand.md` does not have: the phrase
  itself, the GT-OS two-layer architecture and the seven-step engagement. Not approved. It is
  in `docs/ceo-concepts.md`.

---

## Decided on 10 September 2026

- **The discovery concept is dropped.** Owner ruling on both remaining versions: "all suck,
  delete all". Deleted; recoverable from git at `7178e78`. This closes the meeting action item
  "build visual steps for the discovery process" with nothing built against it.
- **The landing page moves to the end of the plan**, after the five todo issues and the archiving of the two color proposals. Owner instruction.
- **Five issues from the owner's todo list are on the plan**: document the dual-tone heading
  rule, replace the logo with the asset in `logo/`, rename a label to "Contact Us", set
  brand-secondary from a supplied image, and set all numbers in Cascadia Mono. **The last two
  change 7 September rulings**: the logo was settled, and numbers took DM Mono.
- **The hero spacing item is dropped.** It was written on 7 September as the owner's remark on
  first look, but their words were never recorded and on 10 September they did not recognize
  it. A plan item without the owner's words behind it does not survive.
- **Headings are dual-tone**, at every level, as their normal form. Owner instruction. The
  one-per-viewport limit from 7 September is withdrawn as a consequence. `type.md` section 9.
- **The logo is the owner's own asset in `logo/`.** Owner instruction, superseding the
  7 September ruling that the logo was the six-spoke mark drawn in the concept pages, and the
  3 September rule that the logotype was set in the title face: the wordmark is now drawn.
  Still static. `logo.md` was rewritten and `favicon.svg` replaced.
- **The primary call to action reads "Contact Us"**, replacing "Book a Call". Owner
  instruction, identified from the button image they supplied.
- **The marigold ramp is the secondary color ramp, and Low sun is its default**,
  `oklch(0.858 0.140 66)`, sampled by the owner and supplied as `secondary-base.jpg`. Owner
  ruling, correcting a first pass that had added Low sun as a fourth token beside the ramp.
  Hover drops to Marigold and pressed to Ember, the one step that holds 3:1 as an outline on
  the page. The identity page's semantic names moved from "accent" to "secondary" and its two
  ramp headings read "Purple, the brand ramp" and "Marigold, secondary color-ramp", the
  owner's words. `color.md` still says "never a second accent" and was not reopened.
- **Numbers are set in Cascadia Mono**, reversing the 7 September ruling that took DM Mono
  from proposal 1 for numbers. Owner instruction. `type.md` section 2.
- **The two color proposals are archived**, deleted from `concepts/` on the owner's
  instruction, recoverable from git at `7178e78`. `PLAN_ARCHIVE.md` carries what each settled.

---

## Decided on 7 September 2026

- **There is no free live demo, and nothing is given before payment.** Owner ruling, restating
  5 August. **The second half was withdrawn later the same day**, when the discovery steps
  arrived: see the meeting section below. The free live demo stays dead; "nothing is given
  before payment" does not survive. This kills stage S1 of the CEO's funnel, the sixty-minute live build, which is
  struck in `docs/pricing.md` part 1 and reproduced only as a record. It also kills the
  site-as-demo: `brand.md` section 7's "the visitor uses something real on the page" is
  withdrawn. Every draft message in `docs/outreach.md` offers a free demo and is marked unusable
  until rewritten.
- **The single idea is replaced, in the owner's own words.** "At hurulab, we know AI. Let us sit
  with you for 1-2 weeks to see how you work. We'll help you understand how AI can relieve your
  biggest headaches. If you like what we find, we'll build it. And if you don't need AI, we'll
  tell you that, too." It is live landing page copy and the settled positioning. It replaces
  "use it before you pay for it", withdrawn the same day. `brand.md` section 7.
- **"We know AI" may open a page, and AI still does not lead.** Owner ruling on the apparent
  conflict with section 6: a statement of competence is not an AI-led promise. hurulab may say
  it knows AI and may not sell AI as the outcome.
- **The two-tone heading is `--neutral-950` and `--neutral-600`, both at weight 700.** Owner
  ruling, reversing the 4 September pairing of 950 and 800, which put the halves so close the
  difference stopped reading, and reinstating the 13 August value. **The 300 weight exception
  is withdrawn with it**: `type.md` now has four weights and no exceptions.
- **The card stays.** Owner ruling, reversing the 8 August research conclusion that there
  should be no card. A card grid holds equivalent things; a bento holds unequal things.
  `components.md` section 3.
- **The logo is settled and dropped.** The six-arm mark already drawn in `concepts/` is the
  logo, `favicon.svg` was corrected to match it, and no motion is being designed. The 4 September
  "every mark is wrong" block is closed.
- **The storybook is out.** `storybook.html`, the stories, the Storybook tool, `package.json`
  and `css/tokens.css` are all deleted: nothing loaded the tokens file and there was no
  storybook. `build.md` sections 2 and 4 are rewritten around their absence.
- **`docs/design-rules/` holds design and nothing else.** Owner instruction. `brand.md` and
  `visitor.md` moved up to `docs/`.
- **The five open positioning questions are answered**, closing `docs/decisions.md`:
  - **The emotional core**: the single idea above, not one of the three lettered options.
  - **Home or international**: home first, international as the follow-on.
  - **The growth engine**: both. Retained clients for steady income, referrals for growth.
    This removes half of contradiction 2, since subscription no longer contradicts the
    positioning; the published "no subscriptions" copy is now wrong.
  - **The north star metric**: an agreed and signed statement of work.
  - **The enterprise ambition**: keep it quiet until something ships under the hurulab name.
- **All five discovery contradictions are settled**, ending a disagreement open since
  12 August that had been waiting on the CEO. Owner rulings: **priced by the hour**, about
  $3,000 per hour from estimated team hours; **one to two weeks**, matching the landing page;
  **the client keeps everything from day one**, killing the 10 August "for the interim"
  wording; **there is no live build demo**; and **the price is not negotiable, the scope comes
  down instead**, taking the CEO's rule over the meeting's 20%. The first two are provisional
  and the owner will confirm them next session. The current statement is the table at the top
  of `docs/pricing.md`.
- **hurulab may present the MoreHarvest work as its own.** Owner ruling: it is the same people
  who did it. This answers the question left open on 4 September and unblocks
  `docs/case-studies/` and the drafts in `docs/outreach.md`. **It settles attribution, not
  proof**: `brand.md` section 11 still forbids claiming a measured outcome, and there are no
  analytics on any client site. A badge or certification issued to MoreHarvest as a legal
  entity is a separate question and stays open.
- **The client is any company with a real goal, Taiwan first.** Owner ruling, ending a
  disagreement where six sources named six different buyers. No filter by size or industry; the
  market sequence stays Taiwan then APAC, matching the Q2 answer the same day. The narrower
  cuts, family businesses and owner-led offline sellers, describe who turns up rather than who
  qualifies. `brand.md` section 5.
- **The team size is never stated.** Owner ruling: "a small team" and nothing more precise, in
  either direction. This kills the one-person framing in the deleted July strategy documents
  and any claim about developer payroll. It closes contradiction 5.
- **Ed is not being interviewed and nothing is provisional.** Owner ruling, closing the item
  open since July. Every document that called its conclusions provisional pending the CTO's
  input was deleted on 7 September. **The hammer principle is lost with it**: it was never
  written down in full and he is the only person who could state it.
- **Delta is ignored.** Owner ruling. The name appears once, in the CEO's funnel document, as
  one of two operators, and nowhere else in the corpus. Removed from `who-and-what.md`.
- **There is no Chinese name.** Owner ruling: hurulab in every language. The August coming-soon
  page had shipped 胡了 as the hero wordmark against a brief that called the Chinese name
  undecided; it is not adopted.
- **The category is consultancy, and the owner says it is more than that.** The 30 July decision
  stands as far as it goes; the fuller definition is coming next session. The note that Henry
  and BY had not been told is removed: that was a task, not a rule.
- **American spelling, in replies as well as in files.** Owner correction, repeated. Written
  into `copy.md` section 2a and `CLAUDE.md`.

### From the team meeting, 7 September 2026

Source: the meeting record and two files supplied by the owner the same day, read in full.

- **The discovery steps are the source of truth for the process.** Owner ruling. Seven steps:
  a 30-minute first call with the person closest to the problem and deliberately not the
  decision maker; hurulab builds a pack, being the problem in hurulab's words, a goal statement
  and visual proof; a one-hour session presenting it; then spec, size and quote. If that is
  accepted the paid discovery begins: detailed scope and setup, the sprint against one
  well-defined problem, and a closing day walking the decision maker through everything built.
  This answers item 1 of what the owner was to supply.
- **"Nothing is given before payment" is withdrawn.** Owner ruling, later the same day, when
  the conflict was put to them: steps 1 to 4 are unpaid and step 2 hands over a pack, and the
  steps are the source of truth. The rule is deleted rather than narrowed.
- **What that rule killed stays killed.** Asked whether the site-as-demo came back once its
  only stated reason was gone, the owner ruled: follow the 7 September rule. The free live
  demo in outreach and the site-as-demo in `brand.md` section 7 both stay withdrawn.
- **The category is a consulting pipeline, discovery first.** Owner instruction to answer it
  from the 7 September material rather than ask again. The meeting record's own words: "discovery
  is not a standalone product; it's the first module of the consulting pipeline. Subsequent
  phases (design, implementation, architecture, support) depend on its outcome." That is the
  "more" beyond consultancy. It closes the item open since 30 July.
- **One to two weeks is confirmed.** Stated three times in the 7 September material: the hero
  subtitle, the discovery service copy, and the meeting's framing of the sprint.
- **How discovery is priced stays a placeholder.** Nothing in the 7 September material names a
  rate or a pricing model. It is not provisional-pending-confirmation any more; it is simply
  unanswered, and no page states it.
- **Discovery is not a standalone product.** It is the first module of the consulting pipeline,
  and design, implementation, architecture and support depend on its outcome. Framed as
  "before you build, before you commit time and money".
- **"Discovery" is the working name, not "Espresso Bar".** It carries a double meaning:
  discovery for hurulab and discovery for the client. The espresso bar survives as a worked
  example on the landing page, not as a brand metaphor.
- **The landing page file supplied 7 September is the confirmed content for now.** Owner
  ruling. Four sections: hero with a rotating "Your ___, handled." tagline over sixteen
  phrases, the problem stated as three wrong experiences of AI, eight services, and the
  espresso bar example. Ed writes the copy and Pedro's UX structure carries it.
- **The landing page copy is never changed.** Owner ruling, stated twice on 7 September:
  `20260907/landing-page.md` is the source of truth for the landing page and nothing rewrites
  a word of it. The owner said separately that they do not like AI leading, and that does not
  license an edit. Decision #3 stays as it is in `brand.md` section 6; where it and the copy
  disagree, the copy is what ships.
- **The brand identity is not locked and design work waits on it.** Two directions, both from a
  harvest sunset: a vibrant palette and a muted pastel one. Agreed personality words are trust,
  reliability, efficiency and progressive technology. Recorded concerns: vibrant risks reading
  as cartoonish, pastel as baby colors. The logo is single-color so no background constrains
  it. A monospace face is wanted for numbers, to allow animated transitions. Chinese font
  support loses personality whichever face is chosen.
- **All existing copy was AI-generated and reads as mannered prose.** The consensus fault
  across all three directions. The owner's hand-written gap line, "your answer before the
  build, your way to judge, your proof before you commit", was liked as a concept and not as
  execution.
- **The page guides rather than tells.** Show the visitor you understand their problem, then
  the process, then the outcome. Section-by-section testing is preferred over building a whole
  site and testing it.

### The brand identity, locked 7 September 2026

`concepts/hurulab-identity.html`. Henry's vibrant direction wins, reduced from what proposal 1
carried. Purple hue 318 was never reopened: both proposals were purple and the meeting's two
directions were about the palette around it.

- **Purple in three states.** Nightfall the default, Jacaranda hover, Last violet pressed.
- **Marigold in three.** Marigold, Low sun, Ember. The accent fills and never writes.
- **Eleven neutrals, named neutral-50 to neutral-950.** Owner instruction: neutrals take
  numbers, not invented names. Pulled bluer than proposal 1 and lightened so the top step is
  the page. Never pure white, never pure black.
- **Typography from proposal 2**, Cascadia Mono and Fustat, with DM Mono from proposal 1 for
  numbers. Mono takes the size of whatever text it sits with.
- **Body is 16px on mobile and that is the floor.** It scales up to 20px through the
  breakpoints and never below 16. Body and everything under it step by 1.125. **This reverses
  the 4 August 2026 decision**, which set a 17px floor to match Apple's iOS body default and
  applied the 1.2-to-1.3 ratio to the whole scale. **Headings were not reopened** and keep
  the two ratios. `breakpoints.md` sections 2, 3 and 5, `type.md` sections 3 and 4, and the
  spacing table in `spacing.md` were all rewritten against the 16px base the same day.
- **There is no caption role, and there are three label sizes.** Owner instruction: body large,
  body, body small; label large, label, label small. The floor is label small at 11.2px.
- **Mono has no size of its own.** It takes the size and leading of whatever text it sits with.
- **The logo is single-color**, mark and type together, so no background constrains it.
- **Caution is dropped.** Three candidates were rejected in turn. Research found only two hue
  families clear of marigold, laterite, sapling and the brand: green-yellow, rejected as olive,
  and blue, which reads as information. Success and danger remain.
- **Never uppercase**, owner instruction, and the letterspacing that existed only to serve
  uppercase labels went with it.

---

## Withdrawn on 30 July 2026

- **Three invented case studies** carried by the 29 July page, written to be plausible rather
  than drawn from real work.
- **The founding story** in which a pitch deck died in a room in Singapore. It came from a
  storytelling template, not from an event. See section 2 of `docs/brand.md`.
- **A competitor list** naming Cloud Interactive and Appar. Neither appears in any source.
