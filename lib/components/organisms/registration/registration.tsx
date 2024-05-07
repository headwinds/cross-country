import { useEffect } from "react";
import { Column, Row, SubHeadline } from "../../";
import { useMachine } from "@xstate/react";
import { registrationMachine } from "./registration-machine";
import styles from "./registration.module.css";
import PasswordStrengthHelper from "./password-strength-helper";
import RegistrationForm from "./registration-form";
import RegistrationResponse from "./registration-response";

const FieldRow = ({ children }) => {
  return <Row customClass={styles.fieldRow}>{children}</Row>;
};

interface RegistrationProps {
  config: {
    text?: string;
    hasBackground?: boolean;
    width?: number;
    isStrongPasswordEnforced?: boolean;
    onLoginClick: () => void;
    onChange: (event: any) => void;
  };
}

const Registration = ({
  config: {
    text,
    hasBackground,
    width = 600,
    isStrongPasswordEnforced = true,
    onLoginClick,
    onChange,
  },
}) => {
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

  useEffect(() => {
    send({
      type: "SET_DOMAIN",
      value: "http://localhost:5000",
    });
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

      <PasswordStrengthHelper
        isPasswordFocussed={isPasswordFocussed}
        candidatePassword={password}
      />

      <RegistrationForm
        state={state}
        send={send}
        handleFocusOnPassword={handleFocusOnPassword}
        handleBlurOnPassword={handleBlurOnPassword}
        toggleEye={toggleEye}
        onLoginClick={onLoginClick}
        onChange={onChange}
      />
    </Column>
  );
};

export default Registration;
