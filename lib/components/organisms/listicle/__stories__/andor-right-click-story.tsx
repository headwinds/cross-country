import { Column, Image, Stagger } from "../../../";
import andor from "./andor.png";

const AndorStory = () => {
  return (
    <Column>
      <Stagger
        staggerText={[
          "Meet CBC Radio Host",
          "& National Treasure",
          "Angeline Tetteh-Wayoe",
        ]}
        stagger={{ key: "marginLeft", value: 16 }}
        color={["#666", "#666", "#d9be2a"]}
      />
      <Image url={andor} width={400} a11y="Andor image" />
    </Column>
  );
};

export default AndorStory;
