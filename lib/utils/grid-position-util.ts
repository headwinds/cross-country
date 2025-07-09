export interface GridPosition {
  row: number;
  col: number;
}

export interface PixelPosition {
  x: number;
  y: number;
  z: number;
}

export interface GridConfig {
  tileSize: number;
  gapSize: number;
  totalInRow: number;
  width: number;
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
  const { tileSize, gapSize, totalInRow, width } = config;

  // Calculate the actual tile size based on width and total tiles per row
  const actualTileSize = Math.floor(width / totalInRow - gapSize);

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
 * Converts pixel position to grid coordinates
 * @param pixelPos - Pixel position {x, y, z}
 * @param config - Grid configuration
 * @returns Grid coordinates {row, col}
 */
export const pixelToGridPosition = (
  pixelPos: PixelPosition,
  config: GridConfig
): GridPosition => {
  const { tileSize, gapSize, totalInRow, width } = config;

  // Calculate the actual tile size based on width and total tiles per row
  const actualTileSize = Math.floor(width / totalInRow - gapSize);

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
