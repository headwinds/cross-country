import { WeaponModel } from "./WeaponModel";
import { ShieldModel } from "./ShieldModel";
import { SpellModel } from "./SpellModel";
import { ViceModel } from "./ViceModel";
import { SkillModel } from "./SkillModel";
import { ToolModel } from "./ToolModel";
import { ProfessionModel } from "./ProfessionModel";

export interface EnemyModel {
  id: number;
  type: string;
  name: string;
  health: number;
  weapon: WeaponModel;
  shield: ShieldModel;
  speed: number;
  accuracy: number;
  skin: string;
  spells: SpellModel[];
  level: number;
  profession: ProfessionModel;
  tools: ToolModel[];
  skills: SkillModel[];
  vices: ViceModel[];
}
