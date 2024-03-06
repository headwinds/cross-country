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
        url: "https://github.com/headwinds/cross-country",
        title: "cross country",
        category: "programming",
        description: "Cross Country design system",
      },
    ],
    title: "March 2024",
  };

  return <Listicle data={data} />;
};

export default ListicleStory;
