---
title: Determine the relationship between quantum and classical moment problems
category: Probability theory
tags: [Quantum mechanics, Statistics, Measure theory]
---
Determine the correct equivalent formulations between classical and quantum moment problems.

*Mathematical problem.* In probability theory (and statistics) the moments
of a distribution over a stochastic variable $$X$$ are the expectation values $$m_i = E[X^i]$$
of all the powers of $$X$$. The [moment problem](https://en.wikipedia.org/wiki/Hamburger_moment_problem)
is determining whether given all the moments of the distribution one can reconstruct
the probability distribution. That is, given a sequence $$\{m_i\}_{i=0}^{\infty}$$, determine
whether a positive Borel measure $$\mu$$ exists such that:
$$ m_i = \int_{-\infty}^{+\infty} x^i d\mu $$.
Note that not all sequences $$\{m_i\}$$ allow for a solution. In general, the moment problem may have
multiple solutions (i.e. two different probability distributions can have the same moments). The
multivariate case does not seem to have a clear solution.

In quantum mechanics, there is an anologue problem, which aims to reconstruct
a mixed state from expectation value of observables. For example, one starts from $$m_ij = E[X^iP^j]$$ and tries
to find a suitable $$\rho$$ such that $$m_{ij} = Tr[(X^iP^j + P^jX^i)/2 \rho]$$.

Alternatively, one can formulate the problem in terms of quasi-probability distributions on phase space. Note that
there are multiple representations, since there is no single product of observables. Therefore, depending on what
permutations are chosen, one gets different quasi-probability distributions. It would be nice to have a summary
of these details. The Wigner function should correspond to a choice where the product is defined with all permutations.

One can now ask whether there are moment values that can solve both problems. This essentially is asking
whether there are quantum expectations that give a semi-positive Wigner functions. The general question
seem to not have an answer. For pure states, it seems that [only gaussian states](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution#Positivity_of_the_Wigner_function) have semi-positive Wigner functions. It would be interesting to double check that the moments
of a quantum gaussian state match those of a classical gaussian state.

Another interesting aspect is that pure quantum states always solve the moment problem uniquely, as
their topology is induced by the semi-norms defined by the expectations. Given that pure states have
zero entropy, a possible equivalent in classical mechanics would be to ask whether the moment problem is
uniquely fixed once a set value of entropy is given.

*Physical significance.* Given that the solutions to the moment problem for both classical
and quantum mechanics exist only for gaussian states, it should be clear that complete
hidden variable theory has to be ruled out. However, it would be interesting to understand
exactly how and why. As for the classical limit, we would like to show that, once the entropy
tends to infinity, distributions become classical. This would mean that the moment problem
would be approximately solvable in both cases.
