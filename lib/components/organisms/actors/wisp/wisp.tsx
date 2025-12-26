import Actor from "../actor/";
import { ActorModel } from "@/models";

const defaultModel: ActorModel = {
  id: 0,
  type: "wisp",
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: "#e8e8e8" },
  config: null,
  customClass: "",
  customStyle: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 120,
    backgroundColor: "green",
  },
};

export interface WispProps {
  customClass?: string;
  customSkinStyle?: any;
  model?: any;
  tileSize?: number;
}

const Wisp = ({
  customClass = "",
  customSkinStyle = {},
  model = defaultModel,
  tileSize = 40,
}: WispProps) => (
  <Actor
    type={model.type}
    config={model.config}
    position={model.position}
    customClass={customClass}
    customSkinStyle={{ ...model.customSkinStyle, ...customSkinStyle }}
    tileSize={tileSize}
  />
);

export default Wisp;
