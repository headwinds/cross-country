import { createMachine, assign } from "xstate";
import { POSTING_REGISTRATION_EVENTS } from "./post-registration";
import { validatePassword } from "./registration-util";
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
    // firstName: "", move to profile
    // lastName: "",
    username: "",
    password: "",
    email: "",
    isFormValid: false,
    isPasswordPlainText: false,
    isPasswordStrong: false,
    isPasswordFocussed: false,
    error: null,
    domain: null,
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
        SET_FOCUS_ON_PASSWORD: {
          actions: "setFocussOnPassword",
        },
        REMOVE_FOCUS_ON_PASSWORD: {
          actions: "removeFocussOnPassword",
        },
        TYPING_PASSWORD: {
          actions: "typingPassword",
        },
        SET_DOMAIN: {
          actions: "settingDomain",
        },
        SUBMIT: {
          target: "POSTING_REGISTRATION",
        },
      },
    },
    validate: {},
    ...POSTING_REGISTRATION_EVENTS,
  },
};

const config = {
  actions: {
    setFocussOnPassword: assign({
      isPasswordFocussed: ({ context }) => {
        return true;
      },
    }),
    removeFocussOnPassword: assign({
      isPasswordFocussed: ({ context }) => {
        return false;
      },
    }),
    settingDomain: assign({
      domain: ({ context, event }) => {
        return event.value;
      },
    }),
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
      isPasswordStrong: ({ context, event }) => {
        const candidatePassword = event.value;
        return validatePassword(candidatePassword);
      },
    }),
    typingEmail: assign({
      email: ({ context, event }) => {
        return event.value;
      },
    }),
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
