import { setup, assign } from "xstate";

interface ActorContext {
  selectedHeadId: string | null;
  selectedBodyId: string | null;
  selectedShoesId: string | null;
}

type Payload<T> = T | null;

interface SelectHeadEvent<T> {
  type: "SELECT_HEAD";
  payload: Payload<T>;
}

interface SelectBodyEvent<T> {
  type: "SELECT_BODY";
  payload: Payload<T>;
}

interface SelectShoesEvent<T> {
  type: "SELECT_SHOES";
  payload: Payload<T>;
}

interface ResetEvent {
  type: "RESET";
}

type ActorEvent =
  | SelectHeadEvent<string>
  | SelectBodyEvent<string>
  | SelectShoesEvent<string>
  | ResetEvent;

const actorBuilderMachine = setup({
  types: {
    context: {} as ActorContext,
    events: {} as ActorEvent,
  },
}).createMachine({
  id: "actorBuilder",
  initial: "idle",
  context: {
    selectedHeadId: null,
    selectedBodyId: null,
    selectedShoesId: null,
  },
  states: {
    idle: {
      on: {
        SELECT_HEAD: {
          actions: assign({
            selectedHeadId: (_, event: SelectHeadEvent<string>) =>
              event.payload,
          }),
        },
        SELECT_BODY: {
          actions: assign({
            selectedBodyId: (_, event: SelectBodyEvent<string>) =>
              event.payload,
          }),
        },
        SELECT_SHOES: {
          actions: assign({
            selectedShoesId: (_, event: SelectShoesEvent<string>) =>
              event.payload,
          }),
        },
        RESET: {
          actions: assign({
            selectedHeadId: () => null,
            selectedBodyId: () => null,
            selectedShoesId: () => null,
          }),
        },
      },
    },
  },
});

export default actorBuilderMachine;
