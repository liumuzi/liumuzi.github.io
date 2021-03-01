---
layout: post
title: <small>Paper Note - </small> Hand Knob Area of Premotor Cortex Represents the Whole Body in a Compositional Way
categories: [research, interest, paper-notes, neuroscience]
---
My take-away notes of paper *Hand Knob Area of Premotor Cortex Represents the Whole Body in a Compositional Way*. 


## INTRO


### Traditional view 

- <u>Macroscopic somatotopy</u> (different body parts, different cortical area) 
- FMRI, ECoG recordings in human precentral gyrus support the <u>motor homunculus</u>

### Revisitation of motor somatotopy 

- Hand knob area recordings, strong neural tuning to all tested movements <u>(intermixed whole-body tuning)</u>
- How each body part is neurally coded in relation to the others 
	- <u>Two-part structure</u> where movements are coded in partial independence of the limb to be moved. 
		- May enable <u>transfer of motor skills</u> between different limbs 
	- Discrete intracortical brain-computer interface (BCI) that decodes movements across <u>all four limbs from a single brain area</u>.


## EXPERIMENTS

### Participants
- **T5**: C4 spinal cord injury, paralyzed from neck down; instructed delay task 
- **T7**: amyotrophic lateral sclerosis (ALS), limited movements; paired movement task with a block design 

### Results
- <u>Strong neural tuning to all tested movements</u>, including those of the face, head and leg.  
	- Single node firing rate figure of T5 shows <u>the recorded neuron fires for all the tasks</u>. 
	- Population-level neural modulation also observed, tuning to arm movements is the strongest 
- Each movement is <u>neurally distinguishable</u> from other movements 
	- Decoding accuracy: T5 96.8%, T7 86% 
	- Unique and separable data
- Searched for somatotopy across the microelectrode arrays, no clear patterns 
- Ipsilateral arm and leg movements (T5 only) 
	- Hypothesize: a <u>laterality-related neural dimension</u> exists 
	- Demixed PCA 
		- dPCA decomposes neural data into a set of dimensions that each explain variance related to one marginalization of the data
		- Marginalization: time, laterality, movement 
		- Large laterality dimension coding for body side; activity in the movement dimensions is similar for any given movement => compositional coding hypothesis 
	- Consistently positive correlation observed between matching ipsilateral/contralateral movements for both arms and legs 
	- Also, homologous movements are more correlated 
- Directional movements 
	- Also correlated across all four limbs 
	- Intrinsically correlated: mirrored joint movements, instead of spatial direction 
- Motor preparation 
	- Hypothesis: should be <u>prepared independently</u>, given partial information 
	- No firing in laterality dimension when only movement is specified, … when only laterality is specified => A specified, A prepared 
	- We confirmed that the neural activity is consistent with partial preparation as opposed to a mixture of full preparation and no preparation 
- <u>Simultaneous movement</u>
	- Hypothesis: the code should change during dual movement 
	- Instructed delay cued movement task 
		- <u>Separable neural tuning</u> to each of the four simultaneous movement conditions => neurons are used in the tasks
		- For most pairings, the neural representation of the ‘‘primary’’ effector stays relatively constant, whereas the representation of the <u>‘‘secondary’’ effector is attenuated</u>. => the recorded neurons are less used for the secondary effector
		- These suppression and decorrelation effects might facilitate independent dual-effector control by keeping the somatotopically dominant activity free from interference. 
- Whole-Body Discrete Decoding BCI 
	- Record from a small number of locations 
	- Multiple effectors -> accuracy increased 


## DISCUSSION 

- There was strong neural tuning to face, head, arm, and leg movements intermixed in the hand knob area of precentral gyrus. 
- <u>Questions</u>:  
	- Whether the intermixed tuning we showed here also holds in the primary cortex (in the central sulcus)? BA4 in humans likely contains more somatotopically segregated (and less compositional) movement representations. 
	- How whole-body tuning might generalize to people without tetraplegia? Cortical remapping? Instead, we found, in participant T5, that the arms and legs were more strongly represented than the face and head, suggesting that remapping may be limited in the precentral gyrus. 
	- Some of the whole-body tuning we observed was caused by small, inadvertent movements of the contralateral arm? Unlikely, rich, high-dimensional structure in the data & BCI decoding performance increased when decoding additional effectors 
- Compositionality provides a new conceptual framework for thinking about how the motor cortical system constructs movement. 
	- Motor skills transfer 
- The precentral gyrus might be an intermediate node that helps transform a compositional representation of movement inherited from upstream areas into a more muscle-like representation required for motor control. 
- Rank ordering of effectors that determines which effector’s representation remains intact during simultaneous movement. 
- Future work: 
	- The representation of head and face movements 
	- The observed activity may be an epiphenomenon of ‘‘overflow’’ activity from connected networks that control other body parts. -> whether the compositional code is causally involved with movement construction as opposed to epiphenomenal. 
- May explain "motor overflow": An incomplete transformation between a compositional code andmuscle activity could cause the effector-independent movement command to leak to unintended effectors 

## MY COMMENTS & QUESTIONS

- The paper proposed a break-through discovery, and an inspiring new framework of how the neurons are coded for movements. I like the study very much and the conclusion is intrinsically convincing to me. The compositionality reminds me of the engineering technique *feature embeddings*. The process are more like a reversed version of feature embedding. One is to convert meanings to vectors, and another one is to decode the exact meanings from vectors. 

- T7's tasks are not intensionally designed for this specific study, and T7's results showed in figure are less convincing than T5. The paper is mostly based on the participant T5, and T5 is paralyzed from neck down. *the arms and legs were more strongly represented than the face and head*? Will this indicate the difference between paralyzed limbs and healthy body parts? The paralyzation may affect the results? Is there a difference between *plan or imagine to move* v.s. *actually move*?