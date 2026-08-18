# IDF — Intent Driven Flow Framework

## What this is
A static documentation site for the IDF (Intent Driven Flow) framework — a governance methodology for AI-assisted development teams where agents execute and humans govern. No build step, no dependencies. Pure self-contained HTML/CSS/JS.

## File map
| File | Purpose |
|---|---|
| `index.html` | Landing / pitch page — self-contained, links into `idf.html` |
| `idf.html` | Main framework documentation (self-contained) |
| `idf-corporate.html` | Corporate-adaptation companion doc (self-contained) |
| `playbook.html` | Supplementary practices and templates |
| `flow.html` | End-to-end flow reference diagram |
| `nav.js` | Shared sticky nav bar injected on all pages via script tag |

## Versioning
There is no in-repo version registry or archive — **git is the only version history**. Framework docs (`idf.html`, `idf-corporate.html`, `playbook.html`, `flow.html`) are edited in place; commit history and git tags (if ever needed) are the record of change over time.

## Constraints — always follow these
- Every page must be **fully self-contained** (embedded CSS, no external build)
- Every page must include `<script src="nav.js"></script>` before `</body>`
- Version badge format (where shown): `IDF · <label> · 2026`
- Do not modify `index.html` or `nav.js` unless explicitly instructed

## Agent team

The project runs a 3-teammate agent team. Roles:

| Role | Model | Responsibility |
|---|---|---|
| `researcher` | Opus/Sonnet | Content research + copy generation → produces `temp/copy-{N}-{desc}.md` |
| `fullstack-dev` | Opus/Sonnet | Implements copy files + Firebase + git + updates `memory/system_memory.md` |
| `qa` | Opus/Sonnet | Tests every cycle + updates `tests/report.md` + routes issues |

**Cycle flow:** User + Orchestrator confirm intent → Researcher produces copy → Fullstack Dev implements → QA tests → Orchestrator reports to user.

**Persistent files (updated every cycle):**
- `memory/system_memory.md` — current project state (updated by Fullstack Dev + QA)
- `tests/report.md` — pass/fail test results per cycle (updated by QA)

**Model selection:** teammates choose Opus or Sonnet based on task complexity — Opus for deep reasoning, Sonnet for execution.
