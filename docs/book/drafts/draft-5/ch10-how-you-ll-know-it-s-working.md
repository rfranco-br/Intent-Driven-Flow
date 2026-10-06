# **Chapter 10:** How You'll Know It's Working

*Draft 5 · problem-and-solution order*

### Six numbers, and how each one gets faked

Chapter 9 argued that your instruments went dark. This chapter gives you replacements, along with how people will game each one, because an organization that would rather look good can make each of these metrics look good.

I give you the gaming method with each metric for a practical reason. If you can't describe how a metric fails, you can't trust it, and the people who show you these numbers will have an interest in them.

### 1. Intent completion rate

**What it is:** of the outcomes you set out to achieve, the share you confirmed as achieved, against the share you abandoned. This is the primary signal, and the only one that answers the question your board is asking. The other five diagnose.

**How it gets faked:** teams set intents whose success is already assured, or they write the success criterion so vaguely that almost anything satisfies it. I read a completion rate near 100% as a target-setting problem. I'd expect an organization that is attempting hard things to land somewhere between 60% and 80%.

**The tell:** ask to see the abandoned ones. If there aren't any, you have your answer.

### 2. Pending-off age

**What it is:** how long finished, deployed work waits before customers can see it, measured as a median plus the age of the oldest item. This is the batch metric and the direct answer to chapter 4. It tells you whether your people use the release switch as a governance instrument or as a parking lot. When the age rises, the exposure decision has turned into a queue.

**How it gets faked:** teams release trivial items fast to hold the median down while the significant work sits. Watch the maximum as well as the median.

**The tell:** ask for the oldest item by name. Somebody will know which one it is and why it's stuck.

### 3. Time from intent to customer

**What it is:** the interval from agreeing an outcome to a customer being able to experience it. It replaces lead time and measures a longer arc on purpose, because it includes the decision-making at the front. Conventional delivery metrics leave that part out, since nobody controls it.

**How it gets faked:** teams log the intent late. If people write intents the day before work starts, the clock skips the deliberation, and the number ends up measuring typing speed.

**The tell:** compare intent creation dates against when the conversation started. If they always fall on the same day, the clock starts in the wrong place.

### 4. First-pass rate at each judgment moment

**What it is:** how often work clears a judgment moment without rework, tracked per moment. A falling first-pass rate on direction means your intents are ambiguous. A falling rate on fitness means the standards of the agents and engineers doing the work have drifted. The number has the same shape in both cases and calls for a different diagnosis, so if you aggregate them you destroy the signal.

**How it gets faked:** nobody needs to fake it, because it fakes itself. A first-pass rate near 100% means the gate has stopped working, and I think this failure shows up more than any other in the book. Our own project ran thirteen cycles with a thirteen-out-of-thirteen pass rate, which told us only that the reviewer had no standing to fail anything.

**The tell:** if a judgment moment has never rejected anything, it is recording, and it controls nothing.

### 5. Rework cause mix

**What it is:** the kind of rework, grouped by root cause: ambiguous intent, misreading by the agents doing the work, scope change, external change. The volume of rework tells you little, since agents make rework easy and a healthy team reworks all the time. The distribution carries the signal. A concentration in one cause gives you something to act on, because ambiguous intent is a product problem, misreading is a context problem, and scope change is a governance problem. The three share a symptom and nothing else.

**How it gets faked:** teams file everything under "scope change," which is nobody's fault and requires no action.

**The tell:** a suspiciously flat distribution usually means nobody is categorizing honestly.

### 6. Escape rate

**What it is:** the share of things released to customers that you had to withdraw. This quality signal survives the shift, and it pairs with pending-off age. Together they detect two opposite failures. If you release too cautiously, age climbs and escapes sit near zero. If you release too carelessly, age stays low and escapes climb.

**How it gets faked:** teams leave something visibly broken instead of withdrawing it and admitting a mistake. A low escape rate can mean good judgment, or an unwillingness to reverse.

**The tell:** ask how long it took from knowing about a problem to switching it off. If the answer is in days, the escape rate is fiction.

### Work no customer sees

Obligations and enablers don't fit the six numbers above, because neither has a customer outcome of its own. For both, the DORA metrics from chapter 4 still do the job. Lead time, change failure rate and recovery time tell you whether the delivery system handles this work safely and on time, and for work like this that is the right question.

Enablers need two more rules. First, an intent's time to customer includes the enablers it waited for. If the checkout intent sat eight weeks behind a new platform, the clock shows eight weeks, because hiding that wait is how platform work escapes scrutiny. Second, an enabler counts as confirmed only when the intents it was built for are confirmed, as chapter 2 sets out.

**The tell:** a growing share of enabling work that no named intent depends on. It usually means a platform team is building for its own roadmap, which is the busy-but-moving-nothing failure chapter 7 describes for direction.

### What to switch off

I'll say this once, because the argument turns on trust more than on measurement.

Velocity, story points, burndown, estimation accuracy and capacity utilization served you well while people did the executing. They all measure human bandwidth, which agents absorbed. They will keep producing plausible numbers for as long as you run them, and that makes them dangerous as well as useless.

The resistance you meet will turn on something other than measurement quality. Engineering has used velocity for twenty years to justify headcount to finance, and you may have made that case yourself. Removing it takes away a shared language between functions that have no other one. Put the replacement in place before you remove it, and expect the conversation to turn on trust.

### **A unit finance can still trust**

Switching off velocity leaves finance without the number it used to plan headcount, and that conversation needs an answer. I'd use a unit that sizes the work and ignores who did it. [Business Complexity Points](https://ciandt.com/au/en-au/complexitypoints) (BCP) is the one I know best: it scores a piece of work by its business rules, user interface elements, business entities and the interfaces between them, each on a five-step scale from extra small to extra large. CI&T created it in 2015, and CI&T and Itaú Unibanco released it as open source under the MIT License in May 2026.

A story sized at 12 BCPs stays at 12 whether a person or an agent builds it, which is the property story points lost. Divide the hours or the cost you spend by the points you deliver and you get a production-side ratio you can compare across teams, vendors and tools.

BCP measures how much complexity you built. It says nothing about whether any of it worked, and if you report it as value you repeat the mistake chapter 3 warns about. The combination I'd try, is the share of delivered points that sits inside confirmed intents against the share inside abandoned ones. That tells you how much of the complexity you paid for produced an outcome.

### What it costs

You will report less, and later. Six numbers, several of which update on customer timescales, replace a weekly dashboard that always had something to say. You lose real reporting comfort, and you feel the loss more than your teams do.

Several of these need instrumentation you don't have. Pending-off age needs a switch registry, and rework cause mix needs someone categorizing honestly. None of it costs much, and none of it is free.

The new numbers will also look worse than the old ones. Your performance hasn't declined. The old metrics measured something that always went up. Your first quarter of honest measurement will look like a regression, and it won't be one. If you can't hold that line with your own leadership, don't start, because my guess is that someone will push to bring back a flattering metric within about six weeks.

And people can game each of these. Knowing the methods won't stop them. Asking for the tell, and not only the number, will.

### Why this chapter is here

Chapter 9 took your instruments away, and this chapter gives them back: fewer, slower, harder to fake, and pointed at the thing that constrains you.

Each metric here measures a judgment. Completion rate asks whether you decided the right thing. Intent to customer asks whether you decided it promptly. First-pass rate asks whether your judgment moments work. Pending-off age and escape rate ask whether you expose work on purpose. The rework mix shows where your judgment fails.

If judgment is the constraint, and I think it is, these are the instruments pointed at it.

### Questions for your teams this week

- What is our intent completion rate, and how many intents have we abandoned this year?
- What is the oldest piece of finished work sitting unreleased right now, and why?
- What is the first-pass rate at each judgment moment, and has any of them ever rejected anything?
- Which of our current metrics would still make sense if agents did all the execution?
