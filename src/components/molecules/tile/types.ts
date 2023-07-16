export type TileType = {
  isSelected?: boolean;
  setSelected?: (model: any) => void;
  customClass?: string;
  size?: number;
  cornerColor?: string;
  customStyle?: any;
  type?: string;
  model?: any;
  borderRadius?: number;
  children?: React.ReactElement | React.ReactElement[];
};

export type InteractiveTileType = TileType & {
  isInteractive?: boolean;
  springModel?: any;
};
