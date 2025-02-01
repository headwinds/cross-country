import { LevelModel } from "./LevelModel";

export interface DungeonLevelModel extends LevelModel {
  exits: number;
  exitsComplete: number;
  questsComplete: number;
}

export const defaultLevel: DungeonLevelModel = {
  id: 0,
  name: "Bellwoods",
  exits: 5,
  exitsComplete: 0,
  questsComplete: 0,
  type: "dungeon",
};
