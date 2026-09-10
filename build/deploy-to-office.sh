#!/usr/bin/env bash
# Refresh the concept pages served on the office dev box at
# https://hurulab.apps.hurulab.com (WireGuard VPN only).
#
# The box serves files straight off disk via a systemd user service
# (~/.config/systemd/user/hurulab.service running ~/apps/hurulab/bin/serve.py
# on port 5190, registered with `expose hurulab 5190`), so a refreshed folder
# is live immediately and nothing needs restarting.
set -euo pipefail

BOX="riaan@office.hurulab.com"
REMOTE_SITE="apps/hurulab/site"
URL="https://hurulab.apps.hurulab.com"

cd "$(dirname "$0")/.."

echo "copying to ${BOX}..."
rsync -az --delete concepts/ "${BOX}:${REMOTE_SITE}/"
rsync -az --delete logo/ "${BOX}:${REMOTE_SITE}/logo/"

echo "checking ${URL} ..."
curl -fsS -o /dev/null "${URL}/"

echo "done: ${URL}"
