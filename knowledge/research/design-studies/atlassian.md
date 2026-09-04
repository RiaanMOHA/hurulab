Here's what the current published documentation at atlassian.design actually says. One important structural note up front, because it shapes several of your answers: the site's top-level "Patterns" link currently redirects to the \*\*Rovo UI\*\* section — there is no standalone published "Patterns" catalog on the live site right now. The three working pillars are \*\*Foundations, Components, and Rovo UI\*\*. I'll flag that where it matters.

\---

\#\# The inventory

\#\#\# 1\. Every component, in Atlassian's own navigation grouping

Atlassian groups its Components section under these category headings (its exact names), with these components under each:

\*\*Forms and input:\*\* Button, Calendar, Checkbox, Comment, Date time picker, Dropdown menu, Focus ring, Form, Radio, Range, Select, Text area, Text field, Toggle

\*\*Images and icons:\*\* Avatar, Avatar group, Icon, Image, Object, Logo, Tile

\*\*Labels:\*\* Badge, Date label, Lozenge, Tag, Tag group

\*\*Layout and structure:\*\* Page, Page header, Panel

\*\*Loading:\*\* Progress bar, Skeleton, Spinner

\*\*Messaging:\*\* Banner, Empty state, Flag, Inline message, Modal dialog, Spotlight, Section message

\*\*Navigation:\*\* Breadcrumbs, Link, Menu, Navigation system, Pagination, Tabs

\*\*Overlays and layering:\*\* Blanket, Drawer, Inline dialog, Popup, Tooltip

\*\*Primitives:\*\* Box, Inline, Stack, Flex, Grid, Bleed, XCSS, Responsive, Text, MetricText, Pressable, Anchor, Focusable (the Overview page also lists Object under primitives-adjacent content, but the nav groups the above)

\*\*Status indicators:\*\* Progress indicator, Progress tracker

\*\*Text and data display:\*\* Code, Dynamic table, Heading, Inline edit, Table, Table tree, Visually hidden

\*\*Libraries:\*\* CSS, CSS reset, Design tokens, Motion, Popper, Portal, Pragmatic drag and drop

\*\*Tooling:\*\* App provider, ESLint plugin, Storybook addon, Stylelint plugin, UI Styling Standard

\*\*Deprecated:\*\* Atlassian navigation, Layout grid, Onboarding (spotlight), Page layout, Side navigation

Several items carry release-phase tags in the nav: Icon/Image/Heading/CSS/Panel/App provider/Date label are marked \*\*Beta\*\*; Skeleton is \*\*Early access\*\*; Page/Focus ring/Table/Drawer/Inline dialog/XCSS are marked \*\*Caution (intent to deprecate)\*\*.

\#\#\# 2\. Components Atlassian publishes that most systems don't

A cluster of these reflect Atlassian's specific context as a large, multi-app, enterprise React platform:

\- \*\*Primitives\*\* (Box, Stack, Inline, Flex, Grid, Bleed, Text, MetricText, Pressable, Anchor, Focusable, XCSS). Most design systems ship finished components; Atlassian also ships low-level, token-backed building blocks so teams can compose bespoke UI that stays "distinctly Atlassian." This ties directly to its stated principle: "provide opinionated building blocks, allowing designers and developers to compose complex experiences."  
\- \*\*Tooling as "components"\*\* — ESLint plugin, Stylelint plugin, Storybook addon, UI Styling Standard, App provider. Atlassian treats governance/enforcement tooling as first-class catalog entries because the system spans thousands of callsites across many products and must be enforced by lint rules and codemods (they migrated \~2000 button callsites this way).  
\- \*\*Libraries\*\* like Design tokens, Motion, Pragmatic drag and drop, Popper, Portal — infrastructure-level packages rather than visual components.  
\- \*\*Object\*\* and \*\*Tile\*\* — an "Object" is explicitly "an icon that represents an Atlassian-specific content type" (pages, issues, etc.), which only makes sense in Atlassian's content-object-heavy products (Jira/Confluence).  
\- An entire \*\*Rovo UI\*\* layer (Generative border, Skills tag, Rovo Button variant, etc.) reflecting their AI product push.  
\- \*\*Visually hidden\*\* and \*\*Focus ring\*\* as named components — an accessibility-first stance.

\#\#\# 3\. What Atlassian calls a "card"

This is the interesting one. \*\*Atlassian's design system does not publish a component named "Card"\*\* at all — there is no \`/components/card\` page. What most people mean by "card" maps onto a few differently named things:

\- \*\*Tile\*\* — "a rounded square that takes an asset and represents a noun." This is Atlassian's rounded-container primitive, but it's asset-sized (16–48px), not a content card. It's further split into \*\*Icon tile\*\* and \*\*Object tile\*\*, which both "inherit properties of tile."  
\- \*\*Panel\*\* (Beta) — "a container that displays contextual content alongside the main page."  
\- The word \*\*"card"\*\* appears only \*colloquially\* inside guidance rather than as a component. For example, Button's alignment guidance says "Cards can also left-align the primary action" and "long lists of cards" — using "card" as an informal layout concept with no formal definition or anatomy on the site.

So the honest answer: Atlassian publishes \*\*no first-class "Card" component\*\*; the container role is spread across \*\*Tile\*\* (and its Icon/Object variants) and \*\*Panel\*\*, and "card" survives only as an unofficial word in prose. (Note: the sibling \*Atlaskit\* library does ship a "Card" for smart-link/URL previews, but that's a separate library and not surfaced as a component on atlassian.design.) This is a case where the missing name is itself the finding — and where "tile" is the one word doing several jobs (base Tile, Icon tile, Object tile).

\---

\#\# The six that matter

\#\#\# BUTTON

\*\*4. Variants\*\* (Atlassian calls these \*appearances\*): \*\*Default\*\*, \*\*Primary\*\*, \*\*Subtle\*\*, \*\*Warning\*\*, \*\*Danger\*\*, \*\*Discovery\*\*, \*\*Rovo\*\*. (Related but separate documented components: Icon buttons, Link buttons, Button groups, Split buttons.)

\*\*5. States\*\* — documented \*\*once for the whole component\*\*, not per variant, under a "States" heading: \*\*Disabled\*\* (\`isDisabled\`), \*\*Selected\*\* (\`isSelected\`), \*\*Loading\*\* (\`isLoading\`). Additional layout/behavior treatments documented alongside: \*\*Full width\*\* (\`shouldFitContainer\`), \*\*Truncation\*\*, and icon placements.

\*\*6. Sizes\*\* — Atlassian uses the term \*\*spacing\*\*, with two options: \*\*Default\*\* ("used for most use cases") and \*\*Compact\*\* ("for tables" / tight spaces). There is no small/medium/large scale.

\*\*7. Named parts\*\* — \*\*Label\*\* ("text describing the button action"), \*\*Button\*\* ("the selectable area"), and \*\*Icon (optional)\*\*, which can be \*\*icon before\*\* or \*\*icon after\*\* the label. "Most buttons don't need an icon."

\*\*8. Usage / do-not rules:\*\*  
\- \*\*Use one primary CTA per page or area\*\* — "Don't use many calls to action in one page or container." (This is the explicit "how many" rule.)  
\- Use buttons for \*\*actions\*\*, links for \*\*navigation\*\* — don't substitute one for the other.  
\- \*\*Avoid disabling buttons\*\*, especially form-submission buttons; use validation instead (disabled elements leave the tab order).  
\- \*\*Never put tooltips on disabled buttons.\*\*  
\- Content: sentence case (not title case or all caps), short labels, verb-first, consistent with surrounding UI.

\#\#\# TEXT FIELD

\*\*4. Variants\*\* — under \*\*Appearance\*\*: \*\*Standard\*\* ("the default") and \*\*Subtle\*\* ("transparent until interaction or error"). It also documents a \*\*Character counter\*\* field and \*\*elements before/after input\*\*.

\*\*5. States\*\* — documented via \*\*Validation\*\* (Native and Custom), producing error/valid messages; plus disabled/required behavior demonstrated through the Form component. States are shown for the component as a whole, largely through form examples rather than a per-variant matrix.

\*\*6. Sizes\*\* — Text field has \*\*no documented size scale\*\*.

\*\*7. Named parts\*\* — \*\*Label\*\* ("must indicate the information the field requires… left-aligned directly above the input area"), \*\*Input area\*\* ("where people enter text"), \*\*Helper text (optional)\*\* (extra info/format hints). It also exposes container/input via data attributes \`data-ds--text-field--container\` and \`data-ds--text-field--input\`.

\*\*8. Usage / do-not rules:\*\*  
\- \*\*Always use a visible label\*\*, properly associated.  
\- \*\*Don't use placeholder text\*\* — put critical info in the label or helper text. "Search fields are the only exception," and only with a search icon and accessible label.  
\- \*\*Don't nest interactive elements\*\* in the field (causes focus issues).  
\- Don't overuse helper text.

\#\#\# CHECKBOX

\*\*4. Variants\*\* — Checkbox isn't framed as visual "variants" but as configurations: \*\*Default\*\*, \*\*Controlled\*\*, \*\*Uncontrolled\*\*, \*\*Disabled\*\*, \*\*Invalid\*\*, \*\*Indeterminate\*\*, \*\*Required\*\*.

\*\*5. States\*\* — documented \*\*once for the whole component\*\*, and explicitly enumerated in the Usage "Behavior" section: an \*\*individual\*\* checkbox has two states, \*\*selected\*\* and \*\*unselected\*\*; when \*\*grouped\*\*, there are three — \*\*selected, unselected, and indeterminate\*\* (the parent shows indeterminate when only some children are selected).

\*\*6. Sizes\*\* — \*\*no size options documented.\*\*

\*\*7. Named parts\*\* — \*\*Checkbox\*\* ("the selection control") and \*\*Checkbox label\*\* ("text label to describe what the checkbox is for").

\*\*8. Usage / do-not rules:\*\*  
\- Use when people select one-or-more from related items, or to get explicit confirmation.  
\- \*\*Don't use a disabled checkbox if it needs to stay in the tab order\*\* — use validation so screen-reader users get an error.  
\- Include error messages for required/invalid fields.  
\- Content: keep labels short; \*\*no punctuation after labels\*\*.  
\- Related steering: use Radio for single-select, Dropdown for compact single-select, Toggle for on/off.

\#\#\# CARD

As covered in Q3, there is \*\*no published Card component\*\*, so there are no variants, states, sizes, anatomy, or rules to report for it. The nearest published containers are \*\*Tile\*\* (variants: \*\*inset\*\* / \*\*non-inset\*\*; sizes 16–48px, chosen to match adjacent content height; parts: \*\*Tile background\*\*, \*\*Foreground element\*\*; rule: "don't mix inset and non-inset in a group") and \*\*Panel\*\* (Beta). I'd flag this as a genuine gap rather than invent card documentation.

\#\#\# FLAG (your "flag" choice)

\*\*4. Variants\*\* — two documented \*\*types\*\*: \*\*Default\*\* (dismissible) and \*\*Bold\*\*. Bold flags come in \*\*appearances\*\*: \*\*Information (info)\*\*, \*\*Warning\*\*, \*\*Error\*\*, \*\*Success\*\*. Default flags can also use \*\*Actions\*\* and custom \*\*Icons\*\* (or an avatar).

\*\*5. States\*\* — documented \*\*once for the component\*\*: \*\*collapsed\*\* and \*\*expanded\*\* states exist for bold flags (to reveal more info); default flags are dismissible, bold flags are not until resolved/expired.

\*\*6. Sizes\*\* — no size scale; flags appear bottom-left and overlay content.

\*\*7. Named parts\*\* — \*\*Icon (or avatar) and title\*\*, \*\*Message (optional)\*\* ("text longer than 5 lines will scroll"), \*\*Actions (optional)\*\* ("a maximum of two links"), \*\*Dismiss\*\* ("default flags only").

\*\*8. Usage / do-not rules:\*\*  
\- \*\*Actions: maximum of two.\*\*  
\- \*\*Never set warning or error flags to auto-dismiss.\*\*  
\- \*\*Never mix dismissible and non-dismissible flags in a stack.\*\*  
\- Multiple flags \*\*stack\*\*, newest on top; when one is dismissed older ones surface.  
\- Flags should sit \*\*above modals\*\*; use \`h2\` for the title; don't rely on color alone.

\#\#\# INLINE MESSAGE

\*\*4. Variants\*\* — under \*\*Appearance\*\*: \*\*Warning\*\*, \*\*Error\*\*, \*\*Confirmation\*\*, \*\*Info\*\*, \*\*Connectivity\*\* (plus a \*\*Default\*\* with an icon). \*\*Placement\*\* can be set (e.g. right).

\*\*5. States\*\* — behaves as a trigger \+ popup: the message is revealed on interaction. Documented for the whole component, not per variant.

\*\*6. Sizes\*\* — no size scale.

\*\*7. Named parts\*\* — \*\*Icon\*\* ("indicates the status… color and symbol give a quick visual indicator"), \*\*Title (optional)\*\* ("concise and bolded"), \*\*Message\*\* ("restricted to five lines in length").

\*\*8. Usage / do-not rules:\*\*  
\- \*\*Avoid messages longer than five lines\*\* (overflow truncates with an ellipsis, which isn't accessible).  
\- Recommend always including a title (icon-only can be missed).  
\- Use \`iconLabel\` for an accessible label when there's no title.  
\- Steering: use a \*\*Flag\*\* for confirmations needing minimal interaction; a \*\*Banner\*\* for critical system-level warnings/errors.

\#\#\# LOZENGE

\*\*4. Variants\*\* — two color sets. \*\*Semantic:\*\* Neutral, Success, Warning, Danger, Information, Discovery. \*\*Accent\*\* (mainly for user-generated content): accent-red, orange, yellow, lime, green, teal, blue, purple, magenta, gray. It also documents \*\*with icon\*\* (\`iconBefore\`) and \*\*trailing metric\*\* (\`trailingMetric\`) treatments.

\*\*5. States\*\* — Lozenges are \*\*non-interactive\*\* and have no interactive states. Documented once for the component. (If interactivity is needed, Atlassian says to use a \*\*lozenge dropdown trigger\*\* instead.)

\*\*6. Sizes\*\* — via \*\*spacing\*\*: \*\*Default\*\* and \*\*Spacious\*\* (\`spacing="spacious"\`, taller/more padding, \~32px). Also a \*\*maxWidth\*\* (default 200px, then truncation).

\*\*7. Named parts\*\* — \*\*Label\*\* ("text describing the attribute"), \*\*Icon (optional)\*\*, \*\*Badge (optional)\*\* (the \`trailingMetric\` prop adds a score/metric badge — only on semantic-colored lozenges).

\*\*8. Usage / do-not rules:\*\*  
\- Use lozenges for \*\*meaningful attributes\*\* (status, system state, priority, permissions, promotional labels); \*\*don't\*\* use them for descriptive metadata — use a \*\*Tag\*\* instead.  
\- \*\*Don't use accent colors when the label carries semantic meaning\*\* (unless user-generated).  
\- \*\*Don't\*\* put a badge inside an accent-colored lozenge or mix semantics.  
\- \*\*Don't\*\* add custom functionality — use a lozenge dropdown trigger for interactivity.  
\- \*\*Don't rely on color alone\*\*; \*\*don't\*\* use long labels (max width 200px, truncated text isn't focusable/accessible).

\#\#\# BADGE

\*\*4. Variants\*\* — \*\*new semantic appearances\*\*: Neutral, Information, Inverse, Success, Danger, Warning, Discovery; \*\*bold\*\* set: informationBold, successBold, dangerBold, warningBold, discoveryBold. It also documents \*\*legacy\*\* appearance names kept for backward compatibility (default, primary, primaryInverted, added, removed) and \*\*max value\*\* behavior (\`max\`, default 99 → "99+").

\*\*5. States\*\* — no interactive states; documented once for the component.

\*\*6. Sizes\*\* — no size scale; the bold appearances are for higher visual prominence, not a size.

\*\*7. Named parts\*\* — \*\*Label\*\* ("should only contain a numeric value") and optional \*\*letters or special characters\*\* (leading \+ / −, trailing d/K/M abbreviations).

\*\*8. Usage / do-not rules:\*\*  
\- \*\*Apply the correct semantic\*\* — "Don't deviate from established semantics."  
\- \*\*Use bold badges sparingly\*\*, only for high-importance elements like notification counts; don't use them for elements secondary to lozenges.  
\- \*\*Don't use badges without context\*\* unless they have an attached tooltip; pair with a label.  
\- Steering: Lozenge for non-numeric status, Tag for descriptive metadata.

A note on states across these six: Atlassian generally documents states \*\*once per component\*\*, not per variant. Button is the clearest example (a single "States" section covering Disabled/Selected/Loading regardless of appearance).

\---

\#\# How the system is built

\#\#\# 9\. Top-level sections (Atlassian's own words)

The site's own navigation lists: \*\*What's new, Get started, Foundations, Components, Patterns, Tools, Release phases, Contact us\*\* (plus a separate \*\*News\*\* area: Featured, Design blogs, Leadership talks, Team stories). In practice the "Design System" landing page presents the three working pillars as \*\*Foundations, Components, and Rovo UI\*\*, and the \*\*Patterns\*\* link currently redirects into Rovo UI rather than a distinct patterns catalog.

Atlassian's own definition of "the parts of the design system" is: "a collection of design guidelines, foundations, tools, and components." Foundations are described as "our tokens, guidelines, and visual styles: color, spacing, typography, and more." Components as "reusable building blocks that meet specific interaction needs. They combine to create intuitive user experiences." Foundations itself contains: \*\*Design tokens\*\* (Tokens); \*\*Guidelines\*\* (Accessibility, Content); and \*\*Styles\*\* (Spacing, Grid, Color, Typography, Iconography, Illustrations, Logos, Elevation, Border, Radius).

\#\#\# 10\. Component vs. pattern — Atlassian's own definition

Atlassian's published definition of a \*\*component\*\* is: \<cite index="0-1"\>"reusable building blocks that meet specific interaction needs. They combine to create intuitive user experiences."\</cite\> It does \*\*not currently publish an explicit side-by-side definition of "pattern"\*\* on the live site — the Patterns section redirects to Rovo UI, so there's no standalone "a pattern is…" statement to quote. The only place the two words are formally paired is the Contact us contribution policy, which treats "a design system component or pattern" as the large, system-wide unit that "takes time… every app and its use case, multiple brands, API design, and guidelines." So the honest answer: the component definition is published verbatim; a matching pattern definition is not currently exposed.

\#\#\# 11\. How a single component page is structured

Every component page uses the same tabbed structure, in this order: \*\*Overview\*\* (on some), \*\*Examples\*\*, \*\*Code\*\*, \*\*Usage\*\*, \*\*Changelog\*\*.

\- \*\*Examples\*\* — live, rendered demos grouped by concept, each with copyable React code and an "Edit in code sandbox" link. The internal ordering is consistent: variants/\*\*Appearance\*\* first, then \*\*States\*\*, then sizing/\*\*Spacing\*\*, then layout and icon treatments.  
\- \*\*Code\*\* — API/props reference for implementation.  
\- \*\*Usage\*\* — the guidance layer, consistently ordered as: intro, \*\*Parts\*\* (the anatomy), \*\*Accessibility\*\*, \*\*Best practices\*\* (with paired \*\*Do / Don't\*\* blocks), \*\*Content guidelines\*\*, a \*\*Data Center apps\*\* note, and \*\*Related\*\* links to sibling components.  
\- \*\*Changelog\*\* — version history.

Each page opens with the component name and a one-line definition, and has a right-hand "Contents" jump list.

\#\#\# 12\. Contribution rules for new components

Yes, these are published on the \*\*Contact us\*\* page, and they're notably restrictive right now. Who decides: the Atlassian Design System team (Atlassians contribute via a Slack channel; external users only via the per-page feedback collector). What's currently \*\*accepted\*\*: "Fixes" (bugs in code, Figma library errors, confusing docs) and "Small enhancements" (e.g., adding a new icon) — changes that "don't break existing behavior."

What's currently \*\*not accepted\*\*: "Major enhancements" (new feature on a component, or altering a property like a flag timeout) and "\*\*New components or patterns\*\*." Their stated reasoning: "Considering a design system component or pattern takes time. We have to think about every app and its use case, multiple brands, API design, and guidelines that apply to everyone… These changes require system-wide coordination and impact code, design, and documentation." So there isn't a published "proposal must show X, Y, Z" template — instead, new-component contributions are simply closed to outside proposals at present, with everything routed through the core team.

\---

\#\# What the rebuild changed and why — the mistakes already made

This is well documented under \*\*What's new\*\*, and it's the most useful part for you. Atlassian's recent rebuild spanned several fronts:

\*\*Buttons and links ("Evolving buttons and links," Mar 2025)\*\* — the most instructive. Their diagnosis, in their words: the old button "was trying to do too much" — "large and slow," with "a lot of visual variation and customization" because a "one-size-fits-all solution" couldn't meet real needs. The fixes: (1) split it into \*\*purpose-built components\*\* — icon buttons, link buttons, link icon buttons, split buttons — instead of one mega-component; (2) \*\*removed customization APIs and switched from dynamic to static styling\*\*, yielding \~10% faster renders (they cite 10.6% less hydration time, 22% less SSR via renderToString); (3) redesigned the \*\*API to force a deliberate choice between links, buttons, and links-that-look-like-buttons\*\*, which protects against accessibility "gotchas" by making semantics explicit. This is why Button now imports from \`@atlaskit/button/new\`. The migration itself is a lesson: \~2000 callsites, rolled out with lint rules and codemods.

The takeaways worth stealing: \*\*don't let one component absorb every use case\*\*; \*\*customization APIs are a performance and consistency tax\*\* they chose to remove; \*\*encode the accessible choice into the API\*\* rather than documenting it and hoping; and \*\*budget for migration tooling\*\* (lint \+ codemods) as part of any rebuild.

\*\*Typography\*\* (GA Sept 2025\) — moved to a brand-new typography system with new typefaces, rolled out "at scale."

\*\*Iconography\*\* (Sept 2025\) — "reinventing our iconography system at scale," a completely new icon set with a system behind it (this is why Icon and Image are still marked Beta).

\*\*Visual "UI refresh"\*\* (Apr 2025\) — "Atlassian's bold new visual style," a system-wide restyle, plus the ongoing lozenge/tag/badge "visual uplifts" you can see gated behind the \`platform-dst-lozenge-tag-badge-visual-uplifts\` feature flag and the Inline message motion behind \`platform-dst-motion-uplift-popup\`. Notably, they ship these visual changes \*\*behind feature flags\*\* rather than as hard cutovers.

\*\*Release governance\*\* — the rebuild is backed by an explicit lifecycle: three release phases (\*\*Early access → Beta → General availability\*\*) and two deprecation phases (\*\*Intent to deprecate / Caution → Deprecated\*\*), with a promise that "no General Availability feature will be removed… without a clearly announced deprecation period." You can see this lifecycle enforced right in the nav (Beta, Caution, Deprecated tags), which is arguably the biggest process lesson: \*\*make every component's maturity and deprecation status visible in the catalog itself.\*\*

One caveat on completeness: because the live \*\*Patterns\*\* section currently redirects to Rovo UI, I couldn't retrieve a published patterns catalog or a formal "pattern" definition — if that's central to your work, it may be worth revisiting, as it looks like an area mid-migration rather than a deliberate omission.  
