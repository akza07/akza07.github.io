# Asymptotic Analysis

Asymptotic notations are mathematical tools used in Computer Science to describe how the
size of input \\(N\\) changes the running time or space usage of the application.

## Types of Complexity Analysis

1. Time Complexity -- How the size of input \\(N\\) affects the runtime of the program. It's
usually indicated or algorithm.
2. Space Complexity -- How much space does the algorithm needs and how it behaves as the input
size grows.


---

## Asymptotic Notations

### Big O Notation (Big \\(O\\))

Worse-case scenario -- The maximum or upper limit of the resource the algorithm will need.
The worst case of estimation of Linear Search algorithm is \\(O(n\\)) since if we look into a list
of series from left to right. If the element is on the extreme right end of the list, then the
algorithm will need to exhaust all the list elements ie; \\(N\\) to find it.

### Big Omega Notation (Big \\(\Omega\\))

Best-case scenario -- The minimum or lower limit of the resource the algorithm will need.
The best case estimation of Liniear search is if the element we are searching for is at the first
place of the list. And thus for Linear search, it is \\(\Omega(n)\\)

### Big Theta Notation (Big \\(\Theta\\))

I don't know...

