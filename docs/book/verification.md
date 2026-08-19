# Verification Trail

Every factual claim in the book, its source, and its status. **Nothing publishes until its row reads VERIFIED.**

Status values: `VERIFIED` (checked against primary source) · `SECONDHAND` (reported by a credible outlet, primary not yet seen) · `UNVERIFIED` (needs work) · `OURS` (our own data)

| # | Claim | Used in | Source | Status |
|---|---|---|---|---|
| 1 | Engineers use AI in ~60% of their work but can fully delegate only 0–20% of tasks — the "collaboration paradox" | ch01, ch08 | Anthropic, *2026 Agentic Coding Trends Report* | SECONDHAND — get the primary report and quote the exact framing |
| 2 | >90% of teams ship in batches rather than one change at a time | ch03, ch07 | Steve Fenton, *The New Stack* (2026) | SECONDHAND — locate the underlying dataset, not the article |
| 3 | ~half of teams hold 2–10 changes waiting to deploy; ~a quarter hold 11–50 | ch03, ch07 | Same as #2 | SECONDHAND |
| 4 | Merged PRs up ~98% at high AI adoption | ch03, ch07 | Faros AI | SECONDHAND — check sample size and what "high adoption" means |
| 5 | Merged PRs up ~39% at high AI adoption | ch03, ch07 | Cursor internal study | SECONDHAND — vendor-published, disclose that |
| 6 | EU AI Act Article 50 transparency obligations apply from 2 Aug 2026; marking grace period to 2 Dec 2026 | ch04 | EU AI Act text | UNVERIFIED — confirm against the consolidated regulation, not commentary |
| 7 | High-risk obligations deferred to 2 Dec 2027 (Annex III standalone) and 2 Aug 2028 (embedded in regulated products) via Digital Omnibus | ch04 | Digital Omnibus agreement | UNVERIFIED — confirm formal adoption status; deferral may still be provisional |
| 8 | Our own dogfooding: 13 logged cycles, 13 PASS, 0 FAIL | ch08, ch13 | `tests/report.md`, this repo | OURS — verified directly |
| 9 | 208 commits, 205 within a six-week window (Mar–May 2026), peak 49 in one day | ch13 | git history, this repo | OURS — verified directly |
| 10 | Team Topologies does not prescribe a delivery method | positioning | Team Topologies (Skelton & Pais) | UNVERIFIED — confirm with a citable quote before asserting it in print |
| 11 | Skelton has extended Team Topologies to cover agents | positioning | QCon London 2026 talk; Conflux AI-native operating models page | SECONDHAND — verified the pages exist; confirm the actual claim being made before characterising it |
| 12 | The widely-quoted "large fraction of features are never used" figure | ch06 | Standish Group CHAOS (2002) | **DELIBERATELY NOT RELIED ON** — cited in the text only to dismiss it as old and contested. Keep it that way; do not let a later draft start leaning on it. |

## Standing rules

- **Vendor data gets disclosed as vendor data.** Cursor and Faros both have an interest in the number being large. Say so in the text, not just here.
- **Two independent sources or a hedge.** Where only one source exists, the sentence hedges ("one study put it near double").
- **Regulatory claims get a date stamp and a disclaimer.** Dates move. The book says "as of August 2026."
- **Our own numbers are labelled as ours** and reported with their weaknesses attached — the 13/13 is only useful because we explain why it's damning.
