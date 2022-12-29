import React, { Component } from 'react';
import { Column, SubHeadline } from '../../';
import styles from './stagger.scss';
import clsx from 'clsx';

const defaultConfig = {
  column: { customClass: '', customStyle: {}, rest: {} },
  text: { customClass: '', customStyle: {}, rest: {} },
};

const Stagger = ({
  color = '#000',
  config = defaultConfig,
  staggerText = [],
  stagger = { key: 'marginLeft', value: 26 },
}) => {
  const list = staggerText.map((text, idx) => (
    <SubHeadline
      color={Array.isArray(color) ? color[idx] : color}
      key={idx}
      {...config.text.rest}
      size="large"
      customClass={clsx(styles.text, config.text.customClass)}
      customStyle={{ ...config.text.customStyle, [stagger.key]: stagger.value * idx }}
    >
      {text}
    </SubHeadline>
  ));
  return (
    <Column
      customClass={clsx(styles.stagger, config.column.customClass)}
      style={config.column.customStyle}
      {...config.column.rest}
    >
      {list}
    </Column>
  );
};

export default Stagger;
