---
layout: page
title: clasp
permalink: /clasp/
---

clasp is an answer set solver for (extended) normal and disjunctive logic programs.
It combines the high-level modeling capacities of ASP with state-of-the-art techniques from the area of Boolean constraint solving.
The primary clasp algorithm relies on conflict-driven nogood learning, a technique that proved very successful for satisfiability checking (SAT).
Unlike other learning ASP solvers, clasp does not rely on legacy software, such as a SAT solver or any other existing ASP solver.
Rather, clasp has been genuinely developed for answer set solving based on conflict-driven nogood learning.
clasp can be applied as an ASP solver (on aspif or [smodels format](http://www.tcs.hut.fi/Software/smodels/lparse.ps), as output by gringo),
as a SAT solver (on a simplified version of [dimacs/CNF format](http://www.satcompetition.org/2009/format-benchmarks2009.html)),
or as a PB solver (on [OPB format](http://www.cril.univ-artois.fr/PB09/solver_req.html)).

Further information about clasp is available on [clasp's home page](https://www.cs.uni-potsdam.de/clasp/).

# Download

- clasp is available on sourceforge: [sourceforge.net/projects/potassco/files/clasp](https://sourceforge.net/projects/potassco/files/clasp/).

# Packages

- Packages for clasp are available in the linux distributions
[Debian](https://www.debian.org/),
[Ubuntu](http://www.ubuntu.com/), and
[Arch Linux (AUR)](https://aur.archlinux.org/).
- For Mac OS X, both clingo and gringo are available in
[homebrew](http://brew.sh/) and
[macports](https://www.macports.org/).

# Citing

- Overview article for clasp:
[pdf](https://www.cs.uni-potsdam.de/wv/pdfformat/gekasc12c.pdf)
[bibtex](https://www.cs.uni-potsdam.de/wv/bibtex/gekasc12c.bib)

