import React from 'react';
import { BrowserRouter, Prompt, Route } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

import Header from '~/components/Header';
import ContentWrapper from '~/components/ContentWrapper';
import Backdrop from '~/components/Backdrop';
import Routes from '~/containers/Routes';
import Footer from '~/components/Footer';

import config from '~/config';

const App = () => {
  const gameRunning = useStoreState((state) => state.simulation.isRunning);
  const resultVisible = useStoreState((state) => state.simulation.showResult);

  const showPrompt = gameRunning || resultVisible;

  return (
    <BrowserRouter basename={config.basename}>
      <Prompt
        when={showPrompt}
        message="Sind Sie sicher, dass Sie das Spiel verlassen wollen?"
      />
      <Header />
      <Route path="/game" exact component={Backdrop} />
      <ContentWrapper>
        <Routes />
      </ContentWrapper>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
