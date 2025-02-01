import { SkillModel } from "./SkillModel";
import { ToolModel } from "./ToolModel";
import { SpellModel } from "./SpellModel";

export type ProfessionModel = {
  name: string;
  description: string;
  skills: SkillModel[];
  tools: ToolModel[];
  spells: SpellModel[];
};
