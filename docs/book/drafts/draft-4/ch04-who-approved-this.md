# Chapter 4: "Who Approved This?"

*Draft 4 · light voice pass*

---

### The question after an incident

You ship something to customers that you shouldn't have.

It might be a pricing error, a feature that mishandles personal data, an automated decision that turns out to discriminate, or a change that takes a service down for four hours. The details vary. The question that follows, usually within a day, does not. A board member asks it, or a regulator, a journalist, or your largest customer:

"Who approved this?"

You will want a name and a moment. Most organizations can produce a deployment record, a merge timestamp, and a list of people who were in the vicinity. If you have sat in that room, you know that none of it answers the question.

### For a growing share of your work, nobody approved it

Telemetry shows it. The [Faros study](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) of 22,000 developers from chapter 3 found 31.3% more pull requests merged with no review at all than before AI adoption. AI agents reviewed another 25% in place of people.

For a growing fraction of what you ship, the honest answer to *who looked at this before customers got it* is nobody, or a machine reviewing another machine's work. I don't think either is wrong in itself. Both become indefensible the moment someone asks you to defend them, because you can't attribute either to a person who accepted responsibility.

### Three questions you can't answer yet

Break the governance question into parts and you get three.

| The question | What you can produce today |
|---|---|
| Who decided this was worth building? | A ticket, written by someone who was told to write it |
| Who verified it was good? | An automated check result, and possibly a review that took ninety seconds |
| Who authorized customers to see it? | A deployment record with a timestamp |

All three answers are artifacts of process execution, and none of them records a decision. They show you that the machinery ran. They don't show you that anybody chose anything.

### Friction used to leave evidence

The answers used to exist without anyone building them, because slowness produced them.

Someone read the ticket before starting, since they had to understand it to begin, so someone had considered the work. Someone spent forty minutes reading the diff, because reading took that long, so someone had examined the work. Someone ran Thursday's release with a checklist, so someone had chosen the exposure.

None of that was governance. It was friction that happened to leave evidence. Remove the friction and you lose the evidence with it, and you have nothing to decommission, since you never built anything. You are finding out now that your governance model was a side effect of how slowly people worked.

### The regulatory deadline, and the trap in the good news

The dates, as of August 2026:

- [EU AI Act Article 50](https://artificialintelligenceact.eu/transparency-rules-article-50/) transparency obligations have applied since 2 August 2026. You must tell people when they are interacting with an AI system, and you must mark generated content in machine-readable form. A four-month grace period runs to 2 December 2026 for marking on systems already on the market. The EU did not postpone these obligations.
- The [Digital Omnibus](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), formally adopted and in force since 27 July 2026, deferred high-risk obligations to 2 December 2027 for standalone Annex III systems and 2 August 2028 for AI embedded in regulated products.

This is not legal advice. Jurisdictions differ, and these dates have moved once already.

Most organizations read the second bullet and relaxed, which is a fair first reaction to a deferral. I think it's also the trap.

A deferral removes urgency from work that takes eighteen months to build. You can't write a policy that answers who approved this, on what basis, at what moment. You build that ability into how your organization decides, over many cycles. I suspect teams that treat December 2027 as far off will start around September 2027 and find they needed to start in 2026.

The organizations that pass in 2027 will be the ones that can answer the question in 2026, because they built the answer for their own reasons.

### Audit sets the deadline, and learning is the reason

I think compliance framing produces compliance behavior, and compliance behavior produces theater.

If you build a governance model to satisfy a regulator, you will build the cheapest thing that survives inspection: approval fields people fill in, sign-offs nobody withholds, a register nobody reads. It will pass, and it will tell you nothing, because a control that has never stopped anything controls nothing.

The reason to answer the question is more basic. An organization that can't say who decided anything can't learn. When something goes wrong you can't find the decision that caused it, so you can't correct it, and all you can do is add process on top. That's how organizations acquire ceremony without acquiring judgment. The regulation sets the date by which you'll be forced to notice.

### The cost

You can't record decisions you aren't making, and this cost lands earlier than you expect. "Who decided this was worth building?" has an answer only if somebody decided, which requires that someone wrote down something decidable. Chapter 5 covers that, and you need it first.

The work will show you things that nobody decided: projects underway because they sat on last year's roadmap, or because a senior person mentioned them once. When you make decisions visible, you make their absence visible too, in front of the people responsible for it.

You may build theater instead. That failure looks like a complete audit trail of approvals that were never in doubt. Chapter 8 has an unflattering example from our own project, the clearest proof I can offer that this failure is easy to fall into and hard to see from inside.

And someone has to accept being named. Attributable decisions put a person's name on an outcome that might go badly. That is a real ask, and I don't think it works without cover from above. Back them when a decision they owned goes wrong, or you'll get decisions owned by committees, which means owned by nobody.

### Why this chapter is here

Part I ends here, and this chapter makes the rest of the book urgent.

Chapters 1 to 3 described a system that produces more, sees less, and ships in larger and riskier bundles. This chapter shows what happens when an outsider asks that system to account for itself.

Chapter 8 is my answer: a map of where the question is legitimate and who stands there when someone asks it. It offers no process for manufacturing an approver.

### Questions for your teams this week

- Take the last significant production incident. Can we name the person who decided that change should reach customers, and when they decided?
- What share of merged work last quarter got substantive human review? Can our tools tell us?
- If a regulator asked today how we mark AI-generated content in our products, who would answer, and how long would it take?
- Name a decision in the last six months where someone said no to finished work. What happened to them afterwards?

---

*Sources: Faros AI, [The Acceleration Whiplash](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) · [EU AI Act Article 50 transparency rules](https://artificialintelligenceact.eu/transparency-rules-article-50/) · Gibson Dunn, [EU AI Act Omnibus Agreement](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/).*
