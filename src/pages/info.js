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
        <h1>Info</h1>

        <p>
        The HR Puzzle is, of course, a simplification. But while the company data is fictitious, it is not chosen arbitrarily: The demographic composition of the workforce was designed using data from the German Employment Agency for medium-sized manufacturing companies. The functionality of this fictitious software application for human resources management (HR) is based on offerings that already exist on the market. They run, for example, under names such as "People Analytics".</p>

        <p>Some of these offerings attempt to make predictions about the future from historical data by means of special statistical procedures known as Machine Learning (ML) - often referred to as "Artificial Intelligence" (AI). Predictions of this kind try to determine insights via ML that classical methods could not extract.</p>

        <p>The problem is that these procedures can reinforce or at least reproduce existing inequalities: This is because they are based on historical data and, thus, "learn" or adopt the discrimination patterns that may be contained therein.</p>

        <p>"Neural Networks" are a sub-area of Machine Learning: they are usually much more complicated in structure than shown here in the HR Puzzle. But in principle, every neural network consists of input and output nodes, edges in between, and one or more hidden layers: While known data is received at the input layer, its evaluation is determined by setting so-called "weights" at the edges between the nodes.</p>

        <p>These weights are adjusted by algorithms contained in the nodes, which, for example, only "let through" values above a certain threshold. The correct adjustment of the weights is determined by means of countless passes of the data through the Neural Network, in which minimal changes are automatically made to one or more weights in each round. In the approach schematized by the HR Puzzle (so-called "supervised learning"), training data is sent through the network until certain targets are met.</p>

        <p>You can read more about automation in HR management in the "Automated Human Resources Management and Labor Rights" dossier produced by AlgorithmWatch, the organization behind the HR Puzzle. The <a href="https://algorithmwatch.org/en/auto-hr/" target="_blankd">dossier</a> includes a guide for works councils on the use of people analytics. It also explains in detail how Machine Learning works.</p>

        <p>The implementation of the HR Puzzle was funded by the <a href="https://www.boeckler.de/en/" target="_blank">Hans Böckler Foundation</a>.
        </p>
        <h2>Contributors:</h2>
        <p>Producer: Lorenz Matzat (AlgorithmWatch)</p>
        <p>Design: <a href="https://chrispie.com/" target="_blank">Christopher Pietsch</a></p>
        <p>Code: Christopher Möller (<a href="https://webkid.io/" target="_blank">Webkid</a>)</p>
        <p>Assisting at AlgorithmWatch:  Luis Windpassinger, Avalon Wolfe, Johannes Filter</p>

      </div>
    </Text>
  </InfoBox>
);

export default Info;
