---
layout: post
title: Recursive Procedure vs Process
---

Recursion is common to computer science and mathematics. We can see [Recursion Theory](https://en.wikipedia.org/wiki/Computability_theory){:target="_blank"} also used in Logic or linguistics. While coding in Java, I've not been using recursion heavily, however while practicing FP languages recursion became my best friend.

When talking about recursion, usually it is implicitly referred to the recursive procedure. Let's recall definition of procedure.

> A procedure is a pattern for the local evolution of a computational process. It specifies how each stage of the process is built upon the previous stage.

By formal definition, procedure (method/function) is recursive when it calls itself either directly or indirectly in order to evaluate. In CS, recursive function is defined by two properties

* A base case - a scenario that does not call the function recursively, but terminates the evaluation and returns the result.
* A set of rules that simplify the computation and reduce all cases toward the base case.

For example, let's write a function in Scala to compute factorial

```
def factorial(n: Int): Int = if (n == 0) 1 else n * factorial(n-1)
```
In above example we have a base case and function clearly calls itself. If we evaluate the function, we will see that the process captures the state with variables - at each step it keeps track of the current values of the variables (n). That said, this is actually an **_iterative process_**. 

> An iterative process is one whose state can be summarized by a fixed number of state variables, together with a fixed rule that describes how the state variables should be updated as the process moves from state to state and an (optional) end test that specifies conditions under which the process should terminate.

Not surprisingly, the function above may result to StackOverflow for really big numbers. We can fix this, by changing the function to be [tail-recursive](https://en.wikipedia.org/wiki/Tail_call){:target="_blank"} instead - so that the last value is a call to itself.

```
def factorial1(n: BigInt, result: BigInt): BigInt = {
	if (n == 0) result 
	else factorial1(n-1, n * result)
}
```

In this case, the process builds up a _chain of deferred operations_ and the contraction occurs when the operations are actually performed. This is called a **_recursive process_**.

We can conclude that,

**Recursive procedure doesn't necessarily result to recursive process.**

To wrap up, the recursive process is entirely characterized by linear growth and iterative process is defined entirely by state variables, therefore it is important not to confuse the notion of a recursive process with the notion of a recursive procedure.