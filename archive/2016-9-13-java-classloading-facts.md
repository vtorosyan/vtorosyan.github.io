---
layout: post
title: Class loading in Java. Facts.
---

Nowdays you can find easily an answer to any kind of question only by searching it in WEB. I'm a strong believer that good programmer tries to understand the problem, read documentation first before searching an easy answer. 

As a Java developer, the main, very first source of documentation for me is Java Specification itself. Some people find it pointless to read the long documentation when you can find an answer just by few clicks. I used to say here that everything is hard until it gets easy. Once you start digging into original documentation you find not only an answer to your question, but an insight about the nature, reasoning behind and much more. 

Recently while trying to run a small "hacked" programm in JVM, I've faced `java.lang.VerifyError`  and went through the specs of Class Loading in JVM and found few interesting neuances which I want to share. 

I'll give a basic introduction of how the class gets into the JVM so you are able to execute it and add a few takeaways with some neuances.

Java Virtual Machine purpose is to consume class files and execute the byte code within that classes. JVM starts up by loading given class which contains a valid `main` method corresponding to the Java Specs, however before the code is ready to be used (the class is in execution state of JVM) there are several steps required.

Suppose we have a simple `HelloWorld` Java class containing a `main` method which prints `Hello World`.

### Step 1: Loading of classes and interfaces
When we try to run our program, JVM tries to find the binary representation (a compiled .class file) of the HelloWorld class with a fully qualified name. Ibviously the initial attempt fails and thats when JVM searches the class, finds it and loads the binary representation of the class. You may wonder what happens if it can't find the class? That is when we have the famous `NoClassDefFoundError`. 

#### Takeaways
- The loading process is implemented by the Class ClassLoader (and its subclasses).
- Class loaders are using delegation model - before some child A class loader tries to load a class, it first looks if it's parent B class loader has already loaded it or not. If it finds the class, it will never load it again.
- The same class will never be loaded twice by the same or sibling/parent/shild class loader.
- Class loader constructs Class object from the binary representation of the class and adds a static property named `class` in it (e.g. when you use `SomeObject.class`).
- The class loading may fail with an OutOfMemoryError because it involves allocation of new data structures.

### Step 2: Linking of classes and interfaces
After the class is loaded JVM tries to link it into the runtime state of itself. There are three different subphases involved during the linking; verification, preparation and resolution. 
- Verification makes sure that the class (binary representation) is structuraly and semantically correct(static checks such as correct method signature). Here is where it may fail with `java.lang.VerifyError` which tells us that the definition of class or interface didn't pass a required checks to verify that the semantics of the JVM language are correct.
- During preparation some precomputation of additional data structures may happen in order to make later operations more efficient In addition the `static` fields for a class are initilized to the default values (Important to note that this does not mean that code gets executed).
- In the resolution phase the sybmolic references of the class are resolved. Whenever JVM faces a reference to another class it repeats the same steps of the loading and linking for that reference. Accordingely, the same problems/errors may occur while trying to load or link a sybmolic reference. 

#### Takeaways
- Check during verification enable the skipping of runtime checks.
- Some internal Java classes do not require verification before they are linked.
- Preparation involces memory allocation actions, therefore OutOfMemoryError may occur.
- Resolution phase is optional in fact. JVM may skip resolving sybmbolic reference until the time of it's actual usage (lazy resolution).
- During the resoltuin JVM replaces the sybmolic reference with the actual reference to the object. 

### Step 3: Initialization of classes and interfaces
When the class is loaded and linked it's time to initialize it. Initialization of a class consists of executd ion of the static initilizer blocks or the initializers for static fields. Once the class is initialized it's ready to be used by JVM.

#### Takeaways
- A class will be initialized only before the first occurrence of one of the following 
1. An instance of class is created
2. A static method declared in class is invoked
3. A static field declared in class is assigned/used
4. An assert statement is executed in the class (in this case the class should ba top level class)
- When class is initialized, first it's super class gets initialized. Initialization of interface does not cause the initialization of it's super interfaces.
- Important: A reference to a static field of the class causes initialization of only the class that actually declares it (so that references do not get initialized)
- The class or interface may be loaded and linked but not initialized.