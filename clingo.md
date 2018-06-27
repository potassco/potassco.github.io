---
layout: page
title: clingo and gringo
permalink: /clingo/
---

Current answer set solvers work on variable-free programs.
Hence, a grounder is needed that, given an input program with first-order variables, computes an equivalent ground (variable-free) program.
gringo is such a grounder.
Its output can be processed further with [clasp](/clasp/), [claspfolio](/labs/claspfolio/), or [clingcon](/clingcon/).

clingo combines both gringo and clasp into a monolithic system.
This way it offers more control over the grounding and solving process than gringo and clasp can offer individually - e.g., incremental grounding and solving.

Both clingo and gringo are released together in one package.

**Attention!** The languages of clingo 3 and 4 are not fully compatible because clingo 4 adheres to the recent [ASP language standard](https://www.mat.unical.it/aspcomp2013/ASPStandardization).
For processing legacy encodings, we recommend downloading the latest version of clingo 3 in addition to clingo 4.
The language did not change in version 5 but there were many API changes.

# Download

- Recent clingo releases are on GitHub: [github.com/potassco/clingo/releases](https://github.com/potassco/clingo/releases).
- The latest source is on GitHub: [github.com/potassco/clingo](https://github.com/potassco/clingo).
- clingo up to version 4.x is available on sourceforge: [sourceforge.net/projects/potassco/files/clingo](https://sourceforge.net/projects/potassco/files/clingo/).
- clingo versions 2.x are also available on sourceforge: [sourceforge/projects/potassco/files/gringo](https://sourceforge.net/projects/potassco/files/gringo/).

# Resources

- [Potassco guide on GitHub](https://github.com/potassco/guide/releases/) for series 5 and later
- [Potassco guide on Sourceforge](https://sourceforge.net/projects/potassco/files/guide/) for series 4 and earlier
- [Formal language specification](https://www.cs.utexas.edu/users/vl/papers/AG.pdf)
- [Python API Reference](/clingo/python-api/current/clingo.html) (versions
  [5.3](/clingo/python-api/5.3/clingo.html),
  [5.2](/clingo/python-api/5.2/clingo.html),
  [5.1](/clingo/python-api/5.1/clingo.html),
  [5.0](/clingo/python-api/5.0/clingo.html))
- [C API Reference](/clingo/c-api/current/) (versions
  [5.3](/clingo/c-api/5.3/),
  [5.2](/clingo/c-api/5.2/),
  [5.1](/clingo/c-api/5.1/),
  [5.0](/clingo/c-api/5.0/))
- [Advanced Examples](/clingo/examples/)

# Packages

- Packages for clingo are available in the Linux distributions
[Debian](https://www.debian.org/),
[Ubuntu](http://www.ubuntu.com/), and
[Arch Linux (AUR)](https://aur.archlinux.org/).
- For Mac OS X, clingo packages are available in
[homebrew](http://brew.sh/) and
[macports](https://www.macports.org/).
- The easiest way to obtain Python enabled clingo packages is using [Anaconda](https://conda.io).
  Packages are available in the [Potassco channel](https://anaconda.org/potassco/clingo).
  First [install either Anaconda or Miniconda](https://conda.io/docs/user-guide/install/index.html) and then run:
  `conda install -c potassco clingo`

# Citing

- Martin Gebser, Roland Kaminski, Benjamin Kaufmann and Torsten Schaub,
  [Clingo = ASP + Control: Preliminary Report]({{ site.publicationurl }}/#DBLP:journals/corr/GebserKKS14), 2014

- Martin Gebser, Roland Kaminski, Benjamin Kaufmann, Arne König and Torsten Schaub,
  [Advances in gringo Series 3]({{ site.publicationurl }}/#DBLP:conf/lpnmr/GebserKKS11), LPNMR, 2011

# Publications

- Martin Gebser, Roland Kaminski, Benjamin Kaufmann and Torsten Schaub,
  [Multi-shot ASP solving with clingo]({{ site.publicationurl }}/#DBLP:journals/corr/GebserKKS17), TPLP, 2018
  \[[Experiments]({{ site.resourceurl }}/clingo/experiments-multishot.tar.xz)\]
