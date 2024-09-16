// TODO type check
// @ts-nocheck
import { assign, fromPromise } from "xstate";
import {
  getUserOrAnonUserRoute,
  domain,
} from "../../../../utils/server-side-util";

type ServiceInputType = {
  domain: string;
  url: string;
  route: string;
};

const route = "/api/listicle/url-preview/";

const getUrlPreview = fromPromise<string[], ServiceInputType>(
  async ({ input }) => {
    const { domain, url, route } = input;
    const fetchUrl = `${domain}${route}${url}`;

    const { user_account_id } = input;

    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  }
);

const GETTING_URL = {
  invoke: {
    id: "getUrl",
    src: getUrlPreview,
    input: ({ context }) => {
      return {
        route: context.route,
        url: context.url,
        domain: context.domain,
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        data: ({ context, event }) => {
          return event.data;
        },
      }),
    },
    onError: {
      target: "GETTING_URL_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const GETTING_URL_ERROR = {
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

export const CARD_URL_EVENTS = {
  GETTING_URL,
  GETTING_URL_ERROR,
};
