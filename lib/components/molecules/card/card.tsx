import React, { useState } from "react";
import { Column } from "../../";
import styles from "./card.module.css";
import clsx from "clsx";

const Card = ({
  backgroundColor = "",
  customClass = "",
  customStyle = {},
  children,
  ...rest
}) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.card, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    >
      {children}
    </Column>
  );
};

export default Card;
