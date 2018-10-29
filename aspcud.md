---
layout: page
title: aspcud
permalink: /aspcud/
---

Aspcud is a solver for package dependencies.
A package universe and a request to install, remove, or upgrade packages have to be encoded in the CUDF format.
Such a CUDF document can then be passed to aspcud along with an optimization criteria to obtain a solution to the given package problem.

Aspcud is available as a backend solver for apt-get in debian.
It is probably slower than apt-get's default solver but if you run into conflicts, aspcud will find a solution (if there is one).
All you have to do is install and then select aspcud as solver:

    apt-get install apt-cudf
    apt-get -s --solver aspcud install totem

More information about the cudf format can be found on the [Mancoosi](http://www.mancoosi.org/) homepage.

# Download

- Recent versions are on github: [github.com/potassco/aspcud/releases](https://github.com/potassco/aspcud/releases)
- Old versions are on sourceforge: [sourceforge.net/projects/potassco/aspcud](https://sourceforge.net/projects/potassco/files/aspcud/)

# Packages

- aspcud is available in [Debian](https://www.debian.org/) and [Ubuntu](http://www.ubuntu.com/).

# Competition submissions

- [MISC competition 2012](http://www.mancoosi.org/misc-2012/)
- [MISC competition 2011](http://www.mancoosi.org/misc-2011/)
- [Fourth MISC-live run](http://www.mancoosi.org/misc-live/20110225/)

# Citing

- [Overview article for aspcud]({{ site.publicationurl }}/#DBLP:journals/corr/abs-1109-0113)
