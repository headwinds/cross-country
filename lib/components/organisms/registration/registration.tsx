import React, { Component } from "react";
import {
  Image,
  Column,
  Row,
  SubHeadline,
  Form,
  TextInput,
  Button,
  Label,
} from "../../";
import { useMachine } from "@xstate/react";
import { registrationMachine } from "./registration-machine";
import styles from "./registration.module.css";
import clsx from "clsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";

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

  const isPasswordPlainText = state.context.isPasswordPlainText;

  return (
    <Column hasBackground={hasBackground} customStyle={{ width }}>
      <SubHeadline text={text} />
      <Form>
        <Row customStyle={{ alignItems: "flex-start" }}>
          <Column customStyle={{ padding: 0 }}>
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
            <FieldRow>
              <Label>Email</Label>
              <TextInput
                value={state.context.email}
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
                value={state.context.username}
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
                value={state.context.password}
                onTextChange={(value) =>
                  send({
                    type: "TYPING_PASSWORD",
                    value,
                  })
                }
              />
            </FieldRow>
            <FieldRow customClass={styles.send}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  send("SUBMIT");
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
            <FieldRow></FieldRow>
            <FieldRow></FieldRow>
            <FieldRow>
              {" "}
              <Button onClick={() => toggleEye()} customStyle={{ width: 50 }}>
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
