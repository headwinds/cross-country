import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import { createAllPortholeTrees, getRSSBranch } from '../../../utils/golds/feed-util';
import { getAllItemsFromStore } from '../../../utils/golds/indexdb-util';
import Branch from './branch';
import styles from './branches.scss';

// https://stackoverflow.com/questions/54919522/lodash-differenceby-in-vanilla-javascript
function differenceBy(array1, array2, key) {
  return array1.filter(a => !array2.some(b => b[key] === a[key]));
}

// https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

class Branches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: createAllPortholeTrees(),
      branches: [],
    };
  }
  componentDidMount() {
    this.getCabinQuestFeed();
  }
  getCabinQuestFeed() {
    const self = this;

    const { feeds } = this.state;
    let allNewBranches = [];
    let feedsComplete = 0;
    //let feedsFailed = 0; // no feeds should fail if I'm online! same with off ;-D
    let totalFeeds = 0;
    console.log('totalFeeds: ', totalFeeds);

    const updateAll = () => {
      if (feedsComplete === totalFeeds - 1) {
        // remove all branches marked read
        getAllItemsFromStore('porthole').then(response => {
          console.log('store reponse: ', response);
          const allBranchesMarkedRead = response.filter(item => item.bTrashed);

          // remove the branches that have been trashed
          const allNewBranchesNotRead = differenceBy(allNewBranches, allBranchesMarkedRead, 'link');
          /*
            console.log("DIF -----------------: ");
            console.log("allBranchesMarkedRead", allBranchesMarkedRead.length);
            console.log("allNewBranches", allNewBranches.length);
            console.log("allNewBranchesNotRead", allNewBranchesNotRead.length);
            */
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
          console.log('allBranches: ', allBranches);
          // finally shuffle them
          const shuffledBranches = shuffle(allBranches);
          self.setState({ feedsComplete, branches: shuffledBranches });
        });
      }
      feedsComplete++;
    };
    const loadFeed = (feed, index) => {
      const path = `https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=${feed.xmlUrl}`;
      const convertToPortholeBranches = branches => {
        console.log('branches 111111: ', branches);
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
            console.log('fail online: ', fail);
            getOffline(path).then(
              storedBranches => {
                console.log('success getOffline: ', storedBranches);
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
          console.log('successfully loaded portholeBranchesValid:', data);
          const portholeBranchesValid = convertToPortholeBranches(data?.branches ?? []);
          console.log('successfully loaded portholeBranchesValid:', feed.title);
          console.log('successfully loaded portholeBranchesValid:', portholeBranchesValid);
          allNewBranches =
            portholeBranchesValid.length > 0 ? allNewBranches.concat(portholeBranchesValid) : allNewBranches;

          putOffline(path, data);
          updateAll();
          self.setState({ branches: allNewBranches });
        });
    };
    for (let feedIdx in feeds) {
      loadFeed(feeds[feedIdx], feedIdx);
      totalFeeds++;
    }
  }

  render() {
    const { branches } = this.state;
    console.log('Branches render branches: ', branches);
    const getCards = cardBranches => {
      if (cardBranches.length === 0) {
        return null;
      } else {
        return cardBranches.map((branch, idx) => {
          if (branch && branch !== null && branch.text) {
            const clean = sanitizeHtml(branch.text, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
              allowedAttributes: {
                a: ['href', 'target'],
                img: ['src'],
              },
            });
            return (
              <li className={styles.card__item} key={idx}>
                <Branch branch={branch} />
              </li>
            );
          } else {
            return null;
          }
        });
      }
    };
    const getColumns = () => {
      console.log('branches getColumns: ', branches);
      if (branches.length === 0) {
        return null;
      } else {
        const width = window.innerWidth;
        const cardWidth = 300;
        const totalColumns = Math.floor(width / cardWidth);
        const totalBranchesPerColumn = Math.floor(branches.length / totalColumns);
        console.log('branches totalBranchesPerColumn: ', totalBranchesPerColumn);
        const list = [];
        let columnCount = 0;
        const addList = () => {
          const startIndex = columnCount * totalBranchesPerColumn;
          const endIndex = totalBranchesPerColumn * (columnCount + 1);
          const cardBranches = branches.slice(startIndex, endIndex);

          const column = (
            <li className={styles.column__item} key={`col${columnCount}`}>
              <ul className={styles.card__list}>{getCards(cardBranches)}</ul>
            </li>
          );
          list.push(column);
          columnCount++;
        };
        branches.forEach(addList);

        console.log('list: ', list);

        // what is this doing?!
        // Array.from(Array(totalColumns)).forEach((x, i) => { addList() });
        // _.times(totalColumns, addList)

        return list;
      }
    };
    return (
      <section className={styles.Porthole}>
        <ul className={styles.column__list}>{getColumns()}</ul>
      </section>
    );
  }
}
export default Branches;
