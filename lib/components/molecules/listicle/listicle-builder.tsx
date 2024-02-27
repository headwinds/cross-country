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
} from "../..";

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

const ListicleBuilder = () => {
  return (
    <Column className={styles.container}>{error ? <Error /> : listicle}</Column>
  );
};

export default ListicleBuilder;
