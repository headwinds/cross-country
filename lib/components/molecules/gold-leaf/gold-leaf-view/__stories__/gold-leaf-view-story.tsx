import * as React from "react";
import GoldLeafView from "../gold-leaf-view";
import { getRSSBranch } from "@cross-country/utils/golds/feed-util";
import behanceBranches from "./behance-raw-branches";
import { type PortholeBranchModelType } from "@/lib/models/PortholeBranchModel";

const convertToPortholeBranches = (branches) => {
  const index = 0;
  // raw
  const newBranches = branches;

  // refined
  const portholeBranches: PortholeBranchModelType[] = newBranches.map(
    (candidateBranch, ix) => {
      return getRSSBranch(candidateBranch, index, ix);
    }
  );

  // validated
  const portholeBranchesValid = portholeBranches.filter(
    (branch) => branch !== null
  );

  return portholeBranchesValid;
};

export const getGoldLeafModel = (): PortholeBranchModelType => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  return portholeBranchModels[6];
};

const GoldLeafViewStory = () => {
  const goldLeafModel: PortholeBranchModelType = getGoldLeafModel();

  return <GoldLeafView goldLeafModel={goldLeafModel} />;
};

export default GoldLeafViewStory;
