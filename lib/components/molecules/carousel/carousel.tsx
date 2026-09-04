import React from "react";
import { Column, Row } from "../../";

/*
A Grid based carousel that allows for the selection of items.

Do I want a Netflix style where each rows is a carousel or a single carousel that scrolls horizontally?

For starters, I only need one row that scrolls horizontally.

A row could be a tree and we should be able to nest a carousel or switch to sub tree. For instance, in a character builder, we choose a head shape, and then cycle through the parts: hair, eyes, nose.
*/

type Item = {
  label: string;
  imageUrl?: string;
  data?: unknown;
};

export interface CarouselProps {
  rows: Item[];
}

const defaultRows = [
  {
    label: "head",
    items: [{ label: "head 1" }, { label: "head 2" }, { label: "head 3" }],
  },
  {
    label: "body",
    items: [{ label: "body 1" }, { label: "body 2" }, { label: "body 3" }],
  },
  {
    label: "feet",
    items: [{ label: "feet 1" }, { label: "feet 2" }, { label: "feet 3" }],
  },
];

const Carousel = ({ rows = defaultRows }) => {
  return (
    <Column>
      {rows.map((row) => {
        return (
          <Row>
            {row.items.map((item) => {
              return <Column>{item.label}</Column>;
            })}
          </Row>
        );
      })}
    </Column>
  );
};

export default Carousel;
