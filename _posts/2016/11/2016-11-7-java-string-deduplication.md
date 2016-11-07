---
layout: post
title: String deduplication in Java
---

It's not a secret that String objects in Java consume a lot of memory (just a reminder that each character eats two bytes, yay!). We use strings everywhere, which is kind of natural, sometimes (and often) there are also duplicate strings all over the application. In java several distinct instances of identical strings will be created. This is not ideal and definitely not what we want.

Java provides two ways to handle duplicate strings and eliminate memory usage

- By using [String.intern()](http://docs.oracle.com/javase/8/docs/api/java/lang/String.html#intern--){:target="_blank"} method
- By enabling string deduplication (only available with G1 garbage collector)

### String interning

In computer science, string interning is a method of storing only one copy of each distinct string value. In Java, it is possible to intern String object by using String API, by calling [intern()](http://docs.oracle.com/javase/8/docs/api/java/lang/String.html#intern--){:target="_blank"} method on any String object.

String class privately maintains a pool of strings. When we invoke `intern()` method, first it checks if string pool already contains a string equal to the given string and if there is a such string, it returns it from the pool. When there is no such string, the given string is added to the pool and a reference to this String object is returned. Keep in mind that all literal strings are interned by default.

Interning has some overhead, so we can't intern all String objects across the application. I recommend the following steps to decide which strings should/can be interned

1. Take a heap dump of a full heap.
2. Group objects of `java.lang.String` type and order them by used memory in descending order.
3. Determine duplicate strings which consume the most memory.
4. Check if it's easy to change the code for those duplicate strings and go ahead ;)

**Keep in mind**

1. In JDK6 and early versions, String pool is in PermGen. Too much interning may cause out of memory problems.
2. Since JDK7, String pool map size is configurable by using `-XX:StringTableSize` parameter. I advice to check number of buckets by using `XX+PrintStringTableStatistics` parameter and analyze the heap first and only then solve appropriate string table size for given system.
3. `intern()` method is relatively expensive, so calling it may slow down the code.

### String deduplication in G1

[G1](http://www.oracle.com/technetwork/tutorials/tutorials-1876574.html){:target="_blank"} is the newest garbage collector in JVM. I won't go into the details of G1, but definitely recommend to check it (G1 can be [defualt garbage collector in JDK 9](http://openjdk.java.net/jeps/248){:target="_blank"}). 

Since JDK8, Update 20, String Deduplication is available and can be used with G1. It is disabled by default (as G1) and can be enabled by the following parameters

```
XX:+UseG1GC -XX:+UseStringDeduplication
```

Here is how it works. String class keeps string value in char[] array, next to the hash. The char array is not observable from outside and String class itself doesn't modify the contents of the array, this means that char array can be used safely by multiple instances of String at the same time. 


Deduplication **may** happen during minor GC, the chances are more when there is a spare CPU capacity. Garbage collector visits String objects and stores the hash value next to a weak reference of the char array. When it detects another String object with the same hash code, it compares two strings char by char. When they match, one String's char array will be re-assigned to the char array of the second string and the unreferenced char array of the first string becomes available for GC. 

Note that it is not guaranteed that string deduplication may happen. To check if it happens in your system you can use `-XX:+PrintStringDeduplicationStatistics` parameter.


### Which method to use?


In general, I'd recommend to use string interning and maintain it directly from code. Of course if you are still using JDK6 or less, think and measure twice before doing it (Remember PermGen and OutOfMemory exceptions). With JDK7 and later, I believe it's completely fine to intern strings whenever it's possible/needed.


String deduplication is available only with G1. Although small, but it has some overhead. On the other hand, if you already have G1 in your system, and enough spare capacity of CPU, don't hesitate, enable it.