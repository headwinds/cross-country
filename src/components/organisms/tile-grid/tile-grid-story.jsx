import TileGrid from './tile-grid';
import Tile from '../../molecules/tile';

const createDemoModels = () => {
  //const range = [...Array(64).keys()]; // chess!
  const range = [...Array(12).keys()]; // chess!
  return range.map(index => {
    return { id: index };
  });
};

const demoModels = createDemoModels();

const TileGridStory = () => <TileGrid models={demoModels} totalInRow={3} Tile={Tile} />;

export default TileGridStory;
