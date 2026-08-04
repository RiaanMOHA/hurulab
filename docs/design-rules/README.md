# hurulab design rules

**Start at [language.md](language.md).** It holds the governing idea, and everything else here
is downstream of it.

**[storybook.html](storybook.html) is the picture of these rules.** Open it in a browser. It is
self-contained and works offline, and it computes its own contrast ratios from the same values
the rule files use, so it cannot silently disagree with them. Color and type are built.
Icons, imagery and the drawn mark follow. The written rules are the source of truth;
the storybook shows them.

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
| [breakpoints.md](breakpoints.md) | The four breakpoints (360, 768, 1440, 1560+), the 1.125 root clamp, and the rule that every size derives from it: type scale, icon sizes, radii, all in rem |
| [spacing.md](spacing.md) | The ten-step spacing scale and which step applies where: insets, gaps, and the section rhythm. The parent owns the gap |
| [color.md](color.md) | The five oklch ramps, the semantic tokens that are the only names a component may use, the graphite neutrals, the purple accent and why it survived, the dark-tile model and the contrast floors |
| [type.md](type.md) | Geist and IBM Plex Sans, the size tokens for display and h1 to h5, body, label, nav, button and data, the four weights, tracking and leading per role, casing, the two-tone heading, measure, and the accessibility floors |
| [mark.md](mark.md) | The logo. `*hurulab`, the typeface's asterisk in the brand color raised and enlarged, the wordmark in the heading face, and the motion still to be designed for it |
| [icons.md](icons.md) | The one icon set, Phosphor at regular weight, inline SVG in the text color, and the rules that keep icons honest |
| [layout.md](layout.md) | Full-bleed page structure, section rhythm, radius, the bento mechanics and its three tile variants, buttons, tags, the marquee, navigation |
| [motion.md](motion.md) | The single easing curve, the duration ladder, scroll-driven entrances and their fallback, hover responses, what may be animated |
| [copy.md](copy.md) | Casing, banned words, what may not be claimed, voice, and where AI appears in the writing |

## Where these came from

The visual identity restarted from a blank page on 30 July 2026. It was then rebuilt from
`hurulab-codebase`, the owner's Lovable build, whose stated visual reference is squareblack.com
and nothing else. Every rule in `color.md`, `type.md`, `layout.md`, `motion.md` and `copy.md` is
extracted from that build rather than invented here.

## Open decisions

Two, and neither blocks the other.

1. ~~The accent color.~~ **Settled 30 July and re-approved 31 July: earthy soft purple, hue 318,
   now a ten-step ramp.** The three original values are steps 100, 300 and 600. The reasons it
   survived a comparison against indigo and red are in [color.md](color.md) section 2, so it is
   not re-argued.
2. ~~The typefaces.~~ **Settled 31 July: Geist for headings, labels, navigation and buttons.
   IBM Plex Sans for body and everything else.** [type.md](type.md) owns the sizes, weights,
   tracking, leading and the semantic role tokens.
3. ~~Measure.~~ **Settled 4 August 2026: no max-width on text, ever. Text runs to the full
   margins, every role, headings and captions included.** [type.md](type.md) section 10 owns it.
   No open decisions remain in this folder.

**Still to be built:**

- The mark's motion and interaction, per [mark.md](mark.md) section 4.

Imagery has no owning file. The owner parked it on 4 August as not important now; the
documentary-photography rule in [layout.md](layout.md) section 9 still stands.

Nothing else should be created until it is needed. `build.md` will own the file structure and
token rules once there is a build to describe.

Do not create a file until there is a real decision to put in it. An empty rules file is worse
than no file, because it invites invention.

## What sits outside this folder

- **[CLAUDE.md](../../CLAUDE.md)** at the repo root holds the agent and process orientation:
  how Claude should behave here, the evidence rule, and the day-to-day working conventions. It
  points here for durable design rules rather than restating them.
- **[docs/evidence.md](../evidence.md)** is the primary source material: the five stakeholder
  interviews verbatim, the owner's proven-versus-bet split, and the sourced project facts.
  [brand.md](brand.md) cites it. Nothing else should need to.
- **[PLAN.md](../../PLAN.md)** is what is being worked on now. It is volatile and owns no rules.
- **[docs/decisions.md](../decisions.md)** is the dated history of what was decided and what
  reversed it, recovered from the retired draft pages. History, not truth. Where it disagrees
  with [brand.md](brand.md), brand.md wins.

## Provenance

This folder previously coexisted with a `design/` folder holding the same `brand.md`, and sat
empty behind a README that did not exist. Both were consolidated here on 30 July 2026 so that
there is one design folder and one only.
