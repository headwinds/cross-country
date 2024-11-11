/*
minimum helper file to separate the states into its own file to keep the main file clean and thin

It complements the template-service-events.ts file

You can copy and paste this file into your project to get started more quickly.
*/

import { assign } from "xstate";

export const MANAGE_STATES = {
  SET_DOMAIN: {
    actions: assign({
      domain: ({ context, event }) => {
        return event.domain;
      },
    }),
  },
  UPDATE_SERVICE_NAME_HERE: {
    actions: assign({
      data: ({ context, event }) => {
        return event.data;
      },
    }),
  },
  POST_SERVICE_NAME_HERE: {
    target: "POSTING_SERVICE_NAME_HERE",
  },
};
