import * as React from "react";
import { useState, useEffect } from "react";
//phase 2 - add offline storage for the subway!
//import { getOffline, putOffline } from '../../../utils/golds/offline-util';
import {
  createAllPortholeTrees,
  getRSSBranch,
  convertToPortholeBranches,
} from "@/utils/golds/feed-util";
import { fetchRetry } from "@/utils/fetch-util";
import { shuffle } from "@/utils/fp-util";
import Loading from "@/components/molecules/loading";
import BranchList from "./branch-list";
import BranchesEmpty from "./branches-empty";
import { mockResponse } from "./__mocks__/response";
import type { PortholeBranchModel, EmailModel } from "@/models";
import { set } from "react-hook-form";

const portholeBranches = createAllPortholeTrees();
const defaultUrls = Object.values(portholeBranches).map(({ xmlUrl }) => xmlUrl);

export type GenericFetch = <T>() => Promise<T>;

export interface Service<T> {
  fetchData: () => Promise<T>;
}

export interface BranchesProps<T> {
  isTesting?: boolean;
  onLoadedCallback?: (error: any) => void;
  feedUrl?: string;
  urls?: string[];
  service?: Service<T> | null;
  variant?: "email" | "rss";
}

const defaultRemoteUrl =
  "https://scout-222670816692.northamerica-northeast1.run.app/api/soloscout/trees";

type BranchesState = {
  feeds: any;
  branches: PortholeBranchModel[] | EmailModel[];
  hasFetched: boolean;
  allNewBranches: PortholeBranchModel[];
  remoteUrl: string;
};

const Branches = ({
  isTesting = false,
  onLoadedCallback,
  feedUrl,
  urls,
  service = null,
  variant = "rss",
}: BranchesProps<GenericFetch>) => {
  const [state, setState] = useState<BranchesState>({
    feeds: urls || defaultUrls,
    branches: [],
    hasFetched: false,
    allNewBranches: [],
    remoteUrl: feedUrl || defaultRemoteUrl,
  });
  const { hasFetched, allNewBranches, branches, remoteUrl } = state;

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

  const fetchRSSData = async () => {
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
    setState({
      ...state,
      branches: uniqueBranches as unknown as PortholeBranchModel[],
      hasFetched: true,
      allNewBranches: uniqueBranches as unknown as PortholeBranchModel[],
    });
  };

  const fetchDataWithService = async () => {
    const data = await service?.fetchData();
    if (variant === "email") {
      const emailBranches = data as unknown as EmailModel[];
      setState({
        ...state,
        branches: emailBranches as unknown as EmailModel[],
        hasFetched: true,
      });
    } else {
      console.warn("No service fetch implemented for this variant");
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (variant === "email" && service) {
        await fetchDataWithService();
      } else {
        await fetchRSSData();
      }
    }
    fetchData();
  }, []);

  return branches.length === 0 ? (
    hasFetched ? (
      <BranchesEmpty />
    ) : (
      <Loading />
    )
  ) : (
    <BranchList branches={branches} variant={variant} />
  );
};

export default Branches;
