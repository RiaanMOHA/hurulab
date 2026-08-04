# QA issue: storybook visual fixes, 4 August evening

**Date:** 2026-08-04
**Status:** Completely fixed
**Reporter:** Owner, via three screenshots (qa-1, qa-2, qa-3)

## Issue description

Three visual defects in `docs/design-rules/storybook.html`, reported by screenshot:

1. The breakpoints table in the Layout section rendered its width numbers touching the
   descriptions, reading "360Small phone".
2. The pill radius sample did not read as a capsule; it looked like the panel beside it.
3. The icons row captions still said "lede", a type role the owner abolished the same day,
   and the four icon sizes were hard to tell apart with nothing beside them for scale.

## Root cause

1. `td.num, th.num` carried `padding-right: 0` while all cells pad only on the right, so the
   right-aligned number column had zero separation from the column after it.
2. The pill sample box was 12rem wide with its label at the bottom left, so its half-circle
   ends and button-like proportions did not read.
3. The captions were written before the lede role was dropped, and the icons stood alone, so
   the 1.2-step size differences had no reference to make them legible.

## Solution

1. The number column now pads right by `--s-6`.
2. The pill sample is 9rem wide and 3rem tall with a centered label, true button proportions.
3. Captions updated (`icon-lg · h4 and h5`), and each icon now sits beside a text sample of
   the role it pairs with, so the size relationship is visible instead of asserted.

## Files modified

- `docs/design-rules/storybook.html` - table cell padding, pill sample geometry, icon row
  captions and paired text samples.

## Verification results

### Code review

- Changes match the three reported issues and touch nothing else.
- All values are steps or existing tokens; no new raw values beyond the scale's own rem sizes.

### Browser testing

- Storybook reopened for the owner at the affected sections for visual confirmation; awaiting
  their eye at the time of writing. No automated browser harness exists in this project.

## Notes

The radius topic has a separate, larger owner decision in flight: the current radius rule is
declared wrong and Apple's continuous corner curvature is to be researched and adopted as the
only corner treatment. That decision will be recorded in its owning file when made; this fix
only made the existing sample honest.

The storybook still carries the pre-4-August type scale in its own CSS and must be synced to
the new two-ratio scale before Thursday's team review. Tracked in the session notes.

## CLAUDE.md updates

None - existing rules were sufficient.
