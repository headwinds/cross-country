import React from 'react';
import Branch from './branch';
import getImagesFromDescription from '../../../utils/golds/image-find-util';
import { getRSSBranch } from '../../../utils/golds/feed-util';

// there is a bug here that is causing the branch to be undefined!
//import killScreenBranches from './kill-screen-raw-branches';

import behanceBranches from './behance-raw-branches';
import gameSpotBranches from './game-spot-raw-branches';

const index = 0;

const convertToPortholeBranches = branches => {
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

const getBranch = (isOnlyText, hasMultiple, portholeBranchModels) => {
  const gamespotPortholeBranchModels = convertToPortholeBranches(gameSpotBranches);
  if (isOnlyText) {
    return gamespotPortholeBranchModels[0];
  } else if (hasMultiple) {
    return gamespotPortholeBranchModels[7];
  }
  return portholeBranchModels[0];
};

// note some images are super small and scaled up with distortion
// should I reject them or center them without scaling?

const BranchStory = ({ isOnlyText, hasMultiple }) => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  const branch = getBranch(isOnlyText, hasMultiple, portholeBranchModels);
  return branch ? <Branch branch={branch} /> : 'No Branch!';
};

export default BranchStory;
