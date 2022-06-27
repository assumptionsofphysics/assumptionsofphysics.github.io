---
title: Find a better mathematical characterization for quantum states
category: Quantum mechanics
tags: [Vector spaces, Function spaces]
---
Find a better physically motivated characterization for the state space of
quantum mechanics.

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
In fact, requiring the second feature means recovering the Schwartz space.

Does the Shwartz space satisfy all other characteristics of a Hilbert space,
except the closure under the norm? If we just drop the closure under the norm,
what do we lose?

*Physical significance.* If we look at the list of defining properties of a Hilbert space,
completeness is the only one that does not make physical sense. The linearity of
the normed vector space can be understood as coming from linearity of probability space;
the existence of projections is the requirement of being able to identify states
(i.e. a measurement that outputs 1 if the state matches and 0 if it doesn't).
The completeness would mean that the limit of a sequence of state preparation
always leads a state, but this is not the case: we can (in principle) prepare
states with narrower and narrower spatial distribution, but not zero spatial
distribution (delta Dirac). The idea would be that the requirement of completeness makes the mathematical
space nicer to work with, but not physically meaningful.
