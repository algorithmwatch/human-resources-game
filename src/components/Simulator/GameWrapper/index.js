import React, { Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import config from '~/config';

import Modal from '~/components/Modal';
import Simulation from '../Simulation';

const GameWrapper = ({ width }) => {
  const roundIndex = useStoreState((state) => state.simulation.round);
  const showIntroduction = useStoreState(
    (state) => state.simulation.showIntroduction
  );
  const setIntroductionVisible = useStoreActions(
    (actions) => actions.simulation.setIntroductionVisible
  );
  const setStartButtonVisible = useStoreActions(
    (actions) => actions.simulation.setStartButtonVisible
  );

  const hideIntroduction = () => {
    setIntroductionVisible(false);
    setStartButtonVisible(true);
  };

  const roundConfig = config.rounds[roundIndex];

  return (
    <Fragment>
      {showIntroduction && (
        <Modal
          title={roundConfig.title}
          text={roundConfig.introduction}
          onClose={hideIntroduction}
        />
      )}
      {width && <Simulation width={width} />}
    </Fragment>
  );
};

export default GameWrapper;
