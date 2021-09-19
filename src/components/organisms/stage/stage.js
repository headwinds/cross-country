import React, { Component } from 'react';
import { Column, SubHeadline, Hunter } from '../../';
import styles from './stage.scss';
import clsx from 'clsx';

const defaultConfig = {
  column: { customClass: '', customStyle: {}, rest: {} },
  text: { customClass: '', customStyle: {}, rest: {} },
};

const Stage = ({ config = defaultConfig, actorModels = [] }) => {
  const renderActors = () => {
    return actorModels.map(model => <Hunter model={model} />);
  };
  return (
    <Column
      customClass={clsx(styles.stage, config.column.customClass)}
      style={config.column.customStyle}
      {...config.column.rest}
    >
      {renderActors()}
    </Column>
  );
};

export default Stage;
