---
layout: post
title: Arrays - Why O(1) time access?
---

I was mock interviewing a friend of mine and a question came up: why can you access an element in an array in O(1) time? To answer the question, let's step back and see how RAM works in computers.

## Random-access memory (RAM)

RAM is a form of computer memory with a physical device behind it. It allows data to be written or read in **any order** and is typically used to store working (warm) data and machine code. 

RAM consists of **many memory** locations and each of those locations is mapped to a **code**. The code is a binary number and represents the physical address of the memory location.

> RAM is like a bookshelf, organised in different racks where each is mapped to a unique number.

Each of the memory locations can store 8 bits (1 byte). If data with `S bits` size does not fit in 1 byte, it needs `S / 8` memory locations. 

For example, if we take the word "data" (in 8-bit ASCII character encoding), it requires 32 bit (4 byte) of memory, thus 4 memory locations.

### Reading and writing

The read/write operations happen through a **memory controller**, which sits in front of the RAM and is directly connected to it. 

> Memory controller can access any address at any given point of time (therefore the naming: "random-access memory"). 

### CPU Cache

The computer processor (CPU) has a series of cache. When the CPU reads data from RAM through a memory controller, it persists most frequently accessed data in the cache. This allows very fast reads, without a need to go to the RAM every time. 

Moreover, when CPU reads data in a given address, the memory controller returns back also data from the neighbouring addresses, thus allowing very quick access to those too.

> Therefore reading from sequential addresses is much faster than jumping from one to another.

## Arrays

Arrays consist of collection of elements. Each element in the array is mapped to it's unique address - just like in RAM! That address is called index. 

> The index in the array maps to the physical address in RAM, where the data for that index is stored. 

Recall that we can access data in RAM in a constant time by using it's address? Well, the index in the array maps to the address in RAM - voilà, that will give us constant time access of the data through that index!

### Mapping an index to RAM address

Suppose we have an array of integers: `[1, 2, 3, 4, 5, 6]`. If we think in Java, an `int` is a fixed-width 32 bit (4 byte) integer, which means that the space an `int` takes is constant. Regardless if the number is `1` or `1000000` - it will take 32 bit space. 

In our example, for storing each of the integer, we need `32 / 8 = 4` memory locations. In this case, an index will map to 4 memory locations in RAM.

Now let's see how the array index knows which address to look for.

Let's say, we want to get the data for the 2nd index. We know the number of bytes required to store each integer and we know the address of array start, so we can do the calculation: 

`address of 2nd element = array start address + (2 (index) * 32 bits (size of each integer) )`. 

We can generalize the formula for the n-th element:

> `address of nth element = array start address + (n * size of each item in bits)`

In order for this formula to be true for the all cases, we need to satisfy the following rules:

1. The array must be stored in a contiguous fashion. 
1. The elements in the array must be homogeneous (the same type/size).

## Conclusion

We proved that access time in array with the given index is O(1). In addition, we added more requirements to the definition of array to guarantee the performance characteristics and feasibility of the implementation:

* We must specify the size of array in advance (to be able to reserve the contiguous memory).
* We can not have different type of elements in the array (to have homogeneous elements).