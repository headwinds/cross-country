import React, { Component } from 'react';
import { Column, Sketch } from '../../';
import c from '../../../constants';
import './draw.scss';
import channel from '../../../services/pusher-service';

const Buffalo = () => {
  return (
    <Column className="FreeDraw" style={{ textAlign: 'left', margin: 20 }}>
      <Sketch config={{ text: 'Sketch', hasBackground: true }} />
    </Column>
  );
};

export default Buffalo;
