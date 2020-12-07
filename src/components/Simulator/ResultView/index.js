import React from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Box from '~/components/Box';
import Button from '~/components/Button';
import Text from '~/components/Text';

import ResultVis from '../ResultVis';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ResultView = () => {
  const startNextRound = useStoreActions(
    (actions) => actions.simulation.startNextRound
  );
  const hasNextRound = useStoreState((state) => state.simulation.hasNextRound);
  const roundConfig = useStoreState((state) => state.simulation.roundConfig);

  const buttonLabel = hasNextRound ? 'nächste Runde' : 'Spiel neu starten';

  return (
    <div>
      <Box>
        <Text dangerouslySetInnerHTML={{ __html: roundConfig.result_top }} />
      </Box>
      <ResultVis />
      <Box>
        <Text dangerouslySetInnerHTML={{ __html: roundConfig.result_bottom }} />
        {hasNextRound && (
          <ButtonWrapper>
            <Button onClick={() => startNextRound()}>{buttonLabel}</Button>
          </ButtonWrapper>
        )}
      </Box>
    </div>
  );
};

export default ResultView;
