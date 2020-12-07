import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Text from '~/components/Text';
import Piechart from './Piechart';

const TimerWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const TimeLabel = styled(Text)`
  font-weight: 700;
  color: #535353;
`;

const Timer = ({ time, onFinish = () => {}, isRunning }) => {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    let timeout = null;

    if (isRunning) {
      if (currentTime > 0) {
        timeout = setTimeout(() => {
          setCurrentTime(currentTime - 1);
        }, 1000);
      } else {
        setCurrentTime(0);
        onFinish();
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentTime, isRunning]);

  return (
    <TimerWrapper justifyContent="space-between" alignItems="center">
      <TimeLabel>{currentTime} Sek</TimeLabel>
      <Piechart duration={time} isRunning={isRunning} />
    </TimerWrapper>
  );
};

export default Timer;
