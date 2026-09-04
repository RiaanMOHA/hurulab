I studied the live Carbon documentation (carbondesignsystem.com), reading the Components and Patterns overviews, the Contributing section, and the full Usage/Style pages for the six components you named. Everything below comes from those pages. Per your instruction, I've excluded all color, type, spacing, and radius values.

One structural fact worth stating up front, because it shapes your first question: \*\*Carbon's component navigation is a single flat, alphabetical list — it does not group components into functional categories.\*\* So where you asked for "the exact grouping its navigation shows," the honest answer is that the grouping is alphabetical, not thematic. I'll give you the real structure rather than invent categories Carbon doesn't publish.

\---

\#\# The inventory

\#\#\# 1\. Every component Carbon publishes

Carbon's left navigation and its Components overview page both present a flat A–Z list under one heading, \*\*"Components."\*\* There are no sub-categories. The published list:

Accordion · AI label · Breadcrumb · Button · Checkbox · Code snippet · Contained list · Content switcher · Data table · Date picker · Dropdown · File uploader · Form · Inline loading · Link · List · Loading · Menu · Menu buttons · Modal · Multiselect · Notification · Number input · Pagination · Popover · Progress bar · Progress indicator · Radio button · Search · Select · Slider · Structured list · Tabs · Tag · Text input · Tile · Toggle · Toggletip · Tooltip · Tree view · UI shell.

Several carry a \*\*"Feature flag"\*\* marker in the nav (Menu buttons, Modal, Multiselect, Notification, Structured list, Tile, Toggle, Tree view), meaning a feature-flagged accessibility/visual update is available ahead of the v12 default. Carbon also notes that further components exist separately under \*\*Community assets\*\*, maintained by the community rather than the core team.

The only "grouping" Carbon applies anywhere is the top-level split between \*\*Components\*\* (this list), \*\*Patterns\*\*, \*\*Community assets\*\*, and \*\*Data visualization\*\*, each its own nav section.

\#\#\# 2\. Components Carbon publishes that most design systems don't — and why

A handful reflect IBM's enterprise, data-heavy, developer-facing context:

\- \*\*AI label\*\* — a dedicated component that marks AI presence in a UI and triggers an "explainability" popover. It exists because Carbon threads an "AI presence" treatment through many components (text input, checkbox, tile, tag all document an AI variant), reflecting IBM's push to make AI in products transparent.  
\- \*\*Code snippet\*\* — a first-class component for displaying/copying code, unusual outside developer-tooling contexts but natural for IBM's developer audience.  
\- \*\*Data table\*\*, \*\*Structured list\*\*, \*\*Contained list\*\*, \*\*Tree view\*\* — an unusually rich set of data-presentation components, reflecting Carbon's use in dense enterprise dashboards and admin consoles.  
\- \*\*UI shell\*\* — a whole application chrome/navigation framework (header, side nav, panels) shipped as a component, because IBM products need a consistent cross-product shell.  
\- \*\*Toggletip\*\* vs \*\*Tooltip\*\* — Carbon splits these into two components (interactive vs non-interactive disclosure), a finer distinction than most systems bother with.  
\- \*\*Inline loading\*\*, \*\*Loading\*\*, \*\*Progress bar\*\*, \*\*Progress indicator\*\* — four separate progress/loading components, reflecting the many async states in enterprise workflows.

\#\#\# 3\. What Carbon calls a "card"

Carbon does \*\*not publish a "card" component at all.\*\* What most people call a card, Carbon calls a \*\*Tile\*\*, and it's explicit about the relationship: \*"Tiles are simple and foundational. Cards can be very complex."\* Cards, in Carbon's framing, are built \*on top of\* the tile foundation, and \*\*"Carbon does not have a card pattern"\*\* — it instead links out to card patterns in satellite libraries (Carbon for IBM Products, IBM.com, Sustainability).

On your sub-question about \*\*one Carbon word covering several things\*\*: yes, this happens in two notable places.  
\- \*\*"Tile"\*\* is one name covering four functionally distinct components: \*base, clickable, selectable, expandable\*.  
\- \*\*"Notification"\*\* is one name covering four variants that are visually and behaviorally different: \*inline, toast, actionable, callout\*. So a single Carbon word ("notification") spans what you'd probably treat as separate things — a status banner, a transient toast, and a persistent callout.

\---

\#\# The six that matter to you

I'll answer questions 4–8 per component.

\#\#\# Button

\*\*Variants (4):\*\* Primary (principal call to action, once per screen), Secondary (paired with primary, for the negative action like Cancel/Back), Tertiary (less prominent, can stand alone), Ghost (least prominent, supplementary), and Danger (destructive actions). Danger itself has three styles: \*primary, tertiary, ghost\*. There are also documented forms: \*\*icon-only button\*\* and \*\*button with icon\*\*.

\*\*States (5):\*\* Documented \*\*per variant\*\* on the Style tab. Each variant (primary, secondary, tertiary, ghost, danger primary, danger tertiary) has its own interactive-state table covering Enabled (default), Hover, Focus, Active, and Disabled. Additionally documented: \*\*skeleton\*\* and \*\*inline loading\*\* (button is disabled while loading).

\*\*Sizes (6):\*\* Seven — \*\*Extra small\*\* (limited vertical space/confined layouts), \*\*Small\*\* (paired with 32px inputs), \*\*Medium\*\* (paired with 40px inputs), \*\*Large (productive)\*\* (most common in software), \*\*Large (expressive)\*\* (balances 16px body copy; used on IBM.com banners), \*\*Extra large\*\* (buttons bleeding to the edge of modals/side panels/narrow tearsheets), \*\*2XL\*\* (full-screen components like large tearsheets).

\*\*Anatomy (7):\*\* A. Label · B. Container · C. Icon (optional). Ghost button omits the visible container; icon-only button has container \+ icon only.

\*\*Usage / do-not rules (8):\*\* Only \*\*one primary button per screen\*\* (the one exception: temporary flows may briefly show two). Do not use buttons as navigational elements — use links. Do not use two high-emphasis buttons in a button group. Don't use a secondary button in isolation or for a positive action. Icon always goes to the right of the label. Don't truncate labels (wrap to a second line). Danger cannot be icon-only. Button groups should hold two or three actions; more than three should become menu buttons.

\#\#\# Text input

\*\*Variants (4):\*\* The component page covers \*\*Text input\*\* (single line) and \*\*Text area\*\* (multi-line). Each has two \*\*styles\*\*: \*Default\* (label/helper text outside the field) and \*Fluid\* (sits flush with adjacent components, helper surfaced via tooltip). Sub-variant of text input: \*\*Password input\*\*. Text area adds \*\*character counter\*\* and \*\*word counter\*\* modifiers.

\*\*States (5):\*\* Documented \*\*once for the whole component\*\* ("universal across all variants"): \*\*enabled, active, focus, error, warning, disabled, skeleton, read-only\*\* — each with a "when to use" entry.

\*\*Sizes (6):\*\* Default input has three heights — \*\*Small (sm)\*\* (constricted space / long complex forms), \*\*Medium (md)\*\* (default, "when in doubt"), \*\*Large (lg)\*\* (lots of space / simple standalone forms). Fluid has \*\*one\*\* height, visually larger than the default heights. Text area has a variable height controlled by the resize handle (minimum height, no maximum).

\*\*Anatomy (7):\*\* Label · Value · Field (must meet 3:1 non-text contrast) · Helper text (optional). Text area adds: Resize handle · Optional/required indicator (optional) · Counter (character or word, optional).

\*\*Usage / do-not rules (8):\*\* Always have a label (visible label strongly preferred; label-less needs accessibility sign-off). Don't use a free-form input when a predefined list would do (use dropdown/select/radio). Placeholder text isn't a label substitute and "can be harmful" — use sparingly. Don't use colons after labels. Make field width proportional to expected content and aligned to the grid — don't make inputs excessively wide to fill space. If most fields are required, mark only the optional ones, and vice versa.

\#\#\# Checkbox

\*\*Variants (4):\*\* Carbon does not name multiple "variants" for checkbox; it's a single component of \*\*checkbox input \+ checkbox label\*\*, with an optional \*\*group label\*\*, plus nesting (parent/child) behavior and an \*\*AI presence\*\* modification.

\*\*States (5):\*\* Documented \*\*once for the component\*\*, but Carbon distinguishes item-level from group-level. Individual checkbox states: \*\*unselected, selected, indeterminate\*\*, plus \*\*focus, disabled, read-only, error, warning\*\*. \*\*Group states:\*\* read-only, disabled, error, warning (plus helper text). The \*\*indeterminate\*\* state is specifically for a parent whose children are partially selected.

\*\*Sizes (6):\*\* The Usage page publishes \*\*no size variants\*\* for checkbox — there's no small/medium/large. (Spacing between checkboxes and other components is covered, but that's layout, not a size set.)

\*\*Anatomy (7):\*\* Group label (optional) · Checkbox input (default state is unselected) · Checkbox label (sits to the right of the input).

\*\*Usage / do-not rules (8):\*\* Use for non-exclusive multi-select; if only one option can be chosen, use radio buttons instead. Labels go to the right. Don't truncate labels with an ellipsis — let long text wrap beneath the checkbox, top-aligned (do not vertically center wrapped text). A label is always required in code even if visually hidden. Prefer toggle over checkbox when the action applies instantly without confirmation.

\#\#\# Tile (Carbon's "card")

\*\*Variants (4):\*\* Four — \*\*Base\*\* (short digestible content), \*\*Clickable\*\* (whole tile navigates; no separate internal CTAs), \*\*Selectable\*\* (single-select or multi-select options), \*\*Expandable\*\* (hide/reveal content). Clickable, selectable, and expandable each have \*\*feature flags\*\* that add a border and change selection icons (radio for single-select, checkbox for multi-select).

\*\*States (5):\*\* Documented \*\*per variant\*\* (each variant's Usage section has its own States note): \*\*Base\*\* — enabled only (not operable unless it contains interactive elements). \*\*Clickable\*\* — enabled, hover, focus, disabled. \*\*Selectable\*\* — enabled, hover, hover selected, selected, focus, disabled. \*\*Expandable\*\* — enabled, hover, focus, disabled.

\*\*Sizes (6):\*\* Tile has \*\*no fixed size set\*\*; width follows the three gutter modes (wide, narrow, condensed) and height follows content, with a \*\*minimum 2:1 aspect ratio\*\*. Three \*\*layouts\*\* are named: standard (most common), vertical masonry, horizontal masonry.

\*\*Anatomy (7):\*\* Varies by variant. \*\*Base:\*\* Container · Text · Interactive elements (optional). \*\*Clickable:\*\* Container · Text · Icon (arrow, indicates navigation) · Border. \*\*Selectable:\*\* Container · Text · Icon (radio or checkbox) · Border. \*\*Expandable:\*\* Container · Text · Interactive elements (optional) · Icon (chevron) · Border.

\*\*Usage / do-not rules (8):\*\* Tiles sit on the page background plane and have \*\*no elevation\*\* — do not add a drop shadow, and don't use tiles to reveal secondary info/actions/notifications (use modals/popovers/dialogs for that). Match tile variants within a group — \*\*do not mix different tile variants in a group\*\*. Clickable tiles must \*\*not\*\* contain separate interactive links/buttons (single click target). Use full-span button alignment within tiles.

\#\#\# Notification (your "inline notification / status message")

\*\*Variants (4):\*\* Four — \*\*Inline\*\* (status inside task flows, top of content area), \*\*Toast\*\* (transient, top of screen, auto-dismiss capable), \*\*Actionable\*\* (inline or toast with an interactive button), \*\*Callout\*\* (loads with the page, contextual, \*\*cannot be dismissed\*\*). Separately, Carbon documents four \*\*statuses\*\* cutting across variants: \*\*Informational, Success, Warning, Error\*\* — each with a defined color and status icon. Callout only supports Informational and Warning (no success/error, since it's not feedback).

\*\*States (5):\*\* Notification is documented by \*\*variant and status\*\* rather than by a hover/focus state table — the meaningful "states" here are the four statuses above, applied per variant. A cross-variant modifier is \*\*high contrast vs low contrast\*\* styling.

\*\*Sizes (6):\*\* No named size set. Inline width fills its container/content area, height follows content (max two lines). Toast uses a \*\*fixed width\*\*, height follows content (max two lines). Callout width fills its container, height follows content.

\*\*Anatomy (7):\*\* Per variant. \*\*Inline:\*\* Icon · Title · Body content · Close button. \*\*Toast:\*\* Icon · Title · Body content · Close button (optional time stamp at bottom). \*\*Actionable (inline & toast):\*\* Icon · Title · Body content · Close button · Action button. \*\*Callout:\*\* Icon · Title · Body content · Link (no close, no action button).

\*\*Usage / do-not rules (8):\*\* Notifications are disruptive — use sparingly. Only \*\*one action\*\* per actionable notification. Don't repeat the title in the body. Inline notifications don't auto-dismiss; toasts can time out (\~5 seconds). Callouts cannot be dismissed — \*\*avoid multiple callouts on one page and don't stack them.\*\* Don't mix high- and low-contrast styles within one variant. If a message exceeds two lines, switch to an actionable notification with a "View more" link. Error messages must include a user action / next step.

\#\#\# Tag

\*\*Variants (4):\*\* Four — \*\*Read-only\*\* (labeling/categorizing, no interactivity), \*\*Dismissible\*\* (can be closed/removed; filtering and user-generated content), \*\*Selectable\*\* (select/deselect, single or multi), \*\*Operational\*\* (discloses additional/overflow tags in a popover, modal, or breadcrumb view).

\*\*States (5):\*\* Documented \*\*per variant\*\* (states differ by variant): Read-only — enabled, disabled, skeleton. Dismissible and Operational — enabled, hover, focus, on click, disabled, skeleton. Selectable — enabled, hover, focus, selected, disabled, skeleton. A shared "when to use" table defines enabled, hover, focus, on click, selected, disabled.

\*\*Sizes (6):\*\* Three — \*\*Small\*\* (condensed/inline spaces; decorative icons discouraged here), \*\*Medium\*\* (default, most common), \*\*Large\*\* (when the tag is a primary focal point, more real estate, or living near other 32px-height components).

\*\*Anatomy (7):\*\* Read-only: Decorative icon (optional) · Title · Container. Dismissible adds a \*\*Close icon\*\*. Selectable and Operational add a \*\*Border\*\* (to signal increased interactivity). All share: Decorative icon (optional) · Title · Container.

\*\*Usage / do-not rules (8):\*\* Don't use tags as links to a different page or a new tab. Avoid tags with multiple functions (prevents accidental clicks). Truncate long titles with an ellipsis and reveal the full title in a tooltip on hover/focus — \*\*do not wrap tag titles to multiple lines.\*\* Keep titles under \~20 characters where possible. Use different colors to distinguish categories (don't use the same color for all if they're meant as distinct labels). For groups: keep to one line at six tags or fewer; wrap if needed, but \*\*if it exceeds five wrapped lines, switch to a multi-select dropdown.\*\*

\---

\#\# How the system is built

\#\#\# 9\. Carbon's top-level sections

From the main navigation, in Carbon's own order: \*\*All about Carbon · What's happening · Designing · Developing · Contributing · Migrating · Elements · Guidelines · Components · Patterns · Community assets · Data visualization · Help\*\* (plus an external \*\*GitHub\*\* link). Carbon frames itself as \*"IBM's open source design system for products and digital experiences,"\* built on the IBM Design Language and consisting of working code, design tools/resources, human interface guidelines, and a contributor community.

\#\#\# 10\. Component vs. pattern — Carbon's own definitions

Carbon defines these most explicitly in its "Asset types" table:

\- \*\*Component:\*\* \*"An asset that has been designed and coded, that can be imported into a UI."\*  
\- \*\*Pattern:\*\* \*"Patterns are something that can be accomplished in multiple ways utilizing a combination of component(s) with additional design considerations. Because of the many ways patterns can be implemented, it is not possible to provide code for every scenario, but some patterns do have example code."\*

The overview pages reinforce this: components are \*"key building blocks... designed and coded to solve a specific UI problem,"\* while patterns are \*"best practice solutions for how a user achieves a goal... reusable combinations of components and templates that address common user objectives with sequences and flows."\* The dividing line is essentially: a component is a single importable coded asset; a pattern is a goal-oriented recipe combining components, which can't be shipped as one universal piece of code.

\#\#\# 11\. How a single component page is structured

Each component page is organized as four \*\*tabs\*\*, in this order: \*\*Usage · Style · Code · Accessibility\*\*.

\- \*\*Usage\*\* — the design/behavior guidance. Internally it runs, roughly in order: a one-line definition, a \*\*Live demo\*\*, \*\*Overview\*\* (with "When to use" / "When not to use"), \*\*Variants\*\* (a purpose table), \*\*Formatting\*\* (which contains \*\*Anatomy\*\* and \*\*Sizing/Alignment/Placement\*\*), \*\*Content\*\* (labels, helper/placeholder text, overflow), \*\*Behaviors\*\* (including \*\*States\*\* and \*\*Interactions\*\* for mouse/keyboard), \*\*Modifiers\*\*, \*\*AI presence\*\* where relevant, \*\*Related\*\*, \*\*References\*\*, and \*\*Feedback\*\*.  
\- \*\*Style\*\* — the visual spec: interactive-state tables, sizing/heights, and the color/type/spacing tokens (the material you asked me to skip).  
\- \*\*Code\*\* — implementation, props, feature-flag details, Storybook link.  
\- \*\*Accessibility\*\* — keyboard, screen-reader, and WCAG considerations, with a tested/not-tested status block.

Each page also carries an accessibility-testing status summary and Previous/Next links.

\#\#\# 12\. Rules for contributing a new component — who decides, and what a proposal must show

Yes, Carbon publishes a formal process across the \*\*Contributing\*\* section (Get started, Product Development Lifecycle, Component checklist, Documentation).

\*\*Who decides.\*\* New components follow IBM's three-phase \*\*Product Development Lifecycle (PDLC)\*\*: Discovery → Delivery → Launch & scale. Crucially, Carbon states: \*"Carbon is not the gatekeeper of the discovery phase; this phase is fully curated by the community and innovators."\* The community is \*"the first approval gateway."\* But \*"Only the Carbon team can move an asset from discovery to delivery"\* — so the Carbon core team is the decision-maker for systematization, with the Figma Guild as a partner in governance for design kits. Prioritization within delivery is driven mainly by \*\*business impact / breadth of reuse\*\*.

\*\*What a proposal must show.\*\* In the Discovery phase, a proposal must demonstrate that the component \*"would be useful to many teams and unique to the system."\* The published key considerations: does it duplicate something already in the system or fill a genuine gap; if it overlaps, is there evidence the new solution is better; is there an existing issue/proposal already; is there evidence of usefulness to many teams; and what's the feasibility-to-impact ratio (with input from developers and accessibility SMEs). Reviews happen through defined channels: a \*\*GitHub issue\*\* (with discovery evidence — competitive research, solutions, prototypes), a \*\*GitHub pull request\*\*, \*\*DSAG playback\*\*, and \*\*Carbon office hours\*\*.

\*\*Definition of done.\*\* To become \*\*Stable\*\*, a component must clear the full \*\*Component checklist\*\* across five areas — Design spec, Code, Testing, Documentation, and Design kit — each with detailed sub-requirements (design specs using only system tokens; all interaction states specced; WCAG AA; 80%+ unit-test coverage; visual regression tests via Percy; accessibility verification via IBM Equal Access; manual JAWS/VoiceOver/NVDA testing; usage/style/code/accessibility docs on the site; and a published Figma kit). Assets progress through statuses \*\*Draft → Preview candidate → Preview → Stable\*\*, and \*all\* requirement categories must be complete before a component is "done." Early/unfinished explorations live in a separate space called \*\*Carbon Labs\*\* rather than alongside stable assets.

\---

If it's useful for your own system, the two most transferable ideas here are (a) Carbon's tile-vs-card layering — a minimal foundational container ("tile") with richer "card" treatments built on top and pushed out to satellite libraries — and (b) its status ladder (Draft/Preview candidate/Preview/Stable) tied to a hard, category-by-category definition of done. Want me to pull the Style-tab \*\*state lists\*\* for any of the six in more granular per-variant detail, or map Carbon's full Patterns list the same way I did the components?  
