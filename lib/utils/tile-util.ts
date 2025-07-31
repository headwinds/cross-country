import type {
  TileModel,
  TileImageConfig,
} from "@headwinds/cross-country/models/TileModel";

const defaultTile = {
  label: "",
  description: "",
  material: "",
  movement_cost: 0,
  elevation: 0,
  color: "#000",
  skin: "",
  damage: 0,
  age: -1, // doesn't age
  fill: "lightblue",
  name: "",
  type: "default",
  is_obstacle: false,
  obstacle_remover: "none",
  id: "",
};

// Helper function to create image configuration for tiles
export const createImageConfig = (
  url: string,
  type: TileImageConfig["type"] = "png",
  options: Partial<TileImageConfig> = {}
): TileImageConfig => ({
  url,
  type,
  fit: "cover",
  position: "center",
  opacity: 1,
  repeat: "no-repeat",
  ...options,
});

// Example asset configurations for modders
export const exampleAssets = {
  // Natural terrain assets
  grass: createImageConfig("/assets/tiles/grass.png", "png"),
  water: createImageConfig("/assets/tiles/water.png", "png", { fit: "cover" }),
  stone: createImageConfig("/assets/tiles/stone.jpg", "jpg"),
  sand: createImageConfig("/assets/tiles/sand.jpg", "jpg"),

  // Fantasy/RPG assets
  dungeon_floor: createImageConfig("/assets/tiles/dungeon-floor.png", "png"),
  treasure_chest: createImageConfig("/assets/tiles/treasure.svg", "svg", {
    fit: "contain",
  }),
  magical_portal: createImageConfig("/assets/tiles/portal.png", "png", {
    opacity: 0.8,
  }),

  // Modern/Urban assets
  concrete: createImageConfig("/assets/tiles/concrete.jpg", "jpg"),
  wooden_floor: createImageConfig("/assets/tiles/wood-floor.png", "png"),
  carpet: createImageConfig("/assets/tiles/carpet.jpg", "jpg", {
    repeat: "repeat",
  }),

  // Sci-fi assets
  metal_grating: createImageConfig("/assets/tiles/metal-grating.png", "png"),
  hologram_pad: createImageConfig("/assets/tiles/hologram.svg", "svg", {
    opacity: 0.7,
  }),

  // Historical assets
  cobblestone: createImageConfig("/assets/tiles/cobblestone.jpg", "jpg"),
  dirt_path: createImageConfig("/assets/tiles/dirt.png", "png"),
};

// Helper function to create a tile with an image
export const createTileWithImage = (
  id: string,
  name: string,
  imageConfig: TileImageConfig,
  options: Partial<TileModel> = {}
): TileModel => ({
  ...defaultTile,
  id,
  name,
  image: imageConfig,
  fill: "transparent", // Use transparent fill when image is provided
  ...options,
});

// Helper function to create themed tile sets
export const createThemedTileSet = (
  theme: keyof typeof exampleAssets,
  count: number = 9
): TileModel[] => {
  const asset = exampleAssets[theme];
  const range = [...Array(count).keys()];

  return range.map((index) =>
    createTileWithImage(String(index), `${theme}_${index}`, asset, {
      material: theme,
      name: `${theme.replace("_", " ")} tile ${index}`,
    })
  );
};

// Helper function to create a color-based tile (fallback when images aren't available)
export const createColorTile = (
  id: string,
  name: string,
  fill: string,
  options: Partial<TileModel> = {}
): TileModel => ({
  ...defaultTile,
  id,
  name,
  fill,
  color: fill,
  ...options,
});

// Example configurations for different scenarios with color-based tiles
export const scenarioTileSets = {
  // Coffee shop scenario - warm wood and coffee tones
  coffeeShop: [
    createColorTile("0", "wooden_floor", "#8B4513", { material: "wood" }), // SaddleBrown
    createColorTile("1", "counter_tile", "#D2B48C", { material: "stone" }), // Tan
    createColorTile("2", "seating_area", "#654321", { material: "fabric" }), // DarkBrown
    createColorTile("3", "entrance_mat", "#2F1B14", { material: "fabric" }), // VeryDarkBrown
    createColorTile("4", "kitchen_area", "#C0C0C0", { material: "metal" }), // Silver
    createColorTile("5", "window_area", "#F5DEB3", { material: "glass" }), // Wheat
  ],

  // Fantasy dungeon - stone grays and mystical colors
  dungeon: [
    createColorTile("0", "stone_floor", "#696969", { material: "stone" }), // DimGray
    createColorTile("1", "treasure_room", "#FFD700", { material: "gold" }), // Gold
    createColorTile("2", "magic_circle", "#9370DB", { material: "magic" }), // MediumPurple
    createColorTile("3", "dark_corner", "#2F2F2F", { material: "stone" }), // VeryDarkGray
    createColorTile("4", "torch_light", "#FFA500", { material: "fire" }), // Orange
    createColorTile("5", "water_pool", "#1E90FF", { material: "water" }), // DodgerBlue
  ],

  // Sci-fi space station - metallic and energy colors
  spaceStation: [
    createColorTile("0", "hull_plating", "#708090", { material: "metal" }), // SlateGray
    createColorTile("1", "holodeck", "#00FFFF", { material: "energy" }), // Cyan
    createColorTile("2", "corridor", "#4682B4", { material: "composite" }), // SteelBlue
    createColorTile("3", "control_panel", "#000080", {
      material: "technology",
    }), // Navy
    createColorTile("4", "energy_core", "#FF1493", { material: "energy" }), // DeepPink
    createColorTile("5", "airlock", "#2F4F4F", { material: "metal" }), // DarkSlateGray
  ],

  // Historical western town - earth tones and natural colors
  westernTown: [
    createColorTile("0", "main_street", "#DEB887", { material: "dirt" }), // BurlyWood
    createColorTile("1", "wooden_walkway", "#D2691E", { material: "wood" }), // Chocolate
    createColorTile("2", "town_square", "#A0522D", { material: "stone" }), // Sienna
    createColorTile("3", "saloon_floor", "#8B4513", { material: "wood" }), // SaddleBrown
    createColorTile("4", "dusty_path", "#F4A460", { material: "dirt" }), // SandyBrown
    createColorTile("5", "hitching_post", "#654321", { material: "wood" }), // DarkBrown
  ],
};

// Original demo models function (now with enhanced capabilities)
export const createDemoModels = (
  totalModels: number = 9,
  useImages: boolean = false
): TileModel[] => {
  const range = [...Array(totalModels).keys()];

  if (useImages) {
    // Create a mixed set with different themes for demo purposes
    const themes = Object.keys(exampleAssets) as (keyof typeof exampleAssets)[];
    return range.map((index) => {
      const themeIndex = index % themes.length;
      const theme = themes[themeIndex];
      const asset = exampleAssets[theme];

      return createTileWithImage(String(index), `${theme}_demo`, asset, {
        material: theme.replace("_", " "),
      });
    });
  }

  // Fallback to original color-based tiles
  return range.map((index) => {
    return { id: String(index), ...defaultTile } as TileModel;
  });
};
