export type ObstacleModel = {
  type: string;
  name: string;
  health: number;
  weapon: string;
  armour: string;
  speed: number;
  accuracy: number;
  requires: string[];
  skin: string;
};

export const defaultObstacle: ObstacleModel = {
  type: "obstacle",
  name: "snow",
  health: 100,
  weapon: "",
  armour: "",
  speed: 0,
  accuracy: 10,
  requires: ["shovel"],
  skin: "",
};
