import * as React from 'react';
import GoldLeafView from '../gold-leaf-view';
import getImagesFromDescription from '../../../../utils/golds/image-find-util';
import { getRSSBranch } from '../../../../utils/golds/feed-util';
import behanceBranches from './behance-raw-branches';

const convertToPortholeBranches = branches => {
  const index = 0;
  // raw
  const newBranches = branches;
  // refined
  const portholeBranches = newBranches.map((candidateBranch, ix) => {
    return getRSSBranch(candidateBranch, index, ix);
  });
  // validated
  const portholeBranchesValid = portholeBranches.filter(branch => branch !== null);

  return portholeBranchesValid;
};

const getBranch = () => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  return portholeBranchModels[6];
};

const GoldLeafViewStory = ({ isOnlyText, hasMultiple, isKillScreen }) => {
  const goldLeafModel = getBranch();
  return <GoldLeafView goldLeafModel={goldLeafModel} />;
};

export default GoldLeafViewStory;
