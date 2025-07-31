export type TileImageConfig = {
  url: string;
  type: "jpg" | "png" | "svg" | "webp";
  fit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  position?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  opacity?: number;
  repeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
};

export type TileModel = {
  id: string;
  name: string;
  label: string;
  description: string;
  material: string;
  movement_cost: number;
  color: string;
  type: string;
  skin: string;
  damage: number;
  is_obstacle: boolean;
  obstacle_remover: string;
  fill: string;
  elevation: number;
  age: number;
  // New image asset properties for modding support
  image?: TileImageConfig;
  backgroundImage?: TileImageConfig; // Alternative background image
};

export const defaultTileModel: TileModel = {
  id: "0",
  name: "snowbank",
  label: "",
  description: "",
  material: "snow",
  movement_cost: 0,
  color: "#67bd67",
  type: "tile",
  skin: "",
  damage: 0,
  is_obstacle: true,
  obstacle_remover: "shovel",
  fill: "#67bd67",
  elevation: 0,
  age: -1, // doesn't age
};
