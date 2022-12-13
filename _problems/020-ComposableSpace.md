---
title: Find minimal axioms on a set of elements such that affine combinations (i.e. \( \sum_i a_i x_i \) with \(\sum_i a_i = 1\) ) are well-defined
category: Geometry
tags: [Synthetic geometry, Affine geometry, Projective geometry]
---
The idea is find the minimum set of axioms for a space in which the
weighted sum (affine combination) $$\sum_i a_i x_i$$ of elements is well
defined. The idea is then to find necessary and sufficient condition to
recover projective/vector spaces and probability spaces.

*Mathematical problem.* A **composable space** should be defined as a set $$X$$
where linear combinations such as $$\sum_i a_i x_i$$ is well defined for all $a_i$
such that $$\sum_i a_i = 1$$. The scalar multiplication by itself should not be
defined on the space, but linear combination of linear combination should
compose in the expected way. E.g. $$a x + b x + ... = (a+b) x + ...$$, $$a (bx + cy) + ... = abx +acy + ...$$.

Just to give an example, a symplex would be an immediate example. It would
have the property that each element has a unique decomposition.
That is, define that an element $$x$$ is pure if for every combination such
that $$\sum_i a_i x_i = x$$ then there exists some $$i$$ for which $$a_i = 1$$ and $$x_i = x$$.
Then, for a symplex, there is a unique composition $$\sum_i a_i x_i$$ such that
all $$x_i$$ are pure elements. In fact, it should be possible to show that
if all elements are uniquely decomposable, and there are finitely many
pure elements, then the space is isomorphic to a symplex.


*Physical significance.* We want to define the most general space for the notion
of an ensemble. The elements of the space can be understood as those physical objects
(i.e. statistical distributions, probability distributions, etc...) that can be
understood as made of other parts.

The space allows us to describe the relative amount of each part, not an absolute
amount. The idea is that, in physics, whenever we have these type of objects we
often renormalize anyway. This is expecially true for probabilistic ensembles,
given that they represent more a recipe for preparation, not how many times
the enseble will be produced. The idea, then, is to start already with objects that
are already normalized.

For example, the space of probability distributions (i.e. measures over another space
$$Y$$) or the space of quantum mixed states (i.e. density operators over some Hilber
space $$H$$) would be instances of composable spaces. The goal would be to understand
which necessary and sufficient conditions are required for the different types of spaces.

