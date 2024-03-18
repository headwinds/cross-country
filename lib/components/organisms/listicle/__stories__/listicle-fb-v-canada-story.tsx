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
import facebookCanada from "./facebook-canadian-news-restrictions.png";

const ListicleStory = () => {
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
      <Image url={facebookCanada} width={400} />

      <Link url="https://www.cbc.ca/listen/live-radio/1-479-the-block/">
        CBC The Block
      </Link>
      <Link url="https://nowtoronto.com/culture/the-city-of-toronto-defends-its-ttc-campaign-against-racism/">
        Revisiting Black radio in Toronto with Angeline Tetteh-Wayoe
      </Link>
    </Column>
  );
};

export default ListicleStory;
