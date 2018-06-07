# Getting Started

## Download
*Note: the current implementation of GP 2 is designed for use on Linux only. 

We make no guarantees about its stability on Windows or Mac.*

To get started, head over to the [GP 2 compiler's github repository](https://github.com/UoYCS-plasma/GP2) and either download or checkout the whole thing. 
The [Compiler subdirectory](https://github.com/UoYCS-plasma/GP2/tree/master/Compiler) contains everything you need to know about building and installing the compiler
and running individual programs. 

## Example: Transitive Closure

The first program we'll look at is this:

![alt text](/images/link.png "A program for computing the transitive closure of a graph.")

This program computes the **transitive closure** of a graph. The transitive closure of a graph is the smallest extension of that graph that is **transitive**.
A graph is transitive when for every pair of nodes *v1, v2* with a path from *v1* to *v2*, there is an edge directly from *v1* to *v2.

For example, this graph is *not* transitive:

![alt text](/images/notrans.png "A non-transitive graph.")

The purpose of the program we're looking at is the *transform* this graph into the smallest extension of this graph which *is* transitive. Try writing this program
out in text form:

```
Main = link!

link(a, b, c, d, e : list)
[
	(n1, a)
	(n2, c)
	(n3, e)
	|
	(e1, n1, n2, b)
	(e2, n2, n3, d)
]
=>
[
	(n1, a)
	(n2, c)
	(n3, e)
	|
	(e1, n1, n2, b)
	(e2, n2, n3, d)
	(e3, n1, n3, empty)
]
where not edge(1, 3)
```

and saving it as "transitive_closure.gp2".

## Example: Vertex Colouring

