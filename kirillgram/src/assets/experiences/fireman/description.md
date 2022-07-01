# Fireman Museum Data Analysis

At the institute we were given a very interesting task,
it’s to help the Lyon Fireman Museum answer their question using data and statistic methods.
I will explain in details what I have personally done and how, and what I have learned.

## Prelude 
Let’s start with the beginning of a mission.
Museum’s problem was “how to improve the number of individual visitors in the museum?”.
Most of the visitors were in organised guided groups. 
To resolve the question we had to organise a big survey on the street and get 500 responses.

## My mission
What I have personally done in this project and what I’m proud of is the hypothesis I tried to resolve.
After the survey we could conclude that most of the people get information about museums and events in social medias. 
I supposed that museum’s social media’s is not effective, that's why the part of individual visitors was that small.

## Answering the question
To really know if the museum's instagram, twitter are effective in attracting people, 
I had to do some interesting data-crosses. Let's start!

![](./assets/experiences/fireman/lyon_non.png)

This is the first analysis that helped me answer the questions. I wanted to know if people 
from other cities than Lyon know the museum as well as Lyon's residents. To get you in context, 
there is a big part of non-Lyon residents in our population - 28%. That means we have enough data to
apply statistic methods to compare Lyon and non-Lyon residents.


Previous analysis allowed me to do this chart:
![](./assets/experiences/fireman/museumknow-lyon.png)

This is a data-cross of qualitative variable "do you know the Fireman museum in Lyon"
with qualitative variable "do you live in Lyon". In fact, this is qualitative-qualitative variable cross,
so I could use V of Cramer method to find the dependencies and know if one variable influences another.
V of Cramer value for this data was at almost 0.16, that means there is no big dependence between these variables.
This is one of the answers for my hypothesis. If there is big difference in the knowledge of the Lyon fireman museum
whether a person is living in Lyon or not. **That allows me to suppose that the museum is well visible on the internet**


![](./assets/experiences/fireman/visited.png)

By the way, the part of people who visited the museum in people who know the museum is small - only 31%



![](./assets/experiences/fireman/museum_data.png)

Then I had to check the museum's initial data, and it says, that less than 3% of people declared going to museum 
after knowing it on social medias. 

![](./assets/experiences/fireman/conclusions.png)

All the facts and the statistical tests I've done allowed me to make a conclusion about the museum's social medias:
the museum is popular in social medias, he is known, but the content on this social medias does not attract people to see
it. 

## Conclusion
So, using collected data, statistical and mathematical methods with Python and Excel, 
I have answered a question about social media's efficiency, and I am extremely proud of my work. 
If you want to check all the researches I have done with my team for the Fireman museum, you can check our 
[rapport](https://drive.google.com/file/d/1dKPdmuHUaNJ8G0Mwak3B1eH8-nyWiZAA/view?usp=sharing)



