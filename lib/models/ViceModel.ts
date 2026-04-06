import { ItemModel } from "./ItemModel";

export interface ViceModel extends ItemModel {
  type: "vice";
  effect: string;
  duration: number;
  tolerance: number;
  denial: number;
}

export const defaultVice: ViceModel = {
  item_id: "",
  name: "Basic Vice",
  description: "A tempting vice.",
  type: "vice",
  rarity: "common",
  value: 20,
  weight: 0.5,
  stackable: true,
  max_stack: 10,
  consumable: true,
  author_id: "",
  created_at: new Date().toISOString(),
  effect: "none",
  duration: 60,
  tolerance: 0,
  denial: 0,
};
