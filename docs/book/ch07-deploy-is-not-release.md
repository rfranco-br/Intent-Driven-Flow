# Chapter 7 — Deploy Is Not Release

*Draft 1 · Register B · ~1,300 words · voice locked from the two-register test*

---

### The two dashboards that don't agree

Nine months after the AI budget was approved, most CIOs are looking at two numbers that contradict each other.

**Engineering output is up.** More code, bigger changes, more merged work.

**Customer-visible change is not.** Nothing is reaching customers at a rate that would explain the first number.

Most organisations assume this is a review problem — AI writes more, review can't keep up, the queue is in code review. That diagnosis is half right, and the half it gets wrong is the expensive half.

### What the measurements say

Faros AI analysed roughly two years of telemetry from **22,000 developers across more than 4,000 teams**. The picture is specific enough to act on.

| What happened | Change |
|---|---|
| PR merge rate per developer | +16.2% |
| Average PR size | **+51.3%** |
| Median time to first review | **+156.6%** |
| Median time in review | +441.5% |
| PRs merged with **no review at all** | **+31.3%** |
| Deployments per week | **−11%** |
| Lead time, commit to production | **+480.4%** |
| Incidents per PR | **+242.7%** |

Read that column twice.

The volume of merged work barely moved — **+16%**. What exploded was the *size* of each change, the time it sits in review, and the share that skips review entirely. Then, at the end of the pipeline, deployments per week actually **fell**, and the time from commit to production went up nearly **fivefold**.

### The diagnosis that's half right

Review genuinely is under strain — the review numbers are real and they are severe. That half of the conventional diagnosis holds.

But the fix everyone reaches for follows from the other half, and the other half is wrong. If review were the whole constraint, clearing it would release the work. It doesn't. **Deployment frequency went down while output went up.** Work that has already cleared review is still not reaching customers.

Something downstream of review is holding it, and it isn't capacity. **You increased flow into a valve that opens on a fixed schedule, and the queue behind the valve grew.**

That is a plumbing problem, not a code quality problem — and the last row of that table is the bill. Incidents per PR up **243%** is what happens when larger, less-reviewed changes arrive at customers in bigger batches. Batch size and blast radius are the same number viewed from different ends.

### The fusion nobody questions

Two events have been welded together for the entire history of the industry:

1. **Deployment** — code reaches production.
2. **Release** — a customer can see it.

They were fused because for a long time there was no way to separate them. If the code was on the server, it was live.

Everything downstream follows from that fusion: release windows, change advisory boards, Thursday-night deploys, rollback plans. The whole apparatus of release management exists to manage one irreversible moment.

**They are not the same event, and haven't needed to be for years.**

### What separation looks like

- Code reaches production **continuously**, as soon as it's built and verified.
- It arrives **switched off** — invisible to every customer.
- It sits in the real environment, running on real infrastructure, provably deployable.
- Later, on its own timeline, **a named human decides customers should see it** and flips it on.
- If it goes wrong, they flip it off. Recovery is a decision, not a deployment.

Your engineers will say this is feature flagging and that they already do it. Many do — as a technical convenience for merging unfinished work.

**That is not what this is.** The mechanism is the same. The ownership is not. This is a governance instrument, and the difference is who holds it and what they're accountable for.

### Three things this buys you

**1. Risk decouples from speed.**
The trade-off you've been asked to make since your first agile transformation stops existing. Teams build and deploy as fast as they can, continuously, because none of it is visible. Care is applied at a different moment, to a different question, by a different person.

**2. The decision becomes attributable.**
In the fused model nobody *decides* to expose a feature — exposure is a side effect of a deployment scheduled for other reasons. Ask who authorised a change reaching customers and you get a deployment ticket. That is not an answer.

Separate them and someone actively decides, in a moment that can be named, dated, and attached to a person. That's the difference between a governance model and a hope — and it's what auditors and regulators will ask you for.

**3. The batch drains.**
Finished work stops waiting on the deployment calendar and starts moving on a human decision that takes seconds, one item at a time. That queue was never waiting for engineering. It was waiting for permission, and permission had been welded to a technical event.

### What it costs

Name these, because they're why teams abandon it.

**Switches accumulate.** Every switch is complexity in the code and state in someone's head. Unmanaged, they become debt nobody will touch — dead switches nobody dares delete because nobody remembers what they gated. A switch is live, watched, or removed. Allow a fourth state and you'll be unpicking it in two years.

**Someone must own it.** Not a committee. A person, named, reachable, accountable for exposure. This is the hardest part — it's a real transfer of authority, and the recipient usually needs persuading that they want it.

**Some systems can't do it yet.** Monoliths without a configuration layer, mobile apps behind an app store, migrations that can't run ahead of their code. Where that's true, this is engineering work before it's governance work.

That last constraint is smaller than it looks. Measure it rather than assume it. Most delivery surfaces are switchable within a quarter; a stubborn remainder never will be. That's fine — it needs to be known and governed differently, not allowed to set the cadence for everything else.

### Why this chapter is here

**It is the cheapest change available with the largest governance return.**

No reorganisation. No new roles. No training programme. No meetings. A technical capability most teams partly have, plus one transfer of authority.

It converts the most dangerous moment in software delivery — the irreversible, scheduled, all-at-once exposure of accumulated work — into something reversible, continuous, and owned.

The judgment was never in the deployment. It was always in the exposure. The fused model made it invisible, and therefore impossible to govern.

### What to ask your teams this week

- What percentage of our delivery surface can be exposed independently of deployment?
- Who, by name, decides that a finished feature becomes visible?
- How long does finished work currently wait between "done" and "customers can see it"?
- How many switches are live right now, and when did we last remove one?

---

*Sources: all figures from Faros AI, "The Acceleration Whiplash," AI Engineering Report 2026 — 22,000 developers, 4,000+ teams, ~2 years telemetry, Spearman's rank correlation, p < 0.05. Verified against the primary report. Disclose in the text that Faros sells engineering-intelligence tooling. See `verification.md`.*
