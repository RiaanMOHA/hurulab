# Copy

The owner's rules, from `mem/index.md` in `hurulab-codebase` and from section 16 of
[brand.md](../brand.md). This file is now the single owner of them.

---

## 1. Hard rules

- **Sentence case everywhere**, with the two exceptions in section 2.
- **Never uppercase.** No `text-transform: uppercase`, no caps labels, no caps anything.
- **No em dashes or en dashes.** Ever. Use a comma, a colon, or a full stop.
- **No emojis.**
- **Sentences end with a period**, including single-line labels that are sentences.
- **American spelling always.** `color`, never `colour`. Full list in section 2a.
- **English only**, for now. See the language decision in section 14 of [brand.md](../brand.md).
- **Text runs full width** to the section padding. Measure is owned by [type.md](type.md)
  section 10.
- **No eyebrows and no kickers.** A heading is never introduced by a small label above it, in
  any form: no section labels, no category tags, no wide-tracked line over a sentence. The
  heading opens the section by itself. Rejected repeatedly by the owner, and settled 8 August
  2026 after the rule lived only in a handoff and survived eight rebuilds of a page because no
  file owned it.
- **One message, every screen size. Absolute, owner ruling 13 August 2026.** Copy is **never**
  hidden, shortened or swapped because the screen is small. A phone reader and a desktop reader
  see the same words, always. `display: none` on text, a shorter phone variant, a truncated
  sentence: all forbidden, with no exception and no "supporting detail" carve-out.

  **When copy does not fit, there are exactly two legal moves**, and both apply to everyone:
  cut the sentence for every reader, or let that screen scroll. Making the layout pass by
  deleting words from one group of readers is not a fix, it is shipping two different
  arguments and choosing which one each person gets.

  Broken on 13 August, when four choices on a proposal page lost their explanatory lines below
  the tablet breakpoint so the screen would fit without scrolling. The phone reader was left
  picking between bare labels. It was done to satisfy a layout check and recorded in `PLAN.md`
  as a fix, which is how it nearly survived.

## 2. Casing

**This file owns casing. Three cases exist and no others.**

| Case | Where | Example |
|---|---|---|
| **Sentence case** | Everything by default: headings, body, labels, navigation, form labels, helper text, table headers, captions | Twelve days to two finished directions. |
| **Title Case** | **Calls to action only**, meaning every button at every level | Contact Us |
| **lowercase** | The name only | hurulab |

**One exception, owner decision, 13 August 2026: AI is always uppercase**, in every position,
including mid-sentence and at the end of one. It is an initialism, not a word, and `ai.`
lowercase reads as a typo. This exception covers the term itself, not names that contain it:
a domain like vellum.ai stays as its owner writes it.

**Title Case rules.** Capitalize the first word, the last word, and every major word. Keep
articles (`a`, `an`, `the`), coordinating conjunctions (`and`, `but`, `or`, `nor`, `for`, `so`,
`yet`) and prepositions of three letters or fewer lowercase.

> Contact Us &middot; See the Work &middot; Read the Method &middot; Get in Touch

**The primary call to action reads "Contact Us".** Owner instruction, 10 September 2026,
renaming "Book a Call" on every page that carried it.

**Navigation is not a call to action.** It stays sentence case: `Work`, `Method`, `Contact`.
A single-word nav item looks the same in both cases, which is why the rule has to be written
down rather than inferred.

**Pricing is shown, and `docs/pricing.md` part 1 is what it says.** That document, HL-SOP-2026-
001, is the CEO's statement of the pricing model and is the source of truth for it. It replaces
the 4 August position that the site shows the process and never fixed prices
(`docs/evidence.md` part 5), which is now superseded. The ban on **invented** pricing in
section 4 is untouched and absolute: every figure shown comes from that document, and a number
that is not in it does not go on a page.

**Suspended for the discovery pages since 12 August 2026, until the CEO rules.** The record of
the 10 August meeting with the CEO (`docs/evidence.md` part 6) disagrees with
`docs/pricing.md` part 1 in five places, so for those pages there are two sources and neither
document is corrected yet. The meeting version leads and the pricing-document version sits in an
asterisk footnote. The ruling is in `docs/decisions.md`, 12 August. Everywhere else, and for
every other page, the paragraph above stands unchanged.

**The name.** `hurulab`, one word, lowercase, always, including at the start of a sentence and
inside a Title Case button. It is how the name is spelled, not a styling choice. Never
`Hurulab`, never `HuruLab`, never `Huru Lab`. The folder is `hurulabs`, the company is
`hurulab`. See [logo.md](logo.md).

**Uppercase is never used**, in any case, anywhere, including inside a Title Case button.

---

## 2a. Spelling: American English

**American spelling, everywhere, including in these rule files and in anything an agent
writes.** Written down 7 September 2026 after the owner had to correct it repeatedly.

| Write | Never |
|---|---|
| color | colour |
| behavior | behaviour |
| gray | grey |
| center, centered | centre, centred |
| recognize, organize, summarize, prioritize, normalize | recognise, organise, summarise, prioritise, normalise |
| license | licence |

The `-ize` ending is the rule for that whole family of verbs, not just the ones listed.

---

## 3. Banned words

revolutionary, cutting-edge, game-changing, seamless, empower, leverage as a verb, synergy,
AI-native, world-class.

Add to this list rather than arguing about a specific sentence.

---

## 4. What may not be claimed

These are copy consequences of the evidence rules. The full statement is section 11 of
[brand.md](../brand.md).

- **No measured outcome.** Naming a measure is allowed, claiming a result is not.
- **No invented case study, no fake client logo, no invented pricing.** The reference build
  states this too: "No fake logos, invented pricing, or generic marketing slop."
- **No placeholder logo row.** A row reading "client one, client two" advertises an empty
  answer. Say the names are not ours to publish yet, or say nothing.
- **No cold win.** There has not been one.
- **"We make ourselves useless" is forbidden**, owner ruling reconfirmed 7 September 2026. Not
  as a claim, not as an intention, not reworded. `docs/brand.md` section 7 owns it.

---

## 5. How a number is put on a page

Extracted 7 September 2026 from the AJ&Smart read before that file was deleted. Section 4
above governs whether a number may appear at all; this governs how one appears once it may.

**A price is anchored against a stated larger return, in the same breath as the number.**
AJ&Smart's card says "we will only offer you this option if we think it will have more than a
€200,000 impact on your business" directly above "From €100,000", so the fee reads as a
fraction of a return rather than as a cost. The anchor sits before the number, never after.

**Proof high, price last.** The number lands only after the track record and the reframe have
landed. Move the price section earlier and it reads as raw cost.

**Sell the expertise, not the hours.** "You're not buying our hours, you're buying access to
experience, advisory, know-how, and insights based on a proven track-record." This is the
argument against showing an hourly rate on a page: an hourly rate invites the reader to price
the hours.

**The warning that governs all three.** AJ&Smart can post a floor with no deliverable detail,
hide two of three prices and cap access at three companies a year, and have it read as
confidence, because they are known and their clients are famous. **An unknown company doing
the same reads as cagey and overpriced.** hurulab has no cold win, no measured outcome and no
publishable client, so it takes the structure and not the confidence: concrete deliverables
and shown numbers, where they borrow scarcity and mystery.

---

## 6. Voice

Plain, specific, and unhurried. The reader is an owner deciding where to spend real money, and
they have been sold to before.

**Prefer the concrete.** Every claim should carry the thing that makes it checkable.

| Write this | Not this |
|---|---|
| Two finished directions on a live store, twelve days after kickoff. | Rapid, iterative design delivery. |
| You use the working thing before you pay for it. | We put the customer at the center of everything. |
| No client has run alone yet, so we do not claim it. | Proven results our clients love. |
| One call on the goal, a scoped sprint to prove it. | Let's start a conversation. |

**Write from the client's side.** The reference rewrote a whole section because "every bullet
started with 'We', and a reader could not place themselves". If a paragraph opens with "We",
check whether it can open with "You".

**Buttons name their action.** The wording rule and its examples are owned by
[layout.md](layout.md) section 5.

**A client quote is what changed for them, in their words.** A compliment about hurulab is not a
testimonial. "One aha-moment saved us three million" is a quote. "Great team to work with" is
not.

**The negative definition is permitted once per page.** "Not an agency. Not a dev shop. Just the
thing, working." It only earns its place when both negatives are things the reader has actually
paid for and been disappointed by. Twice on a page it becomes a tic.

**Admit the gaps in public.** The strongest sentences in the record are the ones conceding
something: "no external investor has seen the finished deck". That habit is the voice.

---

## 7. Forms and error messages

Extracted from the Carbon, Atlassian and Coinbase reads before those files were deleted,
7 September 2026. Nothing here was written down anywhere else.

**An error message says what stopped, then how to fix it.** Two parts, both required. The title
names what failed, the body names the action the reader takes next. An error with no next step
is a dead end.

**Tense follows the state.** Present tense while it is still happening ("We can't load your
message"), past tense once it has failed ("Upload failed").

**Error helper text under a field reads `Error: <the message>`.** One convention, used
everywhere, so the reader learns to look in the same place.

**Never use the gray hint inside a box as the label.** It disappears the moment someone types,
and the reader loses what the field was for. A search field is the only exception, and only
with a search icon beside it. [color.md](color.md) gives placeholder text a token; this is when
it may be used.

**Mark the minority, never both.** If most fields are required, mark only the optional ones. If
most are optional, mark only the required ones.

**A field is as wide as the answer it expects.** A postcode field is not full width because the
column is.

**Six items is the ceiling for a list.** Past six, the reader stops reading and starts scanning.

**Write for a reading age of twelve to fourteen.** Not a simplification of the argument, a
removal of the words that were doing nothing.

---

## 8. Where AI appears

Once, as mechanism, never as the promise, and never in the hero. Full reasoning in section 6 of
[brand.md](../brand.md). It answers the question the promise provokes, which is how the working
thing can exist before any money changes hands.
