export type SpellModel = {
  name: string;
  description?: string;
  power: number;
  cost: number;
  modifies: string; // the type of stat that the spell modifies ie - health, mana, etc.
  duration?: number; // the duration of the spell in seconds
  cooldown?: number; // the cooldown of the spell in seconds
  castTime?: number; // the cast time of the spell in seconds
  range?: number; // the range of the spell in meters
  areaOfEffect?: number; // the area of effect of the spell in meters
};
