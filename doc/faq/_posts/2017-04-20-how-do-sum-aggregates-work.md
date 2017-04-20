---
layout: post
title: How do aggregates work?
---
A sum aggregate consists of a set of elements consisting of a tuple together with a condition and a guard.
Whenever the condition of an element is true wrt an answer set, its associated tuple contributes a value to a set.
Hence, if two equal tuples have true conditions, then only one value is provided.

For example

    1 { a; b }.
    :- #sum { 2,t:a; 2,t:b; 1,u:b; 2,v:b } <= 5.

If `a` and `b` are true, the values of tuples `(2,t)`, `(1,u)`, and `(2,v)` are summed up.
Hence, the sum aggregate evaluates to `5`.
Note that the value of tuple `(2,t)` provided by the first and second element of the sum aggregate is counted only **once**.

If only `a` is true, the only tuple is `(2,t)` and the sum is `2`.
Hence, all answer sets of the program must contain at least atom `b`.

Accumulation in `#sum+`, `#min`, and `#max` aggregates as well as `#minimize` and `#maximize` constraints works the same.
