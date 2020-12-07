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
    ? 'In der Sandkiste können Sie auf jede Node/Knoten (grüner Kreis) klicken, um die jeweiligen Kanten/Edge zu bearbeiten. Unten werden die Top 10 der dadurch erzielten Treffer markiert.'
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
