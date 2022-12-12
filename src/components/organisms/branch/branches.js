import React, { useState, useEffect } from 'react';
import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { createAllPortholeTrees, getRSSBranch } from '../../../utils/golds/feed-util';
import { getAllItemsFromStore } from '../../../utils/golds/indexdb-util';
import { getWindow } from '../../../utils/server-side-util';
import { fetchRetry } from '../../../utils/fetch-util';
import Branch from './branch';
import styles from './branches.scss';
import { Column, Row, List, ListItem } from '../../../';

// https://stackoverflow.com/questions/54919522/lodash-differenceby-in-vanilla-javascript
function differenceBy(array1, array2, key) {
  return array1.filter(a => !array2.some(b => b[key] === a[key]));
}

// https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const Branches = props => {
  const [state, setState] = useState({
    feeds: createAllPortholeTrees(),
    branches: [],
    hasFetched: false,
    allNewBranches: [],
  });
  const { hasFetched, allNewBranches } = state;

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

  const convertToPortholeBranches = branches => {
    // raw
    const newBranches = branches;
    // refined
    const portholeBranches = newBranches.map((candidateBranch, ix) => {
      return getRSSBranch(candidateBranch, 0, ix);
    });
    // validated
    const portholeBranchesValid = portholeBranches.filter(branch => branch !== null);

    return portholeBranchesValid;
  };

  useEffect(() => {
    async function fetchData() {
      const portholeBranches = createAllPortholeTrees();
      const arr = Object.values(portholeBranches);
      const rssUrls = arr.map(branch => branch.xmlUrl);

      const jsonData = {
        rssUrls,
      };
      // You can await here
      const response = await getCabinQuestFeedFromScoutSummarizeService(jsonData);

      const allNewBranches = convertToPortholeBranches(response.feed_responses);
      const shuffledBranches = shuffle(allNewBranches);

      // ensure all branches are unique
      const uniqueBranchs = [...new Set(shuffledBranches)];
      setState({ ...state, branches: uniqueBranchs });
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

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

  const getCards = cardBranches => {
    if (cardBranches.length === 0) {
      return null;
    } else {
      return cardBranches.map((branch, idx) => {
        if (branch && branch !== null && branch.text) {
          // need an alternative to santize as breaks rollup!
          /*
          const clean = sanitizeHtml(branch.text, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: {
              a: ['href', 'target'],
              img: ['src'],
            },
          });
          */

          return (
            <ListItem className={styles.card__item} key={idx}>
              <Branch branch={branch} />
            </ListItem>
          );
        } else {
          return null;
        }
      });
    }
  };

  const getColumn = (totalBranchesPerColumn, branches, columnCount) => {
    const startIndex = columnCount * totalBranchesPerColumn;
    const endIndex = totalBranchesPerColumn * (columnCount + 1) - 1;
    const cardBranches = branches.slice(startIndex, endIndex);

    const column = (
      <Column customClass={styles.column__item} key={`col${columnCount}`}>
        <List customClass={styles.card__list}>{getCards(cardBranches)}</List>
      </Column>
    );

    return column;
  };

  const getColumns = branches => {
    const screenWindow = getWindow();
    if (branches.length === 0) {
      return null;
    } else if (screenWindow) {
      const width = screenWindow?.innerWidth;
      const cardWidth = 300;
      const totalColumns = Math.floor(width / cardWidth);

      const totalBranchesPerColumn = Math.floor(branches.length / totalColumns);
      const range = [...Array(totalColumns).keys()];

      const list = range.map(columnCount => {
        return getColumn(totalBranchesPerColumn, branches, columnCount);
      });

      return list;
    }
  };

  const renderUi = () => {
    const { branches } = state;

    return <Row customClass={styles.column__list}>{getColumns(branches)}</Row>;
  };

  return renderUi();
};

export default Branches;
