# hurulab design rules

**Start at [language.md](language.md).** It holds the governing idea, and everything else here
is downstream of it.

**[storybook.html](storybook.html) is the picture of these rules.** Open it in a browser. It is
self-contained, fonts embedded, works offline, and it computes its own contrast ratios from the
same values the rule files use, so it cannot silently disagree with them. Its sections run
foundations, then components, then patterns, then the checks. The written rules are the source
of truth; the storybook shows them.

It is also **the single source the Storybook stories clone from**: each story reaches into this
page by section id rather than holding markup of its own, so one drawing serves both views and
there is never a second copy to keep correct. Run it with `pnpm storybook`.

**This one file is exempt from the 800-line limit in `CLAUDE.md`, decided 8 August 2026.** Two
reasons, and both have to hold for the exemption to stand. Its embedded fonts are 60% of its
bytes on four lines, and they are what makes it open offline from disk with no tools. Splitting
the CSS, markup and script into linked files would end that, because a browser will not let a
local file load its neighbours. It will keep growing as components and patterns are drawn into
it, and that is expected rather than a problem to solve.

The one place the project's durable rules live. Each file below is the **single owner** of its
topic. If a rule changes, you or an agent **edit the owning file**. You never add a second note
somewhere else. Changing a decision means editing or deleting the old rule, never appending a
new one beside it. That single principle is what keeps this from drifting.

`hurulabs` is the design project for **hurulab**, a Taiwan team selling business, design and
technology as one team. The job is hurulab's brand and its website.

| File | Owns |
|---|---|
| [language.md](language.md) | **The governing idea: big, bold, bento, very Apple.** What each word means as a rule, the test for each, and how they resolve conflicts. Every other file here is a consequence of it. Read first |
| [brand.md](brand.md) | What hurulab is. The evidence scorecard, the origin, who the clients are, what can and cannot be claimed, the settled decisions and the genuinely open questions. Every claim carries a source |
| [breakpoints.md](breakpoints.md) | The four breakpoints (360, 768, 1440, 1560+), the root clamp, the two-ratio scale (1.2 at the 360 floor rising to 1.3 at the 1560 ceiling), and the rule that every size derives from it: type scale, icon sizes, radii, all in rem |
| [spacing.md](spacing.md) | The ten-step spacing scale and which step applies where: insets, gaps, and the section rhythm. The parent owns the gap |
| [color.md](color.md) | The five oklch ramps, the semantic tokens that are the only names a component may use, the graphite neutrals, the purple accent and why it survived, the dark-tile model and the contrast floors |
| [type.md](type.md) | Cascadia Mono and Fustat, the size tokens for display and h1 to h5, body, label, nav, button and data, the four weights, tracking and leading per role, casing, the two-tone heading, measure, and the accessibility floors |
| [logo.md](logo.md) | The logo. A drawn six-arm mark in the brand color, one SVG path, beside the logotype in the title face, the favicon (the mark alone, favicon.svg), and the motion still to be designed for it |
| [icons.md](icons.md) | The one icon set, Phosphor at regular weight, inline SVG in the text color, and the rules that keep icons honest |
| [layout.md](layout.md) | Full-bleed page structure, section rhythm, the radius scale on the C2 curve, the bento mechanics and its three tile variants, the one button in its three variants, tags, the marquee, navigation |
| [motion.md](motion.md) | The enter and exit curves, the four durations and the 450ms ceiling, scroll-driven entrances and their fallback, hover responses, what may be animated |
| [copy.md](copy.md) | Casing, banned words, what may not be claimed, voice, and where AI appears in the writing |
| [sound.md](sound.md) | The decision that the site will use sound, when sound gets designed (against real screens, by listening), the web constraints, and what stays open |
| [build.md](build.md) | The engineering rules: tokens only and the few sanctioned literals, where the values live, the three levels, how a story finds its markup, how a component is written, the accessibility floor |

## Where these came from

The visual identity restarted from a blank page on 30 July 2026. It was then rebuilt from
`hurulab-codebase`, the owner's Lovable build, whose stated visual reference is squareblack.com
and nothing else. Every rule in `color.md`, `type.md`, `layout.md`, `motion.md` and `copy.md` is
extracted from that build rather than invented here.

## Open decisions

**Two are genuinely open**, listed under "Still to be built" below: the logo's motion, and
sound. The three settled ones are kept here so they are not reopened by accident.

1. ~~The accent color.~~ **Settled 30 July and re-approved 31 July: earthy soft purple, hue 318,
   now a ten-step ramp.** The three original values are steps 100, 300 and 600. The reasons it
   survived a comparison against indigo and red are in [color.md](color.md) section 2, so it is
   not re-argued.
2. ~~The typefaces.~~ **Settled 31 July, replaced 3 September 2026: Cascadia Mono for titles,
   labels, navigation and buttons. Fustat for body and everything else.** The 31 July pair,
   Geist and IBM Plex Sans, was never deployed. [type.md](type.md) owns the sizes, weights,
   tracking, leading and the semantic role tokens.
3. ~~Measure.~~ **Settled 4 August 2026: no max-width on text, ever. Text runs to the full
   margins, every role, headings and captions included.** [type.md](type.md) section 10 owns it.

**Still to be built:**

- The logo's motion and interaction, per [logo.md](logo.md) section 4.
- Sound. Which moments carry it, what the sounds are, and their volumes, per
  [sound.md](sound.md) section 4. Open until the real screens exist.

Imagery has no owning file. The owner parked it on 4 August as not important now; the
documentary-photography rule in [layout.md](layout.md) section 9 still stands.

Nothing else should be created until it is needed. `build.md` was created on 8 August 2026, when
the project acquired a build and there was nothing describing it.

Do not create a file until there is a real decision to put in it. An empty rules file is worse
than no file, because it invites invention.

## What sits outside this folder

- **[CLAUDE.md](../../CLAUDE.md)** at the repo root holds the agent and process orientation:
  how Claude should behave here, the evidence rule, and the day-to-day working conventions. It
  points here for durable design rules rather than restating them.
- **[docs/evidence.md](../evidence.md)** is the primary source material: the five stakeholder
  interviews verbatim, the owner's proven-versus-bet split, and the sourced project facts.
  [brand.md](brand.md) cites it. Nothing else should need to.
- **[PLAN.md](../../.plans/PLAN.md)** is what is being worked on now. It is volatile and owns no rules.
- **[docs/decisions.md](../decisions.md)** is the dated history of what was decided and what
  reversed it, recovered from the retired draft pages. History, not truth. Where it disagrees
  with [brand.md](brand.md), brand.md wins.

## Provenance

This folder previously coexisted with a `design/` folder holding the same `brand.md`, and sat
empty behind a README that did not exist. Both were consolidated here on 30 July 2026 so that
there is one design folder and one only.
