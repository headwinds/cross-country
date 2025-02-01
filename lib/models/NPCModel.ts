export type Item = {
  name: string;
  cost: {
    gold: number;
    silver: number;
    copper: number;
  };
  type: string;
};

const defaultItems: Item[] = [
  { name: "Sword", cost: { gold: 0, silver: 0, copper: 30 }, type: "weapon" },
  {
    name: "Health Potion",
    cost: { gold: 0, silver: 0, copper: 30 },
    type: "potion",
  },
  { name: "Shield", cost: { gold: 0, silver: 0, copper: 30 }, type: "shield" },
];

export type NPCModel = {
  id: number;
  name: string;
  description: string;
  profession: string;
  inventory: Item[];
  type: string;
  portrait: string;
  selected: boolean;
  greetings: string[];
  skin: string;
};

export const defaultNPC: NPCModel = {
  id: 0,
  name: "Alspen",
  description: "",
  profession: "Trader",
  inventory: defaultItems,
  type: "npc",
  portrait: "",
  selected: false,
  greetings: ["I have the best deals."],
  skin: "",
};
