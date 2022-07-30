---
title: Show equivalence of "inner products"/bilinear forms and trigonometry
category: Linear algebra
tags: [Riemannian geometry, Pseudo-Riemannian geometry, symplectic geometry]
---
Show the equivalence of a linear space with a positive-definite symmetric bilinear form and
geometry with the law of cosines (and suitable adjustment if the form is not
positive definite, but still non-degenerate); show the equivalence of a linear space
with a skew-symmetric form and geometry with areas.

*Mathematical problem.* To really bridge linear algebra and geometry, we are
looking for a connection such that the definition on each side are enough to recover the other.
There are three cases we want to cover:
1. positive-definite symmetric bilinear form - this defines lengths and
angles between segments (represented by vectors). The connection is the law of
cosines by comparing $$c^2 = a^2 + b^2 - 2ab \cos \alpha$$ with
$$c \cdot c = (a - b) \cdot (a - b) = a \cdot a + b \cdot b - 2 a \cdot b$$.
1. non-degenerate symmetric bilinear form - note that, for orthogonal components,
the law of cosine becomes the Pythagorean theorem $$c^2 = a^2 + b^2$$. If one of
the direction "negative-definite" we have $$c^2 = a^2 - b^2$$. This is still
the Pythagorean theorem, except that $$a$$ and $$b$$ no longer represent orthogonal
components, but $$c$$ and $$b$$ do. The idea, then, is to re-express the law of
cosines and find the proper connection between vectors and geometry.
1. non-degenaret skew-symmetric bilinear form - this defines only areas of
parallelopipeds. The connection should simply be that the area is $$ab \sin \alpha$$.
Note that the sine is an odd function, therefore if we set $$\omega(a,b) = |a||b| \sin \alpha$$
the form must be skew-symmetric.

*Physical significance.* We want to make a tight connection between the three
different types of differential geometries used in physics, so that we can have
a crips geometrical interpretation for the physics. The first case is used in
standard physical space. The second case is used in space-time. The third case
is used in phase space. The important aspect here is showing that the assumptions
on the existence of a specific form with specific properties are equivalent
to the geometrical (and therefore physical) assumptions.

Another issue is that, mathematically, these are usually treated as different
subjects. We believe is useful to see them as variation of a general theme, so
that one can build a more general intuition for the tools that are common (i.e.
all of differential topology, linear algebra, ...).
