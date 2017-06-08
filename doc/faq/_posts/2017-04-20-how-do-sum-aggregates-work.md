---
layout: post
title: How do aggregates work?
---
A sum aggregate consists of a set of elements consisting of a tuple together with a condition and a guard.
Whenever the condition of an element is true wrt an answer set, its associated tuple contributes a value to a set.
Hence, if two equal tuples have true conditions, then only one value is provided.

Consider for example the program

```text
{a; b; c}.

:- #sum { 2,p : a; 1,q : a
        ; 1,q : b; 2,r : b
        ; 2,r : c; 1,s : c
    } < 6.
```

If `a` and `b` are true, the values of tuples `(2,p)`, `(1,q)`, and `(2,r)` are summed up.
Hence, the sum aggregate evaluates to `5`.
Note that the value of tuple `(1,q)` provided by the second and third element of the sum aggregate is counted only **once**.

If `a` and `c` are true, the values of tuples `(2,p)`, `(1,q)`, `(2,r)`, and `(1,s)` are summed up.
Hence, the sum aggregate evaluates to `6` and `{a, c}` is an answer set of the program.
In fact, there are only two answer sets: `{a, c}` and `{a, b, c}`.

Accumulation in `#sum+`, `#min`, and `#max` aggregates as well as `#minimize` and `#maximize` constraints works the same.
