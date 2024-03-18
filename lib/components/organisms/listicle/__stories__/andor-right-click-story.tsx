import * as React from "react";
import {
  Headline,
  Column,
  Span,
  Paragraph,
  Image,
  Stagger,
  Link,
} from "../../../";
import andor from "./andor.png";

const AndorStory = () => {
  return (
    <Column>
      <Stagger
        staggerText={[
          "Meet CBC Radio Host",
          "& National Treasure",
          "Angeline Tetteh-Wayoe",
        ]}
        stagger={{ key: "marginLeft", value: 16 }}
        color={["#666", "#666", "#d9be2a"]}
      />
      <Image url={andor} width={400} />
    </Column>
  );
};

export default AndorStory;
