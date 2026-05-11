---
title: Is quantum mechanics inherently linear?
summary: We can break linearity without breaking the physics
category: Quantum mechanics
tags: [Projective spaces]
draft: true
---

In the quantum foundation literature, linearity is presented as an intrinsic feature of the theory that distinguishes it from classical mechanics. This is a misleading claim for a few reasons, which would take several short essays (or one very long one) to explore. For example, as we saw [before](https://assumptionsofphysics.org/essays/2026-04-15-why-superpositions), the linearity is connected to the linearity of ensembles, which are linear in any physical theory. Moreover, quantum mechanics can be reformulated in terms of [probability distributions and an action](https://en.wikipedia.org/wiki/Madelung_equations), which gives non-linear equations. Here we will narrow the question to the standard vector space representation: does it have to be linear? No, it doesn't.

Recall that the state of a quantum system is not represented by a single wave-function or by a single vector: any vector rescaled by a non-zero constant represents the same state. Mathematically, the quantum state is represented by a ray, an equivalence class of vectors that all point in the same direction. A ray is effectively a complex plane that passes through the origin.

The set of all rays of a vector space is called its [projective space](https://en.wikipedia.org/wiki/Complex_projective_space). Maps that are linear in the vector space become [collinear](https://en.wikipedia.org/wiki/Collinearity) in the projective space: they map points that are "in a line" to points that are "in a line". The "lines", in our case, correspond to the two-dimensional subspaces. On a Bloch sphere, the projective space for a two-state system, the only line is the whole sphere.

Now, the question is: can we go back? Since the physics is in the projective space, can we go from the projective space back to the Hilbert space in a unique way? Yes and no. The [fundamental theorem of projective geometry](https://en.wikipedia.org/wiki/Homography#Fundamental_theorem_of_projective_geometry) tells you that any collinear map can be represented by a linear map of an underlying vector space, but it doesn't have to: you can represent a collinear map (e.g. unitary evolution) with a non-linear map in the vector space.

This is not enough, however. Unitary evolution does not only map rays to rays, states to states, but preserves the Born rule. Since it is the Born rule that gives us all physical predictions, we have to look for a non-linear map that maps rays to rays (i.e. states to states) but also preserves the Born rule (i.e. preserves the outcomes of all measurements given any preparation). Such a map exists. For example, on a qubit we can define $$m(c_{+} \vert z^+ \rangle + c_{-} \vert z^- \rangle) \mapsto e^{\imath \theta \frac{\vert c_{+}\vert^2}{\vert c_{+}\vert^2+\vert c_{-}\vert^2}} ( c_{+} \vert z^+ \rangle + c_{-}  \vert z^- \rangle)$$ where $$\theta \in (0,2\pi)$$ is an arbitrary constant. This map introduces a phase shift that is proportional to the probability of measuring $$z^+$$. This phase shift changes the inner product but leaves the Born rule unchanged. You can find all details in this [technical brief](https://assumptionsofphysics.org/autogen/briefs/008-NonLinearQuantum.pdf).

This means that, technically, the linearity of the vector space in quantum mechanics is a convenience: we could use representations that are non-linear, but why? The fundamental theorem of projective geometry, in fact, guarantees that every collinear map **can** be represented by a linear map, so we may as well use them. Let's just not confuse convenient mathematical representation with physical reality.
