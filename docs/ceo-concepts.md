# The CEO's concepts

**Three ideas from the CEO, as text.** Captured 4 September 2026 when the owner pasted them in;
the original HTML was not recoverable for any of them, so the layout, animation and interaction
are lost. Combined into one file 7 September 2026 when `knowledge/` was deleted.

**There were five captures, and two were duplicates.** The two flywheels were the same document
apart from one footer word naming the color scheme, and the presentation deck was the
verified-capability page rewritten as slides. Both duplicates were deleted on 7 September 2026
after a line-by-line comparison, removing about 660 lines and nothing else.

**History, not truth. No claim on a client-facing page may cite this file.** See the evidence
rule in `CLAUDE.md`: `docs/evidence.md` is the only source for what hurulab is.

**Four pages were drawn from these, and all four are gone.** The pages were built on
4 September and dropped by owner ruling on 7 September. What that work settled, the faults any
future page must avoid, is in `.plans/PLAN.md`.

**Verified capability was never drawn.** "Verified capability, rented out as an asset" carries positioning
that is **not in `brand.md` and has never been approved**: the phrase itself, the GT-OS two-layer
architecture, and the seven-step engagement. The market statistics in it are sourced to MIT and
to unnamed surveys. **None of it is a measured hurulab result and none of it may be presented as
a hurulab claim until the owner rules.**

---


# The espresso bar

*Source file: `espresso-bar.md`, text capture, 4 September 2026.*

### Hurulab Espresso Bar

A 1-Day Rapid AI Engineering & Co-Building Session on Live Enterprise Data

Nine hours in the room. Fourteen days of pressure behind it. Your client's own non-technical
experts build a working operational AI application on their real data — and demo it live,
unscripted, to their General Manager before dinner.

T-14 → T-1 · The invisible engine
Hurulab FDEs provision, clean, map, and dry-run everything.

Day One
The client only ever sees this.

---

### Core concept

#### Shift left. All of it.

Taiwanese enterprises are pragmatically risk-averse. The one-day format works because every
source of technical friction is eliminated before anyone walks into the room — so Day One is
reserved exclusively for the client's domain experts doing visible, valuable work.

**Before the day · Hurulab FDEs — the invisible engine**

- Infrastructure provisioning — isolated, single-tenant sandbox
- Data cleaning & ingestion — static cuts of PDFs, ERP exports, logs
- Ontology pre-mapping — raw tables become business objects
- Security & RBAC — granular access control applied up front
- Pre-flight dry run — zero-day technical blockers, guaranteed

**On the day · Client experts — the visible shot**

- Build logic in natural language — no Python, no SQL
- Assemble a dashboard with drag-and-drop components
- Execute writebacks into a live ERP/CRM test database
- Red-team their own app with corrupted real-world files
- Demo live to their C-suite — unscripted, on their data

---

### Pre-work phase · T-14 → T-1

#### Two weeks prep work

From green beans to a dialed-in machine: four milestones, each a stage of the brew with a named
owner and a hard deliverable. By T-1, nothing on the day can fail for a technical reason — Day
One only pulls the shot.

Stage summary:

- T-14 · Source — Pick the lot. One bottleneck, locked in.
- T-7 · Roast — Beans in, cleaned. The Bean Bag lands, data ingested.
- T-3 · Grind — Ground to objects. Ontology mapped, RBAC set.
- T-1 · Dial in — Machine primed. Dry run green, no surprises left.
- Day One · The pull — Espresso in the cup. Nine hours, one working app.

**T-14 · Source the beans — single use-case lock-in**

Pick one ultra-focused operational bottleneck — supplier yield-rate triage, automated RFQ
parsing, medical chart extraction. One shot, pulled well.

- Owner: Hurulab Lead + Client VP/COO
- Deliverable: signed-off use case

**T-7 · Roast — data provisioning & sandbox isolation**

Ingest static data cuts — PDFs, ERP exports, historical logs — into an isolated, single-tenant
Hurulab sandbox.

- Owner: Client IT Lead + Hurulab FDE
- Deliverable: loaded sandbox
- Format: the Bean Bag drop kit (below)

**T-3 · Grind — ontology pre-mapping & security setup**

Map raw tables into enterprise business objects — Part_Number, Vendor, Inspection_Report — and
apply granular RBAC.

- Owner: Hurulab FDE
- Deliverable: mapped ontology + access controls

**T-1 · Dial in — pre-flight dry run**

Test every data connection and logic-execution pipeline end to end. The espresso machine is
primed the night before.

- Owner: Hurulab FDE
- Deliverable: green pre-flight checklist

---

### What we need from the client

Everything Hurulab needs during the two weeks fits on one page. Nothing here requires production
system access or client engineering time.

**Decisions & people, by T-14**

- One named bottleneck, signed off by the VP/COO — not a wishlist
- 3–5 domain experts committed for the full day (engineers, purchasing leads, ops managers)
- C-suite calendar hold — GM/Chairman/VP locked in for the 16:30–18:00 roadshow
- A named IT lead as the single point of contact for data handover

**Data, by T-7**

- Static data cut covering 6–12 months of history — exports, not live connections, organized via
  the Bean Bag drop kit
- 50–200 real sample documents — vendor invoices, RFQs, inspection reports, charts — including
  the messy and edge-case ones
- ERP/CRM table exports (CSV/Excel) for the workflow in scope
- Master reference data — tolerance tables, vendor master, part-number lists

**IT & security, by T-3**

- NDA / data-processing agreement signed
- Data-classification sign-off for the sandbox cut
- RBAC role list — who sees what, and who may approve writebacks
- ERP/CRM test-database endpoint for the Day-One writeback demo

**Zero production risk.** Static cuts into an isolated single-tenant sandbox only — Hurulab never
touches a production system during prep, and Day-One writebacks land in the client's test
database.

---

### What Hurulab preps

The other side of the same two weeks: everything the FDE team must have finished so that nothing
on Day One is improvised except the executive's stress test.

**Scoping & staffing, by T-14**

- FDE + session lead assigned, with the Day-One run-of-show and roles agreed internally
- Baseline metrics captured — manual minutes-per-case measured now, so the 17:15 ROI audit has an
  agreed "before"
- Prompt & template library pulled from prior Espresso Bar engagements in the same vertical
- Bilingual materials ready — workshop guides and roadshow deck in Traditional Chinese and English

**Environment & data, T-7 → T-3**

- Single-tenant sandbox provisioned and isolated, audit logging on
- Data ingested and cleaned — parsing quality spot-checked against the client's real sample
  documents
- Ontology mapped to enterprise business objects the experts will recognize on sight
- RBAC applied exactly per the client's role list, writeback approval rights included

**Rehearsal & logistics, by T-1**

- End-to-end dry run green — ingestion → logic → dashboard → writeback into the test database
- 10-minute speedrun rehearsed on the client's own documents, timed
- Red-team file kit built — corrupted, incomplete, and edge-case samples, plus a few surprises
- ROI calculator preloaded & 90-day pilot contract printed, ready for signature at 18:00

**The espresso rule.** If the FDE can't pull the whole workflow end-to-end alone at T-1, the day
moves — a rescheduled session costs less than a visible failure in front of the GM.

---

### Data drop kit · due with the T-7 handover

#### The Bean Bag

The data never lives in one place — it's scattered across inboxes, chat threads, ERP screens,
binders, and someone's phone. The Bean Bag is a fixed drop structure the client fills without
integrating anything: they collect the beans; Hurulab does the roasting, grinding, and pulling.

```
espresso-drop/
├─ 00_MANIFEST.xlsx    ← one row per file
├─ 01_documents/       invoices · RFQs · reports
├─ 02_system-exports/  ERP/CRM tables, raw CSV
├─ 03_reference/       tolerances · masters
├─ 04_comms/           emails (.eml) · chats
├─ 05_odds-and-ends/   photos · scans · notes
└─ 06_golden-cases/    10 clean + 10 nightmares
```

**House rules**

- Don't clean anything. Cleaning is Hurulab's job — "helpful" pre-editing destroys the signal the
  ontology mapping needs.
- Raw formats only. Original file types — no PDFs of spreadsheets, no retyped tables. A screenshot
  is fine only when the screen is the only form the data takes.
- One drop point. Everything lands in the shared folder — nothing arrives as an email attachment
  to a Hurulab inbox.
- Forward, don't format. Relevant email and chat threads are exported as-is into `04_comms/`,
  never copy-pasted into a document.
- When unsure, include it — flagged PII in the manifest. The isolated sandbox and RBAC exist
  precisely so inclusion is safe.

**Steps**

1. Step 1 · by T-12 — Name a Data Runner. One person collects; everyone else just forwards to
   them. Usually the IT lead's delegate — not necessarily technical.
2. Step 2 · T-10 — Concierge call, 30 min. A Hurulab FDE walks the Runner through the Bean Bag
   folder by folder and agrees the export list and date range per system.
3. Step 3 — Export, don't filter. ERP/CRM/MES tables leave as raw CSV with all columns for the
   agreed period. Filtering hides exactly the edge cases the day needs.
4. Step 4 — Photograph the rest. Paper binders, whiteboards, the tolerance sheet living on one
   laptop — phone photos into `05_odds-and-ends/` are enough.
5. Step 5 — Log it in the manifest. One row per file as it's dropped: source, owner, period, why
   it matters, PII flag. Ten seconds per file — it becomes Hurulab's cleaning map.
6. Step 6 · by T-7 — Flag the golden cases. Domain experts mark 10 clean cases and 10 nightmares
   in `06_golden-cases/` — the nightmares feed the red-teaming course.

**00_MANIFEST.xlsx · example rows**

| File | Source | Owner | Period | Why it matters | PII |
|---|---|---|---|---|---|
| 02_system-exports/ERP_po-history.csv | ERP (SAP) | K. Chen · Purchasing | 2024-07 → 2025-06 | Full PO issue-to-receipt cycle for the workflow in scope | N |
| 01_documents/INSP_vendor-a-2025.pdf | QA shared drive | L. Wu · QA | 2025 YTD | The unformatted inspection reports the logic must parse | N |
| 05_odds-and-ends/line3-whiteboard.jpg | Someone's phone | Line 3 supervisor | current | The real tolerance overrides — they exist nowhere else | N |
| 04_comms/vendor-b-dispute.eml | Outlook | K. Chen · Purchasing | 2025-03 | Shows how exceptions are actually negotiated today | Y |

---

### Day One · 09:00 – 18:00

#### Today's tasting menu

Five courses, served 09:00–18:00. The client's hands stay on the keyboard from mid-morning on;
Hurulab's job is to have made failure impossible.

*Served daily 09:00 – 18:00 · Party of 3–5 · No substitutions after T-14*

**09:00–09:45 · Kickoff & the 10-minute speedrun** — Antipasto · Mindset, 45 min

Reset the frame from "AI chatbots" to deterministic operational automation: an FDE takes an
unformatted vendor invoice from raw file → parsed → validated against logic rules → written into
an enterprise system, live, in ten minutes.

Chef's note — served fast on purpose. Doubt has no time to brew.

**09:45–10:30 · Hands-on data exploration** — Antipasto · Mindset, 45 min

Domain experts — engineers, purchasing leads, operations managers — log into the pre-configured
workspace and confirm their own real-world assets are accurately mapped. Trust is built by
recognition.

**10:30–12:00 · Natural-language logic authoring** — Primo · Build, 90 min

Experts compose structured prompts instead of code: "Compare incoming yield defect codes against
master tolerances, flag anomalies exceeding 3%, generate an alert log."

Chef's note — nothing on this menu requires code. Plain language only.

First live run, before lunch.

**12:00–13:00 · Executive lunch & networking** — Intermezzo, 60 min

The morning's momentum does the selling over the table.

**13:00–14:30 · Drag-and-drop UI assembly** — Primo · Build, 90 min

Operators assemble a functional dashboard — risk meters, data tables, logic trigger buttons —
bound directly to the logic pipelines they built that morning.

**14:30–15:30 · Kinetic actions & human-in-the-loop** — Secondo · Writeback, 60 min

From read-only to real execution: "Approve Recommendation" now fires a transactional writeback
into the ERP/CRM test database — a purchase order generated, an inventory status changed.
High-stakes changes gated behind explicit human approval.

Chef's note — the moment read-only becomes real. The approve button is the house specialty.

**15:30–16:30 · Adversarial red-teaming & ROI audit** — Secondo · Writeback, 60 min

Participants attack their own app with corrupted, incomplete, edge-case files and harden the
guardrails. Then the audit: baseline manual metrics vs. the workflow they just built.

**16:30–17:15 · Client-led live demonstration** — Dolce · Roadshow, 45 min

The client's own non-technical operators — not Hurulab salespeople — present the live application
to their C-suite.

Chef's note — the house steps away from the table. The guests do the serving.

**17:15–18:00 · Quantified ROI & commercial proposal** — Dolce · Roadshow, 45 min

Audited cycle-time compression, labor hours saved, risk reduction — and the immediate same-day
conversion offer.

---

### The engineered climax · 16:30

#### The unscripted stress test

Taiwanese business culture runs on top-down executive authority — the General Manager, Chairman,
or Division VP signs, or nothing moves. So the final 90 minutes are engineered for exactly one
outcome: the executive personally breaks the script and watches the system hold.

1. **Hand over.** The CEO/GM is invited to hand the operator a completely unscripted, highly
   complex PDF or dataset — on the spot.
2. **Upload live.** The client operator uploads it into the system in front of the room. No
   rehearsal, no safety net — none needed.
3. **Watch it execute.** Instant AI reasoning, full audit trails, and a real writeback — performed
   by the executive's own staff.

---

### The ROI audit

#### Numbers the room can't argue with

Measured on the day, on the client's own workflow — illustrative baseline from a
document-processing use case.

Receipt, printed 17:15:

- Manual processing: 25:00 /case
- Espresso Bar workflow: 00:04 /case
- Time saved: 24:56 /case
- Cycle compression: ~375×

*Measured on the client's own workflow · audit trail attached · illustrative document-processing
baseline.* "Thank you — come again at T+3."

**Pull your own numbers** (interactive sliders in the original):

- Cases per day: 40
- Manual minutes per case: 25
- Result: 4,156 hours saved per year, 2.1 full-time equivalents
- Assumes 250 working days and the 4-second execution measured on the day.

---

### After the shot · T+1 → T+14

#### The Aperitivo

The espresso is drunk in a day; the relationship is poured in the two weeks after. While the
client's top-down decision process runs, the Aperitivo keeps the momentum warm — structured,
unhurried, and always pointing at the next step.

**T+1 · Keep the app alive.** The sandbox — and the application the client's own experts built —
stays live for 14 days, so operators keep feeding it fresh files. The roadshow recording and the
audited ROI one-pager land on the GM's desk the next morning.
Owner: Hurulab FDE. Deliverable: live app + ROI one-pager.

**T+3 · Champion debrief.** A 60-minute session with the day's operators — now internal champions.
Harden the workflow they built, and rank the next three use cases that surfaced during
red-teaming into an expansion backlog.
Owner: Hurulab Lead + Client champions. Deliverable: ranked use-case backlog.

**T+7 · Pilot proposal on the table.** Fixed-fee 90-day production pilot, scoped to exactly the
workflow the client already watched work — with success metrics pre-agreed from the day's audited
baseline. No new claims to verify, nothing to imagine.
Owner: Hurulab Lead + Client VP/COO. Deliverable: signed-ready SOW.

**T+14 · Decision point.** The pilot signs and kicks off — or the sandbox sunsets. A clean close
either way: no zombie evaluations, no drifting proof-of-concept. Scarcity is part of the offer.
Owner: Client GM / VP. Outcome: pilot kickoff, or clean close.

---

### Taiwan conversion framework

#### Land & expand, one shot at a time

Never ask for a multi-million-NTD annual contract on Day One. The commercial ladder keeps every
step low-friction — the Aperitivo carries the client from the first rung to the second while the
demo is still fresh in the GM's mind.

**Step 1 · Prove — Hurulab Espresso Bar, 1 Day.** A proven MVP by 18:00, demoed by the client's
own people to their own executives. (Day 1)

**Step 2 · Land — 90-Day Production Pilot.** Signed during the Aperitivo (by T+14): fixed-fee
deployment of the exact workflow built at the Espresso Bar, into live production. Negligible
perceived risk — the GM already saw it work. ($15K–30K USD)

**Step 3 · Expand — Multi-Year Enterprise Subscription.** Connectors and security are already live
for one department, so QA → Purchasing → Logistics → HR expansion needs minimal setup. Use QBRs to
run the next Espresso Bar day for each adjacent business unit. ($100K+ USD/yr)

**Expansion loyalty card.** Connectors and security go live once — every next business unit is a
cheaper pull. A new stamp at each QBR's Espresso Bar day. Stamps: QA / Insp · Purchasing ·
Logistics · HR · Next?

---

### Why this format wins here

#### Built for the Taiwan enterprise buyer

**Pragmatic risk-aversion.** Heavy pre-work guarantees zero technical friction or data-access
issues on the day. The buyer never sees a failure mode, because every failure mode was retired at
T-1.

**Top-down executive authority.** Nothing converts without the GM's signature — so the entire day
funnels into 90 minutes engineered to earn it: their own staff, their own data, an unscripted test
they set themselves.

---

### Next step

#### Reserve the bar

One sitting per enterprise per quarter. Bring 3–5 domain experts and one operational bottleneck;
executives are expected at 16:30 for the tasting.

Ticket fields: Date · Bottleneck · GM at 16:30 · Admit 5 · Nº 001 · 09:00–18:00

Footer: hurulab · Espresso Bar · 1-Day Impact Session · Taiwan GTM concept ·
T-14 → 09:00–18:00 → aperitivo T+14 → 90 days → multi-year

---


# The flywheel

*Source files: `flywheel-harmattan.md` and `flywheel-purple-light.md`, text captures,
4 September 2026. **The two were the same document.** Merged 7 September 2026 after a
line-by-line comparison found they differed only in the title, one footer word naming the
color scheme, and the build notes at the end, which were Harmattan's alone. The Purple
Light copy is deleted; nothing in it was unique.*

### Opening

**Hurulab — AI × Software × Network**

- **AI Speed** — turns ideas into working demos instantly while making the most of every token.
- **Zero Marginal Cost** — software scalability built on proven methods that work.
- **Network Effects** — the flywheel makes every user interaction continuously optimize the
  platform for all.

Technologies across generations create a compounding flywheel — accelerating iteration, slashing
costs, and widening your competitive moat with every single turn.

---

### 01 · AI / LLM

#### Give time back to thinking

AI compresses the journey from idea to working demo — and from raw data to finished report — into
a matter of hours, while routing makes sure every token is spent where it counts. What you get
back is not just lower cost; it is the most expensive human hour there is: time to think.

##### The same 10 hours, redistributed

On the left, a day without AI: searching, reading, and organizing eat ninety percent. On the
right, the same day with AI: the busywork shrinks to a sliver, strategic thinking expands to
eighty percent — and the research-and-search block disappears entirely.

Chart, 0h to 10h:

- BEFORE AI — Research 4h, Reading 3h, Organizing 2h, Thinking 1h
- AFTER AI — Reading 1h, Organizing 1h, Thinking 8h

Deltas: Strategic thinking ×8 · Research & search 4 → 0 · Reading documents 3 → 1 · Organizing
data 2 → 1 · Strategic thinking 1 → 8

The saved time is not for resting — it is for thinking. Once AI takes over research, summaries,
and organizing, thinking grows from 1 hour to 8 — and that, not the fast demos or fast reports, is
the real point.

##### From idea to execution: two roads

The top row is the old road: every step queues behind the last. Below is the AI road: you sit at
the hub while data aggregation, document summaries, and rapid prototyping happen simultaneously,
pouring straight into critical thinking and strategy.

**The old way · linear and slow:** Idea → Manual search → Read 100 pages → Build spreadsheet →
Make a demo → Review. Total: days to weeks.

**The AI way · hub and spoke:** three streams run at once. You + AI, one afternoon. Data
aggregation · Doc summaries · Rapid prototype, all pouring into Critical thinking & strategy.
Total: hours.

Linear becomes parallel. On the old road every step waits in line; on the AI road the waiting is
stacked and run at once. Humans appear only at the very start (the idea) and the very end (the
judgment) — the two positions machines cannot take.

##### Routing: every task goes to the cheapest model that can handle it

Not every task needs a frontier model. The routing engine estimates tokens, weighs complexity,
aligns on the outcome — then sends the task to the model that is exactly strong enough. Pick a
task type and watch it travel.

Interactive selector: High-stakes: due diligence · Full map · Routine: news digest.

Flow: A task arrives (any request) → AI routing engine · the brain (estimate token length ·
analyze task complexity · align outcome & risk) → one of two paths → Task completed (maximum ROI).

- **Complex · high-stakes** → Closed frontier API. Quality ceiling · judgment work. Cost $$$ ·
  ≈ $3 /M
- **Simple · routine** → Open-source model. Hosted or self-run · the daily bulk. Cost $ · ≈ $0.2 /M

The routing rule: go cheap whenever you can, flagship only when you must.

The savings come from the split, not the model. Routine tasks are the bulk of daily volume; send
them down the open-source path (10–15× cheaper) and reserve the frontier API for genuinely
high-stakes judgment — same quality bar, one size smaller bill.

##### Static vs. dynamic: why routing saves money

The stakeholder view: the traditional approach swings the frontier model like an all-purpose
hammer; routing aims every cent at what the task is worth.

| Evaluation metric | Traditional · static | Routing · dynamic |
|---|---|---|
| Model selection | One heavy API for everything. | Swaps between open-source and closed APIs per task. |
| Token optimization | Pays full rate regardless of task size. | Truncates, caches, and routes by token length. |
| Task alignment | Overkills simple tasks with the priciest model. | Matches task complexity to model capability — exactly strong enough. |
| Outcome delivery | High quality, staggering waste. | The same quality at the lowest possible price. |

Quality unchanged, price changed. Every cell in the right column does the same thing: aligns what
you spend with what the task is worth.

##### The quadrant: high-value work still needs human eyes

X is how much human attention a task needs; Y is how much productivity AI brings to it. The
top-right corner is where cost compounds — high-value tasks cannot be left on autopilot.

Axes: Human attention required → (low to high). AI productivity value ↑.

Quadrants: sweet zone · full autopilot · The compounding cost trap (high value · high oversight) ·
hand to rules & software · redesign or outsource.

Plotted items: Format conversion · Data cleanup · News digests · Social drafts · Compliance review
· Client proposals · Due diligence · Investment calls.

Top-right = the compounding cost trap. Due diligence, proposals, compliance, investment calls —
these are exactly where AI helps most, yet every one needs a human sign-off. AI supplies the
productivity; humans supply the hourly bill.

##### Output plateaus high, the bill keeps climbing

One timeline, two measures: bars on the left axis = AI output, in place from week one and flat
ever after; the line on the right axis = cumulative labor and consulting cost — review, prompt
tuning, audits, fixes, billed by the hour and never looking back.

Axes: left 0 / 60 / 120 (units per week). Right $0k / $12k / $24k. X: W1 · W3 · W5 · W7 · W9 · W11.

Series: AI output · high & flat (left axis, units/week). Cumulative labor / consulting cost (right
axis, $k) · keeps climbing.

AI's line is flat; the human line slopes. Output is in place on day one, but human hours stack
week after week — and that line never stops on its own.

##### Where the money goes: the attention tax

X is tasks completed; Y is total cost. The bottom layer is AI API and software — low and
predictable. The top layer is human review, consulting, and compliance billables — a wedge that
widens with every task.

Axes: Y 0 / 1,000 / 2,000 / 3,000. X 0 / 250 / 500 / 750 / 1000 tasks completed.

Layers: The attention tax — human review · consulting · compliance billables (top). AI API +
software · low & predictable (bottom).

The attention tax dominates the budget. At scale the AI cost barely moves while the human share
thickens. That is the case for the next section: freeze validated judgment into software, pull
humans out of every single run, and the tax finally stops.

##### The two engines of high margin: owned GPUs + token efficiency

COGS gets flattened by two moves: compute goes from rented to owned, and tokens go from "blast
everything at the flagship" to "cache first, then route."

**① Local GPUs · variable becomes fixed.** The traditional approach rents compute from cloud
providers by the hour and by the token, so costs climb in lockstep with users. Buying GPUs turns
compute into a one-time capital asset — and as traffic explodes, the cost spread across each user
shrinks toward zero.

**② Token efficiency · algorithmic savings.** The traditional approach blasts every query at
expensive frontier models, eating 30–50% of revenue. Prompt caching + model routing (easy tasks to
small local open-source models) + semantic search slashes the remaining external API dependency by
80% or more.

| Metric | Traditional AI business | AI-network model | Financial impact |
|---|---|---|---|
| API / token expense | 30–50% of revenue | 2–5% | Caching plus small local models keep external calls minimal. |
| Hosting & compute | 15% (cloud markup) | 2% (electricity + colo) | Owning the hardware keeps the cloud provider's margin in your pocket. |
| Total COGS | 45–65% | under 10% | The bigger the scale, the closer expenses get to zero. |
| Gross margin | 35–55% | 90%+ | Software-like scaling with a deep-tech moat. |

Variable cost becomes a fixed asset. Cloud bills grow with traffic; owned GPUs are bought once, so
the more traffic, the closer each user's share of cost gets to zero — and the remaining external
API dependency gets cut another 80% by caching and routing.

##### The scale inflection: a cost-per-query waterfall

X is monthly query volume on a log scale. The cloud API costs the same every single time; owned
GPUs, once saturated, send the per-query cost crashing down like a waterfall.

Axes: Y 0 / 0.5¢ / 1¢ / 1.5¢ / 2¢. X 1k / 10k / 100k / 1M / 10M monthly queries (log scale).

Markers: inflection · GPUs saturated. Cloud API · always 1¢. Owned GPUs · toward 0. "All the
savings live here."

Volume is your friend. The cloud line lies at 1¢ forever; owned compute plunges past the
inflection point and keeps falling — scale stops bringing bills and starts bringing advantage.
This is the visual proof that network capabilities scale painlessly.

---

### 02 · Marginal Cost

#### The second tenant is almost free

The engines are written once; every tenant after that barely moves the cost line. First watch
where the signal goes, then add the tenants yourself.

##### One code path

Pick a tenant and watch where the signal goes. Whoever is using it, the same two engines light up
— only the config changes, never the code.

Selector: MoreHarvest · Kumamoto | Both at once | Dada · Tokyo

**Tenants**

- Kumamoto — MoreHarvest. Real estate · Kumamoto local news & market
- Tokyo — Dada Investment. Investing · Tokyo markets & policy

**Shared engines**

- News crawler engine — fetch · clean · dedupe · store. tenants=2 · same build
- Content generation engine — summarize · rewrite · schedule. tenants=2 · same build

One codebase, one deployment. Fix a crawler bug or tune the generator's voice once, and Kumamoto
and Tokyo both get better at the same moment. That is the premise behind the next three charts.

##### Add them yourself: every tenant jumps the margin

The cost was paid when the engines were written. After that the cost line barely moves while
revenue climbs as usual — the gap between the two lines is the margin.

Axes: Y 0 / 90 / 180 / 270 / 360. X 1 / 2 / 3 / 4 / 5 / 6 tenants. Marker: margin 15.

Series: Revenue (fixed monthly fee per tenant) · Total cost (fixed build + tiny marginal) · Gross
margin.

Interactive readout at 1 tenant: Gross margin 25% · Tenants 1 · Monthly revenue 60 · Monthly cost
45. Controls: − 1 tenant / ＋ 1 tenant.

1 tenant (MoreHarvest): the fixed cost has nowhere to spread yet — 25% margin. Press "+" to plug
in Dada.

##### The cost of each unit falls toward zero

One x-axis (units sold), two y-axes: left = cost per unit, right = profit margin. The stretch
where cost collapses is exactly the stretch where margin climbs — each line reads its own axis,
and the colors follow the axes.

Axes: left 0 / 4 / 8 / 12. Right -100% / -50% / 0% / 50% / 100%. X 0 / 250 / 500 / 750 / 1000
units sold.

Markers: loss turns to profit · margin → 90% ceiling · cost per unit ≈ 0.

The first few copies are the expensive ones. All the fixed build cost lands on the earliest sales;
once volume arrives, amortized cost plunges toward zero and margin swings from loss to profit,
climbing until it hugs a ~90% ceiling — a ceiling set by that sliver of marginal cost.

##### After break-even, the widening gap is all margin

The executive version: X is sales volume, Y is total dollars. The cost line starts high (fixed
R&D) and then lies almost flat; the revenue line shoots straight up. The area between the two
lines is profit.

Axes: Y 0 / 1,000 / 2,000 / 3,000. X 0 / 250 / 500 / 750 / 1000 units sold. Marker: break-even ≈
111 units. "This whole wedge is margin."

Series: Total revenue · Total cost (fixed R&D + tiny marginal).

The story only starts after break-even. Because the cost line stays flat, nearly every additional
sale drops straight into the profit gap — which is why the margin keeps climbing instead of
settling at a plateau.

---

### 03 · Network effect

#### The flywheel that strengthens with use

First push Hurulab's wheel with your own hand, then see the general principle behind it and the
whole network laid flat — and finally let two curves answer the question: how many turns before
everyone feels it?

##### Push it yourself

Four nodes, one direction. Every use in Kumamoto and Tokyo pushes the same wheel — press "Use it
once" and feel it accelerate.

Hub: Hurulab — shared engines, one codebase.

Nodes: Cities in use (Kumamoto + Tokyo daily) → Data & feedback (corpus · fixes · evals) → Engine
upgrades (one fix → every tenant) → Better output (sharper crawls + content).

Tenant badges: Kumamoto·MH · Tokyo·Dada. Control: "Use it once →". Readout: uses 0 · speed 1.0×.

A crawl rule learned in Kumamoto is live in Tokyo by the next morning — and vice versa. Nobody
waits for anybody.

A flywheel is not a flowchart. It has no finish line: output improves → both cities rely on it
more → usage grows → the engines upgrade again. The more a network is used, the more it is worth
to every member.

##### The data flywheel's reinforcing loop

The general principle behind the wheel above. The R at the center is the systems-dynamics mark for
a reinforcing loop: this is no ordinary cycle — every completed turn makes the next one faster and
bigger.

Centre: R — reinforcing loop.

Loop: More users join (contributing more data) → A deeper data pool (data · usage · feedback) →
Sharper patterns (AI learns from the pool) → Better for everyone (every tenant at once).

Cause runs in one direction only. More users → a bigger data pool → sharper patterns → a better
product → which attracts more users again. The R mark is the reminder: this system self-accelerates
with scale, and it does not stop on its own.

##### The node map: who gives, who gains

Data flows inward; patterns radiate outward. Hover over any member: it hands in one stream of data
and receives back everything the whole network has learned.

Centre: Network intelligence — the shared brain, more members, smarter.

Members: MoreHarvest (Kumamoto · data) · Dada (Tokyo · data) · Tenant C (future member) · Tenant D
(future member).

Legend: thin lines in = each member's data. Thick lines out = shared patterns · continuous
optimization.

One stream of data in, four streams of patterns out. This is how people with similar usage share a
network effect — and a new member (dashed) inherits everything the network has already learned on
day one.

##### How many turns until it kicks in: the inflection

X counts flywheel turns on a log scale. Left axis = effort per member falls from a high start;
right axis = whole-network efficiency stays flat, then explodes. The moment the two lines cross,
network effects officially take over.

Axes: 0 / 50 / 100 on both. X 1 / 5 / 20 / 50 / 100 flywheel turns (log scale).

Zones: ◄ MANUAL PUSH | NETWORK EFFECTS ►. Marker: ★ inflection · critical mass (turn 35). Labels:
effort: high · efficiency: liftoff.

Series: Effort per member (left axis · index) · Network efficiency (right axis · index).

Before critical mass, people push; after it, the network pushes itself. The early turns are
expensive — every rule written by hand, every error fixed by hand. Past the inflection point, the
accumulated data starts working on everyone's behalf: effort collapses and efficiency takes off.

##### How fast a new member gets value: the ski slope

Every extra turn of the flywheel shortens the next member's time from joining to seeing value. On
turn 1 it takes 30 days; by turn 50, just 30 seconds.

Y scale: 30 days / 7 days / 1 day / 1 hour / 5 min / 30 sec. X 1 / 10 / 20 / 30 / 40 / 50
cumulative flywheel turns.

Markers: Turn 1 — value takes 30 days. Turn 50 — 30 seconds. 86,400× faster. "The data & liquidity
are already in the network."

This is the network's compound interest. The data and rules Kumamoto and Tokyo spun up all live in
the network; a new city plugs in and starts on turn 50 from day one — no climbing the slope again.

---

### 04 · The Big Loop

#### The whole page, folded into one loop

Each of the first three sections is a node; chained together, they are Hurulab's big flywheel.
Every "+" marks reinforcement: AI saves time, software turns time into margin, margin feeds the
network, and the network makes AI stronger in return.

Centre: The big flywheel — every turn, faster.

Nodes:

- AI · LLM automation — The Engine. Time + token savings.
- Software economics — The Fuel. Near-zero marginal cost.
- Network effects — The Amplifier. More users → more data.
- Capabilities — The Output. Advanced features · scale.

**① Engine → Fuel +** Near-instant generation and automation cut R&D and operating time to the
bone, while routing sends every token to the cheapest capable model — time and token cost together
trigger software economics.

**② Fuel → Amplifier +** Serving the next user costs almost nothing. The freed capital plus
friction-free distribution goes into aggressive user acquisition and infrastructure reinvestment —
feeding the flywheel.

**③ Amplifier → Output +** More users mean more data, sharper-tuned models, and denser node
connections — what the network can physically do grows outward on its own.

**④ Output → Engine +** Higher capabilities hand AI better context and tools, and proven methods
feed back to sharpen the router — it learns which model is enough for which task and hits it on
the first try. Time and tokens both save harder, and the loop returns to the start, spinning
faster.

Where this loop ends is a moat. The system gets smarter and faster, and every turn makes it harder
to copy — because what competitors would have to chase is not a feature, but the entire loop.

##### The jaws of profitability

Revenue is driven up exponentially by network effects; expenses are pressed flat by AI efficiency
and near-zero marginal cost. The gap that opens between them is your margin. The dashed line is
the control — traditional SaaS expenses grow along with scale.

Axes: Y 0 / 200 / 400 / 600 / 800. X 0 / 12 / 24 / 36 / 48 time / scale (months). Marker:
break-even · month 22. "The profit jaws · widening."

Series: Revenue (exponential growth) · Your expenses (near-zero marginal) · Traditional SaaS
expenses (linear · control).

First the cross, then the blowout. Before the crossing is the investment period; after it, nearly
every dollar of revenue growth carries no new cost — the wider the jaws open, the thicker the
margin.

##### Anatomy of one dollar: unit economics

The same dollar earned, spent two ways. On the left, a traditional software company; on the right,
the AI-network business — every expense structurally flattened, with ninety cents left over as
margin.

Bars, 0% to 100%:

- Traditional — COGS / hosting 15% · Ops / support 20% · R&D / eng 25% · margin 40%
- AI · Hurulab — COGS 2 · Ops 3 · R&D 5 · 90% pure margin

| Cost component | Traditional software | AI network | Rationale |
|---|---|---|---|
| COGS / hosting | 15% | 2% | LLM caching and cheap compute cut server costs to a rounding error. |
| Ops / support | 20% | 3% | LLM agents handle 95% of tier-1 support instantly. |
| R&D / engineering | 25% | 5% | AI code generation plus automated testing slashes timelines. |
| Profit margin | 40% | 90% | Near-zero expenses leave pure profit. |
| Human validation | Squeezed by deadlines | Deliberately kept — even increased | Saved time is reinvested into verification and double-checking — the one expense never cut. |

The one cost never cut: human validation. AI makes output fast, and every hour it frees goes into
verification and double-checking — so every deliverable meets the standard, stays compliant, and is
safe to ship. Because the intangible damage one risky delivery does to trust and reputation
outweighs any line item on the P&L.

A 90% margin is not scrimped — it is designed. Caching crushes COGS, agents take support, AI writes
the code — every expense is structurally removed. The small human sliver that remains is not cost
that escaped the axe; it is deliberately stationed at the final gate: quality.

##### Production vs. validation: reallocating the hours

On the left, the traditional mode: eighty percent of the time goes to production. On the right, the
new division of labor: humans spend the first 10% on strategy, planning, and architecture; AI takes
the middle 80% of production; humans spend the last 10% validating and de-risking.

Bars, 0% / 50% / 100%:

- Traditional — Production (human) 80% · Validation / QA 20%
- Human ends · AI middle — Strategy 10% · AI does the making 80% · Validation 10%. Human time ·
  only at the ends 20%.

Segments: Strategy · architecture (human), first 10%. Production (AI), middle 80%. Validation ·
de-risking (human), last 10%.

Humans hold both ends; AI runs the middle. The first 10% sets the direction right — strategy,
planning, architecture. The last 10% locks the delivery down — validation, double-checking,
de-risking. The middle 80% of production goes entirely to AI. The time has not shrunk — it has
moved to the two highest-leverage ends.

##### Where efficiency crosses risk

X is the time and rigor invested in human validation. Production cost lies low the whole way thanks
to AI; potential reputation risk cliff-dives as validation deepens — past the golden cross, risk is
cheaper than cost.

Axes: left 0 / 50 / 100. Right 0% / 50% / 100%. X 0% / 25% / 50% / 75% / 100% validation time &
rigor →.

Markers: ★ golden cross · risk dips below cost. 100% validation → risk near zero. Production cost ·
low & level. No validation = full risk.

Series: Production cost (left axis · held low by AI) · Potential reputation risk (right axis).

The cost of one risky delivery ≫ everything automation saves.

Validation is the cheapest insurance there is. Thanks to AI the cost line barely moves, but the
risk line is exquisitely sensitive to validation — push human validation to 100% and risk
approaches zero while the bill barely changes.

---

### 05 · Design notes

#### Why the page is drawn this way

This page is itself a UI/UX exploration. Four principles, drawn from research on flywheel diagrams
and the visualization of software economics.

**One idea per view — one idea per screen.** Shared engines and margin tell the same story, so they
share a section — but every board still gets exactly one interaction. Cramming everything into one
figure is where spaghetti diagrams begin.

**≤ 5 nodes — five nodes at most.** The research consensus: past five nodes, readers lose the
self-reinforcement thread. This page uses four, with the hub reserved for the shared engines.

**Interaction over annotation — let people press, not read.** "The second tenant is almost free" is
a claim when written; pressing "+" and watching the margin jump is a feeling. Causality is proven
by interaction.

**Motion = momentum — a flywheel has to move.** The point of a flywheel is momentum: one more use,
a little more speed. A static circle is just a cycle diagram; a circle that accelerates is a
network effect.

---

Footer: Hurulab · proposal B "Harmattan" · the dust palette · Kumamoto ⇄ Tokyo

---

### How the Harmattan build behaved

Read out of `hurulab-harmattan.html` before that file was deleted, 4 September 2026. It is the
only record of how the page moved, and it matters because the animation is the argument: a
flywheel that does not accelerate is just a cycle diagram.

**It was already on hurulab's system.** The palette is the hue-318 purple ramp of `color.md`,
oklch throughout, with Cascadia Mono for display and Fustat for body per `type.md`. Harmattan's
own character came from two additions: a warm ochre second accent (`oklch(0.620 0.115 74)`, with
`0.880 0.100 82` and `0.838 0.128 80` as its light steps) used for emphasis against the purple,
and warm-tinted neutrals — the near-white ground at `oklch(0.972 0.010 72)` rather than a cold
gray. Light and dark were both defined, the dark ground at `oklch(0.235 0.032 258)`.

**Motion.** One easing curve for everything, `cubic-bezier(.22,1,.36,1)`, and short durations,
0.2s to 0.25s, on opacity, stroke and shadow. Three keyframe animations only: `in` for section
entrances, `flow` for signal travelling along a path, `spin` for the flywheel itself. Entrances
were not scroll-driven — no IntersectionObserver — so `motion.md`'s scroll-entrance rule was not
exercised.

**Interaction.** Every board had exactly one thing to press, per the page's own design notes.
Five click targets (the tenant selector, the routing task selector, the tenant +/− stepper, the
"use it once" flywheel push), pointer enter/leave/move for the node-map hover, and focus/blur for
keyboard reach. The ROI sliders on Espresso Bar are the same idea in the other document.

**What to preserve on rebuild:** the single easing curve, the sub-250ms durations, one interaction
per board, and the rule that pressing something proves the claim that the text only asserts.

---


# Verified capability, rented out as an asset

*Source files: `verified-capability.md` and `presentation-deck.md`, text captures,
4 September 2026. **The two were the same eight beats**, one written as a page and one as
slides: same headline, same problem, same two-layer architecture, same seven steps, same
close. Merged 7 September 2026, keeping the page version because it was never drawn.*

### Hero

Kicker: SOFTWARE + AI DEPLOYMENT, VERIFIED

#### Verified capability, rented out as an asset.

LLMs made producing capability free. Software made distributing it free. HuruLab owns the one
link that is still expensive: verification, so you can trust AI, rely on it, and afford it.
With receipts.

Actions: Book a discovery call · See how it works

Strip: GTL FROZEN · GRADED EX-POST · NEVER REWRITTEN

---

### The problem

#### Between AI and your operations, there is a gap

**AI capability.** LLMs, AI agents, copilots, RAG. Cheap, everywhere, generic. It does not
know your business exists, and unsupervised, you cannot tell whether its output can be
trusted.

**The gap.** Capability never meets the pain on its own. Where 95% of AI pilots land: no
measurable P&L (MIT, 2025).

**Your operations.**

- Orders stuck between ERP and spreadsheets
- Quotes that take three days
- Month-end reconciled by hand
- The process lives in one veteran's head

Specific, local, undocumented. No off-the-shelf agent can find it.

**hurulab, the bridge.** Front-line engineers against your own data. Before any solution, we
find the real problem with you.

---

### The product

#### Enterprises adopt AI only when ROI can be measured

A goal you set, a contribution you can see, a budget you control. Three terms, one equation.

**A clear business goal — set with you, frozen before work starts.** Found at your front line,
in your own data, written down as a prediction that cannot be edited later. **= trust**

**A measurable contribution — you see exactly how AI moved the goal.** Outcomes reconciled
against the frozen goal in an append-only ledger. ROI is a subtraction, not a story.
**= reliability**

**A budget under control — metered, capped, auditable spend.** Every task logged with its
cost, circuit breakers on the budget. Spend stays inside your control, always.
**= efficiency**

True adoption: ROI you can read off a ledger. Trust, reliability and efficiency is the
product; AI is just our method.

---

### How it works · architecture

#### Two layers: data isolated, capability shared

**HuruLab central intelligence hub** — shared, compounds with use.

- Human experience: judgment, distilled from delivery
- Software tools: hardened, zero-marginal code
- AI routing: picks the best model per task
- Proven-pattern network: graded skills, ontology templates

Up: patterns and experience only, never your data.
Down: every client's lessons, working for you.

**Client A's GT-OS** — A's data stays here, private, firewalled.
**Client B's GT-OS** — B's data stays here, private, firewalled.
**Client N's GT-OS** — N's data stays here, private, firewalled.

**The privacy deal.** Your raw data never leaves your firewall. What compounds is the patterns
and experience we earn solving your problems, and every client's lessons end up benefiting
everyone in the HuruLab network.

---

### The engine

#### Four components, one flywheel

hurulab is built from all four.

- **Business, the raw material.** Front-line raw data. Every fixed problem grows our data and
  experience.
- **AI and LLM, speed.** Prototype and demonstrate fast. Months of build collapse to minutes.
- **Software, scale.** Proven methods shipped where they fit next, at near-zero marginal cost.
- **Network, compounding.** Triage judgment and proven methods sharpen daily. Each
  contribution benefits everyone.

One turn of the wheel manufactures trust, reliability and efficiency, and it spins faster with
every client.

---

### One engagement

#### Seven steps forward, then the line bends into a cycle

Linear in delivery, cyclical in learning: step 07 feeds the next lap's step 01, so every round
starts sharper than the last.

| Step | Name | What happens | Component |
|---|---|---|---|
| 01 | Sync | Your records flow in, versioned, mismatches flagged | Reconciler |
| 02 | Structure | Flat records become a typed map of your business | Ontology |
| 03 | Hypothesize | Prediction frozen before acting, never edited after | Advisor |
| 04 | Route | The cheapest engine that answers correctly | Router |
| 05 | Build | Runs in your real workflow, receipts attached | Explainer |
| 06 | Verify | Reality scored against the frozen prediction | Grader, gate |
| 07 | Compound | The graded ledger re-weights the next round | Grader |

Each lap: facts truer, routing cheaper, hypotheses sharper.

---

### Who it's for

#### Built for mid-caps the giants price out

TW/JP mid-caps, NT$0.5 to 5B revenue. Manufacturing-heavy operators in the Taiwan to Kyushu
corridor: semis, testing, precision machinery. Willing to try AI, stuck for three reasons.

**No one at their front line — 55%** have no in-house AI talent, and big vendors do not embed
at their ticket size.

**True cost unknowable — 95%** of AI pilots show no measurable P&L (MIT, 2025). Money out,
value invisible.

**ROI unmeasurable — 44%** cannot evaluate the benefit, so adopting AI becomes a bet they
cannot sign.

**3.6×** Digital transformation stalls: 23.5% SME adoption against 85.1% at ¥1T+ giants. Not
because they do not want AI, but because no one can tell them the return.

> "We're not telling you to run everything on AI. We tell you which 30% belongs in software,
> which 50% you can trust to AI, and which 20% must stay with your people. And the split is
> auditable."

---

### Close

Book a discovery call. A 60-minute interview-as-demo, paid discovery, prediction frozen before
we start.

Consultants sell hours. SaaS sells fixed software. AI vendors sell deflating tokens. HuruLab
makes business better every day.

---
