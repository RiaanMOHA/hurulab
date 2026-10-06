# hurulab plan

Current and future work only. Finished and historical work moves to `PLAN_ARCHIVE.md` when it
closes. Rewritten 7 September 2026, when the positioning was settled and most of what this file
had been carrying was either answered or dropped. The design system and the tests were removed
as not important, owner instruction 7 September.

---

## What is blocking what

**The team meeting of 29 September 2026 wins wherever it disagrees with an earlier ruling**,
owner ruling 30 September. The record is `docs/decisions.md` under 30 September. It
replaced the ten-part page with four parts, took pricing off the site, cut discovery to three
steps, and swapped the espresso bar for Jadegia.

**The developer's site comes first, 6 October 2026.** Pedro Coelho has built the landing page
in `moreharvest/hurulab-website`, and hurulabs is behind it. Step 0 brings hurulabs up to date
with it. Step 1 below was written before the site existed and waits on step 0, phase 2.
The brand identity was locked on 7 September 2026, `concepts/hurulab-identity.html`.

---

## 0. hurulabs brought up to date with the developer's site

**Where the site is.** Downloaded 6 October 2026 to `Code Projects/hurulab-website`, beside
hurulabs, on Pedro's newest branch `fest/cms` (5 October), which is not yet merged into his
`master`. It is built from his "proposal1" and pieces of the four proposals; his own list is
`docs/design.md` in that project.

**The owner works on it locally and nothing goes back to the developer's project**, owner
ruling 6 October 2026, so his work cannot be damaged. **Never push to Pedro's `master`, or to
his GitHub at all.** Pushing from `hurulab-website` was switched off the same day; downloading
his updates still works. **Never run that project's `/cms` skill**: it branches from his
`master` and opens a pull request on his GitHub.

The five steps, in the owner's words:

1. **Make your copy safe.** Your own private copy of his website, set up so nothing you do can
   reach his work. In git terms: the owner's own branch in `hurulab-website`, push switched off.
   **Done 6 October 2026**: branch `riaan`, made from `fest/cms`.
2. **Update your notes.** hurulabs is rewritten to describe the website as it is now:
   `docs/decisions.md`, step 1 and section 3 of this file. **Done 6 October 2026**, apart
   from what steps 3 and 4 settle: the four proposals were archived to
   `concepts/archive/proposals/`, owner instruction.
3. **Pick the right words.** **Done 6 October 2026**: the developer's
   `docs/proposal1-copy.md` is the copy, owner ruling, and the owner's MVP copy file was
   archived to `progress/archive/`. Still open for step 4: the words the page actually shows
   come from `messages/en.json`, which differs from his copy file in 27 places, most of them
   a period added to a heading or a button set in Title Case.
4. **Check it against your design rules.** Every place the site breaks a rule in
   `docs/design-rules/` (color, type, casing, the name, labels above headings, spelling) is
   listed here, and the owner rules on each. Nothing in the site is changed by an agent until
   then. **Checked 6 October 2026: 34 breaks**, most visible first. **Each is ruled one by
   one**, owner instruction: neither the site nor the rules wins by default. File and line for each
   are found by searching the site; none is ruled yet.
   1. Dark hero, discovery, service tiles and closing; the rules say every page is light.
      **A light variant was built on branch `riaan`, 6 October 2026**, owner instruction;
      the owner has not yet ruled on it.
   2. Headings at regular weight; the rules say bold.
   3. Headings one tone, or gray swapped for brand purple; the rules say two-tone gray.
   4. Labels above headings: "What we do", "The team".
   5. Gradients, blur and glow, including the violet glow behind the hero. **The hero glow
      was removed in the light variant**, owner instruction 6 October 2026: "I HATE the
      shadow in the hero on light mode".
   6. Pexels stock photos; the rules say real photographs or none.
   7. Animated orbit lines, a comet and 56 twinkling stars in the hero.
   8. The logo: a glossy 3D moving mark where the rules say static until its motion is
      designed; logo colors on dark; sized by width; `#7c4693` in code and favicon.
   9. One outlined button everywhere, not the purple capsule; regular weight; fill wipe hover.
   10. "Let's Talk" where the ruled wording is "Contact Us".
   11. "Hurulab" and "HuruLab" where the name is `hurulab`.
   12. AI three times in the hero, and in five services; the rules say once, never the hero.
   13. Text capped short of the margins.
   14. Centered closing section.
   15. Type sizes off the scale.
   16. Heading letter-spacing off the table.
   17. "analyse", "localisation".
   18. Purple and marigold in one view.
   19. Services as seven identical tiles, not a bento.
   20. Animations longer than 450ms.
   21. Easing curves outside the two allowed.
   22. Blur, width and line-drawing animated; a bouncing spring; the hero phrase loops.
   23. The problem section takes over scrolling, card by card.
   24. Lucide icons, an arrow character and hand-drawn icons; the rules say Phosphor.
   25. Corner radii off the scale.
   26. Page and section spacing off the scale.
   27. Breakpoints 640, 809, 1000, 1280, 2560; the rules say 360, 768, 1440, 1560.
   28. Sentences without a period.
   29. "Back to top" not Title Case, "EN" all caps, "or" all lowercase.
   30. "Hurulab - All rights reserved", a hyphen standing in for a dash.
   31. Form: labels hidden until typing, 10px label text, small inputs, errors without
       "Error:" or an icon.
   32. Resting shadows on the contact panel and dropdown.
   33. Tap targets under 44px.
   34. Pure black and white, extra hues, raw color values instead of tokens.

   The check found no pricing, no dashes, no emojis, no banned words, no uppercase styling, no
   heading under 1.2 line height, both fonts loaded, and no marigold background. It also found
   four places where hurulabs disagrees with itself: `copy.md` section 2 says pricing is shown;
   the identity page sets `--surface-brand` to purple-600 where `color.md` says purple-300; the
   identity page has dark-mode tokens; base white differs between `color.md` and the identity
   page.
5. **You start designing.** One change at a time, checked against the rules, seen in the
   browser before it is reported.

**Open, for the owner:** where the owner's local work is backed up, since it no longer goes to
GitHub with Pedro's.

---

## 1. The landing page, rebuilt

**The developer's site is the landing page, 6 October 2026, and there is no pick.** The four
proposals were archived to `concepts/archive/proposals/`, owner instruction; the site took
pieces of each, recorded in `docs/decisions.md` under 6 October. The reference-site notes in
`docs/references/` stay until the owner rules on them. The job of the page is to make
the visitor get in touch, not to explain everything.

**What follows was written for the proposals**, before the site existed. Steps 3 and 4 of
section 0 check it against the site and rewrite it.

**What every part honors:**

- The copy is the developer's `docs/proposal1-copy.md` in `hurulab-website`, English, owner
  ruling 6 October. The CEO's `HuruLab-Landing-Page.html` is input for ideas only.
- Three features the owner likes, from `progress/20261001/hurulab-website.rtf`: the metalab
  menu, the mindmarket big numbers and icons, the trionn curtain transitions.
- **Where the copy breaks the rules is step 4 of section 0**, not decided by an agent.
- No pricing. Two free ways in: a 30-minute discovery call, requested by email to
  hello@hurulab.com, and a 1-hour demo or interview.
- A one-question questionnaire before contact: a dropdown (acquisition, tech, branding,
  website redesign, other) and a free-text field.
- Navigation is anchor links and a contact link, nothing more.
- Four case studies shown prominently, MetaLab style: Jadegia, Ojimoto, the MoreHarvest app,
  MoreHarvest Maps.
- Carried forward from the meeting: a strong hero heading with a short subline, a manifesto
  or "how we think" section, trust signals, a clean menu with smooth transitions. No chatbot.
- Colors are the identity page's. Fonts are Cascadia Mono and Fustat.
- No heading is set below line height 1.2, owner ruling 2 October. The scale is `type.md`
  section 6, and all four proposals already carry it.
- Every heading is two-tone. Sentence case, Title Case on buttons, no label above a heading.
- Text runs to the margins, every page light, no dark tiles. English only.

---

## 2. The logo motion

**The asset exists, 29 September 2026.** The owner drew it in Illustrator and placed it in
`logo/` on 22 September; it is on every concept page and `logo.md` describes it. The mark
carries motion, owner ruling 14 September. What is left is the motion, designed against the
real shape; `docs/design-rules/motion.md` will own it. Not started. The research steps that
led to the asset are in `PLAN_ARCHIVE.md` under 29 September.

---

## 3. What the landing page has to honor, the record

**The positioning was settled on 7 September 2026 and the subtitle was replaced on
8 September.** The copy is now the developer's copy file named in step 1; the positioning behind it is
`docs/brand.md` section 7, which has not been updated to the newer subtitle. Step 1 is the
build; this is what it stands on. Where the 29 September meeting disagrees with anything
below, the meeting wins.

**What that settles, and what any page has to honor:**

- **The content is the developer's copy file**, `docs/proposal1-copy.md` in
  `hurulab-website`, owner ruling 6 October 2026. It replaced the MVP copy file of 2 October,
  archived to `progress/archive/`, which had replaced `docs/landing-page.md`, in git at
  `f268541`.
- **The subtitle now opens "At hurulab, we know software"**, not "we know AI". The newest
  document changed it and the owner accepted the newest document, 8 September. `docs/brand.md`
  section 7 still carries the older wording and disagrees with the page on that one point.
- **The first four discovery steps are unpaid**, and "nothing is given before payment" was
  withdrawn on 7 September because of it. The site is not a demo of itself. A free 1-hour
  demo or interview is now offered, meeting of 29 September.
- **The copy is never changed by an agent.** Owner ruling 7 September. The
  discovery section is rewritten by Henry, meeting of 29 September.
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
revisited. The asset is settled; only its motion is open, step 2.

**The CEO pages, the cost concept and the box page.** All deleted. Their text is in
`docs/ceo-concepts.md` and their copy in `docs/copy-archive.md`, both deleted 2 October 2026
and in git at `cf7569e`.

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
