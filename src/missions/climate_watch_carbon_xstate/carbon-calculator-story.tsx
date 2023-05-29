import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';
 
const machine = createMachine({});
 
const Component = () => {
  const [
    // The current state of the actor
    state,
    // A function to send the machine events
    send,
    // The running actor - used for passing to `useActor`
    actor,
  ] = useMachine(machine);
 
  return null;
};

https://biologicalcarbon.ca/esg-emission-calculator/