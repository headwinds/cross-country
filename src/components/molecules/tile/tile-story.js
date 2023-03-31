import Tile from './tile';
import { useState } from 'react';

const TileStory = ({ size = 100, model = { fill: 'hotpink' } }) => {
  const { isSelected, toggleSelected } = useState(false);
  const { isInteractive, toggleInteractive } = useState(false);

  return <Tile size={size} model={model} isSelected />;
};

export default TileStory;
