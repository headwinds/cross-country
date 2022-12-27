const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };

export const warriorStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 200, y: 200, z: 0 },
  customSkinStyle: { backgroundColor: 'goldenrod' },
  config: defaultConfig,
  customClass: '',
};
