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
| Drafted | ✅ **Complete first draft** — introduction + 13 chapters, 16,584 words, ~72 min read |
| Verification | First full pass done 19 Aug 2026 — 2 claims retired, 1 error corrected |
| Next | Roberto's full read. Then: voice/repetition pass, the name, site rebuild. |

## Files

| File | Purpose |
|---|---|
| `bible.md` | Thesis, doctrine, voice rules, chapter map. **Everything is written against this.** |
| `rewrite-plan.md` | Positioning, competitive landscape, product architecture, phasing |
| **`MANUSCRIPT.md`** | **The whole book assembled in order — read this one.** Regenerate with `assemble.py` after chapter edits. |
| `ch00-introduction.md` | Draft 1 — the Driver and the Pilot; the shared assumption |
| `ch01-pilot-never-scaled.md` | Draft 1 — what didn't scale was judgment |
| `ch02-instruments-went-dark.md` | Draft 1 — bandwidth metrics measuring an abundant resource |
| `ch03-batch-problem.md` | Draft 1 — deployment frequency *fell*; batch size is blast radius |
| `ch04-who-approved-this.md` | Draft 1 — governance was a side effect of slowness |
| `ch05-outcomes-not-output.md` | Draft 1 — the intent as unit of work |
| `ch06-confirmed-is-done.md` | Draft 1 — delivery and value are two events |
| `ch07-deploy-is-not-release.md` | Draft 1 — the switch as governance instrument |
| `ch08-where-judgment-cant-be-delegated.md` | Draft 1 — the doctrinal centre |
| `ch09-memory-is-capital.md` | Draft 1 — context as an asset that depreciates |
| `ch10-from-demo-to-scale.md` | Draft 1 — the maturity model, promoted from playbook P3 |
| `ch11-how-youll-know.md` | Draft 1 — six metrics, and how each gets faked |
| `ch12-what-it-costs.md` | Draft 1 — the consolidated ledger; who shouldn't do this |
| `ch13-where-to-start.md` | Draft 1 — one move, and what we don't know |
| `verification.md` | Fact-check trail — every statistic, its source, and its status |

## Two tracks

**Track A — the book.** Leadership audience: CIO, transformation lead. Creates awareness of what generates value. Does not dictate practice.

**Track B — IDF for Teams.** A first-class secondary product with its own front door, for teams who want to implement. The current `idf.html` is the seed. Vocabulary flows downward from the book, never upward.

## Rules of the road

- Nothing is published until it passes the verification pass. Every number gets a source.
- Costs are stated in every chapter. Uncertainty is admitted where it exists.
- If a chapter doesn't trace back to the thesis in one step, it doesn't belong in the book.
