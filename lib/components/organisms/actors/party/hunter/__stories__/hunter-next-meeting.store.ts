import { createStore } from "@xstate/store";

/*
Hunter Next Meeting

I want to be able to capture and store all the meetings for 1 day. 

It's important for a hunter to review all the meetings that are scheduled for the day in the morning and add them to their list.

The hunter should be able to add, edit, and delete meetings from the list.
*/

type MeetingType = {
  id?: string;
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
};

export const nextMeetingStore = createStore(
  // Initial context
  { meetings: [], currentDate: new Date(), count: 0, name: "Brandon" },
  // Transitions
  {
    updateMeetings: {
      meetings: (_context, event: { updatedMeetings }) => event.updatedMeetings,
    },
    add: {
      count: (context, event: { num: number }) => context.count + event.num,
    },
    changeName: {
      name: (_context, event: { newName: string }) => event.newName,
    },
  }
);

/*
// Get the current state (snapshot)
console.log(store.getSnapshot());
// => {
//   status: 'active',
//   context: { count: 0, name: 'David' }
// }

// Subscribe to snapshot changes
store.subscribe((snapshot) => {
  console.log(snapshot.context);
});

// Send an event
store.send({ type: 'inc' });
// logs { count: 1, name: 'David' }

store.send({ type: 'add', num: 10 });
// logs { count: 11, name: 'David' }

store.send({ type: 'changeName', newName: 'Jenny' });
// logs { count: 11, name: 'Jenny' }
*/
