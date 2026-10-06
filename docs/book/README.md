# The Book

Working drafts for the leadership-facing book. **This folder is the source of truth — git is the version history.**

## Status

| Item | State |
|---|---|
| Thesis | ✅ *When execution becomes free, judgment becomes the bottleneck — so govern the judgment.* |
| Voice | ✅ Register B ("The Operator") — rules in `bible.md` |
| Chapter map | ✅ 13 chapters, 5 parts, problem next to solution — `bible.md` |
| Language | ✅ English first; translate a stable product later |
| **Name** | ⏳ open — *The Judgment Layer* recommended |
| Drafted | ✅ **Draft 5** (6 Oct 2026): problem-and-solution order, Roberto's full review, light voice pass (`beto-voice` skill). Drafts 2 and 4 kept in `drafts/`. Review doc in Drive: IDF — Book / Draft 5. |
| Voice | ✅ Draft 2 applied Roberto's Part I review. Em dashes 11.4 → **0.7 per 1,000 words**. American spelling. Effort, not cost. Hypothesis framing throughout. Every source linked. |
| Verification | First full pass done 19 Aug 2026 — 2 claims retired, 1 error corrected |
| Next | The name; decide book vs. article series (each part stands alone); site rebuild around the book. |

## Files

| File | Purpose |
|---|---|
| `bible.md` | Thesis, doctrine, voice rules, chapter map. **Everything is written against this.** |
| `rewrite-plan.md` | Positioning, competitive landscape, product architecture, phasing |
| **`MANUSCRIPT.md`** | **The whole book assembled in order — read this one.** Regenerate with `assemble.py` after chapter edits. |
| `ch00-introduction.md` | the Driver and the Pilot; the shared assumption; where I'm writing from (CI&T, IDF) |
| `ch01-the-pilot-that-never-scaled.md` | Part I: what didn't scale was judgment |
| `ch02-outcomes-not-output.md` | Part II: the intent as unit of work; obligations and enablers |
| `ch03-shipping-is-not-done-confirmed-is-done.md` | Part II: delivery and value are two events |
| `ch04-the-batch-problem.md` | Part III: batch size is blast radius |
| `ch05-deploy-is-not-release.md` | Part III: the switch as governance instrument |
| `ch06-who-approved-this.md` | Part IV: governance was a side effect of slowness |
| `ch07-where-judgment-can-t-be-delegated.md` | Part IV: the four moments, the doctrinal centre |
| `ch08-your-system-s-memory-is-capital.md` | Part IV: context as an asset that depreciates |
| `ch09-your-instruments-went-dark.md` | Part V: bandwidth metrics measuring an abundant resource |
| `ch10-how-you-ll-know-it-s-working.md` | Part V: six metrics, BCP, DORA for work no customer sees |
| `ch11-from-demo-to-scale.md` | Part V: the maturity model |
| `ch12-what-it-costs.md` | Part V: the consolidated ledger; who shouldn't do this |
| `ch13-where-to-start-and-what-we-don-t-know.md` | Part V: one move, and what we don't know |
| `verification.md` | Fact-check trail — every statistic, its source, and its status |
| `drafts/draft-4/`, `drafts/draft-5/`, `drafts/voice-trial/` | Draft 4 (voice pass), Draft 5 export, and the ch 1 voice trials |
| `drafts/draft-2/` | Draft 2 as it stood on 2 Sept 2026, kept for comparison until Roberto retires it |
| `drafts/stop-slop-trial-part1/` | The first stop-slop trial on Part I (superseded by Draft 3) |

## Two tracks

**Track A — the book.** Leadership audience: CIO, transformation lead. Creates awareness of what generates value. Does not dictate practice.

**Track B — IDF for Teams.** A first-class secondary product with its own front door, for teams who want to implement. The current `idf.html` is the seed. Vocabulary flows downward from the book, never upward.

## Rules of the road

- Nothing is published until it passes the verification pass. Every number gets a source.
- Costs are stated in every chapter. Uncertainty is admitted where it exists.
- If a chapter doesn't trace back to the thesis in one step, it doesn't belong in the book.
