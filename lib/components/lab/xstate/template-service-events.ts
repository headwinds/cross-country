// TODO type check
// @ts-nocheck
/*
minimum helper file to talk to the server 

You can copy and paste this file into your project to get started more quickly.
*/

import { assign, fromPromise } from "xstate";
import {
  getUserOrAnonUserRoute,
  domain,
} from "../../../../utils/server-side-util";

type ServiceInputType = {
  user_account_id: string;
};

const callService = fromPromise<string[], ServiceInputType>(
  async ({ input }) => {
    const fetchUrl = getUserOrAnonUserRoute(input);

    const { user_account_id } = input;

    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    return response.json();
  }
);

const POSTING_SERVICE_NAME_HERE = {
  invoke: {
    id: "postingServiceHere",
    src: saveListicleItem,
    input: ({ context }) => {
      return {
        user_account_id: context?.userAccountId ?? null,
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        serviceResponse: ({ context, event }) => {
          return event.output;
        },
      }),
    },
    onError: {
      target: "POSTING_SERVICE_NAME_HERE_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const POSTING_SERVICE_NAME_HERE_ERROR = {
  on: {
    RETRY: "idle",
    SET_ERROR: {
      actions: assign({
        error: ({ context, event }) => {
          return event.error;
        },
      }),
    },
  },
};

export const POSTING_SERVICE_NAME_HERE_EVENTS = {
  POSTING_SERVICE_NAME_HERE,
  POSTING_SERVICE_NAME_HERE_ERROR,
};
