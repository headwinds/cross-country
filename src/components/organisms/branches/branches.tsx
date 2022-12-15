import * as React from 'react';
import { useState, useEffect } from 'react';
import { getOffline, putOffline } from '../../../utils/golds/offline-util';
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
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    let p = await fetch('https://scout-summarize.vercel.app/api/porthole/feeds', options);
    let response = await p.json();
    return response;
  };

  useEffect(() => {
    async function fetchData() {
      const portholeBranches = createAllPortholeTrees();
      const arr = Object.values(portholeBranches);
      const rssUrls = arr.map(({ xmlUrl }) => xmlUrl);

      const jsonData = {
        rssUrls,
      };
      // You can await here
      const response = await getCabinQuestFeedFromScoutSummarizeService(jsonData);

      const allNewBranches = convertToPortholeBranches(response.feed_responses);
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

/*

/*

  TO DO - refactor out offline storage and retrieval

  const getCabinQuestFeed = () => {
    const { feeds } = state;
    let allNewBranches = [];
    let feedsComplete = 0;
    //let feedsFailed = 0; // no feeds should fail if I'm online! same with off ;-D
    let totalFeeds = 0;

    const updateAll = () => {
      if (feedsComplete === totalFeeds - 1) {
        // remove all branches marked read
        getAllItemsFromStore('porthole').then(response => {
          const allBranchesMarkedRead = response.filter(item => item.bTrashed);

          // remove the branches that have been trashed
          const allNewBranchesNotRead = differenceBy(allNewBranches, allBranchesMarkedRead, 'link');

          // update branches that have been trained
          const allBranchesTrained = response.filter(item => item.bViewed && !item.bTrashed);
          const getViewed = branch => {
            const foundBranch = allBranchesTrained.filter(trainedBranch => trainedBranch.link === branch.link);
            return foundBranch.length > 0;
          };
          const allBranches = allNewBranchesNotRead.map(branch => {
            const bViewed = getViewed(branch);
            return { ...branch, bViewed };
          });

          // finally shuffle them
          const shuffledBranches = shuffle(allBranches);
          setState({ ...state, feedsComplete, branches: shuffledBranches });
        });
      }
      feedsComplete++;
    };
    const loadFeed = (feed, index) => {
      const path = `https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=${feed.xmlUrl}`;
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
      fetch(path)
        .then(
          success => {
            return success.json();
          },
          fail => {
            getOffline(path).then(
              storedBranches => {
                const storedPortholeBranchesValid = convertToPortholeBranches(storedBranches);
                allNewBranches =
                  storedPortholeBranchesValid.length > 0
                    ? allNewBranches.concat(storedPortholeBranchesValid)
                    : allNewBranches;
                updateAll();
              },
              fail => {
                console.log('fail offline: ', fail);
              }
            );
          }
        )
        .then(data => {
          const portholeBranchesValid = convertToPortholeBranches(data?.branches ?? []);

          allNewBranches =
            portholeBranchesValid.length > 0 ? allNewBranches.concat(portholeBranchesValid) : allNewBranches;

          // let's the library working deployed to Vercel first and then wory about offline
          // offline storage needs to be tested and refactored
          putOffline(path, data);
          updateAll();

          // remove the branches that have been trashed

          const shuffledBranches = shuffle(allNewBranches);

          // ensure all branches are unique
          const uniqueBranchs = [...new Set(shuffledBranches)];
          setState({ ...state, branches: uniqueBranchs });
        });
    };

    for (let feedIdx in feeds) {
      loadFeed(feeds[feedIdx], feedIdx);
      totalFeeds++;
    }
  };
  */
