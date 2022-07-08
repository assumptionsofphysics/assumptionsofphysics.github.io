---
title: Can the current logic axioms be simplified?
category: Mathematical foundations
tags: [General theory, Mathematical logic, Boolean algebra, Heyting algebra, sigma-algebra]
---
See whether the axioms of logic can be reduced (and maybe put in a form more
"palatable" to logicians?).

*Mathematical problem.* The current formulation (see [the book](https://assumptionsofphysics/book))
Defines a context as a set of propositions of potentially any cardinality from which
a countably generated subset is extracted. Part of the reason is that it was hard
to find mathematicians that were able to tell us precisely what are the conditions
for closure. To be safe, we specified closure as one of the axioms.

Since, in the end, the only closure that we will need is under countable operations,
it may be possible to bootstrap the system simply with a countably generated Heyting
algebra (which represent a closed set of verifiable statements). This requires
that any Heyting algebra can be embedded into a unique countably generated
$$\sigma$$-algebra. At that point, the context is simply (in our nomenclature)
the theoretical domain that contains everything.

*Physical significance.* Currently, the idea is that we start with a logical context
which is the set of all the statements we may want to say within a specific theory.
The physically meaningful statements are subsets of a context. For example, the
context may contain statements that are not experimentally verifiable (e.g "there
exist other universes non-interacting with ours"), but when constructing experimental
domains these non-distinguishable possibilities merge together to match the
resolution provided by the statements.

The proposal here is to start only with verifiable statements. What needs to be
understood is whether the logical relationship defined on the verifiable statements
are enough to infer the logical relationship on all (theoretical) statements that can be generated
with countably many operations (i.e. statements for which a test in principle can
be constructed).

The existence of a unique closure would also guarantee that we are not accidently
ruling out some theories, and that theoretical statements can always be understood
to follow the law of excluded middle.
