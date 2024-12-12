import { assign, fromPromise } from "xstate";

type RegistrationInputType = {
  email: string;
  username: string;
  password: string;
  isPasswordStrong: boolean;
  isEmailValid: boolean;
  isUsernameValid: boolean;
  domain?: string;
  successMessage: string;
  failedMessage: string;
  somethingWentWrongMessage: string;
};

// TODO: don't hardcode this as it might change and will be different for other APIs
const successMessage = "Please check your email to verify.";

const postRegistration = fromPromise<string[], RegistrationInputType>(
  async ({ input }: RegistrationInputType) => {
    // is everything valid?
    const {
      isEmailValid,
      isUsernameValid,
      isPasswordStrong,
      username,
      password,
      email,
      successMessage,
      failedMessage,
    } = input as RegistrationInputType;

    if (isEmailValid && isUsernameValid && isPasswordStrong) {
      return {
        message: successMessage,
        username,
        password,
        email,
        hasError: false,
      };
    } else {
      return {
        message: failedMessage,
        username,
        password,
        email,
        hasError: true,
      };
    }
  }
);

const POSTING_REGISTRATION = {
  invoke: {
    id: "postRegistration",
    src: postRegistration,
    input: ({ context }) => {
      return {
        email: context.email,
        username: context.username,
        password: context.password,
        domain: context.domain,
        isEmailValid: context.isEmailValid,
        isUsernameValid: context.isUsernameValid,
        isPasswordStrong: context.isPasswordStrong,
        successMessage: context.successMessage,
        failedMessage: context.failedMessage,
        somethingWentWrongMessage: context.somethingWentWrongMessage,
      };
    },
    onDone: {
      target: "idle",
      actions: assign({
        registrationResponse: ({ context, event }) => {
          return event.output;
        },
        isRegistrationSuccessful: ({ context, event }) => {
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
          return { message: context.somethingWentWrongMessage };
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
          return { message: context.failedMessage };
        },
      }),
    },
  },
};

export const POSTING_REGISTRATION_EVENTS = {
  POSTING_REGISTRATION,
  POSTING_REGISTRATION_ERROR,
};
