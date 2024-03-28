import React, { useEffect } from "react";
import {
  Image,
  Column,
  Row,
  SubHeadline,
  Form,
  TextInput,
  Button,
  Label,
  Paragraph,
} from "../../";
import { useMachine } from "@xstate/react";
import { registrationMachine } from "./registration-machine";
import styles from "./registration.module.css";
import clsx from "clsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import PasswordStrengthHelper from "./password-strength-helper";
import RegistrationForm from "./registration-form";
import RegistrationResponse from "./registration-response";

const FieldRow = ({ children }) => {
  return <Row customClass={styles.fieldRow}>{children}</Row>;
};

const Registration = ({ config: { text, hasBackground, width = 500 } }) => {
  const [state, send] = useMachine(registrationMachine);

  console.log("Registration state: ", state);

  const toggleEye = () => {
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

  useEffect(() => {
    send({
      type: "SET_DOMAIN",
      value: "http://localhost:5000",
    });
  }, []);

  const {
    isPasswordPlainText,
    isPasswordFocussed,
    password,
    isPasswordStrong,
    isUsernameValid,
    isEmailValid,
    hasSendBeenClicked,
    registrationResponse,
    isRegistrationSuccessful,
  } = state.context;

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
      console.log("getBorderColorStyle: hasSendBeenClicked ", customStyle);
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

      <PasswordStrengthHelper
        isPasswordFocussed={isPasswordFocussed}
        candidatePassword={password}
      />

      {isRegistrationSuccessful ? (
        <RegistrationResponse response={registrationResponse} />
      ) : (
        <RegistrationForm
          state={state}
          send={send}
          handleFocusOnPassword={handleFocusOnPassword}
          handleBlurOnPassword={handleBlurOnPassword}
          toggleEye={toggleEye}
        />
      )}
    </Column>
  );
};

export default Registration;
