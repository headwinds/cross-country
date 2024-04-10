import * as React from "react";
import Card from "../card";
import waves from "./ocean-slice.png";
import {
  Paragraph,
  SubHeadline,
  Grid,
  Image,
  Link,
  Column,
  Row,
} from "../../../";

const oceanUnsplash = "https://unsplash.com/photos/ocean-wave-UCDiLtfDRgU";

/*
A card is container for a piece of content. It can contain text, images, or other elements.

For this story, I want several card layouts to show the flexibility of the card component.

In most designs, the layout is a series of vertically stacked components.

I drew a bunch of thumbnails to show the different layouts to decide on the cards for this story. I also reviewed a few eCommerce sites to see how they use cards.

1. full photo card
2. Magic the Gathering - title with cost bar, photo, type (common, lengendary, etc) description, attack/defence
3. Amazon - photo, reduce price with full price striked out, title, star ranks, total reviews 
4. Nike - photo, status (new, sale, etc), title, description, colours, price with discount
5. Apple - status (new, sale, etc), photo, colour bar, price and button to buy row
6. Walmart - status (best seller, sale, etc), photo, add, price, total reviews, star ranks, pick up & delivery buttons
7. Fjallraven - photo, colour row picker, title, description, price, add to cart button
*/

export const PhotoCardStory = () => {
  return (
    <Card>
      <Image url={waves} a11y={"aerial photo of ocean waves"} width={200} />
      <Column customStyle={{ margin: 0, padding: 0 }}>
        <Paragraph customStyle={{ fontWeight: 700, fontSize: 18 }}>
          ocean wave
        </Paragraph>
        <Paragraph
          customStyle={{ fontWeight: 300, fontSize: 14, margin: "4px 0px" }}
        >
          La Jolla Waves
        </Paragraph>
        <Link url={oceanUnsplash}>
          <Paragraph
            customStyle={{ fontWeight: 300, fontSize: 14, margin: "4px 0px" }}
          >
            Matt Howard
          </Paragraph>
        </Link>
      </Column>
    </Card>
  );
};

export default PhotoCardStory;
