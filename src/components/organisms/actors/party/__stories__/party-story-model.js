const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };

export const hunterStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 50, y: 100, z: 0 },
  customSkinStyle: { backgroundColor: 'forestgreen' },
  config: defaultConfig,
  customClass: '',
};

export const clericStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 125, y: 270, z: 0 },
  customSkinStyle: { backgroundColor: 'hotpink' },
  config: defaultConfig,
  customClass: '',
};

export const warriorStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 25, y: 370, z: 0 },
  config: defaultConfig,
  customClass: '',
};

export const wizardStoryModel = {
  id: 0,
  type: 'humanoid',
  position: { x: 205, y: 100, z: 0 },
  config: defaultConfig,
  customClass: '',
};
