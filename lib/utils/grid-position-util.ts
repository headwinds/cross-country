export interface GridPosition {
  row: number;
  col: number;
}

export interface PixelPosition {
  x: number;
  y: number;
  z: number;
}
// a tile is always a square
export interface GridConfig {
  tileSize: number;
  gapSize: number;
  totalInRow: number;
  totalInCol: number;
  tiles: number[][]; // id for each tile type like 0 = grass, 1 = water, 2 = tree, etc.
}

export interface ActorPositioningConfig {
  actorHeight?: number;
  bottomMargin?: number; // Pixels above tile bottom to position actor bottom
}

/**
 * Converts grid coordinates to pixel position for centering an actor on a tile
 * @param gridPos - Grid coordinates {row, col}
 * @param config - Grid configuration including tile size, gap, etc.
 * @returns Pixel position {x, y, z} for centering the actor on the tile
 */
export const gridToPixelPosition = (
  gridPos: GridPosition,
  config: GridConfig
): PixelPosition => {
  const { tileSize, gapSize } = config;

  // Use the tile size directly from config
  const actualTileSize = tileSize;

  // Calculate pixel position for the top-left corner of the tile
  const tileX = gridPos.col * (actualTileSize + gapSize);
  const tileY = gridPos.row * (actualTileSize + gapSize);

  // Center the actor on the tile by adding half the tile size
  const centerX = tileX + actualTileSize / 2;
  const centerY = tileY + actualTileSize / 2;

  return {
    x: centerX,
    y: centerY,
    z: 0,
  };
};

/**
 * Positions an actor on a tile with proper ground alignment
 * Places the actor so their bottom edge sits slightly above the tile bottom
 * @param gridPos - Grid coordinates {row, col}
 * @param config - Grid configuration including tile size, gap, etc.
 * @param actorConfig - Actor positioning configuration
 * @returns Pixel position {x, y, z} for positioning the actor on the tile
 */
export const gridToActorPosition = (
  gridPos: GridPosition,
  config: GridConfig,
  actorConfig: ActorPositioningConfig = {}
): PixelPosition => {
  const { tileSize, gapSize } = config;
  const { actorHeight = 80, bottomMargin = 20 } = actorConfig;

  // Use the tile size directly from config
  const actualTileSize = tileSize;

  // Calculate pixel position for the top-left corner of the tile
  const tileX = gridPos.col * (actualTileSize + gapSize);
  const tileY = gridPos.row * (actualTileSize + gapSize);

  // Center horizontally on the tile
  const centerX = tileX + actualTileSize / 2;

  // Position vertically so actor bottom is 'bottomMargin' pixels above tile bottom
  // Tile bottom is at: tileY + actualTileSize
  // Actor bottom should be at: tileY + actualTileSize - bottomMargin
  // Actor top should be at: (actor bottom) - actorHeight
  const actorTop = tileY + actualTileSize - bottomMargin - actorHeight;

  return {
    x: centerX,
    y: actorTop,
    z: 0,
  };
};

/**
 * Converts pixel position to grid coordinates
 * @param pixelPos - Pixel position {x, y, z}
 * @param config - Grid configuration
 * @returns Grid coordinates {row, col}
 */
export const pixelToGridPosition = (
  pixelPos: PixelPosition,
  config: GridConfig
): GridPosition => {
  const { tileSize, gapSize } = config;

  // Use the tile size directly from config
  const actualTileSize = tileSize;

  // Calculate grid position
  const col = Math.floor(pixelPos.x / (actualTileSize + gapSize));
  const row = Math.floor(pixelPos.y / (actualTileSize + gapSize));

  return { row, col };
};

/**
 * Validates if a grid position is within the grid bounds
 * @param gridPos - Grid coordinates {row, col}
 * @param totalRows - Total number of rows in the grid
 * @param totalCols - Total number of columns in the grid
 * @returns Boolean indicating if the position is valid
 */
export const isValidGridPosition = (
  gridPos: GridPosition,
  totalRows: number,
  totalCols: number
): boolean => {
  return (
    gridPos.row >= 0 &&
    gridPos.row < totalRows &&
    gridPos.col >= 0 &&
    gridPos.col < totalCols
  );
};
