---
title: Introduction to Physical Mathematics
summary:  When physical objects are mapped to the right mathematical objects, the physical requirements map to the mathematical definitions
category: Physical Mathematics
tags: [Foundations of Physics, Philosophy of Physics]
draft: true
---

In modern physics, the mapping between physical concepts and their mathematical representation is done... in a "suboptimal" way. We start from abstract mathematical structures with no clear physical meaning, which often have ill-defined physical meaning or mathematical definitions. In our quest to make that mapping more streamlined, we noticed an interesting pattern: **when physical objects are mapped to the right mathematical objects, the physical requirements map to the mathematical definitions.** That is, the correspondence between the objects can only be established if one makes a correspondence on the respective characterizations. This key insight makes the rigorous definition of the mathematical representation of physical concepts possible, an approach we call **Physical Mathematics**. Let's see how this works.

Let's start with an example. A probability measure $$p : \Sigma \to [0,1]$$ is a map from a set of events $$\Sigma$$ to the probability of the event happening. An event is a subset of a sample space $$\Omega$$, therefore $$\Sigma$$ is a collection of subsets of $$\Omega$$. Moreover, $$\Sigma$$ is a $$\sigma$$-algebra, which is a collection of sets closed under complement, countable union, and countable intersection. That is, if we take a sequence of elements of $$\Sigma$$, their intersection is also an element of $$\Sigma$$, and so is their union and their individual complements. The question is: what do these mathematical objects represent?

The first insight is that events are collections of possible outcomes. For example, if we have a six-sided die, the event "the outcome is an odd number" is represented by the set $$\{1,3,5\}$$. Similarly, the event "the train will arrive between 7:00 and 7:30 am" is represented by the set $$[7, 7.5]$$. That is, every event is of the form "the outcome is in $$A$$" where $$A \subseteq \Omega$$ is an element of $$\Sigma$$. The complement of $$A$$ represents the negation since "the outcome is in $$A^{\complement}$$" is the same as "the outcome is not in $$A$$". Intersections correspond to conjunctions (logical AND) and unions correspond to disjunctions (logical OR). If you have done a bit of programming, these are just boolean expressions.

But this can't be the whole story. Set theory allows for arbitrary intersection and union: why are we restricting ourselves to only countable? Mathematically, this is necessary because [it is not possible to specify a reasonable measure on all subsets of the reals](https://en.wikipedia.org/wiki/Non-measurable_set#Consistent_definitions_of_measure_and_probability). Not all sets can be "measurable" and correspond to valid events. So, which sets do correspond to valid events? And why only countable operations are allowed?

Physically, we are not simply interested in abstract events. Rather, we are interested in events that can be associated to experimental tests. Events that cannot be associated to tests are physically meaningless. If you have done a bit of programming, we effectively have a boolean function `bool test(event A)`. In general, tests, like computer programs, are not always guaranteed to terminate. For example, the test associated with the statement "the mass of the photon is exactly zero" will never terminate successfully in finite time as it would require infinite precision. But the probability of whether an event happens or not will be defined regardless of the termination of the test.[^1]

Note that, if we have a test of $$A$$, we construct a test for its complement by simply switching the result. That is: `bool testComplement(event A) { return !test(A); }`. Similarly, if we have a sequence of events, we can test the conjunction by checking that all tests pass. Something like
```
bool testConjunction(enumeration<event> events) {
  foreach (event A in events) {
    if (!test(event))
      return false;
  };
  return true;
}
```
If the enumeration is countably infinite, it may not terminate, but we still have a test. However, we can't iterate over an uncountable set: we can't write the test. Therefore, testable statements are closed under countable conjunction only. Requiring that events are associated with an experimental test, then, not only gives us the correct mapping, but it also gives us the right mathematical closure.

This insight holds in general. When one makes the correct map between physical and mathematical objects, mathematical relationships will have to consistently map physical representations to physical representations, and therefore that mathematical relationship must have a corresponding physical relationship. For a $$\sigma$$-algebra, measurable sets correspond to events associated to tests, and the set operations correspond to creating tests from other tests. Similarly, in topology, open sets correspond to verifiable statements, and the related set operations correspond to creating verifiable statements from other verifiable statements; ensembles must form a convex set since any statistical mixture of ensembles is itself an ensemble.

This insight, then, tells us that the correct way to define a physically meaningful and mathematically precise theory is to start with a clear idea of what we are physically representing (e.g. statements associated with tests) and justify our mathematical definitions (e.g. $$\sigma$$-algebras) by showing that the physical objects require those properties (e.g. we can define tests for negations, countable disjunction and conjunctions). If that is done, all subsequent theorems and proofs can be fully understood from the physical model. We have mathematics that is physically meaningful. We have physical mathematics.

[^1]: Termination of tests is captured by the topology. The probability of the interior of a set will tell us the probability that the corresponding test terminates successfully.