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
- **`/idf-review`** edits the current latest file **in place** — no new file is created, the version number stays the same, and the existing `versions.json` entry is updated
- **Major versions** are created only when the user explicitly requests `/idf-review publish`
- `versions.json` holds metadata for every version; the entry for the current version is updated on each edit-mode review

## File naming patterns
| Pattern | Example | Meaning |
|---|---|---|
| `idf-vN.html` | `idf-v7.html` | Major version (shown as N.0) |
| `idf-vN.M.html` | `idf-v7.11.html` | Subversion under major N |

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
- `/idf-review` — Apply improvements directly to the current version file (in-place edit, no new file)
- `/idf-review publish` — Promote current version to a new major version (vN+1.0)
