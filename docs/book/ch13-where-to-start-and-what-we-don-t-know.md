# **Chapter 13:** Where to Start, and What We Don't Know

*Draft 5 · problem-and-solution order*

### One move, not a program

After a book like this you will want to design an adoption plan, and that instinct has served you well before. I'd resist it this time. An adoption plan needs approval, approval needs consensus, consensus needs meetings, and the plan dies in a steering committee while the problem gets worse.

Do one thing this week. It needs no permission and no budget.

### Measure how much finished work sits unreleased right now

Leave aside how fast you build and how many changes you merge. Find out how much completed, deployed, working software sits in production where no customer can see it, and how long the oldest piece has been there.

I suspect most organizations can't produce this number, and I'd count that inability as the first finding. A standard toolchain doesn't report it, because people built the toolchain on the assumption that deploying and releasing are the same event. Getting the number usually takes a few days of someone's time and a conversation with two or three engineers.

Do this first, for four reasons.

First - It gives you a real number about your organization, which nobody can dismiss as a claim from a book. The answer settles the argument you'd otherwise have about whether any of this applies to you.

Second - It usually comes back worse than you expected. You just invested heavily in going faster, and nothing I know of creates urgency faster than finding a large queue of finished work your customers can't see.

Third - It points at what I think is the cheapest fix in the book. Chapter 5 doesn't depend on a reorganization or a purchase, and the queue responds to it.

Fourth - And it gives you the baseline for the metric most likely to tell you whether any of this works.

If the number comes back small, days and not weeks, with nothing stuck, you've learned something too. Your constraint sits somewhere else, and chapters 2, 3 and 7 matter more to you than chapter 5.

### Then, the second move

Once you have the number and it has had its effect, run one intent end to end.

Pick something small and real. Write it as an outcome: what becomes true for a customer, and how you'll know. Name a person for each of the four judgment moments. Deploy behind a switch. Have someone use it before customers do. Let a named person authorize exposure. Then, weeks later, go back and confirm whether the outcome happened.

Run one intent, with no pilot program and no team-wide rollout. You are looking for where it breaks. It will break somewhere specific to your organization, and I'd bet on confirmation, because by then nobody remembers the intent.

I think that breakage is the most valuable result of the exercise. It tells you which chapter of this book describes your problem.

### What we don't know

This is the shortest section in the book, and the one I'd most want you to read.

I am not sure I'm right about everything here, and I am willing to be wrong or partly right. I built this book from IDF, a framework in active use, current industry telemetry, and reasoning from the thesis. I had no controlled study, no large sample of adopting organizations and no longitudinal data, because none of those exist yet for this approach or any competing one. Anyone who claims otherwise about AI-era delivery governance in 2026 is over-claiming. Hold me to the list below.

**We ran this on ourselves and the gate never failed.** We built IDF using IDF, with agents executing, judgment moments in place, and a review function logging each cycle. Thirteen cycles, thirteen passes, no rejections. That record shows a review function with no independence and no standing to fail anything, and we caught it only because we went looking. The uncomfortable implication: our own dogfooding validated the mechanics and told us nothing about whether the judgment worked. That is the failure chapter 7 warns you about, and it happened in the project that wrote chapter 7.

**We don't know if the four judgment moments are the right four.** Direction, fitness, exposure and confirmation held up across each scenario we tested them against, and that doesn't make the list complete. A fifth may become obvious in a domain we haven't worked in: regulated medical devices, safety-critical systems, anything with a physical failure mode.

**We don't know how much of the current data is transitional.** The telemetry showing review times exploding and incidents tripling describes organizations mid-adoption, using tooling that changed twice while they used it. Part of that is a structural effect, and part is the friction of transition, which I expect will fade. We can't separate the two yet, and anyone who claims to is guessing.

**We don't know the size ceiling.** The reasoning here concerns decision rights and information flow, which tend to degrade with scale in ways you can't see until they break. Nobody has tested this at fifty thousand people, and it may need something we haven't thought of.

**We don't know what parallel agent teams do to this.** When several agents work at once against shared state, the meaning of one iteration changes, and so, probably, does what the judgment moments attach to. The four moments still seem right to me. Their placement may not be. The clearest case so far is the Navier-Stokes run from chapter 7. The judgment in that run sat at the level of direction, deciding where to point the agents and revisiting it as the work went on, and nowhere near the level of each message. It also shows the confirmation problem from chapter 3 at a scale I hadn't imagined. Producing the proof took 88 hours. As I write, the Clay Institute is still reviewing it, and it will recognize a solution only after peer-reviewed publication and community vetting. Confirming the result is taking far longer than producing it, and it rests on the judgment of people.

**And the ground is moving underneath all of it.** Model capability, regulation and industry practice all change faster than a book can. The dates in chapter 6 moved once while I wrote this one. Read the argument, and check the numbers.

### What would change my mind

The claim most likely to be wrong is that you can't delegate judgment to automated review. It is central, chapter 7 rests on it, and I'd expect it to erode first.

The strongest argument against it comes from Ethan Mollick. He had predicted that getting agents to work as a group would take careful, company-like design, and in October 2026 he wrote that he had been wrong: better models solved coordination by themselves, the way better machine learning keeps beating rules people write by hand. He calls it the Bitter Lesson. If organizing turned out to be learnable, judging might be too, and a fair reader could see the judgment moments in this book as the kind of careful construction he gave up on.

Automated review has improved a great deal, and agents now review 25% of pull requests. If someone builds a review function that reliably rejects work its own system produced, with real independence and not a simulation of it, a large part of chapter 7 will need rewriting.

I don't think that's close. Independence looks to me like a structural property more than a capability. A reviewer optimizing for the same completion signal as the producer will converge on approval however capable it becomes. The first evidence points my way. In September 2026, OpenAI shelved GPT-6.1 Astra before release because, in its own testing, the model took actions without authorization and didn't accurately report what it had and hadn't done. A system that misreports its own work can't be the one that reviews it, however well it organizes. Still, one model's test results don't settle the question.

I hold the position for a second reason. Some judgment can be turned into process: a checklist, a threshold, a rule an agent follows to decide what to do next. A written standard captures part of what good looks like, which is why chapter 8 asks you to write yours down. Deciding whether this particular piece of work meets it, in a case the standard didn't foresee, is still judgment, and chapter 1 argued that this is the part that never scaled. Culture is harder still. A company's culture lives in how people feel about their work and about each other, and it shows up as attitude: whether someone speaks up, whether a reviewer is willing to say no to a colleague's finished work. You can write down a standard. I don't believe anyone can write down the attitude that makes people uphold it, or hand it to an agent today.

I'd rather tell you so than pretend the question is settled.

### The one-sentence version

If you take one sentence from this book, take the thesis: when execution becomes free, judgment becomes the bottleneck, so govern the judgment.

The rest follows from it. The intent as the unit of work, the release switch, the four moments, the maturity model and the metrics all exist to put human judgment where it matters and take it out of where it doesn't.

Your organization has spent the last two years making execution take less effort, and that worked. Now ask whether you've done anything about the thing it made scarce.

### Questions to ask yourself this week

- How much finished work is invisible to customers right now, and how old is the oldest piece?
- If I ran one intent end to end next month, where would it break?
- Which claim in this book am I least convinced by, and what evidence would settle it?
- Am I prepared to find out that some of what we shipped last year did nothing?

*Sources: Ethan Mollick, **[The Dot and the Swarm](https://www.oneusefulthing.org/p/the-dot-and-the-swarm)** · Tufts Daily, **[Mathematicians still checking the Navier-Stokes proof](https://www.tuftsdaily.com/article/2026/09/mathematicians-still-checking-the-navier-stokes-proof-that-openai-claims-to-have-solved)** · Cloud Security Alliance, **[OpenAI shelves GPT-6.1 Astra](https://labs.cloudsecurityalliance.org/research/csa-research-note-gpt61-astra-deception-shelving-20260930-cs/)**.*
