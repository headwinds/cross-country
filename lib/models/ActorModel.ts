import { Record } from "immutable";

/*
https://twitter.com/kurtruslfanclub/status/1088023995612520449
👻 Desired Player Behaviour
🦇 Appearance Rule
👾 Surprise Structure
🐺 Defeat Requirements
👽 Alert Rules
👹 When to fight / to take flight
*/

import WeaponModel from "./WeaponModel";
import ShieldModel from "./ShieldModel";

const alignments = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];

// http://easydamus.com/alignment.html#theninealignments

const ActorModel = Record({
  id: 0,
  type: "actor",
  alignment: "neutral good",
  name: "",
  health: 100,
  weapon: WeaponModel({ name: "fist", damage: 100 }),
  shield: ShieldModel({ name: "cloak", protection: 100 }),
  speed: 10,
  accuracy: 10,
  skin: "",
  spells: [],
  level: 1,
});

type SpellType = {
  name: string;
  damage: number;
  accuracy: number;
  speed: number;
  type: string;
  description: string;
};

type WeaponType = {
  name: string;
  damage: number;
  accuracy: number;
  speed: number;
  type: string;
  description: string;
};

type ShieldType = {
  name: string;
  protection: number;
  accuracy: number;
  speed: number;
  type: string;
  description: string;
};

export type Vice = {
  name: string;
  description: string;
  effect: string;
  duration: number;
  tolerance: number;
  denial: number;
};

export type ActorType = {
  id: number;
  type?: string;
  alignment?: string;
  name?: string;
  health?: number;
  weapon?: WeaponType;
  shield?: ShieldType;
  speed?: number;
  accuracy?: number;
  skin?: string;
  spells?: Array<SpellType>;
  level?: number;
  tileSize?: number;
  variant?: string;
  position?: { x: number; y: number; z: number };
  customStyle?: {
    position: string;
    zIndex: number;
    left: number;
    top: number;
    backgroundColor: string;
  };
  metabolism: number;
  hunger?: number;
  currentCalories: number;
  vice?: Vice;
};

export default ActorModel;
