import React, { useEffect } from 'react';
import { Column } from '../../';
import styles from './stage.scss';
import clsx from 'clsx';
import stageMachine from './stage-machine';
import { useInterpret, useSelector } from '@xstate/react';

const selectPlayerName = state => state.context.playerName;

const Stage = ({ config, children }) => {
  //const [state, send] = useInterpret(stageMachine, {
  const service = useInterpret(
    stageMachine,
    {
      actions: {
        /* ... */
      },
    },
    state => {
      // subscribes to state changes
    }
  );
  const playerName = useSelector(service, selectPlayerName);

  // const {playerName} = state.playerName;;


  /*
  machine init and then goes to the join game state 

  useEffect(() => {
    setTimeout(function () {
      console.log('Stage Machine sending timoeut');
      service.send('PLAYER_CLICKED_JOIN', { playerName: 'glenn' });
    }, 1500);
  }, []);
  */

  useEffect(() => {
  }, [playerName]);

  return (
    <Column customClass={clsx(styles.stage, config?.column?.customClass)} customStyle={config?.column?.customStyle}>
      {children}
    </Column>
  );
};

export default Stage;
