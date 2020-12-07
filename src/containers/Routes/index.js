import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import * as pages from '~/pages';

const Routes = () => {
  const history = useHistory();
  const resetSimulation = useStoreActions((state) => state.simulation.reset);

  useEffect(() => {
    history.listen(() => {
      resetSimulation();
    });
  }, [history, resetSimulation]);

  return (
    <>
      <Route path="/" exact component={pages.Home} />
      <Route path="/game" exact component={pages.Game} />
      <Route path="/sandbox" exact component={pages.Sandbox} />
      <Route path="/info" exact component={pages.Info} />
      <Route path="/impressum" exact component={pages.Imprint} />
    </>
  );
};

export default Routes;
