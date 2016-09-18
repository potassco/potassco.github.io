---
layout: page
title: Videos
permalink: /doc/videos/
---

# The ASP Solving Process via Graph Coloring

This little (and very first!) tutorial explains the underlying workflow in Answer Set Programming (ASP) .
For illustration, we use graph coloring as a guiding example.
The [first part](http://youtu.be/7Pw-4iDc-yI) explains the basic modeling methodology of ASP,
while the [second one](http://youtu.be/M2lhCvCTS9U) is dedicated to handling ASP systems.
On the side, basic statistics are used to gain insights into the ASP solving process, and
finally the relation among the ASP systems clasp, gringo, and clingo is briefly discussed.

Video
([part one](http://youtu.be/7Pw-4iDc-yI) 10:34,
 [part two](http://youtu.be/M2lhCvCTS9U) 16:44),
Script
([org](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.org),
 [html](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.html),
 [tex](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.tex),
 [pdf](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.pdf),
 [txt](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.txt)),
Files
([tgz](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.tgz),
 [zip](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Workflow/workflow.zip))

# Basic Modeling in ASP via n-Queens Puzzles

This second (and yet clumsy!) tutorial deals with basic modeling techniques in Answer Set Programming (ASP).
We illustrate these techniques by modeling the n-Queens puzzle in various ways.
The [first part](http://youtu.be/d3arlJlGRTk) discusses a basic encoding along with some arising pitfalls.
The [add-on](http://youtu.be/qk2vXGhzmG0) to part one motivates the choice of this encoding.
The [second part](http://youtu.be/QDtthV5K61U) provides a more advanced encoding illustrating the advantage of using cardinality constraints;
it discusses their impact on grounding and searching (by inspecting clasp's statistics).
The first [add-on](http://youtu.be/dpGV1nB05A0) gives an even more compact encoding.
The second [add-on](http://youtu.be/pTYFOTF1bHQ) discusses clasp's treatment of cardinality constraints.
The [third part](http://youtu.be/3U4j0RrdiYI) talks about issues with declarativity and scalability.
The [fourth part](http://youtu.be/VAnCj2eNWUc) presents a further improved encoding,
obtained by replacing a source of combinatorial search within grounding by pre-computation.
The [fifth part](http://youtu.be/QrP8KiDl3hw) explores a new experimental feature of gringo
that allows for expressing finite linear constraint satisfaction problems within its modeling language and for passing them on to off-the-shelf ASP solvers.
The sixth and [final part](http://youtu.be/9nKBkggOIqQ) wraps up the tutorial
by applying the most promising encodings to more demanding problems, namely the 1000-Queens puzzle.

Video
([part one](http://youtu.be/d3arlJlGRTk) 11:39; [one+](http://youtu.be/qk2vXGhzmG0) 2:59,
 [part two](http://youtu.be/QDtthV5K61U) 8:59; [two+](http://youtu.be/dpGV1nB05A0) 3:06; [two++](http://youtu.be/pTYFOTF1bHQ) 4:02,
 [part three](http://youtu.be/3U4j0RrdiYI) 4:51,
 [part four](http://youtu.be/VAnCj2eNWUc) 8:35,
 [part five](http://youtu.be/QrP8KiDl3hw) 11:35,
 [part six](http://youtu.be/9nKBkggOIqQ) 4:38),
Script
([org](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.org),
 [html](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.html),
 [tex](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.tex),
 [pdf](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.pdf),
 [txt](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.txt)),
Files
([tgz](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.tgz),
 [zip](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/BasicModeling/modeling.zip))

# Optimization in clasp 3 via Traveling Salespersons

This video provides an introduction to optimization in ASP while focusing on the capacities of the clasp 3 series.
The [first part](http://youtu.be/23KyrdzHVOA) sets the stage by describing a well-known ASP encoding of the traveling salesperson problem.
The [second part](http://youtu.be/vcV_aN1cTMk) introduces clasp's two basic approaches to optimization,
viz. the branch-and-bound and unsatisfiable-core-based approach, and it discusses the different phases of optimization processes,
namely convergence and optimality.
[Part three](http://youtu.be/m0wL33OO_DA) introduces a quite effective design pattern for modeling optimization problems
(thanks to [Martin Gebser](http://www.cs.uni-potsdam.de/~gebser/)).
[Part four](http://youtu.be/3MzZvnssuLU) is dedicated to clasp's manifold heuristics and strategies related to optimization:
* [`--progress-saving`](http://youtu.be/QyGet9o94Eo)
* [`--opt-strategy`](http://youtu.be/bxTNP_jY9J8)
* and there are more to come :)

Video
([part one](http://youtu.be/23KyrdzHVOA) 12:01,
 [part two](http://youtu.be/vcV_aN1cTMk) 8:21,
 [part three](http://youtu.be/m0wL33OO_DA) 14:16,
 [part four](http://youtu.be/3MzZvnssuLU) 3:58:
 [A](http://youtu.be/QyGet9o94Eo) 6:28,
 [B](http://youtu.be/bxTNP_jY9J8) 22:29),
Script
([org](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.org),
 [html](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.html),
 [tex](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.tex),
 [pdf](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.pdf),
 [txt](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.txt)),
Files
([tgz](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.tgz),
 [zip](http://www.cs.uni-potsdam.de/~torsten/Potassco/Videos/Optimization/optimization.zip))

# Ricochet Robots with ASP

[Video](http://youtu.be/fOxTg5DDMXA) 13:34,
[Resources](/doc/apps/#ricochet) TODO

# Talks and Tutorials

- Answer Set Solving in Practice (Tutorial)

  AAAI'13, Seattle, USA,
  Video
  ([part one](http://techtalks.tv/talks/answer-set-solving-in-practice-part-1/58559/) 1:28:21,
   [part two](http://techtalks.tv/talks/answer-set-solving-in-practice-part-2/58560/) 1:59:22),
  [Slides](/doc/teaching/#aaai13) TODO

- Experiencing Answer Set Programming at Work, Today and Tomorrow

  ICLP'13, Istanbul, Turkey,
  [Video](http://youtu.be/GW42Ss0zxpU) 1:01:42,
  [Slides](https://docs.google.com/file/d/0B7viVpAGLxCTR0F4UFRyQ21WQkE/edit?usp=sharing)

- Answer Set Programming: Boolean Constraint Solving for Knowledge Representation and Reasoning

  CP'13, Uppsala, Sweden,
  [Video](http://youtu.be/gVQ0bP8zyHw) 1:05:15,
  [Slides](https://docs.google.com/file/d/0B7viVpAGLxCTTHhvU2tGdEZMZk0/edit?usp=sharing)

- More **teaching material** can be found [here](/teaching/).
