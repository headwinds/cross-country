import { useState } from 'react';
import { animated, useTransition, useSpring, useChain, useSpringRef, config } from '@react-spring/web';
import { Wisp, Hunter, Column, Row, Warrior, Cleric, Wizard, Button } from '../../../../';

const AnimateActorUseChain = ({ actorComponentName = 'cleric', targetPosition = { x: 100, y: 200, z: 0 } }) => {
  const springRef = useSpringRef();
  const [isDisabled, setDisabled] = useState(false);

  const [props, api] = useSpring(
    () => ({
      ref: springRef,
      from: { x: 0, y: 0, z: 0 },
    }),
    []
  );

  const move = distance => {
    //moveRight(100);
    const { x, y, z } = props;
    const curX = x.get();
    const newDistanceRight = curX + distance;
    const newDistanceLeft = newDistanceRight - distance;

    const multipleTo = [{ x: newDistanceRight }, { x: newDistanceLeft }];

    api.start({
      to: multipleTo,
      onRest: () => console.log('move spring has reached rest'),
      config: config.gentle,
      loop: true,
    });
  };

  const handleClick = () => {
    if (!isDisabled) {
      const { x, y, z } = props;
      // limit the space that the actor can move
      if (x.get() <= 100) {
        move(100);
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
      <Column customStyle={{ width: 400 }}>
        <Row customStyle={{ alignItems: 'center' }}>
          <Wisp />
          <Button customStyle={{ width: 200, height: 60 }} onClick={handleClick}>
            Move Right +100 and then back Left -100 looped!
          </Button>
        </Row>
      </Column>
    </Column>
  );
};

export default AnimateActorUseChain;
