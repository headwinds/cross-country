import type { JsonMapTileModelInterface } from "@headwinds/cross-country/models/JsonMapTileModel";

/*
the simplyColors function will accept 3 values:
- totalColors - number of colors to generate
- the array of JsonMapTileModelInterface objects to extract colors from
- colorGeneratorType - string to indicate the type of color generation algorithm to use (similar, warm, cold)
- colorArray - array of color hex strings

type SimplifyColorsParams = {
  models: JsonMapTileModelInterface[];
  totalColors?: number;
  colorGeneratorType: "similar" | "warm" | "cold";
  colorArray?: string[];
}

type SimplifyColorsResult = {
  totalOriginalColors: number;
  newArray: JsonMapTileModelInterface[];
};

It will have this signature:
function simplifyColors(
 simpleColorsParams: SimplifyColorsParams
): SimplifyColorsResult

It will return an object containing these properties:
- totalOriginalColors: number - the number of unique colors in the input array
- newArray: JsonMapTileModelInterface[] - an array to match the totalColors requested

If colorArray is not provided, the function will generate a color palette of totalColors length using a color generation algorithm.
*/

export type ColorThemeType = "similar" | "warm" | "cold";

export type SimplifyColorsParams = {
  models: JsonMapTileModelInterface[];
  totalColors?: number;
  colorGeneratorType: ColorThemeType;
  colorArray?: string[];
};

type SimplifyColorsResult = {
  totalOriginalColors: number;
  newArray: JsonMapTileModelInterface[];
};

// Helper to parse RGB strings like "rgb(95, 124, 140)" or hex like "#67bd67"
const parseColor = (color: string): { r: number; g: number; b: number } => {
  if (color.startsWith("rgb")) {
    const matches = color.match(/\d+/g);
    if (matches && matches.length >= 3) {
      return {
        r: parseInt(matches[0]),
        g: parseInt(matches[1]),
        b: parseInt(matches[2]),
      };
    }
  } else if (color.startsWith("#")) {
    const hex = color.slice(1);
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  return { r: 103, g: 189, b: 103 }; // default color
};

// Helper to convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  return `#${clamp(r).toString(16).padStart(2, "0")}${clamp(g)
    .toString(16)
    .padStart(2, "0")}${clamp(b).toString(16).padStart(2, "0")}`;
};

const generateSimilarColors = (
  hex: string,
  surroundingColor: string[]
): string => {
  // Just return the original color for similar
  return hex;
};

const generateWarmColor = (hex: string, surroundingColor: string[]): string => {
  const rgb = parseColor(hex);
  // Shift towards warm (more red/yellow)
  const newR = Math.min(255, rgb.r + 20);
  const newG = Math.min(255, rgb.g + 10);
  const newB = Math.max(0, rgb.b - 10);
  return rgbToHex(newR, newG, newB);
};

const generateColdColor = (hex: string, surroundingColor: string[]): string => {
  const rgb = parseColor(hex);
  // Shift towards cold (more blue)
  const newR = Math.max(0, rgb.r - 10);
  const newG = Math.max(0, rgb.g - 5);
  const newB = Math.min(255, rgb.b + 20);
  return rgbToHex(newR, newG, newB);
};

const generateColor = (
  baseColor: string,
  colorGeneratorType: "similar" | "warm" | "cold",
  surroundingColors: string[]
): string => {
  switch (colorGeneratorType) {
    case "similar":
      return generateSimilarColors(baseColor, surroundingColors);
    case "warm":
      return generateWarmColor(baseColor, surroundingColors);
    case "cold":
      return generateColdColor(baseColor, surroundingColors);
    default:
      return baseColor;
  }
};

const reduceColorSet = (
  uniqueColors: string[],
  totalColors: number
): string[] => {
  if (uniqueColors.length <= totalColors) {
    return uniqueColors;
  }

  const reducedColors: string[] = [];
  const step = Math.floor(uniqueColors.length / totalColors);

  for (let i = 0; i < uniqueColors.length; i += step) {
    reducedColors.push(uniqueColors[i]);
    if (reducedColors.length === totalColors) {
      break;
    }
  }

  return reducedColors;
};

// Helper to calculate color distance (Euclidean distance in RGB space)
const colorDistance = (color1: string, color2: string): number => {
  const rgb1 = parseColor(color1);
  const rgb2 = parseColor(color2);

  return Math.sqrt(
    Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
  );
};

// Find the closest color in the palette
const findClosestColor = (color: string, palette: string[]): string => {
  if (palette.length === 0) return color;

  let closestColor = palette[0];
  let minDistance = colorDistance(color, closestColor);

  for (let i = 1; i < palette.length; i++) {
    const distance = colorDistance(color, palette[i]);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = palette[i];
    }
  }

  return closestColor;
};

export function simplifyColors({
  models,
  totalColors = 4,
  colorGeneratorType = "similar",
  colorArray,
}: SimplifyColorsParams): SimplifyColorsResult {
  const uniqueColorsSet = new Set<string>();
  models.forEach((model) => {
    if (model.color) {
      uniqueColorsSet.add(model.color);
    }
  });

  const uniqueColors = Array.from(uniqueColorsSet);
  const totalOriginalColors = uniqueColors.length;
  const reducedColors = colorArray || reduceColorSet(uniqueColors, totalColors);

  const newArray: JsonMapTileModelInterface[] = models.map((model, index) => {
    const originalColor = model.color || "#67bd67";

    // Find the closest color in the reduced palette
    const closestPaletteColor = findClosestColor(originalColor, reducedColors);

    // Apply color transformation based on type
    const finalColor = generateColor(
      closestPaletteColor,
      colorGeneratorType,
      reducedColors
    );

    return {
      ...model,
      color: finalColor,
    };
  });

  return {
    totalOriginalColors,
    newArray,
  };
}
