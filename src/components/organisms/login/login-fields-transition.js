import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';

// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline } from '../../';
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

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

const LoginFieldsTransition = ({ isAnimated, onUsernameChange, usernameValue, onPasswordChange, passwordValue }) => {
  const data = [1];

  const transRef = useSpringRef();

  const [usernameTransitions, usernameApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 500 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' },
  }));

  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 700 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)', delay: 100 },
  }));

  // we want to parent to start the both animations
  useEffect(() => {
    transRef.start();
  }, []);

  const renderLoginFields = () => {
    if (isAnimated) {
      return (
        <Column customStyle={{ width: 400 }}>
          {usernameTransitions(style => (
            <animated.div style={style}>
              <Field text="Username" onTextChange={onUsernameChange} value={usernameValue} />
            </animated.div>
          ))}
          {passwordTransitions(style => (
            <animated.div style={style}>
              <Field text="Password" type="password" onTextChange={onPasswordChange} value={passwordValue} />
            </animated.div>
          ))}
        </Column>
      );
    }

    return (
      <Column customStyle={{ width: 400 }}>
        <Field text="Username" onTextChange={onUsernameChange} value={usernameValue} />
        <Field text="Password" type="password" onTextChange={onPasswordChange} value={passwordValue} />
      </Column>
    );
  };

  return renderLoginFields();
};

export default LoginFieldsTransition;
