# Handoffs in this project

**This overrides the global `handoff` and `pickup` skills, and the handoff steps inside
`rb-design`, for hurulabs only.** The global skill writes a new dated file every session and
says every omitted detail is knowledge permanently lost. Both are wrong here, and other
projects are unaffected.

## One file, rewritten. Never a pile.

The handoff lives at **`.handoffs/CURRENT.md`**. Each session rewrites it. It is never
appended to, never dated in its filename, and never accumulates.

The previous one moves to `.handoffs/archive/` on the way past, so nothing is lost and only
one file is ever current.

**Why:** adopted 5 August 2026 from pro-360-test, where fourteen dated files reached 4,872
lines and a stale handoff's list was worked while the owner's actual priority sat unread.
hurulabs' own pile was six files and 2,119 lines when it was folded away, more than PLAN.md,
decisions.md and brand.md combined. A handoff that outlives its accuracy does not go quiet,
it gives instructions.

## It carries only what no other file does

Before writing a line, ask which file owns it. If another file owns it, **point at that file
and write nothing.**

| Never in the handoff | Because |
|---|---|
| What to do next | `PLAN.md` owns the work order, and it is the only place that order lives |
| Finished or historical work | `PLAN_ARCHIVE.md` |
| A decision and what reversed it | `docs/decisions.md`, dated in place. **A decision never lives in a handoff** |
| What hurulab is or claims | `docs/brand.md`, under the evidence rule |
| A design or copy rule | the owning file in `docs/design-rules/` |
| Process and agent behavior | `CLAUDE.md` |
| Owner lessons | `CLAUDE.md`, under the process rules |

What is left is the only thing worth writing: **what was mid-flight when the session
stopped.** Something half-finished, something that nearly went wrong, a false trail worth not
repeating, a file left in a strange state. That dies with the session unless it is written
down.

Target **under 60 lines.** If it is longer, something in it belongs to a file above.

## It is not backed up, and that is deliberate

`.handoffs/` stays gitignored, and this project has no remote: local `main` is the save.

That is safe *only because* the handoff carries nothing another file owns. Everything durable
is already committed. Losing this file costs one session's continuity, not the project.

Put remaining work back in the handoff and it becomes the one unbacked copy of something
that matters.

## Shape

```markdown
# Where we are, {date}

## Mid-flight
What was being done when the session stopped. Empty if nothing was.

## Watch out
Anything half-done, broken, or in a strange state. Empty if nothing is.

## Learned
Only what no owning file would carry. Usually empty.

## Priority
Point at PLAN.md. Never restate its list.
```

A section with nothing in it says "nothing", and that is a real answer. Padding it is how
the pile started.

`python3 build/check_handoff.py` fails if the pile returns or the handoff takes on another
file's job.
