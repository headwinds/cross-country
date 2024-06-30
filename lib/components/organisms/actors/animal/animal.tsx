import React, { Component } from "react";
import styles from "./wisp.module.css";
import Actor from "../actor/";
import clsx from "clsx";

/*
limit the animal variants set to less than 10 as I want to be
provide an API end point to create any animal variant
*/

const ANIMAL_VARIANTS = {
  RABBIT: "RABBIT",
  BOAR: "BOAR",
  DEER: "DEER",
  MOOSE: "MOOSE",
  BEAR: "BEAR",
  SALMON: "SALMON",
  CROW: "CROW",
};

const defaultModel = {
  id: 0,
  type: "one",
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: "#e8e8e8" },
  config: null,
  customClass: "",
  variant: ANIMAL_VARIANTS.RABBIT,
};

const Animal = ({
  customClass = "",
  customSkinStyle = {},
  model = defaultModel,
  tileSize = 40,
  children,
}) => (
  <Actor
    type={model.type}
    config={model.config}
    position={model.position}
    customClass={customClass}
    customSkinStyle={{ ...model.customSkinStyle, ...customSkinStyle }}
    tileSize={tileSize}
  >
    {children}
  </Actor>
);

export default Animal;
