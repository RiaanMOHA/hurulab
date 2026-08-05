"""Fail if the handoff pile returns or the handoff outgrows its job.

`.claude/rules/handoffs.md` sets the shape: one file, `.handoffs/CURRENT.md`,
rewritten each session, carrying only what no other file owns.

The pile it replaces reached six dated files and 2,119 lines, more than PLAN.md,
decisions.md and brand.md combined, each claiming to say what was next.

`.handoffs/` is gitignored and this project has no remote, so the handoff is
never backed up. That is safe only while it carries nothing another file owns.
A remaining-work list in here would be the one unbacked copy of something that
matters, which is exactly what this check exists to prevent.

Run: python3 build/check_handoff.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HANDOFFS = ROOT / ".handoffs"
CURRENT = HANDOFFS / "CURRENT.md"
ARCHIVE = HANDOFFS / "archive"

MAX_LINES = 60

# Phrases that mean the handoff has started duplicating a file that outranks it.
# Each maps to the file that owns that content.
TRESPASS = [
    (re.compile(r"^#+\s*remaining work", re.I | re.M), "PLAN.md"),
    (re.compile(r"^#+\s*(what is )?next(\s+steps?)?\b", re.I | re.M), "PLAN.md"),
    (re.compile(r"^#+\s*current state", re.I | re.M), "PLAN.md"),
    (re.compile(r"^#+\s*timeline of work", re.I | re.M), "PLAN_ARCHIVE.md or docs/decisions.md"),
    (re.compile(r"^#+\s*learnings", re.I | re.M), "the .thoughts/ notes or CLAUDE.md"),
    (re.compile(r"^#+\s*architecture", re.I | re.M), "the owning file in docs/design-rules/"),
    (re.compile(r"^#+\s*key files", re.I | re.M), "the owning file, or nothing"),
]


def main():
    if not HANDOFFS.exists():
        print("check_handoff: no .handoffs/, skipping")
        return 0

    failures = []

    stray = sorted(p.name for p in HANDOFFS.glob("*.md") if p.name != "CURRENT.md")
    if stray:
        failures.append(
            f"{len(stray)} dated handoff(s) beside CURRENT.md: "
            f"{', '.join(stray[:4])}{'...' if len(stray) > 4 else ''}\n"
            "    One file, rewritten. Move the previous one to .handoffs/archive/."
        )

    if not CURRENT.exists():
        # Not a failure on its own: a session that changed nothing need not write one.
        print("check_handoff: note, no CURRENT.md yet")
    else:
        text = CURRENT.read_text()
        lines = len(text.splitlines())
        if lines > MAX_LINES:
            failures.append(
                f"CURRENT.md is {lines} lines, over {MAX_LINES}.\n"
                "    Something in it belongs to PLAN.md, docs/decisions.md or an "
                "owning rules file."
            )
        for pattern, owner in TRESPASS:
            if pattern.search(text):
                heading = pattern.search(text).group(0).strip()
                failures.append(
                    f'CURRENT.md has a "{heading}" section, which {owner} owns.\n'
                    "    The handoff is not backed up; that content must live in a "
                    "committed file."
                )

    if failures:
        print("check_handoff: FAIL\n")
        for failure in failures:
            print(f"  {failure}\n")
        print("See .claude/rules/handoffs.md for the shape and why it is this shape.")
        return 1

    archived = len(list(ARCHIVE.glob("*.md"))) if ARCHIVE.exists() else 0
    current = f"{len(CURRENT.read_text().splitlines())} lines" if CURRENT.exists() else "none"
    print(f"check_handoff: OK, one current handoff ({current}), {archived} archived")
    return 0


if __name__ == "__main__":
    sys.exit(main())
