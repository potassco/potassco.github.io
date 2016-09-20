---
layout: post
title: Basic Modeling in ASP via n-Queens Puzzles
summary: This video series shows how to write logic programs that can be solved efficiently.
weight: 8000
---
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
