import React, { Component } from 'react';
import { Column, SubHeadline } from '../../';
import styles from './stage.module.css';
import Hunter from '../actors/party/hunter';
import Warrior from '../actors/party/warrior';
import Wisp from '../actors/wisp';
import clsx from 'clsx';

const defaultConfig = {
  column: { customClass: '', customStyle: {}, rest: {} },
  text: { customClass: '', customStyle: {}, rest: {} },
};

const defaultActorModel = {
  variant: 'hunter',
  customStyle: { position: 'absolute', zIndex: 0, left: 20, top: 120, backgroundColor: 'green' },
};

const Stage = ({ config = defaultConfig, actorModels = [defaultActorModel] }) => {

  const getActor = (model) => {
    switch(model.variant) {
      case "wisp":
        return <Wisp model={model} key={model.id} />;
      case "warrior":
        return <Warrior model={model} key={model.id} />;
      case "hunter":
      default: 
        return <Hunter model={model} key={model.id} />;
    }
  }

  const renderActors = () => {
    return actorModels.map(model => getActor(model));
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
