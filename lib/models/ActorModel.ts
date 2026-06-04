import { WeaponModel } from "./WeaponModel";
import { ShieldModel } from "./ShieldModel";
import { SpellModel } from "./SpellModel";
import { WorldModel } from "./WorldModel";
import { ViceModel } from "./ViceModel";
import { GridPosition } from "../utils/grid-position-util";

export type ActorType = {
  id: number;
  tileSize: number;
  variant: string;
  position: { x: number; y: number; z: number };
  customStyle: { [key: string]: string };
};

// const alignments = [
//   "Lawful Good",
//   "Neutral Good",
//   "Chaotic Good",
//   "Lawful Neutral",
//   "True Neutral",
//   "Chaotic Neutral",
//   "Lawful Evil",
//   "Neutral Evil",
//   "Chaotic Evil",
// ];

// 2025 vs 3450

/*
Actor Model - Simplified & Synced with Backend
- profession: simplified to string (was ProfessionModel)
- level: simplified to number (was CharacterLevelModel)
- Added D&D ability scores: strength, dexterity, constitution, intelligence, wisdom, charisma
- Added: experience, age, stamina, health_modifiers
*/

export interface ActorModel {
  id: number;
  status?: string;
  type?: string;
  alignment?: string;
  name?: string;
  skin?: string;
  color?: string;
  profession?: string; // Simplified from ProfessionModel
  relationship?: string;
  level?: number; // Simplified from CharacterLevelModel
  experience?: number;
  age?: number;
  
  // Core stats
  health?: number;
  mana?: number;
  stamina?: number;
  health_modifiers?: string;
  
  // D&D ability scores
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  
  // Combat & equipment
  weapon?: WeaponModel[];
  shield?: ShieldModel[];
  spells?: SpellModel[];
  speed?: number;
  accuracy?: number;
  
  // Positioning
  tileSize?: number | { width: number; height: number };
  variant?: string;
  position?: { x: number; y: number; z: number };
  gridPosition?: GridPosition;
  customStyle?: {
    position: string;
    zIndex: number;
    left: number;
    top: number;
    backgroundColor: string;
    height?: number;
    width?: number;
    [key: string]: string | number | undefined;
  };
  
  // Survival & world
  metabolism?: number;
  hunger?: number;
  currentCalories?: number;
  vice?: ViceModel[];
  world?: WorldModel;
  
  // Display & customization
  config?: {
    head: { color: string };
    body: { color: string };
    legs: { color: string };
    type: string;
  };
  customClass?: string;
  customSkinStyle?: { [key: string]: string };
  image?: string;        // display URL (resolved from GCS)
  image_id?: string;     // UUID FK → images table in scout DB
}
