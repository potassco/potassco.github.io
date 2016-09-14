---
layout: page
title: clingo and gringo
permalink: /clingo/
---

Current answer set solvers work on variable-free programs.
Hence, a grounder is needed that, given an input program with first-order variables, computes an equivalent ground (variable-free) program.
gringo is such a grounder.
Its output can be processed further with [clasp](/clasp/), [claspfolio](/claspfolio/), or [clingcon](/clingcon/).

clingo combines both gringo and clasp into a monolithic system.
This way it offers more control over the grounding and solving process than gringo and clasp can offer individually - e.g., incremental grounding and solving.

Both clingo and gringo are released together in one package.

**Attention!** The languages of clingo 3 and 4 are not fully compatible because clingo 4 adheres to the recent [ASP language standard](https://www.mat.unical.it/aspcomp2013/ASPStandardization).
For processing legacy encodings, we recommend downloading the latest version of clingo 3 in addition to clingo 4.
The language did not change in version 5 but there were many API changes.

# API Reference

- [Python API Reference](/clingo/python-api/current/clingo.html) 
- [C API Reference](/clingo/c-api/current/)

# Download

The most recent version of clingo can be downloaded on [sourceforge](https://sourceforge.net/projects/potassco/files/clingo/).
Legacy versions (2.x) are also available on [sourceforge](https://sourceforge.net/projects/potassco/files/gringo/).
Development happens on [github.com/potassco](https://github.com/potassco).

# Packages

Packages for clingo and gringo are available in the linux distributions
[Debian](https://www.debian.org/),
[Ubuntu](http://www.ubuntu.com/), and
[Arch Linux (AUR)](https://aur.archlinux.org/).
For Mac OS X, both clingo and gringo are available in
[homebrew](http://brew.sh/) and
[macports](https://www.macports.org/)
as part of gringo.

# Citing

- Overview article for gringo:
[pdf](http://www.cs.uni-potsdam.de/wv/pdfformat/gekakosc11a.pdf)
[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekakosc11a.bib)
- Overview article for clingo:
[pdf](http://www.cs.uni-potsdam.de/wv/pdfformat/gekakasc14b.pdf)
[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/gekakasc14b.bib)

