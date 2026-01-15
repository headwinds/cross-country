import type { TileModel } from "../../../models/TileModel";

export type TileType = {
  isSelected?: boolean;
  setSelected?: (model: any) => void;
  customClass?: string;
  size?: number;
  cornerColor?: string;
  customStyle?: any;
  type?: "interactive" | string;
  model?: TileModel;
  borderRadius?: number;
  children?: React.ReactElement | React.ReactElement[];
};

export type InteractiveTileType = TileType & {
  isInteractive?: boolean;
  springModel?: any;
};
