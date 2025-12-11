---
title: "The two clocks ticking behind every performance issue"
layout: post
---

I talked in the past about [the two metrics](https://vtorosyan.github.io/performance-mirror/) that quietly drive a huge portion of our professional outcomes: TTA (Time to Awareness) and TTR (Time to Resolution).

We often treat performance as a static grade: "She is a high performer," or "He is struggling." But performance is actually a function of speed. Specifically, the speed at which you detect gaps and the speed at which you close them.

Over and over I see people making the same mistake by looking at their or their team's performance as a "grade", but the reality changes when you start looking at the clocks of performance instead.

## The First Clock: TTA (Time to Awareness)

Time to Awareness is the latency between reality changing and you realizing it. This is the most dangerous clock because it ticks silently. You can have a TTA of six months and feel perfectly fine the entire time.

In engineering systems, we have tools (like the Grafana ecosystem) and alerts to keep TTA near zero. If a server goes down, we know in seconds. In human systems, we have... "politeness." We rely on social signals, which are often noisy. Managers delay feedback to "gather more data." Peers don't want to be "mean." We avoid self-reflection because it’s uncomfortable.

High TTA is usually a symptom of a low-feedback environment (or a low-receptivity mindset).


## The Second Clock: TTR (Time to Resolution)

Time to Resolution is the latency between knowing the truth and fixing it. Once the first clock stops (you know there is an issue), the second clock starts. This is where the work happens.

High TTR is rarely about laziness, it’s usually about ambiguity. "Improve system design" is a terrifying, vague goal. It’s too big to fix on a Tuesday afternoon. So we procrastinate. We wait for a "perfect time" to study that never comes.

High TTR is a symptom of poor definition.

## The Zone of Performance

If you plot these two against each other, you can map every stage of your career:

- High TTA / High TTR (The Danger Zone): You don't know you're failing, and even if you did, you wouldn't fix it fast enough. This leads to PIPs and surprise firings.
- Low TTA / High TTR (The Frustrated Stagnation): You are painfully aware of your gaps (maybe you have Imposter Syndrome), but you feel stuck. You analyze endlessly but don't ship improvements.
- High TTA / Low TTR (The Blind executor): You can fix anything you see, but you don't see enough. You need a strong manager to point you in the right direction constantly.
- Low TTA / Low TTR (The High Performer): You have a tight feedback loop. You know when you drift off course within days (or hours), and you correct it immediately.

## How to stop the clocks

### Reducing TTA (Know Sooner)

You cannot wait for your manager to tell you the truth. You have to hunt for it. Quantify your output: Don't just "work." Log what you shipped. Look at it at the end of the week. Does it look like a Senior Engineer's week? If you don't know, ask.

Ask for "leading" feedback: Instead of "How am I doing?", ask "What is the one thing I could have done better this week?"

### Reducing TTR (Fix Faster)

The only way to reduce TTR is to break the fix down until it looks like a ticket. Turn "Growth" into "Input": Don't put "Get better at communication" on your to-do list. Put "Write a 1-page RFC for the API migration" on your calendar.

Measure the inputs: If you want to improve, track the effort, not just the result.

### The ultimate hack

The best engineers I know treat their career like a production system. They hate latency. They don't wait for the quarterly review to find out if they are on track. They look in the mirror every week. They catch the drift early and course-correct before anyone else notices.

