# Hurulab story: kozue (MoreHarvest)

*Extracted 2026-07-05. Evidence from project files and interview with Riaan. Design perspective. Audience: a company that is tired of design and engineering agencies that just take the order and hand back an Excel sheet, and does not yet know a partner exists that diagnoses the problem, builds the system, and trains their staff to run it.*

*Confidentiality note: this file contains MoreHarvest's real investment thesis and live figures (target IRR, named towns, the TSMC angle, the GK-TK structure). It is internal. Clear or replace the numbers and the strategy detail before any public or portfolio use.*

---

## Part 1: evidence

### What does design do here

Design was the lead, not the finish. The MoreHarvest team owned the thesis and the numbers. Design's job was to turn that material into something an investor could actually use, and it made real calls to do it.

- **It set the core structure.** The site took a navigation pattern from a creative-studio site (vertical numbered tabs, reference `gtheimagineers.com`) and forced it to carry dense fund content it was never built for: IRR tables, four property strategies, risk matrices, and Japan's GK-TK fund structure. *Source: showcase/design-decisions.md, showcase/case-study-full.md.*
- **It made the navigation reversible.** Clicking the active tab returns to the hero instead of doing nothing, so there is no separate back button. This is not a claim, it is in the code: `setActiveSection((prev) => (prev === id ? "hero" : id))`. *Source: src/components/more-harvest.tsx line 30, verified.*
- **It chose three components per breakpoint over one responsive component.** Mobile, tablet, and desktop each get their own layout instead of one file with media queries, so no screen size is a compromise. *Source: file tree (why-kumamoto / gktk / contact / section each split three ways), showcase/features.md.*
- **It built its own dev tooling when the design needed it.** Mid-size iPads (iPad Air 11" and up) broke in ways the standard 768 and 1024 widths never showed, so design built a QA tool that loads the site at real device sizes, gated to localhost so it never ships. *Source: QaLoader.tsx line 11, verified; showcase/case-study-full.md.*
- **It kept the surface plain on purpose.** No stock photos, no illustrations. One animated logo mark and a globe. Typography and layout do the work. *Source: showcase/design-decisions.md.*

### How we do these projects

- **The team supplies the substance, design directs the build.** MoreHarvest's team owned the strategies, the IRR figures, and the market thesis. Riaan, a senior product designer who does not write code, directed Claude Code to design and build the product around that material. *Source: interview; showcase handoffs.*
- **Design happened in code, not in Figma.** There is no Figma file. The design was made directly in the running product. *Source: showcase/metadata.md ("Design source: No Figma file"), showcase/case-study-full.md.*
- **Nine days, tight and visible.** 2026-03-30 to 2026-04-07. 75 commits, 27 pull requests, all merged. Feature branch per change, roughly three PRs a day. *Source: git log, showcase/case-study-full.md. Note: two older showcase files say 76 commits; 75 is the verified git figure and is used here.*
- **The workflow was documented as it ran.** Handoff notes for the first day, then session notes, plus a showcase folder regenerated after every commit. *Source: .handoffs/, CLAUDE.md.*

### Our value proposition

- **Before this, the thesis lived in a slide deck or PDF.** That is how these Kumamoto strategies were shown to Taiwanese investors. *Source: interview.*
- **A deck flattens dense content.** Every investor has to page through in order. Someone who only cares about risk hedging or the IRR table still has to wade past the rest. *Source: showcase/project-copy.md problem section, interview.*
- **The site gives the investor the wheel.** They jump straight to the section that matters to them and read it full-screen, no scrolling past the pitch. It is live at kozue-five.vercel.app. *Source: showcase/metadata.md (verified live), showcase/case-study-full.md.*
- **What they got is not a prettier deck. It is a navigable home for the thesis** that an investor can open on their own and steer. *Source: interview.*

### How we do it differently

- **A typical agency takes the order.** Told "make our deck into a website," most would rebuild the deck as scrolling web pages, or a PDF dressed as a page, and hand it back. *Source: interview (the story reader's exact frustration).*
- **Here the first move was diagnosis.** The real problem was named as navigation, not looks: an investor must reach the IRR table without passing everything else. That reframe set the whole panel structure. *Source: showcase/design-decisions.md, interview.*
- **And design built the tooling the problem demanded.** When mid-size iPads broke, the answer was a purpose-built QA tool, not a workaround. When Tailwind v4 kept burying hand-written CSS, the answer was a project-wide rule change, not a patch. *Source: showcase/case-study-full.md, verified in source.*

### Open gaps

- **No recorded investor reaction.** Whether the site has been put in front of Taiwanese investors, and what they said, is not in any file and was not confirmed in the interview. Not invented here.
- **The site is not fully finished.** The New Developments section is still placeholder copy, and parts of Single Buildings. *Source: src/data/content/new-developments.ts, single-buildings.ts.*
- **The layout is not settled.** Three alternate layouts (Project Grid, Project Index, Card Deck) sit behind a dev switcher. Which one wins is an open design question. *Source: showcase/case-study-full.md.*
- **Last activity was about six weeks ago**, so current momentum is unclear. *Source: git log.*

---

## Part 2: the story

### Headline

A fund's Kumamoto thesis was buried in a slide deck. Nine days later, an investor could jump straight to the IRR that mattered to them.

*(129 characters. Specific: Kumamoto, IRR, nine days. Frames the whole story.)*

### Hero

The MoreHarvest team. One hero, not Hurulab. They have a genuine real estate thesis: Taiwanese investors, property around Kumamoto, riding the TSMC semiconductor boom, structured through Japan's GK-TK framework. What they wanted was for that thesis to land the way it deserved. Hurulab is the guide, not the hero.

### Story structure (Pixar seven-step)

1. **Once there was** a MoreHarvest team with a real thesis: put Taiwanese money into Kumamoto property while TSMC's fabrication plants pull in demand, across four strategies and an operating arm.
2. **Every day** they pitched it the way funds pitch, a slide deck or PDF, the numbers and the four strategies and the risk hedging all flattened into slides an investor had to page through in order.
3. **Until one day** they wanted a real home for the thesis, something an investor could open and steer. The trap was clear: fund sites fail dense content two ways, a long scroll that buries the numbers, or a PDF dressed as a page. A prettier deck would not fix it.
4. **Because of that** design started with a diagnosis instead of a redesign. The real problem was named as navigation: an investor should reach risk hedging or the IRR table without wading past everything else. Design borrowed a creative-studio pattern, the vertical numbered tabs from gtheimagineers.com, and tested whether it could carry fund content it was never built for.
5. **Because of that** the build became a run of real design calls under pressure: three separate layouts per screen size so nothing was a compromise; inline styles once Tailwind v4 kept burying the hand-written CSS; a localhost-only QA tool built mid-project because iPad Air screens broke where the standard sizes never did; and the active tab made reversible so returning home needs no back button.
6. **Until finally**, in nine days, 75 commits and 27 merged pull requests, no Figma file, the whole thing directed in code, MoreHarvest had a live site where an investor jumps straight to the section they care about.
7. **Ever since then** the deck is no longer the fund's front door. And the way of working it proved is the real lesson: diagnose the problem and build the system, do not just fill the order.

### Peter Guber check

- **Opening challenge:** present. A real thesis trapped in a format that flattens it, and the trap that a nicer deck will not fix it.
- **Struggle:** present. Adapting a pattern that resists dense content, Tailwind burying the CSS, iPads breaking off-breakpoint.
- **Call to action:** present, made explicit in step 7 and aimed at the reader: hire a partner who diagnoses and builds, not one who executes your spec.

### Trigger structure check

- **Trigger event:** named. The deck could not do the thesis justice, and a redesign of the deck would not either. (An opportunity moment more than a failure.)
- **Transformation:** named. A live, navigable site where the investor takes the wheel and jumps to the number they came for.
- **Life lesson:** named. Diagnose then build beats execute-the-spec.

### Three key points

1. **Design led with diagnosis, not decoration.** Proof: the first move reframed "make a nicer deck" into "an investor must reach the IRR table without passing the pitch," and that reframe set the entire panel structure. *(showcase/design-decisions.md, interview.)*
2. **The hard part was making a studio pattern carry fund content.** Proof: gtheimagineers.com's tabs were built for a creative studio; here they hold IRR tables, four strategies, risk matrices, and a GK-TK structure, with a reversible tab confirmed in more-harvest.tsx line 30.
3. **Directed in code, shipped in nine days.** Proof: 75 commits, 27 merged PRs, no Figma, deployed live, every technical claim checked against source, not just the write-up.

### Language notes

- **Short-word flags:** "decoration" and "diagnosis" are kept on purpose, they carry the core contrast. Watch "architecture" and "differentiate" elsewhere; use "structure" and "do it differently" instead. Otherwise plain.
- **Analogy:** a slide deck is like a paper map handed to a driver; the site is the sat-nav that takes them straight to the address they asked for. Both are things the reader already knows.
- **Anaphora opportunity:** for the difference section, "Not a prettier deck. Not a redesign. A diagnosis." Use once, where the differentiator lands, not throughout.
- **Readability check:** pass, roughly fifth to sixth grade. One sentence to watch is step 5, which runs long; break it in two if read aloud.

### Story-to-data ratio

Roughly two-thirds narrative, one-third numbers. The nine days, 75 commits, and 27 PRs are the only heavy data cluster and they sit in one place (step 6 and key point three), so the balance holds.

### Visual notes

- **Key point one (diagnosis)** -> a simple two-panel image: left, a flat deck slide with the IRR line lost in the middle; right, the live site with that same IRR one tap away.
- **Key point two (studio pattern carrying fund content)** -> a screenshot of the numbered tab column beside an open panel showing an actual IRR table, so the reader sees dense content inside a sparse frame.
- **Key point three (directed in code, nine days)** -> the git history as a strip, 75 commits across nine dates, no Figma icon anywhere in the toolchain.

### Delivery notes

- **Surprise or reversal:** the reader, tired of agencies, expects the climax to be a beautiful design. It is not. The pivotal move is design refusing to make a prettier deck and re-diagnosing the problem as navigation. A second, smaller reversal backs it up: there is no Figma file at all, the design was made in the running code. Both contradict what the reader expects a designer to do, which is the test for a genuine reversal, not just a new fact.
- **Specific details used (not vague):** iPad Air 11" as the screen that broke; Kikuyo and Ozu within a ten-minute drive of TSMC; the GKTK service-apartment arm targeting a 10.25% post-tax IRR; the live URL kozue-five.vercel.app; nine days, 75 commits, 27 PRs.
- **Repeatable culture story for Hurulab:** "the iPad that broke where nothing should have, so we built our own test rig." It is short, true, and it captures the studio's habit of building the tool the problem needs instead of working around it.

### Proof point gaps

- Investor reaction is the one missing proof. If the story is used with a live audience, either get one real reaction from the MoreHarvest team to add, or keep the claim at "gives the investor the wheel" and do not imply a result that is not yet recorded.
