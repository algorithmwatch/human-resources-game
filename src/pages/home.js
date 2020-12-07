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
          Ein Erklärspiel zu Machine Learning ("Künstliche Intelligenz") im
          Personalmangment (HR, Human Resources)
        </Subline>
        <IntroBox>
          <IntroContent>
            <Text>
              <p>
                Mit dem HR Puzzle wollen wir zwei Dinge verdeutlichen: Zum einen das Grundprinzip der Funktionsweise von Maschinellem Lernen und Neuronen Netzen. Zum anderen wie ein Teil von Human Resources Software heutzutage funktioniert. Das "HR Puzzle" ist Teil des Dossiers von AlgorithmWatch zur "Automatisierung im Personalmangment und Mitbestimmung."
              </p>

              <p>
                In dem Spiel müssen Sie ein Neuronalem Netz nachjustieren und ihm in drei Runden helfen
                unseren 100 Mitarbeiter*innen zu erkennen: Wer sollte befördert werden? Wer hat vor zu kündigen?
                Wen kann man entlassen?
              </p>

              <p>
                Erfahren Sie mehr zum Hintergrund über den Menüpunkt „Info“. Unter "Experimentieren" können Sie das Neuronale Netz ohne Zeitdruck bearbeiten. Oder beginnen Sie mit "Puzzle starten" und lösen Sie in wenigen Minuten drei Aufgaben.
              </p>
            </Text>
            <Link to="/game">
              <Button>Puzzle starten</Button>
            </Link>
          </IntroContent>
        </IntroBox>
      </Intro>
    </>
  );
};

export default App;
