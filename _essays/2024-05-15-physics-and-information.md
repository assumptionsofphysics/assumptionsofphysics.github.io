---
title: The line between physics and information theory
summary: Information theory is about signals and carried information; physics is about systems, their state and their evolution
category: Modeling
tags: [Information theory, Physics, Frame invariance]
---

For a few decades there has been a trend in fundamental physics to understand physical theories simply as information theories. Classical and quantum mechanics, in this view, can be understood as different theories of information, maybe even subcases of a more general information theoretic construct. The two disciplines are definitely overlapping, but, in the end, each field has specific concerns. Therefore, it is important to understand exactly where the difference lies, so that one can use the appropriate tools.

A decent argument that physics and information theory are essentially two sides of the same coin can be, and indeed has been, made. On one side, any type of information device must be implemented physically over some physical process. In this sense, information is physical, and therefore cannot be completely decoupled from physics. It is physics that will tell us, for example, the signal-to-noise ratio of a channel, and therefore its capacity. On the other side, the state of a system is simply information about a system. A physical process maps the initial state to the corresponding final state, and therefore can be understood as a channel that carries information about the system. If the process is deterministic and reversible, then the information about the system is conserved and vice-versa. The last observation, for example, is used in our project to recover Hamiltonian mechanics from information theoretic considerations.

These arguments are, in a large sense, correct. The issue is that equivalence requires more. Saying that information is physical only says that a particular bit of information has to be encoded onto a physical system, but there is a choice in the encoding. We can imagine a simple channel where every second a photon is sent or not sent. We could assign the missing photon to a 0 and the present photon to a 1. But we could make the opposite choice. That is, the same bit of information could be transfered with the opposite physical configuration. We could change the photon with another particle, or with a ping pong ball. It would be the same bit of information. That is, while information must be physically realized, information theory does not care about the exact physical process. Any will do. Any result that information theory can give us, then, is independent of the physical process, and therefore, ultimately, independent of the physics.

The other issue is that bits of information are really bits of data. They provide information only if one knows what was encoded into those particular bits. If I gave you a file without telling you the file format, you would not know how to open it. That is why, starting from the early 2000s, many operating systems started to hide file extensions, so that a user would not accidentally replace a ".txt" with a ".png" and make the file unreadable. Therefore, not only is information theory oblivious to how bits are encoded into the physics, but it is also oblivious to what type of information the bits are carrying.

If information theory does not care what information is being encoded physically and how, information theory cannot tell us much about the physics. Note that this is not a problem: it is a feature. This means that all the tools we create for information transfer and processing can be used without regard to what the bits mean or how they are physically realized.

Now for the converse: if information theory cannot tell us everything about physics, can physics tell us everything about information theory? This is also a negative answer because physical systems must possess properties that information systems do not necessarily have. The basic element of a communication system is a signal, which is a variable that changes over time. A communication system is essentially linking the value of one variable to the value of another variable: the voltage on one side of the circuit with the electromagnetic field coming from the antenna. The state of a system is more than a variable, or a set of variables: it represents all possible variables that could be linked to the system. Moreover, the goal of physics is to find laws of evolution, which relate states of the same system. In information theory, then, it is common to study maps across different spaces which is not common in physics.

Moreover, we need states to be, in some sense, independent of the specific quantities (i.e. signals) we use to measure and describe them. The entropy associated to states and distributions over them, for example, must be frame invariant or there would be no objectivity in the description. There is no such requirement in information theory. On continuous variables, this is problematic because what is a uniform distribution in one variable becomes non-uniform in another. The conjugate pairs in classical and quantum mechanics (i.e. position and momentum) are exactly there to address this problem. The structure of state spaces, then, is there to satisfy a physical requirement that is not an issue in information theory.

To sum up, physics cares about an objective (i.e. frame invariant) notion of systems and states, together with their evolution. Information theory cares about signals between different variables, regardless of their physical implementation. The two are linked because, in the end, we use physics to study the relationships between two particular variables, and we use information theory to characterize how ensembles of a physical system evolve in time. But not all physics is information and not all information is about physics.