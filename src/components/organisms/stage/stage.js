import React, { useEffect } from 'react';
import { Column } from '../../';
import styles from './stage.scss';
import clsx from 'clsx';
//import stageMachine from './stage-machine';
import { useInterpret, useSelector } from '@xstate/react';

//const selectPlayerName = state => state.context.playerName;

const Stage = ({ config, children }) => {
  //const [state, send] = useInterpret(stageMachine, {
  //const service = useInterpret(stageMachine);
  //const playerName = useSelector(service, selectPlayerName);

  //useEffect(() => {}, [playerName]);

  return (
    <Column customClass={clsx(styles.stage, config?.column?.customClass)} customStyle={config?.column?.customStyle}>
      {children}
    </Column>
  );
};

export default Stage;
