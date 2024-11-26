import Actor from "../actor/";

const defaultModel = {
  id: 0,
  type: "one",
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: "#e8e8e8" },
  config: null,
  customClass: "",
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
