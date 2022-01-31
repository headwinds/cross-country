import { createMachine, assign } from 'xstate';

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
  id: 'registration',
  initial: 'idle',
  context: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    isFormValid: false,
    curInstructionsIdx: 0,
  },
  states: {
    idle: {
      on: {
        TYPING_FIRST_NAME: {
          actions: 'typingFirstName',
        },
        TYPING_LAST_NAME: {
          actions: 'typingLastName',
        },
        TYPING_EMAIL: {
          actions: 'typingEmail',
        },
        TYPING_USERNAME: {
          actions: 'typingUsername',
        },
        TYPING_PASSWORD: {
          actions: 'typingPassword',
        },
        SUBMIT: 'submitting',
      },
    },
    submitting: {
      entry: 'logForm',
    },
    validate: {},
  },
};

const config = {
  actions: {
    typingFirstName: assign((ctx, e) => ({ firstName: e.value })),
    typingLastName: assign((ctx, e) => ({ lastName: e.value })),
    typingUsername: assign((ctx, e) => ({ userName: e.value })),
    typingPassword: assign((ctx, e) => ({ password: e.value })),
    typingEmail: assign((ctx, e) => ({ email: e.value })),
    logForm: (ctx, e) => console.log('Registration Machine firstName: ', ctx.firstName),
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

export const robloxMachine = createMachine(machine, config);
