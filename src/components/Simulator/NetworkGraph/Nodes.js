import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';

const Node = styled.circle`
  fill: #1eaad5;
  cursor: ${(p) => (p.clickable ? 'pointer' : 'default')};

  &:hover {
    fill: ${(p) => (p.clickable ? '#57badc' : '#1eaad5')};
  }
`;

const Nodes = ({ nodes = [], clickable = false }) => {
  const setNodeActive = useStoreActions(
    (actions) => actions.simulation.setNodeActive
  );

  const handleNodeClick = (node) => {
    if (clickable) {
      setNodeActive(node);
    }
  };

  return nodes.map((node) => (
    <Fragment key={node.id}>
      <Node
        cx={node.x}
        cy={node.y}
        r={1.4 * node.r}
        onClick={() => handleNodeClick(node)}
        clickable={clickable}
      />
    </Fragment>
  ));
};

export default Nodes;
