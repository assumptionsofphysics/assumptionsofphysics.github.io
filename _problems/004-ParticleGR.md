---
title: See how much of relativity is already there in the particle equation
category: Classical mechanics
tags: [Differential geometry, Riemmanian geometry, Symplectic geometry, General relativity]
---
Following the conventions set up [here](https://latexonline.cc/compile?git=https%3A%2F%2Fgithub.com%2Fassumptionsofphysics%2Fassumptionsofphysics&target=Notes/2018-ParticleGR/ParticleGravitation.tex&command=pdflatex), apply the Hamiltonian constrain on the
symplectic form to see whether there is a dependence between the EM field and
the metric tensor.

*Mathematical problem.* In the linked note, we find the expression of the
symplectic form in terms of position and velocity. The expression lives on the
eight dimensional phase space (i.e. $$ \{t, q^i, E, p_i\} $$), which is redundant
given the Hamiltonian constrain $$ \mathcal{H} &= \frac{1}{2} m u^\alpha g_{\alpha\beta} u^\beta $$.
The idea is to use the constrain to lower the dimensionality of the form to a seven
dimensional non-symplectic form. The idea is to understand whether, on that submanifold,
there is a relationship between the $$ A_\alpha $$ and $$ g_{\alpha\beta} $$ fields.

*Physical significance.* The Hamiltonian constrain plays a double role: it is the
generator of the affine parameter (i.e. "time" evolution) and is a conserved
quantity during evolution (specifically, the rest energy of the particle). What
we want to understand is whether this double role puts a constrain on how the
$$ A_\alpha $$ and $$ g_{\alpha\beta} $$ fields can vary across phase-space.

If there is indeed a connection, it would mean that there are some hints of general
relativity in plain particle dynamics. If there isn't, then the link between
curvature and energy is a separate assumption than those required to derive
particle under scalar and potential forces.
