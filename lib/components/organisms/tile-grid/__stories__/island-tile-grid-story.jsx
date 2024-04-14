import React, { useRef } from 'react';
import TileGrid from '../tile-grid';
import IslandTileGrid from '../island-tile-grid';
import Tile from '../../../molecules/tile';

const islandMap = [
  ['0', '0', '0', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '1', '1', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()]; // not chess!
  return range.map(index => {
    return { id: index };
  });
};

const demoModels = createDemoModels();

const IslandTileGridStory = () => {
  const tileRefs = useRef([]);
  return <TileGrid models={demoModels} totalInRow={3} Tile={Tile} tileRefs={tileRefs} />;
};

export default IslandTileGridStory;

/*
// @ts-nocheck
import React from 'react';
import { Column, Paragraph } from '../../../../';
import { getIsland, getMapNewGrid } from '../area-of-affect';
// utils
import { ColourUtil } from '../../../../../utils';

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
  const { islandCount, gridTiles } = getIsland(island, islandPalette);

  return (
    <Column>
      <Paragraph>Islands</Paragraph>
      <Column>{gridTiles}</Column>
      <Paragraph>Island count: {islandCount}</Paragraph>
    </Column>
  );
};

export default AreaOfEffectStory;
*/