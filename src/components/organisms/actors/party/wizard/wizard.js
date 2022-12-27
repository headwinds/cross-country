import clsx from 'clsx';
import Actor from '../../actor/';

// pre-configured character
const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };

const defaultModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: 'rebeccapurple' },
  config: defaultConfig,
  customClass: '',
};

const Wizard = ({ model = defaultModel, tileSize }) => {
  const { config, customClass, customSkinStyle = {}, position, type } = model;

  const validConfig = config ?? defaultConfig;

  return (
    <Actor
      type={type}
      config={validConfig}
      position={position}
      customClass={customClass}
      customSkinStyle={{ ...defaultModel.customSkinStyle, ...customSkinStyle }}
      tileSize={tileSize}
    />
  );
};

export default Wizard;
