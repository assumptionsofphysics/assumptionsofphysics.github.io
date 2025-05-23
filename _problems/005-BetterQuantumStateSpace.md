---
title: Find a better mathematical characterization for quantum states
category: Quantum mechanics
tags: [Vector spaces, Function spaces]
---
Find a better physically motivated mathematical characterization for the state space of
quantum mechanics. See [this paper](https://arxiv.org/abs/2308.06669) for more details.

*Mathematical problem.* The standard way to represent quantum states is using
vectors in Hilbert spaces. The requirements for a Hilbert space can be broken up
into the following components:
* Vector space
* \+ normed (normed vector spaces)
* \+ complete under the norm (Banach space)
* \+ every closed linear subspace is the range of a projection (Hilbert space) (see [here](https://en.wikipedia.org/w/index.php?title=Banach_space#Characterizations_of_Hilbert_space_among_Banach_spaces))
The completion under the norm seems the only non-physical requirement.

On the other hand, the [Schwartz_space](https://en.wikipedia.org/wiki/Schwartz_space)
is a dense subset of $$L^2$$, which seems better suited as:
* It is closed under Fourier transform
* It has finite expectations for all polynomials of position and momentum
* It is dense over $$L^2$$
* Schwartz spaces on different number of DOFs are not isomorphic
In fact, requiring the second feature means recovering the Schwartz space.

Does the Schwartz space satisfy all other characteristics of a Hilbert space,
except the closure under the norm? If we just drop the closure under the norm,
what do we lose? If we have a Hamiltonian that is a polynomial of position and momentum,
does that map Schwartz functions to Schwartz functions? What is the constraint
on the Hamiltonian such that the evolution maps Schwartz functions to Schwartz functions?
What is the role (if any) of the dual space?

Explore [this notion of quasi-completeness](https://www-users.cse.umn.edu/~garrett/m/fun/notes_2012-13/07d_quasi-completeness.pdf) as an alternative of the completeness under the norm

*Physical significance.* If we look at the list of defining properties of a Hilbert space,
completeness is the only one that does not make physical sense. The linearity of
the normed vector space can be understood as coming from linearity of probability space;
the existence of projections is the requirement of being able to identify states
(i.e. a measurement that outputs 1 if the state matches and 0 if it doesn't).
The completeness would mean that the limit of a sequence of state preparation
always leads to a state, but this is not the case: we can (in principle) prepare
states with greater and greater spread in position, but not infinite spread in position.
In general, if the sequence of expectation values for one observable goes to infinite,
it is clear that the limit cannot be understood as a realizable preparation.
The idea would be that the requirement of completeness makes the mathematical
space nicer to work with, but not physically meaningful.

*Notes.* Even listing all problems with Hilbert spaces may be useful.

For example, a related problem with Hilbert spaces ($$L^2 specifically$$ see [Adrian Heathcote - Unbounded operators and the incompleteness of quantum mechanics](https://web.maths.unsw.edu.au/~jim/UOperators.pdf))
is that self-adjoint operators that are defined on the whole space must be bounded.
This means that unbounded operators must not be defined on all states: there must
be states for which the average position is not well-defined. Again, note that this
is not true for the Schwartz space: the position is unbounded (there is no maximum
value for position) but all states have a well defined average position.
