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
  ADD_LISTICLE_ITEM: {
    actions: assign({
      listicleItems: ({ context: { listicleItems } }) => {
        console.log("editListicleItemListMachine ADD_OPTION");
        const option = createNewListicleItem();
        return [...listicleItems, option];
      },
    }),
  },
  UPDATE_LISTICLE_ITEM: {
    actions: assign({
      listicleItems: ({ context: { listicleItems }, event }) => {
        console.log(
          "editListicleItemListMachine UPDATE_LISTICLE_ITEM event: ",
          event
        );
        const { id, url, category, status } = event.data;
        return listicleItems.map((option) => {
          if (option.id === id) {
            return { id, url, category, status };
          }
          return option;
        });
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
  REMOVE_LISTICLE_ITEM: {
    actions: assign({
      listicleItems: ({ context: { listicleItems }, event }) => {
        console.log(
          "editListicleItemListMachine REMOVE_LISTICLE_ITEM event: ",
          event
        );
        const filteredOptions = listicleItems.filter(
          (option) => option.id !== event.id
        );
        return filteredOptions;
      },
    }),
  },
};
