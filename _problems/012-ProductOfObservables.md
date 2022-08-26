---
title: Product of observables
category: Quantum mechanics
tags: [Linear operators, Hilbert spaces]
---
Make a decisive argument as to whether the product of observables is well-defined (and what it is) or not.

*Mathematical problem.* Given that the product of two self-adjoint operators is not necessarily self-adjoint,
the questions is whether there exists a canonical way to create the product of two quantum observables.

Note that the sum of two self-adjoint operators is itself self-adjoint, so the sum
would seem to be allowed. Also, the function $$f$$ applied to an operator corresponds to the self-adjoint
operator where
the eigenvectors are the same while the eigenvalues are given by applying the function
to the related eigenvalues. Therefore $$A+B$$ and $$f(A)$$ are allowed.

Note that $$\frac{(a+b)^2 - a^2 -b^2}{2}=a*b$$. The left side is in terms of operations
allowed, therefore a product consistent with those rules must be in terms of the anti-commutator
$$A*B = \frac{\{A, B\}}{2}$$.

The issue is that the operation is not associative: $$\{\{A, B\}, C\} - \{A, \{B, C\}\} = A [ B, C ] - [B, A] C$$.
However, for position and momentum we have $$[Q, P] = \imath \hbar I$$ and therefore $$Q [Q, P] - [Q, P] Q = 0$$.
By recursively applying the product, it would seem we are able to construct all polynomials of $$Q$$ and $$P$$
and therefore (through Taylor expansion) generic functions. Are there any problems?

*Physical significance.* This would seem like a basic problem that should have a
settled question in the literature, yet we were not able to find an in depth
treatment. If the operation is well-defined, it would also be interesting to understand what symmetry it would generate
and what the conjugate variable would be. If not, it would be interesting to understand exactly the root of the problem.
