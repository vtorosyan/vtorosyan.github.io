---
title: "There is too much (managers have lived here for years)"
layout: post
---

I keep hearing from engineers lately: *there is too much going on*. Too many parallel threads. Too much code being generated to actually read. Big features merged that nobody could honestly claim to fully understand. On-call for code you didn't write and don't fully trust. And underneath all of it, a quieter admission: *the work isn't teaching me much anymore, and it's stopped being fun.*

I know that feeling well, I was there before the AI era. But here is the thing: I didn't first hear it from engineers. I heard it, almost word for word, from every first-time manager I've ever worked with. 

## This is just the job description of an engineering manager

Take the word "AI" out and read that list again:

- Accountable for output you didn't personally produce.
- Reviewing and steering all day instead of making.
- More threads in flight than you can hold in your head.
- Signing off on things you don't fully control or understand.
- Grieving the loss of the craft that made you good in the first place.

That's not a description of agentic coding. That's a description of becoming a manager. It's the thing that quietly breaks people in their first year of leadership: the day you realize you will never again understand everything your name is attached to, and you have to learn to be okay shipping anyway.

What AI did was give every engineer a small team of tireless, fast, occasionally-wrong direct reports. And with the team came the manager's problem. The discomfort engineers are feeling right now isn't an AI problem. It's a *delegation* problem, and delegation is the oldest unsolved problem in our discipline.

The good news in that: it's not unsolved because nobody tried. Managers have been failing at it and slowly adapting for decades. So there's actually a playbook.

## Start with what's actually in your control

Before the tactics, there's an older idea underneath all of them, and it's the one I keep coming back to. The Stoics split the world in two: the things that are up to you, and the things that aren't. Epictetus opens with it because everything else depends on getting it right. Your suffering, he argues, comes almost entirely from spending energy on the second pile.

"There is too much" is a true statement about the second pile. The volume of code your agents can generate is not in your control. The number of features other teams need is not in your control. The fact that there are more hours of review than there are hours in the day - not in your control. You have limited time and limited power, and no amount of anxiety expands either.

What *is* in your control is small and it is everything: where you point your attention, what standard you hold, what you decide not to do, and whether you're honest about which is which. The whole reason "there is too much" feels like drowning is that we keep trying to exert control over the size of the ocean. You can't. You can only decide where to swim.

## What actually helps

None of this makes the load disappear. It makes it *carriable*.

1. **Separate ownership from authorship.** You own the outcome, not the lines. This sounds like a cop-out and it's the single hardest mental shift in management. Ownership is having a model of where this thing breaks and what you'd do when it does - not having typed it. You can own code you didn't write. You cannot own code you refuse to understand. Those are different statements, and the gap between them is the whole job.

2. **Decide what you must understand deeply - then triage the rest without guilt.** You cannot review thousands of lines of generated code at equal depth, and pretending you can is how things slip. So don't. The 3am on-call path gets read line by line. The rarely-hit, easily-reversible stuff gets sampled. This isn't laziness, it's the [1% that matters](https://vtorosyan.github.io/ai-making-worse/), so spend your scarce attention where being wrong is expensive.

3. **Externalize. The doc is not a crutch, it's the method.** Tracking your parallel efforts in a doc isn't failing to cope - it's coping correctly. Stop trying to hold it in your head. Every good manager runs on lists, not memory. Offload the state so your head is free for judgment.

4. **Build verification, not total verification.** You will not personally check everything. So you invest in the things that check for you: tests, types, a teammate's review, a smell test you trust. Build a system where the dangerous PRs surface.

5. **Letting something fail is a valid output.** When the work outstrips the hands, the most useful move is often to say so plainly: "we don't have the capacity to do this right." That's a real answer, not a failure. Filling the gap with agents instead doesn't make the missing capacity disappear - it just hides it, and now nobody quite owns the result. The skill was never doing everything. It's [choosing what not to do, out loud](https://vtorosyan.github.io/prioritization-trap/).

6. **The discomfort is the job, not a bug in it.** Acting on incomplete information, sitting with the unease of not-fully-knowing, and committing anyway - that *is* judgment. It doesn't go away with seniority. You just get less afraid of it. Managers don't feel more certain than you; they've made peace with feeling uncertain and moving regardless.

## The part the playbook doesn't fix

I want to be honest, because management didn't actually solve all of this for me either.

The grief is real. That feeling of the work no longer teaching you anything - I had it the year I stopped writing code. The management playbook teaches you to carry the load. It does not give you back the deep, hands-in-the-dirt understanding that made the work feel like *yours*. You trade depth for leverage, and on the bad days it feels like a worse trade than it is.

And nobody actually knows yet whether a world where machines write most of the code and machines review it actually holds together. But if engineers are now living the manager's life whether they chose it or not, the least we can do is hand them the lessons we paid for the hard way. A lot of what feels new about cognitive debt isn't new. It's just management, arriving early and uninvited.

I keep [writing little meditations](https://github.com/vtorosyan/em-meditations) about managing the mess, keeping your composure while entropy wins, and the quiet relief of accepting what you don't control. Turns out that's becoming everyone's problem now, not just managers. The dichotomy of control was never really about productivity. But faced with a machine that can generate infinitely more than you can absorb, it might be the most practical thing left: you have limited time and limited power, so spend them where they're yours, and let the rest go.
