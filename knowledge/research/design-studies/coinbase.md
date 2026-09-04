\#\# What is public, where it lives, and how current it is

The published system is called \*\*CDS — Coinbase Design System\*\*, at \*\*cds.coinbase.com\*\*. It is currently on \*\*version 9.12.0\*\* and is actively maintained (open-sourced, with a live Storybook at cds-storybook.coinbase.com and source at github.com/coinbase/cds).

The critical thing to understand before weighing anything below: \*\*this is a code-first component library, not a Figma-style design-guidelines site.\*\* It documents the React / React Native packages \`@coinbase/cds-web\` and \`@coinbase/cds-native\`. Every page is organized around props, imports, and code examples, with a "Web / Mobile" platform toggle, links to Source/Storybook/Figma, and "Copy for LLM / View as Markdown" buttons. So when you ask for "variants, states, anatomy, usage rules," what actually exists is \*engineering documentation\* that describes those things as prop values and inline prose, not a curated design spec with formal do/don't galleries. It's current and genuinely detailed on the code, but thin on the prescriptive "design usage" layer you'd find at IBM Carbon or Atlassian. I'll flag that throughout.

Coinbase has indeed published under more than one identity over the years (earlier public efforts and internal names), but what is \*live and canonical right now\* is CDS v9 at the URL above. I'd give heavy weight to what's below on names/structure/props, and lighter weight to "usage rules," because that layer is comparatively sparse here.

\---

\#\# The inventory

\#\#\# 1\. Every component, in its own navigation grouping and names

The nav groups components as follows (deprecated/alpha labels are theirs):

\*\*Layout (14):\*\* Accordion, AccordionItem, Box, ButtonGroup, Carousel, Collapsible, Divider, Dropdown, Grid, GridColumn, HStack, MultiContentModule, Spacer, VStack

\*\*Typography (3):\*\* Link, Tag, Text

\*\*Inputs (28):\*\* AvatarButton, Button, SlideButton, Checkbox, CheckboxCell, CheckboxGroup, Combobox (Alpha), ControlGroup, Chip, IconButton, TileButton, InputChip, MediaChip, Interactable, Numpad, Pressable, Radio, RadioCell, RadioGroup, Select (Alpha), Select (Deprecated), SelectOption, SegmentedControl (Deprecated), SelectChip (Alpha), SelectChip (Deprecated), Switch, TextInput, SearchInput

\*\*Media (14):\*\* Avatar, CellMedia, HeroSquare, Icon, LogoMark, LogoWordMark, Pictogram, RemoteImage, RemoteImageGroup, SpotIcon, SpotRectangle, SpotSquare, SubBrandLogoMark, SubBrandLogoWordMark

\*\*Cards (11):\*\* ContainedAssetCard (Deprecated), ContentCard, ContentCardHeader, ContentCardBody, ContentCardFooter, DataCard, FloatingAssetCard (Deprecated), MediaCard, MessagingCard, NudgeCard (Deprecated), UpsellCard (Deprecated)

\*\*Data Display (10):\*\* ContentCell, ListCell, Table, TableBody, TableCaption, TableCell, TableCellFallback, TableFooter, TableHeader, TableRow

\*\*Feedback (7):\*\* Banner, Fallback, ProgressBar, ProgressBarWithFixedLabels, ProgressBarWithFloatLabel, ProgressCircle, Spinner

\*\*Overlay (15):\*\* Alert, FocusTrap, FullscreenAlert, FullscreenModal, FullscreenModalLayout, Modal, ModalHeader, ModalBody, ModalFooter, Overlay, PopoverPanel, PortalProvider, Toast, Tray, Tooltip

\*\*Navigation (22):\*\* NavigationBar, NavigationTitle, NavigationTitleSelect, Pagination, PageHeader, PageFooter, SegmentedTabs, SectionHeader, Sidebar, SidebarItem, SidebarMoreMenu, TabNavigation (Deprecated), TabLabel, TabIndicator, TabbedChips (Deprecated), TabbedChips (Alpha), Tour, Stepper, TopNavBar, BrowserBar, Tabs, Coachmark

\*\*Charts (16):\*\* AreaChart, BarChart, PercentageBarChart, CartesianChart, Legend, LineChart, ReferenceLine, PeriodSelector, Point, Scrubber, Sparkline (Deprecated), SparklineGradient (Deprecated), SparklineInteractive (Deprecated), SparklineInteractiveHeader (Deprecated), XAxis, YAxis

\*\*Numbers (1):\*\* RollingNumber

\*\*Animation:\*\* Lottie, LottieStatusAnimation

\*\*Other:\*\* Calendar, DateInput, DatePicker, DotCount, DotStatusColor, DotSymbol, MediaQueryProvider, ThemeProvider

(The homepage advertises counts only for the first eleven groups; Animation and Other appear in the sidebar but aren't given headline counts.)

\#\#\# 2\. Components Coinbase publishes that most systems don't — and why a financial product explains them

The tell is that this is a crypto/finance product, and several components exist purely for that:

A whole \*\*Charts\*\* group (AreaChart, LineChart, CartesianChart, Sparkline family, PercentageBarChart, Scrubber, ReferenceLine, PeriodSelector, Legend, axes) — price/portfolio visualization is core to a trading product. \*\*RollingNumber\*\* ("animates value changes with rolling digits") exists to show live-updating prices/balances. \*\*Numpad\*\* and \*\*SlideButton\*\* (a swipe-to-confirm control) reflect mobile transaction entry and deliberate confirmation of irreversible actions. \*\*PercentageBarChart\*\* and \*\*DataCard\*\* (progress-bar/circle data viz) suit allocation and rewards. \*\*Pictogram / SpotIcon / HeroSquare / SubBrandLogoMark / SubBrandLogoWordMark\*\* support a large branded/sub-branded asset ecosystem. The \*\*Tour / Coachmark / Stepper / NudgeCard / UpsellCard / MessagingCard\*\* cluster is heavy on onboarding and nudging, which matters for guiding users through KYC/verification and funding flows. Their own examples lean into this domain constantly (BTC addresses, "Margin ratio," "Verify your info for tax reporting," "Claim reward").

\#\#\# 3\. What they call a "card"

There is no single generic "Card." The general-purpose one is \*\*ContentCard\*\*, described as "A flexible card component for displaying content," built from \*\*ContentCardHeader / ContentCardBody / ContentCardFooter\*\*. Note that at the \*layout-primitive\* level, the thing many systems call a plain card (a styled container) is \*\*Box\*\* ("A generic container, like a supercharged div"). The rest of the "Cards" group are specialized: DataCard, MediaCard, MessagingCard, plus deprecated ContainedAssetCard/FloatingAssetCard/NudgeCard/UpsellCard.

\---

\#\# The six that matter to you

A general caveat for all six: CDS documents variants/states/sizes primarily as \*\*prop values with inline example sections\*\*, and anatomy as \*\*subcomponents/slot props\*\*. It does \*\*not\*\* publish a formal per-component "Do / Don't" gallery. What "rules" exist are short prose sentences and Tip/Warning callouts inside examples. I'll give you exactly what's there.

\#\#\# Button

\*\*4. Variants (published names):\*\* \`primary\`, \`secondary\`, \`tertiary\`, \`inverse\`, \`negative\`. Separately, \*\*\`transparent\`\*\* is a modifier that "works with any variant" (container only visible on interaction) — documented as its own axis, not a sixth variant.

\*\*5. States:\*\* documented \*\*once for the whole component\*\*, not per variant: \*\*Loading\*\* (\`loading\` prop — becomes non-interactive, shows an indeterminate ProgressCircle, preserves width; explicitly shown working "with all variants and transparent") and \*\*Disabled\*\* (\`disabled\` prop). Interactive hover/press states are handled by the underlying Interactable/Pressable rather than spelled out on this page.

\*\*6. Sizes:\*\* \`xs\`, \`s\`, \`m\`, \`l\` — \*\*defaults to \`l\`\*\*. The page doesn't assign a semantic purpose to each size beyond size ordering; there's also a \`block\` option (expand to container width). No per-size "use this for X" guidance.

\*\*7. Named parts:\*\* the label (\`children\`, rendered via an internal \*\*Text\*\* — Button forwards font props to it), \*\*start icon\*\*, \*\*end icon\*\*, and the container itself. Icon-only/ambiguous buttons take an \`accessibilityLabel\`.

\*\*8. Usage rules (the actual prose):\*\* Primary is "High emphasis for main actions… \*\*Limit to one per screen\*\*." Negative is for "Destructive actions that can't be undone. \*\*Use sparingly\*\*." Transparent is "for supplementary actions with lower prominence." That's the extent of it — guidance embedded in variant descriptions, no dedicated don'ts list.

\#\#\# TextInput (this is what they call a text field)

\*\*4. Variants:\*\* it isn't organized as named "variants" but as configurable modes: \*\*label variants\*\* \`outside\` (default) and \`inside\`; \*\*sentiment\*\* default / \`positive\` / \`negative\` (negative is the error state, tied to \`variant='negative'\`); a \*\*borderless\*\* mode; \*\*read-only\*\*; \*\*Color Surge\*\* (an emphasis treatment); and content-alignment left (default) / right. A related \*\*SearchInput\*\* is a separate component.

\*\*5. States:\*\* documented \*\*once for the component\*\*: default, focus (\`focusedBorderWidth\`), positive, negative/error, disabled, and read-only (explicitly "visually distinct from disabled… can still be focused"). Error handling is a documented rule (see below).

\*\*6. Sizes:\*\* \`s\`, \`m\`, \`l\` — \*\*defaults to \`l\`\*\*. Note the interaction: with \`labelVariant="inside"\`, sizes s and m put the label inline in the start slot, while size l stacks it above the field. No other per-size purpose is given.

\*\*7. Named parts:\*\* label (\`label\`, or custom \`labelNode\`), the input field, \*\*helperText\*\*, \*\*startContent / endContent\*\* slots (icons, assets, currency suffix, IconButton, text Button like "COPY", Link), and placeholder. Testable sub-parts are exposed via \`testIDMap\`.

\*\*8. Usage rules / don'ts (unusually explicit here):\*\* always format error helper text as \`Error: ${errorMessage}\`; \`variant='negative'\` is \*assumed to mean an error\* — override with \`aria-invalid={false}\` if it isn't; when using the \*\*inside\*\* label you should \*\*always include a placeholder\*\* (a Warning callout); keep tooltip touch targets ≥24×24; for a fully borderless input use a TypeAhead composition; use spacing 3 for stacked forms; always give start/end nodes an \`accessibilityLabel\`.

\#\#\# Checkbox

\*\*4. Variants:\*\* none named — Checkbox is intentionally minimal ("UI and state management are separated"). Customization is via props (\`controlColor\`, \`borderRadius\`, \`borderWidth\`, background/borderColor) rather than named variants. For grouping/labels it points to \*\*CheckboxCell\*\*, \*\*CheckboxGroup\*\*, and \*\*ControlGroup\*\*.

\*\*5. States:\*\* documented \*\*once\*\*: normal (checked/unchecked), disabled (shown both unchecked and checked), and \*\*indeterminate\*\*.

\*\*6. Sizes:\*\* the Checkbox page does \*\*not\*\* document a size scale (it's absent here — an honest gap).

\*\*7. Named parts:\*\* the control box and an optional label (\`children\`); if you omit children you supply your own label, and they recommend wrapping label+control in a \`\<label\>\` to enlarge the tap target.

\*\*8. Usage rules:\*\* wrap custom labels to increase tap target; for multiple checkboxes use \`ControlGroup\` with \`role="group"\` for accessibility/state management. No don'ts gallery.

\#\#\# Card (ContentCard)

\*\*4. Variants:\*\* ContentCard itself is presented as \*\*composable\*\* rather than variant-driven — you assemble Header/Body/Footer. Configurable options: \`mediaPlacement\` on the body \= \`top\` (default) / \`bottom\` / \`start\` / \`end\`, and a \`background\` option. (The "variants" you'd expect live in the \*sibling\* card components — MediaCard, MessagingCard with \`upsell\`/\`nudge\` variants, DataCard.)

\*\*5. States:\*\* no formal state matrix; the documented behavioral case is the \*\*interactive card\*\* (wrap in Pressable). States there come from the wrapping Pressable, not ContentCard.

\*\*6. Sizes:\*\* no size scale published.

\*\*7. Named parts:\*\* \*\*ContentCardHeader\*\* (renders \`\<header\>\`), \*\*ContentCardBody\*\* (holds text \+ media), \*\*ContentCardFooter\*\* (renders \`\<footer\>\`); ContentCard itself renders \`\<article\>\`. All overridable via the \`as\` prop.

\*\*8. Usage rules / don'ts:\*\* the strongest don'ts in the whole set are here, around accessibility: \*\*avoid nested interactive elements\*\* — if you make the card clickable, use \`as="div"\` on the Pressable, add a distinct action button, call \`event.stopPropagation()\` in the button handler, and set \`tabIndex={-1}\` if needed; if a card needs many actions, "consider using a non-interactive card layout instead"; ensure sufficient text/background contrast (they cite WCAG / WebAIM).

\#\#\# Status / inline message (Banner)

\*\*4. Variants:\*\* organized by \*\*styleVariant\*\* and use-case rather than a flat variant list. The documented types are: \*\*Global Warning Banner\*\* (\`styleVariant="global"\`, with a vertical status bar), \*\*In-line Error Banner\*\*, \*\*Contextual Promotional Banner\*\*, and \*\*In-line Informational Banner\*\*. Also: \*\*Rounded Corner\*\* variants and a \*\*bleed\*\* treatment. (The blocking-dialog counterpart is a separate \*\*Alert\*\*; the transient one is \*\*Toast\*\*.)

\*\*5. States:\*\* not a state matrix — differentiation is by type/sentiment (warning/error/informational/promotional) plus optional actions (primary/secondary action, retry, dismiss).

\*\*6. Sizes:\*\* no size scale; width/bleed is controlled via margin/\`width\` props.

\*\*7. Named parts:\*\* status icon, title, message body, an inline \*\*Learn more\*\* link, optional \*\*primary/secondary actions\*\* (and a "Retry"), a timestamp line ("Message last updated…"), and for the global style a vertical status bar.

\*\*8. Usage rules / don'ts:\*\* in-line banners should sit "directly beneath the relevant section headers" so users can locate the affected area; \*\*avoid setting \`borderRadius\` on \`styleVariant="global"\`\*\* so the vertical status bar stays aligned (Tip callout); when bleeding with negative margins, explicitly set \`width\`. Roles are prescribed by use — global for platform-wide alerts, contextual for promos, inline informational for tips.

\#\#\# Tag / badge (Tag)

\*\*4. Variants:\*\* two purposes — \*\*Informational\*\* (default) and \*\*Promotional\*\* (promotional renders uppercase). Colors are a variant axis: \*\*Green, Blue, Yellow, Purple, Red, Gray\*\*. Emphasis is a separate axis: \*\*\`emphasis\`\*\* high/low (informational defaults low, promotional defaults high). (Note: the interactive filter/selection sibling is \*\*Chip\*\*, a separate component.)

\*\*5. States:\*\* no interactive state matrix — Tag is a static label; documentation covers appearance axes rather than states.

\*\*6. Sizes:\*\* no size scale published on the Tag page.

\*\*7. Named parts:\*\* the label text, \*\*startIcon / endIcon\*\* (icon props), and \*\*start / end\*\* slots for fully custom nodes.

\*\*8. Usage rules:\*\* informational \= "note a characteristic or state of an object"; promotional \= "editorial, ephemeral communication." Beyond those role definitions, no don'ts.

\---

\#\# How the system is built

\*\*9. Top-level sections (its own words):\*\* the sidebar's top level is \*\*Get started\*\* (Introduction, Installation, Templates, Theming, Colors, Styling, Playground, AI Overview), \*\*Components\*\*, \*\*Hooks\*\*, \*\*Guides\*\* (v9 Upgrade Guide, v8 Migration Guide), \*\*Extras\*\* (Color Pairing Tool), and \*\*Changelogs\*\* (per npm package). The homepage frames the whole thing as "Quickstarts" \+ "Components." It describes itself as "a cross-platform component library for React and React Native."

\*\*10. Component vs. pattern:\*\* \*\*CDS does not publish a component-vs-pattern distinction.\*\* There is no "Patterns" section anywhere in the navigation or routes index. Its vocabulary is "components," "subcomponents," "primitives," and "compositions/composed examples" — e.g., "Build complex UIs by composing simple primitives." If you need a formal pattern layer, it genuinely isn't here.

\*\*11. How a component page is structured:\*\* consistently — a Web/Mobile toggle; component name with the exact package version (\`@coinbase/cds-web@9.12.0\`); a one-line description; the \`import\` statement; action links (Source, Storybook, Figma, Copy for LLM, View as Markdown); listed peer dependencies and \*\*Related components\*\*; then top tabs \*\*Examples / Props\*\* (and sometimes \*\*Styles\*\*). The body is a sequence of example sections (Basics, Variants, States, Sizes, Icons, Accessibility, Composed Examples), each with a live preview plus Show/Copy code and "Open in StackBlitz." Guidance appears as inline prose and Tip/Warning/Accessibility callouts rather than dedicated Do/Don't blocks.

\*\*12. Contribution rules:\*\* \*\*not published in the docs site.\*\* There's no contributing page in the navigation or routes index. Contribution would live in the open-source repo at github.com/coinbase/cds (linked from the nav and footer), not in the documentation itself.

\---

\#\# Honest bottom line

Weight the first three sections and the props/anatomy heavily — the component inventory, names, groupings, subcomponents, and prop-level variants/states/sizes are thorough, current (v9.12.0), and authoritative. But be appropriately skeptical of expecting an IBM/Atlassian-style \*design\* layer: \*\*CDS is engineering documentation.\*\* Compared with Carbon or the Atlassian Design System, it is thin on formal usage guidance — there are no per-component Do/Don't galleries, no component-vs-pattern taxonomy, no pattern library, and no contribution docs on the site. What genuinely substitutes for "usage rules" is scattered inline prose and Tip/Warning callouts (strongest on TextInput accessibility, ContentCard's nested-interactive rules, and Banner placement). Where I couldn't find something (e.g., Checkbox/Tag size scales, per-variant state matrices), it's because the docs don't publish it, not because I skipped it.

One more note in your interest: the Button/TextInput/Checkbox pages describe an \`accessibilityLabel\` and error-formatting convention, but I didn't have you enter any real data — everything above is read from public documentation only.

Want me to pull the full \*\*Props tables\*\* for any of the six (the exact prop names, types, and defaults), which is where the most reliable, machine-precise detail lives?  
