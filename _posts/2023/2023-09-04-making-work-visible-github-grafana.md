---
layout: post
title: Making work visible with GitHub Projects and Grafana
---
 
In the book Making work visible, Dominica DeGrandis exposes time-wasting activities and demonstrates how you can achieve flow efficiency by _making work visible_. Optimizing value stream management to work effectively and efficiently is a constant topic in my head. I've used many tools in the past to plan and track work streams, and recently had a happy realization that GitHub Projects reached the maturity which enables me to make it the number one and only tool for making work visible. I thought to apply some of the learnings from the book and see how it can work with GitHub Projects. For the sake of measuring and improving, I've used Grafana to visualize few aggregates from the GitHub Project by using [Grafana GitHub datasource](https://grafana.com/grafana/plugins/grafana-github-datasource/).

# Making work visible with GitHub Project

This post assumes basic familiarity with GitHub Projects, so in case you are unfamiliar with the product, I'd highly encourage to [Learn about Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects) first. 

To setup an example project, I've created an [example repository](https://github.com/vtorosyan/making-work-visible-project/issues) with random example issues. Before I move forward with the details, here are some of the constraints I had in mind when building the project:

- The project should be a central and the only place for multiple teams to manage their stream of work and provide visibility to stakeholders.
- The project should support some basic workflow of development, where the incoming requests are created as issues, triaged, worked on and completed accordingly.
- It should be possible to monitor and measure for improving workflows, as well as for cultiaving cutlure of making work visible.

## Custom fields

Determining what fields are needed for optimal tracking and workflows is not an easy task. Typically it requires miltiple iterations until you find a right set of fields to have. One thing to be aware about is that the more required fields you have, the more would be the cost of keeping things up to date. The optimal number of fields I'd recommend is something in between 5 and 10. Less than 5 could be an indicator that important information is missing, more than 10 is an indicator that workflow needs to be simplified. 

For all [custom fields](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields) I've added descriptions which are also visible in the project itself. This is a nice and easy way for the readers to understand the meaning of the field, as well as it leads to improved usability of the projects.

#### Status

Type: Single select
Options: Inbox, Triaged, Next, In progress, In QA/Review, To deploy, Waiting, Parked, Done, Done done
Intent: Capture current state of an issue. 

<div align="center">
<img src="/images/gpj-status.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Complexity:

Type: Single select
Options: XS, S, M, L, XL
Intent: Capture rough complexity of an issue. Each option maps to a rough time window which can be used a as a guide for understanding how long a certain issue might take.

<div align="center">
<img src="/images/gpj-complexity.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Start and end

Type: Date
Options: Calendar date
Intent: Capture start and end date to have a roadmap view. Helps to create predictability. 

#### Priority

Type: Single select
Options: P1, P2, P3, P4
Intent: Capture relative priority.

<div align="center">
<img src="/images/gpj-priority.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Team

Type: Single select
Options: TeamA, TeamB, TeamC
Intent: Provide visibility about the team accountable for the issue.

<div align="center">
<img src="/images/gpj-team.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Category

Type: Single select
Options: Unplanned, Business, Maintenance, Tech Health, Architecture
Intent: Understand different streams of work that the team is working on.

<div align="center">
<img src="/images/gpj-category.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Request type

Type: Single select
Options: Internal, External
Intent: Understand where the request/issue is coming from.

<div align="center">
<img src="/images/gpj-request-type.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

#### Bucket

Type: Single select
Options: Rock, Pebble, Sand
Intent: Understand relative impact and scope of the issue.

<div align="center">
<img src="/images/gpj-bucket.png" alt="status" style="width: 400px; height: 500px;"/>
</div>

## Views

# Surface stats with Grafana




