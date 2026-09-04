# AI × Software × Network — the flywheel page

Source: CEO concept, claude.ai artifact `8c65c024-743e-47fa-b7a4-db418351c560`, recovered
4 September 2026. Subtitle: "Kumamoto ⇄ Tokyo".

**This is proposal B, "Harmattan · the dust palette".** It is one of two competing design systems
the CEO built to be judged against each other. Its sibling, `flywheel-purple-light.md`, carries
word-for-word identical content in the other system: the argument is held constant so that only
the design is being tested.

How the Harmattan build behaved is recorded at the end of this file, read out of its HTML before
that file was deleted.

History, not truth. No claim on a client-facing page may cite this file. See `CLAUDE.md`, the
evidence rule. Note in particular that the margin, cost and ROI figures throughout are
illustrative model outputs, not measured hurulab results.

---

## Opening

**Hurulab — AI × Software × Network**

- **AI Speed** — turns ideas into working demos instantly while making the most of every token.
- **Zero Marginal Cost** — software scalability built on proven methods that work.
- **Network Effects** — the flywheel makes every user interaction continuously optimize the
  platform for all.

Technologies across generations create a compounding flywheel — accelerating iteration, slashing
costs, and widening your competitive moat with every single turn.

---

## 01 · AI / LLM

### Give time back to thinking

AI compresses the journey from idea to working demo — and from raw data to finished report — into
a matter of hours, while routing makes sure every token is spent where it counts. What you get
back is not just lower cost; it is the most expensive human hour there is: time to think.

#### The same 10 hours, redistributed

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

#### From idea to execution: two roads

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

#### Routing: every task goes to the cheapest model that can handle it

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

#### Static vs. dynamic: why routing saves money

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

#### The quadrant: high-value work still needs human eyes

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

#### Output plateaus high, the bill keeps climbing

One timeline, two measures: bars on the left axis = AI output, in place from week one and flat
ever after; the line on the right axis = cumulative labor and consulting cost — review, prompt
tuning, audits, fixes, billed by the hour and never looking back.

Axes: left 0 / 60 / 120 (units per week). Right $0k / $12k / $24k. X: W1 · W3 · W5 · W7 · W9 · W11.

Series: AI output · high & flat (left axis, units/week). Cumulative labor / consulting cost (right
axis, $k) · keeps climbing.

AI's line is flat; the human line slopes. Output is in place on day one, but human hours stack
week after week — and that line never stops on its own.

#### Where the money goes: the attention tax

X is tasks completed; Y is total cost. The bottom layer is AI API and software — low and
predictable. The top layer is human review, consulting, and compliance billables — a wedge that
widens with every task.

Axes: Y 0 / 1,000 / 2,000 / 3,000. X 0 / 250 / 500 / 750 / 1000 tasks completed.

Layers: The attention tax — human review · consulting · compliance billables (top). AI API +
software · low & predictable (bottom).

The attention tax dominates the budget. At scale the AI cost barely moves while the human share
thickens. That is the case for the next section: freeze validated judgment into software, pull
humans out of every single run, and the tax finally stops.

#### The two engines of high margin: owned GPUs + token efficiency

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

#### The scale inflection: a cost-per-query waterfall

X is monthly query volume on a log scale. The cloud API costs the same every single time; owned
GPUs, once saturated, send the per-query cost crashing down like a waterfall.

Axes: Y 0 / 0.5¢ / 1¢ / 1.5¢ / 2¢. X 1k / 10k / 100k / 1M / 10M monthly queries (log scale).

Markers: inflection · GPUs saturated. Cloud API · always 1¢. Owned GPUs · toward 0. "All the
savings live here."

Volume is your friend. The cloud line lies at 1¢ forever; owned compute plunges past the
inflection point and keeps falling — scale stops bringing bills and starts bringing advantage.
This is the visual proof that network capabilities scale painlessly.

---

## 02 · Marginal Cost

### The second tenant is almost free

The engines are written once; every tenant after that barely moves the cost line. First watch
where the signal goes, then add the tenants yourself.

#### One code path

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

#### Add them yourself: every tenant jumps the margin

The cost was paid when the engines were written. After that the cost line barely moves while
revenue climbs as usual — the gap between the two lines is the margin.

Axes: Y 0 / 90 / 180 / 270 / 360. X 1 / 2 / 3 / 4 / 5 / 6 tenants. Marker: margin 15.

Series: Revenue (fixed monthly fee per tenant) · Total cost (fixed build + tiny marginal) · Gross
margin.

Interactive readout at 1 tenant: Gross margin 25% · Tenants 1 · Monthly revenue 60 · Monthly cost
45. Controls: − 1 tenant / ＋ 1 tenant.

1 tenant (MoreHarvest): the fixed cost has nowhere to spread yet — 25% margin. Press "+" to plug
in Dada.

#### The cost of each unit falls toward zero

One x-axis (units sold), two y-axes: left = cost per unit, right = profit margin. The stretch
where cost collapses is exactly the stretch where margin climbs — each line reads its own axis,
and the colors follow the axes.

Axes: left 0 / 4 / 8 / 12. Right -100% / -50% / 0% / 50% / 100%. X 0 / 250 / 500 / 750 / 1000
units sold.

Markers: loss turns to profit · margin → 90% ceiling · cost per unit ≈ 0.

The first few copies are the expensive ones. All the fixed build cost lands on the earliest sales;
once volume arrives, amortized cost plunges toward zero and margin swings from loss to profit,
climbing until it hugs a ~90% ceiling — a ceiling set by that sliver of marginal cost.

#### After break-even, the widening gap is all margin

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

## 03 · Network effect

### The flywheel that strengthens with use

First push Hurulab's wheel with your own hand, then see the general principle behind it and the
whole network laid flat — and finally let two curves answer the question: how many turns before
everyone feels it?

#### Push it yourself

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

#### The data flywheel's reinforcing loop

The general principle behind the wheel above. The R at the center is the systems-dynamics mark for
a reinforcing loop: this is no ordinary cycle — every completed turn makes the next one faster and
bigger.

Centre: R — reinforcing loop.

Loop: More users join (contributing more data) → A deeper data pool (data · usage · feedback) →
Sharper patterns (AI learns from the pool) → Better for everyone (every tenant at once).

Cause runs in one direction only. More users → a bigger data pool → sharper patterns → a better
product → which attracts more users again. The R mark is the reminder: this system self-accelerates
with scale, and it does not stop on its own.

#### The node map: who gives, who gains

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

#### How many turns until it kicks in: the inflection

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

#### How fast a new member gets value: the ski slope

Every extra turn of the flywheel shortens the next member's time from joining to seeing value. On
turn 1 it takes 30 days; by turn 50, just 30 seconds.

Y scale: 30 days / 7 days / 1 day / 1 hour / 5 min / 30 sec. X 1 / 10 / 20 / 30 / 40 / 50
cumulative flywheel turns.

Markers: Turn 1 — value takes 30 days. Turn 50 — 30 seconds. 86,400× faster. "The data & liquidity
are already in the network."

This is the network's compound interest. The data and rules Kumamoto and Tokyo spun up all live in
the network; a new city plugs in and starts on turn 50 from day one — no climbing the slope again.

---

## 04 · The Big Loop

### The whole page, folded into one loop

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

#### The jaws of profitability

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

#### Anatomy of one dollar: unit economics

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

#### Production vs. validation: reallocating the hours

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

#### Where efficiency crosses risk

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

## 05 · Design notes

### Why the page is drawn this way

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

## How the Harmattan build behaved

Read out of `hurulab-harmattan.html` before that file was deleted, 4 September 2026. It is the
only record of how the page moved, and it matters because the animation is the argument: a
flywheel that does not accelerate is just a cycle diagram.

**It was already on hurulab's system.** The palette is the hue-318 purple ramp of `color.md`,
oklch throughout, with Cascadia Mono for display and Fustat for body per `type.md`. Harmattan's
own character came from two additions: a warm ochre second accent (`oklch(0.620 0.115 74)`, with
`0.880 0.100 82` and `0.838 0.128 80` as its light steps) used for emphasis against the purple,
and warm-tinted neutrals — the near-white ground at `oklch(0.972 0.010 72)` rather than a cold
grey. Light and dark were both defined, the dark ground at `oklch(0.235 0.032 258)`.

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
