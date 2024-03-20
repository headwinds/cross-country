import React from "react";
import styles from "./bento-five-by-four.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

interface BentoFiveByFourProps {
  boxes: {
    one: React.ReactNode;
    two: React.ReactNode;
    three: React.ReactNode;
    four: React.ReactNode;
    five: React.ReactNode;
    six: React.ReactNode;
    seven: React.ReactNode;
    eight: React.ReactNode;
    nine: React.ReactNode;
    ten: React.ReactNode;
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
  seven: <DefaultContent num={7} />,
  eight: <DefaultContent num={8} />,
  nine: <DefaultContent num={9} />,
  ten: <DefaultContent num={10} />,
  eleven: <DefaultContent num={11} />,
};
const BentoFiveByFive = ({
  boxes = defaultComponentSlots,
  borderRadius = 25,
  gap = 16,
  entireBoxBackgroundColor = "transparent",
}: BentoFiveByFourProps) => {
  const { one, two, three, four, five, six, seven, eight, nine, ten, eleven } =
    boxes;
  return (
    <Column
      customClass={styles.bento}
      customStyle={{ backgroundColor: entireBoxBackgroundColor, gap }}
    >
      <Column
        customClass={clsx(styles.box, styles.firstBox)}
        customStyle={{ borderRadius }}
      >
        {one}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.secondBox)}
        customStyle={{ borderRadius }}
      >
        {two}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.thirdBox)}
        customStyle={{ borderRadius }}
      >
        {three}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.fourthBox)}
        customStyle={{ borderRadius }}
      >
        {four}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.fifthBox)}
        customStyle={{ borderRadius }}
      >
        {five}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.sixthBox)}
        customStyle={{ borderRadius }}
      >
        {six}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.seventhBox)}
        customStyle={{ borderRadius }}
      >
        {seven}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.eighthBox)}
        customStyle={{ borderRadius }}
      >
        {eight}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.ninthBox)}
        customStyle={{ borderRadius }}
      >
        {nine}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.tenthBox)}
        customStyle={{ borderRadius }}
      >
        {ten}
      </Column>
      <Column
        customClass={clsx(styles.box, styles.eleventhBox)}
        customStyle={{ borderRadius }}
      >
        {eleven}
      </Column>
    </Column>
  );
};

export default BentoFiveByFive;
