import clsx from "clsx";
import React, { useRef, useCallback, useMemo, useState } from "react";
import { Column } from "../../";
import Hunter from "../actors/party/hunter";
import Warrior from "../actors/party/warrior";
import Wisp from "../actors/wisp";
import styles from "./stage.module.css";
import ActorSpeech from "../actors/actor-speech";
import SpeechControls from "../speech-controls/speech-controls";
import { ActorModel } from "@headwinds/cross-country/models/ActorModel";
import { ActorSpeechModel } from "../actors/actor-speech/actor-speech";
import { CharacterLevelModel } from "@/lib/models";
import TileGrid from "../tile-grid";
import { createDemoModels } from "@/lib/utils/tile-util";
import {
  gridToPixelPosition,
  GridConfig,
} from "@/lib/utils/grid-position-util";

type StageConfig = {
  customClass?: string;
  customStyle?: any;
  rest?: any;
};

const defaultConfig: StageConfig = {
  customClass: "",
  customStyle: {},
  rest: {},
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
};

export interface StageWithSpeechProps {
  config?: StageConfig;
  actorModels?: ActorModel[];
  actorSpeech?: ActorSpeechModel[];
  gridConfig?: GridConfig;
  showControls?: boolean;
  autoPlay?: boolean;
}

const defaultActorSpeech = [
  {
    messageId: "speech_1",
    values: { ts: Date.now() },
    actorModel: defaultActorModel,
    name: "Hunter",
    text: "Today is a good day to hunt.",
  },
  {
    messageId: "speech_2",
    values: { ts: Date.now() },
    actorModel: defaultActorModel,
    name: "Warrior",
    text: "I'm ready for battle!",
  },
  {
    messageId: "speech_3",
    values: { ts: Date.now() },
    actorModel: defaultActorModel,
    name: "Wisp",
    text: "The forest whispers ancient secrets...",
  },
] as any as ActorSpeechModel[];

const StageWithSpeech = ({
  config = defaultConfig,
  actorModels = [defaultActorModel],
  actorSpeech = defaultActorSpeech,
  gridConfig,
  showControls = true,
  autoPlay = false,
}: StageWithSpeechProps) => {
  // Speech state management
  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Default grid configuration
  const defaultGridConfig: GridConfig = {
    tileSize: 100,
    gapSize: 0,
    totalInRow: 3,
    totalInCol: 3,
    tiles: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };

  const [currentGridConfig, setCurrentGridConfig] = React.useState<GridConfig>(
    gridConfig || defaultGridConfig
  );

  const finalGridConfig = gridConfig || currentGridConfig;

  // Get current speech
  const currentSpeech = actorSpeech[currentSpeechIndex];
  const currentSpeaker = (currentSpeech as any)?.name || "hunter";

  // Find the actor model for the current speaker
  const currentActorModel = actorModels.find(
    (model) => model.name === currentSpeaker || model.variant === currentSpeaker
  );

  // Calculate speech position based on actor position
  const speechPosition = useMemo(() => {
    if (!currentActorModel) return { x: 0, y: 0 };

    let actorPosition = currentActorModel.position || { x: 0, y: 0, z: 0 };

    // If actor has grid position, convert to pixel position
    if (currentActorModel.gridPosition && finalGridConfig) {
      const pixelPosition = gridToPixelPosition(
        currentActorModel.gridPosition,
        finalGridConfig
      );
      actorPosition = pixelPosition;
    }

    // Position speech bubble above and to the right of the actor
    return {
      x: actorPosition.x + 60, // Offset to the right
      y: actorPosition.y - 40, // Offset above
    };
  }, [currentActorModel, finalGridConfig]);

  const getActor = useCallback(
    (model) => {
      // Convert grid position to pixel position if gridPosition is provided
      let finalModel = { ...model };

      if (model.gridPosition && finalGridConfig) {
        const pixelPosition = gridToPixelPosition(
          model.gridPosition,
          finalGridConfig
        );
        finalModel = {
          ...model,
          position: pixelPosition,
        };
      }

      switch (model.variant) {
        case "wisp":
          return <Wisp model={finalModel} key={model.id} />;
        case "warrior":
          return <Warrior model={finalModel} key={model.id} />;
        case "hunter":
        default:
          return <Hunter model={finalModel} key={model.id} />;
      }
    },
    [finalGridConfig]
  );

  const tileRefs = useRef([]);

  const renderActors = useMemo(() => {
    return actorModels.map((model) => getActor(model));
  }, [actorModels, getActor]);

  const demoModels = useMemo(() => createDemoModels(), []);

  const handleGridConfigChange = useCallback((newConfig: GridConfig) => {
    setCurrentGridConfig(newConfig);
  }, []);

  // Speech navigation handlers
  const handleNext = useCallback(() => {
    if (currentSpeechIndex < actorSpeech.length - 1) {
      setCurrentSpeechIndex(currentSpeechIndex + 1);
    }
  }, [currentSpeechIndex, actorSpeech.length]);

  const handlePrev = useCallback(() => {
    if (currentSpeechIndex > 0) {
      setCurrentSpeechIndex(currentSpeechIndex - 1);
    }
  }, [currentSpeechIndex]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // Auto-advance when playing
  React.useEffect(() => {
    if (isPlaying && currentSpeechIndex < actorSpeech.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSpeechIndex(currentSpeechIndex + 1);
      }, 3000); // Advance every 3 seconds

      return () => clearTimeout(timer);
    } else if (isPlaying && currentSpeechIndex === actorSpeech.length - 1) {
      // Stop playing when reaching the end
      setIsPlaying(false);
    }
  }, [isPlaying, currentSpeechIndex, actorSpeech.length]);

  return (
    <Column
      customClass={clsx(styles.stage, config?.customClass)}
      customStyle={{ ...config?.customStyle, padding: 0, margin: 0 }}
      {...config?.rest}
    >
      <TileGrid
        models={demoModels}
        totalInRow={3}
        tileRefs={tileRefs}
        onGridConfigChange={handleGridConfigChange}
      />
      {renderActors}
      <ActorSpeech
        speech={currentSpeech}
        position={speechPosition}
        isVisible={!!currentSpeech}
      />

      {showControls && (
        <SpeechControls
          currentIndex={currentSpeechIndex}
          totalSpeeches={actorSpeech.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onPlay={handlePlay}
          onPause={handlePause}
          isPlaying={isPlaying}
        />
      )}
    </Column>
  );
};

export default StageWithSpeech;
