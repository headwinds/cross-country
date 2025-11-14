export type TileType = {
  isSelected?: boolean;
  setSelected?: (model: unknown) => void;
  customClass?: string;
  size?: number;
  cornerColor?: string;
  customStyle?: any;
  type?: string;
  model?: unknown;
  borderRadius?: number;
  children?: React.ReactElement | React.ReactElement[];
};

export type InteractiveTileType = TileType & {
  isInteractive?: boolean;
  springModel?: any;
};
