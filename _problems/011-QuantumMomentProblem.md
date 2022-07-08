---
title: Determine whether quantum predictions allows a joint distribution by solving the moment problem
category: Probability theory
tags: [Quantum mechanics, Statistics, Measure theory]
---
Determine whether the expectation of the polynomials of position and momentum
give a sequence of moments that can solve the multivariate moment problem.

*Mathematical problem.* In probability theory (and statistics) the moments
of a distribution over a stochastic variable $$X$$ are the expectation values $$m_i = E[X^i]$$
of all the powers of $$X$$. The [moment problem](https://en.wikipedia.org/wiki/Hamburger_moment_problem)
is determining whether given all the moments of the distribution one can reconstruct
the probability distribution. That is, given a sequence $$\{m_i\}_{i=0}^{\infty}$$, determine
whether a positive Borel measure $$\mu$$ exists such that:
$$ m_i = \int_{-\infty}^{+\infty} x^i d\mu $$.
Note that not al sequences $$\{m_i\}$$ allow for a solution.

We are asking whether the corresponding multivariate problem is solvable when
starting from $$m_{ij} = E[X^iP^j] = \langle \psi | (X^iP^j + P^jX^i)/2 | \psi \rangle$$.
We want to know whether we can find a suitable measure, such as the one
determined by a joint cumulative distribution function $$F_{X,P} = P(X \leq x, P \leq p)$$
such that $$ m_{ij} = \int x^ip^j dF = \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} x^ip^j \frac{\partial^2 F}{\partial x \partial p} dx dp $$.

*Physical significance.* The conjecture is that the answer is in the negative:
the quantum momentum problem cannot be solved. This would give a clear answer
that hidden variable theories are ruled out. Note that we do not need to show
that the problem never has a solution. It suffices to show that it does not
have a solution in one physically relevant case. For example, if one could
show that the problem is not solvable for a Gaussian wave packet, it would
be already an interesting result.
