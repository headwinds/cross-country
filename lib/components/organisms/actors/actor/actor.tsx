import React, { Component, CSSProperties } from "react";
import { Column, Image, SVG } from "@headwinds/cross-country/components";
import styles from "./actor.module.css";
import clsx from "clsx";
import type { ActorModel } from "@headwinds/cross-country/models";

const defaultTileSize = 100;

const head = { color: "purple" };
const body = { color: "green" };
const legs = { color: "cornflowerblue" };
const defaultConfig = { head, body, legs, type: "humanoid" };

const renderHeadBodyFeet = (config, tileSize) => {
  const { head, body, legs } = config;

  return (
    <div>
      <div style={{ backgroundColor: head.color, width: 40, height: 40 }}></div>
      <div style={{ backgroundColor: body.color, width: 40, height: 20 }}></div>
      <div
        style={{
          backgroundColor: legs.color,
          width: 40,
          height: 20,
        }}
      ></div>
    </div>
  );
};

const defaultPosition = { x: 0, y: 0, z: 0 };

const defaultCustomTileStyle = {
  opacity: 1,
  width: 80,
  height: 80,
  alignItems: "center",
};

// skin
const defaultCustomSkinStyle = {
  backgroundColor: "whitesmoke",
};

export interface ActorProps {
  position?: any;
  customStyle?: CSSProperties;
  customClass?: string;
  customTileStyle?: any;
  customSkinStyle?: any;
  config?: any;
  tileSize?: number;
  children?: any;
  type?: string;
  model?: ActorModel;
}

const Actor = ({
  position = defaultPosition,
  customClass = "", // for the tile container
  customTileStyle = defaultCustomTileStyle,
  customSkinStyle = defaultCustomSkinStyle,
  config = defaultConfig,
  tileSize = defaultTileSize,
  children = null,
  ...rest
}: ActorProps) => {
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

  // TODO this is a magic number, we need to find a better way to do this
  // need to consider tile width and actor width to calculate the correct position
  // and center the actor in the tile
  const xMod = 40;

  return (
    <Column
      customClass={styles.actor}
      customStyle={{
        ...customTileStyle,
        transform: `translate3d(${x - xMod}px, ${y}px, ${z}px)`,
      }}
      {...rest}
    >
      <Column
        customClass={columnCustomClass}
        customStyle={{ ...defaultCustomSkinStyle, ...customSkinStyle }}
      >
        {type ? renderSubType() : children}
      </Column>
    </Column>
  );
};

export default Actor;
