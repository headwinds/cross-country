import { createMachine, assign } from "xstate";

interface ActorContext {
  selectedHead: string | null;
  selectedBody: string | null;
  selectedShoes: string | null;
}

type ActorEvent =
  | { type: "SELECT_HEAD"; head: string }
  | { type: "SELECT_BODY"; body: string }
  | { type: "SELECT_SHOES"; shoes: string }
  | { type: "RESET" };

const actorBuilderMachine = createMachine<ActorContext, ActorEvent>({
  id: "actorBuilder",
  initial: "idle",
  context: {
    selectedHead: null,
    selectedBody: null,
    selectedShoes: null,
  },
  states: {
    idle: {
      on: {
        SELECT_HEAD: {
          actions: assign({
            selectedHead: (_, event) => event.head,
          }),
        },
        SELECT_BODY: {
          actions: assign({
            selectedBody: (_, event) => event.body,
          }),
        },
        SELECT_SHOES: {
          actions: assign({
            selectedShoes: (_, event) => event.shoes,
          }),
        },
        RESET: {
          actions: assign({
            selectedHead: () => null,
            selectedBody: () => null,
            selectedShoes: () => null,
          }),
        },
      },
    },
  },
});

export default actorBuilderMachine;
