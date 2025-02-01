export interface PlayerModel {
  name: string;
  skin: string;
  type: string;
  profession: string;
  level: number;
  experience: number;
  staminia: number;
  mana: number;
  health: number;
  core: number;
  xp: number;
  gold: number;
  currency: {
    gold: number;
    silver: number;
    copper: number;
  };
  weapon: {
    name: string;
    damage: number;
  };
  shield: {
    name: string;
    protection: number;
  };
  examining: {
    iconClass: string;
    title: string;
    action: string;
    aroundMe: string;
  };
  inventory: any[]; // Consider defining a specific type for inventory items
  npcsAroundMe: any[]; // Consider defining a specific type for NPCs
  username: string;
}

export const defaultPlayer: PlayerModel = {
  name: "",
  skin: "",
  type: "player",
  profession: "",
  level: 1,
  experience: 0,
  staminia: 100,
  mana: 100,
  health: 100,
  core: 80,
  xp: 100,
  gold: 0,
  currency: {
    gold: 0,
    silver: 0,
    copper: 500,
  },
  weapon: {
    name: "Fist",
    damage: 100,
  },
  shield: {
    name: "Pants",
    protection: 1,
  },
  examining: {
    iconClass: "floor",
    title: "",
    action: "Look",
    aroundMe: "press l to look around",
  },
  inventory: [],
  npcsAroundMe: [],
  username: "",
};
