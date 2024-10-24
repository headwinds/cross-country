import React, { Component } from "react";
import { Column, Image, SVG } from "../../../";
import styles from "./actor.module.css";
import clsx from "clsx";
import ActorModel from "../../../../models/ActorModel";

const defaultTileSize = 50;

const head = { color: "purple" };
const body = { color: "green" };
const legs = { color: "cornflowerblue" };
const defaultConfig = { head, body, legs, type: "humanoid" };

// should be taken from windsong!
const actorModel = new ActorModel({ name: "Actor" }).toObject();
//{ health: 100, speed: 1, attack: 1, defense: 1, isDead: false };

// the actor should be relative to the tile size so that they're larger than the tile

const renderHeadBodyFeet = (config, tileSize) => {
  const { head, body, legs } = config;

  const third = Math.floor(tileSize / 3) - 4;
  const validThird = String(third) === "NaN" ? 0 : third;

  return (
    <div>
      <div
        style={{ backgroundColor: head.color, width: 40, height: validThird }}
      ></div>
      <div
        style={{ backgroundColor: body.color, width: 40, height: validThird }}
      ></div>
      <div
        style={{
          backgroundColor: legs.color,
          width: 40,
          height: validThird - 10,
        }}
      ></div>
    </div>
  );
};

const defaultPosition = { x: 0, y: 0, z: 0 };

const defaultCustomTileStyle = {
  opacity: 1,
  width: defaultTileSize,
  height: 80,
  alignItems: "center",
};

// skin
const defaultCustomSkinStyle = {
  backgroundColor: "red",
};

const Actor = ({
  position = defaultPosition,
  customClass = "", // for the tile container
  customTileStyle = defaultCustomTileStyle,
  customSkinStyle = defaultCustomSkinStyle,
  config = defaultConfig,
  tileSize = defaultTileSize,
  children = null,
  ...rest
}) => {
  const columnCustomClass = clsx(styles.actor, customClass);
  const type = config?.type || null;

  const renderSubType = () => {
    switch (type) {
      case "humanoid":
      case "one":
        return null;
      case "three":
      default:
        return config ? renderHeadBodyFeet(config, tileSize) : null;
    }
  };

  const { x, y, z } = position;

  return (
    <Column
      customClass={styles.actor}
      customStyle={{
        ...customTileStyle,
        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
      }}
      name="actor tile"
      {...rest}
    >
      <Column
        customClass={columnCustomClass}
        customStyle={{ ...defaultCustomSkinStyle, ...customSkinStyle }}
        name="actor skin"
      >
        {type ? renderSubType() : children}
      </Column>
    </Column>
  );
};

export default Actor;
