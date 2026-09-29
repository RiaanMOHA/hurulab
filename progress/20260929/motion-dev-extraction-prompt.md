# motion.dev extraction prompt (paste into Claude in Chrome)

Run this on the motion.dev example page you currently have open.

---

## Your job

Inspect the motion.dev example on this page. Extract everything needed to fully recreate its motion, interaction, transition, and animation behavior, and write it to a single Markdown file. Another instance of Claude (Claude Code, in VS Code) will read that file and recreate the exact same motion inside a different project, keeping that project's own fonts, colors, spacing, and design tokens. So your output must capture the motion completely and separately from the cosmetics.

Be as thorough as physically possible. Do not summarize, do not round, do not guess. If you cannot determine a value, say so explicitly and state why. Never write "standard", "typical", "roughly", "approximately", or "about". Report measured values only, and always state the method you used to get each value (for example: read from source, read from DevTools computed style, sampled during playback, timed from recording).

## How to inspect (do all of these)

1. Identify the live demo/preview and the code panel on this page. Open the code panel or code tab. If the example uses a sandbox (CodeSandbox, StackBlitz, an embedded iframe), open it and expand every file.
2. Copy the full verbatim source of every file the example exposes: the component(s), variants/config objects, hooks, helper functions, imports, CSS or Tailwind classes, and any constants. Keep them exact, including whitespace and comments. Label each snippet with its filename or tab name.
3. Read the rendered DOM of the demo. Record the element hierarchy: which element is the container, which children animate, and the parent-child nesting that the motion depends on.
4. Interact with the demo yourself and observe it running. Trigger every state: hover, press/tap, click, drag, focus, scroll, in-view, open, close, exit. For each interaction, watch what moves and how.
5. Use DevTools while it plays. Inspect computed styles and the element's inline transform/opacity/filter during the animation. Sample values at start, mid, and end of each transition. Read transition-duration, transition-timing-function, animation-name, keyframes, and any CSS custom properties in play.
6. Capture the actual runtime numbers as the animation plays (measured), then compare them to what the source code says (declared). If they differ, report both and flag the mismatch. The runtime behavior is the source of truth for what to recreate.
7. Give every distance or size as both pixels and a ratio (for example: travels 48px, which is 0.5 of the 96px menu radius). Ratios survive a change of design system; raw pixels may not.

## Output: one Markdown file

Filename: kebab-case, derived from the example name (for example: react-radial-menu.md).

Structure the file exactly like this:

### 1. Source metadata
- Page url.
- Example name.
- Date captured.
- Motion library used on the page and version if visible (for example: Motion / framer-motion, CSS, GSAP).
- List of methods you used, so Claude Code knows how each value was obtained.

### 2. What it is
One short plain-language paragraph: what the user does and what happens in response. Enough for Claude Code to understand the intent before reading the numbers.

### 3. Verbatim source
Every file/snippet the example exposes, exact, each in its own fenced block labeled with its filename or tab. Do not edit or clean it. This is the reference, not the thing to copy verbatim into the project.

### 4. Structure inventory
- The element/component hierarchy that the motion relies on (container, animated children, nesting).
- For each element: what role it plays in the motion and what triggers it.
- Any state machine: list the states (for example: closed, opening, open, closing) and the transitions between them.

### 5. Motion spec (the portable part, the most important section)
For every distinct animation in the example, give a labeled block containing:
- Trigger: mount, hover, press/tap, click, drag, scroll, in-view, focus, exit, layout change, or state transition.
- Target: which element animates.
- Properties animated: each property (transform x, y, scale, rotate, skew; opacity; filter; clip). Color is cosmetic, so list it in section 8 instead.
- From -> to values for each property, with pixels and ratios where spatial.
- Duration (declared and measured).
- Easing or spring: if easing, the curve or cubic-bezier. If spring, the type and every parameter present (stiffness, damping, mass, bounce, velocity, or duration-based spring settings).
- Delay.
- Stagger: amount between children, direction, and origin (for example: from center, from first, from last).
- Transform-origin / anchor point, with ratio.
- Orchestration: the order children animate relative to the parent and to each other, and whether the parent waits for children or the reverse.
- Gesture parameters if any: drag constraints, elasticity, momentum, snap, threshold to trigger.
- Repeat / loop / yoyo settings.
- Exit behavior: how it animates out, if different from in.

### 6. Measured vs declared
A short table or list of any place where what you measured at runtime differs from what the source code declares. State the method for each. If there are no differences, say so explicitly.

### 7. Interaction and behavior notes
- The full behavior in order: input -> response -> settle.
- Edge cases you observed (rapid re-trigger, interrupt mid-animation, multiple children, empty state).
- Reduced-motion handling if the example has any (prefers-reduced-motion).
- Responsive or breakpoint-dependent behavior if the motion changes with viewport size.

### 8. Cosmetic inventory (reference only, to be replaced)
List everything that is look-and-feel rather than motion: colors, fonts, font sizes, border radius, shadows, background, exact pixel sizes that are purely visual, icon/svg choices. Mark this section clearly as "reference only". Claude Code will decide which of these to keep and which to swap for the target project's own tokens. Do not omit anything, but do not present these as values to copy.

### 9. Assets
Any icons, SVGs, or images the motion needs to make sense (for example: the menu item icons). Note them so Claude Code can substitute the project's own equivalents. Include the SVG source if the page exposes it.

### 10. Recreation brief for Claude Code
End the file with this instruction block, filled in for this specific example:

> Recreate the motion, interaction, transition, and animation described above exactly: same proportions, ratios, order, timing, easing/spring, stagger, orchestration, gestures, states, and hierarchy. Do not change the target project's fonts, colors, spacing, radius, shadows, or any design token. First detect how the target project already does animation (its existing library, CSS approach, or motion utilities) and implement in that same form. If the project has no established animation approach, choose one that fits its stack. Treat everything in section 8 as cosmetic reference only and replace it with the project's own styles. The runtime-measured values in sections 5 and 6 are the source of truth where declared and measured disagree.

### 11. Fidelity checklist
A checklist Claude Code can self-verify against after building, one line per item: each trigger fires, each property animates the same from -> to, durations match, easing/spring matches, stagger and order match, gestures behave the same, exit matches, edge cases handled, reduced-motion respected if present. Mark the target as matching the ratios in section 5, not raw pixels.

---

## Rules recap
- Measured values only, method stated for each.
- No "standard", "typical", "roughly", "approximately", "about".
- Pixels and ratios together for anything spatial.
- Keep motion separate from cosmetics.
- Verbatim source stays verbatim.
- If unknown, say unknown and why.
