import React, { useMemo } from 'react';
import styled from 'styled-components';
import { SwarmPlotCanvas } from '@nivo/swarmplot';

import theme from '~/style/themes/default';
import { getContent } from '../OutputGraph/Tooltip';

const ChartHeadline = styled.text`
  font-size: 12px;
`;

function getBubbleColor(d) {
  if (d.isTarget && d.isOverThreshold) {
    return theme.colors.green;
  }

  if (!d.isTarget && d.isOverThreshold) {
    return theme.colors.red;
  }

  if (d.isTarget) {
    return theme.colors.secondary;
  }

  return theme.colors.secondary_light;
}

const chartConfigs = {
  age: {
    title: 'Age',
    groups: ['nivo_position'],
    value: 'Age',
    layout: 'horizontal',
    valueScale: {
      type: 'linear',
      min: 20,
      max: 65,
    },
  },
  gender: {
    title: 'Gender',
    groupBy: 'Gender',
    groups: ['female', 'male'],
    value: 'nivo_position',
  },
  education: {
    title: 'Education',
    groupBy: 'Ausbildung_cat',
    groups: ['College degree', 'A-levels', 'Apprenticeship', 'O-levels'],
    value: 'nivo_position',
  },
};

const BubbleVis = ({ width, height, transform, data, type, isSandbox }) => {
  /* HOTFIX

    1) make the graph stable by only running the force simulation once (via `chartData`)
    2) select the top 5 nodes (by weight) and use an anotation (and not the color) to mark them
    3) enable the hotfix only when using this component in the sandbox results view
    */

  const chartData = useMemo(
    () =>
      data
        .slice(0)
        .sort((a, b) => a.weight - b.weight)
        .map((d, i) => ({
          ...d,
          color: isSandbox ? theme.colors.secondary_light : getBubbleColor(d),
        })),
    []
  );

  const highest = data.sort((a, b) => b.weight - a.weight).slice(0, 5);
  const highestIndices = highest.map((x) =>
    chartData.indexOf(chartData.filter((cd) => x.Name === cd.Name)[0])
  );

  const config = chartConfigs[type];

  if (!config) {
    return null;
  }

  const colorizer = (d) => d.data.color;

  return (
    <g transform={transform}>
      <ChartHeadline>{config.title}</ChartHeadline>
      <SwarmPlotCanvas
        width={width}
        height={height}
        data={chartData}
        spacing={0}
        size={15}
        simulationIterations={20}
        margin={{
          top: 20,
          right: 40,
          bottom: 40,
          left: 40,
        }}
        colors={colorizer}
        axisLeft={false}
        axisTop={false}
        axisRight={false}
        enableGridX={false}
        enableGridY={false}
        tooltip={(d) => getContent(JSON.stringify(d.node.data))}
        annotations={
          isSandbox
            ? highestIndices.map((x, i) => ({
                type: 'circle',
                match: { index: x },
              }))
            : []
        }
        {...config}
      />
    </g>
  );
};

export default BubbleVis;
