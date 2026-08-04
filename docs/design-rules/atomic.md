# Atomic design

Owner decision, 4 August 2026: this project uses atomic design. This file owns what that means
here. The method is Brad Frost's (atomicdesign.bradfrost.com, chapter 2), adapted to hurulab
the way Frost himself advises: as a mental model and shared vocabulary, not dogma.

---

## 1. The levels

Every piece of interface belongs to exactly one level. The level says what a thing may be made
of and where it may be used.

| Level | What it is | hurulab's own |
|---|---|---|
| **Foundations** | The raw material. Not interface, ingredients | Design tokens (the semantic names, listed first), color, type, spacing, layout and breakpoints, radius, icons, motion. Elevation is deliberately absent: shadow exists only on hover |
| **Atoms** | The smallest working pieces. Cannot be broken down further and still function | Button, input, checkbox, tag, link, label, icon, the mark |
| **Molecules** | A few atoms working together as one unit | A form field (label, input, helper), the two-tone heading, a tile footer (fact plus arrow), a status message (icon plus word plus panel) |
| **Organisms** | Distinct sections of a page, built from molecules and atoms | The navigation bar, a bento section, the marquee band, the dark tile, a full form, the client-quote section |
| **Templates** | A page's skeleton: organisms placed in a layout, structure without real content | The coming-soon scroll structure, the site's section stack |
| **Pages** | A template filled with the real words and the real numbers | The coming-soon page, each page of the demo website |

## 2. The rules this sets

1. **Composition only goes downward.** An atom uses foundations. A molecule uses atoms. An
   organism uses molecules and atoms. Nothing reaches upward, and nothing skips a level to
   restyle a raw value: components name semantic tokens, never ramp steps ([color.md](color.md)
   rule 2).
2. **A new component states its level** when it is created, in the storybook. If it cannot be
   placed, it is not one thing, split it.
3. **The storybook is organized by these levels**, foundations first, pages last, so reading it
   top to bottom is reading the system from abstract to concrete. A level with nothing in it
   yet says so rather than inventing content.
4. **The process is not linear.** Frost is explicit about this. Pages and atoms are worked on
   concurrently; the levels are a filing system, not a sequence of steps.
5. **Real content tests the pattern.** A template is judged with placeholder structure, but a
   page is judged with the real words, and when the real words break a pattern, the pattern is
   wrong, not the words.

## 3. Checked against the field

Verified 4 August 2026 against Frost's canonical texts, Storybook's official structuring
guidance, and the published structures of Material, Carbon, Polaris, Atlassian, GOV.UK and
Salesforce Lightning. What that check settled:

- **Foundations first is the industry convention** (Atlassian, Material, Polaris), with the
  design tokens page leading it. Frost calls tokens "subatomic"; the Foundations name is the
  production adaptation, and Frost explicitly blesses renaming levels.
- **Templates and pages are demonstrations, not shipped pieces.** Frost keeps them out of the
  published library. Here they are storybook sections that stay honest about being empty until
  the demo website fills them.
- **The known pitfall is level debates.** Teams stall arguing molecule versus organism. The
  rule here: if the level of a thing is argued for more than a minute, file it at the simpler
  level and move on. The taxonomy serves communication, nothing else.
- **Checks are this project's own addition.** The industry files contrast under accessibility
  and review rules under contribution docs; this storybook keeps them visible at the end
  because the evidence culture of this project wants the failures on the same page as the
  rules.

## 4. Why these words

The shared vocabulary is the point: "molecule" tells anyone on the team how big a thing is and
what it may contain, with no further explanation. The names are used in the storybook, in file
names, and in conversation.

## 5. What fails review

A component that reaches up a level. A molecule styled with a raw ramp step. A new component
with no stated level. A "component" that cannot name its level because it is really two.
