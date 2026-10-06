# The Book Bible

**Thesis, voice, and chapter map. Everything gets written against this document.**

Updated August 2026 · supersedes the chapter map in the rewrite plan

---

## The thesis

> **When execution becomes free, judgment becomes the bottleneck — so govern the judgment.**

Every chapter is a consequence of this sentence. If a chapter doesn't trace back to it in one step, it doesn't belong in the book.

## The positioning

> **Every delivery framework of the last twenty-five years rations human bandwidth, because bandwidth was the scarce thing. It isn't any more. Judgment is — and nothing in your current operating model governs it.**

The opponent is a shared **assumption**, not a framework and not a person. Scrum, SAFe, Kanban and Team Topologies all ration work — sprints, WIP limits, cognitive-load boundaries. Different mechanisms, one premise: that people do the executing. When execution stops being scarce, rationing stops being the point.

This is a bigger target than any single framework, it's more honest, it flatters the reader instead of picking a fight, and it lets us name the others respectfully in one sentence without subordinating ourselves to any of them.

**The anchor image is the Driver and the Pilot** — twenty years of mastering when to brake, when to turn, when to accelerate, and then no roads, no air, no friction. Already written, currently stranded on the landing page. It moves into the introduction and carries the whole argument.

### How we treat other frameworks

**No framework is a prerequisite.** This book does not assume you have adopted Scrum, SAFe, Team Topologies, or anything else. Organisations with no named operating model succeed too, and the book says so plainly. Nothing here is built on top of someone else's model.

Others are **referenced where genuinely useful, never used as foundation.** Where an insight survives the shift, cite it and credit it. Where its premise moves, say so — **as an open question, not a verdict.**

**On Team Topologies specifically.** Its durable contribution is real: cognitive load is a genuine constraint and boundaries should respect it. Conway's Law is, if anything, sharper under agents, since agent configurations mirror team boundaries too. What shifts is the *unit* of load — reviewing output you didn't write is a different burden from building a system you did.

Note also that Skelton has already extended Team Topologies to cover agents (QCon London 2026; Conflux's AI-native operating model work). So we cannot claim they haven't considered AI. The defensible claim is narrower and sharper: **extending cognitive-load boundaries to agents preserves the answer without revisiting the question.**

Say it once, respectfully, framed as a question. A first book making a structural claim about an established framework should read as thinking, not as a verdict.

## The doctrine

Four commitments that separate this from SAFe, from Scrum, and from every consultancy operating model on the shelf:

1. **This is a map, not a procedure.** We identify where human judgment is non-negotiable. Where you place those moments, what you call them, and how many you run is yours. We describe what breaks when a judgment point is missing, and we do not tell you to hold a meeting on Thursday.
2. **The costs are stated.** Every practice gets an honest ledger. Admitting what it costs is what makes the benefit believable.
3. **Uncertainty is admitted.** Where we don't know, we say so. On a shelf full of confident consultancy content, this is the differentiator.
4. **These are hypotheses, not findings.** *(Roberto, 2 Sept 2026: "I'm not sure I'm right about everything and I'm willing to be wrong or partially right. That should be a mantra for this entire work. I have hypotheses, some of them can be proved, some of them need to be tested.")*

Point 4 is a stance that has to show up in the prose, not just in chapter 13. Practical rules:

- Never write "chapter 7 is the answer." Write "chapter 7 is what I'd try," or "this is the move I think works."
- Distinguish the three tiers explicitly where it matters: **measured** (the telemetry), **reasoned** (follows from the thesis), **untested** (I believe this and cannot show you).
- The introduction states the stance once, plainly, so the reader knows how to weigh everything after it.
- Confidence is still allowed. Hedging every sentence is its own kind of dishonesty. The rule is that certainty must be proportional to evidence, and where it isn't, say which tier you're on.

---

## Voice — Register B, "The Operator"

Chosen from the chapter 7 voice test. The rules, extracted:

### Rule zero: it must not read as machine-written

*Added 2 Sept 2026 after Roberto's review of Part I. This overrides anything below it that conflicts.*

> "You use it way too much, to the point that it is clear this was rewritten by AI. Please adjust the whole book to make more use of commas and longer paragraphs. Use the em dash only when it is necessary to have a long pause in the reading. The goal is to make this less AI-produced."

Draft 1 measured **190 em dashes in 16,712 words, 11.4 per thousand.** Published nonfiction runs 1 to 3. Combined with very short paragraphs and heavy bolding, that is the standard machine-written signature, and it undermines a book whose entire pitch is honest human judgment.

**Em dashes: budget of 2 per 1,000 words. Roughly two or three per chapter, thirty-five in the book.**

How to remove one:
- A comma, when the aside is mild. *"The pilot is not the hard part, and it never has been."*
- A colon, when what follows explains what preceded. *"The reason is simple: nobody decided anything."*
- A semicolon, for two balanced clauses.
- A full stop. Two sentences is usually better than one interrupted one.
- Parentheses, sparingly, for a genuine aside.
- Best of all, restructure so the interruption isn't needed.

Keep an em dash only where the reader genuinely needs a hard stop and no other mark does the job. If a paragraph has two, one of them is wrong.

**Paragraphs: 3 to 5 sentences is the working range.** Let them breathe and connect. A one-sentence paragraph is an emphasis device, so treat it as rationed: two or three per chapter, no more. Draft 1 had 26% single-sentence paragraphs, which reads as staccato rather than considered.

**Bold: at most one span per section, often none.** Draft 1 bolded so heavily that nothing stood out. Prefer letting a strong sentence carry itself.

### Rule one: the stop-slop pass

*Added 22 Sept 2026. Draft 3 was rewritten against the `stop-slop` skill (Hardik Pandya, MIT, installed at `.claude/skills/stop-slop/`). Read that skill before writing or editing any chapter. It sits under rule zero and above everything else here.*

The rules that did the most work, in order:

- **No adverbs as emphasis.** "Genuinely", "actually", "simply", "almost certainly", "deliberately", "fundamentally": delete, or say the specific thing.
- **No binary contrasts.** "Not X. It's Y." / "This is not X, it is Y." State Y.
- **No negative listing.** "Not the models. Not the tooling. Judgment." State the point.
- **Name the actor.** Passive voice and false agency ("the decision emerges", "the bill arrives") become a person doing something, usually *you*.
- **No throat-clearing.** "Here is the…", "This is why…", "Worth being clear about…". Cut to the point.
- **No invented pull-quotes.** Don't coin a quotable line to explain an idea ("An instrument that fails silently gets trusted"). Make the argument in plain sentences. **Keep external quotes verbatim** (sources, dialogue in the Driver and Pilot parable, the question "Who approved this?").
- **Varied rhythm.** No stacks of short punchy sentences; paragraphs don't all end on a one-liner.

**Headings.** Declarative, and avoid Wh- openers where a better one exists. Two fixed headings stay by decision: **"Why this chapter is here"** (Roberto, 22 Sept) and **"Questions for your teams this week"** (replaces "What to ask your teams this week"). The thesis appears as a plain sentence, never as a bold blockquote.

**Open comment carried into Draft 3.** Roberto on ch01 (Drive, 3 Sept): the book must not claim that no reorganization, new roles or transformation program is needed. *"There is no improvement without change. We are not suggesting reorg, new roles, transformation agenda, but it may be necessary for some companies."* Draft 3 says the book doesn't prescribe them and that some organizations will need them (ch01, ch07, ch12, ch13).

### Structure

- Subheads every 200–350 words. Sentence case. Declarative, not cute. A reader skimming only the subheads should get the argument.
- Tables for numbers. Bullets for mechanics. Prose for reasoning, and prose means actual paragraphs.

### Address

- Second person. "You," "your teams," "your board." The reader is a decision-maker, addressed as one.
- Never "organizations should." Say "you."

### Spelling and terminology

- **American English.** *(Roberto's edits: "authorised" → "authorized", "theatre" → "theater".)* So organization, behavior, recognize, optimization, defense.
- **Execution effort collapsed, not execution cost.** *(Roberto: "AI is not cheap unless you use it properly. The immediate impact is time and effort, not cost.")* This is a real precision and the book should hold it. Tokens cost money; what collapsed is the human time and effort a unit of work consumes. Say "effort," "time," "friction," or "human bandwidth." Reserve "cheap" and "cost" for actual money, and say plainly somewhere in Part I that AI is not cheap.
- The thesis keeps "when execution becomes free" because free there means free of human effort, and the introduction makes that explicit.

### Evidence

- Numbers get a table and a hedge. "One study put it near double, another closer to forty percent" beats a false precision.
- **Every source gets a link.** *(Roberto: "we must add a link for each reference.")* Inline markdown link on first mention in each chapter, plus a sources line at the chapter foot.
- Every chapter contains at least one thing the reader could not have guessed. That is the anti-abstraction rule, and this genre dies of vagueness.

**Chapter shape**
1. A concrete opening tension — two things that don't reconcile
2. What the measurements say
3. The mechanism nobody questions
4. What changes when you separate / name / govern it
5. What it buys — numbered, 2–4 items
6. **What it costs** — blunt, named, non-optional
7. Why this chapter sits here
8. **Questions for your teams this week** — 3–5 questions

Item 6 is mandatory. Item 8 is the reader's takeaway and the most-screenshotted part of the book.

**Forbidden**
- "Leverage," "unlock," "journey," "transformation" as a noun, "in today's fast-paced."
- Any sentence that would survive unchanged in a McKinsey deck.
- Explaining the framework's internal vocabulary before the reader needs it.

**Length:** 1,200–1,500 words per chapter. Thirteen chapters, ~17k words, ninety minutes.

---

## Chapter map — Draft 5 (6 Oct 2026)

**Problem and solution side by side, in dependency order.** Roberto may publish the book as a series of standalone articles, so each part carries a full arc: a problem, then what we'd do about it. Each part should be readable on its own.

### Part I — The ground moved

| # | Chapter | The one idea |
|---|---|---|
| 1 | **The pilot that never scaled** | Forty successful demos, nothing in production. What didn't scale was judgment. The thesis chapter. |

### Part II — Decide what's worth building

| # | Chapter | The one idea |
|---|---|---|
| 2 | **Outcomes, not output** | The intent as unit of work. Obligations and enablers are governed differently; an enabler borrows its direction and confirmation from the intents it serves. |
| 3 | **Shipping is not done. Confirmed is done.** | Delivery and value are two events. Abandoned is a legitimate outcome. |

### Part III — Ship without batching

| # | Chapter | The one idea |
|---|---|---|
| 4 | **The batch problem** | More flow into a fixed-frequency valve makes queues, not value. DORA research: throughput and stability move together. |
| 5 | **Deploy is not release** | The switch as governance instrument. Answers ch 4. |

### Part IV — Govern the judgment

| # | Chapter | The one idea |
|---|---|---|
| 6 | **"Who approved this?"** | The governance vacuum: governance was a side effect of slow work. |
| 7 | **Where judgment can't be delegated** | The four moments: direction (is this worth doing?), fitness (does it solve the problem we stated?), exposure, confirmation. **The doctrinal centre.** Answers ch 6. |
| 8 | **Your system's memory is capital** | Context, practice and agent authority as assets that depreciate silently. |

### Part V — Lead the change

| # | Chapter | The one idea |
|---|---|---|
| 9 | **Your instruments went dark** | Velocity measured human bandwidth; some metrics improve as things get worse. |
| 10 | **How you'll know it's working** | Six metrics and how each gets faked; BCP as the unit finance can trust; DORA for work no customer sees. Answers ch 9. |
| 11 | **From demo to scale** | The maturity model, Structured → Calibrated → Autonomous. Answers ch 1. |
| 12 | **What it costs** | The honest ledger. Who shouldn't do this. |
| 13 | **Where to start, and what we don't know** | One first move, then admitted uncertainty, including our own 13-out-of-13 problem and the Bitter Lesson counter-argument. |

**Structural symmetry to preserve:** every problem sits next to its answer (4→5, 6→7, 9→10). Ch 1's scale problem is answered by ch 11. Chapter cross-references must stay true if the parts are published separately.

**Disclosure:** the introduction's "Where I'm writing from" states Roberto's CI&T role since 2007 and names IDF as the framework the book's ideas come from (built with itself; not a prerequisite).

---

## Open decisions

| Decision | Status |
|---|---|
| Thesis | ✅ settled |
| Voice | ✅ Register B |
| Language | ✅ English first, translate a stable product later |
| Gates → judgment points | ✅ settled |
| Maturity model | ✅ promoted to ch 10 |
| **The name** | ⏳ open — *The Judgment Layer* recommended |
| Two-track site architecture | ⏳ after drafting |

---

## Track B — IDF for Teams

Not an appendix. A first-class secondary product with its own front door, evolving alongside the book.

- Each Part of the book ends with one door into it — "if you want to run this, here's the operational detail."
- Vocabulary flows **downward only**: decisions made in the book propagate into Track B, never the reverse.
- Track B keeps the specificity the book can't carry: gate mechanics, the Agent Registry, signal events, artifact schemas, the rework ceiling.
- The current `idf.html` is the seed. It gets re-sequenced and aligned, not demoted.
