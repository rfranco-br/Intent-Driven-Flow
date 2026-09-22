# Chapter 3: The Batch Problem

*Stop-slop trial · rewritten from Draft 2*

---

### More went in, less came out

The current data holds one finding that runs against intuition, and it may explain why your AI investment hasn't shown up in anything a customer noticed.

Deployment frequency went down. In organizations where engineering output rose, the rate at which changes reached production fell by 11%, and the time from commit to live rose by 480%.

The figures come from [Faros AI telemetry](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) covering 22,000 developers across more than 4,000 teams over about two years, at p < 0.05. The deployment-frequency and lead-time numbers draw on about 10% of that dataset, a smaller sample, and you should say so whenever you quote them. Faros sells engineering-intelligence tooling.

On this evidence, your AI program slowed the rate at which change reached customers, and it made your organization feel much busier while it did.

### One change, four stages

| Stage | What changed |
|---|---|
| Writing | PR merge rate per developer +16.2% · average PR size +51.3% · files per PR +59.7% |
| Reviewing | Median time to first review +156.6% · median time in review +441.5% · PRs merged with no review +31.3% · 25% of PRs now reviewed by AI agents |
| Shipping | Deployments per week −11% · lead time commit to production +480.4% |
| Consequences | Bugs per developer +54% · incidents per PR +242.7% · monthly incidents +57.9% |

Follow one change through the four rows. An engineer writes it faster, and larger. It waits much longer for review and stands a higher chance of getting none. Then it waits again, longer still, to deploy. When it ships, it ships inside a bigger bundle that fewer people scrutinized, and the incident rate per change has more than tripled.

### The loop behind batching

No team sets out to batch. Teams batch when releasing feels dangerous, and the loop feeds itself:

1. Releasing feels risky, so your teams release less often and with more ceremony.
2. With fewer releases, more changes pile up in each one.
3. Bigger releases carry more risk: more surface area, more interactions, harder diagnosis when something breaks.
4. Higher risk justifies more ceremony and fewer releases.
5. Back to step 2, with a larger batch.

Each step makes local sense, and the people adding ceremony respond correctly to real risk. The spiral is the sum of sensible decisions, so it rarely reaches an escalation, and the people inside it don't feel they are doing anything wrong.

With AI tooling you poured more work into the top of a system already running this loop, and you left the loop alone.

### Batch size and blast radius are the same number

A batch of forty changes delivers one event, carrying the combined risk of forty changes released at once. When it fails, you struggle to find the cause, because forty things changed together.

The 242.7% rise in incidents per PR measures what that costs. Bugs per PR rose 28.7%, a real increase and a far smaller one, so code quality explains only part of it. The gap between the two figures is the batching effect: changes land in conditions that make failure more likely and diagnosis harder, over and above any drop in the quality of the code.

That changes your risk conversation. Your organization probably treats release frequency as the risk to manage. The data suggests that release size carries the risk and that frequency is the lever that controls size. If that reading holds, you have pulled the lever the wrong way, with care, for years.

### The cost of seeing it

You probably can't measure your own batch size today. Most organizations track deployment frequency and lead time. Few track how much finished work sits undeployed at a given moment, because a standard toolchain doesn't produce that number. To get it you usually have to instrument something new, and the first reading tends to be worse than anyone expected.

The finding will also sting people who did their jobs well. Conscientious people built the change advisory board and the release calendar to manage real risk with the tools they had. If you present this data as evidence of failure, you lose the cooperation of the people you need most. Present it as a change in what the evidence supports, with no one on trial.

Knowing, on its own, fixes nothing. This chapter gives you a diagnosis, and if you stop here you have acquired an uncomfortable fact.

### This chapter's place in the book

Chapter 1 said judgment is the constraint, and chapter 2 said your instruments can't see it. Here the cost turns concrete: a 480% increase in the time between building something and a customer being able to use it, inside organizations that spent heavily to go faster.

It also sets up what I think is the cheapest intervention in the book. Your teams produce more than ever, so capacity doesn't cause the queue. The release step causes it, because it runs at one frequency however much work arrives. Chapter 7 describes what I'd try: separate deploying from releasing, and let the queue drain without anyone working harder. I can't prove that will work in your organization. The mechanism is simple enough that you can test it at low cost and find out.

### Questions for your teams this week

- How many completed, merged changes sit undeployed right now? If we can't answer, how soon can we start counting?
- What is our lead time from commit to production, as a median rather than an average, and not the number in the OKR deck?
- Has deployment frequency gone up or down since we adopted AI tooling? Has anyone checked?
- When something breaks in production, how many changes went out in the same release? Could we tell which one caused it?

---

*Source: Faros AI, [The Acceleration Whiplash: AI Engineering Report 2026](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf).*
