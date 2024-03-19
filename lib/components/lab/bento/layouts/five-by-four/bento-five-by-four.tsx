import React from "react";
import styles from "./bento-five-by-four.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

interface BentoProps {
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
  eleven: React.ReactNode;
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
const BentoFiveByFive = ({ componentSlots = defaultComponentSlots }) => {
  const { one, two, three, four, five, six, seven, eight, nine, ten, eleven } =
    componentSlots;
  return (
    <Column customClass={styles.bento}>
      <Column customClass={clsx(styles.box, styles.firstBox)}>{one}</Column>
      <Column customClass={clsx(styles.box, styles.secondBox)}>{two}</Column>
      <Column customClass={clsx(styles.box, styles.thirdBox)}>{three}</Column>
      <Column customClass={clsx(styles.box, styles.fourthBox)}>{four}</Column>
      <Column customClass={clsx(styles.box, styles.fifthBox)}>{five}</Column>
      <Column customClass={clsx(styles.box, styles.sixthBox)}>{six}</Column>
      <Column customClass={clsx(styles.box, styles.seventhBox)}>{seven}</Column>
      <Column customClass={clsx(styles.box, styles.eighthBox)}>{eight}</Column>
      <Column customClass={clsx(styles.box, styles.ninthBox)}>{nine}</Column>
      <Column customClass={clsx(styles.box, styles.tenthBox)}>{ten}</Column>
      <Column customClass={clsx(styles.box, styles.eleventhBox)}>
        {eleven}
      </Column>
    </Column>
  );
};

export default BentoFiveByFive;
