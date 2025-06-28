import * as React from "react";
import { useState, useEffect } from "react";
//phase 2 - add offline storage for the subway!
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import {
  createAllPortholeTrees,
  getRSSBranch,
  convertToPortholeBranches,
} from "@/lib/utils/golds/feed-util";
import { fetchRetry } from "@/lib/utils/fetch-util";
import { shuffle } from "@/lib/utils/fp-util";
import Loading from "@/lib/components/molecules/loading";
import BranchList from "./branch-list";
import { mockResponse } from "./__mocks__/response";
import { PortholeBranchModel } from "@/lib/models/PortholeBranchModel";

const portholeBranches = createAllPortholeTrees();
const defaultUrls = Object.values(portholeBranches).map(({ xmlUrl }) => xmlUrl);

export interface BranchesProps {
  isTesting?: boolean;
  onLoadedCallback?: (error: any) => void;
  feedUrl?: string;
  urls?: string[];
}

// https://scout-222670816692.northamerica-northeast1.run.app/api/porthole/trees/branches

const defaultRemoteUrl =
  "https://scout-summarize.vercel.app/api/porthole/feeds";

type State = {
  feeds: any;
  branches: PortholeBranchModel[];
  hasFetched: boolean;
  allNewBranches: PortholeBranchModel[];
  feedUrl: string;
};

const Branches = ({
  isTesting = false,
  onLoadedCallback,
  feedUrl,
  urls,
}: BranchesProps) => {
  const [state, setState] = useState({
    //feeds: urls || defaultUrls,
    branches: [],
    hasFetched: false,
    allNewBranches: [],
    remoteUrl: feedUrl || defaultRemoteUrl,
  });
  const { hasFetched, allNewBranches, branches, remoteUrl } = state;

  // BFF approach where I provide a new microservice that will handle the RSS feed and return exactly what I need
  const getCabinQuestFeedFromScoutSummarizeService = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      // be careful - we don't want to use localhost on another site we should config this route
      // const localUrl = 'http://localhost:5004/api/porthole/feeds';

      const response = await fetchRetry(remoteUrl, options);
      const json = await response.json();

      onLoadedCallback(null);

      return json;
    } catch (error) {
      onLoadedCallback(error);
    }
  };

  const getMockDataAsync = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockResponse);
        onLoadedCallback(null);
      }, 0);
    });
  };

  useEffect(() => {
    async function fetchData() {
      //const portholeBranches = createAllPortholeTrees();
      //const arr = Object.values(portholeBranches);
      //const rssUrls = arr.map(({ xmlUrl }) => xmlUrl);

      const validUrls: string[] = urls || defaultUrls;

      const rss_list = validUrls.map((url) => ({
        rss_url: url,
        company: "unknown",
      }));

      const jsonData = {
        rss_list: rss_list,
      };
      const json = isTesting
        ? await getMockDataAsync()
        : await getCabinQuestFeedFromScoutSummarizeService(jsonData);
      //const json = await getCabinQuestFeedFromScoutSummarizeService(jsonData);

      const allNewBranches = convertToPortholeBranches(json.feed_responses);
      const shuffledBranches = shuffle(allNewBranches);

      // ensure all branches are unique
      const uniqueBranches = [...new Set(shuffledBranches)];
      setState({ ...state, branches: uniqueBranches });
    }
    fetchData();
  }, []);

  return branches.length === 0 ? (
    <Loading />
  ) : (
    <BranchList branches={branches} />
  );
};

export default Branches;
