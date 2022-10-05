import { Record } from 'immutable';

const defaultItems = [
  { name: 'Sword', cost: { gold: 0, silver: 0, copper: 30 }, type: 'weapon' },
  { name: 'Health Potion', cost: { gold: 0, silver: 0, copper: 30 }, type: 'potion' },
  { name: 'Shield', cost: { gold: 0, silver: 0, copper: 30 }, type: 'shield' },
];

const NPCModel = Record({
  id: 0,
  name: 'Alspen',
  description: '',
  profession: 'Trader',
  inventory: defaultItems,
  type: 'npc',
  portrait: '',
  selected: false,
  greetings: ['I have the best deals.'],
  skin: '',
});

export default NPCModel;
