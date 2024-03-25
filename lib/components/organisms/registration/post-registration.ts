import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

type RegistrationInputType = {
  email: string;
  username: string;
  password: string;
};

const postRegistration = fromPromise<string[], RegistrationInputType>(
  async ({ input }) => {
    console.log("Invoked registration input", input);
    const { domain } = input;

    const response = fetch(`${domain}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    return response.json();
  }
);

const POSTING_REGISTRATION = {
  invoke: {
    id: "postRegistration",
    src: postRegistration,
    input: ({ context }) => {
      console.log("Machine POSTING_REGISTRATION");
      return {
        email: context.email,
        username: context.username,
        password: context.password,
        domain: context.domain,
      };
    },
    onDone: { target: "idle" },
    onError: {
      target: "POSTING_REGISTRATION_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine posting onError", event);
          //const {context, event } = event;
          return { message: "Something went wrong" };
        },
      }),
    },
  },
};

const POSTING_REGISTRATION_ERROR = {
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
};

export const POSTING_REGISTRATION_EVENTS = {
  POSTING_REGISTRATION,
  POSTING_REGISTRATION_ERROR,
};
