---
title: "What to do when AI is quietly making you worse"
layout: post
---

I've been thinking about this for a while now, and a [recent Root Cause podcast conversation](https://youtu.be/YUZ_Gq8Q14A?t=2188) pushed me to finally write it down. In the podcast they talking about something that I suspect a lot of engineers feel but rarely say out loud: you might only need deep system knowledge 1% of the time, but that 1% is often the moment that matters most. And AI is quietly eroding exactly that.

This isn't a "AI bad" post. I've been using it heavily - for coding, for analysis, for thinking through hard problems. The throughput gains are real. But throughput and understanding are not the same thing. And I think we are, collectively, choosing throughput in a way that we'll regret.

## What actually erodes

The risks aren't dramatic and they are not immediatly visible, they're slow and they're invisible.

When you stop fighting with hard problems directly, the mental models fade. You stop building intuition. You start pattern-matching on outputs instead of reasoning from first principles. And the worst part --> you don't notice it happening. The code still ships. The PR still merges. Everything looks fine until the incident at 2am where you genuinely cannot reason about what the system is doing because you never really had to learn it.

There's a good analogy here from aviation. Pilots trained heavily on autopilot gradually lose the ability to fly manually and this isn't theoretical, it's contributed to real crashes. Air France 447 is the well-documented case. The response from regulators wasn't to ban autopilot, it was to mandate manual flying hours. The industry recognized that certain skills only stay alive through deliberate practice, and built that practice back in artificially. **We haven't done anything equivalent in software yet**.

The junior problem is where this gets most acute. New engineers joining today may never develop system intuition the way the previous generation did, because the friction that forced learning is gone. Getting stuck for hours on a weird race condition, debugging by reading logs, writing something from scratch and not understanding why it was slow - those were annoying, but they put knowledge in your head in a way that reading the answer doesn't. We're removing that forcing function without replacing it with anything. The people who need the reps most are the ones who never get them.

## The three things that actually still matter

A few days ago I organized some thoughts on this in an internal talk, and I keep coming back to the same framing: engineering right now boils down to three things.

**What problem should you solve?** This requires taste, judgment, closeness to the customer. Cannot be outsourced to AI.

**How should you solve it?** Architecture, tradeoffs, understanding the system. Fundamentals compound here: a 25-year engineer's grasp of OS internals still makes them dramatically better even as AI does more of the actual coding.

**Actually solving it.** AI is handling more and more of this. It's the part changing the fastest.

The trap is thinking the third thing is the whole job. It was never the whole job. It just happened to be the most visible part. Now that it's getting automated, the first two things are getting exposed as the actual leverage and a lot of engineers aren't ready for that.

## What nobody talks about: how do you actually develop judgment?

Everyone says judgment will matter more. Agents will do the thinking, humans will make the decisions. Fine. But nobody really explains how you develop that skill, or how you avoid losing it.

I think judgment is built from a specific loop: you form a view, you commit to it, you see what happens, and you update. That cycle, repeated enough times, is what builds calibration. The problem with AI is that it short-circuits the first step. You skip forming your own view and go straight to evaluating someone else's. Do that enough and the muscle atrophies and again, not dramatically, just quietly. You become a better reviewer and a worse thinker.

Two practices I've found actually help, and they're related.

1. **Write before you look.** Before opening a tool, before asking the model, write down what you think. Not a design doc necessarily, just your current understanding of the problem, your instinct about the solution, where you think the tricky part is. Even a few sentences. This forces you to articulate your reasoning rather than pattern-match on someone else's output. It's also surprisingly useful as a diagnostic: if you can't write anything, you probably don't understand the problem well enough to evaluate any answer.
2. **Form a view before reading the suggestion.** When reviewing AI-generated code or design, read it critically with your own opinion already in hand. What would you have done? Where does this differ? Why might the model have gone this direction and is it right? This sounds small but it's the difference between passive consumption and active evaluation. One builds judgment, the other just builds familiarity with AI output.

These aren't perfect solutions. But the broader point is: judgment is a skill that requires reps of deciding, not just approving. If your job becomes mostly approving, you need to manufacture the deciding reps somewhere else deliberately.

## What you can do (what I'm trying to do)

This is the part I want to focus on, because the problem is obvious enough. What's less obvious is what to actually do about it.

1. **Own the problem before touching the tool.** This sounds basic but I'm surprised how often I catch myself reaching for the editor before I've really understood what's broken. Spend more time with the customer: their pain, their workflow, their confusion. The real leverage is there, not in how fast you can generate code.
2. **Debug production manually.** On-call rotations and post-incident reviews are now, weirdly, one of the last places where you're forced to understand the system as it actually behaves. Treat them seriously. Don't rush to close the incident. Understand what happened.
3. **Read code you didn't write.** Especially AI-generated code. If you can't explain a PR to a teammate, you don't own it yet. Ownership is not clicking merge - it's having the mental model.
4. **Write the doc before the editor.** Design documents are where thinking happens. Not as bureaucracy, as a forcing function for understanding. If you can't write a coherent design doc, you probably don't understand the problem well enough to solve it. AI won't tell you that. It'll just generate something plausible.
5. **Develop taste for where the model breaks.** This is becoming a core skill on its own - knowing when to trust the output and when to be suspicious. It requires deliberately trying to break things, chopping problems small, iterating in environments where failure is cheap. You rebuild this intuition with every new model release.
6. **Protect your cognitive load.** Stop doing for the sake of doing. There's a kind of energy around AI tooling right now where everyone is just... moving fast. Sometimes the most valuable thing you can do is slow a teammate down and ask "do you actually understand what this does?" That's not friction. That's engineering.
7. **Start an experimental knowledge log.** This is something I've been building for myself and I think it works well enough to propose as a team practice. The problem with documentation is that it requires intent, someone has to decide to write it, keep it current, and remember it exists. That bar is too high, and everyone knows docs go stale. What I'm doing instead is capturing traces: small observations, things that surprised me, edges I hit, decisions I made and why. Not polished, not structured. Just logged. The mechanic that makes it actually stick is keeping the friction near zero. A Slack reaction on a thread, for example, can trigger an update to a shared knowledge base - you're already reacting to things that matter, you're just routing that signal somewhere it doesn't disappear. The key insight is that the *noticing* is happening anyway. Most of the time it just evaporates. An experimental knowledge log is a cheap way to leave traces without turning every observation into a documentation task. It also does something else: it forces you to stay in the habit of noticing. Of thinking "this is worth remembering." That instinct is exactly what erodes when you outsource too much to AI.

## The thing that worries me most

It's not the people who are aware of this problem. It's the ones who aren't.

Most engineers I know who are heavy AI users are thoughtful about it. They're asking these questions. But the tooling is being adopted way faster than the culture of careful use is developing. And organizations are rewarding throughput metrics - PRs merged, features shipped - in ways that actively discourage the slower, deeper work that builds the 1% knowledge.

That 1% is not evenly distributed. It lives in the engineers who've debugged enough production incidents, read enough weird kernel behavior, sat with enough confusing systems long enough to develop genuine intuition. We're not replacing those people, we're just not making new ones.

The real gap right now is not execution. It's clarity of thought and closeness to the problem. AI is making execution cheap. That should mean we invest more in the other two. Instead, a lot of teams are just doing more execution.