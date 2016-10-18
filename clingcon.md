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
{move(T)} :- step(T), T > 0.

%effects
&sum {at(V); stepsize} = at(T) :- move(T), V = T-1.

%frame axiom
&sum {at(V)} = at(T) :- not move(T); step(T); step(V); V = T-1.

%goals
:- &sum {at(end)} <= 100.

&show {at(X):step(X)}.
#show move/1.
~~~~

More examples can be found in the download section.
# Download

- Recent clingcon 3.x releases are on github: [github.com/potassco/clingcon/releases](https://github.com/potassco/clingcon/releases).
- The latest source is on github: [github.com/potassco/clingcon](https://github.com/potassco/clingcon).
- Clingcon up to version 2.x is available on sourceforge: [sourceforge.net/projects/potassco/files/clingcon](https://sourceforge.net/projects/potassco/files/clingcon/).

# Citing

- Description of clingcon version 2.x:
[pdf](http://www.cs.uni-potsdam.de/wv/pdfformat/ostsch12a.pdf)
[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/ostsch12a.bib)
- Article for Constraint Answer Set Solving and clingcon 1.x:
[pdf](http://www.cs.uni-potsdam.de/wv/pdfformat/geossc09a.pdf)
[bibtex](http://www.cs.uni-potsdam.de/wv/bibtex/geossc09a.bib)

More information on the versions 1.x -2.x can be found on [clingcon's old home page](http://www.cs.uni-potsdam.de/clingcon/).
