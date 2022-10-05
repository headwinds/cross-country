import { Record } from 'immutable';

const WorldModel = Record({
  playerSet: [],
  itemSet: [],
  enemySet: [],
  neutralSet: [],
  npcSet: [],
  shieldSet: [],
  weaponSet: [],
  storySet: [],
  type: 'worldset',
  name: '',
  description: '',
  population: 0,
  skin: '',
  created_on: '',
  updated_on: '',
  bookSet: [],
});

export default WorldModel;
