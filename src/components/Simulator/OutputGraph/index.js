import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import { scaleLinear } from 'd3-scale';

import Tooltip from './Tooltip';

import { translate } from '../Utils';

const TooltipId = 'OutputGraphTooltip';

const thresholdAreaStroke = 2;

const getCandidateColor = (props) => {
  if (props.isTarget && props.isOverThreshold) {
    return props.theme.colors.green;
  }

  if (!props.isTarget && props.isOverThreshold) {
    return props.theme.colors.red;
  }

  if (props.isTarget) {
    return props.theme.colors.secondary;
  }

  return props.theme.colors.secondary_light;
};

const DivWrapper = styled.div`
  position: relative;
  box-shadow: ${(p) => p.theme.boxShadow}, 30px 30px 0 0 #eeeeee,
    -30px 30px 0 0 #eeeeee, -30px -30px 0 0 #eeeeee, 30px -30px 0 0 #eeeeee;
  border-radius: 20px;
`;

const Result = styled.svg`
  background: #fff;
  display: block;
`;

const Candidate = styled.circle.attrs((props) => ({
  'data-tip': JSON.stringify(props.tooltipData),
  'data-for': TooltipId,
}))`
  fill: #e9e9e9;
  // transition: fill 0.2s;
  fill-opacity: 0.6;
  stroke: ${getCandidateColor};
  stroke-opacity: 1;
  stroke-width: 1;
  fill: ${getCandidateColor};
`;

const ThresholdArea = styled.rect`
  stroke: ${(p) => p.theme.colors.grey2};
  stroke-width: ${thresholdAreaStroke};
  fill: none;
  shape-rendering: crispEdges;
`;

const Tick = styled.line`
  stroke: ${(p) => p.theme.colors.grey1};
  stroke-width: 1;
  fill: none;
  stroke-dasharray: 5 4;
  shape-rendering: crispEdges;
`;

const margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};

const OutputGraph = ({
  width,
  height,
  maxWeight,
  minWeight = 0,
  threshold,
}) => {
  const data = useStoreState((state) => state.simulation.outputData);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain([minWeight, maxWeight])
    .range([0, innerWidth])
    .clamp(true);
  const yScale = scaleLinear()
    .domain([0, data.length - 1])
    .range([0, innerHeight]);

  const candidates = data.map((d, i) => {
    const x = xScale(d.weight);
    const y = yScale(i);
    const r = 8;
    return (
      <Candidate
        key={d.Name}
        cx={x}
        cy={y}
        r={r}
        isOverThreshold={d.isOverThreshold}
        isTarget={d.isTarget}
        tooltipData={d}
      />
    );
  });

  const thresholdAreaX = xScale(threshold) + margin.left;
  const thresholdAreaY = thresholdAreaStroke / 2;
  const thresholdAreaWidth = width - thresholdAreaX - thresholdAreaStroke / 2;
  const thresholdAreaHeight = height - thresholdAreaStroke;
  const xTicks = xScale.ticks(12);

  return (
    <DivWrapper>
      <Tooltip id={TooltipId} />
      <Result width={width} height={height}>
        {xTicks.map((tick) => (
          <g transform={translate(xScale(tick), 0)}>
            <Tick x1={0} x2={0} y1={0} y2={height} />
          </g>
        ))}
        <ThresholdArea
          x={thresholdAreaX}
          y={thresholdAreaY}
          width={thresholdAreaWidth}
          height={thresholdAreaHeight}
        />
        <g transform={translate(margin.left, margin.top)}>{candidates}</g>
      </Result>
    </DivWrapper>
  );
};

export default OutputGraph;
