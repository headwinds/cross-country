import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

export type ListicleInputType = {
  user_account_id: string;
  anon_user_account_id: string;
  title: string;
  url: string;
  category: string;
  description: string;
};

// PUT /api/listicle
// update the saved listicle item
const updateListicleItem = fromPromise<string[], ListicleInputType>(
  async ({ input }) => {
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
    const fetchUrl = getUserOrAnonUserRoute(input);

    console.log("Invoked updateListicleItem body ", body);

    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  }
);

const UPDATING_LISTICLE_ITEM = {
  invoke: {
    id: "updatingListicleItem",
    src: updateListicleItem,
    input: ({ context }) => {
      console.log("Machine UPDATING_LISTICLE_ITEM context", context);

      // should only be able to update a listicle item that has a status of update and has already been saved!

      const unsavedListicleItem = context.listicleItems.find(
        (item) => item.status === "update"
      );

      const { url, category, description } = unsavedListicleItem;

      const user_account_id = context.userAccountId;
      const anon_user_account_id = context.anonUserAccountId;

      const hasId = user_account_id || anon_user_account_id;

      if (!hasId) {
        return console.error("No user or anon account id!");
      }

      if (!url || !category || url === "" || category === "") {
        return console.error("No url or category!");
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
        updateListiceResponse: ({ context, event }) => {
          console.log("UPDATING_LISTICLE_ITEM_SUCCESS onDone", event.output);
          return event.output;
        },
        updateFeedback: ({ context, event }) => {
          // do I really need this?
          return "success";
        },
      }),
    },
    onError: {
      target: "UPDATING_LISTICLE_ITEM_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine UPDATING_LISTICLE_ITEM_ERROR onError", event);
          //const {context, event } = event;
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const UPDATING_LISTICLE_ITEM_ERROR = {
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

export const UPDATING_LISTICLE_ITEM_EVENTS = {
  UPDATING_LISTICLE_ITEM,
  UPDATING_LISTICLE_ITEM_ERROR,
};
