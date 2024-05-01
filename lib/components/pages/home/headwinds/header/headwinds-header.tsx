import React from "react";
import {
  Column,
  Login,
  Row,
  Image,
  Bolt,
  Paragraph,
  SubHeadline,
  List,
  ListItem,
  Link,
  Headline,
  User,
} from "../../../../";

import styles from "./headwinds-header.module.css";

interface HeadwindsHeaderProps {
  // Define your component props here
  user: any;
}

const HeadwindsHeader = ({ user }: HeadwindsHeaderProps) => {
  return (
    <Column customClass={styles.headwindsHeaderContainer}>
      auth
      <User user={user} />
    </Column>
  );
};
export default HeadwindsHeader;
