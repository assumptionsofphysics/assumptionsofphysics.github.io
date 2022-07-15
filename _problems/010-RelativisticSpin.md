---
title: A classical analogue for relativistic spin
category: Classical mechanics
tags: [Quantum mechanics, spin, Hamiltonian mechanics, symplectic geometry]
---
Provide a classical analogue for spin that works relativistically.

*Mathematical problem.* In Hamiltonian mechanics, the phase space of a free particle
is given by the conjugate quantities $$\{q^i, p_i\}$$ and the Hamiltonian
$$H=\frac{1}{2m} p_i g^{ij}p_j$$. In the extended phase space, the variables become
$$\{q^\alpha, p_\alpha\}=\{t, q^i, -E, p_i\}$$ and the extended Hamiltonian is
$$\mathcal{H}=\frac{1}{2m} p_\alpha g^{\alpha\beta}p_\beta - \frac{1}{2}mc^2$$. Note that
the extended Hamiltonian functions both as a constraint and as the generator
of the affine parameter (proper time for particles and minus proper time
for antiparticles).

If we take a spatial direction as a degree of freedom, phase space is the
two-sphere (the only sphere that is also a symplectic manifold) identified by all
unitary vectors of components $$S_i$$. The conjugate
quantities are given by the angle over a plane and the component perpendicular
to the plane. For example, we have $$\{\theta^{xy}, S_z\}$$. The Hamiltonian
is given by $$H=\mu B^{k}S_k$$. See [here](https://sufficientlywise.org/2017/11/15/classical-spin/)
for details.

The problem is to find the "correct" space with the "correct" conjugate variables
for the relativistic case.

*Physical significance.* The idea is that spin in quantum mechanics is the
quantization of a directional degree of freedom. It is not clear whether the
correct generalization is a direction in space-time, or a plane of rotation
in space-time. In the first case, we would expect spin to generalize to a four-vector
while in the second case to a two-form (i.e. an anti-symmetric rank two tensor).

The other issue is to fully understand how the units work. In the same way that
conjugate momentum is covariant under changes of position, $$S$$ should be
covariant under changes of angles. Somehow, radian units for angles are "better".
For one, if we take units of radians for the angle, the range of the angle is
$$2\pi$$. If we take the range of $$S_z$$ to be $$[-\hbar/2, \hbar/2]$$, then the
area is $$2\pi \hbar = h$$. Therefore, if we have a sphere with the surface area equal to the
Planck constant, by using radians for angle we find the range of the spin's vertical
component to match that of a spin $$1/2$$ system.
