import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { caveTrollMachine } from './cave-troll-machine';
import { useInterpret, useSelector, useMachine } from '@xstate/react';
import { Image, Tile, Column, Row, Wrapper, Modal, Hunter, Troll, Stage, Button } from '../../../../../../';
import CaveTrollBoard from './cave-troll-board';
import c from '../../../../../../constants/';
import styles from './cave-troll.scss';

const CaveTroll = () => {
  const [current, send] = useMachine(caveTrollMachine, { devTools: true });
  const tileRefs = useRef([]);
  const { actorModels, tileModels } = current.context;
  const caveTroll = actorModels.find(actor => actor.type === 'troll');
  const { name } = caveTroll.actorModel;

  return (
    <Column customStyle={{ width: 600 }}>
      <p>cave troll name: {name}</p>
      <CaveTrollBoard
        tileModels={tileModels}
        actorModels={actorModels}
        tileRefs={tileRefs}
        palette={current.context.palette}
        tileSize={current.context.tileSize}
        isIsometric={current.context.isIsometric}
        send={send}
      />
    </Column>
  );
};

CaveTroll.propTypes = {};

export default CaveTroll;
