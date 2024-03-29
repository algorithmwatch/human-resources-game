import React from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Box from '~/components/Box';
import Button from '~/components/Button';
import Timer from '~/components/Timer';

const Controls = styled(Box)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1100;
  background: #fff;
  padding: 0;
  display: flex;
`;

const FullWidthButton = styled(Button)`
  width: 200px;
`;

const FullWidthButtonGlowing = styled(Button)`
  @keyframes glowing {
    0% {
      filter: brightness(90%);
      box-shadow: 0 0 10px #ee9e35;
    }
    100% {
      filter: brightness(110%);
      box-shadow: 0 0 20px #ee9e35;
    }
  }
  animation: glowing 800ms infinite;
  animation-direction: alternate;
  width: 200px;
`;

const GameControls = () => {
  const isRunning = useStoreState((state) => state.simulation.isRunning);
  const finishSimulation = useStoreActions(
    (actions) => actions.simulation.finishSimulation
  );
  const showStartButton = useStoreState(
    (state) => state.simulation.showStartButton
  );
  const showIntroduction = useStoreState(
    (state) => state.simulation.showIntroduction
  );
  const showResultButton = useStoreState(
    (state) => state.simulation.showResultButton
  );
  const setResultVisible = useStoreActions(
    (actions) => actions.simulation.setResultVisible
  );
  const startSimulation = useStoreActions(
    (actions) => actions.simulation.startSimulation
  );
  const roundConfig = useStoreState((state) => state.simulation.roundConfig);

  if (showIntroduction) {
    return null;
  }

  return (
    <Controls>
      <Timer
        isRunning={isRunning}
        time={roundConfig.time || 20}
        onFinish={() => finishSimulation()}
      />
      {showStartButton && (
        <FullWidthButtonGlowing onClick={() => startSimulation()}>
          Starten
        </FullWidthButtonGlowing>
      )}
      {showResultButton && (
        <FullWidthButton onClick={() => setResultVisible(true)}>
          Zur Auswertung
        </FullWidthButton>
      )}
    </Controls>
  );
};

export default GameControls;
