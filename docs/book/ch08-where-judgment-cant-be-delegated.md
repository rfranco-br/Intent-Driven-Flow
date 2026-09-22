# Chapter 8: Where Judgment Can't Be Delegated

*Draft 3 · stop-slop pass*

---

### The question that has no owner

Somewhere in your organization right now, an agent is writing code that will reach a customer.

Ask who is accountable for that and you will get an answer. Ask at which moment a person applied judgment to it, judgment and not an approval or a signature, and the answer gets vague.

Your people aren't careless. Nobody ever designed the moments where judgment used to happen. They came as side effects of human slowness. A developer thought about whether a ticket made sense because she had to read it before she could start. A reviewer noticed the feature was wrong because reading the diff took forty minutes and gave him time to think. A release manager caught the risky change because the deploy was on Thursday and there was a meeting.

None of those moments were governance. They were friction, and they produced judgment as a by-product. Agents removed the friction, and you lost the by-product with it.

### A map, with no procedure attached

This chapter gives you no meeting to schedule, no ceremony to adopt and no RACI matrix.

It gives you a map of the moments where I believe human judgment is non-negotiable: the places where, if you leave judgment out, you get a specific and predictable failure. You decide where to place those moments in your delivery flow, what to call them, how formal to make them and how many to run. A regulated bank and a twelve-person product team should decide differently.

I am describing what must be true, and your calendar stays yours. The distinction matters. Organizations adopted the frameworks that dictated every step as theater and dropped them as overhead. The frameworks people still use twenty years later named the thing that mattered and left the implementation alone.

### The four moments

| Judgment | The question | What breaks without it |
|---|---|---|
| **Direction** | Is this worth doing? | The wrong thing, built perfectly, fast |
| **Fitness** | Is this good? | Passing tests, failing customers |
| **Exposure** | Should customers see it now? | Risk arrives on someone else's schedule |
| **Confirmation** | Did it work? | Output counted as outcome, forever |

You met two of these already, exposure in chapter 7 and confirmation in chapter 6. The other two are where most organizations have no cover today.

The status of this list needs stating. Four is the number that held up across each scenario I tested it against, and that doesn't prove four is complete. Chapter 13 says more.

### Direction: is this worth doing?

This one runs against intuition.

The instinct says that when building takes no effort, deciding what to build matters less, because you can build something else. The arithmetic says the opposite. The effort of building the wrong thing fell, so you build more wrong things. Difficulty no longer protects you.

Under the old economics, you killed a bad idea in estimation. Someone said "that's six weeks," and the room reconsidered. That filter is gone. Six weeks became an afternoon, and an afternoon doesn't trigger anyone's scrutiny.

Without this judgment, the failure looks like productivity. Teams are busy, output is high, features ship, and none of it moves anything. That makes it the most expensive failure mode in the book: you can't see it as a failure.

Agents will tell you whether something is technically feasible. The judgment you need asks whether the work changes anything that matters to a customer, and how you would know. That question needs someone who owns the outcome. Someone who owns the backlog can't answer it.

### Fitness: is this good?

This trap catches sophisticated organizations more often than naive ones.

Automated verification has become excellent. Tests pass, security scans clear, performance stays within budget, coverage goes up. The dashboard shows green, and the feature is wrong in a way no instrument could detect, because the instruments check whether the code does what it says. None of them checks whether what it says is worth doing.

Someone has to use the thing. Reading a report about it won't do, and neither will reviewing the diff. Open it, use it as a customer would, and form an opinion. The work is unglamorous and it scales badly. Organizations that have adopted AI heavily skip this judgment more than any other, because everything upstream got so fast that stopping to use something feels like the bottleneck.

It is the bottleneck, and it's the one you keep.

### A warning about delegating this to AI

The obvious efficiency is to have an agent review the agent. It works up to a point, and you reach that point sooner than you expect.

I can be specific, because we ran the experiment on ourselves. We built this framework using this framework, with agents executing, judgment moments in place, and a QA function reviewing each cycle and logging the result. We logged thirteen cycles, and thirteen out of thirteen passed.

That result tells you the review function had no incentive, no independence and no standing to fail anything. The reviewer and the reviewed sat inside the same system, optimizing for the same completion signal. It caught nothing because it was never going to catch anything.

Automated review multiplies the volume of things you can check. I don't think it replaces the moment when someone whose judgment is independent of the work looks at the work and is willing to say no. A gate that has never failed anything is only recording what passed through it. If your automated review pass rate sits near a hundred percent, treat that as a finding, and don't celebrate it.

### Exposure and confirmation, briefly

Chapter 7 made the case for exposure: deployment and release are separate events, and the decision to let customers see something is a judgment with a named owner. It belongs on the same map as the other three. It is a governance decision, and you shouldn't file it as a devops practice.

Confirmation belongs to chapter 6, and organizations miss it more often than the other three. Someone has to look, later, at whether the thing achieved what it was supposed to achieve, and be willing to say it didn't. Without that, you mistake output for outcome for good, and you run a faster and faster machine for producing changes of unknown value, with no feedback loop at all.

### What it costs

Judgment doesn't scale, and you have to stop pretending it will. The rest of your delivery system now scales with compute. This part scales with attention, which is finite and expensive and belongs to your most senior people. A plan that expects to find efficiency here is a plan to remove the judgment.

Someone has to be willing to be unpopular. A judgment moment that never rejects anything is decoration. You need real people saying no to real work that real colleagues have finished, more than once, and you need to support them when they do. If your culture punishes that, no framework will save you, and I'd bet on this failure mode above all others.

It will feel like friction, because it is friction. You are putting back, on purpose, a constraint your tooling investment removed, and people will ask you why. The constraint you removed was an accident and the one you're adding is a choice, and you will have to make that argument more than once.

And you will place these moments wrong at first. Put in too many and you've rebuilt the change advisory board with better branding. Put in too few and you govern nothing. Each team finds its right number by trying, and the number will differ from team to team.

### Why this chapter is here

Chapter 4 asked who approved the work and found that nobody could answer. This chapter is my answer: a map of where the question is legitimate. It gives you no process that produces an approver.

The rest of this book follows from the map. Outcomes over output is a direction judgment. Confirmed-not-shipped is a confirmation judgment. The release switch is an exposure instrument. The four moments are the framework, and the rest is implementation.

### Questions for your teams this week

- At which moment does a person decide a piece of work is worth doing, and what happens if they say no?
- When did someone last use a feature before customers did, as opposed to reading a report about it?
- What is our automated review pass rate? If it's near 100%, what has it ever caught?
- Who is allowed to reject finished work, and when did they last do it?
- For the last thing we shipped, who confirmed it achieved anything, and when?
