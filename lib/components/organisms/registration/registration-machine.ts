import { createMachine, assign } from "xstate";

/*
Registration

states:
- filling out the:
-- first name
-- last name
-- username
-- password
-- email 

events:
- validate form
- submit form

*/

const machine = {
  id: "registration",
  initial: "idle",
  context: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    isFormValid: false,
    isPasswordPlainText: false,
  },
  states: {
    idle: {
      on: {
        TOGGLE_EYE: {
          actions: "toggleEye",
        },
        TYPING_FIRST_NAME: {
          actions: "typingFirstName",
        },
        TYPING_LAST_NAME: {
          actions: "typingLastName",
        },
        TYPING_EMAIL: {
          actions: "typingEmail",
        },
        TYPING_USERNAME: {
          actions: "typingUsername",
        },
        TYPING_PASSWORD: {
          actions: "typingPassword",
        },
        SUBMIT: "submitting",
      },
    },
    submitting: {
      entry: "logForm",
    },
    validate: {},
  },
};

const config = {
  actions: {
    toggleEye: assign({
      isPasswordPlainText: ({ context }) => {
        return !context.isPasswordPlainText;
      },
    }),
    typingFirstName: assign({
      firstName: ({ context, event }) => {
        return event.value;
      },
    }),
    typingLastName: assign({
      lastName: ({ context, event }) => {
        return event.value;
      },
    }),
    typingUsername: assign({
      username: ({ context, event }) => {
        return event.value;
      },
    }),
    typingPassword: assign({
      password: ({ context, event }) => {
        return event.value;
      },
    }),
    typingEmail: assign({
      email: ({ context, event }) => {
        return event.email;
      },
    }),
    logForm: (ctx, e) =>
      console.log("Registration Machine firstName: ", ctx.firstName),
  },
  activities: {
    /* ... */
  },
  delays: {
    /* ... */
  },
  guards: {
    /* ... */
  },
  services: {
    /* ... */
  },
};

export const registrationMachine = createMachine(machine, config);
