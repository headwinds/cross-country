import { useSpring, animated } from '@react-spring/web';
import { Hunter } from '../../../';

export default function AnimateActor({ actorComponentName, targetPosition = { x: 100, y: 200, z: 0 } }) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: targetPosition,
    });
  };

  const tileSize = 50;

  const renderActor = () => {
    switch (actorComponentName) {
      case 'Hunter':
        return <Hunter />;
      default:
        return <Hunter />;
    }
  };

  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: tileSize,
        height: tileSize,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    >
      {renderActor()}
    </animated.div>
  );
}
