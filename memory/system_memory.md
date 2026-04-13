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
├── idf-v2.html             — Hidden draft — three-level model rebuild (untracked, not in nav)
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

**Key framework sections in idf.html (journey-first structure):**
- Section 01: Getting started (Why IDF + manifesto)
- Section 02: Operating principles (Rules R1–A06)
- Section 03: See it first — one concrete cycle, 5 steps (NEW)
- Section 04: Delivery Cycle — intro paragraph + Mermaid diagram only (stripped of phase cards)
- Section 05: Three gates — Gate 1/2/3 as standalone section (NEW)
- Section 06: Roles (11 roles — 5 human, 6 AI)
- Section 07: Artifacts (7 persistent records)
- Section 08: Adapting IDF to your organization
- [Reference zone divider]
- Section 09: Structure — four layers (Reference)
- Section 10: Signal Events (Reference) — diagram nodes updated to current gate names
- Section 11: Communication patterns (Reference)
- Section 12: Measurement (Reference)
- Section 13: Context Debt (Reference)
- Section 14: Full cycle walkthrough — with every artifact
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

Date: 2026-04-13
Updated by: Fullstack Dev
Change: Created hidden page `idf-v2.html` (2207 lines) — full rebuild of IDF framework doc around the three-level Intent/Cycle/Iteration model. Sections: §01 three problems (intent closure, Gate 2 rework, conversational gates); §02 nested hierarchy diagram with status lifecycles and trigger fields; §03 walkthrough timeline (one intent, two cycles, Gate 2 failure + rework iteration, intent completion); §04 Gate 1 (first-cycle vs subsequent-cycle behaviour); §05 Gate 2 iteration review loop diagram; §06 Gate 3 flag authorization (closes cycle, not intent); §07 intent lifecycle beyond the flag (monitoring, signal observation, explicit completion, abandoned path); §08 Roles (11 roles, PO updated to own monitoring + intent closure); §09 Artifacts (Intent Log and Iteration Record updated); §10–14 reference zone (Layers, Signal Events, Communication, Measurement, Context Debt) with vocabulary adjusted for three-level model. File is hidden: NOT listed in nav.js, index.html, or versions.json. nav.js?v=11, GA4 G-MV9XNW7Y6V, no hardcoded hex outside :root. No git commit — file left untracked for user review.

Date: 2026-04-11
Updated by: Fullstack Dev
Change: Full narrative rebuild of idf.html — journey-first section reorder. Added new S03 (one cycle walkthrough, 5 steps) and S05 (three gates standalone). Stripped S04 to intro + Mermaid diagram only (removed phase cards, gate callouts). Moved Roles to S06 (after Three Gates), Artifacts to S07, Adapting IDF to S08. Added reference zone divider before Layers. Renumbered reference sections: Layers=S09, Signal Events=S10, Communication=S11, Measurement=S12, Context Debt=S13. Moved full walkthrough to S14. Updated Signal Events diagram node labels to current gate names (Context Integrity Check, Gate 1/2/3). Updated versions.json description and highlights. Committed and pushed to main.

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

Date: 2026-04-08
Updated by: QA
Change: Cycle 8 QA sign-off — PASS. W3 Craft Review full section verified: opening paragraph names Output Alignment Gate; PRECONDITION callout has coral border, references Guardian gate report, no solo practitioner exception; WHEN TO RUN callout has coral border, correct header, solo practitioner exception present; exactly 6 qs-step divs; steps 01–05 each have qs-line, step 06 omits it; step 05 FLAG annotation template correct; step 06 APPROVED annotation with paired CE/QA confirmations correct; maturity graduation callout present with amber border; scope sidebar has var(--surface2) background and correct header; TOC W3 entry intact. Regression clean: nav.js?v=10 before </body> (line 1970); GA4 tag G-MV9XNW7Y6V in <head> (lines 5, 10).

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 10 W8 Context Integrity Gate — new section added (Gate Ritual 2: 10-minute pre-cycle pre-flight, PRE-CYCLE CONTEXT CHECK artifact, INTENT_LOG field, maturity exit criterion) to playbook.html.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 9 W1 Intent Alignment Gate — added step 07 (Intent Alignment Gate: 30-60 min async read window, Craft Engineer + QA Advocate concern-or-pass, maturity exit criterion) to W1 Intent Generation in playbook.html.

Date: 2026-04-08
Updated by: QA
Change: Cycle 9 QA sign-off — PASS. W1 section verified: exactly 7 qs-step divs; steps 01–06 each have qs-line; step 07 omits qs-line; step 07 title "Open the Intent Alignment Gate"; 30–60 minute window present; Craft Engineer + QA Advocate roles named; CONCERN format confirmed; coral NOTE callout with "Silence = PASS" principle present; amber maturity graduation callout present with 90% first-pass rate / 10 consecutive cycles criterion. Regression clean: GA4 tag and nav.js?v=10 intact.

Date: 2026-04-08
Updated by: QA
Change: Cycle 10 QA sign-off — PASS. W8 Context Integrity Gate full section verified: no COMING SOON within section; TOC entry `W8 — Context Integrity Gate` present; section label "W8 — Workflows"; WHEN TO RUN callout with coral border present; "THIS IS NOT THE CONTEXT RESET" callout with coral border and explicit distinction present; PRE-CYCLE CONTEXT CHECK qs-artifact template present; INTENT_LOG context check field format (CLEAN / FLAGGED) present; amber maturity graduation callout with 20 consecutive clean cycles criterion; scope sidebar with var(--surface2) background. Regression clean: GA4 tag and nav.js?v=10 intact.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 11 W6 + C4 — W6 Escape Hatch Protocol (Path A/B decision framework, 5 steps, CORRECTION STATEMENT + DRIFT REGISTER templates) and C4 Orchestrator Escalation Messages (6-field ESCALATION format, 4-field RESPONSE format, SLA callout, 4 steps) both replaced COMING SOON stubs in playbook.html.

Date: 2026-04-08
Updated by: QA
Change: Cycle 11 QA sign-off — PASS. W6 full section verified: no COMING SOON; PATH A — INTERRUPT and PATH B — COMPLETE AND LOG cards present; decision table with 7 data rows confirmed; 5 qs-step divs with steps 01–04 having qs-line and step 05 omitting it; CORRECTION STATEMENT artifact correct; DRIFT REGISTER escape entry correct; INTENT_LOG Escape: field correct; scope sidebar with var(--surface2) background present. C4 full section verified: no COMING SOON; ESCALATION format with all 6 required fields present; RESPONSE format with 4 fields including Proceed: YES / NO present; SLA callout with amber border referencing 2-hour and 30-minute defaults present; 4 qs-step divs with steps 01–03 having qs-line and step 04 omitting it; anti-patterns table present; scope sidebar present. Regression clean: nav.js?v=10 before </body> (line 2357); GA4 tag G-MV9XNW7Y6V in <head> (lines 5, 10); TOC entries for W6 (line 597) and C4 (line 622) intact.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 12 Gate Maturity Model — added Stage summary callout to idf.html Section 09; replaced P3 COMING SOON stub with full Gate Maturity Model section in playbook.html (3-stage model, graduation criteria for all Gate Rituals, graduation process, what-never-graduates table).

Date: 2026-04-08
Updated by: QA
Change: Cycle 12 QA sign-off — PASS. idf.html Section 09 verified: three-stage grid (Stage 1 Structured / Stage 2 Calibrated / Stage 3 Autonomous) present; GRADUATION IS NOT AUTOMATIC callout with cross-reference link to playbook.html#p3 present; GA4 tag and nav.js?v=10 intact. playbook.html P3 verified: full content present (no COMING SOON); TOC entry correctly reads "Gate Maturity Model"; stage summary table has 3 data rows (Structured, Calibrated, Autonomous); individual graduation criteria for G1 (>90% first-pass rate for 10 consecutive cycles), G2 (>95% for 15 cycles AND no drift escapes for 20 cycles), and G3 (no Context Reset for 20 consecutive cycles) all present with thresholds; 3-step graduation process with System Memory log template present; "What never graduates" table has all 4 required rows — PO Release Gate (W4), Escalation response obligation (C4), Context Reset trigger (W5), and Craft Engineer output review (W3 step 02); cross-reference sidebar links to idf.html Section 09 and all four gate ritual sections (W1, W3, W4, W5, W8); GA4 tag and nav.js?v=10 intact.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Section 06 visual redesign — replaced flat rituals table with three-zone visual system: Cycle View (horizontal flow diagram showing one complete cycle with human gate markers and agent execution band), Rhythm Map (cadence view by frequency tier), Exception Events (3 cards for event-triggered rituals). Reference table preserved below the visuals.

Date: 2026-04-07
Updated by: Fullstack Dev
Change: Cycle 14 Section 06 two-loop redesign — replaced Cycle View + Rhythm Map zones with two stacked horizontal bands (Slow Loop: purple, Client Signals → Signal Review → Strategic Alignment → True North; Fast Loop: blue, Gate 2 → Intent Injection → Gate 1 → Agent Execution → Gate 3 → Release Gate → Monitor); added "feeds intent" connector between loops; added "feeds signals back ↺" feedback note; renamed G1/G2/G3 to Gate 1/Gate 2/Gate 3; replaced old CSS block (~20 classes) with new loop CSS (~12 classes). Zone 3 Exception Events and reference table unchanged.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 15 Section 06 image-based three-zone redesign — replaced two-loop diagram with richer three-zone layout based on reference image: Strategy/Slow Loop (blue box, ~62% width, right-aligned), Cycle/Fast Loop (green box, full-width), Monitor/Continuous (dashed box, centered ~72% width); added Persistent Memory sidebar (10 artifacts with → ← bidirectional arrows); used CSS border-trick arrows (`.loop-arrow-left` / `.loop-arrow-right` classes) for thick directional arrows at top/bottom edges of each loop box; trapezoid shape for human-driven nodes via `clip-path` + `filter: drop-shadow()`; Monitor zone uses `▷▷▷` flow indicators above and below the dashed box; SDD note on Agent Execution box; `min-width:1300px`, `grid-template-columns:1fr 210px` layout.

Date: 2026-04-08
Updated by: Fullstack Dev
Change: Cycle 16 Section 06 readability improvements — increased all font sizes (zone-header 13px, node-label 12px, node-sub 10px, node-badge 10px, agent-exec-title 10px, memory-name 11px); widened layout (min-width 1300px, sidebar 210px, padding 24px 28px); upgraded CSS loop arrows to proper thick border-trick arrows spanning full box width; Monitor ▷▷▷ elements rendered as flow elements at font-size 14px outside the dashed box instead of absolutely positioned; SDD note upgraded to font-size 10px; Release Gate outcome labels upgraded to font-size 10px.

Date: 2026-04-08
Updated by: QA
Change: Cycle 13 QA sign-off — PASS. Section 06 three-zone redesign fully verified. Zone 1 Cycle View: `.cycle-view` wrapper with `overflow-x:auto` present; `.cycle-track` 6-column grid (120px 130px 160px 1fr 160px 140px) present; column order correct — G2 Context Integrity Gate → Intent Injection → G1 Intent Alignment Gate → Agent Execution → G3 Craft Review → Release Gate; G1/G2/G3 `.gate-ritual-badge` spans all present; agent execution `.cycle-col-agent` has `rgba(74,122,191,0.08)` blue tint background; directional indicator `.cycle-time-arrow` with "minutes" and "days" labels present above track; "Every Cycle" zone-header label present. Zone 2 Rhythm Map: `.rhythm-map` wrapper present; three rows (Every Cycle / Continuous / On Signal); Every Cycle row has 6 chips (≥5 pass threshold); On Signal row has 3 chips all with `.rhythm-chip-exception` dashed border; exception footnote present. Zone 3 Exception Events: `.exception-grid` present with 3 cards (Context Reset, Capability Harvest, Dependency Sync); each card has Trigger + Owner + Output. Reference table: `ref-divider` label "Full Reference — all 11 signal events" present; exactly 11 `.ritual-row` entries confirmed; all 11 events visible across zones and table (Strategic Alignment, Intent Injection, Release Gate, Context Reset, Context Integrity Gate, Capability Harvest, Quality Gate, Craft Review, Drift Check, Dependency Sync, Client Signal Review). Regression clean: `nav.js?v=10` before `</body>` (line 2752); GA4 `G-MV9XNW7Y6V` in `<head>` (lines 5, 10); all 4 new CSS classes present in `<style>`; no hardcoded hex colors introduced — only `var(--*)` and `rgba(*)`.

Date: 2026-04-08
Updated by: QA
Change: Cycle 20 QA sign-off — all 6 intents PASS. Check 1: "Dependency Broker" (singular, capital D) absent from both idf.html and playbook.html; role card at line 1714 correctly reads "Dependencies Broker"; lowercase "dependencies broker" references at lines 1638 and 2464 confirmed; all exceptions (Dependency registry, Dependency Sync, Dependency alerts, dependency conflicts to broker) intact. Check 2: "QA Advocate" absent from idf.html prose; "Quality Advocate" confirmed in role card description (line 1667), Craft Review ritual output (line 2335), Intent Injection ritual output (line 2317), and Deploy gate card (line 1823). Check 3: "IDF replaces scheduled ceremonies" paragraph at line 2050; two-loop paragraph at line 2052; THREE-ZONE DIAGRAM comment at line 2054 — ordering correct. Check 4: Monitor SIGNALS card (line 1832) opens with "Monitoring is a continuous zone — it runs from the moment the first flag goes ON and never stops"; five signals list intact; "PO flips flag ON" opening absent. Check 5: Section 07 opening paragraph (line 2392) names "Persistent Memory" as concept; old "produce and consume a small set of persistent files" phrase absent; "stale artifact" warning present. Check 6: Three ref-zone-headers confirmed — Slow Loop (line 2280, 2 rows), Fast Loop (line 2300, 6 rows), Continuous & Exception (line 2356, 3 rows); total 11 rows. Regression clean: GA4 tag G-MV9XNW7Y6V at lines 5 and 10; nav.js?v=10 at line 2860 before </body> at line 2861; no hardcoded hex colors introduced.
