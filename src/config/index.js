import Round1Network from './round1.json';
import Round2Network from './round2.json';
import Round3Network from './round3.json';
import SandboxNetwork from './sandbox.json';

const config = {
  basename: process.env.NODE_ENV === 'production' ? '/en/hrpuzzle' : '',

  mobileRedirect: 'https://algorithmwatch.org/en/auto-hr/hrpuzzle-mobile',

  meta: {
    description: 'HR Puzzle',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'noindex,nofollow',
  },
  routes: [
    { label: "Start", href: "/" },
    { label: "Game", href: "/game" },
    { label: "Experiment", href: "/sandbox" },
    { label: "Info", href: "/info" },
    { label: 'German', href: 'https://algorithmwatch.org/de/hrpuzzle' },
  ],
  rounds: [
    {
      title: "Round 1",
      short: "Challenge 1: Who should get promoted?",
      introduction:
        '<p>Who should get promoted? Help to optimize the neural network of the HR management tool!</p><p>The five circles filled with dark yellow represent employees to be promoted. You have to move them to the right side of the scale - only green circles should be in the target field.</p><p><img src="https://algorithmwatch.org/en/hrpuzzle/public/goal.png" width="500px"></p> Use the sliders accordingly to adjust the "weights" at the "edges" of the neural network - you can only move some of the weights.</p><p>Pay attention to the labels of the input nodes on the left.</p><p>Before starting the round you have time to look at the puzzle. Once you click "Start", you have 30 seconds to complete it.</p> ',
      result_top:
        "<p><b>Evaluation round 1: Who should be promoted?</b></p><p>In the graphics, the green circles mark the employees who you successfully moved to the target field according to the specifications. The red circles indicate those who were pushed in the wrong direction by you - these employees were not supposed to appear in the target field. There may also be dark yellow circles - they should have been in the target field, but did not reach it. Move your mouse over the circles to see the profiles of each person.</p><p>If you look at the promoted employees for whom you were supposed to optimize the neural network, you will see that they are all men.</p>",
      result_bottom:
        "<p>The system has now learned what is also true in broad sections of society: Women are often discriminated against when it comes to promotions in the workplace.</p><p>This can happen for  different reasons. For example, due to the higher burden of work and housekeeping, women often work less overtime than men, possibly resulting in the tendency for supervisors to promote men who work more overtime over their female counterparts. However, historical data may also simply reflect open discrimination.</p><p>If a neural network learns from such historical data, as in this case, it incorporates the discriminating structures.</p>",
      time: 30,
      network: Round1Network,
    },
    {
      title: "Round 2",
      short: "Challenge 2: Who threatens to quit?",
      introduction:
        "Who threatens to quit? The HR Puzzle has not been able to identify the five candidates yet. Please help us!",
      result_top:
        "<p><b>Evaluation round 2: Who threatens to resign?</b></p><p>This is an important question in HR management. It is about preventing the brain drain of so-called top executives. Signs that signal possible dissatisfaction include too much overtime or failure to receive a pay raise or promotion. In this case, you optimized the neural network according to the familiar pattern that it is mainly younger people who might quit.",
      result_bottom:
        "In such a case, the neural network can learn quite well from the historical data on resignations and its factors. It remains to be seen whether Machine Learning is superior to classical statistical analysis. However, it’s important to note that correlation is not causality. If surrounding factors are not taken into account at all (Are there flexible working hours? How easily can workers commute to the office?), no Machine Learning system can integrate them into their algorithm.",
      time: 30,
      network: Round2Network,
    },
    {
      title: "Round 3",
      short: "Challenge 3: Who should the company part with?",
      introduction:
        "Who should the company part with? Help configure the neural network so that it selects the five candidates.",
      result_top:
        "<p><b>Evaluation round 3: Who should be dismissed?</b></p>Identifying employees who should be fired is probably one of the most unpleasant tasks in HR management. In this example, the historical data of the company show that mostly young people were dismissed.</p>",
      result_bottom:
        '<p>Age is not a direct factor in the calculation of the HR Puzzle, but other factors can serve as "proxy variables". For example, the length of employment at the company can give an indication of age. Dismissing young people can make sense due to their shorter notice periods. At the same time, this is the group of people who define the future of the company, presenting contradictions that even a machine learning system cannot resolve.</p><p> Read more about this game under "Info" or in the extensive dossier "<a href="https://algorithmwatch.org/en/project/auto-hr/">Automated Human Resources Management and Labor Rights</a>”. Experiment with the HR Puzzle or play the game from the beginning.</p>',
      time: 30,
      network: Round3Network,
    },
  ],
  sandbox: SandboxNetwork,
};

export default config;
