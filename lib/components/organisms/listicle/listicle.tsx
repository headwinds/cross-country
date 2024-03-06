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

const Listicle = ({ url }: { url?: string }) => {
  const { data, error, isLoading } = useListicle();

  const cachedData = useMemo(() => {
    console.log("listicle data: ", data);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  if (error) {
    return <Error />;
  }

  // loop through catogories

  const listicle = Object.entries(data).map((arr, index) => {
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
  });

  return (
    <Column>
      <User isAnon={true} />
      <Column className={styles.container}>
        {error ? <Error /> : listicle}
      </Column>
    </Column>
  );
};

export default Listicle;
