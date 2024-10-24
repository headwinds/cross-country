// TODO type check
// @ts-nocheck
import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute, domain } from "./util";
import type { ListicleInputType } from "./update-listicle-item";

// POST /api/listicle
// save the unsaved listicle item
const saveListicleItem = fromPromise<string[], ListicleInputType>(
  async ({ input }) => {
    const fetchUrl = getUserOrAnonUserRoute(input);
    console.log("Invoked saveListicleItem", input);
    const {
      user_account_id,
      anon_user_account_id,
      title,
      url,
      category,
      description,
    } = input;

    const body = {
      user_account_id,
      anon_user_account_id,
      title,
      url,
      category,
      description,
    };

    // validate! if no user or anon account id or url, log error

    const hasId = user_account_id || anon_user_account_id;

    if (!hasId) {
      return console.error("No user or anon account id!");
    }

    if (!url || !category || url === "" || category === "") {
      return console.error("No url or category!");
    }

    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  }
);

const SAVING_LISTICLE_ITEM = {
  invoke: {
    id: "savingListicleItem",
    src: saveListicleItem,
    input: ({ context }) => {
      console.log("Machine SAVING_LISTICLE_ITEM context", context);

      const totalListicleItems = context.listicleItems.length;
      console.log(
        "Machine SAVING_LISTICLE_ITEM totalListicleItems",
        totalListicleItems
      );

      const unsavedListicleItem = context.listicleItems.find(
        (item) => item.status === "unsaved"
      );

      const { url, category, description } = unsavedListicleItem;

      const user_account_id = context.userAccountId;
      const anon_user_account_id = context.anonUserAccountId;

      const hasId = user_account_id || anon_user_account_id;

      if (!hasId) {
        return console.error("No user or anon account id!");
      }
      return {
        user_account_id: context?.userAccountId ?? null,
        anon_user_account_id: context?.anonUserAccountId ?? null,
        title: context?.title ?? null,
        url,
        category,
        description: description ?? "",
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        saveListiceItemResponse: ({ context, event }) => {
          console.log("SAVING_LISTICLE_ITEM onDone", event.output);
          return event.output;
        },
        saveFeedback: ({ context, event }) => {
          // do I really need this?
          return "success";
        },
      }),
    },
    onError: {
      target: "SAVING_LISTICLE_ITEM_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine SAVING_LISTICLE_ITEM_ERROR onError", event);
          //const {context, event } = event;
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const SAVING_LISTICLE_ITEM_ERROR = {
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

export const SAVING_LISTICLE_ITEM_EVENTS = {
  SAVING_LISTICLE_ITEM,
  SAVING_LISTICLE_ITEM_ERROR,
};
