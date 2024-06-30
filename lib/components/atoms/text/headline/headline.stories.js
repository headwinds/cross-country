import { STORYBOOK } from "../../../../constants";
import Headline from "./headline";
import { SubHeadline, Column, Image } from "../../../";
import styles from "./headline.module.css";

export default {
  title: "components/atoms/text/headline",
};

export const Headline = {
  render: () => <Headline color="lightslategrey">The First Footstep</Headline>,
  name: "headline",
};

export const HeadlineWithSubheadline = {
  render: () => (
    <Column
      customStyle={{
        alignItems: "center",
      }}
    >
      <Headline
        customClass={styles.warIsOver}
        customStyle={{
          display: "flex",
          flexDirection: "column",
          maxHeight: 220,
          width: 50,
          alignItems: "center",
          fontSize: 60,
          fontWeight: 700,
          padding: 0,
          margin: 0,
        }}
      >
        WAR IS OVER!
      </Headline>
      <SubHeadline customClass={styles.ifYouWant}>IF YOU WANT IT</SubHeadline>
      <Image
        width="500"
        url="https://vintagenewsdaily.com/wp-content/uploads/2018/12/2.bp_.blogspot.compeace-for-christmas-unice-6499c7d88b9c85b0f0c495b76764615bb9e3d4ef-640x381.jpg"
      />
    </Column>
  ),

  name: "headline with subheadline",
};
