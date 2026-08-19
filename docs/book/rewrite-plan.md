# IDF — The Rewrite

**From framework specification to a book that leadership reads.**

Roberto Pillon Franco · August 2026 · supersedes the evolution plan

---

## What your two answers changed

**Audience: the CIO and the transformation lead.** Not the team. This inverts the plan I wrote yesterday, and it has one consequence you may not enjoy: *the operational specificity that makes IDF good today cannot be at the front of the product.* A CIO does not need to know that Gate 2 requires hands-on use of the feature. They need to know that **someone must use it before a client does, and that this is a decision they're accountable for.** Same idea, different altitude.

The specificity doesn't get deleted. It becomes the thing that makes the book credible — most leadership books on this shelf have nothing underneath them. Yours will have an 8,000-word spec and a repo that runs on itself. That's the moat, and it only works if it sits *behind* the argument instead of in front of it.

**Goal: authority, eventually a book.** So we write the book. The site becomes the book, chapter by chapter, published free — that's how Shape Up worked, and the print version is a compilation decision you make later, not a prerequisite.

**"Create awareness of what generates value, not dictate how."** This is the most useful sentence you've given me. It settles the register: IDF states *what must be true and what it costs when it isn't*, not *what meeting to hold on Tuesday*. It also gives us the reframe that makes the gates work for this audience — see chapter 8.

---

## The shelf you'd be publishing onto

I checked, because if someone owns this space the strategy changes. Two findings.

**Not a threat: [*AI-Native Software Delivery*](https://www.oreilly.com/library/view/ai-native-software-delivery/9781098171988/)** (O'Reilly, July 2025). The title is uncomfortably close, the content isn't: it's a DevOps and platform-engineering book — source control, CI/CD, security, SRE, cost, platform. Its governance chapter is about pipeline controls, not human decision rights. It doesn't ask what the unit of work is or who says yes.

**The real one: Matthew Skelton and Conflux.** The *Team Topologies* co-author is moving onto exactly this shelf — an ["AI-native operating models"](https://confluxhq.com/ai-native-operating-models) practice aimed at enterprise executives, a [QCon London 2026 talk](https://qconlondon.com/presentation/mar2026/team-topologies-infrastructure-agency-ai) on Team Topologies as "infrastructure for agency" with AI, Team Topologies 2nd edition, and a vocabulary already forming: *cognitively-scoped stewardship, audit-first design, attestation.* He has the brand, the CIO audience, and a consultancy.

**This is good news, and here is why.** Team Topologies answers *how should we be organised* — team boundaries, cognitive load, interaction modes. It has always been explicit that it does not tell you how to run delivery. That layer is still filled by Scrum and SAFe, both of which are now visibly broken for agentic work. **Nobody on this shelf owns "when is it done, and who decides it ships."** That is precisely what IDF answers, and it has a distinctive answer.

The positioning line, which I'd put in the introduction and never deviate from:

> **Team Topologies shapes the organisation. IDF governs how work moves through it when agents do the building.**

Complementary, not competing. It gives you a giant to stand beside instead of one to fight, and it's true. Two secondary openings: Conflux explicitly targets 1,500–5,000-person enterprises, which leaves the 50–300-engineer CIO underserved; and their angle is structural and static (boundaries, stewardship) where yours is temporal and dynamic (the loop, the decision). Different question, same buyer.

---

## What the product becomes

| Today | After | Why |
|---|---|---|
| `index.html` — 654-word pitch | **The argument in 3 minutes** — the book's front door | Already the strongest asset. Keeps the parable, gains the positioning line. |
| `idf.html` — 8,114-word spec | **The Reference** — demoted, preserved, honestly labelled "the specification behind the book" | The moat. Nothing is deleted; it stops being the entrance. |
| `idf-corporate.html` — exec companion | **Merged into the book** | Its audience *is* the book's audience. Maintaining both is maintaining the book twice. |
| `playbook.html` — practices | **Practices** — unchanged role, aligned vocabulary | Correctly positioned already. |
| `flow.html` — diagram | **Figures** — source for the book's visuals | Diagrams matter more in print. |
| `idf-pitch.html` — PT | **Translation of the book**, on a lag | After the English core is stable. |
| — | **The book** — 13 chapters, ~17k words | The new centre of the product. |

---

## The book

Thirteen chapters, roughly 1,200–1,500 words each. Ninety minutes end to end — a flight. Each chapter lands one idea and earns the next.

### Part I — The ground moved

*Why the operating model you have is now mismatched. Written to be uncomfortable.*

1. **Execution got cheap. Judgment didn't.** Engineers use AI in ~60% of their work and can fully delegate 0–20% of tasks. The bottleneck moved downstream and no org chart has noticed.
2. **Your instruments went dark.** Velocity, story points, burndown — proxies for human bandwidth that agents just absorbed. Output doubled and your dashboard stopped meaning anything in the same quarter.
3. **The batch problem.** Over 90% of teams ship in batches; high-AI-adoption teams merge roughly twice the pull requests. More output into an unchanged release step produces bigger batches, not more value. *This is the chapter that explains "why aren't we seeing ROI from AI" mechanically instead of mystically — I'd expect it to be the most shared.*
4. **"Who approved this?"** The governance vacuum. What an auditor asks, what the EU AI Act now requires, and what happens the first time the board asks and nobody has an answer.

### Part II — What actually generates value

*The awareness layer. The heart of the book, and where it either has something to say or doesn't.*

5. **Outcomes, not output.** The intent as the unit of work, and why a ticket is now the wrong container.
6. **Shipping is not done. Confirmed is done.** Delivery and value are two different events, and only one of them is on your roadmap.
7. **Deploy is not release.** The switch as a governance instrument rather than a deployment trick. The cheapest high-leverage change available, and the answer to chapter 3.
8. **The three decisions you cannot delegate.** The gates, reframed as decision rights instead of meetings — *is this worth doing, is this actually good, do clients get it.* This reframe is what makes IDF legible to a CIO.
9. **Your system's memory is now capital.** Context, skills, and agent authority as organisational assets that depreciate silently. Where the Agent Registry and context debt live at leadership altitude.

### Part III — Leading the change

10. **How you'll know it's working.** The instruments that survive, and the ones to switch off.
11. **What it costs.** The honest ledger — what you give up, what's hard, who shouldn't do this. Credibility is bought here.
12. **Where to start on Monday.** One first move, not a transformation programme.
13. **What we don't know yet.** Admitted uncertainty, which on this shelf is a differentiator.

**Where your existing content lands:** §01 core ideas → chs 5–7 · §07–09 gates → ch 8 · §16 metrics → ch 10 · §17 context debt → ch 9 · §18 audit → ch 4 · the evidence I added last cycle → chs 1–3 · everything operational → the Reference.

---

## Four decisions I need from you before writing

These are cheap now and expensive later — every chapter inherits them.

1. **The one sentence.** My preference, given the audience: *"When execution becomes free, judgment becomes the bottleneck — so govern the judgment."* Alternative, punchier and more Shape Up: *"Deploy everything. Release nothing until a human says so."* The first is a thesis; the second is a slogan. A book wants the first in the introduction and the second on the cover.
2. **Names for the gates.** "Gate 1/2/3" is the most mechanical vocabulary in the framework and it's load-bearing — Scrum gave us *Sprint* and *Retro*, and that's a large part of why people could repeat it. Candidates: **Alignment · Acceptance · Exposure.** "Exposure" is the one I'd fight for; it's already how risk people talk.
3. **Does the framework keep the name IDF?** It's descriptive and fine. It is not memorable, and it doesn't say what it's for. Worth ten minutes of consideration, not more — renaming has real costs and the URL is live.
4. **Portuguese: lag or parity?** I'd say lag. Say so if you disagree, because it changes how the site is built.

---

## How we work

**Phase 0 — Spine.** *This week.* The four decisions above plus a locked chapter map. One page. Nothing gets written until this is signed off, because rewriting thirteen chapters after changing the thesis is how projects die.

**Phase 1 — Voice test, one chapter.** I draft **chapter 7 (Deploy is not release)** in full. It's the most distinctive idea, the most concrete, and it has a real "oh" in it. You edit it hard. I extract a style guide from *what you changed* — that becomes the standard every other chapter is written against. **We do not draft thirteen chapters in a voice neither of us has validated.**

**Phase 2 — Part II first** (chs 5–9). The heart, written while energy is high. Not Part I — Part I is setup and it's the easy half.

**Phase 3 — Parts I and III.** Part I gets sharper once Part II exists, because you know what it has to set up.

**Phase 4 — The site becomes the book.** New information architecture, reading experience, the reference demoted behind progressive disclosure, `idf-corporate.html` merged and retired.

**Phase 5 — Proof and distribution.** Your dogfooding numbers computed from git history, the one-page card, the talk, the PT translation.

**What I need from you per chapter:** roughly twenty minutes of reaction. Not line edits — tell me where you stopped believing it, where you got bored, and where I made you sound like someone you're not. That's the only feedback that improves a draft.

---

## Start here

**Answer the four decisions.** Then I write chapter 7 and we find out whether the voice works.

If you'd rather see before you decide, invert it: I draft chapter 7 twice in two different registers, you pick, and we back out the decisions from the one that sounds like you. Slower by a day, and honestly more likely to land the voice.

---

## Risks worth naming

**The credibility gap.** You'll be a first-time author with no case studies arguing to CIOs against an established author who has both. Your counter is that you're the only one dogfooding — IDF built with IDF, with numbers. Get those numbers early; they're doing more work than any chapter.

**The altitude trap.** Written for CIOs, this genre drifts into vapid abstraction fast — that shelf is already full and nobody finishes those books. Your defence is the specificity underneath. Every chapter should contain at least one thing a reader could not have guessed.

**Scope creep into a big book.** Thirteen short chapters is right. *Team Topologies* and *Shape Up* both won on being finishable. The moment this becomes 300 pages it becomes a book people cite without reading, which is not the same as authority.
