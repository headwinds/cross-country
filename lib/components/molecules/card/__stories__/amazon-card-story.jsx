import * as React from "react";
import AmazonServiceCard from "../amazon";
import {
  Paragraph,
  SubHeadline,
  Grid,
  Image,
  Link,
  Column,
  Row,
} from "../../../";

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

export const AmazonCardStory = () => {
  return (
    <Column customStyle={{ width: 200 }}>
      <AmazonServiceCard />
    </Column>
  );
};

export default AmazonCardStory;
