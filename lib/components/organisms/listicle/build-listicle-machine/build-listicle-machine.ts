// @ts-nocheck
// npm run build

import { createMachine, assign, fromPromise } from "xstate";
import { ListicleItem, Listicle } from "./types";
import { SAVING_LISTICLE_EVENTS } from "./save-listicle";
import { SAVING_LISTICLE_ITEM_EVENTS } from "./save-listicle-item";
import { UPDATING_LISTICLE_ITEM_EVENTS } from "./update-listice-item";
import { LOADING_LISTICLE_EVENTS } from "./load-listicle";
import { MANAGE_LISTICLE_ITEM_STATES } from "./manage-listicle-items";

/*
What is the story behind the listicle for me?

Each month I manually capture links in a text file categorize them with the goal to eventually share with whoever and also refer back to them; track what interests me.

When I visit a url, I would like Porthole to be able to capture the url, title, and category and then I can add a description if I want to or AI could do it for me.


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

const domain = document.domain.includes("localhost")
  ? "http://localhost:5000"
  : "https://scout.vercel.app";

const createNewListicle = (data): ListicleItem => {
  const id = `question_${new Date().getTime()}`;
  const newListicle: ListicleItem = {
    category: "",
    description: "",
    status: "unsaved",
    url: "",
    id,
  };
  return newListicle;
};

const buildListicleMachine = createMachine({
  id: "buildListicle",
  initial: "idle",
  title: "",
  description: "",
  context: {
    userAccountId: null,
    anonUserAccountId: null,
    listicleItems: [], // I don't want to repeat this is the child machine!
    title: null,
    error: null,
    enteringTitle: null, // as the user types the title, it will be stored here until they save
    created_at: null,
    updated_at: null,
    status: "unsaved",
    loadListiceResponse: null,
    updateListiceResponse: null,
    saveListiceResponse: null,
    isExistingListicle: null,
    lastSavedListicleTitle: null,
    loadFeedback: null,
    updateFeedback: null,
    saveFeedback: null,
  },
  states: {
    idle: {
      on: {
        ...MANAGE_LISTICLE_ITEM_STATES,
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
        SET_LAST_SAVED_LISTICLE_TITLE: {
          actions: assign({
            lastSavedListicleTitle: ({ context }) => {
              // check local storage for last saved listicle title
              const lastSavedListicleTitle = context.enteringTitle;
              if (lastSavedListicleTitle && lastSavedListicleTitle !== "") {
                localStorage.setItem(
                  "lastSavedListicleTitle",
                  lastSavedListicleTitle
                );
                return lastSavedListicleTitle;
              }
              return context.lastSavedListicleTitle;
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
              const newListicleItem = createNewListicle();
              return [...listicleItems, newListicleItem];
            },
          }),
        },
        LISTICLE_ITEM_ADD: {
          actions: assign({
            listicleItems: ({ context: { listicleItems }, event }) => {
              console.log("Machine LISTICLE_ITEM_ADD");
              // keep parent and child listicleItems in sync
              return [...listicleItems, event.data];
            },
          }),
        },
        LISTICLE_ITEM_CHANGE: {
          actions: assign({
            listicleItems: ({ context, event }) => {
              console.log("Machine LISTICLE_ITEM_CHANGE", event);

              // update the listicle item - either saving a new one or updating an existing one
              const updatedListicleItems = context.listicleItems.map(
                (listicleItem) => {
                  if (listicleItem.id === event.data.id) {
                    return {
                      ...listicleItem,
                      ...event.data,
                    };
                  }
                  return listicleItem;
                }
              );

              return updatedListicleItems;
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
          target: "SAVING_LISTICLE",
        },
        SAVE_LISTICLE_ITEM: {
          target: "SAVING_LISTICLE_ITEM",
          actions: assign({
            listicleItems: ({ context, event }) => {
              console.log("Machine SAVE_LISTICLE_ITEM", event);
              console.log(
                "Machine SAVE_LISTICLE_ITEM context.listicleItems",
                context.listicleItems
              );

              const newUnsavedListicleItem = event.data;
              const updatedListicleItems = [
                ...context.listicleItems,
                newUnsavedListicleItem,
              ];

              return updatedListicleItems;
            },
          }),
        },
        LOAD_LISTICLE: {
          target: "LOADING_LISTICLE",
        },
        UPDATE_LISTICLE_TITLE: {
          // target: "UPDATING_LISTICLE_TITLE",
          actions: assign({
            title: ({ context, event }) => {
              console.log("Machine UPDATE_LISTICLE_TITLE", event);
              return event.data.title;
            },
          }),
        },
        UPDATE_LISTICLE_ITEM: {
          target: "UPDATING_LISTICLE_ITEM",
          actions: assign({
            listicleItems: ({ context, event }) => {
              console.log("Machine UPDATE_LISTICLE_ITEM", event);
              // updat the status of the listicle item to update
              const updatedListicleItems = context.listicleItems.map(
                (listicleItem) => {
                  if (listicleItem.id === event.data.id) {
                    return {
                      ...listicleItem,
                      status: "update",
                    };
                  }
                  return listicleItem;
                }
              );
              return updatedListicleItems;
            },
          }),
        },
      },
    },
    ...SAVING_LISTICLE_EVENTS,
    ...SAVING_LISTICLE_ITEM_EVENTS,
    ...LOADING_LISTICLE_EVENTS,
    ...UPDATING_LISTICLE_ITEM_EVENTS,
  },
});

export default buildListicleMachine;
