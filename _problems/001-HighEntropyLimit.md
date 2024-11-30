---
title: Classical mechanics as high entropy limit of quantum mechanics
category: Quantum mechanics
tags: [Quantum information, Classical limit, Entropy]
notes: yes
---
**Problem solved**: See [pre-print](https://arxiv.org/abs/2411.00972)

Prove or disprove the following conjecture: **any sufficiently high entropy state can be approximated by a
classical statistical mixture**.

*Mathematical problem.* This is the old characterization of the problem.

Denote $$|g(q,p)\rangle$$ a set of Gaussian wave packets
centered in phase space at position $$q$$ and momentum $$p$$.
We want to show that a density matrix $$\rho$$ with sufficiently high
von Neumann entropy $$ tr(-\rho \log \rho) $$, allows the approximation:

$$\rho \approx \int \hat{\rho}(q,p) |g(q,p)\rangle \langle g(q,p)| dq dp$$

for a suitable function $$ \hat{\rho}(q,p) $$ of position and momentum. The
approximation should also approximate the expectations:

$$tr(\rho F(Q,P)) \approx \int \hat{\rho}(q,p) f(q,p) dq dp.$$

Note that there are a number of issues that remain vague, and part of the problem
is exactly to find the correct specification. For example,
the quality of the approximation should increase with the entropy of the mixed
state; how this link works (at least in the limit) is part of the problem.

*Physical significance.* The idea is to show that the classical limit arises
without a physical mechanism, but just as an approximation. A single particle
in a pure state will have low entropy, and therefore the approximation will
fail. A gas of multiple particles at room temperature, however, will have a
high entropy, and therefore it can be approximated with a classical mixed state.
While we will commit an error in making the approximation, the idea is that
such error will be below the uncertainty associated with the high entropy.

The conjecture is motivated by observing that pure quantum states have zero entropy
while pure classical states (i.e. microstates) have minus infinite entropy
(they are a point over a continuuum, therefore a set of measure zero).
The lower bound for entropy is also established by the third law of thermodynamics.
Classical statistical states and quantum mixed states, then, must "diverge"
as the entropy decreases since they cannot "go to zero" in the same way.
