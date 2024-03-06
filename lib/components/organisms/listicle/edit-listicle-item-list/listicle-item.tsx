import React from "react";
import { Row, Radio, Paragraph, Column } from "../../../";
import styles from "./listicle-item.module.css";
import { ListicleItemType } from "./types";

const ListicleItem = ({ data }: ListicleItemType) => {
  const { id, value, category = "design" } = data;

  return (
    <Row key={id}>
      <Paragraph customClass={styles.url}>{value}</Paragraph>
      <Paragraph customClass={styles.category}>{category}</Paragraph>
    </Row>
  );
};

export default ListicleItem;