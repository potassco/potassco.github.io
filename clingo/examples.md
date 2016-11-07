---
layout: page
title: Advanced clingo Examples
permalink: /clingo/examples/
---

# Propagators

The theory interface of clingo provides an easy way to integrate dedicated theory propagators.
Here is a list of example propagators.

- Pigeonhole propagator outsourcing one Pigeonhole integrity constraint to a propagator.
  - [Clingo C API](/clingo/c-api/current/propagator_8c-example.html)
  - [Clingo Lua API](/clingo/run/?example=pigeonator-propagator.lp) (browser example)
- Dot propagator printing a dot for each propagated atom.
  - [Clingo release, Python version](https://github.com/potassco/clingo/tree/master/examples/clingo/dot-propagator)
- Sequence mining propagator checking whether a pattern contains a sequence.
  - [Clingo release, Python version](https://github.com/potassco/clingo/blob/master/app/clingo/tests/python/propagator.lp)
- Linear programming propagator.
  - [Python version](https://github.com/potassco/ASPmLP)
- Difference logic propagator.
  - [Python version](https://github.com/potassco/ASPmDL)
