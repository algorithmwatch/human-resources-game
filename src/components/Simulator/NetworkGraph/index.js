import React from 'react';
import styled from 'styled-components';

import { getNodes, getEdges, translate } from '../Utils';

import Nodes from './Nodes';
import Edges from './Edges';
import NodeLabels from './NodeLabels';
import EdgeControls from './EdgeControls';
import GameControls from '../GameControls';

const Svg = styled.svg`
  background: rgba(255, 255, 255, 0);
  display: block;
`;

const Wrapper = styled.div`
  position: relative;
`;

const margin = {
  top: 60,
  right: 150,
  bottom: 100,
  left: 200,
};

const NetworkGraph = ({ width, height, layers, disabled, sandbox }) => {
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const nodes = getNodes(layers, innerWidth, innerHeight);
  const edges = getEdges(
    nodes,
    width - margin.right / 2 - margin.left,
    height - margin.top
  );
  const controls = edges.filter((edge) => edge.isControlled);

  return (
    <Wrapper>
      <EdgeControls
        disabled={disabled}
        controls={controls}
        xOffset={margin.left}
        yOffset={margin.top}
      />
      <NodeLabels nodes={nodes} />
      <Svg width={width} height={height}>
        <g transform={translate(margin.left, margin.top)}>
          <Edges edges={edges} />
          <Nodes nodes={nodes} clickable={sandbox} />
        </g>
      </Svg>
      {!sandbox && <GameControls />}
    </Wrapper>
  );
};

export default NetworkGraph;
