import WeaponModel from "./WeaponModel";
import ShieldModel from "./ShieldModel";
import SpellModel from "./SpellModel";
import WorldModel from "./WorldModel";
import ProfessionModel from "./ProfessionModel";

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
  type: string;
  alignment: string;
  name: string;
  health: number;
  weapon: WeaponType;
  shield: ShieldType;
  speed: number;
  accuracy: number;
  skin: string;
  spells: SpellModel[];
  level: number;
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
  metabolism: number;
  hunger?: number;
  currentCalories: number;
  vice?: Vice;
  world?: WorldModel;
  ProfessionModel?: ProfessionModel;
}

//export default ActorModel;
