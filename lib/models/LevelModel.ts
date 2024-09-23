import { Record } from "immutable";

const LevelModel = Record({
  id: 0,
  name: "Bellwoods",
  exits: 5,
  exitsComplete: 0,
  questsComplete: 0,
  type: "dungeon",
});

export type LevelModelType = typeof LevelModel;

export default LevelModel;
