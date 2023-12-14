import { useState } from 'react';
import Tile from './tile';
import Column from '../../atoms/column';
import Button from '../../atoms/button';
import { useSpring, animated } from '@react-spring/web';

const AniamtedTileStory = ({ size = 100, fill = 'blue' }) => {
  const [loop, setLoop] = useState(false);

  const props = useSpring({
    from: { x: 0 },
    to: { x: 360 },
    loop,
    pause: loop,
    //reverse: loop,
  });

  //spring.to({ range: [0, 1], output: ['#000000', '#e45858'], extrapolate: 'clamp' })

  // interpolate values from commong spring
  //const scale = spring.to([0, 1], [1, 2]);
  //const rotation = spring.to([0, 1], [0, Math.PI]);
  //const color = spring.to([0, 1], ['#FFF', '#000']);
  //const emissiveColor = spring.to([0, 1], ['#000000', '#e45858']);

  const fadeInStyles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: {
      duration: 5000,
    },
    loop,
    pause: loop,
  });

  const spinStyle = { transform: props.x.to(value => `rotateZ(${value}deg)`) };

  // {number.to((n) => n.toFixed(0))}
  /*
  const model = {
    fill: colorProps.output.to(value => value),
  };*/

  const springModel = {
    pause: loop,
    loop,
    from: { backgroundColor: 'teal' },
    to: { backgroundColor: 'magenta' },
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001, extrapolate: 'clamp', duration: 1000 },
  };

  return (
    <Column>
      <animated.div
        style={{
          ...spinStyle,
        }}
      >
        <Tile size={size} springModel={springModel} cornerColor="#000" />
      </animated.div>
      <Button
        onClick={() => {
          const newLoop = !loop;
          console.log(newLoop);
          setLoop(newLoop);
        }}
      >
        Loop
      </Button>
    </Column>
  );
};

export default AniamtedTileStory;
