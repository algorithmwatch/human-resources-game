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
    ? 'Click on a node (blue circle) to edit its edges. The top 5 hits are highlighted at the bottom.'
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
