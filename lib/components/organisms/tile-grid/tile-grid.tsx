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
  color: "#67bd67",
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

export interface TileGridProps {
  totalInRow?: number;
  //totalInColumn?: number;
  gapSize?: number;
  models?: TileModel[];
  isDemo?: boolean;
  width?: number;
  tileConfig?: { size: number; fill: string; cornerColor: string };
  isIsometric?: boolean;
  customClass?: string | null;
  tileRefs?: React.MutableRefObject<unknown[]>;
  onGridConfigChange?: (config: {
    tileSize: number;
    gapSize: number;
    totalInRow: number;
    width: number;
  }) => void;
}

const TileGrid = ({
  totalInRow = 4,
  //totalInColumn = 4,
  gapSize = 0,
  models = [defaultTile],
  isDemo = false,
  width = 400,
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

  const size = Math.floor(width / totalInRow - gapSize);
  const totalTiles = models.length;

  // Notify parent component of grid configuration
  React.useEffect(() => {
    if (onGridConfigChange) {
      onGridConfigChange({
        tileSize: size,
        gapSize,
        totalInRow,
        width,
      });
    }
  }, [size, gapSize, totalInRow, width, onGridConfigChange]);

  const createGrid = useMemo(() => {
    const grid = [];
    // Create a 2D grid from the 1D models array without mutating the original
    const modelsCopy = [...models];
    for (let i = 0; i < modelsCopy.length; i += totalInRow) {
      grid.push(modelsCopy.slice(i, i + totalInRow));
    }
    return grid;
  }, [models, totalInRow]);

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
              backgroundColor: tileModel?.fill ?? "pink", //tileModel.color,
              width: size,
              height: size,
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
    size,
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
