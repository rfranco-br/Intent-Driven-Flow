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
| `.claude/commands/idf-review.md` | `/idf-review` command — the Review Agent |

## How versioning works
- **Subversions** (`idf-v4.1.html`, `idf-v4.2.html`) are created on every `/idf-review` interaction
- **Major versions** (`idf-v5.html`) are created only when the user explicitly requests it (type `publish` or `new version`)
- `versions.json` holds metadata for every version and subversion
- `new-version.sh "Title" "Description"` creates a new major version from the latest and pushes to git

## File naming patterns
| Pattern | Example | Meaning |
|---|---|---|
| `idf-vN.html` | `idf-v4.html` | Major version (shown as N.0) |
| `idf-vN.M.html` | `idf-v4.1.html` | Subversion under major N |

## versions.json schema
```json
{
  "version": "4.1",
  "file": "idf-v4.1.html",
  "date": "YYYY-MM-DD",
  "title": "Short Title",
  "description": "One sentence describing what changed and why.",
  "highlights": ["Change 1", "Change 2", "Change 3"]
}
```

## Constraints — always follow these
- Every version file must be **fully self-contained** (embedded CSS, no external build)
- Every version file must include `<script src="nav.js"></script>` before `</body>`
- Major version badge format: `IDF · vN.0 · 2026` — Subversion badge format: `IDF · vN.M · 2026`
- Major version title tag: `Intent Driven Flow Framework vN.0` — Subversion: `Intent Driven Flow Framework vN.M`
- Do not modify `index.html`, `nav.js`, or `new-version.sh` during a review cycle

## Available commands
- `/idf-review` — Ask "What's new?", take input, apply improvements as a subversion (vN.M+1)
- `/idf-review publish` — Promote latest subversions into a new major version (vN+1.0)
