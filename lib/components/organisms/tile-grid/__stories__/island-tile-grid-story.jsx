/*
import React, { useRef } from "react";
import TileGrid from "../tile-grid";
import IslandTileGrid from "../island-tile-grid";
import Tile from "../../../molecules/tile";

const islandMap = [
  ["0", "0", "0", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "1", "1", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()]; // not chess!
  return range.map((index) => {
    return { id: index };
  });
};

const demoModels = createDemoModels();

const IslandTileGridStory = () => {
  const tileRefs = useRef([]);
  //return <TileGrid models={demoModels} totalInRow={3} Tile={Tile} tileRefs={tileRefs} />;
  return <IslandTileGrid />;
};

export default IslandTileGridStory;
*/

// @ts-nocheck
import React from "react";
import { Column, Paragraph, Tile } from "../../../../";
import { GridRow } from "../grid-row";
import { getIsland, getMapNewGrid } from "./area-of-affect";

const largerIslandMap = [
  ["-1", "-1", "0", "0", "-1", "-1"],
  ["0", "1", "0", "0", "1", "1"],
  ["0", "1", "1", "0", "0", "-1"],
  ["-1", "0", "0", "0", "1", "1"],
  ["-1", "0", "0", "1", "1", "-1"],
  ["-1", "-1", "0", "0", "-1", "-1"],
];
const islandPalette = [
  { hex: "lightblue", id: 0 },
  { hex: "darkgreen", id: 1 },
  { hex: "lightgreen", id: 2 },
];

export const Island = (grid, palette) => {
  if (!grid || !grid.length || !grid[0].length) {
    return null;
  }

  const ROWS = grid.length;
  const COLS = grid[0].length;

  let islandCount = 0;
  let gridTiles = [];

  // depth first search with recursion
  const markVisited = (x, y) => {
    // if out of bounds or already visited or water
    if (x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] !== 1) return;

    grid[x][y] = 2; // marks it visted replacing the value with 2

    markVisited(x + 1, y);
    markVisited(x, y + 1);
    markVisited(x - 1, y);
    markVisited(x, y - 1);
  };

  for (let i = 0; i < ROWS; i++) {
    const tiles = [];
    for (let j = 0; j < COLS; j++) {
      const value = grid[i][j];

      const validPalette = palette ? palette : defaultPalette;

      const tileColor =
        value === -1
          ? "transparent"
          : validPalette?.find((tile) => tile.id === value).hex;

      const id = `${i}${j}`;

      const model = { fill: tileColor, value, id };

      if (value === 1) {
        islandCount += 1;
        markVisited(i, j);
      }
      tiles.push(<Tile model={model} setSelected={setSelected}></Tile>);
    }
    gridTiles.push(<GridRow styles={styles} tiles={tiles} index={`${i}`} />);
  }

  return <Column>{gridTiles}</Column>;
};

const IslandTileGridStory = () => {
  const island = getMapNewGrid(largerIslandMap);
  const { islandCount, gridTiles } = getIsland(island, islandPalette);
  console.log("island", island);

  if (!island) {
    return null;
  }

  return (
    <Column>
      <Paragraph>Islands</Paragraph>
      {/* <Column>{gridTiles}</Column> */}
      <Island palette={islandPalette} grid={island} />
      <Paragraph>Island count: {islandCount}</Paragraph>
    </Column>
  );
};

export default IslandTileGridStory;
/*
const IslandTileGridStory = () => {
  return <div>hi</div>;
};

export default IslandTileGridStory;
*/
