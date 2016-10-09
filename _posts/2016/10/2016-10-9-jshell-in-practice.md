---
layout: post
title: The Java Shell
---

JDK9 is on its [way](http://www.java9countdown.xyz/){:target="_blank"}. Meanwhile, the early access version is available for playing around and experimenting. 

JDK had so far a huge monolithic nature which makes hard to tackle today's challenges and demands, such as optimization of the software for a cloud, or running a java class on a hardware with small memory. Having this, it's not a surprise that main talks and discussions are around the new major feature which comes with JDK9 - project [Jigsaw](http://openjdk.java.net/projects/jigsaw/){:target="_blank"}. I'll talk about Jigsaw later though and my today's wander is the REPL for java - The Java Shell. 

So far we couldn't try java without having a proper class with a `main()` method. Moreover, in order to see java working, we had to compile and execute the class. Sometimes though, what we need is simply immediate feedback. Especially when learning/teaching or prototyping we are not searching for a fully working program, instead we want to get immediate feedback. The motivation behind the java shell (`jshell` from now on) is exactly this - to provide immediate feedback and save us from the whole bureaucracy required to get simple expression evaluated.

`jshell` is a [REPL](https://en.wikipedia.org/wiki/Read-eval-print_loop){:target="_blank"} for Java. It continually reads the user input, evaluates it and prints the value of the input or a description of the state change the input caused. Java of course is not the first language which comes with it's own REPL; Scala, Ruby, Clojure and many other programming languages have their REPLs already. If you are not familiar with the REPL concept, treat it as a command-line tool with typical features such as history with editing and tab-completion.

Before jumping into and trying `jshell` in practice, here is the necessary things to know

- "snippets" are the code fragments which user inputs in the command-line 
- A snippet should correspond to one of the following from JLS
	* [Import Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-7.html#jls-7.5){:target="_blank"}
	* [Class Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.1){:target="_blank"}
	* [Interface Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.1){:target="_blank"}
	* [Method Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4){:target="_blank"}
	* [Field Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.3){:target="_blank"}
	* [Statements](https://docs.oracle.com/javase/specs/jls/se8/html/jls-14.html#jls-14.5){:target="_blank"}
	* [Primary Expressions](https://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-15.8){:target="_blank"}
- Package Declarations are not allowed; `jshell` code is placed under transient jshell package.
- Access modifiers (`public`, `protected`, and `private`) and the modifiers `final` and `static` are not allowed in a top-level declarations, if provided they are ignored by warning.
- The modifiers `default` and `synchronized` are not allowed at all in a top-level declarations, however they are allowed in a nested context.
- `abstract` modifier is allowed only on classes.
- When user input is incomplete (e.g. you type only `Sytem.out` and skip the `println`) `jshell` autocompletion API prompts for a more user input.
- If the input is complete but there is no semicolon jshell will append it automatically.

## jshell in practice

To try it we need to install JDK9 EA first (below example is for Ubuntu/Linux Mint environments).

```
// Add the repo
➜ sudo add-apt-repository ppa:webupd8team/java
➜ sudo apt-get update
// Install JDK9
➜ sudo apt-get install oracle-java9-installer
// Setup env variables automatically
➜ sudo apt-get install oracle-java9-set-default
```
Let's make sure that we have proper setup

```
➜ java -version
java version "9-ea"
Java(TM) SE Runtime Environment (build 9-ea+134)
Java HotSpot(TM) 64-Bit Server VM (build 9-ea+134, mixed mode)
```
To enter the jshell, simply type `jshell` in the console

```
➜  jshell
|  Welcome to JShell -- Version 9-ea
|  For an introduction type: /help intro

jshell> 
```
As usual, let's start by saying hello to the world!

```
jshell> System.out.println("Hello World")
Hello World
```
Note that I skipped the semicolon, and as promised `jshell` has autocompleted it and printed the result to the output. Let's challenge autocompletion more;

```
jshell> System.out.
   ...> println("Hello World")
Hello World
```
As I skipped the `println()` part it prompted me for more input and only after adding the `println("Hello World")` I got the correct output. `jshell` is smart enough also to notice the errors.

```
jshell> System.out.hello
|  Error:
|  cannot find symbol
|    symbol:   variable hello
|  System.out.hello
|  ^--------------^
```
What about expressions?

```
jshell> int x = 9 % 2
x ==> 1

jshell> System.out.println(x)
1
```
As you can see we could use `x` variable and print it to the output. Last but not least, let's try to write a traditional class with properties and methods.

```
jshell> class HelloWorld {
   ...>     private String name;
   ...> 
   ...>     HelloWorld(String _name) {
   ...>         this.name = _name;
   ...>     }
   ...> 
   ...>     String greet() {
   ...>        return "Hello " + name;
   ...>     }
   ...> }
|  created class HelloWorld

jshell> HelloWorld hw = new HelloWorld("human");
hw ==> HelloWorld@754ba872

jshell> hw.greet();
$11 ==> "Hello human"
```
I find `jshell` an effective tool for learning and for a quick feedback. Unfortunately there isn’t something like `javap` which we could use to analyze the generated bytecode for the input, as I think this would make `jshell` ideal for java explorers.

Let `/help` to show you more ;)