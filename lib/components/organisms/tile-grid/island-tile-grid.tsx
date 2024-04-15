// @ts-nocheck
import { Tile, Column } from "../../../";
import { ColourUtil } from "../../../utils";
import styles from "./island-tile-grid.module.css";
import { GridRow } from "./grid-row";

export const IslandTileGrid = ({ grid, palette }) => {
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

export default IslandTileGrid;
