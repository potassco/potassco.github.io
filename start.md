---
layout: page
title: Getting Started
permalink: /start/
menu: main
weight: 2
---

# Installing

The installation of the major Potassco tools is rather straightforward.
We suggest to start with downloading the most recent version of the ASP system [clingo](http://sourceforge.net/projects/potassco/files/clingo).

# Learning

For experiencing ASP with [clingo](/clingo/),
we recommend to begin with the [Potassco guide](http://sourceforge.net/projects/potassco/files/guide/).
It contains a light introduction to the input language of clingo, provides easy modeling examples, and discusses its usage.

# Running

To get a quick first impression, you may want to experiment with [running clingo](/clingo/run/) in your browser.

# Doing

In ASP, a problem is described by a set of rules.
For example, the rule

    innocent(Suspect) :- motive(Suspect), not guilty(Suspect).

expresses that a `Suspect` is considered `innocent` *if* she has a `motive` *and* she was not found `guilty`.
The symbols '`:-`' and '`,`' stand for *if* and *and*.
The symbol '`not`' stands for (default) negation.
While `guilty`, `innocent`, and `motive` are user-defined predicates,
`Suspect` provides a user-defined variable that can be replaced by specific terms (representing objects).
Variables start with uppercase letters, predicates and terms (usually) begin with lowercase letters.
Finally, each rule must be terminated with a period '`.`' to signal the end of the rule.

Facts are rules without any conditions.
This is why the *if* symbol '`:-`' is omitted.
Example facts are

    motive(harry).
    motive(sally).
    guilty(harry).

Solutions to a problem, or simply answer sets, are given by sets of atomic propositions
that are supposed to be true in the answer set; false propositions are omitted.
A solution to the above rule and the three facts is the answer set 
containing all three facts as well as the proposition `innocent(sally)`.
This is because our rule applies to `sally` but not `harry`.

Let us reproduce this result with clingo.
To begin with, we put the above rule along with the three facts in a file called [crime.lp](/files/crime.lp).
The extension `lp` is not necessary but helps to identify the type of file.

The ASP system clingo allows us to compute the aforementioned answer set:

    $ clingo files/crime.lp
    clingo version 4.5.0
    Reading from files/crime.lp
    Solving...
    Answer: 1
    motive(harry) motive(sally) guilty(harry) innocent(sally)
    SATISFIABLE

# Reading

A formal introduction to (a large fragment of) the input language of clingo 
and its precise semantics can be found [here](http://www.cs.utexas.edu/users/vl/papers/AG.pdf).
You may also be interested in the [ASP-Core-2](https://www.mat.unical.it/aspcomp2013/files/ASP-CORE-2.03b.pdf) language standard,
a subset of the language of clingo.

The foundations and algorithms underlying the grounding and solving technology used in clingo
as well as various modeling techniques are described in detail in the [Potassco book](/doc/book/).

Teaching material and links to further tutorials can be found in the [teaching](/doc/teaching/) section;
similarly the [video](/doc/videos/) section may find your interest.

# Venturing

Our major tools are listed on the main [Potassco](/) page.
Follow their links for corresponding executables for Linux, MacOS, and Windows as well as sources.
And of course check the available [documentation](/doc/).

Still experimental software is found in the [Labs](/labs/) section,
and may need more care during installation.

# Despairing

If you have a question,
it is a good idea to try at first the [FAQ](/doc/faq/),
which answers the most commonly asked questions about our tools.
Your next best bet is to check the archive of the [potassco-users](https://sourceforge.net/p/potassco/mailman/potassco-users/) mailing list.
If you need further help,
feel free to sign up to the [potassco-users](https://lists.sourceforge.net/lists/listinfo/potassco-users/) mailing list and post your question.

Bug reports and feature requests can be posted in the issue tracker of a system's [github page](https://github.com/potassco/).

For gossip and release announcements,
you may want to join our [Google+ group](https://plus.google.com/102537396696345299260/posts) or
the [potassco-announce](https://lists.sourceforge.net/lists/listinfo/potassco-announce) mailing list.
