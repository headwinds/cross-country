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
  HorizontalLine,
} from "../../";
import { useMachine } from "@xstate/react";
import { registrationMachine } from "./registration-machine";
import styles from "./registration.module.css";
import clsx from "clsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import PasswordStrengthHelper from "./password-strength-helper";

const FieldRow = ({ children }) => {
  return <Row customClass={styles.fieldRow}>{children}</Row>;
};

const RegistrationForm = ({
  state,
  send,
  handleFocusOnPassword,
  handleBlurOnPassword,
  toggleEye,
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
        borderWidth: 2,
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
              customStyle={{ ...getBorderColorStyle("email") }}
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

          {registrationResponse ? (
            <FieldRow>
              <Paragraph>{registrationResponse?.message}</Paragraph>
            </FieldRow>
          ) : null}
        </Column>
        <Column customStyle={{ padding: 0 }}>
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
    </Form>
  );
};

export default RegistrationForm;
