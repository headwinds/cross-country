import { ItemModel } from "./ItemModel";

export interface WeaponModel extends ItemModel {
  modifies: string;
  by: number;
  type: "weapon";
  damage: number;
  skin: string;
}

export const defaultWeapon: WeaponModel = {
  item_id: "",
  name: "Generic Weapon",
  description: "A basic weapon.",
  type: "weapon",
  rarity: "common",
  value: 10,
  weight: 3,
  stackable: false,
  max_stack: 1,
  consumable: false,
  author_id: "",
  created_at: new Date().toISOString(),
  modifies: "none",
  by: 0,
  damage: 10,
  skin: "",
};
