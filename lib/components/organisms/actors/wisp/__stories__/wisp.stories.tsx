import type { Meta, StoryObj } from "@storybook/react-vite";
import Wisp from "@/lib/components/organisms/actors/wisp";
import { ActorModel } from "@/lib/models";
import { ActorSpeechModel } from "@/lib/components/organisms/actors/actor-speech";
import Tile from "@/lib/components/molecules/tile";
import Stage from "@/lib/components/organisms/stage";

interface TemplateProps {
  message: string;
}

const actorWispModel: ActorModel = {
  id: 0,
  type: "wisp",
  //position: { x: 0, y: 0, z: 0 },
  gridPosition: { row: 2, col: 1 }, // Top-left tile
  status: "idle",
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 120,
    backgroundColor: "green",
  },
  customSkinStyle: {
    backgroundColor: "#e8e8e8",
  },
  customClass: "wisp",
  tileSize: 40,
  variant: "wisp",
  alignment: "friendly",
  name: "Wisp of the Forest",
  health: 100,
  mana: 100,
  level: {
    level: 1,
    currentExperience: 0,
    requiredExperience: 100,
    type: "character",
    id: 0,
  },
  vice: [],
  world: null,
  ProfessionModel: null,
  spells: [],
  weapon: [],
  shield: [],
  speed: 100,
  accuracy: 100,
  skin: "wisp",
  config: {
    head: { color: "red" },
    body: { color: "blue" },
    legs: { color: "green" },
    type: "wisp",
  },
};

const Template = ({ message }: TemplateProps) => <Wisp />;

const meta: Meta<typeof Template> = {
  component: Template,
  title: "components/organisms/actors/wisp",
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof Template>;

export const WispStory: Story = {
  args: {
    message: "hello world",
  },
};

/*
A Stage requires:

export interface StageProps {
  actorSpeech?: ActorSpeechModel[];
  actorModels?: ActorModel[];
  gridConfig?: GridConfig; // Grid configuration for positioning
  stageConfig?: StageConfig; // All stage configuration including tiles
  currentGameState?: string; // Game state ID for story position recovery
}
*/

export const WispTileStage: Story = {
  render: () => {
    const actorModels: ActorModel[] = [actorWispModel];
    const actorSpeech: ActorSpeechModel[] = [
      {
        messageId: "initial",
        values: { ts: Date.now() },
        actorModel: actorWispModel,
        name: "wisp",
        text: "hello world",
      },
    ];
    const gridConfig = {
      rows: 10,
      columns: 10,
      tileSize: 40,
      gapSize: 10,
      totalInRow: 10,
      width: 1000,
      height: 1000,
    };
    const stageConfig = {
      tileSize: 40,
      gapSize: 10,
      totalInRow: 10,
      width: 200,
      height: 200,
      customClass: "wisp-stage",
      customStyle: {
        position: "absolute",
        zIndex: 0,
        left: 20,
        top: 120,
        backgroundColor: "white",
      },
    };

    return (
      <Stage
        actorModels={actorModels}
        actorSpeech={actorSpeech}
        gridConfig={gridConfig}
        stageConfig={stageConfig}
      />
    );
  },
};
