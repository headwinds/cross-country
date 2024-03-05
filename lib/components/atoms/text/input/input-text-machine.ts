// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build
import { assign, setup, assertEvent, fromPromise, raise } from "xstate";

const debounceFetch = fromPromise<string[], { search: string }>(
  async (props) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    //console.log("debounceFetch props ", props);
    const { input, system, self } = props;
    //console.log("Actor debounceFetch props:", props);

    const { search } = input; // search or command or query

    if (search === "get dragons") {
      //emit({ type: "GET_DRAGONS", data: { search } });
      //self._parent.send({ type: "GET_DRAGONS", data: { search } });
      return console.log("get dragons called after 500 ms!");
    }

    //self._parent.send({ type: "DEBOUNCE_COMPLETE" });

    return console.log("debounceFetch called after 500 ms ", search);
  }
);

export const inputTextMachine = setup({
  types: {
    events: {} as
      | { type: "input.focus" }
      | { type: "input.change"; searchInput: string }
      | { type: "DEBOUNCE_COMPLETE"; searchInput: string }
      | { type: "GET_DRAGONS"; searchInput: string }
      | { type: "item.click"; itemId: number }
      | { type: "item.mouseenter"; itemId: number }
      | { type: "item.mouseleave" },
    context: {} as {
      searchInput: string;
      lastFetchedSearch: string;
    },
    tags: "Display loader",
  },
  actions: {
    "Assign search input to context": assign({
      searchInput: ({ event }) => {
        assertEvent(event, "input.change");

        return event.searchInput;
      },
    }),
    "Assign search input to debounced search input to context": assign({
      debouncedSearchInput: ({ context }) => {
        return context.searchInput;
      },
    }),
    "Assign selected item as current search input into context": assign({
      searchInput: ({ context, event }) => {
        assertEvent(event, "item.click");

        return context.availableItems[event.itemId];
      },
    }),
    "Assign last fetched search into context": assign({
      lastFetchedSearch: ({ context }) => context.searchInput,
      debouncedSearchInput: ({ context }) => context.searchInput,
    }),
  },
  guards: {
    "Has search query been fetched": ({ context }) =>
      context.searchInput === context.lastFetchedSearch,
  },
  actors: {
    "Debounce fetch": debounceFetch,
  },
}).createMachine({
  id: "textInput",
  context: {
    searchInput: "",
    debouncedSearchInput: "",
    lastFetchedSearch: "",
    status: "idle",
  },
  initial: "Inactive",
  states: {
    Inactive: {
      on: {
        "input.focus": {
          target: "Active",
        },
      },
    },
    Active: {
      entry: "Reset active item index into context",
      initial: "Checking if initial fetching is required",
      states: {
        "Checking if initial fetching is required": {
          description: `After an item has been clicked and used as the new search query, we want to fetch its related results but only if they have not already been fetched.`,
          always: [
            {
              guard: "Has search query been fetched",
              target: "Idle",
            },
            {
              target: "Fetching",
            },
          ],
        },
        Idle: {},
        Debouncing: {
          after: {
            500: {
              target: "Fetching",
            },
          },
        },
        Fetching: {
          tags: "Display loader",
          invoke: {
            src: "Debounce fetch",
            input: ({ context }) => ({
              search: context.searchInput,
            }),
            onDone: {
              target: "DEBOUNCE_COMPLETE",
              actions: "Assign last fetched search into context",
            },
          },
          on: {
            PERPLEXITY_RESPONSE_COMPLETE: {
              target: "Idle",
              actions: "Assign last fetched search into context",
            },
          },
        },
        DEBOUNCE_COMPLETE: {
          actions: assign({
            debouncedSearchInput: ({ context }) => context.searchInput,
          }),
        },
      },
      on: {
        "input.change": {
          target: ".Debouncing",
          reenter: true,
          actions: "Assign search input to context",
        },
        "item.mouseenter": {
          actions: "Assign active item index to context",
        },
        "item.mouseleave": {
          actions: "Reset active item index into context",
        },
        "item.click": {
          target: "Inactive",
          actions: [],
        },
      },
    },
  },
});
