---
layout: page
title: clingo[DL]
permalink: /clingoDL/
---

The `clingo` derivative `clingo[DL]` accepts a subset of the theory of linear constraints 
namely Quantifier-Free Integer Difference Logic (QF-IDL) 
dealing with constraints of the form x-y<=k,
where x and y are integer variables and k is an integer constant.
Despite its restriction, QF-IDL can be used to naturally encode timing related problems, eg scheduling or timetabling,
and provides the additional advantage of being solvable in polynomial time.
Syntactically, a difference constraint x-y<=k is represented by a difference constraint atom of the form `&diff{x-y} <= k`.
`clingo[DL]` uses either the `Python` or `C++` theory interface of `clingo` to incorporate a propagator handling QF-IDL constraints. 

# Python

## Requirements
- `clingo`>=5.2.0 built with `Python` support

## Basic call:
```
clingo clingoDL.py <encoding> <instance> <options>
```
Example:
```
clingo clingoDL.py open_shop_dl.lp tai4_4_1.lp -c state=1
```

## Options
- all `clingo` options
- -c trace=1:
    - enables detailed output of theory propagation
- -c state=1:
    - enables stateful negative cycle detection
- -c strict=1:
    - enables strict semantics
- -c rdl=1:
    - enables real difference logic where a constraint x-y <= k, where x,y are real-valued variables and k is a real constant,
      have to be encoded as `&diff{x-y} <= "k"`.
      Note: this only possible without strict semantics
- Default: -c trace=0 -c state=1 -c strict=0 -c rdl=0

# C++

## Requirements
- currently we provide a static binary for Linux 64
- sources to appear

## Basic call:
```
clingoDL <encoding> <instance> -- <options>
```
Example:
```
clingoDL open_shop_dl.lp tai4_4_1.lp -- -c strict=1
```

## Options
- all `clingo` options that are not output related
- -c strict=1:
    - enables strict semantics
- -c rdl=1:
    - enables real difference logic where a constraint x-y <= k, where x,y are real-valued variables and k is a real constant,
      have to be encoded as `&diff{x-y} <= "k"`.
      Note: this only possible without strict semantics
- Default: -c strict=0 -c rdl=0

# Download

The systems are available [here](https://github.com/potassco/clingoDL)

# Benchmarks

- Benchmark set from "Clingo goes Linear Constraints over Reals and Integers", 2017: [download](http://www.cs.uni-potsdam.de/wv/clingoLC/clingoLC-benchmarks.tar.gz)
