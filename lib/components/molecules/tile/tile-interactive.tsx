import React, { forwardRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Column, Paragraph } from "../../..";
import Corners from "./corners";
import styles from "./tile.module.css";
import clsx from "clsx";

import type { InteractiveTileType } from "./types";
import type { TileImageConfig } from "@headwinds/cross-country/models/TileModel";

const defaultModel = { fill: "#eee", value: 0, id: "0" };

const SUBTRACT_SIZE_MODIFIER = 5;

// Helper function to generate background image styles
const generateImageStyles = (
  imageConfig: TileImageConfig
): React.CSSProperties => {
  const {
    url,
    fit = "cover",
    position = "center",
    opacity = 1,
    repeat = "no-repeat",
  } = imageConfig;

  return {
    backgroundImage: `url(${url})`,
    backgroundSize: fit,
    backgroundPosition: position,
    backgroundRepeat: repeat,
    opacity,
  };
};

interface TileInteractiveProps extends InteractiveTileType {
  // Add any additional props if needed
}


const InteractiveTile = forwardRef<HTMLDivElement, TileInteractiveProps>(
  (
    {
      isSelected = false,
      setSelected,
      isInteractive = true,
      customClass,
      size = 100,
      cornerColor = "#ddd",
      customStyle = {
        borderRadius: 8,
        margin: 2,
      },
      type,
      model = defaultModel,
      springModel = null,
      borderRadius = 10,
      children,
      //sample = 'light-grey', // shallow-water
      ...rest
    }: InteractiveTileType,
    ref
  ) => {
    const [isHovered, toggleHovered] = useState(false);
    const { id, image, backgroundImage } = model;

    // Generate image styles if available
    const imageStyles = image ? generateImageStyles(image) : {};
    const backgroundImageStyles = backgroundImage
      ? generateImageStyles(backgroundImage)
      : {};

    const finalCustomStyle = {
      ...customStyle,
      width: size,
      height: size,
      backgroundColor: model?.fillBackground ?? model.fill,
      padding: 0,
      // Apply image styles, with image taking precedence over backgroundImage
      ...backgroundImageStyles,
      ...imageStyles,
    };

    const handleTileSelected = () => {
      if (!setSelected) {
        return null;
      }

      if (isSelected) {
        return setSelected(null);
      }
      return setSelected(model);
    };

    const colorProps = useSpring(springModel);

    const onMouseEnter = () => {
      // console.log("Tile onMouseEnter");
      toggleHovered(true);
    };

    const onMouseLeave = () => {
      // console.log("Tile onMouseLeave");
      toggleHovered(false);
    };

    const keyValues = [
      { id: 0, key: "name", value: "water" },
      { id: 1, key: "movement cost", value: "3" },
    ];

    // console.log("InteractiveTile", { model, customStyle });

    return (
      <Column
        customClass={clsx(
          styles.tile,
          styles.interactive,
          { [styles.in]: !isSelected, [styles.out]: isSelected },
          customClass
        )}
        hasChildrenCentered
        customStyle={{
          ...finalCustomStyle,
          backgroundColor: model?.fillBackground ?? model.fill,

          borderColor: model?.fillBorder ?? model.fill,
        }}
        onClick={handleTileSelected}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {springModel ? (
          <animated.div
            style={{
              ...finalCustomStyle,
              backgroundColor: colorProps.backgroundColor.to((value) => value),
              width: size - SUBTRACT_SIZE_MODIFIER,
              height: size - SUBTRACT_SIZE_MODIFIER,
            }}
          />
        ) : (
          <Column
            //customClass={clsx(styles.innerTile, styles[sample])}
            hasChildrenCentered
            customStyle={{
              ...finalCustomStyle,
              width: size - SUBTRACT_SIZE_MODIFIER,
              height: size - SUBTRACT_SIZE_MODIFIER,
              borderRadius,
              backgroundColor: image ? "transparent" : model.fillBackground, // Use transparent background if image is provided
              // Apply image styles to inner tile as well
              ...backgroundImageStyles,
              ...imageStyles,
            }}
          >
            {children}
          </Column>
        )}

        {/* CORNERS */}
        <Corners
          size={100}
          isHovered={isHovered}
          cornerColor={model.fillCorner ?? model.fill}
        />
        {/*
        <Column>
          <KeyValuePairs keyValues={keyValues} />
        </Column>*/}
      </Column>
    );
  }
);

export default InteractiveTile;
