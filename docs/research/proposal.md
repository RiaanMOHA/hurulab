# Proposed component list

Built from `findings.md` and the owner's three rulings of 8 August 2026. **Nothing here is built
or decided.** It is the list to approve, reject or cut before any code is written.

**The test each component had to pass**, taken from Carbon's contribution rule: it has to be
*"useful to many teams and unique to the system"*. Read for one website: **it appears on more
than one page, or in more than one place on a page, and nothing already in the system does its
job.** Anything that failed that test is in the last section, with the reason.

---

## Foundations, unchanged

Nine sections, already built and rendering: color, semantic tokens, type, spacing, breakpoints,
radius, icons, motion, the logo. **This proposal changes nothing about them.**

---

## Components, grouped as Atlassian groups them

Carbon does not group at all, and Coinbase groups by engineering concern. **Atlassian's category
names are the only ones that describe what a reader is looking for**, and they are used here
unchanged rather than invented.

### Actions

| Component | Variants | Why it earns its place |
|---|---|---|
| **Button** | `primary`, `border`, `ghost` | Every page ends in an action. Three, not seven: see the cut list |
| **Icon button** | `icon`, `ghost-icon` | A separate component, not a button variant. This is Atlassian's own correction after their button "was trying to do too much" |
| **Link** | inline, standalone | Buttons act, links navigate. All three systems state it as a do-not, and hurulab has no link component at all |

**Every variant draws its own five states**, per the owner's ruling: rest, hover, pressed, focus,
disabled.

### Forms and input

| Component | Variants | Why it earns its place |
|---|---|---|
| **Text input** | default, invalid, disabled | The contact form. `color.md` 5 already specifies every state |
| **Checkbox** | unchecked, checked, indeterminate | Consent and options. Indeterminate because a parent with partly-selected children has no other honest state |

Both are already fully specified in `color.md` 5 and were built once today; rebuilding them is
renaming and re-drawing, not designing.

### Messaging

| Component | Variants | Why it earns its place |
|---|---|---|
| **Message** | `success`, `error`, `warning`, `info` | Form feedback. Warning's tokens exist in `color.md` and were missing from the code until today |

**Every one carries an icon and a word.** Not a style choice: under deuteranopia success, error
and warning all render as nearly the same olive.

### Labels

| Component | Variants | Why it earns its place |
|---|---|---|
| **Tag** | read-only | Capability lists, the marquee band, a phase label on the proposal pages. Read-only only: nothing here is dismissible or selectable |

### Containers

| Component | Variants | Why it earns its place |
|---|---|---|
| **Tile** | `light`, `outlined`, `dark` | Carbon's name and Carbon's model: foundational, no elevation, deliberately flexible about its content. `layout.md` 4 already specifies all three fills |

**Called a tile, not a card**, following Carbon: *"Tiles are simple and foundational. Cards can
be very complex."* None of the three systems publishes a general card.

**Seven components.** For comparison: Carbon publishes forty, Atlassian around seventy, Coinbase
over a hundred and forty. Those are product suites.

---

## Patterns

The level stays, per the owner's ruling, governed by Carbon's definition: a combination of
components that cannot ship as a single piece of code.

| Pattern | What it is |
|---|---|
| **The bento** | Unequal tiles composed into a grid. The word in `language.md` most likely to be lost in implementation, because the lazy version looks reasonable |
| **The section** | One statement heading, full bleed, one hairline above, section rhythm below. The unit every page is built from |

Two, and both are already described in `layout.md`. **Nothing else becomes a pattern until a real
page needs it.**

---

## What is cut, and why

**Four button variants**, from seven to three. Atlassian's rebuild is the reason, in their own
words: their button *"was trying to do too much"*, so they split it into purpose-built
components and removed the customization. `button-primary-icon` and `button-border-icon` are cut
as variants because a trailing icon is a property of a label, not a variant of a component: the
button takes an optional icon, and there is one fewer thing to name.

**The card.** None of the three publishes one. The tile does its job.

**Composed, as a level.** An invented category. What was in it is now a component or a pattern.

**Controls, as a level.** Also invented. Actions and Forms and input are Atlassian's real names.

**Button sizes.** Carbon publishes seven, Atlassian two, and this site needs one. A size scale
is added when a second size is actually needed.

**Everything in the research's own skip list**: grid mathematics, button-combination matrices,
per-component accessibility gates, dual motion systems, panel taxonomies.

---

## The order to build in

1. **Button and icon button.** The most-used component, and the one with a settled reference.
2. **Link.** Currently missing, and the rule that buttons act and links navigate cannot be
   honoured without it.
3. **Text input and checkbox.** Already specified, already drawn once.
4. **Message and tag.**
5. **Tile**, then the two patterns from it.

**One component at a time, drawn and reviewed before the next.**

---

## What is still open

- **Every component page needs "when not to use"**, which Carbon and Atlassian both publish and
  the hurulab storybook does not. It is written per component, as each is built.
- **Anatomy, the named parts.** Both mature systems publish it. hurulab does not, and it is what
  makes a component discussable in words rather than by pointing.
