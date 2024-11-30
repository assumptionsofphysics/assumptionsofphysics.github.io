---
title: Product of observables
category: Quantum mechanics
tags: [Linear operators, Hilbert spaces, \*-algebra]
---
What do the different ordering of product represent physically? If I have three random variables,
how can I tell whether one is the product of the other two? Can this be understood in terms of
generated transformation/commutation of operations?

*Mathematical problem.* Given that the product of two self-adjoint operators is not necessarily self-adjoint,
the questions is whether there exists a canonical way to create the product of two quantum observables. Or
at least to understand why there are multiple ones with different ordering. The
issue is related to positing a *-algebra of observables, which is the starting point
of the algebraic approach to quantum theory. The idea is to understand both at a mathematical
and physical level what the product of observable is (and why it is not unique).

The problem can be seen from two direction: how should we construct the product and how the product
can be identified. For example, consider the sum. The sum of two self-adjoint operators is itself self-adjoint,
so we have a straight forward way to construct it. Moreover, given the observable A, B and C,
we have $$C=A+B$$ if and only if $$\langle C \rangle = \langle A \rangle + \langle B \rangle$$
for all states, so we have a straight forward way to identify the sum.

For constructing the product, note that the function $$f$$ applied to an operator corresponds to the self-adjoint
operator where
the eigenvectors are the same while the eigenvalues are given by applying the function
to the related eigenvalues. Therefore $$A+B$$ and $$f(A)$$ are allowed. Note that $$\frac{(a+b)^2 - a^2 -b^2}{2}=a*b$$. The left side is in terms of operations
allowed, therefore a product consistent with those rules must be in terms of the anti-commutator
$$A*B = \frac{\{A, B\}}{2}$$.

The issue is that the operation so defined is not associative: $$\{\{A, B\}, C\} - \{A, \{B, C\}\} = A [ B, C ] - [B, A] C$$.
However, for position and momentum we have $$[Q, P] = \imath \hbar I$$ and therefore $$Q [Q, P] - [Q, P] Q = 0$$.
By recursively applying the product, it would seem we are able to construct all polynomials of $$Q$$ and $$P$$
and therefore (through Taylor expansion) generic functions. So why do we have different permutations, and what they
do represent in terms of this "canonical" product.

For identification in terms of properties of expectation values, it is not clear. It is not clear
for a generic function of one observable either. Ideally, we would like to say that
an observable is a function of other observables if the expectation of one
has some property with respect with the expectation of the others.

*Physical significance.* This would seem like a basic problem that should have a
settled question in the literature, yet we were not able to find an in depth
treatment. If the operation is well-defined, it would also be interesting to understand what symmetry it would generate
and what the conjugate variable would be. If not, it would be interesting to understand exactly the root of the problem.

One possible source of the problem may relate to correlations. If two variables are uncorrelated, the expectation
of the product is the product of the expectation. In classical mechanics, eif the two variables are correlated, we
can still see them as distributions over points, and the points, since they define all values with certainty,
can be understood as having uncorrelated values. Therefore, in classical mechanics, every distribution can be
understood as a convex combination of distributions that are, at least in the limit, uncorrelated. This cannot
be done in quantum mechanics.