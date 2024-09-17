// TODO type check
// @ts-nocheck
import * as React from "react";
import Animal from "../animal";
import { Paragraph, SubHeadline, Image } from "../../../";

/*

Starting with the base animal component, we can add a few more components to create and compose other animals.

1. chicken
2. rabbit
3. boar
4. deer
5. crow
6. bear
7. wolf
8. rhino
9. unicorn
10 dragon

*/

export const ChickenStory = () => {
  return <Animal>bok bok</Animal>;
};

const AnimalStory = () => {
  return <Animal>animal story</Animal>;
};

export default AnimalStory;

