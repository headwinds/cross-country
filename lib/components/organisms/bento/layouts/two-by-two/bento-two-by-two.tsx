import React from "react";
import styles from "./bento-two-by-two.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

interface BentoTwoByTwoProps {
  boxes?: {
    main?: React.ReactNode;
    top?: React.ReactNode;
    bottom?: React.ReactNode;
  };
  borderRadius?: number;
  gap?: number;
  entireBoxBackgroundColor?: string;
  isMainRight?: boolean;
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

const customMainStyle = {
  gridRow: "1 / 3",
  gridColumn: "2",
};

const customTopStyle = {
  gridRow: "1",
  gridColumn: "1",
};

const customBottomStyle = {
  gridRow: "2",
  gridColumn: "1",
};

const BentoTwoByTwo = ({
  boxes = twoByTwoconfig,
  entireBoxBackgroundColor = "transparent",
  borderRadius = 5,
  gap = 16,
  isMainRight = false,
}: BentoTwoByTwoProps) => {
  const { main, top, bottom } = boxes;

  const mainStyle = isMainRight
    ? { ...customMainStyle, borderRadius }
    : { borderRadius };
  const topStyle = isMainRight
    ? { ...customTopStyle, borderRadius }
    : { borderRadius };
  const bottomStyle = isMainRight
    ? { ...customBottomStyle, borderRadius }
    : { borderRadius };

  return (
    <Column
      customClass={styles.bento}
      customStyle={{ backgroundColor: entireBoxBackgroundColor, gap }}
    >
      <Column
        customClass={clsx(styles.box, styles.main)}
        customStyle={mainStyle}
      >
        {main}
      </Column>
      <Column customClass={clsx(styles.box, styles.top)} customStyle={topStyle}>
        {top}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.bottom)}
        customStyle={bottomStyle}
      >
        {bottom}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.hidden)}
        customStyle={{ borderRadius }}
      >
        4
      </Column>
    </Column>
  );
};

export default BentoTwoByTwo;
