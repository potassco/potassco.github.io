---
layout: post
title: How to compute supported models?
---
gringo and clasp apply simplifications that may suppress supported models.
In fact, clasp's option `--supp-models` only suppresses the unfounded set check.

Rather we suggest a program transformation that replaces each positive body literal
`a` with `not not a`.
For instance, `p :- p` has the empty stable model,
the program `p :- not not p` has the additional stable model containing `p` only.
