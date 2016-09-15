---
layout: page
title: Cemetery
permalink: /cemetery/
---

# aclasp

aclasp uses a slightly modified restart policy based upon the average decision level on which conflicts occurred in the last restart interval.

[Download](https://sourceforge.net/p/potassco/code/HEAD/tree/branches/adaptive-restarts/adapt-to-avgdl)

# aspuncud

Solver for upgrade scenarios in the Common Upgradeability Description Format (CUDF).
Winner of Paranoid and Trendy Track at the Mancoosi International Solver Competition (MISC) 2011.

[System](http://www.cs.uni-potsdam.de/aspcud/index.html)
(superseded by [aspcud](/aspcud/))

# claspar

claspar is a parallelized version of clasp 1 using MPI to distribute search.

[Download](https://sourceforge.net/projects/potassco/files/claspar/)
[Resources](http://www.cs.uni-potsdam.de/claspar)
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/gekakascsc11a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/gekakascsc11a.bib)

# claspd

claspd is an extension of clasp that allows for solving disjunctive logic programs.

[System](https://sourceforge.net/projects/potassco/files/claspd/)
(superseded by [clasp 3](/clasp/))
[Resources](http://www.cs.uni-potsdam.de/claspd/)
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/drgegrkakoossc08a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/drgegrkakoossc08a.bib)

# fmc2iasp

fmc2iasp is a system for computing finite models of first-order theories
(written in [TPTP](http://www.cs.miami.edu/~tptp/) format)
via incremental Answer Set Programming.
fmc2iasp uses [iclingo](/cemetery/#iclingo) for finding answer sets of the resulting logic program.
An answer set represents a finite model of the input theory.

[System](https://sourceforge.net/p/potassco/code/HEAD/tree/trunk/fmc2iasp/)
(replaced by [fimo](/labs/#fimo))
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/gesasc11a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/gesasc11a.bib)

# hclasp

hclasp provides a general declarative framework to incorporate domain-specific heuristics into ASP solving.
It extends clasp allowing to program the heuristic of the solver directly from the ASP code.

[System](https://sourceforge.net/projects/potassco/files/hclasp)
(superseded by [clasp 3](/clasp/))
[Resources](http://www.cs.uni-potsdam.de/hclasp/)
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/gekaotroscwa13a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/gekaotroscwa13a.bib)

# hclavis

hclavis applies
[clavis](http://www.cs.uni-potsdam.de/clavis)
visualization tool to
[hclasp](http://www.cs.uni-potsdam.de/hclasp),
an extension of clasp to program the heuristic of the solver directly from the ASP code.

[Download](https://www.cs.uni-potsdam.de/clavis/download/hclavis-1.1.5-x86_64-linux-static.tar.gz)

# iclingo

iclingo is an incremental ASP system implemented on top of clingo 3.
It is based on the idea that the grounder as well as the solver are implemented in a stateful way.
Thus, both keep their previous states while increasing an incremental parameter.
As regards grounding, at each incremental step, the goal is to produce only ground rules stemming from the current program slice, without re-producing previous ground rules.
The ground program slices are then gradually passed to the solver that accumulates ground rules and computes answer sets for them.

System
([version 3.x](https://sourceforge.net/projects/potassco/files/iclingo/),
[version 2.x](https://sourceforge.net/projects/potassco/files/gringo/),
both superseded by  [clingo 4](/clingo/))
[Documentation](https://sourceforge.net/projects/potassco/files/guide/)
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/gekakaosscth08a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/gekakaosscth08a.bib)

# oclingo

oclingo is a system for reactive answer set programming, extending gringo and clasp for handling external data streams provided at runtime via a controller.

[System](http://www.cs.uni-potsdam.de/wv/oclingo/)
(superseded by [clingo 4](/clingo/))
[Article](https://www.cs.uni-potsdam.de/wv/pdfformat/gegrkasc11a.pdf)
[Citation](https://www.cs.uni-potsdam.de/wv/bibtex/gegrkasc11a.bib)

# pbclasp

pbclasp bundles a set of tools for using the ASP solver clasp as a full-fledged pseudo-Boolean solver.

[System](https://sourceforge.net/p/potassco/code/HEAD/tree/trunk/pbclasp/)
(superseded by [clasp](/clasp/))

# unclasp

clasp-1.3.X extended with option --opt-uncore that enables unsatisfiability-based optimization as in MSUnCore.

[System](https://sourceforge.net/p/potassco/code/HEAD/tree/branches/unclasp/)
(superseded by [clasp 3](/clasp/))

