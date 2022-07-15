---
title: Determine whether quantum states are stable equilibria
category: Quantum mechanics
tags: [Hilbert spaces, Vector spaces, Projections]
---
Determine whether, for "measurement processes", small perturbations of final states
yield back the same state (or not).

*Mathematical problem.* If a process is modelled by a projection operator,
the eignvectors of that operator are equilibria in the sense that they are
those vectors and only those vectors that are unchanged by the process. We want
to determine whether those equilibria are stable. That is, whether small perturbations
of those vectors project to the same vector.

*Physical significance.* The general approach we have to quantum states is that
they represent an "equilibrium" with both the environment and internal processes
that act at higher timescale. For example, the proton can be understood as
a single quantum object precisely when we can neglect its internal dynamics and
the coupling of the internal dynamics with the environment. In this sense, the
system is at "equilibrium". A "measurement", then, is a process with equilibria,
where each equilibrium corresponds to a particular measurement value.

A difference from the thermodynamic case, though, is that the final state is not
fully determined by the initial state: the initial state only sets a probability
distribution. We want to make sure that, at least for small perturbations (i.e. in its neighborhood), each
final state recovers this property. Geometrically, this seems to be the case
since the only way to make a change to a unitary vector is a rotation which, for
small changes, is a change in the perpendicular component. This means that, for
small perturbations, the projection should push back the vector to the original one.
