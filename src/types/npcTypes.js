import weaponTypes from './weaponTypes';
import shieldTypes from './shieldTypes';
import potionTypes from './potionTypes';

const defaultItems = [
	{name: "sword", cost: 30, cost: { gold: 0, silver: 0, copper: 30}, type: "weapon"},
	{name: "health potion", cost: { gold: 0, silver: 0, copper: 30}, type: "potion"},
	{name: "shield", cost: 30, cost: { gold: 0, silver: 0, copper: 30}, type: "shield"},
]

const npcTypes = [
  {
    name: 'Alspen',
    description: '',
    profession: 'Trader',
    inventory: defaultItems,
    type: 'npc',
    portrait: '',
    selected: false,
    greetings: ["I have the best deals."]
  },
];

export default npcTypes;
