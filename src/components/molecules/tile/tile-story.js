import Tile from './tile';
import { useState } from 'react';

const TileStory = () => {
  const { isSelected, toggleSelected } = useState(false);
  const { isInteractive, toggleInteractive } = useState(false);

  return <Tile size="20px" fill="grey" isSelected />;
};

export default TileStory;
