import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Box from '~/components/Box';
import Text from '~/components/Text';

const Wrapper = styled(Box)`
  padding: 20px;
`;

const StepNav = ({ sandbox }) => {
  const roundConfig = useStoreState((state) => state.simulation.roundConfig);

  const label = sandbox
    ? 'In the sandbox below you can click on each node (green circle) to edit the respective edge. At the bottom the top 10 hits are marked.'
    : roundConfig.short;

  return (
    <Wrapper
      mb={4}
      color="black"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>{label}</Text>
    </Wrapper>
  );
};

export default StepNav;
