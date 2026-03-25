#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# new-version.sh — IDF version automation
#
# Usage:
#   ./new-version.sh "Version Title" "Short description of changes"
#
# What it does:
#   1. Finds the latest idf-vN.html
#   2. Copies it to idf-v(N+1).html
#   3. Updates version badge and title in the new file
#   4. Adds an entry to versions.json
#   5. Commits and pushes to git
# ─────────────────────────────────────────────────────────────
set -e

TITLE="${1:-}"
DESCRIPTION="${2:-}"
DATE=$(date +%Y-%m-%d)

# ── Validate input ────────────────────────────────────────────
if [ -z "$TITLE" ] || [ -z "$DESCRIPTION" ]; then
  echo ""
  echo "  Usage: ./new-version.sh \"Title\" \"Description\""
  echo ""
  echo "  Example:"
  echo "    ./new-version.sh \"Multi-team Support\" \"Adds cross-team dependency brokering and shared intent registries.\""
  echo ""
  exit 1
fi

# ── Find latest version ───────────────────────────────────────
cd "$(dirname "$0")"

LATEST=$(ls idf-v*.html 2>/dev/null \
  | grep -oE '[0-9]+' \
  | sort -n \
  | tail -1)

if [ -z "$LATEST" ]; then
  echo "Error: No idf-v*.html files found. Create idf-v1.html first."
  exit 1
fi

NEXT=$((LATEST + 1))
LATEST_FILE="idf-v${LATEST}.html"
NEW_FILE="idf-v${NEXT}.html"

echo ""
echo "  Creating v${NEXT}.0 from v${LATEST}.0..."

# ── Copy and update version references ───────────────────────
cp "$LATEST_FILE" "$NEW_FILE"

# Update version references (badge, title, back nav label)
sed -i "s/IDF · v${LATEST}\.0/IDF · v${NEXT}.0/g" "$NEW_FILE"
sed -i "s/v${LATEST}\.0/v${NEXT}.0/g" "$NEW_FILE"

echo "  Created: $NEW_FILE"

# ── Update versions.json ──────────────────────────────────────
# Use node if available, otherwise python3
if command -v node &>/dev/null; then
  node - <<EOF
const fs = require('fs');
const path = 'versions.json';
const versions = JSON.parse(fs.readFileSync(path, 'utf8'));
versions.push({
  version: '${NEXT}.0',
  file: '${NEW_FILE}',
  date: '${DATE}',
  title: $(echo "$TITLE" | node -e "process.stdout.write(JSON.stringify(require('fs').readFileSync('/dev/stdin','utf8').trim()))"),
  description: $(echo "$DESCRIPTION" | node -e "process.stdout.write(JSON.stringify(require('fs').readFileSync('/dev/stdin','utf8').trim()))"),
  highlights: []
});
fs.writeFileSync(path, JSON.stringify(versions, null, 2) + '\n');
console.log('  versions.json updated');
EOF
elif command -v python3 &>/dev/null; then
  python3 - <<EOF
import json
with open('versions.json') as f:
    versions = json.load(f)
versions.append({
    'version': '${NEXT}.0',
    'file': '${NEW_FILE}',
    'date': '${DATE}',
    'title': """${TITLE}""",
    'description': """${DESCRIPTION}""",
    'highlights': []
})
with open('versions.json', 'w') as f:
    json.dump(versions, f, indent=2)
    f.write('\n')
print('  versions.json updated')
EOF
else
  echo "  Warning: neither node nor python3 found. versions.json not updated."
  echo "  Add the new entry manually to versions.json."
fi

# ── Git commit and push ───────────────────────────────────────
git add "$NEW_FILE" versions.json
git commit -m "Add IDF v${NEXT}.0 — ${TITLE}"
git push

echo ""
echo "  Done. IDF v${NEXT}.0 is live."
echo "  File: $NEW_FILE"
echo "  Edit the file to add your changes, then commit when ready."
echo ""
