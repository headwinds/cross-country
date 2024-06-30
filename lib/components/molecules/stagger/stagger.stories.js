import { STORYBOOK } from "../../../constants";
import Stagger from "./stagger";
import styles from "./stagger.module.css";

export default {
  title: "design system/molecules/stagger",
};

export const TwoWords = {
  render: () => (
    <Stagger
      color={["#999", "#adbd25"]}
      staggerText={["Economic", "Headwinds"]}
      stagger={{
        key: "marginLeft",
        value: 16,
      }}
    />
  ),

  name: "two words",
};

export const ThreeWords = {
  render: () => (
    <Stagger
      color={["#999", "#adbd25", "hotpink"]}
      staggerText={["Let's", "Create", "Worlds"]}
      stagger={{
        key: "marginLeft",
        value: 16,
      }}
    />
  ),

  name: "three words",
};
