import * as React from "react";
import { Column, SubHeadline } from "../../";

import clsx from "clsx";

import styles from "./day-number.module.css";

export interface DayNumberProps {
  number?: number;
  subHeadlineCustomStyle?: any;
  subHeadlineSize?: string;
  customClass?: string;
}

const DayNumber = ({
  number = 1,
  customClass = "",
  subHeadlineSize = "large",
  subHeadlineCustomStyle = { color: "#fff" },
}: DayNumberProps) => {
  return (
    <Column
      dataTestId="day-number"
      customClass={clsx(styles.DayNumber, customClass)}
    >
      <SubHeadline size={subHeadlineSize} customStyle={subHeadlineCustomStyle}>
        Day {number}
      </SubHeadline>
    </Column>
  );
};

export default DayNumber;
