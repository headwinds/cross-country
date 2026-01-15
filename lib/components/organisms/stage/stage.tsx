import clsx from "clsx";
import React, { useRef, useCallback, useMemo } from "react";
import { Column } from "../../";
import Hunter from "../actors/party/hunter";
import Cleric from "../actors/party/cleric";
import Wizard from "../actors/party/wizard";
import Warrior from "../actors/party/warrior";
import Wisp from "../actors/wisp";
import styles from "./stage.module.css";
import ActorSpeech from "../actors/actor-speech";
import { ActorModel } from "@headwinds/cross-country/models/ActorModel";
import { ActorSpeechModel } from "../actors/actor-speech/actor-speech";
import { CharacterLevelModel } from "@/models";
import TileGrid from "../tile-grid";
import { createDemoModels, scenarioTileSets } from "@/utils/tile-util";
import {
  gridToActorPosition,
  type GridConfig,
  type ActorPositioningConfig,
} from "@/utils/grid-position-util";

type StageConfig = {
  customClass?: string;
  customStyle?: any;
  rest?: any;
  // Tile configuration moved here
  useImageTiles?: boolean;
  tileTheme?:
    | keyof typeof import("@/utils/tile-util").scenarioTileSets
    | "mixed";
  customTileModels?: import("@headwinds/cross-country/models/TileModel").TileModel[];
  totalTiles?: number;
  // Actor positioning configuration
  actorPositioning?: ActorPositioningConfig;
};

const defaultStageConfig: StageConfig = {
  customClass: "",
  customStyle: {},
  rest: {},
  useImageTiles: false,
  tileTheme: "mixed",
  totalTiles: 9,
  actorPositioning: {
    actorHeight: 80,
    bottomMargin: 20,
  },
};

const defaultLevel: CharacterLevelModel = {
  id: 0,
  currentExperience: 0,
  requiredExperience: 100,
  level: 1,
  type: "character",
};

export const defaultActorModel: ActorModel = {
  id: 0,
  type: "player",
  alignment: "friendly",
  name: "Default Hunter",
  health: 100,
  mana: 100,
  level: defaultLevel,
  variant: "hunter",
  position: { x: 0, y: 0, z: 0 },
  status: "idle",
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 120,
    backgroundColor: "green",
  },
  image: null,
};

export interface StageProps {
  actorSpeech?: ActorSpeechModel[];
  actorModels?: ActorModel[];
  gridConfig?: GridConfig; // Grid configuration for positioning
  stageConfig?: StageConfig; // All stage configuration including tiles
  currentGameState?: string; // Game state ID for story position recovery
}

const defaultActorSpeech = [
  {
    messageId: "initial",
    values: { ts: Date.now() },
    actorModel: defaultActorModel,
    text: "Today is a good day to hunt.",
  },
] as ActorSpeechModel[];

// Default grid configuration
const defaultGridConfig: GridConfig = {
  tileSize: 100,
  gapSize: 0,
  totalInRow: 3,
  totalInCol: 3,
  tiles: [],
};

const Stage = ({
  actorSpeech = defaultActorSpeech,
  actorModels = [defaultActorModel],
  gridConfig,
  stageConfig = defaultStageConfig,
  currentGameState = "initial",
}: StageProps) => {
  const [currentGridConfig, setCurrentGridConfig] = React.useState<GridConfig>(
    gridConfig || defaultGridConfig
  );

  const finalGridConfig = gridConfig || currentGridConfig;

  const tileRefs = useRef([]);

  // Extract tile configuration from stageConfig
  const {
    useImageTiles = false,
    tileTheme = "mixed",
    customTileModels,
    totalTiles = finalGridConfig.totalInCol * finalGridConfig.totalInRow,
    actorPositioning = defaultStageConfig.actorPositioning!,
  } = stageConfig;

  const getActor = useCallback(
    (model) => {
      // Convert grid position to pixel position if gridPosition is provided
      let finalModel = { ...model };

      if (model.gridPosition && finalGridConfig) {
        const pixelPosition = gridToActorPosition(
          model.gridPosition,
          finalGridConfig,
          actorPositioning
        );
        finalModel = {
          ...model,
          position: pixelPosition,
        };
      }

      switch (model.variant) {
        case "cleric":
          return (
            <Cleric
              model={finalModel}
              tileSize={model.tileSize}
              key={model.id}
            />
          );
        case "wizard":
          return (
            <Wizard
              model={finalModel}
              tileSize={model.tileSize}
              key={model.id}
            />
          );
        case "wisp":
          return (
            <Wisp model={finalModel} tileSize={model.tileSize} key={model.id} />
          );
        case "warrior":
          return (
            <Warrior
              model={finalModel}
              tileSize={model.tileSize}
              key={model.id}
            />
          );
        case "hunter":
        default:
          return (
            <Hunter
              model={finalModel}
              tileSize={model.tileSize}
              key={model.id}
            />
          );
      }
    },
    [finalGridConfig, actorPositioning]
  );

  // Create tile models based on configuration
  const tileModels = useMemo(() => {
    // Use custom tile models if provided
    if (customTileModels && customTileModels.length > 0) {
      return customTileModels;
    }

    // Check if a specific theme is requested
    if (tileTheme !== "mixed" && tileTheme in scenarioTileSets) {
      // Use a specific predefined theme (works with both color and image tiles)
      const themeModels = scenarioTileSets[tileTheme];
      // Repeat the theme models to fill the grid if needed
      const repeatedModels = [];
      for (let i = 0; i < totalTiles; i++) {
        repeatedModels.push(themeModels[i % themeModels.length]);
      }
      return repeatedModels;
    }

    // Otherwise create based on image preference
    if (useImageTiles) {
      // Use mixed image tiles
      return createDemoModels(totalTiles, true);
    } else {
      // Use traditional color-based tiles
      return createDemoModels(totalTiles, false);
    }
  }, [useImageTiles, tileTheme, customTileModels, totalTiles]);

  const renderActors = useMemo(() => {
    if (!actorModels || actorModels.length === 0 || !Array.isArray(actorModels))
      return null;

    return actorModels.map((model) => getActor(model));
  }, [actorModels, getActor]);

  const Actors = () => {
    return renderActors;
  };

  // Find current speech based on game state
  const currentSpeech = actorSpeech.find(
    (speech) => speech.messageId === currentGameState
  );

  // Find the actor model for the current speaker
  const currentSpeakerName = currentSpeech?.actorModel?.variant;
  const actorModel =
    Array.isArray(actorModels) && currentSpeakerName
      ? actorModels?.find((model) => model.variant === currentSpeakerName)
      : null;

  const handleGridConfigChange = useCallback((newConfig: GridConfig) => {
    setCurrentGridConfig(newConfig);
  }, []);

  /*
  let's consider a 3x3 grid

  we typically position the speech to the top right of the actor but on certain positions we need to adjust the position

  we need to ensure the speech is visible 
  - if the actor is in the 0,0 position, we need to move the speech down
  - if the actor is in the 0,2 position, we need to move the speech to the left
  - if the actor is in the 2,0 position, no change
  - if the actor is in the 2,2 position, we need to move the speech to the left

  */

  const getSpeechPosition = (
    actorModel: ActorModel,
    row: number,
    col: number,
    totalInCol: number,
    totalInRow: number
  ) => {
    if (row === 0 && col === 0) {
      return {
        x: actorModel?.gridPosition.col * 100 + 100,
        y: actorModel?.gridPosition.row * 100 - 100,
      };
    }

    const lastCol = totalInCol - 1;

    if (row === 0 && col === lastCol) {
      return {
        x: actorModel?.gridPosition.col * 100 - 100,
        y: actorModel?.gridPosition.row * 100 - 100,
      };
    }

    const lastRow = totalInRow - 1;

    if (row === lastRow && col === 0) {
      return {
        x: actorModel?.gridPosition.col * 100 + 100,
        y: actorModel?.gridPosition.row * 100 - 100,
      };
    }

    // finally

    const currentSpeechX = actorModel?.gridPosition.col * 100 + 80;
    const currentSpeechY = actorModel?.gridPosition.row * 100 - 60;

    return { x: currentSpeechX, y: currentSpeechY };
  };

  // Only calculate speech position if we have a valid actor model with grid position
  const currentSpeechPosition = actorModel?.gridPosition
    ? getSpeechPosition(
        actorModel,
        actorModel.gridPosition.row,
        actorModel.gridPosition.col,
        finalGridConfig.totalInCol,
        finalGridConfig.totalInRow
      )
    : { x: 0, y: 0 };
  return (
    <Column
      customClass={clsx(styles.stage, stageConfig?.customClass)}
      customStyle={{ ...stageConfig?.customStyle, padding: 0, margin: 0 }}
      {...stageConfig?.rest}
    >
      <TileGrid
        models={tileModels}
        totalInRow={finalGridConfig.totalInRow}
        totalInCol={finalGridConfig.totalInCol}
        gapSize={finalGridConfig.gapSize}
        tileConfig={{
          size: finalGridConfig.tileSize,
          fill: "#67bd67",
          cornerColor: "#5aa85a",
        }}
        tileRefs={tileRefs}
        onGridConfigChange={handleGridConfigChange}
      />
      <Actors />
      {currentSpeech && (
        <ActorSpeech
          speech={currentSpeech}
          position={{
            x: currentSpeechPosition.x,
            y: currentSpeechPosition.y,
          }}
          isVisible={true}
        />
      )}
    </Column>
  );
};

export default Stage;
