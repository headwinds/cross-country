import { ItemModel } from "./ItemModel";

export interface ShieldModel extends ItemModel {
  modifies: string;
  by: number;
  type: "shield";
  protection: number;
  skin: string;
}

export const defaultShield: ShieldModel = {
  item_id: "",
  name: "Basic Shield",
  description: "A basic wooden shield.",
  type: "shield",
  rarity: "common",
  value: 30,
  weight: 5,
  stackable: false,
  max_stack: 1,
  consumable: false,
  author_id: "",
  created_at: new Date().toISOString(),
  modifies: "defense",
  by: 2,
  protection: 5,
  skin: "default_shield",
};
