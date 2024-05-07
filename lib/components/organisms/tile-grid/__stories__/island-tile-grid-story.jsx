// @ts-nocheck
import React from "react";
import { Column, Paragraph, Tile } from "../../../../";
import { GridRow } from "../grid-row";
import { getIsland, getMapNewGrid } from "./island-util";
import IslandTileGrid from "../island-tile-grid";
import styles from "../tile-grid.module.css";

/*
Isometric
rotateX(60deg) rotateY(0deg) rotateZ(-45deg)
- https://webdesign.tutsplus.com/create-an-isometric-layout-with-3d-transforms--cms-27134t
- https://codepen.io/airen/pen/yabVzR
- https://www.midwinter-dg.com/permalink-css3-isometric-text-demo-2011-03-14.html
*/

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

export const Island = ({ grid, palette }) => {
  if (!grid?.[0]?.length) {
    return null;
  }

  const ROWS = grid.length;
  const COLS = grid[0].length;

  let islandCount = 0;
  const gridTiles = [];

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
      tiles.push(<Tile model={model} setSelected={null}></Tile>);
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
      <IslandTileGrid palette={islandPalette} grid={island} />
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
