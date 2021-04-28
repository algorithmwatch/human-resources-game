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
        <br />
        <h2>Wie funktioniert Maschinelles Lernen?</h2>
        <br />

        <p>
          Menschen beantworten viele Fragen, ohne ihre Entscheidung im Detail
          begründen zu können. Zum Beispiel: Woran erkennt man Bekannte auf
          Fotos wieder? Das Kriterium für diese Entscheidungen muss sich
          irgendwie aus dem Inhalt der Fotos zusammensetzen. Aber woraus das
          Kriterium genau besteht, können Menschen nicht auflisten.
        </p>

        <p>
          Machine Learning kann ein solches kompliziertes Kriterium finden, wenn
          man ihm genug Beispielbilder zum „Lernen“ gibt und ungefähr sagt,
          worauf es darin achten soll. Maschinelles Lernen besteht also immer
          aus zwei Phasen: In der ersten Phase wird ein Kriterium anhand von
          vielen Beispieldaten (sog. „Trainingsdaten“) gelernt. In der zweiten
          Phase wird das Kriterium eingesetzt, um neue Daten zu beurteilen.
          Dieser Prozess wird so lange wiederholt, bis das Modell bzw. der
          Algorithmus die Daten in der zweiten Phase ausreichend gut beurteilt.
          Die unabdingbare Grundlage für alle diese Verfahren ist, dass die
          Trainingsdaten und die Anwendungsdaten, zwar nicht dieselben, aber in
          etwa gleich sind. Sind in den Trainingsdaten nur Fotos enthalten, die
          eine Person von vorne zeigen, dann wird der Computer diese Person
          nicht auf Fotos erkennen, auf denen sie von hinten zu sehen ist.
        </p>

        <p>
          Machine-Learning-Verfahren sind nicht direkt vergleichbar mit
          menschlichem Lernen. Häufig hört man, dass Machine-Learning-Verfahren
          nur von Daten getrieben werden. Das ist nicht richtig. Jedes
          Machine-Learning-Verfahren startet mit einer (sehr großen) Menge
          möglicher Kriterien, den Hypothesen. Man gibt also nicht das Kriterium
          selbst vor, sondern die Art des Kriteriums. Ohne eine solche Vorgabe
          funktioniert es nicht. Mit Hilfe dieser Vorgabe gibt man Vorwissen –
          oder besser: eine Vormeinung – in das Verfahren ein.
        </p>

        <p>
          Der sogenannte Trainings-Algorithmus sucht aus diesen Kriterien eines
          aus, das besonders gut zu den Trainingsdaten passt. Der Begriff
          „Lernen“ erweckt den Eindruck, als führe ein
          Machine-Learning-Verfahren früher oder später immer zur Wahrheit. Sehr
          viele Versuche, ein Problem mit Machine-Learning-Verfahren zu lösen,
          scheitern jedoch, worüber häufig öffentlich nicht gesprochen wird. Ob
          ein Machine-Learning-Verfahren funktioniert, lässt sich fast nur in
          der praktischen Erprobung beurteilen.
        </p>

        <p>
          Die Qualität eines Machine-Learning-Verfahrens wird mit einem weiteren
          Satz von Daten gemessen, den sogenannten „Testdaten”. Ein
          Machine-Learning-Verfahren kann, bezogen auf seine Trainingsdaten,
          immer richtige Aussagen treffen, aber versagen, wenn es auf die
          Testdaten angewendet wird. Dabei ist es ist wichtig, dass die
          Testdaten nicht schon im Training benutzt wurden. Ebenso wichtig ist,
          dass die Testdaten zu den Daten passen, auf die das gelernte Kriterium
          angewendet werden soll. Wenn man mithilfe eines
          Machine-Learning-Verfahrens gut den Musikgeschmack von Führungskräften
          trifft, kann das gleiche Verfahren bei Auszubildenden versagen.
        </p>

        <p>
          Mittlerweile gibt es frei verfügbare Software, mit der man
          Machine-Learning-Verfahren recht einfach selbst erstellen kann, ohne
          viel von deren Funktionsweise zu verstehen. Man setzt zum Beispiel ein
          Neuronales Netz auf, trainiert es mit einem Trainingsdatensatz und
          probiert aus, ob es angewendet auf Testdaten gute Ergebnisse erzielt.
          Ein Machine-Learning-Verfahren programmieren zu können, erfordert
          heute kein tiefes Verständnis davon, welche Schwierigkeiten seine
          Anwendung haben kann.
        </p>

        <p>
          Das HR Puzzle ist natürlich eine Vereinfachung. Doch sind die
          Unternehmensdaten zwar fiktiv, aber nicht willkürlich gewählt. Die
          Demographie der Belegschaft wurde anhand von Daten der Arbeitsagentur
          für mittelständische Betriebe des produzierenden Gewerbes gestaltet.
          Die Funktionsweise der Personalmanagement-Anwendung orientiert sich an
          bereits auf dem Markt existierenden Angeboten.
        </p>

        <p>
          Machine Learning und Neuronale Netze, eine Anwendung aus dem Machine
          Learning, sind meist wesentlich komplizierter. Doch im Prinzip besteht
          jedes Neuronale Netze aus Eingangs- und Ausgangsknoten (sog. “nodes”),
          dazwischen liegende Kanten (sog. “edges”) und eine oder mehrere
          verstecke Ebenen (sog. “hidden layer”): Während an der Eingangsebene
          bekannte Daten einlaufen, wird deren Bewertung durch das Einstellen
          von sogenannten „Gewichten“ an den Kanten zwischen den Knoten
          ermittelt. Jeder Knoten enthält einen Algorithmus, der beispielsweise
          nur Werte ab einem bestimmten Schwellwert “durchlässt” (siehe zur
          Funktionsweise eine{' '}
          <a href="https://de.wikipedia.org/wiki/Perzeptron" target="blank">
            Erklärung
          </a>{' '}
          des Perzeptron Algorithmus). Die richtige Einstellung der Gewichte
          wird durch zahllose Durchläufe der Daten durch das Neuronale Netz
          ermittelt, bei denen in jeder Runde minimale Änderungen an einem oder
          mehreren Gewichten vorgenommen werden. Im HR Puzzle hatten Sie die
          Möglichkeit die Gewichtung verschiedener Eingangswerte zu
          manipulieren. Wie Sie in dem Puzzle sehen konnten, kann das zu
          unvorhergesehenen Konsequenzen, insbesondere der Diskriminierung
          bestimmter Personengruppen, führen.
        </p>

        <p>
          Wenn auch nur schematisch, zeigt das HR Puzzle das Funktionsprinzip
          mancher Personalmanagement-Softwaresysteme: Mittels besonderer
          statistischer Verfahren - gerne als „Künstliche Intelligenz“
          bezeichnet - werden aus historischen Daten Vorhersagen über die
          Zukunft getroffen. Vorhersagen dieser Art versuchen per Machine
          Learning Erkenntnisse zu ermitteln, die klassische Verfahren nicht
          herauslösen konnten.
        </p>

        <p>
          Das Problem dabei ist, dass diese Machine Learning-Verfahren
          bestehende Ungleichheiten verstärken oder zumindest reproduzieren
          können: Weil sie auf historischen Daten basieren, „lernen“ bzw.
          Adoptieren sie die darin enthaltenen Diskriminierungsmuster.
        </p>

        <p>
          Mehr zu Automatisierung im Personalmangment erfahren Sie im Dossier
          von AlgorithmWatch, der Organisation hinter dem HR Puzzle “
          <a href="https://algorithmwatch.org/project/auto-hr/" target="blank">
            Automatisiertes Personalmanagement und Mitbestimmung
          </a>
          ”. Teil des Dossiers ist ein{' '}
          <a
            href="https://algorithmwatch.org/project/auto-hr/leitfaden/"
            target="blank"
          >
            Leitfaden für Betriebsräte
          </a>{' '}
          zum Einsatz von sogenannter “People Analytics”.
        </p>
        <p>
          Dieses Projekt wurde durch Mittel der Hans-Böckler-Stiftung
          finanziert.
        </p>
      </div>
    </Text>
  </InfoBox>
);

export default Info;
