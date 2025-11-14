import { useEffect, useRef, useState } from "react";
import { Column, List, ListItem, Row } from "../../..";
import Branch from "../branch";
import styles from "./branches.module.css";
import { PortholeBranchModel } from "@headwinds/cross-country/models/PortholeBranchModel";
import { GOLD_LEAF_WIDTH } from "../../molecules/gold-leaf/gold-leaf-view/gold-leaf-view";

const cardWidth = GOLD_LEAF_WIDTH;

export interface BranchListProps {
  branches: PortholeBranchModel[];
  variant?: "rss" | "email";
}

const BranchList = ({ branches, variant }: BranchListProps) => {
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
  }, []);

  const getCards = (cardBranches) => {
    if (!cardBranches || cardBranches.length === 0) {
      return null;
    }

    // Filter out any null or undefined branches first
    const validBranches = cardBranches.filter((branch) => {
      return branch && Object.keys(branch).length > 0;
    });

    // If no valid branches after filtering, return null
    if (validBranches.length === 0) {
      return null;
    }

    // Create and filter the list items in a single pass
    const items = validBranches
      .map((branch, idx) => {
        const branchContent = <Branch branch={branch} variant={variant} />;
        if (!branchContent) return null;

        return (
          <ListItem
            customClass={styles.card__item}
            key={`${branch.id}-${idx}`}
            customStyle={{ listStyle: "none" }}
            id={`${branch.id}`}
          >
            {branchContent}
          </ListItem>
        );
      })
      .filter(Boolean);

    return items.length > 0 ? items : null;
  };

  const getColumn = (totalBranchesPerColumn, branches, columnCount) => {
    const startIndex = columnCount * totalBranchesPerColumn;
    const endIndex = totalBranchesPerColumn * (columnCount + 1);
    const cardBranches = branches.slice(startIndex, endIndex);

    const cards = getCards(cardBranches);
    if (!cards) return null;

    return (
      <Column
        customClass={`${styles.card__column} ${styles.column__item}`}
        key={`col${columnCount}`}
      >
        <List customClass={styles.card__list}>{cards}</List>
      </Column>
    );
  };

  const getColumns = (branches) => {
    if (!branches?.length || !totalColumns) {
      return null;
    }

    const totalBranchesPerColumn = Math.ceil(branches.length / totalColumns);
    const columns = Array.from({ length: totalColumns }, (_, i) =>
      getColumn(totalBranchesPerColumn, branches, i)
    ).filter(Boolean);

    return columns.length > 0 ? columns : null;
  };

  return (
    <Row dataTestId="branch-list" customClass={styles.column__list} ref={ref}>
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
