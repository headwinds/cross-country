import React, { Component } from 'react';
//import Sketch from './sketch';
import { Column, Sketch } from '../../../../components';
import './draw.scss';

const Buffalo = () => {
  return (
    <Column className="FreeDraw" style={{ textAlign: 'left', margin: 20 }}>
      <Sketch config={{ text: 'Sketch', hasBackground: true }} />
    </Column>
  );
};

export default Buffalo;
