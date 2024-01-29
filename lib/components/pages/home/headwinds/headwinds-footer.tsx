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
} from "../../..";
import { TwitterLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
const moss = "#bccd9d";
const gold = "#b2a25a";
const teal = "#0baeae";
const customParagraphStyle = {
  marginLeft: 8,
  color: gold,
};

const customLinkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  borderBottom: "none",
  alignItems: "center",
  display: "flex",
};

/*
Note the header is only 50px tall so use it render alerts and notifications
*/
const HeadwindsFooter = ({ message = "", isLoading = false }) => {
  /*
  Phase 2 - add a loading indicator & login to profile with EXP/LVL expereince

  */

  return (
    <Column>
      <Link
        url="https://www.github.com/headwinds"
        customStyle={customLinkStyle}
      >
        <GithubLogo size={32} color={gold} weight="light" />
        <Paragraph customStyle={customParagraphStyle}>Github</Paragraph>
      </Link>
    </Column>
  );
};
export default HeadwindsFooter;
