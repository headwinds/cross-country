import { setup, createActor, fromPromise, assign } from "xstate";

const domain = "https://localhost:5000";

// credit
// https://stately.ai/docs/invoke

const fetchDragons = (userId: string) =>
  fetch(`${domain}/api/dragons`).then((response) => response.json());

export const dragonsMachine = setup({
  actors: {
    fetchDragons: fromPromise(async () => {
      const json = await fetchDragons();
      return json;
    }),
  },
}).createMachine({
  types: {} as {
    context: {
      message: object | null;
      status: string;
      error: unknown;
    };
  },
  id: "dragons",
  initial: "idle",
  context: {
    message: null,
    error: null,
    status: "idle",
  },
  states: {
    idle: {
      on: {
        FETCH: {
          target: "loading",
          actions: assign({
            status: ({ context, event }) => {
              return "loading";
            },
          }),
        },
      },
    },
    loading: {
      invoke: {
        id: "getDragons",
        src: "fetchDragons",
        input: ({ context: { userId } }) => ({ userId }),
        onDone: {
          target: "success",
          actions: assign({ message: ({ event }) => event.output }),
        },
        onError: {
          target: "failure",
          actions: assign({ error: ({ event }) => event.error }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
});
