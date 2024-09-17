// TODO type check
// @ts-nocheck
import * as React from "react";
import {
  Headline,
  Column,
  Span,
  Paragraph,
  Image,
  Stagger,
  Link,
  Listicle,
} from "../../../";

const ListicleStory = () => {
  const data = {
    listicleItems: [
      {
        id: "1",
        url: "https://github.com/headwinds/cross-country",
        title: "cross country",
        category: "programming",
        description: "Cross Country components",
      },
      {
        id: "2",
        url: "https://github.com/headwinds/northwind-frostpunk",
        title: "northwind frostpunk",
        category: "programming",
        description: "learn to use go and postgres",
      },
      {
        id: "3",
        url: "https://design-milk.com/",
        title: "design milk",
        category: "design",
        description: "design blog",
      },
      {
        id: "4",
        url: "https://kotaku.com",
        title: "kotaku",
        category: "gaming",
        description: "gaming blog",
      },
      {
        id: "5",
        url: "https://cabinporn.com/",
        title: "Cabin Porn",
        category: "architecture",
        description: "architecture blog",
      },
    ],
    title: "March 2024",
  };

  return <Listicle data={data} />;
};

export default ListicleStory;
