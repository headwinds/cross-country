/*
Common states 
*/

import { assign } from "xstate";

export const COMMON_STATES = {
  UPDATE_DATA: {
    actions: assign({
      data: ({ context, event }) => {
        return event.data;
      },
    }),
  },
  GET_URL: {
    //target: "GETTING_AMAZON_AFFLIATE_URL", note may not be needed or might need unique target for amazon
    target: "GETTING_URL",
  },
};
