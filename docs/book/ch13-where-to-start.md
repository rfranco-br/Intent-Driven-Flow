# Chapter 13 — Where to Start, and What We Don't Know

*Draft 1 · Register B · ~1,450 words*

---

### One move, not a programme

The instinct after a book like this is to design an adoption plan. Resist it. Adoption plans require approval, which requires consensus, which requires meetings, and the whole thing dies in a steering committee while the problem it addressed carries on getting worse.

**Do one thing. This week. It needs no permission and no budget.**

### Measure how much finished work is sitting unreleased right now

Not how fast you build. Not how many changes you merge. **How much completed, deployed, working software is sitting in production that no customer can see — and how long the oldest piece has been there.**

Most organisations cannot produce this number, which is itself the finding. Nothing in a standard toolchain reports it, because the entire toolchain is built around the assumption that deploying and releasing are the same event.

Getting it usually takes a few days of someone's time and a conversation with two or three engineers. Do that before anything else, for four reasons.

**It's a real number about your organisation**, not a claim from a book. Nobody can argue with it, and the argument you'd otherwise be having — whether any of this applies to you — is settled by the answer.

**It's almost always worse than expected.** In an organisation that just invested heavily in going faster, discovering a substantial queue of finished-but-invisible work is the most efficient possible route to urgency.

**It points directly at the cheapest fix in this book.** Chapter 7 requires no reorganisation, no new roles, and no purchase — and it's the intervention that queue responds to.

**It establishes the baseline** for the only metric that will tell you whether any of this is working.

If the number comes back small — days rather than weeks, nothing stuck — that's real information too. Your constraint is somewhere else, and chapters 5, 6 and 8 matter more to you than chapter 7.

### Then, the second move

Once you have the number and it has had its effect, run **one intent** end to end.

Pick something small and real. Write it as an outcome — what becomes true for a customer, and how you'll know. Name a person for each of the four judgment moments. Deploy behind a switch. Have someone actually use it before customers do. Let a named person authorise exposure. Then, weeks later, go back and confirm whether the outcome happened.

One. Not a pilot programme, not a team-wide rollout. **You are looking for where it breaks**, and it will break somewhere specific to your organisation — usually at confirmation, because nobody is left who remembers the intent.

That breakage is the most valuable output of the whole exercise. It tells you which chapter of this book is about your actual problem.

### What we don't know

This is the shortest chapter section in the book and the one I'd most want you to read.

Everything here is derived from a framework in active use, current industry telemetry, and reasoning from the thesis. It is not derived from a controlled study, a large sample of adopting organisations, or longitudinal data — **because none of those exist yet, for this or for any competing approach.** Anyone telling you otherwise about AI-era delivery governance in 2026 is over-claiming. Treat this list as the standard I'd like to be held to.

**We ran this on ourselves and the gate never failed.** This framework was built using this framework — agents executing, judgment moments in place, a review function logging every cycle. Thirteen cycles, thirteen passes, zero rejections. That is not a success rate; it's a review function with no independence and no standing to fail anything. We caught it because we went looking. **The uncomfortable implication is that our own dogfooding validated the mechanics and told us nothing about whether the judgment worked** — which is exactly the failure chapter 8 warns you about, occurring in the project that wrote chapter 8.

**We don't know if the four judgment moments are the right four.** Direction, fitness, exposure, confirmation held up across every scenario we tested them against. That's not the same as being complete. There may be a fifth that becomes obvious in a domain we haven't worked in — regulated medical devices, safety-critical systems, anything with a physical failure mode.

**We don't know how much of the current data is transitional.** The telemetry showing review times exploding and incidents tripling describes organisations mid-adoption, using tooling that changed twice while they were using it. Some of that is a genuine structural effect. Some is the friction of transition and will fade. We can't yet separate them, and anyone who claims to is guessing.

**We don't know the size ceiling.** The reasoning here is about decision rights and information flow, which usually degrade with scale in ways that aren't visible until they do. This has not been tested at fifty thousand people. It may need something we haven't thought of.

**We don't know what parallel agent teams do to this.** Multiple agents working simultaneously against shared state changes what "one iteration" means, and probably changes what the judgment moments attach to. The four moments still seem right. Their placement may not be.

**And the ground is moving underneath all of it.** Model capability, regulation, and industry practice are all changing faster than a book can. The dates in chapter 4 moved once during the writing of this one. Read the argument; check the numbers.

### What would change my mind

The claim most likely to be wrong is that **judgment can't be delegated to automated review.** It's central, it's the load-bearing assumption in chapter 8, and it's the one I'd expect to erode first.

Automated review is already substantially better than it was, and 25% of pull requests are now reviewed by agents. If a review function emerges that reliably rejects work its own system produced — that has genuine independence rather than simulated independence — a large part of chapter 8 needs rewriting.

I don't think that's close. Independence is a structural property, not a capability one, and a reviewer optimising for the same completion signal as the producer will converge on approval regardless of how capable it becomes. But that's an argument, not evidence, and I'd rather say so than pretend it's settled.

### The one-sentence version

If you take nothing else:

> **When execution becomes free, judgment becomes the bottleneck — so govern the judgment.**

Everything else in this book is a consequence. The intent as the unit of work, the release switch, the four moments, the maturity model, the metrics — all of it exists to put human judgment where it matters and remove it from where it doesn't.

Your organisation has spent the last two years making execution cheaper. That worked. The question now is whether you've done anything at all about the thing it made scarce.

### What to ask yourself this week

- How much finished work is invisible to customers right now, and how old is the oldest piece?
- If I ran one intent end to end next month, where would it break?
- Which claim in this book am I least convinced by — and what evidence would settle it?
- Am I prepared to find out that some of what we shipped last year did nothing?
