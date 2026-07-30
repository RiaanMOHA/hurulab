# hurulab plan

Open work needed to finish the brand foundation in `design/brand.md`. Two of the four brand
dimensions came out strong. This file covers the two that did not, plus the gap list.

Nothing here is design work. It is evidence that has to be found or earned, and none of it
can be written around.

Status key: **open**, **chasing**, **done**.

---

## A. Make heritage strong

Heritage scored thin. The facts exist but they carry no dates and no names, which is what
makes a founding story checkable instead of merely told. Four lookups fix it.

| # | Task | Why it matters | Owner | Effort | Status |
|---|---|---|---|---|---|
| A1 | Get the date hurulab became a company, and who decided it | There is no founding date anywhere in 94 files. Every brand needs one and it is a single lookup | Henry | one lookup | open |
| A2 | Name the consultancy that let us down, what they did, and what it cost | "Our own experience hiring consultancies was poor" is the weakest sentence in the record. A named vendor and a real cost turns a grievance into evidence | Henry | one conversation | open |
| A3 | Date the Singapore meeting where the deck died, and who was in the room | Currently secondhand. Confirmed only by an interview on 5 July and a line in a handoff dated 18 May | Henry | one lookup | open |
| A4 | Find a copy of the deck that died | The strongest before-picture available, and it is not in any project file | Henry | one search | open |
| A5 | Pull the real platform rebuild figure from release history | The 2.5 years to 3 months claim is a midpoint between two numbers given in the same session. It is the biggest number on the site and it is soft | Ed | one lookup | open |
| A6 | Confirm or kill the deck-died origin | It currently sits in `design/brand.md` as the founding. If it is not the story, say so and heritage returns to empty until there is another | Riaan | one decision | open |

**Done when:** the founding has a date, the grievance has a name and a cost, and the platform
number is real. At that point heritage moves from thin to strong and the brand narrative can
be rewritten from it.

---

## B. Make symbolism real

Symbolism scored empty. It is the one dimension that cannot be researched, only earned.
"We make ourselves useless" is currently a marketing idea with nothing behind it, and it is
banned from any page as a claim until that changes.

Two routes. Run both.

### B1. The fast route, a phone call

| # | Task | Owner | Effort | Status |
|---|---|---|---|---|
| B1.1 | Ask jadegia why they chose the flagship direction, and record the answer in their words | Riaan | one call | open |
| B1.2 | Ask the same client what the storefront changed for them beyond the software | Riaan | same call | open |
| B1.3 | Get written permission to publish the name and the quote | Riaan | one email | open |

Why this is worth doing first: jadegia approved the direction and nobody wrote down why. One
recorded sentence is symbolism evidence, and it also closes a gap that sits in every case
study we own. It is the cheapest high-value item on this whole plan.

### B2. The slow route, earn the proof

| # | Task | Owner | Effort | Status |
|---|---|---|---|---|
| B2.1 | Pick one engagement and instrument it: agree at kickoff which two numbers get captured at launch and at 90 days | Riaan | one kickoff | open |
| B2.2 | Agree at the same kickoff that a quote may be requested later | Riaan | same kickoff | open |
| B2.3 | At 90 days, ask what they now run without us | Riaan | one call, later | open |

**Done when:** one client has said in their own words what the work meant to them, and one
client is running something alone. Then "we make ourselves useless" can be published as a
result rather than an intention.

**If neither lands:** symbolism is the optional fourth dimension and can be dropped. My
recommendation is to earn it, because the Taiwan AI label is crowded with Tenten, Cloud
Interactive, Appar and 戰國策, and symbolism is what separates a company when everyone claims
the same capability.

---

## C. The full gap list

Every open gap in the brand foundation, with an owner.

| Gap | The question that closes it | Owner |
|---|---|---|
| No founding date for hurulab | What date did it become a company, and who decided it | Henry |
| The grievance has no incident | Which consultancy, what they did, what it cost | Henry |
| The deck that died is secondhand | Date the meeting, name the room, find the deck | Henry |
| The 2.5 year figure is soft | Pull the real number from release history | Ed |
| No client has said anything in their own words | One recorded sentence from jadegia | Riaan |
| No outcome has ever been measured | No analytics on any client site. Instrument one | Riaan |
| No client has run alone | Ask one at 90 days | Riaan |

### What is yours, and it is only two things

Everything above splits four ways to Henry and Ed, and three ways to you. Of your three, two
are phone calls you can make this week:

1. **Call jadegia.** One recorded sentence about why they chose the direction. This single
   call closes two gaps and starts the symbolism dimension.
2. **Put analytics on one client site.** There is currently no number anywhere in the
   business to point at. Whatever gets installed is the first one.

The third, asking a client at 90 days what they run alone, cannot start until B2.1 is agreed
at a kickoff.

Chase Henry and Ed for the rest. Do not do it for them.

---

## D. The visual identity, from scratch

Sections A, B and C are parked by owner decision on 30 July. This is the live work.

The visual identity restarted from a blank page on 30 July. Palette, typefaces, spacing and
mark are all reopened and nothing is inherited. That decision voids most of the old conflict
list, because half of it was retired visual decisions arguing with each other. The full
statement of what was released and what still stands is section 7 of `design/brand.md`.

### D1. Still to settle, and not yours

These are the conflicts the restart does not resolve. All of them are commercial or
positioning calls, and none of them blocks the look.

| Question | Owner |
|---|---|
| Is the paid day of discovery the front door, or does it sit above the priced ladder from 5 July | Ed |
| What a day costs, and where the word paid appears | Henry |
| Does AI lead the homepage. Decided no on 8 July, reaffirmed 21 July, reversed 29 July, still open | Cal and Ed |
| Referral-led or retained revenue as the growth engine | Henry and BY |
| One person directing AI, or a team. The strategy says one, the page says a team | Henry |
| Seven service buckets, or the three-rung value ladder. Two architectures, neither references the other | Ed |

### D2. The design work, in order

| # | Step | Status |
|---|---|---|
| D2.1 | Set the visual direction from a blank page: mood, palette, type, spacing, mark | open |
| D2.2 | Write `docs/design-rules/`, one file per topic, once the direction holds. The folder is empty and waiting | open |
| D2.3 | Build the site against those rules, through `/rb-design start`, one session at a time | open |
| D2.4 | Build the second version testing "see it before you buy it" against "use it" | open |

Nothing in D2 waits on D1. The commercial questions change the words on the page, not the
system underneath it.
