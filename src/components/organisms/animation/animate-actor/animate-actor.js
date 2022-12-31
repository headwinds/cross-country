import { animated, useTransition, useSpring, useChain, useSpringRef } from '@react-spring/web';
import { Hunter, Column, Warrior, Cleric, Wizard, Button } from '../../../';

export default function AnimateActor({ actorComponentName = 'cleric', targetPosition = { x: 100, y: 200, z: 0 } }) {
  /*const [positionSprings, api] = useSpring(() => ({
    from: { x: 0, y: 0, z: 0 },
  }));*/
  const springRef = useSpringRef();

  const [positionSprings, api] = useSpring(() => ({
    ref: springRef,
  }));

  const moveUp = distance => {
    const { from } = positionSprings;
    console.log('move up: ', positionSprings);
    const { y } = from;
    const newDistanceUp = y - distance;

    const to = { x: 100, y: newDistanceUp, z: 0 };

    api.start({
      from,
      to,
    });
  };

  const move = direction => {
    moveUp(100);
  };

  const handleClick = () => {
    move();
  };

  const transRef = useSpringRef();

  const actors = ['cleric'];
  const transitions = useTransition(actors, {
    ref: transRef,
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
  });

  //useChain([springRef, transRef]);

  const tileSize = 50;

  const renderActor = actorType => {
    switch (actorType) {
      case 'cleric':
        return <Cleric />;
      case 'warrior':
        return <Warrior />;
      case 'hunter':
        return <Hunter />;
      default:
        return <Wizard />;
    }
  };

  return (
    <Column>
      <Column customStyle={{ width: 400, height: 500, backgroundColor: 'whitesmoke' }}>
        <animated.div
          style={{
            height: tileSize,
            width: tileSize,
            background: 'black',
          }}
        >
          {transitions((style, item) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              {renderActor(item)}
            </animated.div>
          ))}
        </animated.div>
      </Column>
      <Button onClick={handleClick}>Go</Button>
    </Column>
  );
}
