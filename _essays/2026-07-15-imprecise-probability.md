---
title: Uncertainty of knowledge is different from knowledge of uncertainty
summary: A fundamental problem with Bayesianism that is solved by imprecise probability
category: Foundations of probability
tags: [Bayesianism, Imprecise probability, Functional analysis]
draft: false
---

There was always something about Bayesianism that didn't quite feel right. And I am not talking about typically discussed problems (e.g. priors, continuous/infinite case, ...). It didn't quite feel the right way to model uncertainty. As our research led to non-additive measures, I have been looking into imprecise probabilities, which led to a workshop this past week in which Gert de Cooman made it clear to me. There are things that Bayesianism can't describe.

In Bayesianism, you always represent your knowledge, or your lack thereof, with a probability distribution. If you have two possible events, and you think they are equally likely, you will assign 50% probability to each. If you think one is more likely, you'll assign better odds. You then have a way to update your knowledge, your probability distribution, based on new evidence using Bayes' rule of statistical inference. While most people focus on the problematic aspects of statistical inference, my skepticism is more fundamental: is a single probability distribution a good enough model for uncertainty? Or are there cases that can't be expressed in that model?

In imprecise probability, you represent your knowledge as a collection of probability distributions, not a single one. If you have two possible events, and you think they are exactly equally likely, you can still assign exactly 50% probability to each. But you can also allow for some indetermination, and assign between 45% and 55% to each. Effectively, all the probability distributions in between are acceptable to you. The use of a single precise probability, then, can be understood as the limit case of the imprecise probability.

Gert gave me the following insight. Suppose you have two cases: in the first case, you know exactly what the events are, they come from a perfectly fair coin toss, you know exactly what the odds are; in the second case, you have no prior knowledge, you do not know how to predict the outcome, you don't even know what the two events are! How do you model them?

In Bayesianism, you would model them the same: with a uniform distribution. In imprecise probability, you have a single uniform distribution for the first case and the set of all possible probability distributions in the second case. That is, Bayesianism cannot distinguish between uncertainty of knowledge and knowledge of uncertainty. If you are interested in the details, Gert co-wrote [a paper](https://arxiv.org/pdf/0801.1966) about the subject in which they go through the details.

If you follow the Assumptions of Physics project, you already know that, for us, points don't matter, sets do. Experimentally verifiable statements are the true subject of experimental science, and they are open sets of points that represent infinitesimally precise cases that are, typically, idealizations. This means that, in our context, uncertainty for a parameter, like the mass of the electron, is represented by an open set of values. Similarly, uncertainty on a statistical distribution will be an open set of ensembles, of probabilities. The core theory works the same in all cases, and we have already a literature to connect to for probability, which is great!

The other upshot is that there is a promising way to extend imprecise probability to the infinite/continuous case: the set of probabilities must be open sets. As we are already trying to figure out what is the correct type of topological vector space we need to model ensembles in physics, and reuse results from functional analysis, this work should merge well with imprecise probability. This type of interdisciplinary convergence is always promising.
