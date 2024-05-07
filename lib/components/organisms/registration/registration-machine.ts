import { createMachine, assign } from "xstate";
import { POSTING_REGISTRATION_EVENTS } from "./post-registration";
import {
  validatePassword,
  validateUsername,
  validateEmail,
} from "./registration-util";
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
    isPasswordPlainText: false,
    isPasswordStrong: false,
    isPasswordFocussed: false,
    isUsernameValid: false,
    isEmailValid: false,
    error: null,
    domain: null,
    hasSendBeenClicked: false,
    registrationResponse: null,
    isRegistrationSuccessful: false,
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
          actions: assign({
            hasSendBeenClicked: () => {
              return true;
            },
          }),
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
      isPasswordFocussed: () => {
        return true;
      },
    }),
    removeFocussOnPassword: assign({
      isPasswordFocussed: () => {
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
    typingUsername: assign({
      username: ({ context, event }) => {
        return event.value;
      },
      isUsernameValid: ({ context, event }) => {
        const candidateUsername = event.value;
        return validateUsername(candidateUsername);
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
      isEmailValid: ({ context, event }) => {
        const candidateEmail = event.value;
        return validateEmail(candidateEmail);
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
