# Hurulab Espresso Bar

Source: CEO concept, claude.ai artifact `79ce1220-bf3e-4ba9-9634-eac2a93f62ed`, recovered
4 September 2026 as a text capture pasted by the owner. **The source code was not recoverable**:
the saved `.html` was a browser capture of the claude.ai page and the artifact renders in a
sandboxed iframe that the save did not include. What follows is the visible text only. The
layout, the animation and the interaction are lost and would have to be redrawn.

History, not truth. No claim on a client-facing page may cite this file. See `CLAUDE.md`, the
evidence rule.

Subtitle: 1-Day Impact Session · Taiwan GTM Playbook

---

## Hurulab Espresso Bar

A 1-Day Rapid AI Engineering & Co-Building Session on Live Enterprise Data

Nine hours in the room. Fourteen days of pressure behind it. Your client's own non-technical
experts build a working operational AI application on their real data — and demo it live,
unscripted, to their General Manager before dinner.

T-14 → T-1 · The invisible engine
Hurulab FDEs provision, clean, map, and dry-run everything.

Day One
The client only ever sees this.

---

## Core concept

### Shift left. All of it.

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

## Pre-work phase · T-14 → T-1

### Two weeks prep work

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

## What we need from the client

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

## What Hurulab preps

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

## Data drop kit · due with the T-7 handover

### The Bean Bag

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

## Day One · 09:00 – 18:00

### Today's tasting menu

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

## The engineered climax · 16:30

### The unscripted stress test

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

## The ROI audit

### Numbers the room can't argue with

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

## After the shot · T+1 → T+14

### The Aperitivo

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

## Taiwan conversion framework

### Land & expand, one shot at a time

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

## Why this format wins here

### Built for the Taiwan enterprise buyer

**Pragmatic risk-aversion.** Heavy pre-work guarantees zero technical friction or data-access
issues on the day. The buyer never sees a failure mode, because every failure mode was retired at
T-1.

**Top-down executive authority.** Nothing converts without the GM's signature — so the entire day
funnels into 90 minutes engineered to earn it: their own staff, their own data, an unscripted test
they set themselves.

---

## Next step

### Reserve the bar

One sitting per enterprise per quarter. Bring 3–5 domain experts and one operational bottleneck;
executives are expected at 16:30 for the tasting.

Ticket fields: Date · Bottleneck · GM at 16:30 · Admit 5 · Nº 001 · 09:00–18:00

Footer: hurulab · Espresso Bar · 1-Day Impact Session · Taiwan GTM concept ·
T-14 → 09:00–18:00 → aperitivo T+14 → 90 days → multi-year
