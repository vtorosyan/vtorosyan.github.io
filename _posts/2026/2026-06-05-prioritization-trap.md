---
title: "The Prioritization Trap"
layout: post
---

In the last couple of weeks I've had a few separate conversations that, looking back, were all the same conversation. One was about community issues vs. customer asks. One was about whether we invest in new features or pay down engineering foundations. One was the usual short-term vs. long-term tension. Different details - but the same underlying problem every time: two things that both clearly matter, not enough capacity to fully do both, and a group trying to decide which one wins.

And in every one of them, sooner or later, someone said the obvious thing: "we need both."

"We need both" is almost always the correct answer. But it's also useless in the moment, because you can't *do* "both." You can't schedule "both." You can't tell an engineer on Monday morning to go work on "both." The answer is true and unactionable at the same time, and that combination is exactly what makes these conversations go in circles.

## "We need both" is a signal, not an answer

When the honest answer to a prioritization question is "we need both," that's not indecision. It's a signal that you're trying to decide at the wrong level of abstraction.

"Features vs. foundations" is not a decision. Nobody can actually pick between two categories, because both categories contain real, important work. The moment you try to choose one, your gut correctly objects and you're stuck.

The mistake is treating the big question as the thing to answer. It isn't. The big question is the thing to *break down*.

## What merge sort knows that we forget

There's an idea from computer science that I think about more than I'd like to admit, and it's the most boring-sounding one: divide and conquer.

Take sorting. You cannot sort a million items in your head. The problem is too big, there are too many moving parts, you have nowhere to even start. But you can *always* sort two items. That's trivial. So merge sort doesn't try to solve the big problem at all. It splits the list in half, and splits the halves, and keeps splitting until it's left with pieces so small they're embarrassingly easy and then it composes the sorted pieces back together, two at a time, all the way up.

> The trick was to make the unit small enough that the problem stopped being hard.

"Features vs. foundations" at the level of a quarter is a million items. But "what does *this one engineer* work on *this week*" is two items. That's a question a human can actually answer.

Because at the level of a single "sprint", you're no longer choosing *features or foundations*. You're choosing a **mix**. Maybe it's 70% feature work, 20% foundations, 10% community. Suddenly the unanswerable binary has turned into a ratio, and ratios are something we're actually good at reasoning about. You can argue about whether it should be 70/20/10 or 50/30/20.

> Decompose far enough and "either/or" becomes "what's the right mix" - and that is a dramatically easier question.

If you want the formal version: this is just **induction**. You don't prove the whole theorem at once. You prove the base case, then you prove that each step follows from the one before. You never have to hold the entire thing in your head. Prioritization works the same way - get the unit right, get the next step right, and the quarter takes care of itself.

## When it works: the parts have to be independent

Decomposition is not magic and I've seen it sold as if it were. The reason merge sort works is a property called *optimal substructure* - the solution to the whole is genuinely composable from the solutions to the parts. 

Sorting has it: sorted halves merge cleanly into a sorted whole. When your subproblems have this property, when they're independent enough that you can interleave them without one corrupting the other - decomposition works. This is the world of capacity splitting, sprint ratios, the 70/20/10 models. You slice the work, assign the slices, and the slices don't fight each other.

## When it's harder: dependencies

Sometimes the parts aren't independent. The foundation work genuinely has to land before the feature can be built on top of it. You can't interleave those in a single sprint, because one is a hard prerequisite for the other.

It just changes what decomposition buys you. When subproblems have sequential dependencies, you still break the big thing into small things, but instead of *parallelizing* the pieces, you *sequence* them. The output isn't a ratio, it's an order. "First this, then that, then the other." Which, again, is something a team can actually execute against, in a way that "features vs. foundations" never was.

## When it doesn't work at all

And then there are the decisions that genuinely resist decomposition, and it's important to recognize them, because trying to decompose them is its own trap.

"Should we go upmarket?" is not a question you can answer 70/20/10. You can't serve enterprise *and* not-serve-enterprise 70% of the time. These are strategic stance questions - they set the frame that everything else gets decomposed *inside of*. The substructure isn't optimal; the answer to the whole is not the sum of small answers, because a half-committed strategy is often worse than either direction taken fully.

These need a macro answer first. A real decision, made by someone with the authority to make it, ideally written down. Once that stake is in the ground, the work underneath can be decomposed. But if you skip the macro decision and try to ratio your way through a stance question, you get the worst of all worlds: a team busily interleaving subtasks that point in contradictory directions.

> So the skill is partly knowing which kind of problem you're holding.

## The question to actually ask

If there's one thing to take from all of this, it's a single diagnostic question to bring into the next "we need both" conversation:

> At what granularity do these competing priorities stop competing?

For most of them, the answer is smaller than you think  - usually a single sprint, or a single engineer's week. Zoom in to that level and the tension you were arguing about for an hour often just resolves into "okay, roughly this much of that, this much of the other, let's adjust in two weeks."

It connects to something I keep coming back to in other posts - that [planning for impact beats planning for predictability](https://vtorosyan.github.io/predictability-vs-impact/), and that the [traps in our work](https://vtorosyan.github.io/the-high-impact-trap/) usually come from operating at the wrong altitude. This is the same lesson wearing different clothes. The big question feels important, so we keep trying to answer it directly. But the leverage is almost never in answering the big question. It's in breaking it down until the answer becomes obvious.
