# Stage Modding Examples

This document provides practical examples for creating custom tile sets and stage configurations using the Cross Country Stage component.

## Basic Tile Customization

### Using Built-in Themed Tiles

```tsx
import { Stage } from '@headwinds/cross-country';

// Use a predefined color theme (works immediately!)
<Stage 
  actorModels={myActors}
  stageConfig={{
    useImageTiles: false, // Color-based themed tiles
    tileTheme: "coffeeShop"
  }}
/>

// Use mixed random color tiles
<Stage 
  actorModels={myActors}
  stageConfig={{
    useImageTiles: false,
    tileTheme: "mixed" // or omit tileTheme entirely
  }}
/>

// When you have actual image assets
<Stage 
  actorModels={myActors}
  stageConfig={{
    useImageTiles: true,
    customTileModels: myCustomImageTiles
  }}
/>
```

### Available Color Themes

The Stage component comes with pre-built color themes that work immediately:

- **`coffeeShop`**: Warm browns, tans, and coffee tones (wood, stone, fabric)
- **`dungeon`**: Stone grays, gold, purple magic, torch orange (stone, gold, magic, fire) 
- **`spaceStation`**: Metallic grays, cyan energy, steel blue, navy (metal, energy, technology)
- **`westernTown`**: Earth tones, chocolates, siennas, sandy browns (dirt, wood, stone)

Each theme includes 6 different colored tiles that automatically repeat to fill your grid.

### Creating Custom Tile Assets

```tsx
import { createImageConfig, createTileWithImage } from '@headwinds/cross-country/utils/tile-util';

// Custom image configurations
const myCustomAssets = {
  mysticalForest: createImageConfig('/assets/forest-floor.jpg', 'jpg', {
    fit: 'cover',
    opacity: 0.9
  }),
  
  enchantedWater: createImageConfig('/assets/magic-water.png', 'png', {
    fit: 'cover',
    position: 'center'
  }),
  
  // SVG graphics for crisp scaling
  runicStone: createImageConfig('/assets/rune-stone.svg', 'svg', {
    fit: 'contain',
    position: 'center'
  }),
  
  // Repeating patterns
  cobblestone: createImageConfig('/assets/cobbles.jpg', 'jpg', {
    repeat: 'repeat',
    fit: 'none'
  })
};

// Create custom tiles
const customTiles = [
  createTileWithImage('forest-1', 'Mystical Forest Floor', myCustomAssets.mysticalForest, {
    material: 'earth',
    movement_cost: 1,
    is_obstacle: false
  }),
  
  createTileWithImage('water-1', 'Enchanted Pool', myCustomAssets.enchantedWater, {
    material: 'water',
    movement_cost: 3,
    is_obstacle: true
  }),
  
  createTileWithImage('stone-1', 'Ancient Rune Stone', myCustomAssets.runicStone, {
    material: 'stone',
    movement_cost: 0,
    is_obstacle: false
  })
];
```

## Scenario Examples

### 1. Coffee Shop Simulation

```tsx
import { createImageConfig, createTileWithImage } from '@headwinds/cross-country/utils/tile-util';

const coffeeShopAssets = {
  woodFloor: createImageConfig('/assets/cafe/wood-floor.jpg', 'jpg'),
  counter: createImageConfig('/assets/cafe/marble-counter.jpg', 'jpg'),
  seating: createImageConfig('/assets/cafe/leather-booth.png', 'png'),
  entrance: createImageConfig('/assets/cafe/door-mat.png', 'png'),
  kitchen: createImageConfig('/assets/cafe/kitchen-tile.jpg', 'jpg'),
  outdoorSeating: createImageConfig('/assets/cafe/patio-deck.jpg', 'jpg')
};

const coffeeShopTiles = [
  createTileWithImage('floor-main', 'Main Floor', coffeeShopAssets.woodFloor, {
    material: 'wood',
    movement_cost: 1
  }),
  createTileWithImage('counter-area', 'Service Counter', coffeeShopAssets.counter, {
    material: 'stone',
    movement_cost: 2
  }),
  createTileWithImage('booth-1', 'Customer Seating', coffeeShopAssets.seating, {
    material: 'fabric',
    movement_cost: 1
  })
];

// Use in your component
<Stage 
  actorModels={[baristaActor, customerActor]}
  stageConfig={{
    customTileModels: coffeeShopTiles,
    useImageTiles: true
  }}
/>
```

### 2. Fantasy Dungeon

```tsx
const dungeonAssets = {
  stoneFloor: createImageConfig('/assets/dungeon/stone-floor.png', 'png'),
  treasureChest: createImageConfig('/assets/dungeon/chest.svg', 'svg', {
    fit: 'contain'
  }),
  magicCircle: createImageConfig('/assets/dungeon/magic-circle.png', 'png', {
    opacity: 0.8
  }),
  torchLight: createImageConfig('/assets/dungeon/torch-glow.png', 'png', {
    opacity: 0.6,
    fit: 'cover'
  }),
  spiderWeb: createImageConfig('/assets/dungeon/web.png', 'png', {
    opacity: 0.7,
    position: 'top-right'
  })
};

const dungeonTiles = [
  createTileWithImage('floor-1', 'Ancient Stone Floor', dungeonAssets.stoneFloor, {
    material: 'stone',
    movement_cost: 1,
    elevation: 0
  }),
  createTileWithImage('treasure-1', 'Treasure Chamber', dungeonAssets.treasureChest, {
    material: 'gold',
    movement_cost: 1,
    is_obstacle: false
  }),
  createTileWithImage('ritual-1', 'Summoning Circle', dungeonAssets.magicCircle, {
    material: 'magic',
    movement_cost: 2,
    damage: 5 // Standing here causes damage
  })
];
```

### 3. Sci-Fi Space Station

```tsx
const spaceStationAssets = {
  metalGrating: createImageConfig('/assets/scifi/metal-grating.jpg', 'jpg'),
  hologramPad: createImageConfig('/assets/scifi/hologram-platform.png', 'png', {
    opacity: 0.9
  }),
  energyConduit: createImageConfig('/assets/scifi/energy-lines.svg', 'svg', {
    fit: 'cover'
  }),
  viewPort: createImageConfig('/assets/scifi/space-window.jpg', 'jpg'),
  controlPanel: createImageConfig('/assets/scifi/control-surface.png', 'png')
};

const spaceStationTiles = [
  createTileWithImage('corridor-1', 'Main Corridor', spaceStationAssets.metalGrating, {
    material: 'metal',
    movement_cost: 1
  }),
  createTileWithImage('holo-1', 'Hologram Bay', spaceStationAssets.hologramPad, {
    material: 'energy',
    movement_cost: 1
  }),
  createTileWithImage('view-1', 'Observation Deck', spaceStationAssets.viewPort, {
    material: 'reinforced_glass',
    movement_cost: 1
  })
];
```

## Advanced Customization

### Layered Backgrounds

```tsx
// Use backgroundImage for base layer, image for overlay
const layeredTile = createTileWithImage('complex-1', 'Layered Tile', 
  // Primary image (overlay)
  createImageConfig('/assets/effect-overlay.png', 'png', {
    opacity: 0.7,
    fit: 'cover'
  }),
  {
    material: 'composite',
    // Background image (base layer)
    backgroundImage: createImageConfig('/assets/base-texture.jpg', 'jpg', {
      fit: 'cover'
    })
  }
);
```

### Interactive Tile States

```tsx
const interactiveTile = createTileWithImage('switch-1', 'Pressure Plate',
  createImageConfig('/assets/pressure-plate-off.png', 'png'),
  {
    material: 'mechanism',
    movement_cost: 1,
    // Custom data for game logic
    metadata: {
      isActivated: false,
      activatedImage: '/assets/pressure-plate-on.png',
      triggerFunction: 'openDoor'
    }
  }
);
```

### Performance Optimization

```tsx
// For repeating patterns, use smaller files with repeat
const efficientGrass = createImageConfig('/assets/grass-tile-64x64.jpg', 'jpg', {
  repeat: 'repeat',
  fit: 'none' // Don't scale, just repeat
});

// For detailed unique tiles, use appropriate formats
const detailedArtwork = createImageConfig('/assets/unique-altar.png', 'png', {
  fit: 'cover'
});

// For scalable graphics, prefer SVG
const iconTile = createImageConfig('/assets/waypoint-marker.svg', 'svg', {
  fit: 'contain'
});
```

## Asset Organization Best Practices

### Directory Structure
```
public/assets/tiles/
├── natural/
│   ├── grass.png
│   ├── water.jpg
│   └── stone.jpg
├── urban/
│   ├── concrete.jpg
│   ├── asphalt.png
│   └── brick.jpg
├── fantasy/
│   ├── dungeon-floor.png
│   ├── treasure-chest.svg
│   └── magic-circle.png
└── scifi/
    ├── metal-grating.jpg
    ├── hologram-pad.png
    └── energy-core.svg
```

### Asset Guidelines

- **JPG**: Use for photorealistic textures and backgrounds
- **PNG**: Use for graphics with transparency and overlays  
- **SVG**: Use for icons, symbols, and scalable graphics
- **WebP**: Use for modern browsers requiring smaller file sizes

### Resolution Recommendations

- **Standard tiles**: 100x100px to 200x200px
- **Detailed tiles**: Up to 512x512px for special features
- **Repeating patterns**: 64x64px or 128x128px for seamless tiling
- **SVG graphics**: Vector-based, automatically scalable

## Integration Examples

### Complete Stage Setup

```tsx
import React from 'react';
import { Stage } from '@headwinds/cross-country';
import { myCustomTiles } from './my-tile-configs';
import { myActors } from './my-actors';
import { myDialogue } from './my-dialogue';

const MyGameStage = () => {
  const [currentGameState, setCurrentGameState] = React.useState('intro');
  
  return (
    <Stage
      actorSpeech={myDialogue}
      actorModels={myActors}
      currentGameState={currentGameState} // For game state recovery
      gridConfig={{
        tileSize: 120,
        gapSize: 2,
        totalInRow: 4,
        width: 500
      }}
      stageConfig={{
        customTileModels: myCustomTiles,
        useImageTiles: true,
        customStyle: {
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          padding: '10px'
        }
      }}
    />
  );
};
```

### Game State Management

The new `currentGameState` prop enables save/load functionality:

```tsx
// Example game script with state points
const gameScript = [
  {
    messageId: "intro",
    name: "protagonist",
    text: "Our journey begins here...",
  },
  {
    messageId: "checkpoint_1", 
    name: "guide",
    text: "You've reached the first milestone!",
  },
  {
    messageId: "boss_encounter",
    name: "villain", 
    text: "You cannot pass!",
  },
  {
    messageId: "victory",
    name: "protagonist",
    text: "The realm is saved!",
  }
];

// Save game state
localStorage.setItem('gameState', 'checkpoint_1');

// Load game state  
const savedState = localStorage.getItem('gameState') || 'intro';

<Stage
  actorSpeech={gameScript}
  actorModels={myActors}
  currentGameState={savedState} // Resume from saved position
  stageConfig={myStageConfig}
/>
```

### Actor Positioning Configuration

Fine-tune how actors sit on tiles with configurable positioning:

```tsx
<Stage
  actorModels={myActors}
  stageConfig={{
    useImageTiles: true,
    tileTheme: "coffeeShop",
    // Actor positioning configuration
    actorPositioning: {
      actorHeight: 80,      // Height of your actors in pixels
      bottomMargin: 20,     // Space between actor bottom and tile bottom
    }
  }}
/>
```

#### Positioning Examples

```tsx
// Standard positioning (default)
actorPositioning: {
  actorHeight: 80,
  bottomMargin: 20,  // Actors sit nicely on tiles
}

// Floating/hovering effect
actorPositioning: {
  actorHeight: 80,
  bottomMargin: 40,  // Actors appear to float above tiles
}

// Ground-level positioning
actorPositioning: {
  actorHeight: 80,
  bottomMargin: 5,   // Actors sit very close to tile surface
}

// Tall character configuration
actorPositioning: {
  actorHeight: 120,  // Taller actors
  bottomMargin: 15,  // They extend above tiles dramatically
}
```

#### When to Adjust Positioning

- **Different actor sizes**: Adjust `actorHeight` for custom actor designs
- **Visual style preferences**: Use `bottomMargin` to achieve the look you want
- **Tile theme coordination**: Some themes may look better with different positioning
- **Dramatic effect**: Tall actors with low margins create imposing presence

This modding system allows you to create rich, immersive environments that bring your stories to life. Start with simple color tiles, then gradually enhance your scenes with custom images as your project evolves!