import React, { useState, useEffect } from "react";
import styles from "./listicle.module.css";
import {
  Link,
  List,
  ListItem,
  Column,
  SubHeadline,
  Error,
  Loading,
} from "../..";
import useListicle from "../../../hooks/useListicle";

/*
What is the story behind the listicle for me?

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
  title: string;
  category: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
};

type Listicle = {
  title: string;
  listicleItems: ListicleItem[];
  created_at: Date;
  updated_at: Date;
};

const ListicleItem = ({ data: ListicleItem }) => {
  return (
    <ListItem>
      <Link url={url}>title</Link>
    </ListItem>
  );
};

const Listicle = ({ url }: { url?: string }) => {
  const { data, error, isLoading } = useListicle();

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
  /*
  const listicle = Object.entries(data).map((arr, index) => {
    const category = arr[0];
    const urlModels = arr[1];

    const listicle =
      Array.isArray(urlModels) && urlModels?.map
        ? urlModels.map((model, index) => {
            const { url } = model;
            console.log("urlModel model: ", model);
            return (
              <ListItem key={index}>
                <Link url={url}>{url}</Link>
              </ListItem>
            );
          })
        : null;
    return (
      <Column>
        <SubHeadline size="small">{category}</SubHeadline>
        {listicle}
      </Column>
    );
  });
  */

  //    <List>{listicle}</List>

  return (
    <Column className={styles.container}>{error ? <Error /> : null}</Column>
  );
};

export default Listicle;
