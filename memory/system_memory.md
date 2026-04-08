# IDF Project — System Memory

> This file is the single source of truth for the current state of the project.
> It must always reflect the current version — not history, not decisions that were reversed.
> Updated by Fullstack Dev after every implementation cycle. Updated by QA after every test cycle.

---

## Project

**Name:** Intent Driven Flow (IDF)
**Purpose:** Official documentation site for the IDF framework — a governance methodology for AI-assisted development teams where agents execute and humans govern.
**Live URL:** https://rfranco-br.github.io/Intent-Driven-Flow/
**Repo:** https://github.com/rfranco-br/Intent-Driven-Flow

---

## Tech Stack

| Layer | Technology |
|---|---|
| Hosting | GitHub Pages (main branch) |
| Backend | Firebase (integration in progress) |
| Frontend | Pure HTML/CSS/JS — no build step, no framework |
| Fonts | Playfair Display · IBM Plex Sans · IBM Plex Mono (Google Fonts) |
| Diagrams | Mermaid.js (CDN) |
| Analytics | Google Analytics 4 — G-MV9XNW7Y6V |
| Version control | Git — single branch `main` |

---

## CSS Design Tokens (always use these — never hardcode colors)

```css
--bg: #0c0c14          --surface: #13131e       --surface2: #1a1a2a
--border: #2a2a3a      --border2: #3a3a50
--text: #f0ede8        --text2: #a8a6b4         --text3: #6a6878
--coral: #e8734a       --coral2: #f0956e
--purple: #7c5cbf      --purple2: #9b7fd4
--teal: #3a9e78        --teal2: #5bbf95
--blue: #4a7abf        --blue2: #6b99d4
--amber: #bf8f3a       --amber2: #d4a85b
```

---

## File Structure

```
/
├── index.html              — Version landing page (reads versions.json)
├── idf.html                — Main framework documentation (current: Alpha)
├── playbook.html           — Supplementary practices and templates
├── flow.html               — End-to-end flow reference diagram
├── nav.js                  — Shared sticky nav (injected in all pages)
├── versions.json           — Version registry — source of truth
├── LICENSE                 — CC BY 4.0
├── memory/
│   └── system_memory.md    — This file
├── tests/
│   └── report.md           — QA test results (updated each cycle)
├── docs/
│   └── agent-teams.md      — Agent teams reference guide
├── .claude/
│   ├── CLAUDE.md           — Project instructions for Claude
│   ├── settings.json       — Shared project settings
│   ├── settings.local.json — Local settings (not committed)
│   ├── agents/             — Teammate role definitions
│   │   ├── researcher.md
│   │   ├── fullstack-dev.md
│   │   └── qa.md
│   ├── skills/             — Skill definitions (legacy)
│   └── commands/           — Slash command definitions
└── archive/                — Old version files (idf-v1 through idf-v7.11)
```

---

## Current Version

**Badge:** IDF · Alpha · 2026
**File:** `idf.html`
**Date:** 2026-04-07
**Status:** Active development

**Key framework sections in idf.html:**
- Section 01: Cover
- Section 02: Rules (A01–A06)
- Section 03: Roles (Stakeholders, PO, Craft Engineer, QA Advocate, Architects, Orchestrator, Builder, Guardian, Dependency Broker, Client)
- Section 04: Delivery Cycle (Mermaid flow + SDLC detail)
- Section 05: Structure
- Section 06: Signal Events + Rituals
- Section 07: Artifacts
- Section 08: Communication
- Section 09: Measurement
- Section 10: Quickstart
- Contribute section
- Footer

---

## Active Constraints

- Every HTML page must be fully self-contained (embedded CSS, no external build)
- Every HTML page must include `<script src="nav.js?v=10"></script>` before `</body>`
- Google Analytics snippet (`G-MV9XNW7Y6V`) must be in `<head>` of all active pages
- Do not modify `index.html`, `nav.js`, or `new-version.sh` unless explicitly instructed
- Git branch: `main` is production — all changes commit directly to `main`

---

## Contact / Attribution

**Author:** Roberto Pillon Franco
**Email:** robertopillonfranco@gmail.com
**LinkedIn:** https://www.linkedin.com/in/roberto-pillon-franco/
**License:** CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/

---

## Last Updated

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 1 mobile responsiveness fixes — added `.principles-grid` and `.flow-row` mobile collapse rules + `.section-contribute` class with mobile override to `idf.html`; added `.principles-grid` collapse and `[style*="grid-template-columns:140px"]` override to `playbook.html`; added `.scroll-hint` CSS + HTML before both diagram sections in `flow.html`; updated `flow.html` nav.js reference to `nav.js?v=10`.

Date: 2026-04-07
Updated by: QA
Change: Cycle 1 QA sign-off — all checks PASS. GA4 tag, nav.js?v=10, CSS variables, mobile overrides, `.section-contribute` class, `.scroll-hint` placement, and attribute selector validity all verified across idf.html, playbook.html, flow.html, and index.html.

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 2 SDLC step cards restructure — replaced `/* ── FLOW ── */` CSS block with new `/* ── SDLC STEP CARDS ── */` block in idf.html; replaced `.flow-row` + inline detail grid HTML (Section 04) with `.sdlc-step-grid` containing 5 `.sdlc-step-card` divs; replaced `.flow-row` mobile media query rule with `.sdlc-step-grid` equivalent.

Date: 2026-04-06
Updated by: QA
Change: Cycle 2 QA sign-off — all checks PASS. `.sdlc-step-grid`, `.sdlc-step-card`, `.card-section-label`, `.card-section-content`, and all 5 `highlight-*` modifiers verified with correct CSS variables. No `.flow-row` or `.flow-cell` remnants. Mobile media query correctly targets `.sdlc-step-grid`. All 5 card contents verified (Plan/Orchestrator, Build/Builder(s), Auto-test/Guardian, Deploy/flag OFF, Monitor/flag ON) with correct labels and color tokens. GA4 tag, `nav.js?v=10`, fail-path callouts (×4), SDD callout, and Mermaid diagram all intact.

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 3 playbook clarity fixes (18 coded references resolved) — replaced all W-code, C-code, T-code, and R-code parenthetical references in playbook.html with explicit language; Instance 10 resolved as anchor hyperlink `<a href="#t4" style="color:var(--teal2);">System Memory template</a>`; R-code instances (14, 15, 16) resolved with inlined rule meanings per Orchestrator decision.

Date: 2026-04-06
Updated by: QA
Change: Cycle 3 QA sign-off — all 18 changes PASS. All W/C/T/R parenthetical codes removed from prose; Instance 10 hyperlink correct (`<a href="#t4" style="color:var(--teal2);">`, anchor confirmed at line 1125, no broken HTML); Instances 14/15/16 R-code inlines confirmed; Instance 17 `Cycle [number]` confirmed; TOC toc-id spans and section-label divs untouched; `[N]` template placeholders intact. Regression: GA4 tag present, `nav.js?v=10` before `</body>`. Out-of-scope finding: one residual `(W1)` at line 767 (W2 precondition callout body) — not part of the 18 in-scope instances, flagged for future cycle.

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 4 W4 Gate Review Decision — replaced COMING SOON stub with full 8-step section content (PRECONDITION + WHEN TO RUN callouts, decision matrix, scope sidebar) in playbook.html; also resolved residual (W1) reference in W2 PRECONDITION callout (Cycle 3 carryover).

Date: 2026-04-07
Updated by: QA
Change: Cycle 4 QA sign-off — PASS. W4 full section verified (8 steps, decision matrix, scope sidebar, both callouts, no COMING SOON); residual (W1) confirmed absent; W2 PRECONDITION body corrected; all regression checks clean (GA4, nav.js?v=10, TOC W4 entry).

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 5 W5 Context Reset — replaced COMING SOON stub with full 7-step section content (PRECONDITION + WHEN TO RUN callouts, audit procedure, POST-RESET CHECKLIST artifact, scope sidebar) in playbook.html.

Date: 2026-04-07
Updated by: QA
Change: Cycle 5 QA sign-off — PASS. W5 full section verified (7 steps, both callouts, POST-RESET CHECKLIST, scope sidebar, no COMING SOON); all regression checks clean (GA4, nav.js?v=10, TOC W5 entry).

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 6 W5 reframe — Context Reset repositioned from scheduled maintenance to emergency brake; removed proactive cadence trigger; narrowed default scope to single artifact; removed PO pre-approval gate from step 07.

Date: 2026-04-08
Updated by: QA
Change: Cycle 6 QA sign-off — PASS. All 4 W5 content rewrites verified: emergency brake opening paragraph, 5-trigger WHEN TO RUN (proactive cadence absent), step 01 scope narrowed to single artifact, step 07 PO pre-approval gate removed. POST-RESET CHECKLIST unchanged (7 items). Regression clean: GA4 tag and nav.js?v=10 intact.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 7 Gate Rituals framework changes in idf.html — added rule A06 (human gates validate alignment not output); updated Section 06 signal events (Intent Injection, Craft Review, Context Reset rows updated; Context Integrity Gate row added); updated Craft Engineer + QA Advocate role descriptions to reference Gate Ritual participation.

Date: 2026-04-08
Updated by: QA
Change: Cycle 7 QA sign-off — PASS. All Gate Rituals changes verified in idf.html: Section 02 intro reads "Six rules"; A06 block present after R5 with correct text; Intent Injection output references Intent Alignment Gate + 30–60 min read window; Craft Review output names Output Alignment Gate with Craft Engineer/QA Advocate role split; Context Reset cadence is "Event-triggered" with Craft Engineer leads; Context Integrity Gate row present with dot-execution class, per-cycle cadence, CLEAN/FLAGGED output and INTENT_LOG reference; Craft Engineer role card ends with Context Integrity Gate, Intent Alignment Gate, Output Alignment Gate; QA Advocate role card ends with Intent Alignment Gate and Output Alignment Gate. Regression clean: GA4 tag and nav.js?v=10 intact.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 8 W3 Craft Review — replaced COMING SOON stub with full Output Alignment Gate procedure (6 steps, APPROVED/FLAGGED two-outcome format, independent review model, maturity graduation callout) in playbook.html.
