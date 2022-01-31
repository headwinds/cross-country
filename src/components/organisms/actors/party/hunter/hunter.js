import React, { Component } from 'react';
import { Column, Actor } from '../../../../';
import styles from './hunter.scss';
import clsx from 'clsx';

// pre-configured character
const head = {};
const body = {};
const legs = {};
const config = { head, body, legs, type: 'humanoid' };

const Hunter = ({ customClass = '', model: { customStyle = {} }, ...rest }) => {
  return <Actor config={config} />;
};

export default Hunter;
