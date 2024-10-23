import { Record } from "immutable";

const TileModel = Record({
  id: "0",
  name: "snowbank",
  label: "",
  description: "",
  material: "snow",
  movement_cost: 0,
  color: 10,
  type: "tile",
  skin: "",
  damage: 0,
  is_obstacle: true,
  obstacle_remover: "shovel",
  fill: "#67bd67",
  elevation: 0,
  age: -1, // doesn't age
});

export type TileModelType = {
  id: string;
  name: string;
  label: string;
  description: string;
  material: string;
  movement_cost: number;
  color: number;
  type: string;
  skin: string;
  damage: number;
  is_obstacle: boolean;
  obstacle_remover: string;
  fill: string;
  elevation: number;
  age: number;
};

export default TileModel;
