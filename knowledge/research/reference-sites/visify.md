# visify.au, read as a reference

**History, not truth. Nothing here is a hurulab rule.** The full 544-line capture it was
distilled from was `visifydesignsystemspec.md` at the project root, read line by line on
4 September 2026 and then deleted. This file is what survives the read: the mechanisms that
transfer to a hurulab page, and the ones that do not.

Where this file and `docs/design-rules/` disagree, **the rule wins, always.** A value from
here on a hurulab page is drift. What transfers is structure and behaviour, never a number and
never a colour.

The site is an Australian accounting firm's. Electric blue and acid lime, zero corner radius,
graph-paper and cardboard textures, torn-paper section joins, grey photo cut-outs with green
marker scribbles over them. None of that look is ours.

---

## 1. Why it was worth reading

Its page structure is the strongest part of it, and it answers the fault named on the espresso
bar page: twenty-two boards arguing twenty-two cases. Visify argues three, then repeats those
three.

---

## 2. The structural move, which is the find

**Name three things early, then reuse those three names for the rest of the page.**

Visify names Today, Yesterday, Tomorrow in its second section as a concept, then uses the same
three words again as its three packages, and its services in the footer map to them a third
time. The visitor learns one structure once and then recognises it everywhere. Three ideas do
the work of nine sections.

**For hurulab the three come from `brand.md`, never from visify.** The nearest thing the
evidence already supports is section 3, business, design and technology in one team, which all
five interviews say. Which three a page uses is an owner decision.

**Their nine sections are not a template to copy.** Recorded only so the mechanism is legible:
hero, the three named ideas, the same three as prices, why partner, is this right for you,
logos, testimonials, FAQs, contact. What transfers is the naming and the repetition, not the
running order.

---

## 3. The section shape

Every section on the page is the same four parts in the same order:

1. A small label, to say where you are
2. One large line, carrying the argument
3. A short paragraph
4. One action

Then the field alternates, dark to light to dark, full bleed, all the way down. The rhythm of
the page comes from the colour change, not from dividers or decoration. `layout.md` section 5
already sets an alternating rhythm for tiles, and section 2 already sets full bleed, so this
agrees with what we have.

**One primary action, repeated.** The same call sits in the header, in the hero, inside each of
the three cards, and in the closing section. Secondary and tertiary actions are visibly
lighter: an outlined button, then a plain text link. The visitor is never asked to choose
between two equal actions.

---

## 4. Hierarchy carried by treatment, not by size

Their levels stay apart even at similar sizes, because four things vary at once: weight, case,
tracking, colour, and a switch of typeface for accent words.

Their weight ladder, one job per weight: 900 section labels, 800 the primary button, 700
navigation, 600 all headings, 500 text links, 400 body.

**What transfers:** the discipline of a weight having one job, and hierarchy resting on more
than size. `type.md` section 6 already varies tracking and weight by role.

**What does not:** their uppercase, at three of those six levels. `copy.md` bans it, and
`type.md` section 1 rule 3 says there is no `text-transform` in this system. Their handwritten
second face is also closed to us: `type.md` allows two faces and names both.

---

## 5. Motion

Short, 0.2 to 0.3 seconds. What moves is colour, opacity and position, and the distances are
small. Nothing bounces or overshoots. Scroll reveals are a short fade plus a small upward
travel, staggered between related elements, running left to right and top to bottom. Cards lift
on hover. The menu is a full-screen overlay that wipes in.

**This is close to `motion.md` already:** our `reveal` is a fade up from `translateY(12px)` over
250ms, staggered in 60ms steps, and our card hover is `translateY(-6px)`.

**The one disagreement:** they use `ease-in-out` as the base curve for everything. `motion.md`
section 1 names that specifically as never a default, and gives `--ease` for entering and
`--ease-exit` for leaving. Ours is the ruling.

**Read against the espresso page's other named fault, eight patterns at once reading as noise:**
visify runs essentially two, a hover and a staggered reveal, over an entire site.

---

## 6. The four token mechanisms, judged against our rules

| Mechanism | Verdict |
|---|---|
| Ramps holding one hue and stepping only on lightness | We already do it, in OKLCH with a measured contrast ratio per step. Theirs is HSL, where equal lightness numbers are not equally light to the eye. Nothing to take. |
| Fluid `clamp()` type on a ratio | `breakpoints.md` is stricter: two ratios, 1.2 rising to 1.3, and both ends of every interpolation must be a legal step. Theirs runs one ratio then abandons it, jumping at h2 and freezing h1 flat at 80px. Nothing to take. |
| One spacing ratio across both the inset and the section rhythm | Theirs is 1.5 throughout, tidy. `spacing.md` runs ten steps with a job assigned to each. Different on purpose. |
| `calc(4px + 2ex)` line height | **The one idea worth an owner decision.** Leading is tied to the loaded font's x-height plus a fixed pad, so a fallback face keeps its rhythm without retuning. `type.md` section 6 sets leading per role by number instead. Adopting it needs a `px` in type, which section 1 rule 4 forbids, so it is two edits to one file or none. |

---

## 7. Ruled against here, and not reopened by this read

Each of these is already settled in the file that owns it:

- **Zero radius everywhere.** Ours is owned by the shape rules.
- **A second accent hue.** `color.md` forbids one.
- **Uppercase labels by `text-transform`.** `copy.md` bans uppercase; `type.md` has no
  `text-transform`.
- **`ease-in-out` as the base curve.** `motion.md` section 1, by name.
- **A `1366px` max content width.** `layout.md` section 2 is full bleed with no centred
  container, and `type.md` section 10 forbids a `max-width` or `ch` cap on text absolutely.
  This is the rule broken most often on concept pages, and visify breaks it, so do not take
  their measure advice.
- **A handwritten third face.** `type.md` allows two and names them.

---

## 8. Smaller observations, kept because they cost nothing

- Their header adapts to the section under it, swapping between a light and a dark treatment as
  the field changes. That is the natural consequence of alternating full-bleed fields.
- Their accent colour is used as a fill behind text, never as text on white, because it is too
  light to read. Ours is `color.md`'s problem and already measured, but the principle is the
  same one.
- Disclosure is an accordion with a `+`, used for questions only.
- Two icon registers coexist and never mix: a functional 1.5px stroke set, and a rough
  hand-drawn decorative layer.
- A skip link and a real 2px offset focus ring are present. `type.md` section 11 and the
  accessibility floor in `build.md` already require this of us.
