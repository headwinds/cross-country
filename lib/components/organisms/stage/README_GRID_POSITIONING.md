# Grid-Based Actor Positioning

This document explains how to use the new grid-based positioning system for actors on the stage.

## Overview

Instead of calculating pixel positions manually, you can now position actors using grid coordinates. The system automatically converts grid coordinates to pixel positions and centers the actor on the specified tile.

## Basic Usage

### 1. Create an Actor with Grid Position

```typescript
import { createActorWithGridPosition } from "@/lib/utils/actor-util";

const actor = createActorWithGridPosition({
  id: 1,
  name: "Hunter",
  variant: "hunter",
  gridPosition: { row: 1, col: 1 }, // Position at grid [1,1]
});
```

### 2. Create Multiple Actors

```typescript
import { createActorsWithGridPositions } from "@/lib/utils/actor-util";

const actors = createActorsWithGridPositions([
  {
    id: 1,
    name: "Hunter",
    variant: "hunter",
    gridPosition: { row: 0, col: 0 }, // Top-left tile
  },
  {
    id: 2,
    name: "Warrior",
    variant: "warrior",
    gridPosition: { row: 0, col: 1 }, // Top-center tile
  },
  {
    id: 3,
    name: "Wisp",
    variant: "wisp",
    gridPosition: { row: 1, col: 1 }, // Center tile
  },
]);
```

### 3. Use with Stage Component

```typescript
import Stage from "@/lib/components/organisms/stage/stage";

// Basic usage
<Stage actorModels={actors} />

// With custom grid configuration
<Stage 
  actorModels={actors} 
  gridConfig={{
    tileSize: 80,
    gapSize: 5,
    totalInRow: 4,
    width: 400,
  }}
/>
```

## Grid Coordinate System

- **Origin**: Top-left tile is at `{ row: 0, col: 0 }`
- **Rows**: Increase downward (0, 1, 2, ...)
- **Columns**: Increase rightward (0, 1, 2, ...)

### Example Grid Layout (3x3)

```
[0,0] [0,1] [0,2]
[1,0] [1,1] [1,2]
[2,0] [2,1] [2,2]
```

## Grid Configuration

The `gridConfig` prop allows you to customize the grid layout:

```typescript
interface GridConfig {
  tileSize: number;    // Size of each tile in pixels
  gapSize: number;     // Gap between tiles in pixels
  totalInRow: number;  // Number of tiles per row
  width: number;       // Total width of the grid container
}
```

### Default Configuration

```typescript
{
  tileSize: 100,
  gapSize: 0,
  totalInRow: 3,
  width: 400,
}
```

## ActorModel Updates

The `ActorModel` now includes an optional `gridPosition` property:

```typescript
interface ActorModel {
  // ... existing properties
  gridPosition?: GridPosition; // New grid-based positioning
  position?: { x: number; y: number; z: number }; // Still supported for backward compatibility
}
```

## Backward Compatibility

- Actors with `position` (pixel coordinates) will continue to work as before
- Actors with `gridPosition` will have their pixel position calculated automatically
- If both `position` and `gridPosition` are provided, `gridPosition` takes precedence

## Utility Functions

### `gridToPixelPosition(gridPos, config)`

Converts grid coordinates to pixel position for centering an actor on a tile.

### `pixelToGridPosition(pixelPos, config)`

Converts pixel position to grid coordinates.

### `isValidGridPosition(gridPos, totalRows, totalCols)`

Validates if a grid position is within the grid bounds.

## Examples

See `StageGridExample` component for complete usage examples.

## Migration from Pixel Positioning

If you're migrating from pixel positioning:

1. **Before**: Calculate pixel positions manually
   ```typescript
   const actor = {
     position: { x: 150, y: 150, z: 0 }
   };
   ```

2. **After**: Use grid coordinates
   ```typescript
   const actor = createActorWithGridPosition({
     gridPosition: { row: 1, col: 1 }
   });
   ```

The system automatically handles the conversion and centering of actors on tiles. 