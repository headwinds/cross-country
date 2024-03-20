import React from "react";
import styles from "./bento.module.css";
import clsx from "clsx";
import BentoTwoByTwo from "./layouts/two-by-two/bento-two-by-two";
import BentoThreeByThree from "./layouts/three-by-three/bento-three-by-three";
import BentoFourByFour from "./layouts/four-by-four/bento-four-by-four";
import BentoFiveByFour from "./layouts/five-by-four/bento-five-by-four";

interface BentoProps {
  grid: "2x2" | "3x3" | "4x4" | "5x5";
  borderRadius?: number;
  entireBoxBackgroundColor?: string;
  // an object with any number of keys and values
  boxes?: any;
}

const Bento: React.FC<BentoProps> = (props) => {
  const { grid } = props;

  switch (grid) {
    case "2x2":
      return <BentoTwoByTwo {...props} />;
    case "3x3":
      console.log("3x3");
      return <BentoThreeByThree {...props} />;
    case "4x4":
      return <BentoFourByFour {...props} />;
    case "5x4":
      return <BentoFiveByFour {...props} />;
    default:
      return <BentoTwoByTwo {...props} />;
  }
};

export default Bento;
