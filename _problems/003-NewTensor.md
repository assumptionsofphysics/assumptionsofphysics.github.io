---
title: Characterize the expression \( G_{\alpha\beta\gamma} = \partial_\alpha g_{\beta \gamma} - \partial_\beta g_{\alpha \gamma} \)
category: Classical mechanics
tags: [Differential geometry, Riemmanian geometry, Symplectic geometry, General relativity]
---
Characterize the geometry and the physics captured by the expression
$$ G_{\alpha\beta\gamma} = \partial_\alpha g_{\beta \gamma} - \partial_\beta g_{\alpha \gamma} $$.
This expression appears when expressing the sympletic in terms of position
and velocity (see [here](https://latexonline.cc/compile?git=https%3A%2F%2Fgithub.com%2Fassumptionsofphysics%2Fassumptionsofphysics&target=Notes/2018-ParticleGR/ParticleGravitation.tex&command=pdflatex) for more details).

*Mathematical problem.* The expression appears with the EM tensor in the spatial-temporal
part of the symplectic form when it is expressed in terms of position and velocity.
It also appears as a "correction" for the raised anti-symmetrized covariant
derivative. This means the expression should have both geometrical and physical significance,
which merit further study.

As an example of the type of things we are looking for:
* Is the expression a tensor? It would seem so as the spatial-temporal
part of the symplectic form should transform like a tensor.
* Can it be interpreted as a gravitational force?
* From calculation, the tensor can be understood as the difference between taking
an antisymmetrized covariant derivative and an antisymmetrized partial derivative:
what does that say geometrically?

*Physical significance.* Note that the setting is not really that of space-time
(i.e. Riemmanian manifold) but that of phase-space (i.e. symplectic manifold).
The general idea is to reunderstand the metric tensor not as a geometrical property of
space-time but as a geometrical property of phase-space.