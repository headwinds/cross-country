// TODO type check
// @ts-nocheck
import React from "react";
import { Row, Radio, Paragraph, Column } from "../../../";
import styles from "./listicle-item.module.css";
import { ListicleItemType } from "./types";

const ListicleItem = ({ data }: ListicleItemType) => {
  const { id, url, category = "design" } = data;

  return (
    <Row key={id}>
      <Paragraph customClass={styles.url}>{url}</Paragraph>
      <Paragraph customClass={styles.category}>{category}</Paragraph>
    </Row>
  );
};

export default ListicleItem;
