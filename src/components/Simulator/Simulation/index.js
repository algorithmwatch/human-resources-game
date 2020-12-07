import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';

import NetworkGraph from '../NetworkGraph';
import OutputGraph from '../OutputGraph';
import ResultVis from '../ResultVis';
import StepNav from '../StepNav';

const SimulationWrapper = styled.div``;

const Simulation = ({ width, sandbox = false }) => {
  const data = useStoreState((state) => state.simulation.networkData);
  const isLoading = useStoreState((state) => state.simulation.isLoading);
  const isRunning = useStoreState((state) => state.simulation.isRunning);
  const loadCandidates = useStoreActions(
    (actions) => actions.simulation.loadCandidates
  );

  useEffect(() => {
    loadCandidates();
  }, [loadCandidates]);

  if (isLoading) {
    return null;
  }

  const isDisabled = !isRunning && !sandbox;
  const height = Math.min(500, width * 0.5);

  return (
    <SimulationWrapper>
      <StepNav sandbox={sandbox} />
      <NetworkGraph
        disabled={isDisabled}
        sandbox={sandbox}
        layers={data.layers}
        width={width}
        height={height}
      />
      {sandbox ? (
        <ResultVis
          maxWeight={data.max}
          minWeight={data.min}
          width={width}
          height={160}
        />
      ) : (
        <OutputGraph
          threshold={data.threshold}
          maxWeight={data.max}
          minWeight={data.min}
          width={width}
          height={160}
        />
      )}
    </SimulationWrapper>
  );
};

export default Simulation;
