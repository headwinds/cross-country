import { createMachine, assign } from "xstate";
import type { OptionType } from "./types";

/*
Note to self: I could also use sendParent and useService ability within XState to communicate with the parent state machine. 

But for now, I am simply providing an onChange handler to the parent component to handle the state changes so that I can have useMachine hooks in both the parent and child components.
*/

export const defaultOptionData: OptionType = {
  id: 1,
  option: "",
  category: "",
};

const createNewListicleItem = () => {
  const id = `option_${new Date().getTime()}`;
  return {
    id,
    value: "",
    category: "",
  };
};

// Build Form State machine
export const createEditListicleItemListMachine = ({ listicleItems = [] }) =>
  createMachine({
    id: "listicleItemList",
    initial: "idle",
    context: {
      listicleItems,
    },
    states: {
      idle: {
        on: {
          ADD_LISTICLE_ITEM: {
            actions: assign({
              listicleItems: ({ context: { listicleItems } }) => {
                console.log("Machine ADD_OPTION");
                const option = createNewListicleItem();
                return [...listicleItems, option];
              },
            }),
          },
          UPDATE_LISTICLE_ITEM: {
            actions: assign({
              listicleItems: ({ context: { listicleItems }, event }) => {
                console.log("UPDATE_LISTICLE_ITEM event: ", event);
                const { id, value, category } = event.data;
                return listicleItems.map((option) => {
                  if (option.id === id) {
                    return { id, value, category };
                  }
                  return option;
                });
              },
            }),
          },
          UPDATE_LISTICLE_ITEMS: {
            actions: assign({
              listicleItems: ({ context: { listicleItems }, event }) => {
                console.log("Machine UPDATE_LISTICLE_ITEMS");
                console.log("UPDATE_LISTICLE_ITEMS event: ", event);
                const updatedListicleItems = event?.listicleItems ?? [];
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
                console.log("REMOVE_LISTICLE_ITEM event: ", event);
                const filteredOptions = listicleItems.filter(
                  (option) => option.id !== event.id
                );
                return filteredOptions;
              },
            }),
          },
        },
      },
    },
  });
