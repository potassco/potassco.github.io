var Module;
var outputElement = document.getElementById('output');
var runButton = document.getElementById('run');
var input = ace.edit("input");
var output = "";

input.setTheme("ace/theme/textmate");
input.$blockScrolling = Infinity;
input.setOptions({
  useSoftTabs: true,
  tabSize: 2,
  maxLines: Infinity,
  mode: "ace/mode/gringo",
  autoScrollEditorIntoView: true
});

function example() {
    var ex = document.getElementById("examples").value;
    window[ex]();
}

function example1() {
  input.setValue("% instance\n\
motive(harry).\n\
motive(sally).\n\
guilty(harry).\n\
\n\
% encoding\n\
innocent(Suspect) :- motive(Suspect), not guilty(Suspect).", -1);
}

function example2() {
  input.setValue("#const n = 8.\n\
% n-Queens encoding %\n\
\n\
{ q(I,1..n) } == 1 :- I = 1..n.\n\
{ q(1..n,J) } == 1 :- J = 1..n.\n\
:- { q(D-J,J) } >= 2, D =   2..2*n.\n\
:- { q(D+J,J) } >= 2, D = 1-n..n-1.", -1);
}

function example3() {
  input.setValue("% instance\n\
eagle(eddy).\n\
penguin(tux).\n\
\n\
% encoding\n\
 fly(X) :- bird(X), not -fly(X).\n\
-fly(X) :- penguin(X).\n\
bird(X) :- penguin(X).\n\
bird(X) :- eagle(X).", -1);
}

function example4() {
  input.setValue("% Default\n\
#const n = 3.\n\
\n\
% Generate\n\
{ color(X,1..n) } = 1 :- node(X).\n\
% Test\n\
:- edge(X,Y), color(X,C), color(Y,C).\n\
\n\
% Nodes\n\
node(1..6).\n\
% (Directed) Edges\n\
edge(1,(2;3;4)).  edge(2,(4;5;6)).  edge(3,(1;4;5)).\n\
edge(4,(1;2)).    edge(5,(3;4;6)).  edge(6,(2;3;5)).\n\
\n\
% Display\n\
#show color/2.", -1);
}

function example5() {
  input.setValue("% Generate\n\
{ cycle(X,Y) : edge(X,Y) } = 1 :- node(X).\n\
{ cycle(X,Y) : edge(X,Y) } = 1 :- node(Y).\n\
% Define\n\
reached(Y) :- cycle(1,Y).\n\
reached(Y) :- cycle(X,Y), reached(X).\n\
% Test\n\
:- node(Y), not reached(Y).\n\
% Display\n\
#show cycle/2.\n\
\n\
% Optimize\n\
#minimize { C,X,Y : cycle(X,Y), cost(X,Y,C) }.\n\
\n\
% Nodes\n\
node(1..6).\n\
% (Directed) Edges\n\
edge(1,(2;3;4)).  edge(2,(4;5;6)).  edge(3,(1;4;5)).\n\
edge(4,(1;2)).    edge(5,(3;4;6)).  edge(6,(2;3;5)).\n\
\n\
% Edge Costs\n\
cost(1,2,2).  cost(1,3,3).  cost(1,4,1).\n\
cost(2,4,2).  cost(2,5,2).  cost(2,6,4).\n\
cost(3,1,3).  cost(3,4,2).  cost(3,5,2).\n\
cost(4,1,1).  cost(4,2,2).\n\
cost(5,3,2).  cost(5,4,2).  cost(5,6,1).\n\
cost(6,2,4).  cost(6,3,3).  cost(6,5,1).", -1);
}

function example6() {
  input.setValue("#include <incmode>.\n\
\n\
#program base.\n\
% Define\n\
location(table).\n\
location(X) :- block(X).\n\
holds(F,0) :- init(F).\n\
\n\
#program step(t).\n\
% Generate\n\
{ move(X,Y,t) : block(X), location(Y), X != Y } = 1.\n\
% Test\n\
:- move(X,Y,t), holds(on(A,X),t-1).\n\
:- move(X,Y,t), holds(on(B,Y),t-1), B != X, Y != table.\n\
% Define\n\
moved(X,t) :- move(X,Y,t).\n\
holds(on(X,Y),t) :- move(X,Y,t).\n\
holds(on(X,Z),t) :- holds(on(X,Z),t-1), not moved(X,t).\n\
\n\
#program check(t).\n\
% Test\n\
:- query(t), goal(F), not holds(F,t).\n\
\n\
% Display\n\
#show move/3.\n\
\n\
#program base.\n\
% Sussman Anomaly\n\
%\n\
block(b0).\n\
block(b1).\n\
block(b2).\n\
%\n\
% initial state:\n\
%\n\
%  2\n\
%  0 1\n\
% -------\n\
%\n\
init(on(b1,table)).\n\
init(on(b2,b0)).\n\
init(on(b0,table)).\n\
%\n\
% goal state:\n\
%\n\
%  2\n\
%  1\n\
%  0\n\
% -------\n\
%\n\
goal(on(b1,b0)).\n\
goal(on(b2,b1)).\n\
goal(on(b0,table)).", -1);
}

function example7() {
  input.setValue("#script (lua)\n\
\n\
require(\"clingo\")\n\
\n\
local Pigeonator = { }\n\
Pigeonator.__index = Pigeonator\n\
\n\
function Pigeonator.new()\n\
    local self = setmetatable({ }, Pigeonator)\n\
    self.place = {} -- shared state\n\
    return self\n\
end\n\
\n\
function Pigeonator:init(init)\n\
    for atom in init.symbolic_atoms:by_signature(\"place\", 2) do\n\
        local lit = init:solver_literal(atom.literal)\n\
        -- store hole H of each place(P,H) atom\n\
        self.place[lit] = atom.symbol.arguments[2].number\n\
        init:add_watch(lit)\n\
    end\n\
    for i = 1, init.threads do\n\
        init:set_state(i, {})\n\
    end\n\
end\n\
\n\
function Pigeonator:propagate(control, changes, holes)\n\
    for _, lit in ipairs(changes) do\n\
        local hole = self.place[lit]\n\
        if holes[hole] == nil then\n\
            holes[hole] = lit\n\
        end\n\
        local prev = holes[hole]\n\
        if prev ~= lit and not control:add_nogood{{lit, prev}} then\n\
            return\n\
        end\n\
    end\n\
end\n\
\n\
function Pigeonator:undo(thread_id, assignment, changes, holes)\n\
    for _, lit in ipairs(changes) do\n\
        local hole = self.place[lit]\n\
        if holes[hole] == lit then\n\
            holes[hole] = nil\n\
        end\n\
    end\n\
end\n\
\n\
function main(prg)\n\
    prg:register_propagator(Pigeonator.new())\n\
    prg:ground({{\"base\", {}}})\n\
    prg:solve()\n\
end\n\
\n\
#end.\n\
\n\
#const h = 5.\n\
#const p = h+1.\n\
\n\
1 { place(P,H) : H = 1..h } 1 :- P = 1..p.\n\
% { place(P,H) : P = 1..p } 1 :- H = 1..h.", -1);
}

function solve() {
  options = "";
  if (document.getElementById("stats").checked) { options += " --stats"; }
  if (document.getElementById("project").checked) { options += " --project"; }
  var index = document.getElementById("mode").selectedIndex;
  if (index >= 0) {
    if (index == 1) {
      options += " --opt-mode=optN --enum-mode=brave";
    }
    else if (index == 2) {
      options += " --opt-mode=optN --enum-mode=cautious";
    }
    else if (index == 3) {
      options += " --opt-mode=optN 0";
    }
  }
  output = "";
  Module.ccall('run', 'number', ['string', 'string'], [input.getValue(), options])
  updateOutput();
}

function clearOutput() {
  output = "";
  updateOutput();
}

function updateOutput() {
  if (outputElement) {
    outputElement.textContent = output;
    outputElement.scrollTop = outputElement.scrollHeight; // focus on bottom
  }
}

Module = {
  preRun: [],
  postRun: [],
  print: (function() {
    return function(text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
      output += text + "\n";
    };
  })(),
  printErr: function(text) {
    if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
    if (text == "Calling stub instead of signal()") { return; }
    var prefix = "pre-main prep time: ";
    if (typeof text=="string" && prefix == text.slice(0, prefix.length)) { text = "Ready to go!" }
    output += text + "\n";
    updateOutput();
  },
  setStatus: function(text) {
    if (text == "") { runButton.disabled = false; }
    else {
      output += text + "\n";
      updateOutput();
    }
  },
  totalDependencies: 0,
  monitorRunDependencies: function(left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
  }
};
Module.setStatus('Downloading...');
window.onerror = function(event) {
  Module.setStatus('Exception thrown, see JavaScript console');
};

