import Tile from '../tile';
import { useState } from 'react';


const TileStory = ({ size = 100, model = { fill: 'green', id: 0 } }) => {
  const { selectedTile, setSelected } = useState(null);

  const handleSelected = tile => {
    console.log('setSelected tile: ', tile);
    setSelected(tile);
  };

  const isSelected = selectedTile ? selectedTile.id === model.id : false;

  return (<Tile size={size} model={model} setSelected={handleSelected} isInteractive />)
}
export default TileStory;

