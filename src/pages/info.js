import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from '~/components/Box';
import Button from '~/components/Button';
import Text from '~/components/Text';

const InfoBox = styled(Box)`
  margin-top: 30px 120px;
  max-width: 700px;
  display: flex;
`;

const Info = () => (
  <InfoBox>
    <Text>
      <div>
      <h1>Info</h1><br/>
      <h2>How does machine learning work?</h2><br/>

      <p>
        Humans can answer many questions without being able to justify the decision in detail. For example, how do you recognize friends in photos? The criterion for this must somehow be a representation of what you see in the photos. But what exactly the criterion is made up of, humans cannot tell. Machine learning can find such a complicated criterion if you give it enough sample pictures to "learn" from and tell it roughly what it should look for in them. Machine learning therefore always consists of two phases: In the first phase, a criterion is learned by feeding it with of a lot of example data, so-called "training data". In the second phase, the criterion is used to evaluate new data. The outlined process is repeated until the machine learning model is good enough for its intended purpose.
      </p>

      <p>
        The indispensable basis for all these procedures is that the training data and the test data are approximately the same. If the training data only contains photos showing a person from the front, the machine will not recognize this person in photos showing him or her from behind. 
      </p>

      <p>
        It is often said that machine learning is only driven by data. This is not correct. Every machine learning process starts with a (very large) set of possible criteria, the hypotheses. Thus, the developers of machine learning systems do not specify the criterion itself, but the kind of criterion. Without such a specification it does not work. With this, you give previous knowledge - or better: a preliminary opinion - into the process. The so-called training algorithm selects one of these criteria that fits the training data particularly well.
      </p>

      <p>
        The term "learning" gives the impression that sooner or later a machine learning process always leads to the truth. However, many attempts to solve problems with machine learning methods fail, which is often not discussed in public. Whether a machine learning process works or not can almost only be judged in practical tests.
      </p>

      <p>
        The quality of a machine learning process is measured with another set of data, the so-called “test data”. A machine learning method can always make correct statements with regard to its training data, but it can fail if it is applied to the test data. It is important that the test data has not already been used in training. It is equally important that the test data match the data to which the learned criterion will be applied. If a machine learning model succeeds in meeting music preferences of senior executives, the same procedure can fail with trainees.
      </p>

      <p>
        Nowadays, freely available software exists that makes it easy to create machine learning models yourself without understanding much about how they work. You create, for example, a neural network, train it with a training data set and see if it outputs accurate results when applied to test data. Today, being able to program a machine learning model does not require a deep understanding of the difficulties its application can have.
      </p>

      <p>
        The HR puzzle is of course a simplification. Although the data points might be fictitious, they were not chosen arbitrarily. The demography of the workforce was designed using data from the German employment agency for medium-sized companies in the manufacturing sector (“Arbeitsagentur für mittelständische Betriebe des produzierenden Gewerbes”). The functionality of the fictitious HR management application is based on existing offers on the market.
      </p>

      <p>
        Machine learning and neural networks, the latter being a type of machine learning algorithm, are usually much more complicated. But in principle, every neural network consists of input and output “nodes”, which are represented by so-called "edges" and one or more so-called "hidden layers". When known data arrives at the input layer and its evaluation is determined by setting so-called "weights" at the edges between the nodes. Each node contains an algorithm that, for example, only "lets through" values within a certain threshold (see an <a href="https://en.wikipedia.org/wiki/Perceptron" target="blank">explanation</a> of the Perceptron algorithm for how this works in detail). The correct setting of the weights is determined by countless cycles of the data through the neural network, where minimal changes are made to one or more weights during each run. In the HR Puzzle you had the option to manipulate the weighting of different input values. As you could see during the challenge, this can lead to unforeseen consequences, such as discrimination against certain groups of people.
      </p>

      <p>
        The HR puzzle shows the functional principle of some HR management software systems: Using special statistical procedures - often referred to as "artificial intelligence" - predictions about the future are made on the basis of historical data. Predictions of this kind use machine learning to try to extract findings that classical statistical methods miss.        
      </p>

      <p>
        The problem is that these machine learning methods can reinforce or reproduce existing inequalities. Since they are based on historical data, machine learning models "learn" or adopt the patterns of discrimination that historical data may contain.
      </p>

      <p>
        Learn more about automation in HR management in the <a href="https://algorithmwatch.org/project/auto-hr/" target="blank">dossier</a> (only available in German) of AlgorithmWatch, the organization behind the HR puzzle “Automated Human Resources Management and Labor Rights“. Part of the dossier is a <a href="https://algorithmwatch.org/project/auto-hr/leitfaden/" target="blank">guide</a> for employee organizations on the use of so-called "people analytics".
      </p>

      <p>
        This project was funded by the Hans Böckler Foundation.
      </p>

  </div>
  </Text>
  </InfoBox>
);

export default Info;
