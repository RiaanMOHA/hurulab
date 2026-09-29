# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Rewritten 7 September 2026, when the positioning was settled and most of what this file
had been carrying was either answered or dropped. The design system and the tests were removed
as not important, owner instruction 7 September.

---

## What is blocking what

**The landing page build, step 3, waits on steps 1 and 2**: the team's feedback on the five
reference sites, then the extraction outputs the owner brings back from Claude in Chrome.
Nothing is drawn until both are in. The brand identity was locked on 7 September 2026,
`concepts/hurulab-identity.html`; the hero at `concepts/landing-page-hero.html` is not the
hero of the page, owner ruling 29 September.

**The owner's list of 10 September 2026 is done and approved**: the dual-tone heading rule, the
new logo, "Contact Us", the secondary color ramp, numbers in Cascadia Mono, and the two color
proposals archived. The record is `PLAN_ARCHIVE.md` under that date.

**The landing page is unblocked, 29 September 2026.** The owner ruled that
`docs/landing-page.md` is the copy as written, and answered every open question on the page
in one sitting; the record is `docs/decisions.md` under that date. The eleven contradictions
of 10 September are not worked through; the file stands until the owner says otherwise.

**How discovery is priced: shown as about $3,000 per hour**, the placeholder, owner ruling
29 September. Currency not stated in the source.

---

## 1. The team meeting, feedback on the five references

**Next.** The five kept sites are shown to the team and the feedback is recorded in
`docs/decisions.md` under the meeting date. **The five, as of the third session on
29 September 2026**: trionn.com ("very good"), thinkcompany.com ("we are the people you
want in the room"), metalab.com, mindmarket.com (the menu), avalanche.com. Dropped in the
third session, owner's word "gone": by-kin.com ("really like it", but it loads too slowly),
epic.net ("like the transitions"), askphill.com ("also good"). Rejected in the second
session: locomotive.ca, 14islands.com, uncommonstudio.com.au, hugeinc.com, butter.video,
rive.app, mintlify.com. None of the sites was verified in a browser here; the owner judged
them in their own.

**The brief that produced them**, answered through AskUserQuestion: agencies, consultancies
and software companies doing the kind of work hurulab does; light only; judged on
interaction, transitions, animation, craft and story together; type and illustration over
photo and video; the performativeUI ban holds, `github.com/vorpus/performativeUI`;
makingsoftware.com withdrawn as the bar, rejected outright. Eleven examples supplied by
the owner to learn the taste from, never to copy or return: blacksmith.sh, tastelabs.com,
build.avax.network, visify.au, squareblack.com, metalab.com (the menu), ohhmydesign.com,
nexstudio.tech, oci.madebybuzzworthy.com, crency.agency, pear.no (how it tells a story).

---

## 2. The owner returns the extraction outputs

**After the meeting.** One prompt per kept site is written, `docs/references/<site>-extraction.md`,
for Claude in Chrome, no screenshots, capturing everything so the whole site can be rebuilt
with hurulab's colors, fonts, logo and content, the only three things that do not change.
The owner opens each site in Chrome, pastes its prompt into Claude in Chrome, and pastes the
answer back; the three files it returns (tokens, spec, brief) are saved beside the prompt.
If the meeting drops a site, its prompt is deleted; if it adds one, a prompt is written for
it from the same template.

---

## 3. The landing page, rebuilt

**Only once step 2 is complete and the owner has chosen which site's feel the page takes.**
The three variants of 29 September were rejected outright and the owner deleted the file
on 29 September; it was never committed and is
not recoverable. The parts the page holds, in an order still being decided: navigation (the
owner's word, never "header"), hero, the problem, what we do, the discovery phase, the
example, how we work, what it costs, the ending, Contact Us. Structure and layout are still
being fine-tuned; nothing about the order is settled.

**What every part honors:**

- The copy is `docs/landing-page.md`, never changed. The CEO's `HuruLab-Landing-Page.html`
  is input for the process and for ideas only.
- Colors are the identity page's. Fonts are Cascadia Mono and Fustat.
- Every heading is two-tone. Sentence case, Title Case on buttons, no label above a heading.
- Text runs to the margins, no centered column, every page light, no dark tiles.
- Contact Us opens `mailto:hello@hurulab.com`.
- English only.

---

## 4. The logo motion

**The asset exists, 29 September 2026.** The owner drew it in Illustrator and placed it in
`logo/` on 22 September; it is on every concept page and `logo.md` describes it. The mark
carries motion, owner ruling 14 September. What is left is the motion, designed against the
real shape; `docs/design-rules/motion.md` will own it. Not started. The research steps that
led to the asset are in `PLAN_ARCHIVE.md` under 29 September.

---

## 5. What the landing page has to honor, the record

**The positioning was settled on 7 September 2026 and the subtitle was replaced on
8 September.** The copy is `docs/landing-page.md` section 3; the positioning behind it is
`docs/brand.md` section 7, which has not been updated to the newer subtitle. Step 3 is the
build; this is what it stands on.

**What that settles, and what any page has to honor:**

- **The content is `docs/landing-page.md`**, written 8 September 2026 as the single source of
  truth: the four-section structure plus the full English copy. The CEO's newest document and
  the two before it were folded into it and then deleted, so **there is no second copy to
  check against**. All five contradictions were settled in the writing of it; what is still
  open is listed in its own section 8.
- **The subtitle now opens "At hurulab, we know software"**, not "we know AI". The newest
  document changed it and the owner accepted the newest document, 8 September. `docs/brand.md`
  section 7 still carries the older wording and disagrees with the page on that one point.
- **The first four discovery steps are unpaid**, and "nothing is given before payment" was
  withdrawn on 7 September because of it. Outreach still does not offer a free live demo, and
  the site is not a demo of itself.
- **The copy in that file is never changed.** Owner ruling 7 September, stated twice, and it
  now attaches to `docs/landing-page.md`. A newer document from the CEO is edited into that
  file rather than kept beside it.
- **The honest stop is part of the offer**, said out loud on the page: if they do not need AI,
  they are told so.
- **The client keeps everything from day one**, whether or not they continue.
- **"We know AI" may open a page**, and AI still does not lead as the promise. `brand.md`
  section 6. Decision #3 was not reversed on 7 September, and the supplied copy stands
  regardless: the copy wins, the rule is not restated on the page.
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

## Dropped, and not to be reopened

**The five identity proposals.** Deleted 29 September 2026, owner ruling: "we already have an
identity, all of them are wrong". `concepts/hurulab-identity.html` is the identity.
Recoverable from git at `5085c66`. The record is `PLAN_ARCHIVE.md` under that date.

**The hero spacing.** Dropped 10 September 2026. The item said the owner had called the
spacing wrong on 7 September, but no file recorded their words, and on 10 September the owner
did not recognize it. If the hero has a spacing fault it is found when the landing page is
built.

**The discovery concept, A and B.** Deleted 10 September 2026, owner ruling: rejected outright.
Eight versions in all were rejected. Recoverable from git at `7178e78`. The action item from
the meeting, "build visual steps for the discovery process", has no current work against it.
The card copy in `20260907/discovery-steps-shorter.md` and the seven approved words still
stand if it is ever picked up again.

**The 71 marks of August.** Three rounds came before the 10 September asset; none is
revisited. The asset is settled; only its motion is open, step 4.

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
