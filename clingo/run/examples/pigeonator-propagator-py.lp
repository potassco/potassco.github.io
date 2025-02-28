#script (python)

from clingo.propagator import Assignment, Propagator, PropagateInit, PropagateControl

class Pigeonator(Propagator):
    def __init__(self):
        self.place = {}
        self.states = {}

    def init(self, init: PropagateInit):
        for atom in init.symbolic_atoms.by_signature("place", 2):
            lit = init.solver_literal(atom.literal)
            # store hole H of each place(P,H) atom
            self.place[lit] = atom.symbol.arguments[1].number
            init.add_watch(lit)
        for i in range(init.number_of_threads):
            self.states[i] = {}

    def propagate(self, control: PropagateControl, changes):
        state = self.states[control.thread_id]
        for lit in changes:
            hole = self.place[lit]
            prev = state.setdefault(hole, lit)
            if prev != lit and not control.add_nogood([lit, prev]):
                return

    def undo(self, thread_id: int, assignment: Assignment, changes):
        state = self.states[thread_id]
        for lit in changes:
            hole = self.place[lit]
            if state.get(hole, 0) == lit:
                del state[hole]

def main(prg):
    prg.register_propagator(Pigeonator())
    prg.ground([("base", [])])
    prg.solve()

#end.

#const h = 5.
#const p = h+1.

1 { place(P,H) : H = 1..h } 1 :- P = 1..p.
% { place(P,H) : P = 1..p } 1 :- H = 1..h.
