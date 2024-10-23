import React, { useState, useRef } from "react";
// components
import { Tile, Column, Row } from "../..";
import styles from "./tile-grid.module.css";
import ColorUtil from "../../../utils/colour-util";
import clsx from "clsx";
import { TileModelType } from "@cross-country/models/TileModel";

const defaultTile: TileModelType = {
  id: "0",
  name: "snowbank",
  label: "",
  description: "",
  material: "snow",
  movement_cost: 0,
  color: 10,
  type: "tile",
  skin: "",
  damage: 0,
  is_obstacle: true,
  obstacle_remover: "shovel",
  fill: "#67bd67",
  elevation: 0,
  age: -1, // doesn't age
};

const rgb = ColorUtil.hexToRgb("#67bd67");
const darkenColor = -0.1; // 10% darker
const shadedColor = ColorUtil.getShadedColor(rgb, darkenColor);

interface TileGridProps {
  totalInRow?: number;
  gapSize?: number;
  models?: TileModelType[];
  isDemo?: boolean;
  width?: number;
  tileConfig?: { size: number; fill: string; cornerColor: string };
  isIsometric?: boolean;
  customClass?: string | null;
  tileRefs?: React.RefObject<HTMLDivElement[]>;
}

const TileGrid = ({
  totalInRow = 4,
  gapSize = 0,
  models = [defaultTile],
  isDemo = false,
  width = 400,
  tileConfig = { size: 100, fill: "#67bd67", cornerColor: shadedColor },
  isIsometric = false,
  customClass = null,
  tileRefs,
}: TileGridProps) => {
  const [tileSeleted, setSelected] = useState(null);

  const size = Math.floor(width / totalInRow - gapSize);
  const totalTiles = models.length;

  const createGrid = () => {
    const grid = [];
    // credit https://stackoverflow.com/questions/22464605/convert-a-1d-array-to-2d-array
    // but be careful here since splice is destructive - make sure you don't destroy the original array!!!
    // important lesson for xstate that you don't mutate the original array!!!
    const cloneModels = [...models];
    // vs const cloneModels = models;
    while (cloneModels.length) grid.push(cloneModels.splice(0, totalInRow));
    return grid;
  };

  const initialModelGrid = createGrid();
  const renderGrid = (grid) => {
    let count = -1;

    const createColumns = (columns, x) => {
      return columns.map((cell, y) => {
        const tileModel = grid[x][y];
        if (count < totalTiles - 1) {
          count++;
        }
        const keyId = `${x}${y}`;

        const isSelected = tileSeleted
          ? tileModel.id === tileSeleted.id
          : false;

        return (
          <Tile
            key={keyId}
            model={tileModel}
            {...tileConfig}
            customStyle={{
              margin: gapSize,
              backgroundColor: tileModel?.fill ?? "pink", //tileModel.color,
              width: size,
              height: size,
            }}
            setSelected={setSelected}
            isSelected={isSelected}
            ref={(ref) => (tileRefs ? (tileRefs.current[count] = ref) : null)}
            id={`tile${tileModel.id}`}
          />
        );
      });
    };
    const createRow = (columns, x) => {
      const row = createColumns(columns, x);
      return (
        <Row style={styles.tileRow} key={x}>
          {row}
        </Row>
      );
    };
    return grid.map((columns, x) => createRow(columns, x));
  };

  const tiles = renderGrid(initialModelGrid);

  const tileGridClass = isIsometric ? styles.tileGridIso : styles.tileGrid;
  const columnCustomClass = clsx(tileGridClass, customClass);

  return <Column customClass={columnCustomClass}>{tiles}</Column>;
};

export default TileGrid;
