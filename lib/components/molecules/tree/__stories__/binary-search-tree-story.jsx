import Tree from "../tree";
import { useState } from "react";

type BinarySearchTree = {
  value: number,
  left: BinarySearchTree | null,
  right: BinarySearchTree | null,
};

// 2 children example
const twoChildrenNodeBST: BinarySearchTree = {
  value: 10,
  left: { value: 5, left: null, right: null },
  right: { value: 8, left: null, right: null },
};

const getTotal = (obj, total = 0) => {
  // exist
  if (typeof obj === "number") {
    return total + obj;
  }

  // tackle the left side
  if (obj.left) {
    return getTotal(obj.left, total);
  }
  // now the right side
  if (obj.right) {
    return getTotal(obj.right, total);
  }
  return total;
};

const total = getTotal(twoChildrenNodeBST);

// find total
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
