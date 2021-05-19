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
          Ein Erklärspiel zu Machine Learning ("KI") im
          Personalmangment (HR)
        </Subline>
        <IntroBox>
          <IntroContent>
            <img
              src="/public/startde.png"
              width="100%"
              alt="Random"
              style={{ marginBottom: '40px' }}
            />
            <Text>
              <p>
                In dem Spiel müssen Sie ein Neuronales Netz nachjustieren und ihm in drei Runden helfen, Vorhersagen über 100 Mitarbeiter·innen zu treffen: Wer sollte befördert werden? Wer hat vor zu kündigen? Wen kann man entlassen?
              </p>
                <p>
                  Über den Menüpunkt "Info" können Sie mehr zum Hintergrund des Puzzles erfahren. Unter "Experimentieren" können Sie das Neuronale Netz ohne Zeitdruck justieren und dabei verschiedene Szenarien modellieren. Oder beginnen Sie mit "Puzzle starten" und lösen Sie in wenigen Minuten drei Aufgaben.
                </p>

            </Text>
              <Link to="/game">
                <Button>Puzzle starten</Button>
              </Link>
            <Text>


              <p>Mit dem HR Puzzle wollen wir zwei Dinge verdeutlichen: Zum einen wie Machine Learning und Neuronalen Netze funktionieren; zum anderen wie manche Angebote von Personalmanagement-Software heutzutage arbeiten. Das HR Puzzle ist Teil des Dossiers von AlgorithmWatch zu
              <a
                href="https://algorithmwatch.org/de/auto-hr/"
                target="blank"
              > Automatisiertes Personalmanagement und Mitbestimmung</a>  </p>
            </Text>

          </IntroContent>
        </IntroBox>
      </Intro>
    </>
  );
};

export default App;
