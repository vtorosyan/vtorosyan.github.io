---
title: "Switching Teams as an Engineering Manager: How I Structured My Onboarding"
layout: post
---

At Grafana Labs, we don’t just support internal mobility, we actively encourage it. So here’s some long-overdue news: after five years supporting the Identity and Access team, I’ve moved to lead the Synthetic Monitoring and Session Replay squads.

When I made the decision, I expected complexity. What I didn’t expect was how disorienting the transition would feel.

In the first week, I almost felt like I hadn’t just changed teams - I had changed companies. A new domain. A new vocabulary. New product surfaces. New stakeholders. Different operational realities.

And somewhere in that first week came a quiet realization: if I didn’t approach this intentionally, I’d spend months reacting instead of learning.

So I treated onboarding as a project. Not something that “just happens,” but something I would design.

## My Onboarding Phases

I split my onboarding into four concrete phases. Not because I thought reality would follow the plan perfectly, but because without structure, everything feels urgent and nothing feels clear.

### Phase 0 - Pre-Day 1: Build a Map

Before officially starting, I focused on building a rough mental map. I read strategy documents, OKRs, roadmaps, past retros, Slack threads. I tried to understand how the department talked about itself.

The goal was not depth. It was orientation. By the time Day 1 arrived, I didn’t understand the system, but I knew the vocabulary.

### Phase 1 - First 2 Weeks: People Before Software

In the first two weeks, I deliberately biased toward conversations over diagrams.

I asked:

- What frustrates you today?
- What are we pretending is fine?
- Where does work get stuck?
- If you could fix one thing this quarter, what would it be?

I resisted the urge to dive deep into software too early. Understanding how the team experiences the system is more important than understanding the system itself. You can always learn code. Trust is slower.

### Phase 2 - Weeks 3-4: Walk the Product

This is where I forced myself to stop reading and start using.

I walked the lifecycle end-to-end as a user.

- instrumented a small demo app.  
- created checks.  
- triggered failures.  
- followed alerts.  
- wrote k6 tests.  

Not to test the product, but to test my understanding. This phase revealed more gaps in my mental model than any document could. It also surfaced something important: friction often lives at the boundaries between products, not within them.

### Phase 3 - End of Month 1: Reflect Publicly

At the four-week mark, I wrote and shared a reflection. Not a polished summary, a real one.

- What did I learn?  
- What surprised me?  
- What still confused me?  
- Where was I behind?  
- What would I focus on next?

One uncomfortable realization was this: my job at that moment was to ask better questions, not to provide fast answers. If that sounds obvious - it’s not.

As a manager, there’s pressure to demonstrate clarity quickly. But clarity in a new domain takes time. Pretending to have it only creates fragility later.

Naming what I didn’t understand reduced the pressure to fake confidence. It also created space for the team to help me build context. Transparency during onboarding builds trust faster than posturing.

## Reverse Engineering the Goals (Even If I Later Threw It Away)

One of the exercises I tried early on was to reverse engineer the squad’s goals. I synthesized what I thought the real objectives were and asked the team and PM: “Did I get this right?”

In hindsight, the document was probably too verbose and too heavy. It’s not something I would keep long term. But the exercise forced me to confront misalignment early.

Sometimes the value of a document isn’t in keeping it. It’s in thinking through it.

## Treat Onboarding Like Data Collection

For the first month, I aggressively took notes.

- Every 1:1.  
- Every architectural explanation.  
- Every Slack clarification.  
- Every moment where I realized I had misunderstood something.

I didn’t try to be elegant. I tried to be exhaustive. Over time, I started structuring those notes more intentionally. Onboarding, especially in a technical domain, is a data collection phase. You’re mapping a system that already exists, with its history, assumptions, and tensions.

Here are some patterns that helped me structure that data:

**1. One-sentence summaries.**  
After each major conversation or topic, I tried to write one sentence I could rely on later. If I couldn’t summarize it clearly, I probably didn’t understand it well enough yet.

**2. Facts and open questions per domain.**  
For each product or sub-system, I separated what I knew from what I didn’t. Writing down open questions made uncertainty explicit instead of vaguely uncomfortable.

**3. An observation log - who said what.**  
Not in a political way, but in a pattern-detection way. Different perspectives reveal different parts of the system. Over time, themes start to emerge.

**4. Hypotheses and tensions.**  
As patterns formed, I wrote down emerging hypotheses:  

“Is private probes actually a product within a product?”  
“Are we optimizing for enterprise customers over small ones?”  

Capturing tensions early helped me avoid jumping to conclusions too quickly.

**5. A decisions log.**  
Some decisions I intentionally deferred during onboarding. I wrote them down explicitly. That way, deferring wasn’t avoidance - it was conscious sequencing.

Later, I used AI tools to summarize and cluster my notes. Not to replace thinking, but to accelerate synthesis. Onboarding is not about having opinions quickly. It’s about building a clear mental model over time.

**First gather signal. Then refine.**

## Ask for Direct Feedback

Rather than assuming alignment, I asked explicitly:

> Is there anything you were expecting to see from me that you’re not seeing?

That question changed the tone of onboarding. It surfaced implicit expectations that no checklist would have captured.

Feedback during onboarding isn’t about evaluation. It’s about adjusting trajectory.


## What Worked

1. Phased onboarding gave structure to uncertainty.  
1. Walking the product exposed real friction.  
1. Shadowing on-duty revealed operational reality.  
1. Writing reflections forced synthesis.  

Most importantly, being intentional created momentum.


## What I’d Do Differently

Reverse engineering goals was useful but time consuming.  
1. I underestimated how much institutional knowledge lives only in people’s heads.  
1. I delayed parts of hands-on exploration longer than I should have.  
1. I still lack full business context in certain areas.

But onboarding is not about finishing. It’s about trajectory.

## Closing Thought

Switching teams as an Engineering Manager isn’t about proving yourself quickly. It’s about building clarity - of the domain, the people, the risks, and the direction.

You don’t need all the answers in the first month. You need structure. You need signal. And you need the humility to admit what you don’t yet understand.

In a follow-up post, I’ll write about what I learned when I tried to understand Digital Experience Monitoring by walking the lifecycle as a user, and why that exercise reshaped how I think about product clarity.