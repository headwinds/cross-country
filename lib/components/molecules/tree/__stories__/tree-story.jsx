import Tree from "../tree";
import { useState } from "react";

const instructionList = [
  { indent: 0, text: "Build a Backyard Office", type: "ul" },
  { indent: 1, text: "scout your backyard", type: "ol" },
  { indent: 1, text: "convince your partner", type: "ol" },
  { indent: 2, text: "measure the available space", type: "ol" },
  { indent: 2, text: "sketch the shed as thumbnails", type: "ol" },
  {
    indent: 2,
    text: "select a thumbnail to render in more detail",
    type: "ol",
  },
  { indent: 3, text: "review pinterest for inspiration", type: "ul" },
  { indent: 3, text: "consult your partner for their taste", type: "ul" },
  { indent: 3, text: "investigate laws around allowed space", type: "ul" },
  { indent: 2, text: "source materials", type: "ol" },
  { indent: 0, text: "Enjoy your shed", type: "ul" },
];

const TreeStory = ({ size = 800, fill = "white", strategy = "simple" }) => {
  return (
    <Tree
      size={size}
      fill={fill}
      instructionList={instructionList}
      strategy={strategy}
    />
  );
};

export default TreeStory;
