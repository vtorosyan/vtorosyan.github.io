---
title: "Thoughts on the Agentic SDLC"
layout: post
---

I was reading [The Software Development Lifecycle Is Dead](https://boristane.com/blog/the-software-development-lifecycle-is-dead/) and had some loud thoughts I want to share.

## We still build software in stages

The article is mostly right: we have learned to build software in certain stages. There is usually a moment where we try to understand why something should exist in the first place (Product DNA). Then we move into design (RFC/Design Document), where we compare approaches and make sense of tradeoffs. Then we plan the delivery, break the work into pieces, and start building. And eventually we decide whether something is ready to ship (Definition of Done).

I strongly believe this basic shape still holds. I do not think it is going away.

What has changed, at least for me, is the kind of certainty we can expect at each stage. The structure is still there, but the meaning of the stages is shifting. What used to feel like a fairly direct path from problem to solution now feels more like a process of narrowing, testing, and discovering what the problem really is.

### Product Requirements

The first place I notice this is in Product DNA / Requirements. In the old sense, the document is supposed to help us define the problem clearly enough that the rest of the work can follow. That is still true, but with more AI-shaped work, the early stage feels **less like a definition and more like an exploration**. You start with a direction, a rough understanding of the user need, maybe even a strong intuition about the outcome you want. But you are often not writing down a truth so much as writing down the best version of your current understanding. The point is not to lock in the answer, it is to make the question explicit enough that the team can reason about it together.

That distinction matters. When the thing you are building has a more probabilistic or adaptive quality to it, the problem rarely reveals itself all at once. You might think you are solving one thing, and then the first real interactions show you the actual problem lives somewhere else. Or that the original problem was real, but incomplete. Or that the right framing is slightly different from what everyone first assumed.

So Product DNA becomes less about saying "this is exactly what we are building," and more about saying "this is the space we are trying to understand, and this is the outcome we care about." It is still useful for alignment. It just needs to leave room for discovery.

### RFC / Design Docs

Design docs change in a similar way. They still matter, because they are where we make tradeoffs visible and force ourselves to be honest about the implications of different approaches. But in a world where system behavior is not always fully predictable from the outset, design docs feel less like a final specification and more like a way to structure the investigation.

That does not mean they become vague. It means they should be **more explicit about uncertainty**. A good design doc in this world should say not only what we think we will build, but what we still need to learn before we trust that direction. It should capture the options we considered, the assumptions we are making, and the places where we expect to change our minds once we have more signal.

That leads naturally into the part of the process that often gets treated as secondary, but should probably be treated as central: exploration. Call it a POC, a prototype, an experiment, or just "trying it out." The label does not matter much. What matters is that some questions cannot be answered by documents alone.

You can write a convincing product brief and still be wrong about whether the experience is actually useful. You can produce a thoughtful design and still miss how the system behaves once a real user gets involved. You can plan a delivery perfectly and still discover that the thing you thought was a milestone was really just the beginning of the work.

That is why the exploratory phase starts to feel less optional. It is not a side quest before the "real" project begins. In many cases, it is where the real project becomes visible. The role of exploration is not just to de-risk implementation, it is to reveal what the system actually needs to be. That is a different job.

### Delivery Plans

Delivery plans also carry a slightly different meaning now. They still help us sequence work, manage dependencies, and create a sensible path forward. But when the thing being built requires more learning along the way, milestones become less about completion and more about confidence. A milestone is not just "the code exists." It is also "we know enough now to make the next decision with less uncertainty than before."

That is a subtle but important shift. Progress is not just measured by output, it is measured by what we have learned. Sometimes the most valuable thing a milestone gives us is not momentum, but a correction. It tells us the original idea was close, but not quite right. Or that the system needs a different shape than we expected. Or that the thing we thought would be central turns out to matter less than something we discovered along the way.

### Definition of Done / Readiness

This is the part of the workflow that tends to stay the most recognizable, because there is still a real need to ask whether something can be operated safely and reliably. That does not go away. If anything, it becomes more important. But the standard for readiness shifts too. It is not enough to know that something runs. We also need to know whether we can understand its behavior, measure its quality, and notice when it begins to drift.

That is where observability and evaluation start to matter in a deeper way, not just as operational hygiene, but as a way of owning the behavior of the system after it ships. The more adaptive or probabilistic the system is, the more important it becomes to understand not only whether it is up, but whether it is still doing the right thing. That means closing feedback loops earlier, and making sure the system can teach us when it is getting worse rather than just failing loudly.

## Closing thoughts

I do not think the answer is to invent an entirely new lifecycle (though there are attempts, like [asdlc.io](https://asdlc.io/)). The old structure still gives us something valuable. It creates shared language. It creates checkpoints. It keeps teams from skipping the hard conversations.

The process stays, but the meaning shifts.