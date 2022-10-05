import clsx from 'clsx';
import Actor from '../../actor/';

// pre-configured character
const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };
const defaultModel = { id: 0, type: 'hunter', customStyle: {}, config: defaultConfig };

const Hunter = ({ position, customClass = '', model = defaultModel, tileSize }) => {
  const { config, customStyle } = model;

  const validConfig = config ?? defaultConfig;

  return (
    <Actor
      config={validConfig}
      position={position}
      customClass={customClass}
      customStyle={customStyle}
      tileSize={tileSize}
    />
  );
};

export default Hunter;
