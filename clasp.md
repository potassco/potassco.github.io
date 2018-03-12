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
clasp can be applied as an ASP solver (on [aspif](http://www.cs.uni-potsdam.de/wv/pdfformat/gekakaosscwa16b.pdf) or [smodels format](http://www.tcs.hut.fi/Software/smodels/lparse.ps), as output by gringo),
as a SAT solver (on a simplified version of [dimacs/CNF format](http://www.satcompetition.org/2009/format-benchmarks2009.html)),
as a PB solver (on [OPB format](http://www.cril.univ-artois.fr/PB09/solver_req.html)),
or as a C++ library in another program.

clasp provides different reasoning modes and advanced features from Boolean
constraint solving including:

 - Enumeration of (Projected) Solutions
 - Optimization of Solutions
 - Cautious and Brave Reasoning
 - Conflict-driven (and optionally multithreaded) search
 - Dedicated Propagation of Extended Rules (over Cardinality and Weight Constraints)
 - Equivalence Reasoning and Resolution-based Preprocessing

# Download

- Most recent clasp releases are on github: [github.com/potassco/clasp/releases](https://github.com/potassco/clasp/releases).
- The latest source is on github: [github.com/potassco/clasp](https://github.com/potassco/clasp).
- Older versions (up to 3.2.0) are on sourceforge: [sourceforge.net/projects/potassco/files/clasp](https://sourceforge.net/projects/potassco/files/clasp/).
- Ancient versions (prior to 1.1.1) are provided on request.

# Packages

- Packages for clasp are available in the linux distributions
[Debian](https://www.debian.org/),
[Ubuntu](http://www.ubuntu.com/), and
[Arch Linux (AUR)](https://aur.archlinux.org/).
- For Mac OS X, clasp is available in
[homebrew](http://brew.sh/) and
[macports](https://www.macports.org/).

# Usage

clasp reads problems either from stdin, e.g

    gringo encoding.lp instance.lp | clasp

or from a given file, e.g

    clasp ground/problem.asp

Type

    clasp --help

to get an overview of the most important options supported by clasp.

# Citing

- Overview article for clasp:
[[bibtex](https://www.cs.uni-potsdam.de/wv/bibtex/gekasc12c.bib)]
[[pdf](https://www.cs.uni-potsdam.de/wv/pdfformat/gekasc12c.pdf)]

# Publications

- Martin Gebser, Benjamin Kaufmann, Andr&#233; Neumann and Torsten Schaub,
  [clasp: A Conflict-Driven Answer Set Solver](http://www.cs.uni-potsdam.de/wv/pdfformat/gekanesc07b.pdf), LPNMR'07, 2007<br/>
   [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekanesc07b.bib)]
   [[Experiments]({{ site.resourceurl }}/clasp/experiments-rc4-system.tar.xz)]
- Martin Gebser, Benjamin Kaufmann, Andr&#233; Neumann and Torsten Schaub,
  [Conflict-Driven Answer Set Enumeration](http://www.cs.uni-potsdam.de/wv/pdfformat/gekanesc07c.pdf), LPNMR'07, 2007<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekanesc07c.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-rc4-enumeration.tar.xz)]
- Martin Gebser, Benjamin Kaufmann, Andr&#233; Neumann and Torsten Schaub,
  [Conflict-Driven Answer Set Solving](http://www.cs.uni-potsdam.de/wv/pdfformat/gekanesc07a.pdf), IJCAI'07, 2007<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekanesc07a.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-clasp.tar.xz)]
- Martin Gebser, Benjamin Kaufmann, Andr&#233; Neumann and Torsten Schaub,
  [Advanced Preprocessing for Answer Set Solving](http://www.cs.uni-potsdam.de/wv/pdfformat/gekanesc08a.pdf), ECAI'08, 2008<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekanesc08a.bib)]
  [[Experiment]({{ site.resourceurl }}/clasp/experiments-clasp08a.xlsx)]
- Martin Gebser, Benjamin Kaufmann and Torsten Schaub,
  [Solution Enumeration for Projected Boolean Search Problems](http://www.cs.uni-potsdam.de/wv/pdfformat/gekasc09a.pdf), CPAIOR'09, 2009<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekasc09a.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-projection.tar.xz)]
- Martin Gebser, Roland Kaminski, Benjamin Kaufmann and Torsten Schaub,
  [On the Implementation of Weight Constraint Rules in Conflict-Driven ASP Solvers](http://www.cs.uni-potsdam.de/wv/pdfformat/gekakasc09a.pdf), ICLP'09, 2009<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekakasc09a.bib)]
  [[Experiments](experiments-weights.tar.xz)]
- Martin Gebser, Benjamin Kaufmann and Torsten Schaub,
  [The Conflict-Driven Answer Set Solver clasp: Progress Report](http://www.cs.uni-potsdam.de/wv/pdfformat/gekasc09b.pdf), LPNMR'09, 2009<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekasc09b.bib)]
- Martin Gebser, Benjamin Kaufmann and Torsten Schaub,
  [Multi-threaded ASP Solving with clasp](http://www.cs.uni-potsdam.de/wv/pdfformat/gekasc12b.pdf), Theory and Practice of Logic Programming, 2012<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekasc12b.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-mt.tar.xz)]
- Martin Gebser, Benjamin Kaufmann and Torsten Schaub,
  [Conflict-Driven Answer Set Solving: From Theory to Practice](http://www.cs.uni-potsdam.de/wv/pdfformat/gekasc12c.pdf), Artificial Intelligence, 2012<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekasc12c.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-aspcomp.tar.xz)]
- Martin Gebser, Benjamin Kaufmann and Torsten Schaub,
  [Advanced Conflict-Driven Disjunctive Answer Set Solving](http://www.cs.uni-potsdam.de/wv/pdfformat/gekasc13a.pdf),
  IJCAI'13, 2013<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekasc13a.bib)]
  [[Experiments](experiments-claspD.tar.xz)]
- Martin Gebser, Roland Kaminski, Benjamin Kaufmann, Javier Romero and Torsten Schaub,
  [Progress in clasp Series 3](http://www.cs.uni-potsdam.de/wv/pdfformat/gekakarosc15a.pdf), LPNMR'15, 2015<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekakarosc15a.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-lpnmr15.tar.xz)]
- Jori Bomanson, Martin Gebser, Tomi Janhunen, Benjamin Kaufmann and Torsten Schaub,
  [Answer Set Programming Modulo Acyclicity](http://www.cs.uni-potsdam.de/wv/pdfformat/bogejakasc15b.pdf), ASPOCP'15, 2015<br/>
  [[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/bogejakasc15b.bib)]
  [[Experiments]({{ site.resourceurl }}/clasp/experiments-acyclicity.tar.xz)]


