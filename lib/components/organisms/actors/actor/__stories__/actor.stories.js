import Actor from "../actor";

export default {
  title: "design system/organisms/actors/actor",
};

export const BasicActor = {
  render: () => <Actor />,
  name: "basic actor",
};

export const PositionedActors = {
  render: () => (
    <Actor
      position={{
        x: 200,
        y: 200,
        z: 0,
      }}
      customSkinStyle={{
        backgroundColor: "grey",
      }}
    />
  ),

  name: "positioned actors",
};
