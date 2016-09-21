---
layout: post
title: How do optimization statements work?
---
An optimization statement consists of a set of elements consisting of a tuple together with a condition.
Whenever the condition of such an element is true wrt an answer set, its associated tuple contributes a value to a set.
Hence, if two equal tuples have true conditions, then only one value is provided.
Additionally, tuples can have levels attached with the binary connective @ after the first tuple element - its value.

For example

    1 { a; b }.
    #minimize { 2,t:a; 2,t:b; 1,u:b; 2,v:b }.

Given answer set `{a, b}`, the values of tuples `(2,t)`, `(1,u)`, and `(2,v)` are summed up.
Hence, the minimize constraint evaluates to `5`.
Note that the value of tuple `(2,t)` provided by the first and second element of the optimization constraint is counted only once.

Given (the optimal) answer set `{a}`, the only tuple is `(2,t)`.
Hence, the minimize constraint evaluates to `2`.
