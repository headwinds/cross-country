import * as React from "react";
import Animal from "../animal";
import { Paragraph, SubHeadline, Image } from "../../../";

/*

Starting with the base animal component, we can add a few more components to create and compose other animals.

1. chicken
2. rabbit
3. boar
4. deer
5. bear
6. wolf
7. rhino
8. unicorn

*/

export const ChickenStory = () => {
  return <Animal>bok bok</Animal>;
};

const AnimalStory = () => {
  return <Animal>animal story</Animal>;
};

export default AnimalStory;
