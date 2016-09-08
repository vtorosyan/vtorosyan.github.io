---
layout: post
title: red-green-refactor development style
---

TDD is not only a software development process, it’s a mindset and development style. I’ve been practising TDD techniques for a while, but only recently started to follow red-green-refactor approach, which has been described by [James Shore](http://www.jamesshore.com/Blog/Red-Green-Refactor.html){:target="_blank"} more than 10 years ago and is more than actual till now.

The concept is as easy as the name tells. The idea is that you start writing a simple test which doesn’t work(red) before having any production code. The next step is to make your test passing (green) by writing a small piece of production code. As a third step, you work on improving the code by applying small, iterative changes (refactor) without being afraid that you may break the functionality. Last but not least, you repeat the same cycle over and over again until all tests are passing and required specification is implemented.

There are really good reasonings why red-green-refactor style works and is effective (e.g. you’re always thinking about design, doing baby iterative steps, forming hypothesis and checking them, etc); while practicing, I found out few more and here is a sum up of my experience:

### <span style="color:red;">red</span>
- The most popular question people usually ask - “How can I write test without having any single line of production code?” Well, the answer is obvious - the test does not have to compile! You will not be able to run test at all, but it forces you think about design by creating some hypothesis first. When you write code first sooner or later it becomes hacking, so don’t worry, write not-compiling test, re-think until you are sure about the class/method specification you want to have and only afterwards write some code to make test compiling. 
- Thinking about test first eliminates fear and uncertainty. When you start writing code you are unsure, you think and code simultaneously with a constant fear of not being right. When you write a test with baby steps the design gets more clear, you know where are you going and can jump to the code very easily.

### <span style="color:green;">green</span>
- The very first implementation of the production code doesn’t have to be perfect. Keep in mind that this code is only to make test green, the improvements will come within next iterations.
- It is not necessary to cover all cases from the very beginning, this will happen when refactoring and repeating the cycle.
- When you don’t know the implementation detail/design - hard code ;)

### refactor
- Refactor the code without fear and uncertainty.
- Always follow the solid principles of coding ;).
- Use static analysis tools to find and fix “static” problems.
- Don’t forget to check and refactor the test itself.

It’s important to remember that the cycle ends only when you are satisfied with the code and all tests are green.

P.S. It’s not easy to start doing TDD. Start with baby steps, reward yourself by passing green tests, get some motivation from having clear code and repeat the cycle. Don’t hack, code instead ;)



