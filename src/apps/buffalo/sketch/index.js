import React, { Component } from 'react';
import { Column, Row } from '../../../components';
import './draw.scss';

const Buffalo = () => {
  return (
    <Column className="FreeDraw" style={{ textAlign: 'left', margin: 20 }}>
      <Row>
        <Column> drone</Column>
        <Column>compact</Column>
        <Column>expanded</Column>
      </Row>
    </Column>
  );
};

export default Buffalo;
