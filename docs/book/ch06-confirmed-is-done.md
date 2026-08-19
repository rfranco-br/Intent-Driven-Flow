# Chapter 6 — Shipping Is Not Done. Confirmed Is Done.

*Draft 1 · Register B · ~1,350 words*

---

### The question that ends the meeting

Your annual review deck says the team delivered forty-seven features.

Ask which of them worked, and watch what happens to the room.

Someone will name two. Both will be the ones with obvious success stories that everybody already knows. For the other forty-five, the honest answer is that nobody has looked, and there is no mechanism by which anybody would have.

### Every delivery system stops measuring at the wrong moment

Look at where "done" fires in your process. It fires when the work is delivered — merged, deployed, released, marked complete. Every tool you own is built this way. Every report you receive counts things that reached that state.

**This is not an oversight. It was a reasonable compromise.** For most of the industry's history, confirming an outcome took months, the team had moved on within days, and the cost of chasing it exceeded the value of knowing. So "delivered" became the proxy for "valuable," everyone understood it was a proxy, and eventually everyone forgot.

The consequence compounds quietly. Organisations accumulate an unmeasured backlog of shipped-but-unvalidated work, year after year, and the ratio is unknown because it has never been a number anyone was asked to produce.

You'll have heard the often-quoted figure that some large fraction of software features are never used. That statistic is over twenty years old, methodologically contested, and I wouldn't put weight on it. **The more damning fact is that you almost certainly cannot produce your own version of it.** The number that matters is yours, and it doesn't exist.

### Why this stopped being survivable

Under human execution, the shipping rate was low enough that the unvalidated pile grew slowly. You could ignore it for a decade and mostly get away with it.

Agents changed one side of that equation and not the other. **The rate of shipping rose. The rate of confirming didn't.** Confirmation depends on customer behaviour, which takes as long as it always did, and on someone choosing to look, which nobody has time for.

So the gap between what you built and what you know about widens every quarter, faster than before, and the primary symptom is a leadership team that feels increasingly disconnected from whether any of it is working.

### The change

**An intent stays open after the feature ships.**

It moves into a state — call it monitoring, watching, whatever your organisation will tolerate — and it stays there until one of two things happens:

- **Confirmed.** The signal moved. The thing you said would become true became true.
- **Abandoned.** It didn't, and you've decided to stop pursuing it.

Delivery is now the middle of the story rather than the end of it. The feature shipping is an event on the way, not the finish line.

### Abandoned is a legitimate outcome

This is the part that requires leadership air cover, so it's worth being blunt about.

**A portfolio with no abandoned intents is not a successful portfolio. It's a dishonest one.** If everything you attempt succeeds, your success criteria are unfalsifiable, your targets are set where you already were, or somebody is deciding what "moved" means after seeing the data.

Abandonment needs to be survivable — professionally, socially, in performance reviews. If closing an intent as *not achieved* costs someone their credibility, you will never see a single one, and the confirmation loop becomes theatre within a quarter. The behaviour you get is exactly the behaviour you make safe.

### What this buys you

**1. A number you have never had.**
What fraction of what we built actually did anything. Not delivery velocity, not a satisfaction score — the proportion of stated intentions that came true. It is the only metric in this book that answers the question your board is actually asking.

**2. Compounding judgment.**
Confirmation is the only mechanism by which an organisation learns which of its beliefs about customers are correct. Without it, twenty years of experience is one year repeated twenty times, with better tooling each cycle.

**3. Permission to stop.**
Work that isn't moving its signal can be stopped without anyone having failed, because the intent always carried the possibility. That's a large, quiet saving that never appears in any budget.

### What it costs

**It will make visible that a lot of work didn't work.** This is the real cost and everything else is secondary. The first honest confirmation cycle in an organisation is usually unpleasant, and the instinct to soften it will be immediate and come from senior people. If that instinct wins, don't bother starting.

**Someone must own the question weeks after everyone has moved on.** Confirmation happens on the customer's timeline, not the team's, and by then the team is three intents downstream. This is nobody's natural job. It has to be given to a person by name, with time protected for it, or it silently doesn't happen.

**You need instrumentation you may not have.** "How would we know" is easy to write and hard to answer if the product doesn't emit the data. Some intents will reveal that you cannot observe your own customers well enough to tell whether you helped them. That's a finding worth having, but it's a bill that arrives early.

**Attribution is genuinely hard, and the temptation to cheat is strong.** The signal moved — was it you? Or the season, the pricing change, the competitor's outage? Real attribution requires holdouts and patience; most organisations have neither. The honest posture is to state your confidence level and resist the urge to claim causation you can't support. A confirmation culture that credits itself for every improvement is worse than no confirmation culture, because it manufactures false certainty.

### Why this chapter is here

Chapter 5 gave you something worth aiming at. This is the other end of the same arc — the moment where you find out whether the aim was any good.

Between them sits everything else: the execution, the gates, the release switch. All of it is machinery for getting from a stated intention to a confirmed one. **If you only adopt two ideas from this book, adopt these two, because everything in between is optimisation and these two are the loop.**

### What to ask your teams this week

- Of everything we shipped last quarter, how many outcomes have been confirmed? Not delivered — confirmed.
- When did we last close something as *not achieved*? What happened to the person who said so?
- Who looks at whether a feature worked, and how long after release?
- For our last three releases: can we actually observe the thing we said we'd measure?
