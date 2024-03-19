import React from "react";
import styles from "./bento.module.css";
import clsx from "clsx";
import BentoTwoByTwo from "./layouts/two-by-two/bento-two-by-two";
import BentoThreeByThree from "./layouts/three-by-three/bento-three-by-three";
import BentoFourByFour from "./layouts/four-by-four/bento-four-by-four";
import BentoFiveByFour from "./layouts/five-by-four/bento-five-by-four";

/*
For this grid challenge, I want to build a few different grid layouts using the Bento component.

1. 2 x 2 grid 
2. 3 x 3 grid 
3. 4 x 4 grid
4. 5 x 5 grid
*/

interface BentoProps {
  // Define your component props here
  grid: "2x2" | "3x3" | "4x4" | "5x5";
}

const twoByTwoconfig = {
  main: {},
  top: {},
  bottom: {},
};

const Bento: React.FC<BentoProps> = (props) => {
  // Implement your component logic here
  const { grid } = props;
  console.log("grid: ", grid);
  switch (grid) {
    case "2x2":
      return <BentoTwoByTwo />;
    case "3x3":
      console.log("3x3");
      return <BentoThreeByThree />;
    case "4x4":
      return <BentoFourByFour />;
    case "5x4":
      return <BentoFiveByFour />;
    default:
      return <BentoTwoByTwo />;
  }
};

export default Bento;
