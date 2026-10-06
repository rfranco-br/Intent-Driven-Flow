# **Chapter 5:** Deploy Is Not Release

*Draft 5 · problem-and-solution order*

### The two dashboards that don't agree

Nine months after you approved the AI budget, you are probably looking at two numbers that contradict each other.

Engineering output is up: more code, bigger changes, more merged work. Customer-visible change is flat. Your customers are not seeing change at a rate that would explain the first number.

Most organizations blame review, and you have probably heard that explanation from your own teams. AI writes more, reviewers can't keep up, and the queue sits in code review. That diagnosis is half right, and the half it gets wrong costs the most.

### The diagnosis that's half right

Review is under strain. Chapter 4 laid out the numbers: median time to first review up 156.6%, time in review up 441.5%, and 31.3% more changes merged with no review at all. That half of the conventional diagnosis holds.

The fix everyone reaches for follows from the other half, and the other half is wrong. If review were the whole constraint, clearing review would release the work. It doesn't. Deployments per week fell 11% while output rose, and lead time from commit to production went up 480%. Work that has cleared review still isn't reaching customers.

Something downstream of review holds it, and capacity has nothing to do with it. You increased flow into a valve that opens on a fixed schedule, and the queue behind the valve grew. I read this as a plumbing problem, and you pay for it in a 242.7% increase in incidents per PR, which is what you get when larger, less-scrutinized changes reach customers in bigger bundles.

### The fusion nobody questions

For the whole history of the industry, teams have welded two events together. Deployment puts code into production. Release lets a customer see it.

Teams fused them because for a long time they had no way to separate them: if the code was on the server, it was live. Release windows, change advisory boards, Thursday-night deploys and rollback plans all follow from that fusion, and they made sense while the fusion was unavoidable. You built the whole apparatus of release management to manage one irreversible moment.

Deployment and release are two events, and you have been able to separate them for years.

### Separation in practice

- Your teams push code to production continuously, as soon as they build and verify it.
- It arrives switched off, invisible to customers.
- It sits in the real environment, running on real infrastructure, proven deployable.
- Later, on its own timeline, a named person decides customers should see it and flips it on.
- If it goes wrong, they flip it off. Recovery becomes a decision instead of a deployment.

Your engineers will say this is feature flagging and that they already do it. Many do, as a technical convenience for merging unfinished work. The mechanism is the same. The ownership changes: you turn the flag into a governance instrument, and what matters is who holds it and what they answer for.

### Three things this buys you

**Risk decouples from speed.** The trade-off you've been asked to make since your first agile rollout goes away. Teams build and deploy as fast as they can, because customers see none of it. Someone applies care at a different moment, to a different question.

**The decision becomes attributable.** In the fused model nobody decides to expose a feature, because exposure happens as a side effect of a deployment someone scheduled for other reasons. Ask who authorized a change reaching customers and you get a deployment ticket, which answers nothing. Separate the two and someone decides, at a moment you can name and date, and you can attach the decision to a person. Auditors and regulators will ask you for exactly that.

**The batch drains.** Finished work stops waiting on the deployment calendar and moves on a human decision that takes seconds, one item at a time. That queue was never waiting for engineering. It was waiting for permission, and you had welded permission to a technical event.

### What it costs

These costs are why teams abandon the practice, so I'll name them.

Switches accumulate. Each switch adds complexity to the code and state to someone's head. Left unmanaged, they turn into debt nobody will touch: dead switches nobody dares delete because nobody remembers what they gated. A switch should be live, watched, or removed. Allow a fourth state and you'll spend two years unpicking it.

Someone must own it, and a committee won't do. You need a person, named, reachable, and accountable for exposure. I think that is the hardest part, because you are transferring real authority, and the person receiving it usually needs persuading that they want it.

And some systems can't do this yet: monoliths without a configuration layer, mobile apps behind an app store, migrations that can't run ahead of their code. There you face engineering work before governance work. The constraint tends to be smaller than it looks, so measure it instead of assuming it. I expect most delivery surfaces can be switchable within a quarter, with a stubborn remainder that never will be. You can live with that remainder. Know where it is, govern it differently, and don't let it set the cadence for the rest.

### Why this chapter is here

I think this is the cheapest change available with the largest governance return, and I'd start with it in most organizations.

It doesn't depend on a reorganization, new roles or a training program, though some organizations will find they need one of them anyway. You need a technical capability most teams partly have, plus one transfer of authority. With those, you convert the most dangerous moment in software delivery, the irreversible, scheduled, all-at-once exposure of accumulated work, into a decision that is reversible, continuous and owned.

The judgment always sat in the exposure, never in the deployment. The fused model hid it, and you can't govern what you can't see.

### Questions for your teams this week

- What percentage of our delivery surface can we expose independently of deployment?
- Who, by name, decides that a finished feature becomes visible?
- How long does finished work wait between "done" and "customers can see it"?
- How many switches are live right now, and when did we last remove one?

*Source: Faros AI, **[The Acceleration Whiplash: AI Engineering Report 2026](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf)**. Faros sells engineering-intelligence tooling.*
