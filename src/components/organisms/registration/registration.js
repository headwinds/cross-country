import React, { Component } from 'react';
import { Image, Column, Row, SubHeadline, Form, TextInput, Button, Label } from '../../';
import { useMachine } from '@xstate/react';
import { registrationMachine } from './registration-machine';
import styles from './registration.scss';
import clsx from 'clsx';

const Registration = ({ config: { text, hasBackground } }) => {
  const [state, send] = useMachine(registrationMachine);

  const handleFormSubmit = () => {};

  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <Form>
        <Row>
          <Label>First Name</Label>
          <TextInput
            value={state.context.firstName}
            onChange={e =>
              send({
                type: 'TYPING_FIRST_NAME',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row>
          <Label>Last Name</Label>
          <TextInput
            value={state.context.lastName}
            onChange={e =>
              send({
                type: 'TYPING_LAST_NAME',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row>
          <Label>Email</Label>
          <TextInput
            value={state.context.email}
            onChange={e =>
              send({
                type: 'TYPING_EMAIL',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row>
          <Label>Username</Label>
          <TextInput
            value={state.context.username}
            onChange={e =>
              send({
                type: 'TYPING_USERNAME',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row>
          <Label>Password</Label>
          <TextInput
            type={'password'}
            value={state.context.password}
            onChange={e =>
              send({
                type: 'TYPING_PASSWORD',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row customClass={styles.send}>
          <Button
            onClick={e => {
              e.preventDefault();
              send('SUBMIT');
            }}
            customClass={styles.sendButton}
          >
            Send
          </Button>
        </Row>
      </Form>
    </Column>
  );
};

export default Registration;
