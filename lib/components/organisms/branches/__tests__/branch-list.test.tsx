import React from 'react';
import { render } from '@testing-library/react';
import { createAllPortholeTrees, getRSSBranch, convertToPortholeBranches } from '../../../../utils/golds/feed-util';
import { getAllItemsFromStore } from '../../../../utils/golds/indexdb-util';
import { differenceBy, shuffle } from '../../../../utils/fp-util';

import { BranchType } from '../../../../types/branch.type';
import { BranchListProps } from '../branch-list.types';
import { response } from '../__mocks__/branches-mock';
import BranchList from '../branch-list';

const allNewBranches = convertToPortholeBranches(response.feed_responses);
const shuffledBranches = shuffle(allNewBranches);

// ensure all branches are unique
const uniqueBranches = [...new Set<BranchType>(shuffledBranches)];

describe('Test Component', () => {
  let props: BranchListProps;

  beforeEach(() => {
    props = {
      branches: uniqueBranches,
    };
  });

  const renderComponent = () => render(<BranchList {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('branch-list');

    expect(component).toBeTruthy();
  });
});
