# Build: tokens and structure

Written 8 August 2026, when the project acquired a build and there was nothing to describe it.
**Rewritten 7 September 2026** when the storybook was dropped, owner ruling: sections 2, 4 and
5 were built on it and are now about the pages themselves.

**This file owns the engineering rules and nothing else.** Where a value lives is not a rule
about code: color values are [color.md](color.md), type [type.md](type.md), spacing
[spacing.md](spacing.md), radius and components [layout.md](layout.md), motion
[motion.md](motion.md). This file owns how those values reach the screen.

---

## 1. Never hardcode: tokens only

**Consume a token wherever one exists.** No raw hex, `rgb`, `oklch`, `px`, `ms` or
`cubic-bezier` in a component where a `--color-*`, `--text-*`, `--s-*`, `--radius-*`,
`--icon-*` or easing token covers it.

**A component names a semantic token, never a ramp step.** `--color-text-secondary`, never
`--neutral-700`. The ramps exist so the semantic tokens have somewhere to point;
[color.md](color.md) rule 2 owns this and it is the most-broken rule in any design system.

The sanctioned literals, and there are no others:

| Literal | Why |
|---|---|
| `1px` hairlines | A scaling hairline renders soft. [breakpoints.md](breakpoints.md) section 5 |
| `44px` tap floor | It exists to fit a fingertip, so it never scales |
| `999px` capsule | The capsule radius token is itself this value |
| `0`, `100%`, `fr`, `minmax` | Not values a token could carry |
| Media query widths | Custom properties cannot be used in a media query condition |

---

## 2. Where the values live

**There is no tokens file, and there does not need to be one yet.** `css/tokens.css` was
deleted 7 September 2026, owner ruling: nothing loaded it. A page opened by double-click from
disk cannot load a stylesheet next to it, so every self-contained page carries its own copy of
the values regardless.

**The rule files hold every value in words, and that is the source.** A tokens file is
generated from them when something actually serves the pages, and it decides nothing when it
exists: where it and a rule file disagree, the rule file wins.

**Every self-contained page carries its own copy of the `:root` block**, and that duplication is
deliberate rather than an oversight. A concept page must open by double-click straight off disk,
and a browser will not let a local file load its neighbours. The copies are checked by eye when
the tokens change. **They will drift**, and the fix is not to edit the pages continuously: it is
that when something serves them, they move onto the served copy or are retired.

---

## 3. The three levels

**Foundations, components, patterns.** Owner decision, 8 August 2026, replacing the six-level
atomic taxonomy. The vocabulary is used in the rule files and in conversation.

| Level | What it is |
|---|---|
| **Foundations** | The raw material: tokens, color, type, spacing, breakpoints, radius, icons, motion, the logo. Not interface, ingredients |
| **Components** | The pieces a person acts on or reads: buttons, inputs, the checkbox, tags, cards, status messages |
| **Patterns** | Whole arrangements. A pattern is a screen, not a piece of one |

**If placing a thing takes more than a minute, file it at the simpler level and move on.** The
taxonomy serves communication and nothing else.

---

## 4. Where a component is drawn

**Dropped, 7 September 2026.** This section described `storybook.html` and the Storybook tool as
the single source every specimen was cloned from. Both were removed on the owner's instruction:
there is no storybook.

**What replaces it: nothing yet, and that is a known gap.** The rule files specify every
component in words. Nothing draws them. When something does, it becomes the single source and
this section is rewritten around it.

**The rule that survives the storybook, because it was never really about it:** a component is
drawn in exactly one place, and every page takes it from there. Two drawings of one component
means one of them is wrong and nobody knows which.

---

## 5. Writing a component

1. **Specify it in the rule file that owns it**, naming semantic tokens only. Never a raw value
   and never a ramp step.
2. **Give it a class that names the thing**, matching the rule file: `button-primary`, not
   `btn-1`. **The component name leads and the variant follows**, so `button-icon`, never
   `icon-button`. [layout.md](layout.md) section 5 names the three button variants.
3. **Draw every state**, per [color.md](color.md) section 5: rest, hover, pressed, focus,
   disabled. A state that is specified and never drawn is a state that gets reinvented wrong.
4. **Draw it once.** Until something serves components, a page carries its own copy, which is
   the known duplication in section 2.

**A page never defines a component of its own.** If a page needs something no component does,
the component changes in the rule file and every page gets it.

---

## 6. Accessibility floor

Not negotiable, and cheaper to build in than to retrofit.

- **44px minimum** on anything interactive, at every width.
  [breakpoints.md](breakpoints.md) section 5.
- **Real controls, never clickable divs.** Anything activated is a `<button>`, or an `<a>` when
  it navigates. A mouse-only handler on a `div` is invisible to a keyboard and to a screen
  reader.
- **A visible focus ring on everything**, `:focus-visible`, never `:focus`, and never removed
  without a replacement. [color.md](color.md) section 6.
- **An icon-only control carries a text label** for assistive technology. A decorative icon
  inside a labelled control is `aria-hidden="true"`. [icons.md](icons.md) section 3.
- **Reduced motion is mandatory**, [motion.md](motion.md) section 7. The one exemption is a demo
  whose subject is motion itself.
- **Never block pinch-zoom.** No `maximum-scale`, no `user-scalable=no`.

---

## 7. What fails review

A raw hex, `rgb` or `oklch` in a component. A ramp step named where a semantic token exists. A
`px` value that is not a hairline or the tap floor. A story carrying its own markup or its own
values. A component defined by a page rather than by its rule file. A specified state that is never drawn. A control that is a `div`.
A removed focus outline with nothing in its place.
