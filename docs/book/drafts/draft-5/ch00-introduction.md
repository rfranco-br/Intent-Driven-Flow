# Introduction

*Draft 5 · problem-and-solution order*

### The Driver and the Pilot

*A seasoned Driver and a young Pilot stood before a gleaming, chrome vessel at the edge of the atmosphere.*

*The Driver held a leather-wrapped steering wheel, a heavy brake pedal, and a map of the local highways.*

*"I've spent twenty years mastering the road," the Driver said. "I know exactly when to hit the gas to overcome friction, when to turn the wheel to stay in the lane, and when to slam the brakes to avoid a crash. I am ready to lead this mission."*

*The Pilot looked up at the black expanse of the stars and shook his head.*

*"Friend," he said, "where we are going, there are no roads. There is no air. There is no friction."*

The Driver is right about everything he says, and that makes the story useful. He spent twenty years learning when to accelerate and when to brake, and he earned every bit of it. All of it answers conditions that no longer apply. His skill was good, but it was about friction, and where he is going there is none.

### The assumption underneath everything you've adopted

Every delivery framework of the last twenty-five years shares one premise: human bandwidth is the scarce resource.

That premise explains why they all ration. Sprints ration work into what a team can absorb, and WIP limits ration how much can be in flight. Cognitive-load boundaries ration how much of a system a group can hold, and estimation predicts how much human effort a piece of work will consume. The mechanisms differ, and each one served its teams well under the conditions it was built for. Underneath them sits one assumption, that the people doing the work are the expensive, limited part.

That assumption held for the whole history of the practice, and it doesn't hold now. Once execution stops being scarce, rationing it loses its purpose, and each instrument you have for managing delivery rations something.

### The argument

**When execution becomes free, judgment becomes the bottleneck, so govern the judgment.**

"Free" needs a precise reading. It does not mean cheap. AI is not cheap, and if you use it carelessly you will see the expense on an invoice. The human effort and time a unit of work consumes collapsed, and that collapse changes the shape of an organization. This book is about that change.

The thirteen chapters follow from that sentence, and they come in five parts. Each part names a problem and then says what I'd do about it, so you can read any part on its own. Part I explains why AI pilots succeed and never scale. Part II covers deciding what is worth building and confirming that it worked. Part III covers getting finished work to customers without piling it into batches. Part IV covers governance: who decides, at which moments, and what the organization remembers. Part V covers leading the change: what to measure, how teams earn autonomy, what it costs, and where to start on Monday.

### **Where I'm writing from**

I have been working at CI&T since 2007. I started as a developer, and today I lead delivery and AI adoption there as an executive, so most of what I know about running software teams I learned at CI&T, with its clients and its people. Some of the references in this book come from that work, including a sizing method CI&T created that I recommend in chapter 10. I've tried to hold them to the same standard as everything else, and where something comes from my own company, I say so. Weigh it with that in mind.

The ideas in this book come from a framework I have been building and using, Intent Driven Flow, or IDF. Building it was the way I found to learn, and to test the hypotheses in these pages instead of only arguing for them. I built IDF with IDF: agents did the execution, and people held the judgment moments this book describes. The book is the argument for leaders. IDF for Teams, the companion work, is the method for the people who run it day to day.

You don't need IDF to use anything here. Adopting a framework like it in an enterprise takes a good amount of change management and a willingness to "fail fast, learn faster". When I say "our own project" in later chapters, IDF is what I mean.

### How sure I am

Read this before any chapter.

I am not sure I am right about everything, and I am willing to be wrong or partly right. Some of what follows is measured, some is reasoned, and some is a hypothesis I believe and cannot yet prove. Where the difference matters, I say which is which.

I cite the measured parts, with links, and you should check them. The reasoned parts follow from the thesis, and if you reject the thesis they fall with it. I would most like someone to disprove the untested parts. Chapter 13 lists them, including a failure in our own use of IDF that we found only because we went looking.

No controlled study stands behind this book. None stands behind its competitors either, because in 2026 nobody has that evidence yet. Read the argument, check the numbers, and treat confident phrasing as shorthand for a claim, never as proof.

### The book's limits

It is a map of where human judgment is non-negotiable and what breaks when it's missing. You won't find a ceremony to adopt or a certification. You decide where to place those moments, what to call them and how formal to make them, and I would expect your answers to differ between a regulated bank and a twelve-person product team.

It stands on its own. You don't need Scrum, SAFe or Team Topologies in place first, and organizations with no named operating model succeed too. I reference other frameworks where they help, and I build on none of them.

It covers more than AI. It says little about models, prompts or tooling, and I expect what it does say to date badly. The subject is what happens to an organization's decisions when the effort of producing work collapses, and that question will outlive any particular technology.

### Who this is for

You, if you can change how an organization decides things: a CIO, a transformation lead, an engineering executive. You have bought the tooling and seen the demos work, and you suspect the operating model underneath hasn't moved.

A delivery team will recognize everything here, but the book gives them no recipe. A companion body of work, IDF for Teams, covers implementation in detail.

### Reading it

The book takes about ninety minutes, and it works best in order, though each part also stands on its own. Each part opens with a problem and answers it before moving on.

Each chapter ends with what it costs and with a few questions for your teams. I think the questions matter most. Asking them gets you information you don't have today, whether or not you adopt anything else here.

If you read only one part, read Part II. Its two chapters form the loop the rest of the book builds on: say what should become true for a customer, then check whether it did.
