import GoldLeaf from './';
import getImagesFromDescription from '../../../utils/golds/image-find-util';
import { getRSSBranch } from '../../../utils/golds/feed-util';
import behanceBranches from './behance-raw-branches';

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

const GoldLeafStory = ({ config }) => {
  const portholeBranchModels = convertToPortholeBranches(behanceBranches);
  const goldLeafModel = portholeBranchModels[0];
  return <GoldLeaf goldLeafModel={goldLeafModel} config={config} />;
};

export default GoldLeafStory;
