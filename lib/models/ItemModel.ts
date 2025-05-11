// items are objects that can be picked up and used by the player should includes weapons, shields, potions, tools, etc.
// the inventory is an array of items

// the model is the type of item like weapon, shield, potion, tool, etc. so we use a generic type

import { WeaponModel } from "./WeaponModel";
import { ShieldModel } from "./ShieldModel";
import { ToolModel } from "./ToolModel";
import { SpellModel } from "./SpellModel";

// a potion is a physical spell that can be used by the player to heal or buff them
interface PotionModel extends SpellModel {
  type: "potion";
}

// a food is a physical spell that can be used by the player to heal or buff them ie - apples, bread, mushrooms, etc.
interface FoodModel extends SpellModel {
  type: "food";
}

export type ItemModel<T> = {
  id: number;
  name: string;
  modifies: string;
  by: number;
  type: string;
  skin: string;
  model: T;
};

// convienience types
export type WeaponItemModel = ItemModel<WeaponModel>;
export type ShieldItemModel = ItemModel<ShieldModel>;
export type PotionItemModel = ItemModel<PotionModel>;
export type ToolItemModel = ItemModel<ToolModel>;
