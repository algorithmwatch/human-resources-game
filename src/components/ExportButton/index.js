import React from 'react';
import { useStoreState } from 'easy-peasy';

import Button from '~/components/Button';

const ExportButton = () => {
  const network = useStoreState(state => state.simulation.networkData);

  const printState = () => {
    console.log(JSON.stringify(network, null, 2));
  };

  return <Button onClick={printState}>Export</Button>;
};

export default ExportButton;
