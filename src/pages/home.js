import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from '~/components/Box';
import Button from '~/components/Button';
import Text from '~/components/Text';

const Intro = styled.div`
  text-align: center;
  max-width: 916px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 64px;
  color: #535353;
  font-weight: 800;
  text-transform: uppercase;
`;

const Subline = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #535353;
  line-height: 1.7;
`;

const IntroBox = styled(Box)`
  margin: 40px 0;
  display: flex;
`;

const IntroContent = styled.div``;

const App = () => {
  return (
    <>
      <Intro>
        <Headline>HR PUZZLE</Headline>
        <Subline>
          A simulation on machine learning in human resources (HR) management
        </Subline>
        <IntroBox>
          <IntroContent>
            <Text>
              <p>
              With the HR Puzzle we want to clarify two things: Firstly, how machine learning and neural networks work; secondly, how many human resources software solutions work today. The HR Puzzle is part of AlgorithmWatch's dossier on "<a href="https://algorithmwatch.org/en/project/auto-hr/" target="blank">Automated Human Resources Management and Labor Rights</a>”.
              </p>

              <p>
              In the game you have to adjust various parameters in a neural network and optimize them for our 100 employees: Who should be promoted? Who intends to resign? Who can be dismissed?
              </p>

              <p>
              Learn more about the processes via the menu item "Info". Under "Experiment", you can edit the neural network without time pressure and model different scenarios. Or begin with "Start puzzle" and solve three tasks in a few minutes.
              </p>
            </Text>
            <Link to="/game">
              <Button>Start puzzle</Button>
            </Link>
          </IntroContent>
        </IntroBox>
      </Intro>
    </>
  );
};

export default App;
