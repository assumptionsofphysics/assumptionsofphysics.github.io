---
title: Introduction to Reverse Physics
summary:  When the math is derived from the right physical assumptions, the physical assumptions can be derived from the math
category: Reverse Physics
tags: [Foundations of Physics, Philosophy of Physics]
draft: false
---

Understanding what premises exactly lead to what conclusions is a crucial activity into the foundations of mathematics. The goal of Reverse Physics is to bring these types of discussions in the foundations of physics, strengthening the understanding of why particular mathematical structures are used in physics and what they represent. Let's see how this works.

As Harvey Friedman, the founder of Reverse Mathematics, stated: "when the theorem is derived from the right axioms, the axioms can be derived from the theorem." If the axioms and the theorem are logically equivalent, once a base theory is assumed, one can either take the axioms to be true or the theorem to be true. In set theory, for example, the Axiom of Choice and Zorn's Lemma are equivalent over the Zermelo-Frankel axioms. The basic insight is that this works for physics as well: **when the math is derived from the right physical assumptions, the physical assumptions can be derived from the math.**

In Reverse Physics, we want to analyze the logical structure of physical theories in the same way. For example, let's take phase space of classical mechanics for a single degree of freedom as our base theory. The state of a system is fully determined by position and momentum $$(q,p)$$. Given a region $$U$$ of phase space, its area $$\mu(U) = \iint_U dq dp$$ quantifies the count of states in the region. Note how a base in theory in physics must not only give us basic mathematical definitions, but what they represent physically.

On top of this base theory, we can assume the validity of Hamilton's equation to specify the evolution. These state that the chance in position and momentum is given by $$d_t q = \partial_p H$$ and $$d_t p = - \partial_q H$$. Liouville's theorem tells us that Hamilton's equations preserve phase space area, that is, $$d_t \mu(U) = 0$$. Since phase space corresponds to the count of states, past and future states are mapped one-to-one: the evolution is deterministic and reversible. 

For a single degree of freedom, we can go in reverse: if we have an area-preserving transformation, we can find a suitable Hamiltonian. Therefore, if we assume deterministic and reversible evolution, that past and future states are mapped one to one, we recover Hamiltonian mechanics. In this case, the math (i.e. Hamilton's equations) is derived from the right assumptions (i.e. determinism and reversibility) over a suitable base theory (i.e. classical phase space for one degree of fredom). Assuming determinism and reversibility or Hamilton's equations is the same thing.

But determinism and reversibility can be described in different ways. For example, the evolution is deterministic and reversible exactly when the information about the system is preserved during the evolution. Therefore, we should expect conservation of information entropy $$d_t (- \int \rho \log \rho dq dp)=0$$ to be equivalent to Hamiltonian evolution for one degree of freedom, and indeed it is. By studying all these equivalences, we get a much more insightful understanding of classical mechanics.

What about quantum mechanics? Let's take quantum states as the base theory: the state of the system is a ray of a complex Hilbert space; the probability of observing $$\phi$$ given that $$\psi$$ was prepared is given by the Born rule. On top of this base theory, we can assume the validity of Schroedinger's equation to specify the evolution. Since the evolution is unitary, it preserves the inner product and therefore the Born rule. Which means $$p(\phi(t) \\| \psi(t)) = 1$$ if and only if $$\phi(t) = \psi(t)$$ for all $$t$$. That is, initial and final states are mapped one to one: the evolution is deterministic and reversible.

This can go in reverse as well: if the evolution is deterministic and reversible, then the final states are going to match if and only if the initial states match. This leads to unitary evolution and therefore Schroedinger's equation. Also in this case, the math (i.e. Schroedinger's equation) is derived from the right assumptions (i.e. determinism and reversibility) over a suitable base theory (i.e. quantum state space). Assuming determinism and reversibility or the Schroedinger's equation is the same thing.

Since determinism and reversibility is equivalent to conservation of information entropy, we should expect $$d_t \, \text{tr}(- \rho \log \rho)=0$$ to be equivalent to unitary evolution, and indeed it is.

Note how the assumption was the same in both classical and quantum mechanics, but its mathematical formulation changed because the base theory changed. This is the power of Reverse Physics: by looking at physical assumptions that are equivalent to the math, we can not only understand better each theory individually, but also the connection between them. We can clearly see how and why information theory plays a fundamental role in physics: it can be used to characterize determinism and reversibility and therefore the laws of evolution. Reverse Physics paves the way to create a more general foundation for physics that is physically meaningful, mathematically precise and conceptually consistent.

