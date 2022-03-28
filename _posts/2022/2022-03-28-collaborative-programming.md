---
layout: post
title: Collaborative programming in remote-first environment
---
 
[Grafana Labs](https://grafana.com/){:_target="blank"} is a remote-first company. We hire and work with people from all over the world. The team I am in is a 10 person team is distributed across 5 countries (you can read more about our team [here](https://grafana.com/blog/2022/01/07/building-an-effective-remote-first-team-during-the-pandemic/){:_target="blank"}. Sometimes we leverage benefits of synchronous communication and collaboration, however as an all-remote company, most of the work happens asynchronously. Recently we started experimenting with synchronous collaborative programming and I was putting together a guide for our team to use as a reference and I thought of turning it into a blog post.
 
### Clarification on collaborative programming
 
Collaborative programming is more known as pair programming. The word "pairing" carries a lot of baggage with it and sometimes triggers negative reactions, or can intimidate people who are willing to collaborate. In my experience, if you want to get a buy-in, indeed using "collaborative programming" wording over "pair programming" makes a difference. And fair enough - if we look into the official definition, collaboration is about two or more people working together to create or achieve something, whereas pairing is simply when you put two people together. So to me personally, pair programming makes less sense than collaborative programming in the given context, so I chose to use collaborative programming as a term in this blog post.
 
# Why collaborative programming
 
As it's described in [M. Fowlers blog](https://martinfowler.com/articles/on-pair-programming.html#Benefits){:_target="blank"}, it is a common expectation (not science) that collaborative programming leads to better quality and team flow. Some of the specific benefits include:
 
- **Knowledge sharing**: Having two (or more) people working on the same problem encourages people to share knowledge, exchange ideas and expertise. It helps to avoid knowledge silos (increases the [bus factor](https://en.wikipedia.org/wiki/Bus_factor){:_target="blank"} of the team) and different perspectives lead to more alternatives and typically better solutions. It also helps to onboard new people in the subject domain more easily (e.g. new joiners), as the knowledge sharing happens real time.
- **Less work in progress**: Too much work in progress is one of [the five thieves of time](https://itrevolution.com/the-five-time-thieves/){:_target="blank"}. When two people work on the same task, it leads to less WIP. It helps to increase overall focus of the team and limit the number of work-streams happening in parallel (which itself helps to have manageable cognitive load of the team).
- **Real time code reviews**: PR reviews is another form of collaborative programming. You send a PR and someone eventually reviews the work asynchronously. Collaborative programming brings to live - so you get the same outcomes as from PR review, just in time. Imagine, you can even claim that you don't need 3rd person to review the work as you have already done so during the session!
- **Focus time**: In the distracted world we are living, one of the most faced challenges are the distractions we are having in a day to day life. Collaborating with someone else enforces you to avoid distractions, so it helps with increased focus which benefits not only the work, but also you as an individual (you will be less 🥱 ).
 
# Collaborative programming in practice
 
Collaborative programming is all about - collaboration. There are several factors contributing to the quality and success of the collaboration and it is important that people who are going to collaborate are on the same page about a few important things in advance.
 
## Style preferences in remote environment
 
In a physical setup, there are many more options for collaborative problem solving. In a remote environment we need to be more considerate when choosing a certain style. The most common style is known as [driver/navigator](https://martinfowler.com/articles/on-pair-programming.html#DriverAndNavigator){:_target="blank"}. In short, the driver is the person on the keyboard who does the actual job of writing code, the navigator is the observer - they give direction, hints, support on challenges etc. For the session to be successful it is very important to agree on roles in advance.
 
## Transparency of preferences
 
Not everyone likes collaborating real time on problems, it is very critical to respect each other's preferences and needs. There are few considerations which would help to make your intentions and preferences clear.
 
- Write a short readme and mention how you like working and if you like collaborative programming or not. 
- In your calendar, put an event as an indicator that you are open for collaborating during those hours. For example, you can title the event as "Open for collaborating". Having a specific event with a specific time window helps to manage expectations and avoid unwanted situations when you can't say "no".
- In your daily rituals, bring up to the team your desire to do some work together. Sometimes you just want to collaborate one day but not the other way, bringing up this in dailies gives ad-hoc opportunities more chances.
 
## Be clear about your expectations
 
Once you agree with someone to do collaborative programming, it is better to align expectations and plan how you will do it. There are few considerations to make:
 
- Time management: How long will you work? How do you want to organize breaks?
- Decide on roles: Who will be the driver? Who is the navigator? Are you going to rotate roles, if so how and when?
- Tooling: What tools are you going to use? Does everyone have all the necessary setup?
 
Below is a quick template you can use to organize above mentioned points:
 
- [] Agree on the high-level goal and write it down somewhere.
- [] Agree on a time window when you will work together and plan breaks.
- [] Agree on roles and how you will rotate roles.
- [] Break the work into a handful of tasks and prioritize them.
- [] Agree and set up the necessary tooling.
- [] Configure git to share credit (see below).
- [] Analyze the session with a mini retro. Ask for feedback from each other.
 
## Acknowledge the work
 
It is good practice to add your pair as an author to the commit you're working on.
 
It's as simple as adding a new line to your commit message (assuming you are using Git) with Co-authored-by: NAME <EMAIL>
 
```
$ git commit -m "Feature: Add toggle switch.
 
 Co-authored-by: NAME <EMAIL>"
```

## Avoid pitfalls
 
- Don't micromanage, avoid low-level instructions if possible. Don't rush on pointing out errors, give each other a chance to reflect and think.
- Try to avoid distractions and interruptions. Meetings might come or will be there, so it's important to agree on timing in advance to do your best.
- Don't go fast, check-in with each other to make sure everyone follows the progress.
- Be aware about power dynamics and avoid its impact during the session. Not everyone has the same experience and knowledge, it is important to be welcoming to all experiences and not discouraging each other.
- Be aware that intense collaboration is hard and each of us takes it differently. Ask each other if anyone wants to take a break or stop, avoid unproductive programming.
 
## Tooling
 
There are many tools available nowadays which enable remote collaborative programming, I am going to list a few of the tools I have personally tried out. What tool to use really depends on the kind of a problem you are going to solve, so I'd recommend doing your own research and picking one which works best for you. Here are few suggestions:
 
- Visual studio code with [live share extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) for coding and writing.
- [Miro](https://miro.com/app/) for creative problem solving, architecture design and brainstorming.
- https://tuple.app/
- https://atom.io/packages/motepair
- https://www.coscreen.co/
- https://pop.com/
 
# Acknowledgements and references
 
There are tons of references and articles about collaborative programming (try searching "pair programming" though, it will give you more results). I found [Tuple's pair programming guide](https://tuple.app/pair-programming-guide/the-case-for-pair-programming){:_target="blank"} really great and have used some of the suggestions in this blog post, also I'd definitely recommend the [On Pair Programming](https://martinfowler.com/articles/on-pair-programming.html){:_target="blank"} article which gives tons of context and knowledge.
