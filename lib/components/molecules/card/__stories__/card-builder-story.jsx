import * as React from "react";
import CardBuilder from "../builder/card-builder";
import {
  Paragraph,
  SubHeadline,
  Grid,
  Image,
  Link,
  Column,
  Row,
} from "../../../";

//TODO: should be able to build other cards with this builder besides Amazon

export const CardBuilderStory = () => {
  return (
    <Column customStyle={{ width: 800 }}>
      <CardBuilder />
    </Column>
  );
};

export default CardBuilderStory;
