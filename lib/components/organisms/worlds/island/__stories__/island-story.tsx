// @ts-nocheck

import React from 'react';
import { Column, Tile, Paragraph, Row } from '../../..';
import { getIsland, getMapNewGrid } from './island-util';
// utils
import { ColourUtil } from '../../../../utils';

const palette = ColourUtil.getSplashPalette();

export const RowOfTiles = ({ tiles, key, styles }) => {
  return (
    <Row customClass={styles.row} key={key}>
      {tiles}
    </Row>
  );
};

type IslandStoryProps = {};

const acreMap = [
  ['-1', '0', '0', '1', '-1'],
  ['-1', '1', '0', '0', '0'],
  ['0', '1', '1', '0', '-1'],
  ['-1', '0', '0', '0', '-1'],
  ['-1', '-1', '0', '-1', '-1'],
];

const largerIslandMap = [
  ['-1', '-1', '0', '0', '-1', '-1'],
  ['0', '1', '0', '0', '1', '1'],
  ['0', '1', '1', '0', '0', '-1'],
  ['-1', '0', '0', '0', '1', '1'],
  ['-1', '0', '0', '1', '1', '-1'],
  ['-1', '-1', '0', '0', '-1', '-1'],
];

const islandPalette = [
  { hex: 'lightblue', id: 0 },
  { hex: 'darkgreen', id: 1 },
  { hex: 'lightgreen', id: 2 },
];

const dunePalette = [
  { hex: '#dbd1b4', id: 0 },
  { hex: '#c2b280', id: 1 },
  { hex: '#a69150', id: 2 },
];

const IslandStory = (props: IslandStoryProps) => {
  const island = getMapNewGrid(largerIslandMap);
  const arrakis = getMapNewGrid(acreMap);
  const { islandCount, gridTiles } = getIsland(island, Tile, RowOfTiles, islandPalette);
  const { islandCount: duneCount, gridTiles: duneGridTiles } = getIsland(arrakis, Tile, RowOfTiles, dunePalette);

  return (
    <Column>
      <Paragraph>Islands</Paragraph>
      <Column>{gridTiles}</Column>
      <Paragraph>Island count: {islandCount}</Paragraph>
      <Paragraph>Dunes</Paragraph>
      <Column>{duneGridTiles}</Column>
      <Paragraph>Dune count: {duneCount}</Paragraph>
    </Column>
  );
};

export default IslandStory;
