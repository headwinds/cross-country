import Stage from "../stage";
import styles from "../stage.module.css";
import { actors } from "./actors-dataset";

export default {
  title: "design system/organisms/stage",
};

export const Stage = {
  render: () => <Stage actorModels={actors} />,
  name: "stage",
};

export const Configure = {
  render: () => (
    <Stage
      actorModels={actors}
      config={{
        customStyle: {
          width: 600,
          height: 300,
          backgroundColor: "pink",
        },
      }}
    />
  ),

  name: "configure",
};
