import { useEffect, useRef, useState } from "react";
import { Column, List, ListItem, Row } from "../../..";
import Branch from "../branch";
import styles from "./branches.module.css";
import PortholeBranchModel from "@cross-country/models/PortholeBranchModel";

const cardWidth = 375; // smaller phones like iPhone have 375px width

export interface BranchListProps {
  branches: PortholeBranchModel[];
}

const BranchList = ({ branches }: BranchListProps) => {
  const ref = useRef(null);
  const [totalColumns, setTotalColumns] = useState(0);

  const calcTotalColumns = (width: number) => {
    const calcTotalColumns = Math.floor(width / cardWidth);
    const totalColumns = calcTotalColumns > 0 ? calcTotalColumns : 1;
    setTotalColumns(totalColumns);
  };

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current?.offsetWidth) {
        const width = ref.current.offsetWidth;
        calcTotalColumns(width);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener("resize", handleResize);
  }, [totalColumns]);

  const getCards = (cardBranches) => {
    if (cardBranches.length === 0) {
      return null;
    } else {
      return cardBranches.map((branch, idx) => {
        if (branch) {
          return (
            <ListItem
              className={styles.card__item}
              key={idx}
              customStyle={{ listStyle: "none" }}
            >
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

    const columnProps = {
      customClass: styles.column__item,
    };

    const column = (
      <Column
        {...columnProps}
        customClass={styles.card__column}
        key={`col${columnCount}`}
      >
        <List customClass={styles.card__list}>{getCards(cardBranches)}</List>
      </Column>
    );

    return column;
  };

  const getColumns = (branches) => {
    if (branches.length === 0) {
      return null;
    } else if (totalColumns) {
      const totalBranchesPerColumn = Math.floor(branches.length / totalColumns);
      const range = [...Array(totalColumns).keys()];

      const list = range.map((columnCount) => {
        return getColumn(totalBranchesPerColumn, branches, columnCount);
      });

      return list;
    }
  };

  return (
    <Row data-testid="branch-list" customClass={styles.column__list} ref={ref}>
      {getColumns(branches)}
    </Row>
  );
};

export default BranchList;

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
