import { forwardRef } from "react";

import InteractiveTile from "./tile-interactive";
import type { TileType, InteractiveTileType } from "./types";

export interface TileProps extends TileType, InteractiveTileType {}

const Tile = forwardRef((props: TileProps, ref) => {
  const { type } = props;
  switch (type) {
    case "interactive":
    default:
      return <InteractiveTile {...props} ref={ref} />;
  }
});

export default Tile;
