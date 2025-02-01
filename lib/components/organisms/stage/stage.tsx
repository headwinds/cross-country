import clsx from "clsx";
import { Column } from "../../";
import Hunter from "../actors/party/hunter";
import Warrior from "../actors/party/warrior";
import Wisp from "../actors/wisp";
import styles from "./stage.module.css";
import ActorSpeech from "../actors/actor-speech";
import { ActorModel } from "@cross-country/models/ActorModel";
import { ActorSpeechModel } from "../actors/actor-speech/actor-speech";
import { CharacterLevelModel } from "@/lib/models";

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

const defaultActorModel: ActorModel = {
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

export interface StageProps {
  config?: StageConfig;
  actorModels?: ActorModel[];
  actorSpeech?: ActorSpeechModel[];
}

const defaultActorSpeech = [
  {
    messageId: "today",
    values: { ts: Date.now() },
    who: defaultActorModel,
  },
] as ActorSpeechModel[];

const Stage = ({
  config = defaultConfig,
  actorModels = [defaultActorModel],
  actorSpeech = defaultActorSpeech,
}: StageProps) => {
  const getActor = (model) => {
    switch (model.variant) {
      case "wisp":
        return <Wisp model={model} key={model.id} />;
      case "warrior":
        return <Warrior model={model} key={model.id} />;
      case "hunter":
      default:
        return <Hunter model={model} key={model.id} />;
    }
  };

  const renderActors = () => {
    return actorModels.map((model) => getActor(model));
  };

  // find the hunter model
  const hunterModel = actorModels.find((model) => model.variant === "hunter");
  const hunterSpeech = actorSpeech.find((speech) => speech.who === hunterModel);

  return (
    <Column
      customClass={clsx(styles.stage, config?.customClass)}
      customStyle={config?.customStyle}
      {...config?.rest}
    >
      <ActorSpeech speech={hunterSpeech} />
      {renderActors()}
    </Column>
  );
};

export default Stage;
