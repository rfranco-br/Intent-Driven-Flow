# Chapter 3 — The Batch Problem

*Draft 2 · Register B · ~1,250 words*

---

### More went in. Less came out.

Here is the most counter-intuitive finding in the current data, and the one most likely to explain why your AI investment hasn't shown up in anything a customer noticed.

Deployment frequency went down.

Not up modestly. Down. In organizations where engineering output rose substantially, the rate at which changes actually reached production fell by 11%, and the time from a commit being made to that commit being live rose by 480%.

Those figures come from [Faros AI telemetry](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) covering 22,000 developers across more than 4,000 teams and roughly two years of data, at p < 0.05. The deployment-frequency and lead-time numbers come from about 10% of their dataset, which is smaller and worth stating whenever they are quoted. Faros sells engineering-intelligence tooling.

Whatever your AI program did, it did not make change reach customers faster. On this evidence it made it slower, while making the organization feel considerably busier.

### The full picture

| Stage | What changed |
|---|---|
| **Writing** | PR merge rate per developer +16.2% · average PR size +51.3% · files per PR +59.7% |
| **Reviewing** | Median time to first review +156.6% · median time in review +441.5% · PRs merged with no review +31.3% · 25% of PRs now reviewed by AI agents |
| **Shipping** | Deployments per week −11% · lead time commit to production +480.4% |
| **Consequences** | Bugs per developer +54% · incidents per PR +242.7% · monthly incidents +57.9% |

Follow a change through those four rows and the mechanism becomes visible. It gets written faster, and larger. It waits far longer for review, and has a meaningfully higher chance of receiving none. It then waits again, much longer, to be deployed at all. And when it finally arrives, it arrives as part of a bigger, less-scrutinized bundle, which is why the incident rate per change more than tripled.

### Why batching happens, and why it gets worse on its own

No one decides to batch. Batching is what a system does when releasing is frightening.

The loop runs like this, and it is self-reinforcing:

1. Releasing feels risky, so it's done less often and with more ceremony.
2. Less frequent releases mean more changes accumulate in each one.
3. Bigger releases are genuinely riskier, with more surface area, more interactions, and more difficulty diagnosing what broke.
4. Higher risk justifies more ceremony and less frequency.
5. Return to step 2, with a larger batch.

Every step is locally rational, and the people adding ceremony are responding correctly to real risk. The spiral is the sum of a series of individually sensible decisions, which is why it never gets escalated as a problem and why nobody inside it feels they are doing anything wrong.

What AI did was pour substantially more work into the top of a system already running this loop, without touching the loop.

### Batch size and blast radius are the same number

This is the sentence worth carrying out of the chapter.

A batch of forty changes is not forty changes' worth of value delivered. It is a single event carrying the combined risk of forty changes, released simultaneously, where any failure is harder to attribute because forty things changed at once.

The 242.7% increase in incidents per PR is what that costs, measured. It isn't primarily a code-quality number, since bugs per PR rose 28.7%, which is real but far smaller. The gap between those two figures is the batching effect: changes are landing in conditions that make failure more likely and diagnosis harder, over and above whether the code itself is worse.

That reframes the whole risk conversation. Your organization almost certainly treats *frequency* of release as the risk to be managed. The data suggests that *size* of release is the risk, and that frequency is the lever controlling it. If that reading is right, you have been pulling that lever in the wrong direction, carefully, for years.

### What it costs to see this clearly

You probably can't measure your own batch size right now. Most organizations track deployment frequency and lead time, but very few track how much finished work is sitting undeployed at any given moment, because nothing in a standard toolchain produces that number. Getting it usually means instrumenting something new, and the first reading is generally worse than anyone expects.

The finding is also uncomfortable for people who were doing their jobs well. The change advisory board, the release calendar, the pre-production sign-off: those were built by conscientious people managing real risk with the tools available. Presenting this data as evidence of failure will cost you the cooperation of exactly the people you need. It is a change in what the evidence supports, not an indictment of anyone.

And knowing costs nothing on its own. This chapter diagnoses; it doesn't fix it. If you stop here you've simply acquired an uncomfortable fact.

### Why this chapter is here

Chapter 1 said judgment is the constraint. Chapter 2 said your instruments can't see it. This is the first place the cost becomes concrete and measurable: not a theory about governance, but a 480% increase in the time between building something and a customer being able to use it, inside organizations that just spent a great deal of money going faster.

It also sets up what I think is the cheapest intervention in this book. The queue is not caused by insufficient capacity, because your teams are producing more than ever. It is caused by a release step that has one frequency, no matter how much arrives at it. Chapter 7 is what I'd try: separate deploying from releasing, and the queue drains without anyone working harder. I can't prove that will work in your organization, but the mechanism is simple enough that you can test it cheaply and find out.

### What to ask your teams this week

- How many completed, merged changes are sitting undeployed right now? If we can't answer, how quickly can we start?
- What is our actual lead time from commit to production, median rather than average, and not the number in the OKR deck?
- Has deployment frequency gone up or down since we adopted AI tooling? Has anyone checked?
- When something breaks in production, how many changes went out in the same release? Could we tell which one caused it?

---

*Source: Faros AI, [The Acceleration Whiplash: AI Engineering Report 2026](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf).*
