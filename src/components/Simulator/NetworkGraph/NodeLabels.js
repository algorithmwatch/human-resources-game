import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  pointer-events: none;
  user-select: none;
  font-size: 12px;
  font-weight: bold;
  width: 150px;
  text-align: right;
  transform: translate(0, -50%);
`;

const NodeLabels = ({ nodes }) => {
  return nodes
    .filter((node) => node.layer === 0)
    .map((node) => (
      <LabelWrapper style={{ top: `${node.y + 60}px` }}>
        {node.propertyName}
      </LabelWrapper>
    ));
};

export default NodeLabels;
