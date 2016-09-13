---
layout: page
title: gringo and clingo
permalink: /clingo/
---

Current answer set solvers work on variable-free programs.
Hence, a grounder is needed that, given an input program with first-order variables, computes an equivalent ground (variable-free) program.
gringo is such a grounder.
Its output can be processed further with clasp, claspar, or claspfolio.

clingo combines both gringo and clasp into a monolithic system.
This way it offers more control over the grounding and solving process than gringo and clasp can offer individually - e.g., incremental grounding and solving.

Both gringo and clingo are released together in one package.

**Attention!** The languages of gringo 3 and 4 are not fully compatible because gringo 4 adheres to the recent [ASP language standard](https://www.mat.unical.it/aspcomp2013/ASPStandardization).
For processing legacy encodings, we recommend downloading the latest version of gringo 3 in addition to Gringo 4.



