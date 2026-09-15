---
title: Unitary evolution is conservation of entropy
summary: Conservation of information entropy gives a physical characterization of quantum time evolution
category: Quantum mechanics
tags: [Schroedinger equation, Entropy, Reverse Physics]
draft: false
---

In quantum mechanics, time evolution is typically introduced through the Schroedinger equation. Mathematically, this gives unitary evolution: a rotation in a complex Hilbert space. But what does that mean? Can we find an equivalent, more physical, condition? In Reverse Physics, we show that assuming conservation of entropy is equivalent to assuming unitary evolution. Let's see how.

First, let's assume time evolution follows the Schroedinger equation. The entropy of a quantum ensemble is given by the von Neumann entropy $$S(\rho) = -\operatorname{tr}(\rho \log \rho)$$, where $$\rho$$ is the density operator. Note that it depends, and only depends, on the eigenvalues of $$\rho$$ and their multiplicities (i.e. the probability distribution over a set of orthogonal states). Under unitary evolution, the density operator changes as $$\rho \mapsto U \rho U^\dagger$$. This changes its eigenvectors but leaves its eigenvalues unchanged. Since the entropy depends only on the eigenvalues, the entropy is conserved. This works for every ensemble, whatever its initial preparation.

Now, can we go in reverse? Can conservation of entropy lead us back to unitary evolution? Since we need to characterize entropy, the time evolution map must be defined in terms of ensembles. The map $$\Phi_t : \mathcal{D} \to \mathcal{D}$$ will take a density operator and evolve it for a time $$t$$. For simplicity, let's assume the map depends only on the elapsed time. To be physically meaningful, this evolution must have two properties. It must be the identity if $$t$$ equals zero. It must preserve statistical mixtures: the evolution of a mixture is the same as the mixture of the evolution. On top of these basic requirements, we impose conservation of entropy. That is, the entropy remains unchanged during the evolution. You can find all the mathematical details in this [technical brief](https://assumptionsofphysics.org/autogen/briefs/009-UnitaryEntropy.pdf).

Since all pure states, and only pure states, have zero entropy, entropy conservation requires that pure states are mapped to other pure states. Moreover, as we saw in a [previous essay](https://assumptionsofphysics.org/essays/2026-06-15-Born-rule-entropy), the entropy of an equal mixture of two pure states uniquely determines their Born probability, and vice versa. Therefore, conservation of entropy implies the conservation of the Born rule, and therefore the norm of the inner product.

For example, an equal mixture of spin up and spin down has one bit of entropy: the two preparations are mutually exclusive. An equal mixture of spin up and spin right has less than one bit: those preparations are not perfectly distinguishable. If the two preparations coincide, their mixture is still pure and has zero entropy. The entropy, then, describes a relationship between the possible preparations, not just a property of each one separately.

Suppose we evolve both preparations. Since the evolution preserves mixtures, their equal mixture evolves into the equal mixture of their final states. Since it preserves entropy, the initial and final mixtures have the same entropy. Therefore, the Born probability between the two states must remain the same. This holds for every pair of pure states. Conservation of entropy for all ensembles has become preservation of the relationships between all pure states.

A one-to-one map of quantum pure states that preserves these probabilities is represented by a unitary or anti-unitary map. This is Wigner's theorem. Continuous evolution starting from the identity selects the unitary case, which recovers the Schroedinger equation. In other words, we have recovered the mathematical form of quantum evolution from conditions on preparations, mixtures and information entropy.

This is the type of connection we look for in Reverse Physics: unitary evolution and conservation of information entropy give us two ways to describe the same dynamics. One is expressed through the geometry of a complex vector space; the other through the information associated with possible preparations. The mathematical rotation acquires a physical meaning: the evolution changes the states while preserving their distinguishability.
