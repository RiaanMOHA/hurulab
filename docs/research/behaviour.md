First, a scope note. You named three systems (IBM Carbon, Atlassian, Coinbase) but the questions ask about "all six." I researched the three named ones directly from their live documentation. If you have three more in mind, name them and I'll extend this. Everything below is from the actual docs, quoted where they publish a rule, with absences called out plainly.

One structural fact that shapes almost every answer: \*\*these three are not the same kind of artifact.\*\* Carbon and Atlassian are design-and-usage systems with foundation essays, do/don't guidance, and content teams behind them. \*\*Coinbase CDS (cds.coinbase.com) is a developer component library\*\* — React/React Native, "open source for creating crypto apps," with a "Copy for LLM" button on every page. It documents props, states, and examples. It largely does \*not\* publish design-level rules about motion, content, or composition. That absence is the single most important thing to know about it, and it recurs throughout.

\---

\#\# Motion

\*\*Q1 — Motion documented per-component vs. in the abstract.\*\*  
Carbon documents motion abstractly. The Motion overview says microinteractions are "built in," but "the motion design of the overarching UI... is up to each product team." A button's page does \*not\* describe its hover on the Usage tab — it says "The default and interactive states of buttons should follow the button Style tab guidelines," pushing states/motion to a separate Style tab.  
Atlassian is mid-migration: motion lives in the Motion foundation, and semantic tokens like \`motion.popup.enter\` are "associated with the limited component set that has been released for now." So it's tokenized and intended to attach to components, but not yet narrated on each component's page.  
Coinbase: essentially neither. Its "Animation" nav section is just Lottie components. The Button page documents a loading spinner ("indeterminate ProgressCircle") but says nothing about hover/press motion.

\*\*Q2 — What should and shouldn't animate; anything excluded.\*\*  
Carbon assigns motion by \*type\*, not by allow/deny list: productive motion for "button states, dropdowns, revealing additional information," expressive for "opening a new page... System alerts and the appearance of notification boxes." Its clearest exclusion is a self-check, not a component ban: "Is your motion frequently noticed by average users? If so, consider removing or minimizing it."  
Atlassian is explicit that motion is conditional, not decorative: "Before adding motion ask, if I remove this, does the user lose information or context?" and "If an animation makes the user wait without adding meaning, remove it." No component is named as forbidden.  
Coinbase: no such guidance published.

\*\*Q3 — prefers-reduced-motion.\*\*  
Atlassian is the only one that states it as a rule with a defined behavior: "Currently, when reduced motion is active, motion is off and instant," plus "Never use motion that flashes, rapidly oscillates, or sweeps large areas." So: \*\*removed, not slowed.\*\*  
Carbon never names the \`prefers-reduced-motion\` media query. It gestures at the concern ("users... with impaired ability to perceive and handle motion") and says "Always provide alternatives for interface state transitions" and "Consider simplified or reduced motion designs" — a recommendation, not a rule, and it doesn't say remove vs. slow.  
Coinbase: absent.

\*\*Q4 — Maximum duration / frequency rule.\*\*  
Atlassian publishes the sharpest frequency rule, in the Motion "Best practices" under \*Tone down motion for frequent experiences\*: "If someone will trigger this motion dozens of times a day, keep it under 150ms. If they see it once a session, you have room for more expression." It also states "Make exit motion faster than entrances." Durations are banded: Interactions 50–150ms, Transitions 150–400ms.  
Carbon doesn't cap duration — it computes it ("the larger the change in distance... the longer the animation takes") and publishes tokens up to \`duration-slow-02\` (700ms). The closest to a max is in the motion evaluation checklist: microinteractions should "fall within a static duration ranging from 90–120 ms." One concrete frequency-ish rule: toast can "dismiss automatically after five seconds."  
Coinbase: absent.

\*\*Q5 — State change vs. arrival: different curves/names?\*\*  
Both mature systems separate them, with different vocabulary.  
Carbon names three easings: \*\*standard\*\* (element visible start-to-end, e.g., expanding tiles), \*\*entrance-ease\*\* (adding elements — modal/toaster appearing, dropdown opening), and \*\*exit-easing\*\* (removing elements). It even documents an exception: a side panel that leaves but "stays nearby" uses standard, not exit easing.  
Atlassian splits by \*duration band\*: "Interactions (50–150ms)... for hover and press states" (state change) vs. "Transitions (150–400ms)... for elements entering, exiting, or moving on screen" (arrival), with named curves like "Ease-out bold" for entrances and "Ease-in practical" for exits.  
Coinbase: absent.

\---

\#\# Breakpoints and responsive behaviour

\*\*Q6 — How many breakpoints, names only.\*\*  
\- \*\*Carbon: five\*\* — Small, Medium, Large, X-Large, Max.  
\- \*\*Atlassian: six\*\* — xxs, xs, s, m, l, xl (labeled Mobile / Tablet / Tablet / Desktop ×3).  
\- \*\*Coinbase: effectively three named responsive keys plus a base\*\* — \`base\`, \`phone\`, \`tablet\`, \`desktop\`.

\*\*Q7 — Where responsive behaviour is documented.\*\*  
Carbon documents it once, in the 2x Grid, and reinforces it via grid influencers and panel behavior; component pages inherit rather than restate it (they "respond to the grid").  
Atlassian also centralizes it in the Grid foundation ("Breakpoints are based on the viewport width, not the width of the main content area"), but individual component pages \*do\* add local responsive notes.  
Coinbase documents responsiveness once, centrally, as a \*\*styling API\*\*, not as behavior: on web, StyleProps take a responsive object (\`width={{ base: 200, tablet: 200, desktop: 400 }}\`). Component pages don't narrate small-screen behavior.

\*\*Q8 — Components that change shape, not just width.\*\*  
Carbon: the actionable notification — "On mobile screens the action button wraps under the body content." Also flexible side panels that collapse/expand and "push content beyond the edge."  
Atlassian: at the grid level, column count collapses (12 → 6 → 2\) and the whole layout component reflows navigation and panels; components truncate rather than reflow at the element level (see Q10).  
Coinbase: none published as narrative — shape change is left to the developer via responsive StyleProps.

\*\*Q9 — "Design at one width first" rule and order.\*\*  
Atlassian states it plainly: "Design for at least two device sizes from the table above, and preferably more. Always include mobile (xxs)." That's an at-least-two, mobile-mandatory rule rather than strict mobile-first.  
Carbon says test at every standard breakpoint ("test designs and code at each of these standard breakpoints") but does not mandate a starting width or order.  
Coinbase: absent (its \`base\` \= "no media query" is a technical default, not a design-order instruction).

\*\*Q10 — Overflow: wrap, truncate, scroll?\*\*  
This is a genuine disagreement (see Q27). \*\*Carbon says wrap:\*\* for a button, "the label should overflow and wrap to the second line. We do not recommend truncating a button label." \*\*Atlassian says truncate\*\* for the same component: "Text will truncate when buttons are in a narrow container to prevent wrapping onto a new line and breaking layouts," with an ellipsis, while keeping the full text for screen readers — but its content guidance still says "Avoid truncation whenever possible: shorten UI messages or wrap the text," and always provide access to the full text (tooltip). Carbon's tiles use "overflow scroll" for fixed-box grids. So each publishes a \*choice\*, and the two mature systems land on opposite defaults for buttons.  
Coinbase: no wrap/truncate rule published.

\---

\#\# Layout and composition

\*\*Q11 — Page structure above the component.\*\*  
Carbon: a \*\*grid\*\* (the 2x Grid), plus "screen regions" (header, global/local sidenav, content, footer, dialog) and defined panel behaviors (flexible/fixed/floating).  
Atlassian: \*\*layout primitives\*\* — Box, Inline, Stack, plus Grid, Bleed, Flex, and interactive Pressable/Anchor — combined with a \`Grid\` foundation and a \`Layout\` component for nav/panels/content.  
Coinbase: \*\*layout primitives too\*\* (VStack/Box and a Layout category of 14 components), but framed as code building blocks, not a documented page-composition methodology.

\*\*Q12 — What may sit inside a component; permitted-children lists.\*\*  
None of the three publishes an allow-list of permitted children for a card. The notable finding is Carbon's: \*\*"Carbon does not have a card pattern."\*\* Its Tile is "purposely flexible so product teams can determine their tile content," with "no pre-set styles." Cards are described as built on tiles but delegated out to separate pattern libraries. Atlassian describes card \*usage\* and message components but no permitted-children list. Coinbase has concrete card components (ContentCard, etc.) whose props tables constrain children by API, but no design-level permitted-children rule.

\*\*Q13 — Components next to each other: how many actions, order, forbidden pairings.\*\*  
Carbon is the richest here. Button groups should hold "either two or three actions"; more than three should go into menu buttons. It publishes a table of recommended combinations and a "combinations to avoid" list: "Do not use two high-emphasis buttons in a button group," "Do not use the secondary button in conjunction with non-primary buttons," "Do not use tertiary and danger tertiary buttons together," and more. On order, it notably \*revised\* its guidance: primary now leads on full-page (left) and sits right in wizards/dialogs.  
Atlassian: "Only include one primary button or call to action (CTA) in a page or area," and primary placement "should match the alignment of the button group" — right-align for focused tasks/modals (Z-pattern), left-align for full-page forms (F-pattern).  
Coinbase: shows composed examples (Cancel \+ Confirm; Cancel \+ Delete) but publishes no rule on count, order, or forbidden pairings.

\*\*Q14 — Who owns the gap between components?\*\*  
Atlassian is explicit that the \*\*parent/layout owns spacing\*\*, not the component's outer margin: use space tokens between elements, and "Only top-level containers need to align to the grid. Use space tokens for the elements inside them." Small elements "do not need to align to this grid."  
Carbon expresses it through the grid and spacing tokens ("Margins and padding are applied consistently"; vertical rhythm added to "the top or bottom margin of a box") but doesn't state a single crisp margin-ownership rule.  
Coinbase: gaps are set on layout primitives via props (\`\<VStack gap={2}\>\`) — parent-owns-gap in practice, but not stated as a rule.

\*\*Q15 — A reasonable-looking composition that's actually wrong (the earned failure modes).\*\*  
These are the most valuable answers.  
Carbon: "Do not use two high-emphasis buttons in a button group" (they compete); "Do not mix different variants of tiles in groups"; "Do not add a drop shadow to tiles" (tiles have no elevation, so a shadow miscommunicates hierarchy); and the alignment trap — "Do not align the edge of the ghost button with the rest of the content, even if it looks partially aligned" (align the \*label\*, not the container, because ghost buttons have invisible padding).  
Atlassian: "Don't run multiple simultaneous animations that pull attention in different directions"; "Never put tooltips on disabled buttons"; and the biggest one — avoid disabled buttons entirely because "they aren't reachable in the tab order and don't receive hover, focus, or click events, making them entirely inaccessible to some people."  
Coinbase: none published.

\---

\#\# Content and writing

\*\*Q16 — Writing guidance: top-level or buried?\*\*  
Carbon: \*\*top-level\*\* — a Content section (Overview, Writing style, Action labels), built on IBM Style.  
Atlassian: \*\*top-level\*\* — Content is a Foundation, with Language & grammar, Designing messages, and per-topic pages.  
Coinbase: \*\*none.\*\* There is no voice/tone or writing section; label guidance doesn't exist beyond example strings in component docs.

\*\*Q17 — Button labels: length, verb form, capitalisation, what a label may never say.\*\*  
Carbon: use the "{verb} \+ {noun} content formula" except for common actions (Done, Close, Cancel); sentence case by default; "Do not use only a noun as a button label"; left-align labels; don't truncate.  
Atlassian: "Start with the verb and specify what is being acted on"; sentence case ("Create work item," not "Create Work Item"); "Keep labels short and free of punctuation. Drop unnecessary articles, such as 'a' or 'the'" ("Create password," not "Create a password"); never vague/generic labels.  
Coinbase: the Button page describes variants and says buttons "communicate what action will occur," but publishes \*\*no\*\* rule on verb form, length, capitalisation, or forbidden labels.

\*\*Q18 — Error/status message wording and required structure.\*\*  
Carbon is the most structured: in a notification, "For error messages, tell users what stopped or can't be done in the title," and the body must "Explain how to resolve the issue... This is what IBM Style calls the 'user action.' User actions are mandatory for error messages." So a Carbon error must contain: what happened \+ what to do next.  
Atlassian's Designing messages defines an error message as one that "alerts people of a problem that has occurred and informs them what to do next" — same two-part structure, less prescriptively enforced, plus tense guidance ("We can't load…" present tense; "Upload failed" past tense for completed failures).  
Coinbase: absent.

\*\*Q19 — Character limits / length guidance and overflow of real words.\*\*  
Carbon: notifications should "not exceed two lines of text"; when longer, "use an actionable notification and include a short message with a 'View more' link." Buttons wrap rather than truncate.  
Atlassian: no hard character counts, but strong overflow guidance — avoid truncation, "shorten UI messages or wrap the text," "Test your designs using multiple screen widths and magnification levels," and if unavoidable use a tooltip for the full text. Lists "limit… to 6 items or less."  
Coinbase: absent.

\*\*Q20 — Capitalisation across the interface; do they differ?\*\*  
They agree, strongly. Carbon: "Use sentence-case capitalization for all UI text elements," and explicitly "Do not use title case" and "Do not use all caps," rejecting the notion of "important words." Atlassian: "Use sentence case in all titles, headings, menu items, labels, and buttons," capitalize only proper nouns. Coinbase: no stated capitalisation rule. So no disagreement — one shared rule, one silence.

\*\*Q21 — "Words first, design second" (or reverse)?\*\*  
None states it as a slogan. Atlassian comes closest philosophically, treating content as a Foundation with its own principles and an accessibility principle to "Keep experiences and language simple… concise and plain language… reading level of ages 12 to 14." Carbon frames tone as adapting to context ("the words chosen for error messages differ greatly from... an onboarding flow") but doesn't assert content-first primacy. Coinbase: silent. So: no direct quote to give you — an absence worth noting.

\---

\#\# Interaction and accessibility

\*\*Q22 — Mandatory states; focus separate from hover; per-component keyboard behaviour.\*\*  
Carbon documents states on the Style tab and keyboard per component: for Button, "reached by Tab and selected with Space or Enter"; for the primary button, "When dialogs appear, the primary button typically takes focus… pressing Enter will activate the primary button." Notifications document a full keyboard model (Tab between action and close, Esc to close) and screen-reader behavior for VoiceOver/JAWS/NVDA. Focus is treated as its own concern (its own Accessibility → Keyboard foundation).  
Atlassian documents states as component props (default, primary, subtle, disabled, selected, loading) and gives per-component keyboard/semantic rules — most sharply, use \`\<button\>\` for actions and \`\<a\>\` for navigation because "using the wrong one can make experiences harder to use."  
Coinbase: lists states as props (loading, disabled) and gives a minimal per-component a11y note (provide \`accessibilityLabel\` for icon-only buttons) but no keyboard-behavior narrative.

\*\*Q23 — Touch targets; does it apply on desktop too?\*\*  
Atlassian: under Limited mobility, "Support keyboard navigation, large selectable targets," framed as universal, not touch-only. It doesn't publish a pixel minimum on these pages.  
Carbon: no explicit touch-target size rule surfaced in the pages reviewed (button sizes are given for layout pairing, e.g., "Small… paired with 32px small sized input fields," not as a touch minimum) — an absence relative to what you might expect.  
Coinbase: absent.

\*\*Q24 — Meaning carried by colour (status): rule requiring a second carrier?\*\*  
Carbon: yes, structurally. Notification "status is associated with a specific color and icon" — every status ships color \*plus\* an icon (Error \= red \+ error-filled icon, Success \= green \+ checkmark), and it warns "do not depend on text styling to convey meaning."  
Atlassian: explicit rule — "Never rely on color alone to convey meaning," backed by contrast ratios (4.5:1 text, 3:1 large text/graphics), and messages pair color with an icon.  
Coinbase: no stated rule; status components exist but the second-carrier requirement isn't documented as design guidance.

\*\*Q25 — Definition of done / ship checklist.\*\*  
Carbon publishes the most tangible per-component gate: each component page shows an \*\*Accessibility testing status\*\* table (Default state, Advanced states, Keyboard navigation, Screen reader) marked Tested/Manually tested, and components "follow the IBM Accessibility Checklist which is based on WCAG AA, Section 508, and European standards."  
Atlassian references "Accessible design requirements — Your checklist for creating inclusive experiences" and eight accessibility principles, though the checklist link is Atlassians-only.  
Coinbase: no published definition of done; accessibility is stated as a component feature ("accessible out of the box"), not a review gate.

\---

\#\# What to take

\*\*Q26 — Where they agree (likely real rules).\*\*  
The genuine consensus, strongest where all who speak on it concur:  
\- \*\*Sentence case everywhere\*\* (Carbon and Atlassian explicit; Coinbase silent, not contradicting).  
\- \*\*One primary action per page/area\*\* (Carbon and Atlassian both state it).  
\- \*\*Never rely on colour alone; pair status with an icon or text\*\* (Carbon and Atlassian both; the most cross-system-robust accessibility rule here).  
\- \*\*Buttons for actions, links for navigation\*\* (Carbon: "Do not use buttons as navigational elements"; Atlassian says the same at the HTML level).  
\- \*\*Verb-led, specific button labels\*\* (Carbon's {verb}+{noun}; Atlassian's verb-first).  
\- \*\*Spacing belongs to the layout/parent via tokens, not to the component's own margins\*\* (Atlassian explicit; Carbon via grid/tokens; Coinbase via \`gap\` props).  
\- \*\*Motion is conditional, not decorative; tone it down for frequent interactions\*\* (Carbon's "remove if noticed"; Atlassian's "under 150ms if triggered dozens of times a day").

\*\*Q27 — Where they disagree (these are yours to decide).\*\*  
\- \*\*Overflow of a button label: wrap vs. truncate.\*\* Carbon: wrap to a second line, never truncate. Atlassian: truncate with an ellipsis to protect layout. This is a real, reasoned split.  
\- \*\*Reduced motion: remove vs. slow/soften.\*\* Atlassian removes it ("off and instant"). Carbon suggests "simplified or reduced" alternatives without committing. Coinbase says nothing.  
\- \*\*Card as a first-class component.\*\* Coinbase ships real Card components; Carbon deliberately refuses ("Carbon does not have a card pattern"), offering only flexible tiles.  
\- \*\*Duration philosophy.\*\* Carbon computes duration from travel distance (dynamic, up to 700ms). Atlassian bands it and caps frequent motion under 150ms. Different mental models.  
\- \*\*How much to document at all.\*\* Carbon/Atlassian write design rules; Coinbase documents an API and lets the developer decide. Whether your system \*prescribes\* or \*enables\* is itself a decision these three don't agree on.  
\- \*\*Breakpoint count and naming\*\* (5 vs. 6 vs. \~3) — there's no shared truth here, so pick to fit your content, not to match a big product suite.

\*\*Q28 — For a small team building one marketing site, no product behind it.\*\*  
What genuinely matters:  
\- \*\*Sentence case, verb-led CTA labels, one primary action per section.\*\* Cheap, universal, immediately visible on a marketing page. Adopt wholesale.  
\- \*\*Never rely on colour alone; pair any status/feedback with an icon or text.\*\* Keep this even though you have few states — it's the one accessibility rule with real legal and usability weight for public sites.  
\- \*\*Reduced-motion handling.\*\* Marketing sites \*love\* motion, so this is where you'll actually get burned. Take Atlassian's rule verbatim: respect \`prefers-reduced-motion\`, make it off/instant, and never flash or sweep large areas. Also steal the frequency instinct — but inverted: your motion is low-frequency and expressive (Carbon's "expressive" category), so you have room, as long as it degrades cleanly.  
\- \*\*Parent-owns-the-gap spacing with tokens.\*\* Even a tiny site benefits; it's what keeps a landing page from drifting. Low overhead.  
\- \*\*Wrap vs. truncate:\*\* for a marketing site, \*\*wrap\*\* (Carbon's rule). You control the copy, layouts are bespoke, and truncated marketing copy looks broken. Truncation is a product-density concern you don't have.

What to skip as product-suite overhead:  
\- \*\*Five/six-breakpoint grids and 2x-grid math.\*\* You need roughly two (mobile \+ desktop), maybe three. Carbon's fixed/fluid/hybrid box theory and Atlassian's fixed-wide/fixed-narrow/fluid taxonomy are for dashboards and data tables you won't build.  
\- \*\*Button-group combination matrices and forbidden-pairing tables.\*\* These exist because large suites have toolbars with many actions. A marketing page has one or two CTAs; the whole apparatus is dead weight.  
\- \*\*Per-component accessibility testing-status gates and formal definitions of done.\*\* Run one WCAG AA pass (contrast, keyboard, focus visible, alt text, reduced motion) rather than instituting Carbon's per-component review pipeline.  
\- \*\*Productive-vs-expressive dual motion systems, duration tokens, and easing token packages.\*\* Pick two or three tasteful easings and durations and stop. The token machinery pays off across hundreds of components, not one site.  
\- \*\*Tile-vs-card distinctions, panel-behaviour taxonomies, semantic message-component selection tables.\*\* Product-app furniture. A marketing site uses sections, cards, and a nav — no local sidenav, no flags, no toasts.

The through-line: from these three, take the \*\*content and accessibility rules\*\* (they're universal and cheap) and the \*\*reduced-motion rule\*\* (it's where a marketing site actually fails), and leave the \*\*grid systems, component-combination governance, and token infrastructure\*\* — that scaffolding earns its keep only when you're maintaining a large, dense product suite.

If you name the other three systems, I'll run the same passes and fold them into the agree/disagree and skip lists.  
