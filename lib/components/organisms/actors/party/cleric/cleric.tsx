import clsx from "clsx";
import Actor, { ActorProps } from "../../actor/";

// pre-configured character
const head = { color: "gold" };
const body = { color: "grey" };
const legs = { color: "black" };
const defaultConfig = { head, body, legs, type: "humanoid" };

const defaultModel = {
  id: 0,
  type: "humanoid",
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: "pink" },
  config: defaultConfig,
  customClass: "",
};

export interface ClericProps extends ActorProps {
  model?: any;
  tileSize?: number;
}

// TODO: add a actor type - use generics! Actor<Cleric>
const Cleric = ({ model = defaultModel, tileSize }: ClericProps) => {
  console.log("Cleric model", model);
  const {
    config,
    customClass,
    customSkinStyle,
    customTileStyle,
    position,
    type,
    image,
  } = model;

  const validConfig = config ?? defaultConfig;

  const newCustomSkinStyle = image
    ? null
    : {
        ...defaultModel.customSkinStyle,
        ...customSkinStyle,
      };

  if (image) {
    return (
      <Actor
        type={image ? null : type}
        config={image ? null : validConfig}
        position={position}
        customClass={image ? null : customClass}
        customTileStyle={image ? null : customTileStyle}
        customSkinStyle={newCustomSkinStyle}
        tileSize={tileSize}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt="Cleric"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              maxWidth: tileSize || 80,
              maxHeight: tileSize || 80,
            }}
          />
        </div>
      </Actor>
    );
  }

  return (
    <Actor
      type={type}
      config={validConfig}
      position={position}
      customClass={customClass}
      customTileStyle={customTileStyle}
      customSkinStyle={{ ...defaultModel.customSkinStyle, ...customSkinStyle }}
      tileSize={tileSize}
    />
  );
};

export default Cleric;
