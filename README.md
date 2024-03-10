# 🧩 Grokking Data Structure & Algorithms
In this "Grokking Data Structures & Algorithms" repository, we will discuss fundamental concepts of data structures and algorithms, along with practical implementations using JavaScript as the programming language.


## 🟨 What & Why of Data Structures & Algorithms
**Data Structures**:

A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.
The way data is arranged can
simplify the algorithms and make algorithms run faster or slower.


**Algorithms:**

An algorithm is a step-by-step procedure or a set of instructions designed to solve a specific problem or perform a particular task. It's a finite sequence of well-defined, unambiguous instructions that, when executed, produce the desired output. Algorithms are the backbone of computer science and programming, guiding the way programs work and process data efficiently.

In essence, data structures provide a way to organize and store data, while algorithms offer methods to manipulate and operate on that data effectively.
Data structures and algorithms are fundamental concepts in computer science that form the backbone of software development. They provide essential tools and techniques for organizing and processing data efficiently, enabling the creation of robust and scalable software solutions.

#### Importance of Data Structures and Algorithms:
- Efficiency optimization
- Problem-solving framework
- Scalability assurance
- Memory management enhancement
- Computational task optimization
- Code reuse and maintainability
- Problem classification framework
  
  </br>

## 🟨 Overview of Data Structures 
We can generalize the data structures somewhat by
looking at the common operations that we are likely to do across all of them. 
Here are four operations that is needed for almost every data structure which  manages
a large collection of similar items. We call them insertion, deletion, search,
and traversal.

More common operations:

| Operation                        | Description                                                                                   |
|----------------------------------|-----------------------------------------------------------------------------------------------|
| Traversal                        | Visit each element in the data structure in a specific order without modifying its structure.|
| Insertion                        | Add a new element to the data structure.                                                      |
| Deletion                         | Remove an existing element from the data structure.                                            |
| Search                           | Find a specific element within the data structure.                                             |
| Access (or Retrieval)            | Retrieve a specific element from the data structure without modifying its structure.          |
| Update (or Modification)        | Change the value of an existing element in the data structure.                                |
| Sorting                          | Rearrange the elements of the data structure in a specific order (e.g., ascending or descending).|
| Filtering                        | Select elements from the data structure based on certain criteria or conditions.              |
| Mapping (or Transformation)     | Apply a function to each element in the data structure to produce a new set of elements.      |
| Aggregation (or Reduction)       | Combine multiple elements of the data structure into a single value (e.g., sum, average, maximum, minimum).|
| Iteration                        | Perform a series of operations on each element of the data structure.                          |



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
- Hash Tables etc..

<br>

## 🟨 Analysis of Algorithms
Analysis of Algorithms is a fundamental aspect of computer science that involves studying the performance and efficiency of algorithms. It encompasses various techniques and methodologies aimed at understanding how algorithms behave in terms of time complexity, space complexity, and other factors. Here's an overview of the key aspects of algorithm analysis:

**Time Complexity:** 

Time complexity measures the amount of time an algorithm takes to complete as a function of the input size. It provides an understanding of how the algorithm's runtime grows with larger inputs. Common time complexity classes include O(1), O(log n), O(n), O(n log n), O(n^2), etc.

**Space Complexity:** 

Space complexity measures the amount of memory space an algorithm requires as a function of the input size. It helps assess how much memory the algorithm consumes and whether it's feasible for the available resources. Space complexity is also expressed using Big O notation.

**Worst-case, Best-case, and Average-case Analysis:** 

Algorithms can behave differently under different input scenarios. Analyzing their worst-case, best-case, and average-case performance provides a more comprehensive understanding of their behavior. For many algorithms, worst-case analysis is the most critical as it guarantees an upper bound on runtime.

**Asymptotic Analysis**:

 Asymptotic analysis focuses on the behavior of algorithms as the input size approaches infinity. It disregards constant factors and lower-order terms to concentrate on the dominant factors influencing runtime and space requirements.

**Big O, Omega, and Theta Notations:** 

These notations are used to express the upper bound (Big O), lower bound (Omega), and tight bound (Theta) of an algorithm's complexity, respectively. They provide concise representations of algorithmic performance and aid in comparing different algorithms.

<br>

## Big O Notation
`Big O notation` is a way to describe the time complexity of an algorithm. More specifically, it is a way to describe the upper bound or worst-case scenario of how the runtime or space requirements of an algorithm grow in relation to the size of its input. 

Big O uses mathematical expressions to represent the relationship between the input size (often denoted as "n") and the algorithm's performance. The "O" in Big O stands for "order of" and indicates the rate at which the algorithm's performance grows relative to the input size. 

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

<br>

### Constant Time O(1):- 
The algorithm's runtime remains constant regardless of the size of the input


### Linear Time Complexity - O(n)

Linear time is when the runtime scales linearly as the input grows.

`O(n)` is the notation for linear time. It's pronounced "O of n" or "big O of n".

### Logarithmic Time Complexity - O(log n)

Logarithmic time is when the runtime scales logarithmically as the input grows.

`O(log n)` is the notation for logarithmic time. It's pronounced "O of log n" or "big O of log n".

### Quadratic Time Complexity - O(n^2)

Quadratic time is when the runtime scales quadratically as the input grows.

`O(n^2)` is the notation for quadratic time. It's pronounced "O of n squared" or "big O of n squared".



### Exponential Time Complexity - O(2^n)

Exponential time is when the runtime scales exponentially as the input grows.

`O(2^n)` is the notation for exponential time. It's pronounced "O of 2 to the n" or "big O of 2 to the n".

### Factorial Time Complexity - O(n!)

Factorial time is when the runtime scales factorially as the input grows.

`O(n!)` is the notation for factorial time. It's pronounced "O of n factorial" or "big O of n factorial".