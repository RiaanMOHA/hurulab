# Instructions for Claude Code: Hurulab discovery + cost-reveal prototype

This file is written for Claude code, not for Riaan. Read it as a set of instructions to execute, in order. Do not summarize it back to the user before starting; act on it, then report using the format in section 9.

## 0. Scope boundary — read this first

This is a prototype to explore an idea, not a production feature. Build it accordingly:

- No backend, no database, no real payment or lead-capture integration. All state lives in the front end for the session.
- No real AI API calls to generate a genuine cost estimate for whatever the visitor types. The "estimate" logic is a rules-based mapping (category of idea to a pre-defined range), not a live model call. Do not wire this to a real LLM API even if one is available in the environment; it adds cost, latency, and failure modes this prototype does not need.
- No CMS, no admin panel, no multi-user anything.
- Favor a small number of well-designed, well-animated screens over broad feature coverage.
- If at any point a choice would meaningfully expand scope beyond "a single interactive prototype demonstrating two connected ideas," take the smaller option and note the tradeoff in your final report rather than building the larger version.

## 1. Setup check — do this before writing any code

1. Check whether you are working inside an existing project (look for `package.json`, a `.git` directory, an existing `src/` or component structure). If one exists and looks like it's meant to hold this kind of work, build inside it. If nothing suitable exists, scaffold the smallest reasonable setup (a single Vite + React app, or a single self-contained HTML/React artifact file if the environment is artifact-based rather than a standalone repo) and say which you chose and why in your final report.
2. Confirm where output should live (an existing `outputs` or equivalent directory if the project has a convention for one; otherwise the project root).
3. Do not ask the user which of these to pick. Choose the smaller, more contained option when genuinely unsure, and state the choice in your final report.

## 2. Read before building

Read these in order:

1. `/mnt/project/huru-lab-brand-positioning.md` and `/mnt/project/huru-lab-brand-strategy.md`, for positioning, the storytelling framework, the "signed work" idea, and the engagement-tier pricing referenced in section 4 below.
2. `/mnt/project/huru-lab-go-to-market.md`, for the seven-question scroll structure Henry is filling in on the main site, so this prototype's tone stays consistent with it.
3. Whatever brand guidelines, coming-soon, and design-direction files exist in the project or its prior outputs (look for files named along the lines of `hurulab-brand-guidelines`, `huru-lab-coming-soon`, `huru-lab-design-direction`). These hold the current locked visual system. Treat them as more current than the token values listed in section 3 below if they conflict; those values may have been iterated since this brief was written.
4. `/mnt/skills/user/frontend-design/SKILL.md`, and, if present, `/mnt/skills/user/motion-storytelling/SKILL.md` and `/mnt/skills/user/responsive-breakpoint-system/SKILL.md`.
5. `/mnt/skills/user/stop-slop/SKILL.md`. Apply it to every piece of interface copy you write here.

## 3. Locked brand system — reuse, do not reinvent

- Wordmark: `Hurulab`, one word, set in a real typeface (Schibsted Grotesk 700, tracked tight, approximately `-0.05em`). Never hand-draw letterforms as SVG primitives.
- Type trio: Schibsted Grotesk (display, 600 to 800), Instrument Sans (body, 400 to 600), Sometype Mono (record marks, numbers, ranges, timestamps, 400 to 500).
- Color tokens (confirm against the live guidelines file first; use these as the fallback default): brand `#1a1714`, secondary `#e8e2d6`, accent `#e0742a`, plus a neutral greige ramp; semantic tokens success `#3f7d52`, warning `#c08a2d`, danger `#b23b2e`, info `#3d6b8f`; state tokens hover `#c9631f`, active `#b0551a`, focus ring `#f4c79e`, disabled `#cfc7b8`.
- Spacing: every vertical gap capped at 24px, explicit pixel values, no clamps. Full-width text (approximately 92vw / max 96rem on the main container, no `max-width` restricting `p`, `.lede`, `ul`).
- Writing: sentence case throughout, no title case, no all-caps, no italics unless the guidelines file explicitly calls for them, no emojis, no em dashes (use commas, colons, periods, or parentheses instead).
- Never mix strategy explanation into a visual artifact. Keep this prototype's interface copy conversational and product-facing, not a pitch deck.

## 4. What this prototype is

One connected interactive flow, built as a single narrative a prospective client could plausibly move through, combining two ideas from Hurulab's research:

- **Idea A: the build reality check** (section 5), a reframed replacement for the "vibe coding cost calculator" concept.
- **Idea B: the moat check** (section 6), a discovery diagnostic for whether a prospective client's business has, or has the raw material for, a defensible competitive advantage.

Build these as two internally separate components sharing one visual system and one piece of shared state (`MoatCheck` and `BuildRealityCheck`, or equivalent names), presented to the visitor as one continuous flow, not two disconnected demos. Section 7 specifies exactly how they connect. If a fully connected flow proves disproportionately complex for the time available, build both as clearly related modules with shared state and say so explicitly in your final report, rather than silently shipping two unrelated demos.

**Reference pricing, already confirmed in `huru-lab-brand-strategy.md`.** Use these engagement tiers directly rather than re-deriving or guessing them; treat them as the current source of truth unless the file itself shows a more recent revision:
- Invitation demo (free, selective, sent to a small number of researched businesses per quarter, not open self-serve)
- First working piece: NT$80,000 to 250,000
- Full build: NT$600,000 to 1,500,000
- Care retainer (ongoing)

If you find these numbers have since changed in the project files, use the current numbers and note the update in your final report.

## 5. Idea A: the build reality check

### 5.1 Ground truth from the research (do not contradict this)

- Interactive cost/ROI calculators genuinely convert well, and letting a visitor discover a cost themselves is more persuasive than being told it. Keep this mechanic.
- A generic "vibe coding cost calculator" already exists in several competing forms elsewhere (including an entire "vibe code rescue" agency category already occupying the hidden-cost angle). Do not build a generic version of this; it would be undifferentiated.
- "Vibe coding" is a developer and tech-media insider term. Traditional, non-technical Taiwanese business owners do not use it natively. A tool whose hook depends on the visitor already knowing and fearing that term will misfire with Hurulab's actual audience and instead attract developers, who are not Hurulab's buyers.
- A hard-sell framing ("this will cost you more, so just hire us") reads as a sponsored comparative message and tends to trigger reactance and distrust, which is especially costly for a premium, design-led brand.
- The pain underneath the idea is real: unpredictable, non-budgetable ongoing token cost; debugging time frequently exceeding build time; a meaningful share of AI-coded projects stalling before production; real security failures in AI-generated apps handling customer data. A Taiwan-specific example exists in the research: a non-engineer who received an unexpectedly large bill after having AI write their code, reported by 遠見/Global Views Monthly.
- The reframing this build must implement: no use of the term "vibe coding" anywhere in user-facing copy; plain business language; the tool reads as a useful, honest estimate the visitor keeps regardless of what they decide, not a trap; the reveal leads with judgment and risk, not with token arithmetic as the centerpiece; and it anchors quality (do it right once) against the real cost of doing it twice (attempt, then rescue or rebuild), rather than anchoring on fear alone.

### 5.2 What to build

1. **Entry.** A short, plain-language chat-style prompt asking the visitor to describe what they want to build. No use of "vibe coding" anywhere in the interface. Working title, pick one and use it consistently: `自己做，划算嗎？` ("is doing it yourself actually worth it?"), with an English label available if the interface is bilingual. State your reasoning for the final choice in your report if you change it.
2. **3 to 5 follow-up questions**, conversational rather than a rigid required-field form: rough category of idea (booking system, storefront, internal tool, customer-facing app, other), whether it needs to hold real customer or payment data, whether it needs to integrate with existing systems, and who would build it if not Hurulab (the owner, a hired freelancer, an internal team).
3. **The reveal**, shown as three honestly-ranged panels, not one falsely precise number:
   - A realistic time and spend **range** for building it well themselves with current AI tools, visibly presented as a range.
   - A short, calm, named list of real risks for that path (unpredictable ongoing cost, debugging time, chance of stalling before production, security exposure if it touches customer data) — styled with the warning token, not the danger token; this must not read as alarmist.
   - What a Hurulab engagement for the same idea would look like, using the pricing tiers from section 4.
4. **The close.** No "just hire us" CTA. Offer the estimate as something the visitor keeps (a downloadable or emailed one-page summary is enough to imply for this prototype; a working email-send is not required), plus one soft next step toward a real conversation.

### 5.3 Constraints

- No instance of "vibe coding" in any user-facing string.
- No single confident cost number presented as precise; always a labeled range.
- No hard comparison "gotcha." The DIY path must be presented with real respect, including being willing to say a genuinely simple idea might not need Hurulab.
- Any hardcoded token price or time figure must be code-commented as an illustrative placeholder, and visibly labeled as illustrative in the UI if shown, since this category of pricing data changes fast.

## 6. Idea B: the moat check

### 6.1 Ground truth from the research (do not contradict this)

- A moat is a structural, hard-to-copy advantage: a benefit (higher prices or lower costs) plus a barrier (something stopping a competitor from copying the benefit away).
- For Hurulab's actual clients (traditional, often family-owned, sometimes mid-succession Taiwanese businesses), the moats that matter are reputation and trust, switching costs from embedded relationships, specialized craft or process knowledge, cornered local resources, and — critically — whether an advantage lives in one person's head versus in something transferable.
- Named non-moats to gently challenge if claimed: being cheapest, a generic location, one key employee who could leave, off-the-shelf technology alone.
- Taiwan succession research shows first-generation advantages (personal networks, hands-on experience) eroding across a handover unless converted into something institutional, while second-generation competitiveness leans on brand, digital capability, and systematized process. This is framed as Hurulab's central opportunity: converting a tacit, person-dependent advantage into a transferable, documented one.
- Critical design constraint: this must never function as a rejection screen. The research is explicit that a design-and-AI consultancy exists partly to help clients build a moat they don't yet have; screening out anyone without an already-obvious moat would reject exactly the clients Hurulab helps most. Every outcome must route to a next step. The only "not yet a fit" case is a business with genuinely no raw material (no reputation, no craft, no relationships, competing on price alone) — and even that case should offer a small paid diagnostic engagement, never a flat decline.

### 6.2 What to build

A short, conversational diagnostic (not a cold form; heavy formal scoring reads as distrust to relationship-oriented traditional owners). Trim to 5 to 8 questions from this bank, keeping question 6 and at least one "why do customers choose you" question no matter what else is cut:

1. Why do your customers choose you over the cheaper option? Over the bigger, more established option?
2. If a well-funded competitor copied everything you do starting tomorrow, what would they still not have?
3. What do you have that cannot easily be bought or copied — a craft, a location, a relationship, a reputation, specific knowledge?
4. How long did your reputation take to build, and what would it take a newcomer to match it?
5. What would a loyal customer lose by leaving you?
6. Which of your advantages live mainly in one person's relationships or memory, versus in something written down or systematized? (Do not cut this one; it is the succession-risk question and the most specific to this client base.)
7. What do you know about your customers or market that competitors do not?
8. (Only if the respondent identifies as a successor or mentions a handover) What did the previous generation build that you're at risk of losing, and what do you want to build instead?

Score internally across: reputation and trust, switching costs, specialized expertise, process and systems, proprietary customer knowledge, team quality and retention, brand recognition, and transferability/succession-readiness (weight reputation, specialized expertise, and transferability most heavily). Do not surface this as a raw numeric score to the visitor.

Route every outcome into one of three plain-language framings, never a rejection:

- **Strong existing moat:** "you have something real — let's make it visible and make sure it survives a handover." Routes toward brand and design work plus systematizing tacit knowledge.
- **Latent moat, raw material present:** "you have real material here that isn't visible to customers yet." Routes toward positioning and design work. Note in your report that the research flags this as likely Hurulab's best-fit segment.
- **Little raw material found:** framed gently, never as failure. Offers a smaller, paid "find your edge" engagement.

### 6.3 Constraints

- No visible raw score (e.g. no "your moat score: 14/35" shown to the user).
- No UI state that reads as rejection.
- Same tone as idea A: calm, respectful, no red required-field asterisks, no corporate form language.

## 7. How the two ideas connect

1. **Moat check first.** Establishes who the visitor is and what they already have.
2. **A bridge moment.** The framing going into the build reality check should reference what the moat check surfaced. If question 6 revealed a person-dependent advantage, the reveal stage that follows should say so explicitly (for example: "you told us [X] mostly lives in one person — here's what it takes to build the thing you're describing in a way that survives that"), not a generic transition.
3. **The build reality check**, worded where possible to reference the specific thing the visitor said made them different, rather than a generic pitch in the Hurulab-engagement panel.
4. **One combined close**, not two separate CTAs — a single summary reflecting both the moat diagnosis and the build reality check, ending in one soft next step.

If full personalization of stage 3 is too complex for the time available, at minimum carry the moat-check answers into shared state and reference at least one of them by name on the final summary screen, so the connection is real, not cosmetic.

## 8. Visual, interaction, and copy-language notes

- Default to the locked coming-soon aesthetic: warm greige ground, amber accent used sparingly, capped 24px vertical rhythm, full-width text, no card-heavy SaaS-dashboard look.
- Favor a scroll- or step-driven reveal (word or block-level opacity reveal as focus arrives, one held moment for the key line) over a busy single-screen form.
- If using an animated slider or comparative bar for the cost reveal, it must show a range against a range, not animate toward one falsely precise number. Avoid gauge or dial clichés. Use the warning token, not the danger token, for the DIY-path risk framing; the tone stays respectful, not alarmist.
- Use Sometype Mono for numbers, ranges, and timestamp-style data.
- Mobile-first.
- **Copy language and ownership.** Write interface copy primarily in Traditional Chinese, since that's the actual language of the target audience, with English available as a secondary label if the build is bilingual. Per the project's existing process, Henry owns content structure and Cal owns final copy. Treat every piece of Chinese-language copy you write here as a **first-pass draft for Cal to review**, not production-ready marketing copy — say this explicitly in your final report rather than presenting it as finished. If you are not confident in the naturalness of a piece of Traditional Chinese copy, write it in English instead and flag it as needing translation, rather than shipping uncertain machine-quality Chinese.

## 9. Technical approach

- Default to a single self-contained component (or a small number of components in one file). Escalate to a multi-file Vite/Next setup only if the shared state between the two ideas and the routing logic genuinely cannot fit cleanly in one file — not by default, and not because a larger scaffold seems more impressive. If you escalate, state why in your final report.
- If this will render as a claude.ai artifact, do not use localStorage or sessionStorage; keep all state in React state for the session.
- Keep `MoatCheck` and `BuildRealityCheck` (or equivalent) as separable internal modules even inside one connected flow, so either can be iterated on independently later.

## 10. Definition of done — check before reporting

Before writing your final report, re-read your own build against this list. Fix anything that fails before reporting completion:

- [ ] No instance of the phrase "vibe coding" anywhere in user-facing text.
- [ ] No single, falsely precise cost or time number presented without a visible range.
- [ ] No hard-sell "just hire us" comparison; the DIY path is presented with genuine respect.
- [ ] No visible raw numeric moat score shown to the end user.
- [ ] No UI state in the moat check that reads as a rejection; every path ends in a next step.
- [ ] Danger-red token is not used for the DIY-path risk framing; warning-amber is.
- [ ] The moat check and the build reality check visibly reference each other at least once (per section 7), not presented as two unrelated demos.
- [ ] Vertical spacing stays within the 24px cap; no large clamp-based gaps.
- [ ] No em dashes, no all-caps, no title case, no emojis anywhere in interface copy.
- [ ] Chinese-language copy is flagged in the report as a draft for Cal's review, not shipped as final.
- [ ] The build actually runs without errors (start the dev server or open the artifact and confirm it renders before reporting done).

## 11. What to report back when done

Report in sentence case, no filler, covering:

1. What you built, where the file(s) live, and which setup you chose in section 1 and why.
2. The result of the definition-of-done checklist in section 10 — confirm each item, or say which ones you couldn't fully satisfy and why.
3. Any placeholder numbers used beyond the confirmed pricing tiers in section 4, so Riaan knows exactly what to check before this goes anywhere real.
4. Any point where you chose between two reasonable interpretations of this brief, and what you chose.
5. What you did not build due to scope, and why.

Do not ask clarifying questions before starting unless a genuine blocker exists (for example, the brand guidelines file cannot be found at all). Where this brief already states a default or fallback, use it and note the choice in your report rather than stopping to ask.
