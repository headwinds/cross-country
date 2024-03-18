import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

type LoadListicleInputType = {
  anon_user_account_id: string;
  user_account_id: string;
  title: string;
};

const loadListicle = fromPromise<string[], LoadListicleInputType>(
  async ({ input }) => {
    console.log("Invoked loadListicle", input);

    const fetchUrl = getUserOrAnonUserRoute(input);

    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  }
);

const LOADING_LISTICLE = {
  invoke: {
    id: "loadingListicle",
    src: loadListicle,
    input: ({ context }) => {
      console.log("Machine LOADING_LISTICLE");
      return {
        user_account_id: context.userAccountId,
        anon_user_account_id: context.anonUserAccountId,
        title: context.title,
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        loadListiceResponse: ({ context, event }) => {
          console.log(
            "LOADING_LISTICLE_SUCCESS onDone loadListiceResponse: ",
            event.output
          );
          return event.output;
        },
        isExistingListicle: ({ context, event }) => {
          if (event.output?.message === "there is no listicle") {
            return null;
          }
          return context.isExistingListicle;
        },
        loadFeedback: ({ context, event }) => {
          if (event.output?.message === "there is no listicle") {
            return "There is no listicle with that title";
          }
          return null;
        },
        lastSavedListicleTitle: ({ context, event }) => {
          // also set the title to local storage
          console.log(
            "LOADING_LISTICLE_SUCCESS onDone lastSavedListicleTitle: ",
            event
          );
          if (event.output?.listicle_items?.length > 0) {
            const lastSavedListicleTitle =
              event.output?.listicle_items[0].title;
            localStorage.setItem(
              "lastSavedListicleTitle",
              lastSavedListicleTitle
            );
            return lastSavedListicleTitle;
          }

          return context.title;
        },
        listicleItems: ({ context, event }) => {
          // ensure ids are strings
          const listicleItems = event.output?.listicle_items ?? [];
          const listicleItemsWithStringIds = listicleItems.map((item) => ({
            ...item,
            id: item.id.toString(),
          }));
          return listicleItemsWithStringIds;
        },
      }),
    },
    onError: {
      target: "LOADING_LISTICLE_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine LOADING_LISTICLE_ERROR onError", event);
          //const {context, event } = event;
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const LOADING_LISTICLE_ERROR = {
  on: {
    RETRY: "idle",
    SET_ERROR: {
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine SET_ERROR");
          return event.error;
        },
      }),
    },
  },
};

export const LOADING_LISTICLE_EVENTS = {
  LOADING_LISTICLE,
  LOADING_LISTICLE_ERROR,
};
