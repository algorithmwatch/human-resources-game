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
            <img
              src="public/random.png"
              width="100%"
              alt="Random"
              style={{ marginBottom: '40px' }}
            />
            <Text>
              <p>
                Mit dem HR Puzzle wollen wir zwei Dinge verdeutlichen: Zum einen
                die Funktionsweise von Machine Learning und Neuronalen Netzen;
                zum anderen, wie viele Angebote von Personalmanagement Software
                heutzutage funktionieren. Das HR Puzzle ist Teil des Dossiers
                von AlgorithmWatch zu „
                <a
                  href="https://algorithmwatch.org/project/auto-hr/"
                  target="blank"
                >
                  Automatisiertem Personalmanagement und Mitbestimmung
                </a>
                “.
              </p>

              <p>
                In dem Spiel müssen Sie ein Neuronalem Netz nachjustieren und
                ihm in drei Runden helfen unseren 100 Mitarbeiter*innen zu
                erkennen: Wer sollte befördert werden? Wer hat vor zu kündigen?
                Wen kann man entlassen?
              </p>

              <p>
                In dem Spiel müssen Sie verschiedene Parameter in einem
                Neuronalen Netz justieren und für unsere 100 Mitarbeiter*innen
                optimieren: Wer sollte befördert werden? Wer beabsichtigt zu
                kündigen? Wen kann man entlassen?
              </p>

              <p>
                Erfahren Sie mehr zum Hintergrund über den Menüpunkt{' '}
                <Link to="/info">Info</Link>. Unter{' '}
                <Link to="/sandbox">Experimentieren</Link> können Sie das
                Neuronale Netz ohne Zeitdruck justieren und dabei verschiedene
                Szenarien modellieren. Oder beginnen Sie mit{' '}
                <Link to="/game">Puzzle starten</Link> und lösen Sie in wenigen
                Minuten drei Aufgaben.
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
