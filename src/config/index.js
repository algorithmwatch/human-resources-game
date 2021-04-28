import Round1Network from './round1.json';
import Round2Network from './round2.json';
import Round3Network from './round3.json';
import SandboxNetwork from './sandbox.json';

const config = {
  basename: process.env.NODE_ENV === 'production' ? '/hrpuzzle' : '',

  mobileRedirect: 'https://algorithmwatch.org/hr-puzzle-mobile',

  meta: {
    description: 'HR Puzzle',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'noindex,nofollow',
  },
  routes: [
    { label: 'Start', href: '/' },
    { label: 'Spiel', href: '/game' },
    { label: 'Experimentieren', href: '/sandbox' },
    { label: 'Info', href: '/info' },
    //  { label: 'English', href: 'https://algorithmwatch.org/hrpuzzle-en' },>
  ],
  rounds: [
    {
      title: 'Runde 1',
      short: 'Aufgabe 1: Wer sollte befördert werden?',
      introduction:
        '<p>Helfen Sie mit, das Neuronale Netz des Personalmanagement-Tools zu optimieren. Die fünf dunkelgelb markierten Kreise stellen Mitarbeiter·innen dar, <b>die befördert werden sollten</b>.</p><p>Sie müssen von Ihnen auf der Skala in das rechte Zielfeld bewegt werden - <b>es sollen sich alleine diese Kreise im Zielfeld befinden</b>. Nutzen Sie die Schieberegler entsprechend, um die "Gewichte" an den "Kanten" des Neuronalen Netzes zu justieren.</p> <p>Achten Sie auf die Bezeichnung der Eingangsknoten links.</p><p>Vor Start der Runde haben Sie noch Zeit, sich das Puzzle anzusehen. Sobald Sie “Starten” klicken, haben Sie 30 Sekunden Zeit.</p> ',
      result_top:
        '<p><b>Auswertung Runde 1: Wer soll befördert werden?</b></p><p>In den Grafiken markieren die grünen Kreise die Mitarbeiter·innen, die den Vorgaben entsprechend im Ziel gelandet sind. Rot gefärbt sind diejenigen, die von Ihnen falsch dorthin bewegt wurden - diese Mitarbeiter·innen sollten nicht im Zielbereich auftauchen. Gegebenenfalls gibt es noch dunkel gelbe Kreise - die hätten eigentlich ins Ziel gehört. Bewegen Sie die Maus über die Kreise, um die Profile der jeweiligen Person zu sehen. Wenn Sie sich die beförderten Mitarbeiter anschauen, für die Sie das Neuronale Netz optimieren sollten, stellen Sie fest, dass es sich nur um Männer handelt.</p>',
      result_bottom:
        '<p>Das System hat nun gelernt, was auch in breiten Teilen Gesellschaft gilt: Bei Beförderungen gehen Frauen oft leer aus. Das kann unterschiedliche Gründe haben: zum Beispiel können Frauen aufgrund der Doppelbelastung durch Beruf und häusliche Arbeit oft weniger Überstunden machen, als Männer. In historischen Daten kann sich aber auch schlicht eine offene Diskriminierung wiederspiegeln. Lernt ein neuronales Netz von solchen historischen Daten, wie in diesem Fall geschehen, so nimmt es die diskriminierenden Strukturen mit auf.</p>',
      time: 30,
      network: Round1Network,
    },
    {
      title: 'Runde 2',
      short: 'Aufgabe 2: Wer droht zu kündigen?',
      introduction:
        'Wer droht zu kündigen? Das HR Puzzle hat die fünf Kandidat·innen noch nicht identifizeren können. Helfen Sie mit!',
      result_top:
        '<p><b>Auswertung Runde 2: Wer droht zu kündigen?</b>Das ist im Personalmanagement eine wichtige Frage: Es geht darum, das Abwandern von sogenannten Spitzenkräften zu verhindern. Es wird nach Anzeichen gesucht, die eine mögliche Unzufriedenheit signalisieren. Etwa zu viele Überstunden oder Ausbleiben einer Gehaltserhöhung oder Beförderung. In diesem Fall optimieren Sie das System für das bekannte Muster, dass es vor allem jüngere Menschen sind, die kündigen könnten.',
      result_bottom:
        'In so einem Fall kann das Neuronale Netz recht gut aus den historischen Daten über Kündigungen lernen, was die Faktoren gewesen sein können. Ob das Maschinelle Lernen klassischen statistischen Auswertungen dabei überlegen ist, bleibt dahingestellt. Auch hier gilt allerdings: Korrelation ist nicht Kausalität. Werden Faktoren erst gar nicht berücksichtigt (Gibt es flexible Arbeitszeiten? Wie ist der Verkehrsanbindung?) - sie nicht Teil des Datensatzes sind - so kann sie auch kein Machine Learning System erlernen.',
      time: 20,
      network: Round2Network,
    },
    {
      title: 'Runde 3',
      short: 'Aufgabe 3: Wer sollte entlassen werden?',
      introduction:
        'Von wem sollte sich das Unternehmen trennen? Helfen Sie mit, das Neuronale Netz so zu konfigurieren, dass es die fünf Kanditat·innen trifft, die entlassen werden sollten.',
      result_top:
        '<p><b>Auswertung Runde 3: Wer sollte entlassen werden?</b></p>Mitarbeiter·innen zu identifizieren, denen gekündigt werden sollte ist wohl mit die unangenehmste Arbeit, die im Personalmanagement ansteht. In diesem Fall zeigen die historischen Daten der Firma in unserem Puzzle, dass meist jungen Menschen gekündigt wurde.</p>',
      result_bottom:
        '<p>Zwar ist das Alter kein direkter Faktor in der Berechnung des HR Puzzle. Doch können andere Faktoren als "Proxy Variablen", also Stellvertreter, dienen: So kann beispielsweise die Dauer der Betriebszugehörigkeit einen Hinweis auf das Alter geben. Jungen Leuten zu kündigen kann aufgrund deren kürzeren Kündigungsfristen Sinn ergeben. Gleichzeitig ist das die Personengruppe, die die Zukunft des Unternehmens ausmachen. Widersprüche, die auch eine Machine Learning System nicht auflösen kann.</p><p>Lesen Sie mehr über dieses Spiel unter „Info” oder im umfangreichen Dossier „<a href="https://algorithmwatch.org/project/auto-hr/">Automatiserung im Personalmanagement</a>”. Experimentieren Sie mit dem HR Puzzle oder spielen Sie das Spiel von vorne.</p>',
      time: 20,
      network: Round3Network,
    },
  ],
  sandbox: SandboxNetwork,
};

export default config;
