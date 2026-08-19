# Chapter 5 — Outcomes, Not Output

*Draft 1 · Register B · ~1,350 words*

---

### The roadmap that describes itself

Open your roadmap. Pick any item. Ask what it's *for*.

In most organisations the answer is a restatement of the item. *"Saved payment methods"* is for *"letting customers save payment methods."* Push once more — what changes for a customer, and how would we know — and you get either a shrug or a story that was invented in the last four seconds.

This is not incompetence. It's the format working exactly as designed.

### The ticket was built for a scarce executor

A ticket is a **work allocation instrument.** It exists to tell one person what to do next, precisely enough that they can start without asking. Every feature of its design follows from one assumption: that the expensive, scarce thing in the system is the person who will execute it.

That assumption held for fifty years. It doesn't hold now.

**Precise instruction has become the cheap part.** An agent will decompose a goal into tasks faster and more thoroughly than your best analyst, and it will do it again differently if you don't like the first attempt. What has not become cheap — what has become the entire job — is knowing whether the goal was worth pursuing.

You have automated the production of the artifact your process is organised around. The process hasn't noticed.

### What an intent is

An intent states two things and nothing else:

1. **What needs to be true for a customer** that isn't true today.
2. **How you will know it happened.**

It does not say what to build. That's deliberate, and it's the part that makes people uncomfortable.

| | |
|---|---|
| **Ticket** | Add a saved-address field to the checkout form. |
| **Intent** | Returning customers can complete checkout without re-entering information they've already given us. We'll know it worked when repeat-checkout completion rises and support contacts about re-entering details fall. |

The second one is longer. It is also the only one of the two that can be wrong in a way anybody would notice.

### Why this gets more important as execution gets cheaper, not less

The intuition runs the other way. If building is cheap, who cares what we build — we'll build something else.

The arithmetic disagrees. **The cost of building the wrong thing fell, so the volume of wrong things built rises.** You are no longer protected by expense.

Under the old economics, bad ideas died in estimation. Someone said "that's six weeks" and the room quietly reconsidered. That filter is gone. Six weeks became an afternoon, and an afternoon doesn't trigger anyone's scrutiny reflex. The organisation loses its cheapest defence against building things nobody needed, at exactly the moment its capacity to build them multiplies.

Nothing replaces that filter automatically. You have to put one back deliberately, and it has to sit at the point where the outcome is stated — not at the point where the work is estimated, because nobody estimates any more.

### What this buys you

**1. Better solutions than the one you'd have specified.**
When you say what needs to be true rather than what to build, the execution layer can find approaches you didn't consider. Half the time the saved-address field isn't the answer; the answer is not asking for the address twice. A ticket forecloses that. An intent doesn't.

**2. A stopping condition.**
"Build the thing" ends when the thing exists. "Make this true for customers" ends when it's true, which might take three attempts or might turn out to be impossible. Both of those are useful to know and neither is visible in a ticket-shaped system.

**3. The ability to kill work honestly.**
You cannot cancel a ticket without it looking like failure. You can close an intent as *not achieved* and treat it as information, because the intent always contained the possibility of not working. That's a cultural unlock disguised as a formatting change.

### What it costs

**Writing a good intent is harder than writing a ticket, and nobody in your organisation has been trained to do it.** It requires knowing what customers actually need and being willing to commit to a measurable claim about it in writing. Many excellent backlog managers are not good at this, and finding out is uncomfortable for everyone.

**It exposes work that has no reason.** Some of what's on your roadmap is there because an executive asked, or because it was on last year's roadmap, or because a competitor has it. Forcing an outcome statement onto that work reveals the absence, in writing, in front of people. Expect resistance that has nothing to do with the format.

**Not all work has a customer outcome, and pretending otherwise produces fiction.** A compliance mandate, a certificate rotation, a database migration ahead of end-of-life — these are genuinely obligations rather than outcomes. Forcing them into an intent template generates the exact kind of ceremonial nonsense that discredits a framework. Say plainly which work is outcome-driven and which is obligation, govern them differently, and don't let anyone dress up the second as the first.

**It slows the front of the process down.** Deliberately. The time you spend deciding whether something is worth doing is time nobody is building, and in an organisation newly addicted to how fast agents produce things, that will feel like regression. It isn't, but you'll be arguing about it for a while.

### Why this chapter is here

Chapter 4 asked who approved the work and found nobody could answer.

Part of the reason is that **there was nothing to approve.** You cannot meaningfully approve "add a saved-address field" — you can only confirm it sounds reasonable. You can approve a claim about the world: *this will become true for customers, and here's how we'll know.* That's a proposition somebody can accept, reject, or be accountable for.

Everything in the rest of this book depends on there being something at the top of the loop worth governing.

### What to ask your teams this week

- Take three items from the current roadmap. For each: what has to change for a customer, and how would we know it happened?
- When did we last stop work because the outcome wasn't materialising — not because priorities shifted?
- Who writes our intents, and has anyone ever taught them how?
- How much of the current roadmap is obligation rather than outcome? Are we governing those the same way?
