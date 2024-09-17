// TODO type check
// @ts-nocheck
import React, { useState, useEffect, useMemo } from "react";
import styles from "./listicle.module.css";
import ListicleItem from "./edit-listicle-item-list/listicle-item";
import type { ListicleItemType } from "./edit-listicle-item-list/types";
import ListicleItemList from "./listicle-item-list";
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

/*
What is the story behind the listicle?

Each month I manually capture links in a text file categorize them with the goal to eventually share with whoever and also refer back to them; track what interests me.

The listicle story should include:
- an authenticated user to save it 
- ability to add, edit, and delete listicle items 
- a listicle item requires have a url, title, and category - a description could be optional
- when the listicle is created, it will have created date and then updated date 
- a listicle is a list of listicle items
- ability to create the listicle with a default title of this current month

*/

type Listicle = {
  title: string;
  listicleItems: ListicleItemType[];
  created_at: Date;
  updated_at: Date;
};

type ListicleProps = {
  data: {
    title: string;
    listicleItems: ListicleItem[];
  };
};

const Listicle = ({ data }: ListicleProps) => {
  if (!data.listicleItems) {
    return console.error("Listicle data.listicleItems is not defined");
  }
  const { listicleItems, title } = data;

  console.log("Listicle listicleItems ", listicleItems);

  // should re-load as it the remote versions that have the created_at defined!

  return (
    <Column customClass={styles.container}>
      <User isAnon={true} />
      <Column customClass={styles.container}>
        <SubHeadline>{title}</SubHeadline>
        <ListicleItemList listicleItems={listicleItems} />
      </Column>
    </Column>
  );
};

export default Listicle;
