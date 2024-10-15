import { useRef, useState } from "react";
// components
import type { JsonMapTileModelInterface } from "@cross-country/models/JsonMapTileModel";
import ColorUtil from "@cross-country/utils/colour-util";
import clsx from "clsx";
import { Column, Tile } from "../..";
import styles from "./json-map-tile-grid.module.css";

interface JsonMapTileGridProps {
  models: JsonMapTileModelInterface[];
  isIsometric?: boolean;
  customClass?: string;
}

const shadedColor = ColorUtil.hexToRgb("#67bd67");

const JsonMapTileGrid = ({
  models,
  isIsometric = false,
  customClass = "",
}: JsonMapTileGridProps) => {
  const [tileSelected, setSelected] =
    useState<JsonMapTileModelInterface | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalTiles = models.length;

  const modelsWithIds = models.map((model) => ({
    ...model,
    id: `tile_${model.x}_${model.y}`,
    fill: model.color ?? "#67bd67",
  }));

  const tileConfig = {
    size: 100,
    fill: "#67bd67",
    cornerColor: shadedColor,
  };

  const renderGrid = () => {
    return modelsWithIds.map((tileModel, index) => {
      const isSelected = tileSelected
        ? tileModel.id === tileSelected.id
        : false;

      return (
        <div
          key={tileModel.id}
          style={{
            position: "absolute",
            left: `${tileModel.x}px`,
            top: `${tileModel.y}px`,
            width: `${tileModel.width}px`,
            height: `${tileModel.height}px`,
            backgroundColor: tileModel.fill,
          }}
        />
      );
    });
  };

  const tiles = renderGrid();

  const tileGridClass = isIsometric ? styles.tileGridIso : styles.tileGrid;
  const columnCustomClass = clsx(tileGridClass, customClass);

  return (
    <Column customClass={columnCustomClass}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {tiles}
      </div>
    </Column>
  );
};

export default JsonMapTileGrid;

/*
          <Tile
            model={tileModel}
            {...tileConfig}
            customStyle={{
              backgroundColor: tileModel.fill ?? "pink",
              width: tileModel.width,
              height: tileModel.height,
            }}
            setSelected={setSelected}
            isSelected={isSelected}
            ref={(ref) => (tileRefs.current[index] = ref)}
            id={tileModel.id}
          />*/
