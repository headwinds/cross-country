import * as React from "react";
import GoldLeaf from "../gold-leaf";
import { getRSSBranch } from "../../../../utils/golds/feed-util";
import behanceBranches from "../behance-raw-branches";

const convertToPortholeBranches = (branches) => {
  const index = 0;
  // raw
  const newBranches = branches;
  // refined
  const portholeBranches = newBranches.map((candidateBranch, ix) => {
    return getRSSBranch(candidateBranch, index, ix);
  });
  // validated
  const portholeBranchesValid = portholeBranches.filter(
    (branch) => branch !== null
  );

  return portholeBranchesValid;
};

export const getGoldLeafModel = () => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  return portholeBranchModels[6];
};

const GoldLeafStory = () => {
  const goldLeafModel = getGoldLeafModel();
  return <GoldLeaf goldLeafModel={goldLeafModel} />;
};

export default GoldLeafStory;
