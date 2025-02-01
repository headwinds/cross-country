import { WeaponType } from "./WeaponModel";
import { ShieldType } from "./ShieldModel";
import { Spell, Vice, Skill, Tool, Profession } from "./ActorModel";

export interface EnemyModel {
  id: number;
  type: string;
  name: string;
  health: number;
  weapon: WeaponType;
  shield: ShieldType;
  speed: number;
  accuracy: number;
  skin: string;
  spells: Spell[];
  level: number;
}

// Optional: You can create a default enemy factory function
export const createDefaultEnemy = (): EnemyModel => ({
  id: 0,
  type: "enemy",
  name: "",
  health: 100,
  weapon: { name: "fist", damage: 100, range: 1 },
  shield: { name: "cloak", defense: 100 },
  speed: 10,
  accuracy: 10,
  skin: "",
  spells: [],
  level: 1,
});

export { EnemyModel };
