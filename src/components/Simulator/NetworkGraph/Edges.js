import React from 'react';
import styled from 'styled-components';
import { scalePow } from 'd3-scale';

const EdgePath = styled.path`
  stroke: ${(p) =>
    p.isControlled ? p.theme.colors.grey2 : p.theme.colors.grey1};
`;

const strokeWidthScale = scalePow().domain([-1, 1]).exponent(2).range([1, 4]);

const Edge = ({
  sourceX = 0,
  sourceY = 0,
  targetX = 0,
  targetY = 0,
  sourcePosition = 'left',
  targetPosition = 'right',
  style = {},
  isControlled,
}) => {
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;

  let dAttr = `M${sourceX},${sourceY} C${sourceX},${centerY} ${targetX},${centerY} ${targetX},${targetY}`;

  if (
    ['left', 'right'].includes(sourcePosition) &&
    ['left', 'right'].includes(targetPosition)
  ) {
    const xOffset = Math.abs(targetX - sourceX) / 2;
    const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;

    dAttr = `M${sourceX},${sourceY} C${centerX},${sourceY} ${centerX},${targetY} ${targetX},${targetY}`;
  } else if (
    ['left', 'right'].includes(sourcePosition) ||
    ['left', 'right'].includes(targetPosition)
  ) {
    dAttr = `M${sourceX},${sourceY} C${sourceX},${targetY} ${sourceX},${targetY} ${targetX},${targetY}`;
  }

  return <EdgePath {...style} isControlled={isControlled} d={dAttr} />;
};

const Edges = ({ edges }) =>
  edges.map((edge, i) => {
    const strokeWidth = strokeWidthScale(edge.weight);

    return (
      <Edge
        sourceX={edge.from[0]}
        sourceY={edge.from[1]}
        targetX={edge.to[0]}
        targetY={edge.to[1]}
        isControlled={edge.isControlled}
        style={{
          fill: 'none',
          strokeWidth,
        }}
        key={`edge__${i}`}
      />
    );
  });

export default Edges;
