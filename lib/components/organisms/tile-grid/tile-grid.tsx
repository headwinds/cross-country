import React, { useState, useRef, useMemo, useCallback } from "react";
// components
import { Tile, Column, Row } from "../..";
import styles from "./tile-grid.module.css";
import ColorUtil from "../../../utils/colour-util";
import clsx from "clsx";
import { TileModel } from "@headwinds/cross-country/models/TileModel";

const defaultTile: TileModel = {
  id: "0",
  name: "snowbank",
  label: "",
  description: "",
  material: "snow",
  movement_cost: 0,
  color: "white",
  type: "tile",
  skin: "",
  damage: 0,
  is_obstacle: true,
  obstacle_remover: "shovel",
  fill: "white",
  elevation: 0,
  age: -1, // doesn't age
};

const rgb = ColorUtil.hexToRgb("#67bd67");
const darkenColor = -0.1; // 10% darker
const shadedColor = ColorUtil.getShadedColor(rgb, darkenColor);

export interface TileGridProps {
  totalInRow?: number;
  totalInCol?: number;
  gapSize?: number;
  models?: TileModel[];
  isDemo?: boolean;
  tileConfig?: { size: number; fill: string; cornerColor: string };
  isIsometric?: boolean;
  customClass?: string | null;
  tileRefs?: React.MutableRefObject<unknown[]>;
  onGridConfigChange?: (config: {
    tileSize: number;
    gapSize: number;
    totalInRow: number;
    totalInCol: number;
  }) => void;
}

const TileGrid = ({
  totalInRow = 4,
  totalInCol = 4,
  gapSize = 0,
  models = [defaultTile],
  isDemo = false,
  tileConfig = { size: 100, fill: "#67bd67", cornerColor: shadedColor },
  isIsometric = false,
  customClass = null,
  tileRefs,
  onGridConfigChange,
}: TileGridProps) => {
  const [tileSeleted, setSelected] = useState<TileModel | null>(null);

  // Memoize the setSelected callback to prevent unnecessary re-renders
  const memoizedSetSelected = useCallback((selectedTile: TileModel | null) => {
    setSelected(selectedTile);
  }, []);

  // Use the tile size from config
  const tileSize = tileConfig.size;
  const totalTiles = totalInRow * totalInCol;

  // Notify parent component of grid configuration
  React.useEffect(() => {
    if (onGridConfigChange) {
      onGridConfigChange({
        tileSize,
        gapSize,
        totalInRow,
        totalInCol,
      });
    }
  }, [tileSize, gapSize, totalInRow, totalInCol, onGridConfigChange]);

  const createGrid = useMemo(() => {
    const grid = [];
    // Create a proper 2D grid with totalInRow rows and totalInCol columns
    const modelsCopy = [...models];

    // Ensure we have enough models to fill the grid
    while (modelsCopy.length < totalTiles) {
      modelsCopy.push(...models);
    }

    // Create grid: totalInRow rows, each with totalInCol columns
    for (let row = 0; row < totalInRow; row++) {
      const rowTiles = [];
      for (let col = 0; col < totalInCol; col++) {
        const index = row * totalInCol + col;
        if (index < modelsCopy.length) {
          rowTiles.push(modelsCopy[index]);
        } else {
          // Use the default tile if we run out of models
          rowTiles.push(defaultTile);
        }
      }
      grid.push(rowTiles);
    }
    return grid;
  }, [models, totalInRow, totalInCol, totalTiles]);

  const tiles = useMemo(() => {
    let count = -1;

    const createColumns = (columns, x) => {
      return columns.map((cell, y) => {
        const tileModel = columns[y];
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
              backgroundColor: "orange", //tileModel?.fill ?? "pink", //tileModel.color,
              width: tileSize,
              height: tileSize,
            }}
            setSelected={memoizedSetSelected}
            isSelected={isSelected}
            ref={(ref) => {
              if (tileRefs && ref) {
                tileRefs.current[count] = ref;
              }
            }}
          />
        );
      });
    };

    const createRow = (columns, x) => {
      const row = createColumns(columns, x);
      return (
        <Row className={styles.tileRow} key={x}>
          {row}
        </Row>
      );
    };

    return createGrid.map((columns, x) => createRow(columns, x));
  }, [
    createGrid,
    tileConfig,
    gapSize,
    tileSize,
    tileSeleted,
    memoizedSetSelected,
    totalTiles,
    tileRefs,
  ]);

  const tileGridClass = isIsometric ? styles.tileGridIso : styles.tileGrid;
  const columnCustomClass = clsx(tileGridClass, customClass);

  return (
    <Column
      customClass={columnCustomClass}
      customStyle={{
        padding: 0,
        margin: 0,
      }}
    >
      {tiles}
    </Column>
  );
};

export default TileGrid;
