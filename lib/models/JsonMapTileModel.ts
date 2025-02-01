import type { TileModel } from "./TileModel";

// TileModelType has number id!

export interface JsonMapTileModelInterface extends Omit<TileModel, "id"> {
  id: string | number;
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
}
