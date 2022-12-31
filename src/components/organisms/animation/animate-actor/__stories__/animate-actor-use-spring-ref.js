import { useState } from 'react';
import { animated, useTransition, useSpring, useChain, useSpringRef, config } from '@react-spring/web';
import { Wisp, Hunter, Column, Row, Warrior, Cleric, Wizard, Button } from '../../../../';

const AnimateActorUseSpringRef = ({ actorComponentName = 'cleric', targetPosition = { x: 100, y: 200, z: 0 } }) => {
  const springRef = useSpringRef();
  const [isDisabled, setDisabled] = useState(false);

  const [props, api] = useSpring(
    () => ({
      ref: springRef,
      from: { x: 0, y: 0, z: 0 },
    }),
    []
  );

  const moveRight = distance => {
    const { x, y, z } = props;
    const curX = x.get();
    const newDistanceRight = curX + distance;
    const to = { x: newDistanceRight };

    // we can tweak these settings to produce different results
    // const { default, stiff, wobbly, slow, molasses, gentle } = config;
    //const defaultConfig = { mass: 1, tension: 170, friction: 26 };

    api.start({
      to,
      onStart: () => console.log('the spring has started'),
      onChange: () => console.log('the spring has frame changed'),
      onRest: () => console.log('the spring has reached rest'),
      onPause: () => console.log('the spring has paused'),
      onResume: () => console.log('the spring has resumed'),
      config: config.slow,
    });
  };

  const move = direction => {
    moveRight(100);
  };

  const handleClick = () => {
    if (!isDisabled) {
      const { x, y, z } = props;
      // limit the space that the actor can move
      if (x.get() <= 100) {
        move();
      }
    }
    setDisabled(true);
  };

  const tileSize = 50;

  return (
    <Column>
      <Column customStyle={{ width: 200, height: 100, backgroundColor: 'whitesmoke' }}>
        <animated.div style={props}>
          <Cleric />
        </animated.div>
      </Column>
      <Column customStyle={{ width: 300 }}>
        <Row customStyle={{ alignItems: 'center' }}>
          <Wisp />
          <Button onClick={handleClick}>Move Right +100</Button>
        </Row>
      </Column>
    </Column>
  );
};

export default AnimateActorUseSpringRef;
