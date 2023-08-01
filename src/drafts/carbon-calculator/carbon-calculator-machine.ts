import { createMachine } from 'xstate';

export const machine = createMachine({
  id: 'carbon-calculator',
  initial: 'First State',
  states: {
    'First State': {
      on: {
        Event: {
          target: 'Second State',
        },
      },
    },
    'Second State': {},
  },
  schema: { events: {} as { type: 'Event' } },
  predictableActionArguments: true,
  preserveActionOrder: true,
});
