import { useEffect } from "react";
import { Column, Row, SubHeadline } from "../../";
import { useMachine } from "@xstate/react";
import { registrationMachine } from "./registration-machine";
import styles from "./registration.module.css";
import PasswordStrengthHelper from "./password-strength-helper";
import RegistrationForm from "./registration-form";

const FieldRow = ({ children }) => {
  return <Row customClass={styles.fieldRow}>{children}</Row>;
};

/*
We want to encourage the user to first connect to social network that provides their email address
so that we can leverage their social network to verify their identity and focus on building our indie product.

For now, we will only support Google Auth but may add more in the future like Apple or Microsoft
which should have a similar API and flow to Google Auth.
*/

export type RegistrationResponse = {
  hasError: boolean;
  message: string;
};

export type RegistrationEvent = {
  type: string;
  value?: string;
};

export type SocialUser = {
  platform: "google" | "apple" | "microsoft" | string;
  email: string;
};

export interface RegistrationProps {
  text?: string;
  message?: string;
  hasBackground?: boolean;
  width?: number;
  isStrongPasswordEnforced?: boolean;
  onLoginClick?: () => void | undefined | null;
  onChange: (event: RegistrationEvent) => void;
  socialUser?: SocialUser;
  hasHorizontalLine?: boolean;
  isApiCallSuccessful?: boolean;
  registrationResponse?: RegistrationResponse;
}

const Registration = ({
  text = "Registration",
  message,
  hasBackground = false,
  width = 600,
  isStrongPasswordEnforced = true,
  onLoginClick,
  onChange,
  socialUser,
  hasHorizontalLine = true,
  isApiCallSuccessful,
  registrationResponse,
}: RegistrationProps) => {
  const [state, send] = useMachine(registrationMachine);

  const handleToggleEye = (e) => {
    e.preventDefault();
    send({
      type: "TOGGLE_EYE",
    });
  };

  const handleFocusOnPassword = () => {
    send({
      type: "SET_FOCUS_ON_PASSWORD",
    });
  };

  const handleBlurOnPassword = () => {
    send({
      type: "REMOVE_FOCUS_ON_PASSWORD",
    });
  };

  const {
    isPasswordFocussed,
    password,
    isPasswordStrong,
    isUsernameValid,
    isEmailValid,
    hasSendBeenClicked,
  } = state.context;

  useEffect(() => {
    send({
      type: "SET_DOMAIN",
      value: "http://localhost:5000",
    });
  }, []);

  useEffect(() => {
    if (socialUser) {
      const randomPassword = Math.random().toString(36).slice(-8);
      const generatedPassword = `${randomPassword}T@s1w!0S`;
      send({
        type: "SET_SOCIAL_USER",
        value: { socialUser, generatedPassword },
      });
    }
  }, []);

  // broadcast the registration response to the parent component
  useEffect(() => {
    onChange(registrationResponse);
  }, [registrationResponse]);

  const getBorderColorStyle = (field) => {
    console.log(
      "getBorderColorStyle: hasSendBeenClicked ",
      hasSendBeenClicked,
      field
    );
    if (hasSendBeenClicked) {
      let borderColor = "";
      switch (field) {
        case "email":
          borderColor = isEmailValid ? "green" : "red";
          break;
        case "username":
          borderColor = isUsernameValid ? "green" : "red";
          break;
        case "password":
          borderColor = isPasswordStrong ? "green" : "red";
          break;
        default:
          borderColor = "";
      }

      const customStyle = {
        borderColor,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 4,
      };
      return customStyle;
    }

    return {};
  };

  return (
    <Column
      hasBackground={hasBackground}
      customClass={styles.registration}
      customStyle={{ width }}
    >
      <SubHeadline text={text} />

      {isStrongPasswordEnforced ? (
        <PasswordStrengthHelper
          isPasswordFocussed={isPasswordFocussed}
          candidatePassword={password}
        />
      ) : null}

      <RegistrationForm
        state={state}
        send={send}
        handleFocusOnPassword={handleFocusOnPassword}
        handleBlurOnPassword={handleBlurOnPassword}
        handleToggleEye={handleToggleEye}
        onLoginClick={onLoginClick}
        onChange={onChange}
        socialUser={socialUser}
        hasHorizontalLine={hasHorizontalLine}
        message={message}
        registrationResponse={registrationResponse}
      />
    </Column>
  );
};

export default Registration;
