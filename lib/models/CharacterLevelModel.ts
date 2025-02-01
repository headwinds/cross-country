import { LevelModel } from "./LevelModel";

export interface CharacterLevelModel extends LevelModel {
  requiredExperience: number;
  currentExperience: number;
  level: number;
  type: string;
}

export const defaultLevel: CharacterLevelModel = {
  id: 0,
  currentExperience: 0,
  requiredExperience: 100,
  level: 1,
  type: "character",
};
