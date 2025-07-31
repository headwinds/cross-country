import type { Meta, StoryObj } from "@storybook/react-vite";
import Wisp from "@/lib/components/organisms/actors/wisp";
import { ActorModel } from "@/lib/models";
import { ActorSpeechModel } from "@/lib/components/organisms/actors/actor-speech";
import Stage from "@/lib/components/organisms/stage";

interface TemplateProps {
  message: string;
}

const TILE_SIZE = 100;

const actorWispModel: ActorModel = {
  id: 0,
  type: "wisp",
  gridPosition: { row: 1, col: 0 },
  status: "idle",
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    top: 0,
    backgroundColor: "green",
  },
  customSkinStyle: {
    backgroundColor: "#e8e8e8",
  },
  customClass: "wisp",
  tileSize: TILE_SIZE,
  variant: "wisp",
  alignment: "friendly",
  name: "elevin",
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

export const WispStory: Story = {};

export const WispTileStage: Story = {
  render: () => {
    const actorModels: ActorModel[] = [actorWispModel];
    const actorSpeech: ActorSpeechModel[] = [
      {
        messageId: "initial",
        values: { ts: Date.now() },
        actorModel: actorWispModel,
        text: "there's rumour of a faerie house nearby...",
      },
    ];
    const gridConfig = {
      tileSize: TILE_SIZE,
      gapSize: 10,
      totalInRow: 3,
      totalInCol: 3,
    };
    const stageConfig = {
      tileSize: TILE_SIZE,
      gapSize: 10,
      width: TILE_SIZE * 3,
      height: TILE_SIZE * 3,
      customClass: "wisp-stage",
      customStyle: {
        position: "absolute",
        zIndex: 0,
        left: 20,
        top: 20,
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
