# Components

**What this file owns.** The eight components hurulab builds, the two patterns composed from
them, the order they are built in, and the reasoning that settled each. Merged 7 September 2026
from the approved list and the research it was built from, both of which were then deleted.

**Approved 8 August 2026, not yet built.** One component of the eight exists: the button. The
rest are specified here and drawn as they are built, one at a time.

**Where the rules live.** This file owns the list and the reasoning. The shape, color and
behavior of each component belong to the file that owns that topic: [layout.md](layout.md)
section 5 for the button, [color.md](color.md) section 5 for every state. Where this file and a
rule file disagree, the rule file wins.

---

## 1. The test each one had to pass

Taken from Carbon's contribution rule, that a component must be *"useful to many teams and
unique to the system"*, read for one website:

**It appears on more than one page, or in more than one place on a page, and nothing already in
the system does its job.**

Everything that failed that test is in section 6, with the reason it failed.

**Both published systems that have a contribution process make adding a component deliberately
hard.** Carbon requires a proposal plus a five-area checklist before a component is stable.
Atlassian accepts no new components from outside its core team at all. That is the opposite of
how the first hurulab set arrived, built in a morning and deleted the same day.

---

## 2. The eight, grouped as Atlassian groups them

Carbon does not group its components at all, a flat A-to-Z list, and it is the largest of the
three. Coinbase groups by engineering concern. **Atlassian's category names are the only ones
that describe what a reader is looking for**, so they are used unchanged rather than invented.
"Controls" and "Composed", the two categories the deleted set used, appear in none of the three.

### Actions

| Component | Variants | Why it earns its place |
|---|---|---|
| **Button** | `primary`, `border`, `ghost` | Every page ends in an action. Three, not seven: see section 6 |
| **Button icon** | `button-icon`, `button-icon-ghost` | Its own component, not a button variant. Atlassian's own correction after their button "was trying to do too much" |
| **Link** | inline, standalone | Buttons act, links navigate. All three systems state it as a rule, and hurulab has no link component at all, which is how the rule went unenforced |

**Every variant draws its own five states:** rest, hover, pressed, focus, disabled. Owner
ruling, 8 August 2026, taking Carbon's per-variant model over Atlassian's and Coinbase's
once-per-component model, against the two-to-one majority.

### Forms and input

| Component | Variants | Why it earns its place |
|---|---|---|
| **Text input** | default, invalid, disabled | The contact form. [color.md](color.md) 5 already specifies every state |
| **Checkbox** | unchecked, checked, indeterminate | Consent and options. Indeterminate because a parent with partly-selected children has no other honest state |

Both were drawn once on 8 August and deleted with the rest. Rebuilding them is renaming and
redrawing to the approved names, not designing.

**Their wording rules are [copy.md](copy.md) section 7**, which owns error message structure,
the ban on placeholder-as-label, and how required and optional fields are marked.

### Messaging

| Component | Variants | Why it earns its place |
|---|---|---|
| **Message** | `success`, `error`, `warning`, `info` | Form feedback. Warning's tokens are already in the code |

**Every one carries an icon and a word.** Not a style choice: under deuteranopia, success,
error and warning all render as nearly the same olive. All three systems state that color
never carries meaning alone.

### Labels

| Component | Variants | Why it earns its place |
|---|---|---|
| **Tag** | read-only | Capability lists, the marquee band, a phase label. Read-only only: nothing here is dismissible or selectable |

Content limits are [layout.md](layout.md) section 6: under about twenty characters, six to a
group.

### Containers

| Component | Variants | Why it earns its place |
|---|---|---|
| **Tile** | `light`, `outlined`, `dark` | Foundational, no elevation, deliberately flexible about its content. [layout.md](layout.md) 4 specifies all three fills. **The card is a separate thing**, see section 3 |

**Eight components.** Carbon publishes forty, Atlassian around seventy, Coinbase over a hundred
and forty. Those are product suites.

---

## 3. The card and the tile are different things

**Owner ruling, 7 September 2026: the card stays.** The 8 August research had concluded there
should be no card, on the grounds that none of the three published systems ships a general one.
The owner ruled against that, and the rule files were already right: [layout.md](layout.md)
section 3 gives the card its own radius and section 4 distinguishes the two by what they hold.

**The difference is the content, not the styling.** A card grid holds equivalent things at
equal weight. A bento holds unequal things at deliberately unequal weight. Using one where the
other belongs is the failure [layout.md](layout.md) section 11 already names.

What the research found, kept because it explains why the question came up at all: Carbon
ships only a tile and says *"tiles are simple and foundational, cards can be very complex"*;
Atlassian publishes no card component; Coinbase has eleven specialised cards and no generic
one. **Those are product suites and hurulab is one website.**

---

## 4. The two patterns

The level stays, owner ruling 8 August 2026, governed by Carbon's definition, which is the only
published one of the three: **a combination of components that cannot ship as a single piece of
code.**

| Pattern | What it is |
|---|---|
| **The bento** | Unequal tiles composed into a grid. The word in [language.md](language.md) most likely to be lost in implementation, because the lazy version looks reasonable |
| **The section** | One statement heading, full bleed, one hairline above, section rhythm below. The unit every page is built from |

Both are already described in [layout.md](layout.md). **Nothing else becomes a pattern until a
real page needs it.**

---

## 5. The order to build in

1. **Button and button icon.** The most-used component, and the one with a settled reference.
2. **Link.** Missing entirely, and the rule that buttons act and links navigate cannot be
   honoured without it.
3. **Text input and checkbox.** Already specified, already drawn once.
4. **Message and tag.**
5. **Tile**, then the two patterns from it.

**One component at a time, drawn and reviewed before the next.**

---

## 6. What was cut, and why

**Four button variants, from seven to three.** Atlassian's rebuild is the reason, in their own
words: their button *"was trying to do too much"*, being *"large and slow"* with *"a lot of
visual variation and customization"* because one-size-fits-all could not meet real needs. They
split it into purpose-built components, removed the customization APIs, and encoded the
accessible choice into the API so a link, a button and a link that looks like a button are a
deliberate choice. `button-primary-icon` and `button-border-icon` are cut as variants because a
trailing icon is a property of a label, not a variant of a component.

**Button sizes.** Carbon publishes seven, Atlassian two, and this site needs one. A size scale
is added when a second size is actually needed.

**"Composed" and "Controls" as levels.** Invented categories appearing in none of the three
systems. What was in them is now a component or a pattern.

**Everything in the research's own skip list**, named as product-suite overhead for a team with
one website: multi-breakpoint grid mathematics, button-group combination matrices, per-component
accessibility gates and formal definitions of done, dual motion systems and token packages, and
panel behavior taxonomies.

---

## 7. What the research confirmed rather than changed

Recorded so these are not re-argued. Every one was already a hurulab rule, reached
independently, and the three systems agree with it:

- **One primary action per screen.** All three state it.
- **Buttons act, links navigate.** Carbon and Atlassian both state it as a rule.
- **Never rely on color alone.** [color.md](color.md) 8.
- **A label is always required**, even when visually hidden. All three.
- **A label wraps, never truncates.** Owner ruling 8 August, taking Carbon's rule over
  Atlassian's, because the copy here is controlled and the layouts bespoke, so truncation would
  only ever read as broken. Truncation is a product-density problem hurulab does not have.
- **Motion is conditional, never decorative, and frequency decides duration.**
  [motion.md](motion.md) already matches Atlassian's numbers and was reached independently.
- **Reduced motion is removed, not slowed.** [motion.md](motion.md) 7 matches Atlassian and is
  stricter than Carbon, which never names the media query.

---

## 8. Still open

- **Every component needs a "when not to use".** Carbon and Atlassian both publish one and the
  hurulab's rule files do not. Written per component, as each is built.
- **Anatomy, the named parts.** Both mature systems publish it. hurulab does not, and it is
  what makes a component discussable in words rather than by pointing at it.
