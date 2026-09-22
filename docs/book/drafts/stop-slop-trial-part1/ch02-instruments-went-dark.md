# Chapter 2: Your Instruments Went Dark

*Stop-slop trial · rewritten from Draft 2*

---

### The dashboard still updates

Nothing broke, and that makes the problem hard to see.

Your delivery reports still arrive each week. Velocity holds steady or climbs, throughput is up, and your people have adopted the new tooling. The charts render with trend lines, and you read a confident weekly account of a system your reports no longer describe.

If velocity had dropped to zero, you would have replaced it within a week. It went up instead, so you kept trusting it.

### Story points measured human effort

Story points never measured value, and good practitioners said so from the start. They measured effort as a person experienced it, relative difficulty, and teams used them to forecast how much work they could take on. That made sense while human effort was the constraint, which it was for the whole history of the practice.

An agent doesn't experience effort. When an agent finishes a five-point story in four minutes, the story still counts five points and the team's velocity goes up. The arithmetic holds, and the number means nothing.

You designed your measurement system to ration a scarce resource, and you now point it at an abundant one. Velocity, burndown, capacity planning and estimation accuracy all measure bandwidth. They told you how much human attention you had and where it went. Agents took over a large share of the work those instruments tracked, and the instruments kept reporting as if nothing had changed.

### Some metrics improve as things get worse

That is worse than measuring nothing.

Faros AI studied [telemetry from 22,000 developers](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) and more than 4,000 teams. Faros sells engineering-intelligence tooling, so weigh that when you read their numbers. The method holds up well: about two years of data, with statistical significance at p < 0.05.

| On your dashboard | Underneath |
|---|---|
| PR merge rate per developer +16.2% | Average PR size +51.3%, so each unit carries more change |
| Throughput looks healthy | Median time to first review +156.6% |
| Review looks like it is keeping up | 31.3% more PRs merged with no review |
| Productivity up | Bugs per developer +54%, against +9% in the prior report |
| The codebase looks active | Code churn +861%, lines deleted against lines added |

Each entry on the left reads as success on a standard delivery report. The right column shows the same activity with the flattering frame removed.

Sit with *merged without review*. On a throughput dashboard, a PR merged without review and a PR merged after careful scrutiny count as the same event and add one to the same counter. Your reporting can't tell work someone judged from work someone waved through, and the second kind grew by close to a third.

### The signal never reached you

The numbers moved in the direction that reassures. You don't escalate a metric that is improving. If velocity had collapsed you would have called a war room by Wednesday.

The people who could see the problem weren't asked. Your engineers know that review has turned into a formality in places. The reporting line carries the metric to you and leaves the meaning behind.

And you have no meeting built for noticing. Your governance calendar has forums for reviewing performance against the metrics, and none for asking whether the metrics still refer to anything.

### The cost of fixing it

You will have a gap. If you switch off velocity before your outcome measures work, you will have less reporting than you have now for a while, and someone will ask you to justify that. You can answer that you'd rather fly with fewer instruments than wrong ones. The answer is correct, and it won't satisfy every stakeholder.

Velocity also carries political weight. Engineering has used it for twenty years to justify headcount to finance, and if you remove it without a replacement you remove a shared language between two functions that have few others. Have the replacement ready, and expect the conversation to turn on trust more than on measurement.

Outcome measures arrive later and flatter less. Bandwidth metrics update each week and mostly go up. You confirm an outcome as fast as your customers respond, and a fair share of the confirmations will come back negative. You are trading prompt, meaningless numbers for honest, late ones.

Some teams will read the change as an attack. People built careers on improving these numbers, in good faith, and they were right to do it at the time. The instruments stopped working and the people did nothing wrong. Say so, more than once, or you'll meet resistance and mistake it for skepticism.

### This chapter's place in the book

Chapter 1 argued that judgment is the constraint. This chapter argues that you can't see it.

Put the two together and you get the real danger. An organization with a real bottleneck and no instrument pointed at it accelerates in a direction nobody has checked, with a weekly report saying all is well.

Chapter 11 covers what to measure instead. It sits far from here on purpose, since the replacements make sense only after you've seen the rest of the loop. For now, accept that the reporting you trust describes a system you no longer run.

### Questions for your teams this week

- What fraction of merged PRs last quarter had no substantive human review? Can our tooling tell?
- Which of our delivery metrics would change if an agent did the work instead of a person? If none would, what are they measuring?
- Did our bug rate or incident rate move in the same period our productivity metrics improved? Has anyone put those two charts side by side?
- When did we last check whether a metric still means what it meant when we adopted it?

---

*Source: Faros AI, [The Acceleration Whiplash: AI Engineering Report 2026](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf).*
