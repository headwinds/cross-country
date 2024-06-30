import { STORYBOOK } from "../../../../constants";
import List from "..";
import ListItem from "../list-item";
import styles from "./list.module.css";

export default {
  title: "design system/atoms/list",
};

export const VerticalList = {
  render: () => (
    <List>
      <ListItem>Apples</ListItem>
      <ListItem>Matches</ListItem>
      <ListItem>Coffee</ListItem>
    </List>
  ),

  name: "vertical list",
};

export const HorizontalList = {
  render: () => (
    <List customClass={styles.horizontalList}>
      <ListItem customClass={styles.horizontalListItem}>Apples</ListItem>
      <ListItem customClass={styles.horizontalListItem}>Matches</ListItem>
      <ListItem customClass={styles.horizontalListItem}>Coffee</ListItem>
    </List>
  ),

  name: "horizontal list",
};
