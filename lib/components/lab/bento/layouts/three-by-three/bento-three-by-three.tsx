import React from "react";
import styles from "./bento-three-by-three.module.css";
import clsx from "clsx";
import { Card, Column, Paragraph } from "../../../../";

interface BentoProps {
  one: React.ReactNode;
  two: React.ReactNode;
  three: React.ReactNode;
  four: React.ReactNode;
  five: React.ReactNode;
  six: React.ReactNode;
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

const BentoThreeByThree = ({ componentSlots = defaultComponentSlots }) => {
  const { one, two, three, four, five, six } = componentSlots;
  return (
    <Column customClass={styles.bento}>
      <Column customClass={clsx(styles.box, styles.topLeft)}>{one}</Column>
      <Column customClass={clsx(styles.box, styles.topRight)}>{two}</Column>
      <Column customClass={clsx(styles.box, styles.middleLeft)}>{three}</Column>
      <Column customClass={clsx(styles.box, styles.middleRight)}>{four}</Column>
      <Column customClass={clsx(styles.box, styles.bottomLeft)}>{five}</Column>
      <Column customClass={clsx(styles.box, styles.bottomRight)}>{six}</Column>
    </Column>
  );
};

export default BentoThreeByThree;
