# The brand loop (find the true brand)

A gated procedure for surfacing a project's real, verifiable brand and writing it
to `design/brand.md`. Lives inside rb-design so it carries its own research and
adds no new skill. Built on Napoli's validated model of brand authenticity, see
`brand-research.md` in this folder.

The principle, never forget it: authenticity is proof, never adjectives. Find what
is already true and provable, then build from that. The failure mode of this work
is racing ahead and inventing proof. Going slower and confirming is always correct.

## When this runs

1. **Automatically, once per project.** The first time `/rb-design start` runs in a
   project after this capability exists, the loop runs as part of start, before the
   session setup questions. It then writes a marker so it never auto-runs again.
2. **On request, any time.** Whenever the designer asks anything about the brand or
   its foundation, in any wording. Triggers include but are not limited to: "what
   is the brand", "what is the foundation of this brand", "look at the foundation
   of this brand", "find the brand", "is the brand true", "redo the brand". On
   these, engage: read the current `design/brand.md` if it exists, show the
   designer where the brand stands, and offer to refresh or rebuild it through the
   loop.

The marker only governs the automatic trigger. A request always engages, even if
the marker is set.

### The marker

When the loop finishes writing `brand.md`, end the file with this exact line so
future starts can detect it:

`<!-- brand-foundation-established: rb-design brand loop -->`

On `start`, read `design/brand.md` if it exists and check for that marker line.
Present, skip the automatic run. Absent (including when there is no `brand.md` or
no `design/` folder at all), run the loop once. An existing project that already
has a hand-written `brand.md` will not have the marker, so it runs once on its next
start and reconciles with what is there.

## Gates

Each gate is a hard stop. Do not cross it until its condition is met.

- **Gate A (grounding).** Do not read project files for proof until you have read
  `brand-research.md` and are standing on the real framework, not memory.
- **Gate B (subject and use).** Do not gather proof until the subject and the use
  are confirmed.
- **Gate C (scorecard).** Do not write any brand narrative until the designer has
  seen the scorecard. If a core dimension is empty, ask the designer to supply the
  proof or confirm proceeding without it, then wait.
- **Gate D (existing brand.md).** Never overwrite an existing `brand.md` silently.
  Show the designer the new version against the old and let them choose.

## The steps

### 0. Ground the model (silent, Gate A)

Read `brand-research.md` in this folder. That is the source of truth for the
framework. Do not web-research unless that file is missing.

### 1. Confirm the subject and the use (Gate B)

Ask the designer two things in plain language, then wait:

- **Subject.** What is the brand. Usually the project itself. Restate your guess in
  one line and let them confirm or correct it.
- **Use.** What the brand foundation is for. The default and most common answer is
  "the foundation everything else in this project is built on." Other answers (a
  pitch, an about page, a founder story) change how the proof is arranged.

Do not ask where to save. The answer is always `design/brand.md`. That is settled.

### 2. Gather raw material

**Existing project (has real files).** Read the project's own files for proof, not
claims. Triage to where proof lives: handoffs, decision logs, briefs, notes,
working logs, any existing `brand.md` and `design/` docs, the README, and the
commit history. Read ten focused files, not a hundred skimmed ones. Hunt for the
verifiable: a real date, a documented decision, a thing built, a thing refused, a
real number, a named case.

**New project (little or nothing to read).** There is not enough on disk, so
interview the designer, one dimension at a time, then wait. Good prompts:
- Quality commitment: "What standard of craft do you hold, and where is it visible
  in the work so far?"
- Heritage: "What was the real moment this started? The specific one, not the tidy
  version."
- Sincerity: "What have you refused to do, or turned down, and what did it cost?"
- Symbolism (if used): "What do the people who choose this get out of it beyond the
  thing itself?"

### 3. Score each dimension (Gate C)

Mark each core dimension (quality commitment, heritage, sincerity; symbolism if
used) as one of:

- **Strong.** Specific, verifiable proof already in hand.
- **Thin.** Real but vague, needs a concrete cue to become usable.
- **Empty.** No proof found. Say so plainly. Do not invent it.

Show the designer the scorecard in plain language, grouped by dimension, with the
actual proof quoted back. The weakest dimension is the one to work on, not the one
to hide. Stop here. Write nothing yet. If a dimension is empty, ask the designer to
supply proof or confirm proceeding without it, then wait. A new project will have
thin or empty spots, that is expected, not a failure.

### 4. Convert claims into cues

Turn every vague claim into evidence drawn from the material:
- "committed to quality" becomes the named process and the documented outcome.
- "values-driven" becomes the specific thing refused and what it cost.
- "has history" becomes the real catalyst moment with its date.

If a claim cannot be converted into a verifiable cue, it does not go in. Flag it as
a gap instead.

### 5. Build the brand narrative

Assemble in trust order, because that is how trust is built:
1. Origin, the heritage cue. The real catalyst moment.
2. Principle, the sincerity cue. What it stands for, shown through an action.
3. Craft and results, the quality commitment cues. The proof of excellence.
4. Meaning, the symbolism cue, if used.

Shape it to the stated use. For the default use (the project foundation), write it
as a foundation other design decisions can sit on: clear, plain, and provable.

### 6. Authenticity-theater check

Audit the draft against its own evidence before writing it:
- Every claim backed by something real and provable. Remove anything that is not.
- No forced vulnerability, no borrowed realness, no invented history. Heritage that
  gets exposed as false does more damage than no heritage.
- Would the people who actually know this project recognise it as true? If not, it
  is theater. Cut it.

### 7. Write to design/brand.md (Gate D)

- If there is no `design/` folder, create it. It is just a new folder, safe.
- If there is no `brand.md`, write a fresh one (the scorecard, the gaps still thin
  or empty, then the narrative), and end with the marker line.
- If `brand.md` already exists, do not overwrite it silently. Show the designer the
  new version against the old and ask, in plain language: fold the new proof in,
  replace it, or keep what they have. Whatever they choose becomes the new
  `brand.md`. The source of truth always ends up in `design/brand.md`, edited,
  updated, or new, and ends with the marker line.

## Output

`design/brand.md` containing, in this order:
1. The dimension scorecard, strong, thin, or empty, with the proof found for each.
2. The gaps still thin or empty, each with the question needed to close it.
3. The brand narrative, in trust order, shaped to the stated use.
4. The marker line, last.

## Rules

- Proof only. The words authentic, passionate, and driven do no work.
- Never invent a catalyst, a number, a client, or a value. An empty dimension stays
  empty until the designer supplies the proof.
- Never cross a gate before its condition is met.
- Never build the narrative before the scorecard is shown.
- Never overwrite an existing brand.md without the designer choosing.
- Only use numbers and names that appear in the files or come from the designer.
- Follow the project's writing rules. For Riaan's projects: sentence case, no em
  dashes, no en dashes, no emojis, periods on sentences, full-width paragraphs.
- Speak to the designer in plain language throughout, no jargon, outcome first.
