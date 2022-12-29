import * as React from 'react';
import { useState, useEffect } from 'react';
//phase 2 - add offline storage for the subway!
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { createAllPortholeTrees, getRSSBranch, convertToPortholeBranches } from '../../../utils/golds/feed-util';
import { getAllItemsFromStore } from '../../../utils/golds/indexdb-util';
import { fetchRetry } from '../../../utils/fetch-util';
import { differenceBy, shuffle } from '../../../utils/fp-util';
import { Row } from '../../../';
import BranchList from './branch-list';

import styles from './branches.scss';

const Branches = () => {
  const [state, setState] = useState({
    feeds: createAllPortholeTrees(),
    branches: [],
    hasFetched: false,
    allNewBranches: [],
  });
  const { hasFetched, allNewBranches, branches } = state;

  // BFF approach where I provide a new microservice that will handle the RSS feed and return exactly what I need
  const getCabinQuestFeedFromScoutSummarizeService = async data => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch('https://scout-summarize.vercel.app/api/porthole/feeds', options);
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    async function fetchData() {
      const portholeBranches = createAllPortholeTrees();
      const arr = Object.values(portholeBranches);
      const rssUrls = arr.map(({ xmlUrl }) => xmlUrl);

      const jsonData = {
        rssUrls,
      };
      const json = await getCabinQuestFeedFromScoutSummarizeService(jsonData);

      const allNewBranches = convertToPortholeBranches(json.feed_responses);
      const shuffledBranches = shuffle(allNewBranches);

      // ensure all branches are unique
      const uniqueBranches = [...new Set(shuffledBranches)];
      setState({ ...state, branches: uniqueBranches });
    }
    fetchData();
  }, []);

  return <BranchList branches={branches} />;
};

export default Branches;
