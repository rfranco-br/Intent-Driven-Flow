# IDF — Intent Driven Flow Framework

## What this is
A static documentation site for the IDF (Intent Driven Flow) framework — a governance methodology for AI-assisted development teams where agents execute and humans govern. No build step, no dependencies. Pure self-contained HTML/CSS/JS.

## File map
| File | Purpose |
|---|---|
| `index.html` | Version landing page — reads `versions.json` dynamically |
| `idf-vN.html` | Framework documentation for version N (self-contained) |
| `versions.json` | Version registry — source of truth for landing page and nav |
| `nav.js` | Shared sticky nav bar injected on all pages via script tag |
| `new-version.sh` | Automation: copy latest version, bump number, push to git |
| `.claude/commands/review.md` | `/review` command — the Review Agent |

## How versioning works
- Version files follow the pattern `idf-v1.html`, `idf-v2.html`, etc.
- `versions.json` holds metadata for each version: version number, file, date, title, description, highlights array
- `new-version.sh "Title" "Description"` creates a new version from the latest and pushes to git
- The `/review` command handles reviews autonomously — it creates and publishes a new version without manual steps

## versions.json schema
```json
{
  "version": "3.0",
  "file": "idf-v3.html",
  "date": "YYYY-MM-DD",
  "title": "Short Title",
  "description": "One sentence describing what changed and why.",
  "highlights": ["Change 1", "Change 2", "Change 3"]
}
```

## Constraints — always follow these
- Every version file must be **fully self-contained** (embedded CSS, no external build)
- Every version file must include `<script src="nav.js"></script>` before `</body>`
- Version badge format: `IDF · vN.0 · 2026`
- Title tag format: `Intent Driven Flow Framework vN.0`
- Do not modify `index.html`, `nav.js`, or `new-version.sh` during a review cycle

## Available commands
- `/idf-review` — Run the Review Agent: reads latest version, critiques it, applies improvements, publishes a new version automatically
