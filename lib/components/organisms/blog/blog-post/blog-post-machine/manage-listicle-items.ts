import { assign } from "xstate";
import type { ListicleItemType } from "./types";

export const defaultOptionData: ListicleItemType = {
  id: 1,
  option: "",
  category: "",
  status: "unsaved",
};

const createNewListicleItem = (): ListicleItemType => {
  const id = `option_${new Date().getTime()}`;
  return {
    id,
    url: "",
    category: "",
    status: "unsaved",
  };
};

export const MANAGE_LISTICLE_ITEM_STATES = {
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
  SET_DOMAIN: {
    actions: assign({
      domain: ({ context, event }) => {
        return event.domain;
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
        const newListicleItem = createNewListicleItem();
        return [...listicleItems, newListicleItem];
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

        // update the newly created listicle item which the updated category, description, and url
        // the status will still be unsaved
        const updatedListicleItems = context.listicleItems.map(
          (listicleItem) => {
            if (listicleItem.id === event.data.id) {
              return {
                ...listicleItem,
                category: event.data.category,
                description: event.data.description,
                url: event.data.url,
              };
            }
            return listicleItem;
          }
        );

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
        // change the status of the listicle item to update
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
  UPDATE_LISTICLE_ITEMS: {
    actions: assign({
      listicleItems: ({ context: { listicleItems }, event }) => {
        console.log(
          "editListicleItemListMachine UPDATE_LISTICLE_ITEMS event: ",
          event
        );
        const updatedListicleItems = event?.data ?? [];
        if (updatedListicleItems.length === 0) {
          return listicleItems;
        }
        return [...updatedListicleItems];
      },
    }),
  },
  DELETE_LISTICLE_ITEM: {
    target: "DELETING_LISTICLE_ITEM",
    actions: assign({
      listicleItems: ({ context: { listicleItems }, event }) => {
        console.log(
          "editListicleItemListMachine DELETE_LISTICLE_ITEM event: ",
          event
        );
        // mark the item ready to delete
        const updatedListicleItems = listicleItems.map((item) => {
          if (item.id === event.id) {
            return { ...item, status: "delete" };
          }
          return item;
        });
        return updatedListicleItems;
      },
    }),
  },
};
