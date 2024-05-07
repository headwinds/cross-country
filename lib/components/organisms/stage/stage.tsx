import React, { Component } from "react";
import { Column, SubHeadline } from "../../";
import styles from "./stage.module.css";
import Hunter from "../actors/party/hunter";
import Warrior from "../actors/party/warrior";
import Wisp from "../actors/wisp";
import clsx from "clsx";

type StageConfig = {
  customClass?:string;
  customStyle?:any;
  rest?: any;
}

const defaultConfig: StageConfig = { customClass: "", customStyle: {}, rest: {} };
const defaultActorModel = {
  id: 0,
  variant: "hunter",
  customSkinStyle: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 120,
    backgroundColor: "green",
  },
  config: null,
};

type StageProps = {
  config?: StageConfig;
  actorModels: any[];
}

const Stage = ({
  config = defaultConfig,
  actorModels = [defaultActorModel],
}: StageProps) => {
  const getActor = (model) => {
    switch (model.variant) {
      case "wisp":
        return <Wisp model={model} key={model.id} />;
      case "warrior":
        return <Warrior model={model} key={model.id} />;
      case "hunter":
      default:
        return <Hunter model={model} key={model.id} />;
    }
  };

  const renderActors = () => {
    return actorModels.map((model) => getActor(model));
  };

  console.log("Stage config: ", config)

  return (
    <Column
      customClass={clsx(styles.stage, config?.customClass)}
      customStyle={config?.customStyle}
      {...config?.rest}
    >
      {renderActors()}
    </Column>
  );
};

export default Stage;
