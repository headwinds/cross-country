import React, { useState, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stage from "@/components/organisms/stage";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";
import {
  backyardLevel,
  dungeonLevel,
  marketLevel,
  allLevels,
  levelToTileModels,
  generateRandomLevel,
  windsongHunter,
  windsongSpeech,
  type LevelConfig,
} from "./windsong-dataset";

const meta: Meta<typeof Stage> = {
  component: Stage,
  title: "components/windsong/containers/stage",
} satisfies Meta<typeof Stage>;

export default meta;
type Story = StoryObj<typeof Stage>;

const TILE_SIZE = 80;
const GAP = 2;

const stageStyle = (level: LevelConfig) => ({
  display: "flex",
  width: level.cols * (TILE_SIZE + GAP * 2) + 40,
  height: level.rows * (TILE_SIZE + GAP * 2) + 40,
  backgroundColor: "#1a1a2e",
  position: "relative" as const,
});

// ── Backyard ───────────────────────────────────────────────────────

export const Backyard: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={[]}
        actorSpeech={windsongSpeech}
        currentGameState="explore"
        gridConfig={{
          tileSize: TILE_SIZE,
          gapSize: GAP,
          totalInRow: backyardLevel.rows,
          totalInCol: backyardLevel.cols,
          tiles: [],
        }}
        stageConfig={{
          customTileModels: levelToTileModels(backyardLevel),
          totalTiles: backyardLevel.rows * backyardLevel.cols,
          customStyle: stageStyle(backyardLevel),
        }}
      />
    </CrossCountryProvider>
  ),
};

// ── Dungeon ────────────────────────────────────────────────────────

export const Dungeon: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={[windsongHunter]}
        actorSpeech={windsongSpeech}
        currentGameState="danger"
        gridConfig={{
          tileSize: TILE_SIZE,
          gapSize: GAP,
          totalInRow: dungeonLevel.rows,
          totalInCol: dungeonLevel.cols,
          tiles: [],
        }}
        stageConfig={{
          customTileModels: levelToTileModels(dungeonLevel),
          totalTiles: dungeonLevel.rows * dungeonLevel.cols,
          customStyle: stageStyle(dungeonLevel),
        }}
      />
    </CrossCountryProvider>
  ),
};

// ── Market ─────────────────────────────────────────────────────────

export const Market: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={[]}
        actorSpeech={windsongSpeech}
        currentGameState="explore"
        gridConfig={{
          tileSize: TILE_SIZE,
          gapSize: GAP,
          totalInRow: marketLevel.rows,
          totalInCol: marketLevel.cols,
          tiles: [],
        }}
        stageConfig={{
          customTileModels: levelToTileModels(marketLevel),
          totalTiles: marketLevel.rows * marketLevel.cols,
          customStyle: stageStyle(marketLevel),
        }}
      />
    </CrossCountryProvider>
  ),
};

// ── With Fog ───────────────────────────────────────────────────────

export const WithFog: Story = {
  render: () => (
    <CrossCountryProvider>
      <div style={{ position: "relative" }}>
        <Stage
          actorModels={[windsongHunter]}
          actorSpeech={windsongSpeech}
          currentGameState="danger"
          gridConfig={{
            tileSize: TILE_SIZE,
            gapSize: GAP,
            totalInRow: dungeonLevel.rows,
            totalInCol: dungeonLevel.cols,
            tiles: [],
          }}
          stageConfig={{
            customTileModels: levelToTileModels(dungeonLevel),
            totalTiles: dungeonLevel.rows * dungeonLevel.cols,
            customStyle: stageStyle(dungeonLevel),
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </CrossCountryProvider>
  ),
};

// ── Random Levels ──────────────────────────────────────────────────

const RandomLevelStage = () => {
  const [level, setLevel] = useState<LevelConfig>(() => generateRandomLevel());

  const regenerate = useCallback(() => {
    setLevel(generateRandomLevel());
  }, []);

  const tileModels = levelToTileModels(level);

  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <button
          onClick={regenerate}
          style={{
            padding: "8px 16px",
            backgroundColor: "#16213e",
            color: "#e0e0e0",
            border: "1px solid #0f3460",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          New Random Level
        </button>
        <span style={{ color: "#888", fontSize: 13 }}>
          {level.placements.length} characters placed on {level.rows}x
          {level.cols} grid
        </span>
      </div>
      <CrossCountryProvider>
        <Stage
          actorModels={[]}
          actorSpeech={[]}
          gridConfig={{
            tileSize: TILE_SIZE,
            gapSize: GAP,
            totalInRow: level.rows,
            totalInCol: level.cols,
            tiles: [],
          }}
          stageConfig={{
            customTileModels: tileModels,
            totalTiles: level.rows * level.cols,
            customStyle: stageStyle(level),
          }}
        />
      </CrossCountryProvider>
    </div>
  );
};

export const RandomLevels: Story = {
  render: () => <RandomLevelStage />,
};

// ── Level Carousel ─────────────────────────────────────────────────

const LevelCarousel = () => {
  const [index, setIndex] = useState(0);
  const level = allLevels[index];
  const tileModels = levelToTileModels(level);

  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setIndex((i) => (i - 1 + allLevels.length) % allLevels.length)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#16213e",
            color: "#e0e0e0",
            border: "1px solid #0f3460",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Prev
        </button>
        <span style={{ color: "#e0e0e0", fontSize: 15, fontWeight: 600 }}>
          {level.name} ({index + 1}/{allLevels.length})
        </span>
        <button
          onClick={() => setIndex((i) => (i + 1) % allLevels.length)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#16213e",
            color: "#e0e0e0",
            border: "1px solid #0f3460",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
      <CrossCountryProvider>
        <Stage
          actorModels={[]}
          actorSpeech={windsongSpeech}
          currentGameState="explore"
          gridConfig={{
            tileSize: TILE_SIZE,
            gapSize: GAP,
            totalInRow: level.rows,
            totalInCol: level.cols,
            tiles: [],
          }}
          stageConfig={{
            customTileModels: tileModels,
            totalTiles: level.rows * level.cols,
            customStyle: stageStyle(level),
          }}
        />
      </CrossCountryProvider>
    </div>
  );
};

export const AllLevels: Story = {
  render: () => <LevelCarousel />,
};
