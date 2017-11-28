---
layout: post
title: Setting up a multiproject with sbt
---

sbt is a _de facto_ build tool for Scala. It can also be used for Java or for cross-platform native builds, with a  help of [additional plugins](https://github.com/d40cht/sbt-cpp){:target="_blank"}. sbt uses only few concepts to support its build definitions - roughly speaking, it is mainly about [_tasks_](http://www.scala-sbt.org/1.x/docs/Tasks.html){:target="_blank"} and [_settings_](http://www.scala-sbt.org/1.0/docs/Custom-Settings.html){:target="_blank"}.

This post is a step by step guide of how to set up a multiproject with sbt and I won't cover a lot of theory behind. If you are unfamiliar with sbt, I'd encourage to go through the [basic definitions](http://www.scala-sbt.org/1.x/docs/Basic-Def.html){:target="_blank"} before moving forward.

### Prerequisite

Latest version of `sbt` (`1.0.4`) requires Java 1.8 or later [installed](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html){:target="_blank"}. 

Once you have Java, install sbt by [package manager or by downloading](http://www.scala-sbt.org/download.html){:target="_blank"} the bundle. 

Alternatively, if you are a Docker person, you can get an [sbt image](https://hub.docker.com/r/bigtruedata/sbt/){:target="_blank"} and run project using Docker.

### Basic setup

sbt follows certain structure of project by default and needs two files to start with

1. `project/build.properties` - this file can be used to specify several things and is commonly used only to specify sbt version. 
1. `build.sbt` - this is a file which defines actual build. Here we will have everything related to our build, such as tasks and projects.

As we know now what we need for start, let's create a main project and above mentiond files by using your favorite editor (I'm using Unix based OS, if you are on different OS feel free to follow steps using your own commands).

```
# creates main directory and `project` directory inside 
mkdir sbt-multiproject-example sbt-multiproject-example/project

# creates `build.properties` and `build.sbt` files, empty for now
touch sbt-multiproject-example/project/build.properties
touch sbt-multiproject-example/build.sbt
```

That's it! We ready to try out, simply go to the main dir of the project and run `sbt`. Here is how it looks for me

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

One of the great features of `sbt` is that it defines all default settings necessary for the project to build. As you can see, although we haven't defined anything yet in `build.sbt` and `build.properties`, but the build worked! What happened is that `sbt` used default version of `sbt` installed on machine and default settings for build definitions, such as project name and version. To verify that, you can run `version` and `name` tasks in interactive console.

```
sbt:sbt-multiproject-example> version
[info] 0.1-SNAPSHOT
sbt:sbt-multiproject-example> name
[info] sbt-multiproject-example
```