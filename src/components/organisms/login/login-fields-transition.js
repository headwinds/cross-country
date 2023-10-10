import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// components
import { TextInput, Column, Row, Label } from '../../';

// styles
import clsx from 'clsx';
import styles from './login.module.css';

const Field = ({ text, onTextChange, value, type = 'text', isValid = false, isUntouched = true }) => {
  return (
    <Row customClass={styles.login__row}>
      <Label
        htmlFor={text.toLowerCase()}
        customClass={clsx(styles.login__label, { [styles.login__label_valid]: isValid && !isUntouched })}
      >
        {text}
      </Label>
      <TextInput
        id={text.toLowerCase()}
        onTextChange={onTextChange}
        value={value}
        customClass={styles.login__input}
        placeholder={`enter your ${text.toLowerCase()}`}
        type={type}
      />
    </Row>
  );
};

const LoginFieldsTransition = ({
  isAnimated,
  onUsernameChange,
  usernameValue,
  onPasswordChange,
  passwordValue,
  isAuthenticated,
}) => {
  // usernanem animations
  const usernameStart = { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' };
  const usernameEnter = { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 500 };
  const usernameLeave = { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' };
  const [usernameStyles, usernameApi] = useSpring(() => usernameStart);

  // passowrd animations
  const playAnimation = (api, config) => {
    api.start(config);
  };

  const passwordStart = { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' };
  const passwordEnter = { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 700 };
  const passwordLeave = { opacity: 0, transform: 'translate3d(200px, 0px, 0px)', delay: 100 };
  const [passwordStyles, passwordApi] = useSpring(() => passwordStart);

  // we want to parent to start the both animations
  useEffect(() => {
    if (!isAuthenticated) {
      playAnimation(usernameApi, usernameEnter);
      playAnimation(passwordApi, passwordEnter);
    } else {
      playAnimation(usernameApi, usernameLeave);
      playAnimation(passwordApi, passwordLeave);
    }
  }, [isAuthenticated]);

  const renderLoginFields = () => {
    if (isAnimated) {
      return (
        <Column customStyle={{ padding: 0 }}>
          <animated.div style={usernameStyles}>
            <Field text="Username" onTextChange={onUsernameChange} value={usernameValue} />
          </animated.div>

          <animated.div style={passwordStyles}>
            <Field text="Password" type="password" onTextChange={onPasswordChange} value={passwordValue} />
          </animated.div>
        </Column>
      );
    }

    return (
      <Column customStyle={{ padding: 0 }}>
        <Field text="Username" onTextChange={onUsernameChange} value={usernameValue} />
        <Field text="Password" type="password" onTextChange={onPasswordChange} value={passwordValue} />
      </Column>
    );
  };

  return renderLoginFields();
};

export default LoginFieldsTransition;
