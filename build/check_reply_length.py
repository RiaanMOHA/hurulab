#!/usr/bin/env python3
"""Count the sentences in Claude's last reply and push back when it runs long.

CLAUDE.md sets four sentences as the default reply. A written rule was not enough:
it was broken repeatedly on 13 August 2026, in the same session it was sharpened.
This reads the transcript the harness hands us, counts what was actually said, and
returns the count as feedback so the next reply starts from a fact rather than a
good intention.
"""
import json
import re
import sys

LIMIT = 4


def last_reply(transcript_path):
    """The final assistant message, text parts only."""
    try:
        with open(transcript_path) as fh:
            lines = [json.loads(l) for l in fh if l.strip()]
    except (OSError, json.JSONDecodeError):
        return None

    for entry in reversed(lines):
        if entry.get("type") != "assistant":
            continue
        content = entry.get("message", {}).get("content", [])
        if isinstance(content, str):
            return content
        text = "".join(
            part.get("text", "")
            for part in content
            if isinstance(part, dict) and part.get("type") == "text"
        )
        if text.strip():
            return text
    return None


def count_sentences(text):
    """Prose sentences only: code blocks, list items and file paths are not prose."""
    text = re.sub(r"```.*?```", "", text, flags=re.S)
    text = re.sub(r"`[^`]*`", "", text)
    prose = [
        line for line in text.splitlines()
        if line.strip() and not re.match(r"^\s*([-*+]|\d+\.|#|\||>)", line)
    ]
    joined = " ".join(prose)
    return len([s for s in re.split(r"[.!?]+(?:\s|$)", joined) if s.strip()])


def main():
    try:
        payload = json.load(sys.stdin)
    except json.JSONDecodeError:
        return 0

    if payload.get("stop_hook_active"):
        return 0

    reply = last_reply(payload.get("transcript_path", ""))
    if not reply:
        return 0

    n = count_sentences(reply)
    if n <= LIMIT:
        return 0

    print(
        f"That reply was {n} sentences. CLAUDE.md sets {LIMIT} as the default. "
        f"Re-read the rule before the next one: the owner reads short replies and "
        f"skips long ones, so the extra {n - LIMIT} did not land.",
        file=sys.stderr,
    )
    return 2


if __name__ == "__main__":
    sys.exit(main())
