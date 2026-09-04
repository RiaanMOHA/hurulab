# The user story, and the edge cases

Written 3 September 2026, following the method in `new-20260828/design-audit-copy-and-flows`.
Its principle 6 is the reason this file exists: the story is written by hand, because a model
knows only the average visitor and not this one. The edge cases below are enumerated against
that story, and every one of them was checked against the running pages.

**This file records what is true today and what is missing.** It decides nothing. Where a gap
needs an owner ruling, it says so and stops.

---

## 1. The visitor, from the evidence

Not invented. Every line traces to `brand.md`, which traces to the interviews.

**Who arrives.** An owner-led Taiwan business with steady revenue and no internal technical
team (evidence part 10, the middle cut). One person who can approve a week of work without
procurement.

**What they have already lived through.** They were burned: "burned by slow, costly agencies"
(Q10, Riaan), "poor work they had to redo" (Q10, BY). Or they spent on AI and are "drowning in
tools, no clear results" (Q10, Henry).

**What they will not say out loud.** They do not know what they need. Four of five interviews
gave a version of this (Q11). "They fear being fooled, sold hype and made to waste money
again" (Q11, BY). "They feel out of their depth" (Q11, Pedro).

**How they got here.** Through someone they know. There has never been a cold win (`brand.md`
section 11), so the page is not persuading a stranger. It is giving an introduced visitor a
reason to take the call seriously.

**The one job the page must do.** Let them judge hurulab before committing money, because the
single idea is that you use it before you pay for it (`brand.md` section 7).

**What would make them leave.** Being sold to. Being asked for money before they can see
anything. A page that describes rather than behaves.

---

## 2. The story, in one paragraph

She runs a Taiwan product business selling mostly offline. A quote is on her desk and nobody in
the company can tell her whether it is right. She has been burned once already. Someone she
trusts sends her a link. She opens it, sees within seconds what these people do, tries the one
real thing on the page, and gets an answer specific enough that it could only have come from
someone who understood the question. She books the call, or she does not, and either way she
leaves knowing something she did not know before.

---

## 3. The flow, as built

```
arrive  →  read the claim  →  use the one real thing  →  read what came back  →  book or leave
```

Three of the four pages implement this. `proposal-f` stops at the claim: it has no real thing
to use, which is a deliberate difference, not a defect.

---

## 4. The edge cases

Enumerated against the story above, then checked in the browser. **State: what actually
happens today.**

### The problem box (`concepts/proposal-h-the-box.html`)

| # | Case | State | Verdict |
|---|---|---|---|
| 1 | Types a matched problem in English | One of eight topics answers | Works |
| 2 | Types an unmatched English problem | The generic week | Works. A complete answer |
| 3 | Types in Traditional Chinese | Says the demo reads English only | Closed 3 September |
| 4 | Types fewer than 12 characters | Nothing appears, no explanation | Gap, minor |
| 5 | Types one word, "help" | Nothing appears | Same as 4 |
| 6 | Pastes 2,000 words | Echo truncates at 180 with an ellipsis | Works |
| 7 | Types something abusive or nonsense | Echoed back verbatim, tested | **Gap. See below** |
| 8 | Types, then deletes it all | The week disappears | Works |
| 9 | Clicks a chip, then types over it | Re-matches on the new text | Works |
| 10 | Arrives with reduced motion on | Week appears, no travel | Works |
| 11 | Keyboard only, no mouse | Every control reachable, one focus line | Works, tested |
| 12 | Types a problem hurulab cannot help with | An honest no, and the call offered anyway | Closed 3 September |

**Case 3, closed 3 September, owner ruling "English only".** Four pure Chinese sentences fell
to the generic week, and a fifth containing the Latin word "LINE" matched by accident, which is
worse than a clean miss because it makes the failure look intermittent. The page now detects CJK
characters and says the demo reads English, adding that the call itself can be in Chinese.

**Case 7.** Whatever the visitor types is printed back into the page. It is set with
`textContent`, so it cannot inject markup, but it can put their own abuse on screen in the
brand's own type. Harmless to the visitor, ugly in a screen recording.

**Case 12, closed 3 September, owner ruling.** The page now declines when a sentence names
something hurulab plainly does not do and matches none of the eight topics, and offers the call
regardless. The two conditions are both required, so "we sell dog food online and our checkout
keeps breaking" still gets the week. Twelve cases were tested, including six real-client
sentences that must not be declined.

### The cost sliders (`concepts/proposal-g-the-cost.html`)

| # | Case | State | Verdict |
|---|---|---|---|
| 13 | Both sliders at the clearest, smallest setting | Tells the visitor to skip hurulab | Works, and is the point |
| 14 | Drags fast across the whole range | Figures roll, no jump | Works |
| 15 | Arrives with reduced motion on | Figures set instantly | Works |
| 16 | Keyboard arrows on a slider | Same as dragging | Works |
| 17 | **Reads the prices as a quote** | Nothing on the page says they are placeholders | **Gap** |
| 18 | Screen reader reaches a figure mid-roll | Reads a part-rolled number | Gap, minor |

**Case 17.** The disclaimer was removed on owner instruction, 3 September. The figures are
invented, permitted for this page only, and the page no longer says so. Recorded in
`decisions.md` as the owner's call, repeated here because it is the largest live risk on any
page.

### The coming-soon beats (`concepts/hurulab-coming-soon-short.html`)

| # | Case | State | Verdict |
|---|---|---|---|
| 19 | Scrolls to the end | Six beats, then the call | Works |
| 20 | Refuses to scroll | Sees beat one and the word "Scroll" | Works |
| 21 | Reduced motion | Beats swap without fading | Works |
| 22 | Very short viewport, a phone in landscape | Beat text may crowd the edges | Unverified |

### Every page

| # | Case | State | Verdict |
|---|---|---|---|
| 23 | Clicks the call button | `href="#"`. Goes nowhere | **Gap. There is no booking destination** |
| 24 | Opens the file offline, no network | Fonts fall back to system, layout holds | Works by design |
| 25 | Arrives on a 360px phone | No horizontal overflow | Works, tested |

**Case 23 is the one that costs money.** Tested on all five pages: every call button is
`href="#"`, six buttons in total, and `site/index.html` has two of them. Whatever the demo
proves, the visitor cannot act on it.

---

## 5. What this pass did not settle

Three questions for the owner, in order of what they cost:

1. **Where does the call button go?** Nothing is booked today. Owner ruling 3 September: left
   as `#`, because these are concepts rather than a live site. It returns when the site is real.
2. ~~Does the box page get to say "we cannot help with this"?~~ Closed, case 12.
3. ~~Does the box page handle Chinese?~~ Closed, case 3. English only.
