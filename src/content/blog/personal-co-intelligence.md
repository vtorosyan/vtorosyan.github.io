---
title: "Building a personal co-intelligence"
date: 2026-07-07
---

For years I've kept a personal wiki: a second brain, a knowledge base, whatever the fashionable name was at the time. It was fine for reactive lookup - a customer asks a question, I search my notes, I have the answer. What it was never good at was staying alive. Keeping it current was the exact kind of tax I'd deprioritise on any busy week, and every week was a busy week. Every previous attempt to build a Real System around it needed too much maintenance and quietly rotted.

AI changed the economics here. Not because the tools generate insight - they don't - but because they drop the maintenance cost of a system far enough that it's finally worth having one. This post is the concrete version of a point I made in the [last one about cognitive load](/there-is-too-much/): externalise the state so your head is free for judgment. Below is what I've actually built, and where I've drawn the line about what I won't hand off.

## The context

I support two squads at Grafana - Synthetic Monitoring and Session Replay - and I'm involved in the broader Digital Experience Monitoring strategy. That's a lot of threads. Slack channels, design docs, on-call rotations, RFC discussions, incident patterns, product decisions made in a thread nobody indexes. Most of that information exists somewhere. Very little of it exists anywhere I can actually find three weeks later.

## The shape of the system

There's a git repository. Inside it, a `wiki/` directory of markdown files, one per domain - Synthetic Monitoring, Session Replay, DEM, department, ai-skills. Each file has a `## Notes` section at the bottom where entries accumulate over time. That's the substrate. Everything else operates on it.

There's also a `manifest.yaml` at the root that lists the sources I care about - Slack channels, Google Doc URLs, project names, DRIs, statuses - grouped by area.

```yaml
name: Synthetic Monitoring
area: synthetic-monitoring
channels:
  - synthetic-monitoring-dev
  - proj-sm-cost-attribution
docs:
  - https://docs.google.com/...
```

Curating the manifest is deliberate. I could have automated it - auto-discover channels I post in, auto-add docs I open - but I've kept it manual on purpose. Choosing what to track is a small weekly act of paying attention. If I ever stop finding it worth doing, that's a signal, not a task to route around. A tiny `/manifest-add` skill makes the mechanics painless, so the only friction left is in the deciding, which is the point.

## What runs against it

The wiki files are inert on their own. The value comes from the slash commands that read and write them. All of them run in Claude Code, in this repo.

**`/wiki-scan`** - the workhorse. On a schedule every morning it reads the manifest, searches every listed Slack channel for messages since the last scan, checks whether any linked Google Docs changed recently, runs a privacy filter (customer names, ARR, PII - redacted or stripped), sorts what's wiki-worthy from what's noise, appends new entries to the right files, opens a PR, and sends me a Slack DM with a summary and a link.

Most days it finds nothing interesting, which is fine - that's the base rate I'd expect. Some days it catches a decision I missed in a thread I never saw, or a pattern across incidents I'd have needed weeks to notice on my own. The privacy filter isn't optional. It's the thing that makes me trust the process enough to actually leave it running, so it's the first non-negotiable step.

**`/week-plan`** - reads pending tasks from Taskwarrior (I've been a Taskwarrior user for years and haven't found anything I like better), reads the last week of wiki notes for context and any action items I've committed to, and produces a prioritised plan for the week. The prioritisation isn't magic. It's ordering by priority tags and area, weighted by the strategy docs and OKRs I've told it to consider. What it actually saves me is the framing cost of building a plan from a blank page on a Monday morning. It also proposes new Taskwarrior tasks for anything the wiki surfaced that isn't already tracked, and asks before adding them.

**`/task`** - a small skill I built because I'm lazy about Taskwarrior's syntax. Natural language in, `task` commands out. "Mark the tenant-limits thing done." "Add a task to follow up with Mark tomorrow, high priority." Nothing clever about it. It just removes the last bit of friction between me and my own list.

**`/github-digest`** - PR health across the repos my squads own. Stale open PRs, drafts sitting too long, PRs where I'm a reviewer. It also cross-references my Google Calendar for the day's 1:1s and bubbles up open PRs by the people I'm about to talk to. This one earns its keep before every 1:1-heavy day.

**`/project-status`** - an on-demand status card for any project in the manifest. It reads wiki notes and the last two weeks of Slack activity for that project, then synthesises what's done, in progress, blocked, and the next milestone. I use it before a meeting I don't want to walk into cold. A `--share` flag posts the card to a Slack channel or DM when I want the summary visible to the team and not just to me.

There are a few smaller ones - `/wiki-update` for direct notes, a `/sm-tenant-limit-override` runbook for a specific ops task - but those five are the core.

## What actually changed

A few things I didn't expect.

**The threshold for "worth keeping" dropped.** When maintenance is free, the wiki starts collecting the kind of low-signal note I used to dismiss as clutter: a small design decision, a passing observation about an incident, a customer's odd framing of a problem. Individually forgettable. Collectively, that's the layer where the patterns actually live.

**I trust it more than my own memory for the things I don't want to hold.** Which sounds unremarkable until you notice how much cognitive load leaks into keeping mental sticky notes on things you shouldn't have to carry in the first place. Offloading them isn't a productivity trick so much as getting attention back.

**The Slack DM matters more than the PR.** `/wiki-scan` closes its loop by messaging me. Without that, the whole thing would drift into a background job I'd never check. The DM is what makes the automation *observable* - I know it ran, I know what it found, I can override it. Same idea as [observable management](/observable-management/): if I can't see it, I don't trust it, and if I don't trust it, I quietly stop relying on it.

## The parts I've refused to automate

This is the part I actually want to be honest about.

**Curating the manifest.** Choosing what belongs in my field of view isn't a task, it's the job. Hand that off and I've automated away the one thing that keeps me pointed in the right direction.

**Deciding priorities.** `/week-plan` orders my tasks. It doesn't tell me what matters, and I want to keep it that way. The plan is a draft I edit, never the final answer.

**Writing where the writing is the thinking.** Design docs, promotion recommendations, hard 1:1 prep - anywhere the writing itself *is* the reasoning, I write it by hand. The model is useful for tightening prose, but if I let it draft the first pass I've skipped the part where I form my own view. I've [written about this before](/ai-making-worse/): judgment is built from the reps of deciding, not the reps of approving.

## What this actually is

Strip the tools away and what's left is a small system that captures state I'd otherwise lose, surfaces signal I'd otherwise miss, and hands me back the attention I'd otherwise burn on retrieval.

That's the bet. Not that AI will make me smarter - it won't. That the friction of running the *manager* half of the job, the tracking and retrieving and briefing and prioritising, can be dropped low enough that I get more of my day back for the parts only I can do.

It's not finished, and nothing about it is meant to be. But it's the first time in my career that a personal wiki has felt more like an asset than a chore, and I wanted to write it down before the shape of it changes again.

If you're building something similar, I'd love to compare notes.
