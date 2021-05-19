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
        Das HR Puzzle ist natürlich eine Vereinfachung. Doch sind die Unternehmensdaten zwar fiktiv, aber nicht willkürlich gewählt: Die demografische Zusammensetzung der Belegschaft wurde anhand von Daten der Arbeitsagentur für mittelständische Betriebe des produzierenden Gewerbes gestaltet. Die Funktionsweise dieser fiktiven Softwareanwendung für das Personalmanagement (Human Resources, HR) orientiert sich an Produkten, die bereits angeboten werden. Sie laufen beispielsweise unter Bezeichnungen wie „People Analytics".
        </p>
        <p>
        Das Problem dabei ist, dass diese Verfahren bestehende Ungleichheiten verstärken oder zumindest reproduzieren können. Denn da sie auf historischen Daten basieren , „lernen“ bzw. adoptieren so die darin enthaltenen Diskriminierungsmuster.
        </p>
        <p>
        Neuronale Netze sind ein Teilbereich des Machine Learnings: Sie sind meist wesentlich komplizierter aufgebaut als hier im HR Puzzle dargestellt. Doch im Prinzip besteht jedes Neuronale Netz aus Eingangs- und Ausgangsknoten (sog. “nodes”), dazwischenliegende Kanten (sog. “edges”) und eine oder mehrere verstecke Ebenen (sog. “hidden layers”). Während an der Eingangsebene bekannte Daten einlaufen, wird deren Bewertung durch das Einstellen von sogenannten „Gewichten“ an den Kanten zwischen den Knoten ermittelt.
        </p>
        <p>
        Jeder Knoten enthält einen Algorithmus, der beispielsweise nur Werte ab einem bestimmten Schwellwert “durchlässt”. Die richtige Einstellung der Gewichte wird durch zahllose Durchläufe der Daten durch das Neuronale Netz ermittelt, bei denen in jeder Runde minimale Änderungen an einem oder mehreren Gewichten automatisch vorgenommen werden. Das geschieht mit Trainingsdaten, die so lange durch das Netz geschickt werden, bis bestimmte Zielvorgaben erfüllt werden.
        </p>
        <p>
        Mehr zur Automatisierung im Personalmanagement erfahren Sie im <a href="https://algorithmwatch.org/de/auto-hr/" target="blank">Dossier</a> “Automatisiertes Personalmanagement und Mitbestimmung” von AlgorithmWatch, der Organisation hinter dem HR Puzzle. Bestandteil des Dossiers ist auch ein <a
            href="https://algorithmwatch.org/de/auto-hr/leitfaden/"
            target="blank"
          >Leitfaden</a> für Betriebsräte zum Einsatz von sogenannter “People Analytics”. Dort wird detaillierter auf die Funktionsweise von Machine Learning-Verfahren eingegangen.
        </p>
  <h3>Förderung:</h3>
        <p>
          Dieses Projekt wurde durch Mittel der <a href="https://www.boeckler.de/de/index.htm" target="blank">Hans-Böckler-Stiftung</a>
          finanziert.
        </p>

        <h3>Mitarbeit:</h3>

            <p>Produzent: Lorenz Matzat (AlgorithmWatch)  </p>

            <p>Design: <a href="https://chrispie.com/" target="blank">Christopher Pietsch</a>  </p>

            <p>Programmierung: Christopher Möller (<a href="https://webkid.io/" target="blank">Webkid</a>)  </p>

            <p>Mitarbeit bei AlgorithmWatch:  </p>
            <p>Luis Windpassinger, Avalon Wolfe , Johannes Filter</p>
      </div>
    </Text>
  </InfoBox>
);

export default Info;
