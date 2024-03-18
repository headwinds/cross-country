// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import { setup, createActor, fromPromise, assign, raise } from "xstate";
import getPerplexityResponse from "./perplexity-service";

const domain = "https://localhost:5000";

// credit
// https://stately.ai/docs/invoke

const fetchFromPerplexityAPI = fromPromise<string[], { query: string }>(
  async (props) => {
    const { query, system, self } = props;
    const response = await getPerplexityResponse(query);

    return { response };
  }
);

const fetchDragons = (userId: string) =>
  fetch(`${domain}/api/dragons`).then((response) => response.json());

export const dragonsMachine = setup({
  actors: {
    "fetch preplexity": fetchFromPerplexityAPI,
  },
}).createMachine({
  types: {} as {
    context: {
      message: object | null;
      status: string;
      query: string;
      response: object | null;
      error: unknown;
    };
  },
  id: "dragons",
  initial: "idle",
  context: {
    message: null,
    error: null,
    status: "idle",
    query: "hello",
    response: null,
  },
  states: {
    idle: {
      on: {
        FETCH: {
          target: "loading",
          actions: assign({
            status: ({ context, event }) => {
              return "loading";
            },
          }),
        },
        SET_PREPLEXITY_RESPONSE: {
          actions: assign({
            response: ({ context, event }) => {
              return event.response;
            },
          }),
        },
        CALL_PERPLEXITY: {
          /*
          invoke: {
            src: "fetch preplexity",
            onDone: {
              target: "fetchFromPerplexityAPISuccess",
              //actions: raise("PERPLEXITY_RESPONSE_COMPLETE"), // Ensure this action is correctly defined
            },
          },*/
          target: "ON_PERPLEXITY_QUERY",
          actions: assign({
            query: ({ context, event }) => {
              //"fetchFromPerplexityAPISuccess",
              return event.query;
            },
            status: ({ context, event }) => {
              return "calling perplexity...";
            },
          }),
        },
      },
    },
    PREPLEXITY_COMPLETE: {
      target: "idle",
    },
    ON_PERPLEXITY_QUERY: {
      invoke: {
        src: "fetch preplexity",
        input: ({ context }) => ({
          query: context.query,
        }),
        onDone: {
          target: "PREPLEXITY_COMPLETE",
          actions: assign({
            response: ({ context, event }) => {
              //"fetchFromPerplexityAPISuccess",
              console.log("Perplexity response complete event: ", event);
              return event.output.response;
            },
          }),
          //actions: raise("PERPLEXITY_RESPONSE_COMPLETE"), // Ensure this action is correctly defined
        },
        actions: assign({
          query: ({ context, event }) => {
            //"fetchFromPerplexityAPISuccess",
            return event.query;
          },
        }),
      },
    },
    loading: {
      invoke: {
        id: "getDragons",
        src: "fetchDragons",
        input: ({ context: { userId } }) => ({ userId }),
        onDone: {
          target: "getDragonsSuccess",
          actions: assign({ message: ({ event }) => event.output }),
        },
        onError: {
          target: "getDragonsFailure",
          actions: assign({ error: ({ event }) => event.error }),
        },
      },
    },
    getDragonsSuccess: {},
    getDragonsFailure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
    PERPLEXITY_QUERY: {
      invoke: {
        src: "fetchFromPerplexityAPI",
        onDone: {
          target: "fetchFromPerplexityAPISuccess",
          //actions: raise("PERPLEXITY_RESPONSE_COMPLETE"), // Ensure this action is correctly defined
        },
      },
    },
    fetchFromPerplexityAPISuccess: {
      actions: assign({
        status: ({ context, event }) => {
          //"fetchFromPerplexityAPISuccess",
          console.log("Perplexity response complete event: ", event);
        },
      }),
    },
  },
});
