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

const FieldRow = ({ children }) => {
  return <Row customClass={styles.fieldRow}>{children}</Row>;
};

const Registration = ({ config: { text, hasBackground, width = 500 } }) => {
  const [state, send] = useMachine(registrationMachine);

  console.log("Registration state: ", state);

  const handleFormSubmit = () => {};

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

  const { isPasswordPlainText, isPasswordFocussed, password } = state.context;

  return (
    <Column hasBackground={hasBackground} customStyle={{ width }}>
      <SubHeadline text={text} />

      <PasswordStrengthHelper
        isPasswordFocussed={isPasswordFocussed}
        candidatePassword={password}
      />

      <Form>
        <Row customStyle={{ alignItems: "flex-start" }}>
          <Column customStyle={{ padding: 0 }}>
            {/* TODO: move to new profile component
            <FieldRow>
              <Label>First Name</Label>
              <TextInput
                value={state.context.firstName}
                onTextChange={(text) =>
                  send({
                    type: "TYPING_FIRST_NAME",
                    value: text,
                  })
                }
              />
            </FieldRow>
            <FieldRow>
              <Label>Last Name</Label>
              <TextInput
                value={state.context.lastName}
                onTextChange={(value) =>
                  send({
                    type: "TYPING_LAST_NAME",
                    value,
                  })
                }
              />
            </FieldRow>
            */}
            <FieldRow>
              <Label>Email</Label>
              <TextInput
                onTextChange={(value) =>
                  send({
                    type: "TYPING_EMAIL",
                    value,
                  })
                }
              />
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
            <FieldRow></FieldRow>
            <FieldRow></FieldRow>
            <FieldRow>
              <Button onClick={() => toggleEye()} customClass={styles.icon}>
                {isPasswordPlainText ? (
                  <EyeSlash size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </Button>
            </FieldRow>
          </Column>
        </Row>
      </Form>
    </Column>
  );
};

export default Registration;
