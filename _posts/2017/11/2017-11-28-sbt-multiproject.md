---
layout: post
title: Experiment driven sbt - Part 1
---

sbt is a _de facto_ build tool for Scala. It can also be used for Java or for [cross-platform](https://github.com/d40cht/sbt-cpp){:target="_blank"} native builds. sbt uses only few concepts to support its build definitions - roughly speaking, it is mainly about [_tasks_](http://www.scala-sbt.org/1.x/docs/Tasks.html){:target="_blank"}, [_settings_](http://www.scala-sbt.org/1.0/docs/Custom-Settings.html){:target="_blank"} and configurations.

The purpose of this post is to show how easy it is to start a project with `sbt` by using it's interactive mode. It's really experiment driven, as even being totally unfamiliar with the tool, you can use built in tasks to figure out things like project structure or execution lifecycle.

### Prerequisite

Latest version of `sbt` (`1.0.4`) requires Java 1.8 or later [installed](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html){:target="_blank"}. Once you have Java, install sbt by [package manager or by downloading](http://www.scala-sbt.org/download.html){:target="_blank"} the bundle. 

Alternatively, if you are a Docker person, you can get an [sbt image](https://hub.docker.com/r/bigtruedata/sbt/){:target="_blank"} and run the project using Docker.

### Basic setup

`sbt` uses some conventions and by default follows certain structure of project. We will start by creating the following two files

1. `project/build.properties` - this file can be used to specify several things, but it is commonly used only to specify `sbt` version. In fact, you don't have to create it explicitly, as `sbt` will create it for you when building the project.
1. `build.sbt` - this is a file which defines actual build. Here we will have everything related to our build, such as tasks and projects.

Now let's create a directory where our project will live and add above mentioned files.

```
# creates main directory and `project` directory inside 
mkdir -p sbt-multiproject-example/project

# creates `build.properties` and `build.sbt` files, empty for now
touch sbt-multiproject-example/project/build.properties
touch sbt-multiproject-example/build.sbt
```

That's it! We ready to try out. Go to the main dir of the project and run `sbt` to enter an interactive mode. Here is how it looks for me

```
⇒  sbt
[info] Updated file /Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/project/build.properties: set sbt.version to 1.0.4
[info] Loading project definition from /Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/project
[info] Updating {file:/Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/project/}sbt-multiproject-example-build...
[info] Done updating.
[info] Loading settings from build.sbt ...
[info] Set current project to sbt-multiproject-example (in build file:/Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/)
[info] sbt server started at 127.0.0.1:4449
sbt:sbt-multiproject-example>
```

`sbt` defines all default settings necessary for the project to be built. As you can see, we haven't defined anything in `build.sbt` and `build.properties`, but the build worked! What happens is that `sbt` uses default version of `sbt` installed on machine and default settings for build definitions, such as project name and version. To verify that, you can run `version` and `name` tasks in interactive console.

```
sbt:sbt-multiproject-example> version
[info] 0.1-SNAPSHOT
sbt:sbt-multiproject-example> name
[info] sbt-multiproject-example
```

It's time to take the project under our control and give it a name and version. Just add the following two lines to the `build.sbt` and verify the changes the same way we did above.

```
// build.sbt
name := "sbt-multiproject"

version := "0.0.1"

organization := "com.example.sbt"
```

We have just defined our first settings! Settings in `sbt` are immutable. Think about it as a multimap, each key may be associated with multiple values, but only the one defined last will be used. 

### Adding a project

We already know that `sbt` follows certain conventions for project structure. We could of course ignore that and use our own structure, but it is always advised to follow conventions, unless there is a strong reason not to do so. 

But how do you know what the structure looks like? Let's find out where to put the Scala sources.

```
sbt:sbt-multiproject> show scalaSource
[info] /Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/src/main/scala
```

Basically with a help of `sbt` itself, we now know where to put sources so that it will be able to look for them. Sources in default locations are called `unmanaged sources`. 

```
mkdir -p src/main/scala
mkdir -p src/test/scala

touch src/main/scala/Foo.scala
touch src/test/scala/FooTest.scala
```

Our `Foo` class does nothing fancy, here is the content

```
object Foo {
  def sayHello(): String = {
    "Hello, I'm Foo!"
  }
}
```

What about tests? We want to verify that `sayHello()` works as expected, so let's add an external library to our project as a dependency. Add the following to the `build.sbt`

```
libraryDependencies ++= Seq(
        "org.specs2" %% "specs2-core" % "4.0.0" % "test",
        "junit" % "junit" % "4.11" % "test",
      )
```

`%` method is used to create `ModuleID` instances, which follows `Ivy` pattern. As you can see, we also appended `test` at the end, this tells `sbt` that dependency should be used only with `test` configuration, which is used to run tests. I guess you have also noticed `%%` method - this is just a shortcut to ask `sbt` to get the correct version of the library for the version of Scala you are running.

Before adding a test, let's use `sbt`'s interactive console to enter the mode where we can get early feedback about our tests. We will use `~test` task for that

```
⇒  sbt
[info] Loading project definition from /Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/project
[info] Loading settings from build.sbt ...
[info] Set current project to sbt-multiproject (in build file:/Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/)
[info] sbt server started at 127.0.0.1:4449
sbt:sbt-multiproject> ~test
[info] Compiling 1 Scala source to /Users/vardantorosyan/dev/src/vt/sbt-multiproject-example/target/scala-2.12/test-classes ...
[info] Done compiling.
[success] Total time: 1 s, completed Dec 3, 2017 9:50:45 PM
1. Waiting for source changes... (press enter to interrupt)
```

See the message? 

Now, let's add our first test, while keeping an eye on the console.

```
import org.specs2.mutable.Specification

object FooSpec extends Specification {
  "the sayHello method" >> {
    "says 'Hello I'm Foo'" >> {
      val helloMessage = Foo.sayHello()
      helloMessage mustEqual "Hello, I'm Foo!"
    }
  }
}
```

That's it! We have a simple project saying hello and defined a build for it! Just go ahead and do `sbt package` to create a binary artifact ready for production.

### Wrap up

1. Create a directory for the project and add `build.sbt` and `project/build.properties` files.
1. Add a name, version and organization to the `build.sbt`.
1. Define `sbt` version in `build.properties`.
1. Add sources to `src/main/scala` directory and test sources to `src/test/scala` directory.
1. Define an external dependencies in `build.sbt`.
1. Start writing tests and use `~test` task to get an early feedback.
1. `package` the project to create an artifact.

As you can see, `sbt` is very friendly and interactive. It comes with handy of built in tasks which makes day to day development very easy. 

In the second part, we will convert our example project to a multi project - showing how flexible `sbt` is when it comes to the custom configurations and tasks.

P.S. You can [check out](https://github.com/vtorosyan/sbt-multiproject-example) the project for the full example.
