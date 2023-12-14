// @ts-nocheck
import React from 'react';
import { Column, Tile, Paragraph } from '../../..';
import { getIsland, getMapNewGrid, RowOfTiles } from './area-of-affect';
// utils
import { ColourUtil } from '../../../../utils';

const AreaOfEffectStory = () => {
  const palette = ColourUtil.getSplashPalette();

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
  const island = getMapNewGrid(largerIslandMap);
  const { islandCount, gridTiles } = getIsland(island, Tile, RowOfTiles, islandPalette);

  return (
    <Column>
      <Paragraph>Islands</Paragraph>
      <Column>{gridTiles}</Column>
      <Paragraph>Island count: {islandCount}</Paragraph>
    </Column>
  );
};

export default AreaOfEffectStory;
