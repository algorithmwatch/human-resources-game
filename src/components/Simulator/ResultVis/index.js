import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import useDimensions from 'react-use-dimensions';

import BubbleVis from './BubbleVis';

import { translate } from '../Utils';

const DivWrapper = styled.div`
  position: relative;
  box-shadow: ${(p) => p.theme.boxShadow};
  background: #fff;
  margin: 40px 0;
  padding: 15px;
`;

const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};

const ResultVis = ({ isSandbox = false }) => {
  const data = useStoreState((state) => state.simulation.outputData);
  const [containerRef, { width = 100 }] = useDimensions();
  const height = 200;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  return (
    <DivWrapper>
      <ChartWrapper ref={containerRef}>
        <BubbleVis
          transform={translate(0, 0)}
          data={data}
          width={innerWidth / 3}
          height={innerHeight}
          type="age"
          isSandbox={isSandbox}
        />
        <BubbleVis
          transform={translate(0, 0)}
          data={data}
          width={innerWidth / 3}
          height={innerHeight}
          type="gender"
          isSandbox={isSandbox}
        />
        <BubbleVis
          transform={translate(0, 0)}
          data={data}
          width={innerWidth / 3}
          height={innerHeight}
          type="education"
          isSandbox={isSandbox}
        />
      </ChartWrapper>
      <div style={{ textAlign: 'center', color: 'grey' }}>
        <small>
          Move the mouse pointer over the dots to learn more about the people.
        </small>
      </div>
    </DivWrapper>
  );
};

export default ResultVis;
