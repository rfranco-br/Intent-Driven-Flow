# Verification Trail

Every factual claim in the book, its source, and its status. **Nothing publishes until its row reads VERIFIED.**

Status values: `VERIFIED` (checked against primary source) · `SECONDHAND` (reported by a credible outlet, primary not seen) · `RETIRED` (could not verify — removed from the book) · `OURS` (our own data)

**Last verification pass: 19 August 2026.**

---

## Verified against primary sources

| # | Claim | Used in | Source | Status |
|---|---|---|---|---|
| 1 | Engineers use AI in "roughly 60% of their work" but can "fully delegate" only "0–20% of tasks." Explicitly framed as the collaboration paradox; resolves because effective collaboration requires active human participation. Engineers delegate easily-verifiable or low-stakes tasks and retain high-level design and anything needing organisational context. | ch01, ch08 | Anthropic, *2026 Agentic Coding Trends Report* (primary PDF) | **VERIFIED** — exact wording confirmed |
| 2 | PR merge rate per developer +16.2% | ch03, ch07 | Faros AI, *The Acceleration Whiplash*, AI Engineering Report 2026 | **VERIFIED** |
| 3 | Average PR size +51.3%; files edited per PR +59.7% | ch03, ch07 | Faros AI (as above) | **VERIFIED** |
| 4 | Median time to first PR review +156.6%; average time in review +199.6%; median time in review +441.5% | ch03, ch07 | Faros AI | **VERIFIED** |
| 5 | 31.3% more PRs merged without any review; 25% of PRs reviewed by AI agents | ch03, ch07, ch08 | Faros AI | **VERIFIED** |
| 6 | Bugs per developer +54% (up from +9% in the prior report); bugs per PR +28.7% | ch02, ch03 | Faros AI | **VERIFIED** |
| 7 | Incidents per PR +242.7%; monthly incidents +57.9% | ch03, ch07 | Faros AI | **VERIFIED** |
| 8 | Deployments per week −11%; lead time commit→production +480.4% (10% of dataset) | ch03, ch07 | Faros AI | **VERIFIED** — note the 10% subset caveat when quoting |
| 9 | Code churn +861% (lines deleted to lines added per quarter) | ch02 | Faros AI | **VERIFIED** |
| 10 | Faros methodology: ~2 years telemetry, 22,000 developers, 4,000+ teams, Spearman's rank correlation, p < 0.05 | ch03 | Faros AI | **VERIFIED** |
| 11 | EU AI Act Article 50 transparency obligations apply from **2 August 2026**; four-month grace to **2 December 2026** for machine-readable marking on systems already on the market. Article 50 was **not** delayed by the Omnibus. | ch04 | artificialintelligenceact.eu; Goodwin; Jones Walker | **VERIFIED** |
| 12 | Digital Omnibus defers high-risk obligations: Annex III standalone to **2 December 2027**, AI embedded in regulated products (Annex I) to **2 August 2028** | ch04 | Gibson Dunn; Usercentrics | **VERIFIED** |
| 13 | The Omnibus is **formally adopted, not provisional** — Parliament 16 June 2026, Council 29 June 2026, signed 8 July 2026, in force **27 July 2026** | ch04 | Usercentrics (31 July 2026) | **VERIFIED** — supersedes the earlier "provisional" hedge |

## Our own data

| # | Claim | Used in | Source | Status |
|---|---|---|---|---|
| 14 | 13 logged cycles, 13 PASS, 0 FAIL | ch08, ch13 | `tests/report.md`, this repo | **OURS** — verified directly |
| 15 | 208 commits, 205 within a six-week window (Mar–May 2026), peak 49 in one day | ch13 | git history, this repo | **OURS** — verified directly |

## Retired — do not reintroduce

| # | Claim | Why it's gone |
|---|---|---|
| 16 | ">90% of teams ship in batches; ~half hold 2–10 changes, ~a quarter hold 11–50" (attributed to Fenton / The New Stack) | **RETIRED.** Could not locate a primary source in the 19 Aug 2026 pass. The Faros deployment-frequency and lead-time figures make the same argument from verified primary data. Do not reintroduce without a located dataset. |
| 17 | "PRs merged +98% (Faros) / +39% (Cursor) under high AI adoption" | **RETIRED — this was wrong.** The primary Faros report says **+16.2%** merge rate per developer. The +98% figure does not appear in it. The Cursor figure was a third-party blog summary of vendor material. Both removed. |
| 18 | The often-quoted "large fraction of features are never used" figure (Standish CHAOS, 2002) | **DELIBERATELY NOT RELIED ON.** Cited in ch06 only to dismiss it as old and contested. Keep it that way — do not let a later draft start leaning on it. |

## Needs work

| # | Claim | Used in | Status |
|---|---|---|---|
| 19 | Team Topologies does not prescribe a delivery method | positioning | UNVERIFIED — needs a citable quote before asserting in print |
| 20 | Skelton has extended Team Topologies to cover agents | positioning | SECONDHAND — pages confirmed to exist (QCon London 2026; Conflux). Read the actual argument before characterising it. |

---

## Standing rules

- **Every source carries a link.** *(Roberto, 2 Sept 2026: "we must add a link for each reference.")* Inline markdown link on first mention in each chapter, plus a sources line at the chapter foot. Applied in draft 2.

- **Vendor data gets disclosed as vendor data, in the text.** Faros sells engineering-intelligence tooling and has an interest in these numbers being dramatic. The methodology is strong and the sample is large — say both things.
- **Quote the caveat with the number.** Deployment frequency and lead time come from 10% of the dataset. If we quote them, we quote that.
- **Regulatory claims carry a date stamp.** "As of August 2026." Dates move; the Omnibus moved twice.
- **Our own numbers are labelled as ours** and reported with their weaknesses attached. The 13/13 is only useful because we explain why it's damning.
- **A number that can't be traced to a primary source doesn't go in the book.** Two claims were retired in the first pass, one of them because it was simply wrong. Assume there are more.
