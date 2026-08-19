# Chapter 2 — Your Instruments Went Dark

*Draft 1 · Register B · ~1,350 words*

---

### The dashboard still updates

Nothing broke. That's what makes this difficult.

Your delivery reports still arrive. Velocity is stable or improving. Throughput is up. Adoption of the new tooling is strong. Every chart renders, every number has a trend line, and the whole apparatus continues to produce a confident weekly account of a situation it can no longer see.

**An instrument that fails loudly gets replaced. An instrument that fails silently gets trusted.**

### What story points were actually measuring

Story points were never a measure of value, and the good practitioners always said so. They were a measure of **effort as experienced by a human being** — relative difficulty, used to forecast how much a team could take on.

That's a perfectly reasonable thing to measure when the constraint is human effort, which it was, for the entire history of the practice.

Now consider what the number means when a substantial share of the work is executed by something that doesn't experience effort. A five-point story done by an agent in four minutes is still a five-point story. The team's velocity goes up. The number is arithmetically correct and semantically empty.

**Your measurement system was designed to ration a scarce resource. It is now measuring an abundant one.**

Velocity, story points, burndown, capacity planning, estimation accuracy — every one of these is a bandwidth instrument. They told you how much human attention was available and how it was being spent. Agents absorbed a large share of the thing being measured, and the instruments kept reporting as though nothing had happened.

### The dangerous part: metrics that improve as things get worse

This is worse than measuring nothing, and it's the reason this chapter exists.

Look at what the Faros AI telemetry study found across 22,000 developers and more than 4,000 teams. *(Faros sells engineering-intelligence tooling — worth knowing when reading their numbers. The methodology is unusually strong: roughly two years of data, statistical significance at p < 0.05.)*

| What your dashboard shows | What is actually happening |
|---|---|
| PR merge rate per developer **+16.2%** | Average PR size **+51.3%** — the units got bigger, not more numerous |
| Throughput looks healthy | Median time to first review **+156.6%** |
| Review is "keeping up" | **+31.3% more PRs merged with no review at all** |
| Productivity up | Bugs per developer **+54%**, up from +9% in the prior report |
| Codebase is active | Code churn **+861%** — lines deleted against lines added |

Every left-hand column entry reads as success on a standard delivery report. Every right-hand entry is the same activity seen honestly.

The one to sit with is **merged without review**. On a throughput dashboard, a PR merged without review and a PR merged after careful scrutiny are the same event. They increment the same counter. Your reporting cannot distinguish between work that was judged and work that was waved through — and one of those categories grew by nearly a third.

### Why nobody noticed

Three reasons, all structural.

**The numbers moved in the reassuring direction.** Nobody escalates a metric that's improving. If velocity had collapsed you'd have had a war room by Wednesday.

**The people who could see it weren't asked.** Engineers know that review has become a formality in places. It doesn't reach you, because the reporting line carries the metric and not the meaning.

**There was no moment designed for noticing.** Your governance calendar has forums for reviewing performance against the metrics. It has no forum for asking whether the metrics still refer to anything.

### What it costs to fix

**You'll have a gap.** Turning off velocity before the outcome measures are working leaves you with less reporting than you have now, for a period, and you will be asked to justify that. The honest answer — *I would rather fly with fewer instruments than wrong ones* — is correct and will not satisfy everybody.

**Velocity is load-bearing politically.** It is how engineering has justified its headcount to finance for twenty years. Removing it without a replacement removes a shared language between functions that don't otherwise have one. Have the replacement ready, and expect the conversation to be about trust rather than measurement.

**Outcome measures are slower and less flattering.** Bandwidth metrics update weekly and mostly go up. Confirmation of outcomes takes as long as customers take, and a meaningful fraction will come back negative. That is the trade: honest and late, or prompt and meaningless.

**Some teams will read this as an attack.** People have built careers on improving these numbers, in good faith, and they were right to at the time. The instruments stopped working; the people didn't do anything wrong. If that isn't said explicitly and repeatedly, you'll get resistance you've mistaken for scepticism.

### Why this chapter is here

Chapter 1 argued that judgment is the constraint. This chapter argues you currently have no way to see it.

That combination is the actual danger. An organisation with a real bottleneck and no instrument pointed at it doesn't drift gently — it accelerates confidently in a direction nobody has checked, with a weekly report confirming that everything is fine.

Chapter 11 covers what to measure instead. It's deliberately far away, because you need to see the rest of the loop before the replacements make sense. What matters now is accepting that **the reporting you currently trust is describing a system that no longer exists.**

### What to ask your teams this week

- What fraction of merged PRs in the last quarter had no substantive human review? Can we even distinguish that in our tooling?
- Which of our current delivery metrics would change if an agent did the work instead of a person? If the answer is "none," what is it measuring?
- Has our bug rate or incident rate moved in the same period our productivity metrics improved? Has anyone put those two charts side by side?
- When did we last ask whether a metric still means what it meant when we adopted it?
