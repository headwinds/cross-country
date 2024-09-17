import Registration from "../registration";
import PasswordStrengthHelper from "../password-strength-helper";

export default {
  title: "components/organisms/registration",

  parameters: {
    xstate: true,
  },
};

export const Registration = {
  render: () => (
    <Registration
      config={{
        text: "Registration",
        hasBackground: false,
        onChange: () => {},
      }}
    />
  ),

  name: "registration",
};

export const PasswordHelperInvalid = {
  render: () => (
    <PasswordStrengthHelper
      isPasswordFocussed={true}
      candidatePassword="hellowo"
    />
  ),
  name: "password helper invalid",
};

export const PasswordHelperValid = {
  render: () => (
    <PasswordStrengthHelper
      isPasswordFocussed={true}
      candidatePassword="Hello1world!"
    />
  ),
  name: "password helper valid",
};
