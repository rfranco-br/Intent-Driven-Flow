# **Chapter 2:** Outcomes, Not Output

*Draft 5 · problem-and-solution order*

### The roadmap that describes itself

Open your roadmap, pick any item, and ask what it's for.

In most organizations you'll hear the item restated. "Saved payment methods" is for "letting customers save payment methods." Push once more, and ask what changes for a customer and how you would know, and you'll get a shrug or a story someone invented four seconds ago.

Your people are competent, and I'd blame the format: it produces this answer by design.

### The ticket was built for a scarce executor

A ticket allocates work. It tells one person what to do next, with enough precision that they can start without asking. Its whole design follows from one assumption: the person who will execute it is the expensive, scarce part of the system.

That assumption held for fifty years, and I don't think it holds now.

Precise instruction has become the fast part. An agent will break a goal into tasks faster and in more detail than your best analyst, and it will do it again another way if you don't like the first attempt. The hard part, and now the whole job, is knowing whether the goal was worth pursuing. You have automated the production of the artifact your process is organized around, and your process still runs as if you hadn't.

### Intents

An intent states two things. First, what needs to be true for a customer that isn't true today. Second, how you will know it happened.

It leaves out what to build, on purpose, and that omission makes people uncomfortable.

| **Ticket** | Add a saved-address field to the checkout form. |
|---|---|
| **Intent** | Returning customers can complete checkout without re-entering information they've already given us. We'll know it worked when repeat-checkout completion rises and support contacts about re-entering details fall. |

The intent runs longer. It is also the only one of the two that can be wrong in a way anybody would notice.

### The intent matters more as execution gets easier

The intuition runs the other way, and it is a reasonable one: if building takes no effort, you can build something else when you get it wrong.

The arithmetic disagrees. When the effort of building the wrong thing falls, you build more wrong things. The work it used to take no longer protects you.

Under the old economics, you killed bad ideas in estimation. Someone said "that's six weeks," and the room reconsidered. That filter is gone. Six weeks became an afternoon, and an afternoon doesn't trigger anyone's scrutiny. You lose your cheapest defense against building things nobody needed at the moment your capacity to build them multiplies.

I don't see anything that replaces that filter on its own. You have to put one back on purpose, and you have to place it where someone states the outcome, because estimation no longer catches anything.

### What this buys you

**Better solutions than the one you'd have specified.** When you say what needs to be true instead of what to build, the agents and engineers doing the work can find approaches you didn't consider. I suspect the saved-address field is often the wrong answer, and the right one is to stop asking for the address twice. A ticket rules that out. An intent leaves it open.

**A stopping condition.** "Build the thing" ends when the thing exists. "Make this true for customers" ends when it's true, which might take three attempts or might prove impossible. You want to know both, and a ticket-shaped system shows you neither.

**The ability to kill work honestly.** Cancel a ticket and it looks like a failure. Close an intent as “*not achieved”* and you can treat it as information, because the intent always allowed that it might not work. By changing a format, you change what your culture permits.

### What it costs

Writing a good intent is harder than writing a ticket, and you have probably trained nobody to do it. It requires knowing what customers need and committing to a measurable claim about it in writing. Many excellent backlog managers struggle with this, and finding out makes everyone uncomfortable.

It also exposes work with no reason behind it. Some items sit on your roadmap because an executive asked, because they sat on last year's roadmap, or because a competitor has them. When you force an outcome statement onto that work, the missing reason shows up in writing, in front of people. Expect resistance that has nothing to do with the format.

Some work has no customer outcome, and if you pretend otherwise you produce fiction. A compliance mandate, a certificate rotation and a database migration ahead of end-of-life are obligations. Force them into an intent template and you generate the ceremonial nonsense that discredits a framework. Say which work serves an outcome and which meets an obligation, govern the two differently, and don't let anyone dress the second up as the first.

Between the two sits a third kind of work: the enabler. A new payments API, a data platform or an authentication service changes nothing a customer sees, yet some intent can't happen without it. The rule I'd use is that an enabler borrows its direction and its confirmation from the intents it serves. Before anyone builds it, someone names the intents it unlocks, and it counts as confirmed when those intents are. If nobody can name one, it is either an obligation, and should be called that, or work nobody needs yet. This follows from the argument of the book, not from data, so treat it as reasoned.

It also slows the front of the process down, on purpose. While you decide whether something is worth doing, nobody builds, and in an organization newly impressed by how fast agents produce things, that will feel like regression. You'll spend a while arguing that it isn't.

### Why this chapter is here

When something goes wrong, someone eventually asks who approved the work, and chapter 6 shows how rarely anyone can answer.

Part of the reason is that you had nothing to approve. You can't approve "add a saved-address field" in any meaningful way. You can only confirm that it sounds reasonable. You can approve a claim about the world: this will become true for customers, and here's how we'll know. Somebody can accept that claim, reject it, or answer for it.

The rest of this book depends on having something at the top of the loop worth governing.

### Questions for your teams this week

- Take three items from the current roadmap. For each, what has to change for a customer, and how would we know it happened?
- When did we last stop work because the outcome wasn't materializing, as opposed to because priorities shifted?
- Who writes our intents, and has anyone taught them how?
- How much of the current roadmap is obligation and how much is outcome? Do we govern the two the same way?
