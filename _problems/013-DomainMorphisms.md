---
title: Find correct morphisms for experimental domains
category: Mathematical foundations
tags: [General theory, Category theory, Mathematical logic, Order theory]
---
Find the correct definition of morphism over the current definitions of experimental and theoretical domain.

*Mathematical problem.* Currently, the only maps we have defined over domains
are the experimental relationships (see chapter 2 of the [book](https://assumptionsofphysics.org/book).
The idea is to find a more general definition for morphism (map preserving structures). These should,
for example, recover the domain product as the categorical product. We suspect that
the categorical product and coproduct will coincide.

One direct constrain is that they need to preserve the logical structure, therefore
they will, for example, preserve narrowness. But the issue here is that the domain and
codomain are not disconnected structures: they are embedded in a single overall structure.
The domain product, for example, uses that overall structure when closing over conjunction
and disjunction. Therefore the morphism should not only preserve the structures of
the individual spaces but also preserve consistency with the overall structure.

The current hunch is that the map from one domain to the other maps to the narrowest broader statement.
That is, if $$\mathcal{D}_X$$ and $$\mathcal{D}_Y$$ are two domains, a morphism $$m$$ is a
map $$m : \mathcal{D}_X \to \mathcal{D}_Y$$ such that $$s_X \preccurlyeq m(s_X) \preccurlyeq s_Y$$ for
all $$s_Y \in \mathcal{D}_Y$$ for which $$s_X \preccurlyeq s_Y $$. It may be that this is
the only requirement needed, and the preservation of the structure across the map will be a
corollary.

We can also think to perform such morphism on the whole context. In that case, the morphism
should be idempotent. It would basically "project" the whole context to the domain. One
thing to keep in mind, therefore, is whether this type of operation will in the end be
related to the projections in linear spaces.

*Physical significance.* The idea here is to understand what it means conceptually
to map from one domain to the other. We have found that constructing a product domain
means putting together two different sets of experimentally distinguishable aspects (i.e.
horizontal and vertical position of a body, density of water and temperature of a mercury column
in thermodynamic equilibrium with it). Here we are asking what it means to map
from one domain to another.

The domain product combines the information we can experimentally obtain with different domains
into a single domain. This will work differently depending on the degree of dependence
of the domains. In fact, the type of product domain can be used to characterize the
different cases. If $$X$$ and $$Y$$ are independent, for example,
all combinations are possible, so the whole $$XY$$ plane is possible.
Conversely, if $$Y$$ depends on $$X$$, given a specific value of $$x$$ there will
be only one possible value $$y=f(x)$$.

Here we are most likely trying to characterize how much information can be learned about
one domain from the other. For example, if the horizontal and vertical position of a particle
are independent, then a statement about the horizontal position will tell us nothing
about the vertical position. Mathematically, any statement on the horizontal position should
map to the certainty on the vertical position (every case is possible). Conversely,
if there is a correlation, then we should expect to map to the statement that provides the
maximal amount of information given the constraint. That should map mathematically to the narrowest
broader statement.
