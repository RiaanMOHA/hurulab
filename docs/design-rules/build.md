# Build: tokens, structure, and the storybook

Written 8 August 2026, when the project acquired a build and there was nothing to describe it.

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

**`css/tokens.css` is the tokens file.** Every value in it is lifted from the rule file that
owns it, and each block names that file. It decides nothing: **when it and a rule file
disagree, the rule file wins and the tokens file is corrected.**

**`docs/design-rules/storybook.html` carries a second copy of the same `:root` block**, and that
duplication is deliberate rather than an oversight. The page must open by double-click straight
off disk, and a browser will not let a local file load its neighbours. The two are checked by
eye when either changes; they collapse to one copy only if the page is ever served instead.

---

## 3. The three levels

**Foundations, components, patterns.** Owner decision, 8 August 2026, replacing the six-level
atomic taxonomy. The vocabulary is used in the storybook, in story titles and in conversation.

| Level | What it is |
|---|---|
| **Foundations** | The raw material: tokens, color, type, spacing, breakpoints, radius, icons, motion, the logo. Not interface, ingredients |
| **Components** | The pieces a person acts on or reads: buttons, inputs, the checkbox, tags, cards, status messages |
| **Patterns** | Whole arrangements. A pattern is a screen, not a piece of one |

**If placing a thing takes more than a minute, file it at the simpler level and move on.** The
taxonomy serves communication and nothing else.

---

## 4. The storybook, and how a story finds its markup

`storybook.html` is **the single source of every specimen.** Storybook stories hold no markup
and no values of their own: each clones its section out of that page by id, through
`section(id)` in `docs/design-rules/stories/source.js`.

**One drawing, two views.** An edit to the page reaches both, and there is never a second copy
of a component to keep correct. This is the arrangement `map-prototype` uses and the reason the
whole thing holds.

```
docs/design-rules/
  storybook.html          the single source. Every specimen is drawn here
  stories/
    source.js             the cloner: section(), specimen(), injectPageStyles()
    foundations.stories.js
.storybook/
  main.js                 where stories live, which addons
  preview.js              the four breakpoints in the viewport toolbar
css/tokens.css            the tokens, lifted from the rule files
```

`pnpm storybook` runs it. `pnpm storybook:build` produces a static copy.

**A specimen is taken, never painted.** A story shows the real component. If a story draws
something the page does not, the two will disagree and only one of them is checked.

**The page's script must survive being run over one section.** It fills its tables by id and
assumes the whole page is present, so `source.js` absorbs a lookup for an id the current story
does not have. Without that, the first missing id throws and every specimen after it silently
fails to draw. That is not a hypothetical: it is what happened on 8 August, and the symptom was
a page of correct-looking headings above empty boxes.

---

## 5. Writing a component

1. **Draw it in `storybook.html`**, in the section for its level, naming semantic tokens only.
2. **Give it a class that names the thing**, matching the rule file: `button-primary`, not
   `btn-1`. [layout.md](layout.md) section 5 names the seven button variants.
3. **Add its story**, cloning the section. No markup in the story.
4. **Draw every state beside it**, per [color.md](color.md) section 5: rest, hover, pressed,
   focus, disabled. A state that is specified and never drawn is a state that gets reinvented
   wrong.

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
values. A component drawn in a story but not in `storybook.html`. A component defined by a page
rather than by its rule file. A specified state that is never drawn. A control that is a `div`.
A removed focus outline with nothing in its place.
