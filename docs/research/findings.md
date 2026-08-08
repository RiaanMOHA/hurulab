# What the three systems settled

Read from `carbon.md`, `atlassian.md`, `coinbase.md` and `behaviour.md`, 8 August 2026. Polaris
was dropped at the owner's direction.

**This file is research, not rules.** Nothing in it is decided until the owner rules on it and it
is written into the file that owns the topic.

**One caveat that runs through everything below.** Carbon and Atlassian are design systems with
usage guidance and content teams. **Coinbase CDS is a developer component library**, and its own
answer says so. Where Coinbase is silent on a design rule, that is its nature rather than a
third opinion, so most findings here rest on two systems, not three.

---

## 1. Where all three agree

Three systems built by different companies for different products. Where they land in the same
place, it is a real rule rather than a house style.

- **One primary action per screen.** Carbon: "only one primary button per screen". Atlassian:
  "use one primary CTA per page or area". Coinbase: "limit to one per screen". hurulab already
  has this in `layout.md` 5.
- **Buttons act, links navigate.** Carbon and Atlassian both state it as a do-not. Neither
  allows a button to be used for navigation.
- **Never rely on color alone.** Atlassian states it for lozenge and flag. Carbon builds status
  icons into every notification variant. hurulab has this in `color.md` 8.
- **A label is always required**, even when visually hidden. All three.
- **Truncation is an accessibility problem, not a layout choice.** Atlassian: truncated text
  "isn't focusable/accessible". Carbon forbids truncating button labels and requires wrapping.
- **Icon-only controls carry an accessible name.** All three, in the same words.

## 2. Where they disagree, which makes it hurulab's decision

- **States: per variant, or once per component?** Carbon documents states per variant, with a
  table for each. Atlassian documents them once, and its own note says so explicitly. Coinbase
  documents once. **Two to one for once per component**, and Carbon is the largest system, which
  is the reason: per-variant tables are affordable at IBM's scale.
- **Sizes.** Carbon publishes seven button sizes. Atlassian publishes two, and calls them
  spacing rather than size: default and compact. Coinbase publishes four. **Atlassian's two is
  the right shape for one website.**
- **What "card" means.** Covered below. They do not agree at all.

## 3. The finding that kills the card

**None of the three publishes a general "card".**

- **Carbon** has no card. It ships **Tile**, and states: *"Tiles are simple and foundational.
  Cards can be very complex."* And plainly: *"Carbon does not have a card pattern."* Cards are
  pushed out to satellite libraries.
- **Atlassian** publishes no Card component. The role is split between **Tile**, which is an
  asset-sized rounded square, and **Panel**. The word "card" survives only informally in prose.
- **Coinbase** has eleven card components and no generic one: ContentCard, DataCard, MediaCard,
  MessagingCard, and four deprecated.

**What this means here.** The card built this morning was invented. What hurulab actually needs
is closer to Carbon's tile: a foundational container with no elevation, which `layout.md` 4
already describes as the bento tile. **The bento tile is the container. There is no separate
card**, unless a real page turns out to need one.

## 4. The lesson from Atlassian's rebuild

The most valuable passage in the three files, because it is a mistake already made at scale.

Their old button *"was trying to do too much"*: *"large and slow"*, with *"a lot of visual
variation and customization"* because *"one-size-fits-all"* could not meet real needs.

What they did:

1. **Split it into purpose-built components**: icon buttons, link buttons, split buttons, rather
   than one component with every variant.
2. **Removed the customization APIs**, moving from dynamic to static styling. Roughly 10% faster
   renders.
3. **Encoded the accessible choice into the API**, forcing a deliberate choice between a link, a
   button, and a link that looks like a button.

**Against hurulab's seven-variant button, this reads as a warning.** Seven variants of one
component, two of them differing only by carrying an icon, is the shape Atlassian dismantled.

## 5. Category names, since the invented ones were wrong

"Controls" and "Composed" appear in none of the three. The real groupings:

| System | Its categories |
|---|---|
| **Carbon** | None. A single flat A to Z list under "Components" |
| **Atlassian** | Forms and input, Images and icons, Labels, Layout and structure, Loading, Messaging, Navigation, Overlays and layering, Primitives, Status indicators, Text and data display |
| **Coinbase** | Layout, Typography, Inputs, Media, Cards, Data Display, Feedback, Overlay, Navigation, Charts |

**Carbon's flat list is worth noting.** The largest of the three does not group at all.

## 6. Component versus pattern

- **Carbon** publishes both definitions. A component is *"an asset that has been designed and
  coded, that can be imported into a UI."* A pattern is *"something that can be accomplished in
  multiple ways utilizing a combination of component(s)"*, and cannot ship as one piece of code.
- **Atlassian** publishes the component definition only. Its Patterns section currently redirects
  elsewhere, so there is no pattern definition to quote.
- **Coinbase** publishes no distinction at all. No patterns section exists.

**One of three publishes a working definition of a pattern.** hurulab has a Patterns level with
one thing in it, and the industry does not obviously support the level existing.

## 7. What a component page contains

Carbon and Atlassian agree closely, and both are ordered guidance first, code second.

**Carbon**, four tabs: Usage, Style, Code, Accessibility. Usage runs definition, live demo,
when to use and when not to use, variants, anatomy, content, behaviors and states, related.

**Atlassian**, tabs: Examples, Code, Usage, Changelog. Usage runs intro, parts (the anatomy),
accessibility, best practices as paired do and do-not blocks, content guidelines, related.

**Both publish "when not to use" and both publish anatomy as named parts.** hurulab's storybook
publishes neither.

## 8. Contribution, and what earns a component's place

- **Carbon** requires a proposal to show the component *"would be useful to many teams and unique
  to the system"*, then a five-area checklist before it is Stable, with statuses Draft, Preview
  candidate, Preview, Stable.
- **Atlassian** currently accepts **no new components** from outside the core team, stating that
  considering one *"takes time... these changes require system-wide coordination"*.
- **Coinbase** publishes no contribution rules on the site.

**Both systems that publish a process make a new component hard to add.** That is the opposite
of how this morning's components arrived.

---

## 9. Motion, and the rule hurulab already has right

**Both mature systems say motion is conditional, never decorative.** Atlassian: *"Before adding
motion ask, if I remove this, does the user lose information or context?"* Carbon: *"Is your
motion frequently noticed by average users? If so, consider removing or minimizing it."*

**Frequency decides duration.** Atlassian: *"If someone will trigger this motion dozens of times
a day, keep it under 150ms. If they see it once a session, you have room for more expression."*
And: *"Make exit motion faster than entrances."*

**hurulab's `motion.md` already matches this** and was reached independently: 150ms for state
changes, 160ms for exits, exits shorter than entrances, and "frequency decides existence". The
research confirms the system rather than correcting it.

**Reduced motion is the one place a marketing site actually fails**, per the answer's own
judgment. Atlassian removes motion rather than slowing it: *"when reduced motion is active,
motion is off and instant"*, and *"never use motion that flashes, rapidly oscillates, or sweeps
large areas."* Carbon never names the media query at all. **hurulab's rule matches Atlassian's**
and is stricter than Carbon's.

## 10. Where the research contradicts a hurulab rule

**Breakpoints.** Carbon publishes five, Atlassian six, Coinbase three. The answer's judgment for
a site like this: *"You need roughly two (mobile + desktop), maybe three."* hurulab has four.
**Not obviously wrong, but four is at the upper end for one website**, and `breakpoints.md`
already says a layout needing a fifth is a layout problem.

**Truncation, and this one is a real disagreement.** Carbon says a button label must **wrap**,
never truncate. Atlassian says **truncate** with an ellipsis to protect the layout. The answer's
recommendation for a marketing site is **wrap**: the copy is controlled, the layouts are
bespoke, and truncated marketing copy reads as broken. Truncation is a product-density concern
hurulab does not have.

**Sizes.** Carbon publishes seven button sizes, Atlassian two. hurulab publishes none, which is
closer to right than to wrong.

## 11. What the answer says to skip

Named directly as overhead for a team with one website and no product:

- **Multi-breakpoint grid mathematics.** Carbon's fixed, fluid and hybrid box theory exists for
  dashboards and data tables.
- **Button-group combination matrices and forbidden-pairing tables.** These exist because large
  suites have toolbars. A page with one or two calls to action does not need them.
- **Per-component accessibility gates and formal definitions of done.** One WCAG AA pass over
  the site, rather than Carbon's per-component review pipeline.
- **Dual motion systems and token packages.** Two or three easings and durations, then stop.
  hurulab has exactly two curves and four durations already.
- **Tile versus card taxonomies, panel behaviour, message-component selection tables.** Product
  furniture. A marketing site has sections, containers and a nav.

And what to take wholesale: **sentence case, verb-led calls to action, one primary action per
section, never colour alone, reduced motion handled properly, and the parent owning the gap.**
Every one of those is already in hurulab's rules.

---

## What this changes about the plan

**The component list should be short, and most of it already exists as rules.** The three systems
agree that a component earns its place by being needed in several contexts, and both that publish
a process make adding one deliberately hard.

**The open decisions the owner has to make**, none of which research can settle:

1. **States per variant, or once per component.** Two of three say once.
2. **Whether a Patterns level exists at all.** One of three publishes a definition of a pattern.
3. **Wrap or truncate**, where the two mature systems genuinely disagree. The recommendation for
   this site is wrap.
