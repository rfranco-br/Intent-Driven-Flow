# Chapter 4 — "Who Approved This?"

*Draft 2 · Register B · ~1,400 words*

---

### The question always arrives the same way

Something reaches customers that shouldn't have.

It might be a pricing error, a feature that mishandles personal data, an automated decision that turns out to be discriminatory, or a change that took down a service for four hours. The specifics vary. What doesn't vary is the question that follows, usually within a day, from a board member, a regulator, a journalist, or a very large customer.

**"Who approved this?"**

You will want a name and a moment. What most organizations can produce is a deployment record, a merge timestamp, and a list of people who were technically in the vicinity. That is not an answer, and everyone in the room will know it isn't.

### For a growing share of your work, the answer is "nobody"

This is not a rhetorical flourish. It's in telemetry.

31.3% more pull requests are now being merged with no review at all than before AI adoption, according to the [Faros study](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) of 22,000 developers introduced in chapter 3. A further 25% of PRs are reviewed by AI agents rather than people.

So for a meaningful and growing fraction of what your organization ships, the honest answer to *who looked at this before customers got it* is either nobody, or a machine reviewing another machine's work. Neither of those is inherently wrong. Both become indefensible the moment you're asked to defend them, because neither can be attributed to a person who accepted responsibility.

### Three questions, none of which you can currently answer

Strip the governance question to its parts and it is always these three.

| The question | What most organizations can actually produce |
|---|---|
| Who decided this was **worth building**? | A ticket, written by someone who was told to write it |
| Who verified it was **good**? | An automated check result, and possibly a review that took ninety seconds |
| Who authorized **customers to see it**? | A deployment record with a timestamp |

Notice that all three answers are artifacts of process execution rather than records of decisions. They tell you the machinery ran. They don't tell you that anybody chose anything.

### Why this got worse so suddenly

The answers used to exist, and nobody had to build them, because they were by-products of slowness.

Somebody read the ticket before starting, because they had to understand it to begin, so the work had been considered. Somebody reviewed the diff over forty minutes, because that is how long it took to read, so the work had been examined. Somebody ran the release on Thursday with a checklist, so exposure had been chosen.

None of those were governance. They were friction that happened to leave evidence.

Remove the friction and the evidence disappears with it. Nothing was decommissioned, because there was never anything there to decommission. The organization is only now discovering that its governance model was a side effect of how slowly people worked.

### The regulatory deadline, and why the good news is a trap

The dates, as of August 2026:

- [EU AI Act Article 50](https://artificialintelligenceact.eu/transparency-rules-article-50/) transparency obligations have applied since **2 August 2026**. People must be informed when they're interacting with an AI system, and generated content must be marked in machine-readable form. A four-month grace period runs to 2 December 2026 for marking on systems already on the market. These obligations were not postponed.
- High-risk obligations were deferred by the [Digital Omnibus](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), formally adopted and in force since 27 July 2026, to **2 December 2027** for standalone Annex III systems and **2 August 2028** for AI embedded in regulated products.

This is not legal advice, jurisdictions differ, and these dates have already moved once.

Most organizations read the second bullet and relaxed. I think that's the trap.

A deferral removes urgency from something that takes eighteen months to build. Being able to answer who approved this, on what basis, at what moment is not a policy you write. It is a property of how your organization makes decisions, accumulated over many cycles. Teams that treat December 2027 as a distant problem will begin addressing it around September 2027 and will discover they need to have started now.

The organizations that will be fine in 2027 are the ones that can already answer the question in 2026, because they built the answer for their own reasons.

### Audit is the deadline. It is not the reason.

Worth being clear about this, because compliance framing produces compliance behavior, and compliance behavior produces theater.

If you build a governance model to satisfy a regulator, you will build the cheapest thing that survives inspection: approval fields that get filled in, sign-offs that are never withheld, a register nobody reads. It will pass. It will also tell you nothing, because a control that has never stopped anything isn't a control.

The reason to be able to answer the question is more basic. An organization in which nobody can say who decided anything cannot learn. When something goes wrong you can't find the decision that caused it, so you can't correct it, and you can only add process on top. That is how organizations acquire ceremony without acquiring judgment. Regulation simply sets the date by which you'll be forced to notice.

### What it costs

You can't record decisions you aren't making. This is the real cost, and it lands earlier than expected. Asking who decided this was worth building only has an answer if somebody made a decision, which requires something decidable to have been written down. That is chapter 5, and it is a prerequisite rather than a nice-to-have.

It will reveal that some things were decided by nobody: work underway because it was on last year's roadmap, or because a senior person mentioned it once. Making decision-making visible makes the absence visible too, in front of the people responsible for the absence.

There is also a real risk of building theater instead. The failure mode is a beautifully complete audit trail of approvals that were never in doubt. Chapter 8 has an unflattering example from our own project, which is the clearest demonstration I can offer that this failure is easy, natural, and invisible from the inside.

And someone must be willing to be named. Attributable decisions mean a person's name attached to an outcome that might go badly. That is a genuine ask, and it requires cover from above. Support them when a decision they owned turns out wrong, or you'll get decisions owned by committees, which is the same as decisions owned by nobody.

### Why this chapter is here

It closes Part I, and it is the chapter that makes the rest of the book urgent rather than merely sensible.

Chapters 1 through 3 described a system that produces more, sees less, and ships in larger and riskier bundles. This chapter is what happens when someone from outside asks that system to account for itself.

Chapter 8 is my answer to it: not a process that manufactures an approver, but a map of where the question is legitimate and who is standing there when it's asked.

### What to ask your teams this week

- Take the last significant production incident. Can we name the person who decided that change should reach customers, and when they decided it?
- What proportion of merged work in the last quarter received substantive human review? Do our tools let us tell?
- If a regulator asked today how we mark AI-generated content in our products, who answers, and how long would it take?
- Name a decision in the last six months where someone said no to finished work. What happened to them afterwards?

---

*Sources: Faros AI, [The Acceleration Whiplash](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf) · [EU AI Act Article 50 transparency rules](https://artificialintelligenceact.eu/transparency-rules-article-50/) · Gibson Dunn, [EU AI Act Omnibus Agreement](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/).*
