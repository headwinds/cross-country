import React from "react";
import styles from "./bento-three-by-three.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

interface BentoThreeByThreeProps {
  boxes?: {
    one?: React.ReactNode;
    two?: React.ReactNode;
    three?: React.ReactNode;
    four?: React.ReactNode;
    five?: React.ReactNode;
    six?: React.ReactNode;
  };
  borderRadius?: number;
  gap?: number;
  entireBoxBackgroundColor?: string;
}

const DefaultContent = ({ num = 1 }) => {
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
      <Paragraph>content {num}</Paragraph>
    </Column>
  );
};

const defaultComponentSlots = {
  one: <DefaultContent num={1} />,
  two: <DefaultContent num={2} />,
  three: <DefaultContent num={3} />,
  four: <DefaultContent num={4} />,
  five: <DefaultContent num={5} />,
  six: <DefaultContent num={6} />,
};

const BentoThreeByThree = ({
  boxes = defaultComponentSlots,
  borderRadius = 0,
  gap = 16,
  entireBoxBackgroundColor = "transparent",
}: BentoThreeByThreeProps) => {
  const { one, two, three, four, five, six } = boxes;

  return (
    <Column
      customClass={styles.bento}
      customStyle={{ backgroundColor: entireBoxBackgroundColor, gap }}
    >
      <Column
        customClass={clsx(styles.box, styles.topLeft)}
        customStyle={{ borderRadius }}
      >
        {one}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.topRight)}
        customStyle={{ borderRadius }}
      >
        {two}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.middleLeft)}
        customStyle={{ borderRadius }}
      >
        {three}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.middleRight)}
        customStyle={{ borderRadius }}
      >
        {four}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.bottomLeft)}
        customStyle={{ borderRadius }}
      >
        {five}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.bottomRight)}
        customStyle={{ borderRadius }}
      >
        {six}
      </Column>
    </Column>
  );
};

export default BentoThreeByThree;
