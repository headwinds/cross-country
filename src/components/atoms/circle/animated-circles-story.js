import SVG from '../svg';
import AnimatedCircles from './animated-circles';

const AnimatedCirclesStory = () => {
  const svgCustomStyle = {
    border: 'none',
  };
  return (
    <SVG customStyle={svgCustomStyle} width="400" height="400">
      <AnimatedCircles />
    </SVG>
  );
};

export default AnimatedCirclesStory;
