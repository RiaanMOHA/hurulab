# hurulab story: Jadegia

*Extracted 2026-07-03. Evidence from project files and interview. Design perspective. Audience: a decision-maker at a Taiwanese company, owner, founder, gm or ecommerce lead, weighing who to trust with a serious digital build.*

## Part 1: evidence

### What does design do here

Design leads this project, it does not decorate it. Riaan is the design and creative lead; every technical and architectural decision is delegated to Claude, and the developer, Pedro, receives work through a pull-request-gated branch workflow (Pedro meeting notes 2026-06-08). Design made the defining decisions:

- Two complete brand directions, warm flagship store and cold luxury brand, designed, tokenised and presented as live testable Shopify theme variants (meeting notes 2026-06-09).
- A locked typography system: Cormorant SC weight 600 natural small caps for display, Inter 450 for body, corrected against optical size research; JF LanYangMing chosen for Chinese display after pushing back on the client's Noto Sans heading preference (design review notes 2026-06-03, session handoff 2026-06-08).
- Two fully tokenised colour systems, 20 tokens each, with programmatic WCAG contrast audits, 34 and 42 pairs tested, and one grey banned for text use (colour system pdfs, past sessions).
- Photography direction, including a store visit, background colour guidance and image specs (kickoff notes 2026-05-28, meeting notes 2026-06-17).
- Three structurally distinct appointment flow journeys for pieces above NT$200,000 (appointment flow html files, session 2026-06-09).
- Forensic beat-driven layout specs for the art collection and product museum templates, layout only, no colour, no font, no copy (handoff 2026-06-22).
- The homepage value proposition and hero direction, and the locked zh-TW translation table for Shopify's content translation system (meeting notes 2026-06-17, session 2026-06-24).

### How we do these projects

The actual sequence, from the handoffs and meeting notes:

1. Extract the truth first. A 21-page crawl of the old jadegia.com produced a full brand extraction report (jadegia-brand-extraction.md, 2026-05-13).
2. Build a behavioural base from Apple's HIG, iOS, iPadOS and macOS documentation via Claude browser prompts, packaged as four base files that survive any brand override (handoff 2026-05-26).
3. Extract visual brand layers from three luxury references, Patek Philippe, Van Cleef and Dinh Van, using a reusable prompt template (brand extraction files).
4. Build both brand directions as real theme variants on a live demo store, not static mockups, and hand the store to the client's team to test on their own devices (meeting notes 2026-06-09).
5. The client chooses. Here they chose a hybrid: flagship store branding and colours with luxury brand layout and navigation (interview, confirmed by session 2026-06-10).
6. Build the live theme through Claude Code using locked prompt formats with plan-first approval, exact paths, phase checkpoints and question gates, merged through Pedro's pull-request workflow (handoffs 2026-06-10 through 2026-06-22).
7. Session continuity runs on the /pickup and /handff handoff system, so no context is lost between working sessions (every handoff file).

Riaan directs all of it as a designer and writes no code. Claude is the research team, the spec writer, the translator, the auditor and, through Claude Code, the builder.

### Our value proposition

The client is a 94-year-old jadeite house in the Taipei 101 tower with incredibly expensive pieces and very rich clients, whose website was awful on desktop and mobile and used by nobody (interview). The old site was a brochure: white text on dark green everywhere, no cart, no accounts, no working search (jadegia-brand-extraction.md). A prior agency had produced a visual style deck in February 2026 and was replaced (interview).

What Jadegia bought, per the phase 1 scope MH·JG·2026·02: a full Shopify Plus storefront with design, build, trilingual setup, ECPay commerce, an AI product description workflow they own with no vendor lock-in, SEO migration, QA, launch and training so they operate independently. NT$900,000, 59 to 86 man-days, launch 10 to 12 weeks from signing.

What they got that they could not buy elsewhere: a real choice. Two finished brand directions on a live store twelve days after kickoff (kickoff 2026-05-28, demo 2026-06-09), and the confidence to pick, and even to mix. At the two-directions demo they made the defining decision themselves, taking the flagship branding with the luxury layout (interview). They chose MoreHarvest specifically because it could do this quickly and well, with combined design and development skill (interview).

### How we do it differently

A typical agency would have brought a bigger team and months of static mockups, slower and pricier. A template shop would have skinned a generic Shopify theme (interview). Here, one designer directing AI did the work of a research team, a design team, a copy and translation desk and a QA function, and the client evaluated real software, not pictures of software. The discipline that makes it work is on record: layout specs that carry no colour, font or copy so nothing is invented (handoff 2026-06-22); audits that return numbered verdicts naming failures (project working rules); a behavioural accessibility base that no brand decision may override (handoff 2026-05-26); and a hard rule that nothing is added beyond what the spec or the client asked for (handoff 2026-05-26, correction record).

### Open gaps

- The site is not yet live, so there are no launch or usage numbers.
- No verbatim client quotes on record beyond "literally the best image" about the hero (meeting notes 2026-06-25).
- Why the premium motion templates sit outside the written phase 1 scope is undocumented and treated as unimportant.
- The prior agency's name and the reason for their replacement are not documented beyond the deck's existence.


---

*The "Pixar seven-step" story passage that followed here has been removed. It was a writing
exercise about a composite client, not a record of events, and one such passage was once
mistaken for company history. The evidence above, including its open gaps, is what this
project stands behind.*
