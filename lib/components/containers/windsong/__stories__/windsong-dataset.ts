import type { TileModel, TileImageConfig } from "@headwinds/cross-country/models/TileModel";
import type { ActorModel } from "@headwinds/cross-country/models/ActorModel";
import type { ActorSpeechModel } from "@/components/organisms/actors/actor-speech/actor-speech";
import { createImageConfig } from "@/utils/tile-util";

// Character & item skins from public/images
export const skins = {
  rat: createImageConfig("/images/rat.jpg", "jpg", { fit: "cover" }),
  girl: createImageConfig("/images/girl.jpg", "jpg", { fit: "cover" }),
  healingPotion: createImageConfig("/images/healing_potion.jpg", "jpg", { fit: "cover" }),
  traderSword: createImageConfig("/images/trader_sword.jpg", "jpg", { fit: "cover" }),
  troll: createImageConfig("/images/troll.jpg", "jpg", { fit: "cover" }),
  openDoor: createImageConfig("/images/open-door.jpg", "jpg", { fit: "cover" }),
  chicken: createImageConfig("/images/chicken.jpg", "jpg", { fit: "cover" }),
} satisfies Record<string, TileImageConfig>;

// Floor tile using tile-sheet-simple
export const floorSkin = createImageConfig("/images/tile-sheet-simple.jpg", "jpg", {
  fit: "cover",
  position: "center",
});

export type SkinKey = keyof typeof skins;

export interface LevelConfig {
  name: string;
  rows: number;
  cols: number;
  placements: { skin: SkinKey; row: number; col: number }[];
}

// ── Static levels ──────────────────────────────────────────────────

export const backyardLevel: LevelConfig = {
  name: "Backyard",
  rows: 4,
  cols: 4,
  placements: [
    { skin: "girl", row: 0, col: 0 },
    { skin: "chicken", row: 0, col: 3 },
    { skin: "chicken", row: 1, col: 1 },
    { skin: "healingPotion", row: 2, col: 2 },
    { skin: "rat", row: 3, col: 0 },
    { skin: "openDoor", row: 3, col: 3 },
  ],
};

export const dungeonLevel: LevelConfig = {
  name: "Dungeon",
  rows: 5,
  cols: 5,
  placements: [
    { skin: "girl", row: 0, col: 0 },
    { skin: "rat", row: 1, col: 2 },
    { skin: "troll", row: 2, col: 4 },
    { skin: "traderSword", row: 3, col: 1 },
    { skin: "healingPotion", row: 4, col: 3 },
    { skin: "openDoor", row: 4, col: 4 },
  ],
};

export const marketLevel: LevelConfig = {
  name: "Market",
  rows: 4,
  cols: 5,
  placements: [
    { skin: "girl", row: 0, col: 2 },
    { skin: "traderSword", row: 1, col: 0 },
    { skin: "healingPotion", row: 1, col: 4 },
    { skin: "chicken", row: 2, col: 1 },
    { skin: "troll", row: 3, col: 3 },
    { skin: "openDoor", row: 3, col: 4 },
  ],
};

export const allLevels = [backyardLevel, dungeonLevel, marketLevel];

// ── Builders ───────────────────────────────────────────────────────

function buildTileId(row: number, col: number): string {
  return `${row}-${col}`;
}

export function levelToTileModels(level: LevelConfig): TileModel[] {
  const { rows, cols, placements } = level;
  const placementMap = new Map(
    placements.map((p) => [`${p.row}-${p.col}`, p.skin])
  );

  const tiles: TileModel[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r}-${c}`;
      const skinKey = placementMap.get(key);
      const tile: TileModel = {
        id: buildTileId(r, c),
        name: skinKey ?? "floor",
        label: skinKey ?? "",
        fill: "transparent",
        image: skinKey ? skins[skinKey] : floorSkin,
        type: skinKey ? "character" : "floor",
        description: "",
        material: "",
        movement_cost: 0,
        elevation: 0,
        color: "transparent",
        skin: "",
        damage: 0,
        age: -1,
        is_obstacle: false,
        obstacle_remover: "none",
      };
      tiles.push(tile);
    }
  }
  return tiles;
}

// ── Random level generator ─────────────────────────────────────────

const allSkinKeys: SkinKey[] = Object.keys(skins) as SkinKey[];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateRandomLevel(
  rows = 5,
  cols = 5,
  characterCount = 7
): LevelConfig {
  const totalCells = rows * cols;
  const positions: { row: number; col: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      positions.push({ row: r, col: c });
    }
  }

  const shuffled = shuffle(positions);
  const count = Math.min(characterCount, totalCells, allSkinKeys.length);

  const selectedSkins = shuffle(allSkinKeys).slice(0, count);
  const placements = selectedSkins.map((skin, i) => ({
    skin,
    row: shuffled[i].row,
    col: shuffled[i].col,
  }));

  return { name: "Random", rows, cols, placements };
}

// ── Actor models for Stage ─────────────────────────────────────────

export const windsongHunter: ActorModel = {
  id: 0,
  type: "player",
  alignment: "friendly",
  name: "Wanderer",
  health: 100,
  mana: 50,
  level: 1,
  experience: 0,
  variant: "hunter",
  position: { x: 20, y: 20, z: 0 },
  status: "idle",
  image: null,
  gridPosition: { row: 0, col: 0 },
  tileSize: 60,
};

export const windsongSpeech: ActorSpeechModel[] = [
  {
    messageId: "explore",
    values: { ts: Date.now() },
    actorModel: windsongHunter,
    text: "The path ahead is lined with creatures and treasure...",
  },
  {
    messageId: "danger",
    values: { ts: Date.now() },
    actorModel: windsongHunter,
    text: "I hear something growling in the dark.",
  },
  {
    messageId: "victory",
    values: { ts: Date.now() },
    actorModel: windsongHunter,
    text: "The door is open. Onward!",
  },
];
