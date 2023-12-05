# Grokking Data Structure & Algorithms

## Data Structures & Algorithms

#### Data Structures
A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.


#### Algorithms:
An algorithm is a step-by-step procedure or a set of instructions designed to solve a specific problem or perform a particular task. It's a finite sequence of well-defined, unambiguous instructions that, when executed, produce the desired output. Algorithms are the backbone of computer science and programming, guiding the way programs work and process data efficiently.

In essence, data structures provide a way to organize and store data, while algorithms offer methods to manipulate and operate on that data effectively.

### Built-In Data Structures
Every language has data structures built in. JavaScript has several built-in data structures,  Some of the primary built-in data structures in JavaScript include:  arrays and objects as well as maps and sets


### Common Data Structures

These are some of the most common data structures that you'll see in programming. 
- Arrays
- Objects
- Maps
- Sets
- Stacks
- Queues
- Linked Lists
- Trees
- Binary Trees
- Binary Search Trees (BST)
- Graphs
- Hash Tables



## Big O Notation
Big O notation is used to classify algorithms according to how their running time or space requirements grow as the input size grows. On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

<img src="assets\big-o-graph.png" width="900" />

Source: Big O Cheat Sheet.

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.


| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |
