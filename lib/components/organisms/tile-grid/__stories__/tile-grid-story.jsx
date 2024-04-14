import React, { useRef } from 'react';
import TileGrid from '../tile-grid';
import Tile from '../../../molecules/tile';

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()]; // not chess!
  return range.map(index => {
    return { id: index };
  });
};

const demoModels = createDemoModels();

const TileGridStory = () => {
  const tileRefs = useRef([]);
  return <TileGrid models={demoModels} totalInRow={3} Tile={Tile} tileRefs={tileRefs} />;
};

export default TileGridStory;
