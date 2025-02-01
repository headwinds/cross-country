import { Column, Image, Stagger } from "../../../";
import andor from "./andor.png";
import { StaggerText } from "../../../molecules/stagger/stagger";

const staggerText = [
  { text: "Experience the rise", textColor: "#666" },
  { text: "of the rebellion with", textColor: "#666" },
  { text: "Star Wars: Andor", textColor: "#ff0000" },
] as StaggerText[];

const AndorStory = () => {
  return (
    <Column>
      <Stagger staggerText={staggerText} />
      <Image url={andor} width={400} a11y="Andor series promotional image" />
    </Column>
  );
};

export default AndorStory;
