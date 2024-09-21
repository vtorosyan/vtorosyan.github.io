---
layout: post
title: A Framework for quantifying software engineer performance
---

In many companies, the performance review season for the second half of the year has started. Performance reviews often bring stress, anxiety, and uncertainty. However, performance reviews also offer opportunities for growth, self-improvement, and a clearer path to success. For software engineers, the definition of "good performance" varies depending on factors such as company culture, business and personal objectives, role expectations, and attitude toward work. Many of these factors have a qualitative nature, which can be difficult to objectively measure, leading to friction.

To minimize this friction and maintain objectivity, it's crucial to quantify performance in a structured way.

## What is important for performance reviews? 

The ultimate goal of a software engineer is to solve problems that contribute to the company’s business objectives. Generally, performance is evaluated across four dimensions: **input**, **output**, **outcome**, and **impact**. While this is a simplification, it is a close approximation of what most companies expect.

It’s important to note that these dimensions are relative to the role, environment, and business objectives. For the sake of this post, we’ll assume role expectations and business/personal objectives are clearly defined and aligned. This gives us the opportunity to build a generic framework for quantifying performance. However, this clarity is a **prerequisite** for using the framework effectively.

## Input, output, outcome and impact

Let’s break down these four key dimensions to better understand how they contribute to overall performance:

- **Input**: The effort and resources invested. Input includes time spent coding, attending meetings, brainstorming solutions, mentoring teammates, and so on. Without meaningful input, there can be no output. However, high input alone doesn’t guarantee strong performance.
- **Output**: The tangible deliverables that result from input. This includes code written, design documents created, features shipped, and decisions made. Output shows what has been produced, but on its own, it doesn’t measure quality or effectiveness.
- **Outcome**: The effectiveness of the output. Did the feature solve the problem it was supposed to? Did the decision help the team move in the right direction? Outcomes measure how well the output achieved its intended goals, highlighting the impact of quality work versus just producing work.
- **Impact**: The long-term influence of the outcome on business objectives. High impact means that your work is advancing the company’s goals in a meaningful way, such as improving customer retention, reducing costs, or speeding up delivery cycles.

## A balanced performance equation

Performance can be seen as a **weighted combination** of input, output, outcome, and impact. Each of these dimensions matters, but their importance might shift depending on the company’s current focus and the engineer's role. For example, in a growth phase, **impact** may outweigh everything else, while in a stability phase, **quality of outcome** could take precedence.

> Performance=w1​(Input)+w2​(Output)+w3​(Outcome)+w4​(Impact)

Here, w1, w2, w3, w4 ​ are weights that adjust the importance of each factor based on the context. This balance ensures that engineers are recognized for their efforts across all relevant dimensions and not just for raw outputs or visible impacts.

### Situations which change the weights

Below are some situations that may place heavier emphasis on one dimension over the others:

- In **fast-paced environments**, output may be more important in the short term, so performance will be measured heavily by the volume of deliverables.
- In a more **strategic context**, impact becomes crucial, so performance hinges on how much the engineer’s work contributes to the business's long-term success.
- **Outcome** often reveals the effectiveness of the output. High performance requires not just producing things (output), but ensuring those deliverables lead to desired outcomes (e.g., bug fixes or new features that work).
- **Input ensures sustainability**. Even with great output and outcomes, if an engineer isn't putting in steady and reliable input, it may show signs of burnout or unsustainable work patterns.

This is why it’s crucial to understand the specific context of your company at any given moment. When business objectives are clear and transparent to everyone, they often provide valuable insight into current priorities and can help you align your efforts more effectively.

## Quantification framework

If performance is a function of these four factors, we can build a heuristic framework to quantify the end result. Performance is typically assessed over a fixed period — in this case, a six-month cycle (roughly 24 weeks).

The framework proposes a point system that evaluates performance across a spectrum from **Excellent** to **Unsatisfactory**:

- **Excellent performance**: 225 to 256 points.
- **Good performance**: 161 to 224 points.
- **Needs improvement**: 96 to 160 points.
- **Unsatisfactory performance**: Below 96 points.

This allows for a consistent method to track progress throughout the review period, making it easier to adjust course as needed.

## Evaluation method

One of the strengths of this framework is that it can serve as a leading indicator of future performance evaluations. Therefore, tracking performance from the beginning of the review cycle is key. I recommend weekly evaluations to ensure you have time to course-correct if necessary.

No one performs at an “excellent” level every day, and some weeks may be more productive than others. Keeping a weekly record of your performance allows you to adjust your goals for the following week and work toward a higher overall score by the end of the period.

### Scoring performance

The categories and scoring system will vary depending on your role and objectives, but here's an example for guidance:

- **Number of merged pull/merge requests**
    - 0 PRs = 0 points
    - 1-2 PRs = 3 points
    - 3-4 PRs = 5 points
    - 5+ PRs = 10 points
- **Problem-solving and execution**
    - Resolving moderate/complex issues = 5 points (extra)
    - Facilitating collaboration/decisions (e.g., bug bash) = 1 point
    - Significant contribution to a design document = 3 points
    - Writing a design document = 10 points
    - Delays in issue resolution beyond agreed timelines = -3 points/day
- **Quality**
    - PRs producing significant defects in production/dev = -5 points
    - PRs requiring major revision = -3 points

These are just sample metrics. The specific categories and scoring should be aligned with your role and objectives, and agreed upon with your manager.

## What to do next

1. Review your role expectations and business objectives, and clarify them with your manager.
2. Establish a point range based on your time frame (e.g., 6 months).
3. Choose the categories and scoring system that best reflect your work and objectives.
4. Align this framework with your manager to ensure mutual understanding and agreement.
5. Document expectations for what happens when you meet or exceed performance goals, as well as consequences for underperformance.
6. Maintain a [brag document](https://jvns.ca/blog/brag-documents/) and update your performance scores weekly.
7. Conduct regular performance check-ins with your manager — every 4 weeks is a good starting point.