---
title: "Performance mirror - a tool for radical self-inquiry"
layout: post
---

As an engineering manager and leader, the hardest part of my job has always been performance management. Giving and receiving feedback is never easy, but it's also not just about feelings or hard conversations. There’s a huge monetary aspect to it. Companies spend millions every year on exit packages and terminations, often within the first year of a new hire.

You can train yourself to handle these situations well, build the muscle, develop frameworks, but it never becomes easy. And deep down, I’ve always wanted it to be easier.

Over time, I learned to do the hard thing. But I kept wondering: is there a way to make it simpler?

## The deeper challenge of performance

When it comes to performance, a few challenges keep showing up:

1. **It puts people in a vulnerable position.**  

Feedback - whether you're giving or receiving - triggers insecurity. We crave safety and predictability. There’s a primitive survival mechanism in our brains: if we can predict what’s coming, we feel safe. If not, our alert systems fire up. That’s why the darkness is scary and daylight isn't. So the core question becomes: *how do we make performance predictable?* What leading indicators can increase our chances of knowing where we'll end up in N months?

2. **TTA and TTR matter more than we realize.**  

These two metrics - **TTA (Time to Awareness)** and **TTR (Time to Resolution)** - quietly drive a huge portion of performance outcomes.  
   - High TTA means it takes too long to recognize when something's off.  
   - High TTR means it takes too long to address it once we do.  

Together, they lead to misalignment, wasted time, and preventable exits. So I ask myself: *how do I reduce both TTA and TTR?*

3. **Most people aren’t radically self-aware.**  

Some level of self-awareness is common. But radical self-awareness - the kind that forces you to face uncomfortable truths about your performance, strengths, and growth gaps - is rare. And that’s understandable: the truth can feel threatening. But I believe performance quantification can be a powerful trigger to start this kind of self-inquiry.

I've written about these ideas before - how I think about performance quantification for [individual contributors](https://vtorosyan.github.io/performance-reviews-quantification/) and [engineering managers](https://vtorosyan.github.io/engineering-manager-performance/). And while the theory made sense, putting it into practice has always felt hard.

So I decided to try something new: make it simple. At least, *simple enough*.

## Where do you start?

My starting point was a single idea:

> Imagine a world where nobody has to tell you how your performance is going - because you already know.

Not only that, you know your strengths (with evidence), your growth areas (with clarity), and you know what to do more of or less of. You’re not waiting for feedback or calibrations to course-correct. You're running your own process.

But that world is hard to reach. Most people get stuck on two things:
- *Where do I start this self-inquiry?*
- *How do I keep track of it over time?*

I explored this in another post: [managing growth and your career](https://vtorosyan.github.io/managing-growth-career/), which outlines a journey that starts with:
1. Understanding your values and principles
2. Building a map to guide you
3. Identifying the gaps and tools to get there

But I felt we needed more than a framework. We needed a tool.

## Introducing: performance mirror

So I built one. It’s a small web application called [**performance mirror**](https://github.com/vtorosyan/perf-mirror), based on the ideas from my blog posts. It’s still early and basic, but here’s what it can already do:

- **Role-based weights**: Configure weights based on your role and level (IC, Manager, Senior Manager, Director).
- **Level expectations**: Define expectations per role and level using a flexible admin interface.
- **Performance targets**: Track performance with a 5-band system that adapts as your career progresses.
- **Category management**: Define work categories under Input, Output, Outcome, and Impact (IOOI).
- **Weekly activity logging**: Log your work in IOOI format. Set scores or calculate automatically.

The whole thing was vibe-coded in Cursor. It felt great to build, because it felt useful. This is a tool I wish I had for the past 10 years.

As a proof-of-concept, the app does its job. But like any first version, it has its limits. The architecture is messy. It’s growing in complexity.

So now I’m asking: *What’s next?*

## What to expect next

We’re living in a time where building apps is easier than ever-thanks to AI, you don’t even need to vibe-code from scratch anymore. What matters most is *choosing a narrow, real problem to solve*. If it’s a real pain, the solution doesn’t need to be fancy. It just needs to help.

So here’s where I’m going next:

- **A career coach that knows your journey**  
  Tracks your history across jobs, accomplishments, struggles. Helps you find growth opportunities and make smarter moves.

- **Pluggable integrations**  
  Pulls in data from GitHub, RFCs, project tools—wherever your work lives.

- **Quantified performance with real recommendations**  
  IOOI-based performance tracking with tailored advice. Helps you reframe, recover, and progress.

- **Faster feedback loops**  
  Helps you reduce TTA and TTR-so performance issues don’t linger, and progress doesn’t stall.

## What I don’t want the tool to be

This is not a performance monitoring tool for managers or HR.

It’s a mirror. A tool to enable *radical self-inquiry*. A private coach. And a choice: to reflect, to share, or not.

Super excited about this journey. Let’s see where it goes.