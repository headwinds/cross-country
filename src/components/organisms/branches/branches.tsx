import * as React from 'react';
import { useState, useEffect } from 'react';
//phase 2 - add offline storage for the subway!
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { createAllPortholeTrees, getRSSBranch, convertToPortholeBranches } from '../../../utils/golds/feed-util';
import { getAllItemsFromStore } from '../../../utils/golds/indexdb-util';
import { fetchRetry } from '../../../utils/fetch-util';
import { shuffle } from '../../../utils/fp-util';
import { Loading } from '../../../';
import BranchList from './branch-list';
import { mockResponse } from './__mocks__/response';

type BranchesProps = {
  isTesting?: boolean;
  isLoading?: boolean;
};

const Branches = ({ isTesting = false, isLoading = false }: BranchesProps) => {
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
    try {
      // be careful - we don't want to use localhost on another site we should config this route
      // const localUrl = 'http://localhost:5004/api/porthole/feeds';
      const remoteUrl = 'https://scout-summarize.vercel.app/api/porthole/feeds';

      const response = await fetchRetry(remoteUrl, options);
      const json = await response.json();

      return json;
    } catch (error) {}
  };

  const getMockDataAsync = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockResponse);
      }, 0);
    });
  };

  useEffect(() => {
    async function fetchData() {
      const portholeBranches = createAllPortholeTrees();
      const arr = Object.values(portholeBranches);
      const rssUrls = arr.map(({ xmlUrl }) => xmlUrl);

      const jsonData = {
        rssUrls,
      };
      const json = isTesting ? await getMockDataAsync() : await getCabinQuestFeedFromScoutSummarizeService(jsonData);
      //const json = await getCabinQuestFeedFromScoutSummarizeService(jsonData);

      const allNewBranches = convertToPortholeBranches(json.feed_responses);
      const shuffledBranches = shuffle(allNewBranches);

      // ensure all branches are unique
      const uniqueBranches = [...new Set(shuffledBranches)];
      setState({ ...state, branches: uniqueBranches });
    }
    fetchData();
  }, []);

  return branches.length === 0 ? <Loading /> : <BranchList branches={branches} />;
};

export default Branches;
