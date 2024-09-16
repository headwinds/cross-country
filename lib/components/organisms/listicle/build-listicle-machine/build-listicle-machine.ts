// TODO type check
// @ts-nocheck

import { createMachine, assign, fromPromise } from "xstate";
import { ListicleItem, Listicle } from "./types";
import { SAVING_LISTICLE_EVENTS } from "./save-listicle";
import { SAVING_LISTICLE_ITEM_EVENTS } from "./save-listicle-item";
import { UPDATING_LISTICLE_ITEM_EVENTS } from "./update-listice-item";
import { LOADING_LISTICLE_EVENTS } from "./load-listicle";
import { MANAGE_LISTICLE_ITEM_STATES } from "./manage-listicle-items";
import { DELETING_LISTICLE_ITEM_EVENTS } from "./delete-listicle-item";

/*
What is the story behind the listicle?

Each month I manually capture links in a text file categorize them with the goal to eventually share with whoever and also refer back to them; track what interests me.

When I visit a url, I would like Porthole to be able to capture the url, title, and category and then I can add a description if I want to or AI could do it for me.


The listicle story should include:
- an authenticated user to save it 
- ability to add, edit, and delete listicle items 
- a listicle item requires have a url, title, and category - a description could be optional
- when the listicle is created, it will have created date and then updated date 
- a listicle is a list of listicle items
- ability to create the listicle with a default title of this current month

state machine states
- idle
- edit
- loading
- saving
- error
- success
- failure

status
- unsaved
- saved
- updated
- deleted
*/

// Build Form State machine

const buildListicleMachine = createMachine({
  id: "buildListicle",
  initial: "idle",
  title: "",
  description: "",
  context: {
    userAccountId: null,
    anonUserAccountId: null,
    listicleItems: [], // I don't want to repeat this is the child machine!
    title: null,
    error: null,
    enteringTitle: null, // as the user types the title, it will be stored here until they save
    created_at: null,
    updated_at: null,
    status: "unsaved",
    loadListiceResponse: null,
    updateListiceResponse: null,
    saveListiceResponse: null,
    isExistingListicle: null,
    lastSavedListicleTitle: null,
    loadFeedback: null,
    updateFeedback: null,
    saveFeedback: null,
    domain: "localhost:5000",
  },
  states: {
    idle: {
      on: {
        ...MANAGE_LISTICLE_ITEM_STATES,
      },
    },
    ...SAVING_LISTICLE_EVENTS,
    ...SAVING_LISTICLE_ITEM_EVENTS,
    ...LOADING_LISTICLE_EVENTS,
    ...UPDATING_LISTICLE_ITEM_EVENTS,
    ...DELETING_LISTICLE_ITEM_EVENTS,
  },
});

export default buildListicleMachine;
