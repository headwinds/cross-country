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
  customSkinStyle: { backgroundColor: 'pink' },
  config: defaultConfig,
  customClass: '',
};

// TODO: add a actor type - use generics! Actor<Cleric>
const Cleric = ({ model = defaultModel, tileSize }: any) => {
  const { config, customClass, customSkinStyle, customTileStyle, position, type } = model;

  const validConfig = config ?? defaultConfig;

  return (
    <Actor
      type={type}
      config={validConfig}
      position={position}
      customClass={customClass}
      customTileStyle={customTileStyle}
      customSkinStyle={{ ...defaultModel.customSkinStyle, ...customSkinStyle }}
      tileSize={tileSize}
    />
  );
};

export default Cleric;
