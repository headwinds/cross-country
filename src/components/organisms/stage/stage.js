import React, { Component } from 'react';
import { Column, SubHeadline, Hunter } from '../../';
import styles from './stage.scss';
import clsx from 'clsx';

const defaultConfig = {
  column: { customClass: '', customStyle: {}, rest: {} },
  text: { customClass: '', customStyle: {}, rest: {} },
};

const defaultActorModel = {
  customStyle: { position: 'absolute', zIndex: 0, left: 20, top: 120, backgroundColor: 'pink' },
};

const Stage = ({ config = defaultConfig, actorModels = [defaultActorModel] }) => {
  const renderActors = () => {
    return actorModels.map(model => <Hunter model={model} key={model?.id ?? 0} />);
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
