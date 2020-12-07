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
    <p><b>Info</b></p>
      <p>Klar ist das HR Puzzle eine Vereinfachung. Doch sind die Unternehmensdaten zwar fiktiv, aber nicht willkürlich gewählt. Die Demographie der Belegschaft wurde anhand von Statistik der Arbeitsagentur für mittelständische Betriebe des produzierenden Gewerbes gestaltet. Die Funktionsweise der Personalmangment-Anwendung orientiert sich an existieren Angeboten.</p>

      <p>Neuronale Netze und Machine Learning („Künstliche Intelligenz“) sind meist wesentlich komplizierter. Doch im Prinzip besteht jedes Neuronale Netze
       aus Eingangs- und Ausgangsknoten (Nodes), die durch Kanten (edges) verbunden sind und einem oder mehreren „Hidden Layern“: Während an der Eingangs-Ebene (Layer) bekannte Daten einlaufen, wird
      deren Bewertung durch das Einstellen von so genannten „Gewichten“ an den Kanten zwischen
      den Knoten in den Layern dann am Ausgangsknoten Ergebnisse ermittelt - eine Gewichtung. Jeder Knoten enthält einen Algorithmus, der beispielsweise nur Werte in einem bestimmten Schwellwert durchlässt bzw. klassifiziert ( siehe zur prinzipiellen Funktionsweise  <a href="https://de.wikipedia.org/wiki/Support_Vector_Machine" parent="_blank">"Support Vector Machine"</a>). Die
      richtige Einstellung der Gewichte wird durch zahllose Durchläufe der Daten
      ermittelt, bei denen minimale Änderungen an einem oder mehreren Gewichten
      durch das Neuronale Netz vorgenommen werden. Mehr zur Funktionsweise: siehe
      unten.
    </p>

    <p>
      Wenn auch nur schematisch, zeigt das HR Puzzle das Prinzip wie mancher
      dieser Personalmanagement-Softwaresysteme funktionieren: Mittels
      besonderer statistischer Verfahren - gerne als „Künstliche Intelligenz“
      bezeichnet - werden aus historischen Daten Vorhersagen über die Zukunft
      getroffen. „Predictions“ dieser Art versuchen per Maschinellen Lernens aus
      Neuronal Netze Erkenntnisse herauszuholen, die klassische Verfahren in der
      Form aus Großen Datenmengen (Big Data) nicht herauslösen konnten.
    </p>
    <p>
      Die Problematik dabei ist, dass diese Machine Learning-Verfahren
      bestehende Ungleichheiten verstärken oder zumindest reproduzieren können:
      Weil sie auf historischen Daten basieren, „lernen“ sie darin enthaltenen
      althergebrachte Diskriminierungsmuster.
    </p>
    <p>
      Mehr zu Automatisierung im Personalmangment erfahren Sie im entsprechenden
      Dossier von AlgorithmWatch, der Organisation hinter dem HR Puzzle: <a href="https://algorithmwatch.org/project/auto-hr/" parent="_blank">Automatisiertes Personalmanagement und Mitbestimmung</a>. Es kam mithilfe einer Förderung der Hans-Böckler-Stiftung zustande.

    </p>
    <p>
      Teil des Dossiers ist ein <a href="https://algorithmwatch.org/project/auto-hr/leitfaden/" parent="_blank">Leitfaden für Betriebsräte</a> zum Einsatz von so genannter
      People Analytics - dort findet sich dieser Abschnitt:
    </p>
    <p><b>Das Wichtigste über Maschinelles Lernen</b></p>
    <p>
      "Wir können viele Fragen beantworten, ohne ein klares Kriterium dafür
      angeben zu können. Zum Beispiel: Woran erkennt man Personen, die man gut
      kennt, auf Fotos wieder? Das Kriterium dafür muss sich irgendwie aus dem
      zusammensetzen, was man auf den Fotos sieht. Aber woraus sich das
      Kriterium genau zusammensetzt, können Menschen nicht auflisten. ML findet
      ein solches kompliziertes Kriterium, wenn man ihm genug Beispielbilder zum
      „Lernen“ gibt und ungefähr sagt, worauf es darin achten soll. Maschinelles
      Lernen besteht also immer aus zwei Phasen: In der ersten Phase wird ein
      Kriterium anhand von vielen Beispieldaten (man sagt „Trainingsdaten“)
      gelernt. In der zweiten Phase wird das Kriterium eingesetzt, um neue Daten
      zu beurteilen. Die unabdingbare Grundlage für alle diese Verfahren ist,
      dass die Trainingsdaten und die Anwendungsdaten (zwar nicht dieselben
      aber) in etwa gleich sind. Sind in den Trainingsdaten nur Fotos enthalten,
      die eine Person von vorne zeigen, dann wird das Kriterium diese Person
      nicht auf Fotos erkennen, auf denen sie von hinten zu sehen ist. Wie
      funktioniert Maschinelles Lernen? ML-Verfahren sind nicht direkt
      vergleichbar mit menschlichem Lernen. Häufig hört man, das ML-Verfahren
      nur von den Daten getrieben werden. Auch das ist nicht richtig. Jedes
      ML-Verfahren startet mit einer (sehr großen) Menge möglicher Kriterien,
      den Hypothesen. Man gibt also nicht das Kriterium selbst vor, aber die Art
      des Kriteriums. Ohne eine solche Vorgabe funktioniert es nicht. Mit Hilfe
      dieser Vorgabe steckt man Vorwissen – oder besser: eine Vormeinung – in
      das Verfahren.
    </p>
    <p>
      Der sogenannte Trainingsalgorithmus sucht aus dieser Art von Kriterien ein
      Kriterium aus, das besonders gut zu den Trainingsdaten passt. Das Wort
      „Lernen“ erweckt den Eindruck, als führe ein ML-Verfahren früher oder
      später immer zur Wahrheit. Sehr viele Versuche, ein Problem mit
      ML-Verfahren zu lösen, scheitern jedoch. Darüber wird natürlich öffentlich
      nicht gerne gesprochen. Ob ein ML-Verfahren funktioniert oder nicht, lässt
      sich fast nur in der praktischen Erprobung beurteilen. Die Qualität eines
      ML-Verfahrens wird mit einem weiteren Satz von Daten gemessen, den
      sogenannten Testdaten. Das ML-Verfahren kann ein Kriterium liefern, das
      bezogen auf seine Trainingsdaten immer richtige Aussagen trifft,
      angewendet auf die Testdaten aber versagt. Es ist wichtig, dass die
      Testdaten nicht schon im Training benutzt wurden. Ebenso wichtig ist, dass
      die Testdaten zu den Daten passen, auf die das gelernte Kriterium
      angewendet werden soll. Wenn man mithilfe eines ML-Verfahrens gut den
      Musikgeschmack von leitenden Angestellten trifft, kann das gleiche
      Verfahren bei Auszubildenden versagen. Es gibt heute frei verfügbare
      Software, mit der man ML-Verfahren recht einfach selbst erstellen kann,
      ohne viel davon zu verstehen, wie und warum diese Verfahren funktionieren.
      Man baut ein Verfahren zusammen, trainiert es mit einem Trainingsdatensatz
      und probiert aus, ob es angewendet auf Testdaten gute Ergebnisse erbringt.
      Ein ML-Verfahren programmieren zu können, erfordert heute kein tiefes
      Verständnis davon, welche Schwierigkeiten ihre Anwendung haben kann."
    </p>
  </div>
  </Text>
  </InfoBox>
);

export default Info;
