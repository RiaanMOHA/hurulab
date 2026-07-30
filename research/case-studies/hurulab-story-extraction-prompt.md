# Hurulab story extraction prompt

*Paste this into any project, in the Claude desktop app or in Claude Code. It extracts what this project proves about Hurulab from a design perspective, verifies it through an interview, then builds the project's story. It always ends by producing one markdown file for this project.*

---

## Goal

Produce one markdown file that proves, with evidence, what Hurulab's design practice did in this project, how it works, what it is worth to a client, and why it is different, then shapes that proof into a story a specific audience can be told. Nothing invented, every claim traceable.

---

## Who this is for

Hurulab is a new agency under MoreHarvest: design meets AI meets engineering meets consulting meets strategy. Riaan is a senior product designer, not a developer. He directs Claude to build. Every project he runs is potential evidence of what Hurulab does, how it works, and why a client would hire it.

Your job in this session is to pull that evidence out of this specific project and shape it into a story. Design perspective only. Not a technical audit, not a code review.

---

## Phase 0: detect your environment

Determine which environment you are running in before doing anything else:

- If you have file system tools (reading directories, creating files on disk), you are in **Claude Code**.
- If you do not, you are in the **Claude desktop app** working with project knowledge and attached documents.

Follow the environment-specific instructions in each phase accordingly. Do not announce which environment you detected; just act on it.

---

## The four questions this prompt must answer

Everything in this session works toward answering these four questions for this project, with concrete evidence:

1. **What does design do here?** The role design played in this project. The decisions design made. The artifacts design produced. Where design led rather than decorated.
2. **How do we do these projects?** The actual process and way of working. How the work moved from problem to deliverable. Tools, workflow, collaboration with AI, iteration pattern, how decisions got made.
3. **What is our value proposition?** What the client or stakeholder got out of this. The outcome, not the output. Why it mattered to them. What they would have paid for.
4. **How do we do it differently from other people?** What a typical agency, studio, or freelancer would have done instead, and what happened here that they could not or would not do.

---

## Rules that apply to the whole session

- Never invent. Every claim must trace to something in the project files, the project knowledge, past conversations in this project, or a direct answer from Riaan. If evidence is missing, ask. Do not fill gaps with plausible-sounding material.
- If anything in this prompt conflicts with what you find in the project, or if any instruction is ambiguous in context, ask Riaan rather than assuming.
- No marketing fluff. No "cutting-edge", no "seamless", no "leveraging". Specific and concrete beats impressive-sounding every time.
- Design perspective throughout. Engineering, AI, and strategy appear only as they relate to how design directed them.
- Ask one question at a time, never a batch. If a question tool like AskUserQuestion is available, use it. If not, ask in plain chat and wait for the answer before asking the next one.
- Sentence case everywhere: only the first word of a sentence or heading and proper nouns are capitalised. Hurulab, MoreHarvest, and product names are proper nouns. No title case, no all-caps, no em dashes, no emojis.
- Plain language. Short words over long ones. If a sentence could drop a reading grade level without losing meaning, rewrite it.

---

## How to run this session

### Phase 1: read everything

Before saying anything to Riaan, read what is available:

- In Claude Code: the full project directory. CLAUDE.md, design guidelines, handoff files, README files, design docs, key source files, any notes folder. Skim broadly first, then read deeply what matters. Note the directory name; it becomes the project name for the output file.
- In the Claude desktop app: all project knowledge files and any documents attached to the project, plus anything relevant in this project's past conversations if a conversation search tool is available. The project title becomes the project name for the output file.

While reading, work through this evidence checklist. For each item, either capture what you find or explicitly note that the project contains nothing on it:

- The client or stakeholder and their original problem, in their words if recorded.
- The before state: what existed or what was failing before the work.
- The deliverables: everything design produced, listed concretely.
- Design decisions and the reasoning behind them, including directions considered and rejected.
- The process: the actual sequence of work from brief to delivery, and the tools used at each step.
- The role AI played and how design directed it.
- Metrics, numbers, dates, timelines, anything quantified.
- Client or stakeholder reactions: quotes, feedback, approvals, objections.
- The after state: what changed because of the work.
- Anything unresolved, abandoned, or still in progress.

Record the source of every piece of evidence, file name or conversation, so it can be cited later.

### Phase 2: draft answers from evidence only

Privately draft an answer to each of the four questions using only what was found. For each answer, mark clearly:

- What is solidly supported by evidence.
- What is thin or ambiguous.
- What is contradictory: two sources that disagree. Every contradiction becomes a mandatory interview question in phase 3; never resolve one by choosing the version that sounds better.
- What is completely missing.

Do not show this draft yet.

### Phase 3: interview Riaan

Now ask questions, one at a time, until all four questions can be answered without guessing. Open with a one-paragraph summary of what you found, then begin.

Two questions are mandatory in every run, regardless of what the files contain:

1. **Who exactly is the audience for this project's story?** Not "clients". The specific kind of person who should read it: a Taiwanese jewellery brand owner, a Singapore family office principal, a startup founder hiring their first designer. The story in phase 4 will be tailored to this answer.
2. Every contradiction found in phase 2, presented as: here is what source A says, here is what source B says, which is true?

Beyond those, rules for this phase:

- Only ask about gaps and ambiguities from phase 2. Do not ask about things the files already answer. If the files answer something partially, state what you found and ask only for the missing part.
- Prioritise the questions that unlock the most: the client's original problem, what the client said or did when they saw the work, what would have happened without this project, what a competitor pitch for the same job would have looked like.
- Push past vague answers. If Riaan answers with a generality, ask for the specific moment, number, name, or artifact behind it. Specific and concrete detail is what makes the story real.
- Keep going until the four questions are genuinely answerable. Do not stop early because it feels like a lot of questions. If the conversation is going nowhere, say so and ask Riaan to reframe.

### Phase 3.5: confirm the evidence before writing the story

When the interview is done, show Riaan the completed part 1 (the four answers plus open gaps) and ask one question: is this evidence correct and complete enough to build the story from? Do not start phase 4 until he says yes. If he corrects anything, update part 1 and confirm again.

### Phase 4: build the story

With confirmed evidence in hand, build the narrative for this project using the storytelling framework below, tailored to the audience named in phase 3. This framework is based on "The storyteller's secret" by Carmine Gallo.

**Headline first.** Write the one-sentence headline for this project. Specific, succinct, roughly 140 characters or fewer. It should frame everything that follows and speak to the named audience.

**Hero and struggle.** Every story needs someone to cheer for. Decide who the hero of this project's story is: usually the client or the end user, sometimes the product. The hero is not Hurulab. Hurulab is the guide. Make the hero and their struggle explicit, not implied.

**Pixar seven-step structure.** Fill in all seven steps. Do not skip steps 4 and 5. Weak narratives jump from the problem straight to the resolution; the "because of that" chain is what makes the story feel earned.

1. Once there was a ___. (the hero and their goal)
2. Every day ___. (the hero's world before anything happens)
3. Until one day ___. (the conflict)
4. Because of that ___. (each scene compels the next)
5. Because of that ___. (the chain continues)
6. Until finally ___. (the climax)
7. Ever since then ___. (the lesson, what it means going forward)

**Three key points.** Group the project's core message into three points, each paired with one proof point or supporting story from the evidence.

**Language pass.**
- Swap long words for short ones wherever the meaning holds.
- Aim for roughly fourth to sixth grade Flesch-Kincaid readability unless the named audience is genuinely specialist.
- Draft one analogy or metaphor for the most abstract idea in the project: [idea] is like [a concrete, widely recognised thing], or [idea] is [a concrete, widely recognised thing]. B must be something the named audience already knows.
- Anaphora is available but only where the material genuinely calls for rallying language. Do not force it.

**Delivery notes.**
- Find one genuine surprise or reversal in the story and mark where it lands.
- Replace at least one vague description with a specific, concrete detail: a number, a named place, a specific object.
- Keep the ratio roughly two-thirds narrative, one-third data or argument.
- For every key point, suggest one visual that could replace or support the text version of it.

### Phase 5: produce the output file

Produce one markdown file for this project. Evidence first, then the story. The filename is `hurulab-story-[project-name].md`, where [project-name] is the kebab-cased directory name (Claude Code) or project title (desktop app).

- In Claude Code: save it in the project root.
- In the Claude desktop app: produce it as a single complete markdown artifact with the filename stated at the top, ready for Riaan to save.

The file must follow this exact structure:

```
# Hurulab story: [project name]

*Extracted [date]. Evidence from project files and interview. Design perspective. Audience: [the named audience].*

## Part 1: evidence

### What does design do here
[answer in full sentences and bullets, every claim tied to a file, artifact, or interview answer, sources named]

### How we do these projects
[the actual process as it happened here, step by step, tools and workflow named, sources named]

### Our value proposition
[what the client got, the outcome and why it mattered, in plain language, sources named]

### How we do it differently
[what a typical agency or freelancer would have done, versus what happened here, sources named]

### Open gaps
[anything still unproven or unanswered after the interview, listed honestly]

## Part 2: the story

### Headline
[the one-sentence headline]

### Hero
[who the hero is and what they wanted]

### Story structure (Pixar seven-step)
1. Once there was a ___
2. Every day ___
3. Until one day ___
4. Because of that ___
5. Because of that ___
6. Until finally ___
7. Ever since then ___

### Three key points
1. [point]. Proof: [supporting story or evidence]
2. [point]. Proof: [supporting story or evidence]
3. [point]. Proof: [supporting story or evidence]

### Language notes
- Short-word flags: [list, or "none found"]
- Analogy or metaphor: [idea] is like / is [concrete thing]
- Readability check: [pass or flag, with reasoning]

### Visual notes
- [key point] → [suggested visual]

### Delivery notes
- Surprise or reversal: [where and what]
- Specific detail added: [the vague line replaced, and what replaced it]
```

Everything in the file is in sentence case, with Hurulab and other proper nouns capitalised. No em dashes anywhere. No invented details: if a blank in the story cannot be filled from evidence or interview answers, it stays marked as a gap in part 1 rather than getting fabricated in part 2.

---

## Start

Begin phase 0, then phase 1, now. Do not summarise this prompt back. Do not ask what the project is; find out by reading. Speak to Riaan for the first time only when you reach phase 3, opening with a one-paragraph summary of what you found and the first question.
