/*
If you anticipate that your component might require a machine over useState or useReducer, you can use XState. 

You can copy and paste these 3 template files into your project to get started more quickly.
*/

import { createMachine } from "xstate";
import { CARD_STATES } from "./card-states";
import { CARD_URL_EVENTS } from "./card-service-events";

// card relates to a url aka a listicle item!
// platform urls from amazon, youtube, etc will have extra data like price, brand, affliate link, etc
const defaultData = {
  title: "",
  description: "",
  photoUrl: "",
  url: "",
  a11y: "",
  onClick: "",
};

const wispScript = [
  "Hello! Let's create a collection of products. Please begin by adding your first product url from any site. If you're interested in profitting from it, make sure it's the affliate url. I can help you check after you copy it in.",
];

const cardBuilderMachine = createMachine({
  id: "cardBuilderMachine",
  initial: "idle",
  context: {
    userAccountId: null,
    route: "/api/listicle/url-preview/",
    domain: "http://localhost:5000",
    data: { ...defaultData },
    isLoading: false,
    error: null,
    isEditing: true,
    step: 0,
    wispText: wispScript[0],
  },
  states: {
    idle: {
      on: {
        ...CARD_STATES,
      },
    },
    ...CARD_URL_EVENTS,
  },
});

export default cardBuilderMachine;
