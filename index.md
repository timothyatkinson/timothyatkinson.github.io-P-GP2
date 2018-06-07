## What is GP 2?

GP 2 is a visual, rule-based graph programming language which frees programmers from handling low-level data structures for graphs. 
The language's concise formal semantics supports reasoning on GP 2 programs that borrows results from category theory. For example, significant research has 
gone into establishing whether a graph program will terminate and will produce a correct result. 

Below is an example GP 2 program:

![alt text](/images/link.png "A program for computing the transitive closure of a graph.")

And here is that program in text form (as the existing compiler would expect it):

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

## How do I get started?

## Publications on GP 2

