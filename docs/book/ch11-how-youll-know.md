# Chapter 11 — How You'll Know It's Working

*Draft 2 · Register B · ~1,400 words*

---

### Six numbers, and how each one gets faked

Chapter 2 argued that your instruments went dark. This is what to put in their place, along with how each replacement will be gamed, because every metric in this chapter can be made to look good by an organization that would rather look good.

I'm giving you the gaming method alongside each one, and not out of cynicism. A metric whose failure mode you can't describe is a metric you can't trust, and you will be shown these numbers by people with an interest in them.

### 1. Intent completion rate

**What it is:** of the outcomes you set out to achieve, what proportion were confirmed as achieved, versus abandoned. This is the primary signal and the only one that answers the question your board is actually asking. Everything else in this list is diagnostic.

**How it gets faked:** by setting intents whose success is already assured, or by writing the success criterion vaguely enough that almost anything satisfies it. A completion rate near 100% is not excellence, it's a target-setting problem. Somewhere between 60% and 80% is roughly what I'd expect an organization that is genuinely attempting things to look like.

**The tell:** ask to see the abandoned ones. If there aren't any, you have the answer.

### 2. Pending-off age

**What it is:** how long finished, deployed work waits before customers can see it, measured as a median plus the age of the oldest item. This is the batch metric and the direct answer to chapter 3. It tells you whether the release switch is being used as a governance instrument or as a parking lot, and rising age means the exposure decision has quietly become a queue.

**How it gets faked:** by releasing trivial items promptly to hold the median down while the significant work sits. Watch the maximum rather than just the median.

**The tell:** the oldest item, by name. Somebody will know exactly which one it is and why it's stuck.

### 3. Time from intent to customer

**What it is:** the interval from an outcome being agreed to a customer being able to experience it. It replaces lead time and deliberately measures a longer arc, because it includes the decision-making at the front, which conventional delivery metrics exclude precisely because it's the part nobody controls.

**How it gets faked:** by logging the intent late. If intents get written the day before work starts, the clock excludes all the deliberation and the number becomes a measure of typing speed.

**The tell:** compare intent creation dates against when the conversation actually started. If they're always the same day, the clock is starting in the wrong place.

### 4. First-pass rate at each judgment moment

**What it is:** how often work clears a judgment moment without rework, tracked per moment rather than aggregated. Falling first-pass rates on direction mean your intents are ambiguous, while falling rates on fitness mean the execution layer's standards have drifted. Same shape of number, different diagnosis, which is why aggregating them destroys the signal.

**How it gets faked:** it doesn't need to be, because it fakes itself. A first-pass rate near 100% is not a healthy gate, it is a gate that has stopped functioning, and this is the single most common failure in this entire book. Our own project ran thirteen cycles with a thirteen-out-of-thirteen pass rate, which told us nothing except that the reviewer had no standing to fail anything.

**The tell:** if a judgment moment has never rejected anything, it is not a control. It is a log.

### 5. Rework cause mix

**What it is:** not how much rework, but what kind, grouped by root cause: ambiguous intent, misinterpretation by the execution layer, scope change, external change. Volume of rework tells you little, since agents make rework easy and a healthy team reworks constantly. The distribution is the signal. Concentration in one cause is actionable, because ambiguous intent is a product problem, misinterpretation is a context problem, and scope change is a governance problem. They have nothing in common except the symptom.

**How it gets faked:** by miscategorizing everything as "scope change," which is nobody's fault and requires no action.

**The tell:** a suspiciously flat distribution usually means nobody is categorizing honestly.

### 6. Escape rate

**What it is:** the proportion of things released to customers that had to be withdrawn. It is the quality signal that survives, and it pairs with pending-off age. Together they detect the two opposite failures: releasing too cautiously, where age climbs and escapes sit near zero, and releasing too carelessly, where age is low and escapes climb.

**How it gets faked:** by not withdrawing things that should be withdrawn, leaving something visibly broken rather than admitting a mistake. A low escape rate can mean good judgment or an unwillingness to reverse.

**The tell:** how long between a problem being known and the switch going off. If that's measured in days, the escape rate is fiction.

### What to switch off

Say this plainly and only once, because the argument is not really about measurement.

Velocity, story points, burndown, estimation accuracy, capacity utilization. Every one measures human bandwidth, which agents absorbed, and they will keep producing plausible numbers indefinitely. That is what makes them dangerous rather than merely useless.

The resistance you meet will not be about measurement quality. Velocity is how engineering has justified headcount to finance for twenty years, and removing it takes away a shared language between functions that have no other one. Have the replacement in place before you remove it, and expect the conversation to be about trust rather than metrics.

### What it costs

You will report less, and later. Six numbers, several of which update on customer timescales, replacing a weekly dashboard that always had something to say. That is a real reduction in reporting comfort, and it lands on you rather than on the teams.

Several of these require instrumentation you don't have. Pending-off age needs a switch registry, and rework cause mix needs someone categorizing honestly. None of it is expensive, and none of it is free.

The numbers will also be worse than what they replace, not because performance declined but because the old ones were measuring something that always went up. The first quarter of honest measurement looks like a regression and isn't. If you cannot hold that line with your own leadership, don't start, because the pressure to reintroduce a flattering metric will arrive in about six weeks.

And every one of these can be gamed. Listing the methods doesn't prevent it. What prevents it is asking for the tell rather than the number.

### Why this chapter is here

Chapter 2 took your instruments away, and this gives them back: fewer, slower, harder to fake, and pointed at the thing that actually constrains you.

The through-line is worth stating. Every metric here measures a judgment rather than an output. Did we decide the right thing, which is completion rate. Did we decide it promptly, which is intent to customer. Are our judgment moments real, which is first-pass rate. Are we exposing work deliberately, which is pending-off age and escape rate. Where is our judgment failing, which is the rework mix.

That's the point. If judgment is the constraint, measure the judgment.

### What to ask your teams this week

- What is our intent completion rate, and how many intents have we abandoned this year?
- What is the oldest piece of finished work sitting unreleased right now, and why?
- What is the first-pass rate at each judgment moment, and has any of them ever rejected anything?
- Which of our current metrics would still make sense if agents did all the execution?
