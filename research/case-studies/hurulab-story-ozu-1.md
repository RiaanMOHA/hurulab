# Hurulab story: Ozu-1 property suite

*Extracted 2026-07-05. Evidence from project files, a code inspection, and interview. Design perspective. Audience: companies in Taiwan.*

*Confidentiality: Ozu-1 is a real property MoreHarvest owns and is renovating. Before this is shared outside the company, replace "Ozu-1" and any Kumamoto address detail with a placeholder.*

---

## Part 1: evidence

### What does design do here

Design led structure and decisions, not decoration. Every claim below was verified against the actual code, not only the project's own notes.

- **Design set the rules the whole build obeys.** A source-of-truth hierarchy decides every measurement dispute before it starts: blueprint at 400 dpi beats photos, beats room maps, beats code comments, beats memory, and nothing is eyeballed. This was decided once and cited by every later room build. Source: `CLAUDE.md`, `showcase/design-decisions.md`.
- **Design built the way you inspect a room.** The per-room QA tool is a row of view buttons (top, N, S, E, W, iso, orbit). Choosing top or iso automatically hides every mesh above that room's ceiling, so you can look straight down into a 1F room without the 2F floor in the way, and you never toggle a ceiling switch by hand. Source: `showcase/features.md`, `technical-details.md` (`applyQAView`).
- **Design decided how it should feel to move.** Camera transitions are instant on a chip click, because the mental model is "I am now in this room," not "I am flying to this room." The one guided experience, the iPad tour, deliberately has no close button: you must walk all five scenes forward. Source: `showcase/design-decisions.md`, `value-add-journey-map-prototype-prompt.md`.
- **Design wrote a consistency system for light.** One computed daylight rule (Kumamoto, sunny spring, 11:00 AM JST, sun azimuth ~160 degrees, elevation ~60 degrees) is applied to every interior render, so a room built in May sits in the same light as one built in April. Source: `CLAUDE.md`, `showcase/features.md`.
- **Design directed the engineering.** The team read the blueprint, organized 933 interior photos, wrote the per-room maps and the bake and lighting rules, chose which pages piloted a new renderer, and reviewed every build against the source photos. Source: `showcase/project-copy.md`, git history.

### How we do these projects

- **The MoreHarvest team directs, Claude Code builds.** 76 commits across 8 merged pull requests (#1 to #9, with #7 absent), April 22 to May 22 2026. Verified against `git log`.
- **Sandbox first.** A new room or a new technique gets its own throwaway single-file page before it is ever risked in the 8,305-line house file. `bbq-test.html` and `living-dining-test.html` piloted the WebGPU renderer while four pages stayed on WebGL. Verified: WebGPU present in bbq and living-dining only.
- **Bake, do not fake.** 18 Blender scripts under `ozu-test/bake/` ran offline on a local GPU and produced 120 texture files, 82 MB, actually on disk (room-1 54 files, room-2 22, room-3 26, room-4 18). The runtime just samples the finished images. Verified on disk.
- **Structured briefs with a stop gate.** Work is scoped with phase-gated prompts that forbid writing code until questions are answered (the Sinyi read-only audit prompt is one example). 74 handoff journals carry context between sessions. Source: `ozu-test/sinyi-experiment-phase-1-audit-prompt.md`, `.handoffs/`.

### Our value proposition

A real renovated property in Kumamoto can be reviewed and discussed remotely, room by room, instead of on site. The whole house folds into a single iPad tour you can hand to someone who has never seen it, with no one there to narrate. It runs with zero build step and deploys to any static host (Vercel and Cloudflare are both configured), so the team owns and changes it rather than renting it from a studio. The reference point the team measured itself against is Sinyi DiNDON's 3D viewer. Source: `showcase/project-copy.md`, `value-add-journey-map-prototype-prompt.md`, `ozu-test/sinyi-experiment-phase-1-audit-prompt.md`.

### How we do it differently

A typical studio would deliver a pre-rendered walkthrough video (you cannot change it and you do not own it) or a Matterport scan (it can only capture a space that already exists, not a renovation still being decided), or it would staff a Unity or Unreal developer behind a heavy build pipeline. Here the MoreHarvest team reconstructed the house from a blueprint and photos, so the model can represent design intent rather than only a scan, kept it as 8 self-contained web pages with no framework and no build step, held every room to one computed light, and owned the whole thing end to end by directing AI. This is the Hurulab thesis made literal: design, AI, and engineering in one team.

### Open gaps

- No recorded reaction from anyone outside the team. Every value claim is stated at the capability level, not as a measured outcome. One real line of feedback would carry more than any number here.
- The repo does not record who on the MoreHarvest team did what. Credit is kept as one collective voice by choice.
- The larger "investment properties" map journey that the tour was meant to plug into is referenced in a brief but not built in this repo.

---

## Part 2: the story

### Headline

A real house in Japan, made walkable on an iPad in Taiwan, from a blueprint and 933 photos, built by the MoreHarvest team directing AI.

### Hero

The hero is the remote decision-maker: the person who has to make real calls about a physical space they cannot stand inside. For Ozu-1 that was whoever reviewed the Kumamoto renovation from Taiwan. For the Taiwan company reading this, it is them. Their goal is simple and hard: understand a real place well enough to decide on it, without being in the room. The MoreHarvest team is the guide, not the hero.

### Story structure (Pixar seven-step)

1. **Once there was** a team that had to make real decisions about a house they could not stand inside, a renovation in Kumamoto, Japan, judged from Taiwan.
2. **Every day** they worked from a blueprint and a folder of photos. Those answer "how wide is this wall." They do not answer "what is it like to stand in this room."
3. **Until one day** the questions got specific in a way flat photos could not settle: is the kitchen counter depth right, does the living-dining brick wall match the photo, would a first-time viewer understand the layout with no one there to narrate it.
4. **Because of that** the MoreHarvest team rebuilt the house in 3D from the blueprint at 400 dpi and 933 interior photos, one room at a time, every measurement traceable to a named source and nothing eyeballed.
5. **Because of that** one room became a suite. The team baked the materials once on a local GPU instead of faking them every frame, held every room to one computed 11 AM daylight rule, then folded the whole thing into an iPad tour you can hand to a stranger.
6. **Until finally** the house could be walked room by room from anywhere, on an iPad, deployed to a CDN, and owned and changed by the MoreHarvest team with no studio, no framework, and no build step.
7. **Ever since then** a physical thing that used to need a plane ticket or an expensive studio can be understood remotely by anyone you hand it to.

### Three key points

1. **The team led with design, and the engineering followed.** Proof: the MoreHarvest team set the rules the whole build obeys (blueprint beats photos beats memory, never eyeball), designed the inspection view that hides a ceiling so you can look straight down into a room, and directed all 76 commits.
2. **It is real, not faked.** Proof: 18 Blender scripts baked 120 texture files (82 MB, verified on disk) from the actual reference photos, and one computed Kumamoto 11 AM lighting rule replaced per-room guesswork.
3. **It is yours to own, not rent.** Proof: 8 self-contained web pages, 0 build steps, 0 frameworks, 1 dependency, deployable to Vercel and Cloudflare, with the whole iPad tour running as one swapped iframe.

### Language notes

- Short-word flags: prefer "rebuilt" over "reconstructed," "published" over "deployed," and "you can trace" over "traceable" in body prose. Keep the precise words in captions.
- Analogy: the 3D suite is a show home you can send by link. A show home lets a buyer walk a space before it is finished; this one fits on an iPad and travels as a URL.
- Anaphora opportunity: the ownership close. "No studio. No framework. No build step. No plane ticket."
- Readability check: pass, with one flag. Step 5 stacks clauses; split it into two sentences in final prose.

### Visual notes

- The team led with design -> the 400 dpi blueprint beside the matching 3D room, one measurement line drawn across both.
- It is real, not faked -> a baked material close-up (the room-3 rattan or room-1 bedding) next to the reference photo it was baked from.
- Yours to own -> a hand holding an iPad mid-tour with the browser URL bar visible, to show it is just a web page.

### Delivery notes

- Surprise or reversal: it sits at step 6 and key point 1. The reader expects a photoreal 3D house to come from a game studio or an archviz firm with a render farm and a room of developers. The reversal is that it came from the MoreHarvest team directing AI, with the "render farm" being one desktop GPU running overnight bakes and the runtime being plain HTML you could open by double-clicking. That reverses the expected trajectory, that more realism needs a bigger specialist team.
- Specific detail added: replaced "a lot of photos" with 933 interior photos, "baked textures" with 120 files at 82 MB verified on disk, and "far away" with Kumamoto, Japan reviewed from Taiwan.
- Culture story (repeatable): the brick wall was wrong for weeks. The living-dining brick was first built warm brown, then caught against the photo and corrected to grey-white with light grout, long after the wall was done. It proves "photo-matched" is an ongoing audit, not a one-time claim.
