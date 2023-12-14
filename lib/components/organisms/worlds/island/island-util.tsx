// @ts-nocheck
//import { AgnosticRowOfTiles as RowOfTiles, AgnosticTile as Tile } from './agnostic-acre';
import { Row, Tile } from '../../../..';

// utils
import { ColourUtil } from '../../../../utils';

// styles
//import { Column, Row, Tile, SubHeadline, Paragraph, List, ListItem, Link, RelatedArticles } from '../../components';
import styles from './island-story.module.css';

export const RowOfTiles = ({ tiles, key, styles }) => {
  return (
    <Row customClass={styles.row} key={key}>
      {tiles}
    </Row>
  );
};

const islandMap = [
  ['0', '0', '0', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '1', '1', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const largerIslandMap = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '1', '1', '1', '0', '1', '1'],
  ['0', '1', '1', '0', '0', '1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '1', '1', '0', '0', '1', '0'],
  ['0', '0', '0', '1', '1', '1', '1', '0', '1', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

export const getMapNewGrid = grid => {
  const islandDigitMap = [];
  for (let i = 0; i < grid.length; i++) {
    if (!islandDigitMap[i]) {
      islandDigitMap[i] = [];
    }
    for (let j = 0; j < grid[i].length; j++) {
      if (!islandDigitMap[i][j]) {
        islandDigitMap[i][j] = [];
      }
      const value = Number(grid[i][j]);
      islandDigitMap[i][j] = value;
    }
  }

  return islandDigitMap;
};

const islandDigitMap = getMapNewGrid(islandMap);
const largestIslandDigitMap = getMapNewGrid(islandMap);

const setSelected = tile => {
  console.log('setSelected tile: ', tile);
};

// https://leetcode.com/problems/max-area-of-island/

type GridIsland = {
  grid: any;
  GridTile: any;
  GridRow: any;
};

const defaultPalette = ColourUtil.getSplashPalette();

type GridResponseType = {
  islandCount: number;
  gridTiles: JSX.Element;
};

/**
 * provide to the ability to accept a grid and return an island count as well as the tiles
 * @param {string[]} grid - a 2d array of strings
 * @param {JSX.Element} GridTile - a component
 * @param {JSX.Element} GridRow - a component
 * @param {string[]} palette - an array of strings
 * @returns {GridResponseType} response
 */
export const getIsland = (grid, GridTile = Tile, GridRow = RowOfTiles, palette): GridIsland => {
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

      const tileColor = value === -1 ? 'transparent' : palette.find(tile => tile.id === value).hex;
      console.log('tileColor: ', tileColor);
      const id = `${i}${j}`;

      const model = { fill: tileColor, value, id };

      if (value === 1) {
        islandCount += 1;
        markVisited(i, j);
      }
      tiles.push(<GridTile model={model} setSelected={setSelected}></GridTile>);
    }
    gridTiles.push(<GridRow styles={styles} tiles={tiles} key={`${i}`} />);
  }

  return { islandCount, gridTiles };
};

export const getLargestIsland = grid => {
  const recurseArea = (rowIdx, colIdx) => {
    if (
      rowIdx < 0 ||
      rowIdx >= grid.length ||
      colIdx < 0 ||
      colIdx >= grid[0].length ||
      grid[rowIdx][colIdx] === 2 ||
      grid[rowIdx][colIdx] === 0
    ) {
      return 0;
    }

    grid[rowIdx][colIdx] = 2;

    const newTotal =
      1 +
      recurseArea(rowIdx + 1, colIdx) +
      recurseArea(rowIdx - 1, colIdx) +
      recurseArea(rowIdx, colIdx - 1) +
      recurseArea(rowIdx, colIdx + 1);
    return newTotal;
  };

  const maxAreaOfIsland = grid => {
    let ans = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        ans = Math.max(ans, recurseArea(r, c));
      }
    }
    return ans;
  };

  const largestIslandArea = maxAreaOfIsland(grid);

  return largestIslandArea;
};
