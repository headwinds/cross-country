import { ItemModel } from "./ItemModel";

export interface ToolModel extends ItemModel {
  type: "tool";
  durability: number;
}

export const defaultTool: ToolModel = {
  item_id: "",
  name: "Basic Tool",
  description: "A basic tool.",
  type: "tool",
  rarity: "common",
  value: 15,
  weight: 2,
  stackable: false,
  max_stack: 1,
  consumable: false,
  author_id: "",
  created_at: new Date().toISOString(),
  durability: 100,
};
