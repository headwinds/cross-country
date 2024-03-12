import React, { useState, useEffect, useMemo } from "react";
import styles from "./listicle.module.css";
import ListicleItem from "./edit-listicle-item-list/listicle-item";
import type { ListicleItemType } from "./edit-listicle-item-list/types";
import {
  Link,
  List,
  ListItem,
  Column,
  SubHeadline,
  Label,
  Error,
  Loading,
  User,
} from "../..";

const ListicleItemList = ({
  listicleItems,
}: {
  listicleItems: ListicleItem[];
}) => {
  const listicleItemsByCategory = listicleItems.reduce((acc, listicleItem) => {
    const { category } = listicleItem;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(listicleItem);
    return acc;
  }, {});

  const listicle = Object.entries(listicleItemsByCategory).map(
    ([category, listicleItems], index) => {
      const list = listicleItems.map((listicleItem, index) => {
        return (
          <Column key={index} customClass={styles.container}>
            <ListicleItem data={listicleItem} />
          </Column>
        );
      });
      return (
        <Column key={`${category}`} customClass={styles.container}>
          <SubHeadline size="small">{category}</SubHeadline>
          <List>{list}</List>
        </Column>
      );
    }
  );

  return <>{listicle}</>;
};

export default ListicleItemList;
