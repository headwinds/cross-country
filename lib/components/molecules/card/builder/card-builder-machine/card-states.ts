/*
minimum helper file to separate the states into its own file to keep the main file clean and thin

It complements the template-service-events.ts file

You can copy and paste this file into your project to get started more quickly.
*/

import { assign } from "xstate";
import { COMMON_STATES } from "./platform-states-common";
import { AMAZON_STATES } from "./platform-states-amazon";

export const CARD_STATES = {
  ...COMMON_STATES,
  ...AMAZON_STATES,
};
