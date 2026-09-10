# hurulab design rules

**Start at [language.md](language.md).** It holds the governing idea, and everything else here
is downstream of it.

**Nothing draws these rules, and that is a known gap.** `storybook.html`, the Storybook tool and
the stories were all removed on 7 September 2026, owner ruling: there is no storybook. The rule
files specify every component in words and nothing renders them. When something does, it becomes
the single source and this note is replaced.

The one place the project's durable rules live. Each file below is the **single owner** of its
topic. If a rule changes, you or an agent **edit the owning file**. You never add a second note
somewhere else. Changing a decision means editing or deleting the old rule, never appending a
new one beside it. That single principle is what keeps this from drifting.

`hurulabs` is the design project for **hurulab**, a Taiwan team selling business, design and
technology as one team. The job is hurulab's brand and its website.

| File | Owns |
|---|---|
| [language.md](language.md) | **The governing idea: big, bold, bento, very Apple.** What each word means as a rule, the test for each, and how they resolve conflicts. Every other file here is a consequence of it. Read first |
| [breakpoints.md](breakpoints.md) | The four breakpoints (360, 768, 1440, 1560+), the root clamp, the two-ratio scale (1.2 at the 360 floor rising to 1.3 at the 1560 ceiling), and the rule that every size derives from it: type scale, icon sizes, radii, all in rem |
| [spacing.md](spacing.md) | The ten-step spacing scale and which step applies where: insets, gaps, and the section rhythm. The parent owns the gap |
| [color.md](color.md) | The five oklch ramps, the semantic tokens that are the only names a component may use, the graphite neutrals, the purple accent and why it survived, the dark-tile model and the contrast floors |
| [type.md](type.md) | Cascadia Mono and Fustat, the size tokens for display and h1 to h5, body, label, nav, button and data, the four weights, tracking and leading per role, casing, the dual-tone heading, measure, and the accessibility floors |
| [logo.md](logo.md) | The logo. The owner's drawn lockup in `logo/`, a six-arm mark in the brand color beside a drawn wordmark, placed inline as two paths and sized by height, and the favicon (the mark alone, favicon.svg). Replaced 10 September 2026; it carries no motion |
| [icons.md](icons.md) | The one icon set, Phosphor at regular weight, inline SVG in the text color, and the rules that keep icons honest |
| [layout.md](layout.md) | Full-bleed page structure, section rhythm, the radius scale on the C2 curve, the bento mechanics and its three tile variants, the one button in its three variants, tags, the marquee, navigation |
| [motion.md](motion.md) | The enter and exit curves, the four durations and the 450ms ceiling, scroll-driven entrances and their fallback, hover responses, what may be animated |
| [copy.md](copy.md) | Casing, banned words, what may not be claimed, how a number is put on a page, voice, form and error wording, and where AI appears in the writing |
| [components.md](components.md) | The eight components and two patterns, the test each had to pass, the order they are built in, what was cut and why. The card and the tile are different things |
| [sound.md](sound.md) | The decision that the site will use sound, when sound gets designed (against real screens, by listening), the web constraints, and what stays open |
| [build.md](build.md) | The engineering rules: tokens only and the few sanctioned literals, where the values live, the three levels, how a component is written, the accessibility floor |

**Two files that used to live here moved out on 7 September 2026**, owner instruction that this
folder holds design and nothing else: [../brand.md](../brand.md), what hurulab is and what may
not be claimed, and [../visitor.md](../visitor.md), who arrives at a page. Both still govern
what goes on a page; neither is a design rule.

## Where these came from

The visual identity restarted from a blank page on 30 July 2026. It was then rebuilt from
`hurulab-codebase`, the owner's Lovable build, whose stated visual reference is squareblack.com
and nothing else. The rules in `color.md`, `type.md`, `layout.md`, `motion.md` and `copy.md`
were **originally** extracted from that build rather than invented here. Some have since been
replaced by owner rulings, and `copy.md` sections 5 and 7, `layout.md` 5.3, `motion.md` 6a and
`color.md` 2 came from reference research on 7 September 2026. Each says where it came from.

## Open decisions

**One is genuinely open**, listed under "Still to be built" below: sound. The rest are kept
here so they are not reopened by accident.

1. ~~The accent color.~~ **Settled 30 July and re-approved 31 July: earthy soft purple, hue 318,
   now a ten-step ramp.** The three original values are steps 100, 300 and 600. The reasons it
   survived a comparison against indigo and red are in [color.md](color.md) section 2, so it is
   not re-argued.
2. ~~The typefaces.~~ **Settled 31 July, replaced 3 September 2026: Cascadia Mono for titles,
   labels, navigation and buttons. Fustat for body and everything else.** The 31 July pair,
   Geist and IBM Plex Sans, was never deployed. [type.md](type.md) owns the sizes, weights,
   tracking, leading and the semantic role tokens.
3. ~~Measure.~~ **Settled 4 August 2026, reconfirmed 7 September: no max-width on text, ever.
   Text runs to the full margins, every role, headings and captions included.**
   [type.md](type.md) section 10 owns it.
4. ~~The logo.~~ **Replaced 10 September 2026 with the owner's asset in `logo/`.** It carries
   no motion. [logo.md](logo.md) owns it.

**Still to be built:**

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
  [brand.md](../brand.md) cites it. Nothing else should need to.
- **[PLAN.md](../../.plans/PLAN.md)** is what is being worked on now. It is volatile and owns no rules.
- **[docs/decisions.md](../decisions.md)** is the dated history of what was decided and what
  reversed it, recovered from the retired draft pages. History, not truth. Where it disagrees
  with [brand.md](../brand.md), brand.md wins.

## Provenance

This folder previously coexisted with a `design/` folder holding the same `docs/brand.md`, and sat
empty behind a README that did not exist. Both were consolidated here on 30 July 2026 so that
there is one design folder and one only.
