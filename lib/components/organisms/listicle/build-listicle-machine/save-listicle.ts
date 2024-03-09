import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

type UpdateListicleInputType = {
  user_account_id: string;
  anon_user_account_id: string;
  title: string;
  updateListicleItem: ListicleItem;
};

// POST /api/listicle
// save the new listicle item
const saveListicle = fromPromise<string[], UpdateListicleInputType>(
  async ({ input }) => {
    console.log("Invoked updateListicleItem input", input);
    const {
      user_account_id,
      anon_user_account_id,
      title,
      unSavedListicleItem,
    } = input;
    const { url, category } = unSavedListicleItem;

    const body = {
      user_account_id,
      anon_user_account_id,
      title,
      url,
      category,
      description: "", // deprecated? maybe...probably ...hmmmm could be move to an enrich table
    };

    const response = fetch(`${domain}/api/listicle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.json();
  }
);

const SAVING_LISTICLE = {
  invoke: {
    id: "saveListicle",
    src: saveListicle,
    input: ({ context }) => {
      console.log("Machine SAVING_LISTICLE");
      return {
        user_account_id: context.userAccountId,
        anon_user_account_id: context.anonUserAccountId,
        title: context.title,
        listicleItems: context.listicleItems,
      };
    },
    onDone: { target: "idle" },
    onError: {
      target: "SAVING_LISTICLE_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine posting onError", event);
          //const {context, event } = event;
          return "Something went wrong";
        },
      }),
    },
  },
};

const SAVING_LISTICLE_ERROR = {
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

export const SAVING_LISTICLE_EVENTS = {
  SAVING_LISTICLE,
  SAVING_LISTICLE_ERROR,
};
