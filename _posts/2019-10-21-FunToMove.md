---
title: <small>FunToMove - </small> a mobile App that enhances primary students’ physical activity level 
date: 2019-10-21
categories: [blog, interest, deep learning, Python]
---
In the summer of 2018, I participated a project called [FunToMove](https://funtomove-jc.hk/en/), which is funded by Hong Kong Jokey Club. The project aims to enhance primary students' physical activity level by recording and supervising their activity levels through sports bracelets. Their physical teachers and gardians may check and manage the necessary amount of physical sports through our mobile App. 

### My Work
I designed and tuned a Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) architecture to predict the wearing position of the sports bracelet. There are three possible positions: waist, chest, and wist. The inputs are sequences of data collected by sports bracelets, and the network was expected to predict the correct position, so that we can improve the accuracy of the estimation of activity levels.

But I was not responsible for actually implement the whole function. Instead, I was only required to train a network using few data collected by several volunteers, since the project was not so wide spread. The goal of my job was to test whether LSTM architecture was suitable for the task.
<br><br>


### Results
I divided the data into training and testing set, containing 80% and 20% of the volume respectively. The trained network achieves almost 90% testing accuracy. Considering the lack of data, it proves that LSTM worth a try for achieving the position prediction function.
<br><br>