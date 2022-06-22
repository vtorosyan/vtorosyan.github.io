---
layout: post
title: Synchronous, collaborative code reviews
---
 
In my previous post I have talked about how we do [collaborative programming in a remote-first environment](https://vtorosyan.github.io/collaborative-programming/) in our team at Grafana Labs. At Grafana Labs, we practice [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) and get code changes merged to the main branch several times a day, and part of the process is mandatory code review by someone else. Most of the code reviews happen asynchronously, with the help of [GitHub pull requests](https://github.com/grafana/grafana/pulls). Recently we have started to practice synchronous collaborative code reviews and this post talks about some of the advantages that we are observing while experimenting with the process.

**Please note** that this post does not talk about the asynchronous code reviews and my intent is not to compare or anyhow undermine asynchronous code reviews - my only intention is to give another tool for code reviews, which might be applicable in certain situations.
 
## Introduction to code reviews
 
Code reviews are essential for continuous improvement of the code base and security of the product, as well as for knowledge sharing and learning from each other. There are a few different ways that code reviews can be performed:
 
1. Asynchronous, through GitHub pull requests / checked in code.
1. Synchronous, during a [collaborative programming](https://vtorosyan.github.io/collaborative-programming/).
1. Synchronous, in a dedicated code review session.
 
Asynchronous code reviews are widely known, and during collaborative programming code reviews happen organically, so I would like to talk about **synchronous code reviews in a dedicated code review session**.
 
## Why synchronous reviews?
 
For an average sized code change, asynchronous reviewing can be challenging and it comes with certain costs - lack of context and latency of conversations are some of the reasons.
 
**Lack of context**
 
Even in a small team, where the changes don't leave the scope of the team, lack of context leads to hard reviews. As a change owner, you can eliminate the problem by well written change description or any other form of documentation, however sometimes without first-hand context as a reviewer you still might be lacking very important details.
 
During a synchronous review, code change owner and reviewer are in the same room, context can be shared real-time and questions clarified very quickly. This also helps both sides to gain new perspectives and challenge each other.
 
**Latency of conversations**
 
Getting questions answered, updating changes and addressing comments introduce extra latency in getting the changes shipped to the trunk. This gets especially harder and longer when reviewers have dozens of code changes to review. It also leads to late reviews and comments. Synchronous reviews help to minimize the time from comment to code change/clarification.
 
## Preparing for a review
 
Before jumping to a synchronous session, we use the following template as a guide to prepare for the session:
 
-[ ] Have a code change (e.g. Pull Request in GitHub) ready, ideally with a green CI.
-[ ] Prepare _context_ in advance - with a code change description or additional document.
-[ ] Ensure that the review can be done in max 1 hour (size the change correctly).
-[ ] Send a calendar invite, outline goals clearly.
 
Note that it is not expected that participants will talk all the time - being silent and reading code is more than fine.