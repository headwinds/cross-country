import { WeaponModel } from "./WeaponModel";
import { ShieldModel } from "./ShieldModel";
import { SpellModel } from "./SpellModel";
import { WorldModel } from "./WorldModel";
import { ProfessionModel } from "./ProfessionModel";
import { ViceModel } from "./ViceModel";
import { CharacterLevelModel } from "./CharacterLevelModel";

export type ActorType = {
  id: number;
  tileSize: number;
  variant: string;
  position: { x: number; y: number; z: number };
  customStyle: { [key: string]: string };
};

const alignments = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];

// 2025 vs 3450

export interface ActorModel {
  id: number;
  status?: string;
  type?: string;
  alignment?: string;
  name?: string;
  health?: number;
  weapon?: WeaponModel[];
  shield?: ShieldModel[];
  speed?: number;
  accuracy?: number;
  skin?: string;
  spells?: SpellModel[];
  mana?: number;
  level?: CharacterLevelModel;
  tileSize?: number;
  variant?: string;
  position?: { x: number; y: number; z: number };
  customStyle?: {
    position: string;
    zIndex: number;
    left: number;
    top: number;
    backgroundColor: string;
  };
  metabolism?: number;
  hunger?: number;
  currentCalories?: number;
  vice?: ViceModel[];
  world?: WorldModel;
  ProfessionModel?: ProfessionModel;
}
