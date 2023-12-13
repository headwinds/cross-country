const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };

export const clericStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 200, y: 200, z: 0 },
  customSkinStyle: { backgroundColor: 'pink' },
  config: defaultConfig,
  customClass: '',
};
