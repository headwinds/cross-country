import { assign, fromPromise } from "xstate";
import { getUserOrAnonUserRoute } from "./util";

type RegistrationInputType = {
  email: string;
  username: string;
  password: string;
};

// TODO: don't hardcode this as it might change and will be different for other APIs
const successMessage = "Please check your email to verify.";

const postRegistration = fromPromise<string[], RegistrationInputType>(
  async ({ input }) => {
    const { domain } = input;

    // is everything valid?
    const {
      isEmailValid,
      isUsernameValid,
      isPasswordStrong,
      username,
      password,
      email,
    } = input;

    if (isEmailValid && isUsernameValid && isPasswordStrong) {
      try {
        const response = await fetch(`${domain}/api/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, email }),
        });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error("Registration failed", error);
        return { message: "Registration failed - Please try again later" };
      }
    } else {
      console.error("Registration validation failed");
      return { message: "Please fix any form errors" };
    }
  }
);

const POSTING_REGISTRATION = {
  invoke: {
    id: "postRegistration",
    src: postRegistration,
    input: ({ context }) => {
      console.log("Machine POSTING_REGISTRATION");
      return {
        email: context.email,
        username: context.username,
        password: context.password,
        domain: context.domain,
        isEmailValid: context.isEmailValid,
        isUsernameValid: context.isUsernameValid,
        isPasswordStrong: context.isPasswordStrong,
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        registrationResponse: ({ context, event }) => {
          console.log("REGISTRATION respoonse", event.output);
          return event.output;
        },
        isRegistrationSuccessful: ({ context, event }) => {
          console.log("REGISTRATION success", event.output);
          const isRegistrationSuccessful =
            event.output.message === successMessage;
          return isRegistrationSuccessful;
        },
      }),
    },
    onError: {
      target: "POSTING_REGISTRATION_ERROR",
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine posting onError", event);
          //const {context, event } = event;
          return { message: "Something went wrong" };
        },
      }),
    },
  },
};

const POSTING_REGISTRATION_ERROR = {
  on: {
    RETRY: "idle",
    SET_ERROR: {
      actions: assign({
        error: ({ context, event }) => {
          console.log("Machine SET_ERROR");
          return { message: "Registration failed - Please try again later" };
        },
      }),
    },
  },
};

export const POSTING_REGISTRATION_EVENTS = {
  POSTING_REGISTRATION,
  POSTING_REGISTRATION_ERROR,
};
