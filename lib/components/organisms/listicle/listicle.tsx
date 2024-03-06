import React, { useState, useEffect, useMemo } from "react";
import styles from "./listicle.module.css";
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
import useListicle from "../../../hooks/useListicle";

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

type ListicleItem = {
  url: string;
  title?: string;
  category?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
};

type Listicle = {
  title: string;
  listicleItems: ListicleItem[];
  created_at: Date;
  updated_at: Date;
};

const ListicleItem = ({ url }: ListicleItem) => {
  return (
    <ListItem>
      <Link url={url}>
        <Label>{url}</Label>
      </Link>
    </ListItem>
  );
};

type ListicleProps = {
  data: {
    title: string;
    listicleItems: ListicleItem[];
  };
};

const ListicleItemList = ({
  listicleItems,
}: {
  listicleItems: ListicleItem[];
}) => {
  return (
    <List>
      {listicleItems.map((listicleItem, index) => {
        return (
          <ListicleItem
            key={index}
            url={listicleItem.url}
            title={listicleItem.title}
            category={listicleItem.category}
            description={listicleItem.description}
          />
        );
      })}
    </List>
  );
};

const Listicle = ({ data }: ListicleProps) => {
  // MVP test where I load the listicle from a file
  // const { data, error, isLoading } = useListicle();
  console.log("Listicle data: ", data);
  if (!data.listicleItems) {
    return console.error("Listicle data.listicleItems is not defined");
  }
  const { listicleItems, title } = data;

  /*
  create listicle machine here!
  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  if (error) {
    return <Error />;
  }*/
  const error = false;

  // loop through catogories
  /*
  const listicle = Object.entries(listicleItems).map((arr, index) => {
    const category = arr[0];
    const urlModels = arr[1];

    const list =
      Array.isArray(urlModels) && urlModels?.map
        ? urlModels.map(({ url }, index) => {
            return (
              <Column key={index} customStyle={{ margin: 0, padding: 0 }}>
                <ListicleItem url={url} />{" "}
              </Column>
            );
          })
        : null;
    return (
      <Column key={`${category}`}>
        <SubHeadline size="small">{category}</SubHeadline>
        {list}
      </Column>
    );
  });*/

  return (
    <Column>
      <User isAnon={true} />
      <Column className={styles.container}>
        <SubHeadline>{title}</SubHeadline>
        <ListicleItemList listicleItems={listicleItems} />
      </Column>
    </Column>
  );
};

export default Listicle;
