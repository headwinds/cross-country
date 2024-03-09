import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

type UpdateListicleInputType = {
  user_account_id: string;
  anon_user_account_id: string;
  title: string;
  updateListicleItem: ListicleItem;
};

// PUT /api/listicle
// update the saved listicle item
const updateListicleItem = fromPromise<string[], UpdateListicleInputType>(
  async ({ input }) => {
    console.log("Invoked updateListicleItem input", input);
    const { updateListicleItem } = input;
    console.log("Invoked updateListicleItem", updateListicleItem);

    const fetchUrl = getUserOrAnonUserRoute(input);

    console.log("Invoked updateListicleItem fetchUrl", fetchUrl);

    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateListicleItem),
    });

    return response.json();
  }
);

const UPDATING_LISTICLE_ITEM = {
  invoke: {
    id: "updatingListicleItem",
    src: updateListicleItem,
    input: ({ context }) => {
      console.log("Machine UPDATING_LISTICLE_ITEM");

      console.log("Machine UPDATING_LISTICLE_ITEM context", context);

      const updateListicleItem = context.listicleItems.find(
        (item) => item.status === "update"
      );

      return {
        title: context.title,
        user_account_id: context.userAccountId,
        anon_user_account_id: context.anonUserAccountId,
        updateListicleItem,
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
