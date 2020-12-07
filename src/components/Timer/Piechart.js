import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const OpacityAnimation = keyframes`
  0% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Wrapper = styled.div`
  position: relative;
  background: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  text-align: center;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  color: #535353;
  display: flex;
  overflow: hidden;
`;

const Pie = styled.div`
  width: 50%;
  height: 100%;
  transform-origin: 100% 50%;
  position: absolute;
  background: #ddd;
  border: none;
`;

const Spinner = styled(Pie)`
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  z-index: 200;
  border-right: none;
  animation: ${RotateAnimation} 10s linear;
  animation-duration: ${(p) => p.duration}s;
  animation-play-state: ${(p) => (p.running ? 'running' : 'paused')};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

const Filler = styled(Pie)`
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
  left: 50%;
  opacity: 0;
  z-index: 100;
  border-left: none;
  animation: ${OpacityAnimation} 10s steps(1, end) infinite reverse;
  animation-duration: ${(p) => p.duration}s;
  animation-play-state: ${(p) => (p.running ? 'running' : 'paused')};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

const Mask = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  background: #fff;
  opacity: 1;
  z-index: 300;
  animation: ${OpacityAnimation} 10s steps(1, end) infinite;
  animation-duration: ${(p) => p.duration}s;
  animation-play-state: ${(p) => (p.running ? 'running' : 'paused')};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

const OuterCircle = styled.div`
  height: 101%;
  width: 101%;
  border-radius: 50%;
  border: 4px solid #ddd;
  background: rgba(255, 255, 255, 0);
  z-index: 500;
`;

const Piechart = ({ isRunning = false, duration = 20 }) => {
  return (
    <Wrapper>
      <Spinner duration={duration} running={isRunning} />
      <Filler duration={duration} running={isRunning} />
      <Mask duration={duration} running={isRunning} />
      <OuterCircle />
    </Wrapper>
  );
};

export default Piechart;
