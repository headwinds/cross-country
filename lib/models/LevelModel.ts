export interface LevelModel {
  id: number;
  name?: string;
  type?: string;
}

export const defaultLevel: LevelModel = {
  id: 0,
  name: "unknown",
  type: "level",
};
