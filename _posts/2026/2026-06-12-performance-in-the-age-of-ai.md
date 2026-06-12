---
title: "Revisiting performance in the age of AI"
layout: post
---

About a year and a half ago I wrote [a framework for quantifying software engineer performance](https://vtorosyan.github.io/performance-reviews-quantification/). The idea was simple: performance is a weighted combination of **input**, **output**, **outcome**, and **impact**, and if you score yourself weekly against agreed categories, you remove a lot of the friction and anxiety from review season.

AI agents are taking over engineerings tasks more and more, and I kind of assumed that this framework makes no sense anymore. However, after thinking about it I think I still stand behind the structure.

## What AI actually broke

I think AI does not break the four dimensions. It breaks the *cost structure* between them.

**Input got invisible.** Time spent coding used to be a rough signal of effort. Now the most valuable input often looks like nothing: reading code you didn't write, sitting with a confusing system, writing down your understanding before opening a tool. I wrote about this in [What to do when AI is quietly making you worse](https://vtorosyan.github.io/ai-making-worse/): the work that builds the 1% knowledge is exactly the work that doesn't produce a visible artifact.

**Output got cheap.** This is the big one. PRs merged, docs written, features shipped and so forth - volume of deliverables no longer tells you much about the person who delivered them. When output is cheap, measuring output is measuring nothing. Worse: it's measuring *willingness to generate*, which is not the same thing as engineering. This is Goodhart's Law playing out in fast-forward: the moment a measure becomes a target, and becomes nearly free to produce, it stops being a good measure.

There's also a sharper problem underneath: we are bad at judging our own productivity with these tools. [METR's 2025 study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) of experienced open-source developers became famous for finding that AI tools *slowed* them down by 19% and while METR later walked back the headline number after methodology critiques, the part that held up is the one that matters here: developers consistently believed they were ~20% faster regardless of what the clock said. If individual engineers can't subjectively tell whether AI is helping them, a performance system built on counting their outputs has no chance.

**Outcome and impact are still expensive.** Did the thing solve the problem? Did it move the business? AI hasn't made these cheaper, because they depend on the parts of the job that haven't been automated: choosing the right problem, understanding the customer, making good tradeoffs. If anything, they got *more* expensive relative to everything else, because now there's a lot more output competing for the same finite outcome.

In the old post I wrote that in fast-paced environments output may dominate the weights. I don't believe that anymore in any environment. If your performance system today still has a heavy w2, you're paying people to run a text generator.

## The dimension that is missing

Here's the bigger problem, and it's not a weighting problem. The framework measured what you *produced*. It never measured what you *learned*. I have realized this after reading the [Why We Still Suck at Resilience](https://resiliumlabs.com/book/) by Adrian Hornsby.

Learning was a defensible omission in 2024, because learning and producing were coupled. You couldn't ship a hard feature without building a mental model of the system along the way. The learning came for free as a byproduct of the output. The framework could ignore learning because output smuggled it in.

AI decoupled them. You can now produce a lot while learning almost nothing. The code ships, the PR merges, everything looks fine and your understanding of the system is exactly where it was six months ago. This isn't just my intuition anymore; the research is piling up. A [Microsoft and Carnegie Mellon study](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) of 319 knowledge workers found that the more confidence people place in GenAI, the less critical thinking they apply and that workers stop thinking critically precisely when they lack the skills to inspect and challenge the AI's output. Which is a brutal loop: the less you know, the less you question, the less you learn. MIT researchers studying AI-assisted writing coined a term for the long-run cost: *cognitive debt*. It's the right metaphor. Like tech debt, it doesn't show up in this sprint's metrics. 

The framework can't see the difference between an engineer who is compounding and an engineer who is accumulating cognitive debt. Both score the same. One of them is a problem you'll discover at 2am during an incident.

So if I were rewriting the equation today, it would look something like:

> Performance = w1(Learning) + w2(Judgment) + w3(Outcome) + w4(Impact)

Where **learning** is the rate at which your mental models of the system, the customer, and the domain are growing, and **judgment** is the quality of your decisions when the answer isn't obvious - which problem to solve, which tradeoff to take, when to trust the model and when to be suspicious.

I'm aware this looks like I replaced two measurable things with two unmeasurable things. That's sort of the point. The measurable half of performance got automated. What's left is the hard half, and pretending otherwise is how you end up with a team that's very busy and quietly getting worse.

## Can you quantify learning and judgment at all?

Partially, and imperfectly, and I think imperfect-but-honest beats precise-but-wrong. Some proxies that I am thinking about:

1. **Incident reasoning.** During incidents and post-incident reviews, can the person reason about the system from first principles, or only pattern-match on dashboards? This shows up clearly if you look for it. On-call is becoming one of the last honest performance signals we have.
2. **Explanation ownership.** Can you explain a PR you merged, including the AI-generated parts to a teammate without opening it? If yes, you own it. If no, you approved it. Those are different jobs and should be evaluated differently.
3. **Prediction calibration.** Before a project: what do you think will be hard, what's your instinct on the design, where will it break? After: how close were you? Engineers who write down predictions and review them build judgment visibly. This is the "write before you look" practice turned into an evaluation signal.
4. **Knowledge traces.** Things noticed, surprises captured, edges documented. Not polished docs but traces. An engineer leaving a steady trail of "this surprised me, here's why" is learning. An engineer leaving only merged PRs might be, or might not be, and you can't tell.
5. **Questions asked.** This one is uncomfortable and I'll come back to it in the next post. The engineers learning fastest are the ones saying "I don't understand this" most often. Most performance cultures punish exactly that sentence.

None of these fit neatly into a points table, and I'm resisting the urge to build one, because that urge is what got the original framework into trouble. The mechanics I'd keep from the old post are the cadence ones: weekly self-reflection, a brag document, regular check-ins with your manager. The thing being tracked changes; the discipline of tracking doesn't.

## What this means if you're an engineer

The practical advice from the original post still mostly holds: clarify expectations, agree on the system with your manager, document, check in regularly. What changes is what you should be optimizing for inside that system.

If your company still rewards output volume, you face a genuinely uncomfortable choice: optimize for the metric and hollow out, or optimize for learning and look slower on paper. I don't have a clean answer for that, because it's not a problem you can solve individually - it's a problem your organization's incentives create. Which is exactly what the next post is about: what happens to companies that keep rewarding performance theater: especially its most celebrated form, heroism, while the actual value of their engineers shifts to something their review systems can't see.