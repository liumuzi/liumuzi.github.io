---
title: Reinforcement Learning for Convention Emergence in Lexicon Coordination Game
categories: [research, interest, multi-agent system, reinforcement learning, C/C++]
---
I worked as a research assistant to professor [Leung Ho Fung](http://www.cse.cuhk.edu.hk/~lhf/) since summer 2019. 

I conducted a research independently with professor Leung's responsible supervision and careful guidance, where I learned a lot about how to research for a interested topic, how to start a research, and how to write a paper. 

### Topic
The topic was based on the paper published by Wang et al., ["Efficient convention emergence through decoupled reinforcement social learning with teacher-student mechanism"](http://ifaamas.org/Proceedings/aamas2018/pdfs/p795.pdf). I found that a small modification of their original work could make a huge improvement on the performence of the learning mechanism. 

The particular research problem we study is the _language coordination problem_, which is an imitation of how human communities develop languages from scratch. In language coordination problem, a population of agents tries to develop a conventional lexicon through repeated agent interactions. The conventional lexicon is a set of mappings from _concepts_ set to _words_ set, and the agent interactions are simple coordination games.
<br><br>


### Works
* Proposed an effective and efficient reinforcement learning approach for convention emergence in lexicon coordination game.

* Analyzed the simulation results and found relations between local conventions in the network and the
hindering of the emergence of a global convention.

* Independently wrote a paper for the whole work, which is on submission.
<br><br>


### Paper Abstract
In this paper, we propose a refinement of multiple-R mechanism proposed byWang et al. [1], which is a reinforcement learning based mechanism to create a social convention from a significantly large convention space for multi-agent systems. Specifically, multiple-R mechanism focuses on the language coordination problem, where agents develop a lexicon convention from scratch. As a lexicon is a set of mappings of concepts and words, the convention space is exponential to the number of concepts and words. We find that multiple-R suffers from local conventions, and refine it to the independent-R mechanism, which excludes neighbors’ rewards from the value update function, and thus avoids the emergence of local conventions. We also explore how local conventions influence the dynamics of convention emergence. Extensive simulations verify that independent-R outperforms the state-of-the-art approaches, in the sense that a more widely adopted convention emerges in a shorter time.