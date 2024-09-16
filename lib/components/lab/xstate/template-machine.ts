// TODO type check
// @ts-nocheck
/*
If you anticipate that your component might require a machine over useState or useReducer, you can use XState. 

You can copy and paste these 3 template files into your project to get started more quickly.
*/

import { createMachine } from "xstate";
import { MANAGE_STATES } from "./template-manage-state";
import { POSTING_SERVICE_NAME_HERE_EVENTS } from "./template-service-events";

const templateMachine = createMachine({
  id: "templateMachine",
  initial: "idle",
  context: {
    userAccountId: null,
    response: null,
    domain: "localhost:5000",
    data: null,
    isLoading: false,
    error: null,
  },
  states: {
    idle: {
      on: {
        ...MANAGE_STATES,
      },
    },
    ...POSTING_SERVICE_NAME_HERE_EVENTS,
  },
});

export default templateMachine;
