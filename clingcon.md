---
layout: page
title: clingcon
permalink: /clingcon/
---

Clingcon is an answer set solver for constraint logic programs,
building upon the answer set solver clingo.
It extends the high-level modeling language of ASP with constraint solving capacities.
Constraints over finite domain integer variables can be used in logic programs.
Clingcon adopts state-of-the-art techniques from the area of SMT,
like conflict-driven learning and theory propagation.
It uses lazy nogood and variable generation on the order encoding
and features several preprocessing techniques.

# Features

* integer linear constraints
  * `&sum{3*x; 4*y} >= z-7`
* global distinct constraint
  * `&distinct{x;y;3*z}`
* can handle huge variables
  * no domains needed (-2^30 .. 2^30 as default domain)
  * `&dom{1..10; 30..40} = x`
* multi-shot solving using python or lua
* multi-objective optimization on constraint variables
  * `&minimize{x;y;z}`

# Example

~~~~
#include "csp.lp".
#const end=20.
#const stepsize=7.
step(0..end).

% initial state
&sum {at(0)} = 0.

% actions
{move(T)} :- step(T); T > 0.

% effects
&sum {at(T-1); stepsize} = at(T) :- move(T).

% frame axiom
&sum {at(T-1)} = at(T) :- not move(T); step(T); step(T-1).

% goals
:- &sum {at(end)} <= 100.

&show {at(X):step(X)}.
#show move/1.
~~~~

More examples can be found in the [example](https://github.com/potassco/clingcon/tree/master/examples) section.

# Download

- Recent clingcon 3.x releases are on github: [github.com/potassco/clingcon/releases](https://github.com/potassco/clingcon/releases).
- The latest source is on github: [github.com/potassco/clingcon](https://github.com/potassco/clingcon).
- Clingcon up to version 2.x is available on sourceforge: [sourceforge.net/projects/potassco/files/clingcon](https://sourceforge.net/projects/potassco/files/clingcon/).

# Building

See [INSTALL](https://github.com/potassco/clingcon/blob/master/INSTALL.md) for more details.

# Benchmarks

- [Experiments for clingcon 3]({{ site.resourceurl }}/clingcon/experiments-clingcon-3.tar.xz)
- [Experiments for clingcon 2]({{ site.resourceurl }}/clingcon/experiments-clingcon-2.tar.xz)
- [Experiments for clingcon 1]({{ site.resourceurl }}/clingcon/experiments-clingcon-1.tar.xz)
- [Experiments for new-old]({{ site.resourceurl }}/clingcon/experiments-newold.tar.xz)

# Citing

- Max Ostrowski and Torsten Schaub,
  [ASP modulo CSP: The clingcon system]({{ site.publicationurl }}/#DBLP:journals/tplp/OstrowskiS12), TPLP, 2012 (for version 2)
- Martin Gebser, Max Ostrowski and Torsten Schaub,
  [Constraint Answer Set Solving]({{ site.publicationurl }}/#DBLP:conf/iclp/GebserOS09), ICLP, 2009 (for version 1)
