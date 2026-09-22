# The Book

Working drafts for the leadership-facing book. **This folder is the source of truth — git is the version history.**

## Status

| Item | State |
|---|---|
| Thesis | ✅ *When execution becomes free, judgment becomes the bottleneck — so govern the judgment.* |
| Voice | ✅ Register B ("The Operator") — rules in `bible.md` |
| Chapter map | ✅ 13 chapters, 3 parts — `bible.md` |
| Language | ✅ English first; translate a stable product later |
| **Name** | ⏳ open — *The Judgment Layer* recommended |
| Drafted | ✅ **Draft 3** (22 Sept 2026) — stop-slop pass over introduction + 13 chapters, ~16,400 words, ~71 min read. Draft 2 archived in `drafts/draft-2/`. |
| Voice | ✅ Draft 2 applied Roberto's Part I review. Em dashes 11.4 → **0.7 per 1,000 words**. American spelling. Effort, not cost. Hypothesis framing throughout. Every source linked. |
| Verification | First full pass done 19 Aug 2026 — 2 claims retired, 1 error corrected |
| Next | Roberto reads Draft 3 end to end against Draft 2 (and Draft 1 in Drive), then decides whether to retire the old drafts. Then: the name, site rebuild. |

## Files

| File | Purpose |
|---|---|
| `bible.md` | Thesis, doctrine, voice rules, chapter map. **Everything is written against this.** |
| `rewrite-plan.md` | Positioning, competitive landscape, product architecture, phasing |
| **`MANUSCRIPT.md`** | **The whole book assembled in order — read this one.** Regenerate with `assemble.py` after chapter edits. |
| `ch00-introduction.md` | the Driver and the Pilot; the shared assumption |
| `ch01-pilot-never-scaled.md` | what didn't scale was judgment |
| `ch02-instruments-went-dark.md` | bandwidth metrics measuring an abundant resource |
| `ch03-batch-problem.md` | deployment frequency *fell*; batch size is blast radius |
| `ch04-who-approved-this.md` | governance was a side effect of slowness |
| `ch05-outcomes-not-output.md` | the intent as unit of work |
| `ch06-confirmed-is-done.md` | delivery and value are two events |
| `ch07-deploy-is-not-release.md` | the switch as governance instrument |
| `ch08-where-judgment-cant-be-delegated.md` | the doctrinal centre |
| `ch09-memory-is-capital.md` | context as an asset that depreciates |
| `ch10-from-demo-to-scale.md` | the maturity model, promoted from playbook P3 |
| `ch11-how-youll-know.md` | six metrics, and how each gets faked |
| `ch12-what-it-costs.md` | the consolidated ledger; who shouldn't do this |
| `ch13-where-to-start.md` | one move, and what we don't know |
| `verification.md` | Fact-check trail — every statistic, its source, and its status |
| `drafts/draft-2/` | Draft 2 as it stood on 2 Sept 2026, kept for comparison until Roberto retires it |
| `drafts/stop-slop-trial-part1/` | The first stop-slop trial on Part I (superseded by Draft 3) |

## Two tracks

**Track A — the book.** Leadership audience: CIO, transformation lead. Creates awareness of what generates value. Does not dictate practice.

**Track B — IDF for Teams.** A first-class secondary product with its own front door, for teams who want to implement. The current `idf.html` is the seed. Vocabulary flows downward from the book, never upward.

## Rules of the road

- Nothing is published until it passes the verification pass. Every number gets a source.
- Costs are stated in every chapter. Uncertainty is admitted where it exists.
- If a chapter doesn't trace back to the thesis in one step, it doesn't belong in the book.
