import Tile from './tile';
import { useState } from 'react';

const TileStory = ({ size = 100, fill = 'blue' }) => {
  const { isSelected, toggleSelected } = useState(false);
  const { isInteractive, toggleInteractive } = useState(false);

  return <Tile size={size} fill={fill} isSelected />;
};

export default TileStory;
