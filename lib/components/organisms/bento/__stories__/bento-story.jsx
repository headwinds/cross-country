import React from "react";
import Bento from "../bento";
import { Card, Column, Paragraph } from "../../../";

const MainContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#eaeaba",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>main</Paragraph>
    </Column>
  );
};

const TopContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#f9daed",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>top</Paragraph>
    </Column>
  );
};

const BottomContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#b9eccf",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>bottom</Paragraph>
    </Column>
  );
};

const twoByTwoconfig = {
  main: <MainContent />,
  top: <TopContent />,
  bottom: <BottomContent />,
};

const BentoStory = ({
  grid,
  borderRadius = 0,
  gap = 2,
  isMainRight = false,
}) => {
  if (grid === "2x2") {
    return (
      <Bento
        grid={grid}
        borderRadius={borderRadius}
        gap={gap}
        isMainRight={isMainRight}
        boxes={twoByTwoconfig}
      />
    );
  }

  return (
    <Bento
      grid={grid}
      borderRadius={borderRadius}
      gap={gap}
      isMainRight={isMainRight}
    />
  );
};

export default BentoStory;
