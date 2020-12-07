import React, { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import Simulation from '../Simulation';

const SandboxWrapper = ({ width }) => {
  const initSandbox = useStoreActions(
    actions => actions.simulation.initSandbox
  );

  useEffect(() => {
    initSandbox();
  }, [initSandbox]);

  return width ? <Simulation sandbox width={width} /> : null;
};

export default SandboxWrapper;
