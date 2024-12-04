import React from "react";
import BentoFiveByFour from "./layouts/five-by-four/bento-five-by-four";
import BentoFourByFour from "./layouts/four-by-four/bento-four-by-four";
import BentoThreeByThree from "./layouts/three-by-three/bento-three-by-three";
import BentoTwoByTwo from "./layouts/two-by-two/bento-two-by-two";

export interface BentoProps {
  grid: "3" | "6" | "10" | "11";
  borderRadius?: number;
  entireBoxBackgroundColor?: string;
  // an object with any number of keys and values
  boxes?: any;
}

export interface BoxProps {
  backgroundColor: string;
  borderRadius: number;
  children: React.ReactNode;
}

const Bento: React.FC<BentoProps> = (props) => {
  const { grid } = props;

  switch (grid) {
    case "3":
      return <BentoTwoByTwo {...props} />;
    case "6":
      return <BentoThreeByThree {...props} />;
    case "10":
      return <BentoFourByFour {...props} />;
    case "11":
      return <BentoFiveByFour {...props} />;
    default:
      return <BentoTwoByTwo {...props} />;
  }
};

export default Bento;
