import React from "react";
import { Column } from "../../..";

/*
A Grid based carousel that allows for the selection of items.

Do I want a Netflix style where each rows is a carousel or a single carousel that scrolls horizontally?

For starters, I only need one row that scrolls horizontally.
*/

export interface CarouselProps {}

const Carousel = ({}) => {
  return (
    <Column>
      <Column>Head 1</Column>
      <Column>Head 2</Column>
      <Column>Head 3</Column>
    </Column>
  );
};

export default Carousel;
