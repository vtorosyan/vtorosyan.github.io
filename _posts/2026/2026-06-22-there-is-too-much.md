---
title: "There is too much"
layout: post
---

I keep hearing from engineers lately: *there is too much going on*. Too many parallel threads. Too much code being generated to actually read. Big features merged that nobody could honestly claim to fully understand. On-call for code you didn't write and don't fully trust. And underneath all of it, a quieter admission: *the work isn't teaching me much anymore, and it's stopped being fun.*

I know that feeling well. Not from the AI era - from the day my peers became my reports.

When I transitioned to management at SoundCloud, the people I'd been coding alongside were suddenly on my team. The cognitive load was immediate and brutal. I was stretched in every direction and convinced I had to be on top of all of it: every PR, every decision, every conversation. I spent the first few months in a kind of frantic vigilance, trying to hold everything at once. I was doing everything poorly, and eventually I had to admit that to myself, which is a specific kind of awful.

What actually helped wasn't a mindset shift. It was aggressive prioritization - Shreyas Doshi's framework in particular - and the uncomfortable acceptance that I had to let some things go badly in order to do the important things well. That took years, not weeks. Five-ish, if I'm honest.

## This is just the job description of an engineering manager

Take the word "AI" out and read that list again:

- Accountable for output you didn't personally produce.
- Reviewing and steering all day instead of making.
- More threads in flight than you can hold in your head.
- Signing off on things you don't fully control or understand.
- Grieving the loss of the craft that made you good in the first place.

That's not a description of agentic coding. That's a description of becoming a manager. What AI did was give every engineer a small team of tireless, fast, occasionally-wrong direct reports. And with the team came the manager's problem. The discomfort engineers are feeling right now isn't an AI problem. It's a *delegation* problem, and delegation is the oldest unsolved problem in our discipline.

The good news: it's not unsolved because nobody tried. Managers have been failing at it and slowly adapting for decades. There's actually a playbook.

## The timeline nobody talks about

Here is the part that bothers me most. It took me roughly five years to get comfortable with the cognitive load of management. Five years of doing it poorly, admitting it, and slowly building the instincts to triage, delegate, and let go without losing the thread. Nobody demanded I be good at it in month two.

Engineers don't get that grace period. The token-maxxing era is over, ROI conversations are everywhere, and the pressure to show results from AI-augmented work is immediate. Companies bought into the narrative that AI solves the productivity problem - and that narrative doesn't leave much room for "we need time to figure out how to work with this well."

What I rarely see discussed is what this costs. Not in tokens, but in engineers who are quietly overwhelmed, building habits under pressure that don't actually scale, and losing trust in their own judgment because the tools move faster than they can make sense of. The delegation problem is hard. It took managers decades of collective failure to develop even a rough playbook. Expecting engineers to solve it in a quarter, while also shipping, is not a plan. It's just pressure with a narrative on top.

## Start with what's actually in your control

Before the tactics, there's an older idea underneath all of them. The Stoics split the world in two: the things that are up to you, and the things that aren't. Epictetus opens with it because everything else depends on getting it right.

"There is too much" is a true statement about the second pile. The volume of code your agents can generate is not in your control. The number of features other teams need is not in your control. You have limited time and limited power, and no amount of anxiety expands either.

What *is* in your control is small and it is everything: where you point your attention, what standard you hold, what you decide not to do, and whether you're honest about which is which. The whole reason "there is too much" feels like drowning is that we keep trying to exert control over the size of the ocean. You can't. You can only decide where to swim.

## What actually helps

None of this makes the load disappear. It makes it *carriable*.

1. **Separate ownership from authorship.** You own the outcome, not the lines. Ownership is having a model of where this thing breaks and what you'd do when it does - not having typed it. You can own code you didn't write. You cannot own code you refuse to understand. Those are different statements, and the gap between them is the whole job.

2. **Decide what you must understand deeply - then triage the rest without guilt.** You cannot review thousands of lines of generated code at equal depth, and pretending you can is how things slip. The 3am on-call path gets read line by line. The rarely-hit, easily-reversible stuff gets sampled. This isn't laziness, it's the [1% that matters](https://vtorosyan.github.io/ai-making-worse/).

3. **Externalize. The doc is not a crutch, it's the method.** Stop trying to hold it in your head. Every good manager runs on lists, not memory. Offload the state so your head is free for judgment.

4. **Build verification, not total verification.** You will not personally check everything. So you invest in the things that check for you: tests, types, a teammate's review, a smell test you trust.

5. **Letting something fail is a valid output.** Not everything in front of you has to get done, and the discipline is saying which things won't — explicitly, to the people affected, rather than letting them quietly rot. An unmet need you've named is a decision others can plan around. One you've buried under "we'll get to it" is a trap waiting to spring. The skill was never doing everything. It's [choosing what not to do, out loud](https://vtorosyan.github.io/prioritization-trap/).

6. **The discomfort is the job, not a bug in it.** Acting on incomplete information, sitting with the unease of not-fully-knowing, and committing anyway - that *is* judgment. Managers don't feel more certain than you; they've made peace with feeling uncertain and moving regardless.

7. **Keep something you understand deeply.** In my first year of management I made the mistake of letting go of everything technical at once. Don't. Pick one area - a service, a domain, a class of problems - and stay close to it. Not because you need to, but because it keeps your technical identity intact while everything else is in flux. It also gives you a reference point for evaluating everything else.

8. **Track what you're learning, not just what you're shipping.** It's easy to stay busy and stop growing without noticing. I wrote about this in [the last post](https://vtorosyan.github.io/ai-making-worse/): keeping a small log of observations, surprises, decisions and why you made them. Not polished documentation, just traces. The noticing is happening anyway. Most of the time it just evaporates.

9. **Talk to someone who has been through it.** The playbook transfers faster through conversation than through trial and error. Find a manager, a senior engineer, anyone who adapted to a similar shift and is willing to be honest about how long it actually took. Hearing "it took me two years and here's what helped" is more useful than most frameworks.

10. **Manage yourself first.** All of the above is really self-management wearing different hats. That's not soft advice - it's the hardest and most neglected part of operating under load. I've been [writing little meditations](https://github.com/vtorosyan/em-meditations) on exactly this: keeping your composure while entropy wins, and the quiet relief of accepting what you don't control. What started as notes to myself is starting to feel like everyone's problem now.

## The part the playbook doesn't fix

The management playbook teaches you to carry the load. It does not give you back the deep, hands-in-the-dirt understanding that made the work feel like *yours*. I had that grief the year I stopped writing code. You trade depth for leverage, and on the bad days it feels like a worse trade than it is. I don't think that ever fully goes away.

But if engineers are now living the manager's life whether they chose it or not, the least we can do is hand them the lessons we paid for the hard way. A lot of what feels new about cognitive debt isn't new. It's just management, arriving early and uninvited.
