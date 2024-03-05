// @ts-nocheck
// npm run build

import { createMachine, assign, fromPromise } from "xstate";
import { ListicleItem, Listicle } from "./types";

/*
What is the story behind the listicle for me?

Each month I manually capture links in a text file categorize them with the goal to eventually share with whoever and also refer back to them; track what interests me.

The listicle story should include:
- an authenticated user to save it 
- ability to add, edit, and delete listicle items 
- a listicle item requires have a url, title, and category - a description could be optional
- when the listicle is created, it will have created date and then updated date 
- a listicle is a list of listicle items
- ability to create the listicle with a default title of this current month

state machine states
- idle
- edit
- loading
- saving
- error
- success
- failure


status
- unsaved
- saved
- updated
- deleted

*/

// Build Form State machine

const route = "http://localhost:5000";

export const defaultListicleItem: ListicleItem = {
  id: 0,
};

const createNewListicle = (data): ListicleItem => {
  const id = `question_${new Date().getTime()}`;
  const newListicle: ListicleItem = {
    ...data,
    id,
  };
  return newListicle;
};

const getDragons = () => {
  console.log("Invoked getDragons");
  return fetch(`${route}/api/dragons`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

const saveListicleItem = (
  user_account_id: string,
  listicleItem: ListicleItem
) => {
  const body = {
    user_account_id,
    ...listicleItem,
  };
  return fetch(`${route}/api/listicle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

const saveListicle = ({ context, event }) => {
  console.log("Invoked saveListicle");
  const unSavedListicleItem = context.listicleItems.find(
    (item) => item.status === "unsaved"
  );

  const user_account_id = context.userAccountId;
  const anon_user_account_id = context.anonUserAccountId;
  const title = context.title;
  const { value, category } = unSavedListicleItem;
  const url = value;

  const body = {
    user_account_id,
    anon_user_account_id,
    title,
    url,
    category,
    description: "", // deprecated? maybe...probably
  };
  return fetch(`${route}/api/listicle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

const loadListicle = fromPromise<
  string[],
  { user_account_id: string; user_account_id: string; title: title }
>(async ({ input }) => {
  console.log("Invoked loadListicle", input);
  const { user_account_id, anon_user_account_id, title } = input;

  const anon_url = `http://localhost:5000/api/listicle/anon/${anon_user_account_id}/${title}`;
  const user_url = `http://localhost:5000/api/listicle/user/${user_account_id}/${title}`;

  const fetchUrl = user_account_id ? user_url : anon_url;

  const response = await fetch(fetchUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
});

const validateListicleItems = (listicleItems: Listicle[]) => {
  // there should only ever be one listicle item with status of unsaved
  const unsavedListicleItems = listicleItems.filter(
    (listicleItem) => listicleItem.status === "unsaved"
  );
  if (unsavedListicleItems.length > 1) {
    /*
    throw new Error(
      "There should only ever be one listicle item with status of unsaved"
    );
    */
    // attempt to save the listicle items
    unsavedListicleItems.forEach((listicleItem) => {
      saveListicleItem(listicleItem);
    });
  }
  // optimistic update them all to saved
  return listicleItems.map((listicleItem) => ({
    ...listicleItem,
    status: "saved",
  }));
};

/*
either working on a new listicle or editing an existing listicle
*/

export const buildListicleMachine = createMachine({
  id: "buildListicle",
  initial: "idle",
  title: "",
  description: "",
  context: {
    userAccountId: null,
    anonUserAccountId: null,
    listicleItems: [],
    title: null,
    error: null,
    enteringTitle: null, // as the user types the title, it will be stored here until they save
    created_at: null,
    updated_at: null,
    status: "unsaved",
    loadListiceResponse: null,
    isExistingListicle: null,
    lastSavedListicleTitle: null,
    loadFeedback: null,
  },
  states: {
    idle: {
      on: {
        CHECK_LAST_SAVED_LISTICLE_TITLE: {
          actions: assign({
            lastSavedListicleTitle: () => {
              // check local storage for last saved listicle title
              const lastSavedListicleTitle = localStorage.getItem(
                "lastSavedListicleTitle"
              );
              const validTitle = lastSavedListicleTitle ?? "";
              return validTitle;
            },
          }),
        },
        DECIDE_LOAD_OR_CREATE: {
          actions: assign({
            isExistingListicle: ({ context: { listicleItems }, event }) => {
              console.log("Machine DECIDE_LOAD_OR_CREATE", event);
              return event.data;
            },
            lastSavedListicleTitle: ({ context: { listicleItems }, event }) => {
              if (event.data) {
                // check local storage for last saved listicle title
                const lastSavedListicleTitle = localStorage.getItem(
                  "lastSavedListicleTitle"
                );
                const validTitle = lastSavedListicleTitle ?? "";
                return validTitle;
              }
            },
          }),
        },
        ADD_LISTICLE_ITEM: {
          actions: assign({
            listicleItems: ({ context: { listicleItems }, event }) => {
              console.log("Machine ADD_LISTICLE_ITEM");
              const newListicleItem = createNewListicle(event.data);
              return [...listicleItems, newListicleItem];
            },
          }),
        },
        UPDATE_LISTICLE_TITLE: {
          actions: assign({
            title: ({ context, event }) => {
              console.log("Machine UPDATE_LISTICLE_TITLE", event);
              return event.data.title;
            },
          }),
        },
        UPDATE_USER_ACCOUNT_ID: {
          actions: assign({
            userAccountId: ({ context, event }) => {
              console.log("Machine UPDATE_USER_ACCOUNT_ID", event);
              return event.data.userAccountId;
            },
          }),
        },
        UPDATE_ANON_USER_ACCOUNT_ID: {
          actions: assign({
            anonUserAccountId: ({ context, event }) => {
              console.log("Machine UPDATE_ANON_USER_ACCOUNT_ID", event);
              return event.data.userAccountId;
            },
          }),
        },
        ENTERING_TITLE: {
          actions: assign({
            enteringTitle: ({ context, event }) => {
              console.log("Machine ENTERING_TITLE", event);
              return event.data.enteringTitle;
            },
          }),
        },
        SAVE_LISTICLE: {
          //target: "SAVING_LISTICLE",
          actions: assign({
            status: (event) => {
              const fetchData = async () => {
                //const response = await getDragons(event);
                const response = await saveListicle(event);
                const json = await response.json();

                console.log("Machine SAVE_LISTICLE", json);
              };
              fetchData();

              return "saving...";
            },
          }),
        },
        LOAD_LISTICLE: {
          target: "LOADING_LISTICLE",
        },
      },
    },
    getting_dragons: {
      invoke: {
        id: "getDragons",
        src: getDragons,
        onDone: {
          //target: 'success',
          actions: assign({ error: ({ context, event }) => event.message }),
        },
        onError: {
          //target: 'failure',
          actions: assign({
            error: ({ context, event }) => "somethng went wrong",
          }),
        },
      },
    },
    SAVING_LISTICLE: {
      invoke: {
        id: "saveListicle",
        src: saveListicle,
        onDone: { target: "SAVING_LISTICLE_SUCCESS" },
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
    },
    SAVING_LISTICLE_SUCCESS: {
      // Handle success (e.g., navigate to another page or show a success message)
    },
    SAVING_LISTICLE_FAILURE: {
      // Handle failure (e.g., show an error message)
    },
    SAVING_LISTICLE_ERROR: {
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
    },
    LOADING_LISTICLE: {
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
          target: "LOADING_LISTICLE_SUCCESS",
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
            title: ({ context, event }) => {
              const title = event.output.listicle_items[0].title;
              // also set the title to local storage
              localStorage.setItem("lastSavedListicleTitle", title);

              return title;
            },
            lastSavedListicleTitle: ({ context, event }) => {
              // also set the title to local storage
              localStorage.setItem(
                "lastSavedListicleTitle",
                event.output.title
              );

              return event.output.title;
            },
            listicleItems: ({ context, event }) => {
              return event.output?.listicle_items ?? [];
            },
          }),
        },
        onError: {
          target: "LOADING_LISTICLE_ERROR",
          actions: assign({
            error: ({ context, event }) => {
              console.log("Machine posting onError", event);
              //const {context, event } = event;
              return "Something went wrong";
            },
          }),
        },
      },
    },
    LOADING_LISTICLE_SUCCESS: {
      // Handle success (e.g., navigate to another page or show a success message)
    },
    LOADING_LISTICLE_FAILURE: {
      // Handle failure (e.g., show an error message)
    },
    LOADING_LISTICLE_ERROR: {
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
    },
  },
});
