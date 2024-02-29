// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import { createMachine, assign } from "xstate";
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
    title: null,
    created_at: null,
    updated_at: null,
    status: "unsaved",
  },
  states: {
    idle: {
      on: {
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
        SAVE_LISTICLE: {
          //target: "getting_dragons",
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
    posting_listicle: {
      invoke: {
        id: "saveListicle",
        src: saveListicle,
        onDone: { target: "success" },
        onError: {
          target: "failure",
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
    success: {
      // Handle success (e.g., navigate to another page or show a success message)
    },
    failure: {
      // Handle failure (e.g., show an error message)
    },
    error: {
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
