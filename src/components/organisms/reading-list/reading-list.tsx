import * as React from "react";
import { Column } from '../../';  
import { ReadingListProps } from "./reading-list.types";

import styles from "./reading-list.scss";

const ReadingList: React.FC<ReadingListProps> = ({ foo }) => {
  return (<Column dataTestId="reading-list" customClass={styles.ReadingList}>{foo || "missng prop foo"}</Column>)
};

export default ReadingList;

