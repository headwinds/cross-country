import { forwardRef } from 'react';

import InteractiveTile from './tile-interactive';
import type { TileType, InteractiveTileType } from './types';

const Tile = forwardRef((props: TileType | InteractiveTileType, ref) => {
  const { type } = props;
  switch (type) {
    case 'interactive':
    default:
      return <InteractiveTile {...props} ref={ref} />;
  }
});

export default Tile;
