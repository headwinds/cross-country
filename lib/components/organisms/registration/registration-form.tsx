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
import RegistrationFeedback from "./registration-feedback";
import SocialEmail from "./social-email";
import type {
  SocialUser,
  RegistrationEvent,
  RegistrationResponse,
} from "./registration";

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

interface RegistrationFormProps {
  state: unknown;
  send: (event: RegistrationEvent) => void;
  handleFocusOnPassword: () => void;
  handleBlurOnPassword: () => void;
  handleToggleEye: (e: MouseEvent) => void;
  onLoginClick: () => void;
  onChange: (event: RegistrationEvent) => void;
  socialUser?: SocialUser;
  hasHorizontalLine?: boolean;
  message?: string;
  registrationResponse: RegistrationResponse;
}

const RegistrationForm = ({
  state,
  send,
  handleFocusOnPassword,
  handleBlurOnPassword,
  handleToggleEye,
  onLoginClick,
  onChange,
  socialUser,
  hasHorizontalLine = true,
  message,
  registrationResponse,
}: RegistrationFormProps) => {
  const {
    isPasswordPlainText,
    isPasswordFocussed,
    password,
    isPasswordStrong,
    isUsernameValid,
    isEmailValid,
    isConfirmPasswordValid,
    hasSendBeenClicked,
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
        case "confirmPassword":
          borderColor = isConfirmPasswordValid ? "green" : "red";
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
          {!socialUser ? (
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
          ) : null}
          {hasHorizontalLine ? (
            <FieldRow>
              <HorizontalLine />
            </FieldRow>
          ) : null}
          <SocialEmail socialUser={socialUser} message={message} />
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

          {!socialUser ? (
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
              <Button onClick={handleToggleEye} customClass={styles.icon}>
                {isPasswordPlainText ? (
                  <EyeSlash size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </Button>
            </FieldRow>
          ) : null}

          {!socialUser ? (
            <FieldRow>
              <Label>Confirm</Label>
              <TextInput
                type={isPasswordPlainText ? "text" : "password"}
                onTextChange={(value) =>
                  send({
                    type: "TYPING_CONFIRM_PASSWORD",
                    value,
                  })
                }
                customStyle={{ ...getBorderColorStyle("confirmPassword") }}
                placeholder="Enter your password"
              />
              <Button onClick={handleToggleEye} customClass={styles.icon}>
                {isPasswordPlainText ? (
                  <EyeSlash size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </Button>
            </FieldRow>
          ) : null}

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
      </Row>
      <RegistrationFeedback
        response={registrationResponse}
        onLoginClick={onLoginClick}
      />
    </Form>
  );
};

export default RegistrationForm;
