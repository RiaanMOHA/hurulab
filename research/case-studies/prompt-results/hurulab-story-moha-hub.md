# Hurulab story: Moha Hub

*Extracted 3 July 2026. Evidence from project files and interview. Design perspective. Audience: traditional Taiwanese business owners who need software, want to work with AI, but do not understand it and are hesitant about it.*

## Part 1: evidence

### What does design do here

- Design originated the project. There was no brief. The hub was the designer's own initiative to put all of MoreHarvest's products in one place. Source: interview.
- Design defined the content architecture: a fixed skeleton for every section (heading, subheading, body, visual), a two-sentence body limit, and section names and order locked once set. Source: GKTK and Value Add conversations.
- Design set the system constraints: two fonts only (REM for headings, Noto Sans JP for body), brand color #fbb931, warm dark surface, mobile first. Source: project plan conversation.
- Design directed the AI at every step: extracting and translating the CEO's Miro board, auditing five reference sites through browser sessions, and writing minimal prompts for Claude Code to build. Sources: project plan, audit, and implementation conversations.
- Design did quality control on the AI: all five reference site audits came back missing the same two things (internal vertical spacing rhythm and confirmed mobile behavior), and the designer caught both and forced corrective re-audits. Source: audit QC conversation.

### How we do these projects

- Gather: pull Granola meeting notes and the CEO's Miro board, translate the Chinese content to English, and compile everything into a NotebookLM as the single content source. Source: project plan conversation.
- Reuse: extract design system and documentation prompts from prior projects instead of starting from zero. Source: project plan conversation.
- Set up: repo on company GitHub, deployment on Vercel, Claude Code in VS Code loaded with the stack and constraints. Source: project plan conversation.
- Learn: audit five reference websites (radiance.family, byooooob.com, aim.obys.agency, gte.xyz, bjornflow.com) for layout, spacing, animation, and mobile behavior, then quality check the audits and re-audit until every claim is observed, not guessed. Source: audit conversations.
- Build: the designer writes minimal prompts, Claude Code writes all the code, and the result ships to a live URL for iteration. Sources: implementation conversations and interview.

### Our value proposition

- Before: MoreHarvest had many products, presented to investors through ad hoc slide decks and PDFs, with source content scattered across Miro boards and meeting notes, partly in Chinese. Sources: interview and project plan conversation.
- After: one live hub at kozue-five.vercel.app plus dedicated product pages, with consistent structure, copy, and design system. Sources: interview and build conversations.
- Speed: roughly three days of the designer's time from idea to live hub. Source: interview.
- Reaction: leadership liked it a lot and said they definitely want to do it, essentially a done deal, pending design refinement. Source: interview.

### How we do it differently

- The traditional route: the designer produces many Figma screens, hands them to developers, and waits months for the build. Source: interview.
- This route: one designer directs AI through research, content, translation, and build, with no handoff, live in three days. Sources: interview and all conversations.
- The differentiator is not the AI itself. It is the design judgment applied to the AI: the fixed content skeleton, the locked constraints, the quality control that caught the same gap in five separate AI audits. Sources: audit QC conversation and content conversations.

### Open gaps

- No verbatim stakeholder quotes exist, only the designer's paraphrase of the reaction.
- The hub has not yet been used with actual investors; refinement is on hold behind other projects.
- No cost figure exists for the traditional alternative, only the time estimate of months.
- Exact calendar dates were not recorded.
- The exact number of products on the hub is not confirmed; the designer describes it as a lot.

## Part 2: the story

### Headline

One designer, directing AI, took a company's scattered products from slide decks to a live investor website in three days.

### Hero

The hero is MoreHarvest, a real estate investment company in Kumamoto, Japan. It wanted its many products to be seen clearly by investors. Its story lived in slide decks, PDFs, meeting notes, and a Miro board partly in Chinese. Hurulab's design practice is the guide, not the hero.

### Story structure (Pixar seven-step)

1. Once there was a real estate company in Kumamoto, Japan with more investment products than it could show.
2. Every day it pitched investors with ad hoc slide decks and PDFs, while its plans sat scattered across boards and notes, partly in Chinese.
3. Until one day its designer decided, with no brief and no budget ask, to put every product in one place: a single live website.
4. Because of that, he pulled the content out of the boards and notes, translated it, and locked it into a strict skeleton: heading, subheading, two sentences, one visual.
5. Because of that, he could direct AI to study five of the best websites on the internet, catch what the AI missed, and have AI write every line of code to his rules.
6. Until finally, about three days after the idea, the hub was live and leadership said they definitely want to do this.
7. Ever since then, the company has one front door for its products, and proof that one designer directing AI beats months of handoffs.

### Three key points

1. AI does not replace judgment, it needs it. Proof: all five AI site audits came back wrong in the same two ways, guessed mobile behavior and missing spacing rhythm. The designer caught it every time and sent the AI back until every claim was observed on the real site.
2. Days, not months. Proof: the traditional route is Figma screens handed to developers and a wait of months. This route went from idea to live website in roughly three days of one designer's time.
3. Two languages, one workflow. Proof: the CEO's source content was partly in Chinese. It was translated, structured, and shipped in English inside the same process, with nothing lost in a handoff.

### Language notes

- Short-word flags: swapped "documentation" for "notes", "implementation" for "build", "approximately" for "about" in the story text. Part 1 keeps precise terms because it is evidence.
- Analogy or metaphor: a designer directing AI is like a head chef running a kitchen. The chef does not cook every dish, but no plate leaves the kitchen without passing their eyes.
- Readability check: pass. The story text sits around fifth to sixth grade. Part 1 runs higher because evidence needs precise terms.

### Visual notes

- AI needs judgment → a side by side: the AI's guessed audit line next to the confirmed re-audit line, with the wrong part struck out.
- Days, not months → a timeline bar: three days on top, months below, drawn to scale so the gap is felt.
- Two languages, one workflow → the Chinese Miro board snippet next to the same content live in English on the hub.

### Delivery notes

- Surprise or reversal: the AI got it wrong five times in a row, in exactly the same way. It lands at step 5, right when the reader expects the AI to be the magic. The point flips: the magic is the person checking it.
- Specific detail added: "studied good websites" became "studied five of the best websites on the internet, then got sent back when it guessed instead of looked", anchored by the three day number and the live URL kozue-five.vercel.app.
