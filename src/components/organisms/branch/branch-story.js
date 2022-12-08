import React from 'react';
import Branch from './branch';
import getImagesFromDescription from '../../../utils/golds/image-find-util';
import { getRSSBranch } from '../../../utils/golds/feed-util';

// there is a bug here that is causing the branch to be undefined!
import killScreenBranches from './kill-screen-raw-branches';
import behanceBranches from './behance-raw-branches';
import gameStopBranches from './game-spot-raw-branches';

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

const getBranch = (isOnlyText, hasMultiple, portholeBranchModels, isKillScreen) => {
  if (isKillScreen) {
    const killScreenPortholeBranchModels = convertToPortholeBranches(killScreenBranches);
    return killScreenPortholeBranchModels[0];
  }

  const gamestopPortholeBranchModels = convertToPortholeBranches(gameStopBranches);
  if (isOnlyText) {
    return gamestopPortholeBranchModels[0];
  } else if (hasMultiple) {
    return gamestopPortholeBranchModels[7];
  }
  return portholeBranchModels[0];
};

// note some images are super small and scaled up with distortion
// should I reject them or center them without scaling?

const BranchStory = ({ isOnlyText, hasMultiple, isKillScreen }) => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  const branch = getBranch(isOnlyText, hasMultiple, portholeBranchModels, isKillScreen);
  console.log('mock branch: ', branch);
  return branch ? <Branch branch={branch} /> : 'No Branch!';
};

export default BranchStory;
