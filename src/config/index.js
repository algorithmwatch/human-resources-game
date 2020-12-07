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
        '<p>Helfen Sie mit, das Neuronale Netz des Personalmanagment-Tools zu optimieren. Identifizieren Sie dafür unter den 100 Mitarbeiter*innen diejenigen, <u>die befördert werden sollten</u>.</p><p>Dafür müssen die fünf <u>dunkelgelb</u> markierten Kreise auf der Skala unten in das rechte Zielfeld bewegt werden - <u>es sollen sich alleine diese Kreise im Zielfeld befinden</u>. Nutzen Sie dafür entsprechend die Schieberegler, um die "Gewichte" an den "Kanten" des Neuronalen Netzes zu justieren - Sie können nur einige Gewichte bewegen.</p> <p>Achten Sie auf die Bezeichnung der Eingangsknoten links. Sie haben noch Zeit das Puzzle betrachten, bevor Sie die 30 Sekunden dauernde Runde starten.</p> ',
      result_top:
        '<p><b>Auswertung Runde 1: Wer soll befördert werden?</b></p><p>In den Grafiken markieren die grünen Kreise, wer den Vorgaben entsprechend im Ziel gelandet ist. Rot gefärbt sind diejenigen, die von Ihnen falsch dorthin geschoben wurden. Ggf. gibt es nich dunkelbgelbe Kreise - die hätten eigentlich ins Ziel gehört . Bewegen Sie den Mauszeiger über die Kreise, um die Profile der jeweiligen Person zu betrachten.</p><p>In deDie „Glasdecke“ ist ein bekanntes Phänomen: Frauen haben bei Beförderungen oft ein Nachsehen - sie stoßen an die „glas ceiling“. So auch in diesem mittelständischen Unternehmen, indem eh schon deutlich mehr Männer als Frauen arbeiten.</p>',
      result_bottom:
        '<p>Aus den historischen Daten hat das neuronale Netz „gelernt“, was vorher üblich war: Bei Beförderungen gehen Frauen leer aus. Das kann unterschiedliche Gründe haben: Von der Auswahl bzw. Auslassung von Kriterien, die in die Bewertung einfließen. Wenn der Großteil der Mitarbeiterinnen an Arbeitsplätzen eingesetzt wird, an denen die Teilnahme am Intranet der Firma nur begrenzt möglich ist, kann die Aktivität dort nur mässig sein. In historischen Daten kann sich aber auch schlicht eine offene Diskriminierung wiederspiegel, die in der Personalabteilung Tradition hatte. </p>',
      time: 30,
      network: Round1Network,
    },
    {
      title: 'Runde 2',
      short: 'Aufgabe 2: Wer droht zu kündigen?',
      introduction:
        'Wer droht zu kündigen? Das HR Puzzle hat die fünf Kandidat*innen noch identifizeren können. Helfen Sie mit!',
      result_top:
        '<p><b>Auswertung Runde 2: Wer droht zu kündigen?</b>Wer droht zu kündigen, ist im Personalmanagment eine wichtige Frage: Es geht dabei um „Talent Retention“, also wie gelingt es, das Abwandern von so genannten Spitzenkräften zu verhindern. Insofern wird nach Anzeichen gesucht, die eine mögliche Unzufriedenheit signalisieren. Etwa zu viele Überstunden oder Ausbleiben einer Gehaltserhöhung oder Beförderung. In diesem Fall ist das auffallende Muster, dass es vor allem jüngere Menschen sind, die kündigen könnten. ',
      result_bottom:
        'In so einem Fall kann das Neuronale Netz recht gut aus den historischen Daten über Kündigungen erkennen, was die Faktoren gewesen sein können. Ob das Machine Learning klassischen statistischen Auswertungen dabei überlegen ist, bleibt dahingestellt. Auch hier gilt allerdings: Korrelation ist nicht Kausalität. Werden Faktoren erst gar nicht berücksichtigt (Gibt es flexible Arbeitszeiten? Wie ist der Verkehrsanbindung?), kann ein mitbestimmender Faktor eines Kündigunggrunds ein - und in den Daten des Unternehmens gar nicht abgebildet sein. ',
      time: 20,
      network: Round2Network,
    },
    {
      title: 'Runde 3',
      short: 'Aufgabe 3: Wer sollte entlassen werden?',
      introduction:
        'Von wem sollte sich das Unternehmen trennen? Helfen Sie mit, das Neuronale Netz so zu konfigurieren, dass es die fünf  Kanditat*innen trifft, die entlassen werden sollten.',
      result_top:
        '<p><b>Auswertung Runde 3: Wer sollte entlassen werden?</b></p>Mitarbeiter*innen zu identifizieren, denen gekündigt werden sollte - etwa weil durch Belegschaftsabbau Gelder eingespart werden sollen - ist wohl mit die unangenehmste Arbeit, die im Personalmangment ansteht. Je nach Branche und Unternehmen dürfte es einfacher Fallen, Kriterien zu definieren. Wenn die Produktivität klar zu messen ist, beispielsweise. In diesem Fall zeigen die historischen Daten der Firma, dass meist jungen Menschen gekündigt wurde.</p>',
      result_bottom:
        '<p>Zwar ist das Alter kein direkter Faktor in der Berechnug des HR Puzzle. Doch können andere Faktoren als "Proxy Variablen" dienen: Stellvertreten kann beispielsweise die Dauer der Betriebszugehörigkeit einen Hinweis auf das Alter geben. Junge Leute zu identifizieren kann also in dem Fall deren kurzen Kündigungsfristen aus einer Perspektive Sinn ergeben. Gleichzeitig ist das die Personengruppe, die die Zukunft des Unternehmens bedeuten kann. Wiedersprüche, die auch eine „Künstliche Intelligenz“ nicht auflösen wird.</p> <p>Lesen Sie mehr über dieses Spiel unter „Info „(oben im Menü) oder im umfangreichen Dossier  „Automatiserung im Personalmanagement. Experimentieren Sie mit HR Puzzle in der Sandbox oder spielen Sie das Spiel von vorne.</p>',
      time: 20,
      network: Round3Network,
    },
  ],
  sandbox: SandboxNetwork,
};

export default config;
