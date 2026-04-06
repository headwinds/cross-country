/**
 * Item System Models for Game
 * Supports inventory management, crafting, and item combinations
 */

export interface ItemModel {
  item_id: string;
  name: string;
  description: string;
  type: ItemType;
  rarity: ItemRarity;
  value: number;
  weight: number;
  stackable: boolean;
  max_stack: number;
  consumable: boolean;
  effects?: ItemEffect[];
  requirements?: ItemRequirement[];
  author_id: string;
  created_at: string;
}

export type ItemType =
  | "tool" // Tools for crafting and building
  | "material" // Raw materials for crafting
  | "food" // Food items for chickens
  | "seed" // Seeds for growing crops
  | "key" // Keys for unlocking things
  | "container" // Containers for storage
  | "decoration" // Decorative items
  | "special" // Special/unique items
  | "consumable" // One-time use items
  | "equipment" // Equipment for player
  | "weapon" // Weapons
  | "shield" // Shields and armor
  | "spell" // Spells and magic
  | "vice" // Vices and addictions
  | "potion"; // Potions and elixirs

export type ItemRarity =
  | "common" // Basic items
  | "uncommon" // Slightly better items
  | "rare" // Hard to find items
  | "epic" // Very rare items
  | "legendary"; // Unique items

export interface ItemEffect {
  effect_id: string;
  type: EffectType;
  value: number;
  duration?: number; // in turns/seconds
  target: EffectTarget;
  description: string;
}

export type EffectType =
  | "health_boost" // Increase health
  | "speed_boost" // Increase movement speed
  | "luck_boost" // Increase luck/chance
  | "skill_boost" // Increase specific skill
  | "unlock" // Unlock something
  | "reveal" // Reveal hidden information
  | "transform" // Transform something
  | "heal" // Heal damage
  | "feed" // Feed chickens
  | "grow" // Make plants grow
  | "craft" // Enable crafting
  | "repair"; // Repair items

export type EffectTarget =
  | "player" // Affects the player
  | "chicken" // Affects chickens
  | "plant" // Affects plants
  | "item" // Affects items
  | "environment" // Affects the environment
  | "all"; // Affects everything

export interface ItemRequirement {
  requirement_id: string;
  type: RequirementType;
  value: string | number;
  description: string;
}

export type RequirementType =
  | "skill_level" // Requires minimum skill level
  | "item_owned" // Requires owning specific item
  | "quest_completed" // Requires completing quest
  | "location" // Requires being in specific location
  | "time" // Requires specific time/season
  | "weather" // Requires specific weather
  | "chicken_count" // Requires specific number of chickens
  | "coop_level"; // Requires specific coop level

// Inventory Management
export interface InventoryModel {
  inventory_id: string;
  player_id: string;
  items: InventoryItem[];
  max_slots: number;
  max_weight: number;
  current_weight: number;
  created_at: string;
  updated_at: string;
}

export interface InventoryItem {
  item_id: string;
  quantity: number;
  acquired_at: string;
  condition?: number; // 0-100, for items that can degrade
}

// Crafting System
export interface CraftingRecipeModel {
  recipe_id: string;
  name: string;
  description: string;
  result_item: string; // item_id of the result
  result_quantity: number;
  ingredients: CraftingIngredient[];
  tools_required: string[]; // item_ids of required tools
  skill_requirements: SkillRequirement[];
  crafting_time: number; // in seconds
  success_rate: number; // 0-100
  failure_consequences?: CraftingFailure[];
  author_id: string;
  created_at: string;
}

export interface CraftingIngredient {
  item_id: string;
  quantity: number;
  consumed: boolean; // true if ingredient is consumed, false if just required
}

export interface SkillRequirement {
  skill_name: string;
  minimum_level: number;
}

export interface CraftingFailure {
  type: "lose_ingredients" | "damage_tools" | "create_waste" | "no_effect";
  description: string;
  probability: number; // 0-100
}

// Item Combination System
export interface ItemCombinationModel {
  combination_id: string;
  name: string;
  description: string;
  input_items: CombinationInput[];
  output_items: CombinationOutput[];
  location_required?: string;
  tools_required?: string[];
  skill_requirements?: SkillRequirement[];
  success_rate: number;
  failure_consequences?: CombinationFailure[];
  author_id: string;
  created_at: string;
}

export interface CombinationInput {
  item_id: string;
  quantity: number;
  consumed: boolean;
}

export interface CombinationOutput {
  item_id: string;
  quantity: number;
  probability: number; // 0-100, chance of getting this output
}

export interface CombinationFailure {
  type: "lose_items" | "damage_items" | "no_effect" | "negative_effect";
  description: string;
  probability: number;
}

// Default Values
export const defaultItemModel: ItemModel = {
  item_id: "",
  name: "",
  description: "",
  type: "material",
  rarity: "common",
  value: 0,
  weight: 1,
  stackable: true,
  max_stack: 99,
  consumable: false,
  effects: [],
  requirements: [],
  author_id: "",
  created_at: new Date().toISOString(),
};

export const defaultInventoryModel: InventoryModel = {
  inventory_id: "",
  player_id: "",
  items: [],
  max_slots: 20,
  max_weight: 100,
  current_weight: 0,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const defaultCraftingRecipeModel: CraftingRecipeModel = {
  recipe_id: "",
  name: "",
  description: "",
  result_item: "",
  result_quantity: 1,
  ingredients: [],
  tools_required: [],
  skill_requirements: [],
  crafting_time: 30,
  success_rate: 100,
  failure_consequences: [],
  author_id: "",
  created_at: new Date().toISOString(),
};

export const defaultItemCombinationModel: ItemCombinationModel = {
  combination_id: "",
  name: "",
  description: "",
  input_items: [],
  output_items: [],
  location_required: undefined,
  tools_required: [],
  skill_requirements: [],
  success_rate: 100,
  failure_consequences: [],
  author_id: "",
  created_at: new Date().toISOString(),
};

// Utility Functions
export function canCombineItems(
  item1: ItemModel,
  item2: ItemModel,
  combinations: ItemCombinationModel[]
): ItemCombinationModel | null {
  return (
    combinations.find(
      (combo) =>
        combo.input_items.some((input) => input.item_id === item1.item_id) &&
        combo.input_items.some((input) => input.item_id === item2.item_id)
    ) || null
  );
}

export function canCraftItem(
  recipe: CraftingRecipeModel,
  inventory: InventoryModel,
  playerSkills: Record<string, number>
): { canCraft: boolean; missingItems: string[]; missingSkills: string[] } {
  const missingItems: string[] = [];
  const missingSkills: string[] = [];

  // Check ingredients
  for (const ingredient of recipe.ingredients) {
    const inventoryItem = inventory.items.find(
      (item) => item.item_id === ingredient.item_id
    );
    if (!inventoryItem || inventoryItem.quantity < ingredient.quantity) {
      missingItems.push(ingredient.item_id);
    }
  }

  // Check tools
  for (const toolId of recipe.tools_required) {
    const hasTool = inventory.items.some((item) => item.item_id === toolId);
    if (!hasTool) {
      missingItems.push(toolId);
    }
  }

  // Check skills
  for (const skillReq of recipe.skill_requirements) {
    const playerSkill = playerSkills[skillReq.skill_name] || 0;
    if (playerSkill < skillReq.minimum_level) {
      missingSkills.push(skillReq.skill_name);
    }
  }

  return {
    canCraft: missingItems.length === 0 && missingSkills.length === 0,
    missingItems,
    missingSkills,
  };
}

export function calculateInventoryWeight(
  inventory: InventoryModel,
  items: ItemModel[]
): number {
  return inventory.items.reduce((total, invItem) => {
    const item = items.find((i) => i.item_id === invItem.item_id);
    return total + (item ? item.weight * invItem.quantity : 0);
  }, 0);
}

export function getItemById(
  itemId: string,
  items: ItemModel[]
): ItemModel | null {
  return items.find((item) => item.item_id === itemId) || null;
}

export function getItemsByType(
  type: ItemType,
  items: ItemModel[]
): ItemModel[] {
  return items.filter((item) => item.type === type);
}

export function getItemsByRarity(
  rarity: ItemRarity,
  items: ItemModel[]
): ItemModel[] {
  return items.filter((item) => item.rarity === rarity);
}
