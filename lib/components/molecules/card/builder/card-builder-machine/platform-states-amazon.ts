/*
Platform specific states for Amazon
*/

import { assign } from "xstate";

export const AMAZON_STATES = {
  UPDATE_AMAZON_URL_DATA: {
    actions: assign({
      data: ({ context, event }) => {
        return event.data;
      },
    }),
  },
  GET_AMAZON_AFFLIATE_URL: {
    //target: "GETTING_AMAZON_AFFLIATE_URL", note may not be needed or might need unique target for amazon
    target: "GETTING_URL",
  },
};
