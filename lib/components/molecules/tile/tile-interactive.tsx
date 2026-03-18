import React, { forwardRef, useState, useEffect } from "react";
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

    // Track whether the tile's image has finished loading so we can avoid
    // flashing the fallback background colour while the image is in-flight.
    const imageUrl = image?.url ?? "";
    const [imageLoadState, setImageLoadState] = useState<"loading" | "loaded" | "error">(
      imageUrl ? "loading" : "loaded"
    );

    useEffect(() => {
      if (!imageUrl) {
        setImageLoadState("loaded");
        return;
      }
      setImageLoadState("loading");
      const img = new window.Image();
      img.onload = () => setImageLoadState("loaded");
      img.onerror = () => setImageLoadState("error");
      img.src = imageUrl;
    }, [imageUrl]);

    // Generate image styles if available
    const imageStyles = image ? generateImageStyles(image) : {};
    const backgroundImageStyles = backgroundImage
      ? generateImageStyles(backgroundImage)
      : {};

    const getColor = () => {
      if (model.color) {
        return model.color;
      }
      if (model.fill) {
        return model.fill;
      }
      if (model.fillBackground) {
        return model.fillBackground;
      }
      return "#eee"; // default color
    };

    // While the image is still loading use a transparent background so the
    // fallback colour never flashes. The fallback appears only on error.
    const effectiveBgColor =
      imageUrl && imageLoadState === "loading" ? "transparent" : getColor();

    const finalCustomStyle = {
      ...customStyle,
      width: size,
      height: size,
      backgroundColor: effectiveBgColor,
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

    // Only use spring animation if springModel is provided
    // Provide a type-safe default to prevent animation type mismatches
    const defaultSpringConfig = {
      from: { opacity: 1 },
      to: { opacity: 1 },
    };
    
    const colorProps = useSpring(springModel || defaultSpringConfig);

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
          // Use the load-state-aware colour so the fallback never flashes
          backgroundColor: model?.fillBackground ?? effectiveBgColor,
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
              width: size - SUBTRACT_SIZE_MODIFIER,
              height: size - SUBTRACT_SIZE_MODIFIER,
              borderRadius,
              ...colorProps,
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
              // Transparent while loaded; fallback colour only surfaces on error
              backgroundColor: imageUrl
                ? imageLoadState === "error"
                  ? effectiveBgColor
                  : "transparent"
                : model.fillBackground,
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
