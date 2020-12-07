import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

const Background = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 1);
`;

const Backdrop = () => {
  const showIntroduction = useStoreState(
    (state) => state.simulation.showIntroduction
  );

  const showStartButton = useStoreState(
    (state) => state.simulation.showStartButton
  );

  const showResultButton = useStoreState(
    (state) => state.simulation.showResultButton
  );

  const showResult = useStoreState((state) => state.simulation.showResult);

  const isVisible =
    (showIntroduction || showStartButton || showResultButton) && !showResult;

  if (!isVisible) {
    return null;
  }

  const style = {
    opacity: showIntroduction ? 0.6 : 0.35,
  };

  return <Background style={style} />;
};

export default Backdrop;
