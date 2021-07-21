import React, { Component } from 'react';
import { Image, Column, SubHeadline } from '../components';
import styles from './template.scss';
import clsx from 'clsx';

const Template = ({ config: { text, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
    </Column>
  );
};

export default Template;
