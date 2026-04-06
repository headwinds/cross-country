import { ItemModel } from "./ItemModel";

export interface SpellModel extends ItemModel {
  type: "spell";
  power: number;
  cost: number; // mana cost
  modifies: string; // the type of stat that the spell modifies ie - health, mana, etc.
  duration?: number; // the duration of the spell in seconds
  cooldown?: number; // the cooldown of the spell in seconds
  castTime?: number; // the cast time of the spell in seconds
  range?: number; // the range of the spell in meters
  areaOfEffect?: number; // the area of effect of the spell in meters
}

export const defaultSpell: SpellModel = {
  item_id: "",
  name: "Basic Spell",
  description: "A basic magical spell.",
  type: "spell",
  rarity: "common",
  value: 50,
  weight: 0,
  stackable: false,
  max_stack: 1,
  consumable: false,
  author_id: "",
  created_at: new Date().toISOString(),
  power: 10,
  cost: 5,
  modifies: "health",
};
