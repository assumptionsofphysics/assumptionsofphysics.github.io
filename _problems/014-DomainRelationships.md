---
title: Characterize the space of domain relationships
category: General topology
tags: [General theory, Point-set topology, Order theory]
---
Characterize the set of all possible topological relationships between experimental domains.

*Mathematical problem.* The problem we are trying to solve makes more
sense in terms of our general framework, but let us try to formulate it in
plain topological terms.

We have three topological spaces $$X$$, $$Y$$ and $$Z$$, all of them second-countable
and $$T_0$$. $$Z$$ is a subset of the product space, meaning that we have a
continuous transformation $$f(z) \to \{x, y\}$$. It is also the case that all open
sets of $$X$$ (and or $$Y$$) are traceable from $$Z$$ in the sense that for every
open set $$U_X$$ we can find an open set $$U_Z$$ such that $$U_X$$ contains and only contains
all $$x \in X $$ such that $$ \{x,y\} \in f(U_Z) $$ for some $$ y $$.

Given $$X$$ and $$Y$$, we want to characterize the space
of all possible $$Z$$ with the previous relationship.

*Physical significance.* The idea here is that each topological space represents
a set of possible experimentally distinguishable cases, and $$Z$$ represents the joint
cases of $$X$$ and $$Y$$. If $$X$$ and $$Y$$ are independent, for example,
all combinations are possible, so the whole $$XY$$ plane is possible.
Conversely, if $$Y$$ depends on $$X$$, given a specific value of $$x$$ there will
be only one possible value $$y=f(x)$$ where $$f$$ must be continuous. The idea is that there should be a whole
set of in between cases and we want to characterize the space of these cases.
