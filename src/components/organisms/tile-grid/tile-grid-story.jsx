import TileGrid from './tile-grid';
import Tile from '../../molecules/tile';

const createDemoModels = () => {
  const range = [...Array(64).keys()];
  return range.map(index => {
    return { id: index };
  });
};

const demoModels = createDemoModels();

const TileGridStory = () => <TileGrid models={demoModels} totalInRow={8} Tile={Tile} width="200" />;

export default TileGridStory;
