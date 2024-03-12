import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute, domain } from "./util";
import type { ListicleInputType } from "./update-listicle-item";

// POST /api/listicle
// delete the undeleted listicle item
const deleteListicleItem = fromPromise<string[], ListicleInputType>(
  async ({ input }) => {
    const fetchUrl = getUserOrAnonUserRoute(input);
    console.log("Invoked deleteListicleItem", input);
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
      return console.error("Delete validation - no user or anon account id!");
    }

    if (!url || !category || url === "" || category === "") {
      return console.error("Delete validation - no url or category!");
    }

    console.log("deleting listicle item body", body);

    const response = await fetch(fetchUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  }
);

const DELETING_LISTICLE_ITEM = {
  invoke: {
    id: "deletingListicleItem",
    src: deleteListicleItem,
    input: ({ context }) => {
      console.log("Machine DELETING_LISTICLE_ITEM context", context);

      const totalListicleItems = context.listicleItems.length;
      console.log(
        "Machine DELETING_LISTICLE_ITEM totalListicleItems",
        totalListicleItems
      );

      const deletedListicleItem = context.listicleItems.find(
        (item) => item.status === "delete"
      );

      if (!deletedListicleItem) {
        return console.error("No deleted listicle item!");
      }

      const { url, category, description } = deletedListicleItem;

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
        listicleItems: ({ context, event }) => {
          // remove it
          console.log("DELETING_LISTICLE_ITEM onDone", event.output);
          if (event.output.message === "deleted successfully") {
            const deletedListicleItems = context.listicleItems.filter(
              (item) => item.status !== "delete"
            );
            return deletedListicleItems;
          }
          return context.listicleItems;
        },
        deleteListiceResponse: ({ context, event }) => {
          console.log("DELETING_LISTICLE_ITEM onDone", event.output);
          return event.output;
        },
        deleteFeedback: ({ context, event }) => {
          // do I really need this?
          return "success";
        },
      }),
    },
    onError: {
      target: "DELETING_LISTICLE_ITEM_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine DELETING_LISTICLE_ITEM_ERROR onError", event);
          //const {context, event } = event;
          return event?.message ?? "Something went wrong";
        },
      }),
    },
  },
};

const DELETING_LISTICLE_ITEM_ERROR = {
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

export const DELETING_LISTICLE_ITEM_EVENTS = {
  DELETING_LISTICLE_ITEM,
  DELETING_LISTICLE_ITEM_ERROR,
};
