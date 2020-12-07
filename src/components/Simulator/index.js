import React from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';
import { useStoreState } from 'easy-peasy';

import ResultView from './ResultView';
import SandboxWrapper from './SandboxWrapper';
import GameWrapper from './GameWrapper';

const Container = styled.div`
  position: relative;
  min-height: 500px;
`;

const Simulator = ({ sandbox = false }) => {
  const showResult = useStoreState((state) => state.simulation.showResult);
  const [containerRef, { width }] = useDimensions();

  if (showResult) {
    return <ResultView />;
  }

  const SimulationComponent = sandbox ? SandboxWrapper : GameWrapper;

  return (
    <Container ref={containerRef}>
      <SimulationComponent width={width} containerRef={containerRef} />
    </Container>
  );
};

export default Simulator;
