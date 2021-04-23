import { SVG, Circle } from '../../';
import Drone from './drone';

const DroneStory = () => {
  const svgCustomStyle = {
    border: 'none',
  };
  return (
    <SVG customStyle={svgCustomStyle} width="400" height="400">
      <Drone config={{ id: 0 }} />
    </SVG>
  );
};

export default DroneStory;
