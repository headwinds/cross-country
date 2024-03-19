import React from "react";
import styles from "./bento-two-by-two.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

/*
For this grid challenge, I want to build a few different grid layouts using the Bento component.

1. 2 x 2 grid 
2. 3 x 3 grid 
3. 4 x 4 grid
4. 5 x 5 grid
*/

interface BentoProps {
  // Define your component props here
}

const MainContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#eaeaba",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>main</Paragraph>
    </Column>
  );
};

const TopContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#f9daed",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>top</Paragraph>
    </Column>
  );
};

const BottomContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#b9eccf",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>bottom</Paragraph>
    </Column>
  );
};

const twoByTwoconfig = {
  main: <MainContent />,
  top: <TopContent />,
  bottom: <BottomContent />,
};

const BentoTwoByTwo = ({ config = twoByTwoconfig }) => {
  const { main, top, bottom } = config;
  return (
    <Column customClass={styles.bento}>
      <Column customClass={clsx(styles.box, styles.main)}>{main}</Column>
      <Column customClass={clsx(styles.box, styles.top)}>{top}</Column>
      <Column customClass={clsx(styles.box, styles.bottom)}>{bottom}</Column>
      <Column customClass={clsx(styles.box, styles.hidden)}>4</Column>
    </Column>
  );
};

export default BentoTwoByTwo;
