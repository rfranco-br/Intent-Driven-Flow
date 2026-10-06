# Chapter 6: Shipping Is Not Done. Confirmed Is Done.

*Draft 4 · light voice pass*

---

### The question that ends the meeting

Your annual review deck says the team delivered forty-seven features. Ask which of them worked, and watch the room.

Someone will name two, the ones with success stories everybody already knows. For the other forty-five, nobody has looked, and you have no mechanism that would make anyone look.

### Your delivery system stops measuring too early

Look at where "done" fires in your process. It fires when the work is delivered: merged, deployed, released, marked complete. Your tools work this way, and your reports count work that reached that state.

This started as a reasonable compromise. For most of the industry's history, confirming an outcome took months, the team moved on within days, and chasing the answer cost more than knowing it was worth. So "delivered" became the proxy for "valuable." Everyone understood it was a proxy, and over time everyone forgot.

The consequence compounds. Year after year you accumulate an unmeasured backlog of work you shipped and never validated, and you don't know the ratio because nobody ever asked for it.

You'll have heard the often-quoted figure that some large fraction of software features go unused. The statistic is over twenty years old and methodologically contested, and I wouldn't put weight on it. The worse fact is that you probably can't produce your own version of it. The number that matters is yours, and you don't have it.

### The pile now grows faster

Under human execution, teams shipped slowly enough that the unvalidated pile grew slowly. You could ignore it for a decade and mostly get away with it.

Agents changed one side of that equation. Your teams ship faster, and they confirm at the same rate as before. Confirmation depends on customer behavior, which takes as long as it always did, and on someone choosing to look, which nobody has time for.

The gap between what you built and what you know about it widens each quarter, faster than before. You feel it as a leadership team losing touch with whether any of it works.

### The change

Keep the intent open after the feature ships.

Move it into a state, call it monitoring or watching or whatever your organization will tolerate, and leave it there until one of two things happens. You **confirm** it: the signal moved, and the thing you said would become true became true. Or you **abandon** it: the signal didn't move, and you decide to stop pursuing it.

Delivery becomes the middle of the story. The feature shipping is an event on the way to the finish.

### Abandoned is a legitimate outcome

This part needs leadership air cover, so I'll be blunt.

I read a portfolio with no abandoned intents as a dishonest portfolio. If everything you attempt succeeds, your success criteria can't fail, or you set your targets where you already were, or somebody decides what "moved" means after seeing the data.

People have to survive abandonment, professionally, socially and in performance reviews. If closing an intent as not achieved costs someone their credibility, you will never see one, and within a quarter the confirmation loop turns into theater. You get the behavior you make safe.

### What this buys you

**A number you have never had.** The share of stated intentions that came true, which tells you what fraction of what you built did anything. Delivery velocity and satisfaction scores can't tell you that. Of the metrics in this book, I think only this one answers the question your board is asking.

**Compounding judgment.** Confirmation gives an organization its only way to learn which of its beliefs about customers are correct. Without it, twenty years of experience is one year repeated twenty times, with better tooling each cycle.

**Permission to stop.** You can stop work that isn't moving its signal without anyone having failed, because the intent always carried that possibility. The saving is large, and it never appears in a budget.

### What it costs

You will see that a lot of work didn't work. That is the real cost, and the rest is secondary. Your first honest confirmation cycle will probably be unpleasant, and senior people will want to soften it right away. If they win, don't bother starting.

Someone must own the question weeks after everyone has moved on. Confirmation runs on the customer's timeline, and by then the team is three intents downstream. The job belongs to no one by default. Give it to a named person and protect time for it, or it won't happen and nobody will notice.

You also need instrumentation you may not have. "How would we know" is easy to write and hard to answer if the product doesn't emit the data. Some intents will show you that you can't observe your own customers well enough to tell whether you helped them. You want that finding, and you pay for it early.

And attribution is hard, with a strong temptation to cheat. The signal moved, but did you move it, or did the season, the pricing change or the competitor's outage? Real attribution requires holdouts and patience, and most organizations have neither. State your confidence level and resist claiming causation you can't support. I think a confirmation culture that credits itself for every improvement does more harm than having none, because it manufactures false certainty.

### Why this chapter is here

Chapter 5 gave you something worth aiming at. This chapter covers the other end of the same arc, where you find out whether the aim was any good.

Everything else sits between the two: the execution, the judgment moments, the release switch. All of it moves work from a stated intention to a confirmed one. If you adopt two ideas from this book, I'd make it these two. They form the loop, and the rest refines it.

### Questions for your teams this week

- Of everything we shipped last quarter, how many outcomes have we confirmed, as opposed to delivered?
- When did we last close something as not achieved? What happened to the person who said so?
- Who checks whether a feature worked, and how long after release?
- For our last three releases, can we observe the thing we said we'd measure?
