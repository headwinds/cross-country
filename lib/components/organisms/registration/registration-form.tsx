// TODO type check
// @ts-nocheck
import {
  Column,
  Row,
  Form,
  TextInput,
  Button,
  Label,
  Paragraph,
  HorizontalLine,
} from "@cross-country/components";

import styles from "./registration.module.css";

import { Eye, EyeSlash } from "@phosphor-icons/react";
import RegistrationResponse from "./registration-response";

const FieldRow = ({
  children,
  customClass,
}: {
  children?: React.ReactElement | React.ReactElement[];
  customClass?: string;
}) => {
  return (
    <Row customClass={customClass ? customClass : styles.fieldRow}>
      {children}
    </Row>
  );
};

const RegistrationForm = ({
  state,
  send,
  handleFocusOnPassword,
  handleBlurOnPassword,
  toggleEye,
  onLoginClick,
  onChange,
}) => {
  const {
    isPasswordPlainText,
    isPasswordFocussed,
    password,
    isPasswordStrong,
    isUsernameValid,
    isEmailValid,
    hasSendBeenClicked,
    registrationResponse,
  } = state.context;

  const getBorderColorStyle = (field) => {
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
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
      };

      return customStyle;
    }

    return {};
  };

  return (
    <Form>
      <Row customStyle={{ alignItems: "flex-start" }}>
        <Column customStyle={{ padding: 0 }}>
          <FieldRow>
            <Label>Email</Label>
            <TextInput
              onTextChange={(value) =>
                send({
                  type: "TYPING_EMAIL",
                  value,
                })
              }
              customStyle={{ ...getBorderColorStyle("email"), width: 240 }}
              placeholder="Enter your email"
            />
          </FieldRow>
          <FieldRow>
            <HorizontalLine />
          </FieldRow>
          <FieldRow>
            <Label>Username</Label>
            <TextInput
              onTextChange={(value) =>
                send({
                  type: "TYPING_USERNAME",
                  value,
                })
              }
              customStyle={{ ...getBorderColorStyle("username") }}
              placeholder="Enter your username"
            />
          </FieldRow>

          <FieldRow>
            <Label>Password</Label>
            <TextInput
              type={isPasswordPlainText ? "text" : "password"}
              onTextChange={(value) =>
                send({
                  type: "TYPING_PASSWORD",
                  value,
                })
              }
              onFocus={handleFocusOnPassword}
              onBlur={handleBlurOnPassword}
              customStyle={{ ...getBorderColorStyle("password") }}
              placeholder="Enter your password"
            />
          </FieldRow>

          <FieldRow customClass={styles.send}>
            <Button
              onClick={(e) => {
                e.preventDefault();

                send({ type: "SUBMIT" });
              }}
              customClass={styles.sendButton}
            >
              Send
            </Button>
          </FieldRow>
        </Column>
        <Column customStyle={{ padding: 0 }}>
          {/* hack to get the password eye icon to appear on the right row  */}
          <FieldRow></FieldRow>
          <FieldRow></FieldRow>
          <FieldRow></FieldRow>
          <FieldRow>
            <Button onClick={() => toggleEye()} customClass={styles.icon}>
              {isPasswordPlainText ? <EyeSlash size={20} /> : <Eye size={20} />}
            </Button>
          </FieldRow>
        </Column>
      </Row>
      <Row>
        {registrationResponse ? (
          <FieldRow>
            <RegistrationResponse
              response={registrationResponse}
              onLoginClick={onLoginClick}
            />
          </FieldRow>
        ) : null}
      </Row>
    </Form>
  );
};

export default RegistrationForm;
